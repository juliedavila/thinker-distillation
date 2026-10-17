# Nancy Leveson: sourcing delta, 2026-10-16

Sourcing pass for the one frame the build warned names no originator: `safety-iii` (extended).
The search line is [S:50] in `facts.md`. It tested two parts of the frame separately: the label
"Safety-III", where no earlier holder was found by web and Crossref search (the Crossref check
failed its positive control and is recorded as uninformative; the review below finds an earlier hypothetical use of the term by Hollnagel), and the approach the label sits on,
whose origin her own 2020 text names as System Safety practice ([S:18]). Outcome (a): the
originator of what the frame extends is named, through `derived_from`, since System Safety is a
practice with no single person behind it on this ledger. No person is newly credited. The kind
stays `extended`, because her "It is not new" rules out `original`.

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| `named_frames[4].derived_from` (safety-iii) | absent: the frame named no originator in structured fields | `system-safety`: Safety-III builds on System Safety practice | ADDITION (the proposition already stood in the gloss, "incorporates and extends the System Safety practice"; it is new only as structured lineage, and the concept slug has no page here) | [S:18], [S:50] |
| `named_frames[4].attribution_kind` | `extended` | `extended` | SAME | [S:18], [S:50] |
| `named_frames[4].one_line_gloss` | "Her 2020 label for a systems approach to safety, set against Erik Hollnagel's Safety-II. By her own account the approach "is not new", and Safety-III "incorporates and extends" the System Safety practice she dates to at least World War II." | unchanged | SAME (corrected in review: "her 2020 label for a systems approach" stands on her own "I call this general approach Safety-III" [S:18]; the term itself was in print by 2014 as Hollnagel's hypothetical question, per his own later quotation in [S:29], so [S:50] bounds the gloss only as her use of the label for an approach, and nothing on the page may say she coined the term) | [S:17], [S:18], [S:50] |
| `page-claims.md` named_frames[4] | attribution [S:17] [S:18] | attribution [S:17] [S:18] [S:50]; new derived_from row [S:18] [S:50] | SAME (map only) | [S:50] |

No claim was lowered, so no carrier needed lowering. `reading-claims.md` maps no sentence to the
Safety-III frame, so it needed no change.

## Review, 2026-10-16

Independent review of this pass, run 2026-10-17 against the diff from origin/main. The page diff is one line, `derived_from: system-safety` on the Safety-III frame, and it matches the table's ADDITION row. Every other row is SAME, and the page text is unchanged.

What I reopened: the Leveson white paper (Wayback copy), Simon Tulloch's post, and Hollnagel's "The Folly of Safety-III", all re-fetched to `_working/nancy-leveson/src/`, plus the two saved Crossref responses.

- **ADDITION holds.** Her paper says "What is labeled Safety-III in this paper incorporates and extends this System Safety approach", and elsewhere that Safety-III is "an evolution of what has been done in product/system safety at least since World War II". `derived_from` takes an idea slug with no page here (SCHEMA section 4), and `system-safety` is an idea, not a person or a work. The kind stays `extended`.
- **The antecedent search did not bound what it claimed, corrected in the ledger.** [S:50] said the web searches "returned no use earlier than her 2020 white paper" and leaned on Hollnagel's list of Safety-III writers. The manuscript that list comes from also quotes his 2014 book posing "whether there will not someday be a Safety-III?", and he says he "explicitly warned against" the step. So the term was in print by 2014, as a hypothetical. I did not read the 2014 book, and one targeted search for the sentence found no copy, so this rests on his own quotation. [S:50] now records the earlier use and narrows its result to her use of "Safety-III" as the name of an approach.
- **The gloss survives on a different footing.** "Her 2020 label for a systems approach to safety" is still accurate on her own "I call this general approach Safety-III to put it into the Hollnagel context" ([S:18]). The SAME row's reason was wrong, though, and I have rewritten it. The page says nothing about coining the term, so no page edit is needed. Any later edit that says she coined Safety-III, or that no one used it before her, is unsupported.
- **A source was overstated, corrected.** [S:50] said Tulloch "credits the term to her". He describes "her recent paper titled: 'Safety III...'" and says nothing about who coined it. The ledger line now quotes him.
- **Crossref.** Both saved responses return only front matter and editorial items with no matching title, so recording the check as uninformative is right.
- **People.** No correction about a person reaches the page, so SCHEMA section 8 is not engaged.

Checks after review: `bun scripts/fact-ledger.ts nancy-leveson` passes, the gates script passes, and there are no em-dashes in the changed lines.
