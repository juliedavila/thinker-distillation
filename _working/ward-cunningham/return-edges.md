# Ward Cunningham: return edges to apply on existing pages

Described here, not applied. A later serial stage edits the neighbour pages, because two candidates
drafting at the same time would collide on a shared neighbour. Nothing in this file has been
written to `src/content/thinkers/`.

`ward-cunningham.md` carries five neighbours. Three have pages here (Beck, Fowler, Larson) and two
do not (Christopher Alexander, George Lakoff), so only the first three can take a return edge.

**Re-read this file against the finished page before applying it.** It is written at stage 4 and
applied at stage 7, with the Reading Protocol and three `mode-a` review rounds in between, and the
plan does not move while the page does. On the Anderson run round 3 struck a phrase from five
fields and a return-edge label still carried it a day later.

**Ledger state of each neighbour, recorded before any edit.** Checked in this sandbox on
2026-09-22, because running `fact-ledger.ts` on a page after editing it proves nothing if it was
already failing when you arrived.

| Page | Ledger before edit | What that permits |
|------|--------------------|-------------------|
| `kent-beck` | PASS, 69 facts, 27 fields | anything |
| `will-larson` | PASS, 57 facts, 25 fields | anything, provided the new required line is added |
| `martin-fowler` | **FAIL**, no `_working/martin-fowler/facts.md` at all | see item 2 |

---

## 1. `kent-beck.md`: revise the existing label, change nothing structural

Beck already carries an edge to Cunningham. Edge type, strength and tier all stay as they are:
`parallel`, `secondary`, `render_tier: deep`. The claim it makes is correct and the new page agrees
with it in full. What it is now is incomplete: it names one of three artifacts the two men share,
and the new page names the other two.

Current text:

```yaml
  - target_slug: ward-cunningham
    display_name: Ward Cunningham
    edge_type: parallel
    edge_label: >
      Co-author of the one CRC cards paper, presented at OOPSLA in 1989 when
      Beck was at Apple and Cunningham at Wyatt Software. The frame above
      carries the credit in full, so the edge sits in the deep tier.
    strength: secondary
    render_tier: deep
```

**Apply:**

```yaml
  - target_slug: ward-cunningham
    display_name: Ward Cunningham
    edge_type: parallel
    edge_label: >
      Cunningham is the other name on three of Beck's earliest artifacts: the
      CRC cards paper at OOPSLA in 1989, the 1987 technical report proposing
      pattern languages for programs, and the Smalltalk session where the
      question about the simplest thing that could possibly work was put to
      Beck rather than by him. The CRC frame above carries that credit in full,
      so the edge sits in the deep tier.
    strength: secondary
    render_tier: deep
```

Written from Beck's side and opening with what Cunningham adds, which is the rule the three Larson
labels broke by restating the new page's own wording. Compare against `adjacent_thinkers[0]` on
`ward-cunningham.md`, which opens from Cunningham's side with what Beck adds and names the same
three artifacts in the other direction.

**Ledger cost: none.** `parallel` adds no required field, and no claim here is new: the CRC byline
and the Smalltalk exchange are already sourced on Beck's own page, and the pattern-languages report
is `[S:8]` on this one.

**Cap arithmetic: unchanged.** No edge is added or removed on Beck's page.

---

## 2. `martin-fowler.md`: two corrections to the `bliki` frame, and no new edge

Fowler already carries an `antecedent` edge to Cunningham, primary, and the new page agrees with it.
That edge needs no change. What needs changing is a frame, and it is a correction to a published
claim rather than a return edge, so it belongs in the merge request description under corrections.

**The defect.** `martin-fowler.md` lines 146 to 155 carry `bliki` as `attribution_kind: original`,
`primary_author: martin-fowler`, with no `co_originators`. Fowler's own post defining the word says
otherwise: he wanted "something that was a cross between a wiki and a blog - which Ward Cunningham
immediately dubbed a bliki" `[S:18]`. The form and the fifteen-year practice are Fowler's and that
is not in question. The word is Cunningham's, on Fowler's own evidence.

**The second, smaller defect on the same frame.** Its `source_link` reads
`https://martinfowler.com/bliki/`, which is the bliki index, rather than the post that defines the
word.

**Apply:**

```yaml
    attribution_kind: original
    primary_author: martin-fowler
    co_originators:
      - slug: ward-cunningham
        role: named the form, in Fowler's own account of the post defining the word (2003)
    source_link: https://martinfowler.com/bliki/WhatIsaBliki.html
```

**Why `bliki` is not a frame on the Cunningham page.** Three of five inclusion seats ruled it out
and one wanted it in. The majority holds: the word is a coinage in passing, the form and the
practice are Fowler's, and a frame here would read as a byline claim on fifteen years of somebody
else's work. A `co_originators` entry on Fowler's frame states exactly what the evidence supports
and nothing more. Seat 4's instruction that the correction ships in this merge request whatever
else is decided is honoured; only its location differs.

**Ledger cost, stated plainly because this is the item that needs a decision.** A `co_originators`
entry adds a required field, `named_frames[6].co_originators[0]`, to a page that has no `facts.md`
and no `page-claims.md`. `martin-fowler` already exits 1 on `main` and in this sandbox, so nothing
newly breaks and nothing is newly proved. Calibration bars a `critiques` or `antecedent` return
edge on a ledger-less page for exactly this reason, and this is the same shape one step down.
Two honest ways to take it, and stage 7 should pick one rather than let it pass unremarked:

- **Apply the correction and say so.** The merge request records that `martin-fowler` failed the
  ledger before this change and fails it after, for the same pre-existing reason, and that the
  correction fixes a published misattribution that four of five seats named. Recommended: leaving a
  known-wrong byline in place to protect a ledger that is already failing is the wrong trade.
- **Apply the correction and open the ledger.** Write `_working/martin-fowler/facts.md` with the
  one line `[S:18]` already verified here, plus the fields the page needs. That is a larger job
  than this merge request and it is issue-shaped, not stage-7-shaped.

**Cap arithmetic: unchanged.** No edge is added or removed on Fowler's page.

---

## 3. `will-larson.md`: add an `antecedent` edge, appended at the end

Larson's page names Cunningham inside the `exception-debt` gloss and holds no edge to him. The
metaphor Larson borrowed by name now has a page, so the edge is real and it is `antecedent` from
Larson's side.

**Apply, as the last entry in `adjacent_thinkers`:**

```yaml
  - target_slug: ward-cunningham
    display_name: Ward Cunningham
    edge_type: antecedent
    edge_label: >
      Cunningham supplies the analogy exception debt is built on. His version,
      set down in an OOPSLA experience report in 1992, prices the cost of code
      that no longer matches what its team understands, with interest paid in
      the friction of working against the gap. Larson keeps the shape and moves
      it to policy, where the thing accumulating is the time an organization
      spends granting exceptions to its own rules.
    strength: secondary
```

**Append at the end, do not insert mid-list.** Claims lines in `_working/will-larson/page-claims.md`
address edges positionally, so an edge inserted mid-list shifts every later index and either fails
the ledger or passes against the wrong source. The new entry is index 7.

**Ledger cost: one required line, and the source is already on file.** An `antecedent` edge adds
`adjacent_thinkers[7]` to Larson's required set. `_working/will-larson/facts.md` already carries
`[S:42]`, which records the metaphor as Cunningham's and dates its first appearance to the 1992
OOPSLA experience report. Add to `_working/will-larson/page-claims.md`:

```
- adjacent_thinkers[7] [S:42]
```

Then rerun `bun scripts/fact-ledger.ts will-larson`, which passed at 57 facts and 25 fields before
this edit and must still pass at 26 fields after it.

**Cap arithmetic: this one moves.** Larson currently has seven foreground neighbours, four with
pages here (Fournier, Majors, Dekker, Forsgren) and three without (Rumelt, Goedecke, Reilly), and
none carries an explicit `render_tier`. Adding Cunningham makes five on-site and three off-site,
which is eight against a cap of seven.

The build does not fail on this. `orderNeighbors` in `src/lib/checks.ts` collapses off-site
neighbours automatically and warns in the build log; an error is raised only when on-site
neighbours alone break the off-site rule, which is not the case here. The ranking collapses first
whoever is already named as a frame's `primary_author`, `derived_from` or co-originator, and
Richard Rumelt is a `co_originators` entry on Larson's engineering-strategy frame. So Rumelt
collapses to the deep tier, keeps his credit inside the frame, and loses only a second mention.

That is the redundant demotion the calibration list says to look for first, and it is the right
answer for the same reason it was right three times before (Patrick Kua on Fournier, Rudolf Kálmán
on Majors twice). No decision goes to Julie here. **Stage 7 confirms it by reading the build log
for the line `will-larson: collapsed richard-rumelt ...` rather than by assuming it.** If the build
collapses anyone else, stop and put the choice to her.

---

## Neighbours with no page, recorded so a later run does not re-derive them

Neither takes a return edge, and neither is a candidate for one until they have a page.

- **Christopher Alexander** (`christopher-alexander`), `antecedent`, secondary. Credited inside the
  1987 report's own proposal sentence `[S:8]`. A serious candidate for the roster in his own right,
  and out of scope here.
- **George Lakoff** (`george-lakoff`), `antecedent`, secondary. *Metaphors We Live By*, with Mark
  Johnson, is the premise Cunningham credits in the opening line of his own account of the debt
  metaphor `[S:4]`. Johnson is named in the edge label and takes no slug, because a second
  `target_slug` for a co-author of one book would spend a neighbour slot on a credit the label
  already carries.

---

## Re-read against the finished page, 2026-09-22

Done once at the end of stage 5, and it has to be done again at stage 7 after the three `mode-a`
review rounds, because that is where the phrases move. Checked this pass:

- Five neighbours, three on-site, unchanged since this plan was written.
- `adjacent_thinkers[0]` on `ward-cunningham.md` still opens from Cunningham's side and names the
  same three shared artifacts, so the Beck label above is still its mirror rather than its echo.
- Four phrases changed on the page after this plan was drafted (the tagline, the Larson edge label,
  the `limits[2]` wording on Fowler's quadrant, and the editorial note on the 1987 report). None is
  quoted in this file, so no label here needed chasing. Recorded because the Anderson failure was
  exactly this and it was silent.
- `martin-fowler.md` line numbers re-checked: `bliki` opens at line 146 and its `source_link` sits
  at 154, which makes it `named_frames[6]`. Re-check both before editing, because a second
  candidate is drafting into this sandbox at the same time.

---

## Applied at Ship, 2026-09-22

Recorded here at apply time so the plan and the repository never disagree about what was done. All
three items were applied on branch `candidate/ward-cunningham`. Two things were not in the plan and
are marked as departures.

### 1. `kent-beck.md`, applied as written, plus two ledger lines the plan did not ask for

The label is the plan's text, unchanged. **Departure:** the plan said the claim cost nothing because
the facts were "already sourced on Beck's own page." They were not. Beck's `page-claims.md` cited
`[S:16]` alone for this edge, the CRC paper, and his ledger carried no line for the 1987 report or
for the Smalltalk session. `parallel` adds no required field, so `fact-ledger.ts` would never have
noticed, which is the gap calibration describes as a source on file not being a sourced claim.

Both were re-opened at their own URLs rather than copied from this page's ledger, which is the
ruling round 2 made on the Larson claim in the other direction. `_working/kent-beck/facts.md` gains
`[S:65]` (the 1987 report, byline order and the Alexander credit) and `[S:66]` (the Artima
interview, Cunningham asking and Beck asked), and `adjacent_thinkers[5].edge_label` now cites all
three. Beck's ledger passed at 69 facts and 27 fields before and passes at 71 facts and 27 fields
after.

One phrase left the label that the plan did not flag: "when Beck was at Apple and Cunningham at
Wyatt Software." `[S:65]` places Cunningham at Tektronix in 1987 and `[S:16]` at Wyatt Software in
1989, so the pair was true of the 1989 paper alone and would have read as covering all three
artifacts. Proposition: NARROWED by deletion.

### 2. `martin-fowler.md`, applied as written, on the plan's own recommendation

Both corrections applied: `co_originators` naming Cunningham on the `bliki` frame, and the
`source_link` moved from the bliki index to `WhatIsaBliki.html`, which was re-fetched and carries
the sentence the credit rests on. `named_frames[6]` is confirmed as the right index by the ledger's
own output.

The plan offered two honest routes and recommended the first. Taken as recommended, with the
numbers stated rather than waved at: `martin-fowler` failed its ledger with 32 defects before this
change and fails with 33 after. The one new defect is `named_frames[6].co_originators[0] has no
entry in page-claims.md`, which is the same pre-existing cause as the other 32, namely that the page
has no `facts.md` and no `page-claims.md` at all. Opening that ledger is issue-shaped and is filed
rather than done here.

One thing worth knowing before reading the diff: neither `co_originators` nor `source_link` is
rendered anywhere on a thinker page. `src/pages/thinkers/[slug].astro` prints `display_name`,
`attribution_kind` and `one_line_gloss` and nothing else from a frame. The correction fixes the
site's structured record and is invisible to a reader of the page.

### 3. `will-larson.md`, applied with the middle sentence rewritten

**Departure, and the one judgment call in this stage.** The plan's label read "prices the cost of
code that no longer matches what its team understands, with interest paid in the friction of
working against the gap," attributed to the 1992 OOPSLA report. The report does not say that. The
alignment framing, debt as code out of step with what a team now understands, is from the 2009 talk
`[S:4]` on this page's ledger. What the 1992 report says is that shipping first-time code is like
going into debt, that a prompt rewrite repays it, and that "Every minute spent on not-quite-right
code counts as interest on that debt."

The middle sentence now paraphrases the report it names. Proposition: SAME relationship, NARROWED
mechanism, and the sentence is now true of the artifact it cites.

Ledger cost is one line more than the plan predicted. `[S:42]` on Larson's ledger records that the
metaphor is Cunningham's and dates it to the 1992 report, on Fowler's attribution, and quotes
nothing of the report itself, so it could not carry a sentence describing the mechanism.
`_working/will-larson/facts.md` gains `[S:58]`, the report re-read at its own URL, and the claims
line is `- adjacent_thinkers[7] [S:42] [S:58] [S:16]`. Appended at the end as the plan required.
Larson's ledger passed at 57 facts and 25 fields before and passes at 58 facts and 26 fields after.

Nothing in the label claims Larson credited Cunningham. `[S:16]` records that he credits no prior
source, and round 3 struck "by name" from this page's own label for reading the other way.

### Cap arithmetic, confirmed from the build rather than assumed

`bun run build` exits 0 and prints `[distillery] warning: will-larson: collapsed richard-rumelt to
stay inside the neighbor caps`, which is the demotion the plan predicted and the redundant one:
Rumelt is a `co_originators` entry on Larson's engineering-strategy frame, keeps that credit, and
loses only a second mention. No other page this branch touches appears in the collapse warnings.
The three other collapse warnings in the log (Woods, Hickey, Willison) are pre-existing and belong
to pages this branch does not touch.
