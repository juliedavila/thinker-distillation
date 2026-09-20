# Lane C: Prior art in curated editorial and reference systems

Research dates: 2026-09-18 (policy pages) and 2026-09-18 (Elicit literature pass, §8).
Every URL below was checked and returns HTTP 200 on a
follow-redirects fetch, with one exception noted inline: the Elsevier and BMJ publisher
pages for the two journal articles reject automated requests (HTTP 403) while resolving
normally in a browser. For both, an open-access mirror is cited alongside and was read.

Scope: how comparable human-run editorial systems solve the governance problems the
Thinker Distillery is solving. Priority order is maintenance and staleness first,
intake second, because intake is the part already working here.

Reading key: **Mechanism** is what they actually do. **Steal** is the specific rule
worth porting. **Maps to** is where it lands in SCHEMA.md. **Where it fails** is the
honest disanalogy.

---

## 1. Wikipedia core content policy

### 1.1 Notability (WP:N)

Source: <https://en.wikipedia.org/wiki/Wikipedia:Notability>

**Mechanism.** The General Notability Guideline: "A topic is *presumed* to be
suitable for a stand-alone article or list when it has received *significant
coverage* in *reliable sources* that are *independent of the subject*." Each of the
four italicised words is separately defined. "Presumed" means "significant coverage
creates an assumption, not a guarantee, that a subject merits its own article."
"Significant coverage" means the source "addresses the topic directly and in detail,
so that no original research is needed to extract the content." "Independent of the
subject" "excludes works produced by the article's subject or someone affiliated with
it."

Three structural moves beyond the headline rule:

1. **Notability is a property of the world, not of the draft.** "Notability is based
   on the existence of suitable sources, not on the state of sourcing in an article."
   The absence of citations in an article does not mean the subject fails the filter.
2. **"Notability is not temporary."** Once a topic has had significant coverage, "it
   does not need to have ongoing coverage."
3. **The filter governs existence, not content.** "The notability guideline does not
   apply to the *contents* of articles." A separate, looser bar governs what may be
   mentioned inside an article.
4. **Failure has three outcomes, not one.** Non-notable topics with a related notable
   article are "often *merged*"; only those with no merge target are deleted.

**Steal: three separable rules.**

- *Independence is a named, testable sub-criterion.* The Distillery's inclusion filter
  ("two years of consistent work AND vocabulary practitioners now use") has an implicit
  independence requirement inside the second clause, because "practitioners use it"
  means non-affiliated practitioners. Make that explicit. A frame cited only by the
  thinker, their co-authors, and their employer's marketing is not uptake. WP:N gives
  the wording to borrow: excludes work by the subject "or someone affiliated with it."
- *The merge outcome.* WP:N's most useful move for this site is that failing the filter
  does not mean deletion. It means demotion to a mention inside a neighbouring page.
  The Distillery already has the destination: a rejected thinker can become a
  `co_originators` entry, an `adjacent_thinkers` edge with `target_slug` pointing at a
  person with no page, or a holder line on a concept page. Casey Rosenthal was handled
  exactly this way in the 2026-05-25 decision, but as a one-off judgement rather than a
  named outcome class. Name it: every inclusion Council verdict should be ACCEPT,
  MERGE-AS-EDGE, or REJECT, with MERGE-AS-EDGE carrying the target page.
- *The filter governs pages, not sentences.* The Distillery currently has no stated
  rule for who may be *mentioned* without clearing the filter. WP:N's split says the
  mention bar is lower and separate. This matters because `adjacent_thinkers` requires
  at least 3 entries and `target_slug` may point at someone with no page, so the site
  is already naming people who have not been through the filter. State the two bars.

**Maps to.** SCHEMA section 2 ("Inclusion filter") and section 4.11.

**Where it fails.**

- "Notability is not temporary" is wrong for this site and should be inverted. WP:N can
  say it because Wikipedia's claim is historical ("this was covered") and history does
  not decay. The Distillery's claim is present-tense: vocabulary "practitioners now use
  to reason about their own work" (SCHEMA §1 opening). A frame that practitioners used
  in 2016 and abandoned by 2024 fails the Distillery's filter while still passing WP:N.
  So the Distillery needs the opposite rule, written down: **inclusion decays**. That is
  the single most important disanalogy in this section, and it is the whole argument for
  the staleness machinery in §5 below.
- WP:N is a *sufficiency* test run by a crowd with no shared taste. The Distillery's
  filter is a *taste* test run by one curator, and SCHEMA §2 says so: "The filter is a
  private curation discipline." Wikipedia deliberately pushes editorial judgement out of
  the inclusion decision and into source-counting. The Distillery deliberately keeps it.
  Do not borrow WP:N's source-counting as a replacement for the Council; borrow it only
  as a floor the Council may not go below.

### 1.2 Verifiability (WP:V)

Source: <https://en.wikipedia.org/wiki/Wikipedia:Verifiability>

**Mechanism.** Four rules:

1. The historic slogan: "the threshold for inclusion is **verifiability, not truth**."
2. **Burden placement.** "The burden to demonstrate verifiability lies with the editor
   who adds or restores material," satisfied by one inline citation to a reliable source
   that directly supports the contribution.
3. **What must be cited.** "All quotations, and any material whose verifiability has
   been challenged or is likely to be challenged, must include an inline citation to a
   reliable source that directly supports the material."
4. **Removal is the default remedy.** "Facts or claims without an inline citation to a
   reliable source that directly supports them may be removed. They should not be
   restored without an inline citation."

**Steal.**

- *Burden on the adder, including when the adder is a reviewer.* The Distillery already
  has this rule and learned it the hard way: SCHEMA §7 step 5, "A reviewer's factual
  assertion is a research request, never a fact," after three wrong Council claims. WP:V
  is independent confirmation that this is the correct and load-bearing rule, and it
  supplies the stronger half the Distillery is missing: **"they should not be restored
  without an inline citation."** The Distillery has no restore rule. When a fact is
  pulled from a page for lack of a ledger line, nothing stops a later drafting run from
  re-adding it from the same reviewer memory. Write the restore rule into
  `facts.md` discipline: a claim removed for want of a source gets a negative line
  (`- [X:n] claim | removed YYYY-MM-DD | no source found`), so the next run sees the
  search already failed.
- *"Directly supports."* WP:V's citation test is not "the source is about this topic,"
  it is that the source "directly supports the material." That is exactly what the
  grounding auditor seat is for, and it is a cleaner phrasing than anything currently in
  briefs/review.md. Borrow the words.

**Maps to.** SCHEMA §7 step 3 (`fact-ledger.ts`), §10 "Fact ledger".

**Where it fails.**

- The fact ledger is *stronger* than WP:V in one dimension and weaker in another. It is
  stronger because `fact-ledger.ts` "derives the required field list from the page
  itself, so a new frame, critic edge or book cannot be forgotten." Wikipedia has no
  equivalent completeness check; it only catches claims someone chose to challenge. This
  is the Distillery's genuine advance over the prior art, and it should be defended in
  any redesign.
- It is weaker because WP:V rests on a published, contested definition of a reliable
  source (WP:RS) with a permanent noticeboard adjudicating specific outlets. The ledger
  requires "a URL and the date checked" and nothing about source quality. A vendor blog
  post and a peer-reviewed paper both satisfy the script. The uptake check in
  `add-thinker/SKILL.md` is where source quality actually gets judged, by hand, and
  nothing records that judgement.
- "Verifiability, not truth" does not transfer at all. Wikipedia can outsource truth to
  the source because it makes no claim of its own. The Distillery's `reading` and
  `extension` fields are the site's claims, and SCHEMA §7 is explicit that
  "interpretation is not a fact and is not checked there."

### 1.3 No Original Research (WP:NOR), where the analogy breaks hardest

Source: <https://en.wikipedia.org/wiki/Wikipedia:No_original_research>

**Mechanism.** Original research is "material, such as facts, allegations, and ideas -
for which no reliable source has ever been published." The sharpest sub-rule is SYNTH:
you may not combine sources to "state or imply a conclusion not explicitly stated by any
of those sources." The policy's own example is combining the UN's stated objective with
a count of 160 wars, which implies a conclusion about UN failure that neither source
states. Source tiers: primary sources may be used "only for straightforward factual
statements verifiable without specialized knowledge"; "any interpretation requires
secondary sources"; tertiary sources help "evaluate due weight."

**The honest test the brief asked for.** The Distillery's inclusion filter and fact
ledger are *not* independent reinventions of WP:N and WP:V in any strong sense. They are
convergent solutions to the same two problems, and the convergence is real but shallow.
The deep structure is different, and WP:NOR is where that shows:

**This site is a SYNTH engine by design, and that is the point.** Take the schema at its
word. `extension` (SCHEMA §4.9) is defined as prose where "inference is allowed, but it
must read as the site's argument and never as the thinker's claim," and §7 step 2
requires it to "cite at least one Lens position." That is precisely the operation WP:NOR
forbids: take source A (the thinker's frames) and source B (Julie's published positions)
and state a conclusion neither states. `doctrine_mode: mode-c` goes further and licenses
the page to "coin portable names for ideas the thinker described without naming," which
is original research in the strictest possible sense: a name for which no reliable source
has ever been published.

So the correct reading is not "the Distillery reinvented WP:NOR." It is that the
Distillery **inverted** it, and then rebuilt the safety property WP:NOR was protecting by
other means. WP:NOR exists to stop an encyclopedia's own voice from being mistaken for
the sources' voice. The Distillery keeps the synthesis and protects the same property
with three different mechanisms:

| WP:NOR's job | Distillery's substitute |
|---|---|
| Ban unsourced conclusions | Allow them, but confine them to named fields (`reading`, `extension`, `limits`, edge labels) |
| Ban unsourced names | Allow coining, gated by `doctrine_mode` and the byline test |
| Keep the encyclopedia's voice out | Make voice a rendered, visible property: SCHEMA §2 "Layout shows who is speaking" |
| Attribute contested claims in-text | Frame-level `attribution_kind` on every single frame |

**Steal.** Two things, and only two.

- *The SYNTH example as a named review question.* WP:NOR's UN example is a compact test
  for the one failure mode the Distillery most fears: an `extension` that reads as the
  thinker's claim. Give the byline seat that exact example and the exact question "does
  any sentence here imply a conclusion the thinker did not state, in a construction that
  would let a reader attribute it to them?" The byline test currently asks about
  attribution of *origination*; SYNTH asks about attribution of *conclusion*, which is
  a different and more common failure.
- *The primary/secondary tier rule, applied to the fact ledger.* WP:NOR's line is that
  primary sources support only "straightforward factual statements verifiable without
  specialized knowledge," and interpretation needs secondary sources. The Distillery's
  `facts.md` has no tier field. Add one. The practical payoff: a claim about what a
  thinker's essay *argues* is an interpretive claim and should require either a
  secondary source or an explicit marking that it is the site's reading. The
  `add-thinker` skill already hit this exact bug: "someone who argues a different model
  without naming the thinker is a parallel edge, not a critic" is a tier error, a
  primary source (the essay) being used to support an interpretive claim (it is a
  critique of X).

**Where it fails.** Completely, as a wholesale import, and it would destroy the site if
imported. If the Distillery adopted WP:NOR it would have to delete `extension`,
`margin_note`, `julie_reading`, every `limits` entry, and all of `mode-c`. What is left
would be a worse Wikipedia. The right posture is: WP:NOR is the constraint this project
consciously rejected, and the byline test plus the voice-rendering rule are the price it
pays for rejecting it. That framing is worth putting on the About page, which SCHEMA §9
says must "state the site's stance toward the thinkers it covers."

### 1.4 Neutral Point of View (WP:NPOV)

Source: <https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view>

**Mechanism.** Content must represent "fairly, proportionately, and, as far as possible,
without editorial bias, all the significant views that have been published by reliable
sources." Due weight: represent viewpoints "in proportion to the prominence of each
viewpoint in those sources"; tiny-minority views are excluded entirely. Tone rules:
"Avoid stating opinions as facts" and, symmetrically, "Avoid stating facts as opinions";
"prefer nonjudgmental language"; "Wikipedia describes disputes, but does not engage in
them." For contested claims: "Avoid stating seriously contested assertions as facts,"
use in-text attribution instead. The policy is "non-negotiable" and "cannot be superseded
by other policies or guidelines, nor by editor consensus."

**Steal.**

- *"Avoid stating facts as opinions" is the underused half.* Both Wikipedia editors and
  AI drafters over-hedge. The Distillery's `live_edge.summary` rule already says "hedge
  where uncertain," with no counterweight. Add the symmetric rule to the writing rules in
  SCHEMA §8: a verified ledger fact is stated flatly, without "arguably" or "many would
  say." Hedging a `[S:n]`-backed fact is a defect, not caution.
- *Due weight as a frame-selection rule.* SCHEMA §4.7 already says to choose foreground
  frames "by how often other practitioners cite the thinker for them, weighted by Julie's
  own working uses." That is a due-weight rule without the name, and NPOV supplies the
  failure mode it is missing: the same proportionality applies to `limits`. A structural
  critique held by one blogger and a structural critique that is the field's consensus
  render identically today, as cards with `severity: local | structural`. `severity`
  measures how bad the flaw is, not how widely it is held. Those are different axes.
  Consider a second field, or fold "how widely held" into the `elaboration` as a stated
  rule.

**Maps to.** SCHEMA §4.7 (foreground frame selection), §4.10 (limits), §8.

**Where it fails.** NPOV is the policy the Distillery most explicitly rejects, and
should. The site is an "editorial reading" with a named curator and a Lens; SCHEMA §1
says pages name "where those concepts fail." That is engaging in the dispute, which NPOV
forbids in terms. The transferable residue is only the *tone* rules (nonjudgmental
language, in-text attribution of contested claims), not the neutrality requirement.
Importing due weight wholesale would also break the site: the whole value is a curator's
disproportionate emphasis on what she thinks matters.

---

## 2. Wikipedia's maintenance machinery (the part nobody copies)

The intake policies get all the attention. The staleness machinery is the part that
actually maps onto this project's open problem, and it is two mechanisms.

### 2.1 "As of" and {{Update after}}: dated statements as a queue

Source: <https://en.wikipedia.org/wiki/Wikipedia:As_of>

**Mechanism.** Any statement that will go out of date is tagged at the point of writing
with `{{As of|2024}}` or `{{As of|2024|June}}`. The template does two things at once: it
renders the date in the prose, and it files the article into a dated maintenance
category such as "Articles containing potentially dated statements from 2024."
Statements from 2005 onward are categorised by month and year. The instruction is
per-statement, not per-article: "Every individual, non-contiguous statement in an article
that may date quickly should be so tagged, even if there are several such statements that
link to the same year."

The companion template is the one that matters most here. For a statement whose expiry
date is *known in advance*, editors use `{{Update after|2036}}`, which schedules the
re-check rather than merely recording the write date.

**Steal: this is the highest-value single import in this document.**

The Distillery has half of this already and does not know it. `live_edge.last_observed`
plus the 90-day greying rule (SCHEMA §4.14) is exactly `{{As of}}`: a write date that
drives a computed staleness display. What is missing is the other three quarters:

1. **Per-claim dating, not per-section dating.** Today only `live_edge` carries a
   `last_observed`. Everything else on the page has one `last_updated` for the whole
   file, which is the coarse version Wikipedia explicitly rejects. The natural home for
   per-claim dating already exists: `facts.md` lines already carry "the date checked."
   That date is currently used only to prove a check happened. Use it as a queue key
   instead. A `facts.md` line checked in May 2026 supporting a `live_edge` claim is
   stale; the same line supporting a 1975 publication date is not.
2. **A decay class per fact.** Wikipedia's distinction is between "historical facts
   (unchanging)" and "current information needing updates." The Distillery needs three
   classes, because its fields divide that way: **permanent** (a book's publication year,
   a frame's first appearance), **slow** (employer, title, `active_years`,
   `status: alive-active`), **fast** (`live_edge`, uptake, "practitioners now use this").
   Add a class marker to each `facts.md` line and the recheck queue computes itself.
3. **`{{Update after}}`: schedule the recheck at the moment of writing.** This is the
   direct answer to the brief's last bullet. When the inclusion Council parks a candidate
   with "recheck in 2027," that note should become a dated record with an expiry, not
   prose in a transcript. The mechanism is trivially portable: a `recheck.md` or a
   dated field on a parked candidate issue, plus a script that prints everything past its
   date. Section 5 below has the full proposal.

**Maps to.** SCHEMA §4.14, `facts.md` format in `add-thinker/SKILL.md` stage 1.

**Where it fails.** Wikipedia's categories work because thousands of editors browse
maintenance categories looking for work. A one-curator site has no such crowd, so the
category is useless and only an active report is useful: something that prints the
overdue list and puts it where Julie or a scheduled run will see it. The tag is worth
stealing; the passive-category delivery model is not.

### 2.2 Featured Article Review: re-reviewing what already passed

Source: <https://en.wikipedia.org/wiki/Wikipedia:Featured_article_review>

**Mechanism.** Featured status is not permanent. "FAs are held to the current standards
regardless of when they were promoted." The process has a deliberate two-phase shape:

- **Phase 0, before any formal process.** The nominator must raise the concerns on the
  article's talk page and "give article watchers two to three weeks to respond." Only
  after that informal repair window does a formal review open.
- **Phase 1, FAR.** "Possible improvements are discussed without declarations of 'keep'
  or 'delist'." The nominator must name which criteria are failing and propose fixes.
  The stated goal is improvement, not demotion.
- **Phase 2, FARC.** Only articles that fail to reach consensus in phase 1 move here,
  and only here may participants "declare 'keep' or 'delist', supported by substantive
  comments."

**Steal: the phase separation, which is the actual insight.** FAR's design principle is
that *the verdict is withheld until after the repair attempt*. Discussing improvements
and voting on removal are separated into different phases with different rules, because
mixing them turns every quality concern into a referendum on deletion, and people stop
raising concerns.

This maps directly onto a problem the Distillery will have the first time a page goes
stale. There is no defined path today for "this page passed its Council in May 2026 and
the reading no longer holds." The only machinery is the Reading Protocol, which is the
full five-seat intake process. That is too expensive to run on suspicion, so it will not
get run, and pages will silently rot. Borrow FAR's shape:

- **Page review, phase 1.** One seat, not five. It reads the page against the current
  filter and the current ledger and produces a list of specific failures with proposed
  fixes. No verdict. Cheap enough to run on a schedule.
- **Repair window.** Fixes are applied; the gates and `fact-ledger.ts` rerun. Most
  cases end here, exactly as most FARs end in "keep."
- **Page removal candidacy, phase 2.** Only if phase 1's failures are not repaired does
  a verdict pass run, and only then are DELIST outcomes on the table. Delisting has
  somewhere to go that Wikipedia lacks: a delisted thinker becomes an
  `adjacent_thinkers` edge or a concept-page holder rather than vanishing.
- **Standards are current, not historical.** Import the sentence directly. Pages are
  held to the current SCHEMA, not the SCHEMA in force when they shipped. This site has
  already revised its schema six times in four months (SCHEMA §11), so pages shipped in
  May 2026 were built against rules that no longer exist. Nothing today re-checks them.

**Maps to.** A new section in SCHEMA §7, and a new stage in `add-thinker/SKILL.md` or a
sibling `review-thinker` skill.

**Where it fails.** FAR runs on volunteer attention and social pressure: notifying major
contributors is a required step because the point is to get *them* to fix it. There is no
crowd here, so the repair window is not a social mechanism but a scheduling one, and the
work falls on the same agent that would have done the review. The saving is real but
smaller than it looks: the phase separation saves four seats per run, not the drafting
labour.

---

## 3. The Stanford Encyclopedia of Philosophy

Sources:
<https://plato.stanford.edu/info.html> ·
<https://plato.stanford.edu/about.html> ·
<https://plato.stanford.edu/archives/>

The closest analogue in spirit, and the one that has actually solved maintenance at
roughly 1800 entries over 29 years. Four mechanisms, in ascending order of value to this
project.

### 3.1 Commissioning: invitation, not submission

**Mechanism.** "Contributions are normally solicited by invitation from a member of the
Editorial Board." Unsolicited proposals are considered but the author must hold an
"accredited Ph.D. in Philosophy (or a related discipline)" with published refereed work.
Decisions are made by Co-Principal Editors "in consultation with the Senior Editor,
Associate Editors, and the members of the Editorial Board," with the Stanford philosophy
department as an Advisory Board setting basic policy.

**Steal.** The commissioning direction, which the Distillery already has right and should
keep: candidates are surfaced and invited by the system, not submitted. Worth noting
because it is the structural reason SEP can hold a quality bar Wikipedia cannot, and it
is the same reason this site can. Do not add a public submission path.

**Where it fails.** SEP's authority rests on the author being a credentialed expert on
the subject. The Distillery's pages are written by an AI drafter and reviewed by AI
seats. The credential substitute is the fact ledger, and it is a genuinely different
kind of guarantee: SEP guarantees *expert judgement*, the Distillery guarantees
*traceable sourcing*. Traceable sourcing does not catch an expert-level misreading of
what a body of work is about, which is precisely what the thinker's-advocate seat is
trying to approximate and is the weakest link in the whole system.

### 3.2 Refereeing

**Mechanism.** "All entries and substantive updates are refereed by the members of a
distinguished Editorial Board before they are made public." Entries are "refereed by one
or more of the subject editors on our Editorial Board or by one or more external referees
who have been approved by a member of the Editorial Board." Authors must engage
"constructive criticisms they receive during the referee process, prior to publication."

**Steal: the four words that matter: "and substantive updates."** SEP does not referee
only at intake. A substantive revision to an existing entry goes back through review.
The Distillery reviews at intake and has no stated rule for what happens when a shipped
page is materially edited later. Write the threshold: a change to `reading`, `extension`,
`thesis`, any `attribution_kind`, or the addition or removal of a frame or a critic edge
is substantive and re-enters review. A typo fix, a broken link, a `last_observed` bump is
not. Without this line, the cheapest way to get unreviewed text onto a page is to ship a
thin page and edit it afterwards.

**Where it fails.** SEP's referees are a standing board with continuity and memory across
years; each subject editor knows their field's entries. The Distillery's seats are
recomposed from `seats.md` per run and carry no memory between runs. `calibration.md` is
the deliberate substitute, and the skill is explicit that it exists so "each new page
starts from what earlier pages already taught us." That is the right design, and it means
`calibration.md` is doing the job an institution normally does with tenure. It should be
treated as the single most valuable file in the repo and budgeted accordingly.

### 3.3 The maintenance contract, the answer the brief was looking for

**Mechanism.** This is SEP's real innovation and it is a *contract*, not a tool:

> Authors bear responsibility to "maintain their entries and to keep them current." They
> must revise "in a timely way" in response to "important new research" and valid
> criticism. The "validity of criticism will be determined by the Principal Editor,
> typically in consultation with the relevant members of the Editorial Board."

And the enforcement clause, which is the part almost nobody knows about:

> Entries not revised in a timely way "may be retired from the active portion of the
> Encyclopedia" and moved to "the Encyclopedia Archives until such time as the entry is
> revised."

**Steal: retirement as the staleness remedy.** This is the single best idea in the whole
prior-art survey for this project, because it solves the problem the Distillery actually
has. The site's implicit choices for a stale page are "leave it up wrong" or "delete it,"
and both are bad. SEP's third option is: **move it out of the live index, keep it
readable, mark it retired, restore it when someone does the work.**

Concretely, a `status` value the Distillery does not have yet. It already has
`status: alive-active | alive-inactive | deceased`, which describes *the thinker*.
It needs a parallel field describing *the page*: `page_state: current | stale | retired`.
A retired page drops off the home-page roster and `/concepts/` holder cards, keeps its
URL so nothing 404s, and renders a banner saying when it was last verified and why it
was retired. This costs one field, one build check, and one line in the home-page query,
and it converts staleness from an embarrassment into a visible, honest state.

The second half is just as portable: **the editor, not the author, rules on whether a
criticism is valid.** In SEP that is the Principal Editor. Here it is Julie, and it is the
correct escalation for the case where a review seat says a shipped page is now wrong and
the drafting agent disagrees. That dispute has no defined resolver today.

**Where it fails.** SEP's contract binds a *person* who accepted an invitation and whose
professional reputation is attached to the entry. That is the entire enforcement
mechanism, and the Distillery has nothing like it. Its author has no reputation to
protect and no memory of having written the page. So the obligation has to be relocated
from the author to the calendar: SEP says "the author must revise in a timely way," the
Distillery must say "the system re-checks on a schedule." Same outcome, completely
different enforcement, and pretending otherwise would be the mistake.

A second and sharper disanalogy: philosophy entries go stale slowly, over years, as
literatures develop. This site's core claim ("vocabulary practitioners now use") goes
stale in months, and its `live_edge` fields in weeks. SEP's tempo is wrong here even
though its mechanism is right. Set the recheck cadence off the decay class (§2.1), not
off SEP's practice.

### 3.4 Quarterly fixed editions: versioning done right

**Mechanism.** "These archives contain periodically fixed editions of the Encyclopedia
which may be used for purposes of citation." Crucially: "The content of these editions is
neither updated nor modified in any way once the archive is made." Editions are cut four
times a year, "on the 21st of March, June, September, and December." There are 116 of
them, from Fall 1997 to Summer 2026. Every live entry carries "a link to its complete
archival history, identifying the fixed edition the reader should cite."

This is how SEP resolves the contradiction at the heart of any living reference work: the
thing must change to stay true, and it must not change to stay citable. The answer is to
run both, a mutable head and an immutable set of tags, with per-entry provenance linking
them.

**Steal.**

- *A mutable page plus dated immutable snapshots.* Git already gives this project the
  snapshots for free; what is missing is exposure. A per-page "this reading as of
  <date>" link, and a "this page has been revised N times since <date>" line, would cost
  very little and would make the site's editorial history a visible feature rather than
  repo trivia. For a site whose entire proposition is *a reading*, being able to see how
  the reading changed is arguably the most interesting thing it could show.
- *The nag in the citation model.* SEP's per-entry archival history exists so readers
  cite a version. The by-product is that an entry with no substantive revision since 2011
  is publicly, obviously stale. Visible version history is a staleness enforcement
  mechanism disguised as a citation convenience. That works for a site with no crowd,
  because the audience does the noticing.
- *A fixed cadence, publicly stated.* The 21st of four named months, for 29 years. The
  Distillery's `add-thinker` skill mentions a "weekly discovery pass" (SCHEMA §4.14) and
  nothing else has a stated period. Pick one cadence for page rechecks, write it into
  SCHEMA, and make the script that enforces it the only place the number lives, exactly
  as `review-policy.ts` is already the only place the round count lives. That pattern is
  established here and worked; apply it again.

**Where it fails.** SEP archives for scholarly citation, an obligation this site does not
have; nobody is going to cite a Distillery page in a paper. So do not build an archive
system for citation's sake. Build the visible revision history for the staleness signal
and the editorial interest, and let git be the storage. Also note SEP's quarterly cadence
is tuned to its decay rate, not to this site's; see 3.3.

---

## 4. Systematic review protocols: Cochrane and PRISMA

Sources:
<https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-03> ·
<https://www.cochrane.org/authors/handbooks-and-manuals/mecir-manual/standards-conduct-new-cochrane-intervention-reviews-c1-c75/performing-review-c24-c75/selecting-studies-include-review-c39-c42> ·
<https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-iv> ·
<https://pmc.ncbi.nlm.nih.gov/articles/PMC8005924/> (PRISMA 2020, Page et al., *BMJ* 2021;372:n71, doi:10.1136/bmj.n71)

The brief's framing is that the three-round Council is "a weaker version" of multi-reviewer
screening with conflict resolution. That is half right, and the half that is wrong is the
useful part.

### 4.1 Criteria pre-specified in a protocol

**Mechanism.** Cochrane Handbook §3.1: "systematic review authors should pre-specify
criteria for including and excluding studies in the review (eligibility criteria)."
Criteria are structured by PICO, and "decisions about which studies to include (and
exclude) ... should be documented and justified in the review protocol." §3.2.1 gives the
calibration rule: criteria "should be sufficiently broad to encompass the likely diversity
of studies ... but sufficiently narrow to ensure that a meaningful answer can be
obtained." MECIR Box 3.2.b guards the back door: "post-hoc decisions about inclusion or
exclusion of studies should keep faith with the objectives of the review rather than with
arbitrary rules." PRISMA 2020 item 24b requires authors to say where the protocol can be
accessed "or state that a protocol was not prepared," and item 24c requires them to
"describe and explain any amendments to information provided at registration or in the
protocol."

**Steal: item 24c, amendment tracking, which is the thing nobody has.** The Distillery's
inclusion filter has already moved. SCHEMA §2 states it as "at least two years of
consistent work and ... vocabulary or frames that practitioners now use to think."
`add-thinker/SKILL.md` states an operationally different version: "If every frame is under
two years old with no outside use, stop and bring it to Julie." Those are not the same
test. The first is a conjunction (two years AND uptake); the second fails only on a
conjunction of failures (under two years AND no outside use), which is a materially weaker
bar. Neither file records that a change happened or when.

The fix is cheap and it is item 24c: a dated amendment log for the filter itself, in
SCHEMA §2, with one line per change and the case that prompted it. Every past decision
then stays interpretable, which matters enormously the first time a page is rechecked,
because the recheck has to know which version of the filter the page passed.

**Steal: the breadth rule as a diagnostic.** "Broad enough to encompass the diversity,
narrow enough to get a meaningful answer" is the right way to phrase the tension the
Distillery is actually managing at a 40 to 60 entry target. It is a useful sentence to put
in front of the inclusion Council.

**Where it fails.** A Cochrane protocol is registered *before* the search, and its whole
purpose is to stop the criteria being reverse-engineered from the results. The
Distillery's filter is deliberately a "private curation discipline" that Julie is entitled
to revise when a case teaches her something, and the Casey Rosenthal decision is exactly
a criteria refinement derived from a specific candidate. That is post-hoc by Cochrane's
standards and correct here. So import the *log*, not the *freeze*.

### 4.2 Two independent screeners and pre-defined conflict resolution

**Mechanism.** MECIR standard C39, status **Mandatory**: "Use (at least) two people
working independently to determine whether each study meets the eligibility criteria, and
define in advance the process for resolving disagreements." The rationale: duplicating
selection "reduces both the risk of making mistakes and the possibility that selection is
influenced by a single person's biases." Independent screening at the title/abstract stage
is "desirable, but not mandatory." PRISMA item 8 makes it a reporting requirement:
"Specify the methods used to decide whether a study met the inclusion criteria of the
review, including how many reviewers screened each record and each report retrieved,
whether they worked independently, and if applicable, details of automation tools used."

**The honest comparison.** The five-seat Council is not a weaker version of dual
screening. It is a *different* instrument that happens to occupy the same slot:

- Dual screening is **replication**. Two reviewers apply the *same* criteria to the same
  item and the disagreement rate measures criterion ambiguity and human error.
- The Council is **decomposition**. Five seats apply *five different* criteria
  (thinker's advocate, strongest critic, grounding auditor, security-executive reader,
  novelty and byline). Disagreement between them is not error, it is the design.

So the Distillery has the decomposition instrument and does not have the replication
instrument at all, which is worth naming because replication is what catches the failure
mode the project has actually suffered. The three wrong Council claims recorded in SCHEMA
§7 step 5 (a sympathetic essay called a critique, an uptake quote with no source, a
disclosed interest called undisclosed) are exactly single-reviewer error, and a second
independent pass on the same question would have caught them. The current fix routes
around it by demanding verification instead, which is cheaper and probably right.

**Steal: the two genuinely missing pieces.**

- *Define the conflict-resolution process in advance.* C39's second clause is the part the
  Distillery is thinnest on. SCHEMA §7 step 5 defines escalation by verdict count (a third
  REVISE or any REJECT goes to Julie) but not resolution by *substance*: what happens when
  the thinker's advocate and the strongest critic disagree on a matter of fact rather than
  emphasis. Name the tiebreaker. On facts it should be the ledger, mechanically: whichever
  seat can produce an `[S:n]` line wins, and if neither can, the claim comes off the page.
  That rule is already implicit in "a reviewer's factual assertion is a research request";
  writing it as the conflict-resolution procedure makes it operative rather than advisory.
- *Report the screening method on the artifact.* PRISMA item 8 is a transparency
  requirement. `reading_review` already records `protocol`, `date`, `verdict`,
  `council_transcript`, `grounding_pack`, `claims`, `dissent`. It does not record the seat
  count or round count actually used, which is the one thing that varies and the thing that
  went wrong when "two `mode-a` pages shipped with a single round." Add `rounds` and
  `seats` to `reading_review`, populated from `review-policy.ts`. Then a page that shipped
  under-reviewed is detectable by grep rather than by memory.

**Where it fails.** Cochrane's two screeners are interchangeable and independent in the
statistical sense; agreement is measurable (kappa) and meaningful. Five AI seats derived
from one `seats.md`, run against the same grounding pack by the same underlying model, are
correlated in ways nobody has measured. Their unanimity is much weaker evidence than two
independent humans agreeing. That is a real limitation and the calibration data already
hints at it: a five-seat round 3 "accepted unanimously and changed no page" across four
runs. The correct reading of that evidence is ambiguous. It may mean rounds 1 and 2 fixed
everything. It may mean the seats stopped being independent once they had read each
other's transcripts, which is what round 2's design requires them to do. Cochrane would
call the second thing contamination and forbid it. Worth a deliberate test: run one round 3
with seats that have *not* read the earlier transcripts and see whether they find anything.

### 4.3 Recording the reasons for exclusion: the mandatory part

**Mechanism.** MECIR C41, **Mandatory**: "Document the selection process in sufficient
detail to be able to complete a flow diagram and a table of 'Characteristics of excluded
studies'." The rationale is uncompromising: decisions must be documented for all records
identified by the search, and every excluded record needs "at least one explicit reason
for their exclusion documented." PRISMA item 16b makes the same demand of the published
paper: "Cite studies that might appear to meet the inclusion criteria, but which were
excluded, and explain why they were excluded."

Note what this is *for*. It is not bookkeeping. A published exclusion table with reasons is
what lets a later reader, or a later update of the same review, check whether the
exclusion was right, and re-screen only the borderline cases instead of the whole corpus.

**Steal: a published exclusions table, and the near-miss filter on it.** PRISMA 16b is
precisely scoped and that precision is the value: you do not list everything you looked at,
you list the ones that *might appear to meet the criteria*. That is the borderline set, and
it is exactly the set the Distillery keeps losing. Today a rejected candidate's reasoning
lives in a Council transcript under `~/.claude/LIFEOS/MEMORY/COUNCIL/`, on one machine,
findable only if you remember the slug. Casey Rosenthal's exclusion survived only because
someone wrote it into SCHEMA §11 by hand.

Build `_working/_exclusions.md` (or an `exclusions/` collection) with one entry per
rejected or parked candidate: name, date, the filter version in force, the explicit
reason, the transcript path, and a `recheck_after` date where one applies. This costs
almost nothing, and it does four jobs at once: it stops the same candidate being
researched twice, it makes the filter's actual behaviour inspectable, it feeds §5's
recheck queue, and it is the only honest way to answer "why isn't X on here," which is the
first question any reader of a curated list asks.

Whether any of it renders publicly is Julie's call, and the SEP/Cochrane precedent says
publishing it is a feature. But the private version is worth building either way.

**Where it fails.** Cochrane's exclusion reasons are mechanical and enumerable ("wrong
population," "not randomised"), because the criteria are mechanical. The Distillery's real
reasons are editorial and will read as judgements on people, sometimes on living people
who will find the page. A public exclusions table with the reason "frames are derivative"
attached to a named practitioner is a different artifact from a Cochrane table, and the
byline test's own logic applies to it: naming someone in order to say no to them is a move
the site needs standing to make. Keep the field for the reason, and add a second
`public_reason` field that is either a defensible one-liner or empty, with empty meaning
the entry stays private.

---

## 5. Living and versioned artifacts

Sources:
<https://doi.org/10.1016/j.jclinepi.2017.08.010> (Elliott et al., "Living systematic
review: 1. Introduction (the why, what, when, and how)," *J Clin Epidemiol* 2017;91:23-30;
publisher full text is paywalled and blocks automated fetch, so the open-access summary
below is the working source) ·
<https://pmc.ncbi.nlm.nih.gov/articles/PMC7542271/> ·
<https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-iv> ·
<https://www.debian.org/devel/testing> ·
<https://www.debian.org/doc/manuals/developers-reference/pkgs.html>

### 5.1 Living systematic reviews: the decision to be living is itself a decision

**Mechanism.** "Living systematic review refers to how systematic reviews are updated
rather than a methodology for conducting them." The literature is searched "frequently
(e.g., monthly)," and new studies are incorporated as they appear rather than in a
periodic big-bang update. Elliott et al. give three criteria, and a review should go
living only when all three hold:

1. the field is "moving quickly, and new evidence is likely to emerge regularly";
2. "new information is likely to change the findings of the review";
3. "the research question is of high importance to decision-making."

And the exit rule, which is the underrated half: "Not all living systematic reviews should
maintain that status indefinitely." The test is "the balance of effort and payoff," and
the operational form is to re-ask the three questions. "Are all the above conditions met?
If not, it is time to end the living systematic review."

For contrast, Cochrane's data on conventional reviews: "the median time to require an
update was 5.5 years, although 23% of reviews were out of date within two years."

**Steal: living status as a per-page property with entry and exit criteria.** This is the
second-best idea in this document, and it fits the Distillery's existing structure
suspiciously well. The site already has an opt-in liveness flag: `live_edge_visible`,
valid only with `status: alive-active`, with a 90-day survey cadence and a staleness
badge. What it lacks is Elliott's three criteria for *deciding* to opt in, and an exit
rule. Right now the opt-in appears to be a drafting judgement made once and never revisited.

Port the three criteria, translated:

1. *Is the thinker still producing?* (`status: alive-active` already covers this, and it
   is the only one currently checked.)
2. *Would new output change the page's reading?* A thinker whose thesis is settled and
   whose new essays elaborate it does not need a live edge, however active they are. This
   is the criterion that would keep the live-edge count small and the surveys affordable.
3. *Does this page carry enough weight that being current matters?* A heavily linked
   thinker at the centre of the graph, or one Julie cites in her own work, earns the
   survey budget. A leaf page does not.

Then the exit rule: when the 90-day survey turns up nothing twice running, drop
`live_edge_visible` to false rather than continuing to bump `last_observed`. Repeatedly
refreshing a date on an unchanged section is the exact failure Elliott names, effort with
no payoff. Note the asymmetry: the Distillery's current rule greys out a *stale* live
edge, and has no response at all to a *persistently empty* one. Both are failure states.

**Where it fails.** Living reviews search a bounded, indexed corpus on a schedule, and the
search is the cheap part. "What has this practitioner published lately" is an open web
question against personal blogs, conference talks, podcasts and a social feed, with no
index and no completeness guarantee. The Distillery cannot claim coverage, only recency of
attempt, which is precisely why "Last surveyed {last_observed}" is better-designed than it
looks: it claims exactly what it can support. Keep that wording discipline everywhere, and
do not let any part of the site imply the survey was exhaustive.

Also: LSRs are updated by the team that wrote them, holding the question fixed. Here the
question itself decays. A living review asks the same question of new evidence. The
Distillery's recheck has to ask a *different* question over time, because "do practitioners
still use this vocabulary" is not the question the page was built to answer.

### 5.2 Cochrane's update machinery: "What's new" and the search date

**Mechanism.** An updated review carries a "What's new" section summarising "the number of
new studies and participants" and "changes in findings." The currency rule is a hard
number: "the date of the search should be within 12 months of publication of the update."
Studies found too late to assess go into a **Studies awaiting classification** table
(relevant studies "that cannot be assessed for inclusion until additional data or
information are obtained," plus studies "identified but awaiting an update to the review"),
and known-but-unfinished work goes into an **Ongoing studies** table. Both tables are
published, and both are the first thing the next update processes.

**Steal: three things, all cheap.**

- *A "What's new" block per page.* One or two sentences on the last substantive change and
  its date. It is the reader-facing half of §3.4's revision history, it makes the page
  visibly maintained, and it gives the recheck run somewhere to write its result even when
  the result is "nothing changed."
- *A stated currency window.* Cochrane's "within 12 months" is a published promise the
  reader can hold them to. The Distillery has this for `live_edge` (90 days) and nothing
  else. Set a window per decay class and state it.
- *The two parking tables, which the Distillery needs more than Cochrane does.* "Studies
  awaiting classification" is the precise prior art for the site's "recheck in 2027" note:
  a formal, published third state between in and out, holding things that are relevant but
  not yet decidable. "Ongoing studies" is the prior art for the thinker whose body of work
  is real but too young for the two-year bar. These are not the same state and should not
  share a list. A candidate whose uptake is unproven is *awaiting classification*; a
  candidate whose work is still accumulating is *ongoing*.

**Where it fails.** Cochrane's "awaiting classification" usually resolves because the
missing item is specific and obtainable: unpublished outcome data, a trial registry entry.
The Distillery's missing item is usually the passage of time and the diffusion of a
vocabulary, which has no arrival date and may never resolve. So the parked list needs a
give-up rule that Cochrane does not need: parked twice with no movement means rejected,
with the reasons recorded per §4.3, and no third recheck.

### 5.3 Debian: staged promotion with time-based gates

**Mechanism.** A new package first hits the **NEW queue** for manual review by archive
administrators before it can enter the archive at all. After that, promotion from
`unstable` to `testing` is automatic but gated on a conjunction of conditions, of which
these matter here:

- **A minimum soak time, scaled by urgency.** "It must have been in unstable for 10, 5 or
  2 days, depending on the urgency of the upload."
- **No new defects.** "It must not have release-critical bugs which do not also apply to
  the version currently in testing." Note the comparative form: the bar is not
  "defect-free," it is "no worse than what is already published."
- **Completeness.** "It must be compiled and up to date on all architectures it has
  previously been compiled for in unstable."
- **No collateral damage.** "The operation of installing the package into testing must not
  break any packages currently in testing," and dependencies must be satisfiable within
  testing.

On the maintenance side, the WNPP tags give a package's human status a machine-readable
name: **O** (orphaned, maintainer gone, reassigned to the QA group), **RFA** (request for
adoption, current maintainer still nominally there), **RFH** (request for help). And
removal is indirect: "Packages are not removed from `testing` directly. Rather, they will
be removed automatically after the package has been removed from `unstable`."

**Steal.**

- *The comparative defect bar.* "No release-critical bugs which do not also apply to the
  version currently in testing" is the right standard for a recheck, and it is the standard
  that keeps a recheck process from becoming an infinite rewrite. The question for a stale
  page is not "is this page perfect by today's SCHEMA" but "is it worse than what is
  already live, or worse than it was." That framing makes a recheck finishable.
- *Soak time scaled by urgency.* A direct answer to a tension in the current pipeline:
  everything goes through the same process regardless of stakes. A page about a thinker
  Julie has worked with directly, whose frames she uses in her own writing, carries more
  risk than a page about a historical figure whose corpus is closed and well documented. A
  two-tier soak (a page sits on a branch for N days before merge, N set by risk) is the
  Debian move and it costs nothing but calendar.
- *WNPP tags: name the neglect states.* This is the sharpest small idea in Debian's model.
  "Orphaned" is a *published status*, not a silence. The Distillery's equivalents write
  themselves: a page whose last recheck is overdue, a page with an unresolved dissent, a
  page whose `still_load_bearing_despite` no longer holds. Give each a name and render it
  in the backstage view. Neglect that has a name gets fixed; neglect that is only an
  absence does not.
- *Indirect removal.* Debian removes from testing by removing from unstable, so nothing
  gets deleted out from under its dependents. The graph analogue is real: a page cannot
  simply vanish, because `adjacent_thinkers` edges point at it and the build warns on
  non-reciprocal links. SEP's retirement (§3.3) is the mechanism; Debian supplies the
  reason it has to work this way.

**Where it fails.** Every Debian gate is machine-checkable. Nothing in "has this reading
gone stale" is. Debian's soak time works because thousands of unstable users are running
the package during the soak and filing bugs; the Distillery's soak is just delay, with no
observer generating signal. So import the *structure* (tiered gates, named statuses,
indirect removal) and be honest that the *evidence* behind each gate is a judgement call
that an agent or Julie has to make.

---

## 6. Recording why something was excluded, and scheduling the re-check

The brief names this as the site's real gap: a candidate was rejected with a "recheck in
2027" note and there is no machinery behind it. Four systems have solved pieces of it, and
together they cover the whole thing. None of them solves it as one mechanism, which is
itself the finding: **this is three separate problems wearing one name.**

The three problems are: *record the reason* (so it is not re-derived), *park the item in a
named state* (so it is neither in nor out), and *trigger the re-look* (so the park does not
become a grave).

### 6.1 Record the reason

**Prior art.** Cochrane's mandatory exclusion table (MECIR C41: every excluded record needs
"at least one explicit reason for their exclusion documented") and PRISMA item 16b's
near-miss rule ("cite studies that might appear to meet the inclusion criteria, but which
were excluded, and explain why they were excluded"). Covered in §4.3.

The complementary case is Wikipedia's **Perennial proposals**:
<https://en.wikipedia.org/wiki/Wikipedia:Perennial_proposals>. It is "a list of things
that have been frequently proposed on Wikipedia, and have been rejected by the community
several times in the past." Each entry records the proposal, the reasons for previous
rejection, anything partly implemented, and links to the discussion archives. The reopening
clause is the good part: "Consensus can change, and some proposals that remained on this
page for a long time have finally been proposed in a way that reached consensus, but you
should address rebuttals raised in the past if you make a proposal along these lines."

**Steal.** That last clause is the exact rule the Distillery wants, and it is better than a
simple recheck date: **reopening is allowed, but the reopener must answer the recorded
objections.** For this project that means a rejected candidate's entry is not a
tombstone, it is a specification for what would have to be true to change the answer. Write
the exclusion entry that way. Not "insufficient uptake" but "would qualify on evidence of
use by practitioners unaffiliated with the author; none found as of 2026-09." The second
form is testable at recheck time by an agent with no memory of the original decision, which
is the operating condition here.

This also converts the exclusions file from a liability into the most reusable artifact in
the repo. Every entry is a pre-written research brief.

### 6.2 Park it in a named state

**Prior art.** Cochrane's **Studies awaiting classification** and **Ongoing studies**
tables (§5.2): published, formal third states between included and excluded. Wikipedia's
**draftspace**: <https://en.wikipedia.org/wiki/Wikipedia:Drafts>, "pages in the Draft
namespace where new articles may be created and developed, for a limited period of time,"
explicitly for the case where "the article is about an upcoming event or forthcoming work
that is not notable yet, but likely to become so in the near future." Debian's **WNPP
tags** (§5.3) name neglect states in the same spirit.

**Steal.** Give the park state a name, a home and a shape. The Distillery already has the
home: the repo's `Candidate:` issues, and files whose names start with `_` are "disabled
drafts ... skipped by the build" (SCHEMA §4). That underscore convention is draftspace, and
it is already implemented. What is missing is the *state vocabulary*. Three states, not
one:

- **parked-early**, the work is real but too young for the two-year bar. Cochrane's
  *Ongoing studies*. Recheck is date-driven and the date is computable from when the work
  started.
- **parked-unproven**, old enough, but uptake outside the author's own circle is not
  demonstrated. Cochrane's *Awaiting classification*. Recheck is evidence-driven and needs a
  specific search, which §6.1 says should be written into the entry.
- **rejected**, fails on something that will not change, most often the byline test.
  Casey Rosenthal is this. No recheck; the entry exists so the case is not re-argued, and
  so the redirect to a concept page is visible.

Mixing the first two is what makes a recheck queue useless, because the two need different
work and different cadences.

### 6.3 Trigger the re-look

**Prior art, and the two designs on offer.**

*Pull, with an expiry.* Wikipedia's `{{Update after|2036}}` (§2.1) schedules a re-check at
the moment of writing. Draftspace's **G13** is the enforcement version: "Drafts that have
not been edited in six months may be deleted under criterion for speedy deletion G13," with
the safety valve that "pages deleted under G13 may be restored upon request at WP:REFUND."
So the park is time-bounded, expiry is automatic, and nothing is truly lost.

*Push, on a cadence.* SEP's quarterly editions (§3.4) and Cochrane's 12-month search
currency rule (§5.2) both fix a calendar and process everything due.

**Steal: both, for different states.** Use the expiry design for parked candidates and the
cadence design for shipped pages.

For parked candidates:

- Every parked entry carries a `recheck_after` date. `parked-early` computes it (two years
  from the start of the work). `parked-unproven` sets it by hand, default one year.
- A script prints everything past its date. Model it on `review-policy.ts`, which is the
  established pattern here: the rule lives in exactly one executable place, and callers
  ask rather than remember. That pattern was adopted precisely because a rule written only
  in SCHEMA got ignored twice. Do not repeat the mistake by writing the recheck cadence
  into prose.
- G13's discipline applies: a park that expires twice with nothing found becomes
  `rejected`, with the reason recorded. Unbounded parks are how a recheck list becomes a
  graveyard nobody reads.

For shipped pages, the cadence, driven by the decay class from §2.1:

- `live_edge` sections: 90 days, already specified and already enforced by the badge.
- Uptake and "practitioners now use this": annually. This is the claim the whole site rests
  on and nothing currently rechecks it.
- Biographical slow facts (employer, `status`, `active_years`): annually, or on trigger.
- Permanent facts: never.

The run itself is FAR phase 1 (§2.2): one seat, produce a findings list, no verdict. Cheap
enough to be real.

**Where all of this fails.** Every one of these systems runs its queue because a crowd
browses it or an institution is paid to. A solo curator with an agent pipeline has neither,
so the queue must be *pushed into a path already being walked*, not left somewhere to be
visited. Two places qualify: the pipeline (`.claude/workflows/thinker-pipeline.js` already
runs end to end and already parks candidates, so it should process the overdue queue before
taking new candidates) and the build (which already emits `[distillery] warning` lines, so
overdue pages and expired parks belong there too). A queue that only exists in a file is a
queue that will be read once.

---

## 7. What is worth stealing, ranked

Ranked by practical value to this project, which means weighted toward maintenance and
staleness as the brief asked.

1. **SEP's retirement state** (§3.3). A `page_state: current | stale | retired` field, so a
   stale page can leave the live index without being deleted or left standing as a lie. One
   field, one build check, one home-page filter. Highest value, lowest cost, and it is the
   only mechanism found that makes staleness a *survivable* state rather than an
   embarrassment.
2. **A decay class per fact, and per-claim dating** (§2.1). `facts.md` already carries a
   check date; add a class (permanent, slow, fast) and the recheck queue computes itself
   from data that already exists. This is the enabling change for everything else.
3. **The three-part exclusion record** (§6): an explicit reason written as a testable
   condition, a named park state (`parked-early`, `parked-unproven`, `rejected`), and a
   `recheck_after` date with a give-up rule. Directly answers the open "recheck in 2027"
   gap, and Wikipedia's perennial-proposals clause ("you should address rebuttals raised in
   the past") is the phrasing to use.
4. **FAR's phase separation for rechecking shipped pages** (§2.2). One seat producing a
   findings list with no verdict, then a repair window, and only then a verdict pass. Makes
   recheck cheap enough to actually happen, and "FAs are held to the current standards
   regardless of when they were promoted" is the sentence to put in SCHEMA, given the
   schema has changed six times in four months.
5. **SEP's "and substantive updates are refereed"** (§3.2). Define what counts as a
   substantive post-ship edit and send it back through review. Without this, the cheapest
   route to unreviewed text on a page is to ship thin and edit later.
6. **Elliott's three criteria for living status, plus an exit rule** (§5.1). Applied to
   `live_edge_visible`, which is currently opt-in-once and never revisited. Two empty
   surveys in a row should switch it off.
7. **Recording the review method on the artifact** (§4.2, PRISMA item 8). Add `rounds` and
   `seats` to `reading_review`, populated by `review-policy.ts`. The under-reviewed
   `mode-a` pages that shipped with one round would have been greppable.
8. **A dated amendment log for the inclusion filter** (§4.1, PRISMA item 24c). The filter
   has already drifted between SCHEMA §2 and the skill, unrecorded. Rechecks are
   uninterpretable without knowing which version a page passed.
9. **A "What's new" line and a stated currency window per page** (§5.2). The reader-facing
   half of maintenance, and the place a recheck writes "nothing changed."
10. **WP:V's restore rule and negative ledger lines** (§1.2). A claim removed for want of a
    source gets a line recording that the search failed, so the next run does not re-add it
    from the same bad memory.
11. **Debian's comparative defect bar and urgency-scaled soak** (§5.3). "No worse than what
    is live" is what makes a recheck finishable; risk-scaled soak time costs only calendar.
12. **Naming the neglect states** (§5.3, WNPP). Overdue recheck, unresolved dissent, broken
    load-bearing claim. Named neglect gets fixed.
13. **WP:N's merge outcome as a named verdict** (§1.1). Inclusion Council verdicts become
    ACCEPT / MERGE-AS-EDGE / REJECT, with MERGE-AS-EDGE naming the target page. Formalises
    what was done ad hoc for Casey Rosenthal.
14. **WP:NOR's SYNTH question for the byline seat** (§1.3). "Does any sentence imply a
    conclusion the thinker did not state, in a construction that lets a reader attribute it
    to them?" Different from, and more commonly violated than, the origination question the
    byline test currently asks.
15. **NPOV's "avoid stating facts as opinions"** (§1.4). The anti-hedging rule, missing
    from SCHEMA §8, which currently only tells the drafter to hedge.

*Added after the literature pass (§8), and it would sit at number 4 on evidence strength:*

16. **Run one uncontaminated round 3** (§8.4). Five correlated seats that have read each
    other's round 2 transcripts agreeing unanimously is the exact signal Bornmann et al.
    2010 say to distrust. One run against an already-cleared page, with seats that have not
    read the earlier transcripts, settles whether the 2026-09-17 decision rests on
    convergence or on anchoring. Cheapest high-value experiment available.
17. **Escalate on two failures rather than completing the round** (§8.3c). Nama et al.
    2021: single-reviewer exclusion cost 8.6% sensitivity in general but 1.2% when
    restricted to items failing two or more criteria. Saves effort on exactly the runs that
    cost most today.
18. **Sample non-auditing seats across a batch** (§8.3b). Prentice et al. 2026: accuracy is
    flat as co-screening drops. Grounding and byline seats read every page; the others can
    read a subset.

### Three things explicitly not worth stealing

- **WP:NOR itself** (§1.3). Importing it would delete `extension`, `margin_note`,
  `julie_reading`, `limits` and all of `mode-c`. The site is a deliberate SYNTH engine and
  the byline test is the price it pays. Worth stating on the About page rather than hiding.
- **NPOV's neutrality and due weight** (§1.4). The site's value is a curator's
  disproportionate emphasis. Take the tone rules only.
- **"Notability is not temporary"** (§1.1). Exactly backwards here. Wikipedia's claim is
  historical; this site's claim is present tense. **Inclusion decays**, and that sentence
  should be written into SCHEMA §2 as the counterpoint, because it is the premise the whole
  maintenance argument rests on.

### The one honest verdict on the brief's framing

The inclusion filter and fact ledger are convergent with WP:N and WP:V, not reinventions of
them. The convergence is shallow: same problems, different foundations. WP:N counts sources
to keep editorial judgement *out*; the Distillery's filter is editorial judgement, and
SCHEMA §2 says so. WP:V outsources truth to the source because Wikipedia makes no claims of
its own; the Distillery's central fields are its own claims and are explicitly outside the
ledger's scope ("interpretation is not a fact and is not checked there").

Where the Distillery is genuinely ahead of all the prior art surveyed: `fact-ledger.ts`
"derives the required field list from the page itself," so a new frame, critic edge or book
cannot be forgotten. No system here has a completeness check. Wikipedia catches only what
someone challenges; Cochrane catches only what the protocol enumerated in advance. That is
a real invention and it should be protected in any redesign.

Where it is furthest behind: everything after publication. Every system surveyed has a
maintenance answer, and this one has a 90-day badge on one optional section.

---

## 8. The measured evidence on multi-reviewer screening and on staleness

Added 2026-09-18 on Julie's instruction to use the scholarly literature rather than policy
pages alone. Searched via Elicit. All 21 DOIs cited below were verified against the
Crossref API on 2026-09-20: every one is registered and its title and venue match what is
quoted here. Several publisher landing pages (Wiley, Sage, BMJ, ACM, Annals) return HTTP
403 to automated fetches while resolving normally in a browser, which is a bot policy
rather than a dead link. Quoted text comes from the indexed abstracts and, for Stoll 2019,
from the open-access full text at
<https://pmc.ncbi.nlm.nih.gov/articles/PMC6989049/>.

The lead's hypothesis was that the five-seat, three-round Council is "an expensive guess at
something that field has measured," and that if two independent screeners plus an
adjudicator capture most of the benefit, the Council should shrink. The literature is rich,
the numbers are firm, and the answer is more interesting than either yes or no.

### 8.1 What the screening literature actually measures

Every study below measures the same thing: **replication**. N reviewers apply the *same*
eligibility criteria to the same records, and the outcome is how many eligible studies get
missed. Ranked by directness:

| Study | Design | Headline result |
|---|---|---|
| Edwards et al. 2002, *Stat Med*, doi:10.1002/SIM.1190 | 22,571 records, 4 reviewers, every record seen by 2 | "Single reviewers missed on average 8 per cent of eligible reports (range 0 to 24 per cent), whereas pairs of reviewers did not miss any (range 0 to 1 per cent)." Two reviewers raised trials identified by an average of 9%. |
| Gartlehner et al. 2020, *J Clin Epidemiol*, doi:10.1016/j.jclinepi.2020.01.005 | Crowd-based **randomised controlled trial** | "Single-reviewer abstract screening missed 13 percent of relevant studies." |
| Waffenschmidt et al. 2019, *BMC Med Res Methodol*, doi:10.1186/s12874-019-0782-0 | Methodological systematic review, 4 evaluations, 23 single screenings | Median 5% of studies missed (range 0 to 58%). Split by experience: **3% for experienced reviewers (0 to 21%), 13% for less experienced (0 to 58%)**. Single screening "is not equivalent to double screening," but is "an appropriate methodological shortcut in rapid reviews, as long as it is conducted by an experienced reviewer." |
| Stoll et al. 2019, *Res Synth Methods*, doi:10.1002/jrsm.1369 | 30,000 records; complete dual review vs dual review only at full text | Complete dual review found an extra 6.6 to 9.1% at title/abstract **and** an extra 6.6 to 11.9% at full text. Limited dual review (second reviewer late only) found just 4.4 to 5.3%. |
| Prentice et al. 2026, *JBI Evidence Synthesis*, doi:10.11124/JBIES-25-00309 | 8 reviewers, 3,891 records, simulated permutations at 5% increments of co-screening | Sensitivity (93.3 to 96.3%) and specificity (87.7 to 89.6%) were "stable across different proportions of co-screening." "Complete co-screening ... does not appreciably improve sensitivity or specificity. Rather, even low levels of co-screening ... can produce high accuracy." **"Reviewer experience in subject matter and in conducting a systematic review, however, appear to be influential."** |
| Nama et al. 2021, *Syst Rev*, doi:10.1186/s13643-021-01632-6 | 24 reviews, 930 eligible / 27,390 ineligible citations | Single reviewer excluding anything: 8.6% sensitivity loss (95% CI 6.0 to 12.1). Single reviewer excluding only citations meeting **two or more** exclusion criteria: **1.2% loss (95% CI 0.5 to 3.1)**. Five specific criteria had perfect sensitivity. Work saved 10.5 to 48.2%. |
| Buscemi et al. 2006, *J Clin Epidemiol*, doi:10.1016/J.JCLINEPI.2005.11.010 | Data extraction, not screening | "Single data extraction generated more errors than double data extraction." |

### 8.2 The honest answer to the lead's question

**The field has not measured what we are doing, and the shape of the gap matters.**

Three separate reasons, in order of importance:

1. **Replication is not decomposition.** Every number above comes from N reviewers running
   one criterion set. The Council runs five *different* criterion sets: thinker's advocate,
   strongest critic, grounding auditor, security-executive reader, novelty and byline. Cut
   it to two and you have not halved the error rate on one question, you have deleted three
   questions. The literature offers no evidence for or against that, because nobody in
   evidence synthesis screens that way.
2. **The curve is measured only from one to two.** Every study here compares single against
   double. Not one compares two against three, four or five, because the field's guidelines
   stop at "two plus a mediator," so nobody funds the study. **The absence of evidence that
   five beats two is not evidence that five is wasteful. It is evidence that the question
   was never asked.** The closest thing to a marginal-return finding is Prentice 2026, and
   what it measures is the *proportion of records* co-screened, not the *number of
   reviewers*.
3. **Where the literature does bear on us, it says the opposite of "shrink."** Stoll 2019 is
   the direct test of "spend the second reviewer late instead of early," which is the
   nearest analogue to trimming rounds. Limited dual review recovered 4.4 to 5.3% against
   complete dual review's 6.6 to 11.9% at the same late stage, so moving reviewer effort
   later lost roughly half the benefit. Applied here, that is an argument for reviewing
   early drafts harder, not for fewer rounds at the end.

So the honest verdict: **the five seats at intake are not the expensive part, and the
evidence does not license cutting them.** What the evidence does license is four specific
economies, all of which leave the five questions intact.

### 8.3 Four findings that are directly actionable

**(a) Expertise dominates headcount. Better briefs beat more seats.** Waffenschmidt found
experienced reviewers missed 3% against less experienced reviewers' 13%, a four-fold gap
from experience alone, which is larger than the gap between single and double screening.
Prentice found the same: "sensitivity was higher in reviewer groupings where at least one
reviewer had subject matter experience." The repo's version of reviewer experience is
`calibration.md` and the brief files, and this is quantitative support for the position
already taken in §3.2 above: `calibration.md` is doing the work that tenure does in a
standing editorial board. If there is a budget choice between a sixth seat and a sharper
brief for the existing five, the literature says sharpen the brief.

**(b) Partial co-screening performs like full co-screening. Sample the batch.** Prentice
2026 is the strongest efficiency result here, and it maps onto a live cost control. Batch
review currently has "each seat reviews every page in one pass." Sensitivity was flat as
co-screening dropped, which suggests the grounding and byline seats could read every page
(they audit facts and attributions, which are per-page and not sampleable) while the
thinker's-advocate and security-executive seats read a sampled subset. Caveat the finding
carries itself: simulations from a single review, "should be used as a guide only."

**(c) Single review is safe for mechanical criteria and for multi-failure items.** Nama
2021 is the cleanest actionable result in the whole search. Single-reviewer exclusion cost
8.6% sensitivity in general, but only **1.2%** when restricted to items failing two or more
criteria, and zero for five specific mechanical criteria. The Distillery already has the
mechanical tier: `reading-gates.ts` and `fact-ledger.ts` are the exclusion criteria that
need no judgement, and their verdicts need no seat at all. The portable rule is the
multi-failure one: **a page failing two or more seats' criteria does not need the remaining
seats to confirm it.** Escalate it immediately rather than completing the round. That is a
real saving on exactly the runs that currently cost the most.

**(d) An LLM third reviewer over dual review is now an evidenced pattern.** Vivekanantha et
al. 2026, *Knee Surg Sports Traumatol Arthrosc*, doi:10.1002/ksa.70462, used GPT-5 as a
third reviewer for full-text screening across three orthopaedic topics against a human
adjudicator's gold standard: sensitivity 93.3 to 100%, specificity 98.2 to 100%, accuracy
97.1 to 99.3%, 18 to 58 minutes, and 84 cents to $3.29 per topic. The authors conclude
modern LLMs "can potentially augment dual-review screening workflows by providing efficient
decision-support while preserving methodological rigour," with the honest caveat that small
per-topic samples gave wide confidence intervals. This is external validation for the
adjudication pass adopted on 2026-09-17: a single model reading both transcripts and
confirming resolution is the pattern the evidence supports, and the decision to keep the
five seats in reserve when round 2 verdicts fall short is the correct hedge.

### 8.4 Two findings that should worry us

**Reviewer agreement is a bad quality signal, and may be an inverted one.** Bornmann, Mutz
and Daniel 2010, *PLoS ONE*, doi:10.1371/journal.pone.0014331, meta-analysed 70 reliability
coefficients from 48 studies of journal peer review, 19,443 manuscripts. Inter-rater
reliability was "low": mean ICC/r² = .34, mean Cohen's kappa = .17. Their conclusion is the
sentence that matters here: **"Studies that report a high level of IRR are to be considered
less credible than those with a low level of IRR."** Rubin et al. 1993,
doi:10.1007/BF02600092, found only 36% of the variance in abstract scores was attributable
to the abstract itself, 12% to the reviewer, and the remainder to idiosyncratic
reviewer-by-abstract interaction, leaving 70% of abstracts potentially misclassified.

Apply that to the calibration evidence behind the 2026-09-17 decision: "across four runs a
five-seat round 3 accepted unanimously and changed no page." Unanimity across five
correlated AI seats that have all read each other's round 2 transcripts is precisely the
high-IRR signal Bornmann says to distrust. The two readings of that evidence are (i) rounds
1 and 2 genuinely fixed everything, and (ii) round 3 seats were anchored by the transcripts
they were required to read. Pieper et al. 2017, doi:10.1186/s12874-017-0380-y, adds that
even with a fixed instrument, agreement "varies widely depending on the pair of reviewers"
(kappa 0.32 to 0.69 across ten pairs of five reviewers), so a four-run sample is thin
evidence about seat behaviour in general.

**The cheap test:** run one round 3 with seats that have *not* read the earlier
transcripts, against a page that rounds 1 and 2 already cleared. If they find nothing, the
decision is vindicated on stronger evidence than it currently rests on. If they find
something, round 2's transcript-sharing is contaminating round 3 and the design needs
changing. This costs one run and settles a rule that currently governs every `mode-a` page.

**Raters drift, including against themselves.** Belur, Tompson, Thornton and Simon 2018,
*Sociological Methods & Research*, doi:10.1177/0049124118799372, ran three IRR tests at
three points in two reviews and found "coding behavior changes both between and within
individuals over time," recommending regular *intra*-rater as well as inter-rater checks.
For a pipeline whose seats are regenerated per run from `seats.md` against an evolving
`calibration.md`, the analogous risk is that the same nominal seat behaves differently in
January and September, and nothing would detect it. A periodic control page, re-reviewed by
the current seats and compared against the archived verdict, is the cheap instrument. It
also happens to be a staleness detector for the review process itself.

One important limit on all of this, from Oortwijn, Ossenkoppele and Betti 2021 (HUMEVAL):
they argue that "barring cases in which the researchers' goal is to elicit different
viewpoints, interrater disagreement is a sign of poor quality in the design or the
description of a task." The Distillery's goal **is** to elicit different viewpoints. So
Council disagreement is not a defect to be minimised, and chasing consensus as a quality
metric would be a category error. Disagreement between seats is signal; disagreement within
a seat's own remit across runs is the defect.

### 8.5 Staleness and update cadence: the evidence

This is where the literature is most directly useful, because the Distillery has almost no
maintenance machinery and this field has measured the decay curve.

**How fast reference artifacts go stale.** Shojania et al. 2007, *Ann Intern Med*,
doi:10.7326/0003-4819-147-4-200708210-00179 (784 citations), ran a survival analysis on 100
high-quality systematic reviews:

- Median survival free of a signal for updating: **5.5 years** (95% CI 4.6 to 7.6).
- **23%** needed updating within 2 years (95% CI 15 to 33%), **15%** within 1 year.
- **7% already had a signal at the time of publication** (95% CI 3 to 14%).
- Faster decay was associated with a fast-moving field (hazard ratio 3.26 for
  cardiovascular medicine), heterogeneity in the original review (HR 2.23), and a new study
  larger than the previous largest (HR 1.08). More included studies meant slower decay
  (HR 0.55).

And the finding that decides the design: **"No feature of the original review significantly
predicted a signal for updating occurring within 2 years of publication."**

That is the empirical death of the attractive idea that you can compute which pages are at
risk from the pages themselves. You cannot. The only thing that works is surveillance on a
schedule. Everything proposed in §2.1, §5 and §6 above rests on this, and now it rests on
something measured rather than on analogy.

Note also the 7%-stale-at-publication figure. The Distillery's exposure is worse, because a
page can sit on a branch through three Council rounds while the `live_edge` survey that fed
it ages. A `last_observed` older than the merge date by more than the window is a shippable
defect and could be a build warning today.

**What cadence surveillance should run at.** Ahmadzai et al. 2013, *Syst Rev*,
doi:10.1186/2046-4053-2-104, built exactly the surveillance system §6.3 proposes: 24 AHRQ
systematic reviews, checked every six months, each classified low, medium or high priority
for updating. Results: 17 low, 5 medium, 2 high, so **about 70% came back low priority**,
and their conclusion is a direct cadence recommendation: **"Evidence suggests that the time
period for surveillance is yearly rather than the six months used in this project."** They
also report an operational snag worth pre-empting: a real difficulty in "determining what
constituted the actual conclusions of an SR that required assessing." The Distillery's
equivalent question is which fields on a page are the load-bearing claims, and §2.1's decay
classes are the answer to it.

Takwoingi et al. 2013, *BMJ*, doi:10.1136/bmj.f7191, add the counterweight: "updating too
frequently can be an inefficient use of resources and **introduce bias**." Frequent
churning is not free and not neutral.

Together these give a defensible default: **annual surveillance, tiered by decay class,
expecting roughly 70% of pages to come back needing nothing.** That 70% figure is also the
budget argument for FAR's phase 1 (§2.2): most runs should end in "no action," so the
no-action path has to be cheap or the programme dies.

**Search often, republish rarely.** Butler et al. 2023, *J Clin Epidemiol*,
doi:10.1016/j.jclinepi.2023.111231, report on a mature living review under the title "30
search updates and three review updates later." That ratio is the mechanism: surveillance
ran ten times for every published revision. The Distillery should copy the split directly.
A recheck that finds nothing writes a date, not a new version. Only an accumulated change
worth a reader's attention produces a "What's new" entry. This also protects the revision
history proposed in §3.4 from becoming noise.

Smith and Ho 2022, *J Clin Nursing*, doi:10.1111/jocn.16547, supply the reader-facing
corollary: readers should judge currency by "the last date of the search, rather than the
publication date of the review." The Distillery already got this right in the one place it
has it ("Last surveyed {last_observed}"), and should extend that phrasing rather than
`last_updated`, which is a file-edit date masquerading as a currency claim.

**When to stop maintaining something.** Murad et al. 2023, *BMJ Evidence-Based Medicine*,
doi:10.1136/bmjebm-2022-112100, is a whole paper on retirement triggers for living reviews,
and it is the citation behind §5.1's exit rule. Four triggers: the evidence becomes
conclusive for the outcomes needed for decisions; "the question becomes less pertinent for
decision-making as determined by relevant stakeholders"; new studies are not anticipated;
or resources become unavailable. Translated: retire a live edge when the thinker's position
is settled, when the page no longer matters enough to anyone, when they have stopped
producing, or when the survey budget is gone. Naming the fourth one honestly is worth
something, since resource exhaustion is the most likely real cause here and pretending
otherwise leads to a queue of pages nominally live and actually abandoned.

### 8.6 Automated staleness detection, for later

Two Wikipedia-specific results suggest the problem is tractable by machine, and both are
worth knowing about without acting on now.

Tran and Cao 2013, doi:10.13053/RCS-70-1-16 and doi:10.1109/RIVF.2013.6719874, built
pattern-based and entity-search detectors for outdated Wikipedia infobox values, reaching
70 to 82% accuracy on CEO and employee-count fields. Their incidental finding is the
memorable one: **82% of NASDAQ-100 companies did not have their current employee numbers in
their Wikipedia infobox.** Structured fields in a crowd-maintained reference work are
mostly wrong on anything that changes, even with millions of editors. A one-curator site
should assume worse, which is the strongest available argument for retirement (§3.3) over
optimistic maintenance.

Das et al. 2022, *Proc ACM Hum Comput Interact*, doi:10.1145/3512959 (arXiv preprint 2021), frame article quality
change as **change-point detection over a time series of revisions**, detecting early
signals of a quality switch without supervision. That is the eventual shape of a real
staleness detector here: watch the signal a page is built on, not the page. Well beyond
current scope, and the right thing to build third, after the decay classes and the recheck
queue exist to produce the time series in the first place.

### 8.7 What this section changes in the ranking

Nothing in §7 is overturned, and three items move or harden:

- **The annual surveillance cadence now has a number and a source** (Ahmadzai 2013), and
  the expectation that ~70% of rechecks find nothing is the budget case for FAR phase 1.
  Item 4 in §7 gets stronger.
- **"You cannot predict which page will go stale from the page"** (Shojania 2007) is new,
  and it is load-bearing for the whole maintenance argument. Surveillance is not one option
  among several, it is the only one with evidence behind it.
- **The Council does not shrink, but four economies are evidenced**: sharpen briefs over
  adding seats, sample non-auditing seats across a batch, escalate on two failures without
  completing the round, and keep the LLM adjudication pass. Add one new item to the ranking:
  **run the uncontaminated round-3 test** (§8.4). It costs a single run and it is the only
  way to know whether the 2026-09-17 decision rests on real convergence or on anchoring.
