---
title: "CSV vs XLSX: which format should you use for bank data?"
description: CSV and XLSX both hold bank transactions, but they behave very differently on import, on open and in review. A practical comparison, with the pitfalls of each.
date: 2026-11-02
updated: 2026-11-02
tags: [csv, excel, converting]
author: statement.work team
related: [import-bank-statement-csv-into-accounting-software, why-convert-bank-statements-to-excel-or-csv, bank-statement-formats-explained]
---

Use **CSV** when bank data is going into software, such as accounting packages, databases or scripts, and **XLSX** when people are going to review, format and analyze it. CSV is the universal import format; XLSX is the better working format. Most problems come from using one where the other belongs.

## What each format actually is

**CSV (comma-separated values)** is plain text. Each line is a row; commas separate the values. There are no data types, formatting, formulas or sheets, only characters. You can open a CSV in any text editor and see exactly what's in it.

**XLSX** is Excel's workbook format since Excel 2007. It's a compressed package of structured files that records each cell's value *and its type* (number, date, text), plus formatting, formulas, column widths and multiple sheets. Google Sheets, Apple Numbers and LibreOffice open it too.

## Side by side

| | CSV | XLSX |
|---|---|---|
| Structure | Plain text, one table | Workbook, many sheets |
| Data types | None, everything is text | Numbers, dates, text, etc. |
| Formatting and formulas | No | Yes |
| Accounting software import | Almost universal | Supported by some |
| Opens in a text editor | Yes | No |
| Size for large data | Small | Compressed, also small |
| Risk on open | Spreadsheet guesses types | Types are stored |
| Version control and diffing | Easy | Hard |

## When CSV is the right choice

### Importing into accounting software

Bank-statement importers in accounting and bookkeeping software overwhelmingly expect CSV. It's simple to parse, it has no hidden formatting, and every system can produce it. If the data's next stop is an importer, use CSV. Our [CSV import guide](/guides/import-bank-statement-csv-into-accounting-software/) covers the steps.

### Feeding scripts and databases

Developers reach for CSV (or [JSON](/convert/bank-statement-to-json/)) because it loads with one line of code in almost any language.

### Archiving

A CSV will be readable in decades, by anything. There's no format version to worry about.

## When XLSX is the right choice

### Review and analysis

If a person will sort, filter, pivot, highlight and annotate, XLSX keeps their work. Formulas stay, formatting stays, and a summary sheet can sit next to the data.

### Sending to someone who will double-click it

The person who opens a file in Excel by double-clicking is better served by XLSX, because of the next section.

### Combining several statements

Separate sheets per account, plus a summary sheet, is natural in a workbook and impossible in a single CSV.

## The CSV trap: what happens when a spreadsheet opens it

Because CSV has no types, a spreadsheet *guesses* when you open one. For bank data, the guesses cause real damage:

- **Dates flip.** `03/04/2026` is read according to your computer's regional settings. A UK date opened on a US-configured machine becomes the 4th of March, silently, and only for days 12 and under, so the error is patchy and easy to miss.
- **Leading zeros vanish.** Sort codes, account numbers and references like `00123` become `123`.
- **Long numbers become scientific notation.** A long reference like `123456789012345678` can display as `1.23457E+17`, and saving the file can make the change permanent.
- **Amounts become text.** Values with currency symbols, thousands separators or `CR`/`DR` suffixes may not be recognized as numbers, so totals are wrong.
- **Re-saving rewrites the file.** If you open a CSV, let the spreadsheet reinterpret it, and save, the guesses become the file's contents.

The fix is either to *import* a CSV with explicit column types (Excel's data import tools let you set each column), or to use XLSX, where the types are stored.

## The XLSX trap: what importers do with it

XLSX has its own problems on the software side:

- **Not every importer accepts it**, or accepts it only in certain layouts.
- **Formatting can hide values.** A cell displaying `£1,250` may hold `1250.004`. Importers read the value, not the display.
- **Hidden rows, merged cells and multiple sheets** confuse importers built for one flat table.
- **Formulas** may import as their cached result or not at all.

If you must import from a workbook, keep it as one sheet, one header row, no merged cells and plain values.

## A practical rule for bank data

1. Convert the statement once, into clean data.
2. Export **CSV for anything a machine will read**: imports, scripts, archives.
3. Export **XLSX for anything a person will work on**: reviews, analysis, client deliverables.
4. When you have to open a CSV in a spreadsheet, use the import feature and set date and reference columns explicitly.

Because statement.work produces CSV, Excel and JSON from the same extraction, you don't have to choose up front. Export whichever the next step needs.

## Quick answers

**Is XLSX the same as XLS?** No. XLS is the older binary Excel format; XLSX replaced it in 2007. Prefer XLSX.

**Can CSV hold several accounts?** Only in one table. Add an "account" column to tell them apart.

**Which is smaller?** For bank statements, both are small. Size rarely decides it.

**Which should I keep as a record?** Keep the original PDF statement as the source record, plus CSV if you want a durable data copy.

## Summary

CSV is the language software speaks; XLSX is the workspace people use. Pick by the next step, not by habit, and watch for spreadsheets quietly reinterpreting CSV dates and references. For more on the conversion itself, see [PDF to CSV](/convert/bank-statement-pdf-to-csv/) and [PDF to XLSX](/convert/bank-statement-pdf-to-xlsx/).
