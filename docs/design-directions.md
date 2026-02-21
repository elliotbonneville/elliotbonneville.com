# Blog Visual Redesign: Six Maximalist Directions

Six directions for transforming elliotbonneville.com from brutalist to ultra-maximalist — using procedural CSS/SVG textures to bring the warmth and tactility of physical media to the screen, without compromising the static-site philosophy.

**Non-negotiables preserved across all directions:**
- Static HTML with inlined CSS/JS — no external CDNs or runtime deps
- 65ch max-width reading column preserved (readability first)
- Build system stays under ~300 LOC
- Everything procedural — CSS gradients, SVG filters, `mix-blend-mode`, no image assets
- Dark mode support via `prefers-color-scheme`
- Mobile-first responsive

---

## Direction 1: "The Woven Page"

### Concept & Mood

The page is a textile. Not metaphorically — literally. The background has a visible weave pattern generated from CSS. Text sits on the fabric like screen-printed type on canvas. The nav is a selvage edge. Code blocks are patches — different material stitched onto the base cloth. Links are threads of a different color woven into the base.

This draws from: Japanese textile art (sashiko stitching, indigo dyeing), William Morris wallpaper patterns, Bauhaus textile workshop, quilting traditions. The blog becomes a woven artifact — each post a new panel in an ongoing tapestry. The richness is in the *pattern density* and the interplay of geometric repetition with organic text.

The key is that the patterns are hypnotic and beautiful but the reading experience stays serene — the weave is background, the text floats above.

### CSS Techniques

**Woven texture background** (the signature):
```
Two overlapping repeating-linear-gradient sets:
- Set 1: Vertical stripes (the warp) — alternating 1px solid and
  1px transparent, with very subtle color variation between stripes
- Set 2: Horizontal stripes (the weft) — same pattern, perpendicular
These composite into a visible crosshatch/canvas texture.
Via background-blend-mode: multiply, the intersections are slightly
darker (like actual thread crossings). Total opacity: 5-12%.
```

**Sashiko-style decorative borders**:
```
CSS border-image using a repeating-linear-gradient that creates
a dashed-stitch pattern. Applied to nav borders, blockquote borders,
and hr elements. The "stitches" are small dashes with rounded ends
(border-radius on the gradient stops).
```

**Selvage edge on the reading column**:
```
A narrow decorative strip along the left edge of <main> —
a vertical band (20-30px) with a denser, more colorful pattern
than the main weave. Like the selvage edge of a bolt of fabric.
Uses a more complex repeating-linear-gradient with multiple
color stops. This is pure decoration and purely CSS.
```

**Patch-style code blocks**:
```
Visually distinct background — a different "fabric" (different
weave pattern, different base color). A subtle stitched border
around the block (the sashiko border-image). Maybe a very slight
box-shadow to lift it off the base cloth. The effect: a patch
of different material sewn onto the page.
```

**Indigo dye gradients**:
```
Headings get a subtle radial-gradient text treatment via
background-clip: text — mimicking the way indigo dye pools
and varies in intensity. Dark at the center, slightly lighter
at the edges. Very subtle — just enough to feel hand-dyed.
```

**Thread-pull links**:
```
Links are styled as colored threads woven into the text:
a different hue from the base, with a subtle bottom-border
that looks like a thread (1px, slightly wavy via a tiny
repeating gradient). On hover, the thread "pulls" — the
underline thickens and shifts color (transition).
```

**Pattern panels between sections**:
```
Between major sections (or at the top/bottom of articles),
a narrow horizontal band of denser geometric pattern — like
a decorative border in a woven textile. CSS-only using
repeating-linear-gradient at 45deg angles to create
diamond/zigzag/chevron patterns.
```

### Typography

- **Body**: Self-host **EB Garamond** — a warm, humanist serif that was literally born from metal type. The irregular stroke endings feel "woven" at text sizes. Alternatively, system **Georgia** works beautifully here too.
- **Headings**: Same serif family. Differentiated by the indigo-gradient treatment and slightly increased letterspacing, not by weight.
- **Code**: System monospace stack. On the "patch" background, it reads as functional/technical against the organic base.
- **Special characters**: Consider using ❋ ✿ ◈ ◇ as section dividers, set in the accent color. Unicode — no font embedding needed.

### Color Palette

**Light mode** (indigo and natural cotton):
```
--cloth:          #f2efe6    (unbleached cotton)
--warp:           #e6e2d8    (slightly darker thread)
--weft:           #ece8de    (slightly different thread)
--text:           #1a1828    (dark indigo-black)
--text-secondary: #5a586e    (faded indigo)
--indigo:         #2c3e6b    (deep indigo — the primary accent)
--indigo-light:   #4a6294    (lighter indigo for links)
--thread-red:     #8b3a3a    (madder red — for visited links)
--thread-gold:    #9a7a2a    (turmeric gold — for highlights)
--patch-bg:       #e8e4d8    (different cloth for code blocks)
--stitch:         #8a8678    (gray-brown stitch color)
--selvage:        #2c3e6b    (indigo selvage strip)
```

**Dark mode** (deep indigo night-cloth):
```
--cloth:          #12121e    (deep indigo-black)
--warp:           #1a1a28    (dark thread)
--weft:           #16162a    (slightly different dark thread)
--text:           #d8d4ca    (natural cotton text)
--text-secondary: #8a8698    (faded light indigo)
--indigo:         #6b8ac4    (lighter indigo for visibility)
--indigo-light:   #7a9ad4    (link indigo)
--thread-red:     #c47a6a    (lighter madder)
--thread-gold:    #cab44a    (brighter gold)
--patch-bg:       #1a1a2c    (darker patch)
--stitch:         #4a485e    (faded stitch)
--selvage:        #3a4e7b    (lighter selvage)
```

### Page-by-Page Vision

**Index page**: The post list is a woven scroll. Each post entry separated by a thin sashiko-stitched line. Date in secondary indigo, title in primary indigo. The selvage edge runs down the left side. At the top and bottom of the list, a geometric chevron border panel (like the header/footer of a woven tapestry).

**Post page**: The article sits on the woven cloth background. Title gets the indigo-gradient treatment. Selvage edge continues down the left. Blockquotes indented with a stitched left border. Between major sections, a thin geometric pattern divider. The whole experience feels like reading a beautifully printed text on fine cloth.

**Navigation**: Separated from content by a sashiko-stitched line — not a solid border but a dashed pattern that reads as "stitching." Site name in deep indigo. Links with thread-pull hover effect.

**Code blocks**: Patches of different fabric. Different color and weave density. Visible stitched border all around. Syntax highlighting uses the textile palette: indigo for keywords, madder red for strings, turmeric gold for numbers, cotton-white for base text.

### Build System Changes

1. Optional inline SVG filter for displacement effects.
2. Optional font inlining (EB Garamond, ~30-50KB for regular + italic woff2).
3. No other build changes. The entire maximalist effect is CSS.

### Estimated CSS: ~550-700 lines

### Responsive

Selvage edge hides on mobile. Woven texture stays but simplifies — larger thread size. Pattern dividers remain but shrink. Stitched borders stay (they scale well). Gracefully becomes "warm textured blog with interesting borders" on small screens.

---

## Direction 2: "The Ceramic Glaze"

### Concept & Mood

The page is a fired ceramic vessel. Not a cute mug — a serious piece of studio pottery. The kind of celadon bowl that a collector holds up to the light and rotates slowly. Multiple translucent glaze layers pool and run and interact. Where they're thick, the color deepens. Where they're thin, the clay body shows through.

The blog-as-ceramic maps onto durability: a well-fired pot lasts millennia. The writing is carved into the surface before firing — once it's set, it's permanent. Code blocks are unglazed sections — raw stoneware exposed where the glaze was wiped away, functional and honest. The page has weight and presence. You feel the thermal mass of it.

This direction gets its maximalism from *depth of surface* — not pattern density (that's the Woven Page) but luminous layers of translucent color stacked on top of each other. Like looking into glass, or into the surface of a deep pool.

### CSS Techniques

**Glaze layers** (the signature):
```
3-5 radial-gradient layers on <body>, each at 15-25% opacity,
in slightly different warm tones, at different sizes and positions.
background-blend-mode: multiply makes them interact — where two
gradients overlap, the color deepens. Where only one gradient
reaches, you see the "thin glaze" — closer to the base tone.

The positions are offset and asymmetric, creating natural pooling.
One gradient anchored top-left (large, warm), one center-right
(medium, cool shift), one bottom (large, slightly different warm).
The result: an organic color field that varies across the page.
```

**Crazing texture** (fine crackle pattern):
```
SVG <feTurbulence> filter with high baseFrequency and low octaves,
composited via <feColorMatrix> to extract only edges — creating a
fine web of hairline cracks across the entire surface. Applied as
a ::before pseudo-element at 3-8% opacity. This is the "crackle
glaze" effect — the hallmark of aged/raku ceramics.
```

**Clay body showing through**:
```
The reading column <main> has a slightly different background —
warmer, more neutral — representing the bare clay beneath the
glaze. The glaze gradients on <body> are more intense in the
margins and fade/thin over the reading area. This naturally
draws the eye to the content while keeping the margins rich.
```

**Drip effect on headings**:
```
A linear-gradient on the bottom edge of h1/h2 elements that
creates a subtle drip/run — the glaze thickening below the
heading. A 10-20px tall gradient from the heading's accent
color to transparent, fading downward. Very subtle — reads
as "something interesting happened here" not "there's a
gradient under this heading."
```

**Unglazed code blocks**:
```
Code blocks are raw stoneware — a distinctly different texture.
Matte, warm gray-brown background. No glaze layers, no sheen.
The crazing texture stops at the code block boundary. A subtle
"kiln mark" border: slightly uneven, created by a repeating
gradient with tiny random-feeling stops. Inside, syntax colors
are oxide-based: iron red, cobalt blue, copper green, ash white.
```

**Kiln-flash accents**:
```
Blockquotes and the nav separator get a color treatment that
suggests kiln atmosphere effects — a gradient that shifts from
warm (oxidation) to cool (reduction) along its length. Applied
as a left border gradient on blockquotes, and as the nav bottom
border. The color shift is subtle: warm brown → cool blue-gray.
```

### Typography

- **Body**: **Georgia** or self-host **Cormorant Garamond** — more delicate and high-contrast than regular Garamond, with the elegant thinness of incised ceramic text. When you carve letters into clay before firing, the strokes are thin and precise — high-contrast serifs capture this.
- **Headings**: Same face. At larger sizes, the high contrast becomes dramatic. No bold — the weight comes from size and the drip effect beneath.
- **Code**: System monospace. The raw stoneware background makes it feel honest and functional.

### Color Palette

**Light mode** (celadon/shino):
```
--clay:           #f0ebe1    (bisque-fired clay body)
--glaze-warm:     #d4c4a0    (shino glaze — warm honey)
--glaze-cool:     #b8c8c0    (celadon — cool jade green)
--glaze-deep:     #8a9890    (where glazes pool — deep celadon)
--text:           #2a2420    (iron oxide dark)
--text-secondary: #6a6258    (weathered clay)
--accent:         #7a4a30    (tenmoku brown — link color)
--accent-visited: #5a7a6a    (copper green patina)
--code-bg:        #ddd8cc    (raw stoneware)
--code-border:    #c4bca8    (kiln mark)
--oxide-red:      #9a4a30    (iron oxide — syntax)
--oxide-blue:     #3a5a7a    (cobalt oxide — syntax)
--oxide-green:    #4a6a4a    (copper oxide — syntax)
--ash:            #8a8680    (ash glaze — comments)
```

**Dark mode** (raku night-firing):
```
--clay:           #1a1816    (black clay body)
--glaze-warm:     #3a3020    (dark amber glaze)
--glaze-cool:     #202a28    (dark celadon)
--glaze-deep:     #1a2420    (deep glaze pool)
--text:           #dcd4c8    (pale ash)
--text-secondary: #8a8278    (gray clay)
--accent:         #c48a60    (golden tenmoku)
--accent-visited: #7aaa90    (bright copper green)
--code-bg:        #222018    (dark stoneware)
--code-border:    #3a3628    (dark kiln mark)
--oxide-red:      #d47a50    (bright iron red)
--oxide-blue:     #6a9aba    (bright cobalt)
--oxide-green:    #6a9a6a    (bright copper)
--ash:            #6a6860    (dark ash)
```

### Page-by-Page Vision

**Index page**: The post list sits on the clay body, surrounded by rich glaze in the margins. Each post entry is minimal — date and title — but the surface they sit on has palpable depth. The glaze gradients pool more intensely at the top and bottom of the page, thinning over the list. The site name at top feels inscribed.

**Post page**: As you scroll through a long article, the glaze gradients shift subtly (they're fixed-position on the body, so scrolling reveals different parts of the glaze field). The reading area is the calmer clay body. Headings have the drip effect — a visible thickening of color beneath them. Blockquotes have the kiln-flash gradient border. The whole page has a meditative quality — warm, deep, still.

**Navigation**: Clean, inscribed-feeling text on the clay body. The separator below is the kiln-flash gradient — warm on the left, cool on the right. Links in tenmoku brown.

**Code blocks**: The sudden shift to raw stoneware is striking. The matte, unglazed surface reads as deliberately exposed — craft within craft. Syntax colors are pure ceramic oxides: iron, cobalt, copper, ash. The kiln-mark border is subtly uneven.

### Build System Changes

1. Inline SVG for the crazing filter (~10 lines).
2. Optional font inlining.
3. No other changes.

### Estimated CSS: ~500-600 lines

### Responsive

Glaze gradients simplify on mobile (fewer layers, larger). Crazing stays (it's a viewport-level filter). Drip effects shrink. Code blocks keep their treatment. Degrades to "warm, deep-toned blog with beautiful color" on small screens.

---

## Direction 3: "The Cyanotype"

### Concept & Mood

The page is a cyanotype print. The 170-year-old photographic process where you coat paper with iron salts, lay objects on it, expose to UV light, and wash. The result: deep Prussian blue backgrounds with white silhouettes. Anna Atkins used this to document every fern and algae specimen she could find — the first photographs in a book were cyanotypes of botanical specimens.

Your blog becomes a series of sun-prints. The text is the exposure — white words emerging from deep blue. The margins have the irregular edges of hand-coated emulsion — the chemistry didn't reach the edges evenly. Code blocks are overexposed areas — washed out to a lighter blue, almost white, where too much light hit. Links are toned — cyanotypes can be tea-toned to shift blue toward brown/purple, so visited links show the toning process.

This is maximalist through *material commitment*. The entire page is one material, one process. The richness comes from the depth and variation within that single blue field — it's never flat, never uniform. Cyanotype blue varies from near-black in the shadows to pale periwinkle in the highlights, with every shade between.

### CSS Techniques

**The blue field** (the signature):
```
body background is a deep Prussian blue (#1a2a4a), but not flat.
Multiple radial-gradient layers in slightly different blues create
the uneven coating effect — thicker (darker) in some areas, thinner
(lighter) in others. 3-4 gradients at 80-100% size, offset positions,
blend-mode normal but overlapping creates depth variation.
```

**Emulsion edges**:
```
The reading column <main> has irregular edges created by an SVG
<feTurbulence> + <feDisplacementMap> filter on a clipping mask.
Or simpler: a mask-image using a radial-gradient that's not perfectly
rectangular — slightly wavy/organic at the edges. The content is
fully readable; only the very edge of the column feathers into the
surrounding blue. Like the boundary where the brush stroke of
emulsion coating ended.
```

**Light-exposed text**:
```
Text color is near-white (#e8eef4) with a very subtle blue tint —
like areas where UV light fully cleared the iron salts. Not pure
white — cyanotype whites always have a slight blue cast.
```

**Vignetting**:
```
A large radial-gradient overlay (::after on body) that's transparent
in the center and slightly darker blue at the edges/corners.
Like the natural falloff of UV exposure from a sun-print frame.
Subtle — 5-10% darkening at the extremes.
```

**Contact-sheet code blocks**:
```
Code blocks are overexposed — lighter blue background (#3a5a8a
shifting to #5a7aaa). The text inside is darker blue (#1a2a4a)
on the light field, reversed from the body. This creates the look
of a photographic negative or a different exposure on the same
print. A thin border in medium blue suggests the edge of a
film frame or contact sheet cell.
```

**Tea-toned links and accents**:
```
Cyanotypes can be chemically toned by washing in tea, wine, or
other solutions, shifting the blue toward warm brown or purple.
Links use this: unvisited links are a warm shifted blue (#7a9ac4),
visited links are tea-toned (#8a7a6a — a warm brown that reads as
"this part of the print was treated differently"). The transition
on hover shifts further into the warm spectrum.
```

**Specimen labels**:
```
Post metadata (dates, tags) styled as small labels — letterspaced
uppercase in a lighter blue, like the penciled annotations on a
cyanotype specimen sheet. Tiny, precise, archival.
```

**Sun-print border on the index page**:
```
A decorative border at the top of the post list made from
repeating-linear-gradient creating a pattern of small rectangular
shapes — like photograms of physical objects laid on the paper
during exposure. Abstract geometric pattern in lighter blue on
the darker field.
```

### Typography

- **Body**: Self-host **IBM Plex Serif** — technically precise but with warmth. Fits the "scientific documentation meets art" ethos of Atkins' cyanotypes. Or **Crimson Pro** for something softer.
- **Headings**: Same face, no bold. Differentiated by size and slightly brighter white (more exposure).
- **Code**: **IBM Plex Mono** (matches body) or system monospace. On the overexposed lighter background, it creates a natural pairing.
- **Metadata**: Small caps or letterspaced uppercase in a secondary blue — the specimen-label effect.

### Color Palette

**Light mode** — this is the unusual one. Most blogs are light-background-dark-text. The cyanotype inverts this: the "light mode" IS the deep blue. But for accessibility and reading comfort, we offer a true light alternative:

**Primary mode** (the cyanotype — this IS the experience):
```
--prussian:       #1a2a4a    (deep Prussian blue base)
--prussian-deep:  #0e1a2e    (darkest shadows)
--prussian-mid:   #2a3a5a    (medium blue)
--prussian-light: #3a5a8a    (lighter exposed areas)
--exposure:       #e0e8f0    (near-white, blue-cast — text)
--exposure-dim:   #8aa0c0    (half-exposed — secondary text)
--toned-warm:     #9a8a70    (tea-toned brown — visited links)
--toned-link:     #7ab0e0    (bright blue shift — links)
--code-bg:        #2a4a70    (overexposed lighter field)
--code-text:      #c0d0e4    (readable on lighter blue)
--frame:          #4a6a90    (code block borders)
```

**Light mode** (the washed print — after too much sun, the blues fade):
```
--prussian:       #e8eef4    (faded near-white, blue cast)
--prussian-deep:  #d0daea    (slightly darker wash areas)
--exposure:       #1a2a4a    (dark blue text — inverted)
--exposure-dim:   #5a6a8a    (secondary text)
--toned-warm:     #7a5a3a    (darker tea-tone)
--toned-link:     #2a5a9a    (deep blue links)
--code-bg:        #d4dce8    (pale blue wash)
--code-text:      #2a3a5a    (dark on light)
```

**Dark mode** (the unfixed print — in the darkroom, before exposure):
```
--prussian:       #0a0e18    (near-black with blue cast)
--prussian-deep:  #060a12    (true deep)
--prussian-mid:   #141e2e    (dark midnight)
--prussian-light: #1e2e4a    (hints of blue in the dark)
--exposure:       #c0d0e4    (pale blue text)
--exposure-dim:   #5a6a80    (muted secondary)
--toned-warm:     #aa9a80    (lighter tea-tone)
--toned-link:     #5a9ad4    (luminous blue)
--code-bg:        #101828    (slightly lighter dark)
--code-text:      #8aaac4    (softer code text)
```

### Page-by-Page Vision

**Index page**: Striking. Deep Prussian blue field with the post list emerging in white. The sun-print geometric border at the top. Each post entry is a specimen: date as a small label, title as the main exposure. The emulsion edges are visible at the margins of the reading column — the blue deepens and becomes uneven at the boundaries. Vignetting darkens the corners.

**Post page**: Immersive. You're reading white-on-blue, which is unusual but highly readable at the right contrast ratios (the near-white text on Prussian blue exceeds WCAG AAA). The article unfolds within the emulsion boundary. Headings glow slightly brighter. Code blocks shift to the overexposed lighter field — a natural rest for the eye, a different "exposure zone." Block quotes are indented with a lighter-blue left border. The whole page feels like a single photographic object.

**Navigation**: White text on blue, simple. The separator below is a gradient that fades to transparent — like the emulsion thinning at the top of the sheet. Links shift warm on hover (the tea-toning preview).

**Code blocks**: The overexposed lighter blue is a welcome contrast. Dark text on a medium-blue field. Syntax highlighting uses the tonal range: keywords in the bright white-blue, strings in tea-toned warm, comments in the half-exposed dimmer blue, functions in the luminous link blue. The frame border suggests a contact sheet.

### Build System Changes

1. SVG filter for emulsion edge effect (~12 lines inline SVG).
2. Optional font inlining.
3. No template changes needed.

### Estimated CSS: ~450-550 lines

Fewer lines than some others because the color system is tonal (variations of one hue) rather than multi-color. The complexity is in the layered gradients and filter effects.

### Responsive

The full cyanotype effect works at any size — blue is blue. Emulsion edges simplify on mobile (less feathering). Vignetting stays. Code blocks keep their overexposed treatment. This direction actually scales down beautifully because the visual effect is fundamentally about color, not pattern or ornament.

---

## Direction 4: "The Stained Glass"

### Concept & Mood

The page is a cathedral window. Not the twee, clip-art stained glass — the real thing. Thick slabs of colored glass held together by lead came, with light pouring through from behind. Each section of the page is a panel in the window. The text is the lead tracery — the dark structure that holds the luminous color together.

The critical insight: on a screen, we ARE the light source. Unlike print (which reflects light), screens emit it. Stained glass is the one physical art form that shares this property. A stained glass window and a monitor are both light shining through colored material toward your eyes. This isn't a metaphor — it's a genuine material kinship.

Dark mode is where this direction transcends. The colors become pure luminosity. Light mode is the window seen from outside on a bright day — muted, the lead lines more prominent. Dark mode is inside the cathedral — the colors blaze.

### CSS Techniques

**Color panels** (the signature):
```
The <body> is divided into large color zones using conic-gradient
and linear-gradient layers. These aren't geometric panels — they're
organic, irregular shapes created by overlapping gradients at
different angles. Each gradient creates a "pane" of color:
deep ruby, sapphire blue, emerald green, amber gold.

At full opacity this would be overwhelming. At 10-20% opacity
(light mode) or 15-30% (dark mode), it creates a gentle luminous
field that shifts color as you scroll (background-attachment: fixed).
```

**Lead came lines**:
```
All structural borders — nav separator, code block borders,
blockquote borders, hr elements — are dark and thick (2-3px).
Not pure black, but a dark gray with a slight warm tint (#2a2828)
that reads as lead. These are the *only* borders on the page,
and they're always this same lead-came weight and color.
This consistency creates the stained-glass structural logic.
```

**Glass texture**:
```
SVG <feTurbulence> at low frequency + <feColorMatrix> creates
subtle streaks and bubbles in the color — like real hand-blown
glass, which is never perfectly uniform. Applied as a ::before
at 5-10% opacity. This gives the color panels texture and life.
```

**Tracery headings**:
```
Headings are the decorative tracery of the window — the ornamental
stone/lead work at the top of each panel. Implemented via:
- Thick letter-spacing (0.1em)
- A subtle text-shadow that creates a slight glow (the text as
  an opening in the lead, with light bleeding through)
- In dark mode, the glow intensifies — headings literally radiate
```

**Rosette dividers**:
```
Between major sections, a circular decorative element made from
conic-gradient — a radial burst of color segments, like a small
rose window. 40-60px diameter, centered. Pure CSS: one div with
a conic-gradient background, border-radius: 50%. This replaces
the standard horizontal rule.
```

**Luminous code blocks**:
```
Code blocks are clear/frosted glass panels — a lighter, more
neutral panel within the colored field. In light mode: a very
slightly blue-tinted white. In dark mode: a slightly lighter
dark with a soft box-shadow glow. Syntax colors are pure
stained-glass primaries: ruby red keywords, sapphire blue
strings, emerald green comments, amber gold numbers. Vivid
but not neon — the colors of real glass, not LEDs.
```

**Glow on interaction**:
```
Links glow on hover — a soft box-shadow or text-shadow that
expands slightly, as if more light is pushing through that
particular piece of glass. Transition: 0.2s. In dark mode this
is pronounced; in light mode it's subtle.
```

### Typography

- **Body**: Self-host **Alegreya** — a serif with slightly calligraphic stroke endings that echo Gothic manuscript traditions without being blackletter. Or **Spectral** — clean, modern, but with enough character to feel handmade.
- **Headings**: Same face, letterspaced. The glow/shadow effect does the heavy lifting for differentiation.
- **Code**: System monospace. The frosted glass panel provides sufficient visual separation.

### Color Palette

**Light mode** (window seen from outside — muted, lead-dominant):
```
--glass:          #f0eee8    (frosted clear glass base)
--lead:           #2a2828    (dark warm gray — all borders)
--text:           #1e1e1c    (near-black, heavy like lead)
--text-secondary: #5a5a56    (lighter lead)
--ruby:           #8a2030    (deep red glass pane)
--sapphire:       #1e3a6a    (deep blue glass pane)
--emerald:        #1e5a3a    (deep green glass pane)
--amber:          #8a6a1a    (deep gold glass pane)
--link:           #2a4a8a    (sapphire-tinted link)
--link-visited:   #6a2a4a    (ruby-tinted visited)
--code-bg:        #eae8e4    (clear frosted panel)
--glow:           rgba(255,240,200,0.3)  (warm light glow)
```

**Dark mode** (inside the cathedral — the colors BLAZE):
```
--glass:          #0a0a0e    (dark void behind the window)
--lead:           #3a3a38    (lead came, slightly lighter)
--text:           #e4e0d8    (warm light text)
--text-secondary: #8a8880    (dimmer text)
--ruby:           #d42040    (blazing red)
--sapphire:       #3070d0    (blazing blue)
--emerald:        #30a060    (blazing green)
--amber:          #d0a020    (blazing gold)
--link:           #5090e0    (bright sapphire)
--link-visited:   #b050a0    (bright amethyst)
--code-bg:        #141418    (slightly lighter dark panel)
--glow:           rgba(255,220,150,0.15) (warm candlelight glow)
```

### Page-by-Page Vision

**Index page**: The post list sits within a luminous field. The color panels shift gently behind the text — ruby warming one area, sapphire cooling another. Lead-came borders frame the nav and the list. Each post entry is simple — but the light behind it shifts. The site name has a subtle glow. The whole page feels like looking at a window, not a webpage.

**Post page**: As you scroll through the article, the fixed color panels behind the reading column shift — you're moving through different "panes" of the window. Headings glow with tracery shadows. Rosette dividers mark major section breaks — small bursts of radial color. Code blocks are frosted panels that let light through but diffuse it. Blockquotes have thick lead-came left borders. The experience is contemplative and warm.

**Navigation**: Lead-came separator below. Simple text. Links glow on hover. The nav feels like the stone sill beneath the window.

**Code blocks**: Frosted clear glass. Syntax colors are the primary stained-glass tones — ruby, sapphire, emerald, amber. In dark mode, these colors are vivid and beautiful against the dark panel. In light mode, they're muted and harmonious.

### Build System Changes

1. SVG filter for glass texture (~10 lines).
2. Rosette dividers: could be pure CSS (no build changes) or generated by adding a small build step that inserts `<div class="rosette"></div>` between `<h2>` sections.
3. Optional font inlining.

### Estimated CSS: ~500-600 lines

### Responsive

Color panels work at any size. Lead-came borders stay (they're structural). Rosettes shrink on mobile. Glow effects stay. The direction is inherently responsive because it's about color and light, not spatial arrangement. Dark mode on a phone in a dark room is genuinely arresting.

---

## Direction 5: "The Oxidized Copper"

### Concept & Mood

The page is a sheet of copper. Not new, polished copper — copper that has been exposed to weather and time. The surface is covered in verdigris: that particular mottled green-blue-turquoise patina that forms when copper oxidizes. In some areas, the raw copper still shows through — warm, ruddy, metallic. In others, the patina is thick and deeply green. The whole surface is alive with the evidence of chemical process and time.

This maps to a blog perfectly: writing that accumulates over time, each piece changing the surface. The older posts are more deeply patinated. The newest writing still has some of the raw copper warmth. Code blocks are etched — incised lines where the patina has been deliberately removed to expose the bare metal beneath.

The maximalism here is in the *surface variation*. Real oxidized copper is one of the most visually complex natural surfaces — it shifts through dozens of hues (turquoise, verdigris green, blue-green, brown, raw copper, near-black) within a single square inch. Generating this procedurally via CSS creates a surface that you want to *look at*, not just read from.

### CSS Techniques

**Patina field** (the signature):
```
5-7 radial-gradient layers on <body>, each in a different
verdigris/copper tone, at different sizes and opacity levels.
Some are large and diffuse (the general patina wash). Some are
small and concentrated (spots where the patina formed thickly).
background-blend-mode: overlay makes them interact organically.

Combined with a base copper tone, this creates the mottled,
living surface of real oxidized copper. The key: RANDOMNESS.
The gradient positions and sizes should feel irregular. Use
calc() with viewport units to create positions that change
slightly with viewport size.
```

**Metal grain**:
```
SVG <feTurbulence> with high frequency creates a fine directional
grain — like the brushed/rolled texture of sheet copper. Applied
as a ::before at low opacity (3-5%). This runs in one direction
(linear, not circular) — metal grain is always directional.
```

**Raw copper showing through**:
```
The reading column <main> is a zone where the patina is "thinner."
Slightly warmer background tone, less green. The surrounding margins
have thicker patina (cooler, greener). This creates a natural
visual hierarchy — the warm center draws the eye.
```

**Etched code blocks**:
```
Code blocks are INCISED into the metal. Dark background representing
the etched-away surface. A subtle inner shadow (inset box-shadow)
creates the illusion of depth — the code sits in a recessed channel.
Thin bright-copper highlights on the edges (a 1px border in warm
copper tone) suggest the burr left by the etching tool. Syntax
colors: bright verdigris for keywords, raw copper for strings,
patina blue for functions, oxidized dark for comments.
```

**Rivet accents**:
```
Small circular decorative elements at key structural points —
the corners of code blocks, the junction of nav and content.
A radial-gradient creating a small circle with a metallic highlight
(light at top-left, dark at bottom-right). 6-8px diameter.
These are rivets — functional fasteners that also ornament.
Pure CSS: background radial-gradient on a small ::before element.
```

**Tarnish on links**:
```
Links are raw copper — warm, ruddy. On hover, they shift toward
patina green (the oxidation beginning). Visited links are fully
patinated — green-blue. The metaphor: clicking a link exposes it
to air, starting the oxidation. Transition: 0.3s for the color
shift, giving it a chemical-process feel.
```

**Hammered heading texture**:
```
Headings have a very subtle text-shadow with multiple offsets
(3-4 shadows at 0.5px offsets in slightly different directions)
that creates a slightly vibrating, "hammered" quality — like
text stamped into metal that didn't land perfectly flat.
```

### Typography

- **Body**: Self-host **Source Serif 4** — sturdy, upright, with a mechanical precision that reads as "engineered" on the metallic surface. Or **Bitter** — a slab serif designed for screens with a robust, no-nonsense quality.
- **Headings**: Same face. The hammered shadow effect provides differentiation.
- **Code**: System monospace. The etched treatment provides the visual break.

### Color Palette

**Light mode** (weathered copper in daylight):
```
--copper:         #b87333    (raw copper base)
--copper-light:   #d4956a    (highlighted copper)
--copper-dark:    #8a5a2a    (shadowed copper)
--patina-light:   #7ab8a0    (light verdigris)
--patina:         #4a8a78    (medium verdigris)
--patina-deep:    #2a5a4a    (deep patina)
--patina-blue:    #4a7a8a    (blue-shifted patina)
--surface:        #c8a878    (warm copper reading surface)
--text:           #1e1a14    (dark bronze text)
--text-secondary: #5a4a38    (oxidized text)
--code-bg:        #1e2018    (etched dark surface)
--code-text:      #c8c0b0    (pale metal text)
--rivet:          #d4a050    (polished brass accent)
--etch-border:    #8a7a5a    (etching edge highlight)
```

**Dark mode** (copper at night — the patina glows):
```
--copper:         #5a3a1a    (dark raw copper)
--copper-light:   #8a5a2a    (copper catching light)
--copper-dark:    #3a2810    (deep copper shadow)
--patina-light:   #3a6a58    (dark verdigris)
--patina:         #2a4a3a    (night patina)
--patina-deep:    #1a3028    (deepest patina)
--patina-blue:    #2a4a5a    (dark blue patina)
--surface:        #2a2418    (dark copper reading surface)
--text:           #d4ccc0    (pale copper text)
--text-secondary: #8a8070    (muted secondary)
--code-bg:        #0e100c    (deep etch)
--code-text:      #a0a890    (pale verdigris text)
--rivet:          #aa8030    (dark brass)
--etch-border:    #5a5a3a    (dark etch edge)
```

### Page-by-Page Vision

**Index page**: A weathered copper plate. The post list sits in the warmer central zone where the patina is thin. Around it, the margins bloom with verdigris. Rivets accent the corners of the content area. The site name is stamped in with the hammered treatment. Each post entry sits in the warm copper — date in the oxidized secondary tone, title in dark bronze.

**Post page**: The copper surface scrolls beneath the content. The patina shifts as background-attachment: fixed creates subtle movement through the mottled field. Headings are hammered. Code blocks are deeply etched recesses — dark voids in the copper surface with bright edge highlights. Blockquotes have a left border in verdigris green. The whole page feels *substantial* — like holding a heavy piece of copper.

**Navigation**: Copper-toned. The separator below is a border in patina green. Links show the oxidation hover effect. Rivets at the left and right ends of the nav.

**Code blocks**: Dramatic. The etched recess with inner shadow and bright copper edge is the visual anchor. Against the warm copper surroundings, the dark etched area draws the eye. Syntax colors are metallic: verdigris green, raw copper, patina blue, oxidized dark.

### Build System Changes

1. SVG filter for metal grain (~8 lines).
2. Optional: rivets could be added to templates, or done purely in CSS with pseudo-elements on existing elements (no build changes).
3. Optional font inlining.

### Estimated CSS: ~550-650 lines

### Responsive

Patina gradients work at any size (they're percentage-based). Rivets hide on mobile (they're decorative margin elements). Metal grain stays. Etched code blocks keep their treatment. Degrades to "warm copper-and-green-toned blog" on small screens.

---

## Direction 6: "The Terrazzo"

### Concept & Mood

The page is a terrazzo floor. Italian modernism at its most joyful: marble chips of many colors embedded in a cement matrix, ground and polished to a smooth surface. Every terrazzo floor is unique — the arrangement of chips is random, unrepeatable. It's a material that is simultaneously structured (the cement matrix holds everything together) and chaotic (the chips fall where they fall).

This is the most VISUALLY BOLD direction. Where the other directions create texture through subtlety and layering, terrazzo is upfront, colorful, and confident. The chips are visible. The colors are real. The page looks like something you could walk on — a physical surface rendered at 1:1 scale.

The blog-as-terrazzo: each post is a chip of marble embedded in the ongoing surface. The cement is the structure (the build system, the templates, the CSS). The marble is the content (unique, colorful, unrepeatable). Together they make something beautiful.

### CSS Techniques

**Terrazzo chip field** (the signature):
```
50-80 small radial-gradient spots scattered across the <body>,
each one a "chip" of colored marble. Each gradient is:
- Small (8-25px radius)
- A solid color fading to transparent at the edge
- Positioned using percentage values that feel random
  (but are hand-tuned or calc-generated)
- At 20-40% opacity so they're visible but not overwhelming

The positions use a combination of percentage offsets and
calc() with viewport units to create pseudo-random distribution.
The chips come in 5-6 colors from the palette.

On top of all chips: background-blend-mode: multiply ties them
to the base cement color.

The cement base is a flat, slightly warm gray with a very fine
noise texture (SVG feTurbulence) — real cement has visible sand
grain.
```

**Polished surface sheen**:
```
A large, very subtle linear-gradient across the entire viewport
(from slightly lighter at top-left to slightly darker at
bottom-right) at 3-5% opacity. This simulates the way a polished
terrazzo floor catches light at an angle — one side slightly
brighter than the other. Creates a sense of glossy surface.
```

**Grout lines**:
```
Headings and major section breaks are grout lines — the joins
between poured terrazzo sections. A double-line treatment:
two thin parallel borders (1px each, 4px apart) in a slightly
darker cement gray. These are functional dividers that also
reinforce the floor metaphor.
```

**Inlay code blocks**:
```
Code blocks are deliberate inlays — rectangular sections of
BLACK marble or granite, polished smooth. Solid dark background,
no chips. A crisp 2px border in bright brass/metal (the metal
divider strip that separates inlay sections in real terrazzo).
Inside, syntax colors are mineral-bright: white marble for base
text, pink marble for keywords, green marble for strings, gold
fleck for numbers. This is the luxury treatment — black granite
with marble inlay.
```

**Chip cluster accents**:
```
Certain elements get a denser cluster of chips nearby:
- Blockquote left border: instead of a solid line, a vertical
  strip of denser, more colorful chips (more gradients packed
  into a narrow space)
- Nav separator: a horizontal band of chips (a gradient strip
  with multiple color stops that reads as "aggregate")
```

**Brass divider strips**:
```
All structural borders use a thin, warm gold/brass color (#b8963a)
— like the metal divider strips embedded in real terrazzo floors
to control cracking and create sections. This replaces the default
gray borders with something warm and intentional.
```

### Typography

- **Body**: Self-host **DM Sans** — a geometric sans-serif that feels modern and architectural. Terrazzo is a modernist material; it pairs with modernist typography. Or **Outfit** — friendly, geometric, contemporary.
- **Headings**: Same face, slightly heavier weight (medium, not bold). Clean and architectural.
- **Code**: **DM Mono** (matches body) or system monospace.

This is the one direction where a **sans-serif** is the right call. Terrazzo is a 20th-century material. Putting serif type on terrazzo would be like putting a Victorian sofa on a Mies van der Rohe floor. The geometric sans-serif IS the material match.

### Color Palette

**Light mode** (polished terrazzo in a sun-lit atelier):
```
--cement:         #e8e4de    (warm cement base)
--cement-dark:    #d4d0c8    (grout lines)
--sheen:          #f0ece6    (polished highlight)
--text:           #2a2826    (dark aggregate text)
--text-secondary: #6a6660    (lighter cement text)
--chip-coral:     #d46a50    (coral marble chip)
--chip-sage:      #6a9a6a    (sage green marble)
--chip-gold:      #c4a040    (golden marble)
--chip-blue:      #4a7a9a    (blue marble)
--chip-cream:     #e4d4b0    (cream marble)
--chip-rose:      #b07080    (rose marble)
--brass:          #b8963a    (divider strip / borders)
--inlay:          #1a1a1e    (black granite code block)
--inlay-text:     #e4e0da    (white marble code text)
--inlay-pink:     #d4808a    (pink marble — keywords)
--inlay-green:    #70b080    (green marble — strings)
--inlay-gold:     #d4b04a    (gold fleck — numbers)
```

**Dark mode** (terrazzo at night — the chips catch ambient light):
```
--cement:         #1a1818    (dark cement)
--cement-dark:    #141212    (dark grout)
--sheen:          #222020    (slight polish)
--text:           #dcd8d0    (light text)
--text-secondary: #8a8680    (muted text)
--chip-coral:     #aa5040    (muted coral)
--chip-sage:      #4a7a4a    (muted sage)
--chip-gold:      #9a8030    (muted gold)
--chip-blue:      #3a6a8a    (muted blue)
--chip-cream:     #8a7a60    (muted cream)
--chip-rose:      #8a5060    (muted rose)
--brass:          #8a7030    (darker brass)
--inlay:          #0a0a0e    (deeper black granite)
--inlay-text:     #c8c4be    (slightly dimmer marble text)
--inlay-pink:     #c07078    (softer pink)
--inlay-green:    #5a9a68    (softer green)
--inlay-gold:     #b89a3a    (softer gold)
```

### Page-by-Page Vision

**Index page**: A polished terrazzo surface. Chips of coral, sage, gold, blue, cream, and rose are scattered across the page. The post list sits in the center — each entry separated by a thin brass divider. The site name is set in the geometric sans-serif, clean and modern against the rich aggregate surface. The chips are denser near the edges and sparser in the reading area — a natural visual hierarchy.

**Post page**: The terrazzo continues. As you scroll, different chips come into view (the background is taller than the viewport). The article text is clean and modern on the aggregate surface. Code blocks are dramatic black granite inlays with brass edging and mineral-bright syntax colors. Grout lines mark the headings. Blockquote left borders are dense chip-cluster strips. The page feels physical, joyful, and crafted.

**Navigation**: Clean geometric text on the terrazzo. Brass divider below. Links in the blue chip color with a warm gold hover. The nav reads as "modern, precise, functional" while the surface beneath it is "rich, chaotic, material."

**Code blocks**: The showpiece. Black granite inlay, brass edging, mineral-bright syntax colors. Pink marble keywords pop. Green marble strings harmonize. Gold fleck numbers sparkle. Against the warm, colorful terrazzo, the dark inlay is a bold design statement.

### Build System Changes

1. SVG filter for cement grain texture (~8 lines).
2. The 50-80 chip gradients are verbose but purely CSS — no build changes needed. Could optionally be generated at build time by a small function that produces random-feeling gradient positions, but hand-tuning often looks better.
3. Optional font inlining (DM Sans is very lightweight, ~15KB for regular woff2).

### Estimated CSS: ~600-800 lines

The chip definitions are the bulk — each chip is a radial-gradient in the background stack. With 50-80 chips across light and dark modes, this is the most CSS-heavy direction.

### Responsive

Chips work at any size — they're percentage-positioned. On very small screens, chip density decreases (use a media query to remove some gradient layers). Brass dividers stay. Grout lines stay. Inlay code blocks keep their treatment. The direction scales beautifully because terrazzo is fundamentally scale-independent — a chip at 20px looks like terrazzo whether the viewport is 320px or 2560px wide.

---

## Comparison Matrix

| Aspect | Woven Page | Ceramic Glaze | Cyanotype | Stained Glass | Oxidized Copper | Terrazzo |
|--------|-----------|--------------|-----------|--------------|----------------|---------|
| **Visual density** | Very high | High (layered) | Medium-high | High | High | Highest |
| **Metaphor coherence** | Very strong | Very strong | Very strong | Very strong | Strong | Very strong |
| **Dark mode drama** | Excellent | Excellent | Unique (blue) | **Exceptional** | Excellent | Good |
| **CSS complexity** | ~625 LOC | ~550 LOC | ~500 LOC | ~550 LOC | ~600 LOC | ~700 LOC |
| **Font character** | Serif (Garamond) | Serif (Cormorant) | Serif (Plex) | Serif (Alegreya) | Serif (Source) | **Sans-serif** (DM Sans) |
| **Build changes** | Minimal | SVG filter | SVG filter | SVG filter | SVG filter | SVG filter |
| **Signature effect** | Warp/weft weave | Glaze depth layers | Prussian blue field | Luminous color glow | Verdigris patina | Marble chips |
| **Color approach** | Indigo + natural | Warm earth range | Tonal (one hue) | Primary jewels | Copper + green | Multi-color bold |
| **Mobile degradation** | Graceful | Graceful | Excellent | Excellent | Graceful | Graceful |
| **"Wow" factor** | Hypnotic | Meditative | Striking | **Transcendent** | Substantial | Joyful |
| **Reading comfort** | Very good | Very good | Good (unusual) | Very good | Very good | Very good |
| **Personality** | "Makes things by hand" | "Values depth & process" | "Art meets science" | "Sees beauty in light" | "Embraces patina & time" | "Modernist with soul" |

## Mixing & Matching

Some high-compatibility combos across all directions:
- **Any base + Stained Glass dark mode**: The luminous glow system works as an overlay on any direction
- **Terrazzo chips + Copper palette**: Mineral chips in a copper-toned cement
- **Woven borders + any base**: Sashiko stitching is transferable everywhere
- **Cyanotype code blocks + any base**: The overexposed/reversed code treatment is unique
- **Ceramic glaze layering + Stained Glass colors**: Luminous translucent depth with jewel tones
- **Copper patina field + Terrazzo structure**: Oxidized surface with brass dividers and geometric type

## Next Steps

1. Pick a direction (or hybrid)
2. I'll implement the CSS + any template/build changes
3. We iterate on the details — color tuning, texture density, typography weight
4. Test on live content and refine
