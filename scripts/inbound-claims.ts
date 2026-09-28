// What the site already asserts about a person, before that person has a page.
// Usage: bun scripts/inbound-claims.ts <slug-or-name>
//
// This exists because of the Beck and Forsgren contradiction. Forsgren's page filed Kent Beck as
// her critic. Beck's page, shipped later, said his 2023 piece answers McKinsey and never names
// her. Both statements sat in the open for months and nothing noticed, because the person drafting
// Beck's page was never shown what the roster already claimed about him.
//
// `grounding-pack.ts` does surface inbound edges, but it runs at stage 5 and needs the page to
// already exist, so it cannot help the stage where the claim is first made. This runs at stage 1,
// against a name, before anything has been drafted.
//
// Nothing here is a verdict. It is the set of existing claims a new page has to agree with or
// knowingly correct, and an existing claim is exactly as unverified as a candidate issue is.
import { loadThinkers, loadConcepts, oneLine, type Doc } from './lib';

const arg = process.argv[2];
if (!arg) {
  console.error('usage: bun scripts/inbound-claims.ts <slug-or-name>');
  process.exit(1);
}

const thinkers = loadThinkers();
const concepts = loadConcepts();

// Accept either a slug or a display name, because at stage 1 the slug is often not settled yet.
const slug = arg.toLowerCase().replace(/\s+/g, '-');
const named = new Set([slug]);
const display = (() => {
  for (const [, d] of thinkers) {
    for (const e of d.adjacent_thinkers ?? []) {
      if (e.target_slug === slug && e.display_name) return e.display_name as string;
    }
    for (const f of d.named_frames ?? []) {
      for (const co of f.co_originators ?? []) {
        if (co.slug === slug && co.display_name) return co.display_name as string;
      }
    }
  }
  return arg.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
})();

const own = thinkers.get(slug);

const out: string[] = [];
out.push(`# What the roster already says about ${display}`, '');
out.push(
  own
    ? `**${display} has a page here.** Everything below is a claim another page makes about that page.`
    : `**No page here yet.** Everything below is a claim the site already makes about someone it has not profiled.`,
  '',
);

// 1. Edges pointing at this person. The highest-risk category, and the one that failed.
const edges: string[] = [];
for (const [s, d] of thinkers) {
  if (s === slug) continue;
  for (const e of d.adjacent_thinkers ?? []) {
    if (e.target_slug !== slug) continue;
    const sense = e.edge_type === 'critiques' ? ` (reads as: ${display} critiques ${d.name})` : '';
    edges.push(`- **${d.name}** → \`${e.edge_type}\`, ${e.strength}${sense}\n  > ${oneLine(e.edge_label)}`);
  }
}
out.push('## Edges pointing here', '');
out.push(edges.length ? edges.join('\n') : '_None._');
out.push('');

// 2. Frame credits. A co-originator line is an attribution claim with the same failure modes.
const credits: string[] = [];
for (const [s, d] of thinkers) {
  if (s === slug) continue;
  for (const f of d.named_frames ?? []) {
    for (const co of f.co_originators ?? []) {
      if (co.slug === slug) {
        credits.push(`- **${d.name}**'s frame _${f.display_name}_ (${f.attribution_kind}) credits ${display}${co.role ? ` as ${co.role}` : ''}.`);
      }
    }
    if (f.derived_from && String(f.derived_from).includes(slug)) {
      credits.push(`- **${d.name}**'s frame _${f.display_name}_ is marked derived from ${f.derived_from}.`);
    }
  }
}
out.push('## Frame credits', '');
out.push(credits.length ? credits.join('\n') : '_None._');
out.push('');

// 3. Prose mentions. The Forsgren case turned on what a page said in prose, not on an edge:
// Beck's page asserted his piece never names her. A name in prose is a claim about this person
// even when no edge carries it.
// Every text field, found by walking the page, rather than a hand-kept list of field names. The list
// this replaced named 'take' where the field is 'thirty_second_take' and left out background,
// why_they_matter_as_a_thinker and further_in, so on 2026-09-28 the script reported that nothing on
// the site named Kelly Shortridge while the Hollnagel page recommended her book. A list of fields
// goes stale as the schema grows; the page itself cannot. Limits, frames and edges are reported
// separately below, and structural keys (slugs, links, names) are not prose.
const HANDLED = new Set(['limits', 'named_frames', 'adjacent_thinkers']);
const STRUCTURAL = new Set(['slug', 'target_slug', 'concept_slug', 'primary_author', 'link', 'url', 'source_link', 'name', 'display_name']);
const proseFields = (v: unknown, path: string, out: Array<[string, string]>) => {
  if (typeof v === 'string') out.push([path, v]);
  else if (Array.isArray(v)) v.forEach((x, i) => proseFields(x, `${path}[${i}]`, out));
  else if (v && typeof v === 'object')
    for (const [k, x] of Object.entries(v)) if (!STRUCTURAL.has(k)) proseFields(x, path ? `${path}.${k}` : k, out);
  return out;
};
const needle = display.split(/\s+/).pop() ?? display; // surname, which is how the pages refer to people
const mentions: string[] = [];

const scan = (d: Doc, kind: string) => {
  if (d.slug === slug) return;
  const hits: string[] = [];
  for (const [k, v] of Object.entries(d)) {
    if (HANDLED.has(k) || STRUCTURAL.has(k)) continue;
    for (const [path, text] of proseFields(v, k, [])) {
      if (new RegExp(`\\b${needle}\\b`).test(oneLine(text))) hits.push(`\`${path}\``);
    }
  }
  for (const l of d.limits ?? []) {
    const v = `${oneLine(l.headline)} ${oneLine(l.elaboration)}`;
    if (new RegExp(`\\b${needle}\\b`).test(v)) hits.push(`limit "${oneLine(l.headline)}"`);
  }
  for (const f of d.named_frames ?? []) {
    const v = oneLine(f.one_line_gloss);
    if (new RegExp(`\\b${needle}\\b`).test(v)) hits.push(`frame _${f.display_name}_`);
  }
  for (const e of d.adjacent_thinkers ?? []) {
    if (e.target_slug === slug) continue; // already reported as an edge
    if (new RegExp(`\\b${needle}\\b`).test(oneLine(e.edge_label))) hits.push(`its ${e.target_slug} edge label`);
  }
  if (hits.length) mentions.push(`- **${d.name ?? d.display_name}** (${kind}): ${hits.join(', ')}`);
};

for (const [, d] of thinkers) scan(d, 'thinker');
for (const [, d] of concepts) scan(d, 'concept');

out.push(`## Prose mentions of "${needle}"`, '');
out.push(mentions.length ? mentions.join('\n') : '_None._');
if (mentions.length) {
  // Surname matching, so it over-reports rather than under-reports. Anderson's page matches
  // "Lovelace" on the Lovelace Medal. Read each hit before treating it as a claim about a person.
  out.push('', `_Matched on the surname alone, so some of these will be an award, a law or a coincidence rather than a claim about the person. Read each one._`);
}
out.push('');

// The instruction, not just the data. A report nobody knows what to do with gets skimmed.
out.push('## What to do with this', '');
if (edges.length || credits.length || mentions.length) {
  out.push(
    `Every line above is a claim this site has already published. Before drafting, reconcile each one: ` +
      `agree with it, or correct it and say so in the merge request. A new page that contradicts a live page ` +
      `leaves two published claims disagreeing in the open, which is how the Beck and Forsgren critic edge ` +
      `survived for months.`,
    '',
    `Treat a \`critiques\` edge above as the most likely to be wrong. Three of three failed the record on ` +
      `Forsgren. Check that a durable artifact exists, that it names the thinker, and that it argues against ` +
      `them rather than defending or extending them.`,
  );
} else {
  out.push(`Nothing on the roster names ${display}. They arrive as an isolated node, which is a fact about the graph rather than a problem.`);
}

console.log(out.join('\n'));
