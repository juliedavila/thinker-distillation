// Runs .claude/workflows/thinker-pipeline.js against stub agents, so the orchestration can be
// checked without spending a real one. The script is plain JavaScript written for the Workflow
// tool, which supplies agent(), parallel(), pipeline(), phase(), log() and args as globals and
// allows a top-level return; this file supplies the same globals and wraps the body in a function.
//
// What it covers is control flow: which agents run, in what order, and what reaches the merge
// request and the closing report. Agent judgment is not testable here and is not attempted.
import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';

const SRC = readFileSync(new URL('../../.claude/workflows/thinker-pipeline.js', import.meta.url), 'utf8')
  .replace(/^export const meta/m, 'const meta');

type Verdict = 'ACCEPT' | 'ACCEPT-WITH-EDITS' | 'REVISE' | 'REJECT';
type Scenario = {
  slugs: string[];
  mode?: string;
  round2?: Verdict; // what every seat says in round 2
  cold?: Verdict | null; // the cold reader's verdict; null means it returns nothing
  declined?: string[]; // what the cold reader's editor declines
  round3?: string; // the policy's round3_mode for mode-a pages
  researchCap?: boolean; // research reports the web-search cap
  scan?: 'clean' | 'hit' | 'blind'; // what scripts/search-cap.ts told the fact audit
  repoPath?: string; // a sandbox path, as an unattended run passes
  rejectSeats?: number[]; // inclusion seats that vote REJECT
};

async function run(sc: Scenario) {
  const calls: { label: string; prompt: string }[] = [];
  const logs: string[] = [];
  const mode = sc.mode ?? 'mode-a';
  const review = (round: number, seat: number) => ({
    seat,
    candidates: sc.slugs.map((slug) => ({ slug, verdict: round === 2 && sc.round2 ? sc.round2 : 'ACCEPT-WITH-EDITS', edits: [], new_factual_claims: [] })),
  });
  const respond = (label: string): unknown => {
    const slug = label.split(':')[1];
    if (label.startsWith('research:')) return { slug, name: slug, uptake_passes: true, uptake_evidence: 'x', corrections: [], frames: [{ name: 'f', attribution_kind: 'original' }], fact_count: 10, recommendation: 'proceed', search_cap_hit: sc.researchCap ?? false, reasoning: 'x' };
    if (label.startsWith('fact-audit:')) return { slug, checked: 10, contradicted: [], unsupported: [], ledger_passes: true, verdict: 'clean', search_cap_hit: false, search_cap_scan: sc.scan ?? 'clean', notes: '' };
    if (label.startsWith('inclusion:seat-')) { const seat = Number(label.split('-').pop()); return { seat, candidates: sc.slugs.map((s) => ({ slug: s, verdict: sc.rejectSeats?.includes(seat) ? 'REJECT' : 'ACCEPT', findings: [`seat ${seat} finding`], risks: [`seat ${seat} risk`] })) }; }
    if (label === 'inclusion-record') return { posted: sc.slugs.map((_, i) => i + 1), failed: [] };
    if (label.startsWith('draft:')) return { slug, doctrine_mode: mode, ledger_passes: true, gates_pass: true, angle: 'x', return_edges: [], reconciled_claims: [] };
    if (label === 'review-policy') return { plans: sc.slugs.map((s) => ({ slug: s, doctrine_mode: mode, rounds: mode === 'mode-a' ? 3 : 1, transcript_suffix: 'debate', round3_mode: mode === 'mode-a' ? (sc.round3 ?? 'cold-reader') : undefined, seats_by_round: {}, control: { when: 'every page', gates: false } })), rewrite_audit_seats: [3, 5] };
    if (label === 'staleness-queue') return { due: [], parked_due: [] };
    if (label === 'review-r3:adjudicator') return { seat: 0, candidates: sc.slugs.map((s) => ({ slug: s, verdict: 'ACCEPT-WITH-EDITS', edits: [] })) };
    const m = label.match(/^review-r(\d)(?::seat-(\d))?/);
    if (m) return review(Number(m[1]), Number(m[2] ?? 0));
    if (label === 'cold-reader') return sc.cold === null ? null : { candidates: sc.slugs.map((s) => ({ slug: s, verdict: sc.cold ?? 'REVISE', findings: sc.cold === 'ACCEPT' ? [] : ['K1 CONFIRMED'] })) };
    if (label.startsWith('editor-cold:')) return { slug, applied: 1, rejected: (sc.declined ?? []).map((d) => ({ edit: d, why: 'because' })), ledger_passes: true, gates_pass: true, notes: '' };
    if (label.startsWith('editor-')) return { slug, applied: 0, rejected: [], ledger_passes: true, gates_pass: true, notes: '' };
    if (label.startsWith('ship:')) return { slug, shipped: true, mr_url: `mr/${slug}` };
    if (label === 'close-the-loop') return { summary: 'done', for_julie: [] };
    throw new Error(`no stub for ${label}`);
  };
  const agent = async (prompt: string, opts: { label: string }) => { calls.push({ label: opts.label, prompt }); return respond(opts.label); };
  const parallel = async (fns: (() => Promise<unknown>)[]) => Promise.all(fns.map((f) => f()));
  const pipeline = async (items: unknown[], ...stages: ((x: any, item: any) => Promise<unknown>)[]) =>
    Promise.all(items.map(async (item) => { let v: any = item; for (const [k, s] of stages.entries()) v = await s(k === 0 ? item : v, item as any); return v; }));
  const args = { repoPath: sc.repoPath, today: '2026-09-25', candidates: sc.slugs.map((slug, i) => ({ issue: i + 1, name: slug, slug })) };
  const body = new Function('agent', 'parallel', 'pipeline', 'phase', 'log', 'args', `return (async () => {\n${SRC}\n})()`);
  const result = await body(agent, parallel, pipeline, () => {}, (m: string) => logs.push(m), args);
  return { result, calls, logs, labels: calls.map((c) => c.label) };
}

test('a quiet round 2 ends the rounds: no round 3 reviewer, and the cold reader is the third read', async () => {
  const { labels } = await run({ slugs: ['dave-farley'] });
  expect(labels.some((l) => l.startsWith('review-r3'))).toBe(false);
  const cold = labels.indexOf('cold-reader');
  expect(cold).toBeGreaterThan(labels.indexOf('review-r2:seat-5'));
  expect(cold).toBeLessThan(labels.indexOf('ship:dave-farley'));
  expect(labels).toContain('editor-cold:dave-farley');
  expect(labels.indexOf('editor-cold:dave-farley')).toBeLessThan(labels.indexOf('ship:dave-farley'));
});

test('the cold reader runs on an escalated round 3 as well, which the old control skipped', async () => {
  const { labels } = await run({ slugs: ['dave-farley'], round2: 'REVISE' });
  expect(labels).not.toContain('review-r3:adjudicator');
  expect(labels.filter((l) => l.startsWith('review-r3:seat-')).length).toBe(5);
  expect(labels).toContain('cold-reader');
});

test('the cold reader runs on a one-round page', async () => {
  const { labels } = await run({ slugs: ['dave-farley'], mode: 'mode-c' });
  expect(labels.some((l) => l.startsWith('review-r2'))).toBe(false);
  expect(labels).toContain('cold-reader');
});

test('a REVISE never parks the page, and it reaches the merge request with what the editor declined', async () => {
  const { result, calls } = await run({ slugs: ['dave-farley'], cold: 'REVISE', declined: ['keep the tagline'] });
  expect(result.shipped.map((s: any) => s.slug)).toEqual(['dave-farley']);
  expect(result.parked).toEqual([]);
  const ship = calls.find((c) => c.label === 'ship:dave-farley')!.prompt;
  expect(ship).toContain('"cold_reader":"REVISE"');
  expect(ship).toContain('keep the tagline');
  expect(result.unanchored_control[0]).toMatchObject({ slug: 'dave-farley', last_round: 'ACCEPT-WITH-EDITS', cold_reader: 'REVISE', direction: 'stricter' });
});

test('a cold reader that returns nothing is named, and the page still ships', async () => {
  const { result, logs, calls } = await run({ slugs: ['dave-farley'], cold: null });
  expect(logs.some((l) => l.startsWith('COLD READER MISSING for dave-farley'))).toBe(true);
  expect(result.shipped.length).toBe(1);
  expect(calls.find((c) => c.label === 'ship:dave-farley')!.prompt).toContain('"cold_reader":"MISSING"');
  expect(calls.find((c) => c.label === 'close-the-loop')!.prompt).toContain('MISSING');
});

test('a clean cold read runs no editor', async () => {
  const { labels } = await run({ slugs: ['dave-farley'], cold: 'ACCEPT' });
  expect(labels).toContain('cold-reader');
  expect(labels.some((l) => l.startsWith('editor-cold:'))).toBe(false);
});

test('one candidate is the supported shape: one research, one draft, one ship', async () => {
  const { labels } = await run({ slugs: ['dave-farley'] });
  for (const p of ['research:', 'draft:', 'ship:']) expect(labels.filter((l) => l.startsWith(p)).length).toBe(1);
});

test('setting round3_mode back to adjudication restores the single round 3 pass', async () => {
  const { labels } = await run({ slugs: ['dave-farley'], round3: 'adjudication' });
  expect(labels).toContain('review-r3:adjudicator');
  expect(labels.indexOf('cold-reader')).toBeGreaterThan(labels.indexOf('review-r3:adjudicator'));
});

test('research that hit the web-search cap parks before the fact audit spends anything', async () => {
  const { result, labels } = await run({ slugs: ['dave-farley'], researchCap: true });
  expect(labels).toEqual(['research:dave-farley']);
  expect(result.parked[0]).toMatchObject({ stage: 'research' });
  expect(result.parked[0].why).toContain('web-search cap');
});

test('a refused search anywhere in the run parks at the fact audit, and so does a scan that cannot see', async () => {
  for (const scan of ['hit', 'blind'] as const) {
    const { result, labels } = await run({ slugs: ['dave-farley'], scan });
    expect(labels.some((l) => l.startsWith('inclusion:'))).toBe(false);
    expect(result.parked[0]).toMatchObject({ stage: 'fact audit' });
    expect(result.parked[0].why).toContain(scan === 'blind' ? 'could not find' : 'web-search cap');
  }
});

test('research and the fact audit both carry the stop instruction, and the audit and report both run the scan', async () => {
  const { calls } = await run({ slugs: ['dave-farley'] });
  const prompt = (l: string) => calls.find((c) => c.label === l)!.prompt;
  for (const l of ['research:dave-farley', 'fact-audit:dave-farley']) expect(prompt(l)).toContain('Web search was not performed');
  for (const l of ['fact-audit:dave-farley', 'close-the-loop']) expect(prompt(l)).toContain('bun scripts/search-cap.ts --since 2026-09-25');
});

test('prompts follow SKILL.md: no git checkout, neighbours only at Ship, and the stage labels get set', async () => {
  const { calls } = await run({ slugs: ['dave-farley'] });
  const prompt = (l: string) => calls.find((c) => c.label === l)!.prompt;
  for (const c of calls) expect(c.prompt).not.toContain('git checkout main');
  expect(prompt('ship:dave-farley')).toContain('git switch -c candidate/dave-farley');
  expect(prompt('editor-cold:dave-farley')).toContain('Do not edit any other page');
  expect(prompt('fact-audit:dave-farley')).toContain('--label camila:in-council');
  expect(prompt('draft:dave-farley')).toContain('--label camila:accepted');
});

test('in a sandbox every agent is told the unattended rules, and outside one none is', async () => {
  const sandboxed = await run({ slugs: ['dave-farley'], repoPath: '/tmp/thinker-sandbox/2026-10-06-1' });
  const missing = sandboxed.calls.filter((c) => !c.prompt.includes('This run is unattended')).map((c) => c.label);
  expect(missing).toEqual([]);
  expect(sandboxed.calls.length).toBeGreaterThan(15);
  const local = await run({ slugs: ['dave-farley'] });
  expect(local.calls.some((c) => c.prompt.includes('This run is unattended'))).toBe(false);
});

test("the inclusion record is posted on the issue, built from every seat's return", async () => {
  const { calls, logs } = await run({ slugs: ['dave-farley'] });
  const rec = calls.find((c) => c.label === 'inclusion-record');
  expect(rec).toBeDefined();
  expect(rec!.prompt).toContain('bun scripts/issue-note.ts 1 _working/_tmp/inclusion/dave-farley.md');
  expect(rec!.prompt).toContain('5 accept, 0 reject');
  for (const n of [1, 2, 3, 4, 5]) expect(rec!.prompt).toContain(`seat ${n} finding`);
  expect(rec!.prompt).toContain('<summary>Strongest critic: ACCEPT</summary>');
  expect(rec!.prompt).toContain('Write the summary for a reader who opens this issue cold');
  expect(rec!.prompt).toMatch(/<!-- inclusion-record\n[\s\S]*"accept": 5[\s\S]*\n-->/);
  expect(calls.findIndex((c) => c.label === 'inclusion-record')).toBeLessThan(calls.findIndex((c) => c.label.startsWith('draft:')));
  expect(logs.some((l) => l.includes('Inclusion record posted on 1 issue'))).toBe(true);
});

test('a candidate parked at inclusion still gets its record, with the reason', async () => {
  const { calls, labels } = await run({ slugs: ['dave-farley'], rejectSeats: [2, 4] });
  expect(labels.some((l) => l.startsWith('draft:'))).toBe(false);
  const rec = calls.find((c) => c.label === 'inclusion-record');
  expect(rec!.prompt).toContain('3 accept, 2 reject');
  expect(rec!.prompt).toContain('parked at inclusion');
});
