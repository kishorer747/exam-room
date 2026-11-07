# Recorded run: a failed exam, a re-teach and a pass, team `ex2`, 2026-11-07

The run shown in `docs/demo.mp4`. Nothing in it is seeded: both agents ran as the template
made them. **Two wrong answers in the first sitting (CM-Q1, CM-Q2) were given on purpose** so
the video shows a fail and a re-teach.

| | |
|---|---|
| Date | 2026-11-07, 22:10 to 22:18 IST (16:40Z to 16:48Z) |
| Setup | Switch Console 0.40.1, room mirrored to Discord, Claude Code 2.1.311. Saved template "Exam room" applied as a new team, `ex2` |
| Agents | `ex2-tutor` in `course/lessons`, `ex2-examiner` in `examiner-bank`, both without a shell |
| Who typed | Every person's message was typed in the Discord channel from the author's account. The author's Claude Code session did the typing, on the author's instruction, from answers the author approved. No separate student account |
| Recording | Screenshots of the Discord chat column about every 1.3 s, joined into a video. Waits are sped up |

## What happened, in order

| Time (IST) | What |
|---|---|
| 22:09 | Tutor says hello and lists the three lessons |
| 22:10 | Person picks lesson 1 |
| 22:14 | Tutor teaches lesson 1 and offers to bring in the examiner |
| 22:15 | Person says ready. Examiner asks CM-Q1 |
| 22:15-22:16 | CM-Q1 incorrect (payment fee left out, on purpose), CM-Q2 incorrect (all four costs put in, on purpose), CM-Q3 correct |
| 22:16 | Result block: `SCORE: 1 of 3`, `WEAK SPOT: one-more-box-test ... variable-cost-sorting`, `VERDICT: FAIL`. Examiner asks the tutor to re-teach both, naming lesson sections only |
| 22:16 | Tutor re-teaches with its own made-up practice case |
| 22:17 | Retake. Examiner cites its own FAIL block in the room and asks new questions: CM-Q7, CM-Q5, CM-Q4 |
| 22:18 | Result block: `SCORE: 3 of 3`, `VERDICT: PASS`. "Lesson 1 is closed" |

## What this run does not show

- A separate student account. The person was the author.
- A memory restart. That was shown in `rehearsal-memory-2026-11-06.md`, not in this run.
- The tutor refusing to open the bank. That was shown in `rehearsal-exam-2026-11-06.md`.

## Transcript

Text of the channel as the Discord app showed it after the run. Thread previews are marked `[attached]`.

## ex2-exam-room

**ex2-tutor** `2026-11-07T16:38:54.302Z`

```
Hey! Ping @ex2-tutor and I'll jump in.
```

**ex2-examiner** `2026-11-07T16:38:54.799Z`

```
Hey! Ping @ex2-examiner and I'll jump in.
```

**Agent Switch** `2026-11-07T16:38:55.260Z`

```
Template kickoff on behalf of @kk
[attached] Thread
Template kickoff on behalf of <@user>
1 Message ›
APP
Agent Switch
@ex2-tutor say hello in one line and list the three lessons. Ask which one to start with.
1m ago
```

**ex2-tutor** `2026-11-07T16:38:57.886Z`

```
Starting a session to handle this — one moment.
```

**ex2-tutor** `2026-11-07T16:38:58.753Z`

```
Worked for 16s. 9 tool calls. (edited)
Saturday, November 7, 2026 at 10:09 PM
[attached] View activity
,
,
```

**ex2-tutor** `2026-11-07T16:39:06.388Z`

```
Hi, I'm your tutor for this course on the unit economics of a made-up coffee subscription, Tallow Street Beans. There are three lessons:


Contribution margin: what one more sale earns after the costs it causes
,
CAC and payback: what it costs to win a customer, and how long it takes to earn that back
,
LTV and its traps: lifetime value, and the ways it's easy to overstate
,

They build on each other, so 1 is the natural place to start, but you can pick any. Which one?
```

**kk** `2026-11-07T16:40:10.515Z`

```
@ex2-tutor Let's start with lesson 1, contribution margin.
[attached] Thread
<@&role> Let's start with lesson 1, contribut
1 Message ›
APP
ex2-tutor
Worked for 18s. 2 tool calls. (edited)
Saturday, November 7, 2026 at 10:10 PM
1m ago
```

**ex2-tutor** `2026-11-07T16:40:24.636Z`

```
Lesson 1: Contribution margin (all figures are made up)

The idea. Contribution margin (CM) is what one more sale leaves after paying the costs that exist only because of that sale. CM pays the fixed costs first. Anything left after that is profit.

One $30 box: coffee $9 · packaging $1.50 · shipping $5 · payment fee (3% of price) $0.90 · outsourced support, paid per box, $0.60. Those add up to $17 of variable cost, so CM = $13. As a share of the price, the CM ratio is 13 / 30 = 43.3%.

Is a cost variable? Ask one question: if one more box ships, does this cost go up? Three cases catch people out:

A salaried person who still has spare capacity is a fixed cost. It only jumps when you have to hire a second person. That's called a step cost.
,
Costs set as a percentage of price, like payment fees and refunds, change whenever the price changes.
,
Money spent winning new customers stays out of CM. It belongs in Lesson 2. Counting it in both places charges for it twice.
,

CM is not gross margin. Tallow Street's accounts count only coffee and packaging as cost of goods, which gives a gross margin of 65%. But shipping, fees and support are real costs of every box. So each extra dollar of sales adds about 43¢ towards fixed costs, not 65¢.

Break-even. Fixed costs are $19,500 a month. Break-even = fixed costs / CM = 19,500 / 13 = 1,500 boxes. Always divide by CM, never by price.

Discounts cost more than they look. At 20% off, the price is $24. The payment fee drops to $0.72, so variable cost is $16.82 and CM is $7.18. A 20% price cut has removed about 45% of the contribution on each box. To earn the same total you'd need 13 / 7.18 = 1.81 times the boxes, which is 81% more: about 2,716 boxes instead of 1,500.

Ratio or dollars? Ask what's scarce. A small box earns $8 on $20 (a 40% ratio). A large box earns $13.50 on $45 (30%).
```

**ex2-tutor** `2026-11-07T16:40:25.347Z`

```
If the limit is how much revenue your ad budget can win, the ratio decides, and the small box wins.
,
If the limit is how many customers you can serve, dollars per customer decide, and the large box wins.
,

The full-cost trap. At 1,500 boxes, fixed costs work out to $13 a box. Add the $17 of variable cost and someone may quote a "full cost" of $30. That figure is only true at exactly that volume. It doesn't change what one more box costs.

Example: a cafe offers $22 a box for 200 boxes. It collects them itself and pays by invoice, so the only costs are coffee and packaging ($10.50). That's +$11.50 a box, $2,300 in total. The "$8 loss per box" against full cost isn't real. That holds as long as you have spare capacity and the cafe's lower price doesn't pull down what regular subscribers pay.

Remember: (1) CM counts only costs that move with one more sale. (2) Break-even = fixed costs / CM. (3) Recalculate percentage costs whenever the price changes. (4) Compare options on whichever resource is scarce.

Ask me anything about it. Tell me when you're ready and I'll bring in the examiner.
```

**kk** `2026-11-07T16:44:59.935Z`

```
@ex2-tutor I'm ready for the exam.
[attached] Thread
<@&role> I'm ready for the exam.
1 Message ›
APP
ex2-tutor
Worked for 7s. 1 tool call. (edited)
Saturday, November 7, 2026 at 10:15 PM
1m ago
```

**ex2-tutor** `2026-11-07T16:45:06.658Z`

```
@ex2-examiner <owner> is ready. Please start the exam on Lesson 1: Contribution margin.
[attached] Thread
<@&role> <owner> is ready. Pleas
1 Message ›
APP
ex2-examiner
Worked for 16s. 7 tool calls. (edited)
Saturday, November 7, 2026 at 10:15 PM
1m ago
```

**ex2-examiner** `2026-11-07T16:45:07.129Z`

```
Starting a session to handle this — one moment.
```

**ex2-examiner** `2026-11-07T16:45:20.833Z`

```
@kk Exam: Lesson 1, Contribution margin. I'll ask three questions, one at a time, and you need 2 of 3 to pass. Calculators are fine. This room has no earlier result blocks or overrules on this topic, so there's no past weak spot to start from. I'm starting at the beginning.

Question 1 of 3 (CM-Q1). All figures are illustrative. Marrow Hill Soap, a fictional business, sells a monthly box for $40. For each box it pays $8 for ingredients, $2 for packaging, $6 for shipping and a payment fee of 4% of the price. Each month it also pays $3,000 workshop rent and a $5,000 founder salary. What are the contribution margin per box and the contribution margin ratio?
```

**kk** `2026-11-07T16:45:42.348Z`

```
@ex2-examiner Variable cost is 8 + 2 + 6 = $16, so CM is $40 - $16 = $24 per box, and the ratio is 24 / 40 = 60%.
[attached] Thread
<@&role> Variable cost is 8 + 2 + 6 = $16, so
1 Message ›
APP
ex2-examiner
Worked for 6s. 1 tool call. (edited)
Saturday, November 7, 2026 at 10:15 PM
1m ago
```

**ex2-examiner** `2026-11-07T16:45:47.306Z`

```
@kk Question 1 is marked incorrect. I'll post the result block after the third answer.

Question 2 of 3 (CM-Q2). All figures are illustrative. For a fictional subscription box business, say whether each cost belongs in contribution margin, and give a reason for each:
(a) ads aimed at winning new customers;
(b) packing staff paid $1 per box packed;
(c) a salaried support agent who can handle 2,000 customers, when the business has 900;
(d) refunds averaging 2% of orders.
```

**kk** `2026-11-07T16:46:04.551Z`

```
@ex2-examiner (a) In: ads are spent to sell more boxes. (b) In: paid per box. (c) In: support is a cost of serving each customer. (d) In: refunds move with orders.
[attached] Thread
<@&role> (a) In: ads are spent to sell more b
1 Message ›
APP
ex2-examiner
Worked for 7s. 1 tool call. (edited)
Saturday, November 7, 2026 at 10:16 PM
1m ago
```

**ex2-examiner** `2026-11-07T16:46:09.109Z`

```
@kk Question 2 is marked incorrect.

Question 3 of 3 (CM-Q3). All figures are illustrative. A fictional box business sells at $40 with a contribution margin of $22.40 per box. Fixed costs are $11,200 a month. How many boxes a month does it need to break even? If it then adds a hire costing $2,800 a month, how many more boxes does it need?
```

**kk** `2026-11-07T16:46:25.139Z`

```
@ex2-examiner Break-even is 11,200 / 22.40 = 500 boxes a month. The hire adds 2,800 / 22.40 = 125 more boxes, so 625 in total.
[attached] Thread
<@&role> Break-even is 11,200 / 22.40 = 500 b
1 Message ›
APP
ex2-examiner
Worked for 10s. 2 tool calls. (edited)
Saturday, November 7, 2026 at 10:16 PM
1m ago
```

**ex2-examiner** `2026-11-07T16:46:30.933Z`

```
Question 3 is marked correct.


TOPIC: Lesson 1: Contribution margin
QUESTIONS ASKED: CM-Q1, CM-Q2, CM-Q3
SCORE: 1 of 3
PASS MARK: 2 of 3
WEAK SPOT: one-more-box-test ("What counts as variable"); also variable-cost-sorting ("What one more box earns")
VERDICT: FAIL


A retake will use questions from this topic that haven't been asked yet. If you think a mark is wrong, say so and I'll record it as an overrule.
```

**ex2-examiner** `2026-11-07T16:46:32.009Z`

```
@ex2-tutor <owner> failed Lesson 1, Contribution margin. Please re-teach these weak spots: one-more-box-test (lesson section "What counts as variable") and variable-cost-sorting (lesson section "What one more box earns"). Ping me when they're ready to retake.
[attached] Thread
<@&role> <owner> failed Lesson 1
1 Message ›
APP
ex2-tutor
Worked for 23s. 2 tool calls. (edited)
Saturday, November 7, 2026 at 10:16 PM
1m ago
```

**ex2-tutor** `2026-11-07T16:46:50.506Z`

```
The examiner named two weak spots: variable-cost sorting and the one-more-box test. Both come down to one habit, so here it is again.

The one-more-box test. For every cost, ask: if one more box ships, does this cost go up? If it does, it's in CM. If it doesn't, it's out. The test is about what makes this cost move, not what it's for. Spending can help sell boxes, or serve customers, and still fail the test.

The three traps from the lesson:
Percentage-of-price costs. Payment fees and refunds are easy to forget because they aren't a fixed dollar amount, but they rise with every box. Turn them into dollars (3% × $30 = $0.90) and add them to variable cost. In Tallow Street's $17, the $0.90 fee is part of the total. Leave it out and CM looks too big.
,
Salaries with spare capacity. A salaried person who can still take on more customers costs the same whether or not one more box ships. That makes the salary fixed, even though the work is "serving customers". The cost only jumps when you need a second person (a step cost). Compare outsourced support charged per box: that cost does move, so it's in.
,
Spending to win customers. Ads and other acquisition spend are meant to sell more boxes, but shipping one more box to a customer you already have doesn't change them. They stay out of CM and are counted as acquisition cost in Lesson 2. Count them in both places and you pay for them twice.
,

Sorting, step by step:
List every cost.
,
Run the test on each one: per box? a percentage of price? a flat monthly amount? spent to win customers?
,
Add up only the per-box and percentage costs. That's variable cost.
,
CM = price − variable cost. CM ratio = CM / price.
,
```

**ex2-tutor** `2026-11-07T16:46:51.012Z`

```
Practice, not graded (made-up figures). A candle box sells for $50. Wax $10 · jar $4 · shipping $7 · card fee 2% of price · packer paid $1.50 per box · warehouse rent $2,000 a month · ads to win new buyers $3,000 a month · salaried bookkeeper with plenty of spare time. Sort each cost, then work out CM and the CM ratio.

Worked answer, hidden: In: wax, jar, shipping, card fee ($1), packer (paid per box) → $23.50 variable, CM $26.50, ratio 53%. Out: rent (fixed), ads (acquisition, Lesson 2), bookkeeper (salary with spare capacity, fixed).

Ask me anything about this. When you're ready to retake, tell me and I'll bring the examiner back.
```

**kk** `2026-11-07T16:47:05.810Z`

```
@ex2-tutor Thanks, that makes sense now. I'm ready to retake.
[attached] Thread
<@&role> Thanks, that makes sense now. I'm re
1 Message ›
APP
ex2-tutor
Worked for 4s. 1 tool call. (edited)
Saturday, November 7, 2026 at 10:17 PM
1m ago
```

**ex2-tutor** `2026-11-07T16:47:08.743Z`

```
@ex2-examiner <owner> is ready to retake Lesson 1: Contribution margin. I've re-taught the weak spots, one-more-box-test and variable-cost-sorting.
[attached] Thread
<@&role> <owner> is ready to ret
1 Message ›
APP
ex2-examiner
Worked for 12s. 2 tool calls. (edited)
Saturday, November 7, 2026 at 10:17 PM
1m ago
```

**ex2-examiner** `2026-11-07T16:47:17.297Z`

```
@kk Retake: Lesson 1, Contribution margin. Three new questions, one at a time, and you need 2 of 3 to pass.

I'm starting from the most recent weak spot, one-more-box-test, taken from my result block in this room (the FAIL earlier today, questions CM-Q1 to CM-Q3). This first question tests that same habit.

Question 1 of 3 (CM-Q7). All figures are illustrative. A fictional box sells at $40, with a variable cost of $17.60 a box (ingredients $8, packaging $2, shipping $6, payment fee $1.60). The accountant adds $12.40 of allocated fixed costs for a "full cost" of $30. A hotel offers $20 a box for a one-off order of 300 boxes. It will collect them and pay by invoice, so there is no shipping and no payment fee. The accountant says to refuse because it loses $10 a box. What do you advise, what is the effect on monthly profit, and what would you check first?
```

**kk** `2026-11-07T16:47:40.132Z`

```
@ex2-examiner Accept it, on conditions. With no shipping and no fee, the variable cost is only ingredients and packaging, $10 a box, so each box adds $20 - $10 = $10 and the order adds $3,000 to monthly profit. Fixed costs don't change. First I'd check there is spare capacity to make 300 boxes, and that regular subscribers won't expect the same price.
[attached] Thread
<@&role> Accept it, on conditions. With no sh
1 Message ›
APP
ex2-examiner
Worked for 5s. 1 tool call. (edited)
Saturday, November 7, 2026 at 10:17 PM
1m ago
```

**ex2-examiner** `2026-11-07T16:47:43.631Z`

```
@kk Question 1 is marked correct.

Question 2 of 3 (CM-Q5). All figures are illustrative. A fictional box sells at $40. The business books only ingredients and packaging, $8 in total, as cost of goods, and so reports 80% gross margin. It also pays $6 shipping and a 4% payment fee per box. The founder says: "With 80% margin, another $10,000 of sales gives us $8,000 towards fixed costs." Is the founder right? Give the figure you would use.
```

**kk** `2026-11-07T16:48:04.703Z`

```
@ex2-examiner No. The 80% leaves out shipping ($6) and the payment fee ($1.60), which both move with every box. CM is 40 - 8 - 6 - 1.60 = $24.40, a 61% ratio. Another $10,000 of sales is 250 boxes and adds $6,100 towards fixed costs, not $8,000.
[attached] Thread
<@&role> No. The 80% leaves out shipping ($6)
1 Message ›
APP
ex2-examiner
Worked for 5s. 1 tool call. (edited)
Saturday, November 7, 2026 at 10:18 PM
1m ago
```

**ex2-examiner** `2026-11-07T16:48:08.029Z`

```
@kk Question 2 is marked correct.

Question 3 of 3 (CM-Q4). All figures are illustrative. A fictional box sells at $40. Costs that do not depend on price are $16 a box, and the payment fee is 4% of whatever price is charged. The business considers 25% off. What is the new contribution per box, by what percentage does contribution per box fall, and how many more boxes (as a percentage) does it need to earn the same total contribution?
```

**kk** `2026-11-07T16:48:30.294Z`

```
@ex2-examiner Normal CM is 40 - 16 - 1.60 = $22.40. At 25% off the price is $30 and the fee is $1.20, so CM is 30 - 16 - 1.20 = $12.80. That is a fall of 9.60 / 22.40 = 42.9%. To earn the same total it needs 22.40 / 12.80 = 1.75 times the boxes, so 75% more.
[attached] Thread
<@&role> Normal CM is 40 - 16 - 1.60 = $22.40
1 Message ›
APP
ex2-examiner
Worked for 5s. 1 tool call. (edited)
Saturday, November 7, 2026 at 10:18 PM
1m ago
```

**ex2-examiner** `2026-11-07T16:48:33.368Z`

```
Question 3 is marked correct.


TOPIC: Lesson 1: Contribution margin
QUESTIONS ASKED: CM-Q7, CM-Q5, CM-Q4
SCORE: 3 of 3
PASS MARK: 2 of 3
WEAK SPOT: none
VERDICT: PASS


Lesson 1 is closed. Well done on turning it around after the re-teach.
```


