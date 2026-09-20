// Which factual fields a page must account for, and which of them can go out of date.
//
// Shared by `fact-ledger.ts`, which checks coverage, and `staleness.ts`, which decides what is due
// for a recheck. It lives here rather than in either of them so the list is derived once.
//
// WHY THERE ARE ONLY TWO CLASSES, AND WHY NOBODY ASSIGNS THEM BY HAND
//
// The first design had three classes (permanent, slow, fast) tagged onto each fact in the ledger.
// The Council of 2026-09-20 cut both parts of that, and the reasoning is worth keeping.
//
// Hand-assigned first. Exactly one of thirteen pages ever carried a `live_edge` block, which is
// the site's other optional per-page field. An optional field that a human fills in gets filled in
// once and never again. Decay tags on 236 facts would have died the same way. So decay is computed
// from the field path, which the page already states, and from `status`, which it also states.
// There is nothing to forget to write.
//
// Then "slow". A field path answers a question about *type*: a publication year is a fact about a
// book that was printed, and no passage of time changes it. That is free. But a third class in the
// middle would have to assert a *rate*, and a rate is a prediction. Shojania's 2007 finding is
// precisely that no feature of a published artifact predicted whether it would need updating
// within two years. A guessed half-life in a lookup table is still a guess. So: permanent, or
// volatile because something in the world generates changes to it.
//
// The generating process matters more than the field. `background` and `active_years` are volatile
// for a living thinker who may change jobs, and permanent for a dead one. Brooks died in 2022 and
// his employers are now a closed set, so his page has nothing that can rot and never surfaces for
// recheck. That is the reader's own intuition made computable: a four-month-old page about Brooks
// is not old in the way a four-month-old page about a working practitioner is.
import type { Doc } from './lib';

export type Decay = 'permanent' | 'volatile';

export type RequiredField = {
  path: string;
  why: string;
  decay: Decay;
};

// A thinker whose life is over has a closed record. Anything else may still move.
const stillMoving = (status: unknown) => status === 'alive-active' || status === 'alive-inactive';

export function requiredFields(page: Doc, isConcept = false): RequiredField[] {
  const out: RequiredField[] = [];
  const add = (path: string, why: string, decay: Decay) => out.push({ path, why, decay });

  // A concept page states no career or attribution facts of its own: its holders are derived from
  // the `concept_slug` on each thinker's frames, and those attributions are already covered on the
  // thinker pages. So a concept run checks the ledger and the citations, with nothing required.
  if (isConcept) return out;

  // The only two fields whose truth depends on what the person is doing now.
  const career: Decay = stillMoving(page.status) ? 'volatile' : 'permanent';
  add('active_years', 'the span the page states', career);
  add('background', 'employers, titles and dates', career);

  for (const [i, f] of ((page.named_frames as Array<Record<string, unknown>>) ?? []).entries()) {
    const name = f?.display_name ?? i;
    // Who originated an idea is a fact about the past and does not change. A later claim can be
    // discovered, but that is new research rather than decay, and it arrives through a Council.
    add(`named_frames[${i}].attribution`, `"${name}" is ${f?.attribution_kind} by ${f?.primary_author}`, 'permanent');
    for (const [j, c] of ((f?.co_originators as Array<Record<string, unknown>>) ?? []).entries()) {
      add(`named_frames[${i}].co_originators[${j}]`, `${c?.slug} co-originated "${name}"`, 'permanent');
    }
    if (f?.derived_from) add(`named_frames[${i}].derived_from`, `"${name}" derives from ${f.derived_from}`, 'permanent');
  }

  for (const [i, e] of ((page.adjacent_thinkers as Array<Record<string, unknown>>) ?? []).entries()) {
    const rel = String(e?.edge_type ?? '');
    // A critique or an antecedent is a claim about the record, and the one the seats have got
    // wrong: a seat proposed Kyle Mitchell as a critic of Hickey when his essay is sympathetic.
    // "parallel" and "extends" are the site's reading of a relationship, so the Councils judge
    // those instead of the ledger. Both are historical once published, so neither decays.
    if (rel === 'critiques' || rel === 'antecedent') {
      add(`adjacent_thinkers[${i}]`, `${e?.target_slug} ${rel} this thinker, by the record and not by inference`, 'permanent');
    }
  }

  for (const [i, w] of ((page.body_of_work as Array<Record<string, unknown>>) ?? []).entries()) {
    // A book that was published stays published. A new edition is a new entry, not a changed one.
    add(`body_of_work[${i}]`, `"${w?.title}" (${w?.year ?? 'no year'}) exists as described`, 'permanent');
  }

  return out;
}

export const volatileCount = (page: Doc) => requiredFields(page).filter((f) => f.decay === 'volatile').length;
