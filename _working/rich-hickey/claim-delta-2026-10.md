# Rich Hickey: claim-delta table, 2026-10

Remediation pass against the fact ledger (`facts.md`, `ledger-findings.md`). One contradicted field was corrected; five wording carriers flagged in "Holds, with wording worth a look" and "Missed by the backfill" were narrowed to what their existing ledger lines say. No proposition was added without a ledger line, and no ledger line was added.

| field | before (short quote) | after (short quote) | delta | supporting |
|---|---|---|---|---|
| named_frames[7].attribution_kind | `original` | `extended` | CORRECTED | [S:25] [S:37] [S:39] |
| named_frames[7].co_originators | (none) | `meir-lehman`: "E-type programs (1974; Proc. IEEE, 1980), an earlier form of the distinction; the parallel is the site's" | CORRECTED (carrier of the attribution correction) | [S:37] [S:39] |
| named_frames[7].one_line_gloss | ends "...his arguments about data and types are made." (frame implied to have no earlier holder) | adds "The name is Hickey's. The distinction is older: Meir Lehman's E-type programs (defined in 1974) ... The talk does not cite Lehman, and the record does not show whether Hickey knew his work." | CORRECTED (credit for the name kept; earlier holder of the concept stated; no claim of borrowing) | [S:25] [S:37] [S:39] |
| named_frames[8].one_line_gloss | "the talk credits Polya's *How to Solve It*" (reads as credit for incubation) | "the talk credits Polya's *How to Solve It* for treating problem solving as a practiced skill" | NARROWED | [S:26] |
| named_frames[8].co_originators[0].role | "*How to Solve It* (1945), credited in the talk" | "...credited in the talk for problem solving as a practiced skill" | NARROWED | [S:26] [S:43] |
| body_of_work[2].editorial_note | "The talk behind Datomic's design." | "It sets out the thinking behind Datomic's design." | NARROWED | [S:21] [S:4] |
| adjacent_thinkers[4].edge_label | "arguing that the talk misstates what sum types and type signatures communicate" | "arguing that the talk is partly wrong about sum types, understates what type signatures communicate" | NARROWED | [S:29] |
| inclusion_rationale | "incidental complexity renames Brooks's accidental complexity" | "incidental complexity is Hickey's name for what Brooks called accidental complexity" | NARROWED (overlap kept; deliberate renaming act removed) | [S:15] [S:17] [S:18] |
| further_in.if_you_want_breadth | "the essential and accidental distinction Hickey renames" | "the essential and accidental distinction that Hickey's incidental complexity mirrors" | NARROWED | [S:15] [S:17] |

Rows: 9. Non-SAME: 9. NEW: 0. WIDENED: 0. Deletions: none.

Unchanged carriers checked: `body_of_work[4]` ("names situated programs") and `limits[0]` ("scopes his claims to situated programs") stay true under the correction, since the name remains Hickey's. The Editorial Reading's situated-programs sentence is unchanged, so `reading-claims.md` needs no update.

## Review, 2026-10-15

An independent reader checked the table against `git diff origin/main` and each cited ledger line.

**Diff coverage.** All nine page changes appear in the table and each before and after quote matches the diff. No change is missing from the table.

**Support.** Each non-SAME row was read against the text of its lines. The Lehman gloss and role follow [S:37] and [S:39] (1974 definition, Proc. IEEE 1980, E-type against exactly specified S-programs, no credit in the talk, no evidence either way on whether Hickey knew the work). The Polya rows follow [S:26], whose credit is for problem solving as a practiced skill. The Datomic note follows [S:21] and [S:4]. The Lange edge follows [S:29] ("both right and wrong" on sum types; "Theorems for Free!" against the claim that a signature "doesn't communicate anything"; "ignores the literature"). The two Brooks rows follow [S:15] and [S:17].

**Added propositions.** None found under a NARROWED label. Rows 1 to 3 do add propositions (Lehman as earlier holder, the talk's silence on him, the open question of whether Hickey knew his work), but each replaces the contradicted claim of no earlier holder and each has a ledger line, so CORRECTED is the right label. The last clause is the "leave room for the alternative" move from SCHEMA section 8 and passes no verdict on Hickey.

**Softening.** None found. "Partly wrong" matches Lange's own "both right and wrong," and the edge keeps "ignores the type theory literature." The `limits` entry on types still carries Lange's case at full strength.

**Other fields.** A grep of the page for the retired wordings ("renames," "misstates," "the talk behind," `original` on situated programs) is clean. `body_of_work[4]` and `limits[0]` stay true, as the table says. Two carriers outside this slug's files were left for their own pages: `fred-brooks.md` line 351 still says "Hickey renames accidental complexity," and the Append, Don't Overwrite concept page still says "drawn from Whitehead" (see `ledger-findings.md`, inbound claims).

**Changes made in this review.**

- `last_updated` moved from 2026-09-16 to 2026-10-15, since the page content changed. Backstage field, no proposition.
- Rewrapped three over-long lines (in `inclusion_rationale`, `named_frames[7].one_line_gloss` and `further_in.if_you_want_breadth`). Wording unchanged, delta SAME.

**Left, with reason.** The Polya role now names only what the talk credits, so it no longer says why Polya holds the incubation frame; [S:43] ("Subconscious work") would support a role line saying so, but adding it would be a new proposition, outside a remediation pass. The `background` CTO wording was left as the remediation recorded.
