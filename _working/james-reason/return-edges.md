# James Reason: return-edge plan (stage 4)

Drafted 2026-10-02, before the Reading Protocol review rounds. **Not applied.** A later serial stage
applies it, and Ship must re-read every label below against the FINAL page first (calibration,
Process item one): chase names, counts and possessives, not only sentences the rounds rewrote.

The new page links to six neighbours: three on-site (Cook, Dekker, Hollnagel) and three off-site
(Jens Rasmussen, Barry Turner, Steven Shorrock), which take no return edge. Separately, two live
pages carry claims about Reason that the record does not support (Cook's sharp-end gloss, Allspaw's
blameless-postmortem credit), and one live page disagrees with this page on a `primary_author`
(Dekker's `just-culture`). Those are corrections, listed after the edges.

Ledger state of each neighbour, recorded before any edit (calibration, Return edges, last item):
`richard-cook` and `erik-hollnagel` have a `facts.md`; `sidney-dekker` and `john-allspaw` do not,
so running `fact-ledger.ts` on those two after an edit proves nothing.

## 1. Edges

### richard-cook: keep the existing edge, correct its label

The edge already exists: `adjacent_thinkers[4]`, `james-reason`, `antecedent`, `primary`. Find it
with `rg -n "target_slug: james-reason" src/content/thinkers/richard-cook.md`; do not trust the
index. No new edge, so no positional renumbering in `_working/richard-cook/page-claims.md`.

Current label: "The sharp end and the blunt end are his terms, and Cook and Woods credit them to
Reason (1990) in their 1994 chapter. The propositions' "latent failures" is his vocabulary too, and a
2005 Cook figure is credited "modified from J. Reason, 1990.""

Proposed label (edge_type unchanged, `antecedent`):

> "Sharp end" is his term, which Cook and Woods credit to Reason (1990) in their 1994 chapter while
> presenting the blunt end as their continuation of his analogy. The propositions borrow his "latent
> failures", and Cook's 2005 drawing of a complex system is an adaptation of Reason's 1990 figure.

Cold reader editor, 2026-10-02: the drafted opener "Only "sharp end" is his term" was an absence
claim. `[S:32]` records that *Human Error* was not read, and `[S:31]` declines to support "blunt end"
as Reason's without supporting that it is not, so "Only" had no line under it. Replaced with the
cold reader's wording, which states what Cook and Woods credit and how they present the blunt end.

Grounds: `[S:31]` and `[S:32]` on the Reason ledger; Cook ledger `[S:41]`, `[S:51]`, `[S:13]`,
`[S:52]`. Add `[S:51]` to the claims line for `adjacent_thinkers[4]` in Cook's `page-claims.md` if
it is not already cited there (it currently cites `[S:41] [S:21] [S:13] [S:45] [S:43] [S:52]`).

Sentence-by-sentence comparison against this page's own Cook label (calibration, Return edges):
- Return sentence 1 (""Sharp end" is his term, which Cook and Woods credit ...") against page sentence 1 ("Cook and Woods
  (1994) placed practitioners at "what Reason calls the 'sharp end'" and continued his analogy to a
  blunt end of their own."): same fact, different clause order and verbs. Re-checked by the cold
  reader editor after the 2026-10-02 rewrite: the two now share the phrase "his analogy", which is
  the source's own wording ("to continue Reason's analogy", `[S:31]`), and no other joint. The page
  sentence leads on where Cook and Woods placed practitioners; the return leads on whose term
  "sharp end" is. Ship should re-read it.
- Return sentence 2 ("The propositions borrow ... adaptation of Reason's 1990 figure.") against page
  sentence 2 ("A 2005 Cook figure, credited "modified from J. Reason, 1990", later carried the
  picture into a Microsoft post on cloud availability."): the page quotes the credit line and is
  about the Microsoft route; the return paraphrases the credit and says nothing about the route.

Grep before applying: backticks and the six `edge_type` words in the label (none present); `'s `
after a co-authored work (none: *Human Error* is solo, `[S:9]`).

### sidney-dekker: keep the existing edge, no label change

`adjacent_thinkers` already holds `james-reason`, `antecedent`, `primary`. Its label, "Reason's
1990 *Human Error* and 1997 *Managing the Risks of Organizational Accidents* are the academic
predecessors Dekker built from. Swiss-cheese model, just culture (originally Reason's framing) all
run through here.", agrees with this page: both books are solo (`[S:9]`, `[S:11]`), so the
possessive holds, and "originally Reason's framing" matches this page's `original` filing. "Built
from" is Dekker's page's reading and is not contradicted by anything here. Dekker sits at 7 of 7
edges; nothing is added, so no collapse is expected.

### erik-hollnagel: add a new `parallel` edge, hand-set deep

Hollnagel has eight edges and none to Reason. Append at the END of `adjacent_thinkers` (calibration:
an insertion mid-list shifts `page-claims.md` indices). `parallel` adds no required ledger line,
which is the only kind of edge this plan proposes for any neighbour.

```yaml
  - target_slug: james-reason
    display_name: James Reason
    edge_type: parallel
    edge_label: >
      Reason's layered-defences model, drawn with John Wreathall, is the
      subject of a 2006 Eurocontrol note by Reason, Hollnagel and Paries,
      which sets out how the model changed and the criticism it had drawn by
      then.
    strength: secondary
    render_tier: deep
```

Why deep and secondary: Hollnagel is past the foreground cap, and a new `secondary` edge must not
displace an existing `primary` one (calibration, Return edges, `strength` item). After applying, read
the build's collapse line for `erik-hollnagel` and compare it with `main`.

Grounds: Reason ledger `[S:14]`, `[S:15]`, `[S:42](d)`. Before applying, grep Hollnagel's ledger
for the 2006 note and cite it there if a line exists; if not, the label still needs no required line
because the edge is `parallel`.

Sentence comparison against this page's Hollnagel label, one line per return sentence. The cold
reader editor (2026-10-02) trimmed the page label to "Co-author, with Reason and Paries, of the 2006
Eurocontrol report that revisits the Swiss cheese model." and cut "in that byline order" from the
return label as bookkeeping printed to a reader.
- Return sentence 1 (the only sentence) against page sentence 1: both name the 2006 report and its
  three authors, which is the shared fact of the edge. The return opens on Reason's model and its
  co-drawer and closes on how the model changed and the criticism it had drawn; the page sentence
  now carries neither clause, so the two no longer repeat.

### Off-site neighbours

`jens-rasmussen`, `barry-turner`, `steven-shorrock`: no page, no return edge.

## 2. Corrections to live claims (carry into the merge request)

### richard-cook, frame `sharp-end-blunt-end` gloss (find with `rg -n "concept_slug: sharp-end-blunt-end"`)

Current: "... The terms are James Reason's, and Cook and Woods credit them to him in their 1994
chapter "Operating at the Sharp End", which applies them to medicine."

Proposed: "... "Sharp end" is James Reason's term, which Cook and Woods credit to him in their 1994
chapter "Operating at the Sharp End"; they present "blunt end" as continuing his analogy, and the
chapter applies the pair to medicine."

Keep `attribution_kind: extended` and `primary_author: james-reason` (the pair starts from his
term). Change the `david-woods` co-originator role to: "co-author of the 1994 chapter that applies
the pair to medicine and continues Reason's analogy to the blunt end". Seat 3 proposed adding
`richard-cook` as a co-originator for the blunt end; on Cook's own page that would list the holder
as a co-originator of his own frame, so the role text carries it instead. Grounds: `[S:31]`,
`[S:32]`. Reason's page does not hold this slug, so there is no `primary_author` comparison to make.

### richard-cook, `body_of_work[2].editorial_note` (the 1994 chapter)

Current: "... with Reason's sharp end and blunt end credited to him on its first page."

Proposed: "... with Reason's sharp end credited to him on its first page and the blunt end offered
as a continuation of his analogy."

### sidney-dekker, frame `just-culture`: `primary_author` (DECISION FOR JULIE, top of the MR)

Live: `attribution_kind: extended`, `primary_author: sidney-dekker`, co-originator `james-reason`
"original 1997 framing". This page files the same `concept_slug` `original` with
`primary_author: james-reason`. Calibration item 14: two holders disagreeing on a stated ground is
Julie's choice. The stated ground: Reason's 1998 paper sets out the frame `[S:24]` and the British
Academy memoir places it in the 1997 book `[S:26]`; Dekker's own page already calls it "originally
Reason's framing". Precedent: `code-smell` carries `kent-beck` on both holders.

Proposed: set Dekker's `primary_author` to `james-reason`, keep Dekker `extended`, keep the
`james-reason` co-originator entry as it stands. The concept genealogy then reads Reason `original`,
Dekker `extended`, which is varied attribution. Alternative for Julie: keep `sidney-dekker` on
Dekker's page, which leaves the two holders disagreeing, or match it on this page, which would file
a frame Reason set out under Dekker's name on Reason's own page. Neither alternative is recommended.

Bound for Julie to decide with (cold reader finding 12, 2026-10-02): `[S:49]`'s antecedent search
for "just culture" found no earlier holder in one index, but that index does not hold Reason's 1997
book or Marx's 1997 *Ground Effects* pieces, so the record cannot rank Reason against Marx and the
page never calls the term his coinage. `original` is defensible as the scope of Reason's chain
(informed culture, then reporting culture, then just culture), and it renders as "origin" beside
Reason's name in Dekker's "also held by" line, which is the reader-facing consequence of the choice.

Note for Julie, not a change: Reason's own 1998 paper credits David Marx (for work on where the disciplinary
line must be drawn) and Neil Johnston (the substitution test) `[S:25]`; this page names both as co-originators.
Dekker's frame names neither.

### john-allspaw, frame `blameless-postmortem`: drop the `james-reason` co-originator

Live: `co_originators` includes `{ slug: james-reason, role: human-error/Swiss-cheese predecessor }`.
The frame's own `source_link`, Allspaw's 2012 Etsy post, names Dekker and *Behind Human Error* and
never names Reason or Swiss cheese `[S:44]`. Remove the entry. Add no Allspaw edge to Reason and no
Reason edge to Allspaw: a return edge would cement an unsupported claim (inclusion Council, seats 3
and 5). If the entry stayed, the build would warn once Reason's page ships, because a frame would
credit an on-site co-originator missing from Allspaw's `adjacent_thinkers`. Allspaw has no
`facts.md`, so this correction cites the Reason ledger.

## 3. Predicted build effect, to verify at Ship against the merged tree

- `richard-cook` and `sidney-dekker` already link to `james-reason`; once the page exists those edges
  become on-site and auto-surfaced. Dekker is at 7 of 7, so expect the build to collapse whichever
  neighbour is already credited in a frame; read the collapse line rather than predicting it here.
- `erik-hollnagel` gains one hand-set deep edge; no foreground change expected.
- No back-link warning should remain for this page once the Hollnagel edge lands.
- Compute any collapse prediction against this candidate's branch, then build the batch merged
  (calibration, Return edges).

## 4. Applied at Ship, 2026-10-02

Re-read against the final page first (names, counts, possessives). Applied as planned, with two
changes beyond the plan, both narrowings:

- Cook return label, sentence 2: the plan's "Cook's 2005 drawing of a complex system is an
  adaptation of Reason's 1990 figure" went past Cook ledger `[S:13]`, which records only the credit
  line "R. I. Cook, 2005 modified from J. Reason, 1990" and neither the figure's subject nor that
  Reason's 1990 source is a figure. Shipped as "a 2005 figure by Cook is credited as modified from
  Reason's 1990 work." Sentence comparison against the page's Cook label: the page quotes the
  credit line and is about the Microsoft route; the return paraphrases it and names no route.
- `sidney-dekker.md` `further_in`: "*Behind Human Error* (1994, Woods, Cook and colleagues)" listed
  co-authors out of byline order (calibration, Process, possessive item). Now "Woods, Johannesen,
  Cook and Sarter", per Cook ledger `[S:23]`.

Cook `page-claims.md`: `[S:51]` added to `named_frames[4]` attribution, co_originators[0] and gloss,
`body_of_work[2]` and `adjacent_thinkers[4]`. Hollnagel edge appended as `adjacent_thinkers[8]`.
The page's `inclusion_rationale` moved from plan tense to present tense in the same pass.

Ledger exits, before and after: richard-cook 0/0, erik-hollnagel 0/0, sidney-dekker 1/1,
john-allspaw 1/1 (no `facts.md`), james-reason 0/0. Build: both predicted warnings cleared;
collapse lines identical to `main`; Reason renders foreground on Cook and Dekker (Dekker 7 of 7,
nothing collapsed) and in the drop-down on Hollnagel.
