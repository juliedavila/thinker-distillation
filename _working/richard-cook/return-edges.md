# Richard Cook: return-edge plan (stage 4)

Drafted 2026-09-28 at stages 3 and 4, before the Reading Protocol's review rounds. **Nothing here has
been applied.** Stage 7 applies it after re-reading it against the FINAL page: chase names, counts and
possessives (above all any possessive on "A Tale of Two Stories", a Cook, Woods and Miller paper with
Cook first; on the STELLA report, cited as Woods and written by unnamed participants; and on *Behind
Human Error*, five authors), not only the sentences the rounds rewrote.

The new page links to four on-site thinkers. Three of them (Woods, Allspaw, Hollnagel) already link
to Cook, so their work here is label and frame corrections. One (Dekker) gets a new edge. The larger
job is two frame credits on the Allspaw page and two lines on the Woods page that the record does not
support, listed under each neighbour. **This plan is the reason the page can say anything about the
line of representation**: until it is applied, `above-the-line-below-the-line` has
`primary_author: david-woods` on the Cook page and `john-allspaw` on the Allspaw page, which is the
cross-page mismatch the calibration `concept_slug` item exists to stop. Both must ship in one merge
request.

Append any new edge at the END of the neighbour's `adjacent_thinkers` list. Re-derive every index at
Ship with `rg -n "target_slug:|concept_slug:" src/content/thinkers/<neighbour>.md` rather than trusting
the numbers below.

## Neighbour ledger state, recorded before any edit (2026-09-28, this sandbox)

| Neighbour | `facts.md` | `fact-ledger.ts` today | Edge types it can take |
|---|---|---|---|
| erik-hollnagel | yes | exit 0 | any; no change planned |
| john-allspaw | **no** | **exit 1 before this run** (no ledger) | `parallel` or `extends` labels only; a rerun after the edit proves nothing |
| david-woods | **no** | **exit 1 before this run** (no ledger) | same |
| sidney-dekker | **no** | **exit 1 before this run** (no ledger) | `parallel` only for a new edge |

Every correction below cites the Cook ledger (`_working/richard-cook/facts.md`), because none of the
three legacy neighbours has a ledger of its own to carry it.

## Where each edge lands (prediction, to be checked against the branch build)

Measured against this sandbox's build with the new page present and no return edges applied
(`bun run build`, 2026-09-28): `john-allspaw: collapsed nora-jones, erik-hollnagel, richard-cook`,
`david-woods: collapsed jens-rasmussen`, and a warning that `sidney-dekker` has no edge back to
`richard-cook`. Hollnagel collapses nothing. The Cook page itself (6 edges) collapses nothing.

| Neighbour | Edge to Cook after the plan | Expected result |
|---|---|---|
| john-allspaw | existing `extends`, label unchanged | **still collapsed**: after the frame fix Cook is still named as a co-originator of the above-the-line frame, and the ranking collapses a neighbour already credited in a frame first. Say so in the merge request. |
| david-woods | existing edge, relabelled, `parallel` | foreground; Woods credits Cook in no frame today (see the open item on new view of human error, which would change this) |
| erik-hollnagel | existing `antecedent`, unchanged | foreground, as today |
| sidney-dekker | **new** `parallel`, secondary, 7th edge | foreground, 7 of 7, nothing collapses; confirm in the build |

## 1. john-allspaw (frames, body of work, prose; edge label holds)

**Edge label** (index 4, `richard-cook`, `extends`, primary): holds. "Adaptive Capacity Labs co-founder
and *How Complex Systems Fail* author" is right ([S:7], [S:8], [S:9]); the lineage clause is borne out by
Allspaw's own 2009 post and 2010 reprint ([S:16], [S:14]). No change.

**Frame `above-the-line-below-the-line`** (named_frames[1] today). Allspaw's own words rule out his
authorship: "a sort of frame that my colleagues outlined in the Stella Report" ([S:33]). The report's
suggested citation is "Woods DD" and it was "prepared under the supervision of Prof. David Woods"
([S:29]); Woods and Cook presented it together in October 2017 ([S:30]); Cook wrote the standalone
statement in 2020 ([S:31]). Replace with:

```yaml
  - concept_slug: above-the-line-below-the-line
    display_name: Above the line / below the line
    one_line_gloss: >
      Operators never touch the software and hardware of a running system
      directly: it sits below a line of representation, and they work with it
      through the representations that cross that line, while the learning
      from an incident lies mostly in the cognitive work above. Outlined in the
      2017 STELLA report; Allspaw presented it to practitioners that year,
      and a 2019 post of his credits the report.
    attribution_kind: popularized
    primary_author: david-woods
    co_originators:
      - slug: david-woods
        role: the STELLA report (2017), prepared under his supervision
      - slug: richard-cook
        role: presented it with Woods in 2017 and wrote its standalone statement (ACM Queue, 2020)
      - slug: john-allspaw
        role: carried it to software practitioners from 2017
    source_link: https://snafucatchers.github.io/
```

The old gloss put "dashboards" below the line. The report puts the running software and hardware below
it and says every interaction crossing the line "is mediated by a representation" ([S:29]), so a
dashboard is a representation on the operators' side. The new gloss drops the example rather than
relocating it. Pattern: Allspaw's own work-as-imagined frame lists its primary author among
`co_originators` too. Sentence comparison against the Cook page's gloss for the same frame: Cook's
sentence 1 ("The software and hardware of a running service sit below a line of representation and
cannot be seen or controlled directly; ...") against this sentence 1 ("Operators never touch ... directly:
it sits below a line of representation ..."): same proposition, different subject, clause order and
joints; the Allspaw version adds the above-the-line learning claim his old gloss carried. Cook's
sentences 2 and 3 (the report and the 2017 and 2020 statements) against this sentence 2 (the report and
Allspaw's carrying): different facts. **Julie decides** Woods or Cook as primary author; whichever she
picks must go on both pages in the same edit.

**Frame `dark-debt`** (named_frames[2] today). The report says the term came from "one participant" it
does not name, and participants are deliberately unidentified ([S:34], [S:29]); an outside writer credits
the workshop ([S:35]); the SNAFUcatchers site presents Allspaw's piece as explaining the term "with
excerpts from the Stella report" ([S:36]). No source ties Cook or Laura Maguire to it. Replace
`attribution_kind: co-authored`, `primary_author: john-allspaw` and both `co_originators` with:

```yaml
    attribution_kind: distributed
    primary_author: david-woods
    co_originators:
      - slug: john-allspaw
        role: explained the term to practitioners from 2018, with excerpts from the report
```

and append to the gloss: "Named at the 2017 STELLA workshop by a participant the report does not
identify." `primary_author: david-woods` stands only because the schema needs a value and the report's
citation is his; the gloss says no individual coined it. **Julie decides** whether that holder is right
or whether a non-person value is wanted. Grep `laura-maguire` on the roster after the edit: she should
appear nowhere without a source.

**body_of_work[2]** editorial note, sentence 1: "Co-authored with Cook, Maguire and others." contradicts
the report's own citation ([S:29]). Replace with: "The workshop report, cited as Woods; its participants
are not named." Sentence 2 ("Where dark debt and above-the-line / below-the-line enter the literature")
holds ([S:29], [S:34]).

**Prose that calls the two frames his.** `thirty_second_take` ("*Above-the-line / below-the-line* and
*dark debt* are the named instruments") and `inclusion_rationale` ("translated it into working ops
vocabulary ... *above-the-line / below-the-line*, *dark debt*") read as instruments he carried and can
stand. `further_in.then_read[0]` holds. The Adaptive Capacity Labs founding appears three times
(`inclusion_rationale`, `thirty_second_take`, `background`) as three equal names. **Leave them as they
are** (cold reader edit, 2026-09-28): the Cook page now follows the firm's own statement of three
co-founders ([S:7]) in `background` and in its Allspaw label, after the cold reader found the
memorial-based "with John Allspaw, with David Woods" read as a typo and lowered Woods on one interested
account ([S:8]). The earlier instruction here to rewrite Allspaw's `background` from the memorial is
withdrawn, so the two pages agree.

## 2. david-woods (edge label, edge type, `further_in`)

**Edge** (index 3, `richard-cook`). Today: `extends`, primary, "Long-time Woods collaborator. *How
Complex Systems Fail* (Cook, 2000) is the most widely-read distillation of the joint Woods/Cook position
on systemic failure." The date is wrong (1998, [S:9], [S:12]); "most widely-read" has no source; and
`extends` casts Cook downstream of a foundation he co-wrote ([S:11], [S:23]). Replace with:

```yaml
  - target_slug: richard-cook
    display_name: Richard Cook
    edge_type: parallel
    edge_label: >
      Cook condensed the program the two ran together into How Complex Systems
      Fail (1998), eighteen propositions first squeezed onto two pages of card
      stock, and was first author, with Woods and Charlotte Miller, of "A Tale
      of Two Stories" the same year.
    strength: primary
```

Sources: [S:9], [S:12] (card stock, 1998), [S:11] (the program), [S:19] (byline order). Sentence
comparison against the Cook page's Woods label: Cook's sentence 1 (33 years, Allspaw's memorial) and
sentence 2 (six of seven reading-list works; Velocity 2017) against this single sentence (the condensing,
the card stock, the Tale byline): no shared fact, no shared clause. Grep of `david-woods.md` for "card"
and "Tale": the Hollnagel label already names the Tale paper ("a paper Woods co-wrote with Cook and
Miller"), so the fact appears twice on the page in different cards. Acceptable because the Hollnagel
card is about Hollnagel's precedent; if Ship prefers one carrier, cut the Tale clause here, not there.
While in that card, the Hollnagel label's "a paper Woods co-wrote with Cook and Miller" puts Woods first
on a Cook-first byline ([S:19]); suggest "a paper by Cook, Woods and Miller".

**`further_in.if_you_want_breadth`**, today "Read Cook's *How Complex Systems Fail* (eighteen rules,
eight pages, the most-cited resilience-engineering piece in software)". "Eight pages" is wrong (five PDF
pages with references, [S:9]; "four-page synoptic piece", [S:12]); "most-cited" has no source; and
"resilience-engineering piece" is anachronistic, since ACL dates the founding of resilience engineering
to 2000-2003 ([S:38]) against a 1998 text. Replace the parenthesis with "(1998, eighteen short
propositions)".

**Not planned, for Julie.** The Woods frame `new-view-of-human-error` lists Dekker and Rasmussen as
co-originators and omits Cook, a co-author of *Behind Human Error* (1994, [S:23]), which the same page's
`body_of_work[0]` calls "the foundational text for the new view". Adding `richard-cook` (role:
co-author of *Behind Human Error*, 1994) is supported by [S:23]; whether co-authoring that book makes him
a co-originator of the frame is a judgment the Council split on, so it is not in this plan. Adding it
would also credit Cook inside a Woods frame and likely collapse the Cook edge on Woods. Separately, the
two live holders of `new-view-of-human-error` already disagree on `primary_author` (`david-woods` on
Woods, `sidney-dekker` on Dekker), which predates this page.

**`inclusion_rationale`** ("The theoretical foundation that Allspaw, Cook, Dekker ... rests on"):
backstage, not contradicted, casts Cook as downstream. Optional narrowing to "that Allspaw and Dekker
rest on, and that Cook helped write".

## 3. erik-hollnagel (no change)

The existing `antecedent` edge (index 5, secondary) holds against [S:19], [S:20], [S:22], and Hollnagel's
own ledger carries it as his [S:14]. The frame gloss for Safety-I and Safety-II names "Cook, Woods and
Miller (1998)" in byline order. Nothing to apply.

## 4. sidney-dekker (new edge)

Dekker's page links to Cook only in `further_in`. Append after `jens-rasmussen` (index 5 today, so new
index 6):

```yaml
  - target_slug: richard-cook
    display_name: Richard Cook
    edge_type: parallel
    edge_label: >
      Cook argued the same ground from the operating room. His 1998 report with
      David Woods and Charlotte Miller set a first story of human error against
      a second story of systemic vulnerabilities, and he shares a byline with
      Dekker on the 2010 second edition of Behind Human Error.
    strength: secondary
```

Sources: [S:19], [S:20] (the report and its two stories), [S:24] (the 2010 edition). No `critiques` or
`antecedent` type, because Dekker has no ledger.

Sentence comparison against the Cook page's Dekker label ("Co-author with Cook, Woods, Johannesen and
Sarter of the second edition of Behind Human Error (2010)."):
- Sentence 1 ("Cook argued the same ground from the operating room.") against it: different proposition.
- Sentence 2 (the 1998 report and the byline) against it: the second-edition fact is shared, in different
  words and clause order ("shares a byline ... on the 2010 second edition" against "Co-author ... of the
  second edition ... (2010)"). If Ship reads that as near-same, cut the byline clause here and keep the
  report clause, which appears on no Dekker card.

**Do not** let this label say or imply that Dekker's "second story" (his `working_line`, paraphrased from
*The Field Guide*) comes from Cook, Woods and Miller. Whether Dekker credits them is unverified.
Separately, Dekker's `further_in` calls *How Complex Systems Fail* "the foundation Dekker is standing
on", never checked against Dekker's citations; flag it, do not repeat it.

No markdown asterisks in the new labels: edge labels print them literally on the built site
(calibration, 2026-09-27 notes).

## Round 1 resolution note (2026-09-28)

Round 1 seat 3 found that the page's Allspaw edge dated his STELLA credit to the 2017 talk, where
[S:33] is a 2019 post. The same compression sat in the planned Allspaw gloss above ("carried it to
practitioners from that year, crediting the report"), and was rewritten in the same pass to date the
credit to the 2019 post. Ship: re-read this plan against the final page, as usual.

## Round 2 resolution note (2026-09-28)

Round 2 changed five phrases that a plan label could carry: the line-of-representation gloss ("everything the operators do crosses the line" became "every interaction that crosses the line goes through a representation", [S:29]); "built on his dynamic model of risk" became "Rasmussen's" in the take and the going solid gloss; the `limits[0]` headline dropped "asserted"; `limits[1]` no longer says the proposition "gives no test"; and `inclusion_rationale` now routes the 2017 uptake through the Woods and Cook Velocity keynote ([S:30], [S:54]) as well as Allspaw's talk. The plan was grepped for each. The planned Allspaw gloss says operators "work with it through the representations that cross that line", which does not carry the widened "everything" form, and says Allspaw "presented it to practitioners that year" without making his talk the only route. Nothing in the plan changed. Ship: re-read against the final page, as usual, including the Woods label for the Velocity keynote.

## Cold reader resolution note (2026-09-28)

Applied by the cold reader editor; details in `_working/_council/2026-09-28/cold-reader-editor-richard-cook.md`. What Ship must carry into this plan:

- **Ship gate (cold reader finding 3).** The Cook page now files `above-the-line-below-the-line` as `extended`, `primary_author: david-woods`. The Allspaw frame block above (`popularized`, `primary_author: david-woods`) must land in the **same merge request**, together with the `dark-debt` correction, or the two holders disagree on `primary_author` and the "also held by" line shows Allspaw's old dashboards-below-the-line gloss against this page's. If Julie restores `co-authored` on the Cook page or makes Cook primary, the Allspaw block's `primary_author` changes in the same edit.
- **Priority wording.** The page no longer says the line of representation was "introduced" in the STELLA report, nor that Cook "named" the first and second stories; it says "set out". The planned Allspaw gloss ("Outlined in the 2017 STELLA report") and the Woods and Dekker labels claim no firstness, so they hold. Do not add "introduced", "coined" or "named" to any label.
- **Adaptive Capacity Labs.** See the withdrawn instruction under section 1: Allspaw's three equal names stay.
- **Take.** The page's take now names the 2012 Velocity keynote and the 2018 chapter with Allspaw ([S:15], [S:46], [S:32]). The planned labels do not mention either; if Ship adds one to the Allspaw card, check the Allspaw page for the 2018 chapter first, per the grep-the-neighbour item.

## Ship resolution note (2026-09-28)

Applied on branch `candidate/richard-cook` after re-reading this plan against the final page (cold reader editor's version, 12:45). Working tree matched the cold reader editor's note when Ship opened: page and working files all older than that note, no neighbour touched.

- **john-allspaw.** Above-the-line frame block applied as planned (`popularized`, `primary_author: david-woods`, three co-originators, source link to the report). Dark-debt block applied as planned, except the gloss sentence reads "The STELLA report attributes the term to a workshop participant it does not identify." in place of "Named at the 2017 STELLA workshop by ...", because the cold reader resolution note bars "named" from any label and the report records only that a participant "described" it ([S:34]). `laura-maguire` now appears nowhere on the roster. `body_of_work[2]` sentence 1 replaced as planned; sentence 2 "Where ... enter the literature" also lowered to "It sets out ...", for the same firstness reason the page moved from "introduced" to "set out". Left for Julie: `further_in.then_read[0]` still says the two frames "enter the literature". Edge label unchanged.
- **david-woods.** Cook edge now `parallel`. Label shortened from the plan: the "A Tale of Two Stories" clause is cut here because the Hollnagel card on the same page already names that paper (the plan's own fallback), and the card-stock detail is attributed ("by Allspaw's account", [S:12]) because it rests on the memorial alone. Hollnagel label byline corrected to "a paper by Cook, Woods and Miller" ([S:19]). `further_in` parenthesis replaced as planned. Optional `inclusion_rationale` narrowing applied ("rest on, and that Cook helped write").
- **sidney-dekker.** New `parallel` secondary edge appended as the 7th, label as planned. The byline clause was compared sentence against sentence with the Cook page's Dekker label and kept: same fact, different subject, clause order and joints. Also corrected a possessive on a multi-author book in `further_in` ("Woods's *Behind Human Error*" to "*Behind Human Error* (1994, Woods, Cook and colleagues)", [S:23]); the "foundation Dekker is standing on" claim is untouched and still unchecked.
- **erik-hollnagel.** No change.

Label greps: no backticks, no `edge_type` value, no em-dash, no "introduced", "coined" or "named" in any new label. Build exit 0. Collapse lines identical to the pre-edit baseline (`john-allspaw: collapsed nora-jones, erik-hollnagel, richard-cook`; `david-woods: collapsed jens-rasmussen`); the only warning that changed is the Dekker back-link warning, now gone. Where each edge lands: Woods foreground, Hollnagel foreground, Dekker foreground (7 of 7), Allspaw collapsed (as predicted). Neighbour ledgers: Allspaw, Woods and Dekker exit 1 before and after (no `facts.md`), Hollnagel exit 0.
