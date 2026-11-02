---
title: Convert a bank statement PDF to Excel
metaTitle: "Bank Statement PDF to Excel Converter | statement.work"
description: Turn bank statement PDFs into clean Excel spreadsheets with every transaction's date, description, amount and running balance in the right column. Any bank, any layout.
lede: To convert a bank statement PDF to Excel, upload the PDF to statement.work and download an Excel file with one row per transaction and the same columns every time. There is no template to set up and nothing to retype.
updated: 2026-11-02
order: 1
nav: PDF to Excel
related:
  - /guides/how-to-convert-bank-statement-pdf-to-excel/
  - /convert/bank-statement-pdf-to-xlsx/
  - /convert/bank-statement-pdf-to-csv/
  - /for/bookkeepers/
faqs:
  - q: Can I convert a bank statement PDF to Excel for free?
    a: Pricing for statement.work has not been published yet; it is in early access. You can always copy a statement into Excel by hand or with Excel's own PDF import, and our [method comparison](/guides/how-to-convert-bank-statement-pdf-to-excel/) explains the trade-offs.
  - q: Why does copying from a PDF into Excel break the columns?
    a: A PDF stores text as positioned fragments, not as a table. When you paste, Excel guesses where columns begin, so dates, descriptions and amounts often land in the wrong cells or wrap across rows.
  - q: Does the Excel file keep the running balance?
    a: Yes. Every transaction comes out with its date, description, amount and running balance, so you can check each row against the statement.
---

## The short answer

Upload the statement, let statement.work extract the transactions, and download the result as an Excel workbook. Each row is one transaction. Each column holds one kind of value: **date, description, amount, running balance**, and a category. The layout is the same whichever bank issued the statement, so files from different banks can be stacked or compared without reformatting.

## Why PDF to Excel is harder than it looks

A bank statement PDF looks like a table, but it isn't one. Inside the file, every word and number is a separate fragment placed at x and y coordinates on the page. Nothing says "this belongs to column three". That causes the familiar problems:

- **Pasted columns collapse.** Copying from a PDF viewer usually gives one long line per row, or every value on its own line.
- **Descriptions wrap.** A long merchant name that spans two lines turns into two rows, one with no amount.
- **Debits and credits split.** Many statements put money in and money out in separate columns. If one is blank, everything to its right shifts.
- **Page breaks repeat headers.** Column headings, page numbers and "continued" lines appear in the middle of the data.
- **Numbers arrive as text.** Thousands separators, currency symbols and trailing minus signs stop Excel treating amounts as numbers.

statement.work reads the statement as a whole document rather than copying text fragments, so it rebuilds the rows and columns the way a person reading the page would.

## How to do it

1. **Get the original PDF.** Download it from online banking if you can. A digital PDF has cleaner text than a printed-and-scanned copy.
2. **Upload it to statement.work.** Several statements at once is fine.
3. **Review the extracted table.** Every line has a date, description, amount and running balance, plus a category.
4. **Export to Excel.** You get a workbook you can sort, filter, total and pivot straight away.
5. **Check the totals.** Opening balance plus credits minus debits should equal the closing balance on the statement.

## What the Excel file looks like

| Date | Description | Category | Amount | Balance |
|---|---|---|---|---|
| 2026-07-02 | Amazon Marketplace | Supplies | -86.40 | 4,123.95 |
| 2026-07-03 | Stripe payout | Income | 2,315.00 | 6,438.95 |
| 2026-07-05 | Hollis Property Mgmt | Rent | -1,850.00 | 4,588.95 |

*Illustrative data.* Dates are in one consistent format, amounts are real numbers with money out as negatives, and the description is cleaned up, so the sheet is ready for formulas.

## Excel or CSV?

Choose Excel when a person will open, review and work on the data. Choose [CSV](/convert/bank-statement-pdf-to-csv/) when the file is going into accounting software or another tool, because almost every importer accepts it. If someone has specifically asked for an `.xlsx` workbook, the [PDF to XLSX page](/convert/bank-statement-pdf-to-xlsx/) covers what that format adds. The [CSV vs XLSX guide](/guides/csv-vs-xlsx-for-bank-data/) goes deeper.

## When you'll want this

- Month-end bookkeeping for clients who send PDF statements rather than bank feeds.
- Catching up on a backlog of months or a year of statements at once.
- Building a cash flow view or [categorizing spending](/guides/how-to-categorize-bank-transactions/) in a spreadsheet.
- Preparing figures for an accountant or for [tax season](/guides/tax-season-bank-statement-checklist/).
