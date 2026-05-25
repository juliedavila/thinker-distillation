# thinker-distillation

Per-practitioner readings of the people whose vocabularies the field now uses to think.

> Private-by-obscurity until promotion. Customer-zero is Julie. About page deferred to a before-promotion gate.

## Status

v1 in progress. Schema locked 2026-05-25 (TEI pattern: core schema + Frame-level attribution + named optional type-extensions). v1 roster: Komoroske (rendered), Fowler (next), Dalio (after).

Project ISA at `ISA.md`. Locked schema spec at `SCHEMA.md`. Both are the system of record.

## Stack

- Astro 6.x (Content Collections, static output)
- Netlify (build via `bun run build`, publish `dist/`)
- Bun for dev tooling
- Node ≥22 (see `.nvmrc`)

## Commands

```bash
bun install         # one-time
bun run dev         # localhost:4321
bun run build       # static build to ./dist/
bun run preview     # preview built site
```

Node ≥v22 is required by Astro 6.x. If `nvm` defaults to v20, prefix commands with `PATH="/opt/homebrew/bin:$PATH"` to pick up system node v26, or `nvm use` to honor `.nvmrc`.

## Layout

```
src/
  content/
    thinkers/<slug>.md          # one frontmatter-only file per thinker
  content.config.ts             # Zod schema enforcing SCHEMA.md
  pages/
    index.astro                 # roster
    thinkers/[slug].astro       # rendered thinker page (§1–§10)
  layouts/Base.astro            # site chrome
  lib/graph.ts                  # also_held_by build-time computation
  styles/global.css             # four-lane visual treatments
```

## Adding a thinker

Create `src/content/thinkers/<slug>.md` with the full frontmatter shape required by `src/content.config.ts`. Schema enforces ≥4 Named Frames, ≥2 limits, ≥3 adjacent thinkers — these are not stylistic suggestions, they are gates. Read the Komoroske page as the worked reference.

## Discipline

- Node-type uniformity is invariant. Only `Thinker` and `Frame` as primary graph nodes.
- Inclusion filter is backstage. Never render `inclusion_rationale`.
- Casey-test before publishing — if the byline would read as a false claim, fix the schema or move the subject to a concept page.
