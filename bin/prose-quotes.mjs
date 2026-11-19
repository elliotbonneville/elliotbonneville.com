import { parse, serializeOuter } from 'parse5';

const blocks = new Set('article aside blockquote dd div dt figcaption h1 h2 h3 h4 h5 h6 li main p td th br'.split(' '));
const excluded = new Set('head pre script style svg math textarea template'.split(' '));
const literals = new Set(['code', 'kbd', 'samp']);
const edges = /[\s\p{Ps}\p{Pi}—–:]/u;
const word = /[\p{L}\p{N}]/u;
const elision = /^'(?:\d{2}s?\b|(?:tis|twas|twere|twill|em|til|cause|bout|round|neath)\b|n(?=['’]))/i;

function curlQuotes(text) {
  const chars = text.split('');
  const open = new Set();
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i], before = chars[i - 1] ?? ' ', after = chars[i + 1] ?? ' ';
    if (ch === '“' || ch === '‘') open.add(ch === '“' ? '"' : "'");
    if (ch === '”' || (ch === '’' && !word.test(after))) open.delete(ch === '”' ? '"' : "'");
    if (ch !== '"' && ch !== "'") continue;
    const starts = edges.test(before) && !/\s/.test(after);
    if (ch === "'" && ((word.test(before) && word.test(after)) || (starts && elision.test(text.slice(i))))) {
      chars[i] = '’';
    } else if (starts) {
      chars[i] = ch === '"' ? '“' : '‘';
      open.add(ch);
    } else if (open.has(ch) || !/\d/.test(before)) {
      // An unpaired mark after a number can be a measurement.
      chars[i] = ch === '"' ? '”' : '’';
      open.delete(ch);
    }
  }
  return chars.join('');
}

// Resolve a paragraph at a time so a passage can run through emphasis, a link,
// or inline code. Replace only changed text nodes in the original HTML.
export function typesetProseQuotes(html) {
  const edits = [];
  let run = [];
  function flush() {
    if (!run.length) return;
    const text = run.map(({ node, literal }) => literal ? 'x'.repeat(node.value.length) : node.value).join('');
    if (/['"]/.test(text)) {
      const curled = curlQuotes(text);
      let offset = 0;
      for (const { node, literal } of run) {
        const value = curled.slice(offset, offset + node.value.length);
        offset += node.value.length;
        if (literal || value === node.value) continue;
        node.value = value;
        const { startOffset, endOffset } = node.sourceCodeLocation;
        edits.push([startOffset, endOffset, serializeOuter(node)]);
      }
    }
    run = [];
  }
  function visit(node, literal = false) {
    if (excluded.has(node.tagName)) { flush(); return; }
    const block = blocks.has(node.tagName);
    if (block) flush();
    if (node.nodeName === '#text' && node.sourceCodeLocation) run.push({ node, literal });
    for (const child of node.childNodes ?? []) visit(child, literal || literals.has(node.tagName));
    if (block) flush();
  }
  visit(parse(html, { sourceCodeLocationInfo: true }));
  flush();
  for (const [start, end, value] of edits.reverse()) html = html.slice(0, start) + value + html.slice(end);
  return html;
}
