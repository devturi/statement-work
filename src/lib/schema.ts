import { SITE, abs } from './site';
import { plain } from './inline-md';

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  url: `${SITE.url}/`,
  logo: { '@type': 'ImageObject', url: abs('/icon-512.png'), contentUrl: abs('/icon-512.png'), width: 512, height: 512, caption: SITE.name },
  image: abs('/logo-mark.svg'),
};

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE.url}/`,
  name: SITE.name,
  description: SITE.tagline,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

export const softwareApplication = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE.url}/#software`,
  name: SITE.name,
  url: `${SITE.url}/`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Bank statement converter',
  operatingSystem: 'Web',
  description:
    'statement.work converts bank statements (PDF exports, scanned copies and phone photos, from any bank and any layout) into clean CSV, Excel or JSON. It categorizes transactions, flags anomalies such as duplicate charges and fee spikes, handles multiple currencies, and answers plain-language questions about your statements.',
  featureList: [
    'Bank statement PDF to Excel',
    'Bank statement PDF to CSV',
    'JSON export',
    'OCR for scanned statements and phone photos',
    'Works with any bank and any layout, no templates',
    'Automatic transaction categorization',
    'Duplicate charge and fee spike detection',
    'Multi-currency statements',
    'Plain-language questions about your transactions',
  ],
  audience: { '@type': 'BusinessAudience', audienceType: 'Accountants, bookkeepers and small businesses' },
  publisher: { '@id': ORG_ID },
};

export const faqPage = (path: string, faqs: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  '@id': `${abs(path)}#faq`,
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
});

export type Crumb = { name: string; path: string };

export const breadcrumbList = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
});

export const webPage = (path: string, title: string, description: string, updated: Date) => ({
  '@type': 'WebPage',
  '@id': abs(path),
  url: abs(path),
  name: title,
  description,
  dateModified: updated.toISOString(),
  isPartOf: { '@id': WEBSITE_ID },
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
});
