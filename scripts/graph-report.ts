// The link graph as a reader meets it: who links to whom, what is returned, how far two clicks
// carry, which concept pages anyone reaches, and who is named without a page.
// Usage: bun scripts/graph-report.ts [--dist <dir>]
//
// Step 1 of DILIGENCE.md. It reports and nothing more: no targets, no pass or fail, exit 0 always.
// A count here is orientation for Julie's graph decisions (step 4), and the moment a number in this
// output becomes something to raise or lower it is the density trap the prose passes already fell
// into (OPERATIONAL_RULES, "Density is never a success criterion"). So it is not wired into
// verify.ts or CI, deliberately.
//
// WHICH LINKS COUNT. The links the built page renders, read from content through the template's
// own rules, not the raw `adjacent_thinkers` list. The two differ in both directions:
//   - The template adds links no edge declares. Every foreground frame prints "also held by" with a
//     link to each other holder of the same concept_slug, and an "Open concept page" link when one
//     exists. Concept pages link every holder, deep frames included.
//   - A neighbor past the caps collapses into the "more neighbors" disclosure. Until 2026-10-15
//     that list printed the name with no link, so 26 on-site neighbors were dead ends; it links them
//     now, as the comment above OFF_SITE_PENALTY in src/lib/checks.ts always said it did. They count
//     as links here, and the --dist cross-check is what catches the template drifting again.
// The site header (Thinkers, Concepts, About) and a page's link to its own long read are left out:
// they are on every page, and counting the index as one click from everywhere would make every
// two-click number the whole site.
//
// The foreground/deep split comes from importing `orderNeighbors` itself rather than copying it, so
// the report cannot drift from the template. checks.ts imports `astro:content`, which only exists
// inside an Astro build, so a stub module stands in for it; orderNeighbors never calls it.
// With --dist (or a dist/ already present) the computed links are checked against the hrefs in
// each built page's <article>, so "as rendered" is a tested claim, not an assumption.
import { plugin } from 'bun';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadThinkers, loadConcepts, type Doc } from './lib';

plugin({
  name: 'astro-content-stub',
  setup(build) {
    build.module('astro:content', () => ({ exports: { getCollection: async () => [] }, loader: 'object' }));
  },
});
const { orderNeighbors } = await import('../src/lib/checks');

export type PageId = string; // "thinkers/<slug>" or "concepts/<slug>"
export type LinkKind = 'adjacent' | 'adjacent-more' | 'also-held' | 'concept-link' | 'holder' | 'adjacent-concept';
export type Link = { from: PageId; to: PageId; kind: LinkKind };

const T = (s: string): PageId => `thinkers/${s}`;
const C = (s: string): PageId => `concepts/${s}`;

// Every link the two templates render between thinker and concept pages, one entry per <a>
// source, before de-duplication. Mirrors src/pages/thinkers/[slug].astro and
// src/pages/concepts/[slug].astro; change those and this changes with them.
export function renderedLinks(thinkers: Doc[], concepts: Doc[]): { links: Link[] } {
  const pageSlugs = new Set(thinkers.map((t) => t.slug));
  const conceptSlugs = new Set(concepts.map((c) => c.slug));
  // concept_slug -> holders, in file order, as buildConceptHoldersIndex builds it (all frames).
  const holders = new Map<string, string[]>();
  for (const t of thinkers)
    for (const f of t.named_frames ?? []) holders.set(f.concept_slug, [...(holders.get(f.concept_slug) ?? []), t.slug]);

  const links: Link[] = [];
  for (const t of thinkers) {
    const from = T(t.slug);
    const { foreground, deep } = orderNeighbors(t.adjacent_thinkers ?? [], pageSlugs, t.named_frames ?? []);
    for (const n of foreground) if (n.hasPage) links.push({ from, to: T(n.target_slug), kind: 'adjacent' });
    for (const n of deep) if (n.hasPage) links.push({ from, to: T(n.target_slug), kind: 'adjacent-more' });
    // Deep frames print name and gloss only, so only foreground frames carry these two links.
    for (const f of (t.named_frames ?? []).filter((f: any) => (f.render_tier ?? 'foreground') === 'foreground')) {
      for (const h of holders.get(f.concept_slug) ?? []) if (h !== t.slug) links.push({ from, to: T(h), kind: 'also-held' });
      if (conceptSlugs.has(f.concept_slug)) links.push({ from, to: C(f.concept_slug), kind: 'concept-link' });
    }
  }
  for (const c of concepts) {
    const from = C(c.slug);
    for (const h of holders.get(c.slug) ?? []) links.push({ from, to: T(h), kind: 'holder' });
    for (const a of c.adjacent_concepts ?? [])
      if (conceptSlugs.has(a.target_slug) && a.target_slug !== c.slug) links.push({ from, to: C(a.target_slug), kind: 'adjacent-concept' });
  }
  return { links };
}

// Distinct page-to-page adjacency. Two links from one page to the same page are one click choice.
export function adjacency(pages: PageId[], links: Link[]): Map<PageId, Set<PageId>> {
  const out = new Map(pages.map((p) => [p, new Set<PageId>()]));
  for (const l of links) if (l.from !== l.to) out.get(l.from)?.add(l.to);
  return out;
}

export function incoming(adj: Map<PageId, Set<PageId>>): Map<PageId, Set<PageId>> {
  const out = new Map([...adj.keys()].map((p) => [p, new Set<PageId>()]));
  for (const [from, tos] of adj) for (const to of tos) out.get(to)?.add(from);
  return out;
}

// Pages a reader can land on in one or two clicks from `start`, not counting `start` itself.
export function withinTwo(adj: Map<PageId, Set<PageId>>, start: PageId): Set<PageId> {
  const seen = new Set<PageId>();
  for (const a of adj.get(start) ?? []) {
    seen.add(a);
    for (const b of adj.get(a) ?? []) seen.add(b);
  }
  seen.delete(start);
  return seen;
}

// The edges as the files declare them: `adjacent_thinkers` entries whose target has a page here,
// whatever their render tier. This is the graph the build's "has no edge back" warning reads, and
// the one most likely behind DILIGENCE.md's 2026-10-10 figures.
export function declaredEdges(thinkers: Doc[]): Map<string, Set<string>> {
  const pageSlugs = new Set(thinkers.map((t) => t.slug));
  return new Map(
    thinkers.map((t) => [
      t.slug,
      new Set((t.adjacent_thinkers ?? []).map((a: any) => a.target_slug).filter((s: string) => pageSlugs.has(s) && s !== t.slug)),
    ]),
  );
}

// People the files name with no page here, from neighbor edges and frame co-originators.
export function unpaged(thinkers: Doc[]): Array<{ slug: string; name?: string; pages: string[]; via: string[] }> {
  const pageSlugs = new Set(thinkers.map((t) => t.slug));
  const by = new Map<string, { name?: string; pages: Set<string>; via: Set<string> }>();
  const note = (slug: string, page: string, via: string, name?: string) => {
    if (pageSlugs.has(slug)) return;
    const e = by.get(slug) ?? { pages: new Set(), via: new Set() };
    e.name ??= name;
    e.pages.add(page);
    e.via.add(via);
    by.set(slug, e);
  };
  for (const t of thinkers) {
    for (const a of t.adjacent_thinkers ?? []) note(a.target_slug, t.slug, 'adjacent_thinkers', a.display_name);
    for (const f of t.named_frames ?? []) for (const co of f.co_originators ?? []) note(co.slug, t.slug, 'co_originators');
  }
  return [...by]
    .map(([slug, e]) => ({ slug, name: e.name, pages: [...e.pages].sort(), via: [...e.via].sort() }))
    .sort((a, b) => b.pages.length - a.pages.length || a.slug.localeCompare(b.slug));
}

// Internal links inside a built page's <article>, as page ids. The header nav sits outside it.
export function distLinks(html: string, self: PageId): Set<PageId> {
  const article = html.match(/<article[\s\S]*<\/article>/)?.[0] ?? '';
  const out = new Set<PageId>();
  for (const m of article.matchAll(/href="[^"]*?\/(thinkers|concepts)\/([a-z0-9-]+)\/?"/g)) {
    const id = `${m[1]}/${m[2]}`;
    if (id !== self) out.add(id);
  }
  return out;
}

function main() {
  const thinkers = [...loadThinkers().values()].sort((a, b) => a.slug.localeCompare(b.slug));
  const concepts = [...loadConcepts().values()].sort((a, b) => a.slug.localeCompare(b.slug));
  const pages = [...thinkers.map((t) => T(t.slug)), ...concepts.map((c) => C(c.slug))];
  const { links } = renderedLinks(thinkers, concepts);
  const adj = adjacency(pages, links);
  const inc = incoming(adj);
  const declared = declaredEdges(thinkers);
  const declaredIn = new Map(thinkers.map((t) => [t.slug, [...declared].filter(([, s]) => s.has(t.slug)).length]));
  const short = (p: PageId) => p.replace(/^thinkers\//, '').replace(/^concepts\//, 'concept:');

  console.log(`graph-report: ${thinkers.length} thinker pages, ${concepts.length} concept pages`);
  console.log(`Links counted as the built page renders them (adjacent cards, "also held by", concept links, concept holders),`);
  console.log(`header nav and own long-read excluded. "edges" columns are adjacent_thinkers entries to on-site pages, any tier.\n`);

  const pad = (s: string | number, n: number) => String(s).padEnd(n);
  const padL = (s: string | number, n: number) => String(s).padStart(n);
  // "in" counts every page that links here; "in-T" only thinker pages, which is the figure
  // DILIGENCE.md quoted on 2026-10-10. They differ only where a concept page links a holder.
  console.log(`${pad('page', 30)}${padL('in', 4)}${padL('in-T', 6)}${padL('out', 5)}${padL('edges in', 10)}${padL('edges out', 11)}${padL('2-click', 9)}  links not returned`);
  for (const p of pages) {
    const slug = p.split('/')[1];
    const isThinker = p.startsWith('thinkers/');
    const notReturned = [...adj.get(p)!].filter((q) => !adj.get(q)!.has(p)).map(short);
    console.log(
      `${pad(short(p), 30)}${padL(inc.get(p)!.size, 4)}${padL([...inc.get(p)!].filter((q) => q.startsWith('thinkers/')).length, 6)}${padL(adj.get(p)!.size, 5)}` +
        `${padL(isThinker ? declaredIn.get(slug)! : '-', 10)}${padL(isThinker ? declared.get(slug)!.size : '-', 11)}` +
        `${padL(withinTwo(adj, p).size, 9)}  ${notReturned.join(', ') || '(all returned)'}`,
    );
  }

  console.log(`\nDeclared edges not returned (an adjacent_thinkers entry to a page that has none back):`);
  const unreturned = [...declared].flatMap(([from, tos]) => [...tos].filter((to) => !declared.get(to)!.has(from)).map((to) => `${from} -> ${to}`));
  console.log(unreturned.length ? unreturned.map((l) => `  ${l}`).join('\n') : '  (none)');
  const pairs = [...declared].reduce((n, [, tos]) => n + tos.size, 0);
  console.log(`  ${pairs - unreturned.length} of ${pairs} declared on-site edges are returned.`);


  console.log(`\nConcept reach (thinker pages that link to the concept page directly / within two clicks):`);
  for (const c of concepts) {
    const id = C(c.slug);
    const direct = [...inc.get(id)!].filter((p) => p.startsWith('thinkers/'));
    const two = thinkers.filter((t) => withinTwo(adj, T(t.slug)).has(id));
    console.log(`  ${pad(c.slug, 28)} ${direct.length} direct (${direct.map(short).join(', ')}), ${two.length} within two clicks`);
  }
  const shared = new Map<string, string[]>();
  for (const t of thinkers) for (const f of t.named_frames ?? []) shared.set(f.concept_slug, [...new Set([...(shared.get(f.concept_slug) ?? []), t.slug])]);
  const unbuilt = [...shared].filter(([s, h]) => h.length >= 2 && !concepts.some((c) => c.slug === s)).sort((a, b) => b[1].length - a[1].length);
  console.log(`\nFrames held on two or more pages with no concept page (holders):`);
  console.log(unbuilt.length ? unbuilt.map(([s, h]) => `  ${pad(s, 34)} ${h.length}  ${h.join(', ')}`).join('\n') : '  (none)');

  const people = unpaged(thinkers);
  console.log(`\nPeople named without a page here (${people.length}), by how many pages name them:`);
  for (const p of people) console.log(`  ${padL(p.pages.length, 2)}  ${pad(p.slug, 28)} ${pad(p.name ?? '', 26)} via ${p.via.join('+')}: ${p.pages.join(', ')}`);

  const dist = process.argv.includes('--dist') ? process.argv[process.argv.indexOf('--dist') + 1] : join(ROOT, 'dist');
  if (dist && existsSync(dist)) {
    const off: string[] = [];
    for (const p of pages) {
      const file = join(dist, p, 'index.html');
      if (!existsSync(file)) {
        off.push(`  ${short(p)}: not in ${dist}`);
        continue;
      }
      const built = distLinks(readFileSync(file, 'utf8'), p);
      const want = adj.get(p)!;
      const missing = [...want].filter((q) => !built.has(q));
      const extra = [...built].filter((q) => !want.has(q));
      if (missing.length || extra.length) off.push(`  ${short(p)}: computed-only ${missing.map(short).join(',') || '-'}; built-only ${extra.map(short).join(',') || '-'}`);
    }
    console.log(`\nCross-check against ${dist}: ${pages.length - off.length} of ${pages.length} pages match the built links exactly.`);
    if (off.length) console.log(`${off.join('\n')}\n  (a stale dist/ shows up here; rebuild before reading this as drift)`);
  } else {
    console.log(`\nNo dist/ to cross-check against; run \`bun run build\` first to confirm these are the rendered links.`);
  }
}

if (import.meta.main) main();
