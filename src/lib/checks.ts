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
    // The caps are now enforced by collapsing, not by failing. Adding a thinker used to push
    // several existing pages over the cap and each one needed a human to choose who lost their
    // place; seven of eleven pages sat exactly at the cap, so that toll was permanent. The
    // ranking picks by the same rule the editors were applying anyway, and an explicit
    // `render_tier: deep` still overrides it. What remains is a warning, so the choice is visible
    // in the build log and can be overridden rather than silently accepted.
    const { foreground, autoCollapsed } = orderNeighbors(t.data.adjacent_thinkers, new Set(pages.keys()), t.data.named_frames);
    const offSite = foreground.filter((n) => !n.hasPage).length;
    if (autoCollapsed.length) {
      warnings.push(`${t.data.slug}: collapsed ${autoCollapsed.map((n) => n.target_slug).join(', ')} to stay inside the neighbor caps`);
    }
    // Only reachable when on-site neighbors alone break the off-site rule, which collapsing cannot
    // fix because a neighbor with a page here always surfaces.
    if (offSite > OFF_SITE_CAP) errors.push(`${t.data.slug}: ${offSite} foreground neighbors without a page here after collapsing; the maximum is ${OFF_SITE_CAP}`);
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

export const FOREGROUND_CAP = 7;
export const OFF_SITE_CAP = 5;

// Is this neighbor's claim already stated somewhere else on the page?
//
// This is the test the editors were already applying by hand. Kalman came off Majors' foreground
// because his control-theory credit is carried in full by a frame's `co_originators`. Eric Evans
// came off Fowler's because bounded context already names him as its author. Both editors reached
// for the same rule independently and wrote it out in longhand each time, which is the signal that
// it belongs in code.
//
// A neighbor whose credit appears nowhere else loses something real when it collapses. One who is
// already named inside a frame keeps the credit and loses only a second mention.
function creditedElsewhere(n: Neighbor, frames: Thinker['data']['named_frames']): boolean {
  return frames.some(
    (f) =>
      f.primary_author === n.target_slug ||
      f.derived_from === n.target_slug ||
      (f.co_originators ?? []).some((c) => c.slug === n.target_slug),
  );
}

// Rank for the collapse order, lowest first. Off-site neighbors only: a neighbor with a page here
// always surfaces (SCHEMA 4.11) and is never auto-collapsed.
//
// The whole score reads off THIS page. It never depends on the rest of the graph, which is the
// property that matters: adding a thinker anywhere else cannot reshuffle an unrelated page. Only a
// page that gains an edge re-sorts, and it re-sorts by one position.
// Having a page here is a heavy weight, not an absolute guarantee.
//
// It used to be absolute, and that produced both of the problems the neighbour measurement found.
// A new page's return edge landed on a page already at the cap, took a slot it could never lose,
// and evicted an off-site neighbour; 11 of 13 pages sat exactly at the cap, with roughly 21 more
// evictions due before the queue drained. And because the limit was max(CAP, onSite), a page whose
// on-site neighbours passed the cap grew without any limit at all, which is the same root cause
// wearing the opposite face at a roster of 40 to 60.
//
// As a weight, an on-site neighbour still beats an off-site one in the same category, so ordinary
// pages are unchanged. What changes is that a page's only critic, or an edge crediting someone the
// page credits nowhere else, can now hold its place against a weak on-site edge. Collapsed
// neighbours keep their link in the "more neighbours" disclosure, so nothing becomes unreachable.
// Categories are spaced by 2 and the off-site penalty is 3, so being off-site costs one and a half
// categories. Heavy, and short of absolute. A critic still loses to an on-site `hosts` edge
// carrying items, and an edge crediting someone the page credits nowhere else still beats an
// on-site edge whose credit is already stated inside a frame.
const CATEGORY_SPACING = 2;
const OFF_SITE_PENALTY = 3;

function collapseRank(n: Neighbor, frames: Thinker['data']['named_frames']): number {
  const category = (() => {
    // A critic is often the page's only counterposition, so it collapses last. SCHEMA 4.11 weights
    // against demoting one and both editors said so unprompted when they had to choose.
    if (n.edge_type === 'critiques') return 0;
    // A `hosts` edge carrying items is the only route to work that lives nowhere else.
    if (n.edge_type === 'hosts' && (n.hosted_items?.length ?? 0) > 0) return 1;
    if (!creditedElsewhere(n, frames)) return n.effectiveStrength === 'primary' ? 2 : 3;
    return n.effectiveStrength === 'primary' ? 4 : 5;
  })();
  return category * CATEGORY_SPACING + (n.hasPage ? 0 : OFF_SITE_PENALTY);
}

// Neighbors in render order, with the auto-surfacing rules from SCHEMA 4.11 applied.
//
// Passing `frames` turns on automatic collapse: off-site neighbors past the cap move to the deep
// tier by `collapseRank` instead of waiting for someone to hand-set `render_tier: deep`. An
// explicit `render_tier: deep` still wins, so the editor keeps the override where she wants one.
// Without `frames` the function behaves as it always did, which keeps the check callers honest.
export function orderNeighbors(
  adjacent: Adjacent[],
  pageSlugs: Set<string>,
  frames?: Thinker['data']['named_frames'],
): { foreground: Neighbor[]; deep: Neighbor[]; autoCollapsed: Neighbor[] } {
  // `authored` is the position in the file. The collapse tiebreak needs it, because the display
  // sort below puts every on-site neighbour first, and tie-breaking on that order would hand every
  // tie to an on-site edge, which is the absolute guarantee creeping back in through the side
  // door. A test critic lost its slot to a synthetic weak edge exactly that way.
  const all: Array<Neighbor & { authored: number }> = adjacent.map((a, authored) => {
    const hasPage = pageSlugs.has(a.target_slug);
    const effectiveStrength = hasPage && !a.editorial_demote_to ? 'primary' : a.editorial_demote_to ?? a.strength;
    return { ...a, hasPage, autoSurfaced: hasPage, effectiveStrength, authored };
  });
  const rank = (n: Neighbor) => (n.hasPage ? 0 : 2) + (n.effectiveStrength === 'primary' ? 0 : 1);
  const sorted = all.map((n, i) => ({ n, i })).sort((x, y) => rank(x.n) - rank(y.n) || x.i - y.i).map((x) => x.n);

  // Explicit beats automatic. Auto-surfacing exists so an on-site neighbour never has to be hand
  // promoted, not to forbid ever demoting one, and until now `render_tier: deep` on a neighbour
  // with a page here did nothing at all. Majors has carried exactly that on David Woods since the
  // page shipped: an editorial decision recorded and silently dropped. Lane A's reading of LCSH
  // H 370 says the decision was right, since Majors already reaches Woods through Allspaw.
  //
  // Auto-collapse still never touches an on-site neighbour. Only a human can demote one.
  const pinnedDeep = (n: Neighbor) => n.render_tier === 'deep';
  let foreground = sorted.filter((n) => (n.render_tier ?? 'foreground') === 'foreground');
  const deep = sorted.filter(pinnedDeep);
  const autoCollapsed: Neighbor[] = [];

  if (frames) {
    // The cap binds. It used to be max(CAP, onSite), which meant it stopped binding entirely once
    // a page's on-site neighbours passed it, and a hub page would grow unbounded at scale.
    const limit = FOREGROUND_CAP;
    // Collapse the weakest edges until the page fits, on-site included. Stable: equal ranks keep
    // their authored order, so a rerun never reshuffles a page that already fits.
    const candidates = (foreground as Array<Neighbor & { authored: number }>)
      .map((n) => ({ n, i: n.authored }))
      .sort((a, b) => collapseRank(b.n, frames) - collapseRank(a.n, frames) || b.i - a.i);
    // Both caps from SCHEMA 4.11: at most 7 in total, and at most 5 without a page here.
    const overCap = () => foreground.length > limit || foreground.filter((n) => !n.hasPage).length > OFF_SITE_CAP;
    for (const c of candidates) {
      if (!overCap()) break;
      autoCollapsed.push(c.n);
      foreground = foreground.filter((n) => n !== c.n);
    }
  }

  return { foreground, deep: [...deep, ...autoCollapsed], autoCollapsed };
}

export function daysSince(date: Date, now = new Date()): number {
  return Math.floor((now.getTime() - date.getTime()) / 86_400_000);
}
