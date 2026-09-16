// Reading Protocol stage 2: apply a sentence-per-line draft to a thinker page and write its claims map.
// Usage: bun scripts/apply-reading.ts <thinker-slug> <draft-file>
//
// Draft format (one sentence per line, citations at the end of each line):
//   READING
//   First sentence. [T:thesis] [F:some-frame]
//   EXTENSION
//   First sentence. [P:2] [L:1]
//
// Replaces an existing `reading`/`extension` block, or inserts one before `reading_review:` or `limits:`.
// Writes _working/<slug>/reading-claims.md from the same lines, so page and claims never drift apart.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { thinkerPath, workingDir, parseFrontmatter } from './lib';

const [slug, draftPath] = process.argv.slice(2);
if (!slug || !draftPath) {
  console.error('usage: bun scripts/apply-reading.ts <thinker-slug> <draft-file>');
  process.exit(1);
}

const parts: Record<'READING' | 'EXTENSION', string[]> = { READING: [], EXTENSION: [] };
let section: keyof typeof parts | '' = '';
for (const line of readFileSync(draftPath, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean)) {
  if (line === 'READING' || line === 'EXTENSION') { section = line; continue; }
  if (!section) throw new Error(`draft must start with READING: ${line.slice(0, 40)}`);
  parts[section].push(line);
}

const stripCites = (l: string) => l.replace(/\s*\[[A-Z]:[^\]]+\]/g, '').trim();
const wrap = (text: string) => {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > 78) { lines.push('  ' + line.trim()); line = word; }
    else line += ' ' + word;
  }
  lines.push('  ' + line.trim());
  return lines.join('\n');
};

const reading = parts.READING.map(stripCites).join(' ');
const extension = parts.EXTENSION.map(stripCites).join(' ');
const block = `reading: >\n${wrap(reading)}\nextension: >\n${wrap(extension)}\n`;

const page = thinkerPath(slug);
const src = readFileSync(page, 'utf8');
let next: string;
if (/^reading: >/m.test(src)) {
  next = src.replace(/^reading: >\n[\s\S]*?^extension: >\n(?:  .*\n|\n(?=  ))*/m, block);
} else {
  const anchor = /^reading_review:/m.test(src) ? /^reading_review:/m : /^limits:/m;
  next = src.replace(anchor, (m) => `${block}${m}`);
}
writeFileSync(page, next);
parseFrontmatter(page); // fail loudly if the edit broke the YAML

const name = String(parseFrontmatter(page).name ?? slug);
writeFileSync(join(workingDir(slug), 'reading-claims.md'), [
  `# Reading claims: ${name}`, '',
  'One line per sentence of `reading` and `extension`, each with the grounding-pack IDs it rests on.', '',
  '## reading', '', ...parts.READING.map((l) => `- ${l}`), '',
  '## extension', '', ...parts.EXTENSION.map((l) => `- ${l}`), '',
].join('\n'));

console.log(`${slug}: reading ${reading.split(/\s+/).length} words, extension ${extension.split(/\s+/).length} words`);
console.log(`next: bun scripts/reading-gates.ts ${slug}`);
