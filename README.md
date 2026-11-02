# statement.work

Marketing and content site for [statement.work](https://statement.work), a bank statement converter (PDF, scan or photo → CSV, Excel, JSON).

Built with [Astro](https://astro.build) as a fully static site. Every page is server-rendered HTML; JavaScript only adds motion, the waitlist form submission and the guide tag filter.

## Develop

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # builds to dist/ and runs scripts/check-build.mjs
npm run preview   # serve the built site
```

`npm run build` fails if the post-build checks fail: sitemap URLs that don't exist, built pages missing from the sitemap, canonical mismatches, pages without exactly one `<h1>`, images without `alt`, broken internal links or links without a trailing slash. Run `node scripts/check-build.mjs --words` to print word counts per page.

## Deploy

`.github/workflows/deploy.yml` builds on every push to `main`, deploys `dist/` to GitHub Pages, then pings IndexNow with recently updated URLs.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The custom domain stays `statement.work` (`public/CNAME`).

## Structure

```
public/                 static files served as-is (logo, icons, fonts, robots.txt, IndexNow key)
src/content/
  guides/               blog posts (Markdown) → /guides/<file-name>/
  convert/              conversion landing pages → /convert/<file-name>/
  audiences/            audience pages → /for/<file-name>/
  banks/                bank pages → /banks/<file-name>/
src/data/               FAQ (faq.ts), glossary (glossary.ts), home page FAQ
src/layouts/            Base.astro (head, header, footer), PageShell.astro (content page template)
src/components/         header, footer, waitlist form, CTA band, breadcrumbs, FAQ list, related links
src/pages/              routes, plus generated files: sitemaps, rss.xml, llms.txt, llms-full.txt, og/*.png
src/lib/                site constants, page registry (drives sitemaps/OG/llms), JSON-LD builders
scripts/                check-build.mjs (post-build checks), indexnow.mjs (IndexNow ping)
```

URL policy: `https://statement.work`, no `www`, lowercase, **always a trailing slash**. Canonical tags, sitemaps and internal links all follow it, and the build check enforces it.

## How to add a new guide

1. **Create the file** `src/content/guides/<slug>.md`. The file name becomes the URL: `/guides/<slug>/`. Use lowercase words separated by hyphens.
2. **Add the frontmatter:**

   ```yaml
   ---
   title: "How to do the thing"        # H1, <title> and OG image headline
   description: One or two sentences.  # meta description, RSS, guide list (aim for 120–160 characters)
   date: 2026-11-15                    # first published (YYYY-MM-DD)
   updated: 2026-11-15                 # last meaningful change; drives sitemap <lastmod> and "Last updated"
   tags: [reconciliation, bookkeeping] # lowercase, hyphenated; reuse existing tags where possible
   author: statement.work team         # or a person's name
   related: [other-guide-slug]         # optional: guides to show first under "Related guides"
   draft: false                        # true keeps it out of the build, sitemap, RSS and llms files
   ---
   ```

3. **Write the post in Markdown.**
   - Open with a direct, quotable answer in the first paragraph.
   - Use `##` for sections (they become the table of contents) and `###` below them. Don't add an `#` H1; the title is the H1.
   - Put a direct answer in the first sentence under each `##`.
   - Prefer short lists and tables. Link to related pages with root-relative URLs ending in `/`, e.g. `[CSV vs XLSX](/guides/csv-vs-xlsx-for-bank-data/)`.
   - Only state facts about statement.work that already appear on the site. No invented stats, customers or integrations. Mark anything unverified with an HTML comment: `<!-- [TODO] ... -->`.
4. **Build:** `npm run build`. The guide is added automatically to `/guides/`, `/rss.xml`, `/sitemap-guides.xml`, `/llms.txt`, `/llms-full.txt`, the footer (if among the newest) and gets its own OG image at `/og/guides/<slug>.png`. The build check fails on broken links.
5. **Updating an existing guide:** change the content and set `updated:` to today. That updates the visible date, `dateModified` in the Article schema and `<lastmod>` in the sitemap, and the deploy pings IndexNow.

Reading time, the table of contents, related posts, the author box, Article and Breadcrumb JSON-LD and the waitlist CTA are all automatic.

## Other content

- **Convert / audience / bank pages:** add a Markdown file to the matching folder under `src/content/`, following the frontmatter of an existing file (`title`, `metaTitle`, `description`, `lede`, `updated`, `related` with at least 3 paths, optional `faqs`, `order`, `nav`). Bank pages also need `bank` and `country` (`US` or `UK`).
- **FAQ:** `src/data/faq.ts`. **Glossary:** `src/data/glossary.ts`.
- **Static pages** (home, hubs, FAQ, security, glossary, guides index) are listed in `STATIC_PAGES` in `src/lib/pages.ts`. Bump their `updated` date when you change them so the sitemap stays accurate.

## IndexNow

The key file is `public/<key>.txt`. After a deploy, `npm run indexnow` reads the live sitemap and submits URLs to IndexNow (Bing, Copilot and other participating engines). `INDEXNOW_SINCE_DAYS=3` limits it to recently updated URLs; `INDEXNOW_DRY_RUN=1` prints without sending.
