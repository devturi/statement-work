#!/usr/bin/env node
/**
 * Post-build checks on dist/. Fails the build (exit 1) on:
 *  - sitemap URLs that don't exist, or built pages missing from the sitemap
 *  - canonical tags that don't match the sitemap URL (https://statement.work, trailing slash)
 *  - anything other than exactly one <h1> per page
 *  - images without alt, broken internal links, links breaking the trailing-slash policy
 *  - missing/duplicate titles or descriptions, invalid JSON-LD, missing OG images
 * Prints word counts and any [TODO] markers as warnings.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const SITE = 'https://statement.work';
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);

const read = (p) => fs.readFileSync(path.join(DIST, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(DIST, p));
const locs = (xml) => [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const lastmods = (xml) => [...xml.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map((m) => m[1]);

// ---- Sitemaps
const index = read('sitemap.xml');
if (!index.includes('<sitemapindex')) err('sitemap.xml is not a sitemap index');
const childMaps = locs(index);
for (const want of [`${SITE}/sitemap-pages.xml`, `${SITE}/sitemap-guides.xml`]) if (!childMaps.includes(want)) err(`sitemap index is missing ${want}`);
const urls = [];
for (const map of childMaps) {
  const file = map.replace(SITE, '');
  if (!exists(file)) { err(`missing child sitemap ${file}`); continue; }
  const xml = read(file);
  const l = locs(xml);
  if (lastmods(xml).length !== l.length) err(`${file}: every <url> needs a <lastmod>`);
  urls.push(...l);
}
if (new Set(urls).size !== urls.length) err('duplicate URLs in sitemaps');
const urlToFile = (u) => u.replace(SITE, '').replace(/\/$/, '/index.html');
for (const u of urls) {
  if (!u.startsWith(`${SITE}/`) || u.includes('www.')) err(`non-canonical host in sitemap: ${u}`);
  if (!u.endsWith('/')) err(`sitemap URL without trailing slash: ${u}`);
  if (!exists(urlToFile(u))) err(`sitemap URL has no page: ${u}`);
}

// ---- Built pages
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]));
const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html')).map((f) => '/' + path.relative(DIST, f).split(path.sep).join('/'));
const sitemapFiles = new Set(urls.map(urlToFile));
for (const f of htmlFiles) {
  if (f === '/404.html') continue;
  if (!sitemapFiles.has(f)) err(`built page missing from sitemap: ${f}`);
}

const titles = new Map();
const descs = new Map();
const todo = [];
const counts = [];
const linkOk = (href) => {
  const p = href.split('#')[0].split('?')[0];
  if (!p) return true;
  if (p.endsWith('/')) return exists(p + 'index.html');
  return exists(p);
};

for (const f of htmlFiles) {
  const html = read(f);
  const url = f === '/404.html' ? null : SITE + f.replace(/index\.html$/, '');
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) err(`${f}: ${h1s} <h1> elements`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="(.*?)"/)?.[1];
  if (!title) err(`${f}: missing <title>`); else titles.set(title, [...(titles.get(title) || []), f]);
  if (!desc) err(`${f}: missing meta description`); else descs.set(desc, [...(descs.get(desc) || []), f]);
  if (url) {
    const canonical = html.match(/<link rel="canonical" href="(.*?)"/)?.[1];
    if (canonical !== url) err(`${f}: canonical ${canonical} != ${url}`);
    if (/noindex/.test(html.match(/<meta name="robots" content="(.*?)"/)?.[1] || '')) err(`${f}: in sitemap but noindex`);
  }
  const og = html.match(/<meta property="og:image" content="(.*?)"/)?.[1];
  if (!og || !exists(og.replace(SITE, ''))) err(`${f}: og:image missing (${og})`);
  for (const img of html.match(/<img\b[^>]*>/g) || []) if (!/\balt=/.test(img)) err(`${f}: <img> without alt: ${img.slice(0, 80)}`);
  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(m[1]); } catch { err(`${f}: invalid JSON-LD`); }
  }
  for (const m of html.matchAll(/<a\b[^>]*?\shref="([^"]*)"/g)) {
    const href = m[1];
    if (href.startsWith(SITE)) err(`${f}: absolute internal link ${href} (use a relative path)`);
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const p = href.split('#')[0].split('?')[0];
    if (p && !p.endsWith('/') && !/\.[a-z0-9]+$/i.test(p)) err(`${f}: link without trailing slash ${href}`);
    if (!linkOk(href)) err(`${f}: broken link ${href}`);
  }
  if (html.includes('[TODO')) todo.push(f);
  const main = (html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] || '')
    .replace(/<section class="section" id="early-access"[\s\S]*?<\/section>/, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ');
  counts.push([f, main.split(/\s+/).filter((w) => /[a-z0-9]/i.test(w)).length]);
}
for (const [t, fs_] of titles) if (fs_.length > 1) err(`duplicate <title> "${t}": ${fs_.join(', ')}`);
for (const [d, fs_] of descs) if (fs_.length > 1) err(`duplicate description: ${fs_.join(', ')}`);

for (const f of ['robots.txt', 'llms.txt', 'llms-full.txt', 'rss.xml', '404.html']) if (!exists(f)) err(`missing /${f}`);
if (!/Sitemap: https:\/\/statement\.work\/sitemap\.xml/.test(read('robots.txt'))) err('robots.txt is missing the Sitemap line');

if (todo.length) warnings.push(`[TODO] markers in: ${todo.join(', ')}`);
const verbose = process.argv.includes('--words');
if (verbose) for (const [f, n] of counts.sort((a, b) => a[1] - b[1])) console.log(String(n).padStart(6), f);

console.log(`check-build: ${htmlFiles.length} HTML files, ${urls.length} sitemap URLs`);
for (const w of warnings) console.warn(`warning: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`error: ${e}`);
  console.error(`check-build: ${errors.length} error(s)`);
  process.exit(1);
}
console.log('check-build: all checks passed');
