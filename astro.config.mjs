// @ts-check
import { defineConfig } from 'astro/config';

// The site builds for two hosts. GitLab Pages serves it at a domain root, so `base` defaults to
// '/'. GitHub Pages serves it under the repository name, and its workflow sets both variables.
// Every internal link goes through src/lib/href.ts so it picks up the base.
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://thinker-distillery-97a9ca.gitlab.io',
  base: process.env.SITE_BASE ?? '/',
  output: 'static',
  trailingSlash: 'always',
});
