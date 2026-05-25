import { getCollection, type CollectionEntry } from 'astro:content';

export type Thinker = CollectionEntry<'thinkers'>;
export type Concept = CollectionEntry<'concepts'>;

export interface FrameHolder {
  thinker_slug: string;
  display_name: string;
  attribution_kind: string;
}

export interface ConceptHolder {
  thinker_slug: string;
  name: string;
  attribution_kind: string;
  frame_display_name: string;
  frame_gloss: string;
  source_link?: string;
}

const ATTRIBUTION_ORDER: Record<string, number> = {
  original: 0,
  'co-authored': 1,
  distributed: 2,
  extended: 3,
  popularized: 4,
  translated: 5,
  community: 6,
};

export interface AlsoHeldEntry {
  thinker_slug: string;
  display_name: string;
  role: string;
  edge_label: string;
}

/**
 * Build a global map: concept_slug -> all thinkers who hold the frame.
 * Used to compute §4 also_held_by at build time per SCHEMA.md Q4 lock.
 */
export async function buildConceptHoldersIndex(): Promise<Map<string, FrameHolder[]>> {
  const thinkers = await getCollection('thinkers');
  const index = new Map<string, FrameHolder[]>();

  for (const thinker of thinkers) {
    const slug = thinker.data.slug;
    const name = thinker.data.name;
    for (const frame of thinker.data.named_frames) {
      const holders = index.get(frame.concept_slug) ?? [];
      holders.push({
        thinker_slug: slug,
        display_name: name,
        attribution_kind: frame.attribution_kind,
      });
      index.set(frame.concept_slug, holders);
    }
  }

  return index;
}

/**
 * For a given thinker + concept, return the also_held_by list (all holders minus self).
 * Edge label is synthesized from the holder's attribution_kind toward the current frame.
 */
export function alsoHeldByFor(
  conceptSlug: string,
  currentThinkerSlug: string,
  index: Map<string, FrameHolder[]>,
): AlsoHeldEntry[] {
  const holders = index.get(conceptSlug) ?? [];
  return holders
    .filter((h) => h.thinker_slug !== currentThinkerSlug)
    .map((h) => ({
      thinker_slug: h.thinker_slug,
      display_name: h.display_name,
      role: h.attribution_kind,
      edge_label: roleToLabel(h.attribution_kind),
    }));
}

/**
 * Build a map: concept_slug -> all holders with full frame attribution preserved.
 * Used by concept pages (§A Genealogy, §B Holders) to compose timeline + lane
 * from the same source of truth as the thinker-page also_held_by index.
 */
export async function buildConceptHoldersWithAttribution(): Promise<Map<string, ConceptHolder[]>> {
  const thinkers = await getCollection('thinkers');
  const index = new Map<string, ConceptHolder[]>();

  for (const thinker of thinkers) {
    for (const frame of thinker.data.named_frames) {
      const holders = index.get(frame.concept_slug) ?? [];
      holders.push({
        thinker_slug: thinker.data.slug,
        name: thinker.data.name,
        attribution_kind: frame.attribution_kind,
        frame_display_name: frame.display_name,
        frame_gloss: frame.one_line_gloss,
        source_link: frame.source_link,
      });
      index.set(frame.concept_slug, holders);
    }
  }

  for (const [slug, holders] of index) {
    holders.sort((a, b) => {
      const ra = ATTRIBUTION_ORDER[a.attribution_kind] ?? 99;
      const rb = ATTRIBUTION_ORDER[b.attribution_kind] ?? 99;
      if (ra !== rb) return ra - rb;
      return a.name.localeCompare(b.name);
    });
    index.set(slug, holders);
  }

  return index;
}

/**
 * Build a Set of concept_slugs that have a corresponding /concepts/<slug> page authored.
 * Used by the thinker template to decide whether to render the "Open concept page →" link.
 */
export async function buildConceptPageIndex(): Promise<Set<string>> {
  const concepts = await getCollection('concepts');
  return new Set(concepts.map((c) => c.data.slug));
}

function roleToLabel(kind: string): string {
  switch (kind) {
    case 'original':
      return 'origin';
    case 'extended':
      return 'extension';
    case 'popularized':
      return 'popularized it';
    case 'distributed':
      return 'shared origin';
    case 'co-authored':
      return 'co-author';
    case 'translated':
      return 'translation';
    case 'community':
      return 'community usage';
    default:
      return kind;
  }
}
