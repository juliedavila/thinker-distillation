import { getCollection, type CollectionEntry } from 'astro:content';

export type Thinker = CollectionEntry<'thinkers'>;

export interface FrameHolder {
  thinker_slug: string;
  display_name: string;
  attribution_kind: string;
}

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
