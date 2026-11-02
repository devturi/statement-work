---
title: Convert a bank statement PDF to CSV
metaTitle: "Bank Statement PDF to CSV Converter | statement.work"
description: Convert bank statement PDFs into clean CSV files with consistent columns, ready to import into accounting software or any spreadsheet. Works with any bank's layout.
lede: To convert a bank statement PDF to CSV, upload it to statement.work and export a CSV file with one row per transaction and consistent columns (date, description, amount, running balance and category), ready to import into accounting software or a spreadsheet.
updated: 2026-11-02
order: 2
nav: PDF to CSV
related:
  - /guides/import-bank-statement-csv-into-accounting-software/
  - /guides/csv-vs-xlsx-for-bank-data/
  - /convert/bank-statement-pdf-to-excel/
  - /glossary/
faqs:
  - q: What is a bank statement CSV?
    a: A bank statement CSV is a plain-text file where each line is one transaction and commas separate the columns, such as date, description, amount and balance. Almost every spreadsheet and accounting tool can import it.
  - q: My bank only lets me download a few months as CSV. What about older months?
    a: Many banks only offer CSV downloads for recent activity, while older months are available only as PDF statements. Converting those PDFs gives you CSV files in the same layout for every month.
  - q: Will the CSV import into my accounting software?
    a: Most accounting software can import bank transactions from CSV, usually after you match the columns once. statement.work does not claim a native integration with any specific product; see the [CSV import guide](/guides/import-bank-statement-csv-into-accounting-software/).
---

## The short answer

Upload the PDF to statement.work and choose CSV as the export. The file has a header row and one row per transaction, with the **same columns in the same order** every time, so the import mapping you set up once keeps working for every bank and every month.

## Why CSV is the format importers want

CSV (comma-separated values) is the lowest common denominator of data exchange. It is plain text, has no formatting to get in the way, and nearly every accounting package, spreadsheet, database and script can read it. That is why bank-transaction importers ask for CSV rather than PDF or Excel.

The catch is that a CSV is only useful if it's clean. An importer will reject or silently mangle a file where:

- **Columns move around** between files, so last month's mapping no longer fits.
- **Dates are ambiguous.** Is `03/04/2026` the 3rd of April or the 4th of March? Day-first and month-first statements both exist.
- **Amounts carry formatting**, like currency symbols, thousands separators, or `CR`/`DR` suffixes, instead of plain numbers.
- **Debits and credits sit in separate columns** when the importer expects one signed amount (or the reverse).
- **Header lines, page footers and subtotals** are mixed in with transactions.

statement.work produces CSV that avoids those traps: one consistent date format, signed numeric amounts, and only transaction rows under a single header.

## How to convert a statement PDF to CSV

1. Download the statement PDF from online banking, or use the scan or photo you were sent.
2. Upload it to statement.work. You can upload several statements together.
3. Check the extracted transactions.
4. Export as CSV.
5. Import the file into your accounting software or spreadsheet, mapping the columns the first time.

## What's in the file

```
date,description,category,amount,balance
2026-07-02,Amazon Marketplace,Supplies,-86.40,4123.95
2026-07-03,Stripe payout,Income,2315.00,6438.95
2026-07-05,Hollis Property Mgmt,Rent,-1850.00,4588.95
```

*Illustrative data.* Money out is negative and money in is positive. If your importer wants separate debit and credit columns instead, most let you choose that at the mapping step, or you can split them with a formula.

## CSV checks before you import

- **Open it in a text editor once.** You'll see exactly what the importer sees, without a spreadsheet reformatting dates on you.
- **Confirm the date format** your software expects, especially if you work with both US and UK statements.
- **Compare the total** of the amount column with the statement's net movement (closing balance minus opening balance).
- **Import one statement first**, check it, then do the rest.

## Related formats

If people will review the data rather than a machine, [Excel](/convert/bank-statement-pdf-to-excel/) is friendlier. If a developer or script needs nested, typed data, use [JSON](/convert/bank-statement-to-json/). The [glossary](/glossary/) explains terms like delimiter and running balance.
