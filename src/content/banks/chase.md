---
bank: Chase
country: US
title: Convert Chase bank statements to Excel and CSV
metaTitle: "Convert Chase Bank Statements to Excel & CSV | statement.work"
description: How to convert Chase checking, savings and credit card statement PDFs into clean Excel or CSV, what Chase statements usually contain, and the conversion problems to watch for.
lede: To convert a Chase statement to Excel or CSV, download the statement PDF from Chase online banking (or use a scan or photo), upload it to statement.work, and export the transactions with date, description, amount and running balance in consistent columns.
updated: 2026-11-02
order: 1
nav: Chase
related:
  - /convert/bank-statement-pdf-to-excel/
  - /guides/bank-statement-formats-explained/
  - /banks/bank-of-america/
  - /banks/capital-one/
faqs:
  - q: Can I download Chase transactions as CSV directly?
    a: Check the account activity area of Chase online banking for a download option. Where banks offer CSV downloads, they often cover only recent activity, so older months may only be available as PDF statements, which statement.work converts.
  - q: Does statement.work work with Chase credit card statements?
    a: Yes. statement.work reads statements from any bank, including card statements. Card statements usually list purchases and payments without a per-line running balance, so check totals against the statement summary.
  - q: Is statement.work affiliated with Chase?
    a: No. statement.work is an independent tool and is not affiliated with or endorsed by Chase or JPMorgan Chase.
---

## About Chase statements

Chase is the consumer and commercial banking brand of JPMorgan Chase, headquartered in New York and the largest bank in the US by assets. Because Chase serves so many households and businesses, its statements turn up constantly in bookkeeping and tax work: personal checking and savings, business checking, and Chase-issued credit cards.

## What Chase statements typically contain

Like most US bank statements, a Chase checking statement generally includes:

- A header with the account holder, a masked account number and the **statement period**.
- A summary of **beginning balance, deposits, withdrawals and ending balance**.
- Transactions grouped or labeled by type, such as deposits and additions, electronic withdrawals, card purchases and checks.
- Dates printed month/day, with the year taken from the statement period.

Layouts change over time, and business and personal statements differ, so treat this as a general description rather than a specification.

## Common conversion problems

- **Grouped sections.** When deposits and withdrawals appear in separate sections, copying them out gives two lists that have to be merged back into date order. statement.work rebuilds a single chronological table.
- **Year-less dates.** Rows dated `07/14` need the year from the statement header. A December–January statement spans two years, which is easy to get wrong by hand.
- **Checking vs card statements.** Credit card statements list purchases, payments, interest and fees, usually with no running balance. Don't expect the same columns as a checking statement.
- **Long card descriptions.** Merchant names with store numbers, cities and reference codes make descriptions messy and hard to group.

## How to convert a Chase statement

1. Download the statement PDF from Chase online banking, or use the scan or photo you have.
2. Upload it to statement.work. Several months or accounts at once is fine.
3. Review the transactions: date, description, amount, running balance and category.
4. Export to [Excel](/convert/bank-statement-pdf-to-excel/), CSV or JSON.
5. Check that beginning balance plus deposits minus withdrawals equals the ending balance.

Working with several banks? The same steps apply to [Bank of America](/banks/bank-of-america/), [Capital One](/banks/capital-one/) and others, and the exports use the same columns.
