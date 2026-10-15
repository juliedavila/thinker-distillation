// scripts/graph-report.ts: links are counted as the template renders them, which differs from the
// adjacent_thinkers list in both directions. The fixtures are the shapes behind the 2026-10-15
// reconciliation with DILIGENCE.md: a concept page adding an incoming link nobody declared, and a
// collapsed on-site neighbor losing its link.
import { test, expect } from 'bun:test';
import { renderedLinks, adjacency, incoming, withinTwo, declaredEdges, unpaged, distLinks } from '../graph-report';

const edge = (target_slug: string, extra: Record<string, unknown> = {}) => ({
  target_slug,
  display_name: target_slug,
  edge_type: 'parallel',
  edge_label: 'x',
  strength: 'primary',
  ...extra,
});
const frame = (concept_slug: string, extra: Record<string, unknown> = {}) => ({
  concept_slug,
  display_name: concept_slug,
  one_line_gloss: 'g',
  attribution_kind: 'original',
  primary_author: 'a',
  ...extra,
});
const page = (slug: string, adjacent: any[] = [], frames: any[] = []) => ({ slug, adjacent_thinkers: adjacent, named_frames: frames });

test('a shared frame adds "also held by" links and a concept page links every holder', () => {
  const thinkers = [page('a', [edge('b')], [frame('shared')]), page('b', [edge('a')], [frame('shared', { render_tier: 'deep' })])];
  const concepts = [{ slug: 'shared', adjacent_concepts: [] }];
  const { links } = renderedLinks(thinkers, concepts);
  const adj = adjacency(['thinkers/a', 'thinkers/b', 'concepts/shared'], links);
  // a's frame is foreground: it links b (also held) and the concept page. b's is deep: no links.
  expect([...adj.get('thinkers/a')!].sort()).toEqual(['concepts/shared', 'thinkers/b']);
  expect([...adj.get('thinkers/b')!]).toEqual(['thinkers/a']);
  // The concept page links both holders, deep frame included, so b gains an incoming link no edge
  // declares. That is the 13th link to Fowler that DILIGENCE.md's 12 left out.
  expect([...incoming(adj).get('thinkers/b')!].sort()).toEqual(['concepts/shared', 'thinkers/a']);
});

test('an on-site neighbor collapsed past the cap still renders as a link', () => {
  // Eight on-site neighbors against a cap of seven: one collapses into "more neighbors".
  const others = 'bcdefghi'.split('');
  const thinkers = [page('a', others.map((s) => edge(s))), ...others.map((s) => page(s, [edge('a')]))];
  const { links } = renderedLinks(thinkers, []);
  expect(links.filter((l) => l.from === 'thinkers/a' && l.kind === 'adjacent')).toHaveLength(7);
  expect(links.filter((l) => l.from === 'thinkers/a' && l.kind === 'adjacent-more')).toHaveLength(1);
  // The declared graph still has all eight.
  expect(declaredEdges(thinkers).get('a')!.size).toBe(8);
});

test('two-click reach counts distinct pages and never the start page', () => {
  const adj = new Map([
    ['a', new Set(['b'])],
    ['b', new Set(['a', 'c'])],
    ['c', new Set(['d'])],
    ['d', new Set<string>()],
  ]);
  expect([...withinTwo(adj, 'a')].sort()).toEqual(['b', 'c']);
});

test('people without a page are gathered from edges and co-originators, by page count', () => {
  const thinkers = [
    page('a', [edge('b'), edge('zed', { display_name: 'Zed' })], [frame('f', { co_originators: [{ slug: 'yan', role: 'r' }, { slug: 'b', role: 'r' }] })]),
    page('b', [edge('zed')]),
  ];
  const out = unpaged(thinkers);
  expect(out.map((p) => p.slug)).toEqual(['zed', 'yan']);
  expect(out[0]).toMatchObject({ name: 'Zed', pages: ['a', 'b'], via: ['adjacent_thinkers'] });
});

test('dist links come from the article only, without the page itself or the long read', () => {
  const html = `<header><a href="/thinkers/nav/">x</a></header><article>
    <a href="/thinkers/b">B</a><a href="/base/concepts/c/">C</a><a href="/thinkers/a/long-read">L</a><a href="/thinkers/a">self</a>
    </article>`;
  expect([...distLinks(html, 'thinkers/a')].sort()).toEqual(['concepts/c', 'thinkers/b']);
});
