// scripts/duplicate-points.ts on small inline pages. The restated sentence is Cunningham's
// archived-repository finding, the calibration log's own example of one point in three fields.
import { test, expect } from 'bun:test';
import { THRESHOLD, contentWords, duplicatePairs, pagePairs, pointsOf, similarity, units, weights } from '../duplicate-points';
import { renderedProse } from '../lib';

// Filler sentences give the page a vocabulary, so the weights behave as they do on a real page.
const filler = [
  'He started the wiki in 1995 as a supplement to the Portland Pattern Repository.',
  'The technical debt metaphor reached practitioners with its condition stripped away.',
  'A group revising a shared understanding needs a cheap medium for editing it.',
  'His keynote in Portland described mining recent changes for movement patterns.',
  'Readers who wield the phrase rarely know its history or its original meaning.',
];
const ARCHIVED = 'The flagship repository has been archived since a last push in May 2016, and no use by practitioners other than him was found.';

test('a point restated in another field is a pair, with both field paths and both sentences', () => {
  const pairs = duplicatePairs([
    ['background', filler.join(' ')],
    ['named_frames[5].one_line_gloss', 'A federated wiki. The flagship repository has been archived since 2016 and no use by other practitioners was found, so it sits here as live practice.'],
    ['limits[3].elaboration', ARCHIVED],
  ]);
  expect(pairs.length).toBe(1);
  expect([pairs[0].a.path, pairs[0].b.path]).toEqual(['named_frames[5].one_line_gloss', 'limits[3].elaboration']);
  expect(pairs[0].b.sentence).toBe(ARCHIVED);
  expect(pairs[0].shared).toContain('repository');
});

test('pairs come highest first, and three fields carrying one point group into one point', () => {
  const pairs = duplicatePairs([
    ['background', filler.join(' ')],
    ['named_frames[5].one_line_gloss', 'The flagship repository has been archived since 2016 and no use by other practitioners was found, so it sits here as live practice.'],
    ['limits[3].elaboration', ARCHIVED],
    ['live_edge.summary', 'It has no outside uptake: the flagship repository on GitHub was archived after a last push in May 2016, and no use by practitioners other than him was found.'],
  ]);
  expect(pairs.length).toBeGreaterThanOrEqual(2);
  for (let i = 1; i < pairs.length; i++) expect(pairs[i - 1].score).toBeGreaterThanOrEqual(pairs[i].score);
  const points = pointsOf(pairs);
  expect(points.length).toBe(1);
  expect(points[0].fields.sort()).toEqual(['limits[3].elaboration', 'live_edge.summary', 'named_frames[5].one_line_gloss']);
});

test('a byline repeated in a note shares names and years only, and does not pair', () => {
  const pairs = duplicatePairs([
    ['background', filler.join(' ')],
    ['thesis', 'The books run through The Phoenix Project in 2013 with Kevin Behr and George Spafford.'],
    ['body_of_work[1].editorial_note', 'The Phoenix Project, 2013, with Kevin Behr and George Spafford.'],
  ]);
  expect(pairs).toEqual([]);
});

test('a limit headline and its own elaboration are one item and never pair', () => {
  const pairs = duplicatePairs([
    ['background', filler.join(' ')],
    ['limits[3].headline', 'The flagship repository was archived in May 2016 and no use by other practitioners was found'],
    ['limits[3].elaboration', ARCHIVED],
  ]);
  expect(pairs).toEqual([]);
});

test('a quotation repeated on purpose does not pair', () => {
  const quote = '"Applying the approach from one phase to an idea in another phase kills ideas, wastes resources and frustrates everyone involved."';
  const pairs = duplicatePairs([
    ['background', filler.join(' ')],
    ['thesis', `In his words, ${quote}`],
    ['reading', `The post puts it plainly: ${quote}`],
  ]);
  expect(pairs).toEqual([]);
});

test('sentences that share only the page vocabulary do not pair', () => {
  // "STAMP", "analysis", "control", "structure" and "constraint" run through the whole page, the way
  // a term of art does, so they weigh little and these two different claims stay apart. Counted
  // flat, the same five words would make them a pair at 0.83.
  const page = [
    'STAMP analysis treats the control structure as the place a constraint fails.',
    'STAMP control structure constraint analysis begins at concept work.',
    'The STAMP control structure constraint analysis view came from systems theory.',
    'Each STAMP control structure analysis enforces a constraint on its process.',
    'Every STAMP analysis models a control structure that holds one constraint.',
  ].join(' ');
  const fields: Array<[string, string]> = [
    ['thesis', page],
    ['reading', 'STAMP analysis finds the control structure constraint gap.'],
    ['extension', 'STAMP analysis puts the control structure constraint on agents.'],
  ];
  const [r, e] = [contentWords(fields[1][1]), contentWords(fields[2][1])];
  const flat = new Map([...weights(units(fields))].map(([w]) => [w, 1]));
  expect(similarity(r, e, flat).score).toBeGreaterThan(THRESHOLD);
  expect(duplicatePairs(fields)).toEqual([]);
});

test('a critic limit pairing with its critic edge is kept and marked as the SCHEMA 4.11 convention', () => {
  const page = {
    slug: 'x',
    background: filler.join(' '),
    limits: [{ headline: 'A critic disputes the account', elaboration: 'Leveson argues that his account of Safety-I misdescribes how safety engineering practice actually works today.' }],
    adjacent_thinkers: [{ edge_type: 'critiques', edge_label: 'Leveson argues that his account of Safety-I misdescribes how safety engineering practice works.' }],
  };
  const pairs = pagePairs(page);
  expect(pairs.length).toBe(1);
  expect(pairs[0].note).toContain('SCHEMA 4.11');
});

test('renderedProse leaves out the margin note, the working line, and a live edge the page hides', () => {
  const paths = renderedProse({
    slug: 'x',
    tagline: 'A tagline.',
    working_line: 'His own words, paraphrased.',
    margin_note: 'Julie writes this.',
    live_edge: { current_focus: 'Something current.', summary: 'A summary.' },
  }).map(([p]) => p);
  expect(paths).toEqual(['tagline']);
  const shown = renderedProse({ slug: 'x', live_edge_visible: true, live_edge: { summary: 'A summary.' } }).map(([p]) => p);
  expect(shown).toEqual(['live_edge.summary']);
});
