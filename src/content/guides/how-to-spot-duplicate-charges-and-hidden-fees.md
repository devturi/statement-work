---
title: How to spot duplicate charges and hidden fees in a bank statement
description: Where duplicate charges and creeping fees hide on a bank statement, how to find them quickly in a spreadsheet, and what to do when you find one.
date: 2026-11-02
updated: 2026-11-02
tags: [fees, reconciliation, bookkeeping]
author: statement.work team
related: [how-to-categorize-bank-transactions, how-bookkeepers-reconcile-bank-statements-faster, why-convert-bank-statements-to-excel-or-csv]
---

To spot duplicate charges, look for transactions with the same payee and amount close together in date; to spot hidden fees, filter for the bank's own charges and for small recurring amounts, then compare them month to month. Both are slow to find by reading a PDF and fast once the statement is in a spreadsheet.

## Why they're easy to miss

Statements are in date order. A duplicate charge sits among dozens of other lines; a fee is a small number between larger ones. Nothing on the page draws attention to them, and people naturally check the big numbers, not the small repeated ones.

## Duplicate charges

### What they look like

- **Exact duplicates:** same merchant, same amount, same date. Often a payment retried after an error, or a double-submitted card payment.
- **Near duplicates:** same merchant and amount, a day or two apart, such as a subscription billed twice after a plan change.
- **Same invoice paid twice:** two transfers to a supplier for the same amount, sometimes from different accounts.

### What aren't duplicates

Not every repeat is an error:

- Regular purchases of the same item (two coffees, two train tickets).
- Daily card processor settlements of similar amounts.
- Card authorizations that are later reversed. These may appear and then cancel out.
- Installments or split payments.

So the goal is a short list to *review*, not an automatic deletion.

### How to find them in a spreadsheet

1. Sort by description, then amount, then date.
2. Add a helper column that flags a row when the description and amount match the row above and the date is within a few days.
3. Filter to flagged rows and check each one against invoices or receipts.

statement.work flags duplicate charges for you, so the review list arrives with the conversion.

## Hidden fees

### Where fees hide

- **Monthly account or maintenance fees**, sometimes waived under conditions that stop being met.
- **Transaction charges** on business accounts, often summarized and taken as one debit.
- **Foreign transaction and currency conversion fees**, separate small lines after purchases abroad.
- **Overdraft, returned item and late fees.**
- **Wire and payment fees** for same-day or international transfers.
- **Card processor fees** netted off deposits, so they never appear as a line at all.
- **Price rises on subscriptions**, not a bank fee but the same problem: a recurring cost quietly growing.

### How to find them

1. **Filter for the bank's own charges.** Fee lines usually use words like "fee", "charge", "service charge" or "interest".
2. **Group small recurring amounts.** Sort by payee and look at anything that appears every month.
3. **Compare month to month.** A pivot of category × month shows fee spikes immediately: a bank fee line that was 12.00 and is now 18.00 stands out in a grid.
4. **Check deposits against gross sales.** If payouts are always lower than sales, the difference is fees. Make sure they're recorded.

statement.work flags fee spikes and unusual transactions, which gives you a head start on this list.

## A monthly five-minute check

| Check | How | Why |
|---|---|---|
| Duplicate charges | Same payee + amount within a few days | Money to recover |
| Bank fees total | Filter fee lines, compare with last month | Spot new or rising charges |
| Subscription list | Payees with monthly charges | Cancel what isn't used |
| Unusual payees | Payees never seen before | Errors or fraud |
| Large one-offs | Sort by amount | Confirm they're expected |

## What to do when you find one

### A duplicate charge

1. Confirm with the receipt or invoice that only one purchase was made.
2. Contact the merchant first; most will refund a genuine double charge.
3. If that doesn't work, contact the bank or card issuer about disputing it. There are usually time limits, so don't wait.
4. Record the refund when it arrives and match it to the original.

### A fee you didn't expect

1. Check the bank's fee schedule for what triggered it.
2. Ask the bank whether it can be refunded, especially if it's a first occurrence.
3. Change what triggered it (balance minimums, payment method, account type).
4. Make sure the fee is recorded in the books, since it's a real expense.

### Something you don't recognize

Treat unknown payees seriously. Check with whoever uses the account, and if nobody recognizes it, contact the bank promptly.

## Why this matters more than it looks

A single duplicate or fee is usually small. The cost is in repetition: a recurring fee or forgotten subscription runs every month until someone notices. Checking monthly, with data you can sort, turns noticing into a routine.

## Summary

Duplicates are same payee, same amount, close dates. Fees are the bank's own lines plus small recurring charges. Both surface in minutes once the statement is a spreadsheet. If yours are PDFs, start with [PDF to Excel](/convert/bank-statement-pdf-to-excel/), then make this check part of your [reconciliation routine](/guides/how-bookkeepers-reconcile-bank-statements-faster/).
