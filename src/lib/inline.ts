// Frontmatter prose marks titles the markdown way, as in "Read Beck's *Extreme Programming
// Explained*", but templates print frontmatter as plain text, so 283 spans across 27 pages showed
// their asterisks to the reader (counted 2026-10-15), and Fowler's bliki entry names showed their
// backticks. This renders those two marks, *title* as italics and `name` as code, and escapes
// everything else, so a field cannot inject markup by accident.
const ESC: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export const inline = (text: string): string =>
  text.replace(/[&<>"']/g, (c) => ESC[c]).replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>');
