// The house standard for a merge request or issue description, as a template and a gate.
// Usage: bun scripts/describe.ts --template <mr-thinker|mr-machine|mr-recheck|issue-candidate>
//        bun scripts/describe.ts --lint <file> [--kind <kind>]
//
// Julie, 2026-09-22: "you get a little jargony ... it is not really formulated for outside
// collaborators or even for me." She is right, and the cause is structural rather than stylistic.
// A description written by whoever just did the work is written from inside the work, and the
// author is the one person who cannot tell which words are shorthand.
//
// So the standard is a shape, plus a list of words that may not appear before the drop-down.
// Depth is not deleted, it moves below a <details> block, where the record survives and nobody
// has to read it to reach a decision.
//
// WHAT THIS DELIBERATELY DOES NOT DO, Julie 2026-09-22: "It's not about quantity; it's about
// quality when it comes to the prose. I don't think a number is what sets that." The first draft
// failed a description at 201 words and passed one at 199, which measures nothing. A page about a
// thinker may genuinely need more room than a one-line fix, and a word budget answers that by
// rewarding compression over clarity. It is also the mistake this project already wrote down
// elsewhere: a bare number travels out of its context and becomes the next pass's target.
//
// So length is REPORTED and never enforced. What is enforced is the part a word count cannot
// reach: the reader is told what they are being asked to do, and the words above the drop-down
// mean the same thing to someone who has never seen this repository.
//
// The lint runs at Ship the way reading-gates.ts does, and it must exit 0.
import { readFileSync } from 'node:fs';

type Kind = 'mr-thinker' | 'mr-machine' | 'mr-recheck' | 'issue-candidate';

// Advisory only. Crossing either one prints a note and changes nothing.
const LONG_VISIBLE = 350;
const MANY_BULLETS = 5;

// Terms that are precise inside this repository and opaque outside it. Banned above the fold,
// free below it. The replacement is what to say instead, and it is deliberately longer: the
// point is that the reader should not have to know anything to follow the first screen.
const JARGON: Array<[RegExp, string]> = [
  [/\bmode-[abc]\b/gi, 'say how many review rounds the page gets'],
  [/\b(fact )?ledger\b/gi, 'the source record'],
  [/\bfacts\.md\b/gi, 'the source record'],
  [/\bpage-claims\.md\b/gi, 'the list of which source backs which claim'],
  [/\bgrounding pack\b/gi, 'the research packet'],
  [/\bseats?\b/gi, 'reviewer'],
  [/\buptake check\b/gi, 'the check for whether anyone outside the thinker uses their ideas'],
  [/\breturn edges?\b/gi, 'a link back from an existing page'],
  [/\bcollapse(d|s|Rank)?\b/gi, 'moving a link off the main list'],
  [/\bdemot(e|ed|ion)\b/gi, 'moving a link off the main list'],
  [/\badjudicat(e|ed|ion|or)\b/gi, 'the final single-reviewer check'],
  [/\bunanchored control\b/gi, 'a reviewer who has seen no earlier discussion'],
  [/\blens position\b/gi, "one of Julie's published positions"],
  [/\bP:\d+\b/g, "name the position in words"],
  [/\[S:\d+\]/g, 'a numbered source'],
  [/\bdoctrine_mode\b/g, 'say what it controls'],
  [/\brender_tier\b/g, 'say what it controls'],
  [/\bedge_type\b/g, 'say what the link means'],
  [/\bauto_surfaced\b/g, 'say what it controls'],
  [/\bpark(ed|s|ing)?\b/gi, 'stopped and sent to you'],
  [/\bstage \d+\b/gi, 'name the step'],
  [/\bISC\b/g, 'spell it out'],
  [/\bthe fold\b/gi, 'say what you mean'],
];

const TEMPLATES: Record<Kind, string> = {
  'mr-thinker': `## What changed

A new page for <name>, plus links to it from <n> existing pages.

<Take the room the judgment needs. A page about a thinker is an editorial decision and usually
deserves more than a sentence: what this person is here for, and what the page argues about them.
The test is not length, it is whether someone outside the project could follow it.>

## What you need to do

Read the page and merge if it reads right. <Or: name the one editorial decision you want her to make.>

## Worth a look

- <The one thing on the page you are least sure about.>
- <Any existing page this changed, and what changed on it.>

<details>
<summary>How it was built, and what the reviews caught</summary>

<Research, reviews, sources, corrections, anything a future reader needs. No budget here.>

</details>
`,
  'mr-machine': `## What changed

<One or two sentences. What the machine does now that it did not do before.>

## What you need to do

<The decision, or "Nothing. Merge when you have a minute.">

## Worth a look

- <Anything that changes how a future run behaves.>

<details>
<summary>Why, and what it was like before</summary>

<The failure that prompted it, the evidence, the alternatives rejected.>

</details>
`,
  'mr-recheck': `## What changed

<Name> page: <what was wrong, in plain words, and what it says now>.

## What you need to do

Confirm the correction is right and merge.

## Worth a look

- <What the page claimed before, and what the source actually says.>

<details>
<summary>The full check</summary>

<Every field checked, what held, what did not.>

</details>
`,
  'issue-candidate': `## Who

<Name>, <what they are known for, one line, no shorthand>.

## Why they might belong

- <Reason, in plain words.>
- <What of theirs other people actually use.>

## Not yet verified

- <Every claim above that research still has to confirm.>

## Questions before we commit

- <The real open question, not a rhetorical one.>
`,
};

const argv = process.argv.slice(2);
const flag = (n: string) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : undefined; };

const templateKind = flag('--template') as Kind | undefined;
if (templateKind) {
  if (!TEMPLATES[templateKind]) {
    console.error(`unknown template: ${templateKind}\nknown: ${Object.keys(TEMPLATES).join(', ')}`);
    process.exit(1);
  }
  console.log(TEMPLATES[templateKind]);
  process.exit(0);
}

const file = flag('--lint');
if (!file) {
  console.error('usage: bun scripts/describe.ts --template <kind> | --lint <file> [--kind <kind>]');
  console.error(`kinds: ${Object.keys(TEMPLATES).join(', ')}`);
  process.exit(1);
}

const text = readFileSync(file, 'utf8');
const kind = (flag('--kind') as Kind) ?? (/^## Who\b/m.test(text) ? 'issue-candidate' : 'mr-machine');
const isIssue = kind === 'issue-candidate';

// Everything before the first <details> is what a reader sees without deciding to dig.
const visible = text.split(/<details/i)[0];
const words = visible.split(/\s+/).filter(Boolean).length;

const problems: string[] = [];
const notes: string[] = [];

// 1. Shape. A description missing its action block is the failure mode that matters most,
// because the reader finishes it without knowing what they were being asked.
const required = isIssue ? ['## Who', '## Why they might belong', '## Not yet verified'] : ['## What changed', '## What you need to do'];
for (const h of required) {
  if (!text.includes(h)) problems.push(`missing required heading "${h}"`);
}

// 2. Length is reported, never enforced. See the header: a number does not set prose quality,
// and a budget rewards compression over clarity. Long and clear beats short and dense.
notes.push(`${words} words visible`);
if (words > LONG_VISIBLE) {
  notes.push(`long opening: worth asking whether the background belongs in the details block, but length alone is not a defect`);
}

// 3. Jargon, above the details block only.
for (const [re, fix] of JARGON) {
  const hits = [...visible.matchAll(re)].map((m) => m[0]);
  if (hits.length) {
    const uniq = [...new Set(hits.map((h) => h.toLowerCase()))].join(', ');
    problems.push(`"${uniq}" reads as shorthand outside this repo. ${fix}. (Fine below the details block.)`);
  }
}

// 4. Bullet count, advisory. A list of nine things to look at is usually a list of none, but
// sometimes nine things genuinely changed and the reader is better served by seeing them.
const bulletRuns = visible.split(/\n\s*\n/).map((b) => (b.match(/^\s*[-*] /gm) ?? []).length);
const worst = Math.max(0, ...bulletRuns);
if (worst > MANY_BULLETS) notes.push(`${worst} bullets in one list: check they all need her eye`);

// 5. Openers that spend the first sentence on the document rather than on the change.
if (/^\s*(#+ .*\n+)?\s*(This (merge request|MR|change|issue)|The purpose of this)/i.test(visible)) {
  problems.push('opens by describing the document. Open with what changed.');
}

// 6. Em dashes, per the house writing rules.
if (/—/.test(text)) problems.push('em dash present. The house rule is none in body text.');

// 7. An action block that does not name an action.
const action = text.match(/## What you need to do\s*\n+([\s\S]*?)(\n## |\n<details|$)/);
if (action && !isIssue) {
  const a = action[1].trim();
  if (!a) problems.push('"What you need to do" is empty. If there is nothing, say "Nothing. Merge when you have a minute."');
  else if (!/[.!?]/.test(a)) problems.push('"What you need to do" does not contain a sentence. Name the action.');
  else if (a.split(/\s+/).length > 60) notes.push('long action block: check it names one thing to do');
}

const label = `${file} (${kind})`;
if (problems.length) {
  console.error(`✗ ${label}\n`);
  for (const p of problems) console.error(`  - ${p}`);
  console.error(`\n${notes.join(' · ')}`);
  console.error(`\nStart from: bun scripts/describe.ts --template ${kind}`);
  process.exit(1);
}
console.log(`✓ ${label} · ${notes.join(' · ')}`);
