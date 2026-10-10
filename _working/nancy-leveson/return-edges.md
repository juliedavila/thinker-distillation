# Nancy Leveson: return-edge plan (stage 4)

Drafted 2026-10-09 against the stage 3 page. **Not applied.** Ship applies it after the review
rounds and must re-read it against the finished page first (calibration, Process item on the plan
as a carrier): chase names, counts and possessives, not only rewritten sentences.

The page links to seven neighbours. Three are off-site (Lorin Hochstein, Ben Treynor Sloss, Inge
Svedung) and take no return edge. The four on-site neighbours:

| Neighbour | Ledger? | Existing edge to Leveson | Plan |
|---|---|---|---|
| `jens-rasmussen` | yes, exits 0 | `extends`, primary | No change. Label checked and agreed. |
| `erik-hollnagel` | yes | `critiques`, secondary | Raise to `primary`; narrow two prose carriers of "co-founded". |
| `james-reason` | yes | none | Add `parallel`, secondary. |
| `david-woods` | **no `facts.md`** | none | Add `parallel`, secondary, `render_tier: deep`. |

Build before the plan (this branch, page added, neighbours untouched) prints three warnings this
plan answers: `erik-hollnagel: critic nancy-leveson has a page here and should be strength:
primary`, `james-reason has no edge back to nancy-leveson`, `david-woods has no edge back to
nancy-leveson`. `david-woods` already prints `collapsed jens-rasmussen`; see its section.

## 1. jens-rasmussen: no new edge, label agreed

Existing `adjacent_thinkers` entry (`extends`, primary): "Her account of his legacy says her work
extends his in three ways, among them STAMP and specification techniques built on the abstraction
hierarchy, and grounds her leading-indicators work in 'Rasmussen's theory of migration towards
states of higher risk'."

Checked against Leveson `[S:32]` (copied from Rasmussen `[S:30]`) and `[S:12]`: holds. The Leveson
page carries the reciprocal as `antecedent` and lists Rasmussen and Svedung in STAMP's
`co_originators`, with the role "author of the risk-management framework 'upon which STAMP is
built'". The two labels rest on different documents (his: the c.2016 legacy paper; hers: the 2004
*Safety Science* paper) and share no sentence. The Rasmussen limit "Leveson finds his influence
concentrated at the interface" and `further_in`'s "how her CAST method compares with AcciMaps" both
hold on `[S:32]`. Nothing to apply.

## 2. erik-hollnagel: raise the edge to primary, narrow "co-founded"

**2a. Edge strength.** `adjacent_thinkers` entry `target_slug: nancy-leveson` (find it with
`rg -n "target_slug: nancy-leveson" src/content/thinkers/erik-hollnagel.md`; it is
`adjacent_thinkers[3]` on 2026-10-09, re-derive at Ship): change `strength: secondary` to
`strength: primary`. SCHEMA 4.11: a critic who clears the filter and has a page here is primary,
and the build warns until it is. Label unchanged; checked against Leveson `[S:17]` ("Prof.
Hollnagel's arguments", 2020, MIT white paper), `[S:9]` and `[S:10]` (co-editor of the anthology
documenting the 2004 workshop), `[S:29]` (the reply is an unpublished manuscript). The edge type
stays `critiques` (Leveson critiques Hollnagel): her paper is durable, names him and argues
against him. Collapse effect: `strength` is not read by the collapse ranking, so no card should
move; read the collapse line after applying (calibration, Return edges item on `strength`).

Label comparison with the Leveson page, one line per sentence:
- Hollnagel label sentence 1 ("'Safety III' (MIT, 2020) is a white paper by a co-editor ...") against the Leveson page's Hollnagel label, `body_of_work[8]` and `limits[3]`: no shared wording; the Leveson page describes the 2020 paper as "against Hollnagel's account of Safety-I" and the label as "written against 'Prof. Hollnagel's arguments'". Low.
- Hollnagel label sentence 2 ("His answer, 'The Folly of Safety-III', exists as an unpublished manuscript.") against the Leveson Hollnagel label's "an unpublished manuscript under his byline": same fact, different sentence, on different pages. Low.

**2b. `thirty_second_take`, the sentence carrying "co-founded".** Current: "He co-founded resilience
engineering with David Woods, Nancy Leveson and others, wrote the joint cognitive systems work
with Woods, and built FRAM, ...". Proposed: "He co-founded resilience engineering with David Woods
and others, co-editing its 2006 anthology with Woods and Nancy Leveson, wrote the joint cognitive
systems work with Woods, and built FRAM, ...". Claim-delta: Leveson's role NARROWED from
co-founder to co-editor (Leveson `[S:9]`, `[S:10]`; Hollnagel `[S:6]`, `[S:7]`); Hollnagel's and
Woods's founding roles SAME, untouched, since the Hollnagel ledger owns them. Add `[S:6]` to the
Hollnagel `page-claims.md` `thirty_second_take` line if it is not already there (it is, on
2026-10-09).

**2c. `limits[1].headline`.** Current: "A co-founder says his account of Safety-I misdescribes
safety engineering". Proposed: "A co-editor of the founding anthology says his account of Safety-I
misdescribes safety engineering". Claim-delta: NARROWED, same ground as 2b. The body already reads
"Nancy Leveson, who co-edited the field's founding anthology with him", so the headline now
matches its body's strength (calibration, Attribution item on limit headlines).

Grep at Ship: `rg -n -i "co-found|founder" src/content/thinkers/erik-hollnagel.md`. On 2026-10-09
the two carriers naming Leveson are line 39 (take) and line 299 (headline); the `inclusion_rationale`
uses of "founding" describe the Woods page and the anthology and stay.

## 3. james-reason: add a parallel edge

Append at the end of `adjacent_thinkers` (calibration: append, never insert; Reason has six edges
on 2026-10-09, so this lands at index 6 and seven of seven):

```yaml
  - target_slug: nancy-leveson
    display_name: Nancy Leveson
    edge_type: parallel
    edge_label: >
      In STAMP, Leveson's accident model, a loss is analysed through the
      control loops meant to prevent it. The STPA Handbook she wrote with
      John Thomas places the Swiss cheese model among the chain-of-events
      models it offers an alternative to, and does not name Reason.
    strength: secondary
    editorial_demote_to: secondary
```

Why `parallel`: the handbook passage names the model ("dominos or Swiss cheese slices, all of
which are essentially equivalent") and not Reason, so it fails the critic test's second condition
(calibration: a counterposition that never names the thinker is `parallel`). Source: Leveson
`[S:37]`. A `parallel` edge requires no Reason ledger line; if Ship copies one anyway, copy what
the handbook says and nothing about either page (calibration, sixth sighting on ledger copies).
Reason's `page-claims.md` gains `- adjacent_thinkers[6] [S:n]` only if a line is copied.

Sentence check against the whole Leveson page (calibration, 2026-10-09 widening of the comparand):
- Sentence 1 ("In STAMP, Leveson's accident model, a loss is analysed through the control loops meant to prevent it.") against the STAMP gloss, `thesis`, `working_line`, `reading` and the Leveson Reason label: no shared wording; the page uses "constraint" and "control structure", not "control loops meant to prevent it". Low.
- Sentence 2 ("The STPA Handbook she wrote with John Thomas places the Swiss cheese model among the chain-of-events models it offers an alternative to, and does not name Reason.") against the Leveson Reason label ("offers STAMP as the alternative to the chain-of-failure-events model ... The passage does not name Reason."): same fact, reordered and reworded, and the quotation is left on her page only. Moderate on content, low on wording. Kept because the bound ("does not name Reason") is what stops a reader taking the card for a critique; rewrite at Ship if a round finds it too close.
- Byline: the handbook is "Nancy Leveson and John Thomas" (`[S:15]`), and the label names both in that order with no possessive on the handbook.

Collapse: Reason goes to seven of seven, nothing collapses (cap 7). Leveson is credited in no
Reason frame, so this edge is not a first collapse candidate.

## 4. david-woods: add a parallel edge, deep

Woods has **no `facts.md`**, so the edge must be `parallel` (calibration: a ledgerless neighbour
cannot take `critiques` or `antecedent`), and running `fact-ledger.ts david-woods` proves nothing;
record that it exits 1 before and after.

Append at the end of `adjacent_thinkers`:

```yaml
  - target_slug: nancy-leveson
    display_name: Nancy Leveson
    edge_type: parallel
    edge_label: >
      Author of STAMP, which analyses an accident through the control
      structure that should have prevented it, and an editor, with Woods
      and Hollnagel, of the 2006 resilience engineering anthology.
    strength: secondary
    render_tier: deep
```

Why deep: Woods has nine edges and the build already prints `david-woods: collapsed
jens-rasmussen`; a tenth foreground candidate would push another existing card off the main list
for a `secondary` edge resting on a shared editorship (calibration, Return edges item comparing
`strength` of what moves against what arrives). Hand-setting `deep` keeps every existing card
where it is. Read the collapse line after applying and confirm it still reads `collapsed
jens-rasmussen` and nothing more.

Duplicate check on the Woods page (calibration, grep the neighbour for the fact): `body_of_work[2]`
already says "Edited with Hollnagel and Leveson", and the Woods page's Hollnagel card may name the
anthology. The label's second clause repeats the editorship; it stays because it is the only
recorded relationship between the two, and the first clause carries what the card adds. If Ship
judges the repeat above "low", cut the second clause and keep the first.

Sentence check against the whole Leveson page:
- The single sentence against the Leveson Woods label ("One of her two co-editors, with Erik Hollnagel, on *Resilience Engineering: Concepts and Precepts* (2006), ..."): shares the editorship fact, no shared wording. Low.
- Against `thesis` ("asks why the control structure was ineffective") and `working_line`: the phrase "control structure that should have prevented it" is close in idea, different in words. Low.
- Byline order: the anthology is Hollnagel, Woods, Leveson (`[S:9]`); the label lists her co-editors as "Woods and Hollnagel" from Woods's page, which is a list of the other two editors and not a byline. If Ship prefers byline order, write "an editor, with Hollnagel and Woods, of ...".

## Corrections this plan makes to live pages (for the merge request)

1. Hollnagel `thirty_second_take`: Leveson lowered from co-founder to co-editor of the 2006 anthology.
2. Hollnagel `limits[1]` headline: "A co-founder" to "A co-editor of the founding anthology".
3. Hollnagel Leveson edge: `secondary` to `primary`, per SCHEMA 4.11 once her page exists.

All other inbound claims were agreed; see `reconciled_claims` in the stage return.

## Cold reader editor note for Ship (2026-10-09)

No cold reader finding asks for a neighbour edit, so nothing new is planned here. Finding 6 cites the
live Reason page as evidence and its repair is on the Leveson page only. Re-read the plan against these
page changes before applying it:

- **The planned Reason label, sentence 2, now has a second comparand on the Leveson page.** `reading`
  sentence 1 now reads "Leveson asks what a system failed to enforce, and sets STAMP against what the
  STPA Handbook calls "chain-of-failure-events" models." The planned label's sentence 2 ("The STPA
  Handbook she wrote with John Thomas places the Swiss cheese model among the chain-of-events models it
  offers an alternative to, and does not name Reason.") shares the handbook, the contrast and the
  chain-of-events term with that sentence as well as with the Leveson Reason label. Rated moderate on
  content and low on wording. The plan's existing reason for keeping it, the "does not name Reason"
  bound, still holds. If Ship rewrites it, open with the Swiss cheese model and keep the bound.
- **Lowered on the page, not carried by the plan (grepped):** Google SRE "uses" CAST (now: the
  ;login: account names it among the methods its teams use, `[S:47]`, and a listed talk, `[S:25]`);
  "her three books"; "best-known" and "regulated" cases; STPA "traced to" 2005; "showing promise"
  without "in these case studies"; the tagline's three domains; "since World War II" without "at
  least". `rg -n -i "CAST|Google|three books|best-known|regulated|traces|promise|World War|aerospace"`
  on this file finds only the Rasmussen `further_in` phrase "her CAST method", which is right for a
  sole-authored handbook (`[S:33]`).
- If Ship copies a Leveson line onto a neighbour's ledger, `[S:47]` closes on "Does not" clauses about
  the article; those describe the document and may be copied. Nothing on that line is about this site.

## Ship note (2026-10-09): what was applied

Re-read against the finished page (after the cold reader editor) before applying. Working tree on
opening matched the cold reader editor note: page, ledger and claims map unchanged since 18:41,
`reading_review` already set, neighbours untouched.

- **Hollnagel (2a to 2c): applied as planned.** Edge `strength` secondary to primary (the edge is
  `adjacent_thinkers[3]`, re-derived with `rg`); `thirty_second_take` now reads "co-founded
  resilience engineering with David Woods and others, co-editing its 2006 anthology with Woods and
  Nancy Leveson"; `limits[1].headline` now opens "A co-editor of the founding anthology". Label
  unchanged. `fact-ledger.ts erik-hollnagel` exits 0 before and after.
- **Reason (3): applied with the label rewritten.** The planned sentence 2 shared the handbook, the
  contrast, the chain-of-events term and the bound ("does not name Reason") with the Leveson page's
  `reading` sentence 1 and its Reason label, which reads "The passage does not name Reason." Rewritten
  per the cold reader editor's advice, from the neighbour's side, keeping the bound in new words:
  "Leveson's STAMP traces a loss to the controls that should have kept a safety constraint in force.
  The STPA Handbook, by Leveson and John Thomas, lists Swiss cheese slices with dominos as essentially
  equivalent pictures of the chain-of-failure-events model that STAMP is offered as an alternative
  to. Reason himself is not named there."
  One line per sentence against the whole Leveson page:
  - S1 against the take ("result from inadequate control or enforcement of safety-related
    constraints"), `thesis` ("treats an accident as a failure to enforce a constraint") and the STAMP
    gloss: same idea, no shared wording. Low.
  - S2 against `reading` S1 and the Leveson Reason label: shares the quoted term
    "chain-of-failure-events", which is the handbook's own, and the handbook as source; the
    "essentially equivalent" wording is the handbook's and appears on the Leveson page only inside its
    quotation. Low on wording, moderate on content, kept because it is the card's whole relationship.
    Read against `[S:37]`: "STAMP is an alternative to the chain-of-failure-events (or dominos or Swiss
    cheese slices, all of which are essentially equivalent)". Holds; no possessive on the two-author
    handbook; byline order Leveson, Thomas (`[S:15]`).
  - S3 against the Leveson Reason label's "The passage does not name Reason.": same bound, different
    words. Low.
  No ledger line copied to Reason; `parallel` needs none. `fact-ledger.ts james-reason` exits 0 before
  and after. Reason now has seven edges, all foreground; the build prints no collapse for him.
- **Woods (4): applied as planned, byline order adopted** ("an editor, with Hollnagel and Woods, of the
  2006 resilience engineering anthology"). `render_tier: deep`. The editorship repeats the Woods
  page's `body_of_work[2]` note ("Edited with Hollnagel and Leveson"); kept, because it is the only
  recorded relationship between the two and the card sits in the collapsed list. `fact-ledger.ts
  david-woods` exits 1 before and after (no `facts.md`).
- **Rasmussen (1): nothing applied**, label re-checked against the finished page and still holds.
- **Leveson `inclusion_rationale`:** its present-tense sentence about the live Hollnagel page and the
  plan ("the return-edge plan proposes narrowing") went false the moment the edges applied (calibration,
  caught-once item from Farley). Rewritten to "The Hollnagel page said ... so the merge request that
  adds this page narrows that sentence and the matching limit headline there, and raises the Hollnagel
  page's Leveson edge to primary."
- **Build after:** exit 0. The three warnings this plan answered are gone; the eight remaining
  `[distillery]` lines are identical to `main` (collapse lines on Majors, Woods, Allspaw, Fowler,
  Forsgren, Hickey, Willison, Larson). No card moved on any page. Woods still prints `collapsed
  jens-rasmussen` and nothing more. Rendered: the Hollnagel card shows `primary`, the Reason card links
  to the page in the foreground, and the Woods entry sits in the "3 more neighbors" drop-down, which
  renders names without links, as Shortridge's entry there does.
