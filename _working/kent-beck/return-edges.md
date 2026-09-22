# Kent Beck: return edges

Stage 4 of `add-thinker`. The Kent Beck page links to three thinkers who have pages on this site:
Martin Fowler, Nicole Forsgren and Rich Hickey. The other four neighbours (Jimmy Koppel, David
Heinemeier Hansson, Ward Cunningham, Larry Constantine) have no pages here and need nothing.

These are descriptions only. **Do not edit the three target pages from this run.** A later serial
stage applies them, because two candidates drafting at the same time collide on a shared
neighbour. Ross Anderson is being drafted in the same batch and may also be planning an edge on
one of these pages.

Two of the three cost nothing in neighbour count. Fowler already carries a `kent-beck` edge, and
Forsgren's is a retype in place. Only Hickey gains an entry, and that one forces a collapse.

Every label below was drafted from the neighbour's side, opening with what Beck adds to that page,
then checked against the label the Beck page carries for the same pair so the two do not restate
each other.

---

## 1. `src/content/thinkers/martin-fowler.md` — no new edge, one relabel to decide

Fowler already carries Beck at `adjacent_thinkers[0]`, `edge_type: extends`, `strength: primary`,
foreground [S:47]. No edge needs adding and the neighbour count does not move.

The existing label does need a decision, because two clauses of it are claims this research
contradicts:

```
      The deepest collaborator. Co-authored *Refactoring*, defined TDD,
      coined code smell with Fowler, contributed the two-hat rule and the
      "make change easy" motto. Most of what Fowler argues, he argues
      alongside Beck.
```

- **"defined TDD"** sits against Beck's own account. He calls his role "rediscovering" it and
  traces the technique to an unnamed older book [S:19]. The new page marks the frame `extended` on
  that evidence, and a reader moving between the two pages would find the site asserting both.
- **"coined code smell with Fowler"** is weaker than Fowler's own credit, which is that Beck coined
  the term outright while helping with the Refactoring book [S:20]. Fowler's own frame block
  already models it the stronger way, `attribution_kind: co-authored` with `primary_author:
  kent-beck` [S:47], so the edge label contradicts the frame entry on its own page.

Proposed replacement, same type and strength, no count change:

```yaml
    edge_label: >
      The deepest collaborator. Co-authored *Refactoring*, wrote *Planning
      Extreme Programming* with Fowler in 2000, and supplied the vocabulary
      Fowler cataloged: Fowler's own account is that Beck coined "code smell"
      while helping with the Refactoring book. Beck calls his own part in
      test-driven development a rediscovery rather than an invention. Most of
      what Fowler argues, he argues alongside Beck, and the division of labor is
      that Beck names and prices a practice while Fowler catalogs it and keeps
      the attribution attached.
```

Ledger note: Fowler's page has no `facts.md`, so `bun scripts/fact-ledger.ts martin-fowler` exits 1
on `main` and will keep exiting 1 after this edit. That is the known legacy state in
`calibration.md`, not a regression from this change. The edit adds no `critiques` or `antecedent`
edge, so it adds no required ledger line.

---

## 2. `src/content/thinkers/nicole-forsgren.md` — retype in place, not a new edge

This is the load-bearing correction of the run, and all five inclusion seats reached it
independently. Forsgren carries Beck at `edge_type: critiques`, `strength: secondary`,
`render_tier: deep`, lines 396 to 405 [S:46]. The artifact behind that edge is the Beck and Orosz
response to McKinsey [S:42]. Forsgren is named nowhere in Part 1 or Part 2 [S:45], and the target
is McKinsey's framework and effort measurement [S:43]. This is the Larson pattern from
`calibration.md`: a shipped `critiques` edge asserting what its own primary sources do not carry.

Replace the whole entry with:

```yaml
  - target_slug: kent-beck
    display_name: Kent Beck
    edge_type: parallel
    edge_label: >
      Beck supplies the first-person account of a measurement coming apart that
      this page's own Goodhart limit describes in the abstract. At Facebook,
      survey scores "started cropping up in performance reviews," then became
      goals, then rolled up so that a manager's score was the average of their
      reports' scores, after which managers negotiated with individual
      contributors for better scores. His 2023 response with Gergely Orosz
      argues against McKinsey's framework for measuring effort rather than
      outcome. It does not name this page's author, and it does not treat DORA
      and SPACE alike.
    strength: secondary
    render_tier: deep
```

Three things the retype settles:

- **Type.** `parallel` is what the sources support. Keeping `critiques` would need a source where
  Beck engages Forsgren or DORA by name, and research looked for one specifically and found none.
- **Ledger.** `critiques` and `antecedent` are the two edge types `decay.ts` requires a ledger line
  for. Retyping to `parallel` removes a required line from Forsgren's page rather than adding one,
  which matters because that page's `facts.md` does exist and its ledger should keep passing.
- **Wording.** The last sentence is deliberate. [S:45] shows Beck and Orosz writing that "All DORA
  metrics measure outcomes or impact" while saying of SPACE that it is "not only outcomes and
  impact, as with DORA," so no label may read as an even endorsement of both.

**A second reason to do this one first.** With the Beck page in the tree, the build now prints
`[distillery] warning: nicole-forsgren: critic kent-beck has a page here and should be strength:
primary (or set editorial_demote_to)`. That warning did not exist before, because the edge pointed
at a thinker with no page here. The rule behind it (SCHEMA 4.11) is that a critic with a page on
this site is `primary`, and promoting this edge to primary would be the wrong fix, since the edge
is not a critique at all. Retyping it to `parallel` clears the warning and corrects the record in
the same edit.

Note for whoever applies it: Forsgren's page also carries DHH at `critiques`, deep. That edge has a
different target and is not touched here. The Beck page says so in its own DHH label so the two
pages do not read as contradicting each other.

---

## 3. `src/content/thinkers/rich-hickey.md` — new edge, and it forces one collapse

Append to `adjacent_thinkers`, at the end, so no earlier index shifts and `page-claims.md` on that
page keeps addressing the edges it means.

```yaml
  - target_slug: kent-beck
    display_name: Kent Beck
    edge_type: parallel
    edge_label: >
      Beck reaches this page's conclusion from money rather than from meaning.
      Where Hickey argues that complecting independent concerns is what makes a
      program hard to reason about, Beck writes that the cost of software is
      approximately the cost of changing it, and puts coupling in the place
      where that cost accumulates. Neither man cites the other, and the two
      arguments arrive at the same advice about where design effort goes.
    strength: primary
```

**Count.** Hickey carries seven foreground neighbours today (Brooks, Fowler, Moseley and Marks,
Whitehead, Lange, Ousterhout, Willison), which is exactly `FOREGROUND_CAP`. Beck has a page here,
so the edge auto-surfaces and the page goes to eight. Since 2026-09-17 the build collapses rather
than failing, so this does not break anything, and it will print
`[distillery] warning: rich-hickey: collapsed ... to stay inside the neighbor caps`.

Working through `collapseRank` in `src/lib/checks.ts` by hand, the neighbour it will take is
**Alfred North Whitehead**. Lange is a critic (category 0). Ousterhout's credit appears nowhere
else on the page (category 3). Moseley and Marks and Whitehead are both secondary, both off-site,
and both already named in a frame's `co_originators`, which puts them in category 5 and ties them
at the top of the collapse order; the tiebreak takes the later authored position, which is
Whitehead. That is the outcome `calibration.md` predicts for this page, and it is the right one:
Whitehead keeps his credit inside `value-identity-state-time` and loses only a second mention.

Whoever applies this should confirm the warning names Whitehead and nobody else, and should not
hand-set `render_tier: deep` on anyone. The ranking is doing the job the editors used to do by
hand.

Ledger note: `rich-hickey` has no `facts.md` and exits 1 on `main`, same legacy state as Fowler.
`parallel` adds no required line, so the edge is safe to add to a page whose ledger cannot be run.

---

## Not return edges, recorded so a later run does not add them

- **Simon Willison.** He quoted Beck on augmented coding in December 2025 [S:31] and that quotation
  appears in the Beck page's Live Edge prose, which is the right home for it. No adjacency edge was
  added in either direction, deliberately. Willison sits at seven foreground neighbours already, so
  a Beck edge there would force a collapse on his page too, and the edge it would buy is one
  quotation about junior engineers. The inclusion Council reached the same place from the other
  side, putting Willison in the deep tier "unless augmented coding is foregrounded," and it is not.
  If augmented coding ever reaches `named_frames`, add the edge then and expect to pay for it.
- **Ward Cunningham and Larry Constantine** have no pages here. Both are neighbours on the Beck page
  in the deep tier and both are named in `co_originators`, so if either ever gets a page the return
  edge is already implied by the frames.
- **Jimmy Koppel and David Heinemeier Hansson** have no pages here. Koppel's is the page's only
  `critiques` edge and should not be demoted if the neighbour list ever grows.
- **Fred Brooks.** Tempting, and left out. Beck's asymmetry between structure and behavior changes
  is not Brooks's essential-versus-accidental distinction, and nothing in the research shows either
  man citing the other. Inventing that edge would be the sameness trap rather than a relationship.
- **Ross Anderson** is being drafted in the same batch as this page. No edge exists in either
  direction and none should be invented to create one.
