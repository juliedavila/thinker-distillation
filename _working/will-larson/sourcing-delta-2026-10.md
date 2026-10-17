# Will Larson: sourcing delta, 2026-10-16

This pass covers the two frames that named no originator. There is one row per changed field.
ADDITION rows add a proposition, so Julie reviews them. New ledger lines are [S:59] to [S:61], plus [S:62] added in review.

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| named_frames[6].co_originators (team-sizing-heuristics) | none | `v-a-graicunas`: "\"Relationship in Organization\" (1933): counted the relationships a manager must attend to, including those between subordinates, and showed the total rising steeply past the fourth report" (review fix; the pass had "with each added report", wider than [S:60], which puts the steep rise after the fourth subordinate) | ADDITION (option a: an earlier originator was found and is credited for the span-of-control half only) | [S:60] [S:61] |
| named_frames[6].co_originators (team-sizing-heuristics) | none | `lyndall-urwick`: "helped Graicunas formulate the 1933 paper, and in \"The Manager's Span of Control\" (1956) defended a limit on span of control" | ADDITION (option a) | [S:60] |
| named_frames[6].attribution_kind | "distributed" | unchanged | SAME | [S:41] [S:60] |
| named_frames[6].one_line_gloss, sentence 2 | "running back to Graicunas in 1933 and Urwick after him" | "running back at least to Graicunas in 1933 and Urwick after him" | NARROWED (the search found both men citing a 1922 rule of thumb from Sir Ian Hamilton, so Graicunas is no longer implied to be the start) | [S:60] |
| named_frames[1].one_line_gloss (staff-plus), sentence 3 | "It now circulates without him: Gergely Orosz defined Staff+ ... and did not mention Larson." | "The label circulates without his name: Gergely Orosz defined Staff+ ... and did not mention Larson." | NARROWED (option c: "now ... without him" implied that the label started with him) | [S:38] [S:59] |
| named_frames[1].one_line_gloss (staff-plus), new sentence 4 | none | "Where the label started is unsettled in the record; LeadDev reported in 2023 that no one, Tanya Reilly included, seemed able to agree on its origin." (review fix; the pass had "that nobody, Tanya Reilly included, agrees on its origin", which dropped LeadDev's "seems to be able to" and stated the disagreement more firmly than its source) | ADDITION (records the search result on the page, attributed to its source; no person is credited) | [S:59] |
| named_frames[1].attribution_kind | "popularized" | unchanged; the search found no use of the label before Larson's March 2020 writing ([S:62] pins one dated use, 2020-03-11) but cannot rank him first, so there is no `original` refiling | SAME | [S:59] |
| why_they_matter_as_a_thinker | "The label over the titles no longer needs his name:" | "The label over the titles circulates without his name:" | NARROWED (a carrier of the same implication, lowered in the same pass) | [S:38] [S:59] |
| last_updated | "2026-09-17" | "2026-10-16" | SAME (date of this pass) | n/a |

## Carriers lowered

- `_working/will-larson/sources.md`: "guidance runs back to Graicunas in 1933" now reads
  "runs back at least to".
- `_working/will-larson/grounding-pack.md`: the [F:staff-plus] and [F:team-sizing-heuristics]
  items were refreshed by hand to the new glosses. A full regeneration also pulled in edges
  added to other pages since 2026-09-17, so it was reverted. Those edges change the grounding
  under reading sentences that this pass did not review.
- No sentence of `reading` or `extension` carries either frame's origin (`reading-claims.md`).
  This page has no long read. No other thinker page mentions Staff-plus or Staff+.
- A grep for "no longer needs", "circulates without him" and "running back to" across the page
  and `_working/will-larson/` matches only the note in `page-claims.md` that quotes the old
  wording.

## Searches and their bounds

- [S:59] tested the **label** "Staff-plus" / "Staff+". It did not test the titles, which
  [S:39] already places at Google by 2010. Two web searches and a read of LeadDev's 2023 piece
  turned up no dated use of the label earlier than his own 2020 writing, and no named
  originator. That 2020 use had no ledger line until review; [S:62] now records the 2020-03-11
  digest, which uses the label without defining or claiming it. LeadDev reports some people's guesses (military ranks, Bell Labs or IBM), but no
  source backs any of them, so none of them is on the page. The build still warns on this
  frame, as intended: the search found no originator, so the page names none.
- [S:60] tested the **span-of-control half**: how many reports a manager can support. It did
  not test the oncall-rotation figure or "small teams (<4) are not teams". Hamilton's 1922 rule
  appears only secondhand, quoted by Nickols, and is not credited in `co_originators`. The
  sources differ on Graicunas's number (Nickols has five or six, Wikipedia four to five), so
  the page gives no number for him.

## Review, 2026-10-16

An independent review of this pass, run 2026-10-17 against the diff from `origin/main`. Every page
change has a row and every row matches the diff. The four fetched sources were reopened and every
quoted passage in [S:59] to [S:61] appears in them as quoted. Two rows were fixed in place and one
ledger line was added.

- **Graicunas `role`, WIDENED, fixed.** "rising steeply with each added report" said the steep
  rise begins with the first report. [S:60] (Nickols) puts it after the fourth: "the number of
  relationships a superior must attend to rises exponentially after the fourth subordinate." Now
  "rising steeply past the fourth report". Before: steep growth with every addition. After: steep
  growth past four. NARROWED back to the source.
- **Staff-plus sentence 4, hardened, fixed.** "nobody ... agrees on its origin" dropped LeadDev's
  "seems to be able to agree", so it stated as settled fact a disagreement LeadDev reported with a
  hedge. Now "no one, Tanya Reilly included, seemed able to agree on its origin". SAME as the
  source; the row stays ADDITION because the sentence is new to the page. SCHEMA section 8 holds:
  it attributes the claim to LeadDev and passes no verdict on Larson or Reilly.
- **[S:62] added.** [S:59] rested its bound on "Larson's own March 2020 Irrational Exuberance
  digests" without a line of its own for them. The review fetched the 2020-03-11 digest, which
  uses "Staff-plus" throughout without defining or claiming it. The page makes no claim from it,
  and it does not support refiling Staff-plus as `original`.
- **Antecedent bounds checked.** [S:59] bounds only what the page now says: the label's origin is
  unsettled, and nobody is credited. Two searches (three with the review's) cannot show Larson
  was first, and the page does not claim he was. [S:60] supports Graicunas and Urwick for the
  span-of-control half only, which is what the rows claim. Its finding that both men cite
  Hamilton (1922) supports "at least" in the gloss. Hamilton stays out of `co_originators`
  because only Nickols quotes him. The Urwick `role` restates Nickols closely.
- **Labels.** No SAME or NARROWED row adds a proposition. The `why_they_matter` and sentence 3
  rewrites only drop the implied "it once needed his name". The co-originator slug
  `v-a-graicunas` matches the one `alex-komoroske.md` already uses.
- **Carriers.** `grounding-pack.md` [F:staff-plus] took the same fix. No other thinker page
  mentions Staff-plus, and the page has no long read.

## Julie's direction, 2026-10-17

Frames with no person to credit are filed as shared credit (`community`), with the gloss saying why.

| field | before | after | class | supporting |
|---|---|---|---|---|
| named_frames[1].attribution_kind and gloss | `popularized`, no originator to name | `community`, plus "The frame is filed as shared credit for that reason: the label belongs to the field, and StaffEng is where he gathered it." | NARROWED (restates the gloss's LeadDev and StaffEng sentences) | existing gloss lines |
