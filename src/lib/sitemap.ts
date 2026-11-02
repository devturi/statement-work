import { abs, isoDate } from './site';
import type { PageRecord } from './pages';

const xml = (body: string) =>
  new Response(`<?xml version="1.0" encoding="UTF-8"?>\n${body}\n`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });

export const urlset = (pages: PageRecord[]) =>
  xml(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
      .map((p) => `  <url>\n    <loc>${abs(p.path)}</loc>\n    <lastmod>${isoDate(p.updated)}</lastmod>\n  </url>`)
      .join('\n')}\n</urlset>`,
  );

export const sitemapIndex = (maps: { path: string; lastmod: Date }[]) =>
  xml(
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${maps
      .map((m) => `  <sitemap>\n    <loc>${abs(m.path)}</loc>\n    <lastmod>${isoDate(m.lastmod)}</lastmod>\n  </sitemap>`)
      .join('\n')}\n</sitemapindex>`,
  );

export const latest = (pages: PageRecord[]) => new Date(Math.max(...pages.map((p) => p.updated.valueOf())));
