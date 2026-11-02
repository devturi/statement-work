---
title: Scanned bank statement OCR
metaTitle: "Scanned Bank Statement OCR: Scans to Excel & CSV | statement.work"
description: Convert scanned bank statements into Excel or CSV with OCR built for statement layouts. How bank statement OCR works, why scans are harder than PDFs, and how to get a good scan.
lede: Scanned bank statements have no text you can copy, only a picture of the page. statement.work uses OCR (optical character recognition) tuned for bank statements to read that picture and return every transaction as structured rows you can export to Excel, CSV or JSON.
updated: 2026-11-02
order: 4
nav: Scanned statement OCR
related:
  - /guides/why-scanned-bank-statements-are-hard-to-convert/
  - /convert/bank-statement-photo-to-excel/
  - /glossary/
  - /for/accountants/
faqs:
  - q: What is bank statement OCR?
    a: Bank statement OCR is optical character recognition applied to bank statements, combined with an understanding of their layout, so the output is a table of dated transactions rather than loose text.
  - q: How do I know if my PDF is a scan?
    a: Try to select a single word in your PDF viewer. If you can highlight and copy text, it is a digital PDF. If the whole page selects as one image, or nothing selects, it is a scan and needs OCR.
  - q: What scan resolution should I use?
    a: A common recommendation for OCR is around 300 dpi in grayscale or color. Much lower resolutions blur small digits; much higher ones make large files without helping much.
---

## Why scans need OCR

A PDF downloaded from online banking contains real text: the characters are stored in the file. A scanned statement is different. The scanner photographs the paper, so the PDF holds an *image* of the page. There is nothing to copy, search or paste. To get the numbers out, software has to recognize each character from its shape. That is OCR.

General-purpose OCR turns an image into lines of text. For a bank statement that isn't enough: you need to know which number is the amount, which is the balance, and which line a wrapped description belongs to. statement.work is tuned for the layouts, fonts and quirks of bank statements, so it returns transactions, not just text.

## What makes scanned statements tricky

- **Small, dense type.** Statements pack a lot onto a page, and amounts are often in a small font.
- **Look-alike characters.** `1` and `7`, `5` and `6`, `0` and `8` are easy to confuse when a scan is soft, and a single wrong digit changes an amount.
- **Skew and curvature.** Pages fed at an angle or photocopied from a bound book bend the lines.
- **Stamps, staples and handwriting.** Notes and highlights over the figures add noise.
- **Faint copies.** Copies of copies lose contrast.

Our guide [Why scanned bank statements are hard to convert](/guides/why-scanned-bank-statements-are-hard-to-convert/) goes into each of these.

## How to get the best result

1. **Scan flat and straight.** Use the scanner glass or a sheet feeder rather than a phone if you can.
2. **Use a sensible resolution.** Around 300 dpi is a widely used setting for OCR.
3. **Keep the whole page in frame**, including the opening and closing balances.
4. **Scan every page**, in order, as one file per statement.
5. **Upload to statement.work** and export to Excel, CSV or JSON.

## Always check a scan conversion

Because one misread digit changes a total, give scan conversions a quick check:

- Does opening balance plus credits minus debits equal the closing balance?
- Does each running balance follow from the one above it?
- Does the number of transactions match the statement?

The running balance is the most useful safety net: an error in one row shows up as a break in the chain of balances.

## Scans vs photos vs digital PDFs

| Input | Text in the file? | Typical quality | Notes |
|---|---|---|---|
| Digital PDF from online banking | Yes | Best | Use whenever available |
| Scanned PDF | No (image) | Good to very good | Flat, even, consistent |
| Phone photo | No (image) | Varies | See [photo to Excel](/convert/bank-statement-photo-to-excel/) |

statement.work handles all three the same way and produces the same columns from each.
