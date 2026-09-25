# Gene Kim: applying the unanchored control's findings, 2026-09-25

The control's report is `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-run5-council-20260924/round-3-unanchored-control.md`,
findings G1 to G13 plus cross-batch notes. Each finding was checked against the branch tip
(`8cb10e1`, after Ship applied the return edges) before anything changed.

## The DORA contradiction (G6): there was none

The research and both audits recorded "Kim co-founded DORA" as unsourced ([S:26]) and flagged that
two live pages publish it. **The claim was sourced on this site the whole time**, on the two
neighbour ledgers that carry it:

- `_working/nicole-forsgren/facts.md` [S:13] cites DORA's own acquisition post, `https://dora.dev/news/dora-joins-google-cloud/`.
- `_working/jez-humble/facts.md` [S:18] cites Wikipedia's DORA article: "The DORA team was founded by Nicole Forsgren, Jez Humble and Gene Kim" (re-fetched 2026-09-25, string present).

The first-party sentence, fetched 2026-09-25 from the post dated December 20, 2018 and signed by The DORA
Team: "Accelerate: The Science of Lean Software and DevOps, authored by three of DORA's founders,
Nicole Forsgren, Jez Humble, and Gene Kim." It is now on this ledger as [S:26a].

Searched this pass, in order: the Wayback snapshot of `devops-research.com` dated 2018-06-28 (lists all
three under "Our Team", names no founders); Forsgren's own bio at `nicolefv.com/about` (names no
founder, links the announcement); the announcement itself (names them). The Google Cloud blog copy
has no Wayback snapshot. Four fetches plus the neighbour-ledger grep, inside the eight-call budget.

**Outcome:** no neighbour page needs lowering. `background` now states the fact, cited to [S:26a];
`inclusion_rationale` says what happened. [S:26] keeps its original text as the record of the gap,
with a dated RESOLVED addendum. **Precision note for whoever next touches the Forsgren ledger:** her
[S:13] says the announcement names the three "as the founders"; the post says "three of DORA's
founders." The live pages say "founding DORA with Jez Humble and Gene Kim", which the wording
supports, so no page change follows. The ledger line is one step harder than its source. Not edited
here, since that is another page's ledger.

**Calibration lesson:** `inbound-claims.ts` prints what the roster asserts about a person. A claim
it prints should be traced to the neighbour ledger carrying it before anyone records it as a gap. Two
audits read four bios for this and never opened the two files one directory over.

## Finding by finding

| Finding | State on branch tip | Action |
|---|---|---|
| G1 DORA measures gloss rests on filing convention | live | Gloss now says the measures came out of the six-year study Forsgren led across the 2014 to 2019 reports; [S:6] added to the gloss and attribution lines |
| G2 Three Ways enumerated in four fields | live | `thirty_second_take` and `reading` now name the shape; `thesis` and `named_frames[0]` keep the list; `extension` keeps its per-Way argument |
| G3 "byline" 13 times, single-byline fact in four fields | live | Reader-facing "byline" down to 7 uses, all where authorship is the point; single-byline fact removed from the take and the Five Ideals gloss, kept in `background` and `body_of_work[2]` |
| G4 reading opener shape echoes Beck | live | Opener rewritten: "The Three Ways were the first of Kim's numbered sets, posted in August 2012." |
| G5 ten build warnings | **closed by Ship** | Build shows no back-edge or frame-credit warning for gene-kim; the only mention is Forsgren's cap collapse of gene-kim and jez-humble, expected |
| G6 DORA | resolved, see above | |
| G7 live_edge explains frame policy | live | Kept the bounding half: "Both are under a year old and neither appears in the sources read here." |
| G8 limits[3] prints `original` | live | "The credit stays with him because the post carries his name alone" |
| G9 two `original` frames with no antecedent search | live | [S:5a] and [S:11a] added, cited on both attribution lines. Both zero-hit with positive controls. Five Ideals stays `original` as a named set; `limits[2]` now names Edmondson's 1999 study for the Fourth Ideal's term, on [S:29] |
| G10 disambiguation entry | live | "a one-line Wikipedia gloss calls that novel a fundamental book that introduced the concept of DevOps" |
| G11 "opening on" | live | "the first of them introduced with the claim" |
| G12 observations | not findings | No change. Adding *Vibe Coding* to `body_of_work` left to the editor, per the control |
| Cross-batch 2, shared closing move with Alexander | live | `still_load_bearing_despite` now leads on the dependency between flow, feedback and experiment, dropping "the order is the useful part" and "whoever numbered it" |

## Claim delta, per rewrite

| Field | Before | After | Delta |
|---|---|---|---|
| `inclusion_rationale` (backstage) | DORA founding cannot be sourced | Sourced on neighbour ledgers and [S:26a]; `background` carries it | NEW, [S:26a] |
| `background` | no DORA clause | he was one of DORA's founders, with Forsgren and Humble; Google acquired it in 2018 | NEW, [S:26a] ("one of", matching "three of DORA's founders") |
| `thirty_second_take` | full Three Ways enumeration; Five Ideals from "the one book with a single byline" | Three Ways put flow, feedback and a learning culture in that order; Five Ideals from *The Unicorn Project* | NARROWED |
| `why_they_matter_as_a_thinker` | "strongest byline evidence"; "Wikipedia's disambiguation entry ... describes" | "strongest evidence of authorship"; "a one-line Wikipedia gloss calls" | SAME |
| `named_frames[1].one_line_gloss` | single-byline clause | deleted | DELETION |
| `named_frames[4].one_line_gloss` | measures belong to Forsgren's research, her page carries them and their count | measures came out of the six-year study she led, her page carries them | SAME proposition, now on [S:6] |
| `body_of_work[0]` | "Short, bylined to him alone" | "Short" | DELETION (carried by the frame gloss) |
| `body_of_work[2]` | "The single byline" | "His one solo book" | SAME |
| `body_of_work[7]` | "opening on the claim" | "the first of them introduced with the claim" | NARROWED |
| `reading` s1 and s2 | "Kim's unit is the numbered set, and the earliest of them is published in order" plus full enumeration | "The Three Ways were the first of Kim's numbered sets, posted in August 2012." | NARROWED |
| `limits[2]` | psychological safety an existing term of art credited to nobody | adds "and the subject of Amy Edmondson's 1999 study of learning in work teams" | NEW, [S:29]; does not claim she coined it |
| `limits[3]` | "filed as original because the post carries his byline alone" | "The credit stays with him because the post carries his name alone" | SAME |
| `still_load_bearing_despite` | "the sequence is still there ... an ordering claim, and the order is the useful part ... holds whoever numbered it" | "one dependency is still there ... does not rest on who numbered the Ways or who printed them"; First Way "stands on its own terms too ... outlasts the set" | SAME |
| `live_edge.summary` | "neither has turned up yet in the sources read for this page, so they stay in prose here and get no frame entry" | "neither appears in the sources read here" | DELETION of apparatus |

Nothing is WIDENED. The three NEW rows each carry a new ledger line.

## Verification

- `bun scripts/fact-ledger.ts gene-kim`: PASS, 34 facts, 23 factual fields all cited. Unused warnings are [S:9], [S:26] and [S:28], all deliberate records.
- `bun scripts/reading-gates.ts gene-kim`: clean. `reading` 97 words, `extension` 153.
- `bun run build`: complete; no gene-kim warning beyond Forsgren's cap collapse.
- `bun scripts/verify.ts`: passed.
- Em dashes on the page: 0. No new em dash in any working file.
- No neighbour page or neighbour ledger was edited.

## Declined or left for others

- The Forsgren [S:13] "the founders" wording (one step harder than the source), noted above.
- The 2016 Facebook-group "Critique on Three Ways of Devops" that the positive control surfaced: not a durable artifact, not read, recorded in [S:5a].
