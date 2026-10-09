# Dave Farley: return-edge plan (stage 4)

Drafted 2026-10-09 against the stage 3 page. **Nothing here has been applied.** Ship re-reads this
file against the FINAL page before applying any of it, chases every phrase the review rounds change
(names, counts, possessives, hedges), and re-derives every index below with the grep given rather
than trusting the number.

The page links to five neighbours with pages here: Jez Humble, Martin Fowler, Nicole Forsgren,
Daniel Terhorst-North (`dan-north`) and Kent Beck. Mark Seemann and Martin Thompson have no page.

## Defect to fix first: the deployment pipeline's live credit (goes at the top of the merge request)

Two live pages carry a pipeline credit that Humble's own February 2010 post contradicts
(Farley ledger [S:19]: "Dave, along with Mark Rickmeier, came up with the idea of deployment
pipelines back in 2004", and "first documented publicly in 2005 (in a blog entry by our colleague
Sam Newman)").

Humble also attributes the pipeline in the first person to himself, North and Read on his patterns
page (Humble ledger [S:5]), so the live statements that Humble names North and Read are TRUE. What
is false is the priority wording ("first describes", "first wrote up", "whenever"), and what is
missing is Farley.

### jez-humble.md

Ledger first. Humble's `facts.md` ends at [S:30]; confirm with
`rg -o '^- \[S:[0-9]+' _working/jez-humble/facts.md | sort -t: -k2 -n | tail -1` and use the next
free ids. Copy, with the same URLs and a `2026-10-09` date, Farley ledger [S:19] (Humble's
2010-02-02 post), [S:18] (Farley's 2007 paper) and [S:20] (Newman's 2009 history).

1. **Frame `deployment-pipeline` gloss** (find with `rg -n "concept_slug: deployment-pipeline" src/content/thinkers/jez-humble.md`; it is `named_frames[0]` today).
   Replace "The paper that first describes it is by Humble, Chris Read and Dan North, all three then
   at ThoughtWorks, and Humble credits all three by name in the first person." with:
   "An early conference write-up is the 2006 paper by Humble, Chris Read and Dan North, all three
   then at ThoughtWorks, and Humble credits all three by name in the first person. In a February
   2010 post he also credits Dave Farley and Mark Rickmeier with the idea in 2004, and names a 2005
   blog entry by Sam Newman as its first public documentation."
   Keep "The paper calls it a deployment production line, and the name that stuck arrived later."
   Claim delta: "first describes" NARROWED to "an early conference write-up"; the Farley and
   Rickmeier sentence is NEW, ledgered on the copied [S:19].
2. **Same frame, `co_originators`**: append
   `- slug: dave-farley` / `role: came up with the idea with Mark Rickmeier in 2004, per Humble's February 2010 post; used the name "Deployment Pipeline" in his 2007 paper`.
   Append, never insert, and add `named_frames[0].co_originators[2] [<copied S:19>] [<copied S:18>]`
   to `_working/jez-humble/page-claims.md` (re-derive the index with the grep above).
   `primary_author` stays `jez-humble`, and `attribution_kind` stays `co-authored`; both are Julie's
   call (see the merge request).
3. **Edge to `dan-north`** (find with `rg -n "target_slug: dan-north" src/content/thinkers/jez-humble.md`).
   Replace "Co-author of the 2006 paper that first wrote up the deployment pipeline," with
   "Co-author of the 2006 conference paper on the deployment pipeline,". Claim delta: NARROWED.
4. **Edge to `chris-read`**: replace "one of the two names Humble uses whenever he attributes the
   deployment pipeline in the first person." with "one of the two co-authors Humble names when he
   attributes the 2006 paper in the first person." Claim delta: NARROWED ("whenever" is false on
   [S:19]).
5. **`limits[2]` ("Almost none of it is his alone")**: replace "The deployment pipeline is
   co-authored and he says so himself, naming Dan North and Chris Read." with "The deployment
   pipeline is shared and he says so himself, naming Dan North and Chris Read for the 2006 paper and,
   in a 2010 post, Dave Farley and Mark Rickmeier for the idea in 2004." Claim delta: WIDENED by one
   clause, ledgered on the copied [S:19]. Read the sentence on either side after the edit.
6. **Edge to `dave-farley`** (exists; `parallel`, `primary`). Replace the label. The current label's
   last sentence ("Any account that files continuous delivery under one name is missing half of
   where it came from") is kept out of the new one, per inclusion Seat 3. Proposed:

   > Co-author of *Continuous Delivery* (2010), and the person Humble credited in February 2010,
   > with Mark Rickmeier, for the pipeline idea in 2004. Farley's single-author 2007 paper names the
   > gated model "a Deployment Pipeline" three years before the book. The book is equally his,
   > including the release-versus-deploy distinction that Humble's own post attributes back to it.

   Sentence check against the Farley page's own Humble label, one line per sentence:
   - S1 against Farley-page Humble label S1 ("The 2010 book is their shared work, and Humble is
     also the witness ... gives it to Farley and Mark Rickmeier"): same proposition, different
     wording and clause order. Low.
   - S2 against Farley-page labels and gloss: the gloss says "Farley's 2007 paper uses the name
     'Deployment Pipeline'"; S2 says "names the gated model 'a Deployment Pipeline' three years
     before the book". Low to moderate; Ship may cut "three years before the book" if a reviewer
     reads it as a priority clause.
   - S3 is the existing Humble-page sentence, kept. No counterpart on the Farley page.

   Possessive check: "Humble's own post" (single-author post); "Farley's single-author 2007 paper".
   No possessive on *Continuous Delivery*.

   No new ledger line needed on Humble's side beyond the copied [S:19] and [S:18]; the edge is
   `parallel`.

### dan-north.md

North's ledger ends at [S:47]; confirm with the same `rg` and use the next free ids. Copy Farley
ledger [S:19] and [S:18].

1. **Frame `deployment-pipeline`** (find with `rg -n "concept_slug: deployment-pipeline" src/content/thinkers/dan-north.md`; `named_frames[4]` today, and its two `co_originators` are cited at `named_frames[4].co_originators[0]` and `[1]` in North's `page-claims.md`).
   Append to `co_originators`: `- slug: dave-farley` / `role: came up with the idea with Mark Rickmeier in 2004, per Humble's February 2010 post; used the name "Deployment Pipeline" in his 2007 paper`,
   and add `named_frames[4].co_originators[2] [<copied S:19>] [<copied S:18>]` to North's
   `page-claims.md`.
   Gloss: append "Humble's February 2010 post credits Dave Farley and Mark Rickmeier with the idea
   in 2004." Claim delta: NEW, ledgered on the copied [S:19]. The existing gloss makes no priority
   claim ("It was written up in"), so nothing else changes.
2. **New edge to `dave-farley`**, appended at the END of `adjacent_thinkers` (positional claims
   lines), `edge_type: parallel`, `strength: secondary`, no `render_tier` (North has six foreground
   edges, so this is the seventh and fits the cap). Proposed label:

   > Farley holds the part of the pipeline story that comes before the 2006 paper and the name his
   > own 2007 paper gives it. Humble's February 2010 post dates the idea to 2004 and gives it to
   > Farley and Mark Rickmeier. Whether either write-up drew on the other is unrecorded.

   Sentence check against the Farley page's North label:
   - S1 against "Both hold the deployment pipeline. Terhorst-North is the third author of the 2006
     paper ...": different opener, opens from North's side with what Farley adds. Low.
   - S2 against the Farley page's Humble label ("dates the idea to 2004 and gives it to Farley and
     Mark Rickmeier"): **near-same wording.** Rewrite before applying: "Humble's own account, in
     February 2010, puts Farley and Mark Rickmeier at the start of it in 2004."
   - S3 against the Farley page's North label, which round 1 (2026-10-09) changed to "Humble's 2010
     post says the idea circulated within ThoughtWorks after 2004, and the 2006 paper came out of
     ThoughtWorks; how the idea reached that paper is unrecorded.": the planned S3 ("Whether either
     write-up drew on the other is unrecorded") is the same unrecorded-route proposition in other
     words, and it is still true, since the circulation sentence records a setting and no route.
     Low. Do not add the circulation sentence to this label: it would repeat the Farley label.

   Note: with Farley added to North's pipeline `co_originators`, Farley is credited inside a North
   frame, which makes this edge the first collapse candidate if North's page ever goes over the
   cap. Read the collapse line in the build.

## Other return edges

### martin-fowler.md (no `facts.md`; exits 1 before and after, so its ledger proves nothing)

Fowler's `continuous-integration` frame already credits Farley ("extended into Continuous
Delivery"), and the build warns that Farley has a page here and is not in Fowler's
`adjacent_thinkers`. A return edge closes that warning. `parallel` only (no ledger), appended at
the end, `strength: secondary`, **`render_tier: deep`**: Fowler is a hub that already collapses
Jez Humble and Ward Cunningham, and the automatic ranking would collapse this edge first anyway,
because the CI frame credits him.

> Farley carries continuous integration past the build. His 2007 paper, subtitled "Extending the
> range of Continuous Integration", starts a release candidate at each check-in and sends it
> through a sequence of gates toward production.

Sentence check against the Farley page's Fowler label: S1 has no counterpart. S2 shares the quoted
subtitle with the Farley label's S1 ("presents itself in its subtitle as ..."), and the rest of the
sentence (check-in, gates) is the Farley gloss's content in other words. Moderate on the subtitle
only; acceptable because the quotation is the evidence. Do not add the LMAX walk-through, the
foreword or the Window Driver date here: all three are already in the Farley page's Fowler label.
Grep Fowler's page for "Farley" before applying (`rg -n Farley src/content/thinkers/martin-fowler.md`):
lines on `main` already carry "Humble + Farley's *Continuous Delivery*" twice, a `+` construction
that is not a possessive on a single author; leave them.

### nicole-forsgren.md (has `facts.md`)

`parallel`, appended at the end, `strength: secondary`, **`render_tier: deep`** (her page hand-sets
her secondary practitioner edges deep, and the build already collapses Gene Kim and Jez Humble
there).

> A practitioner's book that puts her stability and throughput model to work. *Modern Software
> Engineering* (2021), by Farley alone, sends its readers to *Accelerate* for the model and builds a
> section on applying it.

Sentence check against the Farley page's Forsgren label: S1 against "The measures belong to the
research; the book puts them to work": **near-same ("puts ... to work").** Rewrite S1 before
applying: "A practitioner's book built on her stability and throughput model." S2 against "sends
readers to *Accelerate* for that model": near-same clause. Rewrite S2: "*Modern Software
Engineering* (2021), by Farley alone, has a section on applying the two measures and names
*Accelerate* as the place to read about them." Possessive check: "her stability and throughput
model" is a possessive on a multi-author finding (*Accelerate* is Forsgren, Humble and Kim).
**Rewrite before applying**: "the stability and throughput model from *Accelerate*". Final form
to apply:

> A practitioner's book built on the stability and throughput model from *Accelerate*. *Modern
> Software Engineering* (2021), by Farley alone, has a section on applying the two measures and
> sends readers to the book they come from.

### kent-beck.md (has `facts.md`)

`parallel`, appended at the end, `strength: secondary`, **`render_tier: deep`** (convergence on a
word, with no route, does not earn a card on Beck's page).

> Farley also reaches for "empirical": *Modern Software Engineering* (2021) defines software
> engineering as "the application of an empirical, scientific approach" to practical problems in
> software. Neither author is on record taking the word from the other.

Sentence check against the Farley page's Beck label: S1 against "Farley defines software
engineering as an empirical, scientific approach": shared quotation, different frame. Low to
moderate. S2 against "How each came to the word is unrecorded.": same proposition, different words.
"Neither author is on record" is an absence claim bounded by the research on file ([S:33] records
that nothing read connects the two); if a reviewer reads it as a wider claim, use the Farley page's
wording on Beck's side and cut S2 from the Farley label instead.

## Not linked back

- `mark-seemann`, `martin-thompson`: no page here.
- The Humble page's existing `dave-farley` edge is replaced (above), not duplicated.

## Prediction to check at Ship (computed in the stage 3 sandbox, which holds only main plus this page)

Build on this sandbox prints, for the five neighbours: "no edge back to dave-farley" on Fowler,
Forsgren, North and Beck, and Fowler's "frame continuous-integration credits dave-farley ... not in
adjacent_thinkers". The Farley page itself collapses nothing. After the plan, the five back-link
warnings should close. Fowler's and Forsgren's new edges land deep by hand, North's in the
foreground, Beck's deep. Read the collapse lines after applying and compare the `strength` of
anything that moved.

## Round 1 resolution note (editor, 2026-10-09)

Round 1 changed four things this plan touches; Ship re-reads the plan against the final page as usual.

1. The planned `co_originators` roles on both the Humble and North pages said Farley "named it" a Deployment Pipeline in 2007. That is a firstness verb, and seat 3 found the page making the same slide between the idea and the term. The role now reads "used the name", which is what [S:18] records ("We commonly refer to this process ... as a Deployment Pipeline").
2. The Farley page's North label now records Humble's "circulated within ThoughtWorks" ([S:19]) and the 2006 paper's ThoughtWorks origin ([S:35]). The sentence check for the planned North label's S3 is updated above; the planned label itself does not change.
3. Martin Fowler is no longer a `co_originator` of the four-layer frame on the Farley page ([S:32] does not show the book took the pattern from him). Nothing in this plan credited him on that frame, and the Fowler return label already avoids the Window Driver date, so nothing here changes. Grep at Ship: `rg -n "Window Driver\|four-layer" src/content/thinkers/martin-fowler.md`.
4. The Farley page's `why_they_matter_as_a_thinker` and `inclusion_rationale` no longer count Chris James as uptake of the 2021 book; he takes the layered structure from a Farley video ([S:26]). No planned label mentions James.

## Cold reader resolution note (editor, 2026-10-09)

The cold reader (`_working/_council/2026-10-09/cold-reader.md`) changed five things this plan touches. Ship re-reads the plan against the final page as usual, and re-derives every index with the greps above.

1. **Forsgren label: "chapter" is now "section"** in all three drafts above (finding 2). The stability and throughput material is a section of chapter 3, "Fundamentals of an Engineering Approach" (Farley ledger [S:15], [S:13]). Final form to apply: "A practitioner's book built on the stability and throughput model from *Accelerate*. *Modern Software Engineering* (2021), by Farley alone, has a section on applying the two measures and sends readers to the book they come from."
2. **Mark Rickmeier and Sam Newman join the pipeline `co_originators` on both live copies** (finding 4), so the omission the Farley page just repaired is not copied onto two more pages. On `jez-humble.md` and on `dan-north.md`, after the `dave-farley` line this plan already appends, append two more, in this order:
   - `- slug: mark-rickmeier` / `role: came up with the idea with Farley in 2004, per Humble's February 2010 post`
   - `- slug: sam-newman` / `role: wrote it up as a "build pipeline" in a 2005 blog entry, which Humble's February 2010 post names as its first public documentation`
   Ledger: Rickmeier needs the copied Farley [S:19]; Newman needs the copied [S:20] and [S:19]. The Humble copy list above already copies [S:20]; **the North copy list above copies only [S:19] and [S:18], so add Farley [S:20] to North's copies.** Claims lines, after re-deriving the frame index: Humble `named_frames[<i>].co_originators[3] [<copied S:19>]` and `[4] [<copied S:20>] [<copied S:19>]`; North `named_frames[<j>].co_originators[3]` and `[4]` the same way. Neither person has a page here; nor does `chris-read`, already listed on both. Claim delta: NEW structured credit on both pages, each ledgered as above. The Farley page's own lines are `named_frames[0].co_originators[2]` and `[3]` in `_working/dave-farley/page-claims.md`.
3. **The `attribution_kind` split goes to Julie, not to Ship** (finding 11). This plan keeps both live copies `co-authored`; the Farley page files the frame `distributed`, and its `inclusion_rationale` now says so and names the choice as Julie's. Ship does not change either live `attribution_kind`. Put it at the top of the merge request beside the `primary_author` question. If Julie picks `distributed`, both live copies change; if she picks `co-authored`, the Farley page changes.
4. **Page wording the plan must not reintroduce.** The cold reader lowered "automated gates" to "gates" on the Farley page (the 2007 paper leaves later promotion "selected manually or run automatically"), "his later work/frames" to "other", and "travels without his name" to "travels with no name attached". None of these is in a planned label today (grep: `rg -n -i "automated gate|later frame|later work|without his name" _working/dave-farley/return-edges.md` should print only this note). The Fowler return label's "sends it through a sequence of gates" already matches.
5. **The Farley page's Beck edge is now `render_tier: deep`** (finding 14, convergence on one word with no route). The planned Beck return label is already deep, so the pair is symmetric; nothing in the label changes. The Farley page's Beck label now says "to describe how software is made"; the planned Beck return label does not repeat that sentence (checked: its S1 quotes the 2021 definition, its S2 is the unrecorded-route sentence).

## Ship note (2026-10-09): what was applied, and where it differs from the plan

Applied on branch `candidate/dave-farley`, after re-reading this plan against the final page (the
cold reader editor's version). Indices were re-derived by parsing each page's frontmatter, not taken
from the numbers above: the pipeline is `named_frames[0]` on Humble and `named_frames[4]` on North,
as the plan said, and the new North edge is `adjacent_thinkers[7]`.

**Ledger copies.** Humble gains `[S:31]` (Farley `[S:19]`), `[S:32]` (`[S:18]`) and `[S:33]`
(`[S:20]`); North gains `[S:48]`, `[S:49]` and `[S:50]` for the same three. The copy of Farley
`[S:19]` leaves out that line's closing sentence about contradicting the live Humble gloss, because
a ledger line records what the document says and that sentence is a judgment about this site.

**Applied as planned:** the Humble pipeline gloss, the five pipeline `co_originators` lines on both
pages (Farley, Rickmeier, Newman, appended after Read and North), the Humble edges to North and to
Chris Read, Humble `limits[2]`, and the North gloss sentence. Claims lines were added on both
neighbours' `page-claims.md`; both ledgers exit 0 (Humble 33 facts, North 50).

**Changed at Ship, one line per label sentence that moved:**

- Humble's Farley label, sentence 2. Plan: "Farley's single-author 2007 paper names the gated model
  'a Deployment Pipeline' three years before the book." Applied: "His single-author 2007 paper set
  out the gated model three years before the book, under the name the book kept." "Names" is the
  firstness verb round 1 removed from the planned roles, and a first rewrite ("uses the name
  'Deployment Pipeline'") was near-same to the Farley pipeline gloss.
- North's Farley label, sentences 1 and 2. Plan S1 ended "and the name his own 2007 paper gives
  it", a naming verb; applied S1 is "Farley adds the part of the pipeline story that comes before
  the 2006 paper." S2 is the plan's own rewrite plus "and Farley's single-author 2007 paper calls
  the gated model by the name the practice kept", which avoids the gloss's "uses the name". S3
  unchanged.
- Fowler label, sentence 2. Plan: "starts a release candidate at each check-in and sends it through
  a sequence of gates toward production", near-same to the Farley pipeline gloss ("A release
  candidate started at every check-in and carried through a sequence of gates toward production").
  Applied: "and it takes each check-in on through a series of gates toward release" (`[S:18]`'s
  "a series of gates").
- Forsgren label, sentence 2. The cold reader's "has a section on applying the two measures" is
  near-same to the Farley page's `body_of_work[2]` ("Read its section on applying stability and
  throughput"), and "sends readers to the book they come from" to the Farley Forsgren label ("sends
  readers to *Accelerate* for that model"). Applied: "applies the two measures in a section of its
  third chapter and names *Accelerate* as the place to read more about them" (Farley `[S:15]`: "You
  can read more about this correlative model in the excellent Accelerate book"; section of chapter
  3). Sentence 1 as planned.
- Beck label, both sentences. Plan S1 "Farley also reaches for 'empirical'" was near-same to the
  Farley Beck label ("Both reach for the word 'empirical'"); applied: "Farley's *Modern Software
  Engineering* (2021) defines the discipline with the word Beck's series is named for: ...". Plan S2
  "Neither author is on record taking the word from the other" is an absence claim nothing on Beck's
  ledger bounds; applied: "Which way, if any, the word travelled between the two is unrecorded."
- Humble's Farley label loses its old last sentence ("Any account that files continuous delivery
  under one name is missing half of where it came from"), as planned.

**Farley page.** `inclusion_rationale` had two present-tense clauses that the return edges made
false once applied ("the Humble page's pipeline gloss says", "the return-edge plan proposes");
both now say what was the case until this merge request and that it corrects it.

**Build after applying.** All five back-link warnings and Fowler's frame-credit warning closed.
Collapse lines are identical to `main`: Fowler still collapses Humble and Cunningham, Forsgren still
collapses Kim and Humble, and nothing on North, Humble or Beck collapses. The new edges on Fowler,
Forsgren and Beck are deep by hand; North's is in the foreground as its seventh of seven, so the
cap now binds on North. Fowler has no `facts.md` coverage for `body_of_work[5]` and exits 1 before
and after, unchanged by this edit.
