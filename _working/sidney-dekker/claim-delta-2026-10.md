# Sidney Dekker: claim-delta table, 2026-10-15

Remediation pass on `src/content/thinkers/sidney-dekker.md` under the claim-delta gate. Sources are the lines in `facts.md`. Non-SAME rows first; deletions are marked "Deletion". No row is NEW or WIDENED.

| field | before (short quote) | after (short quote) | delta | supporting |
|---|---|---|---|---|
| background | "previously Chair of Human Factors and System Safety at Lund" | "previously Professor of Human Factors and System Safety at Lund" | CORRECTED | [S:1] [S:16] |
| background | "where he advised John Allspaw's PhD work" | Deletion | Deletion | [S:3] [S:4] |
| background | "Active commercial airline pilot (Boeing 737 ratings) kept current through his academic career" | "After becoming a full professor he learned to fly the Boeing 737 and worked part-time as an airline pilot out of Copenhagen" | CORRECTED | [S:1] |
| background | "The most-translated and most-cited writer on safety culture working today" | Deletion | Deletion | [S:18] |
| still_load_bearing_despite | "Dekker is the most-translated safety-culture writer of the last twenty-five years for a reason" | Deletion | Deletion | [S:18] |
| named_frames[2].attribution_kind | "original" | "extended" | CORRECTED | [S:22] [S:20] [S:21] |
| named_frames[2].co_originators[0] | (no co-originators) | david-woods: "cited as Woods 2003, beside Dekker 2011, for 'a gradual drift towards failure' in Dekker and Pruchnicki (2013)" | CORRECTED (part of the `extended` correction the ledger records) | [S:20] [S:22] |
| named_frames[2].co_originators[1] | (no co-originators; Rasmussen only via derived_from) | jens-rasmussen: "migration toward the boundary (1997), the model the drift account builds on" | CORRECTED (part of the `extended` correction) | [S:20] [S:21] [S:31] |
| named_frames[4].co_originators[2] | john-allspaw, "carried into software ops" | Deletion | Deletion | [S:27] |
| body_of_work[0].year | 2002 | 2014 | CORRECTED | [S:6] |
| body_of_work[0].editorial_note | (2002 paired with the later title) | "His 2002 *Field Guide to Human Error Investigations* set out the contrast between the old view and the new view of human error." | CORRECTED (the 2002 book carried a different title) | [S:5] |
| body_of_work[0].link | sidneydekker.com/field-guide-human-error/ (404) | Routledge third-edition page | CORRECTED | [S:6] |
| body_of_work[2].title | "Just Culture: Restoring Trust and Accountability in Your Organization" (2007) | "Just Culture: Balancing Safety and Accountability" (2007) | CORRECTED | [S:10] [S:16] |
| body_of_work[2].editorial_note | "Third edition 2017." | "Third edition 2016, subtitled *Restoring Trust and Accountability in Your Organization*." | CORRECTED | [S:9] [S:1] |
| body_of_work[1].editorial_note | "The Columbia space shuttle accident reading is the most-cited application." | "The Columbia space shuttle accident is one of its cases." | NARROWED | [S:7] |
| body_of_work[3].editorial_note | "Late-career Dekker laying out an alternative" | "A complete update of his 2005 *Ten Questions About Human Error*, laying out an alternative" | CORRECTED | [S:8] |
| named_frames[1].one_line_gloss | "accountable for *willful violations* but not for honest mistakes or system-induced failures" | "the line between acceptable and unacceptable behaviour is clearly drawn, in Reason's framing. Dekker's extension asks who gets to draw that line, arguing that culpability does not inhere in the act itself" | CORRECTED (the line is Reason's; Dekker's paper questions it) | [S:11] [S:13] |
| reading | "Just culture draws the accountability line: people answer for willful violations, while honest mistakes ... become material for learning" | "Just culture draws a line between acceptable and unacceptable behaviour, and Dekker's version asks who gets to draw it, since culpability does not inhere in the act itself" | CORRECTED | [S:11] [S:13] |
| thirty_second_take | "Dekker took the academic new-view-of-human-error frame from Rasmussen and Woods and turned it into prose working engineers and clinicians could actually use" | "Dekker extended the new view of human error, which his 2002 paper presents as an existing movement, citing Woods, Rasmussen, Reason and others" | CORRECTED (states his role as the record gives it; the "prose" clause is deleted) | [S:19] |
| thirty_second_take | "Dekker is how the resilience-engineering tradition gets out of the academy and into the working world" | Deletion | Deletion | none found |
| inclusion_rationale | "Built the working version of the *new view of human error* ... and translated it from academic safety science into the vocabulary" | "Extended the *new view of human error* ... and carried it into the vocabulary" | NARROWED | [S:19] |
| inclusion_rationale | "Forty years of consistent body of work" | "Over three decades of consistent body of work" | CORRECTED | [S:2] [S:15] |
| adjacent_thinkers[0].edge_label | "Read them together: Woods for the theory, Dekker for the application." | "Read them together." | Deletion (Dekker's drift writing is theory too) | [S:20] [S:21] |
| adjacent_thinkers[1].edge_label | "Dekker's PhD student at Lund" | "Allspaw's 2015 Lund master's thesis in Human Factors and System Safety, supervised by Anthony Smoker and Johan Bergström, thanks Dekker for "his encouragement, patience, and 'thrown in the deep end' approach"" | CORRECTED (thanks quoted in full in review) | [S:3] [S:4] |
| why_they_matter_as_a_thinker | "His prose is the medium through which the resilience-engineering frame entered the wider professional world." | Deletion (added in review) | Deletion | none found |
| body_of_work[0].editorial_note | "The keystone book. Third edition 2014." | "The keystone book, here in its third edition." | SAME (moved to match the entry's year) | [S:6] |
| background | "Dutch safety scientist. Professor at Griffith University in Queensland, Australia" | unchanged | SAME | [S:17] [S:1] [S:2] |
| background | "Author of more than a dozen books since 2002" | unchanged | SAME | [S:16] |
| named_frames[2].derived_from | "migration-toward-the-boundary" | unchanged | SAME | [S:20] [S:21] [S:31] |
| named_frames[1].one_line_gloss | "The cultural precondition for blameless investigation." | unchanged | SAME | interpretation |
| last_updated | 2026-05-25 | 2026-10-15 | SAME (metadata) | none needed |

## Review, 2026-10-15

An independent check of the table against `git diff origin/main`, the ledger lines each row cites, and SCHEMA section 8. Every page change in the diff has a row, and every row matches the diff. Each non-SAME after-text was read against the quoted words of the fact it cites, and each holds. The two co-originator rows on drift into failure add names, but they replace the contradicted `original` with the attribution the ledger records ([S:20] [S:22]), so they stand as corrections. No em-dashes or "not X but Y" cadence were found in the new text.

Changed in review:

- **why_they_matter_as_a_thinker:** deleted "His prose is the medium through which the resilience-engineering frame entered the wider professional world." It is the same proposition as the `thirty_second_take` closing this pass deleted for want of support ("Dekker is how the resilience-engineering tradition gets out of the academy"), still standing in another field. Row added above.
- **adjacent_thinkers[1].edge_label:** the thesis thanks now quote [S:3] in full ("his encouragement, patience, and 'thrown in the deep end' approach"). Cut down to "his encouragement", the acknowledged relationship read weaker than its source, which SCHEMA section 8 rules out ("Keep the facts at full strength"). The row above is updated.

Checked and left:

- **extension**, "separating an honest call from a willful violation": this is the Reason line the gloss still names as the frame's starting point, so it does not contradict the corrected gloss. The field sits under the reading protocol, so this pass leaves it alone.
- **Allspaw edge label**, "The most successful carrier": an unsourced superlative from before this pass, which the ledger did not raise. Flagged for the next edit and left in place, since review adds no new judgement of its own.
- **why_they_matter_as_a_thinker**, "Dekker spent twenty years doing it": a span for the carrying work, so it does not clash with "Over three decades" of writing. Unsourced; flagged.
- **Inbound pages** (john-allspaw, david-woods, richard-cook): grep finds no surviving PhD-advisor, "Chair of", superlative or drift-`original` claim about Dekker.
