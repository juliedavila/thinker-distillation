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

### 1. Research (output: `_working/<slug>/sources.md`)

Targeted web searches from the main session, not open-ended research agents. Verify every fact the page will state: education, employers and titles with dates, books with year, publisher and co-authors, essays that carry named frames, and named critics who engaged the thinker directly. Prefer primary sources (the thinker's own text, publisher pages). When sources disagree, record both and keep the page vague on that point. Mark each correction to the candidate issue.

Check antecedents before anything is called original. For each candidate frame, search for earlier uses (Fournier's tech lead framing extended Patrick Kua's earlier book). Record critics carefully: someone who argues a different model without naming the thinker is a parallel edge, not a critic.

Label the issue `camila:in-council` when research is done.

### 2. Inclusion Council (output: transcript under `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-inclusion-<slug>-<timestamp>-quick/`)

Run the five seats in `seats.md` in parallel as background agents, with `briefs/inclusion.md` filled in. One round. Save each report to disk as it arrives, then write the synthesis into the transcript.

- A clear majority to ACCEPT carries. Carry any dissent into the page as a limit or a recheck note instead of dropping it.
- Two or more REJECT, or a split on what the page should be about that facts cannot settle: stop and ask Julie, with the options laid out.
- Every seat names cleaner or adjacent candidates. File them in stage 8.

Update the issue with the verdict and corrections, and label it `camila:accepted` (or `camila:rejected` and close it).

### 3. Draft the page (output: `src/content/thinkers/<slug>.md` on branch `candidate/<slug>`)

Write every field except `reading` and `extension`. Apply the Council's agreed shape: which frames go in the foreground, attribution for each, `doctrine_mode`, and limits. Frames coined with co-authors are `co-authored` with every co-author named. Frames the thinker built on are `extended` with the originator in `co_originators`. Field vocabulary goes in the `deep` tier with `distributed` attribution. Keep adjacency edges to seven or fewer.

Re-verify anything the draft adds beyond `sources.md` (URLs, essay dates, what an essay actually argues) and append it to `sources.md`.

### 4. Return edges

Add an edge back to the new thinker on each existing page the new page links to, where the relationship is real. A page that nothing links to is a known gap (issue #9).

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

- All ACCEPT or ACCEPT-WITH-EDITS: apply the edits (re-authored under the writing rules, never pasted when they break them), rerun the gates, and ship. No second round.
- Any REVISE: fix, rerun the gates, and send the revised text to the seats that dissented plus the grounding seat, because rewrites introduce new unsupported claims (it happened on Komoroske).
- Two revision rounds at most. A third REVISE or any REJECT goes to Julie.

Add `reading_review` to the page with `dissent: true` if any seat ended below ACCEPT-WITH-EDITS.

### 7. Ship

```bash
bun run build
```

Confirm the build passes, the page renders, and `reading_review` does not appear in the HTML. Commit, push, and open a merge request with a plain-language description (what changed, what the Councils caught, what Julie should look at). Label the issue `camila:ready-for-review`.

### 8. Close the loop

1. File a `Candidate:` issue for each strong same-neighborhood thinker the Councils named, using the format of issues #12 to #14 (why this candidate, working case marked as unconfirmed, questions for the inclusion Council). Skip anyone already filed or already on the site.
2. Append this run to `calibration.md`: rounds used, verdict counts, and every new failure pattern a seat caught. A failure caught twice becomes a checklist item.

## Cost controls

- Five seats, one round, as the default. Re-review only dissenting seats plus the grounding seat.
- Reuse `seats.md` and the briefs. Do not recompose seats each run.
- Batch reviews when several pages are ready: each seat reviews every page in one pass and returns a verdict per page. The novelty seat catches sameness across the batch this way.
- Research stays in the main session with targeted searches.
- Save every seat report to disk as it arrives. A transcript assembled from memory at the end is where content gets lost.

## Gotchas

- When testing a build rule by breaking a file on purpose, copy the file to a backup first and restore from the backup. Restoring with `git checkout` also throws away any uncommitted edits to that file.
- YAML values that contain a colon followed by a space must be quoted. Astro's build accepts some of these, but `scripts/grounding-pack.ts` parses strictly and will fail.
- Medium and O'Reilly pages block direct fetches. Confirm those URLs and article contents through search results instead.
