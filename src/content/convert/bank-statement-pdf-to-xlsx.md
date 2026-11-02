---
title: Convert a bank statement PDF to XLSX
metaTitle: "Bank Statement PDF to XLSX (Excel Workbook) | statement.work"
description: Convert bank statement PDFs into .xlsx workbooks with real dates and numeric amounts, ready for formulas, filters and pivot tables. What XLSX adds over CSV.
lede: statement.work converts bank statement PDFs into .xlsx files, the standard Excel workbook format, with dates stored as dates and amounts stored as numbers, so formulas, filters and pivot tables work immediately.
updated: 2026-11-02
order: 3
nav: PDF to XLSX
related:
  - /guides/csv-vs-xlsx-for-bank-data/
  - /convert/bank-statement-pdf-to-excel/
  - /guides/how-to-categorize-bank-transactions/
  - /for/accountants/
faqs:
  - q: Is XLSX the same as Excel?
    a: XLSX is the file format Excel has used by default since Excel 2007. When people say "an Excel file" today they almost always mean an .xlsx workbook; older .xls files use a different, legacy format.
  - q: Can Google Sheets and Numbers open XLSX?
    a: Yes. Google Sheets, Apple Numbers and LibreOffice Calc can all open .xlsx files, so an XLSX export is not tied to Microsoft Excel.
  - q: When should I choose CSV instead of XLSX?
    a: Choose CSV when the file is going into accounting software or another program, because importers almost universally accept CSV. Choose XLSX when people will review or work with the data.
---

## XLSX in one sentence

XLSX is the modern Excel workbook format: a compressed package that can hold typed values (dates, numbers, text), formatting, formulas and multiple sheets, which plain-text CSV cannot.

## Why the format matters for bank data

When someone asks for "the statement in Excel", what they usually need is a file where the numbers behave like numbers. That is where XLSX earns its place:

| Need | CSV | XLSX |
|---|---|---|
| Dates sort and filter as dates | Depends on how the app guesses | Stored as dates |
| Amounts add up with `SUM` | Usually, if cleanly formatted | Stored as numbers |
| Keeps formatting and column widths | No | Yes |
| Multiple sheets in one file | No | Yes |
| Accepted by accounting importers | Almost always | Sometimes |
| Readable in any text editor | Yes | No |

The trap with CSV opened directly in a spreadsheet is silent conversion. A spreadsheet may read `03/04/2026` with the wrong locale, drop leading zeros from reference numbers, or turn a long account reference into scientific notation. An XLSX file states each value's type, so there is no guessing on open.

## How to get an XLSX from a statement PDF

1. Upload the statement PDF (or a scan or photo) to statement.work.
2. Review the extracted rows: date, description, amount, running balance and category.
3. Export to Excel. The file you download is an `.xlsx` workbook.
4. Open it in Excel, Google Sheets, Numbers or LibreOffice.

## What to do with it next

Because values arrive typed, you can start analysis straight away:

- **Totals by category:** a pivot table with category as rows and the sum of amount as values.
- **Month-by-month cash flow:** group dates by month in a pivot table.
- **Checking the statement:** a running total formula next to the balance column shows any row where the two diverge.
- **Spotting fees and duplicates:** sort by description, then amount. Repeated identical rows and small recurring charges stand out. Our guide on [duplicate charges and hidden fees](/guides/how-to-spot-duplicate-charges-and-hidden-fees/) has more.

## Combining several statements

Every export uses the same columns in the same order, whichever bank the statement came from. That makes it simple to paste several months, or several accounts, into one sheet and add a column for the account name. For a year-end or [tax preparation](/for/tax-preparation/) workbook, this is usually the fastest route.

## Related pages

The general [PDF to Excel page](/convert/bank-statement-pdf-to-excel/) covers the conversion itself. If your next step is an import, read [CSV vs XLSX](/guides/csv-vs-xlsx-for-bank-data/) first.
