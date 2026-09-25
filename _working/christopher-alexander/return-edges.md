# Christopher Alexander: return edges to apply on existing pages

Described here, not applied. A later serial stage edits the neighbour pages, because two candidates
drafting at the same time would collide on a shared neighbour. Nothing in this file has been written
to `src/content/thinkers/`.

`christopher-alexander.md` carries five neighbours. Three have pages here (Cunningham, Beck, Fowler)
and two do not (Erich Gamma, Peter Eisenman), so only the first three can take a return edge.

**Re-read this file against the finished page before applying it.** It is written at stage 4 and
applied at stage 7, with the Reading Protocol and three `mode-a` review rounds in between, and the
plan does not move while the page does. On the Anderson run round 3 struck a phrase from five fields
and a return-edge label still carried it a day later. The phrases most likely to move on this page
are the ones about what software took: if a round changes "granted them the format" or removes the
word "sequence" anywhere, chase it into items 1 and 3 below.

**Ledger state of each neighbour, recorded before any edit.** Checked in this sandbox on 2026-09-22,
because running `fact-ledger.ts` on a page after editing it proves nothing if it was already failing
when you arrived.

| Page | Ledger before edit | What that permits |
|------|--------------------|-------------------|
| `ward-cunningham` | PASS, 28 facts, 22 fields | anything, provided each new clause cites a line that supports it |
| `kent-beck` | PASS, 71 facts, 27 fields | anything, provided the new required line is added |
| `martin-fowler` | **FAIL**, no `_working/martin-fowler/facts.md` at all | No widening and no new edge. A narrowing of the existing label is still permitted, because it removes a claim rather than adding one. See item 3. |

---

## 1. `ward-cunningham.md`: three narrowings, no new edge

Cunningham already carries an `antecedent` edge to Alexander, and it is the live page that makes the
two claims this page corrects. The corrections are the reason they belong in the same merge request:
the solo credit for *A Pattern Language* has now been made twice independently, on this live page and
in issue #42, and a page drafted straight from either would make it three.

Edge type, strength and tier all stay as they are: `antecedent`, `secondary`, foreground.

### 1a. The edge label: drop the origination claim, keep the citation claim

Current text:

```yaml
  - target_slug: christopher-alexander
    display_name: Christopher Alexander
    edge_type: antecedent
    edge_label: >
      A Pattern Language (1977) gave the word pattern its architectural sense,
      and the 1987 report with Beck credits him inside its own proposal
      sentence, adapting concepts from his work. The software pattern movement,
      the Portland Pattern Repository and the wiki built to hold its literature
      all descend from that borrowing.
    strength: secondary
```

**Apply:**

```yaml
  - target_slug: christopher-alexander
    display_name: Christopher Alexander
    edge_type: antecedent
    edge_label: >
      A Pattern Language (1977) is the one work of his the 1987 report cites,
      and the report credits him inside its own proposal sentence, adapting
      concepts from his work. The phrase is older than that book, so the date
      marks where the software borrowing took the term rather than where the
      term was made. The software pattern movement, the Portland Pattern
      Repository and the wiki built to hold its literature all descend from the
      borrowing.
    strength: secondary
```

What changed and why. "Gave the word pattern its architectural sense" dates origination to 1977, and
the phrase is in the title of a 1968 Center for Environmental Structure paper, nine years earlier
`[S:9]` `[S:33]` on this page's ledger. The replacement does not trade one origination date for
another. [S:9] establishes 1968 as the earliest verified appearance of the phrase, which is a claim
about the record rather than a claim about where the term was made, so the 1968 paper cannot carry an
origination date the 1977 book is being denied. **Corrected 2026-09-24.** The sentence here used to
give the reason as a disputed 1968 byline, which stopped being true when [S:9] was repaired the same
day: Alexander's own vitae [S:9a] settles that byline as Alexander with Ishikawa and Silverstein, and
the Open Library record giving him alone is one outlier against a first-party record rather than half
of a dispute. The applied text above never rested on the old reason and does not change. What the
label now asserts is only what Cunningham's own
`[S:8]` supports, that the 1977 book is the work the report cites. The new Alexander page says the
same thing in the same words in `named_frames[0].one_line_gloss` and in `inclusion_rationale`, and
neither page dates the origination.

### 1b. The frame's `co_originators` role for Alexander: name the co-authors

Current text, inside `named_frames` entry `pattern-languages-for-programs`:

```yaml
      - slug: christopher-alexander
        role: originated pattern languages in A Pattern Language (1977), credited inside the paper's own proposal sentence
```

**Apply:**

```yaml
      - slug: christopher-alexander
        role: credited inside the paper's own proposal sentence; the report's bibliography cites A Pattern Language (1977) as "Christopher Alexander et. al.", the co-authors being Sara Ishikawa and Murray Silverstein
```

Keep the source's spelling "et. al." with that first period; it is the primary document's, and
Cunningham's `[S:8]` quotes it that way.

**This clause needs a new line in `_working/ward-cunningham/facts.md`, because `[S:8]` carries the
abbreviation and not the names behind it.** Per the calibration item on widening a neighbour's label,
the names cannot ride on a line that does not hold them. Add:

```
- [S:29] *A Pattern Language: Towns, Buildings, Construction*, 1977, Oxford University Press. Byline: Christopher Alexander, Sara Ishikawa and Murray Silverstein, with further writing credits to Max Jacobson, Ingrid Fiksdahl-King and Shlomo Angel. Supports: the two names behind the "et. al." that [S:8]'s bibliography entry abbreviates, and the correction of this page's own solo credit. | https://en.wikipedia.org/wiki/A_Pattern_Language | 2026-09-22
```

Then add `[S:29]` to the `named_frames[1].co_originators` line in
`_working/ward-cunningham/page-claims.md` and rerun `bun scripts/fact-ledger.ts ward-cunningham`.
Check the next `[S:n]` on that ledger before using 29; the file ended at 28 when this was written.

### 1c. `further_in.if_you_want_breadth`: drop "the source of"

Current: `Christopher Alexander's *A Pattern Language* (1977) for the source of the pattern idea, and
Fowler's Technical Debt Quadrant (2009) for the best known extension of the metaphor.`

**Apply:** replace `for the source of the pattern idea` with `for the pattern idea in its
architectural form`. As a reading recommendation the entry is right and stays; the words "the source
of" carry the same nine-year slip as 1a.

---

## 2. `kent-beck.md`: one new edge, `antecedent`, deep tier

Beck's page carries no Alexander edge at all, and mentions pattern languages only inside its
Cunningham edge label. The new page cites the 1987 report and names Beck as its first byline, so
omitting the return edge would publish the asymmetry rather than fix it. Expect the no-link-back
build warning until this is applied.

Beck has seven edges, two of them `render_tier: deep`, so five are foreground and two of those five
are off-site (Koppel, Hansson). A deep-tier edge costs no foreground slot and cannot trigger a
collapse, which is the right weight here: Alexander is an antecedent to one early report in Beck's
corpus rather than to the economic argument the page is built on.

**Append at the end of `adjacent_thinkers`**, per the calibration item that an edge inserted mid-list
shifts every later index in `page-claims.md`:

```yaml
  - target_slug: christopher-alexander
    display_name: Christopher Alexander
    edge_type: antecedent
    edge_label: >
      The named source of Beck's earliest published proposal. The 1987 report
      he first-bylined adapts concepts from Alexander's work, says so inside its
      own proposal sentence, and cites A Pattern Language as the one Alexander
      work in its bibliography. Beck's later argument prices the cost of
      changing software, a different question from Alexander's, so this is an
      antecedent to one report rather than to the corpus.
    strength: primary
    render_tier: deep
```

Read this against the new page's own Beck label sentence by sentence before applying it. No sentence
here appears on the Alexander page in the same or near-same words: the Alexander page opens on the
byline order and the affiliations and makes the "et. al." point, which this label does not, and this
label opens on what the report is to Beck, which the Alexander page does not.

**An `antecedent` edge adds a required ledger line.** `[S:65]` on Beck's own ledger supports every
clause above: it records the report's date and printed byline order, quotes the proposal sentence
naming Alexander, and states that it does not support any claim about who wrote which part, which is
why this label makes none. Add to `_working/kent-beck/page-claims.md`:

```
- adjacent_thinkers[7] [S:65]
```

Confirm the index is 7 after appending, then rerun `bun scripts/fact-ledger.ts kent-beck`.

---

## 3. `martin-fowler.md`: one narrowing, no new edge

**Reversed on 2026-09-24.** This section used to read "no change" and to say the live Fowler label
"holds in full." That reconciliation was wrong, and it was wrong about the one sentence this whole
page is built to get right. Recorded here rather than quietly fixed, because the earlier verdict is
the failure worth seeing.

Current text, second sentence of the `antecedent` edge label on Fowler's page:

```
Alexander's later critique of how programmers used patterns is itself part of why Fowler's
catalog discipline matters: naming is necessary but not sufficient.
```

**Apply:** replace that sentence with

```
Alexander went back to the borrowers in 1996 and named what a pattern language was
for besides the format, which is part of why Fowler's catalog discipline matters:
naming is necessary and it is not sufficient.
```

Why. There is no critique of programmers on this page's ledger, and three lines say why there is
not. `[S:25]` has him decline twice to say software lacks the features, opening by calling himself
ignorant of the field. `[S:26]`, the sentence usually read as the charge, has his own 1960s effort
as its subject and not the software community. `[S:28]` charges the audience with work it has the
capacity to do, which is commission. Every inclusion seat flagged this as the page's sharpest
distortion trap, and the new page holds the line in `thesis` and in `limits[1]` by saying the
software reading is the site's inference. A live page asserting the same thing as Alexander's own
verdict leaves the two contradicting each other in the open, which is the condition
`inbound-claims.ts` exists to surface. The replacement also drops "not sufficient" out of the banned
contrast form while keeping the point.

**This is a narrowing, so the ledger bar it has to clear is lower than a widening's.** It removes a
claim and adds none: what survives is the 1996 talk and its subject, both already carried on the new
page. `_working/martin-fowler/` has no `facts.md`, so that page's ledger exits 1 before anyone
arrives and running it after this edit proves nothing either way. The edge type, strength and tier
are untouched, so no new required line is created.

**Nothing here may be widened.** If a later round wants to add a Fowler clause it can only be a
`parallel`-grade claim, and it must be checked by hand against the long-read preface at
`src/content/long-read/martin-fowler/00-preface.md:52`, which credits "Christopher Alexander for the
pattern-language form."

**If a later round adds a Fowler clause anyway, it can only be a `parallel`-grade claim**, which adds
no required line, and it must be checked by hand against the long-read preface at
`src/content/long-read/martin-fowler/00-preface.md:52`, which credits "Christopher Alexander for the
pattern-language form."

---

## 4. Not return edges, and named here so they are not lost

- **`erich-gamma` and `peter-eisenman` have no pages,** so neither can take an edge back. Eisenman
  does not clear the inclusion filter and is a `secondary` critic by SCHEMA 4.11; Gamma is filed at
  stage 8 as a candidate to consider rather than assumed.
- **`sara-ishikawa` and `murray-silverstein` are `co_originators` with no pages here.** The build
  warns only when a co-originator who *has* a page is missing from `adjacent_thinkers`, so this is
  silent, and neither belongs in the neighbour grid on the current evidence.
- **Checked against the finished page on 2026-09-24, and one phrase had moved.** The two
  `co_originators` roles on `named_frames[0]` were widened that day from "co-author on the 1977 byline
  of A Pattern Language" to name the 1968 paper as well, on inclusion seat 1's finding that the role
  strings understated the co-credit by nine years. Nothing in items 1 to 3 quotes those role strings,
  so no label here changes; 1b's replacement role deliberately speaks about the 1977 book alone,
  because the 1987 report's bibliography cites that book and not the paper. The phrases the warning at
  the top of this file names, "granted them the format" and the word "sequence", are unchanged on the
  page.
- **A fifth live claim exists that `inbound-claims.ts` does not scan.**
  `src/content/long-read/martin-fowler/00-preface.md:52` credits Alexander for the pattern-language
  form. The script reads thinker files only. The claim holds as written, since it carries no date and
  no solo byline for the book, and it is called out in the merge request because the same blind spot
  will hide a dated claim next time.
