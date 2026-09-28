# Calibration entry: erik-hollnagel (2026-09-26 to 2026-09-27)

Written at Ship, inside the change that ships the page, for a later stage to merge into
`.claude/skills/add-thinker/calibration.md`. This file does not edit `calibration.md`.

## Run-log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-27 | Hollnagel (new page, mode-a, pipeline run, single candidate) | 5 accept | 3 (round 2 left nothing below ACCEPT-WITH-EDITS, so round 3 was the single adjudication pass) | R1: 5 accept-with-edits; R2: 5 accept-with-edits; R3: accept-with-edits (cold reader: accept-with-edits, same, 12 findings, all 12 applied in-run by its editor, none declined) | "The Safety-I he rejects" in three fields, when the white paper he co-wrote proposes combining the two views; `thesis` and `reading` stating Safety-II premises in site voice that the page's own limits call contested; a limit headline turning Cooper's absence claim into the site's own finding; the white paper's joint "find and fix" framing quoted as his in two fields; the work-as-imagined gloss making Hollnagel trace the distinction to a 1983 paper he only recommends; the joint cognitive system `primary_author` disagreeing with the live Woods page after round 3 deleted the page-side note and told Ship to drop the fix; at Ship, a return label calling a Cook, Woods and Miller paper "Woods's own work" |

Round 1 and round 2 were both unanimous at ACCEPT-WITH-EDITS, the second consecutive page with no
dissent in any round. The cold reader matched the adjudicator's verdict and still filed twelve
findings, eleven CONFIRMED and one PLAUSIBLE. Seven measurements now: Cunningham stricter, Humble
same, Alexander stricter, Kim same, Karpathy stricter, Terhorst-North same, Hollnagel same. Every
one of the seven filed live findings the anchored pass did not.

## Which checklist item each cold reader finding falls under

| Finding | What | Checklist item |
|---|---|---|
| 1 | "the Safety-I he rejects" in three fields against [S:48] | Attribution: compressed phrasing presents the site's interpretation as the thinker's claim |
| 2 | `thesis` opening on a contested premise in site voice | Argument: contested claims stay contested |
| 3 | ETTO limit headline and closer disagreeing | Grounding: read the sentence on either side of an edit |
| 4 | limit headline making Cooper's absence claim the site's finding | Caught once (new, below) |
| 5 | "none of the critics cited here makes it" with no search on file | Grounding: superlatives and absence claims need a source |
| 6 | joint cognitive system `primary_author` mismatch with `david-woods.md` | Attribution: compare `primary_author` on both holders of a shared `concept_slug` (second sighting of the item) |
| 7 | "traces it to ... Leplat and Hoc" where [S:24] has him recommend the paper | Attribution: the ledger line must record the part of the document the claim rests on |
| 8 | "the bios disagree on the exact years" in `background` | Grounding: no reader-facing field explains the site's own research (fifth sighting) |
| 9 | the four-author white paper's "find and fix" attributed to him | Attribution: every co-author named wherever the term appears |
| 10 | a Safety-II tenet in site voice in `reading` | Argument: contested claims stay contested |
| 11 | Leveson's co-editorship in five rendered carriers | Sameness: one field should carry a point |
| 12 | founding dated to the anthology; generalising from two practitioners; `read_first` disagreeing with `start_here`; missing precondition; "rather than" cadence; stale `last_updated` | Several existing items; nothing new |

Eleven of twelve fall under items already on the checklist. "One field should carry a point" fired
again (finding 11), which is its fourth consecutive run; the Terhorst-North entry already argued the
defect is upstream and proposed a near-duplicate scan across a page's editorial fields. Findings 2
and 10 are two instances on one page of the contested-claims item.

## New failure patterns

**Caught once**

- **A critic's absence claim promoted to the site's own finding in a limit headline.** `limits[0]`
  was headlined "Safety-II has no empirical base yet", which turns M. D. Cooper's 2020 statement that
  no peer-reviewed evidence exists into a settled finding in site voice, and drops the date the
  absence was measured at. The elaboration attributed it correctly; the headline, which is the part
  a skimming reader takes away, did not. Repair: attribute in the headline ("A peer-reviewed critique
  finds no empirical base for Safety-II"). Related to the Majors secondhand-claim catch, but the
  carrier is specific: a headline compresses the attribution out of a sentence that carried it.
- **A round 3 edit resolved a cross-page inconsistency by deleting its record.** The adjudicator
  deleted the `inclusion_rationale` clause that named the Woods page's `primary_author` as a
  mismatch, and its note said Ship should drop return-edges item 2. That left both holders of
  `joint-cognitive-system` disagreeing with no line anywhere on the page to say so. The round 3
  editor's Ship note caught it by reading the promoted `primary_author` checklist item, and the cold
  reader filed it independently. A deletion that removes the only record of an open cross-page
  question is a resolution only if the question is closed somewhere else in the same pass.

**Second sighting, candidate for the checklist**

- **Edits reach a file with no record of who made them.** Twice in this run. First, recorded by the
  cold reader editor: the page file, `page-claims.md`, `reading-draft.txt` and `reading-claims.md`
  were already newer than the cold reader's report when its editor opened, with the findings
  applied and no editor note; the editor re-verified every repair rather than reapplying. Second, at
  Ship: the three neighbour pages already carried the return edges and corrections, `reading_review`
  was already on the page, and `inclusion_rationale` had already been moved from the future tense to
  the present, all before this stage ran and with no note in `return-edges.md` or anywhere else.
  Every change checked out against the plan and the ledger except one (below), but a change with no
  record cannot be audited by the next reader, and the calibration item on unrecorded measurements
  is the same rule applied to edits. Likely cause: an earlier attempt at the same stage that ended
  before writing anything down. Check at the start of every stage that the working tree matches the
  last recorded note, and write a note for anything that does not before building on it.

## Ship-stage catches

- **A possessive on a three-author paper, in a return label.** The Woods return label, as found in
  the working tree, said Hollnagel's two-view device "has a precedent he cites in Woods's own work,
  the paper with Cook and Miller". [S:14] names the paper as "Cook, Woods & Miller (1998)", Cook
  first. This is the fourth-sighting shape recorded under Process ("chase the names, the counts and
  the possessives"), now a fifth sighting, and again in a return label, the surface no review round
  reads. Rewritten at Ship to "has a precedent he cites in *A Tale of Two Stories* (1998), a paper
  Woods co-wrote with Cook and Miller."
- **The new Allspaw edge lands collapsed, as predicted.** The build prints `john-allspaw: collapsed
  richard-cook, nora-jones, erik-hollnagel`; on `main` it prints `richard-cook, nora-jones`. No
  existing edge lost its card: the arriving edge went straight to the collapsed tier because
  Allspaw's work-as-imagined frame already credits Hollnagel, which is the ranking the Return-edges
  item predicts. The Woods and Dekker edges were already in each page's foreground as off-site
  neighbours and stay there. No other collapse line changed against `main`.

## Notes that are not patterns

- Neither Woods, Dekker nor Allspaw has a `facts.md`, so every return edge here is `parallel`, and
  running `fact-ledger.ts` on them proves nothing. The Allspaw relationship on the record is closer
  to `antecedent` and is waiting on an Allspaw ledger.
- Edge labels, `further_in` items and some glosses print markdown asterisks literally on the built
  site (`*Joint Cognitive Systems*` renders with its asterisks on `david-woods`). Site-wide and
  pre-existing, not caused by this page, but every return label that italicises a title adds one.
- Rechecks were not in scope for this stage.
