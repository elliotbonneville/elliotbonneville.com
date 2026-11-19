import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import test from 'node:test';
import { chromium } from 'playwright-core';

test('the loupe bends a straight line at the rim and separates its colors off axis', async () => {
  const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
  try {
    const page = await browser.newPage();
    const optics = await readFile(new URL('../scribed/pkg/loupe.js', import.meta.url), 'utf8');
    await page.route('https://loupe.test/**', route => route.request().url().endsWith('/loupe.js')
      ? route.fulfill({ contentType:'text/javascript', body:optics })
      : route.fulfill({ contentType:'text/html', body:'<canvas width="512" height="512"></canvas>' }));
    await page.goto('https://loupe.test/');
    const positions = await page.evaluate(async () => {
      const { createLoupe } = await import('/loupe.js');
      const glass = createLoupe();
      const gl = document.querySelector('canvas').getContext('webgl2', {antialias:false});
      const size = gl.drawingBufferWidth, radius = size / 2;
      gl.clearColor(.9,.9,.9,1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.SCISSOR_TEST);
      gl.clearColor(.06,.06,.06,1);
      for (const offset of [0,.45]) {
        gl.scissor(Math.round(radius*(1+offset))-4, 0, 8, size);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
      gl.disable(gl.SCISSOR_TEST);
      glass.draw(gl, size, -.8, 1);
      function centerOfStroke(y, xMin, xMax) {
        const row = new Uint8Array(4*size);
        gl.readPixels(0, Math.floor(radius*(1+y)), size, 1, gl.RGBA, gl.UNSIGNED_BYTE, row);
        return [0,1,2].map(channel => {
          let sum = 0, mass = 0;
          for (let x = Math.ceil(radius*(1+xMin)); x < radius*(1+xMax); x++) {
            const weight = Math.max(0, 205-row[4*x+channel]);
            sum += weight * (x+.5-radius)/radius;
            mass += weight;
          }
          return sum/mass;
        });
      }
      const center = centerOfStroke(0,-.1,.1);
      const mid = centerOfStroke(0,.35,.65);
      const rim = centerOfStroke(.71,.35,.68);
      const opposite = centerOfStroke(-.71,.35,.68);
      glass.release();
      return {center, mid, rim, opposite, error:gl.getError()};
    });
    const {center, mid, rim, opposite, error} = positions;
    assert.equal(error, 0);
    assert.ok(center.every(x => Math.abs(x) < .004), 'axial wavelengths must coincide');
    assert.ok(rim[1] - mid[1] > .03, 'the off-axis straight stroke must bow outward');
    assert.ok(rim[2] - rim[0] > .012, 'the blue and red stroke positions must separate');
    assert.ok(Math.abs(opposite[1] - rim[1]) < .008, 'the glass must be radially symmetric');
  } finally {
    await browser.close();
  }
});

test('moving the loupe preserves the red I on the rendering-engine post', async () => {
  const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
  try {
    const page = await browser.newPage({viewport:{width:390,height:844}, deviceScaleFactor:2});
    const root = new URL('../scribed/', import.meta.url);
    const types = {'.html':'text/html','.js':'text/javascript','.wasm':'application/wasm',
      '.woff2':'font/woff2','.ttf':'font/ttf'};
    await page.route('**/*', async route => {
      const url = new URL(route.request().url());
      if (url.origin !== 'https://loupe.test') return route.abort();
      const name = url.pathname.slice(1) + (url.pathname.endsWith('/') ? 'index.html' : '');
      await route.fulfill({body:await readFile(new URL(name,root)),
        contentType:types[extname(name)] || 'application/octet-stream'});
    });
    await page.goto('https://loupe.test/a-rendering-engine-that-happens-to-have-text/?desk=off');
    await page.waitForFunction(() => document.querySelector('.first.ink') &&
      document.documentElement.classList.contains('can-inspect'), null, {timeout:60000});
    const result = await page.evaluate(() => {
      const cap = document.querySelector('.first .initial').getBoundingClientRect();
      const x = cap.left + cap.width/2, y = cap.top + cap.height/2;
      const size = 336, span = 84;
      function capture(dx, dy) {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!window.scriptorium.inspect_ink(ctx,x+dx,y+dy,span)) throw Error('Ink unavailable');
        return ctx.getImageData(0,0,size,size).data;
      }
      const before = capture(0,0), after = capture(5.25,4.25);
      const dx = 5.25*size/span, dy = 4.25*size/span;
      let red = 0, changed = 0;
      for (let row = dy+2; row < size-2; row++) for (let col = dx+2; col < size-2; col++) {
        const i = 4*(row*size+col), j = 4*((row-dy)*size+col-dx);
        if (before[i] <= Math.max(before[i+1],before[i+2])+38) continue;
        red++;
        if ([0,1,2].some(ch => Math.abs(before[i+ch]-after[j+ch]) > 1)) changed++;
      }
      return {red, changed};
    });
    assert.ok(result.red > 1000);
    assert.equal(result.changed, 0, 'moving the lens must sample the same pigment at a given spot');
  } finally {
    await browser.close();
  }
});
