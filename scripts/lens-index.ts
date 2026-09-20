// Which pages already argue through which Lens position.
// Usage: bun scripts/lens-index.ts [slug] [--json]
//
// Why this file exists. `calibration.md` carried this as a hand-kept list, and within one run of
// the pipeline it had already drifted: Fowler's P:3 and P:5 were missing, which understated the
// P:5 collision that reached Willison's shipped page through three review rounds. A list that
// rots is worse than no list, because a drafter trusts it.
//
// With no argument it prints the whole index. With a slug it prints that page's positions and,
// for each, the other pages holding it. That second mode is the one drafting should use: the
// topic-detection literature (Yang, Zhang, Carbonell and Jin) finds that testing novelty inside a
// topic beats testing against the whole corpus, on both cost and accuracy. The cluster a new page
// must be novel against is small, and this names it.
//
// The cap on positions is fixed and small, so at 40 to 60 pages every position will be held
// several times over. Past that point "pick an unused position" stops being advice, and the
// question becomes whether the argument repeats, which is a judgment the novelty seat still owns.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadThinkers, loadLens } from './lib';

const argv = process.argv.slice(2);
const json = argv.includes('--json');
const target = argv.find((a) => !a.startsWith('--'));

const working = join(ROOT, '_working');
const pages = loadThinkers();
const lens = loadLens();

// slug -> positions cited in its Editorial Reading claims map
const byPage = new Map<string, string[]>();
for (const slug of pages.keys()) {
  const claims = join(working, slug, 'reading-claims.md');
  if (!existsSync(claims)) continue;
  const used = [...new Set([...readFileSync(claims, 'utf8').matchAll(/\[(P:\d+)\]/g)].map((m) => m[1]))];
  used.sort((a, b) => Number(a.slice(2)) - Number(b.slice(2)));
  byPage.set(slug, used);
}

const byPosition = new Map<string, string[]>();
for (const [slug, used] of byPage) {
  for (const p of used) byPosition.set(p, [...(byPosition.get(p) ?? []), slug]);
}

const label = (p: string) => {
  const i = Number(p.slice(2)) - 1;
  const text = lens[i];
  return text ? text.replace(/\*\*/g, '').split(/[.—]/)[0].trim().slice(0, 64) : '(position text not found)';
};

const missing = [...pages.keys()].filter((s) => !byPage.has(s));

if (json) {
  console.log(JSON.stringify({
    by_position: Object.fromEntries([...byPosition].map(([p, s]) => [p, s])),
    by_page: Object.fromEntries(byPage),
    no_claims_map: missing,
  }, null, 2));
} else if (target) {
  const used = byPage.get(target);
  if (!used) {
    console.log(`${target} has no reading-claims.md, so no Lens positions are recorded for it.`);
  } else {
    console.log(`${target} argues through: ${used.join(', ')}\n`);
    for (const p of used) {
      const others = (byPosition.get(p) ?? []).filter((s) => s !== target);
      console.log(`${p}  ${label(p)}`);
      console.log(others.length
        ? `  also held by ${others.join(', ')}. Read their extensions before drafting; this is the set to be novel against.`
        : `  held by no other page.`);
    }
  }
} else {
  console.log(`Lens positions in use across ${byPage.size} of ${pages.size} pages\n`);
  for (const p of [...byPosition.keys()].sort((a, b) => Number(a.slice(2)) - Number(b.slice(2)))) {
    const holders = byPosition.get(p)!;
    const flag = holders.length >= 3 ? '  <- crowded' : '';
    console.log(`${p} (${holders.length})${flag}  ${label(p)}`);
    console.log(`     ${holders.join(', ')}`);
  }
  const unused = lens.map((_, i) => `P:${i + 1}`).filter((p) => !byPosition.has(p));
  if (unused.length) console.log(`\nunused: ${unused.join(', ')}`);
  if (missing.length) console.log(`no claims map (predates the Reading Protocol): ${missing.join(', ')}`);
}
