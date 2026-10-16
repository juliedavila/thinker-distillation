# Camille Fournier: claim delta, 2026-10-15

Remediation pass against `ledger-findings.md` (the three open findings and the audit section).
One row per changed sentence or field. Non-SAME rows first. No row is NEW or WIDENED.

| field | before (short quote) | after (short quote) | delta | supporting |
|---|---|---|---|---|
| active_years | "2015–present" | "2013–present" | CORRECTED | [S:35] [S:30] |
| inclusion_rationale, sentence 1 | "from the 2015 essays and one of the first public engineering ladders" | "from her 2013 blog posts on the move into management and the engineering ladder she made public in 2015" | CORRECTED (start date); NARROWED ("one of the first" dropped here; the scoped, attributed version lives in background and the ladder gloss) | [S:35] [S:30] [S:24] |
| inclusion_rationale, sentence 4 | "the platform coinages are too recent" | "the platform terms are too recent" | NARROWED (drops the coinage claim) | [S:8] [S:34] [S:12] |
| background, sentence 2 | "in 2015 published one of the first public engineering ladders" | "in 2015 published its engineering ladder, which she later described as one of the first public ladders with a clear split between management and individual-contributor levels and detailed expectations at each level" | NARROWED (attributed, and scoped to both conditions her retrospective names) | [S:24] |
| thesis, closing parenthetical | "(her platform book names this "the accidental complexity of human coordination," in Brooks's vocabulary)" | Deletion | Deletion | (the heading names a problem, not the remedy: [S:14] [S:37]) |
| named_frames[1].one_line_gloss | "Extends Patrick Kua's earlier framing that becoming a tech lead is a role change and not a promotion." | "Extends Patrick Kua's earlier *Talking with Tech Leads*, which treats the tech lead role as distinct from the developer role." | CORRECTED (the "role change, not a promotion" wording is located only in 2018 talk notes) | [S:19] |
| named_frames[1].co_originators[0].role | '(about 2014): "Tech lead is not a promotion. It is a role change."' | '(2014): "The Tech Lead role is quite distinct from the developer role."' | CORRECTED (quotation replaced with the book's own line) | [S:19] |
| named_frames[8].source_link | blog index `camilletalk.com/whilefalse` | the essay URL `.../2021/1/31/make-boring-plans` | CORRECTED | [S:29] |
| named_frames[9].one_line_gloss, sentence 2 | "Fournier's 2015 Rent the Runway ladder was one of the first made public." | "Fournier describes her 2015 Rent the Runway ladder as one of the first public ladders to draw that distinction and spell out what each level requires." | NARROWED (attributed; scoped to the split plus per-level detail, as she scopes it) | [S:24] |
| body_of_work[3].link | blog index `camilletalk.com/whilefalse` | the essay URL `.../2021/1/31/make-boring-plans` | CORRECTED | [S:29] |
| limits[3].elaboration, sentence 2 | "Its own coinages (glue, the over-general swamp, shadow platforms) date from 2024" | "Its own terms (glue, the over-general swamp, shadow platforms) appear in a 2024 book ... and glue widens the older programming term "glue code."" | CORRECTED (glue is not a 2024 coinage; no coinage claim for the other two) | [S:8] [S:34] [S:9] [S:12] |
| adjacent_thinkers[0].edge_label | "borrowing Brooks's distinction between essential and accidental complexity and applying it to how teams coordinate" | "uses "accidental complexity," a term from Brooks's 1986 paper, in a chapter 13 heading ... gives it its own meaning ... The published excerpt does not name Brooks or draw his distinction" | NARROWED (vocabulary use, not an acknowledged borrowing of the distinction) | [S:14] [S:38] |
| adjacent_thinkers[0].strength | "primary" | "secondary" | NARROWED | [S:14] [S:38] |
| adjacent_thinkers[2].edge_label | "described the tech lead as a role change several years before" | "(2014) described the tech lead role as distinct from the developer role, a few years before" | CORRECTED (wording to the book's own line); "several" to "a few" for 2014 to 2017 | [S:19] [S:21] [S:22] |
| adjacent_thinkers[0].edge_type | "antecedent" | "antecedent" (unchanged) | SAME | [S:14] [S:38] |
| last_updated | "2026-09-16" | "2026-10-15" | SAME (date of this pass; no proposition) | n/a |
| limits[3].headline | "The platform vocabulary is new and partly borrowed" | unchanged; re-read against the narrowed body, which it still matches | SAME | [S:7] [S:34] |
| named_frames[1].attribution_kind | "extended" | unchanged; the extension from Kua's book holds | SAME | [S:19] [S:21] [S:22] |

## Ledger and map changes

- `facts.md`: added [S:38] (Wikipedia, "No Silver Bullet": Brooks's 1986 paper distinguishes
  accidental and essential complexity), ending "| 2026-10-15 | re-verified 2026-10-15".
- `page-claims.md`: maps `active_years` [S:35] [S:30], `named_frames[1].co_originators[0]` [S:19],
  `adjacent_thinkers[0]` [S:14] [S:38]; header note rewritten to say the three are now fixed.
- `reading-claims.md`: unchanged. No `reading` or `extension` sentence changed.

## Unused ledger lines after the pass

- [S:18] (her 2025 talk quoting Brooks) is not cited because the Brooks label now says only what
  the book does; the talk shows she reads Brooks and does not show the book borrows from him.
- [S:20] (2018 talk notes with the "role change" sentence) is not cited because that quotation is
  no longer on the page; it stays on the ledger as the record of where the sentence came from.

## Gates

`bun scripts/fact-ledger.ts camille-fournier`: PASS, 38 facts, 31 factual fields cited.
`bun scripts/reading-gates.ts camille-fournier`: PASS (one pre-existing warning on
`limits[1].elaboration`, "not name Fournier, but", outside this pass).

## Review, 2026-10-15

An independent review of the pass above. Every page change in `git diff origin/main` has a row,
and every row matches the diff. Each non-SAME row was checked against the text of the ledger line
it cites, and section 8 of SCHEMA ("Corrections and disagreement") was applied to the Kua and
Brooks rows.

Changed in this review:

- **"One of the first", three fields.** [S:24] records her claim that the 2015 ladder was one of
  the first public ladders "that came with a clear distinction between management and IC levels,
  and meaningful details about the requirements and expectations at each level." The pass kept
  only the first condition in `background` and `named_frames[9]`, and kept the claim unscoped in
  `inclusion_rationale`. Dropping a condition from a "one of the first" claim makes it stronger
  than hers, so those rows were WIDENED against the source while labelled NARROWED. Fixed:
  `background` and the ladder gloss now carry both conditions; `inclusion_rationale` drops "one
  of the first" and says only that she made the ladder public in 2015. Rows above updated.
- **last_updated** moved to 2026-10-15, since the page content changed; row added as SAME.

Checked and left as is:

- **Kua (frame gloss, co-originator role, edge label).** Each now quotes or paraphrases the 2014
  book's introduction ([S:19]); "(2014)" matches its 2014-12-05 version, and "a few years" fits
  2014 to 2017 ([S:21], [S:22]). The 2018 "role change" sentence ([S:20]) is gone from every
  field: a grep for "role change" and "promotion" finds only the unrelated "fairer promotion" and
  "promoted out of", plus "a series of role changes" in `why_they_matter_as_a_thinker`, which is
  about Fournier's own book.
- **Brooks edge.** "Gives it its own meaning" restates the definition in [S:14]; "a term from
  Brooks's 1986 paper" rests on [S:38]. The label is scoped to "the published excerpt," which
  leaves room for a citation in the chapters not checked, as section 8 asks. The quotation marks
  around "accidental" in chapter 13 ([S:14]) were not added, because that would put a new
  proposition into a remediation pass. The strength drop to secondary is a narrowing. Neither
  "Brooks's vocabulary" nor "essential" survives elsewhere on the page.
- **Glue and coinages.** "Coin" no longer appears on the page. `inclusion_rationale` still says
  the book "adds vocabulary" including "glue"; the book calls glue "our term" in a widened sense
  ([S:8], [S:34]), so that wording is accurate and was left.
- **active_years 2013** rests on [S:35] and [S:30]. The blog archive runs from 2011 ([S:35]), but
  the first located management writing is from 2013, which is what the field and rationale claim.
- **Not fixed here:** the inbound `extends` label on `fred-brooks.md` still says the book
  "carries the essential and accidental complexity distinction into internal platforms." That
  file is outside this slug and needs the same correction.

Writing rules: no em-dashes on the page or in this file; no "not X but Y" constructions in the
changed sentences.
