// Cross-page rules that need the whole graph, so they cannot live in the per-file schema.
// Hard rules throw and fail the build. Soft rules print a warning in the build log.
// Runs once per build (memoized) no matter how many pages call it.
import { getCollection } from 'astro:content';
import type { Thinker } from './graph';

type Adjacent = Thinker['data']['adjacent_thinkers'][number];

export interface Neighbor extends Adjacent {
  hasPage: boolean;
  autoSurfaced: boolean;
  effectiveStrength: 'primary' | 'secondary';
}

let checked: Promise<void> | null = null;

export function runGraphChecks(): Promise<void> {
  checked ??= check();
  return checked;
}

async function check() {
  const thinkers = await getCollection('thinkers');
  const concepts = await getCollection('concepts');
  const pages = new Map(thinkers.map((t) => [t.data.slug, t]));
  const warnings: string[] = [];
  const errors: string[] = [];

  for (const t of thinkers) {
    const d = t.data;
    const neighborSlugs = new Set(d.adjacent_thinkers.map((a) => a.target_slug));

    for (const a of d.adjacent_thinkers) {
      const target = pages.get(a.target_slug);
      if (!target) continue;
      // Return links (issue #9): a page this one links to should link back.
      if (!target.data.adjacent_thinkers.some((b) => b.target_slug === d.slug)) {
        warnings.push(`${a.target_slug} has no edge back to ${d.slug}`);
      }
      // Critic weighting (SCHEMA 4.11): a critic with a page here is primary.
      if (a.edge_type === 'critiques' && a.strength !== 'primary' && !a.editorial_demote_to) {
        warnings.push(`${d.slug}: critic ${a.target_slug} has a page here and should be strength: primary (or set editorial_demote_to)`);
      }
    }

    // Co-originators with a page here should appear as neighbors.
    for (const f of d.named_frames) {
      for (const co of f.co_originators ?? []) {
        if (co.slug !== d.slug && pages.has(co.slug) && !neighborSlugs.has(co.slug)) {
          warnings.push(`${d.slug}: frame ${f.concept_slug} credits ${co.slug}, who has a page here but is not in adjacent_thinkers`);
        }
      }
    }
  }

  // Neighbor caps (SCHEMA 4.11, issue #9): at most 5 foreground neighbors without a page here,
  // and at most 7 in total, unless on-site neighbors alone exceed 7 (they always surface).
  for (const t of thinkers) {
    const { foreground } = orderNeighbors(t.data.adjacent_thinkers, new Set(pages.keys()));
    const offSite = foreground.filter((n) => !n.hasPage).length;
    const onSite = foreground.length - offSite;
    if (offSite > 5) errors.push(`${t.data.slug}: ${offSite} foreground neighbors without a page here; the maximum is 5 (set render_tier: deep on the rest)`);
    if (foreground.length > Math.max(7, onSite)) errors.push(`${t.data.slug}: ${foreground.length} foreground neighbors; the maximum is 7 (set render_tier: deep on off-site neighbors)`);
  }

  // Concept pages (SCHEMA 6.4, issue #11).
  for (const c of concepts) {
    const holders = thinkers.flatMap((t) =>
      t.data.named_frames.filter((f) => f.concept_slug === c.data.slug).map((f) => f.attribution_kind),
    );
    if (holders.length < 2) {
      errors.push(`concept ${c.data.slug} has ${holders.length} holder(s); a concept page needs at least 2`);
    } else if (new Set(holders).size === 1) {
      warnings.push(`concept ${c.data.slug}: every holder has attribution_kind ${holders[0]}, so the page shows no genealogy`);
    }
  }

  for (const w of warnings) console.warn(`[distillery] warning: ${w}`);
  if (errors.length) throw new Error(`[distillery] ${errors.length} graph rule(s) failed:\n- ${errors.join('\n- ')}`);
}

// Neighbors in render order, with the auto-surfacing rules from SCHEMA 4.11 applied.
export function orderNeighbors(adjacent: Adjacent[], pageSlugs: Set<string>): { foreground: Neighbor[]; deep: Neighbor[] } {
  const all: Neighbor[] = adjacent.map((a) => {
    const hasPage = pageSlugs.has(a.target_slug);
    const effectiveStrength = hasPage && !a.editorial_demote_to ? 'primary' : a.editorial_demote_to ?? a.strength;
    return { ...a, hasPage, autoSurfaced: hasPage, effectiveStrength };
  });
  const rank = (n: Neighbor) => (n.hasPage ? 0 : 2) + (n.effectiveStrength === 'primary' ? 0 : 1);
  const sorted = all.map((n, i) => ({ n, i })).sort((x, y) => rank(x.n) - rank(y.n) || x.i - y.i).map((x) => x.n);
  return {
    foreground: sorted.filter((n) => n.hasPage || (n.render_tier ?? 'foreground') === 'foreground'),
    deep: sorted.filter((n) => !n.hasPage && n.render_tier === 'deep'),
  };
}

export function daysSince(date: Date, now = new Date()): number {
  return Math.floor((now.getTime() - date.getTime()) / 86_400_000);
}
