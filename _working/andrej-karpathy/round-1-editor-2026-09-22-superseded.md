# Round 1 editor resolution: andrej-karpathy

Eleven edits arrived from five seats, several of them aimed at the same two sentences. Seven
distinct changes were made to the page. Four proposed wordings were rejected, in every case
because another seat's version of the same fix was better grounded or cheaper in words. Two seat
findings that carried no proposed text were also closed, and four are carried forward to round 2
unresolved, listed at the end.

Gates after the pass, both exit 0:

```
bun scripts/reading-gates.ts andrej-karpathy   PASS
bun scripts/fact-ledger.ts andrej-karpathy     PASS (29 facts, 14 factual fields all cited)
```

`extension` is 157 words of 160 after the pass, deliberately. It arrived at 156 and three seats
proposed additive edits to it. The calibration list records a page that arrived at review sitting
on the gate, which moved every editing decision to the one person in the loop who is not a
reviewer, so the funding deletions are itemised below rather than absorbed silently, and three
words of headroom are left for round 2.

`grounding-pack.md` was regenerated after the last page edit, so the pack's own-page limits and
the "current reading" block match the file round 2 will read. `reading-claims.md` was rewritten
for every changed sentence of `extension`, and it now carries the angle and Lens section it was
missing, which seat 5 named as the reason two Cunningham collisions went unseen.

---

## Applied

### 1. `tagline`, second clause (seat 1, re-authored)

- **Was:** "and later coined the word for handing the typing to a model."
- **Now:** "and later coined the word for accepting a model's diffs unread."
- Seat 1's defect holds. Handing over the typing is ordinary AI-assisted programming, which is
  the conflation `limits[0]` and Willison's narrowing exist to undo, and `[S:9]` puts the trade at
  the unread diff in his own words: "I 'Accept All' always, I don't read the diffs anymore."
- Seat 1's own wording, "shipping code nobody read," was not used. Two reasons. His post hedges
  the practice as "not too bad for throwaway weekend projects" `[S:9]`, and "shipping" reads as
  release, which widens what he said. And "code nobody read" already carries `reading` ("the other
  has source nobody read") and, after edit 6 below, `extension`; a third instance in the
  most-read field is the repeated-proposition tell from the calibration list rather than an echo
  of the page's distinction.
- Claim delta: NARROWED against the page as it stood. The old clause covered any model-written
  code; the new one covers accepting diffs without reading them, which is what `[S:9]` records.
  Nothing here imports Willison's review step as Karpathy's definition: the clause describes the
  practice he reports of himself, and `limits[0]` still owns the definitional correction.

### 2. `thirty_second_take`, "the sharpest words" sentence (seats 1, 3 and 5; seat 3's remedy)

- **Was:** "The sharpest words against the practice are now his own."
- **Now:** deleted, with no replacement sentence.
- Three seats reached this sentence independently. Seat 1: `[S:23]` is a working report on where
  coding models help, so the line reads a recantation into him. Seat 3: it is a comparative the
  page's own `limits[4]` undercuts. Seat 5: it is a superlative ranking in a field that reads as
  reportage. All three are right, and the sentence after it already carries the substance:
  "Building nanochat in October 2025 he reported that coding models were 'of very little help'..."
- Seat 1's replacement, "He has since reported where the method fails him," was rejected: it puts
  "reported" twice in consecutive sentences and adds a topic sentence for a point the next
  sentence makes. Seat 5's replacement, "He has since argued against the practice in his own
  words," was rejected on seat 5's own reasoning: `[S:23]` is a report on a piece of work, and no
  ledger line has him arguing against vibe coding as a practice.
- Deliberately left as a gap rather than bridged. Every connective considered ("his own later
  account is narrower," "for his own work the picture is different") asserts a comparison no seat
  proposed and no ledger line carries. The field now moves from the word leaving his hands to
  what he reports of his own work, with the date doing the transition. Round 2 should say whether
  that reads as a jump.
- Claim delta: deletion, exempt.

### 3. `thirty_second_take`, the Willison clause (seat 5)

- **Was:** "and the word left his hands: dictionaries carry it, and the definition most people use
  is Simon Willison's narrowing."
- **Now:** "and the word left his hands: Collins named it word of the year for 2025."
- Seat 5's count holds. The attribution correction ran in seven rendered places, and `limits[0]`
  plus the frame gloss are where it belongs. Cut from the take as proposed.
- The same sentence carried seat 3's other finding, that "dictionaries carry it" overstates
  `[S:12]`. It does: `[S:12]` records a Merriam-Webster "slang & trending" listing and Collins
  naming it Word of the Year, neither of which is an entry, and the plural aggregates them into
  lexicographic status the source does not record. Seat 3 proposed no text. Rather than leave a
  flagged overstatement standing as the only evidence in the sentence once the Willison clause
  went, the clause was narrowed to the one fact `[S:12]` states exactly. Merriam-Webster is not
  lost; `why_they_matter_as_a_thinker` carries both dictionary facts in full.
- Claim delta: NARROWED twice (a deletion, and an aggregate replaced by the single sourced
  instance). `page-claims.md` line for `thirty_second_take` dropped `[S:11]`, which the field no
  longer asserts; `[S:11]` is still cited by `limits[0]`, the gloss and the Willison edge, so the
  ledger shows no new unused fact.

### 4. `adjacent_thinkers[3]` (Fei-Fei Li) edge label (seat 1, re-authored)

- **Was:** "and CS231n is her course: she is the first instructor named on its current page, the
  course he says he designed and taught from 2015."
- **Now:** "and she is listed first among the current instructors of CS231n, the course he says he
  designed and taught from 2015."
- Seat 1 is right that `[S:24]` is the Spring 2026 page and cannot settle whose course it was in
  2015, and that the flat possessive sat in the same sentence as his self-reported design credit.
- Seat 1's "she heads the current instructor list" was not used. `[S:24]` records an order of
  names, and "heads" reads as a role over the other four instructors that the source does not
  state. "Listed first among the current instructors" is what the page can see.
- The hedge on his side is untouched: "the course he says he designed and taught from 2015" still
  attributes that to him, per `[S:1]` self-report against `[S:24]`, which does not name him.
- Claim delta: NARROWED. No return edge is affected; `fei-fei-li` has no page here, and
  `return-edges.md` carries no wording from this label.

### 5. `extension`, preconditions clause (seat 2, re-authored)

- **Was:** "The preconditions are an owner for the criterion and an evaluation set controlled like
  code"
- **Now:** "The preconditions hold only where the criterion can be stated: an owner for it, an
  evaluation set controlled like code."
- Seat 2's point is the calibration item about an extension walking into a failure mode the page's
  own limits name. `limits[2]` says that where the criterion is itself the contested thing the
  frame describes an ambition, and names authorization, lawfulness and residual risk as exactly
  that case. The prescription now carries that bound.
- "and" before the second precondition was dropped for the word budget; the colon carries the
  list. Claims line for the sentence is now `[L:3]` alone, since the precondition bound comes from
  that limit.
- Claim delta: NARROWED.

### 6. `extension`, opener (seat 5, re-authored)

- **Was:** "The comprehension crisis is usually counted in volume: generated code arriving faster
  than anyone's understanding of it."
- **Now:** "The comprehension crisis is usually counted as one gap, measured in the volume of code
  nobody has read."
- Verified seat 5's collision by reading the neighbour rather than trusting the report. Ward
  Cunningham's shipped `extension` reads "Generated code strains that assumption, since it arrives
  faster than anyone's understanding of it." The old opener was the same clause with the verb
  changed, on a page holding the same Lens position, which `lens-index.ts` confirms has four
  holders: fred-brooks, nicole-forsgren, ward-cunningham and this page. Cunningham appears nowhere
  in this page's grounding pack, which is why the pack could not surface it.
- "gap" is kept as the antecedent the next sentence needs.
- Claim delta: SAME. Both versions state that the crisis is usually counted by volume; the
  replacement adds "as one gap", which is the thing the next sentence divides, and that division
  was already the field's argument.

### 7. `extension`, first-gap remedy (seat 4; seat 2 proposed the same fix)

- **Was:** "so that gap closes by paying for review, tests and provenance"
- **Now:** "so that gap has a price in review, tests and provenance"
- Both seats caught it. Seat 4 named the sharper version: as written, the remedy argued against
  `[P:3]`, the Lens position the same field cites, where code inspection is the thing that does
  not scale. The page's own `still_load_bearing_despite` is careful about this, saying the bill
  "can at least be estimated."
- Seat 4's wording was taken because it is word-neutral. Seat 2's longer version is rejected
  below.
- Claim delta: NARROWED. "Closes" asserted the gap is closable; "has a price" asserts only that
  it is priceable, which is what the page's other fields already say.

### 8. `extension`, risk clause (seat 4, re-authored)

- **Was:** "the risk is the one he names, that a model passing its criterion can still adopt bias
  nobody can examine."
- **Now:** "The risk is the adversarial examples his essay's limitations section names: a passed
  criterion is then no evidence of safety under attack."
- Seat 4's argument is that the field ends on the softer of the two risks in the essay's own
  limitations section, and the adversarial one is the risk this reader owns. Verified: `[S:28]`
  records both, and `limits[3]` quotes both, so the swap moves between two sourced risks rather
  than importing a new one. An evaluation set "controlled like code" is itself a target, which is
  the sentence before it.
- Seat 4's wording was not used. It read "the risk is the one he states about adversaries, that
  adversarial examples and attacks make a passed criterion no evidence of safety," which
  attributes the consequence to him. What he states is that "the existence of adversarial examples
  and attacks highlights the unintuitive nature of this stack" `[S:28]`. The consequence for a
  passed criterion is the site's inference, so it sits after the colon in the site's own voice,
  per the calibration item on compressed phrasing presenting the site's reading as the thinker's
  claim.
- "under attack" bounds the claim. Without it, "no evidence of safety" reads as an absolute about
  safety generally, which neither the source nor the argument supports.
- **Claim delta: NEW, and flagged.** This is the one non-SAME row in the pass that is not a
  narrowing. The proposition "a passed criterion is then no evidence of safety under attack" is
  not on the page anywhere else. Its two halves are sourced: adversarial examples in `[S:28]` and
  `limits[3]`, and the criterion as the only comprehension surface for a trained model in
  `limits[2]` and this field's own third sentence. Inference belongs in `extension` by SCHEMA 7,
  and the domain check for this one is the security-executive seat that proposed it. Round 2
  should still read it as a new claim rather than as an edit.

### 9. `limits[1]`, quotation boundary (seat 3, no text proposed)

- **Was:** the models "kept misunderstanding the code because they have too much memory from all
  the typical ways of doing things on the Internet."
- **Now:** the models kept misreading the code because they had "too much memory from all the
  typical ways of doing things on the Internet."
- Seat 3's finding verified against the ledger. `[S:23]` carries the quoted string only from "too
  much memory" onward; the page's quotation marks ran back over words he did not speak in that
  order. Seat 3 proposed no replacement, and this is a fabricated quotation boundary on a page
  whose whole `limits[0]` is about a misattributed sentence, so it was repaired here rather than
  carried to round 2. The paraphrase outside the quotation marks is the ledger's own wording.
- Claim delta: SAME. Only the quotation boundary moved.

---

## Rejected

| Edit | Seat | Why |
|---|---|---|
| `tagline` → "coined the word for shipping code nobody read" | 1 | The defect it names is real and was fixed another way. "Shipping" reads as release, which `[S:9]`'s own hedge about throwaway weekend projects does not support, and "code nobody read" would have been the third instance of one phrase across `tagline`, `reading` and `extension`. |
| `thirty_second_take` → "He has since reported where the method fails him." | 1 | Puts "reported" in two consecutive sentences and restates what the following sentence says with its evidence. Seat 3's deletion achieves the same correction and adds nothing. |
| `thirty_second_take` → "He has since argued against the practice in his own words." | 5 | Seat 5's own finding is that no `[S:n]` ranks his objections, and this keeps the claim that he argues against the practice. `[S:23]` is a report on one repository. Replaced by deletion. |
| Li edge → "she heads the current instructor list for CS231n" | 1 | `[S:24]` records an order of names on a course page. "Heads" asserts a role over the other four current instructors that no line carries. |
| `extension` → "so that gap has a price in review, tests and provenance, which can at least be estimated" | 2 | Correct fix, worse wording. The tail is `still_load_bearing_despite`'s own sentence almost word for word, which is the repeated-proposition tell, and it costs five words in a field with three to spare. Seat 4's word-neutral version carries the same correction. |

Word-budget funding for the additive edits, recorded because an editor deletion made to pay for a
seat's addition is the documented way an overclaim gets manufactured:

- "of it" dropped from "semantic comprehension of it lives in the evaluation criterion" and "at
  all" from "or nowhere at all." Subject carried from the clause before it; no proposition
  changed.
- "The distinction he draws" → "His distinction." Two words, same claim. It makes "His" the
  field's first reference to him, which is how the old version's "he" worked too.
- "will buy ... and call" → "buys ... and calls." One word, same claim.
- Checked against every finding carried forward below: none of these four deletions touches a
  sentence any seat left open, which is the Humble failure the calibration list describes.

---

## Seat-asserted facts, each checked before it reached the page

Per SKILL stage 6, a seat's factual assertion is a research request. Nine were load-bearing here.
All nine held, so no new line was added to `facts.md` and nothing was dropped for want of one.

| Assertion | Seat | Checked against | Outcome |
|---|---|---|---|
| `[S:9]` is "I 'Accept All' always, I don't read the diffs anymore" | 1 | `facts.md` `[S:9]` | Holds. Also carries the "throwaway weekend projects" hedge, which is why "shipping" was refused. |
| `[S:23]` is a report on where coding models help, not words against the practice | 1, 3 | `facts.md` `[S:23]` | Holds. It reports nanochat, names autocomplete as his sweet spot, and praises agents on boilerplate. |
| `[S:24]` supports only that Li leads the current instructor list | 1 | `facts.md` `[S:24]` | Holds, and it is the Spring 2026 page. It also records that Karpathy is not named on it, which is why his credit stays hedged to `[S:1]`. |
| `limits[2]` denies the preconditions for authorization, lawfulness and residual risk | 2 | page `limits[2]`, `[S:5]` | Holds. That is the limit's own list. |
| `limits[1]`'s quotation runs past the verified string | 3 | `facts.md` `[S:23]` | Holds. Repaired, item 9. |
| "dictionaries carry it" overstates `[S:12]` | 3 | `facts.md` `[S:12]` | Holds. A "slang & trending" listing and a Word of the Year are not entries. Narrowed, item 3. |
| `[P:3]` makes code inspection the thing that does not scale | 4 | grounding pack `[P:3]` | Holds. |
| Adversarial examples sit in his own limitations section | 4 | `facts.md` `[S:28]`, page `limits[3]` | Holds, with the wording limit noted in item 8: he says they highlight the stack's unintuitive nature, and nothing more. |
| Cunningham's extension carries the same volume clause, and P:4 has four holders | 5 | `src/content/thinkers/ward-cunningham.md`, `bun scripts/lens-index.ts andrej-karpathy` | Both hold. Quoted in item 6. |

---

## Carried forward to round 2, unresolved

Four round 1 findings arrived with no proposed text and were not repaired here, because each one
would have needed the editor to author a claim or restructure a field no seat asked to have
restructured. They are open, not closed.

1. **Site bookkeeping in two reader-facing fields (seat 2).** `limits[4]` explains the site's own
   rule for `critiques` edges to the reader, and the `vibe-coding` gloss records that the post
   reaches this page through three reproductions. The calibration list holds one sighting of this
   on Cunningham, so seat 2's finding is the second, which makes it a checklist item rather than a
   curiosity. The gloss's disclosure arguably earns its place the way Humble's `limits[3]` does,
   by bounding an absence; `limits[4]`'s explanation of the site's filing rule is the weaker of
   the two. No text proposed, and both are judgment calls about what a reader needs.
2. **`co_originators` on the `vibe-coding` frame (seat 5, cross-batch).** Willison is filed there
   for a narrowing six weeks after the coinage, and the rendered "also held by" label will read as
   origination. SCHEMA 4.7 is the field's own definition and the fix is a schema-level call, not a
   word.
3. **The `still_load_bearing_despite` opener (seat 1, cross-batch).** "Survives the limits because
   it is a question about artifacts rather than a claim about a technology" is Majors and Beck
   with the nouns changed, and four pages now share the construction. Rewriting it is a
   sameness repair to a field no seat proposed text for, and the same seat's cross-batch note
   raises it against three pages at once, so it belongs to whoever edits the batch.
4. **The attribution correction still has six rendered carriers (seat 5).** Removing it from the
   take took the count from seven to six: the frame gloss, the `co_originators` role line,
   `reading`, `limits[0]`, the Willison edge label and `further_in`. Seat 5 named `limits[0]` and
   the gloss as the right homes. The most direct remaining duplication is `reading`'s "The
   definition people argue about is Willison's narrowing rather than his" against `limits[0]`,
   and cutting a `reading` sentence changes the gated field, its claims map and its word count, so
   it is round 2's call rather than an editor's.
