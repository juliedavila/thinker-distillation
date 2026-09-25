# Gene Kim: return edges

Stage 4 of `add-thinker`. The Kim page links to eleven neighbours. Five have pages here: Jez Humble,
Nicole Forsgren, John Allspaw, Martin Fowler and Simon Willison. Humble's page already carries an
edge to `gene-kim`, so four need a new edge back and Humble's needs a correction instead. The other
six (Keunwoo Lee, Eliyahu M. Goldratt, Steven J. Spear, Eugene H. Spafford, Kevin Behr, W. Edwards
Deming) have no pages here and need nothing.

These are descriptions only. **Do not edit the five target pages from this run.** A later serial
stage applies them, because two candidates drafting at the same time collide on a shared neighbour.
That risk is live right now rather than hypothetical: `andrej-karpathy` and `christopher-alexander`
were both written into `src/content/thinkers/` in this same clone while this page was being drafted,
and Karpathy sits one hop from Willison, whose page this plan also touches. Whichever plan is
applied second has to recompute its own collapse prediction against the tree as it then stands.

**Re-read this file against the finished page before applying it.** It is written before the review
rounds and applied after them, and it does not move while the page does. Every phrase the rounds
change has to be chased in here by hand.

**Re-read done 2026-09-24, against the page as it stands after round 3's edits were applied. Six
things had gone stale and are fixed above.** The warning count said nine over a block of eight. Jon
Smart and Geoffrey Moore were described as `co_originators` after that field was deleted from the
page. The Willison label measured the subtitle "against Karpathy's definition", where the page's
limits[5] now routes the narrowing to Willison himself, and `[S:35]` as drafted carried the same
error. And three labels repeated a sentence from the new page in near-identical words, which is the
stricter form of the checklist item that has now been caught four times: the Willison label's
second and third sentences, the Forsgren label's "which is why four frames on this page credit him",
and the Allspaw label's Third Way sentence and foreword sentence. All three were re-authored from
the neighbour's side rather than trimmed. One near-repeat is left standing deliberately: the Humble
correction opens on "Co-author of both *The DevOps Handbook* and *Accelerate*", which is close to
the Kim page's "Kim and Humble co-wrote both", because that clause is the existing live label minus
the unsourced words and rewriting it would widen a correction into an edit nobody asked for.

## The eight warnings this plan clears

`bun run build` passes with the Kim page in place and prints these, all of them this plan's work.
Re-run the build after applying and confirm every line below is gone. (The count read "nine" until
2026-09-24 and the block under it always held eight; the Humble item below is a label correction and
was never a build warning. Re-confirmed by grepping the build output on 2026-09-24: these eight, and
no other warning naming `gene-kim`.)

```
[distillery] warning: nicole-forsgren has no edge back to gene-kim
[distillery] warning: john-allspaw has no edge back to gene-kim
[distillery] warning: martin-fowler has no edge back to gene-kim
[distillery] warning: simon-willison has no edge back to gene-kim
[distillery] warning: nicole-forsgren: frame dora-four-keys credits gene-kim, who has a page here but is not in adjacent_thinkers
[distillery] warning: nicole-forsgren: frame change-failure-rate credits gene-kim, who has a page here but is not in adjacent_thinkers
[distillery] warning: nicole-forsgren: frame time-to-restore credits gene-kim, who has a page here but is not in adjacent_thinkers
[distillery] warning: nicole-forsgren: frame throughput-stability-non-tradeoff credits gene-kim, who has a page here but is not in adjacent_thinkers
```

The second group is the stronger argument for edge 1. Four live frames on Forsgren's page have
credited Kim by slug since before this page existed, with no edge joining them to him, and a fifth
credit sits on Humble's page. Those warnings were printed on every build and nobody could act on
them, because the slug they named had no page.

## Neighbour ledger state, recorded before editing

Per the calibration item, because running `fact-ledger.ts` on a page that already exits 1 proves
nothing afterwards.

| Target | `facts.md` | Ledger before this change | Consequence for the edge type |
|---|---|---|---|
| nicole-forsgren | yes | exits 0 | any edge type available; `parallel` chosen |
| john-allspaw | **no** | exits 1 on `main` | `parallel` only. A `critiques` or `antecedent` edge would add a required line to a page that has no ledger to put it in |
| martin-fowler | **no** | exits 1 on `main` | `parallel` only, same reason |
| simon-willison | yes | exits 0 | `critiques` is available and is the right type, and it adds a required ledger line. Two lines have to be added to his `facts.md` in the same change, specified under edge 4 |
| jez-humble | yes | exits 0 | no new edge; a label correction, which adds no line |

## What the caps do to each target, computed rather than reasoned about

Each row below was produced by calling `orderNeighbors` with the Kim edge appended to that target's
real `adjacent_thinkers`, against the tree as it stood on 2026-09-22. Re-run it at apply time,
because a recorded simulation ages against `src/lib/checks.ts` and because two other candidates are
live in this clone.

| Target | Foreground after the edge | Auto-collapsed by the build | Does the collapse cost a claim? |
|---|---|---|---|
| Nicole Forsgren | seven, and Kim is not among them | **the new Kim edge itself**, plus Humble as before | No. He is credited inside four of her frames, which is what ranks him first for collapse. The edge still clears the back-link warning and still renders in the "more neighbours" disclosure |
| John Allspaw | Kim enters the foreground | Richard Cook as before, and now **Nora Jones** | Partly. Cook is a co-originator on two Allspaw frames and keeps that credit. Jones is not credited in any structured field, so her collapse is a real demotion, and her name survives in `background`, in a frame gloss and in Further In |
| Martin Fowler | Kim enters the foreground | Humble as before, and now **Ward Cunningham**, who has a page here | Partly, and this one is Julie's call. Cunningham is a co-originator inside a Fowler frame, so the credit survives and he loses a second mention. It is still an on-site neighbour moving off the main list of a page nobody is otherwise editing |
| Simon Willison | Kim enters the foreground | Riley Goodside as before, and now **Dave Chismon** | Partly. Chismon is named in full prose inside one of Willison's limits, so the claim he carries is already on the page |

**One decision for Julie.** On Fowler's page the choice is between a new `parallel` edge to Kim and
Cunningham's foreground slot. The recommendation is to let it collapse, on the same reasoning that
retired Humble from that page's main list on 2026-09-22: the credit is already stated inside the
frame, and the collapse costs a second mention. The alternative is to pin a weaker Fowler edge to
`render_tier: deep` in the same change, which is the only way to hold Cunningham's place.

---

## 1. `src/content/thinkers/nicole-forsgren.md`

Append to `adjacent_thinkers`, which makes the new edge `adjacent_thinkers[10]`. Appending rather
than inserting matters: the claims lines in `_working/nicole-forsgren/page-claims.md` address edges
positionally, so an edge added mid-list shifts every later index.

```yaml
  - target_slug: gene-kim
    display_name: Gene Kim
    edge_type: parallel
    edge_label: >
      Kim is the co-author who was in this research first. *Accelerate*'s own
      preface records Puppet inviting him into the 2012 study and his bringing
      Humble in, two years before the report she joined for. That order of
      arrival is what put his slug inside four of the frames above. His page
      holds a different output of the same years: numbered principles, published
      as posts and dramatized in a novel, with the measures left here.
    strength: primary
```

Edge type rationale: `parallel`. Neither argues against the other and neither derives from the
other. The co-authorship is already carried structurally in four of her frames' `co_originators`,
which is also why the build will collapse this edge into the disclosure.

No line is required in her `page-claims.md`, because a `parallel` edge adds none. The two facts in
the label are on this page's ledger at `[S:16]` and `[S:15]`.

## 2. `src/content/thinkers/john-allspaw.md`

Append to `adjacent_thinkers`, making it `adjacent_thinkers[8]`. The build will collapse Nora Jones
in the same pass and log it.

```yaml
  - target_slug: gene-kim
    display_name: Gene Kim
    edge_type: parallel
    edge_label: >
      Kim supplies the management programme the incidents on this page arrive
      inside. The third of his numbered principles instructs an organization
      from above on how to treat a failure it chose to risk; Allspaw's subject
      begins after a failure nobody chose has already happened, with the
      question of what makes an account of it trustworthy. Allspaw wrote the
      foreword to the first edition of *The DevOps Handbook*, which is the one
      artifact the two men share.
    strength: primary
```

Edge type rationale: `parallel`, and forced as well as correct. The foreword is a real shared
artifact and nothing more: Allspaw does not build on Kim and does not argue against him. Allspaw's
page also has no `facts.md`, so `parallel` is the only type available without building a ledger for
a legacy page.

## 3. `src/content/thinkers/martin-fowler.md`

Append to `adjacent_thinkers`, making it `adjacent_thinkers[12]`. The build will collapse Ward
Cunningham in the same pass and log it; see the decision above before applying.

```yaml
  - target_slug: gene-kim
    display_name: Gene Kim
    edge_type: parallel
    edge_label: >
      Kim's *Accelerate* is one of the books Fowler wrote a foreword for. Past
      that the two barely touch, and the gap is worth seeing. Fowler's method is
      one named move at a time, revised in public; Kim's is a numbered set that
      ships whole inside a novel or a handbook. Two ways of putting vocabulary
      into other people's hands, out of the same decade and the same industry.
    strength: primary
```

Edge type rationale: `parallel`, and forced for the same ledger reason as Allspaw. A foreword is not
an extension in either direction, and the register contrast is the site's reading rather than a
lineage either man claims.

**Do not use this edge to say anything about continuous integration, continuous delivery or the
pattern-language attribution.** The label above makes no claim about who developed what, which keeps
it clear of the open question the Humble run left on this page.

## 4. `src/content/thinkers/simon-willison.md`

Append to `adjacent_thinkers`, making it `adjacent_thinkers[8]`. The build will collapse Dave
Chismon in the same pass and log it.

```yaml
  - target_slug: gene-kim
    display_name: Gene Kim
    edge_type: critiques
    edge_label: >
      Kim is one of the three authors this post names, and the only one with a
      page here. The May 2025 objection measures his and Steve Yegge's subtitle
      against the definition this page's own narrowing supplied, so the standard
      being applied is Willison's rather than Karpathy's. Nothing in the
      DevOps corpus Kim is otherwise known for is in range of the argument. What
      followed is worth recording on this page, because it bounds what a
      definitional objection achieves: Addy Osmani's book was retitled *Beyond
      Vibe Coding*, and Kim's shipped in October 2025 with the wording intact.
    strength: primary
```

Edge type rationale: `critiques`, with `strength: primary` because the target has a page here, which
SCHEMA 4.11 requires and the build warns about when it is missing. Direction matters: on Willison's
page the edge type describes what Willison does, which is argue against Kim.

**This edge adds a required ledger line, and Willison's ledger does not yet hold the post.** His
`facts.md` covers "Not all AI-assisted programming is vibe coding" at `[S:18]` and stops there. Two
lines have to be added to `_working/simon-willison/facts.md` in the same change, next free id is
`[S:35]`, and both can be copied from this page's ledger where they are already verified:

```
- [S:35] Simon Willison, "Two publishers and three authors fail to understand what 'vibe coding' means," simonwillison.net, 1st May 2025. Names the book and its authors: "*Vibe Coding* by Gene Kim and Steve Yegge (published by IT Revolution) carries the subtitle 'Building Production-Grade Software With GenAI, Chat, Agents, and Beyond' -- exactly what vibe coding is not." Argues against the usage throughout. It rests on Karpathy's COINAGE, quoted at length, and not on a Karpathy definition: the reviewing clause is this page's own narrowing, already on this ledger at [S:18]. An update dated 4th September 2025 records that Addy Osmani's book was retitled *Beyond Vibe Coding*. | https://simonwillison.net/2025/May/1/not-vibe-coding/ | 2026-09-22
- [S:36] *Vibe Coding: Building Production-Grade Software With GenAI, Chat, Agents, and Beyond*, by Gene Kim and Steve Yegge, IT Revolution, publication date October 21, 2025. The subtitle on the live publisher page in September 2026 is word for word the one [S:35] objected to in May 2025. | https://itrevolution.com/product/vibe-coding-book/ | 2026-09-22
```

Then add to `_working/simon-willison/page-claims.md`:

```
- adjacent_thinkers[8] [S:35] [S:36] [S:18]
```

[S:18] is already on his ledger and carries the narrowing the label leans on, so only [S:35] and
[S:36] are new. `bun scripts/fact-ledger.ts simon-willison` exits 0 before this change and must exit
0 after it.

## 5. `src/content/thinkers/jez-humble.md` (a correction, not a new edge)

Humble's page already carries `gene-kim` as a deep `parallel` edge, so no edge is needed and no
back-link warning exists. What the edge carries is an unsourced claim, and its first five words are
the claim this research could not verify.

Current label at `jez-humble.md:459`:

> Co-founder of DORA and co-author of both *The DevOps Handbook* and *Accelerate*. The third name on
> most of what this page credits to the DORA work, and the reason the measurement corpus reads as a
> programme rather than a book.

Proposed:

```yaml
    edge_label: >
      Co-author of both *The DevOps Handbook* and *Accelerate*, and the first of
      the three into the research: *Accelerate*'s preface has Puppet inviting
      Kim into the 2012 study and Kim inviting Humble. The third name on most of
      what this page credits to the DORA work, and the reason the measurement
      corpus reads as a programme rather than a book.
```

This is one of eight places on the site that assert a DORA founding nobody can source, and it is
the smallest of them. The full set, by grep on 2026-09-22:

| File | Line | What it says |
|---|---|---|
| jez-humble.md | 59 | `background`: "co-founded DORA with Nicole Forsgren and Gene Kim and was its CTO" |
| jez-humble.md | 191 | `dora-four-keys` gloss: "Humble co-founded DORA with her and Gene Kim" |
| jez-humble.md | 198 | that frame's `co_originators` role for **jez-humble**: "co-founder of DORA" |
| jez-humble.md | 200 | the same frame's role for **gene-kim**: "co-founder of DORA" |
| jez-humble.md | 381 | the Forsgren edge label: "co-founded DORA with Gene Kim" |
| jez-humble.md | 459 | the Kim edge label: "Co-founder of DORA" |
| nicole-forsgren.md | 40 | `background`: "before founding DORA (DevOps Research and Assessment)" |
| nicole-forsgren.md | 441 | her Humble edge label: "The two founded DORA with Gene Kim" |

Six of the eight name Kim. The inclusion Council's highest count was seven and missed
`jez-humble.md:198`, which carries the same claim for Humble himself inside a role string; that is
the undercount the calibration log predicts, where a correction surface is measured once and three
carriers survive the merge request. Note that lines 198 and 200 are `co_originators` role strings and
therefore have required ledger lines already, both of which point at facts that do not carry the
word founder.

**This is Julie's decision and it is bigger than a return edge.** Two dispositions. Source it, with
one ledger line that all three pages can cite, which needs something none of four bios gave up: a
DORA incorporation record, a first-person statement, or the Google acquisition announcement rendered
rather than fetched (`dora.dev/about` 404s and the acquisition post 404s as of this run). Or lower
all eight in one pass, to the verified sequence at `[S:16]`. The new page does not assert it either
way, which is why it can be raised here rather than settled here.

---

## Not return edges, recorded so a later run does not add them

- **Keunwoo Lee, Eliyahu M. Goldratt, Steven J. Spear, Eugene H. Spafford, Kevin Behr and W. Edwards
  Deming** have no pages here, so no return edge exists to write. Spear and Spafford are the two
  strongest candidates this research surfaced: each is a co-originator on one of Kim's frames, each
  has a substantial corpus of his own, and both are pinned to `render_tier: deep` on the new page
  precisely because their credit is already carried inside a frame. Stage 8 should file both.
- **Keunwoo Lee also still belongs on Forsgren's page**, which the Humble run raised and left open.
  Her page carries no critic at all, while Humble's and now Kim's each carry the same review of the
  book she led. Out of scope for a return edge, because Lee has no page here. It is now the second
  merge request in a row to leave it open, which is an argument for settling it.
- **Mike Orzen** is named in this page's `limits[3]` and is deliberately not an edge and not a
  `co_originator`. Nothing beyond one sentence in the 2012 post connects him to the frame, and an
  edge would assert a collaboration the record does not describe. Same call the Humble run made on
  Ross Harmes and the Willison run made on Chromium's Rule Of 2.
- **Jon Smart and Geoffrey Moore** have no pages, so no edge and no warning. **Corrected 2026-09-24:
  this entry described them as `co_originators` on the Five Ideals, which they were until round 3's
  edits were applied and are no longer.** `scripts/decay.ts:62` renders such an entry as a permanent
  claim that the named person co-originated the frame, and neither originated the set; each is
  credited in Kim's own 2020 post for one phrase inside one ideal, which is what the frame's
  `one_line_gloss` and the page's limits[2] now carry on their own. They stay weaker candidates than
  Spear and Spafford for the same reason that removed them from the field.
- **Andrej Karpathy** is two hops out through Willison and is being drafted in this clone right now.
  No edge exists in either direction between him and Kim and none should be invented. The two runs
  do share Willison's page, which is where they can collide.

---

## Applied 2026-09-24 at Ship, with five deviations from the plan above

Branch `candidate/gene-kim`, cut from `main` at `aba4715`. Four edges added, one label correction
withheld. `bun run build` passes and all eight warnings listed above are gone. Every deviation below
is a narrowing, a deletion or a correction of a stale prediction; no deviation adds a proposition.

**A. The Willison prediction was stale, and the actual demotion is a cheaper one.** The table above
says Dave Chismon collapses when the Kim edge lands. That simulation was run on 2026-09-22 against a
tree that held a draft `andrej-karpathy.md` file, which is untracked, is not on `main` and is not in
this branch. With Karpathy off-site, as he is on `main`, `collapseRank` gives him the off-site penalty
and he was already the collapsed edge before this change; adding Kim collapses **Riley Goodside**
instead, and Chismon keeps his slot. Recomputed by calling `orderNeighbors` directly against this
branch's tree, both with and without the Karpathy file, and confirmed against the build output.
Goodside is the cheaper loss and is the exact case the calibration item describes: he is a
`co_originators` entry on `prompt-injection` with his own role string, he is named in that frame's
gloss, in `reading` and in `limits`, so the edge carries nothing that is not already on the page in
prose. The Karpathy file was moved out of the tree for every build and gate run in this stage and put
back afterwards, so the numbers recorded here are the numbers CI will see.

**B. The Allspaw label no longer states the foreword.** `john-allspaw.md:329` already carries it,
inside the existing Humble edge label: "Allspaw wrote the foreword to the first edition of *The DevOps
Handbook*, which Humble co-wrote with Gene Kim, Patrick Debois and John Willis." So the planned
sentence would have been the second telling of one fact on one page, which is the calibration item
about a whole proposition repeating, and its main clause was word for word the Kim page's own
("Allspaw also wrote the foreword to the first edition of *The DevOps Handbook*"), which is the
stricter sentence-level form of the repeat item. Both defects go away by deleting the sentence rather
than re-authoring it, because the fact stays on the page in the Humble label and that label names Kim.
The planned closing claim "the one artifact the two men share" also went with it, and that is a
gain: it was an unbounded absence claim with nothing on either ledger measuring it.

**C. The Fowler label states *Accelerate*'s byline and drops the characterisation of Fowler.** Two
changes to the planned text. "Kim's *Accelerate*" is now "*Accelerate*, which Kim wrote with Nicole
Forsgren and Jez Humble", because a possessive on a three-name book whose first author is Forsgren is
the defect round 3 repaired twice on the Kim page itself, and `[S:15]` carries the byline. And
"Fowler's method is one named move at a time, revised in public" is out: that is a claim about
Fowler's own output, it is what round 2 deleted from the Kim page for want of a source, Fowler's page
has no source record of its own to check it against, and reintroducing it on his page is the same
claim relocated rather than retired. The label now states Kim's side and points at the page for the
other, which is the one-sided-comparison shape the Kim page settled at note 9(b).

**D. The Forsgren label says "credit him" instead of "put his slug inside".** `slug` is a word from
this repository's file format and this label is read by a stranger. Same fact, same citation.

**E. Item 5 is NOT applied. Humble's label is unchanged and the decision goes to Julie.** The plan
frames the full disposition of the DORA founding claim as hers and offers two: source it with one line
all three pages can cite, or lower all eight carriers in one pass. Applying the one-line label edit
alone would have lowered one of eight carriers and left seven standing, which is the calibration item
whose two recorded sightings were both found a round later by a reader who had not made the edit. Two
of the eight are `co_originators` role strings with required source lines behind them, so lowering
them is ledger work on two legacy pages rather than a label edit. So all eight sites are left
consistent and the merge request carries the decision, with the proposed replacement text ready to
apply as written.

**One thing the round 3 control seat found that bears on this stage, recorded and not acted on.** Its
finding G6 says shipping leaves the site asserting on two other pages a fact this page has established
it cannot source, and asks for one of two things: fix those pages in this merge, or open an issue and
cite it in `inclusion_rationale` so the disclosure points somewhere. Neither is done here. The first
is deviation E's decision, and the second writes an issue number into a page field after the last
review round, which is Julie's call at merge rather than mine at Ship.
