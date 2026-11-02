---
title: "Bank statement formats explained: what's on a statement and why it varies"
description: The parts every bank statement has, the ways layouts differ between banks and countries, and why those differences break copy-paste and template-based converters.
date: 2026-11-02
updated: 2026-11-02
tags: [statement-basics, converting]
author: statement.work team
related: [why-scanned-bank-statements-are-hard-to-convert, csv-vs-xlsx-for-bank-data, how-to-convert-bank-statement-pdf-to-excel]
---

Every bank statement contains the same core information (who and which account, the statement period, an opening balance, a list of transactions and a closing balance), but each bank arranges it differently. Dates, amount columns, signs, descriptions and page structure all vary, and those variations are what make statements hard to convert consistently.

## What every statement has

### Header

The account holder's name and address, the bank's details, the account identifier (often partially masked) and, in the UK, the sort code.

### Statement period

The date range covered, such as 1 to 31 July. Periods don't always match calendar months, which matters when you combine statements or work to a tax year.

### Summary

Opening balance, total money in, total money out, closing balance. Some banks add counts of transactions, fees charged and interest.

### Transactions

One line (or more) per transaction, with a date, a description, an amount and often a running balance.

### Notices and small print

Fee schedules, interest rates, regulatory notices and, on some statements, check images or a key to transaction codes.

## Where statements differ

### Dates

| Variation | Example | Risk |
|---|---|---|
| Month-first (common in the US) | `07/03` | Read as 7 March elsewhere |
| Day-first (common in the UK) | `03/07` or `03 Jul` | Read as 7 March in the US |
| Year omitted on each line | `07/03` | Year must come from the statement period |
| Date printed once per day | First row only | Other rows have no date |
| Posting date vs transaction date | Two date columns | Choose one consistently |

Statements that cross a year boundary (a period from mid-December to mid-January) make the year-omitted style especially error-prone.

### Amounts

- **One signed column:** money out shown as negative.
- **Two columns:** "withdrawals/deposits" or "paid out/paid in", both positive.
- **Suffixes:** `CR` and `DR` after the number.
- **Brackets:** `(86.40)` for money out, the accounting convention.
- **Separators:** `1,850.00` in the US and UK; many European formats write `1.850,00`.

All represent the same thing, and all must end up as one signed number for analysis.

### Running balance

Some statements show a balance after every transaction, some once per day, some not at all. Credit card statements usually don't, and rely on the summary instead.

### Grouping

Many US statements group transactions by type (deposits, electronic withdrawals, checks, card purchases), each with its own subtotal. Many UK statements list everything in date order with type codes. Grouped statements need merging back into date order to follow the balance.

### Descriptions

Descriptions mix merchant names, locations, reference numbers, card numbers and type codes. They often wrap onto a second line. The same payee can look different from one month to the next.

### Type codes

UK statements in particular often use short codes, such as DD (direct debit), SO (standing order) or a code for card payments, with a key on the statement. The codes differ between banks.

### Pages

Multi-page statements repeat column headers and page numbers, and some print "balance brought forward" or "carried forward" lines at page breaks. None of these are transactions.

### Card vs bank statements

Credit card statements are built around a different summary (previous balance, purchases, payments, interest, new balance, minimum payment) and the opposite sign logic: purchases increase what you owe.

## Why layouts change over time

Even one bank's statements vary: banks redesign documents, migrate systems, merge with other banks and offer different account types. A client's five-year history can include several designs. That's why approaches that depend on a fixed layout keep breaking.

## Why this breaks conversion

- **Copy-paste** sees text positions, not columns, so variations in spacing and wrapping scramble the output.
- **Template-based converters** need a layout defined in advance for each bank and design. A new bank or a redesign means a new template.
- **Generic table extraction** handles the layout of one page but not statement logic: wrapped descriptions, dates carried down, brought-forward lines, two amount columns.

statement.work takes a different approach: it reads the statement as a document, not a fixed format, and normalizes the result into the same columns (date, description, signed amount, running balance, category) for any bank. That's what makes statements from different banks line up.

## What a normalized statement looks like

| Date | Description | Category | Amount | Balance |
|---|---|---|---|---|
| 2026-07-02 | Amazon Marketplace | Supplies | -86.40 | 4,123.95 |
| 2026-07-03 | Stripe payout | Income | 2,315.00 | 6,438.95 |

*Illustrative data.* One date format, one signed amount, a balance on every row and no structural lines. Whatever the source looked like.

## Summary

The information on a statement is standard; the arrangement isn't. Dates, amounts, balances, grouping, descriptions and page furniture all vary by bank, country, account type and year. Normalizing those differences is the real work of conversion. For per-bank notes, see the [bank pages](/banks/); for definitions, see the [glossary](/glossary/).
