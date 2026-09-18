# Calibration entry: Will Larson, 2026-09-17

Written by the shipping stage for a later stage to merge into
`.claude/skills/add-thinker/calibration.md`. Nothing here has been written to that file.

## Run log row

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-17 | Larson (new page, mode-a, pipeline run) | 5 accept | 3 (round 3 back to five seats, round 2 left two REVISE) | R1: 3 revise, 2 accept-with-edits; R2: 2 revise, 3 accept-with-edits; R3: 5 accept-with-edits | Shipped `critiques` edge on Forsgren asserted the opposite of the primary sources; seat-level findings never reached disk; on-site neighbours count as foreground whatever their `render_tier`; positional `page-claims.md` lines broke when an edge was inserted mid-list |

Seats 3 and 5 were the round 2 dissenters after seats 1, 2 and 5 dissented in round 1, which is the
pattern the skill already predicts: those two seats audit a rewrite for claims that were not there
before, and round 2 is the first text they see.

## New failure patterns

**The pipeline does not persist seat reports, so a pipeline-run page cannot have a real transcript.**
`.claude/workflows/thinker-pipeline.js` records `{summary, dissenters}` per round in memory and
passes it to the next round. Seat findings and suggested edits are never written to disk. The
shipping stage can therefore write verdicts and dissent and nothing else, while SKILL's cost-control
section says to save every seat report as it arrives. The Larson transcript is a verdict record and
says so in its own header. Either the workflow writes each report under the transcript directory as
it returns, or every page that ships through the pipeline loses the review record that pages shipped
by hand keep. Caught once, on this run.

**`render_tier: deep` does nothing on a neighbour with a page here.** `orderNeighbors` in
`src/lib/checks.ts` puts every on-site neighbour in the foreground regardless of `render_tier`, so a
page can look like it is under the seven-neighbour cap in the file and be at it in the build. The
Larson return-edge plan counted Charity Majors at six foreground neighbours; the build counted
seven, and adding the Larson edge failed the build at eight. When planning return edges, count every
on-site neighbour as foreground and read `render_tier: deep` on an on-site edge as documentation
rather than as an instruction.

**Inserting a return edge mid-list silently re-points `page-claims.md`.** Claims lines address edges
positionally (`adjacent_thinkers[5] [S:12]`), so an edge inserted before them shifts every later
index by one and the ledger fails, or worse, passes against the wrong source. The Charity Majors
ledger failed on the Laban Eilers critic edge until the new edge moved to the end of the list.
Append return edges at the end of `adjacent_thinkers`, since render order is computed and file order
only breaks ties, or renumber the claims file in the same edit.

**A cap forces a demotion, and the cheapest demotion is the edge whose claim is stated twice.**
Both demotions this run (Patrick Kua on Fournier, Rudolf Kálmán on Majors) are antecedents whose
claim is already carried in full by a frame's `one_line_gloss` and `co_originators`, so collapsing
the edge into the deep tier removed nothing from either page. The alternative on each page was the
only `critiques` edge, which appears nowhere else. Look for the duplicated claim before demoting a
critic.

**A mirror edge written in the same pass as the new page repeats it.** The proposed labels for the
Majors and Dekker return edges restated the new page's own edge labels almost sentence for sentence,
including the closing move on Fournier ("the parts of his corpus these books do not reach"). A
reader on the neighbour's page already holds that neighbour's position, so the return label should
open with what the new thinker adds. All three `parallel` labels were re-authored from the
neighbour's side before being applied.

## Checklist items this run would add

- Count on-site neighbours as foreground when planning return edges; `render_tier: deep` only
  collapses off-site ones.
- Append a return edge at the end of `adjacent_thinkers`, or renumber `page-claims.md` in the same
  edit.
- Write a return-edge label from the neighbour's side, and check it against the new page's label for
  the same pair before applying it.
