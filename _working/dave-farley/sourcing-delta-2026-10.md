# Dave Farley: sourcing delta, 2026-10-16

Sourcing pass for the frame that named no originator: `optimize-for-learning-and-complexity`
(`extended`). Outcome (a): an earlier idea was found for the complexity half and is filed as
`derived_from`. The search is `[S:41]`; it tested the pairing (weakly, no positive control), the
complexity half (at source), and the learning half (not at source).

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| `named_frames[1].derived_from` | absent | `essential-vs-accidental-complexity` (Brooks's frame): the frame's complexity half builds on Brooks's essential and accidental complexity, whose terms the book's Part III section titles use | ADDITION | [S:41] [S:42] |
| `named_frames[1].one_line_gloss` | describes the book's two halves and the sources it cites; implies no origination | unchanged | SAME | [S:12] [S:13] [S:14] |
| `named_frames[1].attribution_kind` | `extended` | `extended` | SAME | [S:41] |
| `inclusion_rationale`, sentence on this frame | No antecedent search for the two-part split was run, so the frame is `extended` and no field calls it new | A search on 2026-10-16 for the split found that two section titles in the book's complexity half (Part III) use Brooks's terms, essential and accidental complexity (restructured in review, NARROWED, see below); it found no earlier holder of the pairing, in an index with no positive control for it; the book itself calls the learning half's practices well known; the frame stays `extended`, derived from Brooks's idea, and no field calls it new | ADDITION (replaces a sentence the search made false; new propositions: the Brooks derivation, the pairing result and its bound, the book's "well known") | [S:41] [S:42] |

## Notes for Julie

- Only the ADDITION rows need review. Both add the Brooks derivation; the rationale row also adds
  the search result, bounded as the line bounds it.
- `[S:43]` records McConnell's *Code Complete* (2004) calling managing complexity "Software's
  Primary Technical Imperative", drawn from Brooks's 1987 essay. No route to the 2021 book is
  recorded (its index has no McConnell entry), so McConnell is not on the page. If you want him in
  `co_originators` as an earlier statement of the complexity half, the line supports a role that
  says exactly that and no more.
- The learning half was not tested at source. Armour's "The Five Orders of Ignorance" (CACM, 2000)
  came up as bibliographic records only. Farley's chapter 3 says the learning practices are "well
  known" and backed by "considerable consensus" among industry thought leaders, so the book itself
  claims no novelty for that half.

## Review, 2026-10-16

Independent review of this pass; I did not make it. Every row was checked against
`git diff origin/main` for the page and `facts.md`, and every new ledger line was reopened at its
fetched copy.

- **Rows match the diff.** The page has two changes, `named_frames[1].derived_from` and the
  `inclusion_rationale` sentence, and each is a row. The SAME rows (gloss, `attribution_kind`)
  are unchanged in the diff. Neither ADDITION is labelled SAME or NARROWED.
- **[S:41] reopened.** The six saved pairing queries return `nbHits: 0` at both bounds;
  `"optimize for learning"` alone returns 34 before 2021-12-10 (earliest 2007-12-22), and
  `"modern software engineering" farley` returns 0 before the book and 9 after, as the line says.
  I re-ran the pairing query before 2026-01-01 and added `"managing complexity" farley` before
  2026-01-01 (copies in `src/review/`): both return 0. The index cannot find the pairing even
  after the book exists, so it has no positive control and bounds the pairing only weakly. The
  rationale says exactly that ("in an index with no positive control for it") and claims nothing
  more for the search. The open web search has no saved copy, and no field rests on it alone.
- **[S:42] reopened.** Contents p. 139 "Separating Essential and Accidental Complexity" and p. 166
  "Abstract Accidental Complexity", the index line "Brooks, F., 7, 8, 18–19, 32, 119, 155", and the
  chapter 3 wording on pp. 36 and 37 all read as quoted. The sample index runs through the M
  entries (maps, mass production, math, measurement) and has no McConnell entry where one would
  sort, so "no entry for McConnell" holds. "These ideas" in the p. 36 sentence are the learning
  half's, whose five behaviors the next lines list, so "the learning half's practices well known"
  restates the source fairly.
- **[S:43] reopened.** The heading "Software's Primary Technical Imperative: Managing
  Complexity", the reference to Brooks's 1987 paper and the quoted sentence all appear in the
  sample. It is uncited on the page, correctly.
- **`derived_from` is supported, with a scope the field cannot carry.** [S:42] shows two Part III
  section titles using Brooks's terms and six index locators for Brooks; the pages behind those
  locators are not read. That supports "builds on" for the complexity half only, which
  page-claims.md records. The field covers the whole frame, so the rationale sentence carries the
  scope, and it does.
- **One fix, a restructure.** The rationale's first new sentence ("found the terms of the
  complexity half of the learning and complexity split in Brooks's essential and accidental
  complexity, which the book's own section titles use") failed the squint test: "the terms of the
  complexity half" and the trailing "which" each needed a second read. It now reads "An
  antecedent search on 2026-10-16 for the learning and complexity split found that two section
  titles in the book's complexity half (Part III) use Brooks's terms, essential and accidental
  complexity." Claim delta: before, the book's section titles use Brooks's essential and
  accidental complexity; after, two Part III section titles use those terms. NARROWED (it names
  the count and the part, both in [S:42]); no proposition added.
- **Nothing softened.** The rationale keeps the search's weakness, the Brooks derivation and the
  book's "well known". McConnell stays off the page as the notes propose, which is an omission,
  and [S:43] itself forbids saying Farley drew on him.
- **SCHEMA section 8.** The new text corrects no person; it bounds a frame and attributes each
  statement to its source (the search, the book).

Checks after review: `fact-ledger.ts` PASS (43 facts, 24 fields cited; [S:43] unused by design),
`reading-gates.ts` PASS, and `firstness.ts` shows only the earlier warnings on `limits[0]` and
`still_load_bearing_despite`, none from this pass.
