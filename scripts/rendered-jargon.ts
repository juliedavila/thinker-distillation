// Internal vocabulary that reaches the reader: schema enums, field names, pipeline terms and slugs,
// found in the BUILT pages' visible text and listed per page.
// Usage: bun scripts/rendered-jargon.ts [<slug>] [--dist <dir>]
//   With --dist it reads that prebuilt site; without it, it runs `bun run build` first.
//
// Step 1 of DILIGENCE.md. The phase's reference reader is Julie reading cold, who "has no reason to
// know what 'frame', 'attribution kind' or 'the site's reading' mean unless the page tells her",
// and its rule is to judge the rendered page, never the YAML. Grepping the content files cannot
// answer that question in either direction: the templates print enums the YAML only stores (every
// frame's attribution_kind becomes a badge, every neighbor's edge_type and strength become tags),
// and plenty of YAML vocabulary never renders at all (SCHEMA 4.1, backstage fields). So this reads
// dist/, after the template has had its say.
//
// It reports and nothing more, exit 0 always, and is not wired into verify.ts or CI. A hit is a
// question for the step 2 reader, not a defect: a badge reading "extended" may be exactly the label
// the attribution model wants, and the About page explains that model on purpose (SCHEMA 2, "the
// explanation of this attribution model lives once on the About page").
//
// Each hit is labelled by where it sits:
//   label   the whole text of a badge, tag, heading or disclosure summary. Usually intended UI.
//   prose   inside running text. These are the leaks, and the source column says whether the
//           sentence is in the page's own content file ("content") or was assembled by the
//           template ("template"), which decides where a fix would go.
//
// Vocabulary is derived, not listed by hand, wherever a source of truth exists: enums and field
// names from src/content.config.ts, snake_case field names also from SCHEMA.md, pipeline terms from
// the SCHEMA.md glossary, slugs from the content itself. A hard-coded list goes stale the day a
// field is added, which is how SCHEMA 4.1 drifted from the schema for most of September.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { ROOT, loadThinkers, loadConcepts, oneLine } from './lib';

export type Category = 'enum' | 'field' | 'pipeline' | 'slug';
export type Term = { term: string; category: Category; pattern: RegExp; note?: string };
export type Segment = { text: string; label: boolean; start: number };
export type Hit = { page: string; term: string; category: Category; where: 'label' | 'prose'; source?: 'content' | 'template'; count: number; snippet: string };

// Enums whose values are ordinary media words (book, essay, talk). They render as the type line of
// a reading-list item, where "book" means book; flagging them would bury every real finding.
const PLAIN_ENUMS = new Set(['sourceType', 'kind']);
const ENGLISH_HYPHENATED = new Set(['co-authored']);

// --- vocabulary --------------------------------------------------------------------------------

export function enumsFrom(config: string): Map<string, string[]> {
  const out = new Map<string, string[]>();
  // `const attributionKind = z.enum([...])` and inline `kind: z.enum([...])`.
  for (const m of config.matchAll(/(?:const\s+(\w+)\s*=|(\w+)\s*:)\s*z\s*\.enum\(\[([\s\S]*?)\]\)/g)) {
    const name = m[1] ?? m[2];
    const values = [...m[3].matchAll(/'([^']+)'/g)].map((v) => v[1]);
    out.set(name, [...new Set([...(out.get(name) ?? []), ...values])]);
  }
  return out;
}

// Field names that would read as code to an outsider: the snake_case ones. A one-word field such as
// `thesis` or `limits` is an English word and a section heading, so it cannot be told from prose.
export function fieldsFrom(config: string, schema = ''): string[] {
  const fromConfig = [...config.matchAll(/^\s*([a-z][a-z0-9]*(?:_[a-z0-9]+)+)\s*:/gm)].map((m) => m[1]);
  const fromSchema = [...schema.matchAll(/`([a-z][a-z0-9]*(?:_[a-z0-9]+)+)`/g)].map((m) => m[1]);
  return [...new Set([...fromConfig, ...fromSchema])].sort();
}

// The glossary table in SCHEMA.md section 1 is the list of words the site invented or repurposed.
// Three rows are left out: "Thinker" and "Concept page" are the site's navigation, and "Lens" is too
// ordinary a word to match on ("through the lens of").
export function glossaryFrom(schema: string): string[] {
  const section = schema.match(/## 1\. Glossary\n([\s\S]*?)\n---/)?.[1] ?? '';
  const skip = new Set(['thinker', 'concept page', 'lens']);
  return [...section.matchAll(/^\|\s*([^|]+?)\s*\|/gm)]
    .map((m) => m[1])
    .filter((t) => t !== 'Term' && !/^-+$/.test(t) && !skip.has(t.toLowerCase()));
}

// Pipeline vocabulary the glossary does not carry, because it names the build process rather than
// the content model. Each one has turned up in a draft or a cold read.
const PIPELINE_EXTRA: Array<[string, string]> = [
  ['ledger', String.raw`\b(?:fact )?ledgers?\b`],
  ['gate', String.raw`\bgates?\b`],
  ['stage N', String.raw`\bstage\s+\d+\b`],
  ['ISC', String.raw`\bISC(?:-\d+)?\b`],
  ["the site's reading", String.raw`\b(?:the )?(?:site|Distillery)['’]s reading\b`],
  ['cold reader', String.raw`\bcold[- ]read(?:er|ing)?\b`],
  ['inclusion filter', String.raw`\binclusion (?:filter|rationale)\b`],
  ['claim-delta', String.raw`\bclaim[- ]delta\b`],
  // "frame" as the site's noun for a named concept. The verb ("frames the problem") and
  // "framework" are excluded; a noun use in ordinary English still counts, which is noise the
  // step 2 reader settles in seconds.
  ['frame', String.raw`\b(?:frame|frames|frame['’]s)\b(?!work)`],
];

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function buildTerms(opts: { enums: Map<string, string[]>; fields: string[]; glossary: string[]; slugs: string[]; labelSlugs?: string[]; headings: Set<string> }): Term[] {
  const terms: Term[] = [];
  for (const [name, values] of opts.enums) {
    if (PLAIN_ENUMS.has(name)) continue;
    for (const v of values) {
      // A hyphenated value ("co-authored", "mode-c") is a tell anywhere. A plain word ("extended",
      // "primary") is English, so in prose it only counts in enum syntax: underscored, alone in
      // parentheses, or after a field-like word and a colon. matchSegment applies the label rule.
      // "co-authored" is the exception: hyphenated and also ordinary English ("co-authored with
      // Nora Jones"), which twelve pages use in that sense, so it takes the plain-word rule.
      const distinctive = /[-_]/.test(v) && !ENGLISH_HYPHENATED.has(v);
      const u = esc(v.replace(/-/g, '_'));
      const raw = esc(v);
      terms.push({
        term: v,
        category: 'enum',
        note: distinctive ? name : `${name} (syntax)`,
        pattern: distinctive
          ? new RegExp(String.raw`(?<![\w-])(?:${raw}|${u})(?![\w-])`, 'gi')
          : new RegExp(String.raw`(?<![\w-])${u}_\w+|\w+_${u}(?![\w-])|\(\s*${raw}\s*\)|\b(?:kind|type|strength|tier|mode|status)\s*[:=]\s*${raw}\b`, 'gi'),
      });
      if (!distinctive) terms.push({ term: v, category: 'enum', note: `${name} (label)`, pattern: new RegExp(String.raw`(?<![\w-])${raw}(?![\w-])`, 'gi') });
    }
  }
  for (const f of opts.fields) {
    terms.push({ term: f, category: 'field', pattern: new RegExp(String.raw`(?<![\w-])${esc(f)}(?![\w-])`, 'gi') });
    // The spaced form ("attribution kind") reads as English, so it counts only when it is not one
    // of the site's own headings and carries a word only the schema would use.
    const spaced = f.replace(/_/g, ' ');
    if (!opts.headings.has(spaced) && /\b(kind|tier|slug|mode|type|rationale|take|review|visible|observed|demote|surfaced|label)\b/.test(spaced))
      terms.push({ term: spaced, category: 'field', pattern: new RegExp(String.raw`\b${esc(spaced)}\b`, 'gi') });
  }
  for (const g of opts.glossary) terms.push({ term: g.toLowerCase(), category: 'pipeline', pattern: new RegExp(String.raw`\b${esc(g)}s?\b`, 'gi') });
  for (const [term, re] of PIPELINE_EXTRA) terms.push({ term, category: 'pipeline', pattern: new RegExp(re, 'gi') });
  // Slugs are case-sensitive on purpose: "kent-beck" is a slug, "Kent Beck" is a name.
  // A two-part slug ("just-culture") can also be ordinary hyphenated English, so prose hits on one
  // need the snippet read; a person slug or a /thinkers/ path is a leak on sight.
  const slugRe = (s: string) => new RegExp(String.raw`(?<![\w-])${esc(s)}(?![\w-])`, 'g');
  for (const s of opts.slugs) if (s.includes('-')) terms.push({ term: s, category: 'slug', pattern: slugRe(s) });
  for (const s of opts.labelSlugs ?? []) if (!opts.slugs.includes(s)) terms.push({ term: s, category: 'slug', note: 'primary_domains (label)', pattern: slugRe(s) });
  return terms;
}

// --- HTML to visible text ----------------------------------------------------------------------

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ...Object.fromEntries(
  // Code points, so this file carries no literal em-dash of its own (SCHEMA 8).
  ([['mdash', 0x2014], ['ndash', 0x2013], ['rsquo', 0x2019], ['lsquo', 0x2018], ['rdquo', 0x201d], ['ldquo', 0x201c], ['hellip', 0x2026], ['middot', 0xb7], ['rarr', 0x2192]] as const).map(([k, c]) => [k, String.fromCodePoint(c)]),
) };
export const decode = (s: string) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e: string) =>
    e[0] === '#' ? String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : (ENTITIES[e.toLowerCase()] ?? m),
  );

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const LABEL_CLASS = /(?:^|\s)(?:lane-mark|concept-eyebrow|tag|edge-tag|badge|attribution-kind|severity|meta)(?:\s|$)/;
const LABEL_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'summary', 'title', 'th', 'dt', 'button', 'nav']);

// Visible text, one segment per text node. Attribute values never appear because only text between
// tags is kept; <script>, <style> and everything in <head> except <title> are skipped. Figcaptions
// and SVG <text> are ordinary elements here, so they stay in, which is what a sighted reader sees.
// A segment is a label when it sits in a heading-like element, in an element the stylesheet marks
// as a label (lane marks, eyebrows, tags, badges), or when it is the short entire content of a
// <span>: that is the shape of every badge and tag the templates print. "The Distillery's reading"
// is a <p class="lane-mark">, so tag names alone would have filed it as prose.
export function segments(html: string): Segment[] {
  const out: Segment[] = [];
  const stack: Array<{ name: string; label: boolean }> = [];
  let skip = 0;
  let inHead = false;
  let offset = 0;
  const tokens = html.replace(/<!--[\s\S]*?-->/g, '').split(/(<[^>]*>)/);
  for (const tok of tokens) {
    if (!tok) continue;
    if (tok.startsWith('<')) {
      const m = tok.match(/^<\s*(\/)?\s*([a-zA-Z][\w-]*)/);
      if (!m) continue;
      const [, close, rawName] = m;
      const name = rawName.toLowerCase();
      if (name === 'head') inHead = !close;
      if (name === 'script' || name === 'style') {
        skip += close ? -1 : tok.endsWith('/>') ? 0 : 1;
        continue;
      }
      if (VOID.has(name) || tok.endsWith('/>')) continue;
      if (close) {
        const i = stack.findLastIndex((e) => e.name === name);
        if (i >= 0) stack.length = i;
      } else {
        const cls = tok.match(/\sclass="([^"]*)"/)?.[1] ?? '';
        stack.push({ name, label: LABEL_TAGS.has(name) || LABEL_CLASS.test(cls) });
      }
      continue;
    }
    if (skip > 0 || (inHead && !stack.some((e) => e.name === 'title'))) continue;
    const text = oneLine(decode(tok));
    if (!text) continue;
    const parent = stack[stack.length - 1]?.name;
    const label = stack.some((e) => e.label) || (parent === 'span' && text.split(' ').length <= 4);
    out.push({ text, label, start: offset });
    offset += text.length + 1;
  }
  return out;
}

// --- matching ----------------------------------------------------------------------------------

const norm = (s: string) => s.toLowerCase().replace(/[*_`"'‘’“”]/g, '').replace(/\s+/g, ' ').trim();

export function matchPage(page: string, segs: Segment[], terms: Term[], sourceText = ''): Hit[] {
  const full = segs.map((s) => s.text).join(' ');
  const src = norm(sourceText);
  const hits = new Map<string, Hit>();
  for (const seg of segs) {
    for (const t of terms) {
      const isLabelOnly = t.note?.endsWith('(label)');
      // A plain-word enum counts as a label only when it is the badge's whole text, near enough.
      if (isLabelOnly && !(seg.label && seg.text.split(' ').length <= 4)) continue;
      // In a label the plain word is already counted by its label term; the syntax form is for prose.
      if (t.note?.endsWith('(syntax)') && seg.label) continue;
      for (const m of seg.text.matchAll(t.pattern)) {
        const where = seg.label ? 'label' : 'prose';
        // Content or template: does the sentence around the hit exist in the page's own file?
        let source: Hit['source'];
        if (where === 'prose') {
          const probe = norm(seg.text.slice(Math.max(0, m.index! - 30), m.index! + m[0].length + 30));
          source = src && probe.length > 12 && src.includes(probe) ? 'content' : 'template';
        }
        const key = `${t.category}|${t.term}|${where}|${source ?? ''}`;
        const at = seg.start + m.index!;
        const snippet = full.slice(Math.max(0, at - 50), at + m[0].length + 50);
        const h = hits.get(key) ?? { page, term: t.term, category: t.category, where, source, count: 0, snippet };
        h.count++;
        hits.set(key, h);
      }
    }
  }
  return [...hits.values()];
}

// --- CLI ---------------------------------------------------------------------------------------

function htmlFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return f === '_astro' ? [] : htmlFiles(p);
    return f.endsWith('.html') ? [p] : [];
  });
}

function main() {
  const args = process.argv.slice(2);
  const distArg = args.includes('--dist') ? args[args.indexOf('--dist') + 1] : undefined;
  const slug = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--dist');
  let dist = distArg ?? join(ROOT, 'dist');
  if (!distArg) {
    const build = Bun.spawnSync(['bun', 'run', 'build'], { cwd: ROOT, stdout: 'pipe', stderr: 'pipe' });
    if (build.exitCode !== 0) {
      // Report-only even here: a broken build is reported, and verify/CI own failing on it.
      console.log(`rendered-jargon: build failed, nothing to read.\n${build.stderr.toString().split('\n').slice(-10).join('\n')}`);
      return;
    }
  }
  if (!existsSync(dist)) {
    console.log(`rendered-jargon: no built site at ${dist}`);
    return;
  }

  const config = readFileSync(join(ROOT, 'src/content.config.ts'), 'utf8');
  const schema = readFileSync(join(ROOT, 'SCHEMA.md'), 'utf8');
  const thinkers = loadThinkers();
  const concepts = loadConcepts();
  const slugs = new Set<string>([...thinkers.keys(), ...concepts.keys()]);
  const domains = new Set<string>();
  for (const t of thinkers.values()) {
    // primary_domains render as badges and are stored kebab-case ("security-economics"). Only the
    // badge counts: in prose "resilience-engineering anthology" is ordinary hyphenation.
    for (const d of t.primary_domains ?? []) if (d.includes('-')) domains.add(d);
    for (const a of t.adjacent_thinkers ?? []) slugs.add(a.target_slug);
    for (const f of t.named_frames ?? []) {
      slugs.add(f.concept_slug);
      for (const c of f.co_originators ?? []) slugs.add(c.slug);
    }
  }
  for (const c of concepts.values()) for (const a of c.adjacent_concepts ?? []) slugs.add(a.target_slug);

  const files = htmlFiles(dist).sort().filter((f) => !slug || f.includes(`/${slug}/`));
  const pages = files.map((f) => ({ page: relative(dist, f).replace(/\/?index\.html$/, '') || '(home)', segs: segments(readFileSync(f, 'utf8')) }));
  const headings = new Set(pages.flatMap((p) => p.segs.filter((s) => s.label).map((s) => s.text.toLowerCase())));
  const terms = buildTerms({ enums: enumsFrom(config), fields: fieldsFrom(config, schema), glossary: glossaryFrom(schema), slugs: [...slugs], labelSlugs: [...domains], headings });

  const sourceFor = (page: string) => {
    const [kind, s] = page.split('/');
    const p = kind === 'thinkers' ? join(ROOT, 'src/content/thinkers', `${s}.md`) : kind === 'concepts' ? join(ROOT, 'src/content/concepts', `${s}.md`) : '';
    const long = kind === 'thinkers' && page.includes('/long-read') ? join(ROOT, 'src/content/long-read', s) : '';
    let text = p && existsSync(p) ? readFileSync(p, 'utf8') : '';
    if (long && existsSync(long)) text += readdirSync(long).map((f) => readFileSync(join(long, f), 'utf8')).join('\n');
    return text;
  };

  console.log(`rendered-jargon: ${pages.length} built page(s) from ${dist}; ${terms.length} terms derived from content.config.ts, SCHEMA.md and content.`);
  console.log(`where: label = a badge, tag, heading or summary (often intended); prose = running text, source says content file or template.\n`);
  const all: Hit[] = [];
  for (const { page, segs } of pages) {
    const hits = matchPage(page, segs, terms, sourceFor(page)).sort(
      (a, b) => (a.where === b.where ? 0 : a.where === 'prose' ? -1 : 1) || b.count - a.count || a.term.localeCompare(b.term),
    );
    all.push(...hits);
    if (!hits.length) continue;
    console.log(`${page}  (${hits.reduce((n, h) => n + h.count, 0)} hits)`);
    for (const h of hits) {
      const where = h.where === 'prose' ? `prose/${h.source}` : 'label';
      console.log(`  ${where.padEnd(15)} ${h.category.padEnd(9)} ${h.term.padEnd(28)} x${String(h.count).padEnd(3)} "${h.snippet}"`);
    }
    console.log('');
  }

  // Site-wide view: which terms reach the most pages. Orientation, not a target.
  const byTerm = new Map<string, { pages: Set<string>; count: number }>();
  for (const h of all) {
    const k = `${h.where === 'prose' ? `prose/${h.source}` : 'label'}  ${h.category}  ${h.term}`;
    const e = byTerm.get(k) ?? { pages: new Set(), count: 0 };
    e.pages.add(h.page);
    e.count += h.count;
    byTerm.set(k, e);
  }
  console.log(`Across the site (term, pages reached, occurrences):`);
  for (const [k, e] of [...byTerm].sort((a, b) => b[1].pages.size - a[1].pages.size || b[1].count - a[1].count))
    console.log(`  ${k.padEnd(56)} ${String(e.pages.size).padStart(3)} pages ${String(e.count).padStart(5)}`);
}

if (import.meta.main) main();
