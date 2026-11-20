// The post's pictures, framed in the scribe's own inks (iron-gall and vermilion).
//
// On the sheet, each plate sits directly on the vellum inside a hand-ruled double border
// echoing the illuminated initial: an iron-gall outer frame with shaded penman's curls and
// vermilion berries at its corners, and a fine vermilion inner hairline, drawn in multiply
// blend so the vellum grain and horizontal ruling lines show right through the ink.
//
// On wide windows, the wood studies (.pl-wood) lift off the sheet onto the mahogany desk as
// loose laid-rag folio sheets ruled in the same iron-gall and vermilion inks, shaded to match
// the room's upper-left lamp, each carrying its plate number in the lower margin.
(() => {
  const art = document.querySelector('article');
  const leaf = art && (art.closest('.leaf') || art);
  const figs = [...document.querySelectorAll('figure.pl')];
  if (!art || !figs.length) return;
  const desk = figs.filter((f) => f.classList.contains('pl-wood'));
  const root = document.documentElement;
  const SVG = 'http://www.w3.org/2000/svg';

  // ---- deterministic hand -----------------------------------------------------------------
  const hash = (n) => {
    n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
    n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  };
  const smoothstep = (a, b, x) => {
    const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };
  const wander = (t, seed) =>
    Math.sin(t * 0.017 + seed * 6.1) * 0.55 +
    Math.sin(t * 0.049 + seed * 2.3) * 0.30 +
    Math.sin(t * 0.11 + seed * 4.7) * 0.15;

  // ---- mould-made laid rag paper tile for loose desk plates (192x192) ---------------------
  function makeGrain() {
    const N = 192;
    const c = document.createElement('canvas');
    c.width = c.height = N;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const img = ctx.createImageData(N, N);
    const d = img.data;
    for (let y = 0; y < N; y++) {
      const laid = Math.sin((y / 4) * Math.PI * 2);
      for (let x = 0; x < N; x++) {
        const idx = (y * N + x) * 4;
        const ax = (x / N) * Math.PI * 2, ay = (y / N) * Math.PI * 2;
        const mottle =
          Math.sin(ax * 2 + ay + 0.7) * 0.35 +
          Math.sin(ax - ay * 3 + 2.1) * 0.25 +
          Math.sin(ax * 4 + ay * 2 + 4.3) * 0.18;
        const n = hash(y * 733 + x * 131 + 19) - 0.5;
        const cx = x % 48;
        const chain = cx === 0 ? -0.45 : cx === 1 ? 0.2 : 0;
        const v = mottle * 0.45 + laid * 0.22 + chain * 0.35 + n * 0.55;
        if (v < 0) {
          d[idx] = 84; d[idx + 1] = 64; d[idx + 2] = 42;
          d[idx + 3] = Math.min(28, Math.round(-v * 24));
        } else {
          d[idx] = 255; d[idx + 1] = 250; d[idx + 2] = 238;
          d[idx + 3] = Math.min(22, Math.round(v * 18));
        }
      }
    }
    ctx.putImageData(img, 0, 0);
    ctx.strokeStyle = 'rgba(96, 72, 46, 0.065)';
    ctx.lineWidth = 0.6;
    for (let i = 0; i < 34; i++) {
      const fx = hash(i * 19 + 3) * N;
      const fy = hash(i * 37 + 11) * N;
      const ang = hash(i * 53 + 7) * Math.PI * 2;
      const len = 3 + hash(i * 71 + 5) * 6;
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.quadraticCurveTo(
        fx + Math.cos(ang + 0.35) * len * 0.5,
        fy + Math.sin(ang + 0.35) * len * 0.5,
        fx + Math.cos(ang) * len,
        fy + Math.sin(ang) * len
      );
      ctx.stroke();
    }
    root.style.setProperty('--pl-grain', `url("${c.toDataURL('image/png')}")`);
  }
  makeGrain();

  // ---- pen strokes & shaded curls (echoing scriptorium's initial.rs & penwork.rs) ---------
  const NIB = -0.58;
  const HEAVY_A = Math.PI / 2 - 0.32; // shaded penman's heavy downstroke direction

  // One hand-ruled stroke pulled from a to b: gentle hand bow + nib angle + tapered ends.
  function strokePath(a, b, wide, hair, wobble, seed) {
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy);
    if (len < 1) return '';
    const ux = dx / len, uy = dy / len, nx = -uy, ny = ux;
    const across = hair + (wide - hair) * Math.abs(Math.sin(Math.atan2(dy, dx) - NIB));
    const bow = (hash(Math.round(seed * 53)) - 0.5) * 0.7;
    const n = Math.max(8, Math.ceil(len / 7));
    const L = [], R = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n, s = t * len;
      const off = wobble * wander(s, seed) + bow * Math.sin(t * Math.PI);
      // slight swell where the pen settles, tapering cleanly where it lifts past the corner
      const end = Math.min(1, s / 4.5, (len - s) / 5.5);
      const press =
        (0.24 + 0.76 * end) *
        (0.90 + 0.10 * Math.sin(t * 2.9 + seed)) *
        (0.92 + 0.16 * hash(Math.round(seed * 97) + i * 17));
      const w = Math.max(0.16, across * press) / 2;
      const cx = a[0] + ux * s + nx * off;
      const cy = a[1] + uy * s + ny * off;
      L.push([cx + nx * w, cy + ny * w]);
      R.push([cx - nx * w, cy - ny * w]);
    }
    return 'M' + L.concat(R.reverse()).map((p) => p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join('L') + 'Z';
  }

  // Pulls top & bottom left-to-right, sides top-to-bottom (just as initial.rs does).
  function rectPaths(x0, y0, x1, y1, wide, hair, wobble, overMin, overSpan, seed) {
    const o = (k) => overMin + overSpan * hash(Math.round(seed * 41) + k * 23);
    return [
      strokePath([x0 - o(0), y0], [x1 + o(1), y0], wide, hair, wobble, seed + 0.1),
      strokePath([x0, y0 - o(2)], [x0, y1 + o(3)], wide, hair, wobble, seed + 1.2),
      strokePath([x0 - o(4), y1], [x1 + o(5), y1], wide, hair, wobble, seed + 2.3),
      strokePath([x1, y0 - o(6)], [x1, y1 + o(7)], wide, hair, wobble, seed + 3.4),
    ];
  }

  // A penman's curl (penwork.rs): leaves tangent from the corner nearly straight and winds
  // cubically into a tight heart, shaded by nib pressure, returning { path, heart }.
  function shadedCurl(from, a0, turn, scale, seed) {
    const turns = 1.05 + 0.16 * hash(Math.round(seed * 29));
    const open = (0.045 + 0.015 * hash(Math.round(seed * 37))) / scale;
    const heartR = (1.65 + 0.35 * hash(Math.round(seed * 43))) * scale;
    const tight = 1 / Math.max(0.4, heartR);
    const len = (Math.PI * 2 * turns) / (open + (tight - open) / 4);
    const ds = 0.45;
    const n = Math.max(24, Math.ceil(len / ds));
    const step = len / n;
    const pts = [[from[0], from[1]]];
    let x = from[0], y = from[1], a = a0;
    for (let j = 0; j < n; j++) {
      const u = (j + 0.5) / n;
      a += turn * (open + (tight - open) * u * u * u) * step;
      x += Math.cos(a) * step;
      y += Math.sin(a) * step;
      pts.push([x, y]);
    }
    // compute shaded outline: heavier on downstrokes, hairline on upstrokes, tapered at heart
    const hx = Math.cos(HEAVY_A), hy = Math.sin(HEAVY_A);
    const L = [], R = [];
    const maxW = 1.42 * (0.85 + 0.15 * scale);
    const minW = 0.34;
    for (let i = 0; i < pts.length; i++) {
      const p0 = pts[Math.max(0, i - 1)], p1 = pts[Math.min(pts.length - 1, i + 1)];
      const dx = p1[0] - p0[0], dy = p1[1] - p0[1];
      const d = Math.hypot(dx, dy) || 1;
      const tx = dx / d, ty = dy / d;
      const nx = -ty, ny = tx;
      const s = i * step;
      const down = smoothstep(-0.1, 0.92, Math.abs(tx * hx + ty * hy));
      const env = smoothstep(0, 2.2, s) * smoothstep(0, 3.2, len - s);
      // fuller near the root of the flourish, thinning gracefully toward the heart
      const taper = 1 - 0.55 * (i / n);
      const w = (minW + (maxW - minW) * down * taper) * (0.28 + 0.72 * env) / 2;
      L.push([pts[i][0] + nx * w, pts[i][1] + ny * w]);
      R.push([pts[i][0] - nx * w, pts[i][1] - ny * w]);
    }
    const path = 'M' + L.concat(R.reverse()).map((p) => p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join('L') + 'Z';
    // berry sits slightly inside the final curl eye
    const end = pts[pts.length - 1];
    const prev = pts[Math.max(0, pts.length - 5)];
    const ex = end[0] - prev[0], ey = end[1] - prev[1];
    const el = Math.hypot(ex, ey) || 1;
    const heart = [end[0] - turn * (ey / el) * (1.25 * scale), end[1] + turn * (ex / el) * (1.25 * scale)];
    return { path, heart };
  }

  // Exact local coordinates of el inside fig, unaffected by CSS transform rotation.
  function localBox(el, fig) {
    let x = 0, y = 0, cur = el;
    while (cur && cur !== fig && fig.contains(cur)) {
      x += cur.offsetLeft;
      y += cur.offsetTop;
      cur = cur.offsetParent;
    }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
  }

  function addPaths(parent, paths, fill, opacity) {
    const g = document.createElementNS(SVG, 'g');
    g.setAttribute('fill', fill);
    g.setAttribute('opacity', String(opacity));
    for (const d of paths) {
      if (!d) continue;
      const p = document.createElementNS(SVG, 'path');
      p.setAttribute('d', d);
      g.appendChild(p);
    }
    parent.appendChild(g);
    return g;
  }

  function drawRules(f, i) {
    const W = f.clientWidth, H = f.clientHeight;
    if (!W || !H) return;
    const media = [...f.querySelectorAll('.row img, .row video')];
    if (!media.length) return;
    const boxes = media.map((m) => localBox(m, f));
    if (boxes.some((b) => b.w < 2 || b.h < 2)) return;

    const isLoose = f.classList.contains('loose');
    const key = [W, H, isLoose ? 1 : 0, ...boxes.map((b) => `${b.x},${b.y},${b.w},${b.h}`)].join('|');
    let svg = f.querySelector(':scope > .pl-rule');
    if (svg && svg.dataset.key === key) return;
    if (!svg) {
      svg = document.createElementNS(SVG, 'svg');
      svg.setAttribute('class', 'pl-rule');
      svg.setAttribute('aria-hidden', 'true');
      f.appendChild(svg);
    }
    svg.dataset.key = key;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

    const cs = getComputedStyle(art);
    const ink = cs.getPropertyValue('--ink').trim() || '#2b211a';
    const verm = cs.getPropertyValue('--verm').trim() || '#b4301d';
    const seed = (i + 1) * 19.37;
    const compact = W < 400 && !isLoose;

    let ux0 = Infinity, uy0 = Infinity, ux1 = -Infinity, uy1 = -Infinity;
    for (const b of boxes) {
      if (b.x < ux0) ux0 = b.x;
      if (b.y < uy0) uy0 = b.y;
      if (b.x + b.w > ux1) ux1 = b.x + b.w;
      if (b.y + b.h > uy1) uy1 = b.y + b.h;
    }

    // Outer iron-gall frame and inner vermilion hairline (matching initial.rs)
    const outerPad = isLoose ? 9.5 : compact ? 7.5 : 10.5;
    const innerGap = isLoose ? 3.5 : compact ? 3.0 : 3.8;
    const ox0 = ux0 - outerPad, oy0 = uy0 - outerPad, ox1 = ux1 + outerPad, oy1 = uy1 + outerPad;
    const vx0 = ox0 + innerGap, vy0 = oy0 + innerGap, vx1 = ox1 - innerGap, vy1 = oy1 - innerGap;

    const outerPaths = rectPaths(
      ox0, oy0, ox1, oy1,
      isLoose ? 1.35 : 1.55,
      isLoose ? 0.62 : 0.72,
      isLoose ? 0.24 : 0.34,
      isLoose ? 1.6 : 1.8,
      isLoose ? 1.4 : 1.8,
      seed + 1.1
    );

    const vermPaths = rectPaths(
      vx0, vy0, vx1, vy1,
      isLoose ? 0.78 : 0.88,
      isLoose ? 0.38 : 0.44,
      isLoose ? 0.18 : 0.24,
      0.5, 0.9,
      seed + 23.7
    );

    // Individual delicate keylines around each picture in multi-image plates
    const subPaths = [];
    if (boxes.length > 1) {
      const sp = compact ? 2.0 : 2.5;
      boxes.forEach((b, j) => {
        subPaths.push(...rectPaths(
          b.x - sp, b.y - sp, b.x + b.w + sp, b.y + b.h + sp,
          0.78, 0.36, 0.16, 0.8, 0.9, seed + 51.3 + j * 7.1
        ));
      });
    }

    svg.replaceChildren();
    if (subPaths.length) addPaths(svg, subPaths, ink, isLoose ? 0.45 : 0.50);
    addPaths(svg, vermPaths, verm, isLoose ? 0.68 : 0.74);
    addPaths(svg, outerPaths, ink, isLoose ? 0.76 : 0.84);

    // On the sheet, sweep shaded penman's curls out of the four corners of the iron-gall frame
    // with a tiny vermilion berry tucked inside each coil's heart.
    if (!isLoose) {
      const curlScale = compact ? 0.72 : 1.0;
      const corners = [
        [[ox0, oy0], Math.PI, 1, 0],     // top-left: continues left, coils up-right
        [[ox1, oy0], 0, -1, 1],          // top-right: continues right, coils up-left
        [[ox1, oy1], 0, 1, 2],           // bottom-right: continues right, coils down-left
        [[ox0, oy1], Math.PI, -1, 3],    // bottom-left: continues left, coils down-right
      ];
      const curlPaths = [];
      const berries = [];
      for (const [pt, ang, turn, q] of corners) {
        const res = shadedCurl(pt, ang, turn, curlScale, seed + q * 11.3);
        curlPaths.push(res.path);
        berries.push([res.heart[0], res.heart[1], (1.05 + 0.3 * hash(Math.round(seed * 7) + q * 19)) * curlScale]);
      }
      addPaths(svg, curlPaths, ink, 0.82);
      const gb = document.createElementNS(SVG, 'g');
      gb.setAttribute('fill', verm);
      gb.setAttribute('opacity', '0.84');
      for (const [bx, by, br] of berries) {
        const c = document.createElementNS(SVG, 'circle');
        c.setAttribute('cx', bx.toFixed(2));
        c.setAttribute('cy', by.toFixed(2));
        c.setAttribute('r', br.toFixed(2));
        gb.appendChild(c);
      }
      svg.appendChild(gb);
    }

    f.classList.add('pl-inked');
  }

  // ---- plate numbers for loose desk plates + subtle rest angles ---------------------------
  const tilts = [-0.95, 0.75, -0.65, 1.05, -0.8, 0.6, -1.1];
  desk.forEach((f, i) => {
    f.style.setProperty('--tilt', `${tilts[i % tilts.length]}deg`);
    if (f.dataset.plate && !f.querySelector(':scope > .pl-num')) {
      const num = document.createElement('span');
      num.className = 'pl-num';
      num.setAttribute('aria-hidden', 'true');
      num.textContent = `Plate ${f.dataset.plate}`;
      f.appendChild(num);
    }
  });

  // Hovering a caption's plate link on the sheet gently lifts its loose plate on the desk
  document.addEventListener('pointerover', (e) => {
    const a = e.target.closest?.('a[href^="#plate-"]');
    if (!a) return;
    const f = document.getElementById(a.getAttribute('href').slice(1));
    if (f?.classList.contains('loose')) f.classList.add('pl-hl');
  });
  document.addEventListener('pointerout', (e) => {
    const a = e.target.closest?.('a[href^="#plate-"]');
    if (!a) return;
    const f = document.getElementById(a.getAttribute('href').slice(1));
    if (f) f.classList.remove('pl-hl');
  });

  // ---- laying loose wood plates on the desk -----------------------------------------------
  const GAP = 30, MIN = 270, MAX = 430;
  const DRIFT = 520;
  const loose = (f, on) => {
    f.classList.toggle('loose', on);
    if (!on) {
      f.style.left = f.style.top = f.style.width = '';
      delete f.dataset.side;
      f.classList.remove('pl-hl');
    }
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
        const side =
          free[prefer] <= anchor ? prefer :
          free[other] <= anchor ? other :
          (free[prefer] <= free[other] ? prefer : other);
        const top = Math.max(anchor, free[side] + 34);
        const h = f.offsetHeight;
        if (top - anchor > DRIFT || top + h > ar.height - 40) { loose(f, false); continue; }
        f.style.left = x[side] + 'px';
        f.style.top = top + 'px';
        f.dataset.side = side;
        free[side] = top + h;
        prefer = side === 'r' ? 'l' : 'r';
      }
    }
    root.classList.toggle('pl-prints', desk.some((f) => f.classList.contains('loose')));
    figs.forEach((f, i) => drawRules(f, i));
    busy = false;
  }

  layout();
  addEventListener('resize', layout);
  addEventListener('load', layout);
  figs.forEach((f, i) => {
    f.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', () => drawRules(f, i), { once: true });
    });
  });
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(() => requestAnimationFrame(layout));
    ro.observe(art);
    figs.forEach((f) => ro.observe(f));
  }
})();
