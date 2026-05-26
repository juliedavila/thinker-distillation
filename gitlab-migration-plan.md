# Thinker Distillery — GitLab Pages Migration Plan

> Reference-only research. Modeled after Camila Hub's existing GitLab Pages setup. No actions taken; this is a runbook for Julie.
>
> Trigger: 2026-05-26, thinkerdistillery.netlify.app returned 503 `usage_exceeded` (Netlify free-tier credits depleted).
> Source pattern: `/Users/juliedavila/Camila/hub/` — live on GitLab Pages, confirmed 2026-05-26.
> Target repo: `/Users/juliedavila/Camila/thinker-distillation/` — currently on GitHub + Netlify.

---

## 1. Camila Hub Reference

### 1.1 The full GitLab CI/CD config

`/Users/juliedavila/Camila/hub/.gitlab-ci.yml`, all 25 lines, verbatim:

```yaml
# Camila Hub — GitLab Pages deploy pipeline
#
# Builds the Astro site and publishes the `dist/` output as GitLab Pages.
# Access control is configured in the GitLab project Settings → Pages
# ("Only project members") — the pipeline itself doesn't gate access;
# GitLab serves Pages behind the project visibility rules.

image: oven/bun:1

stages:
  - deploy

pages:
  stage: deploy
  script:
    - bun install --frozen-lockfile
    - bun run build
    - rm -rf public
    - mv dist public
  artifacts:
    paths:
      - public
    rules:
      - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

### 1.2 The load-bearing moves

- **Image** (line 8): `oven/bun:1` — official Bun container. No Node install needed; Bun bundles its own runtime that resolves Astro 4/6 just fine.
- **Job name** (line 13): `pages` — GitLab convention. Naming the job `pages` is what tells GitLab Pages to serve the artifact. Rename it and the deploy silently stops working.
- **Build command** (lines 16–17): `bun install --frozen-lockfile` then `bun run build`. Frozen-lockfile fails the build on lockfile drift — exactly what you want in CI.
- **The public/ swap** (lines 18–19): `rm -rf public && mv dist public`. GitLab Pages serves whatever is at `public/` in the artifact. Astro's build already copies `public/` source assets into `dist/`, so deleting the source `public/` and renaming `dist/` to `public/` produces the merged superset GitLab Pages needs. Source `public/` assets are not lost — they round-tripped through the build.
- **Artifact** (lines 20–22): `paths: [public]`. The artifact upload is what GitLab Pages consumes.
- **Branch trigger** (lines 23–24): `if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH` — only deploy from the project's default branch (`main`). No deploys from feature branches.

### 1.3 Access-control story

Per `README.md` lines 33–36 (verbatim):

> GitLab project → **Settings → General → Visibility, project features, permissions** → scroll to **Pages** → set to **"Only project members"** → Save.
>
> This is the entire access-control story. Anyone who isn't a project member gets bounced to GitLab login; non-members can't view the site at all.

The pipeline itself has zero auth code. Auth is platform-level.

### 1.4 `package.json` shape that the pipeline assumes

`/Users/juliedavila/Camila/hub/package.json` lines 7–14:

```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check",
  "publish:artifact": "bun scripts/publish.ts",
  "scan": "bun scripts/secret-scan.ts"
}
```

Only `build` is needed by CI. Everything else is local-dev/private tooling.

### 1.5 Note: stale `site:` in Hub's astro.config.mjs

`/Users/juliedavila/Camila/hub/astro.config.mjs` line 5 still reads `site: 'https://camila-hub.netlify.app'` despite Hub being on GitLab Pages since iter-6. This is a known unsanitized leftover — it only affects canonical URLs for SEO, and the Hub is auth-gated and `noindex`, so it's cosmetic. Distillery should set the correct GitLab Pages URL from the start.

---

## 2. Distillery Current State

### 2.1 What's Netlify-specific now

`/Users/juliedavila/Camila/thinker-distillation/netlify.toml` — entire file (15 lines):

```toml
[build]
  command = "bun run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"

[[headers]]
  for = "/*"
  [headers.values]
    X-Robots-Tag = "noindex, nofollow"
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-Content-Type-Options = "nosniff"
```

Three Netlify-specific things:

1. **Build config** (lines 1–6) — directly replaced by `.gitlab-ci.yml`.
2. **NODE_VERSION = "22"** (line 6) — Distillery uses Node 22 (also reflected in `.nvmrc`). The Hub pipeline uses `oven/bun:1` and doesn't pin Node at all because Bun supplies its own runtime. **Risk:** Distillery is on Astro 6.x which `package.json` line 7 declares requires Node ≥22.12.0. Bun's compatibility layer should cover this, but it's the one place the Hub pattern doesn't perfectly transfer — see Open Question 4.
3. **Response headers** (lines 8–14) — `X-Robots-Tag: noindex, nofollow`, `Referrer-Policy`, `X-Content-Type-Options`. GitLab Pages does NOT support response-header injection via `.gitlab-ci.yml` the way Netlify does via `netlify.toml`. See Open Question 1 for mitigation.

### 2.2 What's already compatible with the Hub pattern

- `package.json` has `"build": "astro build"` (line 11) — same script name CI expects.
- `bun.lock` exists at root (80KB) — `bun install --frozen-lockfile` will work.
- `public/` exists with `favicon.ico` + `favicon.svg` — Astro will copy them into `dist/` during build, then the `rm public && mv dist public` swap preserves them.
- `.gitignore` already excludes `dist/`, `.astro/`, `node_modules/`, `.env*` — no leakage risk from the swap.
- `astro.config.mjs` is currently `defineConfig({})` (line 5) — no Netlify adapter to remove. Clean slate.

### 2.3 What's currently in git state

- `git remote -v` shows: `origin https://github.com/juliedavila/thinker-distillation.git`. GitHub, not GitLab.
- Current branch: `main`.
- Working tree dirty: `ISA.md` modified, plus two untracked audit files (`audit-ui-2026-05-26.md`, `research-ui-2026-05-26.md`). Resolve before migration.

---

## 3. Migration Steps

Run from `/Users/juliedavila/Camila/thinker-distillation/`. Sequence matters.

### Step 1 — Clean the working tree

```bash
cd /Users/juliedavila/Camila/thinker-distillation
git status                          # confirm what's dirty
git add ISA.md audit-ui-2026-05-26.md research-ui-2026-05-26.md
git commit -m "Pre-GitLab-migration snapshot"
git push origin main                # leave GitHub in a consistent state before pivoting
```

### Step 2 — Create the GitLab project (manual, in browser)

1. gitlab.com → New project → "Create blank project".
2. Project name: `thinker-distillation` (suggested — matches local dir; alternate `thinker-distillery` if you want the URL to match the brand).
3. Visibility: **decide before this step.** See Open Question 2. Default recommendation: **Public**, since the Distillery is positioned for eventual promotion (per ISA — "live-but-unpromoted" through MVP). Public removes the GitLab-login wall.
4. Do NOT initialize with README. The repo already has one.
5. Note the project URL (e.g., `gitlab.com/juliedavila/thinker-distillation`).

### Step 3 — Add the `.gitlab-ci.yml` (file edit)

Create `/Users/juliedavila/Camila/thinker-distillation/.gitlab-ci.yml` as a verbatim copy of the Hub's file (Section 1.1). No edits needed — the script body is content-agnostic.

### Step 4 — Set the correct `site:` in `astro.config.mjs`

Edit `/Users/juliedavila/Camila/thinker-distillation/astro.config.mjs` from:

```js
export default defineConfig({});
```

to (substitute the actual GitLab Pages URL — see Open Question 3 for what that is):

```js
export default defineConfig({
  site: 'https://juliedavila.gitlab.io/thinker-distillation',
  output: 'static',
  trailingSlash: 'always',
});
```

The `trailingSlash: 'always'` matches Hub's convention (line 7). Astro's `getStaticPaths` defaults align with this and most internal links assume it.

**Critical:** if the project will eventually live at a custom domain (e.g., `thinkerdistillery.com`), set `site:` to the custom domain from the start. Changing it later means rebuilding sitemap and canonical URLs.

### Step 5 — Delete `netlify.toml`

```bash
rm netlify.toml
```

The three response headers it injected (X-Robots-Tag, Referrer-Policy, X-Content-Type-Options) are lost. See Open Question 1 for replacement strategies.

### Step 6 — Pivot the git remote

```bash
git remote rename origin github                                          # preserve the GitHub remote, don't delete
git remote add origin git@gitlab.com:juliedavila/thinker-distillation.git
git remote -v                                                            # verify both remotes present
```

Renaming (not removing) GitHub keeps it as a passive backup mirror in case migration needs to roll back fast. Use `git push github main` to mirror manually.

### Step 7 — Commit and push

```bash
git add .gitlab-ci.yml astro.config.mjs
git rm netlify.toml
git commit -m "Migrate to GitLab Pages: add CI config, set site URL, drop Netlify config"
git push -u origin main
```

The push triggers GitLab CI → Astro build → Pages deploy. Watch the pipeline at `gitlab.com/juliedavila/thinker-distillation/-/pipelines`.

### Step 8 — Configure Pages access (if private)

Only if Step 2 chose **Private** visibility: Settings → General → Visibility → Pages → "Only project members" → Save (per Hub `README.md` lines 33–36).

If Public: nothing to configure — the URL is open.

### Step 9 — (Optional) Wire custom domain

Settings → Pages → New Domain → enter custom domain (e.g., `thinkerdistillery.com`) → GitLab issues a verification TXT record + Let's Encrypt cert. Then DNS at registrar:
- `CNAME` record at root or subdomain → `juliedavila.gitlab.io`
- Verification `TXT` record per GitLab instructions

DNS propagation: 5 min to 48 hr. Let's Encrypt cert issuance: usually 1–2 hr after DNS resolves.

---

## 4. Pre-Migration Checklist

Verify before Step 1:

- [ ] GitLab account `juliedavila` confirmed accessible (you can log in and create projects).
- [ ] SSH key for `gitlab.com` already configured (Hub pushes via SSH; confirm `ssh -T git@gitlab.com` returns "Welcome").
- [ ] Decision made on Public vs Private visibility (Open Question 2).
- [ ] Decision made on project slug (`thinker-distillation` vs `thinker-distillery`) — this becomes part of the default Pages URL.
- [ ] Decision made on custom domain — if yes, registrar access confirmed (DNS edit ability).
- [ ] Local `git status` clean (Step 1 of migration handles this).
- [ ] Local build passes: `bun run build` → check `dist/` populates without errors.
- [ ] Netlify deploy confirmed dead or rate-limited (current state, but worth re-checking — sometimes credits reset).
- [ ] Any external links to `thinkerdistillery.netlify.app` inventoried — they all break unless you wire a redirect (Netlify will still serve the old URL until the project is deleted; see Rollback).
- [ ] GitHub remote still works as backup (`git push github main` succeeds).

---

## 5. Post-Migration Verification

Run after Step 7's push completes (~2–5 min for first pipeline):

1. **Pipeline status.** gitlab.com → project → CI/CD → Pipelines. Most recent pipeline should be green. If red, the job log shows the failing stage (`bun install` vs `bun run build` vs the `mv` step).
2. **Pages URL resolves.** Visit `https://juliedavila.gitlab.io/thinker-distillation/` (or your project slug). Should serve the index page. If you set Public visibility, no login wall; Private, login wall first.
3. **Sample routes return 200.**
   - `/thinkers/komoroske/` (long-read tier)
   - `/thinkers/fowler/`
   - `/concepts/coordination-headwind/`
   - `/` (roster)
   - `/favicon.ico`
4. **Internal links work.** Click from roster → thinker → concept page → back. No 404s.
5. **No broken assets.** Browser DevTools → Network tab → confirm no 404s on CSS/JS/images. Verify `_astro/` hashed assets load.
6. **Custom domain (if configured).** `dig +short thinkerdistillery.com` returns the CNAME target. `curl -I https://thinkerdistillery.com/` returns 200 with valid Let's Encrypt cert.
7. **Header check.** `curl -I https://juliedavila.gitlab.io/thinker-distillation/` — confirm what GitLab Pages does and doesn't send by default. Note absence of `X-Robots-Tag` (lost from Netlify) — address per Open Question 1.
8. **Search-engine indexing posture.** If the site is unpromoted (per ISA), confirm `robots.txt` blocks indexing OR meta `noindex` is set on every page. Without the Netlify `X-Robots-Tag` header, this is now load-bearing.

---

## 6. Rollback Plan

If the GitLab build fails repeatedly or the deploy is unusable:

**Fast rollback (back to Netlify, if credits replenish):**

1. `git checkout main`
2. `git revert <migration-commit-sha>` — restores `netlify.toml`, removes `.gitlab-ci.yml`, reverts `astro.config.mjs`.
3. `git push github main` — Netlify auto-deploys from GitHub.
4. Verify `thinkerdistillery.netlify.app` returns 200 (assumes Netlify credits / billing addressed separately).

**Partial rollback (keep GitLab, restore GitHub mirror):**

1. Keep GitLab as new source of truth.
2. Push to GitHub mirror: `git push github main`.
3. Disable Netlify auto-deploy in Netlify dashboard (Site Settings → Build & Deploy → Stop builds) — prevents the dead deploy from consuming credits when they replenish.

**Nuclear (abandon GitLab, switch to a different host):**

Candidates if both Netlify and GitLab Pages fail: Cloudflare Pages (free, Bun build supported), Vercel (free tier, well-tested Astro support), or GitHub Pages (requires `.github/workflows/` action, no Bun first-class but workable with `oven-sh/setup-bun@v1`).

Pre-stage: keep `netlify.toml` and `.gitlab-ci.yml` and add platform-specific config side-by-side during migration. Don't delete the loser until the winner is verified live for 48 hr.

---

## 7. Open Questions for Julie

1. **Response headers — replace or skip?** Netlify injected `X-Robots-Tag: noindex, nofollow`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff` on every response. GitLab Pages does not support custom response headers in `.gitlab-ci.yml`. Options: (a) accept the loss and rely on `<meta name="robots" content="noindex">` in `<head>` for indexing posture; (b) put Cloudflare in front of GitLab Pages and inject headers at the Worker layer; (c) wait until promotion and drop `noindex` anyway. Recommendation: (a) for now — Hub gets away with this because it's auth-gated; Distillery is currently obscurity-gated, so meta-level `noindex` is sufficient.

2. **Public or Private visibility?** Hub is Private + "Only project members" — that's the entire access story. Distillery is positioned as "live-but-unpromoted" (per ISA) — meaning publicly accessible but not advertised. Public matches that posture and avoids the GitLab-login wall. Private adds friction (anyone Julie wants to share with needs a GitLab account + project invite). Recommendation: **Public** unless you want the wall.

3. **Pages URL — what's the actual slug?** Default GitLab Pages URL format is `https://<namespace>.gitlab.io/<project>`. For namespace `juliedavila` and project `thinker-distillation`, URL is `https://juliedavila.gitlab.io/thinker-distillation/`. If you'd rather have `https://juliedavila.gitlab.io/distillery/`, name the project `distillery`. If you'd rather have `https://juliedavila.gitlab.io/` as root (no project prefix), name the project literally `juliedavila.gitlab.io` (special GitLab convention). Custom domain bypasses all of this.

4. **Bun container vs Node — does Astro 6.x + Node ≥22.12.0 requirement break?** Hub is on Astro 4.x and uses `oven/bun:1`. Distillery is on Astro 6.x and `package.json` declares `"engines": { "node": ">=22.12.0" }`. Bun ≥1.1 ships its own Node-compat runtime that should satisfy this, but it's not the exact same code path as native Node 22. **Mitigation:** if `bun run build` fails on Astro 6.x in the `oven/bun:1` container, switch the image to `node:22` and prepend `npm install -g bun@latest` before the install step. Or switch to native Node: replace lines 16–17 with `npm ci && npm run build`. (You'd then need a `package-lock.json` or to use `bun install` without `--frozen-lockfile`.)

5. **Custom domain — `thinkerdistillery.com` or stay on `gitlab.io`?** Hub doesn't use a custom domain. If you've already pre-purchased `thinkerdistillery.com` or similar, configure during Step 9. If not, decide whether to register one before promotion. Cost: ~$12–15/yr at most registrars.

6. **Old Netlify deploy — delete, archive, or leave dead?** While `thinkerdistillery.netlify.app` exists, it returns 503. External references to that URL break. Options: (a) leave dead (cheapest, breaks links); (b) delete the Netlify site (frees the subdomain — someone else could claim it); (c) restore Netlify minimally to serve a one-page redirect to the new URL (costs build credits). Recommendation: (c) once GitLab is verified — point old URL to new for ~30 days, then delete.

7. **Mirror to GitHub or break the link?** Hub broke the GitHub link entirely (`git remote remove origin` per Hub README line 24). The Step 6 plan above instead *renames* GitHub remote to preserve it as a passive backup. Decision: do you want GitHub fully gone, or kept as a non-default mirror?

8. **Auto-commit hook compatibility.** `~/Camila` is in `checkpoint-repos.txt` per the project CLAUDE.md, meaning ISC `[ ]→[x]` transitions auto-commit. The Distillery sits at `~/Camila/thinker-distillation/` — confirm checkpoint behavior survives the remote pivot. Likely yes (it commits to whatever remote `origin` points at), but worth a smoke-test on the first ISC after migration.

---

*End of plan. No actions taken. Open Questions block migration until Julie answers.*
