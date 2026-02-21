# Blog Visual Redesign: Type 3 Directions

Five directions that run the four finalists (Woven Page, Stained Glass, Oxidized Copper, Terrazzo) through the Dressing Your Truth Type 3 energy filter.

## Type 3 Design Language

Every direction below is built on these Type 3 principles:

- **Texture is EVIDENT** — not subtle background hum. You should feel the grain, the weave, the tooth.
- **Angular, asymmetric composition** — nothing is perfectly centered or balanced. Dynamic tension in every element.
- **Autumn palette** — rusts, olives, bronzes, chestnuts, deep golds, chocolate, bistre, camel. Warm and saturated. NO cool blues, NO pastels.
- **Substantial weight** — thick borders, dense patterns, heavy type. Nothing precious or delicate.
- **Swift, purposeful movement** — if there's a hover transition, it's decisive (0.15s), not floaty (0.5s).
- **Dynamic contrast** — dramatic shifts between zones. The reading area vs. the margins. The code block vs. the prose. Not monotone.
- **Shapes** — triangles, trapezoids, chevrons, angular fragments. Asymmetric stripe widths. Nothing perfectly circular or perfectly square.

**Non-negotiables (same as before):**
- Static HTML with inlined CSS/JS — no external CDNs or runtime deps
- 65ch max-width reading column preserved (readability first)
- Build system stays under ~300 LOC
- Everything procedural — CSS gradients, SVG filters, no image assets
- Dark mode support via `prefers-color-scheme`
- Mobile-first responsive

---

## Direction 1: "The Kilim"

*Woven Page → Type 3*

### Concept & Mood

The Woven Page was Japanese textile — delicate sashiko, indigo, fine thread. Type 3 doesn't do delicate. This is a kilim: a flat-woven rug from Anatolia, heavy and angular. Bold geometric diamonds, chevrons, and zigzags in rich autumn tones. The kind of rug you'd find in a bazaar in Cappadocia — saturated, dense, every inch worked. You don't just see the pattern; you feel the weight of wool under your feet.

The blog-as-kilim: each post is a new band in the ongoing weave, but the geometry is angular and assertive, not meditative. The patterns push forward. The colors are warm and commanding. There's nothing tentative about this surface.

Where the Woven Page was "I make things by hand," the Kilim is "I make things by hand and they're built to last a hundred years of foot traffic."

### CSS Techniques

**Kilim weave background** (evolved from Woven Page):
```
The base woven texture stays — warp and weft CSS gradients — but
the thread is HEAVIER. 2-3px stripes instead of 1px. And the
color variation between threads is more pronounced. You can see
the weave. Opacity 10-18%, up from the Woven Page's 5-12%.

On top: a repeating-linear-gradient at 45deg and -45deg creating
a CHEVRON/DIAMOND overlay pattern. This is the kilim's geometric
motif — angular Vs interlocking across the surface. A second
pair at slightly different angles creates the complexity of a
real kilim's nested diamonds. At 8-12% opacity, this adds
bold geometry without fighting the text.
```

**Asymmetric column placement**:
```
Instead of margin: auto centering, the reading column sits
slightly LEFT of center — padding-left: 5%, padding-right: 15%
on desktop. The right margin is wider, creating a dynamic tension.
Not enough to feel "wrong" — just enough to feel intentional.
The wider right margin shows more of the kilim pattern.
```

**Heavy borders — the kilim's fringe and edge bands**:
```
The nav separator is a THICK element — 6-8px — not a hairline.
It's a repeating-linear-gradient that creates a zigzag/chevron
pattern in two colors (rust + olive or gold + chocolate). This is
the kilim's edge band — the decorative border that frames the
central field. The same treatment appears at the bottom of the
page and around code blocks.

These borders have TEETH — the zigzag is visible, not subtle.
4-6px sawtooth pattern created by repeating-linear-gradient at
alternating 45deg angles.
```

**Substantial blockquote treatment**:
```
Blockquotes get a LEFT BORDER that's 4-5px of solid rust/ochre,
plus a background that's a slightly warmer shade of the base.
The whole blockquote feels like a different band of the kilim —
a color shift in the weave. Not a thin accent line; a real
change in the fabric.
```

**Code blocks as leather-backed patches**:
```
Code blocks have a dark, warm background (chocolate brown, not
cool gray). A thick zigzag border all around. Inside, syntax
colors are kilim dyes: saffron gold, madder rust, indigo (the
one cool accent), walnut brown. The code block is a different
material — like a leather patch sewn onto the rug's reverse.
The border is the stitching.
```

**Angular link treatment**:
```
Links are colored in deep rust (not blue — Type 3 doesn't do
cool tones). Underline is a thick 2px border-bottom in a
slightly lighter rust. On hover, the underline THICKENS to 3px
and shifts to gold — swift transition (0.15s). Visited links
shift to olive. Decisive, not delicate.
```

### Typography

- **Body**: Self-host **Bitter** — a slab serif designed for screens. The slab serifs have the angular, substantial quality Type 3 demands. The thick/thin contrast in the strokes matches the kilim's varied thread weights.
- **Headings**: **Bitter Bold** — actual bold, not letterspaced. Type 3 headings should PUSH FORWARD. Slightly larger than you'd expect.
- **Code**: System monospace. On the dark leather background, monospace becomes functional craft.

### Color Palette

**Light mode** (the kilim in afternoon sun):
```
--wool:           #ede6d6    (undyed wool base — warm cream)
--warp:           #d8ceb8    (darker warp thread)
--weft:           #e2d8c4    (lighter weft thread)
--text:           #2a2018    (walnut dark — rich, warm near-black)
--text-secondary: #6a5a48    (weathered wood)
--rust:           #b84a28    (madder root rust — primary accent)
--olive:          #5a6a2a    (olive green — secondary accent)
--gold:           #c49a20    (saffron gold — highlight/hover)
--chocolate:      #3a2a1a    (dark walnut — code block bg)
--camel:          #b8a068    (camel tan — blockquote bg)
--border-a:       #b84a28    (rust zigzag border)
--border-b:       #5a6a2a    (olive zigzag border)
--link:           #9a3a18    (deep rust link)
--link-visited:   #4a5a28    (olive visited link)
```

**Dark mode** (the kilim by firelight):
```
--wool:           #1c1810    (dark wool, fire-lit)
--warp:           #282018    (dark warp)
--weft:           #221c14    (dark weft)
--text:           #e0d8c8    (firelight text)
--text-secondary: #9a8e7a    (muted warm)
--rust:           #d46a38    (brighter rust for contrast)
--olive:          #7a9a3a    (brighter olive)
--gold:           #dab430    (brighter saffron)
--chocolate:      #141008    (deeper code block)
--camel:          #2a2418    (dark blockquote bg)
--border-a:       #c45a30    (bright rust zigzag)
--border-b:       #6a8a30    (bright olive zigzag)
--link:           #d46a38    (bright rust link)
--link-visited:   #7a9a3a    (bright olive visited)
```

### Page-by-Page Vision

**Index page**: A kilim unfurled. The post list sits in the slightly-off-center reading column. Each post entry is separated by a thin chevron border — small but visible teeth. Dates in the secondary warm tone, titles in walnut dark. The wider right margin shows the full kilim geometry — diamonds and chevrons in autumn tones. The site name is set in Bitter Bold, substantial and warm. The zigzag edge band runs across the top below the nav.

**Post page**: The kilim continues beneath the article. Headings push forward in bold — no apology, no letterspacing evasion. Blockquotes are color-shifted bands. Code blocks are dramatic dark chocolate patches with zigzag stitching and kilim-dye syntax colors. The page has weight. You feel the wool. The text is purposeful and direct.

**Navigation**: Bold. The site name is substantial. Links are rust-colored with thick underlines. The separator below is the widest zigzag border on the page — the master edge band. Everything about the nav says "this blog means business."

**Code blocks**: Dark walnut ground. Saffron gold for keywords, madder rust for strings, olive for comments, camel for operators. The zigzag border anchors them to the kilim. The contrast between the dark code and the warm wool background is dynamic — Type 3 demands that shift.

### Build System Changes

1. Optional font inlining (Bitter, ~20-25KB woff2 for regular + bold).
2. No SVG filters needed — this direction is pure CSS gradients and borders.
3. No template changes.

### Estimated CSS: ~600-750 lines

### Responsive

Asymmetric column layout reverts to centered on mobile (the offset only works on wide screens). Kilim texture stays but pattern simplifies (chevron overlay hides below 600px, base weave remains). Zigzag borders stay at all sizes — they're the identity. Code block treatment is unchanged. The thick borders actually look BETTER on mobile — more substantial relative to the content area.

---

## Direction 2: "The Amber Cathedral"

*Stained Glass → Type 3*

### Concept & Mood

The original Stained Glass had cool jewel tones — ruby, sapphire, emerald — and a Gothic cathedral mood. Type 3 doesn't do cool. This is the same concept — luminous colored glass, lead came structure — but filtered through Frank Lloyd Wright and the Arts & Crafts movement. The glass is warm: amber, rust, olive, chocolate. The shapes are angular and geometric, not Gothic arches. Think Wright's tree-of-life windows: bold, asymmetric, architectural.

This is stained glass as *structure*, not ornament. Every panel is a deliberate geometric decision. The warmth radiates. The lead came is heavier — substantial dark borders that frame the content with authority. In dark mode, the warm glass glows like a Prairie-style window with a fire behind it.

The personality shift from the original: "Sees beauty in light" becomes "Builds with light and warmth."

### CSS Techniques

**Warm color panels** (evolved from Stained Glass):
```
Same technique — conic-gradient and linear-gradient layers on body —
but the palette is exclusively autumn:
- Amber gold (the dominant pane)
- Rust/terracotta (the accent pane)
- Deep olive (the contrast pane)
- Warm chocolate (where panes overlap and deepen)

Gradients are at SHARPER angles and more geometric positions
than the original's organic shapes. These are angular panels,
not flowing curves. linear-gradient at 30deg, 60deg, 120deg
creating triangular and trapezoidal color zones.

Opacity 12-25% light mode, 20-40% dark mode (more intense than
the original — Type 3 doesn't whisper).
```

**Heavy came lines** (evolved from lead came):
```
All borders are 3-4px (up from the original's 2-3px). The color
is a warm dark brown (#2a2018) not gray. These aren't decorative —
they're structural. They hold the panels together.

On nav separator and hr elements: DOUBLE lines. Two parallel
3px borders, 6px apart, in slightly different warm darks.
This is the Arts & Crafts "double-bar" motif — heavier and
more architectural than a single line.
```

**Angular glow on headings**:
```
Headings get a box-shadow glow that is NOT centered. The glow
extends MORE to the right and bottom — asymmetric, like light
hitting the heading from the upper-left. The glow color is
warm amber (rgba(200,150,50,0.15) in light mode, stronger in dark).
This creates dynamic directionality. Every heading has a light
source. The light comes from one side.
```

**Geometric rosette dividers** (evolved from the original):
```
Between sections, instead of circular rosettes, use CSS-generated
angular shapes — a diamond (rotated square), a triangle
(clip-path), or a chevron (two gradient angles meeting). These
are geometric, architectural ornaments. Created with a single
div, background gradient, and clip-path. 30-40px size.
```

**Warm-glass code blocks**:
```
Instead of the original's "frosted clear glass," code blocks
have a warm AMBER-tinted background — like looking through
amber glass. Light mode: a warm, slightly golden tint
(#f0e8d4 with a subtle amber gradient). Dark mode: deep warm
(#1a1608 with amber glow at edges).

Syntax colors are warm-spectrum stained glass: gold for keywords,
rust for strings, olive for comments, bright amber for numbers.
The heavy came border around the code block in warm dark brown.
```

**Wright-style geometric accents**:
```
Small CSS-generated angular ornaments at key structural points:
- Corners of the content area (small triangular shapes via
  border tricks or clip-path on ::before/::after)
- Junction of nav and content (small diamond)
These are the geometric leaded-glass ornaments from Prairie
School architecture — angular, warm, deliberate.
```

### Typography

- **Body**: Self-host **Zilla Slab** — a slab serif with personality. The geometric, angular slab serifs resonate with the Arts & Crafts/Wright geometric language. Substantial without being heavy. Or **Rowan** if available — sturdy, warm, confident.
- **Headings**: Same face, bold. The angular glow does extra work.
- **Code**: System monospace. The amber glass background is the visual differentiator.

### Color Palette

**Light mode** (the Wright window in morning sun):
```
--glass:          #f0ebe0    (warm clear glass base)
--came:           #2a2018    (warm dark brown — all borders)
--came-light:     #4a3a28    (lighter came for secondary borders)
--text:           #1e1a14    (warm near-black)
--text-secondary: #6a5a46    (warm mid-brown)
--amber:          #c49a30    (amber glass — dominant warm)
--rust:           #b85a28    (rust glass — accent warm)
--olive:          #5a6828    (olive glass — contrast)
--chocolate:      #3a2818    (deep overlap zone)
--link:           #9a5a18    (amber-rust link)
--link-visited:   #5a5828    (olive visited)
--code-bg:        #f0e8d4    (amber-tinted warm)
--code-border:    #2a2018    (came border)
--glow:           rgba(200,150,50,0.15) (amber glow)
```

**Dark mode** (fire behind the glass — this is the showpiece):
```
--glass:          #0e0c08    (deep warm dark)
--came:           #3a3020    (warm dark came)
--came-light:     #4a4030    (lighter came)
--text:           #e4dcd0    (warm cream text)
--text-secondary: #9a8e78    (warm muted)
--amber:          #dab030    (BLAZING amber)
--rust:           #d46a30    (BLAZING rust)
--olive:          #7a9a30    (VIVID olive)
--chocolate:      #1a1408    (deep overlap)
--link:           #daa030    (bright amber link)
--link-visited:   #8a9a40    (bright olive)
--code-bg:        #1a1608    (deep amber-tinted dark)
--code-border:    #4a3a20    (warm dark border)
--glow:           rgba(220,170,50,0.25) (STRONG amber glow)
```

### Page-by-Page Vision

**Index page**: Warm light pours through geometric panels. The post list is framed by heavy came borders — the double-bar Arts & Crafts motif at top and bottom. Angular ornaments mark the corners. Each post entry is simple but the warm amber/rust/olive glow shifts behind it. The site name in Zilla Slab Bold — substantial, architectural. On dark mode, the page literally glows warm.

**Post page**: The angular color panels shift as you scroll (background-attachment: fixed). Heavy came borders frame the content. Headings glow from the upper-left — dynamic, directional light. Geometric diamond dividers between sections. Code blocks sit in their amber-glass panel, warm and rich. Blockquotes have the heavy came left border. The whole page is a Wright house — warm, geometric, and built with intention.

**Navigation**: Heavy. Double-bar came border below. Substantial type. Warm rust links. The nav is the stone lintel of the window — it holds everything up.

**Code blocks**: Amber-tinted glass. The syntax colors are all warm: gold keywords pop against the warm background. Rust strings. Olive comments. The heavy came border frames the code like a leaded panel. In dark mode, the code block itself has a faint amber glow at the edges — light leaking through.

### Build System Changes

1. Optional SVG filter for glass texture (same as original Stained Glass).
2. Optional font inlining (Zilla Slab, ~25KB for regular + bold woff2).
3. Geometric ornaments: pure CSS (clip-path, border tricks) — no build changes.

### Estimated CSS: ~550-650 lines

### Responsive

Came borders stay heavy on mobile (they're the identity). Color panels simplify. Geometric corner ornaments hide below 600px. Asymmetric glow on headings stays. The warmth and weight carry at every size.

---

## Direction 3: "The Forge"

*Oxidized Copper → Type 3*

### Concept & Mood

The original Oxidized Copper was elegant — verdigris patina, the quiet dignity of aged metal. Type 3 doesn't do quiet. This is the same material, but we're in the forge where it's being worked. The copper is fresh from the fire — hot, ruddy, with hammer marks. Some areas have begun to oxidize, but the dominant energy is the raw metal: bright, warm, actively being shaped.

The forge is where things get MADE. The bellows pump, the anvil rings, the metal bends. This blog is an active workshop, not a museum display. The texture is hammered, not smoothly patinated. The edges are angular — cut, bent, riveted. The heat is visible in the color — deep reds and oranges at the center, cooling to copper and bronze at the edges.

The personality shift: "Embraces patina and time" becomes "Shapes metal with fire and force."

### CSS Techniques

**Heat-gradient background** (evolved from Oxidized Copper):
```
Instead of the original's cool verdigris-dominant patina, the body
background is built from WARM gradients: deep copper, bronze, and
touches of fire-red at the center. The heat radiates from the middle
of the page outward:

Large radial-gradient centered on the page: deep red-orange at center
(#4a1a08) through copper (#8a4a20) to bronze (#6a4a28) at edges.
Very low opacity (8-15%) but it creates a subtle "heat map" effect.

On top: 3-4 smaller radial-gradients in slightly cooler copper tones
(the spots where the metal is cooling). These are ASYMMETRIC —
positioned off-center, different sizes.

The result: a warm, actively shifting surface that reads as
"metal being worked" not "metal sitting in a garden."
```

**Hammer-mark texture** (evolved from metal grain):
```
SVG <feTurbulence> with a different character than the original:
higher amplitude, lower frequency — creating VISIBLE marks that
read as hammer strikes, not smooth grain. The filter creates
dimpled, slightly uneven surface texture.

Applied at 5-8% opacity — subtle but you can SEE the marks.
This isn't polished; it's worked.
```

**Angular rivets** (evolved from the original's round rivets):
```
The original had small round rivets. Type 3 rivets are ANGULAR —
small square or diamond shapes (rotated squares), larger (10-12px),
with a more pronounced metallic highlight. Created with:
background: linear-gradient(135deg, highlight, shadow) on a
rotated square pseudo-element.

Positioned at structural junctions: corners of code blocks,
both ends of the nav separator, corners of blockquote borders.
These are functional fasteners — they hold things together.
```

**Cut-and-bent code blocks**:
```
Code blocks look like a DIFFERENT PIECE OF METAL — darker, cooler
(aged iron or dark steel). The edges aren't smooth borders — they're
created with a clip-path that has subtle angular notches, like
sheet metal that was cut with snips. The top edge has a 2-3px
"fold" — a lighter gradient line that suggests bent metal.

Inside: syntax colors are forge colors. Bright copper (#daa060)
for keywords. Fire orange (#d46a30) for strings. Cooled bronze
(#8a7a50) for comments. Bright iron-white (#e0d8c8) for base text.
```

**Spark accents**:
```
Tiny decorative elements scattered very sparsely — 2-3 per page —
that are bright points of color (saffron gold, #dab030) with a
small radial-gradient glow. Like sparks from the anvil.
Positioned with nth-child or fixed CSS positions at certain
structural points. 4-6px, high opacity. These are the one
element of "fire" amid the metal.
```

**Anvil-weight headings**:
```
Headings are HEAVY — font-weight bold, slightly larger than
expected, with a text-shadow that's not the original's
"hammered vibration" but instead a SINGLE strong shadow:
2px to the right and 2px down, in a warm dark tone. This
gives every heading a solid, stamped quality — metal type
struck with force.
```

**Heat-scale link treatment**:
```
Unvisited links are hot copper — bright, warm (#c46a30).
Hover: they get HOTTER — brighter, more orange, with a very
subtle glow (text-shadow in warm orange). Visited links COOL
— shift to bronze (#8a7a40). The metaphor: engagement heats
the metal, and it cools over time. Fast transitions (0.12s).
```

### Typography

- **Body**: Self-host **Source Serif 4** — sturdy, upright, mechanical precision. The regularity of the type contrasts with the organic metal surface. Or **Bitter** (slab serif) for even more substance.
- **Headings**: Same face, bold. The single heavy shadow does the rest.
- **Code**: System monospace. The cut-metal block is the visual boundary.

### Color Palette

**Light mode** (the forge at midday, doors open):
```
--metal:          #ede0c8    (warm bronze-cream base)
--copper-hot:     #c46a30    (fresh hot copper)
--copper-warm:    #b87a40    (cooling copper)
--bronze:         #8a6a38    (aged bronze)
--iron:           #4a3a28    (dark iron)
--text:           #2a1e14    (dark forged iron)
--text-secondary: #6a5438    (weathered bronze)
--fire:           #d44a18    (fire accent — sparks)
--saffron:        #dab030    (spark gold)
--code-bg:        #2a2218    (dark steel code block)
--code-text:      #e0d8c8    (bright iron text)
--code-fold:      #4a3a28    (fold highlight)
--rivet:          #c49a40    (polished brass rivet highlight)
--link:           #c46a30    (hot copper)
--link-hover:     #e47a28    (hotter copper)
--link-visited:   #8a7a40    (cooled bronze)
--came:           #3a2818    (structural border — dark iron)
```

**Dark mode** (the forge at night — lit by the fire):
```
--metal:          #181410    (dark metal, fire-reflected)
--copper-hot:     #e48a40    (glowing hot copper)
--copper-warm:    #c47a38    (warm copper)
--bronze:         #8a6a30    (dark bronze)
--iron:           #0e0c08    (deep iron dark)
--text:           #e4dac8    (fire-lit text)
--text-secondary: #9a8a70    (dim fire-lit)
--fire:           #f06028    (BRIGHT fire)
--saffron:        #f0c838    (bright spark)
--code-bg:        #0e0c06    (deep dark iron)
--code-text:      #c8c0b0    (cooler text)
--code-fold:      #2a2218    (dark fold)
--rivet:          #dab050    (bright brass)
--link:           #e48a40    (glowing copper)
--link-hover:     #f09a38    (BRIGHT hot)
--link-visited:   #a89a50    (cooled bronze)
--came:           #2a2018    (dark iron border)
```

### Page-by-Page Vision

**Index page**: Hot metal. The heat gradient radiates subtly from the center. Hammer texture dimples the surface. The post list sits in the warm zone — date in bronze, title in dark iron. Angular rivets at the corners of the content area. The nav separator is a heavy iron bar with diamond rivets at each end. Sparks glint at two or three points. The site name is stamped: bold, shadowed, definitive.

**Post page**: The forge in full production. Headings land with anvil weight — bold, shadowed, hot copper accents. The article flows in the warm serif on the hammered metal surface. Code blocks are the dramatic shift — dark steel with cut edges and a fold highlight, syntax colors in forge tones. Blockquotes have heavy iron left borders. Between sections, a small angular ornament (diamond rivet or chevron). The page has momentum. It pushes forward.

**Navigation**: Iron. Heavy border below — thick, warm dark. Links glow like heated copper on hover. Angular rivets at structural points. The nav is the anvil — everything rests on it.

**Code blocks**: Dark steel. Cut edges (clip-path with angular notches). The fold highlight at the top suggests bent sheet metal. Inside: copper keywords, fire-orange strings, bronze comments. The heavy border is dark iron. Angular rivets at two corners.

### Build System Changes

1. SVG filter for hammer-mark texture (~10 lines).
2. Optional font inlining.
3. Spark elements: pure CSS radial-gradient on positioned pseudo-elements, no build changes.

### Estimated CSS: ~600-700 lines

### Responsive

Heat gradient stays at all sizes. Hammer texture stays. Angular rivets hide on mobile (margin elements). Cut-edge code blocks simplify to standard rectangular (clip-path can cause rendering issues at small sizes). Spark elements hide below 600px. The warmth and weight carry at every size.

---

## Direction 4: "The Mosaic Atelier"

*Terrazzo → Type 3*

### Concept & Mood

The original Terrazzo was joyful Italian modernism — random round chips, playful colors, geometric sans-serif type. Type 3 takes the same material concept but makes it ANGULAR and AUTUMNAL. The chips become triangular and trapezoidal fragments — like smashed tiles in a zellij mosaic, or the angular aggregate in an exposed-concrete wall. The colors shift from the original's coral/sage/blue to deep autumn: rust chips, olive chips, bronze chips, chocolate chips, saffron chips.

This is terrazzo as it's made in a working atelier — not the polished hotel-lobby floor but the workshop where the mix is being poured. The cement is rougher-textured. The brass dividers are heavier. The type is bolder. Everything has more GRIT.

The reference shifts from Italian modernism to the artisan workshops of Fez, where zellij tilework is still cut by hand — angular fragments assembled into rich geometric patterns.

### CSS Techniques

**Angular chip field** (evolved from Terrazzo):
```
Same approach — many small radial-gradient spots — but with two
key changes:

1. ANGULAR shapes: Instead of circular radial-gradients, use
   conic-gradient segments to create triangular and diamond-shaped
   chips. Each "chip" is a conic-gradient with 2-3 color stops
   spanning 30-90 degrees, creating a pie-slice/wedge shape.
   Rotated at various angles via separate background layers.

2. AUTUMN palette: Rust, olive, bronze, chocolate, saffron, bistre.
   No cool tones. Each chip is a warm autumn color.

50-70 chips, 8-30px, at varied rotations. The effect is similar
to the original but EDGIER — angular fragments instead of
smooth pebbles.
```

**Rough cement texture** (evolved from Terrazzo):
```
SVG <feTurbulence> at higher amplitude than the original —
visible grain. The cement isn't polished smooth; it's rough
aggregate surface. You can feel the sand. Applied at 5-8%
opacity, up from the original's 3%.
```

**Heavy brass dividers** (evolved from Terrazzo):
```
Same brass-strip concept but THICKER — 3-4px borders instead
of the original's 2px. The brass color is deeper and warmer
(#a07a20, more bronze than gold). Double lines at major breaks
(nav separator, top/bottom of post list). These are STRUCTURAL
elements, not decorative accents.
```

**Angular inlay code blocks** (evolved from Terrazzo):
```
Same black-granite inlay concept, but the border treatment is
angular — the brass edging has NOTCHED corners. Created with
clip-path or layered border-images. The corners aren't
rounded — they're chamfered (45-degree cuts). This echoes the
angular chip shapes.

Syntax colors shift to autumn: saffron gold for keywords,
rust for strings, olive for comments, bright bronze for numbers.
The pink/coral from the original is gone — everything is warm.
```

**Dense chip clusters as borders**:
```
Instead of the original's "chip cluster accent" on blockquotes,
Type 3 gets a dense strip of angular chips as the LEFT BORDER
of blockquotes — 8-12px wide, packed with small angular gradients.
This is the zellij border — a band of intense geometric fragments
that frames the indented text. Heavy, visible, assertive.
```

**Grout lines with character**:
```
Headings are separated by double grout lines (same as original)
but with an added CHEVRON element — a small angular shape
(CSS border-trick or gradient) centered between the double lines.
The chevron is in the brass color. This is the Type 3 angular
signature on an existing structural element.
```

### Typography

- **Body**: Self-host **DM Sans** (same as original Terrazzo — the geometric sans is the right call for this material). Or **Outfit** for slightly more warmth.
- **Headings**: DM Sans Bold (or Medium). The angular environment carries enough texture; the type should be clean and architectural but SUBSTANTIAL.
- **Code**: **DM Mono** or system monospace.

### Color Palette

**Light mode** (the atelier floor in warm light):
```
--cement:         #e4daca    (warmer cement than original)
--cement-dark:    #d0c4b0    (warmer grout)
--text:           #2a2018    (warm dark)
--text-secondary: #5a4a38    (warm mid)
--chip-rust:      #b85a28    (rust fragment)
--chip-olive:     #5a6828    (olive fragment)
--chip-bronze:    #9a7a30    (bronze fragment)
--chip-chocolate: #4a3018    (chocolate fragment)
--chip-saffron:   #c4a028    (saffron fragment)
--chip-bistre:    #6a5028    (bistre fragment)
--brass:          #a07a20    (divider strips — deep warm brass)
--inlay:          #1a1810    (black granite inlay)
--inlay-text:     #e0d8c8    (warm marble text)
--inlay-saffron:  #dab040    (keyword gold)
--inlay-rust:     #d46a38    (string rust)
--inlay-olive:    #7a9a40    (comment olive)
--inlay-bronze:   #c49a40    (number bronze)
```

**Dark mode** (the atelier at night):
```
--cement:         #1a1610    (dark warm cement)
--cement-dark:    #121008    (dark grout)
--text:           #dcd4c4    (warm light text)
--text-secondary: #8a7e68    (muted warm)
--chip-rust:      #8a4a20    (muted rust)
--chip-olive:     #4a5820    (muted olive)
--chip-bronze:    #7a6028    (muted bronze)
--chip-chocolate: #3a2410    (dark chocolate)
--chip-saffron:   #9a7a18    (muted saffron)
--chip-bistre:    #4a3818    (dark bistre)
--brass:          #7a5a18    (darker brass)
--inlay:          #0a0a06    (deeper black granite)
--inlay-text:     #c8c0b0    (dimmer marble)
--inlay-saffron:  #b89a30    (softer gold)
--inlay-rust:     #b85a28    (softer rust)
--inlay-olive:    #6a8a30    (softer olive)
--inlay-bronze:   #a87a30    (softer bronze)
```

### Page-by-Page Vision

**Index page**: Angular fragments on warm rough cement. The post list is framed by heavy brass double-bars with chevron accents. Each entry is separated by single brass lines. The chip field is denser at the margins, sparser in the reading zone. The site name in DM Sans Bold — clean geometry against the artisan surface. The whole page feels like a workshop floor, actively being laid.

**Post page**: The angular chips continue behind the article. Headings are marked by chevron-accented grout lines. Code blocks are dramatic dark inlays with chamfered brass borders. Blockquotes have dense zellij-strip left borders. The geometric type and angular fragments reinforce each other — this is a page designed by someone who cuts stone by hand.

**Navigation**: Clean geometric type, heavy brass double-bar below with centered chevron. Links in deep rust with thick underlines. The nav is the threshold — a brass-edged stone slab at the entrance to the atelier.

**Code blocks**: Black granite with chamfered corners. Autumn syntax colors glow against the dark field. The brass border is heavy and warm. Inside, the clean monospace is a calming contrast to the angular energy outside.

### Build System Changes

1. SVG filter for rough cement texture (~8 lines).
2. Optional font inlining (DM Sans is very lightweight).
3. Angular chips via conic-gradient are pure CSS — no build changes.

### Estimated CSS: ~650-800 lines

### Responsive

Angular chips simplify on mobile (fewer layers, larger chips). Heavy brass dividers stay. Chevron accents stay. Chamfered code block corners revert to standard on very small screens. The warm autumn palette and substantial weight carry at every size.

---

## Direction 5: "The Tooled Leather"

*A new Type 3 direction — no direct ancestor*

### Concept & Mood

The page is a piece of tooled leather. Not glossy fashion leather — thick, vegetable-tanned saddlery leather that has been carved, stamped, and burnished by hand. The kind of leather you find on a well-made western saddle, a Renaissance book binding, or a craftsman's belt. The surface has depth: carved floral scrollwork in the margins, stamped geometric borders, the natural grain of the hide visible everywhere.

This is the purest Type 3 direction: leather is THE substantial, textured, warm material. It's angular (cut with sharp tools), rich (deep warm browns), dynamic (it darkens and develops character with use), and active (it's working material, not decorative). You can't fake leather — it demands craft.

Code blocks are brass or nickel plates — cold metal riveted onto the warm leather. The contrast between organic leather and machined metal is the visual engine.

### CSS Techniques

**Leather grain background** (the foundation):
```
SVG <feTurbulence> with specific settings tuned to create a
leather-grain texture — slightly directional, organic, with
more amplitude than paper grain but less than hammer marks.
Applied as a ::before at 8-12% opacity on the warm brown base.
This is the hide — you can see the animal's skin in the surface.
```

**Tooled/carved border panels**:
```
This is the maximalist signature. Using repeating-linear-gradient
at 45deg and -45deg angles, create a DENSE geometric border
pattern that runs down the left margin and across the top/bottom
of the page. The pattern is:

- Diamonds and triangles interlocking (like real leather tooling)
- In slightly darker/lighter shades of the base leather color
- Creating a "carved" look via subtle shadows (darker below-right)
  and highlights (lighter above-left) on each shape

This border is 30-40px wide on the left, 10-15px on top/bottom.
It's the carved frame around the content area. The detail is
dense and rewarding — zoom in and you see the pattern.
```

**Burnished edges on headings**:
```
Headings have a color treatment that suggests burnished leather —
slightly darker and more saturated than body text, with a very
subtle gradient that's darker at the top and lighter at the bottom
of each letter (via background-clip: text). The effect: the letters
look pressed into the leather and burnished smooth.
```

**Stamped accent elements**:
```
Small geometric stamps at structural points — rosettes (not
circular — hexagonal or octagonal) and diamonds. Created with
CSS gradients and clip-path. 15-20px. Positioned at:
- Each end of nav separator
- Before h2/h3 headings (as ::before pseudo-element)
- Corners of code block border
These are the leather-worker's stamps — small, precise, repeated.
```

**Metal plate code blocks**:
```
Code blocks are COLD METAL: brushed steel or aged brass.
Background: a metallic gradient (linear-gradient from slightly
lighter to slightly darker, suggesting a flat metal surface
catching light from one direction). An SVG filter with very
fine directional grain creates the brushed-metal texture.

Border: a 2px solid border in dark oxidized metal color, with
small angular rivets (diamond-shaped, 8px) at each corner.

Inside: syntax colors are etched/engraved into the metal:
bright brass for keywords, patina green for strings, stamped
dark for comments, bright copper for numbers.

The contrast between warm organic leather and cold precise metal
is the dramatic center of this direction.
```

**Stitching details**:
```
The leather tooled border is "stitched" to the main panel with
a visible stitch line: a dashed border (4px dash, 4px gap) in
a slightly lighter thread color, running parallel to the tooled
border at 3px offset. This is saddle stitching — functional,
visible, crafted.
```

**Lacing on blockquotes**:
```
Blockquotes have a left border that's styled as leather LACING —
a repeating X pattern created by two overlapping diagonal
repeating-linear-gradients. The color is slightly lighter than
the base leather. This replaces the typical solid left border
with something that's both ornamental and structurally referent.
```

### Typography

- **Body**: Self-host **Bitter** — the slab serif that reads as "tooled" at text sizes. The angular slab serifs echo the stamped quality. Or **Crete Round** for slightly softer edges (still substantial).
- **Headings**: Bitter Bold. The burnished treatment adds dimension.
- **Code**: System monospace. On the metal plate, the regularity of monospace reads as "machined."

### Color Palette

**Light mode** (new leather in the workshop):
```
--leather:        #d4b88a    (natural veg-tan leather)
--leather-dark:   #b89868    (carved/shadowed leather)
--leather-light:  #e4cca0    (burnished highlight)
--tooling-dark:   #8a7048    (deep carved shadow)
--tooling-light:  #e8d4a8    (carved highlight)
--text:           #2a1e10    (dark burnished text)
--text-secondary: #5a4828    (lighter burnished)
--stitch:         #c4a870    (thread color)
--stamp:          #7a5a28    (stamp/accent color)
--metal:          #c8c0b0    (brushed steel code bg)
--metal-dark:     #a8a090    (darker metal edge)
--metal-border:   #4a4238    (oxidized metal border)
--rivet:          #b89840    (brass rivet)
--etch-brass:     #c4a040    (keyword — brass etching)
--etch-patina:    #4a7a58    (string — patina green)
--etch-dark:      #6a6258    (comment — dark stamp)
--etch-copper:    #c47a38    (number — copper)
--link:           #8a4a18    (oiled leather — warm dark link)
--link-visited:   #5a5828    (aged/green patina)
```

**Dark mode** (old leather by lamplight):
```
--leather:        #2a2018    (aged dark leather)
--leather-dark:   #1a1408    (deep shadow)
--leather-light:  #3a3020    (highlight catch)
--tooling-dark:   #141008    (deep carved)
--tooling-light:  #4a3a28    (carved highlight)
--text:           #dcd0b8    (lamplight text)
--text-secondary: #9a8a6a    (dim secondary)
--stitch:         #5a4a30    (dark thread)
--stamp:          #6a5228    (dark stamp)
--metal:          #3a3830    (dark brushed steel)
--metal-dark:     #2a2820    (darker metal)
--metal-border:   #1a1810    (very dark border)
--rivet:          #8a7030    (dark brass)
--etch-brass:     #dab050    (brighter keyword brass)
--etch-patina:    #5a9a68    (brighter patina)
--etch-dark:      #8a8068    (lighter dark stamp)
--etch-copper:    #e49a48    (brighter copper)
--link:           #c47a38    (bright warm link)
--link-visited:   #7a8a40    (bright aged green)
```

### Page-by-Page Vision

**Index page**: A leather portfolio opened flat. The tooled border frames the left side and top — dense geometric carving in darker/lighter leather tones. Stitching runs parallel to the border. The post list sits on the smooth central panel. Each entry has a small stamped rosette before the date. Titles in dark burnished text. The site name is branded (not literally — the bold type with burnished treatment implies heat-stamped). Brass rivet accents at key structural points.

**Post page**: The leather surface carries the article. The tooled border continues down the left. Headings are burnished — darker, richer, with the gradient treatment. Code blocks are the dramatic material shift: cold metal plates riveted onto the warm leather. Syntax colors glow as etched metal. Blockquotes have the leather-lacing left border. Between sections, a stamped geometric ornament. The page feels like a hand-crafted artifact — every detail considered, every joint visible.

**Navigation**: Branded. The site name in bold slab serif, burnished. Links in oiled-leather tones. The separator below is a combination: a stitched line with stamped rosettes at each end. Heavy, crafted, intentional.

**Code blocks**: The centerpiece. Brushed metal with directional grain texture. Diamond rivets at each corner. Brass keywords, patina strings, dark stamps for comments. The oxidized metal border. This is a machined plate bolted onto hand-tooled leather — the meeting of two crafts. In dark mode, the metal plate catches lamplight.

### Build System Changes

1. SVG filter for leather grain (~10 lines) + optional second SVG filter for brushed metal on code blocks (~8 lines).
2. Optional font inlining (Bitter, ~20-25KB).
3. Stamped elements and tooled borders are pure CSS gradients — no build changes.
4. The stitching and lacing are CSS border tricks — no build changes.

### Estimated CSS: ~700-850 lines

The highest estimate because the tooled border panel is gradient-dense. The stitching, lacing, and metal-plate effects each add complexity.

### Responsive

Tooled border hides on mobile (it's a left-margin feature). Stitching simplifies to a standard dashed border. Stamped elements shrink. Lacing on blockquotes reverts to a solid left border. Metal code blocks keep their treatment (the material contrast is the identity). The warm leather palette and substantial weight carry at every size.

---

## Comparison Matrix

| Aspect | Kilim | Amber Cathedral | Forge | Mosaic Atelier | Tooled Leather |
|--------|-------|----------------|-------|---------------|----------------|
| **Origin** | Woven Page | Stained Glass | Oxidized Copper | Terrazzo | NEW |
| **Visual density** | Very high | High | High | Very high | Highest |
| **Type 3 angularity** | Chevrons/diamonds | Geometric panels | Cut metal | Angular chips | Tooled borders |
| **Type 3 texture** | Heavy weave | Glass texture | Hammer marks | Rough cement | Leather grain |
| **Type 3 warmth** | Autumn wool | Amber glow | Forge heat | Autumn chips | Oiled leather |
| **Type 3 weight** | Thick zigzag borders | Heavy came + double bars | Iron borders + rivets | Heavy brass + chevrons | Stitching + rivets |
| **Dark mode** | Firelit wool | **BLAZING warm glass** | Forge at night | Warm workshop | Lamplight leather |
| **CSS complexity** | ~675 LOC | ~600 LOC | ~650 LOC | ~725 LOC | ~775 LOC |
| **Font match** | Bitter (slab) | Zilla Slab | Source Serif 4 | DM Sans (geo) | Bitter (slab) |
| **Build changes** | None (pure CSS) | SVG filter | SVG filter | SVG filter | SVG filter x2 |
| **Signature moment** | Zigzag nav border | Asymmetric heading glow | Cut-edge code blocks | Chamfered brass inlays | Metal plates on leather |
| **Mobile** | Graceful | Graceful | Good | Graceful | Good |
| **"Wow" factor** | Bold & handmade | Warm & luminous | Powerful & active | Rich & architectural | **Tactile & crafted** |
| **Personality** | "I weave bold things" | "I build with warm light" | "I shape things with force" | "I cut stone by hand" | "I work with my hands" |

## Mixing & Matching

Type 3 elements that transfer between directions:
- **Kilim's zigzag borders** → work on any direction as nav/section separators
- **Amber Cathedral's asymmetric glow** → works on any heading in any direction
- **Forge's heat gradient** → as a background wash beneath any other texture
- **Mosaic Atelier's chamfered corners** → angular code block corners work anywhere
- **Tooled Leather's metal-plate code blocks** → the organic/metal contrast transplants beautifully

The strongest hybrid possibilities:
- **Kilim base + Forge code blocks**: Bold woven surface with hammered-metal code
- **Amber Cathedral + Tooled Leather borders**: Warm luminous glass with carved leather framing
- **Mosaic Atelier base + Amber Cathedral glow**: Angular chips with warm light behind them

## Next Steps

1. Pick a direction (or hybrid)
2. I'll implement the CSS + any template/build changes
3. We iterate — color tuning, texture density, border weight
4. Test on live content and refine
