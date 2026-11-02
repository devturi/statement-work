import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = z.object({ q: z.string(), a: z.string() });

/** Shared shape for the /convert/, /for/ and /banks/ landing pages. */
const landing = z.object({
  title: z.string(), // H1
  metaTitle: z.string(), // <title>
  description: z.string(), // meta description
  lede: z.string(), // first paragraph under the H1: the direct answer
  updated: z.coerce.date(),
  related: z.array(z.string()).min(3),
  faqs: z.array(faq).default([]),
  order: z.number().default(0),
  nav: z.string().optional(), // short name for hub lists and footers
});

const convert = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/convert' }),
  schema: landing,
});

const audiences = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/audiences' }),
  schema: landing,
});

const banks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/banks' }),
  schema: landing.extend({
    bank: z.string(),
    country: z.enum(['US', 'UK']),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date(),
    tags: z.array(z.string()).min(1),
    author: z.string().default('statement.work team'),
    draft: z.boolean().default(false),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { convert, audiences, banks, guides };
