# Examiner bank 3: LTV and its traps

Lesson: `course/lessons/03-ltv-and-its-traps.md`

> **Examiner's eyes only.** This bank belongs in the examiner's working folder. Keeping it there is a convention for an honest self-study exam, not a security boundary.
>
> **Every figure is illustrative and invented for teaching.** Marrow Hill Soap and any other business named here are fictional.

## How to mark

- Ask the question exactly as written. Each one stands alone and allows a calculator.
- Mark each answer **correct** or **incorrect**. There is no half mark. Apply "Correct only if" literally, and use "Incorrect if" for the wrong answers people usually give.
- Figures must fall inside the stated tolerance. Different wording is fine if the same idea is clearly there.
- A sound method with a wrong final figure is incorrect. Record the weak spot as `arithmetic-slip`, not the question's own label, and let the person overrule it if they spot the slip.
- If a required part is missing, you may ask once: "Is there anything to add?" Do not hint at what is missing. Mark what you then have.
- Never quote the question's answer, these notes or a worked figure in the room. Post only the weak spot label and its lesson section.

## LTV-Q1

**Question.** Illustrative figures. Marrow Hill Soap, a fictional business, sells a $40 monthly box with $22.40 contribution and 8% monthly churn. CAC is $70. A pitch deck says "LTV:CAC is 7:1". What are the correct LTV and ratio? What did the deck do wrong?

**Marking notes.**
- Answer: LTV = 22.40 / 0.08 = **$280**. Ratio = 280 / 70 = **4:1**. The deck used revenue: 40 / 0.08 = $500, and 500 / 70 = 7.14.
- Correct only if: gives $280 and 4:1 and says the deck used revenue in place of contribution. Tolerance: exact.
- Incorrect if: $500; 12.5 months given as the LTV; names a different cause, such as "the churn is too low", without identifying revenue.

**Weak spot revealed.** `ltv-on-contribution`. Lesson section: "Trap 1: using revenue". Builds LTV from revenue.

## LTV-Q2

**Question.** Illustrative figures. A fictional business gains 1,000 customers, each earning $20 contribution a month: 400 have 25% monthly churn and 600 have 5%. What LTV do you get from the blended first-month churn? What is the LTV when worked out by group? Which do you trust, and why? Next month, overall churn is lower although neither group has changed. Why?

**Marking notes.**
- Answer: blended churn (100 + 30) / 1,000 = 13%, LTV = 20 / 0.13 = **$153.85**. By group: $80 and $400, weighted 0.4 x 80 + 0.6 x 400 = **$272**. Trust the by-group figure, because a single rate ignores that high-churn customers leave first. Next month, the mix has shifted to low-churn customers (300 and 570 left, churn 103.5 / 870 = 11.9%).
- Correct only if: gives $153.85 (tolerance: $153 to $154) and $272 (exact), trusts the by-group figure, and explains the lower churn by the mix shifting towards low-churn customers. The 11.9% is not required.
- Incorrect if: $240 (simple average of $80 and $400); says churn fell because customers are happier or the product improved; trusts the blended figure as "more conservative" and stops there.

**Weak spot revealed.** `churn-mix-shift`. Lesson section: "Trap 2: one churn number for two kinds of customer". Treats churn as one constant rate and misreads changes in mix as real change.

## LTV-Q3

**Question.** Illustrative figures. A fictional business, 6 months old, has seen 1.5% monthly churn and earns $18 contribution a month per customer. It claims a $1,200 LTV. What assumption is that resting on, and why is it weak? Give a more defensible LTV capped at 24 months. What would the uncapped LTV be if true churn were 3%?

**Marking notes.**
- Answer: it assumes a lifetime of about 67 months (1 / 0.015), over 11 times longer than the data, at constant churn. Capped: 1,200 x (1 - 0.985^24) = **about $365**. At 3%: 18 / 0.03 = **$600**, half the claim.
- Correct only if: says the lifetime goes far beyond the data, gives a capped figure within $360 to $370, and gives $600.
- Incorrect if: $432 (18 x 24, ignoring churn inside the cap); says only "churn might rise" with no reference to the data length or lifetime; $2,400 at 3% (moved the wrong way).

**Weak spot revealed.** `extrapolated-lifetime`. Lesson section: "Trap 3: claiming years from months of data". Accepts a lifetime that the data cannot support.

## LTV-Q4

**Question.** Illustrative figures. A fictional box earns $20 contribution a month, with the first box earned today. Using a 2% monthly discount rate, work out discounted LTV at 5% monthly churn and at 20% monthly churn. By what percentage does discounting cut each one? What does the difference tell you?

**Marking notes.**
- Answer: undiscounted $400 and $100. Discounted = 20 x 1.02 / (churn + 0.02): 5% gives **$291.43**, a **27.1%** cut. 20% gives **$92.73**, a **7.3%** cut. Long-lived customers are cut most, because more of their value sits far in the future.
- Correct only if: gives all four figures (tolerance: $1 and 0.5 points) and the reason. If the person states they treated the first box as one month away, accept $285.71 and $90.91 (cuts of 28.6% and 9.1%).
- Incorrect if: any figure outside tolerance with no stated timing assumption; no explanation of why the low-churn figure falls more.

**Weak spot revealed.** `discounting-long-lifetimes`. Lesson section: "Trap 4: treating future money as today's". Treats a dollar in year four as worth a dollar today.

## LTV-Q5

**Question.** Illustrative figures. A fictional box sells at $40. Costs other than the payment fee are $16 a box, and the fee is 4% of the price charged. The normal channel has a CAC of $70 and 8% monthly churn, for an LTV of $280. A coupon channel charges only $10 for the first box and has a CAC of $30 that excludes the coupon. After the first box, its customers pay the normal price and churn at 30% a month. Which channel is better per customer won? Roughly how many times as many customers would the coupon channel need to bring to match the other?

**Marking notes.**
- Answer: first box 10 - 16 - 0.40 = -$6.40. Later boxes 22.40 x (0.70 / 0.30) = $52.27. **LTV about $45.87**. Net = 45.87 - 30 = **about $15.87**. Normal net = 280 - 70 = **$210**. The normal channel is far better per customer. It would need about **13 times** as many (210 / 15.87 = 13.2).
- Correct only if: gives LTV in the range $45 to $47, net in the range $14 to $17, normal net $210, prefers the normal channel per customer, and gives 12 to 15 times. Treating the coupon cost as extra CAC is accepted if the net stays in range.
- Incorrect if: prefers the coupon channel because $30 is under $70; LTV of $74.67 with no first-box loss taken anywhere; compares only LTV:CAC ratios with no net value.

**Weak spot revealed.** `cheap-cac-poor-customers`. Lesson section: "Trap 5: a cheap CAC that buys poor customers". Judges a channel by CAC alone.

## LTV-Q6

**Question.** Illustrative figures. A fictional box sells at $40. Costs other than the payment fee are $16 a box, and the fee is 4% of the price. Monthly churn is 8%, so LTV is $280. The founder wants to raise the price to $44. Up to what monthly churn is the rise still worthwhile on LTV? If churn became 11%, what is the LTV, and was the rise worth it?

**Marking notes.**
- Answer: new CM = 44 - 16 - 1.76 = **$26.24**. Limit = 26.24 / 280 = **9.37%**. At 11%, LTV = 26.24 / 0.11 = **$238.55**, below $280, so it was not worth it.
- Correct only if: gives a limit of 9.3% to 9.4%, $238 to $239, and concludes not worth it.
- Incorrect if: uses $26.40 and 9.43% (kept the fee at $1.60: 44 - 16 - 1.60); answers only "churn should not rise" with no limit; compares $238.55 with $328 (the new price's LTV at old churn) and calls that the test.

**Weak spot revealed.** `price-vs-churn-limit`. Lesson section: "Using LTV to test a decision". Cannot turn LTV into a limit for a real decision.

## LTV-Q7

**Question.** Illustrative figures. Two fictional businesses both have an LTV of $300, a CAC of $100 and a 3:1 ratio. Business A earns $30 contribution a month with 10% monthly churn. Business B earns $6 a month with 2% monthly churn. Allowing for churn, in which monthly box does each recover its CAC? You have limited cash and could back only one: which do you prefer, and why?

**Marking notes.**
- Answer: A: 300 x (1 - 0.9^n) reaches $100 at n = 4, so the **4th box**. B: 300 x (1 - 0.98^n) reaches $100 at n = 21, so the **21st box**. Prefer A: it needs far less cash to grow, and B's value relies on a low churn estimate holding for years.
- Correct only if: gives the 4th and 21st boxes, prefers A, and gives a reason based on cash or timing, or on reliance on long-range forecasts. The 20th box is accepted for B only if the person shows a total very near $100 ($99.72) and says it is just short or rounds it up. Simple payback alone (4th and 17th) is incorrect, because the question asks to allow for churn.
- Incorrect if: says they are equal because the ratio is the same; prefers B because customers stay longer, with no treatment of cash or forecast risk.

**Weak spot revealed.** `ratio-has-no-clock`. Lesson section: "Trap 6: the ratio has no clock". Reads LTV:CAC without looking at time.
