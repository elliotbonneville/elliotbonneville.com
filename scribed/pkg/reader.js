// Keep a single, linkable copy of every note in document reading order.
function placeNotes(article) {
  const section = article.querySelector(".notes");
  if (!section) return;
  const notes = [...section.querySelectorAll("li[id]")];
  const references = new Map(notes.map(note => [note, document.getElementById("r" + note.id.slice(1))]));
  const wide = matchMedia("screen and (min-width:1000px)");
  let frame = 0;

  function position() {
    frame = 0;
    const changedMode = article.classList.toggle("placed-notes", wide.matches) !== lastWide;
    lastWide = wide.matches;
    section.setAttribute("aria-label", wide.matches ? "Margin notes" : "Footnotes");
    let changed = changedMode;
    if (wide.matches) {
      const top = article.getBoundingClientRect().top;
      let bottom = 0;
      // Read all geometry together before updating the column. A long note pushes
      // the following notes down, while the main text keeps its natural rhythm.
      const placements = notes.map(note => {
        const reference = references.get(note);
        return {note, y: reference ? reference.getBoundingClientRect().top - top : bottom,
                height: note.getBoundingClientRect().height};
      }).sort((a,b) => a.y - b.y);
      for (const {note,y,height} of placements) {
        const at = Math.round(Math.max(bottom, y - 2));
        const value = at + "px";
        if (note.style.getPropertyValue("--note-top") !== value) {
          note.style.setProperty("--note-top", value);
          changed = true;
        }
        bottom = at + height + 15;
      }
      const end = article.querySelector("hr.tail").getBoundingClientRect().bottom - top;
      const overhang = Math.max(0, Math.ceil(bottom - end)) + "px";
      if (article.style.getPropertyValue("--note-overhang") !== overhang) {
        article.style.setProperty("--note-overhang", overhang);
        changed = true;
      }
    }
    if (changed) window.dispatchEvent(new Event("scriptorium-layout"));
  }
  let lastWide;
  function schedule() { if (!frame) frame = requestAnimationFrame(position); }
  position();
  wide.addEventListener("change", schedule);
  if (window.ResizeObserver) {
    const resize = new ResizeObserver(schedule);
    resize.observe(article);
    notes.forEach(note => resize.observe(note));
  }
  window.addEventListener("resize", schedule);
  document.fonts.ready.then(schedule);
  article.addEventListener("click", event => {
    const ref = event.target.closest('a[role="doc-noteref"]');
    if (!ref || event.defaultPrevented || event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const note = document.getElementById(ref.hash.slice(1));
    if (!note) return;
    const backlink = note.querySelector('[role="doc-backlink"]');
    backlink.href = "#" + ref.id;
    if (!wide.matches) return; // ordinary numbered endnotes and native fragment navigation on phones
    event.preventDefault();
    references.set(note, ref);
    position();
    if (location.hash !== ref.hash) history.pushState(null, "", ref.hash);
    note.focus({preventScroll:true});
    note.scrollIntoView({block:"nearest"});
  });
}

function inkLoupe(leaf) {
  const lens = document.querySelector(".ink-lens");
  const canvas = lens.querySelector("canvas");
  const bar = document.querySelector(".lens-bar");
  const closeButton = bar.querySelector("button");
  const toggles = [...document.querySelectorAll(".inspect-ink")];
  const root = document.documentElement;
  let ctx, opener, drag, frame = 0, x = 0, y = 0;
  let lastPaint = "";
  const zoom = 3;
  const clamp = (v, lo, hi) => Math.min(Math.max(lo, hi), Math.max(lo, v));

  function paint() {
    frame = 0;
    if (!opener) return;
    const paper = leaf.getBoundingClientRect();
    const size = lens.offsetWidth;
    const glass = lens.clientWidth;
    const radius = glass / (2 * zoom);
    const left = Math.max(0, paper.left), right = Math.min(innerWidth, paper.right);
    const top = Math.max(0, paper.top), bottom = Math.min(innerHeight, paper.bottom);
    if (right - left < 2 * radius || bottom - top < 2 * radius) {
      lens.style.visibility = "hidden";
      return;
    }
    x = clamp(x, left + radius, right - radius);
    y = clamp(y, top + radius, bottom - radius);
    const lx = clamp(x - size / 2, 4, innerWidth - size - 4);
    const ly = clamp(y - size / 2, 4, innerHeight - size - 4);
    lens.style.transform = "translate(" + Math.round(lx) + "px," + Math.round(ly) + "px)";
    const pixels = Math.round(glass * Math.min(devicePixelRatio || 1, 2));
    if (canvas.width !== pixels) canvas.width = canvas.height = pixels;
    const key = [Math.round(x - paper.left), Math.round(y - paper.top), pixels, paper.width, paper.height].join("/");
    if (key === lastPaint) { lens.style.visibility = "visible"; return; }
    if (window.scriptorium?.inspect_ink(ctx, x, y, glass / zoom)) {
      lastPaint = key;
      lens.style.visibility = "visible";
    } else {
      lens.style.visibility = "hidden";
      if (!root.classList.contains("can-inspect")) close();
      else if (root.dataset.ready === "0") schedule();
    }
  }
  function schedule() { if (opener && !frame) frame = requestAnimationFrame(paint); }
  function aim(px, py) { x = px; y = py; schedule(); }
  function close() {
    if (!opener) return;
    const button = opener;
    opener = null;
    drag = null;
    cancelAnimationFrame(frame);
    frame = 0;
    lens.hidden = bar.hidden = true;
    toggles.forEach(b => b.setAttribute("aria-pressed", "false"));
    canvas.width = canvas.height = 0;
    button.focus({preventScroll:true});
  }
  function open(button) {
    if (opener) { close(); return; }
    if (!window.scriptorium?.inspect_ink || !root.classList.contains("can-inspect")) return;
    ctx ||= canvas.getContext("2d");
    if (!ctx) return;
    opener = button;
    toggles.forEach(b => b.setAttribute("aria-pressed", "true"));
    lens.hidden = bar.hidden = false;
    lens.style.visibility = "hidden";
    lastPaint = "";
    const first = leaf.querySelector(".first .initial")?.getBoundingClientRect();
    if (first && first.bottom > 0 && first.top < innerHeight) aim(first.left + first.width/2, first.top + first.height/2);
    else aim(innerWidth/2, innerHeight/2);
    closeButton.focus({preventScroll:true});
  }
  toggles.forEach(b => b.addEventListener("click", () => open(b)));
  closeButton.addEventListener("click", close);
  lens.addEventListener("pointerdown", e => {
    drag = {id:e.pointerId, dx:x-e.clientX, dy:y-e.clientY};
    lens.setPointerCapture(e.pointerId);
  });
  lens.addEventListener("pointermove", e => {
    if (drag?.id === e.pointerId) aim(e.clientX + drag.dx, e.clientY + drag.dy);
    else if (e.pointerType === "mouse") aim(e.clientX, e.clientY);
  });
  lens.addEventListener("lostpointercapture", () => { drag = null; });
  leaf.addEventListener("pointermove", e => {
    if (opener && !drag && e.pointerType === "mouse" && !e.target.closest("button")) aim(e.clientX, e.clientY);
  });
  leaf.addEventListener("pointerup", e => {
    if (opener && e.pointerType !== "mouse" && !e.target.closest("button,a")) aim(e.clientX, e.clientY);
  });
  window.addEventListener("keydown", e => {
    if (!opener) return;
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    const d = {ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];
    if (d) { e.preventDefault(); const step = e.shiftKey ? 40 : 8; aim(x+d[0]*step, y+d[1]*step); }
  });
  window.addEventListener("scroll", schedule, {passive:true});
  window.addEventListener("resize", schedule);
  window.addEventListener("scriptorium-layout", () => {lastPaint = ""; schedule();});
  new MutationObserver(() => { if (opener && !root.classList.contains("can-inspect")) close(); })
    .observe(root, {attributes:true, attributeFilter:["class"]});
  root.classList.add("reader-tools");
}

const manuscript = document.querySelector(".leaf");
if (manuscript) {
  placeNotes(manuscript.querySelector("article"));
  inkLoupe(manuscript);
}
