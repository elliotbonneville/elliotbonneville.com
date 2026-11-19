import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright-core';
import { typesetProseQuotes } from '../bin/prose-quotes.mjs';

test('quotes face into prose across inline markup and survive a second build', () => {
  const source = `<p>because &quot;your <em>OS</em> spent millions on typography,&quot; and then she said: "<a href="/?q=&quot;yes&quot;">'Évidemment!'</a>"</p>`;
  const expected = `<p>because “your <em>OS</em> spent millions on typography,” and then she said: “<a href="/?q=&quot;yes&quot;">‘Évidemment!’</a>”</p>`;
  assert.equal(typesetProseQuotes(source), expected);
  assert.equal(typesetProseQuotes(expected), expected);
});

test('literal examples, existing curly quotes, measurements and apostrophes keep their meaning', () => {
  const literal = `<code data-value="'">"don't"</code>`;
  const pre = `<pre><code>say("it's 6' 2\\"");</code></pre>`;
  const source = `<p>"${literal}" in the '90s wasn't 6' 2". 'Twas “quoted.”</p>${pre}`;
  const expected = `<p>“${literal}” in the ’90s wasn’t 6' 2". ’Twas “quoted.”</p>${pre}`;
  assert.equal(typesetProseQuotes(source), expected);
});

test('each manuscript webfont draws opening and closing quotation marks in opposite directions', async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    for (const face of ['StonebrookQuill-Plain', 'StonebrookQuill-Italic', 'StonebrookQuill-Roman', 'RowanbeckReed-Uncial']) {
      const bytes = await readFile(new URL(`../scribed/fonts/${face}.woff2`, import.meta.url));
      const weights = await page.evaluate(async ({ face, data }) => {
        document.fonts.add(await new FontFace(face, `url(data:font/woff2;base64,${data})`).load());
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 196;
        const ctx = canvas.getContext('2d');
        ctx.font = `144px "${face}"`;
        // The heavy ends of the opening marks sit below their tapered tips.
        return [...'“”‘’'].map(mark => {
          ctx.clearRect(0, 0, 196, 196);
          ctx.fillText(mark, 40, 160);
          const { data } = ctx.getImageData(0, 0, 196, 196);
          const rows = new Array(196).fill(0);
          for (let i = 3; i < data.length; i += 4) rows[Math.floor(i / (196 * 4))] += data[i];
          const middle = (rows.findIndex(v => v > 200) + rows.findLastIndex(v => v > 200)) / 2;
          const total = rows.reduce((a, b) => a + b, 0);
          return rows.reduce((sum, ink, y) => sum + Math.sign(y - middle) * ink, 0) / total;
        });
      }, { face, data: bytes.toString('base64') });
      assert.ok(weights[0] - weights[1] > .1 && weights[2] - weights[3] > .07, face);
    }
  } finally { await browser.close(); }
});
