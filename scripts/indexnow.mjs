#!/usr/bin/env node
/**
 * IndexNow ping (Bing, Copilot, Yandex, Seznam and others share submissions).
 * Reads the LIVE sitemap index, collects every URL and submits them in one request.
 * Run after a deploy is live: `npm run indexnow`. Set INDEXNOW_DRY_RUN=1 to print without sending.
 * Optional: INDEXNOW_SINCE_DAYS=7 submits only URLs whose <lastmod> is that recent.
 */
import fs from 'node:fs';

const SITE = 'https://statement.work';
const keyFile = fs.readdirSync('public').find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('IndexNow key file (public/<32 hex>.txt) not found');
const key = keyFile.replace('.txt', '');

const get = async (url) => {
  const res = await fetch(url, { headers: { 'User-Agent': 'statement.work-indexnow' } });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.text();
};
const entries = (xml, tag) =>
  [...xml.matchAll(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'g'))].map((m) => ({
    loc: m[1].match(/<loc>(.*?)<\/loc>/)?.[1],
    lastmod: m[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1],
  }));

const index = await get(`${SITE}/sitemap.xml`);
let urls = [];
for (const s of entries(index, 'sitemap')) urls.push(...entries(await get(s.loc), 'url'));
const since = Number(process.env.INDEXNOW_SINCE_DAYS || 0);
if (since) urls = urls.filter((u) => !u.lastmod || Date.now() - new Date(u.lastmod) <= since * 864e5);
const urlList = urls.map((u) => u.loc).filter(Boolean);

console.log(`IndexNow: ${urlList.length} URLs`);
if (!urlList.length) process.exit(0);
if (process.env.INDEXNOW_DRY_RUN) { console.log(urlList.join('\n')); process.exit(0); }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${keyFile}`, urlList }),
});
console.log(`IndexNow responded ${res.status} ${res.statusText}`);
// 200/202 = accepted. 4xx means the key file is not reachable yet or the request was rejected.
if (res.status >= 400) process.exit(1);
