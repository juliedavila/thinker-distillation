export const meta = {
  name: 'thinker-pipeline',
  description: 'Take queued thinker candidates from research to a merge request Julie approves',
  whenToUse: 'Run with args {today, candidates:[{issue, name, slug}], dryRun?} from the thinker-distillation repo. Two or three candidates per run. Julie blocks only at merge approval.',
  phases: [
    { title: 'Research', detail: 'verify every fact, build the ledger, then audit it adversarially' },
    { title: 'Inclusion', detail: 'five fixed seats, one pass over the whole batch' },
    { title: 'Draft', detail: 'page, fact ledger mapping, return-edge plan, Editorial Reading' },
    { title: 'Policy', detail: 'read the required round count out of scripts/review-policy.ts' },
    { title: 'Recheck', detail: 'whatever the staleness queue says is due, surveyed and adjudicated' },
    { title: 'Review', detail: 'batched Council rounds with an editor between them' },
    { title: 'Ship', detail: 'serial: return edges, build, branch, merge request' },
    { title: 'Report', detail: 'calibration entries, parked candidates, what Julie must look at' },
  ],
}

// ---------------------------------------------------------------------------
// The pipeline that runs the add-thinker skill without Julie in the middle of it.
//
// Two rules shape the whole design.
//
// 1. Nothing in here restates a rule that lives somewhere else. The stages tell agents which
//    repo file governs them and the agents read it. The round count comes out of
//    scripts/review-policy.ts rather than out of this script, because a rule written twice is a
//    rule that gets followed once: on 2026-09-17 the three-round requirement sat in SCHEMA.md and
//    two pages shipped with one round anyway.
//
// 2. Agents never race each other over a file. Research and drafting touch only _working/<slug>/
//    and src/content/thinkers/<slug>.md, which are per-candidate. Everything shared (return edges
//    on neighbour pages, the calibration log, git) happens in the serial Ship and Report phases.
//    This is why Ship is a for-loop and not a parallel().
// ---------------------------------------------------------------------------

// `args.repoPath` points the whole run at a disposable sandbox clone, made by
// `bun scripts/sandbox.ts create`. That clone pushes with a Developer-role token, so the server
// refuses a push to main and refuses a merge: the pipeline is structurally unable to merge its own
// work. Without it the run happens in the real checkout, which is how a stray `test merge` commit
// ended up on local main during the first live run.
const repoPath = args?.repoPath
const REPO = repoPath
  ? `the thinker-distillation repository at ${repoPath}. That is a disposable sandbox clone: work only inside it, and never touch any other checkout of this project`
  : 'the thinker-distillation repository (the working directory)'
const READ_FIRST =
  'Read these before you start, in this order: `.claude/skills/add-thinker/SKILL.md` (the procedure), ' +
  '`.claude/skills/add-thinker/calibration.md` (every failure a Council has caught), and the SCHEMA.md ' +
  'sections the skill names for your stage. Follow them. Where this prompt and those files disagree, ' +
  'they win and you say so in your return value.'
const VOICE =
  'Writing rules (SCHEMA.md section 8): no em-dashes, no "not X but Y" cadence, no first person in ' +
  'editorial fields. Apply them with judgment: quotations and terms of art keep their wording.'
const NO_GIT =
  'Do NOT run any git command and do NOT touch files for any other candidate. Write only under ' +
  '_working/<slug>/ and your own page file. Branches and commits happen later, one at a time.'


const today = args?.today
const candidates = args?.candidates ?? []
const dryRun = args?.dryRun === true
if (!today) throw new Error('args.today is required (YYYY-MM-DD); workflow scripts cannot read the clock')
if (!candidates.length) throw new Error('args.candidates is required, e.g. [{issue: 12, name: "Will Larson", slug: "will-larson"}]')
if (candidates.length > 4) log(`WARNING: ${candidates.length} candidates in one batch. Three is the reviewed maximum; the review seats split their attention past that.`)

// Where the Councils leave their reports while the run is in flight. Declared after `today`,
// which it interpolates.
//
// The first live run found this missing. SKILL.md has always said to save every seat report to
// disk as it arrives, because a transcript assembled from memory at the end is where content gets
// lost, and the round 2 and 3 briefs both ask seats to quote the previous round by seat number.
// This workflow wrote nothing until the Ship stage, so rounds 2 and 3 on 2026-09-17 ran with a
// list of verdicts and no transcript. Several seats said so in their own reports. They still
// found real problems, but responding to each other by name is the entire reason those rounds
// exist.
//
// Each seat now writes its own report before returning, which costs no extra agents and keeps
// writes collision-free: one file per seat per round. Ship assembles the final transcript from
// these files rather than from anyone's memory.
const COUNCIL = `_working/_council/${today}`

const SEATS = [
  { n: 1, name: "Thinker's advocate" },
  { n: 2, name: 'Strongest critic' },
  { n: 3, name: 'Grounding and fact auditor' },
  { n: 4, name: 'Security-executive lens' },
  { n: 5, name: 'Novelty and byline test' },
]
// Run a Council in waves rather than all five at once.
//
// On 2026-09-20 all five inclusion seats stalled, six retries each, without emitting a single tool
// call, and both candidates were parked for want of a verdict. The task prompt was 2.5KB; what the
// seats actually had to swallow first was about 135KB of automatically injected context, a skill
// catalogue and a CLAUDE.md tree that a Council seat has no use for. Five of those at once on a
// machine already at a load average of 36 across 8 cores meant nobody produced a first token
// inside the 180 second watchdog.
//
// The injected context is not something a workflow script can decline. Peak concurrency is. Waves
// of three trade a little wall-clock for a run that survives a busy laptop, and the barrier
// between them lets the first wave's memory go before the second starts.
const WAVE = 3
async function inWaves(items, make) {
  const out = []
  for (let i = 0; i < items.length; i += WAVE) {
    out.push(...(await parallel(items.slice(i, i + WAVE).map(make))))
  }
  return out
}

const seatCard = (n) =>
  `You are Council seat ${n} (${SEATS.find((s) => s.n === n).name}). Your seat card is section ` +
  `"Seat ${n}" of \`.claude/skills/add-thinker/seats.md\`. Read it and hold that seat only. ` +
  `Do not edit any file. Quote the text you mean.`

// --------------------------------------------------------------------- schemas
const RESEARCH = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    name: { type: 'string' },
    uptake_passes: { type: 'boolean', description: 'false when every named frame is under two years old with no use by anyone outside the thinker' },
    uptake_evidence: { type: 'string' },
    corrections: { type: 'array', items: { type: 'string' }, description: 'facts the candidate issue got wrong' },
    inbound_claims: { type: 'array', items: { type: 'object', properties: { page: { type: 'string' }, claim: { type: 'string' }, holds: { type: 'boolean' }, note: { type: 'string' } }, required: ['page', 'claim', 'holds'] }, description: 'every line of inbound-claims.ts output, with whether the research confirms the claim the live page already publishes. A false here is a contradiction between a shipped page and this research, and it goes in the merge request.' },
    frames: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, attribution_kind: { type: 'string' }, antecedent: { type: 'string' }, first_dated: { type: 'string' } }, required: ['name', 'attribution_kind'] } },
    fact_count: { type: 'integer' },
    open_questions: { type: 'array', items: { type: 'string' } },
    recommendation: { type: 'string', enum: ['proceed', 'park'] },
    reasoning: { type: 'string' },
  },
  required: ['slug', 'name', 'uptake_passes', 'uptake_evidence', 'corrections', 'frames', 'fact_count', 'recommendation', 'reasoning'],
}

const AUDIT = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    checked: { type: 'integer' },
    contradicted: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, claim: { type: 'string' }, what_the_source_says: { type: 'string' } }, required: ['id', 'claim', 'what_the_source_says'] }, description: 'ONLY claims you could not repair. A claim you fixed or replaced with a better source is repaired, not contradicted. Anything listed here parks the candidate for Julie.' },
    unsupported: { type: 'array', items: { type: 'object', properties: { id: { type: 'string' }, why: { type: 'string' } }, required: ['id', 'why'] } },
    ledger_passes: { type: 'boolean', description: 'true when bun scripts/fact-ledger.ts <slug> reports no missing URLs or dates' },
    verdict: { type: 'string', enum: ['clean', 'repaired', 'park'] },
    notes: { type: 'string' },
  },
  required: ['slug', 'checked', 'contradicted', 'unsupported', 'ledger_passes', 'verdict', 'notes'],
}

const perCandidate = (props, required) => ({
  type: 'object',
  properties: {
    seat: { type: 'integer' },
    candidates: { type: 'array', items: { type: 'object', properties: { slug: { type: 'string' }, ...props }, required: ['slug', ...required] } },
    cross_batch_note: { type: 'string', description: 'sameness or overlap you can only see with every page in front of you' },
  },
  // `seat` is not required: the round 3 adjudicator holds no seat, and on the first live run a
  // seat report was rejected for omitting it, costing a retry. Only `candidates` is load-bearing.
  required: ['candidates'],
})

const INCLUSION = perCandidate(
  {
    verdict: { type: 'string', enum: ['ACCEPT', 'REJECT'] },
    findings: { type: 'array', items: { type: 'string' } },
    foreground_frames: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, attribution_kind: { type: 'string' }, credit_to: { type: 'string' } }, required: ['name', 'attribution_kind'] } },
    thinker_type: { type: 'string' },
    doctrine_mode: { type: 'string' },
    risks: { type: 'array', items: { type: 'string' } },
    new_candidates: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, why: { type: 'string' } }, required: ['name', 'why'] } },
  },
  ['verdict', 'findings']
)

const REVIEW = perCandidate(
  {
    verdict: { type: 'string', enum: ['ACCEPT', 'ACCEPT-WITH-EDITS', 'REVISE', 'REJECT'] },
    findings: { type: 'array', items: { type: 'string' } },
    edits: { type: 'array', items: { type: 'object', properties: { field: { type: 'string' }, quote: { type: 'string' }, replacement: { type: 'string' }, why: { type: 'string' } }, required: ['field', 'quote', 'replacement', 'why'] } },
    new_factual_claims: { type: 'array', items: { type: 'string' }, description: 'anything you assert that is not already in facts.md; it will be researched, never trusted' },
  },
  ['verdict', 'findings']
)

const DRAFT = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    doctrine_mode: { type: 'string' },
    ledger_passes: { type: 'boolean' },
    gates_pass: { type: 'boolean' },
    build_passes: { type: 'boolean' },
    angle: { type: 'string', description: 'the angle and Lens position chosen, and the neighbour move deliberately not repeated' },
    return_edges: { type: 'array', items: { type: 'object', properties: { page: { type: 'string' }, edge_type: { type: 'string' }, note: { type: 'string' } }, required: ['page', 'edge_type'] } },
    reconciled_claims: { type: 'array', items: { type: 'object', properties: { claim: { type: 'string' }, page: { type: 'string' }, outcome: { type: 'string', enum: ['agreed', 'corrected'] }, note: { type: 'string' } }, required: ['claim', 'page', 'outcome'] }, description: 'one entry per line of inbound-claims.ts output: the live published claim, the page making it, and whether this page agreed with it or corrected it. A correction must be called out in the merge request.' },
    unresolved: { type: 'array', items: { type: 'string' } },
  },
  required: ['slug', 'doctrine_mode', 'ledger_passes', 'gates_pass', 'angle', 'return_edges', 'reconciled_claims'],
}

const EDIT_RESULT = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    applied: { type: 'integer' },
    rejected: { type: 'array', items: { type: 'object', properties: { edit: { type: 'string' }, why: { type: 'string' } }, required: ['edit', 'why'] } },
    researched_claims: { type: 'array', items: { type: 'object', properties: { claim: { type: 'string' }, outcome: { type: 'string' } }, required: ['claim', 'outcome'] } },
    ledger_passes: { type: 'boolean' },
    gates_pass: { type: 'boolean' },
    notes: { type: 'string' },
  },
  required: ['slug', 'applied', 'rejected', 'ledger_passes', 'gates_pass', 'notes'],
}

const SHIP = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    branch: { type: 'string' },
    mr_url: { type: 'string' },
    build_passes: { type: 'boolean' },
    return_edges_applied: { type: 'array', items: { type: 'string' } },
    warnings_for_julie: { type: 'array', items: { type: 'string' } },
    shipped: { type: 'boolean' },
    blocker: { type: 'string' },
  },
  required: ['slug', 'shipped'],
}

const STALENESS = {
  type: 'object',
  properties: {
    due: { type: 'array', items: { type: 'object', properties: { slug: { type: 'string' }, days: { type: 'integer' }, reason: { type: 'string' } }, required: ['slug'] } },
    parked_due: { type: 'array', items: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] } },
    raw: { type: 'string' },
  },
  required: ['due'],
}

const RECHECK_SURVEY = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    volatile_fields_checked: { type: 'array', items: { type: 'string' } },
    changed: { type: 'array', items: { type: 'object', properties: { field: { type: 'string' }, what_changed: { type: 'string' }, url: { type: 'string' }, dated: { type: 'string' } }, required: ['field', 'what_changed', 'url'] }, description: 'empty when nothing changed, which is the common and correct outcome' },
    contradictions: { type: 'array', items: { type: 'object', properties: { claim: { type: 'string' }, what_the_source_says: { type: 'string' }, url: { type: 'string' } }, required: ['claim', 'what_the_source_says', 'url'] }, description: 'findings that contradict something the page asserts; these go out as a merge request with the contradiction named at the top' },
    unsourced: { type: 'array', items: { type: 'string' }, description: 'believed changed but could not be sourced; never becomes a page edit' },
    notes: { type: 'string' },
  },
  required: ['slug', 'volatile_fields_checked', 'changed', 'contradictions'],
}

const RECHECK_VERDICT = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    changed_page: { type: 'boolean' },
    edits: { type: 'array', items: { type: 'string' } },
    contradictions_handled: { type: 'array', items: { type: 'string' } },
    facts_added: { type: 'integer', description: 'new ledger lines, each marked re-verified with its own date' },
    gates_pass: { type: 'boolean' },
    summary: { type: 'string' },
  },
  required: ['slug', 'changed_page', 'gates_pass', 'summary'],
}

const UNANCHORED = {
  type: 'object',
  properties: {
    candidates: { type: 'array', items: { type: 'object', properties: { slug: { type: 'string' }, verdict: { type: 'string', enum: ['ACCEPT', 'ACCEPT-WITH-EDITS', 'REVISE', 'REJECT'] }, findings: { type: 'array', items: { type: 'string' } } }, required: ['slug', 'verdict'] } },
  },
  required: ['candidates'],
}

const POLICY = {
  type: 'object',
  properties: {
    plans: { type: 'array', items: { type: 'object', properties: { slug: { type: 'string' }, doctrine_mode: { type: 'string' }, rounds: { type: 'integer' }, transcript_suffix: { type: 'string' } }, required: ['slug', 'rounds', 'transcript_suffix'] } },
    rewrite_audit_seats: { type: 'array', items: { type: 'integer' } },
    raw: { type: 'string' },
  },
  required: ['plans', 'rewrite_audit_seats'],
}

// ------------------------------------------------------------------- helpers
const parked = []
const park = (c, stage, why) => {
  parked.push({ candidate: c.name ?? c.slug, issue: c.issue, stage, why })
  log(`PARKED ${c.name ?? c.slug} at ${stage}: ${why}`)
}
const tally = (reports, slug, field) =>
  reports
    .filter(Boolean)
    .flatMap((r) => (r.candidates ?? []).filter((c) => c.slug === slug))
    .map((c) => c[field])

// =========================================================== 1. Research
phase('Research')
log(`${candidates.length} candidate(s): ${candidates.map((c) => c.name ?? c.slug).join(', ')}`)

const researched = await pipeline(
  candidates,
  (c) =>
    agent(
      `Stage 1 of the add-thinker skill: research ${c.name} for ${REPO}, candidate issue #${c.issue}.\n\n` +
        `${READ_FIRST}\n\n` +
        `FIRST run \`bun scripts/inbound-claims.ts ${c.slug}\` and read all of it. It prints every claim the ` +
        `roster already publishes about this person: edges pointing at them, frame credits, prose mentions. Each ` +
        `one is a live published claim the new page must agree with or knowingly correct, and you must report ` +
        `which you did. Forsgren's page filed Kent Beck as her critic while Beck's page said his piece answers ` +
        `McKinsey and never names her; both sat in the open for months because nobody ran this view at this ` +
        `stage. Carry the output into sources.md.\n\n` +
        `Treat the candidate issue as UNVERIFIED. The Fournier case had three errors and the Saxe case had six, ` +
        `including every frame it named. Verify from primary sources: education, employers and titles with dates, ` +
        `books with year and publisher and co-authors, the essays that carry each named frame, and any critic who ` +
        `engages this thinker by name.\n\n` +
        `A \`critiques\` edge needs all three of these, each with its own ledger line, or it is not a critic: a ` +
        `durable artifact exists (essay, book chapter, talk transcript, never a social post or a summary), it ` +
        `names the thinker, and it argues against them rather than defending or extending them. All three failed ` +
        `on Forsgren: North's artifact defends her by name, Beck's never mentions her, no DHH artifact exists.\n\n` +
        `Run the uptake check BEFORE anything else, because it is what makes a Council worth convening: for each ` +
        `candidate frame find its first date and any use by practitioners other than the thinker. If every frame is ` +
        `under two years old with no outside use, set uptake_passes false and recommendation "park". That is the ` +
        `Saxe case and it costs five seats to learn late.\n\n` +
        `Check antecedents before calling anything original. Check the opening of every talk or essay you cite for a ` +
        `credited premise: "Simple Made Easy" opens by quoting Dijkstra, which changed an attribution.\n\n` +
        `Write two files under _working/${c.slug}/:\n` +
        `  sources.md  the prose research record a human reads, with corrections to the issue called out.\n` +
        `  facts.md    the ledger: one top-level bullet per verified fact, "- [S:n] claim | url | ${today}".\n` +
        `Read _working/charity-majors/facts.md first. It is the worked example. Every fact that will appear on the ` +
        `page needs a line, especially frame attributions, co-originators, critic edges, books and career facts.\n\n` +
        `${NO_GIT}`,
      { label: `research:${c.slug}`, phase: 'Research', schema: RESEARCH }
    ),
  (r, c) => {
    if (!r) return null
    if (r.recommendation === 'park' || !r.uptake_passes) {
      park(c, 'research', `uptake check: ${r.uptake_evidence}`)
      return null
    }
    return agent(
      `Adversarial fact audit of _working/${c.slug}/facts.md in ${REPO}.\n\n` +
        `You did not do this research and you do not trust it. Your job is to REFUTE, not to confirm. For each ` +
        `[S:n] line: open the URL, and decide whether the source actually says what the claim says. Default to ` +
        `"unsupported" when you cannot confirm it from the source itself.\n\n` +
        `This stage exists because Council seats have asserted false things three times: a sympathetic essay called ` +
        `a critique, an uptake quote with no source, a disclosed interest called undisclosed. A human caught each ` +
        `one. There is no human here now.\n\n` +
        `Watch for: secondhand accounts presented as the thinker's own words (a Majors claim shipped in four places ` +
        `from an interview write-up before a first-person post replaced it), a date that cannot be right, a critic ` +
        `whose piece is actually sympathetic, and a quotation that does not appear at the URL given.\n\n` +
        `Repair what you can: fix a wrong claim in facts.md, replace a secondhand source with a first-person one, ` +
        `delete a line you cannot support. Report only the UNREPAIRABLE ones as contradicted, because anything you ` +
        `list there stops this candidate and sends it to Julie. A claim you fixed is repaired, not contradicted.\n` +
        `Then run \`bun scripts/fact-ledger.ts ${c.slug}\` and report whether the ledger half passes (coverage ` +
        `failures are expected: the page does not exist yet).\n\n` +
        `Set verdict "park" if the thinker's central claim to a page rests on something you could not verify.\n\n` +
        `${NO_GIT}`,
      { label: `fact-audit:${c.slug}`, phase: 'Research', schema: AUDIT }
    ).then((a) => (a ? { c, research: r, audit: a } : null))
  }
)

const cleared = researched.filter(Boolean).filter(({ c, audit }) => {
  if (audit.verdict === 'park') { park(c, 'fact audit', audit.notes); return false }
  if (audit.contradicted.length) { park(c, 'fact audit', `${audit.contradicted.length} claim(s) contradicted by their own sources: ${audit.contradicted.map((x) => x.claim).join('; ')}`); return false }
  return true
})

if (!cleared.length) {
  log('Nothing cleared research. Stopping before any Council spend.')
  return { shipped: [], parked, note: 'No candidate survived the research and fact-audit gates.' }
}
log(`${cleared.length} of ${candidates.length} cleared research.`)

// =========================================================== 2. Inclusion
// A barrier, and a justified one: the seats are asked to place these candidates against each
// other and against the existing roster, which needs every research record at once.
phase('Inclusion')
const rosterNote = cleared.map(({ c, research }) => `- ${research.name} (${c.slug}), issue #${c.issue}: ${research.frames.map((f) => f.name).join('; ')}`).join('\n')

const inclusionReports = await inWaves(
  SEATS,
  (s) => () =>
    agent(
      `INCLUSION COUNCIL for ${REPO}. ${seatCard(s.n)}\n\n` +
        `Fill in \`.claude/skills/add-thinker/briefs/inclusion.md\` and answer it for EVERY candidate below, ` +
        `one verdict each. Read each candidate's _working/<slug>/sources.md and facts.md as the verified record.\n\n` +
        `Candidates:\n${rosterNote}\n\n` +
        `The uptake check already ran and each of these passed it, so do not re-litigate whether the vocabulary ` +
        `travels. Spend your attention on what the brief asks your seat for. Seat 5's attribution map is the output ` +
        `the drafting stage depends on most, so be exact about which frames are original, extended, popularized, ` +
        `co-authored or distributed, and to whom the others belong.\n\n` +
        `Use cross_batch_note to say whether these candidates crowd each other or an existing page.\n\n` +
        `Any factual claim you make that is not already in facts.md goes in findings marked "UNVERIFIED:". It will ` +
        `be researched before it can reach a page. Do not edit files. ${VOICE}`,
      { label: `inclusion:seat-${s.n}`, phase: 'Inclusion', schema: INCLUSION }
    )
)

const accepted = cleared.filter(({ c }) => {
  const verdicts = tally(inclusionReports, c.slug, 'verdict')
  const rejects = verdicts.filter((v) => v === 'REJECT').length
  if (!verdicts.length) { park(c, 'inclusion', 'no seat returned a verdict'); return false }
  if (rejects >= 2) { park(c, 'inclusion', `${rejects} of ${verdicts.length} seats rejected. Per SKILL.md stage 2 this goes to Julie with the options laid out.`); return false }
  log(`${c.slug}: inclusion ${verdicts.filter((v) => v === 'ACCEPT').length} accept, ${rejects} reject`)
  return true
})

if (!accepted.length) {
  log('No candidate cleared inclusion.')
  return { shipped: [], parked, inclusionReports, note: 'No candidate cleared the inclusion Council.' }
}

// =========================================================== 3. Draft
phase('Draft')
const drafted = await pipeline(
  accepted,
  ({ c }) => {
    const seatInput = inclusionReports
      .filter(Boolean)
      .map((r) => {
        const mine = (r.candidates ?? []).find((x) => x.slug === c.slug)
        return mine ? `Seat ${r.seat}: ${mine.verdict}. ${(mine.findings ?? []).join(' ')} Frames: ${JSON.stringify(mine.foreground_frames ?? [])}. Risks: ${(mine.risks ?? []).join('; ')}` : null
      })
      .filter(Boolean)
      .join('\n')
    return agent(
      `Stages 3 and 5 of the add-thinker skill: draft the ${c.name} page in ${REPO}.\n\n` +
        `${READ_FIRST} Work the calibration.md checklist against your draft line by line before you run any gate. ` +
        `Use src/content/thinkers/charity-majors.md as the reference page and _working/charity-majors/ as the ` +
        `reference working set.\n\n` +
        `The inclusion Council said:\n${seatInput}\n\n` +
        `Before you write a field, re-run \`bun scripts/inbound-claims.ts ${c.slug}\` and reconcile every line ` +
        `against what this page is about to assert. Agree with each claim or correct it, and report which in ` +
        `reconciled_claims. Nothing in the build or the ledger compares two pages, so a contradiction you leave ` +
        `here ships and stays.\n\n` +
        `Write, all under your own slug:\n` +
        `  src/content/thinkers/${c.slug}.md  every field. last_updated: ${today}.\n` +
        `  _working/${c.slug}/page-claims.md  one line per factual field, citing [S:n] from facts.md.\n` +
        `  _working/${c.slug}/return-edges.md  the edge you would add to each existing page that this page links ` +
        `to, with the edge_type and the label text. Describe them; do NOT edit those pages. A later serial stage ` +
        `applies them, because two candidates drafting at once would collide on a shared neighbour.\n\n` +
        `Then the Editorial Reading, in order:\n` +
        `  bun scripts/grounding-pack.ts ${c.slug}\n` +
        `  choose an angle and a Lens position no neighbour already uses, and name the move you will not repeat\n` +
        `  write the reading draft, one sentence per line, citations at the end of each line\n` +
        `  bun scripts/apply-reading.ts ${c.slug} <draft-file>\n` +
        `  bun scripts/reading-gates.ts ${c.slug}\n` +
        `  bun scripts/fact-ledger.ts ${c.slug}\n` +
        `Both must exit 0 before you finish. Read the gate WARNINGS too, not just the exit code: a banned cadence ` +
        `reached a shipped thesis because the warnings went unread. Then \`bun run build\` and confirm it passes.\n\n` +
        `If a fact you want is not in facts.md, research it and add a line with a URL and ${today}. Never write a ` +
        `factual field the ledger cannot back. ${VOICE}\n\n` +
        `${NO_GIT}`,
      { label: `draft:${c.slug}`, phase: 'Draft', schema: DRAFT }
    )
  }
)

const pages = drafted.filter(Boolean).filter((d) => {
  const match = accepted.find(({ c }) => c.slug === d.slug)
  if (!d.ledger_passes || !d.gates_pass) { if (match) park(match.c, 'draft', `gates did not pass: ${(d.unresolved ?? []).join('; ') || 'see draft report'}`); return false }
  return true
})
if (!pages.length) return { shipped: [], parked, note: 'No page passed the drafting gates.' }

// =========================================================== 4. Policy
// The round count is read out of the repo, never decided here. One rule, one place.
phase('Policy')
const policy = await agent(
  `Run \`bun scripts/review-policy.ts ${pages.map((p) => p.slug).join(' ')} --json\` in ${REPO} and return its ` +
    `output. Do not interpret it, do not adjust it, and do not add rounds of your own. Put the raw stdout in "raw".`,
  { label: 'review-policy', phase: 'Policy', schema: POLICY, effort: 'low' }
)
const roundsFor = (slug) => policy?.plans?.find((p) => p.slug === slug)?.rounds ?? 3
const auditSeats = policy?.rewrite_audit_seats?.length ? policy.rewrite_audit_seats : [3, 5]
for (const p of pages) log(`${p.slug} (${p.doctrine_mode}): ${roundsFor(p.slug)} review round(s)`)

// =========================================================== 4b. Recheck
//
// A recheck rides along with a thinker batch and never runs on its own schedule. A separate
// schedule would need a trigger, and every trigger this project has written in prose has gone
// unwatched, including a "refresh pending" badge that sat on a page for four months. Riding along
// means it fires whenever work happens, which is the only cadence that has ever held here.
//
// The queue is computed, not passed in. If a human had to name the due pages, this would be
// another trigger nobody pulls.
//
// Two phases, after Featured Article Review: a survey that returns findings and no verdict and
// edits nothing, then an adjudicator who alone may change the page. Most rechecks find nothing,
// which is the expected result rather than a failure: Butler 2023 saw 30 search updates produce 3
// published revisions.
phase('Recheck')
const staleness = await agent(
  `Run \`bun scripts/staleness.ts --json\` in ${REPO} and return its output verbatim. Do not ` +
    `interpret it, do not add pages to the list, and do not act on anything. Put the raw stdout in "raw".`,
  { label: 'staleness-queue', phase: 'Recheck', schema: STALENESS, effort: 'low' }
)
const dueSlugs = (staleness?.due ?? []).map((d) => d.slug).filter(Boolean)
const parkedDue = (staleness?.parked_due ?? []).map((p) => p.slug).filter(Boolean)
if (parkedDue.length) log(`Parked candidates now due for a fresh inclusion case: ${parkedDue.join(', ')}. Not run here; they need a candidate issue.`)
log(dueSlugs.length ? `Recheck due: ${dueSlugs.join(', ')}` : 'Recheck queue empty, which is the common case.')

const rechecks = dueSlugs.length
  ? await pipeline(
      dueSlugs,
      (slug) =>
        agent(
          `RECHECK PHASE 1 (survey) for ${slug} in ${REPO}.\n\n` +
            `Fill in \`.claude/skills/add-thinker/briefs/recheck-survey.md\` and answer it for this page. ` +
            `Run \`bun scripts/review-policy.ts ${slug} --recheck\` first and follow the plan it prints.\n\n` +
            `You are checking whether the page is still TRUE, not whether it is good. The writing, the ` +
            `argument, the structure and the Lens position were settled by a full Council when the page ` +
            `shipped, and reopening them here is the failure this phase exists to prevent.\n\n` +
            `Check only the volatile fields. \`bun scripts/staleness.ts --json\` says how many this page ` +
            `has and why it came due; \`scripts/decay.ts\` decides which they are. Everything else on the ` +
            `page is a claim about the past.\n\n` +
            `Return findings and NO verdict. Do not edit any file. Returning "nothing has changed" is a ` +
            `complete answer and padding it to look productive is worse than useless. ${VOICE}`,
          { label: `recheck-survey:${slug}`, phase: 'Recheck', schema: RECHECK_SURVEY }
        ),
      (survey, slug) => {
        if (!survey) return null
        if (!survey.changed?.length && !survey.contradictions?.length) {
          log(`${slug}: recheck found nothing. Page stands.`)
          return { slug, survey, verdict: null }
        }
        return agent(
          `RECHECK PHASE 2 (adjudicate) for ${slug} in ${REPO}. You are the adjudicator, not a seat, ` +
            `and you are the only phase that may change this page.\n\n` +
            `The survey found:\n${JSON.stringify(survey, null, 1)}\n\n` +
            `Decide what the page should say now. Anything you change must cite a source, so add an ` +
            `\`[S:n]\` line to \`_working/${slug}/facts.md\` with a URL, and mark it \`| re-verified ${today}\`. ` +
            `**Never rewrite an existing \`checked\` date.** A fact confirmed after the page shipped is ` +
            `re-verified, never sourced at intake, and the ledger has to keep those apart.\n\n` +
            `If a finding CONTRADICTS a claim the page makes, hedge or remove that claim and say so ` +
            `plainly. A shipped page is never unpublished, never silently edited and never parked: the ` +
            `change goes out as a merge request with the contradiction named at the top of the ` +
            `description, which is the same channel a neighbour demotion already uses.\n\n` +
            `Then rerun \`bun scripts/reading-gates.ts ${slug}\` and \`bun scripts/fact-ledger.ts ${slug}\`, ` +
            `both exiting 0, and set \`last_updated: ${today}\` only if you actually changed the page.\n\n` +
            `${VOICE}\n\n${NO_GIT}`,
          { label: `recheck-adjudicate:${slug}`, phase: 'Recheck', schema: RECHECK_VERDICT }
        ).then((v) => ({ slug, survey, verdict: v }))
      }
    )
  : []

const rechecked = rechecks.filter(Boolean).filter((r) => r.verdict?.changed_page)
for (const r of rechecked) log(`${r.slug}: recheck changed the page. ${r.verdict.summary}`)

// =========================================================== 5. Review
phase('Review')
const state = new Map(pages.map((p) => [p.slug, { required: roundsFor(p.slug), dissent: false, escalated: false, history: [] }]))
// Recorded, never acted on. See the unanchored control below.
const unanchored = []

for (let round = 1; round <= 3; round++) {
  const due = pages.filter((p) => {
    const s = state.get(p.slug)
    return round <= s.required || s.dissent
  })
  if (!due.length) break

  // Who sits this round.
  //
  // Round 1 is always every seat. Round 2 is every seat when any page in the batch is mode-a,
  // because SCHEMA requires the full debate there, and otherwise the seats that dissented plus the
  // two that catch what a rewrite introduces.
  //
  // Round 3 is one adjudication pass rather than five seats, which Julie approved on 2026-09-17.
  // Across four recorded runs a five-seat round 3 accepted unanimously and changed no page, while
  // rounds 1 and 2 caught something every time. The seats come back the moment round 2 leaves any
  // dissent, which is the case the evidence never covered. The check is over the whole batch, not
  // per page: one page still in dispute buys the full Council for everyone in the round.
  const carriesDissent = due.some((p) => state.get(p.slug).dissent)
  const adjudicating = round === 3 && !carriesDissent
  const seatsThisRound = adjudicating
    ? [0] // 0 is the adjudicator, not a seat
    : round === 1
      ? SEATS.map((s) => s.n)
      : [...new Set([...auditSeats, ...due.flatMap((p) => state.get(p.slug).history.flatMap((h) => h.dissenters)), ...(due.some((p) => roundsFor(p.slug) >= 3) ? SEATS.map((s) => s.n) : [])])].sort()

  const brief = adjudicating ? 'briefs/review-adjudicate.md' : round === 1 ? 'briefs/review.md' : `briefs/review-round${Math.min(round, 3)}.md`
  log(
    adjudicating
      ? `Round 3: one adjudication pass over ${due.map((p) => p.slug).join(', ')} (rounds 1 and 2 left no dissent)`
      : `Round ${round}: seats ${seatsThisRound.join(', ')} over ${due.map((p) => p.slug).join(', ')}${round === 3 ? ' (full Council, round 2 left dissent)' : ''}`
  )

  const priorRounds = due
    .map((p) => {
      const h = state.get(p.slug).history
      return h.length ? `${p.slug} so far:\n${h.map((x, i) => `  round ${i + 1}: ${x.summary}`).join('\n')}` : null
    })
    .filter(Boolean)
    .join('\n')

  // The brief's {ROUND1_TRANSCRIPT} and {TRANSCRIPTS} placeholders resolve to this directory.
  const transcriptNote =
    `Every earlier seat report is on disk, one file per seat per round, under \`${COUNCIL}/\`. ` +
    `Read all of them. That directory is what the brief means by {ROUND1_TRANSCRIPT} and {TRANSCRIPTS}. ` +
    `The editor's resolution notes for each round are there too, as round-N-editor-<slug>.md. ` +
    `Quote seats by number from those files rather than working from the verdict list below.`

  // The file is the SAME report you return, copied verbatim. An earlier wording said "write the
  // full report and not a summary of it", which seats read as licence to expand: the brief caps a
  // report at 230 words per page, about 1.5KB, and round 1 produced files of 12 to 27KB. Those
  // then became required reading for rounds 2 and 3, and by round 2 a seat faced roughly half a
  // megabyte before it could write a word. Every late-round agent in the 2026-09-20 run stalled.
  const writeReport =
    `Before you return, copy your report verbatim to \`${COUNCIL}/round-${round}-` +
    `${adjudicating ? 'adjudicator' : `seat-${'{SEAT}'}`}.md\`, covering every page you reviewed. ` +
    `Create the directory if it does not exist. It must be the SAME report you return and the same ` +
    `length: the word limit in the brief binds the file too. Later rounds read these, so an expanded ` +
    `file makes the next round unreadable. This is the only file you write.`

  const reports = await inWaves(
    seatsThisRound,
    (n) => () =>
      agent(
        `REVIEW COUNCIL round ${round} for ${REPO}. ` +
          (adjudicating
            ? `You are the ADJUDICATOR, not a seat. Rounds 1 and 2 are done and left no dissent, so you are the ` +
              `last read before this reaches a merge request and you carry what five seats would have carried. ` +
              `Read every seat's round 1 and round 2 report. Do not edit any file.`
            : seatCard(n)) +
          `\n\n` +
          `Fill in \`.claude/skills/add-thinker/${brief}\` and answer it for EVERY page below, one verdict each. ` +
          `Each page is new, so every field was drafted by an agent and is in scope, not only the Editorial Reading.\n\n` +
          `Pages: ${due.map((p) => `src/content/thinkers/${p.slug}.md`).join(', ')}\n` +
          `For each, its grounding pack, reading-claims.md, page-claims.md and facts.md are under ` +
          `_working/<slug>/. **Do not read sources.md.** It is the prose research record, it is the largest ` +
          `file in a working set, and facts.md plus page-claims.md already carry the verified record in the ` +
          `form you need. Read the page, the claims maps, and the ledger.\n\n` +
          (priorRounds
            ? `${transcriptNote}\n\nVerdicts so far:\n${priorRounds}\n\nSay whether your concerns were resolved, respond to points other seats made by name and quote them from their files, and audit the rewrite for claims that were not there before.\n\n`
            : '') +
          (adjudicating
            ? `Round 2's edits are the newest text on the page and the least reviewed, so audit them hardest. ` +
              `Confirm every earlier concern was resolved in the text rather than waved at, and confirm the fact ` +
              `ledger still holds. ACCEPT ships the page; anything else stops it and goes to Julie.\n\n`
            : `The automated gates and the fact ledger already pass, so judge substance. Seat 3: every citation must ` +
              `support its own sentence and every clause of it, and every factual field must be backed by the [S:n] it ` +
              `cites. Seat 5: compare these pages against each other and against the roster for repeated openers, ` +
              `closers and Lens positions.\n\n`) +
          `Anything factual you assert that is not already in facts.md goes in new_factual_claims. It will be ` +
          `researched before it can reach the page and rejected if it does not hold. Three seat assertions have ` +
          `been wrong this way.\n\n` +
          `${writeReport.replace('{SEAT}', String(n))}\n\n` +
          `Do not edit any page, any working file, or anything under src/. ${VOICE}`,
        { label: adjudicating ? 'review-r3:adjudicator' : `review-r${round}:seat-${n}`, phase: 'Review', schema: REVIEW }
      )
  )

  // Record verdicts, then let one editor per page apply that page's edits. Per page, never shared.
  const editable = []
  for (const p of due) {
    const verdicts = tally(reports, p.slug, 'verdict')
    const dissenters = reports
      .filter(Boolean)
      .filter((r) => (r.candidates ?? []).some((c) => c.slug === p.slug && (c.verdict === 'REVISE' || c.verdict === 'REJECT')))
      .map((r) => r.seat)
    const s = state.get(p.slug)
    s.history.push({ summary: verdicts.join(', ') || 'no verdicts', dissenters })
    s.dissent = dissenters.length > 0
    const rejects = verdicts.filter((v) => v === 'REJECT').length
    if (round === 1 && rejects >= 2 && s.required < 3 && !s.escalated) {
      s.required = 3
      s.escalated = true
      log(`${p.slug}: ${rejects} REJECT in round 1, so it is promoted to the three-round debate (SCHEMA section 7 step 5).`)
    }
    log(`${p.slug} round ${round}: ${verdicts.join(', ') || 'none'}`)
    const edits = reports.filter(Boolean).flatMap((r) => (r.candidates ?? []).filter((c) => c.slug === p.slug).flatMap((c) => (c.edits ?? []).map((e) => ({ seat: r.seat, ...e }))))
    const claims = reports.filter(Boolean).flatMap((r) => (r.candidates ?? []).filter((c) => c.slug === p.slug).flatMap((c) => (c.new_factual_claims ?? []).map((t) => ({ seat: r.seat, claim: t }))))
    if (edits.length || claims.length) editable.push({ p, edits, claims, round })
  }

  // The unanchored control.
  //
  // Round 3 was narrowed from five seats to one adjudication pass on 2026-09-17, because four
  // recorded runs of a five-seat round 3 accepted unanimously and changed no page. Bornmann's 2010
  // meta-analysis of 70 reliability coefficients in peer review puts a warning on exactly that
  // reasoning: high agreement among reviewers who have read each other is a signal to distrust
  // rather than a result. Every one of those four rounds used seats required to read the earlier
  // transcripts first, so the unanimity is as consistent with anchoring as with convergence, and
  // the two have opposite implications. If they genuinely converged, the narrowing was right. If
  // they were anchored, the narrowing replaced an anchored round with a MORE anchored one, since
  // the adjudicator reads both transcripts by design, and the answer was fresh eyes rather than
  // fewer eyes.
  //
  // So: one seat that has seen no transcript, no verdict history and no other seat's reasoning.
  // Only the finished page and the gates. Its verdict is recorded beside the adjudicator's and
  // never gates shipping, because this is a measurement rather than a check. When several runs
  // agree, the question is settled and this can go.
  if (adjudicating && !dryRun) {
    const control = await agent(
      `You are reviewing finished pages in ${REPO} with fresh eyes, and you are a control in a ` +
        `measurement, so read this carefully.\n\n` +
        `You have deliberately NOT been given the review transcripts, the verdict history, or any ` +
        `other reviewer's reasoning, and you must not go looking for them: ignore anything under ` +
        `\`_working/_council/\`. Read only the pages themselves, their grounding packs, their claims ` +
        `maps and their fact ledgers under \`_working/<slug>/\`, plus \`SCHEMA.md\` sections 4 and 8 and ` +
        `\`.claude/skills/add-thinker/calibration.md\`.\n\n` +
        `Pages: ${due.map((p) => `src/content/thinkers/${p.slug}.md`).join(', ')}\n\n` +
        `Judge each page on its own terms, as a senior reviewer seeing it for the first time. Would you ` +
        `ship it? Apply the calibration checklist. Look hardest at whether any sentence states as ` +
        `settled something the page's own limits call contested, whether any citation fails to support ` +
        `its own clause, and whether the attribution would survive the byline test.\n\n` +
        `Do not soften toward agreement. Nobody will see your verdict before they form their own, and ` +
        `the entire value of this pass is that it is uncontaminated. Do not edit any file. ${VOICE}`,
      { label: 'review-r3:unanchored-control', phase: 'Review', schema: UNANCHORED }
    )
    if (control) {
      for (const p of due) {
        const mine = (control.candidates ?? []).find((c) => c.slug === p.slug)
        const adjudicated = tally(reports, p.slug, 'verdict')[0] ?? 'none'
        if (mine) {
          // Direction matters more than equality. A control that lands one step stricter than the
          // adjudicator has found something the anchored pass did not, and that is the result the
          // experiment is looking for. A control that is more lenient is not evidence of anything,
          // since it saw less. Reporting any difference as a disagreement would cry wolf on the
          // gap between ACCEPT and ACCEPT-WITH-EDITS, which is not a dispute.
          const severity = { ACCEPT: 0, 'ACCEPT-WITH-EDITS': 1, REVISE: 2, REJECT: 3 }
          const delta = (severity[mine.verdict] ?? 0) - (severity[adjudicated] ?? 0)
          const direction = delta > 0 ? 'stricter' : delta < 0 ? 'more lenient' : 'same'
          unanchored.push({ slug: p.slug, adjudicator: adjudicated, unanchored: mine.verdict, direction, findings: mine.findings ?? [] })
          log(
            `${p.slug} unanchored control: ${mine.verdict} against adjudicator ${adjudicated} (${direction})` +
              (delta > 0 ? ' <- fresh eyes found more than the anchored pass. This is the result that would reverse the round 3 narrowing.' : ''),
          )
        }
      }
    }
  }

  if (editable.length) {
    await parallel(
      editable.map(({ p, edits, claims, round: rn }) => () =>
        agent(
          `Apply round ${rn} Council edits to src/content/thinkers/${p.slug}.md in ${REPO}. You are the editor, ` +
            `not a seat.\n\n${READ_FIRST}\n\n` +
            `Edits proposed:\n${JSON.stringify(edits, null, 1)}\n\n` +
            (claims.length ? `Factual claims the seats asserted that are NOT in facts.md:\n${JSON.stringify(claims, null, 1)}\n\nResearch each one before it goes anywhere near the page. If it holds, add an [S:n] line to facts.md with a URL and ${today} and cite it in page-claims.md. If it does not hold, drop it and record that in researched_claims. A seat's assertion is a research request, never a fact.\n\n` : '') +
            `Re-author every accepted edit in the site's voice. Never paste a seat's text if it breaks the writing ` +
            `rules, and reject an edit that would recast a limit as evidence the method works, or that would state ` +
            `as settled what the page's own limits call contested. Record every rejection and why.\n\n` +
            `A rewrite is where new unsupported claims get in, so re-read what you changed as if you had not written ` +
            `it. Then rerun, and both must exit 0:\n` +
            `  bun scripts/reading-gates.ts ${p.slug}\n  bun scripts/fact-ledger.ts ${p.slug}\n` +
            `If you changed a reading sentence, update reading-claims.md so the claims map still matches, and ` +
            `regenerate the grounding pack if a neighbour changed. A stale pack propagated a dead sentence once.\n\n` +
            `Then write your resolution notes to \`${COUNCIL}/round-${rn}-editor-${p.slug}.md\`: every edit you ` +
            `applied and the text it replaced, every edit you rejected and why, and what you did with each ` +
            `seat-asserted claim. The next round reads this file to check whether the resolution got a call ` +
            `wrong, and the final transcript is built from it, so write it in full.\n\n` +
            `${VOICE}\n\n${NO_GIT}`,
          { label: `editor-r${rn}:${p.slug}`, phase: 'Review', schema: EDIT_RESULT }
        )
      )
    )
  }
}

const finalized = pages.filter((p) => {
  const s = state.get(p.slug)
  const last = s.history[s.history.length - 1]
  if (last?.dissenters?.length) {
    const match = accepted.find(({ c }) => c.slug === p.slug)
    if (match) park(match.c, 'review', `dissent survived the last round (seats ${last.dissenters.join(', ')}). SKILL.md sends this to Julie rather than shipping it.`)
    return false
  }
  return true
})

// =========================================================== 6. Ship
// Serial on purpose. This is the only phase that touches git and the neighbour pages.
phase('Ship')
const shipped = []
for (const p of finalized) {
  const match = accepted.find(({ c }) => c.slug === p.slug)
  const issue = match?.c?.issue
  const s = state.get(p.slug)
  const result = await agent(
    `Stage 7 of the add-thinker skill: ship the ${p.slug} page in ${REPO}.` +
      (dryRun ? ' DRY RUN: do everything except `git push` and the merge request. Report what you would have pushed.' : '') +
      `\n\n${READ_FIRST}\n\n` +
      `You are the only agent touching git right now. Work in this order:\n` +
      (repoPath
        ? `0. Everything below happens in ${repoPath} and nowhere else. Pushing to main will be refused twice over, by a local hook and by the server, so do not attempt it: open a merge request instead.\n`
        : '') +
      `1. \`git checkout main && git pull\`, then \`git checkout -b candidate/${p.slug}\`.\n` +
      `2. Apply the return edges described in _working/${p.slug}/return-edges.md to the existing pages. Add the edge ` +
      `only where the relationship is real. If a neighbour goes over the seven-edge cap, demote the weakest to the ` +
      `collapsed tier and SAY SO in warnings_for_julie: she reviews every demotion.\n` +
      `3. \`bun run build\`. It must pass. Read the [distillery] warnings and fix the ones your change caused.\n` +
      `4. \`bun scripts/reading-gates.ts ${p.slug}\` and \`bun scripts/fact-ledger.ts ${p.slug}\`, both exit 0.\n` +
      `5. Confirm reading_review is on the page, with dissent set correctly, and that it does not appear in the ` +
      `built HTML.\n` +
      `6. Assemble the Council transcript from the seat reports and editor notes already on disk under ` +
      `\`${COUNCIL}/\`, NOT from memory, and write it to ` +
      `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-${p.slug}-${today.replace(/-/g, '')}-${policy?.plans?.find((x) => x.slug === p.slug)?.transcript_suffix ?? 'debate'}/transcript.md. ` +
      `Header carries the round count and the verdicts per round. Include each seat's report in full and each ` +
      `round's resolution notes. Copy the source files into that directory alongside it.\n` +
      `7. Commit with Conventional Commits, push, and open a merge request${issue ? ` referencing issue #${issue}` : ''}.\n` +
      `8. Write _working/${p.slug}/calibration-entry.md: the run-log row for this page and any new failure pattern a ` +
      `seat caught. A later stage merges these into calibration.md. Do not edit calibration.md yourself.\n` +
      (issue ? `9. Label issue #${issue} camila:ready-for-review with a comment linking the merge request.\n` : '') +
      `\nThe merge request description is read cold by Julie and is the only thing standing between this page and ` +
      `the site. Open with a plain paragraph saying what changed and why. Then: what the Councils caught, every ` +
      `judgment call you made, every return edge and demotion, and anything you are unsure about. Round history: ` +
      `${JSON.stringify(s.history)}. Do not oversell it. ${VOICE}`,
    { label: `ship:${p.slug}`, phase: 'Ship', schema: SHIP }
  )
  if (result) shipped.push(result)
  if (result && !result.shipped) log(`${p.slug} did not ship: ${result.blocker}`)
}

// Recheck merge requests ship after the thinker pages, still serially, because they touch pages
// the thinker branches may also have edited through return edges.
for (const r of rechecked) {
  const shipResult = await agent(
    `Ship the recheck of ${r.slug} in ${REPO}.` +
      (dryRun ? ' DRY RUN: everything except `git push` and the merge request.' : '') +
      `\n\nYou are the only agent touching git right now. Branch \`recheck/${r.slug}\` from main, ` +
      `commit the page change and the ledger lines, run \`bun run build\`, and confirm ` +
      `\`bun scripts/reading-gates.ts ${r.slug}\` and \`bun scripts/fact-ledger.ts ${r.slug}\` both exit 0.\n\n` +
      `The merge request description opens with a plain paragraph saying what is no longer true and ` +
      `what the page now says. If the survey found a contradiction, name it at the top. List every ` +
      `ledger line added, each marked re-verified. Say plainly if the change is small, because most ` +
      `rechecks are, and a description that oversells a one-line correction wastes the only human ` +
      `read this gets.\n\nWhat the survey found:\n${JSON.stringify(r.survey, null, 1)}\n\n` +
      `What was changed:\n${JSON.stringify(r.verdict, null, 1)}\n\n${VOICE}`,
    { label: `ship-recheck:${r.slug}`, phase: 'Ship', schema: SHIP }
  )
  if (shipResult) shipped.push(shipResult)
}

// =========================================================== 7. Report
phase('Report')
const newCandidates = inclusionReports.filter(Boolean).flatMap((r) => (r.candidates ?? []).flatMap((c) => c.new_candidates ?? []))

const report = await agent(
  `Close the loop on this pipeline run in ${REPO}, on a branch called chore/pipeline-${today}.\n\n` +
    `1. Merge every _working/<slug>/calibration-entry.md into ` +
    `\`.claude/skills/add-thinker/calibration.md\`: add the run-log rows, and promote any failure pattern that has ` +
    `now been caught twice into the pre-draft checklist. Delete the per-slug entry files afterwards. You are the ` +
    `only agent writing this file, which is why it happens here and not in Ship.\n` +
    `2. File a "Candidate:" issue for each strong new candidate the seats named, in the format of issues #12 to #14, ` +
    `skipping anyone already filed or already on the site. Named this run: ${JSON.stringify(newCandidates)}\n` +
    `3. For each parked candidate, comment on its issue with why it stopped and what would unpark it: ` +
    `${JSON.stringify(parked)}\n` +
    `4. Commit and open a merge request for the calibration update.\n` +
    `4b. Run \`bun scripts/queue.ts --sync\` and then \`bun scripts/queue.ts\`. The first re-syncs the ` +
    `queue: labels on every candidate issue against the graph as it now stands, which matters because ` +
    `the pages this run shipped have just changed who is named on the site. The second prints the ` +
    `ranking. Put the top three in your summary, with their graph pull, so the next batch is obvious ` +
    `without anyone re-deriving it. Never write a rank into an issue: it changes whenever a page ships.\n` +
    `5. Record the unanchored control in calibration.md under the round-3 note: ` +
    `${JSON.stringify(unanchored)}. This is the measurement that decides whether the 2026-09-17 ` +
    `narrowing of round 3 rested on convergence or on anchoring. If the control disagreed with the ` +
    `adjudicator anywhere, say so prominently, because that is the result that would reverse the ` +
    `decision. If it agreed, record that too; several agreements settle the question and the control ` +
    `can then be retired.\n` +
    `6. Record the recheck outcomes: ${JSON.stringify(rechecked.map((r) => ({ slug: r.slug, summary: r.verdict?.summary })))}. ` +
    `A recheck that found nothing is a successful recheck and belongs in the log as one.\n\n` +
    `Then write, as your return value, the note Julie reads first. Plain paragraphs. What shipped and where to ` +
    `review it, what is parked and why, what needs her judgment (neighbour demotions above all), and what this run ` +
    `taught the process. If a check cost a lot and caught nothing, say so plainly: she asked which checks are ` +
    `load-bearing and which are ceremony, and only the run log can answer that. ${VOICE}`,
  { label: 'close-the-loop', phase: 'Report', schema: { type: 'object', properties: { summary: { type: 'string' }, issues_filed: { type: 'array', items: { type: 'string' } }, calibration_mr: { type: 'string' }, for_julie: { type: 'array', items: { type: 'string' } }, checks_that_caught_nothing: { type: 'array', items: { type: 'string' } } }, required: ['summary', 'for_julie'] } }
)

return {
  unanchored_control: unanchored,
  rechecks: rechecks.filter(Boolean).map((r) => ({ slug: r.slug, changed: Boolean(r.verdict?.changed_page), summary: r.verdict?.summary ?? 'nothing had changed' })),
  shipped: shipped.map((s) => ({ slug: s.slug, mr: s.mr_url, warnings: s.warnings_for_julie })),
  parked,
  rounds: [...state.entries()].map(([slug, s]) => ({ slug, required: s.required, escalated: s.escalated, history: s.history })),
  report,
}
