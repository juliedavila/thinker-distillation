// scripts/rendered-jargon.ts: visible text only, labels told apart from prose, and plain-English
// enum values matched only where they read as enums. The fixtures are the shapes the built site
// actually prints.
import { test, expect } from 'bun:test';
import { segments, enumsFrom, fieldsFrom, glossaryFrom, buildTerms, matchPage, decode } from '../rendered-jargon';

const CONFIG = `
const attributionKind = z.enum(['original', 'extended', 'co-authored']);
const edgeType = z.enum(['antecedent', 'parallel']);
const sourceType = z.enum(['book', 'essay']);
const t = z.object({
  thirty_second_take: z.string(),
  attribution_kind: attributionKind,
  kind: z.enum(['book', 'talk']),
});`;
const SCHEMA = `## 1. Glossary\n\n| Term | Meaning |\n|------|---------|\n| Thinker | x |\n| Council | y |\n| Lens | z |\n\n---\nSee \`render_tier\`.`;

const terms = (headings = new Set<string>()) =>
  buildTerms({ enums: enumsFrom(CONFIG), fields: fieldsFrom(CONFIG, SCHEMA), glossary: glossaryFrom(SCHEMA), slugs: ['kent-beck'], headings });

test('vocabulary is derived from the schema sources', () => {
  expect([...enumsFrom(CONFIG).keys()].sort()).toEqual(['attributionKind', 'edgeType', 'kind', 'sourceType']);
  expect(fieldsFrom(CONFIG, SCHEMA)).toEqual(['attribution_kind', 'render_tier', 'thirty_second_take']);
  expect(glossaryFrom(SCHEMA)).toEqual(['Council']);
});

test('script, style, head and attribute values never reach the text; title and figcaption do', () => {
  const segs = segments(`<html><head><title>A &amp; B</title><meta name="x" content="attribution_kind"></head>
    <body><script>var render_tier = 1</script><style>.extended{}</style>
    <a href="/thinkers/kent-beck" title="co-authored">Kent Beck</a><figure><figcaption>the Council</figcaption></figure></body></html>`);
  expect(segs.map((s) => s.text)).toEqual(['A & B', 'Kent Beck', 'the Council']);
});

test('a badge is a label and the same word in a sentence is not counted', () => {
  const segs = segments(`<span class="attribution-kind">extended</span><p>Beck extended the idea.</p>`);
  const hits = matchPage('p', segs, terms());
  expect(hits).toHaveLength(1);
  expect(hits[0]).toMatchObject({ term: 'extended', where: 'label', count: 1 });
});

test('a plain enum in enum syntax inside prose is a leak, sourced to the template when the file lacks it', () => {
  const segs = segments(`<details><summary>1 more neighbor</summary><ul><li><strong>Kua</strong> (antecedent): described the role first.</li></ul></details>`);
  const hits = matchPage('p', segs, terms(), 'edge_label: described the role first.');
  expect(hits.map((h) => [h.term, h.where, h.source])).toEqual([['antecedent', 'prose', 'template']]);
});

test('field names, glossary terms and slugs in prose are found and sourced to the content file', () => {
  const body = 'The Council read the thirty_second_take and linked kent-beck by slug.';
  const hits = matchPage('p', segments(`<p>${body}</p>`), terms(), `reading: ${body}`);
  expect(hits.map((h) => `${h.category}:${h.term}:${h.source}`).sort()).toEqual([
    'field:thirty_second_take:content',
    'pipeline:council:content',
    'slug:kent-beck:content',
  ]);
});

test('"co-authored" is English in a sentence and an enum on a badge', () => {
  const segs = segments(`<p>A book co-authored with Nora Jones.</p><span class="attribution-kind">co-authored</span>`);
  expect(matchPage('p', segs, terms()).map((h) => h.where)).toEqual(['label']);
});

test('a lane mark is a label even though it is a paragraph', () => {
  const segs = segments(`<p class="lane-mark">The Distillery's reading</p><p>This limit is the site's reading.</p>`);
  expect(segs.map((s) => s.label)).toEqual([true, false]);
});

test('entities decode, numeric and named', () => {
  expect(decode('a&#x27;b &rsquo; &#8212;')).toBe(`a'b ${String.fromCodePoint(0x2019)} ${String.fromCodePoint(0x2014)}`);
});
