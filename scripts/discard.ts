#!/usr/bin/env bun
// Delete files under _working/, for unattended pipeline agents.
//
//   bun scripts/discard.ts <path> [<path> ...]
//
// An `rm` in an unattended run stops for a permission prompt, and on 2026-10-05 the run waited
// 7.5 hours overnight for one (Close the Loop, deleting a merged calibration-entry.md). This is the
// one deletion the pipeline needs, made narrow enough to approve in advance: files only, never a
// directory, and only inside this checkout's _working/. Tracked files go through `git rm` instead,
// so the deletion shows in the commit.
//
// Exit 0 when every path is gone afterwards (a path already missing counts), 1 when any is refused.
import { existsSync, lstatSync, realpathSync, unlinkSync } from 'node:fs';
import { basename, dirname, join, relative, resolve, sep } from 'node:path';

const ROOT = resolve(import.meta.dir, '..');
const WORKING = join(ROOT, '_working');

// The parent is resolved through symlinks, so `_working/link-to-elsewhere/file` cannot escape.
export function check(raw: string, cwd = process.cwd()): { path: string; refuse?: string; missing?: boolean } {
  const given = resolve(cwd, raw);
  if (!existsSync(dirname(given))) return { path: given, missing: true };
  const path = join(realpathSync(dirname(given)), basename(given));
  const working = existsSync(WORKING) ? realpathSync(WORKING) : WORKING;
  if (!path.startsWith(working + sep)) return { path, refuse: `outside ${WORKING}` };
  if (!existsSync(path) && !isLink(path)) return { path, missing: true };
  const st = lstatSync(path);
  if (st.isDirectory()) return { path, refuse: 'is a directory; this deletes files only' };
  if (!st.isFile() && !st.isSymbolicLink()) return { path, refuse: 'not a regular file' };
  return { path };
}

const isLink = (p: string) => {
  try {
    return lstatSync(p).isSymbolicLink();
  } catch {
    return false;
  }
};

if (import.meta.main) {
  const paths = process.argv.slice(2);
  if (!paths.length) {
    console.error('usage: bun scripts/discard.ts <path> [<path> ...]');
    process.exit(2);
  }
  let refused = 0;
  for (const raw of paths) {
    const r = check(raw);
    if (r.refuse) {
      refused++;
      console.error(`refused ${raw}: ${r.refuse}`);
    } else if (r.missing) {
      console.log(`already gone ${raw}`);
    } else {
      unlinkSync(r.path);
      console.log(`deleted ${relative(ROOT, r.path)}`);
    }
  }
  process.exit(refused ? 1 : 0);
}
