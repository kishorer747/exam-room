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

test('the room document is the rules file, word for word', () => {
  const start = template.indexOf('        # Exam rules');
  const end = template.indexOf('\nkickoff:', start);
  assert.notEqual(start, -1);
  assert.equal(dedent(template.slice(start, end), 8).trim(), rules.trim());
});

test('no agent bypasses permission checks', () => {
  assert.doesNotMatch(template, /auto_approve:\s*true/);
});

test('the tutor is not told where the bank is, and the examiner runs on the other vendor', () => {
  const tutor = template.slice(template.indexOf('- name: "{team}-tutor"'), template.indexOf('- name: "{team}-examiner"'));
  const examiner = template.slice(template.indexOf('- name: "{team}-examiner"'), template.indexOf('room:\n'));
  assert.doesNotMatch(tutor, /examiner-bank/);
  assert.match(examiner, /provider: codex/);
  assert.match(examiner, /examiner-bank/);
});

test('the template and rules quote nothing from the marking notes', () => {
  const bankDir = new URL('../examiner-bank/', import.meta.url);
  for (const file of readdirSync(bankDir)) {
    const bank = readFileSync(new URL(file, bankDir), 'utf8');
    const figures = bank.match(/[$£€₹]\s?\d[\d,.]*/g) ?? [];
    for (const figure of figures) {
      assert.ok(!template.includes(figure), `${file}: ${figure}`);
      assert.ok(!rules.includes(figure), `${file}: ${figure}`);
    }
  }
});
