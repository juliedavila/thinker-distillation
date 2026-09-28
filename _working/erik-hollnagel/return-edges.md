# Erik Hollnagel: return edges and same-MR corrections to neighbours

Drafted at stage 4 on 2026-09-27, **not applied**. A later serial stage applies this after the
review rounds. Re-read it against the finished page first (calibration, Process: chase names,
counts and possessives as well as rewritten sentences).

The page links to seven neighbours. Four have no page on this site (Nancy Leveson, M. D. Cooper,
Richard Cook, Lorin Hochstein), so they take no return edge. The other three are below.

**Ledger status of every neighbour, recorded before choosing an edge type.** None of the three has
a `_working/<slug>/facts.md`. `fact-ledger.ts` already exits 1 on all three on this tree, each on a
`body_of_work[4]` coverage line, so running it after the edit proves nothing. That confines every
return edge here to `parallel`, which adds no required ledger line. An `antecedent` edge from
Allspaw's side would be truer to the ETTO relationship and is not available until Allspaw has a
ledger.

Find each field by grep, never by the index written here:

    rg -n "target_slug: erik-hollnagel" src/content/thinkers/{david-woods,sidney-dekker,john-allspaw}.md
    rg -n "concept_slug: (joint-cognitive-system|work-as-imagined-vs-work-as-done)" src/content/thinkers/{david-woods,sidney-dekker,john-allspaw}.md
    rg -n "Founded the field|Built the field" src/content/thinkers/david-woods.md

---

## 1. David Woods (`david-woods.md`): replace the existing edge label

Existing edge: `parallel`, `primary`. Keep both. The current label reads "Hollnagel's *Safety-I vs
Safety-II* distinction puts into practice the insight Woods's graceful-extensibility frame names."
No source on either page supports it, and the direction is doubtful on dates (Safety-II is in
Hollnagel's slides by 2012 [S:39]; the Woods page dates its graceful-extensibility paper to 2015,
which this ledger has not checked). The cut does not depend on that date. Replace the label with:

> Partner on cognitive systems engineering from a 1983 paper through both *Joint Cognitive Systems*
> books, and a fellow editor, with Leveson, of the 2006 anthology that started resilience
> engineering. Hollnagel names *A Tale of Two Stories* (1998), which Woods wrote with Cook and
> Miller, as a precedent for the device of setting Safety-I against Safety-II.

Sources on this page's ledger: [S:8], [S:9], [S:10], [S:6], [S:14].

Sentence-by-sentence comparison against the Hollnagel page's own Woods label:

- Return S1 ("Partner on cognitive systems engineering ... anthology that started resilience engineering") against page S1 ("Co-author since 1983, when their paper set out cognitive systems engineering, and co-editor with him and Nancy Leveson of the 2006 anthology that founded resilience engineering"). Same facts, different clause order, verbs and subject; no shared run of more than three words apart from "cognitive systems engineering" and "the 2006 anthology". Passes, narrowly; the applier may prefer to cut the anthology clause here, since the Woods page's own body of work already carries it ("Edited with Hollnagel and Leveson").
- Return S2 ("Hollnagel names *A Tale of Two Stories* (1998) ... as a precedent for the device of setting Safety-I against Safety-II") against page S2 ("One of the two precedents Hollnagel names for the Safety-I and Safety-II contrast is a 1998 paper Woods wrote with Richard Cook and Miller"). Same fact. Different construction: the return names the paper by title and the device; the page names neither. Passes.
- Neighbour-side grep: `rg -n "Tale of Two" src/content/thinkers/david-woods.md` returns nothing, so the fact is new to the Woods page.

## 2. David Woods: correct the joint cognitive system frame (same MR)

`concept_slug: joint-cognitive-system` on the Woods page sets `primary_author: david-woods`. The
Hollnagel page holds the same slug with `primary_author: erik-hollnagel`. One primary author per
frame is the site convention (calibration, Attribution), so both pages must carry the same value.

Recommendation: set the Woods frame to `primary_author: erik-hollnagel`, keep `attribution_kind:
co-authored`, and set its `co_originators` to name Woods, with a role that states contribution and
never author order:

    co_originators:
      - slug: david-woods
        role: co-author of the 1983 paper and of both Joint Cognitive Systems books (2005, 2006)

The key is chosen because the concept's first statement is the 1983 paper [S:8], and on that paper
the byline order is Hollnagel, Woods. **This is a bibliographic key and must not be written anywhere
as an argument that he contributed more.** Inclusion seat 3 argued the opposite (leave primacy
where it is; no ledger line ties author order to contribution), and seats 1, 2, 4 and 5 argued for
the change. Julie should see both before the merge. The alternative that is equally consistent:
leave the Woods page at `david-woods` and change the Hollnagel page to match.

## 3. David Woods: sole-founder wording (same MR)

- `inclusion_rationale` opens "Founded the field of resilience engineering." Change to "Co-founded
  the field of resilience engineering." The 2004 Söderköping symposium gathered fourteen researchers
  [S:5] and the founding anthology has three editors [S:6].
- `background` reads "Built the field of resilience engineering through forty years of writing".
  Change "Built the field" to "Helped build the field". Same reason, and this is the rendered
  carrier.

## 4. Sidney Dekker (`sidney-dekker.md`): replace the existing edge label

Existing edge: `parallel`, `secondary`. Now that Hollnagel has a page here the build surfaces it in
the foreground and the schema default for an on-site neighbour is `primary`. Either change
`strength` to `primary`, or add `editorial_demote_to: secondary` so the demotion is visible; the
recommendation is `primary`. The current label's "the closest theoretical parallel" is a
superlative nothing measures. Replace the label with:

> Co-editor of the 2006 anthology in which, by Hollnagel's own account, Dekker's chapter was already
> using the work-as-imagined and work-as-done pair. Safety-II runs parallel to Safety Differently:
> each treats the everyday work of the front line as where safety comes from.

Sources: [S:6], [S:24], [S:12]; the Safety Differently half rests on the Dekker page's own gloss.

Sentence-by-sentence comparison against the Hollnagel page's own Dekker label:

- Return S1 ("Co-editor of the 2006 anthology in which ... Dekker's chapter was already using the work-as-imagined and work-as-done pair") against page S2 ("Hollnagel credits Dekker with using work-as-imagined and work-as-done in the field's first anthology"). Same fact. The return names the anthology by year and makes Hollnagel's editorship the subject; the page makes Hollnagel's crediting the subject. Shared words: "work-as-imagined and work-as-done" and "anthology", which are names. Passes.
- Return S2 ("Safety-II runs parallel to Safety Differently ...") against page S1 ("Cooper's 2022 critique treats Safety-II and Dekker's Safety Differently as parts of one 'New View'"). Different claims: the return states a shared premise, the page reports a critic's grouping. Passes.
- Neighbour-side grep: the Dekker page's own WAI/WAD frame gloss does not say Dekker used the pair in 2006, so S1 adds a fact rather than repeating one.

## 5. Sidney Dekker: correct the work-as-imagined frame (same MR)

`concept_slug: work-as-imagined-vs-work-as-done`. Keep `primary_author: erik-hollnagel`, which
matches the Hollnagel page and the Allspaw page. Change the `erik-hollnagel` co-originator role
from "original in safety-science literature" to:

    role: popularized the English pair in resilience engineering and safety management; the distinction began in French ergonomics

The origin: Hollnagel's own account, "the origin is ... in French psychology and ergonomics" [S:24];
Ombredane and Faverge 1955 and Leplat and Hoc 1983 [S:24], [S:25]. Optionally add a clause to the
gloss naming the French origin. If the gloss is touched, do not import the Hollnagel page's gloss
wording.

## 6. John Allspaw (`john-allspaw.md`): add a new edge

Allspaw currently has no edge to Hollnagel, and the build warns twice: "john-allspaw has no edge
back to erik-hollnagel" and "frame work-as-imagined-vs-work-as-done credits erik-hollnagel, who
has a page here but is not in adjacent_thinkers". Append at the END of `adjacent_thinkers`
(calibration: an edge inserted mid-list shifts every positional claims line; Allspaw has no
`page-claims.md`, so the risk is to the next page that gets one):

    - target_slug: erik-hollnagel
      display_name: Erik Hollnagel
      edge_type: parallel
      edge_label: >
        Hollnagel named the trade Allspaw's thesis on outage response turned on: the
        efficiency-thoroughness trade-off, with its catalogue of shortcuts people take under
        pressure. He also carried work-as-imagined and work-as-done, a distinction that began in
        French ergonomics, into the resilience-engineering vocabulary Allspaw brought to software.
      strength: primary

Sources: [S:29], [S:39], [S:24], [S:25]. The type is `parallel` only because Allspaw has no ledger
(above); the relationship on the record is closer to `antecedent`.

Sentence-by-sentence comparison against the Hollnagel page's own Allspaw label:

- Return S1 ("Hollnagel named the trade Allspaw's thesis on outage response turned on ...") against page S1 ("Carried ETTO into software operations") and S2 ("His 2015 Lund thesis on teams resolving internet service outages reads the heuristics they used as a manifestation of the efficiency-thoroughness trade-off"). Same relationship seen from the other end. Shared words: "thesis", "outage", "efficiency-thoroughness trade-off" (a name). No shared clause. Passes.
- Return S2 ("He also carried work-as-imagined and work-as-done ...") against both page sentences: the page's Allspaw label does not mention the pair. Passes.
- Neighbour-side grep: `rg -n -i "ETTO|thoroughness" src/content/thinkers/john-allspaw.md` returns nothing, so S1 is new to the Allspaw page. "Lund" appears twice there (lines 44, 279), both about Dekker advising him; the return label avoids restating the Lund detail.
- Backticks and edge_type values: none in any label above.

**Where it will land (a prediction, not measured).** Allspaw already has nine edges and the build
collapses `richard-cook, nora-jones` on this tree. The ranking collapses first a neighbour already
credited in a frame, and Allspaw's work-as-imagined frame credits Hollnagel, so the new edge is
likely to go straight to the collapsed tier or to displace one of the two now collapsed. This was
not simulated, because this stage may not edit the page. Read the collapse line in the build after
applying, and say in the merge request which of the three return edges land in the foreground.

## 7. John Allspaw: correct the work-as-imagined frame (same MR)

Same correction as item 5, on Allspaw's `concept_slug: work-as-imagined-vs-work-as-done`: keep
`primary_author: erik-hollnagel` and replace the role "original in safety-science literature" with
the popularized role above. Grep for "original in safety-science" across the roster after applying;
it should return nothing.

---

## Carriers to grep at Ship

    rg -n -i "original in safety-science|Founded the field|Built the field|puts into practice|closest theoretical parallel" src/content/thinkers/
    rg -n "primary_author" -B8 src/content/thinkers/david-woods.md | rg -n "joint-cognitive|primary_author"

The first should return nothing once items 1 to 7 are applied.

## Round 1 editor note (2026-09-26): chase these at Ship

- Section 2 says "the concept's first statement is the 1983 paper [S:8]". Round 1 seat 3 asked whether the 1983 paper uses the joint cognitive system framing. The only abstract text research could reach (search-surfaced; ScienceDirect returned 403) says the paper "introduces the concept of a cognitive system", with no "joint". The page's frame gloss no longer says the frame was set out in the 1983 paper; it now credits the 2005 and 2006 books and records the 1983 paper as earlier co-authorship. Re-read section 2's reasoning for the key against that before applying it. The co-author role wording ("co-author of the 1983 paper and of both books") is still true as stated.
- Section 5 cites Ombredane and Faverge 1955 and Leplat and Hoc 1983 together to [S:24], [S:25]. Round 1 split them on the page: Hollnagel traces the distinction to Leplat and Hoc [S:24]; Ombredane and Faverge rest on Shorrock [S:25] and the catalogue record [S:50]. If the optional gloss clause on the Allspaw or Dekker page is written, keep the two sources apart the same way.
- The Dekker label in section 4 ("Safety-II runs parallel to Safety Differently") now has a ledger line for Safety Differently itself, [S:49].

## Ship notes added after round 2, 2026-09-26

- The page's Dekker label changed in round 2. It no longer opens "The other name critics file beside him", and "Hollnagel credits Dekker with using work-as-imagined and work-as-done" now reads "Hollnagel notes that Dekker mentioned work-as-imagined and work-as-done in his chapter of the field's first anthology" ([S:24]: Dekker "mentioned it in his chapter in the first RE book"). The sentence-by-sentence comparison above for the Dekker return label quotes the old page wording, so redo that comparison against the new label before applying, and check the return label does not carry "credits" either.
- The page's Cooper label and `reading` no longer place Safety-II at the head of Cooper's "New View"; [S:53] records that Cooper groups the approaches and treats resilience engineering as the base. Grep the plan for "head" and "heads" before applying.
- Round 2 seat 3 (finding 4): with the 1983 paper no longer carrying the joint cognitive system framing, the Woods-page correction rests on split author order ([S:8] and [S:9] list Hollnagel first, [S:10] lists Woods first). Apply it as `co-authored` with both named, and do not make Hollnagel the primary author on the Woods page on the strength of author order.

## Ship note added after round 3, 2026-09-26

- The adjudicator's edit deleted the `inclusion_rationale` clause that filed the Woods page's `primary_author: david-woods` on the joint cognitive system frame as an error, and its note says Ship drops item 2. The round 3 editor applied the deletion. Before dropping item 2, read calibration's Attribution item on shared `concept_slug`s: it says to compare `primary_author` on both holders before shipping, because the site's convention is one primary author per frame (`code-smell` carries `kent-beck` on both holders). The two holders still disagree: `erik-hollnagel.md` sets `primary_author: erik-hollnagel`, `david-woods.md` sets `primary_author: david-woods`. Both already carry `attribution_kind: co-authored` with the other named, which is what round 2's Ship note asked for. Round 2 seat 3 ruled out moving the Woods value on author order, and nothing else on the ledger decides between the two. So dropping item 2 leaves a known mismatch rather than a resolved one. Put it to Julie in the merge request as a decision with three options: leave both as they are and accept the mismatch; set the Hollnagel page to `david-woods` to match the live page; or set both to one value on a stated ground other than author order.

## Ship note added by the cold-reader editor, 2026-09-27

- **Item 2 is superseded.** Cold reader finding 6 set this page's `joint-cognitive-system` frame to `primary_author: david-woods` with `erik-hollnagel` in `co_originators`, matching the live Woods page. Do not apply item 2; `david-woods.md` keeps `david-woods`. The merge request description still opens with this as a decision for Julie.
- **The Woods return label in item 1 carries the overclaim finding 12(a) removed from this page.** "the 2006 anthology that started resilience engineering" dates the start to the book, where [S:7] has Hollnagel date the field to the 2004 workshop "as documented in" the anthology. Reword before applying, for example "a fellow editor, with Leveson, of the 2006 anthology that recorded the field's 2004 start", and redo item 1's sentence comparison, because the page's Woods label now reads "co-editor with Hollnagel and Nancy Leveson of the 2006 anthology that documented the founding of resilience engineering". Avoid "documented the founding" in the return label so the two do not repeat.
- The page's `co_originators` slugs for the 1955 book are now `andre-ombredane` and `jean-marie-faverge`. Items 5 and 7 name them only in prose, so nothing here changes; keep the full names if the optional gloss clause is written.
- The page no longer says "the Safety-I he rejects" anywhere. Grep every return label for "reject" before applying.
