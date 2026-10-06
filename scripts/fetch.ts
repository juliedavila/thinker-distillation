#!/usr/bin/env bun
// Fetch one URL to a file under _working/, for unattended pipeline agents.
//
//   bun scripts/fetch.ts <https-url> [<out-path>]
//
// Why this exists: on 2026-10-02 a draft agent piped `curl` into `bun -e`, that shape stopped for a
// permission prompt, and the run waited 135 minutes for someone to answer it. Run 11 lost 7.5 hours
// the same way on an `rm`. Nobody is awake to answer a prompt in an unattended run, so the agents get
// a command narrow enough to approve in advance: a GET over https, with a timeout and a size cap,
// that can only write inside _working/. The output is a file, so the agent reads it with Read or rg
// instead of piping a network response into an interpreter.
//
// Default out path: _working/_tmp/fetch/<host><path>, flattened. A PDF also gets a `.txt` beside it
// from pdftotext when that is installed. Exit 0 on a 2xx, 1 on anything else (the body is still
// written, since an API's error body is usually the useful part), 2 on bad arguments.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const ROOT = resolve(import.meta.dir, '..');
const WORKING = join(ROOT, '_working');
const TIMEOUT_MS = 30_000;
const MAX_BYTES = 25 * 1024 * 1024;

export function outPathFor(url: URL, out: string | undefined, cwd = process.cwd()): string {
  const flat = `${url.hostname}${url.pathname}${url.search}`.replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 150);
  const path = resolve(cwd, out ?? join(WORKING, '_tmp', 'fetch', flat || 'index'));
  if (!path.startsWith(WORKING + sep)) throw new Error(`refusing to write outside ${WORKING}: ${path}`);
  return path;
}

export function parseUrl(raw: string | undefined): URL {
  let url: URL;
  try {
    url = new URL(raw ?? '');
  } catch {
    throw new Error(`not a URL: ${raw ?? '(none)'}`);
  }
  if (url.protocol !== 'https:') throw new Error(`https only: ${url.href}`);
  if (url.username || url.password) throw new Error('no credentials in the URL');
  return url;
}

async function readCapped(res: Response): Promise<Uint8Array> {
  const reader = res.body?.getReader();
  if (!reader) return new Uint8Array();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.length;
    if (total > MAX_BYTES) {
      await reader.cancel();
      throw new Error(`response passed ${MAX_BYTES} bytes; stopped`);
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks);
}

if (import.meta.main) {
  const [rawUrl, out, ...rest] = process.argv.slice(2);
  let url: URL, path: string;
  try {
    if (rest.length) throw new Error('usage: bun scripts/fetch.ts <https-url> [<out-path>]');
    url = parseUrl(rawUrl);
    path = outPathFor(url, out);
  } catch (e) {
    console.error(String((e as Error).message));
    process.exit(2);
  }

  let res: Response, body: Uint8Array;
  try {
    res = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; thinker-distillery-fetch)' },
    });
    body = await readCapped(res);
  } catch (e) {
    console.error(`fetch failed for ${url.href}: ${(e as Error).message}`);
    process.exit(1);
  }

  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, body);
  const type = res.headers.get('content-type') ?? '';
  console.log(`${res.status} ${type || 'no content-type'} ${body.length} bytes -> ${relative(ROOT, path)}`);
  if (res.url !== url.href) console.log(`redirected to ${res.url}`);

  const isPdf = /pdf/i.test(type) || (body[0] === 0x25 && body[1] === 0x50 && body[2] === 0x44 && body[3] === 0x46);
  if (isPdf && Bun.which('pdftotext')) {
    const txt = `${path}.txt`;
    const p = Bun.spawnSync(['pdftotext', '-layout', path, txt], { timeout: TIMEOUT_MS });
    console.log(p.exitCode === 0 && existsSync(txt) ? `text -> ${relative(ROOT, txt)}` : 'pdftotext failed; read the PDF another way');
  }
  process.exit(res.ok ? 0 : 1);
}
