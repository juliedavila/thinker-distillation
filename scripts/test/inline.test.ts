import { expect, test } from 'bun:test';
import { inline } from '../../src/lib/inline';

test('renders a *title* as italics and a `name` as code', () => {
  expect(inline("Read Beck's *Extreme Programming Explained*")).toBe('Read Beck&#39;s <em>Extreme Programming Explained</em>');
  expect(inline('The bliki entry `CodeSmell`')).toBe('The bliki entry <code>CodeSmell</code>');
});

test('escapes markup, so a field cannot inject any', () => {
  expect(inline('<script>x</script> & "q"')).toBe('&lt;script&gt;x&lt;/script&gt; &amp; &quot;q&quot;');
});

test('leaves a lone asterisk alone', () => {
  expect(inline('a * b')).toBe('a * b');
});
