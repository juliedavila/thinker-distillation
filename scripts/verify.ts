// The pre-merge gate: everything that should hold before a page reaches main.
// Usage: bun scripts/verify.ts [--strict-warnings]
//
// This exists because until 2026-09-22 nothing in this repository ran on a merge request. CI had
// one job, `bun run build`, gated to the default branch, so every check ran AFTER merge and the
// only post-merge check was the deploy build itself. Meanwhile `fact-ledger.ts`, `reading-gates.ts`
// and `describe.ts` all exit non-zero correctly and nothing consumed the exit code: they were
// invoked by prose inside an agent prompt, which an agent can skip, fail, or simply claim to have
// run. The workflow branched on `ledger_passes` and `gates_pass`, two booleans the agent wrote
// about its own work.
//
// So the gates were real and the enforcement was not. This script is the enforcement. Running the
// checks here makes the agent's self-report irrelevant rather than trusted, which is the whole
// point: the project's own principle is that a trigger exists in code or it does not exist.
//
// Deliberately NOT a git diff. A diff exempts whatever the branch did not touch, which exempts a
// brand new page that arrives with no ledger, and that is the failure most worth catching. The
// exemption is an explicit list in ledger-exempt.txt that can only shrink.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadThinkers } from './lib';

const strictWarnings = process.argv.includes('--strict-warnings');

const exemptPath = join(ROOT, 'scripts/ledger-exempt.txt');
const exempt = new Set(
  existsSync(exemptPath)
    ? readFileSync(exemptPath, 'utf8')
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l && !l.startsWith('#'))
    : [],
);

const slugs = [...loadThinkers().keys()].sort();
const gated = slugs.filter((s) => !exempt.has(s));

console.log(`verify: ${slugs.length} live pages, ${gated.length} gated, ${exempt.size} exempt (scripts/ledger-exempt.txt)\n`);

type Failure = { slug: string; check: string; detail: string };
const failures: Failure[] = [];

async function run(cmd: string[], label: string, slug: string) {
  const proc = Bun.spawn(['bun', ...cmd], { cwd: ROOT, stdout: 'pipe', stderr: 'pipe' });
  const [out, err] = await Promise.all([new Response(proc.stdout).text(), new Response(proc.stderr).text()]);
  const code = await proc.exited;
  if (code !== 0) {
    // The first non-empty line is almost always the actionable one; the rest is in CI's log.
    const detail = (err || out).split('\n').find((l) => l.trim()) ?? `exit ${code}`;
    failures.push({ slug, check: label, detail: detail.trim() });
    return false;
  }
  return true;
}

for (const slug of gated) {
  const ledger = await run(['scripts/fact-ledger.ts', slug], 'fact-ledger', slug);
  const gates = await run(['scripts/reading-gates.ts', slug], 'reading-gates', slug);
  console.log(`  ${ledger && gates ? 'ok  ' : 'FAIL'} ${slug}`);
}

// A page on the exempt list must still pass the prose gates. The exemption is about sourcing,
// which is expensive to backfill honestly, and never about whether the writing rules hold.
for (const slug of [...exempt].sort()) {
  if (!slugs.includes(slug)) {
    failures.push({ slug, check: 'exempt-list', detail: 'listed as exempt but no such live page; remove the line' });
    continue;
  }
  const gates = await run(['scripts/reading-gates.ts', slug], 'reading-gates', slug);
  console.log(`  ${gates ? 'ok  ' : 'FAIL'} ${slug} (ledger exempt)`);
}

// Staleness. Its own header has said "run it on merge requests" since the day it was written and
// it had never been wired anywhere. It must never go inside `astro build`: CI builds every commit
// on the default branch, so a time-based failure there would one day block deploying an
// unrelated typo fix.
const staleness = Bun.spawnSync(['bun', 'scripts/staleness.ts', '--strict'], { cwd: ROOT });
if (staleness.exitCode !== 0) {
  failures.push({ slug: '(site)', check: 'staleness', detail: 'a page or parked candidate is due for a recheck' });
}

if (failures.length) {
  console.error(`\n✗ ${failures.length} failure(s)\n`);
  for (const f of failures) console.error(`  ${f.slug}  ${f.check}: ${f.detail}`);
  console.error(
    `\nA page that is not on scripts/ledger-exempt.txt needs _working/<slug>/facts.md and page-claims.md.` +
      `\nAdding it to the exempt list is not the fix; that list only shrinks.`,
  );
  process.exit(1);
}

console.log(`\n✓ verify passed${strictWarnings ? ' (build warnings strict)' : ''}`);
