// scripts/firstness.ts on inline pages and a throwaway ledger. The sentences are the shapes the
// cold reader caught by hand: Cook's "named" and "introduced", Shortridge's "the name is hers",
// Leveson's "traces ... to a 2005 paper".
import { test, expect } from 'bun:test';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { checkPage, cover, firstnessHits, readLedger, searchSubject } from '../firstness';

const verbs = (text: string) => firstnessHits([['thesis', text]]).map((h) => h.verb);

test('the verbs the cold reader caught are hits', () => {
  expect(verbs('Cook named the first and second stories.')).toEqual(['named']);
  expect(verbs('The STELLA report introduced the line of representation.')).toEqual(['introduced']);
  expect(verbs('The complaint is older; the name is hers.')).toEqual(['is hers']);
  expect(verbs('A 2022 review traces STPA to a 2005 paper.')).toEqual(['traces to']);
  expect(verbs('He coined the term in February 2025.')).toEqual(['coined']);
  expect(verbs('Cunningham built the first wiki.')).toEqual(['first']);
  expect(verbs('Brooks was the first to argue that no tool fixes it.')).toEqual(['first']);
  expect(verbs('Named in a 2006 chapter with David Woods.')).toEqual(['named']);
});

test('ordinals, bylines, compounds and adjectives are not hits', () => {
  expect(verbs('Beck is first author on the report, with the first edition in 1999.')).toEqual([]);
  expect(verbs('The First Way is flow, and the test-first habit came later.')).toEqual([]);
  expect(verbs('First published in Better Software magazine in March 2006.')).toEqual([]);
  expect(verbs('A named move with no destination is a slogan.')).toEqual([]);
  expect(verbs('His named method for adoption work is to iterate.')).toEqual([]);
  expect(verbs('Kim is named there as one of three co-authors.')).toEqual([]);
  expect(verbs('The fields are the first to be dropped for cost.')).toEqual([]);
  expect(verbs('The name is his tribute to Constantine.')).toEqual([]);
  expect(verbs('Each refusal traced to the rule stays on record.')).toEqual([]);
});

test('a verb inside quotation marks is the source speaking, and a negated one credits no one', () => {
  expect(verbs('Her home page says she "started a new area of research" and "coined the phrase".')).toEqual([]);
  expect(verbs('The phrase was never a coinage of his at all.')).toEqual([]);
});

test('the search subject is read from the ledger line the way fact-ledger.ts writes it', () => {
  expect(searchSubject('The antecedent search for the Swiss cheese model, which `attribution_kind: original` requires.')).toBe('the Swiss cheese model');
  expect(searchSubject('**The antecedent search for vibe coding, which `attribution_kind: original` requires.**')).toBe('vibe coding');
  expect(searchSubject('Antecedent search on the Dual LLM pattern, run at drafting.')).toBe('the Dual LLM pattern');
});

function ledgerDir(facts: string[], claims: string[]) {
  const dir = mkdtempSync(join(tmpdir(), 'firstness-'));
  writeFileSync(join(dir, 'facts.md'), facts.join('\n') + '\n');
  writeFileSync(join(dir, 'page-claims.md'), claims.join('\n') + '\n');
  return dir;
}

const page = {
  slug: 'kelly-shortridge',
  named_frames: [
    { display_name: 'Security Obstructionism (SecObs)', attribution_kind: 'original', one_line_gloss: 'Her name, introduced in a 2022 essay, for a category of tools.' },
    { display_name: 'Ice Cream Cone Hierarchy', attribution_kind: 'extended', one_line_gloss: 'She named it and applied it to software security.' },
  ],
};

test('a hit is covered by a search on the frame it glosses or names, and not otherwise', () => {
  const dir = ledgerDir(
    [
      '- [S:42] The antecedent search for Security Obstructionism (SecObs), which `attribution_kind: original` requires. Algolia, zero hits. | https://hn.algolia.com | 2026-09-28',
      '- [S:30] The NIOSH hierarchy of controls is drawn as an inverted pyramid. | https://www.cdc.gov/niosh | 2026-09-28',
    ],
    ['- named_frames[0].attribution [S:42]', '- named_frames[1].attribution [S:30]'],
  );
  const ledger = readLedger(dir)!;
  expect(ledger.searches.map((s) => s.id)).toEqual(['S:42']);
  const hits = [
    ...firstnessHits([['named_frames[0].one_line_gloss', page.named_frames[0].one_line_gloss]]),
    ...firstnessHits([['named_frames[1].one_line_gloss', page.named_frames[1].one_line_gloss]]),
    ...firstnessHits([['thirty_second_take', 'Her 2022 essay named Security Obstructionism, and argued it persists.']]),
  ];
  const v = cover(page, hits, ledger);
  expect(v.map((x) => [x.path, x.covered_by])).toEqual([
    ['named_frames[0].one_line_gloss', ['S:42']],
    ['named_frames[1].one_line_gloss', []],
    ['thirty_second_take', ['S:42']],
  ]);
});

test('a line saying the search was not run covers nothing, by the same test the gate uses', () => {
  const dir = ledgerDir(
    ['- [S:14] The antecedent search for migration toward the boundary has not been run beyond the paper\'s own credits. | https://example.org | 2026-10-05'],
    ['- named_frames[0].attribution [S:14]'],
  );
  expect(readLedger(dir)!.searches).toEqual([]);
});

test('a page with no ledger reports its hits as exempt when listed, and never as covered', () => {
  const hitPage = { slug: 'no-such-page', tagline: 'The first person to name what makes software hard.' };
  const listed = checkPage('no-such-page', hitPage, { ledger: new Set(['no-such-page']), antecedent: new Set() });
  expect(listed.status).toBe('ledger-exempt');
  expect(listed.verdicts.map((v) => [v.verb, v.covered_by])).toEqual([['first', []]]);
  expect(checkPage('no-such-page', hitPage).status).toBe('no-ledger');
});
