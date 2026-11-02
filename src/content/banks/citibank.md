---
bank: Citibank
country: US
title: Convert Citibank statements to Excel and CSV
metaTitle: "Convert Citibank Statements to Excel & CSV | statement.work"
description: Convert Citibank checking, savings and credit card statement PDFs to Excel or CSV. Handling foreign transactions, currency conversion fees and card statements.
lede: To convert a Citibank statement to Excel or CSV, upload the PDF, scan or photo to statement.work and export each transaction with date, description, amount and running balance. Foreign-currency purchases and their fees come out as separate, clearly dated rows.
updated: 2026-11-02
order: 4
nav: Citibank
related:
  - /guides/how-to-spot-duplicate-charges-and-hidden-fees/
  - /convert/bank-statement-to-json/
  - /banks/chase/
  - /banks/td-bank/
faqs:
  - q: How are foreign currency transactions handled?
    a: statement.work handles statements in different currencies. On a US dollar account, foreign purchases usually appear in dollars, sometimes with the original currency amount and a separate foreign transaction fee line.
  - q: Can I convert Citi credit card statements?
    a: Yes. Card statements convert like any other statement. They usually list purchases, payments, interest and fees without a running balance per line.
  - q: Is statement.work affiliated with Citibank?
    a: No. statement.work is independent and not affiliated with or endorsed by Citibank or Citigroup.
---

## About Citibank statements

Citibank is the consumer and commercial banking arm of Citigroup, headquartered in New York. Citi is known for its international footprint and its credit cards, so Citi statements often include travel and cross-border activity alongside everyday spending.

## What the statements typically contain

- A header with the statement period and a masked account number.
- A **balance summary** for the period.
- A transaction list with dates, descriptions and amounts, and on bank accounts, a balance.
- On card statements: purchases, payments and credits, interest charged and fees, with summary boxes for minimum payment and due date.

Statements vary by product and change over time; your own documents are the reference.

## Common conversion problems

- **Foreign transactions.** A purchase abroad may show the original currency amount, an exchange rate and the dollar amount, sometimes across two lines. Copying it out can produce a row with the wrong amount.
- **Separate fee lines.** Foreign transaction fees often appear as their own small charges, apart from the purchase. That's useful to know when you [look for hidden fees](/guides/how-to-spot-duplicate-charges-and-hidden-fees/), and easy to miss.
- **Card vs bank layouts.** Clients often hand over card statements and checking statements together. They use different structures, so expect different summary sections.
- **Payment and credit signs.** On card statements, payments reduce the balance. Make sure signs are consistent before combining card data with bank data.

## How to convert it

1. Download the statement PDF, or use a scan or photo.
2. Upload it to statement.work.
3. Review the extracted rows, including foreign transactions and their fees.
4. Export to Excel or CSV, or to [JSON](/convert/bank-statement-to-json/) for scripts.
5. Check totals against the statement summary.

## Working across banks

Clients with Citi cards often bank elsewhere. Exports from [Chase](/banks/chase/), [TD Bank](/banks/td-bank/) and others use the same columns, so card and bank data can sit in one workbook.
