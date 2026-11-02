import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getGuides, landingPath } from '../lib/pages';

export async function GET(context: APIContext) {
  const guides = await getGuides();
  return rss({
    title: 'statement.work guides',
    description: 'Practical guides to converting, categorizing and reconciling bank statement data.',
    site: context.site!,
    trailingSlash: true,
    items: guides.map((g) => ({
      title: g.data.title,
      description: g.data.description,
      pubDate: g.data.date,
      link: landingPath.guides(g.id),
      categories: g.data.tags,
      author: g.data.author,
    })),
    customData: '<language>en</language>',
  });
}
