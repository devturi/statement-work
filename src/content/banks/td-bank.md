---
bank: TD Bank
country: US
title: Convert TD Bank statements to Excel and CSV
metaTitle: "Convert TD Bank Statements to Excel & CSV | statement.work"
description: Convert TD Bank (US) statement PDFs into Excel or CSV. Notes for customers who also hold Canadian accounts, with different date and currency conventions.
lede: To convert a TD Bank statement to Excel or CSV, upload the PDF, scan or photo to statement.work and export the transactions with date, description, amount and running balance in one consistent format, even if you also have statements from accounts in Canada.
updated: 2026-11-02
order: 9
nav: TD Bank
related:
  - /glossary/
  - /guides/csv-vs-xlsx-for-bank-data/
  - /banks/citibank/
  - /banks/citizens/
faqs:
  - q: I have TD accounts in the US and Canada. Can I combine them?
    a: Yes. statement.work handles statements in different currencies and produces the same columns for each. Keep a currency column and convert to one currency deliberately rather than mixing amounts.
  - q: What date format will the export use?
    a: The export uses one consistent date format for every statement, which avoids month/day versus day/month mix-ups when you combine statements.
  - q: Is statement.work affiliated with TD Bank?
    a: No. statement.work is independent and is not affiliated with or endorsed by TD Bank or the Toronto-Dominion Bank.
---

## About TD Bank statements

TD Bank, N.A. is the US banking business of the Toronto-Dominion Bank, headquartered in Cherry Hill, New Jersey, with branches mainly along the East Coast. Because of the Canadian parent, some customers hold accounts on both sides of the border, which brings currency and date-format questions when statements are combined.

## What the statements typically contain

- Account details and the statement period.
- A summary of beginning balance, deposits, withdrawals and ending balance.
- Transactions with dates, descriptions, amounts and balances, often grouped by type.
- Fees and interest.

Check your own statements for the exact layout, which varies by account type and over time.

## Common conversion problems

- **Cross-border date formats.** Statements from different countries may write dates differently, and a date like `03/04` silently changes meaning. A converter that normalizes dates avoids the swap. See [date format](/glossary/#date-format).
- **Two currencies.** US dollar and Canadian dollar amounts must not be added together. Keep the currency on every row.
- **Grouped transaction types.** Deposits, withdrawals and checks in separate sections need merging into date order.
- **Transfers between countries.** Money moved between your own US and Canadian accounts is a transfer, not income, and the two sides may differ because of exchange rates.

## How to convert it

1. Download the statement PDF, or use a scan or photo.
2. Upload it to statement.work, along with statements from other accounts if you need them together.
3. Review the transactions; each statement keeps its currency.
4. Export to Excel or CSV. The [CSV vs XLSX guide](/guides/csv-vs-xlsx-for-bank-data/) helps you choose.
5. Check each statement's ending balance.

## Related banks

Clients on the East Coast often also bank with [Citizens](/banks/citizens/) or carry [Citibank](/banks/citibank/) cards. Their statements convert to the same columns.
