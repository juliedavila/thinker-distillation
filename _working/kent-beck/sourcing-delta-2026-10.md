# Kent Beck: sourcing delta, 2026-10

Originator sourcing pass, 2026-10-16. One frame warned in the build: `test-driven-development`
is filed `extended` and named no originator in `co_originators` or `derived_from`.

**What the search found.** The antecedent search [S:68] tested two things: whether the test-first
step of the frame predates Beck, and who wrote the book Beck credits. The first came back yes:
Larman and Basili report test-first development on NASA's Project Mercury [S:69]. They credit "the
development team" and name no individual, so nobody can go in `co_originators` on this evidence.
The second came back with nothing primary. One 2026 essay suggests McCracken's 1957 book and hedges
its own suggestion, and the 1957 text is access-restricted, so McCracken stays off the page.

**What changed.** The earlier practice goes in `derived_from` as an idea slug, which the schema
allows ("an earlier frame or idea this one builds on") and which needs no person. The kind stays
`extended`, which the search supports: Beck's own account [S:19] says he built on a technique that
was already written down, and the record shows the step in use before him. The search did not test
the refactor step, xUnit, or the cycle as a named discipline, and it does not show that Beck learned
the technique from Mercury.

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| `named_frames[0].derived_from` | (absent) | `test-first-development` | ADDITION | [S:19] [S:68] [S:69] |
| `named_frames[0].one_line_gloss`, closing sentence | "The book he rediscovered is named nowhere, so no slug can carry the antecedent and this gloss has to." | "His account does not name the book." (review 2026-10-16; the pass wrote "He does not name the book.") | NARROWED (the old sentence said no source anywhere names the book; a 2026 essay does suggest one, and the search did not read every Beck retelling, so the sentence now covers only the account quoted in [S:19]) | [S:19] [S:68] |
| `named_frames[0].one_line_gloss`, new sentence | (absent) | "Test-first work is on record before him: Larman and Basili's 2003 history reports that the development team on NASA's Project Mercury, working in half-day iterations, planned and wrote tests before each micro-increment." (review 2026-10-16; see below for the pass's wording) | ADDITION | [S:69] |
| `named_frames[0].attribution_kind` | `extended` | `extended` | SAME | [S:19] [S:68] |
| `named_frames[0].primary_author` | `kent-beck` | `kent-beck` | SAME (author of this page's framing, per the revised SCHEMA row) | [S:11] [S:19] |
| `named_frames[0].attribution` (page-claims) | [S:19] [S:11] [S:17] [S:32] | adds [S:68] | SAME (the claim does not move; the search line is recorded behind it) | [S:68] |
| `named_frames[0].one_line_gloss` (page-claims) | [S:19] [S:17] [S:32] | adds [S:69] | carries the ADDITION row above (row added at review; the pass changed this line without a row) | [S:69] |
| `named_frames[0].derived_from` (page-claims) | (absent) | [S:19] [S:68] [S:69] | carries the `derived_from` ADDITION row (row added at review) | [S:19] [S:68] [S:69] |
| `_working/kent-beck/grounding-pack.md` `[F:test-driven-development]` | mirrors the old gloss | mirrors the new gloss | SAME as the page row above | [S:68] [S:69] |

**Carriers checked.** `rg "named nowhere|no slug"` over the page and `_working/kent-beck/` now finds
only an unrelated line in `return-edges.md` (about Forsgren). The other sentences about the
rediscovery (`inclusion_rationale`, `why_they_matter_as_a_thinker`, the reading line in
`reading-claims.md`) say only that Beck declines the credit and calls his role a rediscovery. That
claim did not move, so they needed no change. `reading-claims.md` stays as it is: no reading
sentence rests on the closing gloss sentence.

**Correction register.** The new sentence reports what Larman and Basili wrote, attributed and
dated. It makes no claim that Beck knew of Mercury and passes no judgement on how he tells the
story. His own word, "rediscovering," stays beside it.

**For Julie (ADDITION rows).** (1) `derived_from: test-first-development` is an idea slug with no
concept page. If you would rather credit a person, the record does not support one yet. (2) The
Mercury sentence leans on a 2003 retrospective that applies the XP term to 1958 work. The sentence
attributes it ("reports"), but you may prefer to cut it and keep only the `derived_from`.

## Review, 2026-10-16

Independent review of this pass. Every page change in `git diff origin/main` has a row, and every row matches the diff, except that the two page-claims lines (`one_line_gloss` gaining [S:69], `derived_from` new) had no rows; both are now in the table. I reopened both new ledger sources. The Larman and Basili quotation in [S:69] matches the fetched text word for word, including both Mercury dates. The three Marcano quotations in [S:68] match the live essay (fetched to `_working/kent-beck/src/marcano-2026.html`), dated 2026-05-22.

**Two fixes to the page sentence, both narrowing it back to its source.**

1. *"The practice is on record before him"* was WIDENED. In the gloss, "the practice" reads as test-driven development, which is three steps; [S:69] reports only the test-first step, and [S:68] says outright that the refactor step and the cycle were not tested. It now reads "Test-first work is on record before him."
2. *"the software team ... planned and wrote tests before each half-day increment"* merged two separate statements in the source: iterations ran half a day, and tests came "before each micro-increment." The source never says the two are the same unit, and it says "development team." The sentence now keeps them apart in the source's own terms: "the development team on NASA's Project Mercury, working in half-day iterations, planned and wrote tests before each micro-increment." This is SAME against [S:69]; against the pass's wording it is NARROWED.

**One fix to the closing sentence, from the antecedent search.** "He does not name the book" is a claim about everything Beck has said, and [S:68] does not bound it. The search found no source in which Beck names the book, but the leading result links a second Beck retelling, the 2025 Pragmatic Engineer podcast, whose show notes list "Kent's childhood tape-to-tape experiments that inspired TDD" and which has no transcript to read. The sentence now reads "His account does not name the book," which [S:19] supports directly, and [S:68] carries a review note recording the unread source. The grounding pack mirrors both page changes.

**Checked and left alone.** `derived_from: test-first-development` is supported: [S:19] has Beck building on a technique already written down, and [S:69] shows test-first in use before him. The slug names an idea, as SCHEMA allows, and `checks.ts` accepts it as naming an originator. `attribution_kind: extended` and `primary_author: kent-beck` are SAME and match the revised SCHEMA row. No row labelled SAME or NARROWED adds a proposition, now that the gloss-closing row is restated. The correction register holds under SCHEMA section 8: the new sentence states a dated, attributed record next to Beck's own "rediscovering," passes no verdict, and makes no claim that Beck knew of Mercury. Nothing is softened below its source. The McCracken identification stays off the page, which the hedge in the source requires.

**Still for Julie.** The two ADDITION questions above stand unchanged. One more: if anyone wants the closing sentence back at full width ("He does not name the book"), the 2025 podcast at 35:41 has to be heard first.
