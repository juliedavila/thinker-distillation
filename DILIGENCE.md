# Due diligence pass: readable to an outsider, true to the rules, built for wandering

<!-- RESUME-HEAD v1 -->
> **Status** · 2026-10-15. Step 1's mechanical half is done ahead of step 0: the template em-dashes are gone, and four report-only tools exist (`scripts/duplicate-points.ts`, `scripts/firstness.ts`, `scripts/rendered-jargon.ts`, `scripts/graph-report.ts`), none wired into verify or CI. Still open in step 1: the rubric, which needs step 0. No prose has been touched.
> **Next** · Julie answers the five open questions below, then reads the three calibration pages (step 0). Camila runs the four tools at the start of step 2.
> **Blocked** · On Julie's answers. Fan-out audit work needs her explicit opt-in to the Workflow tool when it starts.
> **Resume** · Read this file top to bottom, then /Users/juliedavila/Camila/thinker-distillation/SCHEMA.md section 8, then "Prose remediation passes" in /Users/juliedavila/.claude/LIFEOS/USER/CONFIG/OPERATIONAL_RULES.md, then the worked example at /Users/juliedavila/.claude/LIFEOS/MEMORY/WORK/sf2-writing-rules-audit-2026-09/. The #98 launch inventories (local only) are in /Users/juliedavila/Camila/thinker-distillation/_working/_launch/.
<!-- /RESUME-HEAD -->

## What this phase is for

Twenty-eight pages are live, and they were written under three generations of rules. Twenty shipped before the cold reader became permanent on 2026-09-25 (a few of those had a one-off cold read as a control), nine have no fact ledger, and every check added since September has been applied forward, never backward. Julie wants the whole site to hold three properties at once:

1. **It follows the writing rules.** SCHEMA section 8 and the private guides it names: no em-dashes, no contrast cadence, no banned words, repetition treated as the tell, the AI-pattern tiers P0 to P2, and the squint test.
2. **It reads to an outsider.** The reference reader is Julie herself, reading cold: technically literate, unfamiliar with how a page was made, and with no reason to know what "frame", "attribution kind" or "the site's reading" mean unless the page tells her.
3. **It supports open-ended learning through the graph.** A reader should be able to start on any page and wander, with each link saying why it is worth following, and concept pages gathering the ideas several thinkers share.

The phase is due diligence, not a rewrite. It finds what falls short, fixes what can be fixed without changing what a page claims, and brings everything else to Julie as a decision.

## Where the corpus stands (measured 2026-10-10)

- **Length.** Rendered pages run from 1,503 words (Komoroske) to 3,808 (Gene Kim), median 2,651. Newer pages are longer. Reported here for orientation only: length is not a target (see the rules below).
- **Em-dashes.** Every page renders two, both from the site template's page title ("Jens Rasmussen — Thinker Distillation"). One template fix clears all 28.
- **The link graph is connected but uneven.** Forsgren has 13 incoming links and Fowler 12; Alexander and Shortridge have 1 each, though Shortridge links out to 5. Most links are reciprocal.
- **The concept layer is thin.** Three concept pages (adaptive capacity, append-don't-overwrite, coordination headwind), each reached from two or three thinker pages. Two more are filed and waiting: #94 (weaknesses that combine) and #99 (stale authority).
- **Unequal grounding.** Nine pages have no ledger: Komoroske, Woods, Brooks, Allspaw, Fowler, Dalio, Dekker, Fournier, Hickey. Fifteen pages are exempt from the antecedent-search check. On these pages a style edit cannot be checked against a source, which constrains what the pass may do to them.
- **Open slots.** Four pages still show "Awaiting Julie's editorial reading". Those slots are Julie's and the pass never fills them.

## Rules the pass is bound by

These come from OPERATIONAL_RULES "Prose remediation passes" and were earned on the SF² audit in September. They are not optional.

- **The claim-delta gate.** A pass may delete or restructure propositions, never add one. Every rewrite (deletions exempt) gets one line stating the proposition before and after, marked SAME, NARROWED, WIDENED or NEW. Anything other than SAME leaves the style pass for a check against the ledger before it is committed, and Julie spot-checks only those rows. A NEW row is a defect: it goes back.
- **Fix the generating rule, not the surface string.** A ban satisfied mechanically moves the tell somewhere else. In July a corpus-wide swap of ", not Y" for "rather than Y" cleared the banned string and left the reflex in place at higher density.
- **Density is never a success criterion.** Report defects fixed and regressions reversed, per page, with reasons. No corpus-wide counts as targets, and a deliberately kept contrast is a floor, not a gap.
- **The ledger stays binding.** No claim enters a page without a ledger line, whoever proposes it. On the nine ledger-exempt pages, only SAME edits are allowed until a ledger exists (open question 3).
- **Neighbours are part of the page.** An edit that changes how a page credits someone is checked against every page that credits them (`bun scripts/inbound-claims.ts`), and fixed there in the same change.
- **Julie's slots are hers.** `julie_reading`, `margin_note` and the About page slots are never written or edited.
- **Read the rendered page, not the YAML.** The outsider never sees frontmatter. Readability is judged on the built page, at true size, region by region, and visual claims are verified in the browser (Interceptor), never from source.

## The steps

Sequenced by leverage: decide what "readable to Julie" means before touching 28 pages, build the checks before the reading, and read everything before fixing anything.

### 0. Calibrate on Julie's own reading (attended, about 30 minutes of hers)

Julie reads three rendered pages cold and marks every place she stalls: a term she has to guess, a sentence she reads twice, a link whose reason she cannot see, a section she would skip. Proposed set, chosen to span age, length and grounding:

- **Alex Komoroske** (2026-05-25, shortest, no ledger, one of the first five pages),
- **Nicole Forsgren** (the biggest hub, from the first week),
- **Nancy Leveson** (the newest, built under every current check).

Her marks become the outsider rubric, written into this file. Everything after step 0 is judged against her actual reading, not a guess at it.

### 1. Instrument (mechanical, before any reading)

> **Done 2026-10-15 except the rubric** (!75, !77, !78, !79). First counts, for orientation only: 122 duplicate points across 28 pages at a 0.70 threshold; 41 firstness hits with no antecedent search on the 12 pages the check covers, and 74 more on the 16 exempt ones; jargon is mostly raw enums printed as labels (edge types, strengths, attribution kinds, limit severities) and "frame" as the site's noun. The graph report found 26 collapsed neighbors rendering without links, now fixed (!77). Remaining em-dash: the attribution mark in pull-quote citations, a typography call for Julie.

Build the checks the audit needs, so the agents spend their judgment where a script cannot reach:

- **Template fix:** the em-dash in the page title.
- **Two checks the cold reader has done by hand on most recent runs** (open items since September): a duplicate-point scan across a page's fields, and a warning on firstness verbs ("named", "introduced", "coined", "first") with no antecedent line.
- **A rendered-jargon check:** any internal vocabulary that reaches the built page (attribution enums, field names, pipeline terms), listed per page.
- **A graph report**, `scripts/graph-report.ts`: incoming and outgoing links, reciprocity, pages a reader can reach in two clicks, concept reach, and people named without a page. It reports; it sets no targets.
- **The rubric from step 0**, turned into a brief for the audit readers.

### 2. Audit (read-only, every page)

Every page gets a cold outsider read of the rendered page plus a rules audit, and nothing is edited. Each finding is filed under one of three kinds:

- **Rules:** a writing-rule breach, with the generating rule named.
- **Readability:** where an outsider stalls, using the step 0 rubric.
- **Graph:** a link that does not say why to follow it, a missing link between pages that discuss each other, or an idea that belongs on a concept page.

Findings go to `_working/<slug>/diligence-2026-10.md`, one file per page, and the phase keeps a ranked summary here. Fan-out across 28 pages is the natural use of a workflow, which needs Julie's opt-in at the time and stays under ten agents per run.

### 3. Remediate in small batches

Fix what the audit found, worst first, in batches of a few pages per merge request so Julie's review stays bounded. Each merge request opens with its claim-delta table, non-SAME rows first, and runs every gate. Readability fixes restructure sentences; they never simplify vocabulary away from a term of art the thinker's field uses.

### 4. Graph decisions (Julie's)

What the audit finds about the graph mostly needs decisions, not edits: which concept candidates to build (#94, #99, and any the audit surfaces), what to do about thin pages, and whether the site needs entry points or reading paths for someone starting cold. Concept pages are new content, so they go through their own process with research and review, not through this pass.

### 5. Close, and fix upstream

- A corpus-wide grep for every retired construction and its synonyms (the reconcile rule) comes back clean.
- Every finding type that appeared on more than one page becomes a checklist item or a gate, so new pages are born compliant. The pipeline's skill and calibration log are where that lands.
- A save point here and in the ISA.

## Done means

- All 28 pages (and the three concept pages) have a diligence record.
- No em-dash renders anywhere outside quotations, template included.
- Every P0 pattern is gone outside quotations; every P1 and P2 hit is fixed or kept with a reason the sentence itself shows.
- Every rewrite has a claim-delta line; there are no NEW rows, and every non-SAME row was checked against a ledger.
- Julie re-reads her three calibration pages and they read clean to her.
- Every graph finding has a decision recorded, made by Julie.
- The defect types found are caught upstream by a gate or checklist item.

## Open questions for Julie, before step 0

1. **Batch size.** How many pages per merge request? Proposed: three to five.
2. **Structure or prose only?** Does the pass stop at sentences, or may it propose changes to what a page shows and in what order (for example, moving backstage-feeling sections down, or shortening the longest pages)? Proposed: prose fixes in scope, structural changes as findings for her decision.
3. **The nine pages with no ledger.** Build ledgers for them as part of this phase, so their prose can be checked properly, or limit them to SAME-only edits? Proposed: ledgers first for the hubs among them (Fowler, Allspaw, Woods, Dekker), SAME-only for the rest.
4. **Workflow opt-in** for the audit fan-out in step 2, and the cost she is comfortable with. Rough sizing: about 0.2M tokens per page per read, so the audit is in the region of 6M tokens before remediation.
5. **The calibration set.** Komoroske, Forsgren and Leveson, or pages she would rather use.

## Not in scope

New thinker runs (the queue waits; Lorin Hochstein #87 is next when the phase ends), the public launch checklist (#98; the site went public on GitHub Pages on 2026-10-14, ahead of it, and its inventories are in `_working/_launch/`), hosting (GitHub Pages, deployed from a GitLab push mirror; README "Deployment"), and anything in Julie's own slots.
