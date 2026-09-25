# Karpathy: applying the unanchored control's findings, 2026-09-25

Source: `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-run5-council-20260924/round-3-unanchored-control.md`,
findings K1 to K9. Each was checked against the branch tip (`d9eeafb`) before any edit.

## Finding by finding

- **K1, the review step (decided the REVISE).** Live in four carriers plus the ledger line: `named_frames[1]` gloss,
  `limits[0]`, `inclusion_rationale`, the Willison edge label ("turns a mood into a testable claim about a review
  step"), and `[S:11]`'s closing clause. `reading`'s "Willison's narrowing rather than his" was a softer fifth
  carrier. All moved in one pass. `[S:11]` repaired with the date and the wrong text quoted, and now records the
  post's title as the source for the scoping claim (title verified at the URL, 2026-09-25). The Willison page's
  own text ("The review step is what the definition turns on") was already accurate and is untouched.
- **K2, the coinage day.** Went to the month on both pages. The Karpathy gloss drops the day and the Feb 6
  comparison; the three `simon-willison.md` fields this branch had set to 2025-02-02 now read February 2025, and
  `_working/simon-willison/facts.md` `[S:37]` carries a dated amendment. The Feb 6 claim stays corrected, since
  no field asserts it. The decode stays in both ledgers as the record.
- **K3, talk link.** Now points at Y Combinator's upload, verified through YouTube oEmbed and filed as `[S:17a]`.
  **One new fact surfaced:** YC titles the talk "Software Is Changing (Again)"; "Software in the era of AI" is
  the Hacker News title. The entry is retitled, the note says it also circulated under the other title, and
  `inclusion_rationale`'s "the June 2025 talk is titled 'Software in the era of AI'" became "carries no such
  title". `further_in` is updated to match.
- **K4, word budget.** Process finding, and it's already in `calibration-entry.md` as the second sighting. On this
  page the K1 repair freed words: `reading` went from 160 to 156.
- **K5, duplicated critic.** The Cendyne edge keeps the argument and the quotations. `limits[4]` now carries only
  what the critic costs the page: one critic, scoped to one of two frames.
- **K6.** "moved the industry's timeline out" became "put the timeline further out".
- **K7, missing Beck back-edge.** Already closed at Ship. The build no longer warns about it.
- **K8.** Both `, not Y` constructions are gone. The Cendyne one went with the K5 dedupe. The Ré one was
  restructured.
- **K9.** "build the thing" became "build a neural network, and then a GPT".

## Claim-delta

| Field | Before | After | Delta |
|---|---|---|---|
| named_frames[1] gloss | Coined 2025-02-02 (Willison says Feb 6); review step is Willison's addition | Coined Feb 2025; post describes accepting diffs unread; circulated definition is Willison's wording, in a post separating it from AI-assisted programming | NARROWED (day to month; removes false attribution); scoping clause backed by [S:11] title |
| limits[0] | Review step is Willison's addition; citing Karpathy for the definition = wrong author | Unread code is Karpathy's; one-sentence definition and scoping are Willison's; quoting that sentence = quoting Willison | NARROWED |
| inclusion_rationale | Definition belongs to Willison, who narrowed it onto the review step; talk titled "Software in the era of AI" | Definition is Willison's sentence in a post separating it from AI-assisted programming; unread code in Karpathy's post; talk carries no Software 3.0 title | NARROWED, plus a correction from [S:17a] |
| reading | Definition argued about is Willison's narrowing rather than his | Definition people quote is Willison's wording | NARROWED |
| Willison edge label (this page) | Narrowed to no-review, turning mood into testable claim about review | Put it in one sentence and fenced it from AI-assisted programming | NARROWED |
| body_of_work[5] | Title "Software in the era of AI", link to Latent Space | Title "Software Is Changing (Again)", link to YC's YouTube upload | SAME claim, corrected title and link, [S:17a] |
| further_in | Old title | New title | SAME |
| limits[1] | Moved the industry's timeline out | Put the timeline further out | NARROWED |
| limits[4] | Cendyne quoted in full | Cendyne named, scoped to the coinage; cost to page stated | SAME (scope from [S:13]) |
| Cendyne edge | ends with scope sentence | scope sentence deleted | deletion |
| Ré edge | about use of the term, not citation of the man | records use of the term, makes no claim they cite him | SAME |
| why_they_matter | build the thing | build a neural network, and then a GPT | SAME (body_of_work[3], [4]) |
| simon-willison.md x3 | 2025-02-02 | February 2025 | NARROWED |

Nothing is WIDENED and nothing is NEW without a ledger line. The NARROWED rows are the ones to spot-check.

## Verification

- `reading-gates.ts andrej-karpathy`: PASS
- `fact-ledger.ts andrej-karpathy`: PASS, 38 facts
- `fact-ledger.ts simon-willison`: PASS, 45 facts
- em dashes: 0 on both pages
- `, not ` count: 0 on the Karpathy page
- `reading` 156 words, `extension` 158, both within the 160 limit
- `bun run build`: clean. The only warnings are neighbour-cap collapses, none of them new with this edit, and the
  Beck back-edge warning is gone.
- `verify.ts`: passed
- `grounding-pack.md` regenerated so the next reader doesn't inherit the old gloss.

## Declined

Nothing was declined. K4 is process work, left for the skill-level fix (put word counts in the review brief).
