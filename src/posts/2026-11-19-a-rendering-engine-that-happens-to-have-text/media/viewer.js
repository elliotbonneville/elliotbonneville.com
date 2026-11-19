// A viewer for this post's pictures. Each picture in the post is a link to its full-size file;
// this opens that file over the page instead: fitted to the screen at first, then as close as
// you like (wheel or pinch, double-click or 1 for actual pixels, 0 to fit again), dragged about,
// and paged with the arrow keys or a swipe. Escape closes it. Without this script the links
// simply open the full-size files.
//
// The picture is sized by layout (its width and height), not by a CSS scale, so the browser
// resamples it from the full-size file at every zoom and it stays sharp.
(() => {
  const links = [...document.querySelectorAll('figure.pl a[data-w]')];
  if (!links.length) return;

  const style = document.createElement('style');
  style.textContent = `
.plv{position:fixed;inset:0;z-index:20;display:none;background:rgba(20,13,10,.96);touch-action:none;overscroll-behavior:contain;user-select:none;-webkit-user-select:none}
.plv.on{display:block}
.plv-img{position:absolute;left:0;top:0;max-width:none;transform-origin:0 0;cursor:grab;image-rendering:auto;box-shadow:0 2px 24px rgba(0,0,0,.5)}
.plv.drag .plv-img{cursor:grabbing}
.plv button{position:absolute;z-index:1;display:grid;place-items:center;width:44px;height:44px;padding:0;border:0;border-radius:50%;background:rgba(40,28,21,.72);color:#f1e6d2;font:22px/1 Georgia,serif;cursor:pointer}
.plv button:hover{background:rgba(70,50,38,.9)}
.plv button:focus-visible{outline:2px solid #e9dfc4;outline-offset:2px}
.plv-close{top:max(12px,env(safe-area-inset-top,0px));right:max(12px,env(safe-area-inset-right,0px))}
.plv-prev,.plv-next{top:50%;margin-top:-22px}
.plv-prev{left:max(12px,env(safe-area-inset-left,0px))}
.plv-next{right:max(12px,env(safe-area-inset-right,0px))}
.plv-bar{position:absolute;left:0;right:0;bottom:0;z-index:1;display:flex;gap:16px;align-items:baseline;padding:10px max(16px,env(safe-area-inset-right,0px)) max(12px,env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px));background:linear-gradient(transparent,rgba(20,13,10,.85) 40%);color:#eadfca;font:italic 16px/1.35 "Stonebrook",Georgia,serif;pointer-events:none}
.plv-cap{flex:1;min-width:0;max-width:70ch}
.plv-meta{font:13px/1 ui-monospace,"SF Mono",Menlo,monospace;font-style:normal;color:#b9a892;white-space:nowrap}
@media (prefers-reduced-motion:no-preference){.plv-img.ease{transition:left .18s ease-out,top .18s ease-out,width .18s ease-out,height .18s ease-out}}
`;
  document.head.appendChild(style);

  const box = document.createElement('div');
  box.className = 'plv';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Picture viewer');
  box.innerHTML = '<img class="plv-img" alt="" draggable="false"><button type="button" class="plv-close" aria-label="Close">×</button>'
    + '<button type="button" class="plv-prev" aria-label="Previous picture">‹</button><button type="button" class="plv-next" aria-label="Next picture">›</button>'
    + '<div class="plv-bar"><span class="plv-cap"></span><span class="plv-meta"></span></div>';
  document.body.appendChild(box);
  const img = box.querySelector('.plv-img'), cap = box.querySelector('.plv-cap'), meta = box.querySelector('.plv-meta');

  let at = -1, back = null;
  // the picture's size at actual pixels (CSS px), the fitted scale, the scale and offset shown
  let bw = 1, bh = 1, fit = 1, s = 1, x = 0, y = 0;
  const dpr = () => window.devicePixelRatio || 1;
  const view = () => [box.clientWidth, box.clientHeight];

  function draw(ease) {
    const [vw, vh] = view();
    const w = bw * s, h = bh * s;
    // a picture smaller than the screen stays centred; a larger one may not leave a gap
    x = w <= vw ? (vw - w) / 2 : Math.min(0, Math.max(vw - w, x));
    y = h <= vh ? (vh - h) / 2 : Math.min(0, Math.max(vh - h, y));
    img.classList.toggle('ease', !!ease);
    img.style.width = w + 'px'; img.style.height = h + 'px';
    img.style.left = x + 'px'; img.style.top = y + 'px';
    const pct = Math.round(s * 100);
    meta.textContent = `${at + 1} / ${links.length}  ·  ${Math.abs(s - fit) < 1e-3 ? 'fitted' : pct + '% of actual pixels'}`;
  }

  function zoomAt(ns, px, py, ease) {
    ns = Math.min(Math.max(ns, fit), Math.max(fit, 1) * 8);
    x = px - (px - x) * (ns / s); y = py - (py - y) * (ns / s);
    s = ns; draw(ease);
  }

  function refit() {
    const [vw, vh] = view();
    fit = Math.min((vw * 0.94) / bw, (vh - 64) * 0.94 / bh);
    s = fit; draw();
  }

  function show(i) {
    at = (i + links.length) % links.length;
    const a = links[at], small = a.querySelector('img');
    bw = +a.dataset.w / dpr(); bh = +a.dataset.h / dpr();
    // the picture already on the page stands in until the full-size file has come
    img.src = small.currentSrc || small.src;
    img.alt = small.alt;
    cap.textContent = small.alt;
    const full = new Image();
    full.decoding = 'async';
    full.onload = () => { if (links[at] === a) img.src = full.src; };
    full.src = a.href;
    refit();
    for (const k of [at + 1, at - 1]) { const n = new Image(); n.src = links[(k + links.length) % links.length].href; }
  }

  function open(i, from) {
    back = from;
    box.classList.add('on');
    show(i);
    box.querySelector('.plv-close').focus({ preventScroll: true });
  }
  function close() {
    box.classList.remove('on');
    img.removeAttribute('src');
    back?.focus({ preventScroll: true });
  }

  links.forEach((a, i) => a.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault(); open(i, a);
  }));
  // a caption's plate number ("Plate XII", a link to its plate) opens that plate's first picture
  document.addEventListener('click', (e) => {
    const a = e.target.closest?.('a[href^="#plate-"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const first = document.getElementById(a.getAttribute('href').slice(1))?.querySelector('a[data-w]');
    if (!first) return;
    e.preventDefault(); open(links.indexOf(first), a);
  });
  box.querySelector('.plv-close').addEventListener('click', close);
  box.querySelector('.plv-prev').addEventListener('click', () => show(at - 1));
  box.querySelector('.plv-next').addEventListener('click', () => show(at + 1));
  window.addEventListener('resize', () => { if (box.classList.contains('on')) refit(); });

  box.addEventListener('wheel', (e) => {
    e.preventDefault();
    zoomAt(s * Math.exp(-e.deltaY * (e.deltaMode ? 0.05 : 0.0018)), e.clientX, e.clientY);
  }, { passive: false });

  box.addEventListener('dblclick', (e) => {
    if (e.target !== img) return;
    const actual = Math.max(1, fit * 1.5);
    zoomAt(Math.abs(s - fit) < 1e-3 ? actual : fit, e.clientX, e.clientY, true);
  });

  // dragging, pinching, and a swipe to page when fitted
  const pts = new Map();
  let pinch = null, swipe = null;
  box.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    if (e.target === box && e.pointerType === 'mouse') { close(); return; }
    box.setPointerCapture(e.pointerId);
    pts.set(e.pointerId, [e.clientX, e.clientY]);
    box.classList.add('drag');
    if (pts.size === 2) {
      const [[ax, ay], [cx, cy]] = [...pts.values()];
      pinch = { d: Math.hypot(ax - cx, ay - cy), s };
    } else { swipe = { x0: e.clientX, y0: e.clientY, at: s }; }
  });
  box.addEventListener('pointermove', (e) => {
    const p = pts.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p[0], dy = e.clientY - p[1];
    pts.set(e.pointerId, [e.clientX, e.clientY]);
    if (pts.size === 2 && pinch) {
      const [[ax, ay], [cx, cy]] = [...pts.values()];
      zoomAt(pinch.s * Math.hypot(ax - cx, ay - cy) / pinch.d, (ax + cx) / 2, (ay + cy) / 2);
    } else if (pts.size === 1) { x += dx; y += dy; draw(); }
  });
  const up = (e) => {
    if (!pts.delete(e.pointerId)) return;
    if (pts.size < 2) pinch = null;
    if (!pts.size) {
      box.classList.remove('drag');
      if (swipe && Math.abs(swipe.at - fit) < 1e-3 && Math.abs(s - fit) < 1e-3) {
        const dx = e.clientX - swipe.x0, dy = e.clientY - swipe.y0;
        if (Math.abs(dx) > 60 && Math.abs(dx) > 1.5 * Math.abs(dy)) show(at + (dx < 0 ? 1 : -1));
      }
      swipe = null;
    }
  };
  box.addEventListener('pointerup', up);
  box.addEventListener('pointercancel', up);

  window.addEventListener('keydown', (e) => {
    if (!box.classList.contains('on')) return;
    const [vw, vh] = view();
    const act = {
      Escape: close, ArrowRight: () => show(at + 1), ArrowLeft: () => show(at - 1),
      '0': () => zoomAt(fit, vw / 2, vh / 2, true), '1': () => zoomAt(1, vw / 2, vh / 2, true),
      '+': () => zoomAt(s * 1.4, vw / 2, vh / 2, true), '=': () => zoomAt(s * 1.4, vw / 2, vh / 2, true),
      '-': () => zoomAt(s / 1.4, vw / 2, vh / 2, true),
      ' ': () => {}, PageDown: () => {}, PageUp: () => {}, ArrowUp: () => {}, ArrowDown: () => {},
    }[e.key];
    if (act) { e.preventDefault(); e.stopImmediatePropagation(); act(); }
    else if (e.key === 'Tab') {
      // keep focus among the viewer's own buttons
      const bs = [...box.querySelectorAll('button')];
      const k = bs.indexOf(document.activeElement);
      e.preventDefault();
      bs[(k + (e.shiftKey ? -1 : 1) + bs.length) % bs.length].focus();
    }
  }, true);
})();
