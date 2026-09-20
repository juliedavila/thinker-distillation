# Lane B: Prior art: graph ranking, stability, novelty and diversity

Research log. Written incrementally; each entry recorded when confirmed. Every URL
below was fetched or searched during this pass and resolved at the time of writing
(2026-09-18).

## 0. The problems, as the code actually states them

Read before researching: `SCHEMA.md` §4.11 and §7, `src/lib/checks.ts`,
`src/lib/graph.ts`, `src/pages/thinkers/[slug].astro`.

**Problem 1: edge ranking.** `orderNeighbors` (`src/lib/checks.ts:83`) is the whole
ranking function today:

```ts
const rank = (n: Neighbor) => (n.hasPage ? 0 : 2) + (n.effectiveStrength === 'primary' ? 0 : 1);
const sorted = all.map((n, i) => ({ n, i })).sort((x, y) => rank(x.n) - rank(y.n) || x.i - y.i)
```

Four rank buckets (0,1,2,3) and file order as tiebreak. Caps enforced in
`runGraphChecks`: at most 5 foreground off-site neighbors, at most 7 foreground total
unless on-site alone exceeds 7.

The churn mechanism is now explicit and worth naming precisely, because it decides
which prior art is relevant. Publishing a new page flips `hasPage` false→true for
every edge pointing at that slug. That moves the edge from rank bucket 2 or 3 to
bucket 0, a two-bucket jump, past everything in between, and since on-site
neighbors are unconditionally foreground, it evicts an off-site neighbor at every
page that cited the newly-published thinker. So churn is not caused by a noisy
continuous score; it is caused by a **binary feature with maximum weight flipping**.
That matters: most rank-stability literature addresses score perturbation, which is
not this. The fix has to be in the ranking *function*, not only in the smoothing.

Scale: 40–60 nodes, ~3–10 edges per node. Small dense graph, built at build time in
Astro, single-threaded, no incremental requirement worth optimizing for. Every
algorithm below should be judged against the fact that N=50 means an O(N^3) method
runs in 125,000 operations, which is free.

**Problem 2: novelty.** Each page's `extension` (≤160 words) must cite at least one
of Julie's ~8 fixed Lens positions (`[P:n]`), per §7 step 2. With 8 positions and 40+
pages, position-uniqueness is exhausted. Need repeat-argument detection without a
reviewer reading every page. Note the corpus shape: ~40–60 documents of ~160 words
each, plus a claims map per page (`_working/<slug>/reading-claims.md`) that already
carries a per-sentence → source-ID mapping. That claims map is structured data and is
a stronger novelty signal than the prose; several methods below can consume it
directly.

---

# PROBLEM 1: EDGE RANKING

## 1.1 PageRank

**Primary citation.** Lawrence Page, Sergey Brin, Rajeev Motwani, Terry Winograd,
"The PageRank Citation Ranking: Bringing Order to the Web," Stanford InfoLab
Technical Report 1999-66, November 1999.
<http://ilpubs.stanford.edu:8090/422/>

**What it does.** Scores every node by the stationary distribution of a random walk
that follows an outgoing edge with probability d (the damping factor, conventionally
0.85) and teleports to a uniformly random node with probability 1−d. A node is
important if important nodes point at it. It is a *global* measure: every node's
score depends on every other node's score.

**Complexity at N=50.** Power iteration is O(iterations × |E|). With |E| ≈ 300 and
convergence in ~50 iterations at d=0.85, that is ~15,000 floating-point operations.
Microseconds. Cost is not the argument against it.

**The specific mechanism worth borrowing.** One thing, and it is not the score: the
*teleport-versus-follow split* is the idea that a ranking should blend a
structure-derived signal with a structure-independent prior. That is exactly the
shape a hybrid "editorial weight + graph weight" score wants. Borrow the shape, not
the algorithm.

**Verdict: DO NOT USE.** Three reasons, in descending order of force.

1. *It answers the wrong question.* PageRank ranks nodes globally. The problem here
   ranks **edges of one specific node**, locally. The foreground set for Komoroske's
   page is a property of Komoroske's neighbourhood, not of the site's global
   importance ordering. Using global PageRank as the edge sort key means every
   thinker page shows roughly the same names near the top, ordered by site-wide
   prominence, which is the opposite of what a neighbourhood section is for. The
   closest correct variant would be *Personalized* PageRank rooted at the page's
   node, which at least asks the local question, but see (3).
2. *It makes churn worse, not better.* PageRank is global, so adding one node
   perturbs every score in the graph. Ghoshal and Barabási (§1.5 below) showed
   analytically that PageRank rankings in random-topology networks are sensitive to
   exactly this kind of topology perturbation. A 40–60 node graph that gains a node
   every few weeks is the worst case for a global measure. The stated pain is churn;
   PageRank is a churn amplifier.
3. *It is uninterpretable to the editor.* Julie's override requirement implies the
   editor must be able to look at a demoted neighbour and understand why. "Its
   stationary probability under a damped random walk fell below the 7th" is not an
   answer an editor can argue with. A weighted sum of four named features is.

Honest counter-case: if the site ever wants a *global* "most load-bearing thinker on
this site" list, for a homepage, an index page, or an editorial sense of where the
graph's centre of gravity sits, PageRank is the right tool for that and costs
nothing. That is a different feature from §4.11.

## 1.2 HITS (hubs and authorities)

**Primary citation.** Jon M. Kleinberg, "Authoritative Sources in a Hyperlinked
Environment," *Journal of the ACM* 46(5):604–632, 1999.
DOI <https://doi.org/10.1145/324133.324140> ·
author's PDF <https://www.cs.cornell.edu/home/kleinber/auth.pdf>
(Preliminary versions: ACM-SIAM SODA 1998; IBM Research Report RJ 10076, May 1997.)

**What it does.** Assigns each node two scores in mutual recursion: a node is a good
*authority* if good hubs point to it, and a good *hub* if it points to good
authorities. Computed as the principal eigenvectors of A^T A and A A^T for adjacency
matrix A.

**Complexity at N=50.** Two eigenvector computations on 50×50 matrices. Under a
millisecond. Again, cost is not the issue.

**The specific mechanism worth borrowing, and this one is real.** The
hub/authority *distinction* maps onto something the schema already encodes and does
not currently use. `edge_type: hosts` marks a thinker who publishes others' work on a
platform they own: that is the definition of a hub. `antecedent` points at the source
of an idea: that is an authority relation. A thinker who is a strong authority (many
inbound `antecedent` and `extends` edges) earns a different kind of foreground slot
than a thinker who is a strong hub (many outbound `hosts` edges). **The borrowable
idea is that in-role and out-role are different currencies and should not be summed
into one number.** That is a feature-design insight, and it is free. Running the
actual eigenvector iteration to obtain it is not necessary: at this scale, *counting*
typed in-edges and typed out-edges gives you the same distinction with none of the
opacity.

**Verdict: BORROW THE DISTINCTION, DO NOT RUN THE ALGORITHM.** HITS has a second,
disqualifying problem beyond the ones PageRank has: its convergence and its rank
behaviour are known to be poorly conditioned. See Farahat et al. and the
demonstration that HITS rank convergence can be arbitrarily slow even when the score
vector converges quickly, "The rank convergence of HITS can be slow,"
<https://arxiv.org/abs/0807.3006>. Non-uniqueness of the principal eigenvector when
the graph is not connected is a live risk in a 50-node graph with off-site leaf
nodes, which this graph has in quantity (every off-site neighbour is a degree-1 leaf
with no outbound edges at all). HITS on a graph that is mostly leaves is degenerate.

## 1.3 Degree centrality

**Primary citation.** Linton C. Freeman, "Centrality in Social Networks: Conceptual
Clarification," *Social Networks* 1(3):215–239, 1978/79.
DOI <https://doi.org/10.1016/0378-8733(78)90021-7>
(Freeman's earlier betweenness paper: "A Set of Measures of Centrality Based on
Betweenness," *Sociometry* 40(1):35–41, 1977, DOI
<https://doi.org/10.2307/3033543>.)

Freeman's 1978/79 paper is the one to cite: it is where degree, betweenness, and
closeness are set out as three distinct and non-interchangeable conceptions of
centrality, each answering a different question. That framing is more useful here
than any of the three measures individually.

**What it does.** Counts edges incident to a node. Local, O(1) per node given an
adjacency list, O(|E|) to build the whole table. Nothing is cheaper.

**Complexity at N=50.** ~300 increments. Free.

**The specific mechanism worth borrowing.** Inbound typed degree as a tiebreak
feature: *how many other pages on this site point at this neighbour.* This is the
single most defensible non-editorial signal available, because it is already
meaningful in the site's own terms, a thinker cited as a neighbour by six pages is
demonstrably load-bearing in this body of work, and the editor can verify that claim
by counting. It also has the property the problem needs most: **it is local and
monotone.** Publishing a new page can only ever *add* to a neighbour's inbound
degree, never subtract, and it changes only the degrees of nodes the new page
actually cites. That is bounded, explicable churn.

**Verdict: USE THIS. It is the answer to "what graph signal earns its place."**
Freeman's own argument supports the restraint: degree measures local activity,
betweenness measures brokerage, closeness measures reach. For "who belongs in this
page's neighbourhood card grid," local activity is the construct that matches. The
other two answer questions §4.11 is not asking.

## 1.4 Betweenness centrality

**Primary citation.** Freeman 1977 (above). Fast algorithm: Ulrik Brandes, "A Faster
Algorithm for Betweenness Centrality," *Journal of Mathematical Sociology*
25(2):163–177, 2001. DOI <https://doi.org/10.1080/0022250X.2001.9990249> ·
preprint <https://kops.uni-konstanz.de/handle/123456789/5739>

**What it does.** For each node, the fraction of all-pairs shortest paths that pass
through it. Identifies brokers and bridges: nodes whose removal disconnects parts of
the graph.

**Complexity at N=50.** Brandes gives O(|V||E|) for unweighted graphs, at N=50,
|E|=300, that is 15,000 operations. Trivially affordable. The naive all-pairs
approach, O(|V|^3) = 125,000, is also affordable. **Cost is genuinely not a
consideration at this scale, and any recommendation that rests on complexity
arguments at N=50 is bluffing.**

**The specific mechanism worth borrowing.** Conceptually interesting: a thinker who
is the *only* link between two clusters of the site (say, the only edge between the
systems-thinking cluster and the security cluster) is editorially significant in a
way degree does not capture. If the site ever grows distinct clusters, betweenness
names the thinkers who bridge them, and that is a genuinely editorial fact worth
surfacing, possibly as an editorial *report*, not as a ranking input.

**Verdict: DO NOT USE AS A RANKING INPUT. Possibly useful later as a diagnostic.**
Two reasons. First, betweenness is the *least* stable of the three classic
centralities under graph modification: adding a single edge can reroute many shortest
paths at once and change many nodes' scores discontinuously. In a graph this small
and this sparse, one new page can swing betweenness violently. That is precisely the
failure mode being escaped. Second, and more basic: betweenness ranks nodes by
*global* brokerage, which, like PageRank, is not what a per-page neighbourhood
section is ordering. Worth a standalone script that prints the site's bridge thinkers
once the graph passes ~30 pages; not worth a term in the sort key.

## 1.5 STABLE TOP-K SELECTION: the part that actually addresses the stated pain

This is where the useful prior art lives. Ranking N=50 nodes is a solved, trivial
problem. Ranking them so the answer does not thrash is not, and it has its own
literature, mostly recent and mostly outside graph theory.

### 1.5.1 The inflated top-k  ★ BEST SINGLE FINDING

**Primary citation.** Ruiting Liang, Jake A. Soloff, Rina Foygel Barber, Rebecca
Willett, "Assumption-free stability for ranking problems," arXiv:2506.02257,
submitted 2 June 2025. <https://arxiv.org/abs/2506.02257>

Builds directly on: Jake A. Soloff, Rina Foygel Barber, Rebecca Willett, "Building a
stable classifier with the inflated argmax," NeurIPS 2024, arXiv:2405.14064.
<https://arxiv.org/abs/2405.14064>

**What it does.** Standard top-k selection is discontinuous: an arbitrarily small
change in the score vector can swap membership at the k/(k+1) boundary. Liang et al.
replace the hard cut with an ε-inflated one. Their Definition 3:

> for any k ∈ [L], any w ∈ R^L, and any ε > 0, define the ε-inflated top-k ranking as
> top-k^(ε)(w) := { j ∈ [L] : dist(w, C_j^{ε,k}) < ε }

and the guarantee that makes it worth reading (their equation 3, the core property
behind Theorem 4):

> For all w, v ∈ R^L, if ‖w − v‖ < ε then |top-k^(ε)(w) ∩ top-k^(ε)(v)| ≥ k.

In words: **perturb the scores by less than ε and at least k of your selected items
are guaranteed to survive.** Proposition 5 shows the method is optimal, it returns
exactly k elements as often as any procedure with that guarantee can. Proposition 6
gives the cheap computation: with scores sorted descending, top-k^(ε)(w) = {1,…,k−1}
∪ {k−1+j : j ∈ argmax^(ε)(w_k,…,w_L)}, so it reduces to an inflated argmax over the
tail. The top k−1 are never in doubt; all ambiguity lives at the k/(k+1) boundary,
which is exactly where a cap of 7 hurts.

**Complexity at N=50.** Sort (50 log 50) plus an inflated-argmax over the tail, which
Soloff et al. Prop. 11 solves in closed form. Well under a millisecond, maybe 30
lines of TypeScript.

**The specific mechanism to borrow, and it is not what it first looks like.** The
literal operator returns a set that may exceed k, and §4.11 has a hard cap of 7 that
the build enforces. So you cannot render an inflated set. **Use it as an ambiguity
detector instead.** Compute the inflated top-7 at a chosen ε; if it returns exactly
7, the boundary is unambiguous and the build ships that set with no editorial
involvement. If it returns 9, the build has just told you that three neighbours are
statistically tied for two slots, and *those* are the cases the editor should be
asked about. That is precisely the "deterministic ranking with manual override for
the few cases the editor cares about" requirement in the brief, and it turns the
override from a standing burden into an exception report. ε becomes a single tunable
knob: raise it and more cases route to the editor, lower it and fewer do.

**Verdict: USE THIS, as the boundary-ambiguity detector. Highest-value item in this
lane.** It is the only thing found that is both rigorous and shaped like the actual
requirement. Caveat worth stating plainly: the paper's stability guarantee is about
*score* perturbation of size ε, and the dominant churn source here is a *binary
feature flip* of maximum weight (§0), which is not a small perturbation. So the
theorem does not transfer verbatim, it bounds the churn that survives after the
ranking function is fixed, not the churn caused by the ranking function's own
structure. Fix the feature weighting first (§1.5.3), then use this to catch the
residue. Implementing the inflated top-k on top of a function that still jumps two
buckets on publication would be sophistication papering over a design bug.

### 1.5.2 Measuring churn before trying to reduce it

You cannot tune ε, or justify any of this to an editor, without a number for how much
the foreground sets moved. Two established measures, both trivial:

**Fagin, Kumar and Sivakumar top-k list distance.** Ronald Fagin, Ravi Kumar, D.
Sivakumar, "Comparing top k lists," *SIAM Journal on Discrete Mathematics*
17(1):134–160, 2003. Preliminary version at ACM-SIAM SODA 2003.
DOI <https://doi.org/10.1137/S0895480102412856> ·
PDF <https://www.cs.ucr.edu/~vagelis/classes/CS242/publications/Fagin%20sidma03.pdf>

The paper's contribution is exactly the problem of comparing two ranked lists that do
not contain the same items, which is the case here, since a neighbour can drop out
of the foreground entirely. It defines Kendall-tau and Spearman-footrule variants
extended to partial lists, proves which are metrics, and shows the non-metric ones
satisfy a relaxed triangle inequality and are bounded within constant factors of a
metric. Use the top-k Kendall tau with penalty parameter p (p=0 is the "optimistic"
convention, p=1/2 the "neutral" one) to report, per page, how far the foreground set
moved between two builds.

**Jaccard overlap of the foreground set.** Cruder, order-insensitive, and the
convention in the recommender-systems stability literature (see §1.5.4). |A∩B|/|A∪B|
over the two foreground sets. Takes two lines and is the one to put in a build log,
because an editor can read it without explanation.

**Verdict: DO THIS FIRST, before choosing any ranking algorithm.** A `bun scripts/`
one-off that replays git history, recomputes foreground sets at each commit, and
prints per-page Jaccard and top-k tau would convert "churn is the actual pain" from
an impression into a measured baseline, and would tell you which of the 11 pages
actually churn. It is an hour of work and it is the precondition for every other
recommendation in this file being checkable.

### 1.5.3 Hysteresis / dead-band: the boring answer that probably wins

**Primary citation.** This is classical control engineering rather than a single
paper; the standard reference treatment is Schmitt-trigger style dual-threshold
switching. Otto H. Schmitt, "A thermionic trigger," *Journal of Scientific
Instruments* 15(1):24–26, 1938. DOI <https://doi.org/10.1088/0950-7671/15/1/305>

**What it does.** Use two thresholds instead of one. An item must score above
T_enter to *join* the foreground, but only falls below T_exit (< T_enter) to *leave*
it. The gap between them is a dead band in which nothing changes. Incumbency is worth
something.

**Complexity at N=50.** One extra comparison per neighbour, and one bit of persisted
state per edge (was it in the foreground last build?). The state is the only real
cost, and this repo already has the natural place to keep it: `render_tier` is
already a per-edge field in the content file, so the previous decision is already
persisted in git. That is unusually convenient.

**The specific mechanism to borrow.** Make demotion require a *margin*, not just a
loss. Concretely: a neighbour currently in the foreground is demoted only if some
challenger beats it by more than δ, not merely by any amount. Combined with fixing
the two-bucket jump in §0, this alone removes most of the churn, because most churn
is boundary items trading places by a hair.

**Verdict: USE THIS. Cheapest real fix available, and it composes with everything
else.** It is not glamorous and it has no theorem attached at this scale, but it is
the mechanism the inflated top-k is a principled version of, and unlike the inflated
top-k it needs no ε calibration to start paying off.

### 1.5.4 Stability as a first-class evaluation metric (recommender systems)

**Primary citation.** Gediminas Adomavicius, Jingjing Zhang, "Stability of
Recommendation Algorithms," *ACM Transactions on Information Systems* 30(4), Article
23, November 2012. DOI <https://doi.org/10.1145/2382438.2382442> ·
earlier version: "On the stability of recommendation algorithms," RecSys 2010,
DOI <https://doi.org/10.1145/1864708.1864722>

**What it does.** Argues that accuracy is not the only thing a recommender should be
judged on, and defines *stability*: the degree to which an algorithm's predictions
stay consistent as new, non-contradicting data arrives. Establishes the now-standard
practice of reporting a stability number alongside a quality number.

**Related, more recent, and closer to the mechanism.** "Rank List Sensitivity of
Recommender Systems to Interaction Perturbations," arXiv:2201.12686
(<https://arxiv.org/abs/2201.12686>), measures top-K Jaccard under single-interaction
perturbations; "FINEST: Stabilizing Recommendations by Rank-Preserving Fine-Tuning,"
arXiv:2402.03481 (<https://arxiv.org/abs/2402.03481>), adds an explicit
rank-preservation term to the objective.

**The specific mechanism to borrow.** The *framing*, which is genuinely load-bearing
for this project: churn is not a bug to be patched, it is a metric to be reported and
regressed against. If `runGraphChecks` emits a per-build churn figure the way it
already emits neighbour-cap errors, the problem becomes visible and stays fixed.

**Verdict: BORROW THE FRAMING, IGNORE THE ALGORITHMS.** The algorithms are all for
learned models with millions of parameters. The framing costs nothing and is right.

### 1.5.5 PageRank-specific stability results

**Primary citation.** Gourab Ghoshal, Albert-László Barabási, "Ranking stability and
super-stable nodes in complex networks," *Nature Communications* 2:394, 2011.
DOI <https://doi.org/10.1038/ncomms1396> ·
<https://www.nature.com/articles/ncomms1396>

**What it does.** Analytically characterises when PageRank rankings survive topology
perturbation. Finding: in *random* networks the ranking is sensitive to perturbation
and is therefore unreliable for incomplete or noisy graphs; in *scale-free* networks
a set of "super-stable" nodes emerges whose ranking is robust, and the paper predicts
how many such nodes there are as a function of network characteristics.

Supporting: Amy N. Langville, Carl D. Meyer, "Deeper Inside PageRank," *Internet
Mathematics* 1(3):335–380, 2004, which collects the sensitivity and perturbation
analysis in one place,
<https://www.stat.uchicago.edu/~lekheng/meetings/mathofranking/ref/langville.pdf>.
Also relevant: Boldi et al. on damping-factor sensitivity, showing that for any k
there exist graphs where an arbitrarily small change in the damping factor reverses
the top-k ordering entirely ("Choose the damping, choose the ranking?", *Journal of
Discrete Algorithms*, <https://doi.org/10.1016/j.jda.2009.11.001>).

**The specific mechanism to borrow.** None. Its value here is as **evidence for a
negative recommendation**, which is worth more than another algorithm. A 40–60 node
editorially-curated graph is not scale-free in any meaningful sense, it is small,
hand-built, and its degree distribution is shaped by an editorial cap of 7 rather
than by preferential attachment. So it falls on the "random network" side of Ghoshal
and Barabási's dichotomy, which is the side where PageRank rankings are explicitly
called unreliable under perturbation. Combined with Boldi et al. on parameter
sensitivity, the case against §1.1 is not aesthetic. It is cited.

**Verdict: READ IT TO JUSTIFY NOT USING PAGERANK.** No implementation.

### 1.5.6 Incremental / local PageRank update

**Representative citations.** "A Local Updating Algorithm for Personalized PageRank
via Chebyshev Polynomials," arXiv:2110.02538
(<https://arxiv.org/abs/2110.02538>); Bahmani, Chowdhury, Goel, "Fast Incremental and
Personalized PageRank," *PVLDB* 4(3):173–184, 2010, arXiv:1006.2880
(<https://arxiv.org/abs/1006.2880>).

**What it does.** Recomputes PageRank after a graph edit by touching only the
affected neighbourhood, rather than re-running power iteration from scratch. Monte
Carlo random-walk maintenance in the Bahmani et al. line.

**Complexity at N=50.** Irrelevant, and that is the point.

**Verdict: PURE OVERKILL, DISQUALIFIED ON PREMISE.** This literature exists because
recomputing PageRank on a billion-node web graph costs hours. Here the full
recomputation costs microseconds and happens inside an Astro build that already takes
seconds. There is no incremental-update problem to solve. Note also the conceptual
trap worth naming: *incremental update is not rank stability.* These algorithms make
the recomputation cheaper while producing exactly the same, equally churn-prone
answer. If someone reaches for "incremental" after reading "churn," they have
misdiagnosed the problem, the brief asks for rankings that do not move, not for
recomputation that is fast.

## 1.6 Edge weighting schemes

### 1.6.1 Typed edges deserve typed treatment: PathSim and meta-paths

**Primary citation.** Yizhou Sun, Jiawei Han, Xifeng Yan, Philip S. Yu, Tianyi Wu,
"PathSim: Meta Path-Based Top-K Similarity Search in Heterogeneous Information
Networks," *Proceedings of the VLDB Endowment* 4(11):992–1003, 2011.
DOI <https://doi.org/10.14778/3402707.3402736> ·
PDF <https://sites.cs.ucsb.edu/~xyan/papers/vldb11_pathsim.pdf>

**What it does.** Formalises networks whose nodes and edges carry *types* (a
"heterogeneous information network"), and defines similarity relative to a chosen
*meta-path*, a named sequence of edge types. Author–Paper–Author means something
different from Author–Paper–Venue–Paper–Author, and PathSim's point is that similarity
is undefined until you say which relation you meant. PathSim itself is a normalised
count of meta-path instances between two nodes, designed to find *peers* (comparable
in both connectivity and prominence) rather than merely well-connected nodes.

**Complexity at N=50.** Short meta-paths on a 50-node graph are matrix products of
50×50 matrices: 125,000 multiply-adds per hop. Free.

**The specific mechanism worth borrowing.** Two things.

First, the **anti-collapse principle**: do not sum across edge types. This graph has
six types (`antecedent`, `extends`, `critiques`, `parallel`, `synthesizes`, `hosts`)
and they are not commensurable. `antecedent` is a genealogical claim, `critiques` is
an adversarial one, `hosts` is a publishing relation. Collapsing all six into one
weight discards the only structural information the schema carefully records. PathSim
is the canonical citation for "typed edges are different edges."

Second, the **peer-similarity intuition**: PathSim deliberately does not rank the
globally prominent node highest; it ranks the node that is *comparable* highest. That
is closer to what a neighbourhood section wants than PageRank's "most important"
framing. A page about a working practitioner should surface peers, not the field's
three most famous names on every page.

**Verdict: BORROW THE TYPED-WEIGHT PRINCIPLE, SKIP THE MEASURE.** PathSim computes
node-to-node similarity, and the problem here is ordering *already-declared* edges,
not discovering new ones. Concretely, what this argues for: a per-edge-type weight
table in code, six numbers the editor can read and argue with, rather than one
undifferentiated relevance score. It also argues against any method that would need
the type labels erased to work, which is most of §1.1–§1.4.

A live application worth flagging: PathSim's machinery is the right tool if the site
ever wants to *suggest* missing neighbours ("these two thinkers share three frames
and no edge"). That is a genuinely different feature from ordering, and it is where
this citation would earn implementation rather than inspiration.

### 1.6.2 Rank aggregation: combining several signals into one order

**Primary citation.** Cynthia Dwork, Ravi Kumar, Moni Naor, D. Sivakumar, "Rank
Aggregation Methods for the Web," *Proceedings of the 10th International World Wide
Web Conference (WWW10)*, Hong Kong, May 2001, pp. 613–622.
DOI <https://doi.org/10.1145/371920.372165> ·
PDF <https://www.stat.uchicago.edu/~lekheng/meetings/mathofranking/ref/kumar.pdf>

**What it does.** Given several ranked lists of the same items produced by different
criteria, produce one consensus order. Establishes that Kemeny-optimal aggregation
(minimise total Kendall-tau disagreement) is NP-hard even for four lists, introduces
"local Kemenization" as a tractable approximation, and shows Borda count and
Markov-chain methods as practical alternatives. The paper's other contribution is
framing aggregation as *spam resistance*: no single signal can dominate the consensus.

**Complexity at N=50.** Borda is O(m·N) for m signals, a few hundred additions.
Kemeny-optimal on 50 items is NP-hard in general but the instances here are tiny; the
Markov-chain approximations are 50×50 eigenvector problems. All affordable. This is
another case where complexity is not the deciding argument.

**The specific mechanism worth borrowing.** The **positional-rather-than-cardinal**
idea. Borda scores an item by its *position* in each list, not by its raw score.
Position-based aggregation is markedly more churn-resistant than score-based, because
a signal whose absolute values drift (as a degree count does when the graph grows)
contributes the same positional information as long as the ordering it induces is
unchanged. If the project ends up combining three or four signals, editorial
strength, typed-edge weight, on-site inbound degree, recency, Borda over each
signal's induced order is both simpler to explain and steadier than a weighted sum of
normalised raw scores.

The spam-resistance framing also translates: it is the formal version of "don't let
`hasPage` dominate everything," which is the bug in §0.

**Verdict: WORTH IT, Borda only, not Kemeny.** Borda is ~10 lines and buys genuine
stability and explicability. Kemeny, local Kemenization, and the Markov-chain
variants are academic overkill here: they exist to resist adversarial manipulation
across independently-operated search engines, and this graph has one curator with no
adversary. If the design stays at 2–3 signals, even Borda may be unnecessary and a
plain lexicographic sort over named tiers is clearer. Reach for Borda at four or more
signals, or the moment someone starts tuning float weights by feel.

### 1.6.3 Inverse-frequency weighting (the TF-IDF move, applied to edge types)

**Primary citation.** Karen Spärck Jones, "A Statistical Interpretation of Term
Specificity and its Application in Retrieval," *Journal of Documentation*
28(1):11–21, 1972. DOI <https://doi.org/10.1108/eb026526>
Graph-flavoured descendant: Lada A. Adamic, Eytan Adar, "Friends and neighbors on the
Web," *Social Networks* 25(3):211–230, 2003.
DOI <https://doi.org/10.1016/S0378-8733(03)00009-1>

**What it does.** Spärck Jones: a term that appears in every document discriminates
nothing; weight terms by the inverse of how common they are. Adamic–Adar carries the
same idea into graphs, weighting a shared neighbour by 1/log(degree) so that a
connection through a rare node counts for more than one through a hub.

**Complexity at N=50.** One pass to count, one to weight. Free.

**The specific mechanism worth borrowing.** Rarity is evidence. If 30 of 45 pages
list Komoroske as a neighbour, a Komoroske edge is nearly uninformative about *this*
page's neighbourhood and arguably should not consume a scarce foreground slot on all
30. A neighbour only two pages cite says something specific about both. This is the
formal counterweight to the site's structural bias toward its own well-connected
nodes, which §7's "Known limit" already identifies as a live risk: *"the graph is
still small, so early grounding packs lean on a few well-connected thinkers, so
readings risk converging on the same moves."* Inverse-frequency weighting is the
mechanical version of the fix that §7 currently assigns to a human reviewer.

**Verdict: WORTH IT, WITH A SHARP CAVEAT.** The caveat is that it directly opposes
§1.3 (inbound degree as a positive signal), one says "many pages cite them, so they
matter," the other says "many pages cite them, so it's not news." Both are true of
different things, and choosing between them is an editorial judgement, not a
mathematical one. The honest resolution: **inbound degree belongs in ranking, inverse
frequency belongs in the novelty check (§2).** Do not put both in the same sort key
and hope they balance; that produces a score nobody can reason about.

---

# PROBLEM 2: NOVELTY AND DIVERSITY

Framing note before the algorithms. The brief says "detect when a new page repeats an
argument already made elsewhere." That is **near-duplicate detection over a corpus of
~50 short documents**, not diverse-subset-selection. Several of the requested methods
(MMR, DPP, facility location) solve *selection*: given many candidates, pick a
non-redundant few. Nobody is selecting here, every page ships. So most of the
diversity literature applies only in a repurposed form, and the repurposing is where
the judgement is. Where a method only works after being bent, this file says so.

The corpus is also very small and very short: ~50 `extension` fields of ≤160 words,
about 8,000 words total. Every method below is instant at that size. **The deciding
question is never cost. It is signal quality at 160 words, and whether the output is
something an editor can act on.**

## 2.1 Maximal Marginal Relevance (MMR)

**Primary citation.** Jaime Carbonell, Jade Goldstein, "The Use of MMR,
Diversity-Based Reranking for Reordering Documents and Producing Summaries,"
*Proceedings of SIGIR '98*, Melbourne, pp. 335–336.
DOI <https://doi.org/10.1145/290941.291025> ·
SIGIR Forum reprint DOI <https://doi.org/10.1145/3130348.3130369> ·
abstract <https://people.eng.unimelb.edu.au/ammoffat/sigir98/abstracts/carbonell.html>

**What it does.** Greedy re-ranking that trades relevance against redundancy. At each
step it picks the candidate maximising

    MMR = argmax_{d ∈ R\S} [ λ · Sim1(d, q) − (1−λ) · max_{d' ∈ S} Sim2(d, d') ]

where S is what has been selected, q the query, and λ ∈ [0,1] the knob. λ=1 is pure
relevance, λ=0 is pure diversity. The second term is the whole idea: penalise a
candidate by its similarity to the *most similar thing already chosen*.

**Complexity at N=50.** O(k·N) similarity lookups on a precomputed 50×50 matrix.
Nothing. The matrix itself is 1,225 pairwise similarities, and at 160 words per
document even an embedding-based similarity is a few seconds of one-off work.

**The specific mechanism to borrow, and it is the single most transferable idea in
this lane.** Not MMR as a re-ranker. **The `max_{d' ∈ S} Sim2(d, d')` term, used as a
novelty score for one new document against the existing corpus.** For a draft
extension e and the set E of shipped extensions:

    redundancy(e) = max_{e' ∈ E} sim(e, e')
    argmax_{e' ∈ E} sim(e, e')   ← the page it most repeats

The second line is what makes it editorially useful. It does not merely say "this is
redundant"; it names the page being repeated, which is a reviewable claim. That is
directly the brief's requirement: detect repetition "without a reviewer reading every
existing page." The reviewer reads *one* page, the one named.

This also fits the existing pipeline exactly. §7 step 1 already builds a grounding
pack containing "neighbors' existing readings, for the novelty check," and step 4
already seats a "Novelty and byline check" reviewer. The max-similarity score is the
missing deterministic pre-filter *in front of* that human/AI reviewer: it picks which
neighbours the pack should include and flags which pages the reviewer must compare
against. `reading-gates.ts` is the natural home, it already exits non-zero on
mechanical violations, and a redundancy ceiling is the same shape of check.

**What similarity function.** Three options, in order of preference:
1. Embeddings (any sentence-embedding model) + cosine. Best signal, catches
   paraphrase, which is the actual failure mode when the same argument is made twice
   in different words. One API call per page, cached, ~50 calls total.
2. The **claims map** (`_working/<slug>/reading-claims.md`). Jaccard over the set of
   cited IDs plus the cited Lens position. This is structured, free, deterministic,
   and needs no model. **It is the underrated option**, two extensions citing
   `[P:3]` and overlapping source IDs are making the same move by construction, and
   this catches it without any NLP at all.
3. TF-IDF cosine over the prose. Fine, weakest, misses paraphrase.

**Verdict: USE THIS. Best answer to problem 2.** Start with (2), because it is free,
deterministic, explicable and uses data the pipeline already writes to disk; add (1)
when (2) proves too coarse. λ never appears, since nothing is being selected, only
the redundancy term is used.

## 2.2 Determinantal Point Processes (DPPs)

**Primary citation.** Alex Kulesza, Ben Taskar, "Determinantal Point Processes for
Machine Learning," *Foundations and Trends in Machine Learning* 5(2–3):123–286, 2012.
arXiv:1207.6083 <https://arxiv.org/abs/1207.6083> ·
DOI <https://doi.org/10.1561/2200000044>

**What it does.** A probability distribution over *subsets* in which the probability
of a subset is proportional to the determinant of the kernel submatrix indexed by it,
det(L_S). Because a determinant is a squared volume, subsets of mutually similar
items span little volume and get low probability: repulsion falls out of the algebra
rather than being bolted on. Unlike MMR's greedy heuristic, a DPP models the *whole
subset* jointly, and supports exact sampling, marginalisation and conditioning.

**Complexity at N=50.** Eigendecomposition of a 50×50 kernel: ~125,000 operations,
milliseconds. MAP inference (most probable subset) is NP-hard in general, but the
standard greedy submodular approximation is trivial at this size. **Cost is not the
objection.**

**The specific mechanism to borrow.** One genuine idea: **DPPs measure the diversity
of a set, not of a pair.** MMR's max-similarity term is pairwise and cannot see
"these eight pages are individually distinct but collectively occupy one small
region." A determinant can. If the real worry is corpus-level sameness, all 45
extensions converging on the same three rhetorical moves, which §7's "Known limit"
explicitly anticipates, then det(L) over the whole corpus is a single number
measuring how much of the argument space the site actually covers, and watching it
fall over time is a real signal.

**Verdict: ACADEMIC OVERKILL FOR THE STATED PROBLEM. One narrow exception.** The
stated problem is "does this new page repeat an existing one," which is pairwise, and
MMR's redundancy term answers it in five lines with an output the editor can act on
(the name of the repeated page). A DPP answers it with a determinant, which is not
actionable: a low det(L_S) tells you the set is redundant without telling you which
page to fix. Kulesza and Taskar's machinery (sampling, conditioning, learned kernels)
all serves selection problems that do not exist here.

The exception, and it is worth one afternoon at some point: a **single corpus-level
diversity number**, log det(L) over all shipped extensions, recomputed per build and
plotted. That is a health metric for the site's argument space and it is the one
thing MMR genuinely cannot give. Do it after the MMR check is shipping value, not
before, and treat it as a dashboard number rather than a gate.

## 2.3 Near-duplicate detection: shingling, MinHash, SimHash

**Primary citations.**
- Shingling / resemblance: Andrei Z. Broder, "On the Resemblance and Containment of
  Documents," *Compression and Complexity of Sequences (SEQUENCES '97)*, IEEE, pp.
  21–29, 1997. <https://dblp.org/rec/conf/sequences/Broder97.html>
- Applied at web scale: Andrei Z. Broder, Steven C. Glassman, Mark S. Manasse,
  Geoffrey Zweig, "Syntactic Clustering of the Web," *Computer Networks and ISDN
  Systems* 29(8–13):1157–1166, 1997.
  DOI <https://doi.org/10.1016/S0169-7552(97)00031-7>
- SimHash: Moses S. Charikar, "Similarity Estimation Techniques from Rounding
  Algorithms," *STOC '02*, pp. 380–388. DOI <https://doi.org/10.1145/509907.509965>
- SimHash in practice: Gurmeet Singh Manku, Arvind Jain, Anish Das Sarma, "Detecting
  Near-Duplicates for Web Crawling," *WWW '07*, pp. 141–150.
  DOI <https://doi.org/10.1145/1242572.1242592> ·
  PDF <https://research.google.com/pubs/archive/33026.pdf>

**What they do.** *Shingling* represents a document as its set of contiguous w-word
sequences; resemblance is the Jaccard similarity of two shingle sets. *MinHash*
estimates that Jaccard cheaply: hash each shingle, keep the minimum, and the
probability two documents share a minimum equals their Jaccard. *SimHash* produces a
short fingerprint from weighted features such that near-duplicates differ in few bit
positions, and Manku et al. show how to find all fingerprints within Hamming distance
3 of a query across billions of documents.

**Complexity at N=50.** All-pairs exact Jaccard over 50 documents is 1,225
set-intersections on sets of ~150 shingles each. Under a millisecond in plain
TypeScript with no library.

**The specific mechanism to borrow.** Shingling itself, the *w*-word shingle set as
a document representation, and exact Jaccard over it. Two shingles' worth of detail:
w=3 catches verbatim reuse of phrasing (an opener recycled, a closing move repeated),
which is a real failure this corpus is prone to, since §7's batch guidance explicitly
warns about "repeated openers, the same closing move." A trigram-shingle Jaccard
check is the right tool for that specific failure and it is about 15 lines.

**Verdict: SHINGLING YES, MINHASH AND SIMHASH NO, AND THE REASON IS NOT COST.**
MinHash and SimHash are *approximation and indexing* techniques. They exist so you do
not have to compute 10^18 pairwise comparisons. Here there are 1,225, computed
exactly, instantly. Using MinHash at N=50 means deliberately accepting estimation
error to avoid a computation that is already free, it is strictly worse than the
exact answer on every axis. SimHash is the same argument plus a bit-packing step.
Reach for them at N in the millions and not before.

The sharper limitation, which applies to all three: **they are surface-form methods
and the failure mode here is semantic.** Two extensions can repeat the same argument
with zero shingle overlap. Shingling catches lazy reuse of *wording*; it does not
catch a repeated *argument*, which is what the brief asks for. So run it, but run it
as a cheap second check alongside §2.1, never instead of it. Two checks that fail
differently are worth more here than one sophisticated one.

## 2.4 Facility location, k-center, and submodular coverage

**Primary citations.**
- k-center 2-approximation via farthest-first traversal: Teofilo F. Gonzalez,
  "Clustering to Minimize the Maximum Intercluster Distance," *Theoretical Computer
  Science* 38:293–306, 1985. DOI <https://doi.org/10.1016/0304-3975(85)90224-5>
- Matching bound, independently: Dorit S. Hochbaum, David B. Shmoys, "A Best Possible
  Heuristic for the k-Center Problem," *Mathematics of Operations Research*
  10(2):180–184, 1985. DOI <https://doi.org/10.1287/moor.10.2.180>
- The greedy guarantee that underwrites all of it: G. L. Nemhauser, L. A. Wolsey, M.
  L. Fisher, "An Analysis of Approximations for Maximizing Submodular Set Functions—
  I," *Mathematical Programming* 14:265–294, 1978.
  DOI <https://doi.org/10.1007/BF01588971>. Greedy achieves at least (1 − 1/e) ≈
  0.632 of optimal for monotone submodular maximisation under a cardinality
  constraint.
- The text-domain application that is closest to this problem: Hui Lin, Jeff Bilmes,
  "A Class of Submodular Functions for Document Summarization," *ACL-HLT 2011*, pp.
  510–520. <https://aclanthology.org/P11-1052/> ·
  PDF <https://people.ece.uw.edu/bilmes/p/mypubs/lin2011-class-submod-sum.pdf>

**What they do.** *k-center* picks k points so that every other point is close to
some chosen point, minimise the maximum distance to a centre. Gonzalez's
farthest-first traversal is the algorithm: start anywhere, repeatedly add the point
farthest from everything chosen so far. *Facility location* is the softer sum-based
cousin (minimise total distance to nearest facility) and is monotone submodular, so
greedy carries the (1 − 1/e) guarantee. Lin and Bilmes showed that summarisation is
naturally a submodular maximisation with two terms, a coverage term (the summary
represents the document) and a diversity-reward term (the summary is not
self-redundant), and that plain greedy beat the state of the art on DUC 2004–2007.

**Complexity at N=50.** Farthest-first traversal is O(k·N) distance lookups: for k=8,
400 lookups. Greedy facility location is O(k·N²) = 20,000. Both instant.

**The specific mechanism worth borrowing.** Reframe it. Coverage answers a question
the brief did not ask but which is the *dual* of the one it did: not "does this page
repeat another," but **"which region of the argument space is the site not covering
yet?"** Farthest-first traversal over the corpus of extensions returns, in order, the
most mutually-distinct pages, and its first *unplaced* candidate is literally "the
argument furthest from everything the site has said." That is an editorial
commissioning signal, not a gate.

Lin and Bilmes' two-term structure is the transferable design, and it maps cleanly:
coverage = does the corpus of extensions span Julie's positions and the thinkers'
territory; diversity = do the extensions avoid repeating each other. Their result
that naive greedy suffices is the useful practical finding, no solver, no tuning.

**Verdict: OVERKILL AS A NOVELTY CHECK. GENUINELY USEFUL AS A GAP REPORT, LATER.**
As a redundancy detector it is strictly worse than §2.1: it needs a global
optimisation to answer a local question, and its output ("page X is a centre") does
not tell an editor what to change. But the inverse use, a `bun scripts/` report
listing the least-covered regions of the argument space, i.e. where a new page would
add the most, is a real and cheap tool for a site that is about to add 30 pages. File
it under "worth building at 25+ pages," not under "problem 2."

## 2.5 The overlooked reframing: 8 lens positions is an assignment problem

Not requested, and worth more than half the methods above, so recorded here.

**Primary citation.** Harold W. Kuhn, "The Hungarian Method for the Assignment
Problem," *Naval Research Logistics Quarterly* 2(1–2):83–97, 1955.
DOI <https://doi.org/10.1002/nav.3800020109>
(Modern treatment of the generalisation, min-cost flow: Ahuja, Magnanti, Orlin,
*Network Flows: Theory, Algorithms, and Applications*, Prentice Hall, 1993.)

**Why it belongs here.** The brief states the difficulty as "with only 8 positions
and 40+ pages, 'pick an unused position' stops working." That is true, and it is true
because *uniqueness* is the wrong constraint once pages outnumber positions. The
right constraint is **balance**: no Lens position should be over-used relative to how
well it fits the pages that could use it, and every position should be exercised.
That is a degree-constrained assignment problem, 40 pages, 8 positions, capacity
~5–6 per position, minimise total misfit cost, and it is exactly what the Hungarian
method and min-cost flow solve exactly, in polynomial time, at a scale where "exact"
costs nothing.

**Complexity at N=50, 8 positions.** Hungarian on a 50×8 cost matrix (padded) is
O(n³) ≈ 125,000 operations. Min-cost flow on a graph with 58 nodes and 400 arcs is
smaller still. Exact optimum, milliseconds, no approximation.

**Where the cost matrix comes from.** The claims map already records which `[P:n]`
each extension cites. Cost(page, position) can start as a hand-scored fit or, better,
as the similarity between the page's `extension` draft and the text of Lens position
n. The output is not a mandate, it is a suggestion of which position a page *could*
use that is currently under-exercised, which is exactly the advice §7's batch guidance
("give each page a different angle and Lens position where the sources allow it")
currently asks a human to produce by inspection.

**Verdict: WORTH RAISING WITH THE EDITOR.** This does not compete with §2.1; it
complements it. §2.1 catches a page that repeats an argument. This prevents the
distribution from collapsing onto three favourite positions in the first place. Both
are cheap. The reason to flag it: it reframes "novelty" from a *detection* problem
(expensive, after the fact, needs a reviewer) into an *allocation* problem (cheap,
before drafting, needs a table). The allocation framing is almost certainly the better
lever, and it is the kind of move the brief's own §7 is already groping toward
manually.

---

# 3. SYNTHESIS

## 3.1 What earns its complexity, ranked

| # | Method | Problem | Verdict |
|---|--------|---------|---------|
| 1 | Fix the two-bucket jump in `orderNeighbors` (§0) | 1 | **Do first.** Not an algorithm. The dominant churn source. |
| 2 | Churn measurement: Jaccard + Fagin top-k tau (§1.5.2) | 1 | **Do second.** Precondition for evaluating anything else. |
| 3 | Hysteresis / dead-band on demotion (§1.5.3) | 1 | **Cheapest real fix.** ~20 lines, state already in git. |
| 4 | MMR redundancy term over the claims map (§2.1), topic-conditioned per §5.3 | 2 | **Best answer to problem 2.** Names the repeated page. |
| 5 | Inflated top-k as ambiguity detector (§1.5.1) | 1 | **Highest-rigour find.** Turns override into an exception report. |
| 5= | Stable-weight selection, Asudeh et al. (§5.2) | 1 | **Added in the Elicit pass.** Answers §3.3's open weight-tuning question. |
| 6 | Degree centrality, on-site inbound degree (§1.3) | 1 | **The one graph signal that earns a slot.** Provably most stable (§5.8.1). |
| 7 | Per-edge-type weight table, PathSim principle (§1.6.1) | 1 | Do not collapse six types into one number. |
| 8 | Lens allocation as assignment problem (§2.5) | 2 | **Unrequested, high value.** Prevention beats detection. |
| 9 | Trigram shingling + exact Jaccard (§2.3) | 2 | Cheap second check. Catches reused wording, not reused arguments. |
| 10 | Borda rank aggregation (§1.6.2) | 1 | Only at 4+ signals. Below that, lexicographic tiers are clearer. |
| 11 | Inverse-frequency weighting (§1.6.3) | 2 | Yes, but in the novelty check, never in the sort key. |
| 12 | log det(L) corpus diversity, DPP (§2.2) | 2 | Dashboard number only. Not a gate. |
| 13 | Farthest-first coverage gap report (§2.4) | 2 | Worth building at 25+ pages. Commissioning tool. |
| 14 | Betweenness centrality (§1.4) | 1 | Diagnostic at most, and on the *stable* variant (§5.8.1), never standard. |
| 15 | HITS (§1.2) | 1 | Borrow the hub/authority distinction. Do not run it. |
| 16 | PageRank (§1.1) | 1 | **No.** Wrong question, amplifies churn, opaque to the editor. |
| 17 | MinHash / SimHash (§2.3) | 2 | **No.** Approximations for a computation that is already free. |
| 18 | Incremental PageRank (§1.5.6) | 1 | **No.** Solves speed; the problem is stability. |
| 19 | Kemeny-optimal aggregation (§1.6.2) | 1 | **No.** NP-hard machinery for adversaries that do not exist. |

## 3.2 The blunt finding

**At N=50, no method in this file is ruled out by cost.** PageRank, HITS, betweenness,
DPP eigendecomposition and exact Kemeny on 50 items are all sub-second. Every
recommendation above therefore rests on fitness and explicability, never on
complexity, and any proposal that argues from big-O at this scale should be treated
as decoration.

The corollary matters more. **Sophistication is not the bottleneck; the ranking
function's design is.** A global node-importance measure is the wrong shape for a
per-page neighbourhood ordering no matter how well it is implemented, and a binary
feature carrying maximum weight will churn under any smoothing applied on top of it.
Fix the feature weighting, measure the churn, add a dead band, and the graph
literature turns out to contribute one thing: **on-site inbound degree**, which is
local, monotone, cheap and explicable, and is the only centrality whose behaviour
under "a new page is published" is bounded by construction.

For problem 2 the finding is similar in shape. The requested diversity methods (DPP,
facility location, k-center) all solve *selection*, and nothing here is being
selected. The one genuinely transferable mechanism is MMR's redundancy term, because
its output is a name, "this repeats page X", which is the only form of output a
reviewer can act on. And the reframe in §2.5 is worth more than any of them:
distributing 8 Lens positions across 40 pages is an allocation problem solvable
exactly before drafting, not a detection problem solvable expensively afterwards.

## 3.3 Sketch of the recommended ranking function

Not a deliverable of this lane; recorded so the recommendation is concrete and
falsifiable rather than a list of citations.

```
score(edge) =
      w_page    · onSite(edge)                 // no longer worth 2 buckets
    + w_type    · typeWeight[edge.edge_type]   // six named numbers, §1.6.1
    + w_strength· (strength === 'primary')     // editorial signal, unchanged
    + w_degree  · normalisedInboundDegree(target)  // §1.3, the graph term
    + w_incumb  · wasForegroundLastBuild(edge)     // §1.5.3, the dead band
```

Every term is a named quantity an editor can be shown and can argue with, which is
the constraint that killed PageRank. `editorial_demote_to` stays as the hard override.
The build then computes the inflated top-7 at some ε (§1.5.1) and, when it returns
more than 7, emits a warning naming the tied neighbours rather than silently picking,
the same channel `runGraphChecks` already uses for cap violations.

Open question for whoever implements this, and it is a real one: the five weights are
free parameters, and tuning them by feel reintroduces exactly the opacity that
disqualified PageRank. Two honest options, fix them at round numbers and never tune
them, or replace the weighted sum with a lexicographic sort over named tiers and
accept coarser ordering. The second is more defensible for an editorial site. Neither
should be decided in a research file.

---

## 4. URL verification

All 45 URLs in this document were checked on 2026-09-18. Direct HTTP checks: 200 for
every arXiv, ACL Anthology, dblp, Nature, institutional-PDF and Stanford ilpubs link.

Publisher DOIs (ACM, Elsevier, Wiley, SIAM, INFORMS, Taylor & Francis, Emerald, Now
Publishers) return 403 to a command-line client because of bot filtering, not because
they are broken. Each was therefore verified a second way, through the Crossref
metadata API (`https://api.crossref.org/works/<doi>`), which returned the expected
title, container and year for all twenty. Titles and years in the citations above were
corrected against that metadata where they disagreed.

One correction made during verification, recorded because it would otherwise be
invisible: the Boldi et al. damping-factor paper was first written with DOI
`10.1016/j.jda.2009.09.001`, which 404s. Crossref gives the correct DOI as
`10.1016/j.jda.2009.11.001`, *Journal of Discrete Algorithms*, 2010. The file now
carries the corrected DOI.

---

# 5. ELICIT PASS: peer-reviewed additions

Second research pass run through the Elicit academic corpus (`mcp__elicit__*`) at
Julie's request, to get DOIs and real abstracts rather than search-result summaries.
Everything below is new material or a correction; it does not replace sections 1–4.
Citation counts are Elicit's, recorded as a rough signal of standing.

## 5.1 Corrections and confirmations to existing citations

- **MMR.** Elicit confirms DOI `10.1145/290941.291025` (SIGIR 1998, 1,865 citations)
  and the SIGIR Forum reprint `10.1145/3130348.3130369` (1,843). Both as recorded in
  §2.1. Elicit also surfaces a third version not previously found, useful because it
  is openly accessible: Goldstein-Stewart and Carbonell, "Summarization: (1) Using MMR
  for Diversity-Based Reranking and (2) Evaluating Summaries," NIST TIPSTER Text
  Program (Crossref records the proceedings as 1996; Elicit lists the paper as 1998), DOI <https://doi.org/10.3115/1119089.1119120>, PDF at
  <https://aclanthology.org/X98-1025/>. Same method, fuller evaluation discussion.
- **Inflated top-k.** Elicit gives the arXiv DOI `10.48550/arXiv.2506.02257`, 5
  citations as of this pass, which is consistent with a June 2025 preprint. The
  abstract confirms the framing used in §1.5.1 and adds one sentence worth quoting,
  because it describes this project's situation exactly:

  > Many existing theoretical results for ranking problems assume a separation
  > condition to avoid this challenge, but real-world data often contains items whose
  > scores are approximately tied, limiting the applicability of existing theory.

  Approximately-tied neighbours at the 7-slot boundary is the whole problem.

## 5.2 NEW, AND THE MOST DIRECTLY ON-POINT PAPER FOUND IN EITHER PASS

**Abolfazl Asudeh, H. V. Jagadish, Gerome Miklau, Julia Stoyanovich, "On Obtaining
Stable Rankings," *Proceedings of the VLDB Endowment* 12(3):237–250, 2018.**
DOI <https://doi.org/10.14778/3291264.3291269> ·
preprint <https://arxiv.org/pdf/1804.10990> · 45 citations

**Why this matters more than anything in §1.** Section 3.3 of this file sketched a
ranking function as a weighted sum of named features and then flagged an open
problem: the weights are free parameters, and tuning them by feel reintroduces the
opacity that disqualified PageRank. **This paper is about precisely that problem**,
and it was not surfaced by any web search in the first pass. From the abstract:

> it is common to assign a goodness score to each item as a weighted sum of its
> attribute values and rank them accordingly. Clearly, the ranking obtained depends
> on the weights used for this summation. Ideally, one would want the ranked order
> not to change if the weights are changed slightly. We call this property
> *stability* of the ranking.

**What it does.** Treats the weight vector as a point in a geometric space and asks
what fraction of a surrounding "region of interest" produces the same ranking. That
fraction is the stability score. The paper gives algorithms both to *assess* a given
ranking's stability and to *choose* weights that yield a stable ranking inside an
acceptable range. It handles the full-ranking case and, explicitly, the top-k case.

**The specific mechanism to borrow.** Do not pick the five weights in §3.3 by
intuition and defend them afterwards. Define an acceptable range for each weight,
then choose the weight vector whose ranking is stable across the largest share of
that range. The output is a defensible sentence for an editor: *these weights were
chosen because the foreground sets they produce are the ones that survive the widest
range of reasonable weightings.* That is a far better answer than either horn of the
dilemma §3.3 posed, and it dissolves the choice between "fix the weights at round
numbers" and "abandon the weighted sum for lexicographic tiers."

**Complexity at N=50, 5 weights.** The paper's own scaling concern is dimension, not
item count; five weights is a low-dimensional instance and 50 items is nothing. The
2D sweep and the sampling estimator are both tractable here. This is a rare case
where the research scale and the project scale line up.

**Verdict: USE THIS. Promote to the top tier alongside §1.5.1.** It answers the one
question section 3 left genuinely open, and it does so for exactly the ranking
architecture already recommended.

**Follow-on, same group.** Houming Chen, H. V. Jagadish, "The General Stability of
Ranking," 2026 (Elicit `ss-289748899`, no DOI yet; verify before citing externally).
Generalises the above from exact-match stability to a *distance-based* notion, so the
user specifies which ranking changes matter. From the abstract:

> once a perturbed weight vector produces a different ranking, exact stability gives
> it no credit, whether the change replaces the top-ranked item or only swaps two
> nearly tied lower-ranked items.

That distinction is live here. A swap between foreground slots 4 and 5 is invisible on
a card grid; a neighbour dropping out of the foreground entirely is the churn that
hurts. A distance function that weights eviction heavily and intra-foreground
reordering near zero is the right objective for this site, and this paper is the
formal frame for saying so. Treat as a design frame rather than an implementation
target, given it is brand new and uncited.

## 5.3 NEW: novelty detection as its own literature (TDT)

The first pass reached for diversity-selection methods because the brief named them.
Elicit shows there is a closer-fitting literature: **novelty and redundancy detection
over document streams**, from the Topic Detection and Tracking programme. It asks
literally the question in problem 2: does this new document carry information the
stream has not already carried?

- **James Allan, Ron Papka, Victor Lavrenko, "On-line New Event Detection and
  Tracking," SIGIR 1998, pp. 37–45.** DOI
  <https://doi.org/10.1145/290941.290954> · 636 citations. (Same SIGIR as MMR, which
  is a nice accident: the relevance-diversity and novelty-detection lines start
  together.) Single-pass clustering with a thresholding model; a new document is novel
  if its similarity to every prior document falls below a threshold. Strictly on-line:
  decide about a document before seeing later ones, which matches a site that adds one
  page at a time.
- **Yiming Yang, Jian Zhang, Jaime Carbonell, Chun Jin, "Topic-conditioned Novelty
  Detection," KDD 2002.** DOI <https://doi.org/10.1145/775047.775150> · 254
  citations. **The transferable idea, and it is a good one:** classify the document
  into a broad topic first, then test novelty *only against documents in that topic*.
  Two-stage beats one-stage substantially in their results. Mapped here: test a new
  extension for redundancy against the pages sharing its **Lens position** and its
  frames, not against all 45. That shrinks the comparison set from ~45 to ~6, makes
  the signal sharper (near-misses inside a Lens position are the real risk), and is
  the principled version of what §7's grounding pack already does informally by
  including "neighbors' existing readings."
- **Margarita Karkali, François Rousseau, Alexandros Ntoulas, Michalis Vazirgiannis,
  "Efficient Online Novelty Detection in News Streams," WISE 2013.** DOI
  <https://doi.org/10.1007/978-3-642-41230-1_5> · 45 citations. Scores novelty from an
  IDF-style function over the corpus **without pairwise comparison against every prior
  document**, and still beats several standard baselines. Directly relevant to the
  brief's constraint, "without a reviewer reading every existing page", though note
  the honest caveat: the efficiency motive does not apply at N=50, where all-pairs is
  free. What does transfer is the observation that corpus-level term statistics carry
  real novelty signal on their own. It is also the formal cousin of the
  inverse-frequency idea in §1.6.3, and it lands on the same side of that section's
  unresolved tension: rarity belongs in the novelty check.
- **Cem Aksoy, Fazli Can, Seyit Kocberber, "Novelty detection for topic tracking,"
  *JASIST* 63(4):777–795 (online 2011, issue 2012).** DOI <https://doi.org/10.1002/asi.21697> · open PDF
  <https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/asi.21697>. Useful for one
  empirical result: a **language-model** novelty method significantly outperformed
  **cosine-similarity** and cover-coefficient methods on their collection. That is a
  caution against assuming embedding cosine is automatically the best scorer in §2.1,
  and an argument for validating the choice on a handful of known-redundant pairs
  rather than adopting cosine by default.

**Verdict: THIS IS THE RIGHT LITERATURE FOR PROBLEM 2, AND THE FIRST PASS UNDER-WEIGHTED
IT.** §2.1's recommendation (MMR redundancy term) survives intact and is still the
thing to build, but the TDT line adds two things it lacks: the topic-conditioned
two-stage structure from Yang et al., which is a cheap and substantial improvement,
and a warning from Aksoy et al. about picking the similarity function on faith.

## 5.4 NEW: DPP applied to summarization, which sharpens the §2.2 verdict

**Alex Kulesza, Ben Taskar, "Learning Determinantal Point Processes," UAI 2011.**
Elicit `ss-1793631` · 172 citations · preprint <https://arxiv.org/abs/1202.3738>

The closest DPP application to this problem: extractive summarization, choosing a
small subset of sentences balancing relevance against non-repetition, evaluated on DUC
2003/04. Their framing of the tradeoff is the same one this project faces:

> there is a fundamental tradeoff between sentences that are highly relevant to the
> collection as a whole, and sentences that are diverse and not repetitive.

**Does this change the §2.2 verdict? No, and it is worth saying why explicitly.** It
strengthens the case that DPPs *can* do this kind of work, and it leaves the objection
untouched: DPPs solve *selection*, and this site selects nothing. Kulesza and Taskar
are choosing which sentences to keep out of many. Every thinker page ships. The
recommendation in §2.2 stands, including the narrow exception (log det(L) as a
corpus-health number).

One genuinely new datum from the same Elicit pass, on the practitioner side rather
than the theory side: **Wen Xiao, Giuseppe Carenini, "Systematically Exploring
Redundancy Reduction in Summarizing Long Documents," AACL 2020**, DOI
<https://doi.org/10.18653/v1/2020.aacl-main.51>, open PDF
<https://aclanthology.org/2020.aacl-main.51.pdf>. Organises redundancy-handling
methods by *when* redundancy is considered (before, during, or after generation). That
taxonomy is the useful part: this project's choice is between catching redundancy
*after* drafting (§2.1, a gate in `reading-gates.ts`) and preventing it *before*
drafting (§2.5, Lens allocation). The paper is evidence that the field treats these as
genuinely different interventions rather than substitutes, which supports doing both.

## 5.5 NEW: near-duplicate detection, with the N=50 verdict unchanged

Elicit adds one paper worth recording and confirms the rest of §2.3.

**Martin Potthast, Benno Stein, "New Issues in Near-duplicate Detection," GfKl 2007 (proceedings 2008).**
DOI <https://doi.org/10.1007/978-3-540-78246-9_71> · 29 citations. A taxonomy of the
principles behind fingerprinting methods, plus a public evaluation corpus. The useful
line: all of these methods are *fingerprinting* methods, which is another way of
stating §2.3's core objection, a fingerprint is a compressed surrogate for a document,
adopted because the real comparison is too expensive. At N=50 the real comparison is
free, so the surrogate buys nothing and loses fidelity.

Also confirmed: Sood and Loguinov, "Probabilistic near-duplicate detection using
simhash," CIKM 2011, DOI <https://doi.org/10.1145/2063576.2063737>, open PDF
<http://irl.cse.tamu.edu/people/sadhan/papers/cikm2011.pdf>. Their result is 4–14x
faster lookup over **70 million web pages**. The scale gap against 50 documents is
six orders of magnitude, which is the clearest possible statement of why this family
is overkill here.

Worth flagging one finding that cuts against SimHash on quality grounds, not just
scale: Seshasai (MIT thesis, 2009, Elicit `ss-14879984`) reports "the fragility of
simhash towards changes in the weighting of features" on a *small specialized
corpus*, which is exactly this corpus's shape. No DOI; treat as supporting colour, not a
citation to lean on.

**Verdict: §2.3 STANDS UNCHANGED.** Shingling plus exact Jaccard. No MinHash, no
SimHash.

## 5.6 NEW: direct evidence on PageRank and HITS stability under node addition

The first pass argued against PageRank partly on stability grounds and cited Ghoshal
and Barabási for it. Elicit surfaces a paper that tests the exact operation this
project performs, which is stronger evidence than the analytic result.

**Hyun Chul Lee, Allan Borodin, "Perturbation of the Hyper-Linked Environment,"
COCOON 2003.** DOI <https://doi.org/10.1007/3-540-45071-8_29> · open PDF
<http://www.cs.toronto.edu/~bor/Papers/perturbation-hyper-linked-environment.pdf> ·
20 citations. From the abstract:

> the issue of “link spamming” is closely related to stability: is it possible to
> boost up the rank of a page by adding/removing few nodes to/from it? In this paper,
> we study the stability aspect of various link analysis algorithms concluding that
> some algorithms are more robust than others. Also, we show that those unstable
> algorithms may become stable when they are properly “randomized”.

**Why it matters here.** "Adding a few nodes and seeing whether the ranking moves" is
not an analogy for this project's churn, it is a description of it: a new thinker page
is a new node. The paper's comparative conclusion, that link-analysis algorithms
differ materially in robustness to that operation, is the cited basis for treating
churn-resistance as a property to select a method *on*, rather than something to patch
afterwards. It also records that randomisation can stabilise an unstable algorithm,
which is the ancestor of the inflated-operator idea in §1.5.1: both buy stability by
refusing to commit to a single sharp answer.

**Ghoshal and Barabási, confirmed.** Elicit gives DOI `10.1038/ncomms1396`, PMID
21772265, 195 citations, Q1, open PDF
<https://www.nature.com/articles/ncomms1396.pdf>. The abstract confirms §1.5.5's use
verbatim: "for random networks the ranking provided by pagerank is sensitive to
perturbations in the network topology, making it unreliable for incomplete or noisy
systems."

**Also worth a line, and only a line.** Timonina-Farkas and Seifert, "Information
Retrieval Under Network Uncertainty: Robust Internet Ranking," *Operations Research*
(online 2022, issue 2023), DOI <https://doi.org/10.1287/opre.2022.2298> (Q1), extends robust PageRank to
networks uncertain in **the number of nodes**, not just links, which is formally this
project's setting. Recording it for completeness; it is a robust-optimisation
reformulation aimed at web-scale growing networks and is heavy machinery for a graph
that gains one node a fortnight. **Verdict: cite if someone insists on PageRank;
do not implement.**

## 5.7 What the Elicit pass changes, net

Three changes to the recommendations in section 3, and no reversals.

1. **Promote Asudeh et al. 2018 (§5.2) into the top tier.** It resolves the open
   question §3.3 raised about free weight parameters, and nothing in the first pass
   came close. New ranking: it sits alongside the inflated top-k.
2. **Add the topic-conditioned structure to the problem-2 recommendation** (Yang et
   al. 2002, §5.3). Compare a new extension against the pages sharing its Lens
   position and frames rather than against all 45. Cheap, and their two-stage result
   says it is also better.
3. **Validate the similarity function rather than assuming cosine** (Aksoy et al.
   2012, §5.3). A language-model scorer beat cosine significantly in their
   evaluation. Check on known-redundant pairs before committing.

Unchanged: PageRank no, HITS distinction only, MinHash and SimHash no, DPP as a
dashboard number only, MMR redundancy term as the core of problem 2, degree centrality
as the one graph signal worth a slot, hysteresis as the cheapest fix, and churn
measurement before anything else.

Honest note on method. The Elicit pass found the single most on-point paper in this
file (§5.2) and a whole literature the first pass under-weighted (§5.3). Both were
invisible to keyword web search because the vocabulary differs: this project's
"churn" is the literature's "stability under weight perturbation," and its "repeated
argument" is the literature's "redundancy in a document stream." That is a reusable
lesson about which tool to reach for, not a criticism of either pass.

## 5.8 Elicit systematic report: centrality choice and stability in small graphs

One `create_report` call was spent on the question section 1 rests on but never
tested: *at fewer than 100 nodes, do the sophisticated centralities actually rank
differently from degree, and which of them survive a node or edge being added?*
Report (12 sources screened from 60):
<https://elicit.com/review/5a35946c-1a94-4427-871f-04991febba7a> (private).

Elicit's own one-line summary:

> In small graphs, betweenness centrality can diverge meaningfully from degree
> centrality and is formally unstable under edge modifications, while degree and
> eigenvector centrality are provably stable, but no direct evidence exists for how
> PageRank or HITS rankings compare to degree or respond to perturbations in graphs
> with fewer than 100 nodes.

### 5.8.1 The formal result that settles §1.4

**Santiago Segarra, Alejandro Ribeiro, "Stability and Continuity of Centrality
Measures in Weighted Graphs," *IEEE Transactions on Signal Processing*
64(3):543–555, 2016.** DOI <https://doi.org/10.1109/TSP.2015.2486740> · Q1 ·
(earlier ICASSP versions: <https://doi.org/10.1109/ICASSP.2014.6854324>,
<https://doi.org/10.1109/ICASSP.2015.7178599>, the latter with 107 citations). From
the abstract:

> It is shown that the commonly used measures of degree, closeness and eigenvector
> centrality are stable, whereas betweenness centrality is not. [...] Betweenness
> centrality is shown to be not only unstable but discontinuous.

This is a **proof**, not an empirical trend, and their experiments run at n = 10 to
200, the only paper found in either pass whose tested range actually contains this
project's N=50. The numbers at n=100 under small edge-weight perturbation, average
maximum rank displacement:

| Measure | Avg. max rank change at n=100 | Stable? |
|---|---|---|
| Degree | **1.8** | Yes (Lipschitz, K_G = 1) |
| Eigenvector | 2.0 | Yes |
| Closeness | 2.6 | Yes (K_G = n) |
| Stable betweenness (their variant) | 2.7 | Yes |
| **Standard betweenness** | **5.9** | **No: unstable and discontinuous** |

Roughly 75–95% of networks kept the same top-five under the stable measures, versus
about 60% for standard betweenness. Instability grew roughly linearly with graph
size, fastest for betweenness.

**Effect on this file's recommendations.** §1.3 (use degree) and §1.4 (do not use
betweenness) were argued from reasoning about the measures' definitions. They are now
**quantitatively supported at the right scale**, and degree is not merely the
cheapest or the most explicable choice, it is the *provably most stable* one, by a
factor of about three over betweenness on the metric that matters here. Note also
that the paper supplies a **stable betweenness** variant, so if the bridge-thinker
diagnostic in §1.4 is ever built, build it on that variant rather than the standard
one.

### 5.8.2 Empirical confirmation, using exactly the metric §1.5.2 proposed

**Vladimir Ufimtsev, Soumya Sarkar, Animesh Mukherjee, Sanjukta Bhowmick,
"Understanding Stability of Noisy Networks through Centrality Measures and Local
Connections," CIKM 2016.** DOI <https://doi.org/10.1145/2983323.2983692> ·
preprint <https://arxiv.org/pdf/1609.05402>

They perturb real networks with random edge additions and measure **how many of the
top-k nodes survive, using the Jaccard Index**, which is precisely the churn metric
§1.5.2 recommended building first, arrived at independently. Their graph set includes
two under 100 nodes (Dolphins, 62; Les Misérables, 77). Findings that transfer:

- **Degree was the most stable measure overall.** Betweenness and closeness were
  erratic: on one network, top-10 Jaccard for both was **0**, a complete turnover.
- Two structural findings, and the second is directly actionable here:

  > the stability is dependent on the number of top-ranked vertices considered. When
  > the vertices are ordered according to their centrality values, they group into
  > clusters. Perturbations to the network can change the relative ranking within the
  > cluster, but vertices rarely move from one cluster to another.

  That is an empirical description of why the hysteresis and inflated-top-k
  recommendations work. Churn is concentrated *within* score clusters and is rare
  *across* them, so a dead band sized to a cluster absorbs nearly all of it. It also
  supports the coarser design option floated in §3.3: if items cluster anyway,
  **lexicographic tiers are closer to the data's real structure than a fine-grained
  weighted sum**, and the ordering inside a tier is noise that nobody should be
  tuning.

  > the stability is dependent on the local connections of the high ranking vertices.
  > The network is highly stable if the high ranking vertices are connected to each
  > other. [...] the stability of a network is affected by the local properties of
  > high centrality vertices, rather than the global properties of the entire network.

  Local, not global. The same conclusion §1.1 reached against PageRank by a different
  route.

**Also useful:** Kardos, London, Vinkó, "Stability of network centrality measures: a
numerical study," *Social Network Analysis and Mining* 10, 2020, DOI
<https://doi.org/10.1007/s13278-020-00693-0> (Q1, open PDF at
<https://link.springer.com/content/pdf/10.1007/s13278-020-00693-0.pdf>), which applies
Segarra and Ribeiro's formal definition across three perturbation categories. The
natural template if anyone wants to run this project's own stability experiment.

### 5.8.3 The honest gap, stated plainly

The report's most valuable output is a **negative** one, and it qualifies this file's
own §1.1:

> No study directly measured the stability of PageRank or HITS rankings under node or
> edge additions in graphs of any size.

and

> no evidence exists for how PageRank or HITS rankings compare to degree in graphs
> with fewer than 100 nodes.

Only two of the twelve studies examined PageRank at all, one examined HITS, and both
used graphs of 10,000 to 4.9 million nodes. So the §1.1 verdict against PageRank
should be understood precisely: the *architectural* arguments (it answers a global
question, it is opaque to an editor) are sound and independent of any evidence base.
The *stability* argument is an inference from Ghoshal and Barabási's random-network
result and Lee and Borodin's comparative work, **not** a directly measured small-graph
finding, because no such finding exists. The recommendation does not change, since
three independent arguments support it and only one is affected. But if someone
pushes back with "has anyone actually shown PageRank churns on a 50-node graph," the
correct answer is no, nobody has shown it either way.

Two further caveats worth carrying, both from the report:

- One study (Kumar 2015) found betweenness *most* robust and closeness least, which
  contradicts both Segarra–Ribeiro and Ufimtsev et al. The report attributes this to
  a different perturbation model (recording errors in Stochastic Kronecker Graphs
  rather than edge additions). Since this project's perturbation is genuinely an
  addition, the edge-addition results are the applicable ones, but the disagreement
  is real and is recorded rather than smoothed over.
- Divergence between degree and the others at n=100 was 7–13 average rank positions,
  measured on Erdős–Rényi-like random graphs. This graph is hand-curated with an
  editorial cap, so those magnitudes are indicative, not predictive.

### 5.8.4 Net effect on the recommendations

No reversals. Two strengthenings and one qualification:

1. **Degree centrality (§1.3) is now the evidence-backed choice, not just the
   pragmatic one.** Provably stable, empirically most stable under edge addition,
   ~1.8 positions of movement at n=100 against betweenness's 5.9.
2. **Jaccard-based churn measurement (§1.5.2) is the field-standard method**, used by
   Ufimtsev et al. for this exact question. Build it first, as already recommended,
   now with a template to copy.
3. **The anti-PageRank stability argument is an inference, not a measurement**
   (§5.8.3). Say so when presenting it.


---

## 6. URL verification, second pass (Elicit additions)

All URLs and DOIs added in section 5 were checked on 2026-09-20 by the same two-way
method used in section 4: direct HTTP for open links, Crossref metadata for publisher
DOIs that bot-block a command-line client.

Confirmed via Crossref with matching titles: `10.14778/3291264.3291269`,
`10.1145/290941.290954`, `10.1145/775047.775150`, `10.1007/978-3-642-41230-1_5`,
`10.1002/asi.21697`, `10.18653/v1/2020.aacl-main.51`, `10.1007/978-3-540-78246-9_71`,
`10.1145/2063576.2063737`, `10.1007/3-540-45071-8_29`, `10.1287/opre.2022.2298`,
`10.3115/1119089.1119120`, `10.1109/TSP.2015.2486740`,
`10.1109/ICASSP.2014.6854324`, `10.1109/ICASSP.2015.7178599`,
`10.1145/2983323.2983692`, `10.1007/s13278-020-00693-0`.

HTTP 200 confirmed: the arXiv preprints (1804.10990, 1609.05402, 1202.3738,
2506.02257), both ACL Anthology links, the Springer and Nature open PDFs, the Texas
A&M and Toronto author PDFs, and the Elicit report URL.

Three notes, recorded because they are the kind of thing that silently becomes wrong:

- **`10.48550/arXiv.2506.02257` is not in Crossref.** arXiv DOIs register with
  DataCite, not Crossref. Verified instead through
  `https://api.datacite.org/dois/10.48550/arxiv.2506.02257`, which returns
  "Assumption-free stability for ranking problems," 2025. Not a broken DOI.
- **Four year discrepancies between Elicit and Crossref**, all the ordinary
  conference-versus-proceedings and online-first-versus-issue gap: the TIPSTER MMR
  paper (Elicit 1998, Crossref 1996), Aksoy et al. (online 2011, issue 2012),
  Potthast and Stein (conference 2007, proceedings 2008), Timonina-Farkas and Seifert
  (online 2022, issue 2023). Each is now written with both dates rather than a silent
  pick.
- **Two items have no DOI and should not be cited externally without checking:**
  Chen and Jagadish, "The General Stability of Ranking" (Elicit `ss-289748899`), and
  the Seshasai MIT thesis (`ss-14879984`). Both are used above as supporting colour
  only, and both are flagged as such at the point of use.

One item from section 5 was deliberately not verified by fetching: **the Elicit
report body itself is a generated synthesis, not a primary source.** Every claim drawn
from it in §5.8 is attributed to the underlying paper (Segarra and Ribeiro, Ufimtsev
et al.), whose DOIs are verified above. The report's *negative* finding in §5.8.3, that
no study measures PageRank or HITS stability under node addition, is an absence-of-
evidence claim over the 12 screened sources and is stated in the file with that scope
attached, not as a claim about the whole literature.
