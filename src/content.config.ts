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
  'hosts',
]);

const doctrineMode = z.enum(['mode-a', 'mode-b', 'mode-c']);

const edgeStrength = z.enum(['primary', 'secondary']);

const renderTier = z.enum(['foreground', 'deep']);

const bodyOfWorkAttribution = z.enum(['authored', 'hosted']);

const hostedItem = z.object({
  title: z.string(),
  kind: z.enum(['essay', 'series', 'talk', 'interview', 'translation']),
  year: z.union([z.number().int(), z.string()]),
  hosted_on_url: z.string().url(),
  editorial_framing: z.string().optional(),
});

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
  render_tier: renderTier.optional(),
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
  attribution_kind: bodyOfWorkAttribution.optional(),
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
  render_tier: renderTier.optional(),
  auto_surfaced: z.boolean().optional(),
  editorial_demote_to: z.literal('secondary').optional(),
  hosted_items: z.array(hostedItem).optional(),
});

const liveEdgeRecentWork = z.object({
  title: z.string(),
  year: z.union([z.number().int(), z.string()]),
  kind: z.enum(['book', 'essay', 'talk', 'series', 'tool', 'other']),
  with: z.string().optional(),
  note: z.string().optional(),
});

const liveEdge = z.object({
  current_focus: z.string(),
  summary: z.string(),
  recent_work: z.array(liveEdgeRecentWork).optional(),
  last_observed: z.coerce.date(),
});

const longRead = z.object({
  title: z.string(),
  summary: z.string(),
  source_path: z.string().optional(),
});

const glossaryEntry = z.object({
  term: z.string(),
  gloss: z.string(),
  concept_slug: z.string().regex(/^[a-z0-9-]+$/).optional(),
});

const readingReview = z.object({
  protocol: z.string(),
  date: z.coerce.date(),
  verdict: z.enum(['accept', 'accept-with-edits']),
  council_transcript: z.string(),
  grounding_pack: z.string(),
  claims: z.string(),
  dissent: z.boolean().default(false),
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
    doctrine_mode: doctrineMode,
    has_long_read: z.boolean().default(false),
    long_read_path: z.string().optional(),
    last_updated: z.coerce.date(),

    portrait: z.string().optional(),

    tagline: z.string(),
    thirty_second_take: z.string(),

    background: z.string(),
    why_they_matter_as_a_thinker: z.string(),

    thesis: z.string(),
    working_line: z.string().optional(),

    named_frames: z.array(namedFrame),

    body_of_work: z.array(bodyOfWorkItem),

    // §6 Path C (iter-11): the Distillery's reading, built by the Reading Protocol. No first person.
    reading: z.string().optional(),
    extension: z.string().optional(),
    reading_review: readingReview.optional(),
    // Julie's own first-person note. Optional, never blocks shipping, never drafted by Camila.
    margin_note: z.string().optional(),
    // Legacy §6 (pre-iter-11). Camila-drafted, Julie-reviewed at v1. Removed once every page has a reading.
    what_i_take: z.string().optional(),
    where_i_extend: z.string().optional(),
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

    live_edge_visible: z.boolean().optional(),
    live_edge: liveEdge.optional(),
  }).refine(
    (t) => Boolean(t.reading && t.extension) || Boolean(t.what_i_take && t.where_i_extend),
    { message: '§6 needs reading + extension (or the legacy what_i_take + where_i_extend pair)' },
  ),
});

const longReadChapters = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/long-read' }),
  schema: z.object({
    thinker_slug: z.string().regex(/^[a-z0-9-]+$/),
    chapter_number: z.number().int().nonnegative(),
    title: z.string(),
    summary: z.string().optional(),
    intro: z.string().optional(),
    glossary: z.array(glossaryEntry).optional(),
    last_updated: z.coerce.date(),
  }),
});

const adjacentConcept = z.object({
  target_slug: z.string().regex(/^[a-z0-9-]+$/, 'kebab-case slug'),
  display_name: z.string(),
  edge_label: z.string(),
});

const concepts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/concepts' }),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    display_name: z.string(),
    one_line_gloss: z.string(),
    last_updated: z.coerce.date(),

    julie_reading: z.string().optional(),
    julie_reading_prompt: z.string().optional(),

    limits: z.array(limit).min(2, 'At least 2 limits per ISC-36 floor').optional(),
    still_load_bearing_despite: z.string().optional(),

    adjacent_concepts: z
      .array(adjacentConcept)
      .min(3, 'At least 3 adjacent concepts per ISC-36 floor')
      .optional(),

    working_uses: z.array(z.string()).optional(),

    long_read: longRead.optional(),
  }),
});

export const collections = { thinkers, longReadChapters, concepts };
