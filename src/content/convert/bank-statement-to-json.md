---
title: Convert a bank statement to JSON
metaTitle: "Bank Statement to JSON: Structured Transaction Data | statement.work"
description: Convert bank statement PDFs, scans and photos into JSON with typed dates and amounts for scripts, apps and databases. What the JSON looks like and when to use it over CSV.
lede: statement.work exports bank statement transactions as JSON, a structured text format that scripts, apps and databases can read directly, with each transaction's date, description, amount, running balance and category as separate fields.
updated: 2026-11-02
order: 6
nav: Statement to JSON
related:
  - /convert/bank-statement-pdf-to-csv/
  - /guides/bank-statement-formats-explained/
  - /glossary/
  - /guides/manual-data-entry-vs-automated-extraction/
faqs:
  - q: When should I use JSON instead of CSV?
    a: Use JSON when a program will process the data, such as a script, an internal tool or a database load, and you want typed fields without parsing quirks. Use CSV for spreadsheets and accounting software imports.
  - q: Can I convert a scanned statement to JSON?
    a: Yes. Scans, photos and digital PDFs all produce the same structured output, which you can export as JSON, CSV or Excel.
  - q: Is the JSON structure the same for every bank?
    a: Yes. statement.work produces the same consistent fields whichever bank issued the statement, so code written for one bank works for the rest.
---

## What JSON is good for

JSON (JavaScript Object Notation) is the format most software uses to pass data around. Where CSV is a flat grid of text, JSON holds named fields, so a program doesn't have to guess which column is which or whether `03/04` is March or April. If statement data is heading into code rather than a spreadsheet, JSON is usually the easier format to work with.

Typical uses:

- Loading transactions into a database or data warehouse.
- Feeding an internal dashboard or a reporting script.
- Running your own checks, such as matching statement lines against invoices.
- Building a workflow that processes many statements the same way.

## What the output looks like

An illustrative example of transaction records:

```json
[
  {
    "date": "2026-07-02",
    "description": "Amazon Marketplace",
    "category": "Supplies",
    "amount": -86.40,
    "balance": 4123.95
  },
  {
    "date": "2026-07-03",
    "description": "Stripe payout",
    "category": "Income",
    "amount": 2315.00,
    "balance": 6438.95
  }
]
```

*Illustrative structure and data.*

<!-- [TODO] Confirm the exact JSON field names and any statement-level fields (account, period, currency) against the production export. -->

## Why consistent structure matters

The hard part of working with bank data in code is rarely parsing JSON; it is coping with every bank doing things differently. One statement shows debits as negatives, another uses a separate column; one writes dates day-first, another month-first. statement.work normalizes all of that, so every statement produces the same fields in the same form, and code written against one bank's statements works for the next.

## Getting JSON from a statement

1. Upload a PDF, scan or photo of the statement to statement.work.
2. Review the extracted transactions.
3. Export as JSON.
4. Load it with any JSON parser, in Python, JavaScript or another language.

## Checks worth automating

Because JSON makes the data easy to process, it is also easy to verify:

- Sum the amounts and compare with closing balance minus opening balance.
- Recompute the running balance row by row and flag any break.
- Check dates fall inside the statement period.
- Look for identical date, description and amount combinations (possible [duplicate charges](/guides/how-to-spot-duplicate-charges-and-hidden-fees/)).

## Other formats

For spreadsheets and accounting imports, use [CSV](/convert/bank-statement-pdf-to-csv/) or [Excel](/convert/bank-statement-pdf-to-excel/). All three exports come from the same extraction, so you can switch formats without converting again.
