export const SITE = {
  url: 'https://statement.work',
  name: 'statement.work',
  tagline: 'Bank statement converter: PDFs, scans and photos into clean Excel, CSV or JSON.',
  waitlistEndpoint:
    'https://script.google.com/macros/s/AKfycbwr2fmfWTNKCwk71gygvJDQvFM4xyCNQp0Ys5FDgYLCO4n7R26V0y0vha8tb5rn1IApNA/exec',
  // Used when a guide does not name a person. Replace with a real author once there is one.
  defaultAuthor: 'statement.work team',
};

/** Absolute URL for a site path ("/faq/" -> "https://statement.work/faq/"). */
export const abs = (path: string) => new URL(path, SITE.url).href;

/** Per-page Open Graph image path, generated at build time by src/pages/og/[...slug].png.ts. */
export const ogPathFor = (path: string) =>
  path === '/' ? '/og/index.png' : `/og${path.replace(/\/$/, '')}.png`;

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export const prettyDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export function readingMinutes(markdown: string) {
  const words = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`|\-\[\]()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
