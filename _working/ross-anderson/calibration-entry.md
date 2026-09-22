# Calibration entry: Ross Anderson

Stage 8 of `add-thinker/SKILL.md`. A later stage merges this into
`.claude/skills/add-thinker/calibration.md`. Do not edit `calibration.md` from here.

## Run log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-20 | Anderson (new page, mode-a, first deceased thinker) | 5 accept | 3 (round 2 left two REVISE, so round 3 went back to five seats) | R1: 4 accept-with-edits, 1 revise; R2: 3 accept-with-edits, 2 revise; R3: 5 accept-with-edits | Aviation comparison asserted in three fields including a primary neighbour edge with no ledger line; the 1993 method claim running through seven fields with nothing underneath it, which seat 4 voted REVISE on alone because the page's only executive instruction rests on it; a repair for one overclaim wrote a second one into the same sentence, inventing an LLVM warning out of "merged similar patches"; a solo credit softened in `reading` and `tagline` and left standing in `thirty_second_take`, caught by four seats a round later; "research students I advise" hardened to "doctoral student" in five fields |

Dissenting seats: 3 in round 1, then 3 and 4 in round 2. Round 1 dissent came from the grounding
seat, which the skill already predicts. Round 2 is the first recorded case of the security-executive
seat dissenting on a grounding defect rather than on a lens or prescription problem, and its report
gives the reason: the defect sat under the only instruction the page gives a leader.

This is the first run where the seat reports were on disk before the Ship stage read them. The fix
committed in `chore/pipeline-2026-09-17` works, and the transcript for this page is assembled from
eighteen files rather than from a verdict list. The "Caught once" item about a fix parked in a
working tree can be closed.

## New failure patterns

### 1. A true claim repeated across many fields with no ledger line, twice in one run

Round 1 found the aviation comparison asserted in `thesis`, in `reading` and in the primary David
Woods edge, with no line in `facts.md` mentioning aviation. Round 2 found the same shape one level
deeper: how the 1993 finding was reached, asserted in seven fields, also unledgered. Both claims
were true and both were in the paper's own text, so both were cheap to source and neither needed a
cut.

The existing checklist item already says a claim with no ledger line does not go on the page. What
this run adds is the repair branch. Sourcing beat cutting in both cases, and on the aviation one
cutting would have left a `strength: primary` neighbour edge standing on nothing. The check to run
before reaching for a cut is what else on the page depends on the claim.

Caught twice in one run, by different seats, on different claims. This belongs in the checklist.

### 2. A claim lowered on evidence in one field and left standing in another

Round 2 softened the solo credit for the textbook and the research communities in `reading` and in
`tagline`, on `[S:39]` and `[S:14]`. `thirty_second_take` kept the hard version, and it survived the
whole of round 2 before seats 1, 2, 3, 4 and 5 all reached it in round 3. The page was arguing with
itself in two directions, and `limits[2]` said in the site's own voice that crediting him alone
"describes a coiner where the evidence shows a convener and co-author".

Proposed check: when a claim is lowered on evidence, grep for every field that carries it and lower
them in the same pass. The claims map line for each field is the place to find them.

### 3. A repair for one overclaim writing a different overclaim into the same sentence

Round 1 caught "Rust, GCC and LLVM changed, and no reviewer was asked to look harder", which
flattened `[S:45a]`: Rust rejects by default, GCC merged a warning. The applied repair read "a GCC or
LLVM warning still ends at a human", which turned `[S:45a]`'s "LLVM merged similar patches" into a
warning that the source never mentions. Seats 1, 2, 3 and 4 all caught it in round 2.

This is adjacent to the existing item about rewrites adding new claims, and it is a sharper version:
the new claim was introduced by the fix for the old one, in the same clause, on the same source.
A repair that names a source should be read back against that source before it is applied.

### 4. A source's own term hardened by one step, then repeated

`[S:59]` is Anderson's own page, reading "The research students I advise are ... Nicholas Boucher".
The page said "doctoral student" in five fields, one of them the gated `extension`. The ledger line
had been added in round 1 precisely because the relationship was asserted with nothing behind it,
and the page then went one step past the line that had just been written for it.

Caught once. Filing it in "Caught once" rather than the checklist.

### 5. A return-edge plan goes stale against the review rounds that follow it

`_working/ross-anderson/return-edges.md` was written at stage 4 on 2026-09-20. Round 3, on
2026-09-21, struck "doctoral student" from five fields of the page. The Willison return-edge label
in the plan still read "his doctoral student Nicholas Boucher", so applying the plan as written at
Ship would have put back on a neighbour page the exact wording three review rounds removed from the
new one.

The stage order makes this structural rather than accidental. Return edges are drafted before the
Reading Protocol and applied after it, so anything the Councils change in between is change the plan
cannot see. Proposed check: at Ship, read every return-edge label against the final page, not
against the page as it stood when the plan was written.

Caught once, by the Ship stage rather than by a seat.

### 6. A recorded collapse simulation is not evidence about the current build

The plan recorded which neighbour `collapseRank` would demote on each page, simulated on 2026-09-20.
The commit that made an on-site page a heavy weight rather than an absolute guarantee is in `main`,
and the two demotions the plan named both still hold under it. They hold, and the plan's arithmetic
was checked again rather than trusted, which is what turned a recorded simulation into a fact about
this build. A recorded simulation ages against `src/lib/checks.ts` the same way a hand-kept lens list
aged against the roster.

Caught once.

## Open items this run did not close

- **P:3 crowding.** `bun scripts/lens-index.ts ross-anderson` puts five pages at "Boundary
  enforcement over code inspection": will-larson, nicole-forsgren, martin-fowler, alex-komoroske and
  this one. Seat 5 raised it in rounds 1 and 2, seats 2 and 5 left it open in round 3, and no seat
  proposed an edit. Seat 5's own argument for leaving it here is that this page is the only occupant
  whose boundary shipped as a compiler default. The crowding is a roster problem rather than a page
  problem, and it now has three sightings across two pages.
- **The tagline's "communities that formed around the gap".** Seat 1 recorded in round 3 that this
  outruns `[S:14]`, which names several research communities where one of them formed around the
  1993 gap. Recorded without an edit and still open.
- **`david-woods` fact ledger.** `bun scripts/fact-ledger.ts david-woods` exits 1 on `main` for five
  `body_of_work` coverage lines with no entry in its `page-claims.md`. The return edge applied on
  this branch is `parallel` and adds no required line, and the ledger output is byte-identical before
  and after the edit. The page's own gap is unchanged and unaddressed.
