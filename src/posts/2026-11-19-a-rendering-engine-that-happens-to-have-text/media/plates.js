// The post's pictures on the sheet and on the desk (the look is in plates.css).
//
// On the sheet, each plate sits in a double frame the scribe ruled round the space left for
// it. The frame is drawn here as a broad-edged nib would draw it: each rule is a stroke whose
// width follows its direction against the nib's angle, wanders a little, runs on past the
// corner where the hand overshot, and fades where the pen lifted; each corner ends in a curl.
// (The page's own pen draws the words; this is an imitation of it for the frames alone.)
//
// On a window wide enough to leave room beside the sheet, the pictures of the wood come off
// it and lie on the desk as loose prints, level with the paragraph each belongs to, on
// whichever side is free soonest, never on top of the one before. Their places on the sheet
// close up, and their captions stay there.
(() => {
  const art = document.querySelector('article');
  const leaf = art && (art.closest('.leaf') || art);
  const figs = [...document.querySelectorAll('figure.pl')];
  if (!art || !figs.length) return;
  const desk = figs.filter((f) => f.classList.contains('pl-wood'));
  const root = document.documentElement;
  const SVG = 'http://www.w3.org/2000/svg';

  // ---- a deterministic hand -------------------------------------------------------------
  const hash = (n) => { n = Math.imul(n ^ (n >>> 16), 0x45d9f3b); n = Math.imul(n ^ (n >>> 16), 0x45d9f3b); return ((n ^ (n >>> 16)) >>> 0) / 4294967296; };
  // smooth noise along a stroke: a few waves of no single length, so no rule bows evenly
  const wander = (t, seed) => Math.sin(t * 0.021 + seed * 6.1) * 0.55 + Math.sin(t * 0.057 + seed * 2.3) * 0.3 + Math.sin(t * 0.13 + seed * 4.7) * 0.15;

  const NIB = -0.6;             // the nib's angle, radians
  const WIDE = 1.55, HAIR = 0.4; // stroke width across and along the nib, px

  // one straight rule from a to b as a filled outline: width by direction, wandering, tapering
  function rule(a, b, seed) {
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len, nx = -uy, ny = ux;
    const across = HAIR + (WIDE - HAIR) * Math.abs(Math.sin(Math.atan2(dy, dx) - NIB));
    const n = Math.max(8, Math.ceil(len / 5));
    const L = [], R = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n, s = t * len;
      const off = 0.7 * wander(s, seed);
      // the pen comes down, bears, and lifts: thin at both ends, a little heavier just after it lands
      const press = Math.min(1, t / 0.04, (1 - t) / 0.06) * (0.88 + 0.12 * Math.sin(t * 3.1 + seed)) * (0.9 + 0.2 * hash(seed * 997 + i));
      const w = Math.max(0.18, across * press) / 2;
      const cx = a[0] + ux * s + nx * off, cy = a[1] + uy * s + ny * off;
      L.push([cx + nx * w, cy + ny * w]); R.push([cx - nx * w, cy - ny * w]);
    }
    return 'M' + L.concat(R.reverse()).map((p) => p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join('L') + 'Z';
  }

  // a curl at a corner: a small spiral out of the corner, turning inward, ending in a dot
  function curl(cx, cy, sx, sy, seed) {
    const r0 = 6.5 + 1.5 * hash(seed), turns = 1.15 + 0.2 * hash(seed + 1);
    let d = '';
    const n = 30;
    for (let i = 0; i <= n; i++) {
      const t = i / n, a = Math.PI * 1.25 + t * turns * Math.PI * 2, r = r0 * (1 - 0.72 * t);
      const x = cx + sx * (r0 * 0.9 + Math.cos(a) * r), y = cy + sy * (r0 * 0.9 + Math.sin(a) * r);
      d += (i ? 'L' : 'M') + x.toFixed(2) + ' ' + y.toFixed(2);
    }
    return d;
  }

  function frame(f, i) {
    const box = f.parentElement;
    let svg = box.querySelector(':scope > .pl-frame');
    if (!svg) {
      svg = document.createElementNS(SVG, 'svg');
      svg.setAttribute('class', 'pl-frame');
      svg.setAttribute('aria-hidden', 'true');
      box.prepend(svg);
    }
    const W = box.clientWidth, H = box.clientHeight;
    if (!W || !H) { svg.replaceChildren(); return; }
    const key = W + 'x' + H;
    if (svg.dataset.key === key) return;
    svg.dataset.key = key;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const ink = getComputedStyle(art).getPropertyValue('--ink').trim() || '#2b211a';
    const seed = (i + 1) * 17.13;
    const paths = [];
    for (const [k, inset] of [[0, 3.5], [1, 8.5]]) {
      const x0 = inset, y0 = inset, x1 = W - inset, y1 = H - inset;
      // each side its own stroke, running on a little past the corners
      const o = () => 1.5 + 2.5 * hash(seed * 31 + paths.length);
      paths.push(rule([x0 - o(), y0], [x1 + o(), y0], seed + k * 3 + 0.1));
      paths.push(rule([x1, y0 - o()], [x1, y1 + o()], seed + k * 3 + 1.2));
      paths.push(rule([x1 + o(), y1], [x0 - o(), y1], seed + k * 3 + 2.3));
      paths.push(rule([x0, y1 + o()], [x0, y0 - o()], seed + k * 3 + 3.4));
    }
    svg.replaceChildren();
    const g = document.createElementNS(SVG, 'g');
    g.setAttribute('fill', ink);
    g.setAttribute('opacity', '0.86');
    for (const d of paths) { const p = document.createElementNS(SVG, 'path'); p.setAttribute('d', d); g.appendChild(p); }
    // the curls, thrown outward from the outer frame's corners
    const curls = document.createElementNS(SVG, 'g');
    curls.setAttribute('fill', 'none'); curls.setAttribute('stroke', ink); curls.setAttribute('stroke-width', '0.95'); curls.setAttribute('stroke-linecap', 'round'); curls.setAttribute('opacity', '0.86');
    for (const [cx, cy, sx, sy, q] of [[3.5, 3.5, -1, -1, 0], [W - 3.5, 3.5, 1, -1, 1], [W - 3.5, H - 3.5, 1, 1, 2], [3.5, H - 3.5, -1, 1, 3]]) {
      const p = document.createElementNS(SVG, 'path'); p.setAttribute('d', curl(cx, cy, sx, sy, seed + q)); curls.appendChild(p);
      const dot = document.createElementNS(SVG, 'circle');
      dot.setAttribute('cx', (cx + sx * 15.5).toFixed(2)); dot.setAttribute('cy', (cy + sy * 15.5).toFixed(2)); dot.setAttribute('r', (1.05 + 0.35 * hash(seed + q * 5)).toFixed(2));
      dot.setAttribute('fill', ink); dot.setAttribute('stroke', 'none');
      curls.appendChild(dot);
    }
    svg.append(g, curls);
  }

  // ---- prints on the desk -----------------------------------------------------------------
  const GAP = 30, MIN = 270, MAX = 440;
  desk.forEach((f, i) => f.querySelectorAll('a').forEach((a, j) => {
    const k = (i * 7 + j * 3) % 5;
    a.style.setProperty('--tilt', `${(((i + j) % 2) ? 1 : -1) * (0.5 + 0.35 * k)}deg`);
  }));

  // How far down the desk a print may lie from the paragraph it belongs to before it is better
  // left on the sheet, px.
  const DRIFT = 520;
  const loose = (f, on) => {
    f.classList.toggle('loose', on);
    if (!on) f.style.left = f.style.top = f.style.width = '';
  };
  let busy = false;
  function layout() {
    if (busy) return;
    busy = true;
    const vw = root.clientWidth;
    const lr = leaf.getBoundingClientRect();
    const room = Math.min(lr.left, vw - lr.right) - 2 * GAP;
    if (room < MIN) {
      for (const f of desk) loose(f, false);
    } else {
      // one picture at a time, in reading order: each one taken off the sheet closes up the
      // sheet below it, so the next one's paragraph is measured after that
      const w = Math.min(room, MAX);
      const free = { l: -Infinity, r: -Infinity };
      let prefer = 'r';
      for (const f of desk) {
        loose(f, true);
        f.style.width = w + 'px';
        const ar = art.getBoundingClientRect();
        const x = { l: lr.left - ar.left - GAP - w, r: lr.right - ar.left + GAP };
        const anchor = f.parentElement.getBoundingClientRect().top - ar.top - 8;
        const other = prefer === 'r' ? 'l' : 'r';
        const side = free[prefer] <= anchor ? prefer : free[other] <= anchor ? other : (free[prefer] <= free[other] ? prefer : other);
        const top = Math.max(anchor, free[side] + 34);
        const h = f.offsetHeight;
        if (top - anchor > DRIFT || top + h > ar.height - 40) { loose(f, false); continue; }
        f.style.left = x[side] + 'px';
        f.style.top = top + 'px';
        free[side] = top + h;
        prefer = side === 'r' ? 'l' : 'r';
      }
    }
    root.classList.toggle('pl-prints', desk.some((f) => f.classList.contains('loose')));
    figs.forEach((f, i) => { if (!f.classList.contains('loose')) frame(f, i); });
    busy = false;
  }

  layout();
  addEventListener('resize', layout);
  addEventListener('load', layout);
  if ('ResizeObserver' in window) new ResizeObserver(() => requestAnimationFrame(layout)).observe(art);
})();
