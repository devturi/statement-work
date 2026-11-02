/**
 * Build-time Open Graph images (1200x630 PNG) for every page, rendered with satori + resvg.
 * /og/index.png for "/", /og/convert/bank-statement-pdf-to-excel.png for that page, etc.
 */
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import type { APIContext } from 'astro';
import { getAllPages, type PageRecord } from '../../lib/pages';

const root = process.cwd();
const font = (w: number) => fs.readFileSync(path.join(root, `src/og-fonts/SchibstedGrotesk-${w}.ttf`));
const svgData = (file: string) =>
  `data:image/svg+xml;base64,${fs.readFileSync(path.join(root, 'public', file)).toString('base64')}`;
const FONTS = [
  { name: 'Schibsted', data: font(500), weight: 500 as const, style: 'normal' as const },
  { name: 'Schibsted', data: font(700), weight: 700 as const, style: 'normal' as const },
];
const MARK = svgData('logo-mark.svg');
const WORDMARK = svgData('logo-wordmark.svg');

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style: { display: 'flex', ...style }, children, ...extra },
});

export async function getStaticPaths() {
  const pages = await getAllPages();
  return pages.map((page) => ({
    params: { slug: page.path === '/' ? 'index' : page.path.replace(/^\/|\/$/g, '') },
    props: { page },
  }));
}

export async function GET({ props }: APIContext) {
  const page = props.page as PageRecord;
  const t = page.title;
  const size = t.length <= 34 ? 88 : t.length <= 60 ? 72 : 60;
  const tree = h('div', { width: 1200, height: 630, flexDirection: 'column', justifyContent: 'space-between', background: '#F6F7F4', padding: '72px 88px 76px', fontFamily: 'Schibsted', color: '#0B0F14' }, [
    h('div', { alignItems: 'center', gap: 18 }, [
      h('img', {}, undefined, { src: MARK, width: 64, height: 64 }),
      h('img', {}, undefined, { src: WORDMARK, width: 360, height: 36 }),
    ]),
    h('div', { flexDirection: 'column', gap: 20 }, [
      h('div', { fontSize: 30, fontWeight: 500, color: '#1F6F5C' }, page.section),
      h('div', { fontSize: size, fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em', maxWidth: 1000 }, t),
    ]),
    h('div', { justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #D2E2D5', paddingTop: 22, fontSize: 26, fontWeight: 500, color: '#5B6762' }, [
      h('div', {}, `statement.work${page.path === '/' ? '' : page.path}`),
      h('div', { width: 18, height: 18, borderRadius: 4, background: '#10B981' }),
    ]),
  ]);
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: FONTS });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
