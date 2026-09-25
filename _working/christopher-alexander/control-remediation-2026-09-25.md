# Control remediation: Christopher Alexander, 2026-09-25

Applies the unanchored round 3 control's findings A1 to A9
(`~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-run5-council-20260924/round-3-unanchored-control.md`)
to branch `candidate/christopher-alexander` at `4f3213a`. Each finding was checked against the
branch tip first, because Ship had already applied the return edges after the control read the page.

## Finding by finding

| Finding | State at branch tip | Action |
|---|---|---|
| A1 `reading` says the catalogue travelled, citing the limit that says the order claim crossed | Live | Fixed. "The catalogue is what got copied into practice." |
| A2 "granted the format" in five fields | Live | Fixed. Kept in `limits[1]` body only; cut from `thirty_second_take`, `thesis`, `reading`, the Gamma edge; `limits[1]` headline now "The part that travelled is the format" |
| A3 three `original` frames with no antecedent search | Live | Fixed. [S:27a], [S:11a], [S:28a] added, one per frame, each with method and bound. All three stay `original` |
| A4 1977 byline rests on Wikipedia | Live | Fixed. [S:10a] takes it from Alexander's vitae. [S:10] kept for the book's own sentences |
| A5 `inclusion_rationale` claims a correction "in this merge request" | Correction is made on the branch (Ship rewrote the Cunningham `co_originators` role) | Reworded to a state that stays true after merge: the Cunningham frame no longer carries the solo credit issue #42 was filed with |
| A6 `martin-fowler.md` asserts Alexander's critique of programmers | Already fixed by Ship | No change |
| A7 five apparatus instances | Three live that do not earn their place | Cut: `background` vitae-disagreement clause, `thesis` "and is labelled as one", frame gloss "against a catalogue record that gives him alone". Kept the two bounded-absence instances, one of which changed for the reason below |
| A8 "Set against the reading is where the reach actually is" | Live | Restructured: "Against that reading, here is where the reach actually is." |
| A9 tagline says two co-authors, page names six | Live | Decided: tagline says "with co-authors", no count. Recorded in `page-claims.md` |

## A defect the control did not find

`named_frames[2]` said "This round's search found no use of it outside architecture," and `limits[2]`
said the same of all the later vocabulary. Richard Gabriel's *Patterns of Software* (1996) has an
essay titled "The Quality Without a Name" that sets out to find what the quality is "in the realm of
software." That book was already on this ledger at [S:15], with Alexander's introduction to it at
[S:15a], so the absence claim was made with the counterexample on file. Added [S:15b] from the PDF on
Gabriel's own site; the gloss now names the use, and `limits[2]` keeps its bounded absence for the
three *Nature of Order* terms only, with the headline lowered to "Most of the later vocabulary."

Worth recording in calibration as the first sighting of a new shape: **a bounded absence claim
contradicted by a source already on the page's own ledger.** The bound ("this round's search")
made it look disciplined, and it hid that the search never read its own ledger.

## Claim-delta table

| Field | Before | After | Delta |
|---|---|---|---|
| `inclusion_rationale` | Solo credit on Cunningham frame and issue #42 is corrected in this MR | Cunningham frame no longer carries the solo credit issue #42 was filed with | NARROWED (drops the claim the issue is corrected) |
| `inclusion_rationale` | 17 of 38 ledger lines on Wikipedia | 17 of 43 | SAME (repository fact, recounted) |
| `tagline` | Wrote it with two co-authors | Wrote it with co-authors | NARROWED |
| `thirty_second_take` | He granted the format and named three further things it was built to do | He named three things beyond the format it was built to do | NARROWED (grant carried by `limits[1]`) |
| `background` | Held it for decades; vitae and secondary account disagree on the end, so no end date | Held it for decades | NARROWED (deletion) |
| `thesis` | He granted the format, in those words, and named three things it is also for | He named three things it is for besides its format | NARROWED |
| `thesis` | The charge is the page's inference, and is labelled as one | The charge is the page's inference | SAME (deletion of apparatus) |
| `named_frames[0]` gloss | Vitae bylines three authors, against a catalogue record giving him alone | Vitae bylines three authors | SAME (deletion) |
| `named_frames[2]` gloss | No use outside architecture found | Gabriel carried it into software in 1996, in an essay asking what the quality is for programs | NEW, on [S:15b] |
| `reading` | He granted software the format. Of his own languages he said in the same talk... | Of his own languages he said at OOPSLA in 1996... | NARROWED (grant sentence cut) |
| `reading` | The catalogue is what travelled | The catalogue is what got copied into practice | NARROWED |
| `limits[1]` headline | The part that travelled is the part he granted | The part that travelled is the format | SAME |
| `limits[1]` | Set against the reading is where the reach actually is | Against that reading, here is where the reach actually is | SAME |
| `limits[2]` headline | The later vocabulary has no reach | Most of the later vocabulary has no reach | NARROWED |
| `limits[2]` | No use of any of it outside architecture found | Only the quality without a name found outside architecture, in Gabriel's 1996 essays; none of the other three | NEW, on [S:15b] |
| Gamma edge | Addressed OOPSLA two years later, and what he granted was the format | Addressed OOPSLA two years later | NARROWED (deletion) |

The two NEW rows correct a false absence claim and rest on [S:15b], which was checked against the
source text before use. Nothing was WIDENED.

## Antecedent searches, and their honest weight

Method: Google Books Ngram (exact phrase, 1900 to 2010) plus five web searches in total across the
three terms. The Ngram index carries no senses or authors, so it can only show that a string
existed. All three strings do occur before Alexander, as ordinary English. No source was found
crediting any of the three as a named term to anyone before him. For the quality without a name,
commentators liken it to the Tao Te Ching's opening; nothing read shows Alexander drawing on it, so
the ledger records it as other people's comparison and forbids any field from stating it. This is
the same strength of evidence as Karpathy's [S:9a]: absence in bounded indexes, stated as such.

## Verification

- `bun scripts/fact-ledger.ts christopher-alexander`: PASS, 43 facts, 16 factual fields all cited.
  Unused: [S:5], [S:12], [S:15a], [S:21], all previously recorded as deliberate.
- `bun scripts/reading-gates.ts christopher-alexander`: clean. The first pass warned on "in the
  realm of" (Gabriel's phrase in a gloss); reworded to "for programs".
- Word counts: `reading` 139 of 160, `extension` 159 of 160 (untouched).
- Em dashes in the page: 0.
- `bun run build`: 27 pages; no warning names `christopher-alexander`. The collapse warnings are the
  pre-existing ones on other pages.
- `bun scripts/verify.ts`: passed.

## Declined, and why

- **The Gamma edge now ends on a bare chronology sentence.** Giving it a new point would add a
  proposition the control did not ask for; the deletion is the claim-delta-safe move. Worth a look
  by Julie at merge.
- **"This round's search" still reaches a reader once, in `limits[2]`.** The control kept it as a
  bounded absence and so did this pass.
- **`sources.md` §239 still says "Do not claim software uptake for this one"** about the quality
  without a name. `sources.md` is the prose research record at the time of research and is not
  rewritten after the fact; [S:15b] and this file supersede it.
- **Cross-batch notes 2 (Alexander and Kim close on the same move) and 4 (critic limits duplicate
  critic edges)** were not in scope for this page alone.
