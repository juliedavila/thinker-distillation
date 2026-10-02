// scripts/search-cap.ts against synthetic transcripts. The cap message below is verbatim from a
// real session on 2026-09-22; if Claude Code rewords it, compare the new wording against this one.
import { test, expect } from 'bun:test';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { hitsIn, scan } from '../search-cap';

const CAP =
  'Web search results for query: "Jez Humble continuous delivery 2010"\n\n' +
  'Web search was not performed: this session has used its web search budget (200 of 200 WebSearch calls). ' +
  'Continue with the information already gathered instead of issuing more searches. If more searches are ' +
  'genuinely needed, ask the user to raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION.';
const OK = 'Web search results for query: "Jez Humble"\n\nLinks: [{"title":"x","url":"https://example.com"}]';

const line = (o: unknown) => JSON.stringify(o);
const transcript = (result: string, timestamp = '2026-09-28T12:00:00Z') =>
  [
    line({ type: 'user', message: { content: '[Workflow harness — user request] relayed\n  run the pipeline' } }),
    line({ type: 'user', message: { content: '[Workflow harness — computed task] header\n\n  Stage 1 of the add-thinker skill: research Jez Humble' } }),
    line({ type: 'user', timestamp, message: { content: [{ type: 'tool_result', tool_use_id: 't1', content: result }] } }),
  ].join('\n');

const since = new Date('2026-09-28');
const where = { run: 'wf_x', agent: 'agent-a.jsonl' };

test('the verbatim cap message is a hit, with its query and the stage that made it', () => {
  const hits = hitsIn(transcript(CAP), since, where);
  expect(hits.length).toBe(1);
  expect(hits[0].query).toBe('Jez Humble continuous delivery 2010');
  expect(hits[0].stage).toBe('Stage 1 of the add-thinker skill: research Jez Humble');
});

test('an ordinary result is not a hit, and neither is a cap before --since', () => {
  expect(hitsIn(transcript(OK), since, where)).toEqual([]);
  expect(hitsIn(transcript(CAP, '2026-09-27T23:00:00Z'), since, where)).toEqual([]);
});

test('scan finds a run by its marker, reports its hits, and finds nothing when no run carries the marker', () => {
  const root = mkdtempSync(join(tmpdir(), 'search-cap-'));
  const run = join(root, 'project', 'session', 'subagents', 'workflows', 'wf_1');
  mkdirSync(run, { recursive: true });
  writeFileSync(join(run, 'agent-a.jsonl'), transcript(CAP) + '\n' + line({ note: '/tmp/thinker-sandbox/2026-09-28-1' }));
  writeFileSync(join(run, 'agent-b.jsonl'), transcript(OK));

  const found = scan(since, 'thinker-sandbox/2026-09-28-1', root);
  expect(found.runs).toEqual([run]);
  expect(found.hits.map((h) => h.agent)).toEqual(['agent-a.jsonl']);

  // No run matches: the CLI turns this into exit 2, never a clean result.
  expect(scan(since, 'thinker-sandbox/some-other-run', root).runs).toEqual([]);
});
