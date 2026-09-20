# Prior art: what to borrow, and in what order

Three research lanes run 2026-09-18, against a target roster of 40 to 60 thinkers. Detail and
citations live in `lane-a-knowledge-organization.md`, `lane-b-algorithms.md` and
`lane-c-editorial-systems.md`. This file is the synthesis and the recommended order of work.

## The one-line verdict

The site is ahead of every system surveyed on intake and behind all of them on everything that
happens after a page ships.

Ahead: `scripts/fact-ledger.ts` derives its required-field list from the page itself, so a new
frame, critic edge or book cannot be forgotten. No system in any of the three lanes has a
completeness check of that kind. Behind: nothing rechecks a shipped page, and the schema has
changed six times in four months.

## The round 3 narrowing rests on evidence that may be contaminated

Added 2026-09-20 from Lane C section 8.

On 2026-09-17 round 3 was cut from five seats to one adjudication pass, on the grounds that four
recorded runs of a five-seat round 3 accepted unanimously and changed no page. Bornmann's 2010
meta-analysis of 70 reliability coefficients in journal peer review puts a warning directly on that
reasoning: mean kappa .17, and the conclusion that "studies that report a high level of IRR are to
be considered less credible than those with a low level of IRR." Unanimity among reviewers who have
read each other is a signal to distrust, not a result.

Every one of those four round 3 runs used seats required by `briefs/review-round3.md` to read the
round 1 and round 2 transcripts first. So the unanimity is as consistent with anchoring as with
genuine convergence, and the two have opposite implications:

- If the seats genuinely converged, round 3 was ceremony and the narrowing is right.
- If they were anchored, the unanimity says nothing about the page, and the narrowing replaced an
  anchored five-seat round with a **more** anchored single pass, since the adjudicator reads both
  transcripts by design. The fix in that case is fresh eyes, not fewer eyes.

**Cheapest decisive experiment: run one round 3 with seats that have not read the earlier
transcripts.** One run separates convergence from anchoring. Until then the narrowing is a
reasonable bet resting on an untested premise, and it should be recorded that way rather than as a
settled finding.

## The Council should not shrink, and the reason is structural

The screening literature does not license cutting seats, because it measures a different thing.
Every study in that field measures **replication**: N reviewers applying one criterion set. The
Council does **decomposition**: five different criterion sets. Cutting to two does not halve the
error on one question, it deletes three questions.

The hypothesis is also unfalsifiable from that literature: the curve is only ever measured from one
reviewer to two, because guidelines stop at "two plus a mediator," so no study compares three
against five. Absence of evidence that five beats two is not evidence that five is wasteful.

The nearest direct test argues the other way. Stoll et al. 2019 (doi:10.1002/jrsm.1369) compared
spending the second reviewer at both stages against late only: complete dual review found an extra
6.6 to 11.9% of eligible studies at full text, limited dual review only 4.4 to 5.3%. Moving review
effort later lost about half the benefit.

**Four economies that are evidenced and leave all five questions standing:**

- **Sharpen the briefs before adding seats.** Waffenschmidt 2019: experienced reviewers missed 3%,
  inexperienced 13%. That four-fold expertise gap is larger than the single-versus-double gap. This
  is quantitative support for `calibration.md` being the highest-leverage file in the repository.
- **Escalate on two failures without completing the round.** Nama 2021: single-reviewer exclusion
  cost 8.6% sensitivity in general, but 1.2% when restricted to items failing two or more criteria.
- **Sample the non-auditing seats across a batch** rather than running every seat on every page.
  Prentice 2026 found sensitivity and specificity flat as the co-screening proportion dropped.
- **Keep the model-driven adjudication pass.** Vivekanantha 2026 (doi:10.1002/ksa.70462) validated
  exactly this shape, a model as third reviewer over dual screening, at 93 to 100% sensitivity.

## A correction to work merged today

MR !17 claimed that the collapse rank "reads only off its own page, so adding a thinker cannot
reshuffle an unrelated one." That is half true and the claim was overstated.

`collapseRank` is genuinely local. Eligibility is not. `hasPage` is global state, and an on-site
neighbour is unconditionally foreground, so the moment a thinker publishes, every page citing that
person promotes the edge from rank bucket 2 or 3 to bucket 0 and has to evict an off-site
neighbour. Publishing Larson did exactly that to Fournier, Forsgren, Majors and Dekker.

So MR !17 removed the human decision, which was the toll worth removing, but it did not remove the
churn. Lane B's diagnosis is sharper than the one the change was built on: the churn is not score
noise, it is a binary feature at maximum weight flipping. That matters because most of the
rank-stability literature addresses score perturbation and does not apply until the two-bucket jump
is fixed.

## Recommended order

### 1. Fix the two-bucket jump, then add hysteresis

Soften the `hasPage` promotion so publishing a thinker does not forcibly reorder every page citing
them. Then add a dead band on demotion: `render_tier` already persists the previous decision in
git, so the prior state is available and a small bias toward keeping it costs nothing.

Measure before and after rather than asserting an improvement. Jaccard on the foreground set plus
the Fagin, Kumar and Sivakumar top-k distance (SIAM J. Discrete Math, 2003) gives a number for
churn per published page.

**Added 2026-09-20. Hysteresis now has empirical backing rather than being a hunch.** Ufimtsev and
colleagues (CIKM 2016) measured top-k churn under random edge additions using exactly that Jaccard
metric, and found churn concentrates *within* score clusters and rarely crosses them. A dead band
therefore suppresses most of the movement while leaving genuine rank changes intact, which is the
precise behaviour wanted here.

Segarra and Ribeiro (IEEE TSP 2016, doi:10.1109/TSP.2015.2486740) prove degree, closeness and
eigenvector centrality are Lipschitz-stable while standard betweenness is unstable and
discontinuous, tested from n=10 to 200, the only source found whose range actually contains our
N=50. At n=100 degree moves 1.8 rank positions under perturbation against betweenness at 5.9. So if
a graph signal is ever added to the rank, degree is the safe one and betweenness is not.

**The weights in `collapseRank` are the open problem, and there is a paper about exactly it.**
Asudeh, Jagadish, Miklau and Stoyanovich, "On Obtaining Stable Rankings," PVLDB 12(3) 2018,
doi:10.14778/3291264.3291269. The six buckets shipped in MR !17 are integers chosen by hand, and
tuning them by feel would reintroduce the opacity that disqualified PageRank. This paper treats the
weight vector geometrically and asks what fraction of a surrounding region produces the same
ranking, handling the top-k case explicitly, with algorithms both to assess a given weighting and
to choose a stable one. It dissolves that dilemma rather than picking a side of it.

**Honest correction carried up from the lane:** no study has measured PageRank or HITS stability
under node addition at any graph size, and none examines either below 100 nodes. The verdict
against PageRank in this file stands on the other two arguments, wrong question and editor
opacity. The stability argument is an inference, not a measurement, and should be read that way.

### 2. Lens positions are an allocation problem, and novelty is tested inside the cluster

**Added 2026-09-20.** Topic Detection and Tracking asks problem 2 literally: does this new document
carry information the stream has not already carried? The transferable result is Yang, Zhang,
Carbonell and Jin (doi:10.1145/775047.775150): classify a document into a topic first, then test
novelty *only within that topic*. Mapped here, a new extension is compared against the pages
sharing its Lens position and frames, roughly six pages rather than forty-five. Cheaper, and by
their results also more accurate, because comparing against the whole corpus buries the signal.

That composes with the allocation idea below rather than competing with it. Allocate positions to
spread the roster, then test novelty only inside the resulting cluster.

One caution from Aksoy and colleagues (doi:10.1002/asi.21697): a language-model scorer
significantly beat cosine similarity on this task, so the similarity function needs validating
rather than defaulting to embeddings because embeddings are the obvious reach.

The best unrequested idea in the research. Eight positions across forty pages cannot be managed by
catching collisions after drafting, which is how the P:5 three-way overlap reached a shipped page
through fifteen seat reviews. Build a cost matrix of page against position and solve it with the
Hungarian method before drafting. Exact, milliseconds at this size, and it prevents rather than
detects.

### 3. The maintenance layer, which is the whole gap

Three mechanisms, in increasing cost:

- **A retirement state.** The Stanford Encyclopedia moves an unrevised entry to an archive "until
  such time as the entry is revised." That is the third option between leaving a stale page up and
  deleting it. One field, one build check, one home-page filter.
- **A decay class per fact.** Wikipedia's `{{As of}}` tags individual statements, not articles, and
  files them into dated queues. `facts.md` already carries a check date on every line, so adding
  permanent, slow or fast makes the recheck queue compute itself.

  **Corrected 2026-09-20.** An earlier draft of this file implied the queue could be prioritised by
  predicting which pages will rot. It cannot. Shojania 2007 is the firmest number in the whole
  research: median survival before a systematic review needs updating is 5.5 years, but 23% go
  stale within two years, 15% within one, and 7% were **already stale at publication**. The
  load-bearing result is the negative one, that no feature of the original review predicted whether
  it would need updating within two years. Decay classes are a property of the fact type, such as a
  job title against a publication date, not a prediction about the page. Scheduled surveillance is
  the only approach with evidence behind it. Ahmadzai 2013 gives the cadence, annual rather than
  six-monthly, and the budget case, since roughly 70% of rechecks came back low priority. Butler
  2023 gives the ratio to expect: 30 search updates produced 3 published revisions. Murad 2023 is
  the citation for retirement triggers.

  That 7%-stale-at-publication figure also argues for a first recheck scheduled shortly after a
  page ships, not years later.
- **Cheap recheck of shipped pages.** Featured Article Review separates a fix-discussion phase from
  a delisting phase, and runs the first cheaply. One seat rather than five is what makes rechecking
  happen at all. This is the answer to schema drift.

### 4. Return edges should be entailed, not warned about

Three standards independently agree the site is on the weakest option. SKOS makes `skos:related`
symmetric by entailment; ISO/IEC 13250 Topic Maps stores a relationship as one association with
typed roles, so no second copy exists to drift; ISO 25964 names auto-creation of the reciprocal as
preferred, with a warning as the floor. The site warns.

**Upgraded 2026-09-20 from argument to measurement.** Suominen and Mader ran the qSKOS quality
checks over 24 published vocabularies and found unidirectional relations in all but three. Hand
authoring both halves of an edge fails everywhere, for everyone, at every scale, which is the
strongest possible argument that the site's return-edge warning will keep firing forever. The
reference implementation, Skosify, fixes it by derivation: it enriches the vocabulary with
bidirectional relationships rather than reporting the gap.

Two further qSKOS checks are recommendations elsewhere in this file, already named and defined by
someone else. **Valueless Associative Relations**, where two concepts are siblings and also carry
an associative relation that is therefore unnecessary, appeared in 16 of the 24 vocabularies.
**Hierarchical Redundancy** is the H 370 transitive rule under another name. Their shared
justification names the cost of over-linking directly, as the risk that compilers overload a
thesaurus with valueless relationships and damage precision.

The site has already made this move twice, for long-read chapters and concept holders, and stopped
short on edges.

### 4b. The cap of seven has no evidence behind it, and does not need any

Added 2026-09-20. The closest experimental test is Melguizo, Salmerón, Madrid and Van Oostendorp:
42 participants, a 21-page hypertext, three links against eight, a range that brackets the site's
cap. The effects of link count were not significant, with no increase in cognitive load and no
effect on learning. That result is weak on its own terms, a small-N null in a low-tier journal
against a heavily cited review pointing the other way, so the defensible conclusion is that the
literature is divided and nobody has published a number. Kochen and Tagliacozzo asked this exact
question in 1968 and produced a user-relative optimum rather than a threshold.

**So keep the cap, and restate it in SCHEMA.md as a layout budget rather than a comprehension
finding.** What decides which edges earn a place is the redundancy criterion, which does have
support. That is what MR !17 shipped.

### 4c. Promote `further_in`

The same study found that reading order beat link count outright, and that link annotation improved
comprehension. Antonenko and colleagues measured one-sentence hover summaries significantly
decreasing cognitive load on EEG. The site's mandatory `edge_label` is already a stronger,
editor-written version of the annotation finding, so that one is banked.

Reading order is not. `further_in` carries `start_here`, `if_you_want_depth` and
`if_you_want_breadth`, and it sits ninth of eleven rendered sections. It is the most undervalued
element on the page and the cheapest thing on this list to fix.

### 5. Two vocabulary fixes

- **`antecedent` is overloaded.** On the Majors page alone it carries at least four distinct
  relationships that the prose disambiguates every time: Kálmán gave the word, Scuba gave the
  pattern, Sridharan holds the opposed position (filed as `parallel` with an apologetic label), Yen
  co-built the artifact. ISO 25964 splits the equivalent relation three ways, each with a declared
  inverse.
- **`co_originators.role` should be a closed vocabulary.** It is free text today. MARC relator
  terms and CRediT (ANSI/NISO Z39.104-2022) are the models.

### 6. The exclusion record

Cochrane mandates at least one explicit reason per excluded record; PRISMA 16b scopes that to near
misses. Wikipedia's perennial-proposals clause supplies the reopening rule: you may re-propose, but
you must address the rebuttals raised last time. Saxe was rejected with "recheck 2027" and no
machinery behind it. Split the park state into parked-early, parked-unproven and rejected, and give
each a recheck date with a give-up rule.

## Rejected, with reasons

- **PageRank.** Wrong question: it ranks global node importance, and this is local edge ordering.
  Also a churn amplifier and opaque to an editor. HITS contributes the hub versus authority
  distinction, which maps onto `hosts` against `antecedent`, without running any eigenvectors.
- **MinHash and SimHash.** Approximations for 1,225 comparisons that are already exact and free.
- **DPP, facility location, k-center.** All solve subset selection, and nothing here is selected.
- **LCSH H 370 as a prohibition.** Its transitive-redundancy rule is the right instinct and it
  independently justifies the Woods demotion on Majors, but tested against this graph it flags 56
  edges, which is most of the site. It was written for a strict subject hierarchy, not a dense
  associative graph. Keep it as a ranking input, never as a prohibition.
- **Authority control as the attribution model.** VIAF and LC/NACO establish who someone is, not
  who originated what. The hypothesis does not hold.
- **Frames as facets.** Not facets in Ranganathan's sense. The site's ten enum fields are the real
  facets, and nine of them are unnavigable.

## The cost question, settled

At fifty nodes nothing is ruled out by cost. PageRank, HITS, betweenness, DPP eigendecomposition
and exact Kemeny all run sub-second. Every verdict above rests on fitness and explicability. Any
future proposal that argues from complexity at this scale is decoration.

## One quiet attack worth closing

Without a defined post-ship edit threshold, the cheapest route to unreviewed text on the site is to
ship a thin page and edit it afterwards. The Stanford Encyclopedia closes this by refereeing
substantive updates.
