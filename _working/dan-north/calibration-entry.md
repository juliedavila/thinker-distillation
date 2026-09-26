# Calibration entry: dan-north (2026-09-25)

Written at Ship, inside the change that ships the page, for a later stage to merge into
`.claude/skills/add-thinker/calibration.md`. This file does not edit `calibration.md`.

## Run-log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-25 | Terhorst-North (new page, mode-a, pipeline run, single candidate) | 5 accept (split 3 to 2 on filing Deliberate Discovery `original` or `extended`) | 3 (round 2 left nothing below ACCEPT-WITH-EDITS, so round 3 was the single adjudication pass) | R1: 5 accept-with-edits; R2: 5 accept-with-edits; R3: accept-with-edits (cold reader: accept-with-edits, same, 16 findings, all 16 applied in-run by its editor, none declined) | Armour's "2nd Order Ignorance", read only through Mark Needham's quotation, stated flatly as Armour's in `reading` and three other fields after round 2 had lowered it in three; "sixth of six" presenting an alphabetical author position as rank, and "third of three" offered as evidence against "co-invented"; `thirty_second_take` putting agiledox and the "should" convention after the naming when the essay puts them before it; the Martin critic edge understating "completely miss the point" as "allows the talk may have been ironic"; a profile's "first tech employee" printed in site voice on a page whose first limit distrusts the profile; the return-edge plan predicting a foreground Forsgren edge that her page demotes by hand; at Ship, the Fowler back-link would have collapsed Kent Beck, Fowler's "deepest collaborator", to make room for a secondary edge |

The first round 1 with no dissent since Hickey and Fournier on 2026-09-16: five ACCEPT-WITH-EDITS. Round 1 edits still ran long (the editor's note is 20KB), so
a quiet verdict row is not a quiet round.

## The cold reader, first in-run application

This is the first page where the cold reader's findings were applied inside the run, by its own
editor, as !41 made the default. It returned the same verdict as the adjudicator (ACCEPT-WITH-EDITS)
and still filed 16 findings, 15 CONFIRMED and 1 PLAUSIBLE, which the editor applied in full with a
claim-delta line each and three new ledger lines (`[S:45]` to `[S:47]`) plus one amended (`[S:9]`).
The adjudicator's own pass made two edits, both in round 2 text. So the pattern recorded for
2026-09-22 and 2026-09-24 holds for a sixth measurement: the anchored pass finds defects in the
newest text, and the reader with no transcript finds them in the older fields. Across six
measurements the cold reader has landed stricter three times and matched three times, and every one
of the six filed live findings the anchored pass did not.

What changed is the cost of acting on it. The 2026-09-24 pages needed a second session and three
agents to apply what their controls found; here one editor did it before Ship, and the page reached
the merge request with nothing from the cold reader left open.

## New failure patterns

**Caught once**

- **A byline position read as a claim about contribution.** Two instances on one page, from one
  seat. `background` and `body_of_work[5]` said "sixth of six authors" of *The RSpec Book*, where the
  list after David Chelimsky runs alphabetically (`[S:9]`), so the position says nothing about the
  share. `limits[0]` offered "third of three authors" on the pipeline paper as evidence against his
  profile's "co-invented", when co-authorship is consistent with co-invention and no ledger line ties
  author order to contribution. The repair keeps the order where it is bibliography and removes it
  wherever it argues. Check: before printing an author position, ask whether the list is ordered by
  contribution, and never let a position stand as evidence about a share.
- **A self-description quoted in one field and printed as fact in another.** `limits[0]` builds the
  page's main caution on his profile overclaiming, and `background` printed the same profile's "first
  tech employee" in site voice. Distinct from the secondhand-claim catch on Majors, because the
  source here is the thinker's own and is on the ledger; the defect is that the page trusts it in
  one field and distrusts it in another. Repair: attribute it ("by his profile's account").
- **`reading_review` left for Ship.** SKILL stage 6 says to add it once the last round closes. On
  this run no editor did, so Ship added it (`dissent: false`, since no seat ended any round below
  ACCEPT-WITH-EDITS). Harmless here because the verdicts were uniform. On a page where the flag
  decides the order Julie reads in, the agent setting it at Ship is the one with the least context
  about which objections were answered.
- **The automatic collapse ranking cannot see `strength`.** Applying the planned Fowler back-link
  with no `render_tier` made the build print `martin-fowler: collapsed jez-humble, ward-cunningham,
  kent-beck`. The ranking collapses first a neighbour already credited in a frame, and Beck is
  credited in three Fowler frames, so the edge whose label opens "The deepest collaborator" gave its
  card to a `secondary` edge about two bliki footnotes. The plan had predicted "one further
  collapse" and could not say which. Ship hand-set `render_tier: deep` on the new edge instead and
  put the choice to Julie. The Fowler page has forced this choice before (the Return edges item on ranking candidates names
  Beck, Cunningham and Evans, and Cunningham already sits collapsed there), so the next sighting on
  any page should promote it, and the fix may belong in `src/lib/checks.ts` rather than in a hand
  check: a new `secondary` edge should not outrank an existing `primary` one.

**Second sightings (candidates for promotion)**

- **A return edge collapsed the moment it lands.** Caught once on 2026-09-24 (Kim on Forsgren). Here
  it happened twice: the Forsgren edge to this page stays in the collapsed tier because her page
  hand-sets `render_tier: deep`, and the plan's build-evidence paragraph said it would render in the
  foreground (cold reader F14). The Fowler edge lands collapsed by the Ship decision above. The plan
  had read the build warnings, which say nothing about a hand-set tier, since a hand setting is not
  a collapse and prints no line. So the check is on the file: for each neighbour already linking
  here, read its edge for `render_tier` before predicting where it lands. This is the second sighting
  and meets the promotion bar.

**Existing checklist items that fired again**

- *Lowering a claim in one field and leaving its carriers*: round 2 narrowed Armour's second-order
  ignorance to Needham's quotation in three fields and `reading`, `limits[3].headline`, `further_in`
  and `inclusion_rationale` kept the flat form. The cold reader named three carriers; the editor's
  grep found the fourth. The item says to use the claims map to find carriers; a grep for the name
  found one the map would not have, because `inclusion_rationale` is a backstage field no claims line
  covers.
- *Chronology holds*: the new form is order within the thinker's own account (agiledox before the
  name, Matts after it), where the checklist's examples are dates across artifacts.
- *Compressed phrasing putting the site's point in the thinker's mouth*: "Deliberate Discovery treats
  the unnamed contexts as the constraint" (F7).
- *Comparing the closing move across pages*: the extension's closer repeated Majors and Dalio on
  P:1, now held by four pages (F6).
- *One field should carry a point*: the green-suite point in `limits[2]` and `extension`, and the
  single outside use of Deliberate Discovery in three fields (F8, F9).

## Did the 2026-09-24 "every critic limit duplicates its critic edge" pattern recur?

No. This page carries two `critiques` edges (Martin, De Dauw) and no critic limit, so there was
nothing to duplicate. One page without a critic limit does not settle the convention question left
for Julie; it is recorded so the count stays honest.

## Process notes

- The inclusion Council's verdict (5 to 0, split 3 to 2 on filing) is recorded in the page's
  `inclusion_rationale` and in `sources.md`, and no `distillery-inclusion-dan-north-*` transcript
  exists under `~/.claude/LIFEOS/MEMORY/COUNCIL/`. The review transcript is there, assembled from
  disk at Ship.
- The sandbox held an untracked file `hyp` at its root, a 716-byte fragment of an earlier
  `why_they_matter_as_a_thinker` draft. It was left out of the commit and is not on the branch.
