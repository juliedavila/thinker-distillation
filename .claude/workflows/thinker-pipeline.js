export const meta = {
  name: 'thinker-pipeline',
  description: 'Take queued thinker candidates from research to a merge request Julie approves',
  whenToUse:
    'Run with args {today, candidates:[{issue, name, slug}], dryRun?} from the thinker-distillation repo. ' +
    'Two or three candidates per run. Julie blocks only at merge approval.',
  phases: [
    { title: 'Research', detail: 'verify every fact, build the ledger, then audit it adversarially' },
    { title: 'Inclusion', detail: 'five fixed seats, one pass over the whole batch' },
    { title: 'Draft', detail: 'page, fact ledger mapping, return-edge plan, Editorial Reading' },
    { title: 'Policy', detail: 'read the required round count out of scripts/review-policy.ts' },
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

const REPO = 'the thinker-distillation repository (the working directory)'
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

const SEATS = [
  { n: 1, name: "Thinker's advocate" },
  { n: 2, name: 'Strongest critic' },
  { n: 3, name: 'Grounding and fact auditor' },
  { n: 4, name: 'Security-executive lens' },
  { n: 5, name: 'Novelty and byline test' },
]
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
  required: ['seat', 'candidates'],
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
    unresolved: { type: 'array', items: { type: 'string' } },
  },
  required: ['slug', 'doctrine_mode', 'ledger_passes', 'gates_pass', 'angle', 'return_edges'],
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
        `Treat the candidate issue as UNVERIFIED. The Fournier case had three errors and the Saxe case had six, ` +
        `including every frame it named. Verify from primary sources: education, employers and titles with dates, ` +
        `books with year and publisher and co-authors, the essays that carry each named frame, and any critic who ` +
        `engages this thinker by name. A counterposition that never names the thinker is a parallel, never a critic.\n\n` +
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

const inclusionReports = await parallel(
  SEATS.map((s) => () =>
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

// =========================================================== 5. Review
phase('Review')
const state = new Map(pages.map((p) => [p.slug, { required: roundsFor(p.slug), dissent: false, escalated: false, history: [] }]))

for (let round = 1; round <= 3; round++) {
  const due = pages.filter((p) => {
    const s = state.get(p.slug)
    return round <= s.required || s.dissent
  })
  if (!due.length) break

  // Round 1 is every seat. Later rounds are the seats that dissented plus the two that catch what
  // a rewrite introduces, which is what a later round is for. A mode-a page keeps all five, because
  // SCHEMA requires the full debate and this script does not get to trade that away for cost.
  const seatsThisRound =
    round === 1
      ? SEATS.map((s) => s.n)
      : [...new Set([...auditSeats, ...due.flatMap((p) => state.get(p.slug).history.flatMap((h) => h.dissenters)), ...(due.some((p) => roundsFor(p.slug) >= 3) ? SEATS.map((s) => s.n) : [])])].sort()

  const brief = round === 1 ? 'briefs/review.md' : `briefs/review-round${Math.min(round, 3)}.md`
  log(`Round ${round}: seats ${seatsThisRound.join(', ')} over ${due.map((p) => p.slug).join(', ')}`)

  const priorRounds = due
    .map((p) => {
      const h = state.get(p.slug).history
      return h.length ? `${p.slug} so far:\n${h.map((x, i) => `  round ${i + 1}: ${x.summary}`).join('\n')}` : null
    })
    .filter(Boolean)
    .join('\n')

  const reports = await parallel(
    seatsThisRound.map((n) => () =>
      agent(
        `REVIEW COUNCIL round ${round} for ${REPO}. ${seatCard(n)}\n\n` +
          `Fill in \`.claude/skills/add-thinker/${brief}\` and answer it for EVERY page below, one verdict each. ` +
          `Each page is new, so every field was drafted by an agent and is in scope, not only the Editorial Reading.\n\n` +
          `Pages: ${due.map((p) => `src/content/thinkers/${p.slug}.md`).join(', ')}\n` +
          `For each, its grounding pack, reading-claims.md, page-claims.md, facts.md and sources.md are under ` +
          `_working/<slug>/.\n\n` +
          (priorRounds ? `What earlier rounds found:\n${priorRounds}\n\nSay whether your concerns were resolved, respond to points other seats made by name, and audit the rewrite for claims that were not there before.\n\n` : '') +
          `The automated gates and the fact ledger already pass, so judge substance. Seat 3: every citation must ` +
          `support its own sentence and every clause of it, and every factual field must be backed by the [S:n] it ` +
          `cites. Seat 5: compare these pages against each other and against the roster for repeated openers, ` +
          `closers and Lens positions.\n\n` +
          `Anything factual you assert that is not already in facts.md goes in new_factual_claims. It will be ` +
          `researched before it can reach the page and rejected if it does not hold. Three seat assertions have ` +
          `been wrong this way. Do not edit files. ${VOICE}`,
        { label: `review-r${round}:seat-${n}`, phase: 'Review', schema: REVIEW }
      )
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
      `1. \`git checkout main && git pull\`, then \`git checkout -b candidate/${p.slug}\`.\n` +
      `2. Apply the return edges described in _working/${p.slug}/return-edges.md to the existing pages. Add the edge ` +
      `only where the relationship is real. If a neighbour goes over the seven-edge cap, demote the weakest to the ` +
      `collapsed tier and SAY SO in warnings_for_julie: she reviews every demotion.\n` +
      `3. \`bun run build\`. It must pass. Read the [distillery] warnings and fix the ones your change caused.\n` +
      `4. \`bun scripts/reading-gates.ts ${p.slug}\` and \`bun scripts/fact-ledger.ts ${p.slug}\`, both exit 0.\n` +
      `5. Confirm reading_review is on the page, with dissent set correctly, and that it does not appear in the ` +
      `built HTML.\n` +
      `6. Write the Council transcript to ~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-${p.slug}-${today.replace(/-/g, '')}-${policy?.plans?.find((x) => x.slug === p.slug)?.transcript_suffix ?? 'debate'}/transcript.md, with the round count in the header.\n` +
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
    `4. Commit and open a merge request for the calibration update.\n\n` +
    `Then write, as your return value, the note Julie reads first. Plain paragraphs. What shipped and where to ` +
    `review it, what is parked and why, what needs her judgment (neighbour demotions above all), and what this run ` +
    `taught the process. If a check cost a lot and caught nothing, say so plainly: she asked which checks are ` +
    `load-bearing and which are ceremony, and only the run log can answer that. ${VOICE}`,
  { label: 'close-the-loop', phase: 'Report', schema: { type: 'object', properties: { summary: { type: 'string' }, issues_filed: { type: 'array', items: { type: 'string' } }, calibration_mr: { type: 'string' }, for_julie: { type: 'array', items: { type: 'string' } }, checks_that_caught_nothing: { type: 'array', items: { type: 'string' } } }, required: ['summary', 'for_julie'] } }
)

return {
  shipped: shipped.map((s) => ({ slug: s.slug, mr: s.mr_url, warnings: s.warnings_for_julie })),
  parked,
  rounds: [...state.entries()].map(([slug, s]) => ({ slug, required: s.required, escalated: s.escalated, history: s.history })),
  report,
}
