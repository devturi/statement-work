---
title: How to import bank statement CSV files into accounting software
description: General steps for importing bank transactions from CSV into accounting software, including preparing the file, mapping columns, handling dates and signs, and avoiding duplicates.
date: 2026-11-02
updated: 2026-11-02
tags: [accounting-software, csv, bookkeeping]
author: statement.work team
related: [csv-vs-xlsx-for-bank-data, how-bookkeepers-reconcile-bank-statements-faster, how-to-categorize-bank-transactions]
---

To import a bank statement CSV into accounting software, prepare a clean file with one header row and one row per transaction, open the bank account's import option in your software, map each column (date, description, amount) to the right field, confirm the date format and sign convention, then import and check the balance. The details differ between products, but these steps are nearly universal.

This guide is deliberately general. statement.work produces clean CSV files for this purpose but does not claim a native integration with any specific accounting product, so always follow your software's own import documentation.

## When you need a CSV import

Most accounting software prefers bank feeds, which pull transactions automatically. CSV import fills the gaps:

- The bank doesn't offer a feed, or the connection broke.
- The feed doesn't go back far enough for catch-up work.
- You only have PDF statements, for example from a client or a closed account.
- You're migrating historical data.

## Step 1: Prepare a clean file

Importers are strict. Before you start:

- **One header row**, then transactions only. No titles, blank rows, subtotals or "balance brought forward" lines.
- **One transaction per row**, with no descriptions split across rows.
- **Consistent columns**: at minimum date, description and amount.
- **Plain numbers** in amount columns: no currency symbols, no thousands separators unless your software accepts them, no `CR`/`DR` text.
- **One account per file.** Import each bank account separately.

If you're starting from PDF statements, [convert them to CSV](/convert/bank-statement-pdf-to-csv/) first. A converter that outputs the same columns every time means your column mapping stays the same every month.

## Step 2: Check dates and signs

These two cause most failed or wrong imports.

### Date format

Find out which date formats your software accepts. A file with `03/04/2026` means the 3rd of April to a UK system and March 4th to a US one. An unambiguous format such as `2026-04-03` (year-month-day) avoids the problem where it's supported. Never mix formats within a file.

### Sign convention

Importers expect either:

- **One amount column** with money out negative and money in positive, or
- **Two columns**, one for money in and one for money out, both positive.

Some let you choose at the mapping step. Know which your file uses. A file imported with the wrong convention turns every payment into a receipt.

## Step 3: Find the import option

In most accounting software, the import lives on the bank account itself, labeled something like "import statement", "upload transactions" or "import bank file". You usually select the bank account first, then the file. Check your software's help center for the exact path.

## Step 4: Map the columns

The first time, you tell the importer which CSV column is which:

| Your CSV column | Usually maps to |
|---|---|
| date | Transaction date |
| description | Description / payee / memo |
| amount | Amount (signed), or split into money in / money out |
| balance | Often not imported; useful for checking |
| category | Sometimes imported as a reference; otherwise used in your rules |

Many importers remember the mapping per account, which is why consistent columns pay off. Next month's file imports with no setup.

## Step 5: Avoid duplicates

Importing overlapping periods creates duplicate transactions.

- Import **whole statement periods** that join up exactly.
- Check the last transaction date already in the software before importing.
- If a bank feed is also connected, don't import the same dates by CSV unless you've confirmed the feed is missing them.
- Some importers warn about likely duplicates. Read the warnings.

## Step 6: Import a small test

Import one statement first. Check:

- The number of transactions matches.
- A few amounts and dates are exactly right, including one payment and one receipt.
- The software's account balance after import agrees with the statement's closing balance (allowing for any opening balance you entered).

Then import the rest.

## Step 7: Categorize and reconcile

Imported transactions still need categorizing (or matching to existing entries) and reconciling. Bank rules, which auto-assign categories based on payee, save the most time. Our guides on [categorizing transactions](/guides/how-to-categorize-bank-transactions/) and [reconciling faster](/guides/how-bookkeepers-reconcile-bank-statements-faster/) cover both.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| "Invalid date" errors | Wrong or mixed date format | Use one supported format throughout |
| Day and month swapped | Regional format mismatch | Use year-month-day or match your locale |
| Payments show as receipts | Wrong sign convention | Flip the mapping or the signs |
| Amounts wrong by 100x or 1000x | Thousands/decimal separators | Remove separators; use a period decimal |
| Import rejects the file | Extra header lines or blank rows | Keep exactly one header row |
| Leading zeros lost in references | File opened and re-saved in a spreadsheet | Edit CSVs with care; see [CSV vs XLSX](/guides/csv-vs-xlsx-for-bank-data/) |

## Summary

Clean file, correct dates, correct signs, consistent mapping, a test import, then categorize and reconcile. The hardest part is usually the first: getting PDFs into a clean CSV. That's the part statement.work handles.
