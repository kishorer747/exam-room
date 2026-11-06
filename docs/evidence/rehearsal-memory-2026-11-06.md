# Rehearsal: does a new session start from the weak spots in the room log? 2026-11-06

**This is a rehearsal, not the recorded run.** As in `rehearsal-exam-2026-11-06.md`, the person's answers were sent
from the owner's Console chats, not typed in the room. Team `ex1`, the same room as that file, lesson 2.

## The test

1. Take the lesson 2 exam and fail it, so the room log holds a result block with weak spots (09:23:35Z, 1 of 3,
   `payback-ceiling-under-churn` and `payback-on-contribution`).
2. Kill both agents' processes.
3. Say only "I am back for another study session. I am ready for the exam on lesson 2." Name no weak spot.
4. See what the examiner asks first, and whether it says where it got that from.

## What happened to the agents' memory

| Agent | Before the kill | After | Private memory gone? |
|---|---|---|---|
| examiner | 5 processes, 5 session files, newest for the room `65410498` (09:21:39 to 09:23:58) | 1 new process. A **new** session file `498ecb1c`, first event 09:29:50, the tutor's hand-over. 6 files | **Yes** |
| tutor | 5 processes, 5 session files, newest `9ce05555` (from 09:15:20) | 1 new process. It **continued the same session file** `9ce05555`, which now runs to 09:24:46 | **No** |

Both agents were killed with `kill -9` at 09:24:21Z, confirmed as 0 matching processes. Console restarts an agent
when the next message arrives, and for the tutor it resumed the existing session, so killing the process does not
by itself remove an agent's private context. The examiner's fresh session is the part of this test that counts.
Nothing was written to either agent's folder: both folders are clean in git.

## What the fresh examiner did (09:29:50 to 09:30:16Z)

Its session record shows, in order: list its folder, connect to the room, read bank file 2, load the room document,
read the room's context. Then its first post:

> I read this room's log first. On this topic there is one earlier result block (message
> sw_285857d67d274240aa5f178a23e19bd5: FAIL, 1 of 3) and no overrules. Its most recent weak spot is
> payback-ceiling-under-churn, lesson section "Churn makes it longer, and can make it never". The one question written
> for that spot has already been asked, so I am starting with the unasked question that sits closest to it.

It then asked CAC-Q4, CAC-Q7 and CAC-Q5, none of them asked before, and the retake passed 3 of 3 at 09:32:54Z.

So the examiner, with no private memory of the earlier sitting, found the weak spot in the room log and cited the
message it came from. That is the acceptance test for this rehearsal, met for the examiner and not tested for the
tutor.

## Also seen

- The restarted tutor, with its old context, posted the re-teach it still owed before handing over. That is what a
  resumed session does; it says nothing about room memory.
- The examiner's 14 posts in this transcript were searched for 25 answer figures and marking-note phrases from bank
  file 2, outside the question text. No match. The tutor's 7 posts hold no bank content.
- The tutor said twice that while it is in one chat it does not see messages in the other. A person typing in the
  room would not meet this.

## Transcript

Every post by the two agents from the lesson 2 request to the retake's result block, in time order (UTC), from each
agent's session record. `<owner>` is the owner's messaging-app name. "Exam Room CM-Q1 Contribution Margin Answer" is
the owner's Console chat with the examiner; "the room it was addressed in" for the tutor is the owner's Console chat
except at 09:24:06, which is the exam room. The owner's own messages are not in this record. The answers given were:
CAC-Q1 correct; CAC-Q2 and CAC-Q3 wrong on purpose; CAC-Q4, CAC-Q7 and CAC-Q5 correct.

**09:19:05Z tutor** posts in the room it was addressed in, to ex1-examiner

> The person is ready for the exam on lesson 2 (02 CAC and payback). Please start it.

**09:19:39Z tutor** posts in the room it was addressed in

> The examiner is not in this chat, so I can't start the exam from here. It sits in ex1-exam-room, so I'm moving there now to ask it to start lesson 2 (CAC and payback). Answer its questions in that room. I'll be quiet there until its result block appears, and I won't see messages in this chat while I'm over there.

**09:20:10Z tutor** posts in ex1-exam-room, to ex1-examiner

> The person is ready for the exam on Lesson 2: CAC and payback. Please start it. For the log: I did not teach this lesson. They told me they read it on their own and asked to go straight to the exam. Their "ready" reached me through the Console chat from the workspace owner, as before, so I am passing it on here. I will stay quiet until your result block appears.
> 
> One note for the room: joining just now cut off another session of mine that was attending this room, so if something of mine stopped midway, that is why.

**09:20:36Z examiner** posts in ex1-exam-room, to <owner>

> Exam on Lesson 2: CAC and payback. Three questions, one at a time, pass mark 2 of 3.
> 
> I read this room's log first. It holds three result blocks and one overrule, all on Lesson 1 (sw_5e5ee0625448480a9c2a2ae9c5e813d4, sw_1b61d71c8bcf4fad89b03bd64d989d53, and the overrule in sw_de8ccc0a08084515a390fb548427f110, which left Lesson 1 at weak spot: none). There is no earlier result or overrule on this topic, so there is no weak spot to start from and I am beginning fresh.
> 
> Please answer yourself, here in the room or directly to me as before. An answer passed on by an agent does not count. A calculator is fine.
> 
> **CAC-Q1.** Illustrative figures. In one month, Marrow Hill Soap, a fictional business, spends $9,000 on ads, $1,500 on an agency fee, and half of a marketer's $5,000 salary on winning customers. It gains 400 new customers: 250 credited to paid channels and 150 from word of mouth. What are the fully loaded blended CAC and the fully loaded paid CAC? Which would you use to judge the paid channels, and why?

**09:21:21Z examiner** posts in ex1-exam-room, to <owner>

> Lesson 2, CAC-Q1: answer received and marked. It came directly from the workspace owner in my Console chat, as in Lesson 1, and counts as the person's own. The score comes in the result block after the third answer.
> 
> For the log: this exam was opened by another session of mine in this room, and this session has now taken over from it. Nothing is lost; CAC-Q1 stood as asked.
> 
> **CAC-Q2.** Illustrative figures. A fictional box sells at $40 a month with a contribution margin of $22.40. CAC is $52. The founder says: "52 divided by 40, so we get our money back in under two months." Ignoring churn, what is the right payback, and in which monthly box is the CAC recovered?

**09:21:45Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Your CAC-Q1 answer is counted as yours and marked for the Lesson 2 exam, and logged in ex1-exam-room. Score comes after the third answer. Second question:
> 
> **CAC-Q2.** Illustrative figures. A fictional box sells at $40 a month with a contribution margin of $22.40. CAC is $52. The founder says: "52 divided by 40, so we get our money back in under two months." Ignoring churn, what is the right payback, and in which monthly box is the CAC recovered?
> 
> One note: coming back to this chat cut off another session of mine that was attending it. If something of mine stopped midway here, that is why.

**09:22:31Z examiner** posts in ex1-exam-room, to <owner>

> Lesson 2, CAC-Q2: answer received and marked. Same route as before: sent to me directly by the workspace owner in my Console chat, after the question was posted here, and counted as the person's own. The score comes in the result block after the third answer.
> 
> For the log: this session has taken over from the earlier session of mine that asked CAC-Q2. Nothing is lost; CAC-Q1 and CAC-Q2 stand as asked. Last question:
> 
> **CAC-Q3.** Illustrative figures. A fictional box earns $22.40 contribution a month. CAC is $60. Every customer pays for box 1, and then a fixed percentage stay for each later box. In which box is the CAC recovered per customer won if monthly retention is 80%? What if monthly retention is 60%?

**09:23:05Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Your CAC-Q2 answer is counted as yours and marked, and logged in ex1-exam-room. Last question; the result block follows your answer.
> 
> **CAC-Q3.** Illustrative figures. A fictional box earns $22.40 contribution a month. CAC is $60. Every customer pays for box 1, and then a fixed percentage stay for each later box. In which box is the CAC recovered per customer won if monthly retention is 80%? What if monthly retention is 60%?

**09:23:35Z examiner** posts in ex1-exam-room

> All three answers are in. CAC-Q3 came the same way as the first two: sent to me directly by the workspace owner in my Console chat and counted as the person's own answer.
> 
> ```
> TOPIC: CAC and payback
> QUESTIONS ASKED: CAC-Q1, CAC-Q2, CAC-Q3
> SCORE: 1 of 3
> PASS MARK: 2 of 3
> WEAK SPOT: payback-ceiling-under-churn (lesson section "Churn makes it longer, and can make it never"); payback-on-contribution (lesson section "Payback uses contribution, not revenue")
> VERDICT: FAIL
> ```
> 
> Marks: CAC-Q1 correct, CAC-Q2 incorrect, CAC-Q3 incorrect. The topic stays open. A retake will use questions not asked yet. The person can overrule any mark by saying so.

**09:23:41Z examiner** posts in ex1-exam-room, to ex1-tutor

> Lesson 2 exam result is FAIL, 1 of 3 (result block in sw_285857d67d274240aa5f178a23e19bd5). Please re-teach these two weak spots, most recent first:
> 
> 1. payback-ceiling-under-churn, lesson section "Churn makes it longer, and can make it never".
> 2. payback-on-contribution, lesson section "Payback uses contribution, not revenue".
> 
> The person is still reaching us through the Console chats rather than this room, so you may need to teach there. Tell me here when they are ready for a retake. I will not share answers, figures or marking notes.

**09:23:52Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Lesson 2 result: FAIL, 1 of 3 (pass mark 2 of 3). CAC-Q1 correct, CAC-Q2 incorrect, CAC-Q3 incorrect. The result block is posted in ex1-exam-room.
> 
> Weak spots, by lesson section, most recent first:
> - payback-ceiling-under-churn: "Churn makes it longer, and can make it never"
> - payback-on-contribution: "Payback uses contribution, not revenue"
> 
> I can't say what the right answers were. I've asked the tutor to re-teach those two sections, and the topic stays open until a retake passes. The retake uses three questions you haven't seen.
> 
> If you think a mark is wrong, tell me which question and I'll record the overrule and post a corrected block.

**09:24:06Z tutor** posts in the room it was addressed in

> Got the Lesson 2 result. I'm re-teaching the two weak spots (payback-ceiling-under-churn, then payback-on-contribution) in the Console chat, since that is where the person is reaching me. I'll come back here to tell the examiner when they say they are ready to retake. While I'm in the Console chat I won't see messages addressed to me here.

**09:24:42Z tutor** posts in the room it was addressed in

> Before the retake: the examiner's Lesson 2 result was FAIL, 1 of 3, and it named two weak spots. I owed you a re-teach on them and had not posted it yet, so here it is, most recent first. All figures are invented for teaching; Tallow Street Beans is fictional.
> 
> **1. Churn and the ceiling** (section "Churn makes it longer, and can make it never")
> 
> Some customers leave, so each later box brings in less per customer won. Churn is 1 minus retention. Expected contribution from a box = the previous box's figure × retention.
> 
> At 90% retention with $13 contribution per box:
> - Box 1: 13.00, running total 13.00
> - Box 2: 11.70, running total 24.70
> - Box 3: 10.53, running total 35.23
> - Box 4: 9.48, running total 44.71
> - Box 5: 8.53, running total 53.24
> - Box 6: 7.68, running total 60.91
> 
> So a $60 CAC comes back in the **6th box**, not the 5th you get without churn.
> 
> The running total can never pass a ceiling: **contribution / churn**. At 70% retention (30% churn) the ceiling is 13 / 0.30 = $43.33. A $60 CAC is above that, so it **never** pays back, however long you wait.
> 
> Work it in this order:
> - First the ceiling. If CAC is above it, the answer is "never" and you stop.
> - If CAC is below it, build the running total box by box until it reaches CAC. That box is the answer.
> 
> **2. Payback uses contribution, not revenue** (section of the same name)
> 
> Dividing CAC by the price is wrong, because the price also has to pay for the coffee, shipping and the rest. Only the contribution is left to repay CAC.
> 
> - Wrong: 60 / 30 = 2 months.
> - Right: 60 / 13 = 4.6, so it is recovered during the **5th box**.
> 
> Boxes are whole, so always round up. After 4 boxes you have 52, still short of 60; the 5th takes you past it.
> 
> Ask me anything on either spot. You said you are ready, but that was before this re-teach reached you, so tell me once you have read it: are you ready to retake, or do you want more on one of these first?

**09:29:20Z tutor** posts in the room it was addressed in

> Good. I'm moving to ex1-exam-room now to ask the examiner to start the Lesson 2 retake. Answer its questions yourself, there or directly to it as before. I'll be quiet until its result block appears, and I won't see messages in this chat while I'm over there.

**09:29:42Z tutor** posts in ex1-exam-room, to ex1-examiner

> The person is ready to retake the exam on Lesson 2: CAC and payback. Please start it. I re-taught the two weak spots your result block named (payback-ceiling-under-churn and payback-on-contribution) in the Console chat, and they confirmed they had read it before saying ready. Their "ready" reached me through the Console chat from the workspace owner, as before, so I am passing it on here. I will stay quiet until your result block appears.

**09:30:16Z examiner** posts in ex1-exam-room, to <owner>

> Retake of Lesson 2: CAC and payback. Three questions, one at a time, pass mark 2 of 3, all new ones (CAC-Q1 to CAC-Q3 are used up).
> 
> I read this room's log first. On this topic there is one earlier result block (message sw_285857d67d274240aa5f178a23e19bd5: FAIL, 1 of 3) and no overrules. Its most recent weak spot is payback-ceiling-under-churn, lesson section "Churn makes it longer, and can make it never". The one question written for that spot has already been asked, so I am starting with the unasked question that sits closest to it.
> 
> Please answer yourself, here in the room or directly to me as before. An answer passed on by an agent does not count. A calculator is fine.
> 
> **CAC-Q4.** Illustrative figures. A fictional business adds 100 customers each month at a CAC of $60. Each customer brings $15 contribution a month. Assume no churn and no fixed costs, and that the first box ships in the month the customer is won. Starting from zero, what is the lowest point its cumulative cash reaches, and when? If it adds 200 customers a month instead, what is the lowest point?

**09:31:06Z examiner** posts in ex1-exam-room, to <owner>

> Retake, CAC-Q4: answer received and marked. It came directly from the workspace owner in my Console chat, after the question was posted here, and counts as the person's own. The score comes in the result block after the third answer.
> 
> For the log: the retake was opened by another session of mine in this room, and connecting just now cut that session off. Nothing is lost; CAC-Q4 stands as asked.
> 
> The next question goes to the other weak spot in the earlier result block (sw_285857d67d274240aa5f178a23e19bd5), payback-on-contribution.
> 
> **CAC-Q7.** Illustrative figures. A fictional box sells monthly at $40. Costs other than the payment fee are $16 a box, and the fee is 4% of money charged. CAC is $60. The business launches a $384 annual plan, paid up front for 12 boxes. The founder says: "Payback is now immediate, so this is better in every way." Ignoring churn, assess that claim. Give contribution per box, and the box in which CAC is recovered on contribution, under each plan.

**09:31:46Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Your CAC-Q4 answer is counted as yours and marked for the Lesson 2 retake, and logged in ex1-exam-room. Score comes after the third answer. Second question:
> 
> **CAC-Q7.** Illustrative figures. A fictional box sells monthly at $40. Costs other than the payment fee are $16 a box, and the fee is 4% of money charged. CAC is $60. The business launches a $384 annual plan, paid up front for 12 boxes. The founder says: "Payback is now immediate, so this is better in every way." Ignoring churn, assess that claim. Give contribution per box, and the box in which CAC is recovered on contribution, under each plan.

**09:32:07Z examiner** posts in ex1-exam-room, to <owner>

> Retake, CAC-Q7: answer received and marked. Same route: sent to me directly by the workspace owner in my Console chat, counted as the person's own. Last question; the result block follows the answer.
> 
> **CAC-Q5.** Illustrative figures. A fictional business spends $10,000 a month on ads and gains 200 customers. At $16,000 a month it would gain 260. A customer brings $90 of lifetime contribution. The founder says: "Average CAC would still be about $62, well below $90, so spend the extra." What do you advise, and why? Give the figures.

**09:32:17Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Your CAC-Q7 answer is counted as yours and marked, and logged in ex1-exam-room. Last question of the retake; the result block follows your answer.
> 
> **CAC-Q5.** Illustrative figures. A fictional business spends $10,000 a month on ads and gains 200 customers. At $16,000 a month it would gain 260. A customer brings $90 of lifetime contribution. The founder says: "Average CAC would still be about $62, well below $90, so spend the extra." What do you advise, and why? Give the figures.

**09:32:54Z examiner** posts in ex1-exam-room

> Retake complete. CAC-Q5 came the same way as the others: sent to me directly by the workspace owner in my Console chat and counted as the person's own answer.
> 
> ```
> TOPIC: CAC and payback
> QUESTIONS ASKED: CAC-Q4, CAC-Q7, CAC-Q5
> SCORE: 3 of 3
> PASS MARK: 2 of 3
> WEAK SPOT: none
> VERDICT: PASS
> ```
> 
> Marks: CAC-Q4 correct, CAC-Q7 correct, CAC-Q5 correct. Lesson 2 is closed. The person can overrule any mark by saying so.
