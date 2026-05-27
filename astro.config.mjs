// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://juliedavila.gitlab.io/thinker-distillery',
  output: 'static',
  trailingSlash: 'always',
});
