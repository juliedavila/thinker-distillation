#!/usr/bin/env bun
// Post a file under _working/ as a comment on one of this project's issues.
//
//   bun scripts/issue-note.ts <issue-number> <path under _working/>
//
// The inclusion Council's record goes on the candidate's issue instead of into the repository
// (Julie, 2026-10-06): the context stays with the thinker it is about, whatever the verdict, and
// nothing is added to disk or to the site. Long text with quotes and backticks does not survive a
// shell `-m '...'`, so the pipeline writes the comment to a file and this posts it, passing the text
// to glab as an argument rather than through a shell. Narrow enough for SandboxGuard to approve in
// advance: one issue, by number, on the project this checkout points at, from a file inside
// _working/, under a size cap.
import { existsSync, readFileSync, realpathSync, statSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';

const ROOT = resolve(import.meta.dir, '..');
const WORKING = join(ROOT, '_working');
export const MAX_BYTES = 100_000;

export function checkArgs(issue: string | undefined, file: string | undefined, cwd = process.cwd()): { issue: string; path: string } {
  if (!issue || !/^[1-9][0-9]{0,6}$/.test(issue)) throw new Error(`issue must be a number: ${issue ?? '(none)'}`);
  if (!file) throw new Error('usage: bun scripts/issue-note.ts <issue-number> <path under _working/>');
  const given = resolve(cwd, file);
  if (!existsSync(given)) throw new Error(`no such file: ${file}`);
  const path = realpathSync(given);
  const working = existsSync(WORKING) ? realpathSync(WORKING) : WORKING;
  if (!path.startsWith(working + sep)) throw new Error(`refusing a file outside ${WORKING}: ${path}`);
  const size = statSync(path).size;
  if (!size) throw new Error(`empty file: ${file}`);
  if (size > MAX_BYTES) throw new Error(`${file} is ${size} bytes; the cap is ${MAX_BYTES}`);
  return { issue, path };
}

// An inclusion record's summary is checked before it posts, because the rules in the prompt were not
// enough: the first automatic one (#40, 2026-10-09) ran 337 words against a 300 cap and said Farley's
// paper "named" the pipeline, a credit the page's own review later declined. The summary is written
// before the page is reviewed, so it may report who credits whom but may not settle an origin itself.
// The summary is everything before the first <details>; quoted text is exempt from the verb check.
export const SUMMARY_MAX_WORDS = 300;
const ORIGIN = /\b(coin(?:ed|s)|invent(?:ed|s|or)|introduc(?:ed|es)|originat(?:ed|es|or)|pioneer(?:ed|s)?|first (?:to|described|used|wrote|named|coined|proposed))\b/i;
export function summaryProblems(body: string): string[] {
  if (!body.includes('<!-- inclusion-record')) return [];
  const summary = body.slice(0, body.indexOf('<details') >= 0 ? body.indexOf('<details') : body.length);
  const problems: string[] = [];
  const words = summary.replace(/[#*_`>-]+/g, ' ').split(/\s+/).filter((w) => /\w/.test(w)).length;
  if (words > SUMMARY_MAX_WORDS) problems.push(`summary is ${words} words; the cap is ${SUMMARY_MAX_WORDS}`);
  if (summary.includes('—')) problems.push('summary contains an em-dash');
  const unquoted = summary.replace(/"[^"\n]*"|“[^”\n]*”/g, '""');
  const verb = unquoted.match(ORIGIN);
  if (verb) problems.push(`summary settles an origin with "${verb[0]}"; say who credits whom, or quote them`);
  return problems;
}

if (import.meta.main) {
  let args: { issue: string; path: string };
  try {
    const argv = process.argv.slice(2);
    if (argv.length !== 2) throw new Error('usage: bun scripts/issue-note.ts <issue-number> <path under _working/>');
    args = checkArgs(argv[0], argv[1]);
  } catch (e) {
    console.error((e as Error).message);
    process.exit(2);
  }
  const body = readFileSync(args.path, 'utf8');
  const problems = summaryProblems(body);
  if (problems.length) {
    console.error(`not posted. Fix the summary in ${args.path} and run this again:\n${problems.map((p) => `  - ${p}`).join('\n')}`);
    process.exit(1);
  }
  const p = Bun.spawnSync(['glab', 'issue', 'note', args.issue, '--message', body], { cwd: ROOT, timeout: 60_000 });
  const out = (p.stdout.toString() + p.stderr.toString()).trim();
  if (p.exitCode !== 0) {
    console.error(`glab failed (${p.exitCode}): ${out.slice(0, 500)}`);
    process.exit(1);
  }
  const link = out.split('\n').find((l) => l.startsWith('https://'));
  console.log(`posted ${body.length} chars to issue #${args.issue}${link ? `: ${link}` : ''}`);
}
