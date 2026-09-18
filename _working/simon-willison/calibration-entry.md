# Calibration entry: Simon Willison, 2026-09-17

Written by the shipping stage for a later stage to merge into
`.claude/skills/add-thinker/calibration.md`. Nothing here has been written to that file.

## Run log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-17 | Willison (new page, mode-a, pipeline run) | 5 accept | 3 (round 2 left one REVISE, so round 3 went back to five seats) | R1: 2 revise, 3 accept-with-edits; R2: 1 revise, 4 accept-with-edits; R3: 5 accept-with-edits | Extension credited Willison with Meta's "within a session" scoping, which appears nowhere in his post; a body-of-work link resolved to the series index and duplicated the entry above it; the slop gloss compressed @deepfates's own sentence into the site's paraphrase; Chromium's Rule Of 2 tested as an antecedent for the trifecta and ruled convergence; three round 3 seat assertions held as research and changed no page text; the Fowler return edge forced a demotion heavier than the edge it made room for |

Seats 1 and 3 dissented in round 1 and seat 5 in round 2, which is the pattern the skill already
predicts for the byline seat: it audits a rewrite for phrasing that was not there before, and round
2 is the first text it sees.

## New failure patterns

**The seat-report persistence gap recurred, so it is now a checklist item rather than an
observation.** The Larson entry recorded it first, this run hit it again, and two of two
pipeline-run pages now have a verdict record where a hand-run page has a transcript. The Willison
transcript says so in its own header. A fix is sitting uncommitted in the working tree as of this
writing: `.claude/workflows/thinker-pipeline.js` and `.gitignore` are modified so each seat writes
its report to `_working/_council/<date>/` before returning and the shipping stage assembles the
transcript from those files. That directory does not exist for this run, so the fix lands on the
next one and has not been exercised. Whoever merges these entries should confirm the fix got
committed, because an uncommitted fix to a recurring failure is the failure.

**A return edge can force a demotion worth more than the edge it makes room for.** Fowler was at
seven foreground neighbours, and the only off-site foreground edges available to demote were Kent
Beck, Ward Cunningham and Eric Evans. Larson's duplicated-claim test narrowed it to Beck or Evans,
both of whom are named in frame `co_originators`, and it stopped there. The tiebreak that decided it
was what each edge carries that appears nowhere else on the page: Beck's edge carries the two-hat
rule and the "make change easy" motto, Cunningham's carries the only credit for the wiki behind the
bliki, and Evans's carries the route DDD vocabulary took into the community, which is the least
load-bearing of the three. That is a real loss in exchange for a `parallel` edge the site wrote
itself. When the cap forces a demotion and every candidate is load-bearing, say so to Julie as a
decision rather than as a note.

**The novelty check reads neighbours, and Lens collisions do not respect adjacency.** The Willison
extension cites [P:5] three times. Allspaw's reading already uses [P:5]. Three Council rounds passed
without flagging it, and the checklist item is written as "the Lens position and the angle are not
already used by a neighbor," so a page with no edge to Allspaw is outside what that item asks
anyone to check. The angles differ, dark debt against combinatorial tool grants, and the collision
is still worth knowing about. Rewrite the checklist item to read across every page rather than
across neighbours, and keep the running list of Lens uses as the thing to check against.

**A neighbour's fact ledger can be failing before the return edge arrives.** `bun
scripts/fact-ledger.ts rich-hickey` and `martin-fowler` both exit 1 on `main`, because those legacy
pages have no `facts.md` or `page-claims.md`, and every `body_of_work` entry is therefore uncited.
Running the ledger on a neighbour after editing it says nothing on its own. Capture the exit code
before the edit, or check whether the page has a ledger at all. This also caps what a return edge
may be on a legacy page: a `parallel` edge adds no required ledger line, while a `critiques` or
`antecedent` edge adds one that a page with no `facts.md` cannot satisfy.

## Checklist items this run would add

- When the seven-neighbour cap forces a demotion and every candidate carries content that appears
  nowhere else on the page, rank by what the edge carries uniquely, then put the choice in front of
  Julie as a decision.
- Check a Lens position against every page's claims map, not against the new page's neighbours.
- Before editing a neighbour, record whether its fact ledger already exits 1. Legacy pages with no
  `facts.md` take `parallel` return edges only.
- Confirm the pipeline writes seat reports to disk before trusting a pipeline-run transcript to hold
  more than verdicts.

## Lens uses to fold into the checklist

Add to the running list in the Sameness section: Willison [P:5] (combinatorial tool grants on
agents), which is the second use of [P:5] after Allspaw (dark debt).
