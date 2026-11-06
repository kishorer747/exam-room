// node --test "templates/*.test.mjs"
// Text checks only, because the repo has no YAML dependency. Applying the template is the real test.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';

const read = (rel) => readFileSync(new URL(rel, import.meta.url), 'utf8');
const template = read('./exam-room.template.yaml');
const rules = read('../material/exam-rules.md');

const dedent = (text, spaces) =>
  text
    .split('\n')
    .map((line) => line.slice(spaces))
    .join('\n');

const tutor = template.slice(template.indexOf('- name: "{team}-tutor"'), template.indexOf('- name: "{team}-examiner"'));
const examiner = template.slice(template.indexOf('- name: "{team}-examiner"'), template.indexOf('room:\n'));

test('the room document is the rules file, word for word', () => {
  const start = template.indexOf('        # Exam rules');
  const end = template.indexOf('\nkickoff:', start);
  assert.notEqual(start, -1);
  assert.equal(dedent(template.slice(start, end), 8).trim(), rules.trim());
});

test('no agent bypasses permission checks', () => {
  assert.doesNotMatch(template, /auto_approve/);
});

test('both agents run on claude, and no other provider is named', () => {
  assert.match(tutor, /provider: claude\n/);
  assert.match(examiner, /provider: claude\n/);
  assert.deepEqual(template.match(/provider: \S+/g), ['provider: claude', 'provider: claude']);
});

test('each agent works in its own folder param, and both are directory inputs', () => {
  assert.match(tutor, /directory: "\{lessons_dir\}"/);
  assert.match(examiner, /directory: "\{bank_dir\}"/);
  assert.match(template, /  lessons_dir:\n    type: directory\n/);
  assert.match(template, /  bank_dir:\n    type: directory\n/);
  assert.deepEqual(template.match(/\n    directory: .*/g), ['\n    directory: "{lessons_dir}"', '\n    directory: "{bank_dir}"']);
});

test('the tutor is not told where the bank is', () => {
  assert.doesNotMatch(tutor, /examiner-bank|bank_dir/);
});

test('no agent is told to run a command or copy files', () => {
  const body = template
    .split('\n')
    .filter((line) => !line.startsWith('#'))
    .join('\n');
  assert.doesNotMatch(body, /`node |`date |`cp |curl|\bcopy\b|\brun (a|the|this) |\bcommand\b/i);
  assert.doesNotMatch(template, /\bcopy\b/i);
});

test('addressing is unchanged and the room keeps its bridge and private channel', () => {
  assert.deepEqual(template.match(/addressing: \S+/g), ['addressing: anyone', 'addressing: anyone']);
  assert.match(template, /  bridge:\n    type: bridge\n    description: .*\n    default: \[\$first\]\n/);
  assert.match(template, /\n  bridge: "\{bridge\}"\n  channel_type: channel_private\n/);
});

test('both working folders refuse Edit and Write', () => {
  for (const rel of ['../course/lessons/.claude/settings.json', '../examiner-bank/.claude/settings.json']) {
    const deny = JSON.parse(read(rel)).permissions.deny;
    assert.ok(deny.includes('Edit'), `${rel}: Edit`);
    assert.ok(deny.includes('Write'), `${rel}: Write`);
  }
});

test('the example user settings take the shell and web tools away and allow nothing extra', () => {
  const settings = JSON.parse(read('../docs/claude-settings.example.json'));
  assert.equal(settings.permissions.blockReadsOutsideWorkingDirectories, true);
  for (const tool of ['Bash', 'WebFetch', 'WebSearch']) {
    assert.ok(settings.permissions.deny.includes(tool), tool);
  }
  assert.equal('allow' in settings.permissions, false);
  assert.equal('enableAllProjectMcpServers' in settings, false);
});

test('neither working folder is given MCP tools', () => {
  for (const dir of ['../course/lessons/', '../examiner-bank/']) {
    assert.ok(!readdirSync(new URL(dir, import.meta.url)).includes('.mcp.json'), dir);
  }
});

test('the template and rules quote nothing from the marking notes', () => {
  const bankDir = new URL('../examiner-bank/', import.meta.url);
  for (const file of readdirSync(bankDir).filter((name) => name.endsWith('.md'))) {
    const bank = readFileSync(new URL(file, bankDir), 'utf8');
    const figures = bank.match(/[$£€₹]\s?\d[\d,.]*/g) ?? [];
    for (const figure of figures) {
      assert.ok(!template.includes(figure), `${file}: ${figure}`);
      assert.ok(!rules.includes(figure), `${file}: ${figure}`);
    }
  }
});

test('neither folder allows a shell, the web, sub-agents, file writing or the tools that manage Switch', () => {
  const never = ['Bash', 'WebFetch', 'WebSearch', 'Agent', 'Edit', 'Write', 'mcp__switch__create_agent', 'mcp__switch__create_room', 'mcp__switch__add_users_to_room', 'mcp__switch__archive_room', 'mcp__switch__run_template'];
  for (const rel of ['../course/lessons/.claude/settings.json', '../examiner-bank/.claude/settings.json']) {
    const { deny, blockReadsOutsideWorkingDirectories } = JSON.parse(readFileSync(new URL(rel, import.meta.url), 'utf8')).permissions;
    for (const tool of never) assert.ok(deny.includes(tool), `${rel} must deny ${tool}`);
    assert.equal(blockReadsOutsideWorkingDirectories, true, rel);
  }
  const example = JSON.parse(readFileSync(new URL('../docs/claude-settings.example.json', import.meta.url), 'utf8'));
  for (const tool of ['Bash', 'WebFetch', 'mcp__switch__create_agent']) assert.ok(example.permissions.deny.includes(tool), tool);
  assert.equal(example.enableAllProjectMcpServers, undefined);
});
