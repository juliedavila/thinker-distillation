// Firstness verbs in rendered prose with no antecedent search behind them. A REPORT: exit 0
// unless --strict.
// Usage: bun scripts/firstness.ts [<slug>] [--all] [--json] [--strict]
// With no slug it reads every live thinker page. --all also lists the hits a search covers, with
// the line that covers them. --strict exits 1 on any uncovered hit outside the exempt lists;
// nothing runs it that way yet, and whether it becomes a gate is the diligence phase's call.
//
// Why this file exists. `fact-ledger.ts` requires an antecedent search for a frame filed
// `original`, and the claim of priority keeps arriving through prose instead. On Shortridge
// (2026-09-28) an `extended` frame's gloss said "The name and the move into software security are
// hers", with NIOSH's own inverted-pyramid image already on the ledger. Hours after that rule was
// written, Cook's `thesis` said he "named" the first and second stories and four fields said the
// STELLA report "introduced" the line of representation, both frames `co-authored`, so neither
// triggered a search. On Reason the tagline's "whose terms" reached round 2 after round 1 refused
// "named". On Leveson a 2022 review "traces" STPA "to a 2005 paper" on a line bounded "Does not
// support a firm first date". Each time the cold reader caught it with a hand grep, and the
// calibration log asked for that grep as a script after Cook.
//
// What it checks. Every sentence of every rendered field (`renderedProse` in lib.ts), with
// quotations removed: a firstness verb inside quotation marks is the source's own claim, printed
// as theirs. A hit is covered when the page's ledger holds an antecedent-search record, by the
// same test the gate uses (`recordsAntecedentSearch`), that is about the thing the sentence names:
//   - the field's own claims line cites a search record, or
//   - the hit is in a frame's gloss, or names a frame, whose attribution line cites one, or
//   - the sentence carries the subject the search line names ("The antecedent search for FOMOsec").
// Coverage says a search exists, never that it tested the part the sentence claims. On Reason the
// Swiss cheese search tested only the label, which the page credits to Rob Lee (calibration,
// 2026-10-02). So --all prints the covering line, and a reader checks its scope.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  CLAIMS_LINE, LEDGER_LINE, ROOT, exemptList, loadThinkers, recordsAntecedentSearch, renderedProse, sentences, stripQuotes,
  workingDir, type Doc,
} from './lib';

// The verbs. Each pattern is narrow on purpose, because the bare words are mostly something else
// on this site: "first author", "first edition", "the First Way", "test-first", "a named move",
// "the posts name neither". The calibration log's own list is the floor (coined, named,
// introduced, first, originated, invented, then "hers", then "traces to", "goes back to" and
// "dates from" after Leveson); the exclusions below came from reading every hit on 2026-10-15.
const DETERMINER_BEFORE = /\b(a|an|the|any|no|its|his|her|their|one|six|three|explicit|into)\s+$/i;
const BE_BEFORE = /\b(is|are|was|were|be|been|being|not)\s+$/i;
// What "the first X" means when X is one of these: an ordinal on a list or a byline, never a claim
// that something had no earlier holder.
const ORDINAL_NOUNS = new Set(
  ('author authors authored byline bylined edition editions story stories way ways half part parts time step steps page ' +
    'pages line lines chapter chapters of and or is has when place person round rounds sighting decade hundred two three ' +
    'four five filter principle proposition question rule reference reading pass draft run day week month year archetype ' +
    // Not nouns, but "the first by exposing rationales and the second by ..." is an ordinal too.
    'by in on at with for from').split(' '),
);
// "First published in Better Software magazine in March 2006" is a date, so "published" is not
// here; "the first published case against" still flags through the noun rule. "The first to be
// dropped for cost" is a ranking, so "to" counts only when no "be" follows.
const FIRST_VERBS =
  /^\s+(to(?! be\b)|used|use|described|proposed|coined|named|set (?:out|down)|stated|appeared|appears|introduced|defined|articulated|formulated|identified|laid|drew|drawn|drawing|dated|wrote|written|made|put|squeezed|built|called|gave|framed)\b/i;

type Rule = { verb: string; re: RegExp; keep?: (before: string, after: string) => boolean };
export const RULES: Rule[] = [
  { verb: 'coined', re: /\bco(?:in(?:ed|s|ing|age|ages|er|ers))\b/gi },
  {
    verb: 'named',
    re: /\bnamed\b/gi,
    // "a named move", "the named frames", "explicit, named": an adjective. "is named there as one of
    // three co-authors": a passive mention, unless an agent follows ("was named by McGeady").
    keep: (before, after) =>
      !/-$/.test(before) && !/^-/.test(after) && !/,\s*$/.test(before) && !DETERMINER_BEFORE.test(before) &&
      (!BE_BEFORE.test(before) || /^\s+by\b/i.test(after)) &&
      // "test methods named as sentences", "the uses named on this page", "a root cause named after
      // an accident": a label or a time, with no one claiming a first use.
      !/^\s+(for|as|in order|there|here|on this page|after (?:an?|the))\b/i.test(after),
  },
  { verb: 'introduced', re: /\bintroduc(?:ed|es|ing)\b/gi, keep: (_, after) => !/^\s+(him|her|them|me|us|it)\s+to\b/i.test(after) },
  {
    verb: 'first',
    re: /\bfirst\b/gi,
    // Flag "first to", "first used/set out/drew", "one of the first", and "the first <noun>" unless
    // the noun is an ordinal. A possessive before it ("Uber's first SRE", "her first book") is a
    // personal ordinal. A hyphen is a compound: "test-first", "first-person", "first-authored".
    keep: (before, after) => {
      if (/-$/.test(before) || /^-/.test(after)) return false;
      if (/^\s+to be\b/i.test(after)) return false;
      if (FIRST_VERBS.test(after)) return true;
      if (/\bone of the\s+$/i.test(before)) return true;
      if (!/\b(the|a)\s+$/i.test(before) || /['’]s\s+the\s+$/i.test(before)) return false;
      // "The first person to name what makes software hard" (Brooks): an ordinal noun followed by
      // "to" plus a verb is a priority claim after all.
      if (/^\s+[A-Za-z]+\s+to\s+(?!be\b)[a-z]/i.test(after)) return true;
      const noun = (after.match(/^\s+([A-Za-z]+)/) ?? [])[1]?.toLowerCase() ?? '';
      return !!noun && !ORDINAL_NOUNS.has(noun);
    },
  },
  // Not "originating": "the originating requester's authority" is an adjective.
  { verb: 'originated', re: /\b(?:co-)?originat(?:ed|es|or|ors)\b/gi },
  { verb: 'invented', re: /\binvent(?:ed|s|ing|or|ors|ion)\b/gi },
  // "each refusal traced to the rule" has no one doing the tracing and claims no lineage, so a bare
  // participle straight before "to" is skipped. Causal tracing ("traces a loss to the controls")
  // still flags; the words are the same as the Leveson origin claim and a reader tells them apart.
  // "which he traces to traditional building cultures" (Alexander) keeps its subject and flags.
  {
    verb: 'traces to',
    re: /\btrac(?:es|ed|ing)\b(?=[^.;]{0,60}\bto\b)/gi,
    keep: (before, after) => !/^\s+to\b/i.test(after) || /\b(he|she|they|it|which|who|that)\s+$/i.test(before),
  },
  // Present tense only: "Alexander went back to the borrowers in 1996" is travel, not lineage.
  { verb: 'goes back to', re: /\b(?:goes|go|dates|dating) back to\b/gi },
  { verb: 'dates from', re: /\bdat(?:es|ed|ing) (?:from|to|back)\b/gi },
  // The Shortridge shape: the name, the term or the move "is hers". The pronoun has to close the
  // clause, or "the name is his tribute to it" (Beck) reads as a priority claim.
  { verb: 'is hers', re: /\b(?:name|term|label|word|phrase|coinage|idea|move|category|frame|terms)s?\b[^.;]{0,60}\b(?:is|are|was|were) (?:hers|his|theirs)(?=\s*(?:[,.;:]|and\b|$))/gi },
];

export type Hit = { path: string; verb: string; sentence: string };

// Negated hits are skipped: "was never a coinage of his", "nobody coined" credit no one, and the
// claim they deny is the one a reader should see made elsewhere on the page if anywhere.
const NEGATED = /\b(never|not|no|nobody|neither|nor|without)\b(\s+\S+){0,2}\s*$/i;

export function firstnessHits(fields: Array<[string, string]>): Hit[] {
  const hits: Hit[] = [];
  for (const [path, text] of fields) {
    for (const sentence of sentences(text)) {
      const own = stripQuotes(sentence);
      const seen = new Set<string>();
      for (const rule of RULES) {
        for (const m of own.matchAll(rule.re)) {
          const before = own.slice(0, m.index);
          const after = own.slice(m.index! + m[0].length);
          if (rule.keep && !rule.keep(before, after)) continue;
          if (NEGATED.test(before)) continue;
          if (seen.has(rule.verb)) continue;
          seen.add(rule.verb);
          hits.push({ path, verb: rule.verb, sentence });
        }
      }
    }
  }
  return hits;
}

// ------------------------------------------------------------ coverage, from the ledger

export type Search = { id: string; subject: string; claim: string };
export type Ledger = { searches: Search[]; claims: Map<string, string[]> };

export function readLedger(dir: string): Ledger | null {
  const factsPath = join(dir, 'facts.md');
  if (!existsSync(factsPath)) return null;
  const searches: Search[] = [];
  for (const line of readFileSync(factsPath, 'utf8').split('\n')) {
    const m = line.match(LEDGER_LINE);
    if (!m) continue;
    const claim = m[2].split('|')[0].trim();
    if (!recordsAntecedentSearch(claim)) continue;
    searches.push({ id: m[1], subject: searchSubject(claim), claim });
  }
  const claims = new Map<string, string[]>();
  const claimsPath = join(dir, 'page-claims.md');
  if (existsSync(claimsPath)) {
    for (const line of readFileSync(claimsPath, 'utf8').split('\n')) {
      const m = line.match(CLAIMS_LINE);
      if (!m) continue;
      claims.set(m[1], [...(claims.get(m[1]) ?? []), ...[...m[2].matchAll(/\[(S:[^\]]+)\]/g)].map((c) => c[1])]);
    }
  }
  return { searches, claims };
}

// What a search line says it searched: the phrase after "for" or "on", up to the first clause
// break. "The antecedent search for the Swiss cheese model, which ..." gives "the Swiss cheese
// model"; "Antecedent check for the layered-defence half of ..." gives that half.
export function searchSubject(claim: string): string {
  const body = claim.replace(/\*\*/g, '').replace(/^\W*(the )?antecedent (search|check)\s*/i, '');
  const m = body.match(/^(?:\S+\s+)?(?:for|on)\s+(.+?)(?=[,.;:(]|\s+which\b|\s+run\b|\s+added\b|$)/i);
  return (m ? m[1] : '').replace(/["“”]/g, '').trim();
}

const GENERIC = new Set('the a an of and model frame pattern idea term name label half part pairing approach'.split(' '));
// Digits stay, however short: "Software 2.0" without its "2" and "0" is the word "software", and
// that matched a Karpathy take about vibe coding to the Software 2.0 search.
const keyWords = (s: string) =>
  s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => (w.length > 1 || /\d/.test(w)) && !GENERIC.has(w)).map((w) => w.replace(/s$/, ''));

// A subject matches a sentence when the sentence carries its key words: all of them for a
// subject of one or two words ("FOMOsec", "vibe coding"), two thirds for a longer one ("the person
// approach and system approach pairing" against "the person and system approaches"). Quotations
// stay in for this test, unlike the verb test: the term a sentence quotes is often the subject
// ('he coined "vibe coding"').
export function mentions(sentence: string, subject: string): boolean {
  const want = [...new Set(keyWords(subject))];
  if (!want.length) return false;
  const have = new Set(keyWords(sentence));
  const got = want.filter((w) => have.has(w)).length;
  return want.length <= 2 ? got === want.length : got / want.length >= 2 / 3;
}

// A frame's names as a reader meets them: the display name, its parenthetical expansion, and the
// acronym. "STAMP (Systems-Theoretic Accident Model and Processes)" is both "STAMP" and the long form.
const frameNames = (f: Record<string, unknown>): string[] => {
  const d = String(f?.display_name ?? '');
  const out = [d.replace(/\s*\(.*\)\s*/, ' ').trim()];
  const inner = d.match(/\(([^)]+)\)/);
  if (inner) out.push(inner[1]);
  return out.filter(Boolean);
};

export type Verdict = Hit & { covered_by: string[] };

export function cover(page: Doc, hits: Hit[], ledger: Ledger): Verdict[] {
  const searchIds = new Set(ledger.searches.map((s) => s.id));
  const frames = (page.named_frames as Array<Record<string, unknown>>) ?? [];
  const frameSearches = frames.map((_, i) => (ledger.claims.get(`named_frames[${i}].attribution`) ?? []).filter((id) => searchIds.has(id)));
  return hits.map((h) => {
    const by = new Set<string>();
    for (const id of ledger.claims.get(h.path) ?? []) if (searchIds.has(id)) by.add(id);
    const gloss = h.path.match(/^named_frames\[(\d+)\]\.one_line_gloss$/);
    if (gloss) for (const id of frameSearches[Number(gloss[1])] ?? []) by.add(id);
    for (const [i, f] of frames.entries()) {
      if (frameSearches[i].length && frameNames(f).some((n) => mentions(h.sentence, n))) for (const id of frameSearches[i]) by.add(id);
    }
    for (const s of ledger.searches) if (s.subject && mentions(h.sentence, s.subject)) by.add(s.id);
    return { ...h, covered_by: [...by] };
  });
}

export type PageReport = {
  slug: string;
  status: 'checked' | 'ledger-exempt' | 'antecedent-exempt' | 'no-ledger';
  verdicts: Verdict[];
};

export function checkPage(slug: string, page: Doc, exempt = { ledger: new Set<string>(), antecedent: new Set<string>() }): PageReport {
  const hits = firstnessHits(renderedProse(page));
  const ledger = readLedger(workingDir(slug));
  // A page with no ledger has nothing to cover a hit with, so every hit is listed and none counts
  // against it: the exemption is about sourcing, and the reader still sees the verbs.
  if (!ledger) return { slug, status: exempt.ledger.has(slug) ? 'ledger-exempt' : 'no-ledger', verdicts: hits.map((h) => ({ ...h, covered_by: [] })) };
  return { slug, status: exempt.antecedent.has(slug) ? 'antecedent-exempt' : 'checked', verdicts: cover(page, hits, ledger) };
}

if (import.meta.main) {
  const argv = process.argv.slice(2);
  const json = argv.includes('--json');
  const all = argv.includes('--all');
  const strict = argv.includes('--strict');
  const target = argv.find((a) => !a.startsWith('--'));

  const pages = loadThinkers();
  if (target && !pages.has(target)) {
    console.error(`no live thinker page "${target}" under ${ROOT}/src/content/thinkers`);
    process.exit(1);
  }
  const exempt = { ledger: exemptList('ledger-exempt.txt'), antecedent: exemptList('antecedent-exempt.txt') };
  const slugs = target ? [target] : [...pages.keys()].sort();
  const reports = slugs.map((slug) => checkPage(slug, pages.get(slug)!, exempt));
  const open = (r: PageReport) => r.verdicts.filter((v) => !v.covered_by.length);
  // A page that is not exempt and has no ledger fails `verify.ts` already; here it is a warning.
  const counts = (r: PageReport) => ({ hits: r.verdicts.length, uncovered: open(r).length, covered: r.verdicts.length - open(r).length });

  if (json) {
    console.log(JSON.stringify(reports.map((r) => ({ slug: r.slug, status: r.status, ...counts(r), verdicts: r.verdicts })), null, 2));
  } else {
    for (const r of reports) {
      const c = counts(r);
      if (!c.hits) { if (target) console.log(`${r.slug}: no firstness verbs in rendered prose`); continue; }
      const tag = r.status === 'checked' ? 'warn' : r.status === 'no-ledger' ? 'warn' : 'exempt';
      const why =
        r.status === 'ledger-exempt' ? ' (on ledger-exempt.txt: no ledger, so nothing can cover a hit)'
        : r.status === 'antecedent-exempt' ? ' (on antecedent-exempt.txt: listed, not counted)'
        : r.status === 'no-ledger' ? ` (no ${join('_working', r.slug, 'facts.md')}, and the page is on no exempt list)`
        : '';
      console.log(`${r.slug}: ${c.uncovered} uncovered, ${c.covered} covered by a search${why}`);
      for (const v of r.verdicts) {
        if (v.covered_by.length && !all) continue;
        const mark = v.covered_by.length ? `ok [${v.covered_by.join('] [')}]` : tag;
        console.log(`  ${mark}  ${v.path}  "${v.verb}"`);
        console.log(`        ${v.sentence}`);
      }
      console.log('');
    }
    if (!target) {
      const counted = reports.filter((r) => r.status === 'checked' || r.status === 'no-ledger');
      const exempted = reports.filter((r) => r.status === 'ledger-exempt' || r.status === 'antecedent-exempt');
      const sum = (rs: PageReport[]) => rs.reduce((n, r) => n + open(r).length, 0);
      console.log(`firstness: ${sum(counted)} uncovered on ${counted.length} checked pages; ${sum(exempted)} more on ${exempted.length} exempt pages`);
      console.log('  uncovered  covered  page');
      for (const r of [...reports].sort((x, y) => open(y).length - open(x).length)) {
        if (!r.verdicts.length) continue;
        const c = counts(r);
        console.log(`  ${String(c.uncovered).padStart(9)}  ${String(c.covered).padStart(7)}  ${r.slug}${r.status === 'checked' ? '' : `  (${r.status})`}`);
      }
    }
    console.log('An uncovered hit asks for an antecedent search or a narrower verb ("set out", "described"). A covered one still needs its search read for scope.');
  }
  const failing = reports.some((r) => (r.status === 'checked' || r.status === 'no-ledger') && open(r).length);
  process.exit(strict && failing ? 1 : 0);
}
