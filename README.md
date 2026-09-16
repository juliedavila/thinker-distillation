# Thinker Distillery

A static site of editorial readings of practitioners whose vocabulary the software, operations, and security fields now use to think. Each thinker gets one page covering their central argument, the named concepts they gave the field, where those concepts break, and who they connect to. Concept pages cover a single idea held by several thinkers. The curator is Julie Davila.

The site is private. It is published to GitLab Pages at https://thinker-distillery-97a9ca.gitlab.io/ and only members of the GitLab project can view it. Pages also carry a `noindex,nofollow` robots tag.

## Where to read next

- `SCHEMA.md`: the content model and editorial rules. Read this before adding or editing a page.
- `src/content.config.ts`: the enforced schema. When it disagrees with `SCHEMA.md`, the code is correct.
- `ISA.md`: the project log and decision history, written for maintainers.

## Current content

Thinkers (`src/content/thinkers/`): John Allspaw, Fred Brooks, Ray Dalio, Sidney Dekker, Nicole Forsgren, Martin Fowler, Alex Komoroske, David Woods.

Concepts (`src/content/concepts/`): Adaptive Capacity, Coordination Headwind.

Long reads (`src/content/long-read/`): Alex Komoroske (chapter 1) and Martin Fowler (preface).

Files whose names start with `_` are disabled drafts. The build skips them.

## Stack

- Astro 6 with content collections, building a fully static site (`output: 'static'`)
- Bun for installing, building, and running scripts
- Node 22.12 or newer, required by Astro 6 (`.nvmrc` pins 22)
- GitLab CI and GitLab Pages for deployment

## Commands

```bash
bun install        # install dependencies
bun run dev        # local dev server at http://localhost:4321
bun run build      # static build into ./dist/
bun run preview    # serve the built site locally
```

If your default Node is older than 22, run `nvm use`, or prefix commands with `PATH="/opt/homebrew/bin:$PATH"` to pick up a newer Homebrew Node.

Scripts for the Reading Protocol, the review process for a page's Editorial Reading section (see `SCHEMA.md`, section 7):

```bash
bun scripts/grounding-pack.ts <thinker-slug>   # writes _working/<slug>/grounding-pack.md
bun scripts/reading-gates.ts <thinker-slug>    # prose and citation checks; exits 0 on pass
```

## Deployment

`.gitlab-ci.yml` runs one job, `pages`, on every commit to the default branch. It uses the `oven/bun:1` image, runs `bun install --frozen-lockfile` and `bun run build`, then moves `dist/` to `public/`, the folder GitLab Pages serves. Branches and merge requests do not deploy. Access control is a GitLab project setting (Pages visible to project members only); the pipeline plays no part in it.

The GitLab project is `gitlab.com/juliedavila/thinker-distillery`. The repo also has a `github` remote, which is not used for deployment.

## Layout

```
src/
  content/
    thinkers/<slug>.md            one file per thinker, almost all frontmatter
    concepts/<slug>.md            one file per concept page
    long-read/<slug>/<nn-name>.md one file per long-read chapter
  content.config.ts               schema for all three collections
  pages/
    index.astro                   thinker roster (home page)
    thinkers/[slug].astro         thinker page
    thinkers/[slug]/long-read/    long-read index and chapter pages
    concepts/index.astro          concept roster
    concepts/[slug].astro         concept page
  layouts/Base.astro              site header, footer, and tagline
  components/Monogram.astro       placeholder portrait
  lib/graph.ts                    build-time frame holders and concept-page lookup
  styles/global.css               site styles
scripts/                          Reading Protocol tools (run with bun)
_working/<slug>/                  working notes, grounding packs, and claims maps
public/                           static files (favicons)
```

## Adding a thinker

1. Confirm the person clears the inclusion filter in `SCHEMA.md` (section 2).
2. Create `src/content/thinkers/<slug>.md`. The file name must match the `slug` field. Use `src/content/thinkers/nicole-forsgren.md` as the reference for current fields.
3. Fill every required field. The build fails if a thinker has fewer than 2 limits or fewer than 3 adjacent thinkers, or lacks an Editorial Reading.
4. Write the Editorial Reading through the Reading Protocol (`SCHEMA.md`, section 7) and follow the writing rules (section 8).
5. Run the byline test: make sure no attribution on the page implies the thinker originated something they did not.
6. Run `bun run build`, then open a merge request.

## Known gaps

The About page's two sections in Julie's own words (why the site exists, and its stance toward the thinkers) are empty slots until she writes them. Rules that still need human judgment are listed in `SCHEMA.md` section 10.
