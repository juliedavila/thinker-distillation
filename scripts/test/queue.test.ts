// scripts/queue-signals.ts: graph pull counts independent footholds, and Council support reads the
// inclusion records. The cases are the ones that ranked wrongly on 2026-10-09.
import { test, expect } from 'bun:test';
import { pullBy, suggestionsFrom } from '../queue-signals';

test('one shared frame on three pages is one foothold, not three', () => {
  const p = pullBy([
    { candidate: 'chris-read', page: 'dave-farley', frame: 'deployment-pipeline' },
    { candidate: 'chris-read', page: 'dan-north', frame: 'deployment-pipeline' },
    { candidate: 'chris-read', page: 'jez-humble', frame: 'deployment-pipeline' },
    { candidate: 'chris-read', page: 'jez-humble' }, // Humble's own edge to him: same page, same foothold
  ]);
  expect(p.get('chris-read')!.pull).toBe(1);
  expect(p.get('chris-read')!.pages.sort()).toEqual(['dan-north', 'dave-farley', 'jez-humble']);
});

test('two pages that each name someone on their own are two footholds', () => {
  const p = pullBy([
    { candidate: 'nancy-leveson', page: 'jens-rasmussen' },
    { candidate: 'nancy-leveson', page: 'erik-hollnagel' },
  ]);
  expect(p.get('nancy-leveson')!.pull).toBe(2);
});

test('different frames keep pages apart, and a page bridging two frames joins them', () => {
  const apart = pullBy([
    { candidate: 'x', page: 'a', frame: 'f1' },
    { candidate: 'x', page: 'b', frame: 'f2' },
  ]);
  expect(apart.get('x')!.pull).toBe(2);
  const bridged = pullBy([
    { candidate: 'x', page: 'a', frame: 'f1' },
    { candidate: 'x', page: 'b', frame: 'f2' },
    { candidate: 'x', page: 'b', frame: 'f1' },
  ]);
  expect(bridged.get('x')!.pull).toBe(1);
});

test('inclusion records yield who each Council suggested, and anything else is ignored', () => {
  const rec = (slug: string, names: string[]) =>
    `## Summary\n\n<details>x</details>\n\n<!-- inclusion-record\n${JSON.stringify({ record: 'inclusion-council', slug, new_candidates: names }, null, 1)}\n-->`;
  const s = suggestionsFrom([
    rec('jens-rasmussen', ['Nancy Leveson', 'Diane Vaughan']),
    rec('dave-farley', ['Martin Thompson', 'Nancy Leveson']),
    'The Dave Farley page is ready for review in merge request !66',
    '<!-- inclusion-record\nnot json\n-->',
  ]);
  expect([...s.get('Nancy Leveson')!].sort()).toEqual(['dave-farley', 'jens-rasmussen']);
  expect([...s.get('Diane Vaughan')!]).toEqual(['jens-rasmussen']);
  expect(s.size).toBe(3);
});
