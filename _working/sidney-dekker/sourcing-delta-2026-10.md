# Sidney Dekker: sourcing delta, 2026-10-17

Sourcing pass on the claims the 2026-10-15 remediation left with no ledger line: the conduit framing in `why_they_matter_as_a_thinker`, the Allspaw edge's "most successful carrier" and "translated" clauses, and the tagline's sole credit for replacing "find the human, fix the human". Two lines were added to `facts.md`: [S:34], Allspaw's 2012 Etsy post on blameless postmortems (Internet Archive copy; the live URL returns 403), and [S:35], the Routledge page of the 2014 *Field Guide*, with its description, contents list and Allspaw's endorsement. No web search was run; both sources were fetched directly.

Carriers grepped: `tagline`, `inclusion_rationale`, `why_they_matter_as_a_thinker`, `still_load_bearing_despite`, the Allspaw edge, `reading`, `extension` and `further_in`. The two non-assigned carriers of the conduit framing (`inclusion_rationale` and `still_load_bearing_despite`) were lowered in the same pass. `reading` and `extension` carry none of it.

| field | before | after | SAME / NARROWED / CORRECTED / ADDITION / Deletion | supporting [S:n] |
|---|---|---|---|---|
| why_they_matter_as_a_thinker | "His prose is the medium through which the resilience-engineering frame entered the wider professional world." | already deleted in the 2026-10-15 review; not on the page | SAME (no change this pass) | none |
| why_they_matter_as_a_thinker | "Most engineering organizations that say 'blameless' don't realize they are speaking Dekker." | Deletion | Deletion | none found (a claim about what organizations know) |
| why_they_matter_as_a_thinker | "Investigators in aviation, surgeons running mortality conferences, software-ops engineers ... they are reaching for Dekker. The carry is broad enough that it now reads as common sense" | "Dekker's field guides are written for the people who run investigations. The first, in 2002, was a guide to human error investigations, and the 2014 edition sets out to help its readers 'do better investigations'." | NARROWED (aviation and surgery uptake dropped; the investigator audience kept) | [S:5] [S:35] |
| why_they_matter_as_a_thinker | (software-ops engineers reaching for Dekker, in the sentence above) | "John Allspaw is one reader who took Dekker's vocabulary into software operations, and his endorsement of that edition calls it required reading 'in my domain of software and Internet engineering'." (review, 2026-10-16: was "The vocabulary has reached software operations through readers such as John Allspaw, whose endorsement ...") | NARROWED (one named, quoted reader in place of a whole profession); ADDITION for the endorsement quotation | [S:35] [S:34] |
| why_they_matter_as_a_thinker | "the carry happened because Dekker spent twenty years doing it" | Deletion (the span survives as "The first, in 2002 ... the 2014 edition") | Deletion | [S:5] [S:6] |
| adjacent_thinkers[1].edge_label | "The most successful carrier of the just-culture / new-view tradition into software operations." | "Allspaw carried the new view into software operations." | NARROWED (superlative dropped) | [S:34] |
| adjacent_thinkers[1].edge_label | "The blameless-postmortem move is Dekker's just-culture argument translated for engineering practice." | "His 2012 Etsy post 'Blameless PostMortems and a Just Culture' sets aside what 'Sidney Dekker calls the "Bad Apple Theory"', and draws as well on Erik Hollnagel, and on *Behind Human Error* for its first and second stories." | NARROWED (sole Dekker credit becomes the post's own credits, which name three sources and do not cite *Just Culture*); ADDITION for the newly credited Hollnagel and *Behind Human Error* | [S:34] |
| adjacent_thinkers[1].edge_label | Lund thesis sentence | unchanged | SAME | [S:3] [S:4] |
| tagline | "The safety-science writer who replaced 'find the human, fix the human' with 'the system created the conditions for the human to fail.'" | "The safety-science writer whose field guides set the new view of human error, error as a symptom of trouble deeper in the system, against the old view that makes it the cause." | NARROWED (sole credit for the replacement dropped, since his 2002 paper presents the new view as an existing movement [S:19]; the two unsourced quoted slogans dropped; what remains is what his field guides do) | [S:5] [S:6] |
| inclusion_rationale | "carried it into the vocabulary that aviation, medicine, and (via Allspaw and others) software ops actually use" | "wrote it up as field guides for investigators. One reader, John Allspaw, calls the 2014 edition required reading in software and Internet engineering." (review, 2026-10-16: was "..., which reached software operations through readers such as John Allspaw") | NARROWED (aviation and medicine uptake dropped) | [S:5] [S:35] |
| still_load_bearing_despite | "*The Field Guide ...* is the manual that anyone running real incident investigations, across aviation, medicine, or software, keeps coming back to." | "*The Field Guide to Understanding Human Error* is a working manual for investigators." | NARROWED (universal uptake claim dropped) | [S:35] |
| still_load_bearing_despite | (none) | "Its 2014 third edition reads as a checklist for an incident review, chapter by chapter: the Bad Apple Theory, the hindsight bias, putting data in context, cause as something you construct." | ADDITION (the chapter list is sourced; "reads as a checklist" is the site's reading) | [S:35] [S:6] |
| still_load_bearing_despite | "Every 'blameless postmortem' in the software industry is downstream of a chain that runs through Dekker." | Deletion (the sourced part, Allspaw's post, is carried once, on the Allspaw edge) | Deletion | [S:34] |
| still_load_bearing_despite | "The vocabulary moved because the prose was clear and the argument was right; both still are." | "The argument holds up under the limits above." | NARROWED (the causal claim about the prose, a carrier of the deleted "His prose is the medium" sentence, dropped; the editorial verdict on the argument kept) | interpretation |
| last_updated | 2026-10-15 | 2026-10-17 | SAME (metadata) | none needed |

## Frames

`bun run build` names no Dekker frame without an originator, before or after this pass. Every frame not filed `original` already names one in `co_originators` or `derived_from`, so no frame row changes.

## Left for review

- `further_in.if_you_want_breadth`: "Allspaw and Nora Jones are the carrying-forward side." Nora Jones has no ledger line on this page. It is ungated and outside this pass's list, so it stays, flagged.
- `thirty_second_take`: "The standard investigation pattern (find the operator, find the moment, find the fix)" is the take's own summary of the old view, close to [S:5] and [S:6]. It was not in this pass's list and was left alone.
- The `john-allspaw` page (not editable here) says Allspaw is "among those who carried the resilience-engineering tradition (Hollnagel, Woods, Cook, Dekker) into software operations". That agrees with the narrowed edge.

## Review, 2026-10-16

Independent review of this pass, run 2026-10-17. Both new ledger lines were checked against the local copies. [S:34] (`src/wayback-blameless.html`): the title, "Posted by jallspaw", the May 2012 date, the Dekker "Bad Apple Theory" sentence, the Hollnagel attribution and the "From Behind Human Error" first and second stories table all match, and a full-text search of the post finds one Dekker mention and no citation of the book *Just Culture*. That search covers the whole post, so it bounds the line's "does not cite *Just Culture*". [S:35] (`src/fg3.html`): the description, the contents list, the 2014 copyright and the Allspaw endorsement all match. No antecedent search was run in this pass, so none needed bounding. Every page change in `git diff origin/main` has a row above, and every row matches the diff.

Two fixes, both in clauses the pass labelled NARROWED:

| field | before (this pass) | after (review) | label | supporting [S:n] |
|---|---|---|---|---|
| why_they_matter_as_a_thinker | "The vocabulary has reached software operations through readers such as John Allspaw, whose endorsement ..." | "John Allspaw is one reader who took Dekker's vocabulary into software operations, and his endorsement ..." | NARROWED ("readers such as" asserted a class of software-ops readers that no line shows; "The vocabulary" had no antecedent in the field and is now named as Dekker's, which [S:34]'s "what Sidney Dekker calls the 'Bad Apple Theory'" supports) | [S:34] [S:35] |
| inclusion_rationale | "which reached software operations through readers such as John Allspaw" | "One reader, John Allspaw, calls the 2014 edition required reading in software and Internet engineering." | NARROWED (the same unshown class dropped; what remains is Allspaw's own endorsement, attributed to him) | [S:35] |

`page-claims.md` drops [S:34] from `inclusion_rationale`, which no longer carries it. Checked and left: the tagline matches [S:5]'s two views; the Allspaw edge states the post's own credits without a verdict on anyone, per SCHEMA section 8; "reads as a checklist for an incident review" is correctly marked as the site's reading. Nothing labelled SAME or NARROWED adds a proposition, and no fact sits below its source.

## Verification

`bun scripts/fact-ledger.ts sidney-dekker`: PASS, 35 facts. `bun scripts/reading-gates.ts sidney-dekker`: PASS (one standing warning on `thesis`, from before this pass). `bun run build 2>&1 | rg "sidney-dekker: frame .* names no originator"`: no output. Zero em-dashes on the page.
