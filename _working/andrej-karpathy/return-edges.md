# Andrej Karpathy: return edges to apply on existing pages

Described here, not applied. A later serial stage edits the neighbour pages, because two candidates
drafting at the same time would collide on a shared neighbour. Nothing in this file has been written
to `src/content/thinkers/` other than `andrej-karpathy.md` itself.

`andrej-karpathy.md` carries five neighbours. Two have pages here (Simon Willison, Kent Beck) and
three do not (Cendyne, Fei-Fei Li, Christopher Ré), so only the first two can take a return edge.
Willison already holds an edge to Karpathy, so there is one new edge to add and one existing edge to
correct.

**Re-read this file against the finished page before applying it.** It is written at stage 4 and
applied at stage 7, with the review rounds of a `mode-a` page in between, and the plan does not move
while the page does. On the Anderson run round 3 struck a phrase from five fields and a return-edge
label still carried it a day later.

**Ledger state of each neighbour, recorded before any edit**, checked in this sandbox on 2026-09-22,
because running `fact-ledger.ts` on a page after editing it proves nothing if it was already failing
when you arrived.

| Page | Ledger before edit | What that permits |
|------|--------------------|-------------------|
| `simon-willison` | PASS, 44 facts, 23 fields | anything, provided each changed field's claims line still holds |
| `kent-beck` | PASS, 71 facts, 27 fields | anything, provided any new required line is added |

---

## 1. `simon-willison.md`: one date correction in three places, one attribution question, one label rewrite

This is the item the inclusion Council raised on every seat, and it is a correction to a published
claim rather than a return edge, so it belongs in the merge request description under corrections as
well as here.

### 1a. The coinage date, three places

**The count is three, not four.** Two seats reported four live places and one reported three.
`grep -rn "2025-02-06" src/content/` returns three, all on this page:

| Line | Field | Current text |
|------|-------|--------------|
| 174 | `named_frames` `vibe-coding` `one_line_gloss` | "Andrej Karpathy coined the term on 2025-02-06." |
| 181 | that frame's `co_originators[0].role` | "coined the term on 2025-02-06" |
| 430 | `adjacent_thinkers` `andrej-karpathy` `edge_label` | "Coined vibe coding on 2025-02-06." |

The claimed fourth, described by one seat as "the label's following sentence," carries no date. Check
the line numbers again before editing, because a second candidate may be drafting into this sandbox.

**Apply:** `2025-02-06` becomes `2025-02-02` in all three, with no other change to those sentences.

**Say this in the merge request description, or someone will fix it back.** Willison's own post reads
"The term was coined by Andrej Karpathy just a few weeks ago (on February 6th)." The post is wrong by
four days. Decoding the status ID arithmetically, `(1886192184808149383 >> 22) + 1288834974657` ms,
gives 2025-02-02T23:17:15Z `[S:10]`. Two sources link that ID as the post in question, Willison
`[S:9]` and Cendyne `[S:13]`, and Wikipedia dates the coinage to February 2025 without naming a day.
**Corrected 2026-09-24:** this paragraph used to claim Wikipedia cites the status as 2 February 2025,
and it does not. The primary is unreachable, so the day rests on the ID decode alone, and the
description should say exactly that rather than implying a second witness.

**Do not touch `_working/simon-willison/facts.md` `[S:18]`.** That line is accurate: it records that
*the post states* the term was coined on 2025-02-06, which the post does. The defect is that the page
then asserts the date in the site's voice. Add a new line to that ledger instead, carrying the
Wikipedia citation and the decode, and cite it from the three claims lines that now assert 02-02.

**`kent-beck.md` needs no edit for this.** Line 498, inside `live_edge.summary`, reads "a term Andrej
Karpathy coined in February 2025," month only, which is correct. `inbound-claims.ts` does not scan
`live_edge`, so this claim was found by reading the file; it is the fourth live claim about Karpathy
on the roster and the script printed three.

### 1b. One frame slug, two primary authors

`vibe-coding` now exists on both pages. Willison's has `attribution_kind: extended` with
`primary_author: simon-willison` and Karpathy in `co_originators`; the new page has
`attribution_kind: original` with `primary_author: andrej-karpathy` and Willison in
`co_originators`. Both descriptions of the relationship are right and consistent. The `primary_author`
field is what disagrees, on the exact point the new page is about.

The site's convention on a shared slug is one primary author per frame: `code-smell` carries
`primary_author: kent-beck` on both Beck's page and Fowler's, and `dora-four-keys` carries
`primary_author: nicole-forsgren` on both holders. `coordination-headwind` does not follow it, and is
the precedent to avoid rather than to cite.

**Recommended:** set `primary_author: andrej-karpathy` on Willison's `vibe-coding` frame, leaving
`attribution_kind: extended` and the gloss as they are. The gloss already says the coinage is
Karpathy's, so this makes the structured record agree with the prose beside it.

**Ledger cost: one claims line changes meaning, and the source is already on file.** That frame's
`attribution` is a required field on Willison's page. `[S:18]` there records that Willison's post
credits Karpathy for the term, which supports Karpathy as primary author directly. No new line is
needed for 1b; the new line described in 1a is for the date.

**Nothing a reader sees changes.** `src/pages/thinkers/[slug].astro` prints `display_name`,
`attribution_kind` and `one_line_gloss` from a frame and nothing else, so `primary_author` is a
structured-record fix. It does change the concept-page genealogy order if `vibe-coding` ever gets a
concept page, which is the reason to get it right now rather than then.

### 1c. The edge label, rewritten from Willison's side

Current text at line 428:

```yaml
  - target_slug: andrej-karpathy
    display_name: Andrej Karpathy
    edge_type: antecedent
    edge_label: >
      Coined vibe coding on 2025-02-06. Willison's narrowing, building software
      with an LLM without reviewing the code it writes, turns the term on the
      review step, and his own post credits Karpathy for it.
    strength: secondary
```

**Apply:**

```yaml
  - target_slug: andrej-karpathy
    display_name: Andrej Karpathy
    edge_type: antecedent
    edge_label: >
      Karpathy supplied the word on 2025-02-02 and left it loose, which is why
      the narrowing on this page had somewhere to go: his post reports accepting
      every diff and pasting errors back in without comment, and hedges the
      whole thing as fine for a weekend project. The coinage post cannot be
      fetched from X, so the reproduction inside the 2025-03-19 post here is
      where this site quotes it from.
    strength: secondary
```

Opened from Willison's side with what Karpathy adds, and checked sentence by sentence against
`adjacent_thinkers[0]` on the new page, which opens from Karpathy's side with what Willison adds. No
sentence appears in both in the same or near-same words. The strict form of that check exists because
three labels drafted in one pass restated the new page's own wording, and because the Humble label on
Allspaw passed the first-sentence version of the rule and repeated its middle sentence.

**The closing sentence was rewritten on 2026-09-24, on the fourth sighting of that same pattern.**
It had read "Willison's own post is also the fullest reproduction of that post anywhere on this
site, since X cannot be fetched," against the new page's "his own post is also where the coinage
post itself can be read, since X cannot be fetched." The opening clause and the closing clause were
both shared, and only the middle differed, which is the Humble-on-Allspaw shape exactly: opening
from the neighbour's side fixes the first sentence and leaves the later ones free to converge. The
replacement changes the subject of the sentence from Willison's post to the coinage post, so the
two labels no longer run the same skeleton. Recorded here because the pattern is now frequent
enough that the check has to be run on every sentence of a label and not only on its opener.

**Ledger cost: the label widens, so check the widened clauses.** `antecedent` is a required field, and
`_working/simon-willison/page-claims.md` cites `[S:18]` for this edge. The new clauses about accepting
every diff, pasting errors back in, and the weekend-project hedge are quotations from the coinage post
reproduced inside `[S:18]`'s own URL, which is Willison's post, so that line carries them. The date
needs the new line from 1a. Rerun `bun scripts/fact-ledger.ts simon-willison`, which passed at 44
facts and 23 fields before and must still pass after.

### 1d. Cap arithmetic on this page: it moves, and the demotion is the redundant kind

Willison authors eight edges. Four neighbours have pages here (Majors, Hickey, Fowler, Anderson) and
Karpathy makes five, against four off-site (Goodside, Rehberger, Chismon, and Karpathy until now).
Eight against a foreground cap of seven, so one collapses whether or not anything is edited.

**Measured rather than reasoned, both ways, in this sandbox on 2026-09-22.** With the new page absent
the build prints `simon-willison: collapsed andrej-karpathy`. With it present it prints
`simon-willison: collapsed riley-goodside`. Karpathy is the collapse candidate today precisely
because he is off-site and named as a frame co-originator; the moment he has a page, that weight
flips and the ranking takes Goodside instead.

So **shipping this page moves Riley Goodside off Willison's main list**, on a page this branch would
otherwise not be changing. That is the behaviour SCHEMA 4.11 records from the Humble run, and it is
the redundant demotion the calibration list says to look for first: Goodside's credit is carried in
full inside the `prompt-injection` frame's `one_line_gloss` and its `co_originators`, and named again
in the page's `reading` and in a Body of Work note. He keeps the credit and loses a second mention.
No decision goes to Julie here.

**Stage 7 confirms it from the build log** rather than from the file, by reading for
`simon-willison: collapsed riley-goodside`. If anything else collapses, stop and put the choice to
her.

---

## 2. `kent-beck.md`: add a `parallel` edge, appended at the end

Beck's page names Karpathy already, inside `live_edge.summary`, and holds no edge to him. The term
Beck defines his own frame against now has a page, so the edge is real, and `parallel` is the honest
type: Beck argues against the practice the word names and does not engage its author.

**Apply, as the last entry in `adjacent_thinkers`:**

```yaml
  - target_slug: andrej-karpathy
    display_name: Andrej Karpathy
    edge_type: parallel
    edge_label: >
      Karpathy's coinage is the fixed point Beck's newest frame is defined
      against. In the June 2025 post that names augmented coding, model-written
      code is held to the standard Beck holds his own code to: "you care about
      the code, its complexity, the tests, & their coverage." The whole test is
      "tidy code that works," and it is the one the practice named here declines
      to run. The edge is `parallel` because the argument reaches the word and
      never its author.
    strength: secondary
```

Written from Beck's side, opening with what Karpathy supplies. Compared sentence by sentence against
`adjacent_thinkers[1]` on the new page, which opens with what Beck did with the word. Both quote the
same clause from the augmented coding post, which is a quotation and not a shared sentence. The third
sentence was rewritten on that check: it had read "Beck never names the person who coined the term he
is arguing with," against the new page's "does not name the person who coined it," which is the
near-same-words case the rule was tightened for on 2026-09-22.

**The second sentence was rewritten on 2026-09-24, on the same re-read that caught the Willison
closer.** It had read "Augmented coding, set out in June 2025, keeps the generated code under the
same value system as hand-written code," against the new page's "Augmented coding is set out as the
opposite value system." Two labels reaching the shared quotation through "set out" and "value
system" is the near-same-words case, and the shared quotation is what hid it: a sentence built to
deliver a quote converges on the quote from both sides. The replacement reaches it through the
standard Beck applies rather than through the value system, and "tidy code that works" is now
quoted rather than paraphrased, since it is his wording in the same sentence of `[S:30]`.

**Ledger cost: none required, and the claim rests on a line already there.** `parallel` adds no
required field. `_working/kent-beck/facts.md` `[S:28]` quotes the augmented coding post of 2025-06-25
and `[S:50]` records that vibe coding is Karpathy's coinage and that Beck names neither side's
coiner. Add the line anyway, so the label is traceable:

```
- adjacent_thinkers[7] [S:28] [S:50]
```

**Both sides of this edge are now sourced on their own page's ledger, which was not true when this
plan was written.** The new page's own label quotes the same clause, and until 2026-09-24 that
quotation was verified only on Beck's ledger. Seat 3 of the inclusion Council called that out: a
`parallel` edge takes no required line, so nothing would have caught it. The post was re-opened at
its URL and the quotation is `[S:30]` in `_working/andrej-karpathy/facts.md`, cited from
`adjacent_thinkers[1]` there. Beck's side still rests on `[S:28]` and `[S:50]`, which is correct,
because a claims line has to cite an ID its own ledger holds.

**Append at the end, do not insert mid-list.** Claims lines in `_working/kent-beck/page-claims.md`
address edges positionally, so an edge inserted mid-list shifts every later index and either fails
the ledger or passes against the wrong source. The new entry is index 7.

**No date in this label.** `[S:50]` records that Willison's post carries February 6th, which is the
wrong date, and nothing on Beck's ledger carries the right one. The label above names no date, and
Beck's `live_edge.summary` already says "February 2025," month only, which stays.

**Cap arithmetic: no collapse expected.** Beck authors seven edges, two of them explicitly
`render_tier: deep` (Cunningham, Constantine). Adding Karpathy makes six foreground, two of which are
off-site (Koppel, DHH), against caps of seven and five. The new page clears the one warning it
introduces, `kent-beck has no edge back to andrej-karpathy`. Confirm from the build log at apply time
rather than from this arithmetic.

---

## 3. Neighbours with no page, recorded so a later run does not re-derive them

None takes a return edge, and none is a candidate for one until they have a page.

- **Cendyne** (`cendyne`), `critiques`, secondary. The only critic on record who names him, scoped to
  the coinage and the practice `[S:13]`. Not a roster candidate on the evidence gathered here.
- **Fei-Fei Li** (`fei-fei-li`), `antecedent`, secondary. PhD supervisor, and the first instructor
  named on the current CS231n page `[S:1]` `[S:2]` `[S:24]`. A serious roster candidate in her own
  right and out of scope here.
- **Christopher Ré** (`christopher-re`), `extends`, secondary. Took the term as the subject of his own
  work `[S:7]`. Whether he credits Karpathy is unread, and the edge label says the claim is about use
  of the term.

## 4. What this branch does not touch

- **`simon-willison.md` `[S:18]`.** Accurate as written. See 1a.
- **`kent-beck.md` line 498.** Month only, and correct. See 1a.
- **Every other collapse warning in the build log** (Majors, Woods, Allspaw, Fowler, Forsgren,
  Hickey, Larson) is pre-existing and belongs to pages this branch does not change.

Measured both ways on 2026-09-22, with the new page moved aside and back: the build carries 17
`[distillery] warning` lines without it and 18 with it, and the whole difference is two lines. One is
new, `kent-beck has no edge back to andrej-karpathy`, which item 2 clears. One changed target,
`simon-willison: collapsed andrej-karpathy` becoming `simon-willison: collapsed riley-goodside`,
which is item 1d. Nothing else moved.

The snowflake decode behind item 1a was recomputed here rather than taken from the ledger:
`(1886192184808149383 >> 22) + 1288834974657 = 1738538235271` ms, which is 2025-02-02T23:17:15Z.
Independent of `[S:10]`'s Wikipedia citation and agreeing with it.
