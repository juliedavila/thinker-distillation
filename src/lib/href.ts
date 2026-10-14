// Prefixes a root-relative path with the configured base, so links work at a domain root
// (GitLab Pages) and under a repository path (GitHub Pages) alike.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const href = (path: string): string => `${BASE}${path}`;
