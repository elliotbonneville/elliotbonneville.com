import {existsSync} from 'node:fs';
import {readFile, readdir, rename, writeFile} from 'node:fs/promises';
import {extname, join, resolve, sep} from 'node:path';
import {pathToFileURL} from 'node:url';
import {typesetProseQuotes} from './prose-quotes.mjs';

const origin = 'https://manuscript.invalid';
const mime = {'.html':'text/html','.js':'text/javascript','.wasm':'application/wasm','.bin':'application/octet-stream','.woff2':'font/woff2','.ttf':'font/ttf','.webp':'image/webp','.jpg':'image/jpeg'};
// The original Markdown-only build also works before a manuscript edition exists.
const plainShell = `<!doctype html><html><head><meta charset="utf-8"><style>
body{background:repeating-linear-gradient(2deg,#4b3023 0 2px,#503427 3px 7px,#493024 8px 10px);color:#32261b;font-family:Georgia,serif}
.scene{display:flow-root}.leaf{background:radial-gradient(ellipse at 35% 30%,#f8efd9,#e6d8ba);box-shadow:2px 4px 9px #26180e99}
header{margin:0}.date{color:#953c2e;font-style:italic;margin:0}h1{font-weight:normal}.pen{border:0;border-top:1px solid #9a543d}
.initial{float:left;width:1em;height:1em;box-sizing:border-box;text-align:center;color:#ac3e2c;background:#bdcccb;box-shadow:inset 0 0 0 2px #64573f,inset 0 0 0 5px #d7d8be,inset 0 0 0 6px #64573f}
.lead{font-variant:small-caps}.tail{display:none}
</style></head><body><div class="scene"><main class="leaf"><article><header><h1></h1><hr class="pen"></header><p class="first"><span class="initial"></span></p><hr class="tail"></article></main></div></body></html>`;
const cardStyle = `
:root{--size:33px;--lead:43px}
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
.scene{min-height:630px;height:630px}
.leaf,.leaf.with-notes{box-sizing:border-box;width:1040px;max-width:none;height:566px;margin:32px auto;padding:43px 70px 40px 91px}
.leaf article,.with-notes article{display:block;position:relative;height:100%;padding:0}
.date{font-size:24px;line-height:34px}
h1{font-size:var(--headline,54px);line-height:1.12;margin:8px 0 0}
header hr.pen{width:38%;margin:20px 0 24px}
p.first{font-size:33px;line-height:43px;margin:0}
p.first .initial{font-size:132px;line-height:106px;padding:15px 0 11px;margin:4px 17px 0 0}
.leaf .notes,.end-tools,header .inspect-ink{display:none!important}
hr.tail{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:188px;height:84px;margin:0}
`;

// Runs in the capture browser before the manuscript renderer measures a single word.
function prepareCard({fallback, slug}) {
  window.composeShareCard = () => {
    const leaf = document.querySelector('.leaf');
    const article = leaf.querySelector('article');
    const header = article.querySelector('header');
    const opening = article.querySelector('p.first');
    opening.querySelectorAll('sup').forEach(marker => marker.remove());
    const alternate = fallback && new DOMParser().parseFromString(fallback, 'text/html');
    const source = alternate?.querySelector('article') || alternate?.body || article;
    const title = (source.querySelector('h1')?.textContent || alternate?.title || document.title).trim();
    const date = source.querySelector('header time')?.textContent.trim();
    const text = (alternate ? source.querySelector('p')?.textContent : opening.textContent) || alternate?.querySelector('meta[name="description"]')?.content || title;
    const words = text.trim().split(/\s+/);
    let excerpt = words.shift() || '';
    while (words.length && excerpt.length + words[0].length < 148) excerpt += ' ' + words.shift();
    if (words.length) {
      const sentences = [...new Intl.Segmenter('en',{granularity:'sentence'}).segment(text.trim())];
      const end = sentences.filter(s=>s.index + s.segment.trimEnd().length <= excerpt.length).at(-1);
      excerpt = end && end.index + end.segment.length >= 55
        ? text.trim().slice(0,end.index + end.segment.length).trimEnd()
        : excerpt.replace(/[,;:—-]+$/u,'') + '…';
    }

    const initial = opening.querySelector('.initial');
    const cap = alternate ? excerpt.match(/^[^\p{L}\p{N}]*[\p{L}\p{N}]/u)?.[0] || excerpt[0] : initial.textContent;
    initial.textContent = cap;
    const after = excerpt.slice(cap.length);
    const lead = document.createElement('span');
    lead.className = 'lead';
    lead.textContent = after.match(/^\S*(?:\s+\S+){0,2}/u)?.[0] || '';
    opening.replaceChildren(initial, lead, after.slice(lead.textContent.length));
    opening.className = 'first';
    const byline = document.createElement('p');
    byline.className = 'date';
    byline.textContent = slug ? ['Elliot Bonneville',date].filter(Boolean).join('  ·  ') : 'elliotbonneville.com';
    header.querySelector('h1').textContent = title;
    header.replaceChildren(byline, header.querySelector('h1'), header.querySelector('hr.pen'));
    article.style.setProperty('--headline',title.length > 70 ? '44px' : title.length > 53 ? '49px' : '54px');
    article.replaceChildren(header, opening, article.querySelector('hr.tail'));
    leaf.classList.remove('with-notes');
    if (alternate) {
      // An article awaiting its manuscript edition still has its own letter and words.
      // Its cap is set in the uncial face, never borrowed from a different post.
      leaf.removeAttribute('data-ornaments');
      leaf.dataset.seed = String([...title].reduce((n,c)=>(Math.imul(n,31)+c.codePointAt(0))>>>0,17));
    }
  };
}

export async function renderShareCards(directory, slugs, missingOnly = false) {
  const root = resolve(directory);
  const pending = slugs.filter(slug => !missingOnly || !existsSync(join(root,slug,'share.jpg')));
  if (!pending.length) return;
  const {chromium} = await import('playwright-core');
  const executable = [process.env.CARD_BROWSER,chromium.executablePath(),'/usr/bin/google-chrome','/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(file=>file && existsSync(file));
  const browser = await chromium.launch({executablePath:executable, args:['--enable-unsafe-swiftshader']});
  try {
    const home = await readFile(join(root,'index.html'),'utf8');
    const shell = home.includes('data-ornaments=') ? home : plainShell;
    for (const slug of pending) {
      const path = (slug ? '/' + slug : '') + '/';
      const original = typesetProseQuotes(await readFile(join(root,slug,'index.html'),'utf8'));
      const manuscript = original.includes('data-ornaments=');
      const illustrated = manuscript || shell !== plainShell;
      const html = (manuscript ? original : shell)
        .replace('</head>','<style>' + cardStyle + '</style></head>')
        .replace('</main>','</main><script>composeShareCard()</script>');
      const page = await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1,reducedMotion:'reduce'});
      try {
        await page.addInitScript(prepareCard,{fallback:manuscript ? null : original,slug});
        await page.route('**/*',async route => {
          const url = new URL(route.request().url());
          if (url.origin !== origin) return route.abort();
          if (url.pathname === path) return route.fulfill({contentType:'text/html',body:html});
          const file = resolve(root,'.' + decodeURIComponent(url.pathname));
          if (!file.startsWith(root + sep)) return route.abort();
          try { await route.fulfill({contentType:mime[extname(file)] || 'application/octet-stream',body:await readFile(file)}); }
          catch { await route.abort().catch(()=>{}); }
        });
        await page.goto(origin+path,{waitUntil:'domcontentloaded'});
        if (illustrated) {
          await page.waitForFunction(() => document.documentElement.dataset.ready === '1' && document.querySelector('p.first.ink') && document.querySelector('.far.on,.dk.on'),null,{timeout:60000});
        } else {
          await page.evaluate(() => document.fonts.ready);
        }
        if (manuscript) {
          const hasInitial = await page.evaluate(()=>JSON.parse(scriptorium.penwork()).some(([kind])=>kind===0));
          if (!hasInitial) throw new Error('The opening initial failed to render for ' + path);
        }
        const fits = await page.evaluate(() => {
          const tail = document.querySelector('hr.tail').getBoundingClientRect();
          const bottom = tail.height ? tail.top + 8 : document.querySelector('.leaf').getBoundingClientRect().bottom - 20;
          return document.querySelector('p.first').getBoundingClientRect().bottom <= bottom;
        });
        if (!fits) throw new Error('The card excerpt runs into the closing ornament for ' + path);
        const image = await page.screenshot({type:'jpeg',quality:91});
        const file = join(root,slug,'share.jpg');
        const temp = file + '.' + process.pid + '.tmp';
        await writeFile(temp,image);
        await rename(temp,file);
        console.log('Share card:',path);
      } finally { await page.close(); }
    }
  } finally { await browser.close(); }
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const root = resolve(process.argv[2] || 'scribed');
  const dirs = await readdir(root,{withFileTypes:true});
  const slugs = process.argv.length > 3 ? process.argv.slice(3) : ['',...dirs.filter(d=>d.isDirectory() && existsSync(join(root,d.name,'index.html'))).map(d=>d.name)];
  await renderShareCards(root,slugs);
}
