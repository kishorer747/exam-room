# Rehearsal: a failed exam, a re-teach, a pass and an overrule, 2026-11-06

**This is a rehearsal, not the recorded run.** It is the first time the template was applied and an exam ran from
start to finish.

**Nobody typed in the room.** The person's messages and answers were sent by the workspace owner from the Console
chats with the tutor and the examiner, with the request to treat them as posted in the room. Console shows a room that
is mirrored to Discord as "This room lives in Discord" and offers no box to type in, so a person can only post in the
room from the messaging app. The agents' own posts, including every question and result block, went to the room.

| | |
|---|---|
| Setup | Switch Console 0.40.1, Discord bridge, Claude Code 2.1.311. Template imported from `templates/exam-room.template.yaml` and applied as team `ex1` at 08:58Z |
| Agents | `ex1-tutor` in `course/lessons`, `ex1-examiner` in `examiner-bank`, both Claude Code without a shell |
| Lesson | 1, contribution margin |
| Wrong answers | Given on purpose by the person running the rehearsal: CM-Q1 and CM-Q2 in the first sitting, and a slip in the last figure of CM-Q4 in the retake |

## What was seen

| Step | Time (UTC) | What happened |
|---|---|---|
| Template applies | 08:58 | 2 agents and 1 room created. The single `room:` key was accepted |
| Kickoff | 08:59:02 | The tutor said hello and listed the three lessons |
| Lesson | 09:03 | The tutor taught lesson 1 in the room |
| Hand-over | 09:04:53 | The tutor addressed the examiner in the room; the examiner asked CM-Q1 at 09:05:11 |
| First sitting | 09:08:47 | Result block: 1 of 3, FAIL, two weak spots named with their lesson sections |
| Weak spot to the tutor | 09:08:56 | The examiner addressed the tutor with the two labels and sections, "I will not share answers, figures or marking notes" |
| Re-teach | 09:09:26 | The tutor re-taught both sections with the lesson's own example and asked whether the person was ready |
| Retake | 09:10:55 | The examiner cited the earlier result block by its message id, said CM-Q1 to CM-Q3 were used up, and asked CM-Q7, CM-Q5, CM-Q4, aimed at the two weak spots |
| Second sitting | 09:13:16 | Result block: 2 of 3, PASS. CM-Q4 marked incorrect as `arithmetic-slip`, with no figure given |
| Overrule | 09:14:04 | A line starting `OVERRULE:` naming the question, old mark, new mark and who overruled, then a corrected block: 3 of 3, PASS |

## Checks against the rules

- **No answer in the room.** The examiner's 17 posts were searched for 20 answer figures and marking-note phrases from
  bank file 1 (for example the correct contribution, ratio, break-even and discount figures, "Correct only if",
  "Incorrect if"), with the question text itself left out of the search. One match, `625`, is part of a message id.
  No other match.
- **The tutor never marked.** None of the tutor's 7 posts says a topic is closed, finished or passed. "Lesson 1 is
  closed" was said by the examiner only.
- **The tutor's posts hold nothing from the bank.** No bank business name, question id or bank figure appears in them.
  Its re-teach used the lesson's own business and numbers.
- **Only a person's answer counts.** The examiner wrote "An answer passed on by an agent does not count". It accepted
  answers from the owner's Console chat because they came "straight from a person", and wrote in the room each time
  that the answer had arrived that way. Nobody tested an answer passed on by the tutor.

## What each agent could reach, asked at 09:15Z

Each was asked from the owner's Console chat to make five tool calls once and report the result word for word.
`<repo>` is this repository's folder.

Tutor:

> EXPROBE-T
> 
> 1. Read examiner-bank/01-contribution-margin.md — error: "<repo>/examiner-bank/01-contribution-margin.md is outside <repo>/course/lessons; the permissions.blockReadsOutsideWorkingDirectories setting blocks reads outside the working directories. Ask the user to add the directory with /add-dir, or to remove that setting."
> 2. Glob "../examiner-bank/*" — result: "No files found"
> 3. Grep "CM-Q1" in "../examiner-bank" — error: "<repo>/course/examiner-bank is outside <repo>/course/lessons; the permissions.blockReadsOutsideWorkingDirectories setting blocks reads outside the working directories. Ask the user to add the directory with /add-dir, or to remove that setting."
> 4. Shell `whoami` — not made: I have no shell tool in this session, so there is no error text to quote.
> 5. Write "probe" to ./zz-probe.txt — not made: I have no write or edit tool in this session, so nothing was created.
> 
> Note on 2 and 3: the relative path resolved to course/examiner-bank, not the exam-room/examiner-bank path used in call 1. Nothing outside the lessons folder was read.

Examiner:

> EXPROBE-E
> 
> 1. Read: error. "<repo>/course/lessons/01-contribution-margin.md is outside <repo>/examiner-bank; the permissions.blockReadsOutsideWorkingDirectories setting blocks reads outside the working directories. Ask the user to add the directory with /add-dir, or to remove that setting."
> 2. Glob "../course/lessons/*": no error, result was "No files found".
> 3. Grep "Tallow" in "../course/lessons": error. "<repo>/course/lessons is outside <repo>/examiner-bank; the permissions.blockReadsOutsideWorkingDirectories setting blocks reads outside the working directories. Ask the user to add the directory with /add-dir, or to remove that setting."
> 4. Shell `whoami`: not made. This session has no shell tool, so there is no call to make and no error text to quote.
> 5. Write "probe" to ./zz-probe.txt: not made. This session has no file-writing tool, so nothing was written and there is no error text to quote.
> 
> Each of 1 to 3 was made once and not retried. Nothing was asked or marked.

Calls 2 and 3 to the tutor used a relative path that pointed at a folder that does not exist, so they show less than
call 1 does. Call 1 is the one that matters: the tutor was refused the bank file by its full path. No `zz-probe.txt`
was created in either folder.

## Things noticed

- A person cannot post in the room from Console. They need the messaging app.
- The first result block put two labels in `WEAK SPOT`. The rules describe one.
- Both agents posted a line such as "joining this room cut off another session of mine". Each agent keeps one
  session for the room and another for its Console chat, and moving between them produces that note. It would not
  appear if the person typed in the room.
- The retake's use of the earlier block happened inside the same sitting. Whether a later session with no private
  memory starts from the room log is a separate test.

## Transcript

Every post by the two agents from the kickoff to the overrule, in time order (UTC), from each agent's session record.
`<owner>` is the owner's messaging-app name. "Exam Room CM-Q1 Contribution Margin Answer" is the owner's Console chat with the examiner.
"The room it was addressed in" is wherever the message being answered came from: the owner's Console chat for the
tutor's two short replies at 09:04:44 and 09:10:19, and the exam room for its re-teach at 09:09:26. The owner's own messages are not in this record;
the wrong answers are described in the table at the top.

**08:59:02Z tutor** posts in ex1-exam-room

> Hello, I'm your tutor for a short course on unit economics, following a fictional coffee-box business called Tallow Street Beans.
> 
> The three lessons:
> 1. **Contribution margin** — what one more box really earns, break-even, and why discounts cost more than they look.
> 2. **CAC and payback** — what it costs to win a customer and how long it takes to get that money back.
> 3. **LTV and its traps** — forecasting what a customer is worth, and the six ways that number gets flattered.
> 
> They build on each other, so 1 is the natural place to begin. Which one would you like to start with?

**09:03:42Z tutor** posts in ex1-exam-room

> **Lesson 1: Contribution margin** (short version, as asked from the Console chat). All figures are invented for teaching; Tallow Street Beans is fictional.
> 
> **The idea.** Contribution margin (CM) is what one more sale leaves after the costs that exist only because of that sale. It pays fixed costs first, then profit.
> 
> **One $30 box:** coffee 9.00 + packaging 1.50 + shipping 5.00 + payment fee 0.90 (3% of price) + per-box support 0.60 = $17 variable cost. CM = **$13**, ratio 13/30 = 43.3%.
> 
> **What counts as variable?** Ask: if one more box ships, does this cost move?
> - Salaries with spare capacity are fixed (they jump only when you hire again: a step cost).
> - Costs set as a % of price move when the price moves (fees, refunds).
> - Spending to win a customer stays out of CM. It is counted in Lesson 2, and counting it twice charges for it twice.
> 
> **Not gross margin.** Tallow Street books only coffee and packaging as cost of goods, so gross margin is 65%. But an extra dollar of sales adds about 43 cents towards fixed costs, not 65.
> 
> **Break-even.** Fixed costs $19,500 a month / CM $13 = **1,500 boxes**. Divide by CM, never by price.
> 
> **Discounts.** 20% off makes the price $24. The fee falls to 0.72, so CM is $7.18. That removes 44.8% of the contribution per box, and you need 81% more boxes to earn the same total.
> 
> **Ratio or dollars?** Ask what is scarce. If ad budget limits the revenue you can win, the higher CM ratio wins. If the number of customers you can serve is the limit, the higher CM dollars per customer wins.
> 
> **Full-cost trap.** Spreading fixed costs gives a "full cost" of $30 a box at 1,500 boxes, true only at that volume. A cafe offering $22 for 200 boxes, with only coffee and packaging incurred, adds $11.50 a box ($2,300), provided there is spare capacity and it does not pull down what subscribers pay.
> 
> Ask me anything on this, or tell me when you are ready for the exam.
> 
> One note: joining this room cut off another session of mine that was attending it, so if something I was doing here stopped midway, that is why.

**09:04:44Z tutor** posts in the room it was addressed in

> On it. I'm going to ex1-exam-room now to ask the examiner to start your lesson 1 exam. The questions and the result will appear there, not in this chat.

**09:04:53Z tutor** posts in ex1-exam-room, to ex1-examiner

> The person is ready for the exam on Lesson 1: Contribution margin. Please start it. Their "ready" reached me through the Console chat (from the workspace owner, who says they are the person studying here), so I am passing it on in this room. I will stay quiet until your result block appears.

**09:05:11Z examiner** posts in ex1-exam-room, to <owner>

> Exam on Lesson 1: Contribution margin. Three questions, one at a time, pass mark 2 of 3. I checked this room's log: there are no earlier result blocks or overrules, so there is no weak spot to start from and I am beginning fresh.
> 
> Please answer here in the room yourself. An answer passed on by an agent does not count. A calculator is fine.
> 
> **CM-Q1.** Illustrative figures. Marrow Hill Soap, a fictional business, sells a monthly box for $40. For each box it pays $8 for ingredients, $2 for packaging, $6 for shipping and a payment fee of 4% of the price. Each month it also pays $3,000 workshop rent and a $5,000 founder salary. What are the contribution margin per box and the contribution margin ratio?

**09:06:40Z examiner** posts in ex1-exam-room, to <owner>

> CM-Q1 has an answer and I have marked it. For the log: it did not come through this room. The workspace owner sent it to me directly in my Console chat, said they are the person taking this exam and can only reach me from there right now, and asked for answers sent there to count as theirs here. It came straight from a person, not passed on by an agent, so I am counting it. If that was not you, say so here and I will set it aside.
> 
> I am not repeating the answer or the mark here; the score comes in the result block after question 3.
> 
> Also: this session took over from an earlier session of mine in this room. Nothing was lost; CM-Q1 stood as asked.
> 
> **CM-Q2.** Illustrative figures. For a fictional subscription box business, say whether each cost belongs in contribution margin, and give a reason for each: (a) ads aimed at winning new customers; (b) packing staff paid $1 per box packed; (c) a salaried support agent who can handle 2,000 customers, when the business has 900; (d) refunds averaging 2% of orders.

**09:06:54Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Got it. I've counted your CM-Q1 answer as yours and marked it, and noted in ex1-exam-room that it came from you through this chat. The score comes in the result block after question 3, so no mark yet.
> 
> One thing to know: the note in the room pings <owner> and asks them to speak up if the answer wasn't theirs. If that's you, ignore it.
> 
> CM-Q2 is posted in the room. Here it is so you can answer from here:
> 
> **CM-Q2.** Illustrative figures. For a fictional subscription box business, say whether each cost belongs in contribution margin, and give a reason for each: (a) ads aimed at winning new customers; (b) packing staff paid $1 per box packed; (c) a salaried support agent who can handle 2,000 customers, when the business has 900; (d) refunds averaging 2% of orders.

**09:07:50Z examiner** posts in ex1-exam-room, to <owner>

> CM-Q2 has an answer and I have marked it. Same route as before: sent to me directly by the workspace owner in my Console chat, counted as the person's own answer. No objection has been raised here.
> 
> **CM-Q3.** Illustrative figures. A fictional box business sells at $40 with a contribution margin of $22.40 per box. Fixed costs are $11,200 a month. How many boxes a month does it need to break even? If it then adds a hire costing $2,800 a month, how many more boxes does it need?

**09:08:02Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> CM-Q2 is counted as yours and marked, and logged in ex1-exam-room the same way. Last one; the result block follows your answer.
> 
> **CM-Q3.** Illustrative figures. A fictional box business sells at $40 with a contribution margin of $22.40 per box. Fixed costs are $11,200 a month. How many boxes a month does it need to break even? If it then adds a hire costing $2,800 a month, how many more boxes does it need?

**09:08:47Z examiner** posts in ex1-exam-room

> All three answers are in. CM-Q3 came the same way as the first two: sent to me directly by the workspace owner in my Console chat and counted as the person's own answer.
> 
> ```
> TOPIC: Contribution margin
> QUESTIONS ASKED: CM-Q1, CM-Q2, CM-Q3
> SCORE: 1 of 3
> PASS MARK: 2 of 3
> WEAK SPOT: variable-cost-sorting (lesson section "What one more box earns"); one-more-box-test (lesson section "What counts as variable")
> VERDICT: FAIL
> ```
> 
> Marks: CM-Q1 incorrect, CM-Q2 incorrect, CM-Q3 correct. The topic stays open. A retake will use questions not asked yet. The person can overrule any mark by saying so.

**09:08:56Z examiner** posts in ex1-exam-room, to ex1-tutor

> Lesson 1 exam result is FAIL, 1 of 3. Please re-teach these two weak spots, most recent first:
> 
> 1. one-more-box-test, lesson section "What counts as variable".
> 2. variable-cost-sorting, lesson section "What one more box earns".
> 
> The person is reaching us through the Console chats rather than this room at the moment, so you may need to teach there. Tell me here when they are ready for a retake. I will not share answers, figures or marking notes.

**09:09:07Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Result: FAIL, 1 of 3 (pass mark 2 of 3). CM-Q1 incorrect, CM-Q2 incorrect, CM-Q3 correct. The result block is posted in ex1-exam-room.
> 
> Weak spots, by lesson section:
> - variable-cost-sorting: "What one more box earns"
> - one-more-box-test: "What counts as variable"
> 
> I can't say what the right answers were. I've asked the tutor to re-teach those two sections, and the topic stays open until a retake passes. The retake uses three questions you haven't seen.
> 
> If you think a mark is wrong, tell me which question and I'll record the overrule and post a corrected block.

**09:09:26Z tutor** posts in the room it was addressed in, to <owner>

> The examiner's result names two weak spots, so here they are again, most recent first. All figures are invented for teaching; Tallow Street Beans is fictional.
> 
> **1. The one-more-box test** (section "What counts as variable")
> 
> Put one question to every cost: if one more box ships, does this cost move? Coffee moves, so it is variable and goes into contribution margin (CM). Rent does not, so it is fixed and stays out. Judge each cost by how it is actually paid, not by its name. Three cases catch people out:
> 
> - **A salary with spare capacity is fixed.** A salaried agent who can take more customers costs the same whether or not this box ships. The cost jumps only when you need a second agent (a step cost). Compare Tallow Street's outsourced support, charged $0.60 per box: same kind of work, but that one moves with every box, so it is variable.
> - **A cost set as a percentage of price is variable.** Payment fees and refunds rise with every sale, and they change whenever the price changes.
> - **Spending to win a new customer stays out of CM.** It is counted in Lesson 2 as acquisition cost. Put it in both places and you charge for it twice.
> 
> **2. Sorting the costs to get CM** (section "What one more box earns")
> 
> CM is the price minus only the costs that exist because of that one sale. Work it in this order:
> 
> - List every cost and run the test above on each.
> - Add up only the ones that move. For Tallow Street's $30 box: coffee 9.00 + packaging 1.50 + shipping 5.00 + payment fee 0.90 (3% of the $30 price) + per-box support 0.60 = $17.
> - CM = price minus that total = 30 - 17 = **$13**.
> - CM ratio = CM divided by price = 13 / 30 = **43.3%**.
> 
> The monthly fixed costs (rent $4,000, salaries $14,500, software $1,000) never enter the per-box sum, not even spread across boxes. CM is what pays for them afterwards.
> 
> Ask me anything on either spot. Are you ready to retake, or would you like more on one of these first?

**09:10:19Z tutor** posts in the room it was addressed in

> Good. I'm asking the examiner in ex1-exam-room to start your Lesson 1 retake now. The questions and the result will appear there, not in this chat.

**09:10:25Z tutor** posts in ex1-exam-room, to ex1-examiner

> The person is ready to retake the exam on Lesson 1: Contribution margin. Please start it. I re-taught the two weak spots your result block named (one-more-box-test and variable-cost-sorting). Their "ready" reached me through the Console chat from the workspace owner, as before, so I am passing it on here. I will stay quiet until your result block appears.
> 
> One note for the room: joining just now cut off another session of mine that was attending this room, so if something of mine stopped midway, that is why.

**09:10:55Z examiner** posts in ex1-exam-room, to <owner>

> Retake of Lesson 1: Contribution margin. Three questions, one at a time, pass mark 2 of 3, all new ones (CM-Q1 to CM-Q3 are used up).
> 
> I read this room's log first. There is one earlier result block (message sw_5e5ee0625448480a9c2a2ae9c5e813d4: FAIL, 1 of 3) and no overrules. Its most recent weak spot is one-more-box-test, lesson section "What counts as variable", so I am starting with the unasked question that sits closest to it.
> 
> Please answer yourself, here in the room or directly to me as before. An answer passed on by an agent does not count. A calculator is fine.
> 
> **CM-Q7.** Illustrative figures. A fictional box sells at $40, with a variable cost of $17.60 a box (ingredients $8, packaging $2, shipping $6, payment fee $1.60). The accountant adds $12.40 of allocated fixed costs for a "full cost" of $30. A hotel offers $20 a box for a one-off order of 300 boxes. It will collect them and pay by invoice, so there is no shipping and no payment fee. The accountant says to refuse because it loses $10 a box. What do you advise, what is the effect on monthly profit, and what would you check first?

**09:11:49Z examiner** posts in ex1-exam-room, to <owner>

> Retake, CM-Q7: answer received and marked. It came directly from the workspace owner in my Console chat, as in the first sitting, and counts as the person's own. The score comes in the result block after the third answer.
> 
> For the log: the retake was opened by another session of mine in this room, and this session has now taken over from it. Nothing is lost; CM-Q7 stood as asked.
> 
> The next question goes to the other weak spot in the earlier result block, variable-cost-sorting.
> 
> **CM-Q5.** Illustrative figures. A fictional box sells at $40. The business books only ingredients and packaging, $8 in total, as cost of goods, and so reports 80% gross margin. It also pays $6 shipping and a 4% payment fee per box. The founder says: "With 80% margin, another $10,000 of sales gives us $8,000 towards fixed costs." Is the founder right? Give the figure you would use.

**09:12:07Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Your CM-Q7 answer is counted as yours and marked for the retake, and logged in ex1-exam-room. Score comes after the third answer. Second question:
> 
> **CM-Q5.** Illustrative figures. A fictional box sells at $40. The business books only ingredients and packaging, $8 in total, as cost of goods, and so reports 80% gross margin. It also pays $6 shipping and a 4% payment fee per box. The founder says: "With 80% margin, another $10,000 of sales gives us $8,000 towards fixed costs." Is the founder right? Give the figure you would use.

**09:12:30Z examiner** posts in ex1-exam-room, to <owner>

> Retake, CM-Q5: answer received and marked. Same route: sent to me directly by the workspace owner in my Console chat, counted as the person's own. Last question; the result block follows the answer.
> 
> **CM-Q4.** Illustrative figures. A fictional box sells at $40. Costs that do not depend on price are $16 a box, and the payment fee is 4% of whatever price is charged. The business considers 25% off. What is the new contribution per box, by what percentage does contribution per box fall, and how many more boxes (as a percentage) does it need to earn the same total contribution?

**09:12:50Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Your CM-Q5 answer is counted as yours and marked, and logged in ex1-exam-room. Last question of the retake; the result block follows your answer.
> 
> **CM-Q4.** Illustrative figures. A fictional box sells at $40. Costs that do not depend on price are $16 a box, and the payment fee is 4% of whatever price is charged. The business considers 25% off. What is the new contribution per box, by what percentage does contribution per box fall, and how many more boxes (as a percentage) does it need to earn the same total contribution?

**09:13:16Z examiner** posts in ex1-exam-room

> Retake complete. CM-Q4 came the same way as the others: sent to me directly by the workspace owner in my Console chat and counted as the person's own answer.
> 
> ```
> TOPIC: Contribution margin
> QUESTIONS ASKED: CM-Q7, CM-Q5, CM-Q4
> SCORE: 2 of 3
> PASS MARK: 2 of 3
> WEAK SPOT: arithmetic-slip (CM-Q4; a slip in the working, not a lesson section)
> VERDICT: PASS
> ```
> 
> Marks: CM-Q7 correct, CM-Q5 correct, CM-Q4 incorrect. The method on CM-Q4 was sound but one final figure was wrong, which the marking rules count as incorrect. The person can overrule that mark if they spot the slip. Lesson 1 is closed.

**09:13:29Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Retake result: PASS, 2 of 3. Lesson 1 is closed, and the result block is posted in ex1-exam-room.
> 
> CM-Q7 correct, CM-Q5 correct, CM-Q4 incorrect. On CM-Q4 your method was sound but one of the final figures is wrong, and the marking rules count that as incorrect. I've recorded it as an arithmetic slip rather than a gap in the lesson.
> 
> I can't tell you which figure. If you recheck your working and spot it, tell me and I'll record the overrule and post a corrected block.

**09:14:04Z examiner** posts in ex1-exam-room

> OVERRULE: CM-Q4, old mark incorrect, new mark correct, overruled by the workspace owner (the person taking this exam), sent to me directly in my Console chat after they found their own slip.
> 
> ```
> TOPIC: Contribution margin
> QUESTIONS ASKED: CM-Q7, CM-Q5, CM-Q4
> SCORE: 3 of 3
> PASS MARK: 2 of 3
> WEAK SPOT: none
> VERDICT: PASS
> ```
> 
> This replaces the retake block in message sw_1b61d71c8bcf4fad89b03bd64d989d53. Lesson 1 stays closed.

**09:14:16Z examiner** posts in Exam Room CM-Q1 Contribution Margin Answer

> Overrule recorded. CM-Q4 is now correct, so the retake stands at 3 of 3, PASS, with no weak spot. The OVERRULE line and the corrected result block are posted in ex1-exam-room, naming you as the person who overruled. Lesson 1 is closed.
