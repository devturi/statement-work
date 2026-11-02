---
title: How bookkeepers reconcile bank statements faster
description: A practical bank reconciliation routine, from getting the bank side into clean data to matching, investigating differences and documenting the result.
date: 2026-11-02
updated: 2026-11-02
tags: [reconciliation, bookkeeping]
author: statement.work team
related: [how-to-categorize-bank-transactions, import-bank-statement-csv-into-accounting-software, how-to-spot-duplicate-charges-and-hidden-fees]
---

The fastest bank reconciliations come from three habits: get the bank side into clean data before you start, match in a fixed order (exact matches first, then the rest), and investigate only the differences that remain. Most of the time lost in reconciliation goes on preparing data and hunting, not on the matching itself.

## What reconciliation is for

Bank reconciliation compares two records of the same money: the bank's (the statement) and yours (the books or accounting software). The goal is to show they agree, or to explain exactly why they don't, at a given date. Typical explanations are timing differences such as uncleared checks and deposits in transit, items missing from the books like bank fees and interest, and errors on either side.

## Step 1: Get the bank side into data

You can't match quickly against a PDF. If transactions are already in your software from a reliable bank feed, start there. If not, because the feed is missing, broken or doesn't reach back far enough, convert the statements into CSV or Excel first.

Whatever the source, the bank data should have:

- one row per transaction,
- a date, a description, a single signed amount and a running balance,
- nothing else: no headers, subtotals or brought-forward lines.

Before anything else, **check the bank data against itself**: opening balance plus amounts equals closing balance. If the bank side doesn't add up, everything after it is wasted effort.

## Step 2: Agree the starting point

Confirm the opening balance on the statement equals the closing balance of the last reconciled period. If it doesn't, a previous reconciliation has an issue, or a statement is missing. Fix that before going on.

## Step 3: Match in a fixed order

Work from easiest to hardest so the hard set stays small.

1. **Exact matches:** same amount, same date. These are most of your transactions.
2. **Same amount, nearby date:** card payments and checks often clear a day or more after they're recorded. Allow a window of a few days.
3. **Many-to-one:** one bank deposit made up of several receipts, like a card processor's batched payout, or one payment covering several bills.
4. **Everything left:** this is the list you actually have to think about.

In a spreadsheet, sorting both sides by amount puts most matches next to each other. A helper column that counts how often each amount appears on each side shows the unmatched ones instantly.

## Step 4: Explain what's left

Typical leftovers and what to do with each:

| Leftover | Usually means | Action |
|---|---|---|
| On the statement, not in the books | Bank fee, interest, direct debit not recorded | Record it |
| In the books, not on the statement | Uncleared check, deposit in transit | List as reconciling item |
| Amounts differ slightly | Typo, FX difference, fee netted off | Correct the error |
| Appears twice on the statement | Possible duplicate charge | Query with vendor or bank |
| Appears twice in the books | Duplicate entry | Remove one |

Bank fees are the classic "missing from books" item, small and frequent. Our guide to [spotting duplicate charges and hidden fees](/guides/how-to-spot-duplicate-charges-and-hidden-fees/) covers what to look for.

## Step 5: Prove it and document it

A finished reconciliation shows:

- **Statement closing balance**
- minus or plus **outstanding items** (uncleared checks, deposits in transit),
- equals **the book balance** at the same date.

Save the reconciliation with the list of outstanding items. Next month, check that those items have cleared. An item that never clears is worth investigating.

## Where the time actually goes, and how to save it

### Preparing data

Retyping or cleaning pasted statements is usually the largest single cost, especially for clients without bank feeds or with scanned statements. Converting statements into consistent columns removes it. statement.work produces the same columns for every bank, so the same matching spreadsheet works for every client.

### Hunting for one transaction

"Where's that £240 payment?" is fast in sorted data and slow in a PDF. Keep everything in data.

### Re-deciding categories

Categorizing as you reconcile, with a fixed list, means recurring transactions are decided once. See [how to categorize bank transactions](/guides/how-to-categorize-bank-transactions/).

### Batched deposits

Card processor payouts are net of fees and cover many sales. Match them to the processor's payout report, then record the fee separately. Trying to match individual sales to the bank is a time sink.

### Leaving it too long

Reconciling monthly keeps the leftover list short and the evidence fresh. Quarterly or annual reconciliations turn small timing items into archaeology.

## A spreadsheet setup that works

For clients reconciled in a spreadsheet:

1. **Bank sheet:** converted statement rows (date, description, amount, balance, category).
2. **Books sheet:** export from the ledger for the same account and period.
3. **Match key** on each: amount (rounded to cents) plus an occurrence number for repeated amounts.
4. **Lookup** from each side to the other to mark matched or unmatched.
5. **Summary:** statement balance, outstanding items, book balance and the difference, which should be zero.

Build it once with consistent bank columns and it works for every client.

## Summary

Reconciliation speed comes from clean inputs and a fixed matching order. Get the bank side into data that adds up, match exact items first, explain the short list that remains, and document outstanding items. If statements arrive as PDFs or scans, [convert them to CSV](/convert/bank-statement-pdf-to-csv/) first. That's where the hours are. For bookkeepers specifically, see [statement.work for bookkeepers](/for/bookkeepers/).
