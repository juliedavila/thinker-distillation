// Shared loaders for the Reading Protocol scripts (SCHEMA.md "Reading Protocol").
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

export const ROOT = join(import.meta.dir, '..');
const THINKERS = join(ROOT, 'src/content/thinkers');
const CONCEPTS = join(ROOT, 'src/content/concepts');

export type Doc = Record<string, any> & { slug: string };

export function parseFrontmatter(path: string): Doc {
  const raw = readFileSync(path, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) throw new Error(`no frontmatter: ${path}`);
  return Bun.YAML.parse(m[1]) as Doc;
}

// Underscore-prefixed files are disabled drafts and excluded, matching the Astro loader.
function loadDir(dir: string): Map<string, Doc> {
  const out = new Map<string, Doc>();
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.md') || f.startsWith('_')) continue;
    const d = parseFrontmatter(join(dir, f));
    out.set(d.slug, d);
  }
  return out;
}

export const loadThinkers = () => loadDir(THINKERS);
export const loadConcepts = () => loadDir(CONCEPTS);
export const thinkerPath = (slug: string) => join(THINKERS, `${slug}.md`);
export const workingDir = (slug: string) => join(ROOT, '_working', slug);

// Julie's published positions, the lens every reading is written through.
export function loadLens(): string[] {
  const lifeos = process.env.LIFEOS_DIR ?? join(homedir(), '.claude', 'LIFEOS');
  const p = join(lifeos, 'USER/PRINCIPAL/PRINCIPAL_IDENTITY.md');
  if (!existsSync(p)) return [];
  const section = readFileSync(p, 'utf8').match(/## Key Positions\n([\s\S]*?)\n## /);
  if (!section) return [];
  return section[1].split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2).trim());
}

export const oneLine = (s: unknown) => String(s ?? '').replace(/\s+/g, ' ').trim();
