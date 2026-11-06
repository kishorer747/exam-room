# Exam rules

The tutor teaches. Only the examiner marks. A topic stays open until the examiner's result block says PASS.

The examiner asks three questions, one at a time, from its own bank, and marks each answer correct or incorrect. The pass mark is 2 of 3. After the third answer it posts one result block:

```
TOPIC: <lesson name>
QUESTIONS ASKED: <question ids>
SCORE: <n> of 3
PASS MARK: 2 of 3
WEAK SPOT: <label and lesson section, or none>
VERDICT: PASS | FAIL
```

Rules for the block:

- It never reveals an answer, a worked figure or a marking note. The tutor reads this room too.
- A failed exam sends the weak spot to the tutor by name, and the tutor re-teaches that spot.
- A retake uses questions from the same topic that have not been asked before, while any remain.

A person can overrule a mark. The examiner then posts a line starting `OVERRULE:`, naming the question id, the old mark, the new mark and who overruled it, followed by a corrected result block.

This room's log is the memory. At the start of a session the examiner reads earlier result blocks and overrules in the room, and begins with the most recent weak spot on the topic.

This is an honesty exam for self-study. The bank is in a public repo, so the person taking the exam can open it whenever they like, and only their own honesty stops them. The tutor is a different matter: it works in the lessons folder, the bank is in the examiner's folder, and the tutor's file tools stop at its own folder. That holds only while the settings file described in the README is in place.
