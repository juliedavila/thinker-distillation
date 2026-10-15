// Shared loaders for the Reading Protocol scripts (SCHEMA.md "Reading Protocol").
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

export const ROOT = join(import.meta.dir, '..');
const THINKERS = join(ROOT, 'src/content/thinkers');
const CONCEPTS = join(ROOT, 'src/content/concepts');

export type Doc = Record<string, any> & { slug: string };

export function parseFrontmatter(path: string): Doc {
  const raw = readFileSync(path, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) throw new Error(`no frontmatter: ${path}`);
  return Bun.YAML.parse(m[1]) as Doc;
}

// Underscore-prefixed files are disabled drafts and excluded, matching the Astro loader.
function loadDir(dir: string): Map<string, Doc> {
  const out = new Map<string, Doc>();
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.md') || f.startsWith('_')) continue;
    const d = parseFrontmatter(join(dir, f));
    out.set(d.slug, d);
  }
  return out;
}

export const loadThinkers = () => loadDir(THINKERS);
export const loadConcepts = () => loadDir(CONCEPTS);
export const thinkerPath = (slug: string) => join(THINKERS, `${slug}.md`);
export const workingDir = (slug: string) => join(ROOT, '_working', slug);

// Julie's published positions, the lens every reading is written through.
export function loadLens(): string[] {
  const lifeos = process.env.LIFEOS_DIR ?? join(homedir(), '.claude', 'LIFEOS');
  const p = join(lifeos, 'USER/PRINCIPAL/PRINCIPAL_IDENTITY.md');
  if (!existsSync(p)) return [];
  const section = readFileSync(p, 'utf8').match(/## Key Positions\n([\s\S]*?)\n## /);
  if (!section) return [];
  return section[1].split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2).trim());
}

export const oneLine = (s: unknown) => String(s ?? '').replace(/\s+/g, ' ').trim();

// Days since a date. `src/lib/checks.ts` carries its own copy because it cannot import across the
// Astro boundary; this is the one the scripts share.
export const daysSince = (date: unknown, now = new Date()): number =>
  Math.floor((now.getTime() - new Date(date as string).getTime()) / 86_400_000);

// Every prose field the thinker template renders, as [field path, text], in page order. Shared by
// the diligence checks (`duplicate-points.ts`, `firstness.ts`), which judge what an outsider reads
// and so must see exactly the fields `src/pages/thinkers/[slug].astro` prints. `reading-gates.ts`
// keeps its own list because it also covers `inclusion_rationale`, which is backstage.
//
// Left out on purpose: `working_line`, which paraphrases the thinker's own words and restates the
// thesis by design, and `margin_note`, which is Julie's slot and never edited by a pass. The live
// edge is in only when `live_edge_visible` is set, because only then does the template print it.
export function renderedProse(t: Doc): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  const add = (path: string, v: unknown) => { if (typeof v === 'string' && v.trim()) out.push([path, oneLine(v)]); };
  const list = (v: unknown) => (Array.isArray(v) ? (v as Array<Record<string, any>>) : []);
  add('withdrawn.note', t.withdrawn?.note);
  for (const f of ['tagline', 'thirty_second_take', 'background', 'why_they_matter_as_a_thinker', 'thesis']) add(f, t[f]);
  for (const [i, f] of list(t.named_frames).entries()) add(`named_frames[${i}].one_line_gloss`, f?.one_line_gloss);
  for (const [i, w] of list(t.body_of_work).entries()) add(`body_of_work[${i}].editorial_note`, w?.editorial_note);
  for (const [i, e] of list(t.adjacent_thinkers).entries()) {
    for (const [j, h] of list(e?.hosted_items).entries()) add(`adjacent_thinkers[${i}].hosted_items[${j}].editorial_framing`, h?.editorial_framing);
  }
  const fi = (t.further_in as Record<string, any>) ?? {};
  add('further_in.start_here', fi.start_here);
  for (const [i, r] of list(fi.then_read).entries()) add(`further_in.then_read[${i}]`, r);
  add('further_in.if_you_want_depth', fi.if_you_want_depth);
  add('further_in.if_you_want_breadth', fi.if_you_want_breadth);
  add('reading', t.reading);
  add('extension', t.extension);
  for (const [i, u] of list(t.working_uses).entries()) add(`working_uses[${i}]`, u);
  for (const [i, l] of list(t.limits).entries()) {
    add(`limits[${i}].headline`, l?.headline);
    add(`limits[${i}].elaboration`, l?.elaboration);
  }
  add('still_load_bearing_despite', t.still_load_bearing_despite);
  for (const [i, e] of list(t.adjacent_thinkers).entries()) add(`adjacent_thinkers[${i}].edge_label`, e?.edge_label);
  if (t.live_edge_visible && t.live_edge) {
    add('live_edge.current_focus', t.live_edge.current_focus);
    add('live_edge.summary', t.live_edge.summary);
    for (const [i, w] of list(t.live_edge.recent_work).entries()) add(`live_edge.recent_work[${i}].note`, w?.note);
  }
  add('long_read.title', t.long_read?.title);
  add('long_read.summary', t.long_read?.summary);
  return out;
}

// The sentence split `reading-gates.ts` uses for its grounding check, shared so the diligence
// checks cut a field the same way the claims maps do.
export const sentences = (text: string): string[] =>
  oneLine(text).split(/(?<=[.!?]["”]?)\s+(?=[A-Z*"“])/).filter(Boolean);

// Quoted spans are the thinker's or a source's own words. The voice checks skip them (SCHEMA
// section 8), and so do the diligence checks: a quotation repeated on purpose is not a restated
// point, and a firstness verb inside one is the source speaking, attributed on the page.
export const stripQuotes = (s: string) => s.replace(/"[^"]*"|“[^”]*”/g, ' ');

// One line of `_working/<slug>/facts.md`, as `fact-ledger.ts` reads it. Top-level bullets only.
export const LEDGER_LINE = /^-\s+\[(S:[^\]]+)\]\s*(.*)$/;
// One line of `page-claims.md`: a field path, then the [S:n] lines it cites.
export const CLAIMS_LINE = /^-\s+([A-Za-z0-9_\[\]\.]+)\s*(.*)$/;

// Whether a ledger line IS an antecedent-search record. Moved here from `fact-ledger.ts` so the
// firstness report reads the definition the gate enforces rather than a second copy. The line
// opens "The antecedent search for" (or "Antecedent search for", or "The antecedent check", as on
// Alexander and Karpathy) and does not say the search was left undone ("has not been run"). Until
// 2026-10-05 any line containing the phrase passed, and on Rasmussen that let through a bound
// saying "no antecedent search ... has been run", the one sentence on the ledger recording that
// the search was missing.
export const recordsAntecedentSearch = (claim: string) =>
  /^\W*(the )?antecedent (search|check)\b/i.test(claim) &&
  !/\b(not|never)\b[^.;]{0,20}\b(been )?(run|done|performed)\b/i.test(claim);

// Slugs listed in one of the `scripts/*-exempt.txt` files. Comments and blank lines are skipped.
export function exemptList(name: string): Set<string> {
  const p = join(ROOT, 'scripts', name);
  if (!existsSync(p)) return new Set();
  return new Set(readFileSync(p, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')));
}
