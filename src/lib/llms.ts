import { getCollection } from 'astro:content';
import { byOrder, getGuides, landingPath } from './pages';
import { abs, SITE, isoDate } from './site';
import { FAQ_GROUPS } from '../data/faq';
import { GLOSSARY } from '../data/glossary';
import { plain } from './inline-md';

export const ABOUT = `statement.work is a bank statement converter. It reads bank statements (PDF exports, scanned copies and phone photos, from any bank and in any layout) and turns every transaction into clean CSV, Excel or JSON. It is built for accountants, bookkeepers and small businesses, and is currently in early access with a waitlist.`;

export const FEATURES = [
  'Converts bank statement PDFs to Excel (XLSX) and CSV, and to JSON.',
  'Reads scanned statements and phone photos (bank statement OCR), not only PDFs with selectable text.',
  'Works across banks and layouts without a template mapped in advance.',
  'Extracts date, description, amount and running balance for every line, in one consistent format.',
  'Handles several statements in one upload.',
  'Categorizes transactions automatically (for example payroll, rent, subscriptions).',
  'Flags anomalies: duplicate charges, fee spikes and unusual transactions.',
  'Handles statements in different currencies.',
  'Answers plain-language questions about your statements.',
];

export const DATA_HANDLING = [
  'Statements are encrypted in transit and at rest.',
  'Source files are deleted after processing, on a retention window the user controls.',
  'Customer financial data is never used to train or fine-tune AI models.',
];

const list = (items: string[]) => items.map((i) => `- ${i}`).join('\n');
/** Make site-relative Markdown links absolute so the text stands alone. */
const absLinks = (md: string) => md.replace(/<!--[\s\S]*?-->\n*/g, '').replace(/\]\((\/[^)\s]*)\)/g, (_m, p) => `](${abs(p)})`);

export async function llmsTxt() {
  const [convert, audiences, banks, guides] = await Promise.all([
    getCollection('convert'), getCollection('audiences'), getCollection('banks'), getGuides(),
  ]);
  const link = (title: string, path: string, desc: string) => `- [${title}](${abs(path)}): ${desc}`;
  return `# ${SITE.name}

> ${ABOUT}

## Key features

${list(FEATURES)}

## Who it's for

Accountants, bookkeepers, small businesses and tax preparers who spend time turning bank statements into spreadsheets for bookkeeping, month-end close, reconciliation or tax prep.

## Data handling

${list(DATA_HANDLING)}

## Main pages

${[
    link('Home', '/', 'product overview'),
    link('Convert', '/convert/', 'all conversion types'),
    link('FAQ', '/faq/', 'answers about converting, formats, accuracy, security and early access'),
    link('Security', '/security/', 'how statements are handled'),
    link('Glossary', '/glossary/', 'definitions of bank statement terms'),
    link('Banks', '/banks/', 'notes on 20 US and UK banks'),
    link('Guides', '/guides/', 'practical guides'),
    link('Join the waitlist', '/#early-access', 'early access sign-up'),
  ].join('\n')}

## Conversions

${convert.sort(byOrder).map((e) => link(e.data.title, landingPath.convert(e.id), e.data.description)).join('\n')}

## Audience pages

${audiences.sort(byOrder).map((e) => link(e.data.title, landingPath.audiences(e.id), e.data.description)).join('\n')}

## Guides

${guides.map((e) => link(e.data.title, landingPath.guides(e.id), e.data.description)).join('\n')}

## Banks

${banks.sort(byOrder).map((e) => link(e.data.bank, landingPath.banks(e.id), e.data.description)).join('\n')}

## Optional

- [Full content in Markdown](${abs('/llms-full.txt')}): the key page content in one file
- [Sitemap](${abs('/sitemap.xml')})
- [RSS feed of guides](${abs('/rss.xml')})
`;
}

export async function llmsFullTxt() {
  const [convert, audiences, banks, guides] = await Promise.all([
    getCollection('convert'), getCollection('audiences'), getCollection('banks'), getGuides(),
  ]);
  const section = (title: string, path: string, updated: Date, lede: string, body: string, faqs: { q: string; a: string }[] = []) =>
    `## ${title}\n\nURL: ${abs(path)}\nLast updated: ${isoDate(updated)}\n\n${lede}\n\n${absLinks(body.trim()).replace(/^(#{2,5}) /gm, (_m, h) => `#${h} `)}${
      faqs.length ? `\n\n### Questions\n\n${faqs.map((f) => `**${f.q}**\n${plain(f.a)}`).join('\n\n')}` : ''
    }\n`;
  const parts = [
    `# ${SITE.name}: full content\n\n> ${ABOUT}\n\nThis file collects the main content of ${abs('/')} in plain Markdown. A shorter index is at ${abs('/llms.txt')}.`,
    `## Key features\n\n${list(FEATURES)}\n\n## Data handling\n\n${list(DATA_HANDLING)}`,
    `## Frequently asked questions\n\nURL: ${abs('/faq/')}\n\n${FAQ_GROUPS.map((g) => `### ${g.title}\n\n${g.items.map((f) => `**${f.q}**\n${plain(f.a)}`).join('\n\n')}`).join('\n\n')}`,
    `## Glossary\n\nURL: ${abs('/glossary/')}\n\n${GLOSSARY.map((t) => `**${t.term}**: ${t.def}`).join('\n\n')}`,
    ...convert.sort(byOrder).map((e) => section(e.data.title, landingPath.convert(e.id), e.data.updated, e.data.lede, e.body ?? '', e.data.faqs)),
    ...audiences.sort(byOrder).map((e) => section(e.data.title, landingPath.audiences(e.id), e.data.updated, e.data.lede, e.body ?? '', e.data.faqs)),
    ...guides.map((e) => section(e.data.title, landingPath.guides(e.id), e.data.updated, e.data.description, e.body ?? '')),
    ...banks.sort(byOrder).map((e) => section(e.data.title, landingPath.banks(e.id), e.data.updated, `${e.data.lede} statement.work is not affiliated with ${e.data.bank}.`, e.body ?? '', e.data.faqs)),
  ];
  return parts.join('\n\n---\n\n') + '\n';
}
