# Blog Visual Redesign: Type 3/4 Directions

Five directions designed natively for Type 3 with secondary 4 energy.

## The 3/4 Design DNA

The 3/4 is the most intense Type 3 expression. Two forces in productive tension:

**The 3 (dominant)**: Rich, dynamic, textured, angular, substantial, warm. Autumn palette. Heavy borders. Evident grain. Push-forward energy. You feel the material.

**The 4 (secondary)**: Bold contrast, striking precision, clean structure, authority, more BLACK. Parallel lines. Stillness-within-movement. Simplification. You see the architecture.

**Together**: Warm textures with razor-sharp structure. High contrast — not a sea of mid-tone earth tones but rich warmth AGAINST deep black. Angular but architecturally precise, not rustic. Fewer colors, bolder choices. Everything is intentional. Nothing is tentative. Nothing is fussy.

Think: a Frank Lloyd Wright house (warm wood, angular geometry, absolute precision). A Japanese chef's knife (warm wooden handle, ice-cold steel blade). A cast iron skillet (heavy, textured, pure function).

**Non-negotiables:**
- Static HTML with inlined CSS/JS — no external CDNs or runtime deps
- 65ch max-width reading column preserved (readability first)
- Build system stays under ~300 LOC
- Everything procedural — CSS gradients, SVG filters, no image assets
- Dark mode support via `prefers-color-scheme`
- Mobile-first responsive

---

## Direction 1: "The Foundry"

### Concept & Mood

The page is a cast-iron surface with precision brass inlay. Two materials in high contrast: the iron is dark, heavy, textured with the fine grain of sand-casting. The brass is warm, bright, and laid in with geometric precision — clean lines, exact angles, no waver. Where iron is the body, brass is the structure.

This is where heavy industry meets fine craftsmanship. A foundry that makes precision instruments, not rough castings. Every brass line is milled to tolerance. Every iron surface is textured but intentional. The blog-as-foundry: the writing (iron) is substantial and weighty. The structure (brass) is exact and navigable. Code blocks are polished brass plates — the precision component within the heavy base.

The 3/4 tension is visible in every element: the organic texture of the iron (3) held in place by the geometric authority of the brass (4). Rich warmth and dark depth. Rough surface and clean edge.

### CSS Techniques

**Cast iron surface** (the 3 — texture, weight):
```
Body background: deep warm dark (#1a1610 light mode base surface,
even darker in dark mode). Not pure black — warm, like iron
with carbon content.

SVG <feTurbulence> filter creates a fine sand-cast grain: medium
frequency, low amplitude. Slightly more visible than most
directions — 6-10% opacity. You can SEE the casting texture.
This is the 3 speaking: texture must be evident.
```

**Brass inlay lines** (the 4 — precision, structure):
```
KEY DESIGN ELEMENT: thin (1-2px) warm brass-colored lines
(#c4a040) that create an angular geometric framework across
the page. These are PRECISELY placed:

- Two vertical lines running full-height, defining the reading
  column edges (left and right margins of <main>)
- Horizontal line below nav
- Horizontal lines above and below code blocks
- Thin horizontal rules between post entries on index

These lines are CLEAN — no texture, no waver, no gradient.
Solid brass against textured iron. The contrast between the
organic surface and the precise lines IS the design.

Implemented as border properties and ::before/::after pseudo-
elements with position: absolute. Pure CSS.
```

**Reading column as precision bore**:
```
<main> sits between the two vertical brass lines. The background
within <main> is slightly lighter than the surrounding iron —
a machined surface where material has been removed to create a
precision channel. The column isn't just centered by margins;
it's DEFINED by the brass lines. You read within the structure.
```

**Brass plate code blocks** (the 4 — precision):
```
Code blocks are the inverse: BRASS SURFACE on iron field.
Warm golden background (#3a3018 dark, #f0e4c8 light) with
a very subtle directional grain (linear-gradient at 0.5%
variation, creating a brushed-metal sheen).

Border: the brass inlay lines continue around the code block —
thin, precise, same 1-2px weight. No decorative borders. Just
the structural brass framework extending around this element.

Syntax colors on the brass surface:
- Dark iron (#2a1e10) for base text
- Rust (#8a3a18) for keywords (hot metal)
- Deep olive (#3a4a18) for strings
- Warm gray (#5a5040) for comments
- Bright copper (#c47030) for numbers/constants
```

**High-contrast text**:
```
Body text is warm cream (#ede4d0) on the dark iron field
(light mode uses the inverse: dark iron text on warm cream).
The contrast ratio is HIGH — this is the 4 speaking. No
mid-tone-on-mid-tone. Dark against light. Readable from
across the room.
```

**Angular structural accents**:
```
At key junctions — where the vertical brass lines meet the
horizontal ones — small ANGULAR accents: 45-degree mitered
corners (like a picture frame joint) or small diamond shapes.
Created with CSS border tricks. These are the machinist's
marks — evidence of precision joinery.
```

**Decisive link treatment**:
```
Links in warm brass (#c4a040 on dark, #7a5a10 on light).
No underline by default. On hover: a 2px bottom border
appears INSTANTLY (transition: 0s or 0.08s). The 4 doesn't
ease in. It appears. Binary. On/off. Visited links shift to
a darker brass (#8a7030 / #5a4818) — the brass has oxidized.
```

### Typography

- **Body**: Self-host **Source Serif 4** — upright, regular, mechanical precision. The consistent stroke width reads as "engineered." Strong 4 energy in the letterforms.
- **Headings**: Source Serif 4 **Semibold** (not Bold — controlled, not shouting). Slightly letterspaced (0.02em). The 4 secondary prefers authority through precision, not volume.
- **Code**: System monospace. Clean, functional, machined.

### Color Palette

**Light mode** (the foundry floor, skylights open):
```
--iron:           #f0e8d8    (light warm iron surface)
--iron-grain:     #e4dac8    (grain shadow)
--iron-dark:      #d4c8b0    (heavier iron areas)
--brass:          #c4a040    (precision inlay line)
--brass-surface:  #f0e4c8    (code block brass plate)
--brass-dark:     #8a7028    (oxidized brass)
--text:           #1a1408    (deep warm near-black)
--text-secondary: #5a4a30    (warm mid-dark)
--rust:           #8a3a18    (hot keyword)
--olive:          #3a4a18    (string)
--copper:         #c47030    (number/constant)
--comment:        #7a7060    (iron-gray comment)
--link:           #7a5a10    (warm brass link)
--link-visited:   #5a4818    (oxidized brass)
```

**Dark mode** (the foundry at night, furnace glow):
```
--iron:           #141008    (deep dark iron)
--iron-grain:     #1a1610    (grain highlight)
--iron-dark:      #0e0c06    (deepest iron)
--brass:          #c4a040    (same brass — it doesn't change)
--brass-surface:  #2a2414    (dark brass plate for code)
--brass-dark:     #8a7028    (same oxidized)
--text:           #e8e0d0    (warm cream text)
--text-secondary: #9a8e78    (warm mid-light)
--rust:           #d46a30    (bright hot keyword)
--olive:          #7a9a38    (bright string)
--copper:         #e49a48    (bright number)
--comment:        #6a6450    (muted comment)
--link:           #dab050    (bright brass link)
--link-visited:   #9a8040    (dimmer brass)
```

### Page-by-Page Vision

**Index page**: Dark iron field with brass framework visible. Two vertical brass lines define the reading column. The post list is structured and clean — each entry separated by a thin horizontal brass line. Date in secondary warm tone, title in high-contrast cream. The site name at top: Semibold, letterspaced, authoritative. The nav separator is the master horizontal brass line. No decoration. No ornament. Just material and structure.

**Post page**: The brass framework continues. The article flows in high-contrast text within the precision channel. Headings are Semibold, slightly letterspaced — they don't shout, they command. Code blocks are the dramatic brass plates — warm surface with iron-toned syntax colors. The contrast between the dark iron body and the warm brass code is the page's visual center. Blockquotes get a single brass inlay line on the left (same 1-2px — consistent with the system). The page is heavy, warm, and precise.

**Navigation**: Clean. Site name and links on the iron surface. Horizontal brass line below — the master structural element. Links appear/disappear their underlines decisively. Everything is exact.

**Code blocks**: Warm brass plates within the iron framework. The brushed-metal sheen catches the eye. Syntax colors are iron-spectrum: rust keywords, olive strings, copper numbers, gray comments. The brass inlay lines border the block precisely. Mitered angular accents at two corners.

### Build System Changes

1. SVG filter for cast-iron grain (~10 lines).
2. Optional font inlining (Source Serif 4, ~25KB for regular + semibold woff2).
3. Brass framework is pure CSS borders and pseudo-elements — no build changes.

### Estimated CSS: ~500-600 lines

Leaner than some directions because the 4 secondary demands simplification. The brass framework is structurally simple (borders, not complex gradients). The iron grain is one SVG filter. The visual impact comes from contrast and precision, not pattern density.

### Responsive

Vertical brass lines hide on mobile (they're margin elements). Horizontal brass lines stay — they're structural. Cast-iron grain stays. Code blocks keep their brass-plate treatment. High-contrast text is unchanged. The direction actually simplifies beautifully on mobile because the underlying system is structural, not ornamental.

---

## Direction 2: "The Urushi"

### Concept & Mood

Japanese urushi lacquerware. Not the decorative kind you see in tourist shops — the real thing. Dozens of layers of lacquer, each one applied, dried, and polished before the next. The surface is deep warm black-brown with incredible optical depth. You look INTO it, not AT it. Then: maki-e. Gold powder sprinkled and set into the lacquer in precise geometric patterns. Warm gold on deep dark warmth.

This is the most refined 3/4 expression. The 3 is in the warmth, the layered depth, the organic material (urushi is tree sap). The 4 is in the precision of the maki-e patterns, the authority of the deep dark surface, the striking gold-on-black contrast. The simplicity is deceptive — the surface LOOKS simple but contains dozens of invisible layers.

The blog-as-urushi: the writing is embedded in layers of lacquer. Each post is another coat. The gold geometric accents are the structure — navigation, headings, code blocks. The depth of the dark surface gives every word weight.

This direction is the darkest and most dramatic. The "light mode" IS dark (warm black-brown). The actual light mode alternative is warm cream with gold — but the primary experience is the lacquer.

### CSS Techniques

**Lacquer depth** (the signature — the 3 layered warmth):
```
The dark surface isn't flat. It has DEPTH. Achieved with:

1. Base color: deep warm black-brown (#1a1410)
2. Two large radial-gradient layers in very slightly different
   warm darks — one with a red undertone, one with a gold
   undertone — at 5-8% opacity each. These create the feeling
   of looking through translucent layers. Where they overlap,
   the surface is richer.
3. A subtle SVG noise filter at 2-3% opacity — the very fine
   texture of polished lacquer (not perfectly smooth, but
   close to it). MUCH finer than the Foundry's cast-iron
   grain. Almost invisible. Felt, not seen.

The effect: a surface that has a glow from within, like
looking into the depth of real lacquer. Not flat black.
WARM black.
```

**Maki-e geometric accents** (the 4 — gold precision):
```
Gold elements are SPARSE and PRECISE. Not a gold theme — a dark
surface with exact gold moments:

- Site name: gold (#c4a040) on the dark surface. The one bright
  element in the nav.
- Heading accent: a thin gold horizontal line (1px) that extends
  from the left edge of the heading to the left margin. Like a
  maki-e brush stroke. Only on h1 and h2.
- Code block border: thin gold line (1px) on top edge only.
  Not a full border — just the top bar.
- Section divider: a small gold geometric shape (diamond, 8px)
  centered between sections.
- Nav separator: single gold line, 1px.

The gold is always the same color and the same 1px weight
(except the site name). CONSISTENCY is the 4 discipline.
```

**Deep reading surface**:
```
The <main> reading area has no visible boundary. No borders, no
background change. It's the same deep lacquer surface. The text
floats IN the lacquer. The reading column is defined only by
the max-width and the gold structural accents (heading lines,
code block tops). The 4 says: the structure is implicit. You
don't need walls when you have precision.
```

**Inro code blocks** (inro = lacquered medicine containers):
```
Code blocks are distinguished by:
1. The thin gold top-bar (1px border-top)
2. A SLIGHTLY different dark surface — warmer, with a touch
   more red undertone (#1e1812). Like a different layer of
   lacquer. The shift is subtle but perceptible.
3. A very subtle inner glow — a radial-gradient overlay at
   3-5% opacity in warm gold, centered at the top. As if the
   gold bar is casting warm light downward into the code block.

Syntax colors are precious materials:
- Gold (#c4a040) for keywords — the maki-e
- Warm copper (#b87a40) for strings
- Red lacquer (#a04830) for numbers/constants
- Aged gold (#7a6a40) for comments — faded maki-e
- Pale warm (#d0c8b0) for base text
```

**Wabi-sabi imperfection**:
```
One intentional asymmetry: the heading gold accent line extends
ONLY to the left, not both sides. It starts at the heading text
and runs leftward to the margin. This is the 3 breaking the 4's
symmetry — a deliberate imperfection that makes the precision
feel human, not mechanical. In wabi-sabi tradition, the flaw
is the beauty.
```

**Transition quality**:
```
All transitions are 0.12s with a sharp ease-out. Decisive, not
languid. Links: gold shifts to brighter gold on hover (no
underline — the color shift IS the feedback). Visited: gold
dims to aged gold. The movement is swift (the 3) and exact
(the 4).
```

### Typography

- **Body**: Self-host **Cormorant Garamond** — high stroke contrast, delicate but confident. The thin strokes almost disappear; the thick strokes are bold. This tension mirrors the lacquer/gold interplay. The typeface has a Japanese-compatible elegance at the proportions.
- **Headings**: Cormorant Garamond **Medium** (not Bold). The gold accent line provides the visual weight; the type itself is refined.
- **Code**: System monospace. Clean function against the deep surface.

Alternative: **Shippori Mincho** — an actual Japanese-designed serif that works beautifully in Latin characters. If you want to go full concept.

### Color Palette

**Primary mode** (the lacquer — this IS the experience):
```
--lacquer:        #1a1410    (deep warm black-brown)
--lacquer-warm:   #201810    (red-undertone depth layer)
--lacquer-gold:   #1e1a10    (gold-undertone depth layer)
--lacquer-code:   #1e1812    (warmer code block surface)
--gold:           #c4a040    (maki-e gold — THE accent)
--gold-bright:    #dab850    (hover gold)
--gold-aged:      #7a6a40    (visited/comment gold)
--text:           #d8d0c0    (warm cream — lacquer'd text)
--text-secondary: #8a8068    (faded warm)
--copper:         #b87a40    (string copper)
--red-lacquer:    #a04830    (number/constant — red urushi)
--code-text:      #d0c8b0    (code base text)
--code-glow:      rgba(196,160,64,0.05) (gold inner glow)
```

**Light mode** (the lacquer viewed in bright light — surface becomes visible):
```
--lacquer:        #f4ede0    (light warm cream — the OTHER lacquer)
--lacquer-warm:   #eee4d4    (warm depth)
--lacquer-gold:   #f0e8d8    (gold depth)
--lacquer-code:   #ece2d0    (warmer code surface)
--gold:           #8a6a18    (darker gold for contrast on light)
--gold-bright:    #a07a20    (hover)
--gold-aged:      #6a5a28    (visited)
--text:           #1a1408    (deep dark warm text)
--text-secondary: #5a4a30    (mid-dark warm)
--copper:         #7a4a18    (dark copper)
--red-lacquer:    #7a2818    (dark red lacquer)
--code-text:      #2a2018    (dark code text)
```

**Dark mode** (deep in the lacquer — maximum depth):
```
--lacquer:        #0e0c08    (near-black warm)
--lacquer-warm:   #141008    (deep red undertone)
--lacquer-gold:   #120e08    (deep gold undertone)
--lacquer-code:   #14100a    (code surface)
--gold:           #dab850    (BRIGHTER gold for dark contrast)
--gold-bright:    #f0d060    (vivid hover)
--gold-aged:      #8a7840    (dim aged)
--text:           #ccc4b4    (softer cream)
--text-secondary: #7a7260    (muted)
--copper:         #c48a50    (brighter copper)
--red-lacquer:    #c45838    (brighter red)
--code-text:      #b8b0a0    (softer code text)
```

### Page-by-Page Vision

**Index page**: You open a lacquer box. The surface is deep warm black-brown with a glow from within. The site name is gold. A single gold line separates the nav from the content. The post list is spare: date in the secondary warm, title in cream. Each entry separated by a gold diamond (8px, centered). The effect is calm, authoritative, and warm. Not minimal — the surface has too much depth for that. But disciplined.

**Post page**: The article sits in the lacquer. Headings: Medium weight, with the gold accent line extending leftward into the margin — a single maki-e stroke marking each section. The text is warm cream in the deep surface. Code blocks are distinguished by the gold top-bar and the subtle shift in surface warmth. Syntax colors are precious: gold keywords, copper strings, red-lacquer numbers. Blockquotes are indented with no border — just the indentation. The lacquer surface is unbroken. The 4 says: if the hierarchy is clear, you don't need decoration.

**Navigation**: Gold site name on the deep surface. Other links in the secondary warm tone (not gold — only the site name gets the gold in the nav). Gold separator below. Swift, precise hover transitions.

**Code blocks**: The gold top-bar announces them. The surface shifts slightly warmer. The inner gold glow creates depth. Syntax colors are sparse and precious. The code feels like it's been set into the lacquer — embedded, permanent.

### Build System Changes

1. SVG filter for fine lacquer texture (~8 lines). Very subtle.
2. Optional font inlining (Cormorant Garamond, ~20-30KB for regular + medium woff2).
3. Gold structural elements are pure CSS borders and pseudo-elements — no build changes.

### Estimated CSS: ~450-550 lines

The leanest direction. The 4 secondary demands restraint. The visual impact comes from the DEPTH of the surface and the PRECISION of the gold, not from pattern density. Fewer gradient layers, fewer decorative elements, fewer colors. Every line of CSS earns its place.

### Responsive

Everything scales perfectly. The gold structural elements are borders and lines — they work at any width. Heading accent lines shorten on narrow screens. The lacquer depth stays. The high contrast stays. This direction might look BEST on mobile — the intimacy of a small screen in a dark room, warm lacquer glowing.

---

## Direction 3: "Shou Sugi Ban"

### Concept & Mood

Shou sugi ban (焼杉板) — the Japanese technique of burning wood to preserve it. Cedar planks are charred with fire, then cooled, brushed, and oiled. The result: deep matte black surface with the wood grain visible through the char. Where the fire burned hottest, the surface is pure charcoal black. Where it was lighter, warm orange-brown wood shows through. The char is cracked into an alligator-skin pattern of small angular plates.

This is Type 3/4 made literal: the 3 is the fire (dynamic, active, hot, warm), and the 4 is what the fire produced (structured, dark, authoritative, clean). The burning is the transformation. The surface remembers both states — the warm wood it was and the dark char it became.

The blog-as-shou-sugi-ban: writing that has been through the fire. Refined by heat into something durable. The warm wood grain (the personal voice) shows through the dark surface (the finished work). Code blocks are the deepest char — where the fire was hottest, where the technical precision lives.

### CSS Techniques

**Charred wood surface** (both 3 and 4 in one):
```
The background tells the story. Multiple layers:

1. Base: warm dark (#1e1810) — the charred wood body
2. Wood grain: SVG <feTurbulence> with low frequency, single
   octave, stretched horizontally (scaleX in the filter). This
   creates long, directional grain — like real wood. Applied at
   6-10% opacity.
3. Char variation: two large linear-gradients running vertically,
   in slightly different warm darks, at 8-12% opacity. These
   create the zones of deeper/lighter burn — like real shou sugi
   ban where the fire hits unevenly.
4. ALLIGATOR char pattern: a repeating-conic-gradient creating
   small angular plates (like cracked char). Very subtle — 3-5%
   opacity. This is the fine texture that says "charred" not
   just "dark." The plates are angular (the 3) and regular
   (the 4).
```

**Ember accents** (the 3 — fire still in the wood):
```
The accent color is EMBER: a deep warm orange (#c46020) that
suggests heat still trapped in the charred surface. Used for:
- Links
- Heading left-margin markers (small angular shapes, 6px)
- The first letter of the first paragraph of each post (a
  slightly larger size and ember color — like a coal still
  glowing in the char)

The ember color is warm, vivid, and SPECIFIC — not a generic
orange. It's the exact color of a live coal in a bed of ash.
```

**Exposed-wood reading surface**:
```
The <main> reading area is where the char has been BRUSHED AWAY
to reveal the oiled wood beneath. Slightly warmer and lighter
than the surrounding char (#2a2018 vs #1e1810). The wood grain
texture is more visible here (higher opacity on the SVG filter).
The brushing creates a natural boundary — no borders needed. The
char/wood transition is a radial-gradient feathering out from
the reading area. Organic, not geometric.

BUT: the feathering is subtle enough that the 4's structural
discipline isn't violated. The boundary is soft but the reading
column's dimensions are exact (65ch, precise margins).
```

**Deep-char code blocks** (the 4 — structured darkness):
```
Code blocks go DEEPER into the char. Background: very dark
(#0e0c06) — the zones where the fire burned hottest. The
alligator texture is slightly more visible here. The code
sits in the deepest, most structured part of the material.

Border: a thin ember-colored top line (1px, #c46020). Like a
crack in the char where you can see the fire still burning
beneath. ONLY on top — the 4 restraint says one border, not four.

Syntax colors are temperature-mapped:
- Ember (#c46020) for keywords — hottest
- Warm wood (#c49a50) for strings — warm but not burning
- Ash (#8a8070) for comments — cooled
- Bright spark (#e8a030) for numbers — flare
- Pale smoke (#c8c0b0) for base text — smoke rising
```

**Ash-fade on secondary text**:
```
Dates, metadata, secondary text aren't just "lighter." They're
ASH-colored — warm gray with a slight lavender undertone (#8a8078).
The color of wood ash. This isn't arbitrary; it's material. The
secondary information is what remains after the fire has passed
through.
```

**Swift angular markers**:
```
Before h2 and h3 headings, a small angular marker (◆ or ▸)
in ember color. These are structural waypoints — not decoration.
The 4 says: use them consistently, at the same size, same color.
The 3 says: make them angular and warm. 6-8px, set as ::before
pseudo-element content.
```

### Typography

- **Body**: Self-host **Bitter** — the slab serif reads as "wood" at text sizes. The square serifs echo the angular char plates. Substantial, readable, warm.
- **Headings**: Bitter **Bold**. The 3 dominance pushes headings forward with actual weight. The angular markers provide the structural precision the 4 needs.
- **Code**: System monospace. The deep-char surface provides the visual separation.

### Color Palette

**Light mode** (the burned plank in daylight — char + warm wood):
```
--char:           #2a2218    (visible char surface)
--char-deep:      #1a1610    (deep burn zones)
--wood:           #3a3020    (brushed-exposed wood — reading surface)
--wood-grain:     #4a3a28    (visible grain shadow)
--text:           #ede4d4    (warm cream text on dark)
--text-secondary: #8a8078    (ash)
--ember:          #c46020    (THE accent — live coal)
--ember-bright:   #e47828    (hover — hotter)
--ember-dim:      #8a4a18    (visited — cooling)
--code-bg:        #0e0c06    (deepest char)
--code-text:      #c8c0b0    (pale smoke)
--spark:          #e8a030    (bright number)
--warm-wood:      #c49a50    (string — warm wood tone)
--ash-comment:    #7a7868    (comment — cool ash)
```

**Dark mode** (the plank at night — barely visible, fire inside):
```
--char:           #141008    (near-black char)
--char-deep:      #0a0806    (void char)
--wood:           #1e1810    (dark wood)
--wood-grain:     #2a2218    (dark grain)
--text:           #d8d0c0    (softer cream)
--text-secondary: #6a6860    (dimmer ash)
--ember:          #e07830    (BRIGHTER ember for contrast)
--ember-bright:   #f09040    (blazing hover)
--ember-dim:      #9a5a20    (dim coal)
--code-bg:        #060604    (true deep)
--code-text:      #b0a898    (dimmer smoke)
--spark:          #f0b840    (bright spark)
--warm-wood:      #daa860    (brighter wood)
--ash-comment:    #5a5850    (dark ash)
```

**Actual light mode** (the REVERSE — warm wood surface, dark text):
```
--char:           #f0e8d8    (light charred cream)
--char-deep:      #e4dac8    (deeper cream)
--wood:           #f8f0e0    (light warm wood reading surface)
--wood-grain:     #e8dcc8    (light grain shadow)
--text:           #1a1408    (deep warm dark)
--text-secondary: #6a5a40    (warm mid)
--ember:          #b85018    (deep ember — darker for light bg)
--ember-bright:   #d46020    (hover)
--ember-dim:      #7a3a10    (visited)
--code-bg:        #1e1a10    (dark char — stays dark even in light mode)
--code-text:      #c8c0b0    (same smoke text)
--spark:          #c48020    (muted spark)
--warm-wood:      #8a5a20    (darker wood string)
--ash-comment:    #7a7060    (warm ash)
```

Note: this direction has THREE modes. The primary is the charred surface (dark). Light mode inverts the prose surface but keeps code blocks dark. True dark mode goes deeper. This asymmetry is intentional — shou sugi ban is fundamentally a dark material.

### Page-by-Page Vision

**Index page**: A charred cedar plank. The reading zone is brushed — warmer, grain visible. The surrounding char is darker, textured with the alligator pattern. The post list is clean and warm: date in ash, title in cream, separated by thin ember lines. The site name in Bitter Bold — substantial, branded into the wood. The nav separator is a thin ember line. Ember markers (◆) before the site name and before each nav link.

**Post page**: The wood-and-char surface carries the article. The exposed-wood reading zone is warm and directional (you can see the grain running horizontally). Headings in Bold with angular ember markers. The article text flows in cream on the dark surface. Code blocks drop into the deepest char — the fire-hottest zone. The ember top-bar glows. Syntax colors are temperature-mapped. Blockquotes are indented with an ember left line (1px). The page tells a story about transformation through heat.

**Navigation**: Branded into the char. Bold type, ember-colored links. The ember markers provide angular rhythm. The separator below is thin and decisive.

**Code blocks**: Deepest char. The ember top-bar is the crack showing fire below. Temperature-mapped syntax colors: hot keywords, warm strings, cool comments, spark numbers. The surrounding prose is wood; the code is charcoal. Two states of the same material, one technical, one personal.

### Build System Changes

1. SVG filter for wood grain (stretched turbulence, ~12 lines).
2. Optional second filter for alligator char texture (~10 lines). Or combine into one SVG.
3. Optional font inlining (Bitter, ~20-25KB).
4. No template changes.

### Estimated CSS: ~550-650 lines

### Responsive

Wood grain and char textures stay at all sizes. Ember accents stay. Angular markers stay. The exposed-wood reading zone feathering simplifies on mobile (full-bleed reading zone). Code blocks keep their treatment. The direction scales naturally because wood is scale-independent.

---

## Direction 4: "The Bindery"

### Concept & Mood

A half-bound book. The spine and corners are dark leather (the structural elements, the 4). The sides are covered in marbled paper (the dynamic, rich surface, the 3). Open the book and the endpapers are a full bleed of warm marbled pattern. The text sits on cream pages between these two materials. You feel the leather when you hold it. You see the marble when you open it.

This is the most LITERARY direction. The blog is literally a book — not metaphorically, but materially. The leather is the framework (navigation, structure, code blocks). The marble is the atmosphere (background, warmth, texture). The text page is the calm center between them.

The 3/4 tension is architectural: the leather spine holds the marbled boards. Structure contains dynamism. The binding itself — the meeting of leather and marble — is where the design lives.

### CSS Techniques

**Marbled paper background** (the 3 — rich, dynamic, warm):
```
CSS marbling. Multiple radial-gradient and conic-gradient layers
in autumn tones, LARGE and overlapping, at 10-20% opacity:

1. A large radial-gradient in warm rust-gold, off-center left
2. A large conic-gradient in olive-brown, centered
3. A medium radial-gradient in deep copper, off-center right
4. A linear-gradient wash in warm amber, subtle

These create the swirling, organic color fields of real marbled
paper. Not trying to simulate exact marbling (which would need
JS or images) — capturing the FEELING of it: warm colors that
shift and merge, organic boundaries, no two areas the same.

background-blend-mode: multiply ties them together organically.
```

**Leather spine** (the 4 — structural, dark, precise):
```
A vertical band on the LEFT side of the page, 40-50px wide on
desktop. Deep warm dark (#1a1408) with a leather-grain SVG
<feTurbulence> texture. This is the book's SPINE — the structural
element that holds everything together.

The spine has:
- A thin gold tooling line (1px) running vertically along its
  right edge (where the spine meets the board)
- The site name, rotated 90deg, set vertically in the spine
  (CSS writing-mode: vertical-rl, or just positioned text
  rotated with transform). Gold on dark leather.

This spine is ALWAYS present on desktop. It anchors the page.
```

**Cream text page**:
```
The <main> reading area has a distinct background: warm cream
(#f8f2e4) that sits ABOVE the marbled paper. This is the book
page — the surface you actually read from. It has a very subtle
paper texture (same SVG noise as the Foundry's iron but at
2-3% opacity — paper grain, not metal).

The page has a very thin border (1px warm dark) on the left
side (where it meets the spine). The right edge feathers into
the marbled background — no hard border. Like a page that
extends to the book's edge.

For dark mode: the cream page becomes a warm dark (#1e1a12)
and the marble becomes deeper and richer. The spine stays dark.
```

**Leather code blocks** (the 4):
```
Code blocks are LEATHER — the same dark material as the spine.
Same texture, same dark background. A thin gold tooling line
(1px) as the top border. Inside: syntax colors are gold-tooled
lettering on leather:
- Gold (#c4a040) for keywords
- Copper (#b87a38) for strings
- Cream (#e8e0d0) for base text
- Warm gray (#7a7060) for comments
- Deep rust (#a05030) for numbers

The code blocks feel like sections of the binding material
inserted into the text — the structural leather appearing
within the content.
```

**Tooling lines** (the gold structural system):
```
All structural separators are thin gold lines (1px, #c4a040):
- Nav separator (horizontal)
- Spine right edge (vertical)
- Code block top border
- Between post entries on the index page

Like the gold tooling on a fine leather binding, these lines
are precise, consistent, and warm. They're the joinery that
holds the materials together.
```

**Endpaper effect on index page**:
```
The index page shows MORE marble. Instead of the cream text-page
background on <main>, the marbled paper is fully visible behind
the post list (at higher opacity — 20-30%). The post list sits
on the marble like a table of contents on a decorated endpaper.
Only when you click into a post does the cream reading page appear.
This creates a meaningful material transition: browsing happens
on the decorative surface, reading happens on the calm page.
```

### Typography

- **Body**: Self-host **Cormorant Garamond** — the classic book typeface. High stroke contrast reads beautifully on the cream page. The typeface IS bookmaking.
- **Headings**: Cormorant Garamond **Semibold**. Not too heavy — the book analogy calls for refined heading treatment. The tooling line below headings adds the visual weight.
- **Code**: System monospace. On the leather surface, monospace reads as a technical section of the binding — a different register.
- **Spine text**: Same face, but set vertically and in gold. The site name as colophon.

### Color Palette

**Light mode** (the book open on a desk):
```
--marble-rust:    #c47a40    (warm marble swirl)
--marble-olive:   #7a8a48    (olive marble)
--marble-copper:  #a06830    (copper marble)
--marble-amber:   #c49a38    (amber wash)
--leather:        #1a1408    (dark binding leather)
--leather-grain:  #241c10    (leather texture highlight)
--page:           #f8f2e4    (cream book page)
--page-shadow:    #e8e0d0    (page edge shadow)
--gold:           #c4a040    (tooling gold)
--gold-bright:    #dab850    (hover gold)
--text:           #1a1408    (dark warm text on cream)
--text-secondary: #5a4a30    (warm secondary)
--code-bg:        #1a1408    (leather — same as binding)
--code-text:      #e8e0d0    (cream on leather)
--link:           #8a5a18    (warm amber link)
--link-visited:   #5a5028    (aged amber)
```

**Dark mode** (the book by candlelight):
```
--marble-rust:    #5a3820    (deep rust)
--marble-olive:   #3a4820    (deep olive)
--marble-copper:  #4a3018    (deep copper)
--marble-amber:   #5a4218    (deep amber)
--leather:        #0e0c06    (deep dark leather)
--leather-grain:  #181410    (dark grain)
--page:           #1e1a12    (dark cream page)
--page-shadow:    #141008    (dark page shadow)
--gold:           #dab850    (brighter gold for dark)
--gold-bright:    #f0d060    (bright hover)
--text:           #d8d0c0    (warm cream text)
--text-secondary: #8a7e68    (muted)
--code-bg:        #0e0c06    (deep leather)
--code-text:      #c8c0b0    (dimmer cream)
--link:           #c48a38    (brighter amber)
--link-visited:   #8a7a30    (aged)
```

### Page-by-Page Vision

**Index page**: You open the book to the endpaper. The marbled surface is visible — swirling autumn colors. The post list sits on this surface like a table of contents. The leather spine runs down the left with the site name set vertically in gold. Gold tooling lines separate entries. The effect is warm, rich, and immediately "bookish" in the material sense — not a book metaphor but a book MATERIAL.

**Post page**: You turn to a text page. The cream reading surface appears — calm, high-contrast, optimized for reading. The marble is visible in the margins but muted behind the page. The spine continues on the left. Headings are refined serif with gold tooling lines. Code blocks are leather panels inserted into the text — dark, textured, gold-accented. Blockquotes are indented with the page's own margin (no border — just deeper indentation on the cream surface). The material transitions tell you where you are: marble = browsing, cream = reading, leather = code/structure.

**Navigation**: ON the leather spine, or just to its right. The site name IS the spine. Other nav links sit on the cream page, in warm amber. Gold tooling line below.

**Code blocks**: Leather. The same dark texture as the spine — the structural material appearing within the content. Gold keywords glow. Cream base text. The shift from cream-page-serif-prose to dark-leather-monospace-code is the most dramatic material contrast of any direction.

### Build System Changes

1. SVG filter for leather grain (~10 lines).
2. SVG filter for paper grain (~8 lines, or combine with leather filter).
3. Optional font inlining (Cormorant Garamond, ~20-30KB).
4. Template change: consider adding a `<div class="spine">` wrapper or using `<body>` pseudo-element for the spine. Alternatively, pure CSS on `<body>::before` — no template change needed.

### Estimated CSS: ~600-700 lines

### Responsive

The spine hides on mobile. The marbled background stays but at lower opacity. The cream reading page goes full-bleed. Tooling lines stay. Leather code blocks stay. The material story simplifies to "cream page with leather code blocks" on small screens — which is still compelling and distinctive.

---

## Direction 5: "The Etched Plate"

### Concept & Mood

Intaglio printmaking. A copper plate is coated with wax, then the artist scratches through the wax with a sharp tool, exposing the copper beneath. The plate is submerged in acid, which bites into the exposed copper (the etched lines). The wax is removed, ink is pressed into the etched grooves, the surface is wiped clean, and the plate is pressed onto damp paper under enormous pressure. The result: fine, precise, warm-toned lines on cream paper, with the PLATE MARK — a rectangular embossed impression where the copper plate's edges pressed into the paper.

This is the most Type 4 of the Type 3/4 directions, and that's exactly right for a secondary 4. The precision of the etched line (the 4) on the warm copper/cream surface (the 3). Every line is deliberate — you can't un-etch copper. The plate mark frames everything. The pressure of the press gives the paper texture — you can feel the impression.

The blog-as-intaglio: each post is a print pulled from an etched plate. The lines are permanent. The plate mark frames the content. The warmth of the copper/cream/ink palette is unmistakable. Code blocks are deeply etched — the acid bit longer, the lines are heavier, the ink sits thicker in the grooves.

### CSS Techniques

**Plate mark** (the defining visual element):
```
The reading column <main> has a VISIBLE rectangular impression:
a multi-layered box-shadow that creates the embossed plate-mark
effect. The shadows are:

1. Outer: 0 0 0 1px rgba(0,0,0,0.08) — the slight darkening
   at the compression edge
2. Outer: 2px 3px 6px rgba(0,0,0,0.06) — the shadow cast by
   the raised paper surrounding the indentation
3. Inner: inset 0 0 0 1px rgba(0,0,0,0.03) — the slight
   highlight at the inner edge of the impression

Combined with a background that's 1-2% darker inside the plate
mark than outside, this creates a genuine embossed-rectangle
effect. Subtle but REAL. You see the plate mark.

The plate mark is RECTANGULAR — not rounded corners. Hard edges.
This is the 4 speaking: geometric, precise, structural.
```

**Cream paper with tooth**:
```
The paper surface (body background) is warm cream (#f4ede0)
with an SVG <feTurbulence> texture at 3-5% opacity — the tooth
of handmade printmaking paper. Slightly more visible than
typical paper-grain effects. You can almost feel the fibers.
```

**Etched-line accents** (the structural system):
```
All structural elements use the same visual language: fine,
warm-dark lines that suggest etching. These are:

- Nav separator: 1px line in warm dark (#3a2818), with a
  SECOND parallel line 3px below it (the "double line"
  that's characteristic of intaglio plate edges)
- Section breaks: same double-line treatment
- Code block borders: same double-line on all four sides
- Heading underlines: single etched line below h2

The lines are ALWAYS 1px, ALWAYS the same warm dark color,
ALWAYS either single or double. CONSISTENCY (the 4) in a
warm-toned system (the 3).
```

**Ink-pooled headings**:
```
Headings use a slightly heavier "ink" treatment: darker color
(#1a1008, warmer and richer than body text), with a very
subtle text-shadow at 0.5px offsets that creates a "fat line"
effect — like ink that pooled slightly in the etched groove
where the heading was cut deeper. Not blurry. Just slightly
thicker than the surrounding body text.
```

**Deeply-etched code blocks**:
```
Code blocks represent areas where the plate was etched DEEPER —
the acid had longer to bite. The background shifts to a DARKER
cream (#e8dcc4) — more ink residue trapped in deeper grooves.
The double-line border is heavier here: 1.5px instead of 1px.

Inside: text in a rich warm-dark ink. Syntax colors are
different INKS (historical intaglio printers sometimes used
multiple ink colors for different elements):
- Warm dark (#3a2818) for base text (standard ink)
- Rust-red (#8a3018) for keywords (red ink)
- Deep olive (#3a4218) for strings (green ink)
- Medium warm (#6a5a40) for comments (diluted ink)
- Copper (#9a6a28) for numbers (metallic ink)
```

**Press pressure effects**:
```
Interactive elements have a very subtle "pressure" quality:
- Links on hover: a 0.5px text-shadow appears, making the
  text slightly heavier — as if more pressure was applied
  to that area of the plate, pushing more ink into the paper.
  Transition: 0.1s. Swift and physical.
- Visited links: slightly lighter ink (#5a4a30) — the plate
  has been wiped more, less ink remains in those grooves.
```

**Copper-plate tint in margins**:
```
Outside the plate mark (in the margins), the paper has a very
subtle warm copper tint — a radial-gradient at 3-5% opacity in
warm copper (#c49858). In real intaglio, the area outside the
plate mark sometimes picks up a faint tone from the plate
surface. This creates a subtle warmth in the margins that
frames the content within the plate mark.
```

### Typography

- **Body**: Self-host **Crimson Pro** — a refined serif with the precise, deliberate quality of etched letterforms. Not as high-contrast as Cormorant (which can feel too light for the 3's substance). Crimson Pro has enough weight to feel inked-into-paper while maintaining the 4's precision.
- **Headings**: Crimson Pro **Semibold**. The ink-pooled shadow effect adds the extra weight.
- **Code**: System monospace. Inside the deeply-etched zone, monospace reads as technical annotation on the plate.

### Color Palette

**Light mode** (the fresh print — ink on paper):
```
--paper:          #f4ede0    (warm handmade paper)
--paper-pressed:  #eee6d6    (inside plate mark — slightly darker)
--paper-margin:   #f8f0e4    (outside plate mark — with copper tint)
--plate-mark:     rgba(0,0,0,0.06-0.08) (emboss shadows)
--ink:            #2a1e10    (warm etching ink — body text)
--ink-heavy:      #1a1008    (deep ink — headings)
--ink-light:      #5a4a30    (diluted ink — visited links)
--ink-secondary:  #6a5a40    (secondary text)
--etch-line:      #3a2818    (structural line color)
--red-ink:        #8a3018    (keyword — red ink)
--green-ink:      #3a4218    (string — green ink)
--copper-ink:     #9a6a28    (number — copper metallic ink)
--diluted:        #7a6a4a    (comment — diluted ink)
--code-bg:        #e8dcc4    (deep-etch zone)
--link:           #6a3a10    (warm ink link)
--link-visited:   #5a4a30    (wiped plate)
--copper-margin:  rgba(196,152,88,0.04) (margin copper tint)
```

**Dark mode** (the plate itself — you're looking at the copper, not the print):
```
--paper:          #1a1610    (dark copper-toned surface)
--paper-pressed:  #1e1a12    (slightly lighter inside plate mark)
--paper-margin:   #141008    (deeper margins)
--plate-mark:     rgba(200,160,80,0.06) (WARM emboss — copper glow)
--ink:            #d8d0c0    (light ink on dark plate)
--ink-heavy:      #e8e0d0    (bright — deeply etched)
--ink-light:      #8a8070    (faded)
--ink-secondary:  #9a8e78    (secondary)
--etch-line:      #4a3a28    (warm dark line)
--red-ink:        #d45830    (bright red)
--green-ink:      #6a8a38    (bright green)
--copper-ink:     #d49a48    (bright copper)
--diluted:        #6a6250    (dim comment)
--code-bg:        #121008    (deepest etch)
--link:           #c48a40    (bright copper link)
--link-visited:   #8a7a48    (tarnished)
--copper-margin:  rgba(180,140,60,0.05) (warm margin glow)
```

### Page-by-Page Vision

**Index page**: Cream paper with the plate mark visible — a subtle embossed rectangle framing the content area. The copper margin tint warms the edges. The post list inside the plate mark is clean: date in diluted ink, title in standard warm ink. Double-line separators between entries. The site name at top in Semibold with the ink-heavy treatment. The whole page reads as a pulled print — one continuous impression.

**Post page**: Inside the plate mark, the article flows. Headings in Semibold with ink-pooled shadows — slightly heavier than body, darker, more deliberate. The etched double-line below h2 headings. Code blocks shift to the deep-etch zone — darker paper, heavier border lines, multi-color ink. Blockquotes are indented with a single etched line on the left. The plate mark frames everything. The margins breathe with their subtle copper warmth.

**Navigation**: Inside the plate mark, near the top. Clean, precise. Double-line separator below — the first structural etched line you encounter. Links in warm ink. Swift hover transitions.

**Code blocks**: The deep-etch zone. Darker background. Heavier double-line borders. Multiple ink colors for syntax: red, green, copper, diluted. The shift from the lighter prose surface to the deeper code zone is like moving to a more deeply etched area of the plate — more detail, more precision, more ink.

### Build System Changes

1. SVG filter for paper tooth (~8 lines).
2. Optional font inlining (Crimson Pro, ~20-25KB for regular + semibold woff2).
3. Plate mark and etched lines are pure CSS (box-shadow, borders) — no build changes.

### Estimated CSS: ~500-600 lines

Clean direction. The visual impact comes from the plate mark, the consistent line system, and the color precision — not from gradient density. The 4 secondary keeps the CSS disciplined.

### Responsive

Plate mark stays on mobile — the box-shadow works at any size. Double-line borders stay. Paper tooth stays. Copper margin tint stays. Code blocks keep their treatment. The direction is inherently responsive because the plate mark scales with <main>'s width. On mobile in dark mode (the copper-plate view), it's beautiful — warm, precise, intimate.

---

## Comparison Matrix

| Aspect | Foundry | Urushi | Shou Sugi Ban | Bindery | Etched Plate |
|--------|---------|--------|--------------|---------|-------------|
| **3/4 balance** | 50/50 | 40/60 (more 4) | 55/45 (more 3) | 50/50 | 40/60 (more 4) |
| **Signature element** | Brass inlay lines | Gold maki-e on lacquer | Charred wood grain | Leather spine + marble | Plate mark emboss |
| **Texture intensity** | High (cast iron) | Low-medium (lacquer) | High (char + grain) | Medium (marble + leather) | Medium (paper tooth) |
| **Color range** | Narrow (iron + brass) | Minimal (black + gold) | Narrow (char + ember) | Wide (marble colors) | Narrow (ink + cream) |
| **Contrast** | Very high | Very high | High | Very high | Medium-high |
| **Dark mode drama** | Furnace glow | **Exceptional** (depth) | Three modes | Candlelight | Copper plate view |
| **CSS complexity** | ~550 LOC | **~500 LOC** (leanest) | ~600 LOC | ~650 LOC | ~550 LOC |
| **Build changes** | SVG filter | SVG filter | SVG filter x1-2 | SVG filter x2 | SVG filter |
| **Font character** | Source Serif (precise) | Cormorant (elegant) | Bitter (substantial) | Cormorant (bookish) | Crimson Pro (refined) |
| **Most 3 moment** | Iron grain texture | Warm depth layers | Fire-ember accents | Swirling marble | Heavy ink pooling |
| **Most 4 moment** | Brass line precision | Sparse gold discipline | Angular char plates | Leather structural spine | Plate mark + double lines |
| **Mobile** | Excellent | **Best** | Good (3 modes) | Good (spine hides) | Excellent |
| **Personality** | "Precision craftsman" | "Refined intensity" | "Forged through fire" | "The book IS the craft" | "Every line is permanent" |

## Which Direction for Which Mood

- **Want warmth + precision equally?** → **Foundry** or **Bindery**
- **Want maximum refinement / restraint?** → **Urushi** (the most 4-leaning, still warm)
- **Want maximum texture / fire?** → **Shou Sugi Ban** (the most 3-leaning, still structured)
- **Want the most dramatic dark mode?** → **Urushi** (lacquer depth) or **Shou Sugi Ban** (fire in char)
- **Want the most "bookish" / literary feel?** → **Bindery** or **Etched Plate**
- **Want the leanest CSS / easiest build?** → **Urushi** (~500 LOC, minimal build changes)
- **Want the boldest visual statement?** → **Foundry** (brass on iron) or **Shou Sugi Ban** (charred surface)

## Hybrid Potential

- **Urushi surface + Foundry's brass framework**: Deep lacquer depth with visible structural brass lines
- **Shou Sugi Ban surface + Etched Plate's line system**: Charred wood with precise double-line etched borders
- **Bindery's material duality + Foundry's precision**: Leather/marble materials with brass inlay structure
- **Etched Plate's plate mark + ANY other surface**: The embossed frame works on any background material
- **Urushi's gold accent discipline + ANY other surface**: Sparse gold moments transplant well

## Next Steps

1. Pick a direction (or hybrid)
2. I'll implement the CSS + any template/build changes
3. We iterate — color tuning, texture density, border weight, dark mode refinement
4. Test on live content and refine
