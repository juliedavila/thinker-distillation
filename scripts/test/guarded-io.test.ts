// scripts/fetch.ts and scripts/discard.ts: the two commands unattended agents use instead of curl and
// rm. What matters is that each refuses to act outside _working/, since that boundary is the reason
// they can be approved in advance. No network: fetch is tested on its argument and path checks only.
import { test, expect, afterAll } from 'bun:test';
import { mkdirSync, symlinkSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { outPathFor, parseUrl } from '../fetch';
import { check } from '../discard';

const ROOT = resolve(import.meta.dir, '..', '..');
const WORKING = join(ROOT, '_working');
const TMP = join(WORKING, '_tmp', 'guarded-io-test');
mkdirSync(TMP, { recursive: true });
afterAll(() => rmSync(TMP, { recursive: true, force: true }));

test('fetch takes https only, and no credentials in the URL', () => {
  expect(parseUrl('https://api.openalex.org/works?filter=x').hostname).toBe('api.openalex.org');
  expect(() => parseUrl('http://example.com/')).toThrow(/https only/);
  expect(() => parseUrl('file:///etc/passwd')).toThrow(/https only/);
  expect(() => parseUrl('https://user:pw@example.com/')).toThrow(/credentials/);
  expect(() => parseUrl('not a url')).toThrow(/not a URL/);
});

test('fetch writes under _working/ by default and refuses any path outside it', () => {
  const url = new URL('https://rib.msb.se/filer/pdf/16252.pdf');
  expect(outPathFor(url, undefined)).toBe(join(WORKING, '_tmp', 'fetch', 'rib.msb.se_filer_pdf_16252.pdf'));
  expect(outPathFor(url, '_working/jens-rasmussen/svedung.pdf', ROOT)).toBe(join(WORKING, 'jens-rasmussen', 'svedung.pdf'));
  expect(() => outPathFor(url, '/tmp/x.pdf')).toThrow(/outside/);
  expect(() => outPathFor(url, '_working/../src/content/thinkers/x.md', ROOT)).toThrow(/outside/);
  expect(() => outPathFor(url, '_working', ROOT)).toThrow(/outside/);
});

test('discard deletes a file under _working/ and treats a missing one as already gone', () => {
  const f = join(TMP, 'calibration-entry.md');
  writeFileSync(f, 'x');
  expect(check(f).refuse).toBeUndefined();
  expect(check(join(TMP, 'never-existed.md')).missing).toBe(true);
});

test('discard refuses directories, paths outside _working/, and a symlinked parent that escapes', () => {
  expect(check(TMP).refuse).toMatch(/directory/);
  expect(check(join(ROOT, 'SCHEMA.md')).refuse).toMatch(/outside/);
  expect(check(join(WORKING, '..', 'package.json')).refuse).toMatch(/outside/);
  const outside = join(tmpdir(), `guarded-io-${process.pid}`);
  mkdirSync(outside, { recursive: true });
  writeFileSync(join(outside, 'victim'), 'x');
  const link = join(TMP, 'escape');
  if (!existsSync(link)) symlinkSync(outside, link);
  expect(check(join(link, 'victim')).refuse).toMatch(/outside/);
  rmSync(outside, { recursive: true, force: true });
});
