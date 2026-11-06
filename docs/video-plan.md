# Demo video plan

A shot list for a video under 3 minutes, recorded by the author from a real run. Nothing in the video is staged or re-typed: if a moment below does not happen in the run, it is not in the video, and the README's "Not yet observed" list keeps the item.

Target length: 2 minutes 45 seconds. Record the run in full first, then cut. Waiting for an agent to reply is cut or sped up, with a "sped up" label on screen.

## Shots, in order

| # | Time | Window on screen | What is seen | Narration, one line |
|---|---|---|---|---|
| 1 | 0:00-0:12 | Title card, then the README diagram in an editor | The name, and the one-room diagram | "Exam Room: a tutor that teaches, a separate examiner that marks, and one Switch room that remembers." |
| 2 | 0:12-0:30 | Switch Console, Templates | Use template, the wizard inputs filled in (`team`, the two folder inputs with the paths blurred), Create all | "One template makes the room and both agents, each in its own folder of the repo." |
| 3 | 0:30-0:42 | Switch Console, the room's page | The room with two agents and one person, and the Exam rules room document open | "The rules live in the room as a document, and both agents get them." |
| 4 | 0:42-1:00 | Messaging app, the room's channel | The tutor's hello, a lesson being chosen, a few lines of teaching, then the tutor mentioning the examiner | "The tutor teaches one lesson, then hands over by name. It never marks." |
| 5 | 1:00-1:25 | Messaging app, the room's channel | Three questions answered by the person, at least two wrong, then the result block with `VERDICT: FAIL` and a named weak spot | "Three questions, a fixed result block, and a real fail with the weak spot named." |
| 6 | 1:25-1:45 | Messaging app, the room's channel | The examiner mentioning the tutor with the weak spot, and the tutor re-teaching that section and nothing else | "The examiner tells the tutor the weak spot, and the tutor re-teaches exactly that." |
| 7 | 1:45-2:05 | Messaging app, the room's channel | The retake with different question ids, then the result block with `VERDICT: PASS` | "The retake uses new questions, and this time it is a pass." |
| 8 | 2:05-2:20 | Messaging app, the room's channel | The tutor asked to open a file in the examiner's folder, and the refusal | "The tutor cannot open the bank: its file tools stop at its own folder." |
| 9 | 2:20-2:40 | Switch Console showing both agents restarted, then the messaging app | A new session on the same lesson. The examiner's first message names the earlier result block it started from | "Both agents restarted. The only memory is the room's log, and the examiner starts from it." |
| 10 | 2:40-2:45 | End card | The repo address, and "see the README for what is enforced and what is not" | "The repo says what is enforced, what is convention, and what has not been seen yet." |

If the video runs long, shot 3 goes first, then shot 8.

## Moments that must be visible

Each of these has to be readable on screen at normal speed for at least two seconds, with the message's author and time in view.

1. **A real fail.** A result block with `VERDICT: FAIL`, a score below the pass mark and a `WEAK SPOT` line. The person's wrong answers are in view above it.
2. **The re-teach of the named weak spot.** The tutor's message after the fail, where the section it teaches matches the `WEAK SPOT` line. Both are on screen together if they fit, otherwise one after the other without a cut between them.
3. **A pass.** A later result block on the same topic with `VERDICT: PASS`, and question ids that differ from the failed attempt.
4. **The room log as the memory in a second session.** After both agents restart, the examiner's first message in the new session names an earlier result block, and the scroll back up to that block is shown.

## Claims and where the evidence will be

The video makes these claims. Each needs a saved copy of the room log behind it before the video is published. The date in a file name is the day of the rehearsal.

| Claim made in the video | Evidence file | Status |
|---|---|---|
| The examiner failed a real attempt and named a weak spot | `docs/evidence/rehearsal-exam-<date>.md` | pending |
| The tutor re-taught the named weak spot | `docs/evidence/rehearsal-exam-<date>.md` | pending |
| The retake used different questions and ended in a pass | `docs/evidence/rehearsal-exam-<date>.md` | pending |
| The result blocks quoted no answer, worked figure or marking note | `docs/evidence/rehearsal-exam-<date>.md` | pending |
| The tutor was refused when it tried to open the examiner's folder | `docs/evidence/rehearsal-exam-<date>.md` | pending |
| After both agents restarted, the examiner began from an earlier weak spot in the room log | `docs/evidence/rehearsal-memory-<date>.md` | pending |
| The template created the room and both agents through the wizard | `docs/evidence/rehearsal-exam-<date>.md` | pending |

A claim whose row is still pending when the video is cut comes out of the narration. When a row is filled, the matching line moves out of "Not yet observed" in the README and into `docs/switch-notes.md` with its date.

An overrule of a mark is not in the video. If the rehearsal includes one, it is saved in the exam evidence file and the README is updated.

## Before recording

Screen:

- [ ] Close every window, tab and app that is not Switch Console, the messaging app or the editor showing this repo.
- [ ] Turn off notifications for the whole recording.
- [ ] Hide the bookmarks bar, the dock or taskbar and the menu bar clock if they show anything personal.
- [ ] Use a messaging server and channel made for this recording, with no other channels, members or direct messages in the sidebar.
- [ ] Look at every frame of the wizard shot for absolute paths. They show the account name. Blur them or crop the shot.

Secrets:

- [ ] No terminal on screen at any point. If one is needed, clear it first and check that the prompt shows no folder or account name.
- [ ] No settings page showing a token, key, webhook address or invite link, in Console or in the messaging app.
- [ ] Watch the finished video once from start to finish with the sound off, looking only for secrets, before publishing it.

Names:

- [ ] No real names of people, companies or clients on screen: use a display name made for the recording, and `study` as the team prefix.
- [ ] The lessons and the bank name only made-up businesses. Do not add examples from real work while answering.
- [ ] The narration names no person and no company other than the tools being shown.

Run:

- [ ] The check from step 7 of the README setup has been done on this exact room, and both refusals were seen.
- [ ] The room is new, so the log holds only this run.
- [ ] The wrong answers for the fail are typed live, to the questions as asked. Do not open the bank to plan them.
- [ ] The room log is saved to the two evidence files before the room is archived.
