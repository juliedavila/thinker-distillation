# Kelly Shortridge: return-edge plan (stage 4)

Drafted 2026-09-28 at stage 3/4, before the Reading Protocol's review rounds. **Nothing here has been
applied.** Stage 7 applies it after re-reading it against the FINAL page: chase names, counts and
possessives (especially any "Shortridge's" or "Rinehart's" on *Security Chaos Engineering*), not only
sentences the rounds rewrote.

The new page links to five on-site thinkers, all `parallel`. Each gets one `parallel` edge back. None
is `critiques` or `antecedent`, so none adds a required ledger line on the neighbour.

Append each edge at the END of the neighbour's `adjacent_thinkers` list, so positional lines in the
neighbour's `page-claims.md` do not shift. Re-derive the index at Ship with
`rg -n "target_slug:" src/content/thinkers/<neighbour>.md` rather than trusting the number below.

## Neighbour ledger state, recorded before any edit

| Neighbour | `facts.md` | `fact-ledger.ts` today | Edge types it can take |
|---|---|---|---|
| nicole-forsgren | yes | exit 0 | any; planned `parallel` |
| erik-hollnagel | yes | exit 0 | any; planned `parallel` |
| ross-anderson | yes | exit 0 | any; planned `parallel` |
| david-woods | **no** | **exit 1 before this run** (no ledger) | `parallel` only; a rerun after the edit proves nothing |
| charity-majors | yes | exit 0 | any; planned `parallel` |

## Where each edge will land (prediction, to be checked against the branch build)

Measured against this sandbox's build with the new page present and no return edges applied
(`bun run build`, 2026-09-28). The collapse lines it prints today:
`nicole-forsgren: collapsed gene-kim, jez-humble`, `david-woods: collapsed jens-rasmussen`,
`charity-majors: collapsed cindy-sridharan`. Erik Hollnagel (7 edges) and Ross Anderson (6) collapse
nothing today.

The ranking collapses first a neighbour already credited in a frame and cannot see `strength`.
Four of the five pages would have to collapse something to take a new foreground edge, and on two of
them the first candidate is a heavy primary edge: on `erik-hollnagel`, David Woods is `primary_author`
of the joint cognitive system frame, so an eighth foreground edge would push Woods, Hollnagel's
co-author since 1983, off the main list; on `david-woods`, Hollnagel is credited inside the same frame.
So the plan hand-sets `render_tier: deep` on four of the five, per the calibration item on comparing
`strength` of what moves against what arrives.

| Neighbour | New edge | Hand-set tier | Expected result |
|---|---|---|---|
| nicole-forsgren | secondary | deep | collapsed; existing collapse line unchanged |
| erik-hollnagel | secondary | deep | collapsed; Woods keeps his card |
| ross-anderson | secondary | none | **foreground**, 7 of 7, no collapse |
| david-woods | secondary | deep | collapsed |
| charity-majors | secondary | deep | collapsed |

The merge request should say: linked back from five pages, in the foreground on one (Anderson) and in
the collapsed list on four. Ship must read the build's collapse lines after applying and confirm this;
if the batch is merged with other candidates, build the merged tree before anyone reads a merge request.

## The edges

Each label is written from the neighbour's side and opens with what Shortridge adds. Under each, one
line per sentence names the sentence on the new page it was compared against.

### 1. nicole-forsgren (append after `gene-kim`, currently index 10, so new index 11)

```yaml
  - target_slug: kelly-shortridge
    display_name: Kelly Shortridge
    edge_type: parallel
    edge_label: >
      Shortridge takes Forsgren's delivery research into a security argument.
      "From Lemons to Peaches" (2022) cites the 2019 State of DevOps report for
      the finding that deploying on demand is correlated with spending less
      time remediating security issues.
    strength: secondary
    render_tier: deep
```

Sources: `_working/kelly-shortridge/facts.md` [S:49] (the citation and its quoted sentence). Forsgren's
own ledger is not touched.

- Sentence 1 ("Shortridge takes Forsgren's delivery research into a security argument.") compared against
  the new page's Forsgren label sentence 2 ("The SecObs essay borrows Forsgren's distinction between
  outputs and outcomes ... and points it at security programs."): different work cited (2019 report vs
  Accelerate and SPACE), different words. Not near-same.
- Sentence 2 ("'From Lemons to Peaches' (2022) cites the 2019 State of DevOps report ...") compared
  against the new page's Forsgren label sentence 1 (the 2019 Black Hat co-presentation): different
  artifact. Not near-same. Also compared against `nicole-forsgren.md` itself: grep for "Shortridge",
  "Lemons" and "remediat" finds nothing, so no fact is repeated on the neighbour.

### 2. erik-hollnagel (append after `lorin-hochstein`, currently index 6, so new index 7)

```yaml
  - target_slug: kelly-shortridge
    display_name: Kelly Shortridge
    edge_type: parallel
    edge_label: >
      Shortridge carries the gap between work as imagined and work as
      practiced into software security, where someone is looking for it. In
      her summary of the 2023 book, attackers "search for our 'this will always
      be true' assumptions and hunt for loopholes."
    strength: secondary
    render_tier: deep
```

Sources: [S:50] (both quotations, and "work-as-practiced" / "work-as-imagined").

- Sentence 1 compared against the new page's Hollnagel label sentence 1 ("Her 2024 book summary describes
  the gap between 'work-as-practiced' and 'work-as-imagined', the pair Hollnagel carried through
  resilience engineering, without naming a source."): same subject, different claim (the new page
  records the missing source; this records the adversarial setting). Words differ. Not near-same.
- Sentence 2 compared against the new page's Hollnagel label sentence 3 ("What her version adds is
  someone exploiting the gap: 'Attackers take advantage of our incomplete mental models.'"): same point,
  **different quotation** chosen on purpose so the two cards do not carry the same line. Near in
  content, not in words. Stage 7 should decide whether one of the two is redundant.
- Round 2 update (2026-09-28): the new page's Hollnagel label sentence 3 now reads "What her version
  adds is an adversary who exploits the gap." and no longer quotes [S:50]; round 3 (2026-09-28) then
  deleted "Attackers take advantage of our incomplete mental models." from the extension, so that quotation is
  on neither page. This label's quotation is the only [S:50] attacker quotation
  on either Hollnagel card. Sentence 1 here ("where someone is looking for it") and the page's new sentence 3
  make the same point in different words; Stage 7 should read them side by side.
- Compared against `erik-hollnagel.md` itself: `further_in.if_you_want_breadth` already names the 2023
  book ("with attackers among the adverse events it prepares for"). The label names the book only as the
  source of a quotation and does not restate the further_in sentence.

### 3. ross-anderson (append after `ian-levy-crispin-robinson`, currently index 5, so new index 6)

```yaml
  - target_slug: kelly-shortridge
    display_name: Kelly Shortridge
    edge_type: parallel
    edge_label: >
      Shortridge argues security economics from inside the defender's budget.
      "From Lemons to Peaches" (2022) treats a security program as an
      investment whose return has to survive a successful attack, and her
      essay on security obstructionism finds an incentive problem inside the
      security team itself, in controls kept for the outputs, control and
      status they produce.
    strength: secondary
```

Sources: [S:49] ("Information security is an economic problem and organizational investment in it
therefore bears an expected return"; the ROI argument), [S:41] (outputs, control, status).

- Sentence 1 compared against the new page's Anderson label sentence 1 ("Both treat security as
  economics, from different ends."): different claim and words. Not near-same.
- Sentence 2 compared against the new page's Anderson label sentence 3 ("Shortridge prices the
  defender's own spending: what a program returns once prevention fails, and what obstruction costs the
  organization that pays for it."): **near in content.** Reworded and extended with the in-team incentive
  point, which the new page's label does not carry. Stage 7: if a review round rewrites the new page's
  Anderson label, re-compare this sentence.
- The label claims resemblance only. No ledger line shows Shortridge citing Anderson or Anderson citing
  her, and the label asserts neither. Compared against `ross-anderson.md`: grep for "Shortridge" and
  "obstruction" finds nothing.

### 4. david-woods (append after `ross-anderson`, currently index 7, so new index 8)

```yaml
  - target_slug: kelly-shortridge
    display_name: Kelly Shortridge
    edge_type: parallel
    edge_label: >
      Shortridge's 2020 primer on resilience in security insists that
      "Robustness does not equal resilience," close to Woods's point that
      robustness to known threats is locally useful and globally fragile.
    strength: secondary
    render_tier: deep
```

Sources: [S:51] (the quotation). The Woods half paraphrases `david-woods.md`'s own `thesis`, which has
no ledger behind it; the label adds no fact about Woods beyond what his page already states.

- Single sentence, compared against the new page's Woods label sentences 1 and 2 (the "Features of
  resilience" citation; her primers build from ecology): different fact entirely. Not near-same.
- "close to" is the site's comparison and is worded as one. It does not say she drew on him.

### 5. charity-majors (append after `jez-humble`, currently index 9, so new index 10)

```yaml
  - target_slug: kelly-shortridge
    display_name: Kelly Shortridge
    edge_type: parallel
    edge_label: >
      Where Majors asks whether telemetry can answer a question nobody
      predicted, Shortridge asks whether a security control does what its
      builders believe, and settles it by experiment. Security chaos
      engineering injects the adverse condition on purpose to find out.
    strength: secondary
    render_tier: deep
```

Sources: [S:55] (continual experimentation "to verify that our systems operate the way we believe"; this line was cited as [S:49] until round 2, which records the paper but not this passage) and [S:53].

- Sentence 1 compared against the new page's Majors label sentence 2 ("Majors argues for testing against
  real traffic behind guardrails; Shortridge argues for injecting attack conditions to check that security
  controls behave as believed."): the Majors half differs (telemetry question vs testing in production).
  The Shortridge half is **near in content** ("behave as believed" / "does what its builders believe").
  Reworded. Stage 7 should read the two side by side.
- Sentence 2 compared against the same new-page sentence: shares "inject". Different construction.

## Mechanical checks run on every label above

- Backticks: none. `edge_type` words (antecedent, extends, critiques, parallel, synthesizes, hosts):
  none in any label text.
- Em-dashes: none. Asterisks: none (they render literally in labels, site-wide).
- Possessives on *Security Chaos Engineering*: none. The only book reference is "her summary of the 2023
  book", which makes no byline claim.
- Present tense only; nothing claims the edge already exists.

## Not a return edge, recorded for Ship

The Hollnagel page's `further_in.if_you_want_breadth` sentence about *Security Chaos Engineering* (2023)
stays as it is. Its byline matches the cover. "Resilience engineering" holds: the SecObs essay cites
Rasmussen (1997) and a 2017 resilience paper Woods co-wrote ([S:40]), and the book summary uses
"work-as-imagined" and "safety boundaries" ([S:50], [S:16]). The Shortridge page carries the other half,
that her primers credit ecology. No edit is needed; the merge request should name the difference.

## Cold reader editor update, 2026-09-28

The cold reader's edits changed three of the new page's labels after the comparisons above were written.
Stage 7 compares against these, not against the quotations above:

- Forsgren label sentence 2 now reads: "The SecObs essay cites Accelerate and the SPACE paper, both with
  Forsgren as first author, for "outputs aren't outcomes", and points the distinction at security
  programs." The possessive "Forsgren's distinction" is gone. The planned return label's "Forsgren's
  delivery research" is a possessive on work [S:49] records as the 2019 State of DevOps report
  (Forsgren et al.); Stage 7 should check it against that byline before applying.
- Hollnagel label sentence 1 now calls her pair "a variant of the work-as-imagined and work-as-done pair
  Hollnagel carried through resilience engineering", and says she "names no source". The ecology sentence
  was cut from that label. The planned return label's "practised" is now "practiced" (site spelling).
- Majors label sentence 2 now ends "to test security controls". The near-duplicate noted under edge 5
  ("behave as believed" / "does what its builders believe") no longer exists on the new page.

## Applied at Ship, 2026-09-28

Re-read against the final page (after the cold reader editor) before applying. All five edges appended
at the end of each neighbour's `adjacent_thinkers`, so no positional claims line on any neighbour moved.
Three labels changed from the plan above:

- **nicole-forsgren**, sentence 1. Plan: "Shortridge takes Forsgren's delivery research into a security
  argument." Applied: "Shortridge takes this delivery research into a security argument." and sentence 2
  now names the report "Forsgren et al." The possessive sat on a multi-author report that `[S:49]`
  records as "Forsgren et al.'s 2019 State of DevOps report". Claim delta: NARROWED.
- **erik-hollnagel**, sentence 1. Plan: "... into software security, where someone is looking for it."
  Applied: "Shortridge carries the gap between work as imagined and work as practiced, her wording, into
  software security." The adversary clause repeated the new page's own Hollnagel label sentence 2 ("What
  her version adds is an adversary who exploits the gap"), and sentence 2's `[S:50]` quotation already
  carries the attacker. "her wording" marks "practiced" as hers, since his pair is work-as-done. Claim
  delta: NARROWED (one clause deleted, one attribution added).
- **ross-anderson**, sentences 1 and 2. Plan: "argues security economics from inside the defender's
  budget" and "finds an incentive problem inside the security team itself, in controls kept for the
  outputs, control and status they produce." Applied: "applies the economic argument to the defender's
  own program" and "locates an incentive problem inside the security team itself: controls that, in her
  account, persist for the outputs, control and status they produce." The cold reader lowered this motive
  from site voice to her account in `reading`, `thesis` and `tagline` (its finding 2); the plan predated
  that and would have put the settled form on Anderson's page. Sentence 1 was reworded because "the
  defender's budget" sat close to the new page's Anderson label ("prices the defender's own spending").
  Claim delta: NARROWED.
- **david-woods** and **charity-majors**: applied as planned.

Build after applying (`bun run build`, exit 0). Collapse lines for the five neighbours match the plan's
baseline exactly: `nicole-forsgren: collapsed gene-kim, jez-humble`, `david-woods: collapsed
jens-rasmussen`, `charity-majors: collapsed cindy-sridharan`; Hollnagel and Anderson print none. Read
from the built HTML: the new edge is in the foreground on Anderson (7 of 7) and inside the collapsed
list on Forsgren, Hollnagel, Woods and Majors, all four by hand-set `render_tier: deep`. No existing
edge lost its card, so there is no demotion for Julie to review. The five "has no edge back to
kelly-shortridge" warnings the cold reader editor recorded are gone.

Ledgers after applying: `nicole-forsgren`, `erik-hollnagel`, `ross-anderson`, `charity-majors` exit 0.
`david-woods` has no `facts.md` and exited 1 before this run, so its result proves nothing.
