// Reading Protocol stage 1: walk the graph around one thinker and write a citable grounding pack.
// Usage: bun scripts/grounding-pack.ts <thinker-slug>
// Output: _working/<slug>/grounding-pack.md. Every item carries a [ID] the draft must cite.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { loadThinkers, loadConcepts, loadLens, workingDir, oneLine, type Doc } from './lib';

const slug = process.argv[2];
if (!slug) { console.error('usage: bun scripts/grounding-pack.ts <thinker-slug>'); process.exit(1); }

const thinkers = loadThinkers();
const concepts = loadConcepts();
const t = thinkers.get(slug);
if (!t) { console.error(`unknown thinker: ${slug}`); process.exit(1); }

const L: string[] = [];
const item = (id: string, text: string) => L.push(`- **[${id}]** ${text}`);

L.push(`# Grounding pack: ${t.name}`, '');
L.push(`Generated ${new Date().toISOString().slice(0, 10)} by scripts/grounding-pack.ts. Every claim in the reading must cite at least one ID below.`, '');
L.push(`thinker_type: ${t.thinker_type} · doctrine_mode: ${t.doctrine_mode ?? 'unset'}`, '');

L.push('## The thinker (spine, handles, limits)', '');
item('T:thesis', oneLine(t.thesis));
if (t.working_line) item('T:working-line', oneLine(t.working_line));
for (const f of t.named_frames ?? []) {
  const co = (f.co_originators ?? []).map((c: any) => c.slug).join(', ');
  const from = f.derived_from ? `; derived from ${f.derived_from}` : '';
  item(`F:${f.concept_slug}`, `${f.display_name} (${f.attribution_kind}${co ? `, with ${co}` : ''}${from}): ${oneLine(f.one_line_gloss)}`);
}
(t.limits ?? []).forEach((l: any, i: number) => item(`L:${i + 1}`, `${l.headline} (${l.severity}): ${oneLine(l.elaboration)}`));
item('T:still-load-bearing', oneLine(t.still_load_bearing_despite));

L.push('', '## Outbound edges (this page points at)', '');
for (const e of t.adjacent_thinkers ?? []) {
  const n = thinkers.get(e.target_slug);
  item(`E:out:${e.target_slug}`, `${e.edge_type}, ${e.strength} → ${e.display_name}${n ? ' (has a page)' : ''}: ${oneLine(e.edge_label)}`);
  if (n) item(`N:${e.target_slug}:thesis`, `${n.name}'s thesis: ${oneLine(n.thesis)}`);
}

L.push('', '## Inbound edges (other pages point here)', '');
for (const [s, n] of thinkers) {
  if (s === slug) continue;
  for (const e of n.adjacent_thinkers ?? []) {
    if (e.target_slug === slug) item(`E:in:${s}`, `${n.name} → ${t.name}, ${e.edge_type}: ${oneLine(e.edge_label)}`);
  }
}

L.push('', '## Shared concepts (frames other pages also hold)', '');
const mine = new Set((t.named_frames ?? []).map((f: any) => f.concept_slug));
for (const [s, n] of thinkers) {
  if (s === slug) continue;
  for (const f of n.named_frames ?? []) {
    if (mine.has(f.concept_slug)) item(`S:${f.concept_slug}:${s}`, `${n.name} also holds ${f.display_name}: ${oneLine(f.one_line_gloss)}`);
  }
}
for (const c of concepts.values()) {
  if (mine.has(c.slug)) item(`C:${c.slug}`, `Concept page ${c.display_name}: ${oneLine(c.one_line_gloss)}`);
}

L.push('', '## Two hops out (names only, for reach)', '');
const oneHop = new Set((t.adjacent_thinkers ?? []).map((e: any) => e.target_slug));
const twoHop = new Map<string, string>();
for (const s of oneHop) {
  for (const e of thinkers.get(s)?.adjacent_thinkers ?? []) {
    if (e.target_slug !== slug && !oneHop.has(e.target_slug)) twoHop.set(e.target_slug, `${e.display_name} (via ${s}, ${e.edge_type})`);
  }
}
for (const [s, v] of twoHop) item(`H:${s}`, v);

L.push('', "## Lens: Julie's published positions", '', 'The extension must connect to at least one of these, or say plainly that none applies.', '');
loadLens().forEach((p, i) => item(`P:${i + 1}`, p.replace(/\*\*/g, '')));

L.push('', '## Neighbor readings (for the novelty check only; do not echo)', '');
for (const s of oneHop) {
  const n = thinkers.get(s) as Doc | undefined;
  const r = n?.reading ?? n?.what_i_take;
  if (r) item(`R:${s}`, oneLine(r));
}

const prior = [t.reading, t.extension, t.what_i_take, t.where_i_extend].filter(Boolean);
if (prior.length) {
  L.push('', '## Prior section 6 draft (input only, not a source; Camila-drafted)', '');
  prior.forEach((p) => L.push(`> ${oneLine(p)}`, ''));
}

const dir = workingDir(slug);
mkdirSync(dir, { recursive: true });
const out = join(dir, 'grounding-pack.md');
writeFileSync(out, L.join('\n') + '\n');
console.log(`${out} (${L.filter((l) => l.startsWith('- **[')).length} citable items)`);
