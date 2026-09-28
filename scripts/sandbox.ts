// A disposable clone for unattended pipeline runs.
// Usage:
//   bun scripts/sandbox.ts create [--from <repo>]   print the path to a fresh sandbox
//   bun scripts/sandbox.ts list
//   bun scripts/sandbox.ts destroy <path>
//   bun scripts/sandbox.ts check <path>             prove the push boundary holds
//
// Why this exists. The pipeline writes files, rewrites pages, and drives git without a human in
// the loop. The first live run left a stray `test merge` commit sitting on the real checkout's
// main. Working in a throwaway clone makes every local mistake free: if an agent deletes the wrong
// directory or mangles the index, the answer is to destroy the sandbox and start that stage again.
//
// What a sandbox cannot contain is the part that matters most. Destroying a directory does not
// un-push a branch, un-open a merge request or un-close an issue, and those are the pipeline's
// only genuinely irreversible actions. They are contained by capability instead: the sandbox
// pushes with a GitLab project access token holding the Developer role, so the server refuses a
// push to protected main and refuses a merge. The pipeline is structurally incapable of merging
// its own work, which is the one gate that stays human by design.
//
// Teardown is a guarded function rather than a shell command on purpose. `.claude/settings.json`
// denies `rm -rf` outright, because the only two permission refusals in the first live run were
// agents reaching for it. Deleting through code means the path can be checked against the sandbox
// root first, which a shell glob never is.
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync, chmodSync, statSync, symlinkSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { ROOT } from './lib';

const SANDBOX_ROOT = join(tmpdir(), 'thinker-sandbox');
const PROJECT = 'juliedavila/thinker-distillery';
const KEYCHAIN = { account: 'thinker-pipeline', service: 'gitlab-thinker-distillery' };

const run = (cmd: string[], cwd?: string) => {
  const p = Bun.spawnSync(cmd, { cwd, stdout: 'pipe', stderr: 'pipe' });
  return { ok: p.exitCode === 0, out: p.stdout.toString().trim(), err: p.stderr.toString().trim() };
};

function token(): string {
  const r = run(['security', 'find-generic-password', '-a', KEYCHAIN.account, '-s', KEYCHAIN.service, '-w']);
  if (!r.ok || !r.out) {
    console.error(
      `No pipeline token in the keychain (account ${KEYCHAIN.account}, service ${KEYCHAIN.service}).\n` +
        `Create a GitLab project access token with the Developer role and scopes api + write_repository, then:\n` +
        `  security add-generic-password -U -a ${KEYCHAIN.account} -s ${KEYCHAIN.service} -w`,
    );
    process.exit(1);
  }
  return r.out;
}

// Nothing outside the sandbox root is ever deleted, whatever it is handed.
function assertInsideRoot(p: string): string {
  const abs = resolve(p);
  if (abs === SANDBOX_ROOT || !abs.startsWith(SANDBOX_ROOT + '/')) {
    console.error(`refusing to touch ${abs}: it is not inside ${SANDBOX_ROOT}`);
    process.exit(1);
  }
  if (!existsSync(abs)) {
    console.error(`no such sandbox: ${abs}`);
    process.exit(1);
  }
  return abs;
}

const PRE_PUSH = `#!/bin/sh
# The server refuses this too, since the pipeline token holds only the Developer role and main is
# protected. This hook is the local half, so a mistaken push fails immediately and legibly rather
# than after a round trip.
while read _local_ref _local_sha remote_ref _remote_sha; do
  case "$remote_ref" in
    refs/heads/main)
      echo "pre-push: refusing to push to main from a sandbox. Open a merge request instead." >&2
      exit 1
      ;;
  esac
done
exit 0
`;

// Keep the Mac awake for as long as a sandbox exists. On 2026-09-26 the Hollnagel run went quiet
// for eighteen hours because the laptop went to idle sleep at 6:17 pm, mid-web-lookup, and did not
// wake until 12:39 the next day; the power log shows both. A run is only as unattended as the
// machine under it. create starts caffeinate and records its pid inside .git, where no commit can
// pick it up; destroy and prune stop it. -i blocks idle sleep, -s blocks system sleep on AC power,
// and -t caps it at 48 hours, so a sandbox nobody tears down cannot hold the machine awake forever.
// A closed lid on battery still sleeps; no flag overrides that.
const AWAKE_HOURS = 48;
const pidFile = (dir: string) => join(dir, '.git', 'caffeinate.pid');
function keepAwake(dir: string): number | null {
  if (process.platform !== 'darwin') return null;
  const p = Bun.spawn(['caffeinate', '-i', '-s', '-t', String(AWAKE_HOURS * 3600)], { stdio: ['ignore', 'ignore', 'ignore'], detached: true });
  p.unref();
  writeFileSync(pidFile(dir), String(p.pid));
  return p.pid;
}
function letSleep(dir: string): void {
  const f = pidFile(dir);
  if (!existsSync(f)) return;
  const pid = Number(readFileSync(f, 'utf8').trim());
  // Only kill the pid if it is still caffeinate. After a reboot the number can belong to anything.
  if (pid && run(['ps', '-p', String(pid), '-o', 'comm=']).out.trim().endsWith('caffeinate')) {
    try { process.kill(pid); } catch {}
  }
}

const cmd = process.argv[2];

if (cmd === 'create') {
  const fromIdx = process.argv.indexOf('--from');
  const source = fromIdx > -1 ? resolve(process.argv[fromIdx + 1]) : ROOT;
  mkdirSync(SANDBOX_ROOT, { recursive: true });
  chmodSync(SANDBOX_ROOT, 0o700);
  // No clock in a workflow script, so the caller may pass a stamp; otherwise count what is here.
  const stamp = process.argv.find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a)) ?? 'run';
  let dir = join(SANDBOX_ROOT, `${stamp}-1`);
  for (let n = 1; existsSync(dir); n++) dir = join(SANDBOX_ROOT, `${stamp}-${n}`);

  // Clone from the local checkout, which is instant, then point the remote at GitLab for pushing.
  const clone = run(['git', 'clone', '--quiet', source, dir]);
  if (!clone.ok) { console.error(`clone failed: ${clone.err}`); process.exit(1); }
  chmodSync(dir, 0o700);

  const url = `https://${KEYCHAIN.account}:${token()}@gitlab.com/${PROJECT}.git`;
  run(['git', 'remote', 'set-url', 'origin', url], dir);
  const fetched = run(['git', 'fetch', '--quiet', 'origin'], dir);
  if (!fetched.ok) { console.error(`fetch failed: ${fetched.err}`); process.exit(1); }
  // Land on main by name, not merely at main's commit. Cloning inherits whatever branch the source
  // had checked out, and resetting it to origin/main leaves a sandbox sitting on a branch called
  // something else that happens to point at main. That reads as a bug to whoever looks next.
  run(['git', 'checkout', '--quiet', '-B', 'main', 'origin/main'], dir);

  const hook = join(dir, '.git', 'hooks', 'pre-push');
  writeFileSync(hook, PRE_PUSH);
  chmodSync(hook, 0o755);

  // A fresh clone has no node_modules and the build needs one. Symlinking the source's is instant
  // and safe here: the sandbox is disposable and nothing in the pipeline installs packages.
  // Without this the first `bun run build` inside a sandbox fails and the stage looks broken.
  const mods = join(source, 'node_modules');
  if (existsSync(mods)) symlinkSync(mods, join(dir, 'node_modules'));

  const awake = keepAwake(dir);

  console.log(dir);
  console.error(
    `sandbox ready at ${dir}\n` +
      (awake ? `  keeping the Mac awake (caffeinate pid ${awake}) until destroy, or ${AWAKE_HOURS}h at most\n` : '') +
      `  reset to origin/main, pushes to main blocked locally and by the server\n` +
      `  the token sits in this clone's .git/config and goes when the sandbox does\n` +
      `  tear down with: bun scripts/sandbox.ts destroy ${dir}`,
  );
} else if (cmd === 'list') {
  if (!existsSync(SANDBOX_ROOT)) { console.log('no sandboxes'); process.exit(0); }
  const dirs = readdirSync(SANDBOX_ROOT);
  if (!dirs.length) { console.log('no sandboxes'); process.exit(0); }
  for (const d of dirs) {
    const p = join(SANDBOX_ROOT, d);
    const branch = run(['git', 'branch', '--show-current'], p);
    console.log(`${p}  branch=${branch.out || 'unknown'}  age=${Math.round((Date.now() - statSync(p).mtimeMs) / 3600_000)}h`);
  }
} else if (cmd === 'destroy') {
  const dir = assertInsideRoot(process.argv[3] ?? '');
  letSleep(dir);
  rmSync(dir, { recursive: true, force: true });
  console.log(`destroyed ${dir}`);
} else if (cmd === 'prune') {
  // The create path tells you the token "goes when the sandbox does", which is true and had never
  // once fired: nothing destroyed a sandbox, so on 2026-09-22 two abandoned clones from two
  // different runs were still holding the pipeline's GitLab token in plaintext .git/config, 45MB
  // and valid until 2027-03-20. A guarantee nobody executes is not a guarantee.
  //
  // Age rather than success: a run that failed is exactly the one worth keeping to look at, and a
  // finished run stops being interesting within a day.
  const hours = Number(process.argv[3] ?? 24);
  if (!existsSync(SANDBOX_ROOT)) { console.log('no sandboxes'); process.exit(0); }
  const stale = readdirSync(SANDBOX_ROOT)
    .map((d) => join(SANDBOX_ROOT, d))
    .filter((p) => (Date.now() - statSync(p).mtimeMs) / 3600_000 > hours);
  if (!stale.length) { console.log(`nothing older than ${hours}h`); process.exit(0); }
  for (const p of stale) {
    const age = Math.round((Date.now() - statSync(p).mtimeMs) / 3600_000);
    letSleep(assertInsideRoot(p));
    rmSync(assertInsideRoot(p), { recursive: true, force: true });
    console.log(`destroyed ${p} (${age}h old, credential gone with it)`);
  }
} else if (cmd === 'check') {
  // Not with `git push --dry-run`. A dry run skips the pre-push hook and GitLab does not evaluate
  // branch protection for one either, so it reports success for a push that would be refused. The
  // first version of this check did exactly that and declared the boundary broken when it was not.
  // The two guards are tested where they actually live instead.
  const dir = assertInsideRoot(process.argv[3] ?? '');
  const fails: string[] = [];
  console.log(`checking the push boundary for ${dir}\n`);

  const hook = join(dir, '.git', 'hooks', 'pre-push');
  const feed = (ref: string) => {
    const p = Bun.spawnSync([hook, 'origin', `https://gitlab.com/${PROJECT}.git`], {
      cwd: dir,
      stdin: new TextEncoder().encode(`refs/heads/x abc ${ref} def\n`),
      stdout: 'pipe',
      stderr: 'pipe',
    });
    return p.exitCode === 0;
  };
  const hookBlocksMain = !feed('refs/heads/main');
  const hookAllowsBranch = feed('refs/heads/candidate/example');
  console.log(`local hook, push to main:        ${hookBlocksMain ? 'refused (correct)' : 'ALLOWED'}`);
  console.log(`local hook, push to a candidate: ${hookAllowsBranch ? 'allowed (correct)' : 'REFUSED'}`);
  if (!hookBlocksMain) fails.push('the pre-push hook does not block main');
  if (!hookAllowsBranch) fails.push('the pre-push hook blocks candidate branches, so the pipeline cannot work');

  const tokenLevel = (() => {
    const r = run(['curl', '-s', '-H', `PRIVATE-TOKEN: ${token()}`, `https://gitlab.com/api/v4/projects/${encodeURIComponent(PROJECT)}`]);
    try { return JSON.parse(r.out)?.permissions?.project_access?.access_level ?? null; } catch { return null; }
  })();
  const protection = (() => {
    const r = run(['glab', 'api', `projects/${encodeURIComponent(PROJECT)}/protected_branches`]);
    try { return (JSON.parse(r.out) as any[]).find((b) => b.name === 'main') ?? null; } catch { return null; }
  })();
  const needed = protection?.push_access_levels?.[0]?.access_level ?? null;
  const mergeNeeded = protection?.merge_access_levels?.[0]?.access_level ?? null;

  console.log(`\ntoken access level:              ${tokenLevel} (30 is Developer, 40 Maintainer)`);
  console.log(`main requires, to push:          ${needed}`);
  console.log(`main requires, to merge:         ${mergeNeeded}`);
  if (tokenLevel === null) fails.push('could not read the token access level');
  if (needed === null) fails.push('main is not a protected branch, so the server enforces nothing');
  if (tokenLevel !== null && needed !== null && tokenLevel >= needed) fails.push('the token can push to main');
  if (tokenLevel !== null && mergeNeeded !== null && tokenLevel >= mergeNeeded) fails.push('the token can merge into main');

  console.log(fails.length ? `\nBOUNDARY BROKEN:\n- ${fails.join('\n- ')}` : `\nboundary holds: the pipeline can open a merge request and cannot merge it`);
  process.exit(fails.length ? 1 : 0);
} else {
  console.error('usage: bun scripts/sandbox.ts create|list|destroy <path>|prune [hours]|check <path>');
  process.exit(1);
}
