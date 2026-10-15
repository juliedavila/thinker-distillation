# David Woods: claim-delta table, 2026-10 remediation

Remediation pass of 2026-10-15 against `ledger-findings.md`. One row per changed sentence or field.
Non-SAME rows first. One row is WIDENED (the cognitive systems engineering founding credit in `background`, relabelled in the review below); no row is NEW.

| field | before (short quote) | after (short quote) | delta | supporting |
|---|---|---|---|---|
| active_years | "1980–present" | "1979–present" | CORRECTED | [S:4] |
| background | "founder and former director of the Cognitive Systems Engineering Laboratory (CSEL)" | "The history page of ... (CSEL) credits Phil Smith with building the first university-based CSE program and laboratory, and says the lab is now run by Mike Rayo and Woods." | CORRECTED | [S:3] |
| background | "the Three Mile Island cognitive-engineering investigations" | "In the aftermath of Three Mile Island he and Erik Hollnagel founded the field of cognitive systems engineering." | WIDENED (relabelled from NARROWED in review: the old text credited Woods with founding a lab and placed him in an investigation; the new text credits him, with Hollnagel, with founding a field. That is a larger credit and a proposition the page did not make before. It is sourced, so it stays, and it goes to Julie for the domain check a WIDENED row requires) | [S:3] [S:4] [S:16] |
| background | "President of the Resilience Engineering Association." | "President of the Resilience Engineering Association from 2011 to 2013." | CORRECTED | [S:1] [S:4] |
| background | "and decades of incident analysis across aviation, healthcare, nuclear, and now software domains" | Deletion (no ledger line supports the list) | Deletion | none |
| background | "The intellectual lineage runs through Jens Rasmussen's safety-science work, the Three Mile Island ..., and decades ..." | "The intellectual lineage runs through Jens Rasmussen's safety-science work." | NARROWED (the two other carriers are corrected or deleted in the rows above) | [S:2] |
| named_frames[0].attribution_kind | `original` | `extended` | CORRECTED | [S:7] [S:8] [S:5] |
| named_frames[4].attribution_kind | `co-authored` | `distributed` | CORRECTED | [S:21] [S:17] [S:12] |
| named_frames[4].one_line_gloss | "Rooted in Rasmussen and carried by Woods and Dekker." | "Dekker's 2002 paper cites five sources for the view. Woods is an author of two, and the earliest is by Rasmussen and Batstone (1989)." | CORRECTED (the distributed credit the record gives; "rooted in" lowers to "earliest cited source") | [S:21] |
| body_of_work[0].editorial_note | "The foundational text for the new view of human error." | "A source Dekker cites for the new view of human error." | NARROWED | [S:17] [S:21] |
| body_of_work[0].editorial_note | "The argument from which every blameless-postmortem move ultimately descends." | Deletion (unsourced "every" claim) | Deletion | none |
| body_of_work[4] | "Cognitive Systems Engineering Laboratory work + Resilience Engineering Association talks" (blog-series) with note "CSEL at Ohio State has been the training ground for many of the practitioners ..." | Deletion (no single artifact; no REA talk series found) | Deletion | [S:18] [S:3] |
| tagline | "The theorist who named what makes complex systems actually cope" | "The theorist of what makes complex systems actually cope" | NARROWED (carrier of the adaptive-capacity coinage) | [S:7] [S:5] |
| inclusion_rationale | "Produced the vocabulary Allspaw spent a decade carrying" | "Produced much of the vocabulary Allspaw spent a decade carrying" | NARROWED (carrier of the adaptive-capacity coinage) | [S:7] [S:5] |
| further_in.then_read[0] | "*Behind Human Error* (the new view, foundational text)" | "*Behind Human Error* (a source for the new view)" | NARROWED | [S:17] [S:21] |
| further_in.then_read[2] | "CSEL papers at csel.osu.edu" | "The CSEL lab site at csel.osu.edu" | NARROWED (carrier of the deleted body_of_work[4]; papers at the link were not checked) | [S:18] |
| background | "American cognitive systems engineer. Professor Emeritus at Ohio State University" | same, as its own sentence | SAME | [S:1] [S:3] [S:4] |
| background | "Helped build the field of resilience engineering through forty years of writing, much of it co-authored with Erik Hollnagel, Richard Cook, and Sidney Dekker." | unchanged | SAME | [S:13] [S:14] [S:15] [S:20] |
| last_updated | "2026-05-25" | "2026-10-15" | SAME (metadata) | none |

Not changed, checked as carriers: `thirty_second_take`, `why_they_matter_as_a_thinker`, `thesis`,
`reading` and `extension` mention adaptive capacity and the new view without claiming coinage or
joint authorship. The Dekker edge label ("Co-builder of the new-view-of-human-error frame") fits a
distributed frame. `reading-claims.md` needs no update, because no reading or extension sentence
changed.

## Review, 2026-10-15

An independent review of this pass, made against `git diff origin/main` and the cited lines in
`facts.md`. Every page change in the diff has a row, and every row matches the diff. Each non-SAME
row's after-text was read against the ledger line it cites, and each holds at the strength of its
source. The background prose, the new-view gloss and the *Behind Human Error* note state the record
with attribution and pass no verdict on anyone, as SCHEMA section 8 asks. No em-dashes and no
"not X but Y" constructions in the changed text. Both gates pass.

**Changed in this table**

- The `background` row for the Three Mile Island sentence was labelled NARROWED. It is WIDENED:
  the old text made Woods the founder of a lab and a participant in an investigation, and the new
  text makes him a co-founder of a field. The credit is larger and new to the page. It is well
  sourced ([S:3], [S:4], and [S:16] for the 1983 paper that introduced the term), and it supplies
  the ordinary explanation SCHEMA section 8 asks for beside the CSEL correction, so it stays on the
  page. Relabelled, [S:16] added to its support, and the intro line no longer says no row is
  WIDENED.

**Page: no changes.**

**Left for Julie**

- The WIDENED row above needs the domain check the claim-delta gate requires before commit.
- `limits[2]` ("The case studies are aviation, healthcare, nuclear, military") carries much of the
  domain list this pass deleted from `background` as unsourced. Limits are not fact-gated and the
  list is the evidence the limit rests on, so this review did not cut it; only nuclear has partial
  support on the ledger (Westinghouse control rooms, [S:4]).
- `thirty_second_take` says the core claim "sits under every modern incident-analysis frame", an
  unsourced "every" of the same kind as the deleted blameless-postmortem sentence. It is
  interpretation and was not touched by this pass.
- Adaptive capacity is now `extended` with no `co_originators` or `derived_from`, so the page does
  not say what it extends. Naming Gunderson (2000) [S:7] would be a NEW row and was not added here.
  The concept page `src/content/concepts/adaptive-capacity.md` (outside this slug's files) now has
  no `original` holder in its genealogy.
- Older contrast cadences outside this pass's edits remain, for a separate style pass: "Complex
  systems are not stable artifacts; they are", "not machines with humans attached; they are", and
  "bolted on, not built in". The new-view gloss ("is not a cause; it is a *symptom*") mirrors
  Dekker's own definition [S:21] and is better left as the term of art.
