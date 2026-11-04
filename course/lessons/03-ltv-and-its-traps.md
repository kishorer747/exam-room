# Lesson 3: LTV and its traps

> **Every figure in this lesson is illustrative and invented for teaching.** Tallow Street Beans is a fictional business. Any resemblance to a real one is coincidence.

Lifetime value (LTV) estimates the contribution a customer brings over their whole time with you. It is a forecast, and it is easy to flatter.

## The formula

LTV = CM per period / churn per period. Expected lifetime in periods is 1 / churn.

With $13 CM and 10% monthly churn (illustrative), the lifetime is 10 months and **LTV is $130**. The formula assumes the first box is earned for certain and churn stays constant.

## Trap 1: using revenue

Revenue LTV is 30 / 0.10 = $300, and $300 / $60 CAC looks like 5:1. The real ratio is 130 / 60 = **2.17:1**. Against the blended $40 CAC it is 3.25:1, so state which CAC you mean.

You will often hear 3:1 quoted as a target. Treat that as a rule of thumb, not a law.

## Trap 2: one churn number for two kinds of customer

Take 1,000 new customers (illustrative): 500 casual buyers with 30% monthly churn and 500 regulars with 5% churn.

- Blended churn in month one is (150 + 25) / 1,000 = 17.5%, which gives LTV of 13 / 0.175 = **$74.29**.
- Worked out by group, LTV is $43.33 and $260, which average to **$151.67**.

The blended figure is wrong because the leavers go first. After month one there are 350 and 475 left, so churn falls to (105 + 23.75) / 825 = 15.6% **with nothing improved**. Falling churn may only mean the mix has changed. The opposite mistake is taking the regulars' 5% for everyone, which gives $260. Look at groups, or at retention curves by the month customers joined.

## Trap 3: claiming years from months of data

A young business reports 2% churn (illustrative) and so an LTV of 13 / 0.02 = $650, a 50-month lifetime. If it is 6 months old, nobody has yet stayed 50 months. If churn is really 4%, LTV halves to $325, so a small error in a small number moves the answer a lot.

Cap the horizon at what you can defend. The value of the first *n* periods is LTV x (1 - retention^n). Over 36 months that is 650 x (1 - 0.98^36) = **$335.91**.

## Trap 4: treating future money as today's

Money later is worth less. With a monthly discount rate *d*, and the first box earned today:

Discounted LTV = CM x (1 + d) / (churn + d)

At 1% a month, 13 x 1.01 / 0.11 = **$119.36**, not $130. The longer customers stay, the bigger the fall, so low-churn LTVs shrink most.

## Trap 5: a cheap CAC that buys poor customers

A half-price first box brings customers at a $25 CAC (illustrative), but they churn at 25% after that box.

- First box at $15: 15 - 16.10 - 0.45 = -$1.55.
- Later boxes: 13 x (0.75 / 0.25) = $39.00.
- LTV = $37.45, so the net per customer is 37.45 - 25 = **$12.45**.

The normal paid customer nets 130 - 60 = **$70**. The cheaper CAC is worse per customer. Compare net value per customer, then ask how many more customers the cheap route really brings: here it would need more than 5.6 times as many.

## Trap 6: the ratio has no clock

LTV:CAC says nothing about time. Two businesses can both show 3:1 while one gets its money back in months and the other in years. The slower one needs more cash and relies more on forecasts about the far future. Always read the ratio alongside payback from Lesson 2.

## Using LTV to test a decision

A price rise to $33 (illustrative) lifts CM to 33 - 16.10 - 0.99 = $15.91. It is worth it only if LTV stays above $130, so churn must stay under 15.91 / 130 = **12.24%**. At 13% churn, LTV is $122.38 and the rise has lost money. Calculate this limit before you change the price, and you will know what to watch for.

## Remember

1. Use contribution, not revenue.
2. Split customers into groups before you trust a churn number.
3. Cap and discount any long lifetime.
4. Compare net value per customer, and read the ratio with payback.
