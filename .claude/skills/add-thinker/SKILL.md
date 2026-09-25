---
name: add-thinker
description: Add a new thinker to the Thinker Distillery, end to end, from a candidate issue to a merge request. Covers fact-checked research, the inclusion Council, drafting the page, the Reading Protocol for the Editorial Reading, the review Council, return edges on existing pages, and filing the new candidates each run surfaces. USE WHEN picking up a "Candidate:" issue, adding or converting a thinker page, or re-running the Reading Protocol on an existing page. NOT FOR concept pages or site code changes.
---

# Add a thinker

This is the repeatable process for turning a candidate into a shipped thinker page. It exists so each new page starts from what earlier pages already taught us, and needs fewer review rounds and fewer agent runs to reach a page that passes.

The rules it applies live in `SCHEMA.md` (content model in section 4, Reading Protocol in section 7, writing rules in section 8). This skill is the procedure. When the two disagree, fix one of them in the same merge request.

## Before you start

1. Read `calibration.md` in this folder. It lists every failure a Council has caught so far. Drafting against that list is the main way this process gets cheaper over time.
2. Read the candidate issue, and treat its case as unverified. The Fournier case had three factual errors.
3. Pick a reference page. `src/content/thinkers/camille-fournier.md` is the current best example of a page built by this process.

## Stages

Each stage names its output. Keep outputs under `_working/<slug>/` so the next run can see what this one did.

### 1. Research (outputs: `_working/<slug>/sources.md`, `_working/<slug>/facts.md`)

**Start by asking what the site already claims about this person.**

```bash
bun scripts/inbound-claims.ts <slug-or-name>
```

It runs before the page exists and prints every edge, frame credit and prose mention on the roster that names them. Each line is a published claim the new page has to agree with or knowingly correct. This exists because Forsgren's page filed Kent Beck as her critic while Beck's page said his piece answers McKinsey and never names her, and the two sat in the open for months. The information was available; nobody was shown it at the stage where the claim was made. `grounding-pack.ts` also lists inbound edges, but it runs at stage 5 and needs the page to exist, so it cannot help here.

Targeted web searches from the main session, not open-ended research agents. Verify every fact the page will state: education, employers and titles with dates, books with year, publisher and co-authors, essays that carry named frames, and named critics who engaged the thinker directly. Prefer primary sources (the thinker's own text, publisher pages). When sources disagree, record both and keep the page vague on that point. Mark each correction to the candidate issue.

Check antecedents before anything is called original. For each candidate frame, search for earlier uses (Fournier's tech lead framing extended Patrick Kua's earlier book).

**A `critiques` edge is the most error-prone thing on a page.** All three failed the record on Forsgren: Dan North's only durable artifact defends her by name, Beck's never mentions her, and no DHH artifact exists at all. Before an edge is `critiques`, all three of these must hold, each with its own ledger line:

1. A durable artifact exists (essay, book chapter, talk transcript). Not a social post, not a Q&A, not someone's summary of it.
2. It names the thinker. A counterposition that never names them is `parallel`.
3. It argues against them. Defending, extending, or citing them approvingly is not critique, whatever its tone.

Run the uptake check before anything else, because it decides whether a Council is worth convening at all. For each candidate frame, find its first date and any use by practitioners other than the thinker. If every frame is under two years old with no outside use, stop and bring it to Julie (Saxe).

**Write the fact ledger as you go.** `sources.md` is the prose record a human reads. `facts.md` is the machine-checkable half: one top-level bullet per verified fact, `- [S:n] claim | url | YYYY-MM-DD`. `_working/charity-majors/facts.md` is the worked example. A claim with no line in `facts.md` cannot reach the page, whoever proposed it, including a Council seat. See `PIPELINE.md` for why.

**Write the line so it records what in the document supports the claim**, quoting the passage when the claim rests on specific wording. A source on file is not a sourced claim. Beck's page was parked in round 3 for an unsourced assertion whose source was already on file: `[S:24]` cited the very post containing "Applying the approach from one phase to an idea in another phase kills ideas", but the ledger line recorded only that the post credits no antecedent, so the line could not support the field that cited it. `fact-ledger.ts` cannot catch this. It verifies that a field cites a line and has no way to verify that the line supports the field, which makes this the one place in the ledger where care at intake is the only control.

Label the issue `camila:in-council` when research is done.

### 2. Inclusion Council (output: transcript under `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-inclusion-<slug>-<timestamp>-quick/`)

Run the five seats in `seats.md` in parallel as background agents, with `briefs/inclusion.md` filled in. One round. Save each report to disk as it arrives, then write the synthesis into the transcript.

- A clear majority to ACCEPT carries. Carry any dissent into the page as a limit or a recheck note instead of dropping it.
- Two or more REJECT, or a split on what the page should be about that facts cannot settle: stop and ask Julie, with the options laid out.
- Every seat names cleaner or adjacent candidates. File them in stage 8.

Update the issue with the verdict and corrections, and label it `camila:accepted` (or `camila:rejected` and close it).

### 3. Draft the page (output: `src/content/thinkers/<slug>.md` on branch `candidate/<slug>`)

**Reconcile the inbound claims before writing.** Re-read the `inbound-claims.ts` output from stage 1 against what this page is about to assert. For each line: agree with it, or correct it and carry the correction into the merge request description. A new page that contradicts a live page produces two published claims disagreeing in the open, and nothing in the build or the ledger will notice.

Write every field except `reading` and `extension`. Apply the Council's agreed shape: which frames go in the foreground, attribution for each, `doctrine_mode`, and limits. Frames coined with co-authors are `co-authored` with every co-author named. Frames the thinker built on are `extended` with the originator in `co_originators`. Field vocabulary goes in the `deep` tier with `distributed` attribution. Keep adjacency edges to seven or fewer.

Re-verify anything the draft adds beyond `sources.md` (URLs, essay dates, what an essay actually argues) and append it to both `sources.md` and `facts.md`.

Then write `_working/<slug>/page-claims.md`, one line per factual field, citing the `[S:n]` behind it, and run:

```bash
bun scripts/fact-ledger.ts <slug>
```

It derives the required fields from the page, so a new frame, critic edge or book adds a required line on its own. It must exit 0.

### 4. Return edges

Add an edge back to the new thinker on each existing page the new page links to, where the relationship is real. A page that nothing links to is a known gap (issue #9). Write the plan to `_working/<slug>/return-edges.md`; stage 7 applies it, and stage 7 re-reads it first.

**Check whether the neighbour has a ledger before choosing the edge type.** A page with no `facts.md` has never had a single factual field traced to a source, and nine pages are in that state. Such a page can take a `parallel` return edge, which adds no required ledger line, and cannot take a `critiques` or `antecedent` one, which does. Running `fact-ledger.ts` on a legacy page after editing it proves nothing, because it was already exiting 1 before you arrived.

### 5. Reading Protocol (outputs: grounding pack, draft file, claims map)

```bash
bun scripts/grounding-pack.ts <slug>
# write a draft file: READING / EXTENSION, one sentence per line, citations at the end of each line
bun scripts/apply-reading.ts <slug> <draft-file>
bun scripts/reading-gates.ts <slug>
```

Before writing the draft, choose an angle and a Lens position that no neighboring page already uses. Read the neighbors' extensions in the grounding pack and name the move you will not repeat. Run the `calibration.md` checklist against the draft before the gates.

### 6. Review Council (output: transcript under `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-<slug>-<timestamp>-quick/`)

Run the five seats with `briefs/review.md`. For a new page, the grounding seat also audits every fact on the page against `sources.md`, and the byline seat audits every attribution.

**Ask for the round count, do not remember it.** Before launching:

```bash
bun scripts/review-policy.ts <slug> [slug...]
```

It reads `doctrine_mode` off the page and prints the required rounds, the seats per round, the transcript suffix and the escalation rule. That script is the only place the rule lives. This happened because the three-round requirement sat in SCHEMA section 7 and nowhere else, and two pages shipped with one round because the skill driving the work never said so. Write the count it gives you into the transcript header.

- **Three rounds**, which the script returns for `mode-a` pages, and which two or more REJECT verdicts in round 1 promote any page to. Use a `-debate` suffix on the transcript folder instead of `-quick`.
  - **Round 1:** the five seats review independently with `briefs/review.md`.
  - **Round 2:** apply round 1 edits and rerun the gates. Then each seat reads the full round 1 transcript and the revised page with `briefs/review-round2.md`. It responds to named points from other seats, says whether its own concerns were resolved, and audits the rewrite for new claims.
  - **Round 3:** apply round 2 edits and rerun the gates. Then **one adjudication pass**, not five seats, with `briefs/review-adjudicate.md`. It reads both transcripts, confirms every earlier concern was resolved in the text rather than waved at, audits round 2's edits as the newest and least reviewed text on the page, and checks the ledger holds.
    - **If any round 2 verdict was below ACCEPT-WITH-EDITS, round 3 is the full five seats** with `briefs/review-round3.md` instead. Adopted 2026-09-17: across four runs a five-seat round 3 accepted unanimously and changed no page, while rounds 1 and 2 caught something every time. The seats come back for the case the evidence never covered.
  - Ship on the round 3 verdict. Any REVISE or REJECT left after round 3 goes to Julie.
- **One round** otherwise, with the rules below.
- **Then the cold reader, on every page, whatever its round count.** One reviewer who has seen no transcript and no verdict reads the finished page, its grounding pack, claims map and ledger, after the last editor. An editor applies what it confirms, under the same contract as every round. It never gates: its verdict and anything its editor declined open the merge request description, where Julie reads them before she merges. `review-policy.ts` prints it. Permanent since 2026-09-25, after it came back stricter than the adjudicator on three of five pages and more lenient on none; the reasoning is in PIPELINE.md.

- One-round pages, all ACCEPT or ACCEPT-WITH-EDITS: apply the edits (re-authored under the writing rules, never pasted when they break them), rerun the gates, and ship. No second round.
- Any REVISE: fix, rerun the gates, and send the revised text to the seats that dissented plus seats 3 and 5, because rewrites introduce new unsupported claims (it happened on Komoroske) and those two seats are the ones that catch it.

**A seat's factual assertion is a research request, never a fact.** Seats have been wrong three times: a sympathetic essay called a critique, an uptake quote with no source, a disclosed interest called undisclosed. Before any seat-supplied fact reaches the page, verify it and add an `[S:n]` line to `facts.md` with a URL. If it does not hold, drop it and say so in the transcript.
- Two revision rounds at most. A third REVISE or any REJECT goes to Julie.

Add `reading_review` to the page with `dissent: true` if any seat ended below ACCEPT-WITH-EDITS.

### 7. Ship

**Re-read `_working/<slug>/return-edges.md` against the finished page before applying it.** The plan is drafted at stage 4 and applied here, with the Reading Protocol and three review rounds in between, and the plan does not move while the page does. Round 3 struck "doctoral student" from five fields of the Anderson page and the Willison return-edge label still carried the phrase a day later. This is structural rather than a slip: return edges are written before the page is finished and applied after it is. Every phrase the rounds changed has to be chased into the plan by hand.

```bash
bun scripts/reading-gates.ts <slug>
bun scripts/fact-ledger.ts <slug>
bun run build
```

Confirm the build passes, the page renders, and `reading_review` does not appear in the HTML. Commit, push, and open a merge request. Label the issue `camila:ready-for-review`.

**The description has a house standard, and it is a gate.**

```bash
bun scripts/describe.ts --template mr-thinker   # or mr-machine, mr-recheck
# write the description to a file, then:
bun scripts/describe.ts --lint <file>
```

It must exit 0 before the merge request is opened. Four blocks: what changed, what Julie needs to do, the few things worth a look, and everything else inside a `<details>` block. The words above the `<details>` block may not use repo shorthand, because she reads them cold and so might someone who has never seen this project. Below it there is no vocabulary limit, so nothing is lost, it just stops standing between her and the decision.

Julie's instruction on 2026-09-22, after reading four of these in a row: "you get a little jargony ... it is not really formulated for outside collaborators or even for me." The cause is structural rather than stylistic. Whoever writes the description just did the work, and is the one person who cannot tell which of their words are shorthand. Running the lint is how you find out.

**There is no word limit, deliberately.** The first version of this gate capped the opening at 200 words and Julie removed it the same day: "It's not about quantity; it's about quality when it comes to the prose. I don't think a number is what sets that." A page about a thinker is an editorial judgment and often needs the room. The lint reports length and never fails on it. Compression is not clarity, and a budget buys the first at the cost of the second.

### 8. Close the loop

1. File a `Candidate:` issue for each strong same-neighborhood thinker the Councils named. Same standard as a merge request description, same gate:

   ```bash
   bun scripts/describe.ts --template issue-candidate
   bun scripts/describe.ts --lint <file>
   ```

   Four blocks: who they are in one plain line, why they might belong, what is still unverified, and the real questions before we commit. Everything in the issue is unconfirmed by definition, so say so rather than writing a case that reads settled. Skip anyone already filed or already on the site.
2. Append this run to `calibration.md`: rounds used, verdict counts, and every new failure pattern a seat caught. A failure caught twice becomes a checklist item.
3. **Prune the sandbox once the merge requests are open.** `bun scripts/sandbox.ts prune 24`. The clone holds the pipeline's GitLab token in plaintext in its `.git/config`, and `create` promises the token "goes when the sandbox does", which was true and had never fired: two abandoned clones from two runs were still holding it on 2026-09-22. Keep a failed run's sandbox to look at; a finished one stops being interesting within a day. The Council reports inside it are gitignored, so confirm the transcript reached `~/.claude/LIFEOS/MEMORY/COUNCIL/` before pruning.
4. **Account for everything this run produced.** `git status` clean, and every branch this run created either merged or carrying an open merge request. Work that ends a run on an unmerged branch is invisible: the measurement script the batching decision rests on sat on `feat/run-cost` for a day with no merge request while a save point told the next session to use it, and the next session found `error: Module not found`. This is the second sighting of the same shape. The first was a fix for a recurring failure left in a working tree while the calibration entry describing that failure was being written.

## Running this without a human in the middle

`.claude/workflows/thinker-pipeline.js` runs these eight stages end to end so Julie blocks only at merge approval. It parks a candidate rather than shipping it whenever this skill says to stop and ask her: a failed uptake check, research contradicted by its own sources, two or more inclusion REJECTs, a page that still carries dissent after its last round. `PIPELINE.md` has the design, the cost, and the evidence on which checks are load-bearing.

Work this skill by hand when you are adding one thinker and want to think while you do it. Use the workflow when the queue is the point.

## Rechecking a page that already shipped

Different job, different cost. `bun scripts/staleness.ts` says what is due; `bun scripts/review-policy.ts <slug> --recheck` returns the two-phase plan; `briefs/recheck-survey.md` is the phase 1 brief. Only volatile fields are checked, the survey returns no verdict and edits nothing, and a contradiction with a live claim opens a merge request rather than a silent edit. A shipped page is never unpublished and never parked. Most rechecks find nothing, and that is the expected result.

## Cost controls

- Five seats, one round, as the default for `mode-b` and `mode-c` pages. `mode-a` pages always get three rounds (stage 6); the rule is never traded away for cost. Batch mode-a pages together to share the rounds.
- Outside the three-round case, re-review only the dissenting seats plus the rewrite-audit seats. Ask `bun scripts/review-policy.ts <slug> --json` for those rather than naming them here, because this line said "the grounding seat" and stage 6 said "seats 3 and 5" and they were describing the same rule. `REWRITE_AUDIT_SEATS` in that script is the answer.
- Reuse `seats.md` and the briefs. Do not recompose seats each run.
- Batch reviews when several pages are ready: each seat reviews every page in one pass and returns a verdict per page. The novelty seat catches sameness across the batch this way.
- Research stays in the main session with targeted searches.
- Save every seat report to disk as it arrives. A transcript assembled from memory at the end is where content gets lost.

## Gotchas

- When testing a build rule by breaking a file on purpose, copy the file to a backup first and restore from the backup. Restoring with `git checkout` also throws away any uncommitted edits to that file.
- YAML values that contain a colon followed by a space must be quoted. Astro's build accepts some of these, but `scripts/grounding-pack.ts` parses strictly and will fail.
- Medium and O'Reilly pages block direct fetches. Confirm those URLs and article contents through search results instead.

The rest of this list came out of the first unattended pipeline run: 1,391 tool calls, 24 of which failed. Each line below is one of those failures.

- **No Python for YAML.** `python3 -c` with `import yaml` fails; PyYAML is not installed. Use `bun` and `Bun.YAML.parse`, which `scripts/lib.ts` already wraps. Two agents lost a call each to this.
- **The shell is zsh, so an unmatched glob is an error, not an empty result.** `ls ~/.claude/LIFEOS/MEMORY/COUNCIL/*larson*` aborts with `no matches found` when nothing matches. Quote the pattern and let the command do the matching, or test with `ls -d ... 2>/dev/null`.
- **Never run git during an unresolved conflict.** An agent hit `path 'src/content/thinkers/charity-majors.md' is unmerged; you need to resolve your current index first`. Finish or abort the merge before anything else touches git.
- **Do not reach for `rm -rf`.** Both permission refusals in the whole run were agents trying to delete a temp directory, and `.claude/settings.json` now denies it outright. Work in the session scratchpad, which is cleaned up for you.
- **`git checkout` and `git restore` are denied** in this repository for the reason in the first gotcha above: restoring a file that way also throws away uncommitted edits to it, which happened once and cost real work. Back a file up before you break it, and restore from the backup.

**When an agent goes silent, ask when it stopped and what stopped with it, before asking what it was reading.** An overnight run stalled and was diagnosed first as load, then as context size, and both were wrong with the timestamps already on disk. Round 1 seats 1 to 4 finished at 22:41 and seat 5 stalled at 23:09 on identical inputs, nothing succeeded for the next thirteen hours, and the transcripts carried `getaddrinfo ENOTFOUND`. The network had dropped. A context-size problem would have taken seats 1 to 4 down with it, and simultaneity is the cheapest thing to check: a failure that hits every seat at once is environmental, and one that hits the largest seat is not.
