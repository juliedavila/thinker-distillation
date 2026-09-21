// What a pipeline run actually cost, and where it went.
// Usage: bun scripts/run-cost.ts <workflow-transcript-dir> [--json]
//        bun scripts/run-cost.ts --model            cost model only, no run needed
//
// Julie asked how efficient the architecture is, after noticing that the agent count climbs
// through a run. It climbs because phases launch in sequence, not because anything leaks. The
// question underneath is the real one, so this measures rather than argues.
//
// Transcript directories live under
// ~/.claude/projects/<project>/subagents/workflows/wf_<id>/
//
// WHAT THE FIRST COMPLETE RUN SHOWED (36 agents, two thinkers shipped)
//
//   Review was 21 of 36 agents and 57% of all transcript bytes. Everything else together was
//   less than half. If a run is ever made cheaper, that is where the money is.
//
//   20% of every byte was automatically injected context, at a median of 161KB per agent, against
//   a median computed task of 2.5KB. So the instruction a seat is given is about one and a half
//   percent of what it receives at startup. The rest is a skill catalogue and a CLAUDE.md tree
//   that a Council seat has no use for. A workflow script cannot decline it, which is worth
//   knowing before anyone tries to optimise the prompts: the prompts are not the problem.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const json = argv.includes('--json');
const modelOnly = argv.includes('--model');
const dir = argv.find((a) => !a.startsWith('--'));

// Costs split cleanly in two, which is the whole efficiency story.
//
// FIXED per batch, however many candidates: the Council seats review every page in one pass, so
// five seats cover one candidate or three at the same price. Policy, staleness and the closing
// report are once per run whatever happens.
//
// PER CANDIDATE: research, the adversarial audit, drafting, one editor per review round, and
// shipping. These are the only ones that multiply.
const FIXED = { inclusion: 5, policy: 1, staleness: 1, reviewSeats: 5, report: 1 };
const PER_CANDIDATE = { research: 1, audit: 1, draft: 1, ship: 1 };

function model(rounds = 3) {
  const fixed = FIXED.inclusion + FIXED.policy + FIXED.staleness + FIXED.report + FIXED.reviewSeats * rounds;
  const per = PER_CANDIDATE.research + PER_CANDIDATE.audit + PER_CANDIDATE.draft + PER_CANDIDATE.ship + rounds - 1;
  return { fixed, per, at: (n: number) => fixed + per * n };
}

if (modelOnly || !dir) {
  const m = model(3);
  console.log(`Agents per run, at ${3} review rounds: about ${m.fixed} fixed plus ${m.per} per candidate.\n`);
  console.log('  candidates   agents   per page   note');
  for (const n of [1, 2, 3, 4]) {
    const t = m.at(n);
    console.log(
      `  ${String(n).padStart(10)}   ${String(t).padStart(6)}   ${(t / n).toFixed(1).padStart(8)}   ` +
        (n === 1 ? 'every fixed cost paid by one page' : n === 3 ? 'reviewed maximum; seats start splitting attention past here' : n === 4 ? 'the workflow warns above three' : ''),
    );
  }
  console.log(
    `\nBatching is the only large lever the design actually holds. Going from one candidate to three cuts the ` +
      `per-page agent count by more than half, because the Council reviews the whole batch in one pass. Going ` +
      `past three trades review quality for it, which the skill declines.`,
  );
  if (!dir) process.exit(0);
}

// ------------------------------------------------------------ measure a run
if (!existsSync(join(dir!, 'journal.jsonl'))) {
  console.error(`no journal.jsonl in ${dir}`);
  process.exit(1);
}
const label = new Map<string, { label: string; phase: string }>();
for (const line of readFileSync(join(dir!, 'journal.jsonl'), 'utf8').split('\n')) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  if (r.type === 'started') label.set(r.agentId, { label: r.label ?? '?', phase: r.phase ?? '?' });
}

const longestString = (x: unknown, best = ''): string => {
  if (x && typeof x === 'object') {
    for (const v of Object.values(x as Record<string, unknown>)) {
      if (typeof v === 'string') { if (v.length > best.length) best = v; }
      else best = longestString(v, best);
    }
  }
  return best;
};

type Phase = { agents: number; bytes: number; injected: number };
const byPhase = new Map<string, Phase>();
let injectedSamples: number[] = [];
let taskSamples: number[] = [];

for (const f of readdirSync(dir!).filter((f) => f.startsWith('agent-') && f.endsWith('.jsonl'))) {
  const id = f.slice(6, -6);
  const meta = label.get(id) ?? { label: '?', phase: 'unlabelled' };
  const bytes = statSync(join(dir!, f)).size;
  let injected = 0;
  let task = 0;
  for (const line of readFileSync(join(dir!, f), 'utf8').split('\n')) {
    if (!line.trim()) continue;
    let o: any;
    try { o = JSON.parse(line); } catch { continue; }
    if (o.type === 'attachment') injected += longestString(o).length;
    const c = o?.message?.content;
    if (typeof c === 'string' && c.includes('computed task')) task = c.length;
  }
  const p = byPhase.get(meta.phase) ?? { agents: 0, bytes: 0, injected: 0 };
  p.agents++; p.bytes += bytes; p.injected += injected;
  byPhase.set(meta.phase, p);
  injectedSamples.push(injected);
  taskSamples.push(task);
}

const median = (a: number[]) => (a.length ? a.slice().sort((x, y) => x - y)[Math.floor(a.length / 2)] : 0);
const totals = [...byPhase.values()].reduce((a, p) => ({ agents: a.agents + p.agents, bytes: a.bytes + p.bytes, injected: a.injected + p.injected }), { agents: 0, bytes: 0, injected: 0 });

if (json) {
  console.log(JSON.stringify({ phases: Object.fromEntries(byPhase), totals, median_injected: median(injectedSamples), median_task: median(taskSamples) }, null, 2));
} else {
  console.log(`\n${dir}\n`);
  console.log(`${'phase'.padEnd(12)} ${'agents'.padStart(7)} ${'MB'.padStart(8)} ${'share'.padStart(7)} ${'injected'.padStart(9)}`);
  for (const [name, p] of [...byPhase].sort((a, b) => b[1].bytes - a[1].bytes)) {
    console.log(
      `${name.padEnd(12)} ${String(p.agents).padStart(7)} ${(p.bytes / 1e6).toFixed(1).padStart(8)} ` +
        `${((100 * p.bytes) / totals.bytes).toFixed(0).padStart(6)}% ${((100 * p.injected) / p.bytes).toFixed(0).padStart(8)}%`,
    );
  }
  console.log(`${'TOTAL'.padEnd(12)} ${String(totals.agents).padStart(7)} ${(totals.bytes / 1e6).toFixed(1).padStart(8)} ${'100%'.padStart(7)} ${((100 * totals.injected) / totals.bytes).toFixed(0).padStart(8)}%`);
  console.log(
    `\nMedian injected context ${(median(injectedSamples) / 1024).toFixed(0)}KB per agent, against a median computed task of ` +
      `${(median(taskSamples) / 1024).toFixed(1)}KB. The instruction is about ` +
      `${((100 * median(taskSamples)) / (median(injectedSamples) || 1)).toFixed(1)}% of what an agent receives before it starts.`,
  );
  const review = byPhase.get('Review');
  if (review) {
    console.log(
      `\nReview is ${review.agents} of ${totals.agents} agents and ${((100 * review.bytes) / totals.bytes).toFixed(0)}% of all bytes. ` +
        `It is where any real saving would have to come from, and it is also the part every run of the calibration log says ` +
        `catches real errors, so cheapness there is bought with quality.`,
    );
  }
}
