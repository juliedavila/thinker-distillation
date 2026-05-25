import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const attributionKind = z.enum([
  'original',
  'extended',
  'popularized',
  'distributed',
  'co-authored',
  'translated',
  'community',
]);

const thinkerType = z.enum([
  'essay-corpus',
  'book-author',
  'principles-distiller',
  'catalog-builder',
  'mixed',
]);

const status = z.enum(['alive-active', 'alive-inactive', 'deceased']);

const sourceType = z.enum([
  'book',
  'essay',
  'talk',
  'blog-series',
  'interview',
  'paper',
  'translation',
]);

const severity = z.enum(['local', 'structural']);

const edgeType = z.enum([
  'antecedent',
  'extends',
  'critiques',
  'parallel',
  'synthesizes',
]);

const edgeStrength = z.enum(['primary', 'secondary']);

const namedFrame = z.object({
  concept_slug: z.string().regex(/^[a-z0-9-]+$/, 'kebab-case slug'),
  display_name: z.string(),
  one_line_gloss: z.string(),
  attribution_kind: attributionKind,
  primary_author: z.string(),
  co_originators: z
    .array(z.object({ slug: z.string(), role: z.string() }))
    .optional(),
  source_link: z.string().url().optional(),
  derived_from: z.string().optional(),
});

const bodyOfWorkItem = z.object({
  title: z.string(),
  type: sourceType,
  year: z.union([z.number().int(), z.string()]).optional(),
  link: z.string().url().optional(),
  editorial_note: z.string().optional(),
  read_first: z.boolean().optional(),
  canonical: z.boolean().optional(),
  translator: z.string().optional(),
  edition: z.string().optional(),
  edition_year: z.union([z.number().int(), z.string()]).optional(),
});

const limit = z.object({
  headline: z.string(),
  severity,
  elaboration: z.string(),
});

const adjacentThinker = z.object({
  target_slug: z.string(),
  display_name: z.string(),
  edge_type: edgeType,
  edge_label: z.string(),
  strength: edgeStrength,
});

const longRead = z.object({
  title: z.string(),
  summary: z.string(),
  chapter_list: z
    .array(z.object({ title: z.string(), href: z.string() }))
    .optional(),
  source_path: z.string().optional(),
});

const thinkers = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/thinkers' }),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    name: z.string(),
    canonical_url: z.string().url().nullable().optional(),
    active_years: z.string(),
    primary_domains: z.array(z.string()),
    status,
    inclusion_rationale: z.string(),
    thinker_type: thinkerType,
    has_long_read: z.boolean().default(false),
    long_read_path: z.string().optional(),
    last_updated: z.coerce.date(),

    tagline: z.string(),
    thirty_second_take: z.string(),

    background: z.string(),
    why_they_matter_as_a_thinker: z.string(),

    thesis: z.string(),
    working_line: z.string().optional(),

    named_frames: z.array(namedFrame),

    body_of_work: z.array(bodyOfWorkItem),

    what_i_take: z.string(),
    where_i_extend: z.string(),
    working_uses: z.array(z.string()).optional(),

    limits: z.array(limit).min(2, 'At least 2 limits per ISC-25'),
    still_load_bearing_despite: z.string(),

    adjacent_thinkers: z.array(adjacentThinker).min(3, 'At least 3 adjacent per ISC-26'),

    further_in: z.object({
      start_here: z.string(),
      then_read: z.array(z.string()).optional(),
      if_you_want_depth: z.string().optional(),
      if_you_want_breadth: z.string().optional(),
    }),

    long_read: longRead.optional(),
  }),
});

export const collections = { thinkers };
