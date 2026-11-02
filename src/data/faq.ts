/**
 * Full FAQ (/faq/). Answers lead with the direct answer in the first sentence.
 * Inline Markdown allowed: [text](/path/) and **bold**.
 */
export const FAQ_GROUPS: { id: string; title: string; intro: string; items: { q: string; a: string }[] }[] = [
  {
    id: 'converting',
    title: 'Converting statements',
    intro: 'Getting transactions out of a bank statement and into a spreadsheet.',
    items: [
      { q: 'How do I convert a bank statement PDF to Excel?', a: 'Upload the PDF to statement.work and download the result as an Excel file. Every transaction comes out with its date, description, amount and running balance in the right column, so there is nothing to copy, paste or retype. The [PDF to Excel page](/convert/bank-statement-pdf-to-excel/) walks through it step by step.' },
      { q: 'Can I convert a scanned bank statement?', a: 'Yes. statement.work reads scanned paper statements as well as digital PDFs, so the statement does not need selectable text. A straight, evenly lit scan at a normal resolution gives the cleanest result. More on [scanned statement OCR](/convert/scanned-bank-statement-ocr/).' },
      { q: 'Can I convert a photo of a bank statement taken on my phone?', a: 'Yes. Phone photos go through the same extraction as PDFs and scans. Shoot the page flat, fill the frame and avoid shadows across the figures. See [photo to Excel](/convert/bank-statement-photo-to-excel/).' },
      { q: 'Which banks does statement.work work with?', a: 'statement.work is built to work with statements from any bank, without a template mapped in advance. It reads the document rather than a fixed layout. The [bank pages](/banks/) describe what to expect from 20 widely used US and UK banks.' },
      { q: 'Can I convert several statements at once?', a: 'Yes. You can upload several statements in one go, and each one comes out in the same consistent format, whichever bank it came from.' },
    ],
  },
  {
    id: 'formats',
    title: 'Formats and exports',
    intro: 'What you get out, and which file type to choose.',
    items: [
      { q: 'What export formats does statement.work support?', a: 'statement.work exports CSV, Excel and JSON. Each uses the same consistent columns every time, so files from different banks line up.' },
      { q: 'Should I use CSV or Excel for bank statement data?', a: 'Use Excel (XLSX) when a person will review, format or work on the data, and CSV when you are importing it into accounting software or another tool. The [CSV vs XLSX guide](/guides/csv-vs-xlsx-for-bank-data/) compares them in detail.' },
      { q: 'What columns are in the converted file?', a: 'Every transaction includes its date, description, amount and running balance, and transactions are categorized (for example payroll, rent or subscriptions).' },
      { q: 'Can I import the CSV into my accounting software?', a: 'Most accounting software can import bank transactions from a CSV file, and statement.work produces CSV with consistent columns for that purpose. statement.work does not claim a native integration with any specific product; the [CSV import guide](/guides/import-bank-statement-csv-into-accounting-software/) covers the general steps.' },
    ],
  },
  {
    id: 'accuracy',
    title: 'Accuracy and checking',
    intro: 'How to trust the numbers you get back.',
    items: [
      { q: 'How accurate is statement.work?', a: 'statement.work is tuned specifically for the layouts, fonts and quirks of bank statements, but no extraction method is perfect, so you should always check the result. The simplest check is that the opening balance plus credits minus debits equals the closing balance printed on the statement.' },
      { q: 'How do I check a converted statement is complete?', a: 'Compare the converted totals with the statement. Opening balance plus total deposits minus total withdrawals should equal the closing balance, and the transaction count should match. The [reconciliation guide](/guides/how-bookkeepers-reconcile-bank-statements-faster/) shows a quick routine.' },
      { q: 'Does it catch duplicate charges?', a: 'Yes. statement.work flags anomalies such as duplicate charges, fee spikes and unusual transactions so they surface instead of hiding in a long list. See [how to spot duplicate charges and hidden fees](/guides/how-to-spot-duplicate-charges-and-hidden-fees/).' },
      { q: 'Does it handle statements in different currencies?', a: 'Yes. statement.work handles statements in different currencies without manual reformatting.' },
    ],
  },
  {
    id: 'security',
    title: 'Security and privacy',
    intro: 'What happens to your statements.',
    items: [
      { q: 'Is it safe to upload bank statements to statement.work?', a: 'Statements are encrypted in transit and at rest, source files are deleted after processing on a retention window you control, and your data is never used to train or fine-tune AI models. The [security page](/security/) has the details.' },
      { q: 'Are my statements used to train AI?', a: 'No. Your financial data is never used to train or fine-tune any model.' },
      { q: 'How long are uploaded statements kept?', a: 'Source files are deleted once your export is ready, on a retention window you control.' },
    ],
  },
  {
    id: 'early-access',
    title: 'Pricing and early access',
    intro: 'Getting in, and what it costs.',
    items: [
      // [TODO] Replace this answer with real pricing once it is announced.
      { q: 'How much does statement.work cost?', a: 'Pricing has not been published yet. statement.work is currently in early access, onboarding a first group of users from the waitlist.' },
      { q: 'How do I get early access?', a: 'Join the waitlist with your email address. statement.work is onboarding a first group of accountants, bookkeepers and small businesses and sends one email when it is your turn.' },
      { q: 'Who is statement.work for?', a: 'statement.work is for [accountants](/for/accountants/), [bookkeepers](/for/bookkeepers/), [small businesses](/for/small-businesses/) and anyone [preparing taxes](/for/tax-preparation/) who spends time turning bank statements into spreadsheets.' },
    ],
  },
];

export const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);
