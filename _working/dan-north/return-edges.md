# Daniel Terhorst-North (dan-north): return-edge plan

Drafted 2026-09-25 at stage 4, to be applied at Ship after the review rounds. **Re-read against the
finished page before applying**, chasing names, counts and possessives as well as sentences
(calibration, "Return edges" and "Process"). Nothing here has been applied; no neighbour file was
edited.

The page links to three on-site thinkers: `jez-humble`, `martin-fowler`, `nicole-forsgren`. Two of
them already link here. Off-site targets (chris-matts, robert-c-martin, jeroen-de-dauw,
phillip-armour) have no page to edit.

Build evidence, sandbox tree with this page and no other candidate drafts: the only new build
warning this page causes is `martin-fowler has no edge back to dan-north`. A diff of every
`[distillery]` line with and without the page shows no new collapse on any neighbour. The Humble and
Forsgren edges to `dan-north` become on-site and render in the foreground; neither page printed a
new collapse.

## 1. martin-fowler (new edge; the only missing back-link)

Ledger state: `_working/martin-fowler/` has no `facts.md`, so `fact-ledger.ts martin-fowler`
already exits 1 before this edit. That page can take `parallel` and nothing that adds a required
ledger line. Append at the end of `adjacent_thinkers` (positional indices; Fowler has no
`page-claims.md` to renumber).

```yaml
  - target_slug: dan-north
    display_name: Daniel Terhorst-North
    edge_type: parallel
    edge_label: >
      Two bliki entries credit work he shared with others. The
      Given/When/Then entry records the template as developed with Chris Matts
      and adds a footnote on the credit he gave Ivan Moore when reviewing it; the
      blue-green entry leaves the name's origin as a foggy combination of him
      and Humble.
    strength: secondary
```

Sources for every clause: `[S:20]` and `[S:35]` on the dan-north ledger. No new fact.

Sentence-by-sentence comparison against the new page's Fowler label (calibration: one line per
sentence, each naming what it was compared against):
- Label sentence 1 ("Two of the bliki's attribution entries are about his joint work.") compared
  with new-page sentence 1 ("Fowler's bliki recorded both of the credits this page leans on for
  joint work."): same fact, different subject and clause order; opens from Fowler's side. Not
  near-verbatim.
- Label sentence 2 ("The Given/When/Then entry records the template as developed with Chris Matts
  and prints his own review note crediting Ivan Moore, and the blue-green entry leaves the name's
  origin as a foggy combination of him and Humble.") compared with new-page sentences 2 ("The 2013
  entry on Given/When/Then says it was developed by Terhorst-North and Chris Matts and carries
  Terhorst-North's review note crediting Ivan Moore.") and 3 ("The entry on blue-green deployment
  hedges the name across Terhorst-North and Humble."): **closest pair on the plan.** Shares "review
  note crediting Ivan Moore". Re-author that phrase at Ship if a reviewer reads it as a repeat.

Grep of Fowler's page before applying: `rg -n "Terhorst|Dan North|GivenWhenThen|foggy" src/content/thinkers/martin-fowler.md`
returned nothing on 2026-09-25, so the label adds no fact the page already carries.

Prediction, unmeasured: Fowler already collapses `jez-humble` and `ward-cunningham` at the cap. An
on-site `dan-north` edge not credited in any Fowler frame is likely to force one further collapse
or to land collapsed itself. Build the merged tree at Ship and report which, per calibration.

## 2. jez-humble (edge exists; two word-level updates)

Existing edge at `adjacent_thinkers` (target_slug `dan-north`), `parallel`, `strength: secondary`.
The relationship is already right and agrees with this page (reconciled, see below). Two changes:

- `display_name: Dan North` → `display_name: Daniel Terhorst-North`, so the card matches the name
  this page is headed by. Its label already says "He publishes as Daniel Terhorst-North."
- Now that `dan-north` is on-site the build auto-promotes the edge to primary. If the Humble page
  wants it to stay secondary, add `editorial_demote_to: secondary`. Recommendation: leave it
  promoted; the co-authored paper is the page's first frame. Julie's call.

Humble's label compared sentence by sentence with the new page's Humble label: Humble's sentence 1
("Co-author of the 2006 paper ... hedged credit for blue-green deployment.") against this page's
sentence 2 ("Terhorst-North is the third of three authors on 'The Deployment Production Line' ...
names all three."): same fact, no shared clause. Humble's sentence 2 ("He publishes as Daniel
Terhorst-North ...") has no counterpart here. No edit to the label.

Humble's ledger exists (`_working/jez-humble/facts.md`); no required line changes, since the edge
stays `parallel`.

## 3. nicole-forsgren (edge exists; display name only)

Existing edge, `parallel`, `strength: secondary`, label on the McKinsey review. It agrees with this
page and with `[S:36]`. One change: `display_name: Dan North` → `display_name: Daniel Terhorst-North`.
The label says "North called himself a fan", which stays correct under either name.

Forsgren's label compared with the new page's Forsgren label: hers quotes "has been analysed,
critiqued, and studied by industry analysts, and has stood up to scrutiny"; this page's label
deliberately does not repeat that quotation and closes on whose side he takes. No shared sentence.

Collapse note: Forsgren already prints `collapsed gene-kim, jez-humble` with and without this page,
so the display-name change moves nothing.

## Not planned

- `kent-beck`: no edge in either direction. "Introducing BDD" credits test-driven development and
  never names Beck `[S:12]`; the link rides on `derived_from: test-driven-development` only. An
  adjacency edge needs its own ledger line first (inclusion Council seats 1, 3 and 5).
- `rich-hickey`: `inbound-claims.ts` matched "North" on Alfred North Whitehead. Not about him.

## Round 2 editor update (2026-09-25)

Round 2 seat 3 found that the new page's Fowler label printed "Terhorst-North's review note" where `[S:20]` is Fowler's footnote reporting a review comment. The same defect sat in this plan's Fowler label as "prints his own review note crediting Ivan Moore", so it was chased here in the same pass. Label sentence 2 now reads "...and adds a footnote on the credit he gave Ivan Moore when reviewing it; the blue-green entry leaves the name's origin as a foggy combination of him and Humble."

Sentence comparison redone, one line per sentence:
- Plan sentence 1 against new-page sentence 1 ("Fowler's bliki recorded both of the credits this page leans on for joint work."): unchanged, not near-verbatim.
- Plan sentence 2 against new-page sentences 2 ("...and, in a footnote, reports that Terhorst-North's review comments credited Ivan Moore.") and 3 ("The entry on blue-green deployment hedges the name across Terhorst-North and Humble."): both mention the footnote and the Moore credit, with different verbs, subjects and clause order ("adds a footnote on the credit he gave" against "reports that ... review comments credited"). The shared phrase "review note crediting Ivan Moore" flagged above is gone from both.

Grep for the other round 2 changes against this plan: "After that paper", "2nd Order Ignorance", "first written up", "least outside uptake", "benefits the practice", "Security findings added", "quiet quarter" and "uncited" return nothing here.

## Round 3 editor update (2026-09-25)

The adjudicator changed the new page's Fowler label sentence 1 from "recorded both of the credits" to "recorded two of the credits", because the page carries three co-authored frames and the pipeline credit rests on the paper `[S:33]` and Humble's own account `[S:34]`, not on the bliki. That repair moved the page sentence onto this plan's sentence 1, which read "Two of the bliki's attribution entries are about his joint work.": same count, same noun, same closing phrase. Plan sentence 1 is re-authored to "Two bliki entries credit work he shared with others." Sources unchanged, `[S:20]` and `[S:35]`; claim-delta SAME.

Sentence comparison redone, one line per sentence:
- Plan sentence 1 ("Two bliki entries credit work he shared with others.") against new-page sentence 1 ("Fowler's bliki recorded two of the credits this page leans on for joint work."): same fact; the plan's subject is the entries and its object is his shared work, the page's subject is the bliki and its object is the page's own credits. Shared words "two", "bliki", "credit". Not near-verbatim, and the closest pair on the plan; re-read at Ship.
- Plan sentence 2 against new-page sentences 2 and 3: unchanged since round 2, comparison above still holds.

Grep for the round 3 changes against this plan: "central term", "both of the credits" and "predates" return nothing live: the only other hits are the stage 4 and round 2 comparisons above, which quote the page as it stood then and are kept as history.

## Cold reader editor update (2026-09-25)

**Correction to the build-evidence paragraph at the top of this plan.** It says "The Humble and Forsgren edges to `dan-north` become on-site and render in the foreground." That holds for Humble and is wrong for Forsgren: `src/content/thinkers/nicole-forsgren.md` sets `render_tier: deep` by hand on its `dan-north` edge, and SCHEMA 4.11 says a hand-set `render_tier: deep` wins outright, on-site or not. The Forsgren edge stays in the collapsed tier after this page ships. The merge request should say so: the Humble edge lands in the foreground, the Forsgren edge lands collapsed, and the Fowler edge's tier is whatever the merged-tree build prints. Whether to lift the hand-set demotion on Forsgren now that he has a page is a question for Julie, not something this plan changes.

Chase of the cold reader's page edits into this plan: "sixth of six", "third of three", "first tech employee", "any requirement", "set out to fix", "allows the talk", "older statement" and "Only one outside use" return nothing in either planned label above. Neither label names Martin, Armour, Needham or *The RSpec Book*, so no relocated form of a changed claim is carried here. The Fowler label's two sentences are unaffected by the page's changes; its comparison against the page's Fowler label (unchanged this pass) still holds.

## Applied at Ship (2026-09-25)

Re-read against the finished page first, chasing names, counts and possessives. Applied on
`candidate/dan-north`:

1. **martin-fowler**: new `parallel` edge appended at the end of `adjacent_thinkers`, `strength:
   secondary`, **`render_tier: deep` set by hand**. One change to the planned label: sentence 1 read
   "Two bliki entries credit work he shared with others", and on Fowler's own page "he" reads as
   Fowler. It now names him: "Two bliki entries credit work Terhorst-North shared with others."
   Sentence 2's "a foggy combination" now quotes Fowler's own words, "some foggy combination", as
   `[S:35]` records them. Claim-delta for both: SAME. Grep of the label for backticks and the six
   `edge_type` values: none.
   Sentence comparison against the new page's Fowler label, one line per sentence:
   - Label s1 ("Two bliki entries credit work Terhorst-North shared with others.") against page s1
     ("Fowler's bliki recorded two of the credits this page leans on for joint work."): same fact,
     different subject and object; not near-verbatim.
   - Label s2 (template with Matts, footnote on the Moore credit, "some foggy combination") against
     page s2 ("...and, in a footnote, reports that Terhorst-North's review comments credited Ivan
     Moore.") and page s3 ("The entry on blue-green deployment hedges the name across
     Terhorst-North and Humble."): different verbs and clause order; the quoted Fowler phrase does
     not appear in the page's Fowler label (it appears in the blue-green frame gloss, where it is
     Fowler's quotation).
   **Why the hand demotion.** The prediction above came true. Built without `render_tier`, the
   branch printed `martin-fowler: collapsed jez-humble, ward-cunningham, kent-beck`: the ranking
   collapsed Kent Beck, whose label on Fowler's page opens "The deepest collaborator", because Beck
   is credited inside three Fowler frames. To make room for a secondary edge about two bliki
   footnotes, that is the wrong trade, so the new edge takes the collapsed tier instead and Beck
   keeps his card. With the hand demotion the only build change is that
   `martin-fowler has no edge back to dan-north` clears. This is a decision for Julie, carried in
   the merge request.
2. **jez-humble**: `display_name: Dan North` became `Daniel Terhorst-North`. Label unchanged. The
   edge keeps `strength: secondary` in the file and the build promotes it now that the page is on
   site; no `editorial_demote_to` was added, per the plan's recommendation (Julie's call). The
   label's "the 2006 paper that first wrote up the deployment pipeline" stays: round 2 lowered
   "first written up" on this page because this ledger holds no priority line, and Humble's own
   ledger does, at its `[S:6]` (the Agile Alliance timeline, "The first conference article
   describing the core of continuous deployment").
3. **nicole-forsgren**: `display_name: Dan North` became `Daniel Terhorst-North`. Label and the
   hand-set `render_tier: deep` unchanged, so the edge stays in the collapsed tier (cold reader F14).
   The label still says "North called himself a fan", which is correct and is the one place on the
   site that shortens his surname that way.

Ledgers after the edits: `jez-humble` and `nicole-forsgren` exit 0; `martin-fowler` has no
`facts.md` and exited 1 before this edit, so its result proves nothing and the edge is `parallel`.
Build: exit 0, and the full set of `[distillery]` lines differs from the pre-edit set only by the
cleared Fowler back-link warning.
