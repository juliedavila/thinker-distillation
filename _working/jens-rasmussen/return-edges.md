# Jens Rasmussen: return-edge plan

Drafted at stage 4 on 2026-10-05, to be applied at Ship by a later serial stage. **Nothing here has been applied; no neighbour page was edited.** Re-read this plan against the finished page before applying it: chase names, counts, possessives and byline order, as well as rewritten sentences (calibration, Process and Return edges).

Four of the five neighbours already link to Rasmussen, so most of this plan repairs existing labels rather than adding edges. Neighbour ledger status, checked 2026-10-05: `david-woods` and `sidney-dekker` have no `facts.md` and `fact-ledger.ts` exits 1 on both before any edit, so running it after the edit proves nothing; `james-reason`, `richard-cook` and `erik-hollnagel` have ledgers and exit 0. Every citation below is to the Rasmussen ledger (`_working/jens-rasmussen/facts.md`).

Wording rule for every label: his word is "migration"; "drift" appears only as the later literature's word or inside a quoted title ([S:11]). No priority verb ("first", "coined", "introduced", "named", "originated"). No backticks and no edge-type names in label text.

---

## 1. david-woods (no ledger): repair the existing edge and one frame role

**Existing edge** (`adjacent_thinkers`, `target_slug: jens-rasmussen`, `edge_type: antecedent`, `strength: secondary`). Keep the edge type: it is already on the page, and changing it to `parallel` is a separate decision; this plan changes only the label. Current label:

> The Danish safety-science theorist whose drift-toward-boundaries model underlies the Law of Stretched Systems. Rasmussen 1997 is the antecedent paper.

Two defects: Woods's own 2002 text credits "Rasmussen, 1986; Hirschhorn, 1997" for the general law, which is the 1986 book and not the 1997 paper ([S:35]); and "drift toward boundaries" is not Rasmussen's phrase ([S:11]).

**Replacement label:**

> Woods's own 2002 statement of the law cites Rasmussen's 1986 book on information processing and human-machine interaction, with Hirschhorn, for the more general law of adaptive systems behind it. Rasmussen's 1997 paper describes work moving toward the boundary of acceptable performance, and calls the movement migration.

Sentence check against the Rasmussen page's own Woods label (one line per sentence):
- Sentence 1 compared with page sentence 1 ("Woods's 2002 statement of the Law of Stretched Systems presents it as one case of 'a more general law of adaptive systems', citing 'Rasmussen, 1986; Hirschhorn, 1997'..."): same fact, different construction; no shared quotation, no shared clause order (book named in prose here, quoted citation there). Near-duplicate risk: moderate. Ship should re-read both side by side.
- Sentence 2 compared with page sentence 2 ("Hochstein reads Woods's competence envelope..."): different proposition (states the migration model and his word for it; the page states Hochstein's contrast). Compared also with the Rasmussen tagline ("modelled work migrating, under pressure for less effort and lower cost, toward the boundary of acceptable performance"): shares only the noun phrase "the boundary of acceptable performance", which is the frame's name. An earlier draft of this sentence repeated the tagline's "under pressure for less effort and lower cost" and was reworded at stage 4.

Ledger: [S:35] (sentence 1), [S:10] [S:11] (sentence 2). Byline: Woods 2002 sole author ([S:35]).

**Frame repair** (`named_frames`, `concept_slug: law-of-stretched-systems`, `co_originators` entry `slug: jens-rasmussen`; find it with `rg -n -A3 "slug: jens-rasmussen" src/content/thinkers/david-woods.md`, the first hit after `law-of-stretched-systems`). Current role: `theoretical predecessor (Rasmussen's drift toward boundaries)`. Replacement role:

> credited with Hirschhorn for the general law of adaptive systems, citing his 1986 book (Woods 2002)

Ledger: [S:35]. Quote the YAML value if it gains a colon followed by a space.

**Leave alone:** Woods's `background` ("The intellectual lineage runs through Jens Rasmussen's safety-science work") and the Dekker edge label's "Rasmussen sits behind both" agree with the record ([S:35], [S:38]). The new-view-of-human-error role ("theoretical predecessor") has no holder credit on file; the Rasmussen page neither repeats nor contests it.

## 2. sidney-dekker (no ledger): repair the existing edge; flag the frame

**Existing edge** (`target_slug: jens-rasmussen`, `edge_type: antecedent`, `strength: secondary`). Keep the type. Current label:

> Danish safety scientist whose drift-toward-boundaries model underlies *Drift Into Failure*. The intellectual grandfather of the resilience-engineering tradition.

Defects: "drift-toward-boundaries" is not his phrase ([S:11]); the claim about the 2011 book rests on nothing read ([S:38] covers only the 2013 paper); "intellectual grandfather" has no source ([S:43]).

**Replacement label:**

> Dekker's 2013 paper with Shawn Pruchnicki cites Rasmussen 1997 for the drift account at its centre. Rasmussen called the movement migration, driven by an effort gradient and a cost gradient.

Sentence check against the Rasmussen page's own Dekker label:
- Sentence 1 compared with page sentence 1 ("Dekker and Pruchnicki's 2013 paper on drifting into failure builds its account of operations nudged toward their boundaries on 'Rasmussen 1997'..."): same paper and same credit, different clause; no shared phrase beyond the citation itself. An earlier draft shared "operations nudged toward their boundaries" and was reworded at stage 4. "The drift account at its centre" rests on [S:38]'s "nudging a system's operations closer to its boundaries (Rasmussen 1997)" inside a paper titled "Drifting into failure".
- Sentence 2 compared with page sentence 1 (no second sentence on the page label): different proposition. Compared with the Rasmussen migration gloss ("The people doing it find 'an effort gradient', management supplies 'a cost gradient'"): same fact in different words; acceptable on a neighbour card, which names the new thinker.

Byline: Dekker and Pruchnicki, Dekker first ([S:38]). No possessive "Dekker's" on the 2013 paper without "with Shawn Pruchnicki" in the same clause.

**Frame flag, not a fix:** Dekker's `drift-into-failure` is `attribution_kind: original`, `primary_author: sidney-dekker`, with no `derived_from` and no Rasmussen credit, while [S:38] shows the 2013 drift paper building on Rasmussen 1997. Seat 1 proposed adding `derived_from` or a co-originator role at Ship; seats 3 and 5 said to route it to a later reconcile pass. `derived_from` takes a `concept_slug`, and the Rasmussen frame is `migration-toward-the-boundary`, so the mechanical form is `derived_from: migration-toward-the-boundary`. This is a change to Dekker's attribution on a page with no ledger and on a source about a paper rather than the 2011 book the frame's `source_link` names; **put it to Julie as a decision**, and apply nothing to the frame without her call.

**Also flag:** Dekker's `thirty_second_take` says he "took the academic new-view-of-human-error frame from Rasmussen and Woods". No ledger line supports Rasmussen as the source of that frame for Dekker. Not touched by this plan; carry to the Dekker recheck.

## 3. james-reason (ledger, exits 0): agree; no change

Existing edge (`edge_type: antecedent`, `strength: primary`) says "Two credits on the record": the latent-error notion "was implicit in the Rasmussen and Pedersen (1984) discussion", and GEMS maps error types onto the SRK levels. Both agree with [S:39] and [S:23]. The Rasmussen page's own Reason label adds the other direction (Rasmussen 1990 crediting "resident pathogens (Reason, 1989)", [S:28]). **No change.** Optional, Ship's call: a sentence on Reason's card noting that Rasmussen's 1990 paper credits Reason for "resident pathogens" would make the two-way credit visible from both pages; if added, it must not repeat the Rasmussen page's label sentence ("Rasmussen's 1990 paper attributes 'resident pathogens' to Reason (1989)"), and it needs a line on the Reason ledger (its `[S:n]` for the 1990 Rasmussen paper, or a new one citing the Rasmussen ledger's [S:28] URL).

## 4. richard-cook (ledger, exits 0): agree; no change

Existing edge ("Co-author of the 2005 going solid paper, whose model builds on his dynamic model of risk") and the going-solid co-originator role agree with [S:34] ("Rasmussen's dynamic model of risk and safety"). Cook first in byline, as the page already has it. **No change.**

## 5. erik-hollnagel (ledger, exits 0): add a parallel edge

No edge to Rasmussen today. Hollnagel already carries 9 edges, so a new one collapses something unless hand-set deep. **Add at the end of `adjacent_thinkers`** (append, so no claims-map index shifts):

```yaml
  - target_slug: jens-rasmussen
    display_name: Jens Rasmussen
    edge_type: parallel
    edge_label: >
      A 2013 framework for analysing everyday adaptations in high-risk work,
      by Rankin, Lundberg, Woltjer, Rollenhagen and Hollnagel, cites
      Rasmussen's 1986 book for the way pressure moves work toward the limits
      of what is acceptable for safety.
    strength: secondary
    render_tier: deep
```

Sentence check against the Rasmussen page's own Hollnagel label ("Rankin, Lundberg, Woltjer, Rollenhagen and Hollnagel (2013) set the migrating effect Rasmussen described in 1986, forces of cost and effectiveness pushing work toward the edge of what is acceptable, beside the law of stretched systems."): one sentence each; they share the byline, which must stay full and in order ([S:37]), and the 1986 date. The page label carries "forces of cost and effectiveness" and the stretched-systems link; this label carries neither (an earlier draft repeated the first and was reworded at stage 4). Re-read against [S:37] after any rewording: the paper's sentence is about Rasmussen 1986's "migrating effect", and the linkage to Woods's law is the authors'.

Ledger: Hollnagel's own ledger has no line for Rankin et al. 2013. A `parallel` edge requires none, but a claims-map line on `_working/erik-hollnagel/page-claims.md` under "Other factual prose" should cite the Rasmussen ledger's [S:37] URL by adding the line to Hollnagel's `facts.md` with the next free `[S:n]` (check the highest id there before choosing). Predicted landing: deep by hand, so no existing Hollnagel edge loses its card; confirm in the build's collapse lines.

## Off-site neighbours

`nancy-leveson` (#82) and `lorin-hochstein` (#87) have no pages, so there is no return edge to write. When either page is drafted, its inbound-claims run will print the Rasmussen page's labels for them.

## Not linked, recorded for Ship

`kelly-shortridge.md` mentions Rasmussen in `inclusion_rationale` only (SecObs footnote, [S:18]); the Rasmussen page names her in `why_they_matter_as_a_thinker` and `limits[2]` without an edge, because the seven-edge cap binds. No return edge is planned.

## Build observations on the candidate tree, 2026-10-05 (before any return edge is applied)

`bun run build` passes. Two lines concern this page: `erik-hollnagel has no edge back to jens-rasmussen` (closed by item 5) and `david-woods: collapsed jens-rasmussen to stay inside the neighbor caps`. The second means the Woods card for Rasmussen goes to the drop-down the moment his page exists, because the Woods frames already credit him as a co-originator twice. So the repaired Woods label in item 1 will render collapsed, and a merge request saying the Woods page links to Rasmussen describes a link a reader finds only in the "more" disclosure. This tree is `main` plus this page and nothing else; recompute after the batch is merged, per the Return-edges checklist.

## Cold reader editor, 2026-10-05: changes on the Rasmussen page that this plan must be re-read against

Nothing in this section edits a neighbour; it records page changes Ship has to chase into the plan above.

- **Item 1 (Woods).** The Rasmussen page's Woods label lost its second sentence ("Hochstein reads Woods's competence envelope ... as an extension of the single safety boundary in Rasmussen's model"), because `limits[3]` carries the same contrast. The page label is now one sentence, the 2002 citation of the 1986 book. The sentence check in item 1 that compares "page sentence 2" no longer has a target; the replacement Woods-side label's second sentence (the migration model and his word for it) now repeats nothing on the Rasmussen card. Sentence 1 still shares its fact with the page label, so the side-by-side re-read the item asks for still applies.
- **Hedges.** The page now carries the 1997 paper's hedges ("will very likely", "are likely to degenerate") wherever it states the migration or the decay of defences. The replacement Woods label says the 1997 paper "describes work moving toward the boundary of acceptable performance", and the Dekker label says the movement is "driven by an effort gradient and a cost gradient". Both describe the model and neither states its outcome as certain, so neither needs a change; Ship should not add an outcome clause ("produces", "degrade") to either without the hedge.
- **Byline.** The page now gives the 2006 Swiss cheese history as "a 2006 history by Reason, Hollnagel and Paries" and going solid as Cook and Rasmussen's. Item 3's optional Reason-side sentence, if Ship adds it, keeps the same full byline.
- **Antecedent search.** `[S:52]` now records the antecedent search for the migration frame: no earlier holder of the boundaries-and-gradients model, and earlier holders (Turner 1978, Starbuck and Milliken 1988) of the broader idea of gradual erosion toward failure. No neighbour label in this plan credits him with that broader idea, and none should at Ship.

## Ship, 2026-10-05: what was applied

Re-read against the finished page (after the cold reader editor) before applying, chasing names, counts, possessives, byline order and hedges.

- **Item 1 (Woods), applied with two changes to the planned wording.** The planned first sentence ("Woods's own 2002 statement of the law cites Rasmussen's 1986 book ... for the more general law of adaptive systems behind it") shared its opener, its clause order and "general law of adaptive systems" with the page's own Woods label, so it failed the no-near-duplicate rule. The label now opens from the neighbour's side with what Rasmussen adds (the 1997 migration model, hedged "very likely" per [S:10]) and gives the 1986 citation second, as one of the examples Woods cites from "many researchers" ([S:35]). Sentence check: sentence 1 against the page's tagline shares only the frame name "the boundary of acceptable performance"; sentence 2 against the page's Woods label shares the fact and no clause order. The frame role became "cited with Hirschhorn and others for the general law of adaptive systems (his 1986 book, in Woods 2002)": the planned "credited with Hirschhorn" narrowed Woods's "many researchers (e.g., Rasmussen, 1986; Hirschhorn, 1997)" to two names. Quoted YAML. Edge type left `antecedent`, as planned. The Woods edge renders collapsed, as stage 4 predicted (`david-woods: collapsed jens-rasmussen`).
- **Item 2 (Dekker), applied.** Byline written as "a 2013 paper by Dekker and Shawn Pruchnicki" in place of the planned possessive, following the calibration rule on multi-author works. Sentence 2 shortened to "Rasmussen's own word for the movement is migration, under an effort gradient and a cost gradient" ([S:10] [S:11]); no outcome clause. The frame question (`derived_from: migration-toward-the-boundary` on `drift-into-failure`) and the `thirty_second_take` "from Rasmussen and Woods" line were not touched; both go to Julie in the merge request.
- **Item 3 (Reason) and item 4 (Cook): no change.** The optional Reason-side sentence was not added: it would need a new Reason ledger line and the page's own Reason label already shows the credit running both ways.
- **Item 5 (Hollnagel), applied as planned**, appended at the end of `adjacent_thinkers` (index 9), `render_tier: deep`. Hollnagel ledger gains `[S:56]` (copy of Rasmussen `[S:37]`, the Rankin et al. 2013 quotation) and `page-claims.md` gains `adjacent_thinkers[9] [S:56]`. `fact-ledger.ts erik-hollnagel` exits 0, 56 facts. The build no longer prints `erik-hollnagel has no edge back to jens-rasmussen`.
- **Build after applying:** exit 0. Collapse lines identical to the stage 4 observation except the closed Hollnagel line; no existing edge on any neighbour lost its card.

## Julie's review, 2026-10-06

- sidney-dekker: the drift-into-failure frame gains `derived_from: migration-toward-the-boundary`, on [S:53] (the 2011 book cites Rasmussen and Svedung 2000 in two chapters, and that work states the migration model). Dekker's page has no ledger, so the fact sits here.
- Still open for Dekker's next recheck: his thirty_second_take credits the new view of human error to "Rasmussen and Woods", and nothing on file supports the Rasmussen part.
