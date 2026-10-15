# Alex Komoroske: claim-delta table, 2026-10-15

Remediation pass under the claim-delta gate, against `facts.md` (S:1 to S:34, no lines added) and
the findings in `ledger-findings.md`. Pages touched: `src/content/thinkers/alex-komoroske.md` and
`src/content/long-read/alex-komoroske/01-the-diagnosis.md`. Launch-inventory item A16 is covered by
the long-read rows marked (A16).

Categories: SAME, NARROWED, CORRECTED, Deletion. No row is NEW or WIDENED. Three rows add text that
was not on the page before, and each is the corrected form of a proposition the page already made,
which is why they are filed CORRECTED: the gardener frame's two `co_originators` (the page said
`original`, meaning no earlier holder; the record names two), and the two sentences giving
Komoroske's own account of where the headwind argument came from (the page asserted a lineage
through Brooks, and the corrected lineage is the one his homepage gives, S:1). Julie may prefer
to treat those three as additions and spot-check them first.

## Thinker page

| field | before (short quote) | after (short quote) | delta | supporting |
|---|---|---|---|---|
| active_years | "2014–present" | "2015–present" | CORRECTED | S:22, S:20 |
| background | "Google Chrome and Salesforce platforms, Stripe Climate and identity" | "thirteen years at Google ... Search and DoubleClick, led Chrome's Open Web Platform and led Augmented Reality in Google Maps ... Head of Corporate Strategy at Stripe ... by 2024 he was co-founding a startup" | CORRECTED | S:3, S:24, S:21, S:20 |
| background | "spent his career inside platforms (...)" | Deletion of the framing clause (career now stated by employer) | Deletion | S:3 |
| inclusion_rationale | "gardener-vs-architect" | "gardener-vs-builder" | CORRECTED | S:8, S:21, S:34 |
| inclusion_rationale | "and consulting practice" | Deletion | Deletion | none (no line) |
| why_they_matter_as_a_thinker | "He names things: coordination headwind, ... the Schelling point, adjacent possible" | "the vocabulary: ... Some of the names are his and some he takes from earlier use" | NARROWED | S:4, S:10, S:11, S:16, S:17 |
| why_they_matter_as_a_thinker | "the bramble" in the list of his names | Deletion | Deletion | S:31 |
| thesis | "gardened, not architected" | "gardened, not built" | CORRECTED | S:8, S:21 |
| thesis | "Organizations that ignore this pay a tax that grows faster than they expect" | "Large organizations pay a coordination tax that grows faster than they expect ... even when everyone in them is competent and collaborative" | CORRECTED | S:1, S:4 |
| working_line | "Most organizations work like the opposite of the slime mold. There is a roadmap ..." | "Many organizations are basically slime molds. Instead of trying to fight that, maybe lean into what slime molds are good at, and think of yourself less as a builder and more as a gardener." | CORRECTED | S:5, S:8 |
| named_frames[0].co_originators[0] | "fred-brooks, original 1975 (Brooks's Law ...)" | Deletion | Deletion | S:13, S:34 |
| named_frames[0].attribution | "extended" with Brooks as originator | "extended", no co-originator named (the value is unchanged; the narrowing is the co-originator deletion above) | NARROWED | S:4, S:9, S:12, S:13, S:34 |
| named_frames[0].source_link | "medium.com/@komorama" | "komoroske.com/slime-mold/" | CORRECTED | S:4 |
| named_frames[1].source_link | "medium.com/@komorama" | "komoroske.com/slime-mold/" | CORRECTED | S:4, S:6 |
| named_frames[2].one_line_gloss | "Make the secure default the obvious one." | Deletion (the site's application, not in the essay) | Deletion | S:9, S:10 |
| named_frames[2].source_link | ".../on-schelling-points-in-organizations" (404) | ".../on-schelling-points-in-organizations-e90647cdd81b" | CORRECTED | S:25, S:9 |
| named_frames[3].display_name | "Gardener vs. architect" | "Gardener vs. builder" | CORRECTED | S:8, S:21, S:34 |
| named_frames[3].one_line_gloss | "plan and propagate (architect)" | "plan and propagate (builder)" | CORRECTED | S:8 |
| named_frames[3].attribution | "original" | "extended" | CORRECTED | S:26, S:27 |
| named_frames[3].co_originators | none (implied by `original`) | "brian-eno: earlier architect-to-gardener contrast (Edge, 2011); whether Komoroske drew on it is unrecorded"; "stanley-mcchrystal: earlier 'leading like a gardener' (Team of Teams, 2015); whether Komoroske drew on it is unrecorded" | CORRECTED (part of the attribution correction; the route clause added in review) | S:26, S:27, S:34 |
| named_frames[3].source_link | "komoroske.com" | "komoroske.com/gardening-platforms/" | CORRECTED | S:21 |
| named_frames[4].display_name | "The heroics smell" | "Heroics as a symptom" | CORRECTED | S:7, S:28 |
| named_frames[4].one_line_gloss | "If your system requires heroes to keep working, your system is broken." | "Heroics are a symptom of the headwind and a poor response to it: the churn they create raises the headwind they were meant to overcome." | CORRECTED | S:7, S:4 |
| named_frames[4].attribution | "original" | "extended" | CORRECTED | S:28, S:29, S:34 |
| named_frames[4].source_link | "medium.com/@komorama" | "komoroske.com/slime-mold/" | CORRECTED | S:7 |
| named_frames[5].source_link | "komoroske.com" | ".../the-iterative-adjacent-possible-af3e7038357d" | CORRECTED | S:16 |
| body_of_work[0] | "The Coordination Headwind Essay", essay, 2018 | "Coordination Headwind: How Organizations Are Like Slime Molds", talk, "online by 2021", linked | CORRECTED | S:4, S:1, S:19, S:9 |
| body_of_work[0].editorial_note | "The keystone." | "A slide deck, and the keystone." | CORRECTED | S:4 |
| body_of_work[1] | year 2019 | year 2021, linked | CORRECTED | S:9, S:25 |
| body_of_work[1].editorial_note | "Pairs with the headwind essay" | "Pairs with the headwind deck" | CORRECTED | S:4, S:9 |
| body_of_work[2] (old) | "The Bramble / Slime Mold Essay" | Deletion (no such separate work; the slime-mold piece is the deck) | Deletion | S:4, S:31 |
| body_of_work[2] (was [3]) | "Platform conference talks (Google, Stripe)"; "Adds the verbal hedges ..." | "Gardening Platforms", talk, 2023; "A deck, also given as a talk at the Summer of Protocols in 2023, that carries the gardener stance into platform work." | CORRECTED | S:21, S:22, S:23 |
| reading, sentence 2 | "Brooks named the same cost for software teams in 1975, and Komoroske extends it to all collaborative work." | Deletion | Deletion | S:13 |
| reading, sentence 3 | "from architect to gardener" | "from builder to gardener" | CORRECTED | S:8, S:21 |
| reading, sentence 4 | "The heroics smell is the diagnostic ...: a system that needs heroes to keep working is already broken." | "Heroics are the symptom that goes with the headwind, and a poor answer to it, because the churn they create raises the drag they were meant to beat." | CORRECTED | S:7, S:4 |
| adjacent_thinkers[0].edge_type | antecedent | parallel | NARROWED | S:13, S:34 |
| adjacent_thinkers[0].edge_label | "Brooks named the coordination cost in 1975" | "Brooks described a coordination cost in 1975" | NARROWED | S:12 |
| adjacent_thinkers[0].edge_label | "Komoroske generalized the same physics from engineering to all coordination work." | "the headwind covers similar ground for all collaborative work ... His deck and his Schelling-points essay do not mention Brooks, so the pairing is this site's reading." | NARROWED | S:4, S:9, S:13, S:34 |
| adjacent_thinkers[0].edge_label | (lineage through Brooks) | "Komoroske's homepage says his argument started when he was studying Wikipedia's user community and was informed by web standards work." | CORRECTED (the lineage on his own account) | S:1 |
| adjacent_thinkers[1].edge_label | "Komoroske borrows it explicitly." | "His Schelling-points essay borrows the term along with Schelling's own Grand Central example." (review) | NARROWED | S:10, S:11 |
| adjacent_thinkers[4].edge_label | "borrows directly from Kauffman via Johnson's *Where Good Ideas Come From*" | "'Adjacent possible' is Kauffman's term, and Johnson's ... (2010) builds on it and cites him. Komoroske presents it as existing usage ('sometimes known as your adjacent possible') and names neither." | CORRECTED | S:16, S:17, S:18, S:33 |
| further_in.start_here | "The Coordination Headwind Essay (2018)" | "The Coordination Headwind slide deck (online by 2021)" | CORRECTED | S:4, S:19 |
| further_in.then_read | "The Bramble / Slime Mold Essay" | Deletion | Deletion | S:4, S:31 |
| body_of_work[3].editorial_note | "the keystone essays grow out of" | "the keystone pieces grow out of" (review) | CORRECTED (follows the keystone being a deck) | S:4 |
| long_read.summary | "heroics smell" | "heroics as a symptom" | CORRECTED | S:7 |
| extension, sentence 4 | "Toward adversaries it architects" | "Toward adversaries it builds" | SAME (the site's proposition is unchanged; the verb follows the corrected stance pair) | S:8 |
| background | "with a long arc of writing on Medium that runs parallel" | "A long arc of writing on Medium runs parallel to the institutional work." | SAME | S:2, S:20 |
| last_updated | 2026-05-25 | 2026-10-15 | SAME (page metadata, no claim about the thinker) | n/a |

## Long read, `01-the-diagnosis.md`

| field | before (short quote) | after (short quote) | delta | supporting |
|---|---|---|---|---|
| summary | "and the heroics smell" | "and heroics as a symptom" | CORRECTED | S:7 |
| The slime mold, para 4 (A16) | "He uses it as a viral hook, which he is the first to admit. He has said openly that a memorable metaphor is not a rigorous proof ..." | Deletion | Deletion | none (no line) |
| The slime mold, para 4 | "The question it asks is the right one." | Deletion | Deletion | none |
| The slime mold, para 4 | "This is the image Alex Komoroske comes back to." | "This is the image at the center of Alex Komoroske's slide deck *Coordination Headwind: How Organizations Are Like Slime Molds*, whose Tokyo slide shows the experiment." | NARROWED | S:4, S:6 |
| The slime mold, para 5 | "The question is: *why is this not how most organizations work?*" | "The title carries the claim. 'Many organizations today are basically a slime mold,' the deck says, and it sets the slime mold against 'the stereotypical example of top-down,' a military. Its list for the bottom-up side reads ..." | CORRECTED | S:5 |
| The slime mold, para 5 (review) | "The title carries the claim." | "The title carries the claim, that organizations are like slime molds." | SAME (restructured so the sentence names its claim; the title is already quoted in para 4) | S:4 |
| The slime mold, para 6 | "Most organizations work like the opposite of the slime mold. There is a roadmap ... It moves slower than the slime mold" | "That is where the trouble starts. Komoroske's homepage describes the deck as showing 'why even when everyone is competent and collaborative ...' In the deck's words, 'The force is the coordination headwind. This force emerges on its own,' ..." | CORRECTED | S:1, S:4, S:5 |
| The slime mold, para 7 | "Komoroske's claim is that the slime mold is not the exception ... The org chart is the deviation ... the deviation costs you something real." | Deletion | Deletion | S:4, S:5 |
| The slime mold, para 8 | "The thing it costs you is what he calls coordination headwind." | merged into para 6 ("The force is the coordination headwind") | CORRECTED | S:4 |
| What coordination headwind is, para 2 | "The original observation is older than Komoroske. Fred Brooks named it in 1975" | "An overlapping observation is older than Komoroske. Fred Brooks made it in 1975" | NARROWED | S:12, S:13 |
| What coordination headwind is, para 2 | "Komoroske generalized it." | "Komoroske's deck does not mention Brooks, and reading the headwind as a wider version of Brooks's Law is this guide's comparison." | NARROWED | S:4, S:13 |
| What coordination headwind is, prescription | "Komoroske's prescription is to be more like the slime mold." | "Komoroske's prescription is to stop fighting the slime mold: 'Instead of trying to fight it, maybe lean into what they're good at.'" | CORRECTED | S:5 |
| What coordination headwind is, failure flavors | "The bramble-bush moment where every team has reinvented the same wheel." | Deletion (his bramble image is about product demand) | Deletion | S:31 |
| The Schelling point underneath | "it is what Komoroske borrows when he says coordination is power" | "Komoroske's essay takes the term along with Schelling's own example, a meeting at 'Noon beneath the clock in Grand Central Terminal.'" | NARROWED | S:10, S:11 |
| heading | "The heroics smell" | "Heroics as a symptom" | CORRECTED | S:7 |
| Heroics, para 2 | "If your system requires heroics to function, your system is broken." | "In the deck, heroics are a symptom of the headwind and a poor response to it: 'All of these heroics and motion create churn and more uncertainty,' and 'Heroics also tend to make the problem way worse.'" | CORRECTED | S:7 |
| Companion sidebar | "The slime mold is the most viral image Komoroske uses" | "The slime mold is the image Komoroske uses" | NARROWED | S:4, S:15 |
| Critique sidebar lead (A16) | "Komoroske is the first to flag that the slime mold is a rhetorical move, not a rigorous one." | Deletion | Deletion | none (no line) |
| Critique sidebar, heading (A16) | "The attribution gap." | "Where the terms come from." | NARROWED (the label names the subject and charges no one) | S:10, S:16 |
| Critique sidebar (A16) | "The intellectual lineage runs through Brooks, Schelling, Stuart Kauffman, Elinor Ostrom, and the Santa Fe Institute tradition." | "Some of the vocabulary is older than his use of it, and his own text treats it as established. The Schelling-points essay calls the Grand Central meeting 'the canonical example,' and the adjacent-possible essay opens its term with 'This is sometimes known as your adjacent possible.' Neither essay names Thomas Schelling or Stuart Kauffman, whose terms they are." | NARROWED (Brooks, Ostrom and the Santa Fe Institute dropped; Brooks is handled in the headwind section) | S:10, S:11, S:16, S:17, S:33 |
| Critique sidebar (A16) | (lineage through Brooks and others) | "His homepage says the ideas behind the headwind argument started when he was studying 'the emergent power dynamics of Wikipedia's user community in undergrad,' and were informed by web standards work." | CORRECTED (the lineage on his own account) | S:1 |
| Critique sidebar (A16) | "Komoroske is a synthesizer of an existing literature." | Deletion | Deletion | none (no line; a verdict on standing) |
| Critique sidebar (A16) | "Treat him as your entry point, not your endpoint." | "Readers who want the older sources can start with Schelling's *The Strategy of Conflict* and Kauffman's work on the adjacent possible." | NARROWED (reading advice, no verdict) | S:11, S:17 |
| Primary sources | "(the original observation; coordination headwind is its generalization)" | "(an earlier observation about coordination cost in software teams)" | NARROWED | S:12, S:13 |
| last_updated | 2026-05-23 | 2026-10-15 | SAME (metadata) | n/a |

## Counts

73 rows: 39 CORRECTED, 15 NARROWED, 14 Deletion, 5 SAME. Non-SAME: 68. NEW: 0. WIDENED: 0.
(Before the review: 70 rows, 38 CORRECTED, 14 NARROWED, 14 Deletion, 4 SAME.)

## Review, 2026-10-15

An independent review by a reader who did not make the pass. Every row was checked against
`git diff origin/main -- src/` and every hunk in the two Komoroske files has a row; the counts
above were recounted from the table. Each non-SAME after-text was read against the ledger line it
cites, not its label. No row was found to state a fact more weakly than its source, and the
Deletion rows that cite "none" each remove a claim with no ledger line or a verdict on standing,
which SCHEMA section 8 keeps off the page.

**Changed in place.**

- `working_line`: restored the deck's "maybe" before "lean into" (S:5). The line renders as
  "paraphrased", so the source's hedge belongs in it; dropping it made the paraphrase slightly
  stronger than the deck.
- `named_frames[3].co_originators`: each role now ends "whether Komoroske drew on it is
  unrecorded." SCHEMA 4.11 (Convergence) asks a frame credit to say how the holders got there, or
  that the route is unrecorded. With `extended` and two earlier holders and no clause, the credit
  read as a lineage from Eno and McChrystal, the same kind of claim the pass removed for Brooks.
  S:26 and S:27 show priority only, and S:34 shows him mentioning both men on other subjects.
- `adjacent_thinkers[0]`: dropped "and his notes" from the list of works that do not mention
  Brooks. S:34 says the fetched view of the notes may not hold the whole document, so the
  negative is strong but incomplete; the deck and the essay (S:4, S:13) carry it at full strength.
- `adjacent_thinkers[1]` (Schelling): "Komoroske borrows it explicitly" read as an explicit
  credit, which S:10 says the essay does not give, and which the long read now states. Narrowed to
  what the essay borrows: the term and Schelling's Grand Central example (S:10, S:11).
- `body_of_work[3].editorial_note`: "keystone essays" became "keystone pieces", since the
  keystone is now a deck (S:4). The site's own "bramble" metaphor in that note is left; it is not
  attributed to him.
- Long read: "The title carries the claim" now names the claim; the companion sidebar's
  "Komoroske's image" became "the image Komoroske uses", so it cannot read as ownership of the
  Tokyo experiment.
- `page-claims.md`: added S:34 to both `named_frames[3].co_originators` lines and reworded the
  Brooks parenthetical to match the edge.

**Checked and left.**

- The three rows the pass flagged as possible additions (the two co-originators and Komoroske's
  own account of where the argument started, on the Brooks edge and in the critique sidebar) are
  kept as CORRECTED. Each replaces a proposition the page already made: `original` asserted no
  earlier holder, and the Brooks lineage asserted a route. SCHEMA 4.11 asks for the route where
  the record has one, and S:1 is his own account.
- `named_frames[0]` and `named_frames[4]` keep `extended` with no co-originator. With Brooks
  gone, nothing on the page says what the headwind extends, and the CMM antecedent for heroics
  (S:28, S:29) has no slug. Changing either to `original` would widen the claim, and no ledger
  line runs an antecedent search wide enough to support it. Left for a sourced decision.
- "gardened, not built" in the thesis keeps the shape of the old "gardened, not architected." It
  is the X-not-Y form rather than the banned "not X but Y" form; the sentence after it ("is not to
  plan ...; the leader's job is to") is a pre-existing antithesis the pass did not touch.
- Other pages still carry the retired claims, per `ledger-findings.md`: the Fred Brooks page
  ("Komoroske attributes Brooks throughout", "Komoroske 2018"), David Woods ("gardener-vs-architect"),
  Nicole Forsgren ("coordination-headwind essay") and the coordination-headwind concept page.
  They are outside this slug and were not edited.
