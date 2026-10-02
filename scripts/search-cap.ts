// Did any agent in a pipeline run hit the web-search cap? Usage:
//   bun scripts/search-cap.ts --since <YYYY-MM-DD|ISO> [--marker <text>] [--json]
//
// Exit 0: the run's transcripts were found and no search was refused.
// Exit 1: at least one search was refused; every hit is printed with the agent that made it.
// Exit 2: no transcript for this run could be found. A guard that cannot see is not a clean result.
//
// Why this exists. Claude Code caps WebSearch per session (200 by default, raised with
// CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION). At the cap the tool does not fail. It returns an
// ordinary result that says "Web search was not performed" and tells the model to "continue with
// the information already gathered". Research then writes from memory, and a ledger line written
// from memory looks exactly like one written from a source (anthropics/claude-code#95815). The
// budget is shared by the whole session, so four serial runs in one session reached it on
// 2026-09-28 without any single run coming close.
//
// Agents are also asked to report the cap themselves, but that is the model noticing a message
// that tells it to carry on. This reads the transcripts, which is what actually happened.
//
// Scope. Workflow agents record the session's working directory, never the sandbox they work in,
// so cwd cannot tell one run from another. Every agent of one workflow run does share a directory,
// `<session>/subagents/workflows/wf_<id>/`, so a run is any such directory touched since --since
// whose transcripts mention --marker. The pipeline passes the sandbox path as the marker, which is
// unique per run. The default marker matches any add-thinker run, which with --since set to the
// day is conservative: another run's hit that day parks this one too.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

// The wording as of Claude Code on 2026-09-28. Both halves are checked so a reworded message still
// matches on the other one. If both change, agents' own reports are the only remaining layer, and
// the test in scripts/test/search-cap.test.ts holds the verbatim message to compare against.
export const CAP_SIGNS = [/web search was not performed/i, /used its web search budget/i];

export type Hit = { timestamp: string; run: string; agent: string; stage: string; query: string };

const text = (content: unknown): string =>
  typeof content === 'string'
    ? content
    : Array.isArray(content)
      ? content.map((b: any) => (typeof b === 'string' ? b : b?.text ?? '')).join('\n')
      : '';

// Hits in one agent transcript, given as its JSONL text.
export function hitsIn(jsonl: string, since: Date, where: { run: string; agent: string }): Hit[] {
  const hits: Hit[] = [];
  let stage = '';
  for (const line of jsonl.split('\n')) {
    if (!line) continue;
    let entry: any;
    try {
      entry = JSON.parse(line);
    } catch {
      continue;
    }
    const content = entry?.message?.content;
    // The agent's brief arrives as the harness's "computed task" message: one header paragraph,
    // then the script's prompt indented. The prompt's first line names the stage.
    if (!stage && entry?.type === 'user') {
      const lines = text(content).split('\n');
      if (lines[0].startsWith('[Workflow harness — computed task]'))
        stage = (lines.slice(1).find((l) => l.trim()) ?? '').trim().slice(0, 90);
    }
    if (!Array.isArray(content)) continue;
    for (const block of content) {
      if (block?.type !== 'tool_result') continue;
      const body = text(block.content);
      if (!CAP_SIGNS.some((re) => re.test(body))) continue;
      const at = new Date(entry.timestamp ?? 0);
      if (at < since) continue;
      const query = body.match(/Web search results for query: "(.*?)"\n/)?.[1] ?? '';
      hits.push({ timestamp: entry.timestamp ?? '', ...where, stage, query });
    }
  }
  return hits;
}

// Every workflow run directory under the Claude config dir touched since `since`.
export function runDirs(since: Date, root = join(process.env.CLAUDE_CONFIG_DIR ?? join(homedir(), '.claude'), 'projects')): string[] {
  const dirs: string[] = [];
  const list = (d: string) => (existsSync(d) ? readdirSync(d) : []);
  for (const project of list(root)) {
    for (const session of list(join(root, project))) {
      const workflows = join(root, project, session, 'subagents', 'workflows');
      for (const run of list(workflows)) {
        const dir = join(workflows, run);
        if (statSync(dir).isDirectory() && statSync(dir).mtime >= since) dirs.push(dir);
      }
    }
  }
  return dirs;
}

export function scan(since: Date, marker: string, root?: string) {
  const runs: string[] = [];
  const hits: Hit[] = [];
  for (const dir of runDirs(since, root)) {
    const agents = readdirSync(dir).filter((f) => f.endsWith('.jsonl'));
    const bodies = agents.map((f) => [f, readFileSync(join(dir, f), 'utf8')] as const);
    if (!bodies.some(([, body]) => body.includes(marker))) continue;
    runs.push(dir);
    for (const [agent, body] of bodies) hits.push(...hitsIn(body, since, { run: dir, agent }));
  }
  return { runs, hits };
}

if (import.meta.main) {
  const argv = process.argv.slice(2);
  const flag = (name: string) => {
    const i = argv.indexOf(name);
    return i >= 0 ? argv[i + 1] : undefined;
  };
  const sinceArg = flag('--since');
  const since = new Date(sinceArg ?? '');
  if (!sinceArg || Number.isNaN(since.getTime())) {
    console.error('usage: bun scripts/search-cap.ts --since <YYYY-MM-DD|ISO> [--marker <text>] [--json]');
    process.exit(2);
  }
  const marker = flag('--marker') ?? 'add-thinker skill';
  const { runs, hits } = scan(since, marker);

  if (argv.includes('--json')) console.log(JSON.stringify({ since: since.toISOString(), marker, runs, hits }, null, 2));
  if (!runs.length) {
    console.error(`BLIND: no workflow run since ${sinceArg} mentions "${marker}". Nothing was checked, so this is not a clean result.`);
    process.exit(2);
  }
  if (hits.length) {
    if (!argv.includes('--json')) {
      console.error(`SEARCH CAP HIT: ${hits.length} search(es) refused in ${runs.length} run(s). Anything written after these was written without a source.`);
      for (const h of hits) console.error(`  ${h.timestamp}  ${h.agent}  ${h.stage}\n      query: ${h.query}`);
    }
    process.exit(1);
  }
  if (!argv.includes('--json')) console.log(`clean: ${runs.length} run(s) since ${sinceArg}, no search refused`);
}
