import { getAllPages } from '../lib/pages';
import { latest, sitemapIndex } from '../lib/sitemap';

export async function GET() {
  const all = await getAllPages();
  return sitemapIndex([
    { path: '/sitemap-pages.xml', lastmod: latest(all.filter((p) => p.sitemap === 'pages')) },
    { path: '/sitemap-guides.xml', lastmod: latest(all.filter((p) => p.sitemap === 'guides')) },
  ]);
}
