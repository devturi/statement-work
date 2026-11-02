import { getCollection, type CollectionEntry } from 'astro:content';

export type PageRecord = {
  path: string;
  title: string; // short title (H1 / OG headline)
  description: string;
  updated: Date;
  sitemap: 'pages' | 'guides';
  section: string; // label shown on OG images and hub lists
};

/** Hand-written pages that are not generated from a content collection. */
export const STATIC_PAGES: PageRecord[] = [
  { path: '/', title: 'Stop retyping bank statements.', description: 'Convert bank statement PDFs, scans and photos into clean Excel or CSV files. Bank statement OCR for accountants, bookkeepers and small businesses.', updated: new Date('2026-11-02'), sitemap: 'pages', section: 'statement.work' },
  { path: '/convert/', title: 'Convert bank statements to Excel, CSV and JSON', description: 'Every way statement.work converts bank statements: PDF to Excel, CSV and XLSX, scanned statement OCR, phone photos and JSON.', updated: new Date('2026-11-02'), sitemap: 'pages', section: 'Convert' },
  { path: '/for/', title: 'Who statement.work is for', description: 'How accountants, bookkeepers, small businesses and tax preparers use statement.work to turn bank statements into clean spreadsheets.', updated: new Date('2026-11-02'), sitemap: 'pages', section: 'Who it’s for' },
  { path: '/banks/', title: 'Convert statements from your bank', description: 'Guides to converting statements from 20 widely used US and UK banks into Excel and CSV, with what to expect from each bank’s layout.', updated: new Date('2026-11-02'), sitemap: 'pages', section: 'Banks' },
  { path: '/faq/', title: 'Frequently asked questions', description: 'Answers about converting bank statements to Excel and CSV, file formats, scanned statements, accuracy, security and early access.', updated: new Date('2026-11-02'), sitemap: 'pages', section: 'FAQ' },
  { path: '/security/', title: 'Security and data handling', description: 'How statement.work handles bank statements: encrypted in transit and at rest, deleted after processing, never used to train AI models.', updated: new Date('2026-11-02'), sitemap: 'pages', section: 'Security' },
  { path: '/glossary/', title: 'Bank statement glossary', description: 'Plain-English definitions of bank statement and bookkeeping terms: running balance, reconciliation, statement period, OCR, CSV, XLSX and more.', updated: new Date('2026-11-02'), sitemap: 'pages', section: 'Glossary' },
  { path: '/guides/', title: 'Guides', description: 'Practical guides to converting, cleaning, categorizing and reconciling bank statement data, for accountants, bookkeepers and small businesses.', updated: new Date('2026-11-02'), sitemap: 'guides', section: 'Guides' },
];

export const landingPath = {
  convert: (id: string) => `/convert/${id}/`,
  audiences: (id: string) => `/for/${id}/`,
  banks: (id: string) => `/banks/${id}/`,
  guides: (id: string) => `/guides/${id}/`,
};

export const byOrder = <T extends { data: { order: number; title: string } }>(a: T, b: T) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);

export async function getGuides(): Promise<CollectionEntry<'guides'>[]> {
  const all = await getCollection('guides', (g) => !g.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf() || a.data.title.localeCompare(b.data.title));
}

let cache: PageRecord[] | undefined;

/** Every real, indexable page on the site. Drives the sitemaps, OG images, llms.txt and related links. */
export async function getAllPages(): Promise<PageRecord[]> {
  if (cache) return cache;
  const [convert, audiences, banks, guides] = await Promise.all([
    getCollection('convert'),
    getCollection('audiences'),
    getCollection('banks'),
    getGuides(),
  ]);
  cache = [
    ...STATIC_PAGES,
    ...convert.sort(byOrder).map((e) => ({ path: landingPath.convert(e.id), title: e.data.title, description: e.data.description, updated: e.data.updated, sitemap: 'pages' as const, section: 'Convert' })),
    ...audiences.sort(byOrder).map((e) => ({ path: landingPath.audiences(e.id), title: e.data.title, description: e.data.description, updated: e.data.updated, sitemap: 'pages' as const, section: 'Who it’s for' })),
    ...banks.sort(byOrder).map((e) => ({ path: landingPath.banks(e.id), title: e.data.title, description: e.data.description, updated: e.data.updated, sitemap: 'pages' as const, section: e.data.country === 'US' ? 'US banks' : 'UK banks' })),
    ...guides.map((e) => ({ path: landingPath.guides(e.id), title: e.data.title, description: e.data.description, updated: e.data.updated, sitemap: 'guides' as const, section: 'Guide' })),
  ];
  return cache;
}

export async function getPage(path: string): Promise<PageRecord> {
  const page = (await getAllPages()).find((p) => p.path === path);
  if (!page) throw new Error(`Link to unknown page: ${path}`);
  return page;
}
