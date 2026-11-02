// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://statement.work',
  // One URL policy everywhere: lowercase, trailing slash, no www.
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Keep CSS inline (as the original single page did) so first paint needs no extra request.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  devToolbar: { enabled: false },
});
