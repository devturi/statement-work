import { getAllPages } from '../lib/pages';
import { urlset } from '../lib/sitemap';

export async function GET() {
  return urlset((await getAllPages()).filter((p) => p.sitemap === 'guides'));
}
