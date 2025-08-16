# Blog Architecture Plan

## Philosophy

A brutalist, minimal blog that prioritizes:
- **Instant rendering** - Pure HTML, no client-side rendering
- **Durability** - No external dependencies, will work in 20 years
- **Simplicity** - ~50 lines of build code, no framework
- **Readability** - Typography-focused, golden ratio proportions
- **Interactivity** - Inline JavaScript examples where needed

## Technical Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Content** | Markdown files | Easy to write, portable |
| **Build** | Node.js script (local) | Simple, no CI/CD needed |
| **Output** | Static HTML | Works everywhere, forever |
| **Styling** | Inline CSS | Single request, no FOUC |
| **Interactivity** | Inline `<script>` tags | No bundling, immediate |
| **Syntax Highlighting** | Prism.js (build-time) | Pre-rendered, no client JS |
| **Hosting** | Any static host | GitHub Pages, Netlify, etc |

## Project Structure

```
your-blog/
├── build.js                    # Build script (~50 lines)
├── watch.js                    # Dev mode auto-rebuild
├── README.md                   # Documentation
│
├── src/
│   ├── posts/                 # Markdown posts
│   │   └── YYYY-MM-DD-slug.md
│   ├── template.html          # HTML template
│   └── style.css             # Minimal styles (~50 lines)
│
├── lib/                       # Vendored dependencies
│   ├── marked.min.js         # Markdown parser (17kb)
│   └── prism.min.js          # Syntax highlighter (15kb)
│
└── public/                    # Generated output (git-tracked)
    ├── index.html            # Homepage
    ├── [slug].html           # Individual posts
    └── rss.xml               # RSS feed
```

## Post Format

```markdown
---
title: Post Title
date: 2024-01-15
description: Brief description for RSS/meta tags
---

# Post Title

Regular markdown content with code blocks:

```javascript
function example() {
  return "syntax highlighted";
}
```

Interactive examples using raw HTML/JS:

<div class="example">
  <button id="demo">Click me</button>
</div>

<script>
(function() {
  let count = 0;
  document.getElementById('demo').onclick = function() {
    this.textContent = `Clicked ${++count} times`;
  };
})();
</script>
```

## Build Process

```javascript
// Pseudocode of build.js
1. Read all markdown files from src/posts/
2. For each post:
   - Parse frontmatter (title, date, description)
   - Convert markdown to HTML (preserving raw HTML/scripts)
   - Apply syntax highlighting to code blocks
   - Inject into template
   - Write to public/[slug].html
3. Generate index.html with post list
4. Generate rss.xml feed
5. Done - no bundling, no optimization needed
```

## CSS Specifications

Core principles:
- System font stack (no web fonts)
- 65ch max width (optimal reading)
- 1.618 line height (golden ratio)
- Blue links (#0000EE standard)
- Minimal responsive adjustments
- Dark mode via prefers-color-scheme

## Performance Targets

| Metric | Target | Method |
|--------|--------|--------|
| First Paint | < 50ms | Pure HTML |
| Page Weight | < 30kb | Inline CSS, no images |
| Build Time | < 1s for 100 posts | Simple process |
| Requests | 1 | Everything inlined |
| JavaScript | Optional | Progressive enhancement |

## Development Workflow

```bash
# Setup (one time)
npm install marked prismjs        # Install locally
cp node_modules/marked/marked.min.js lib/
cp node_modules/prismjs/prism.min.js lib/
node build.js                     # Initial build

# Writing posts
1. Create src/posts/YYYY-MM-DD-title.md
2. Write content with markdown + HTML/JS
3. Run: node build.js
4. Preview: open public/title.html
5. Commit everything including public/
6. Push to deploy

# Development mode
node watch.js                     # Auto-rebuild on save
```

## Hosting Options

All options are free for static sites:

1. **GitHub Pages**
   - Push to repo
   - Settings → Pages → Source: /public folder

2. **Netlify**
   - Drag public/ folder to Netlify
   - Instant deploy

3. **Vercel**
   - `vercel --prod public/`

4. **Local/Offline**
   - Works via `file://` protocol

## Example Components

### Interactive Counter
```html
<div class="example">
  <button id="counter">Count: 0</button>
</div>
<script>
(function() {
  let c = 0;
  document.getElementById('counter').onclick = function() {
    this.textContent = `Count: ${++c}`;
  };
})();
</script>
```

### Live Code Editor
```html
<div class="example">
  <textarea id="code">console.log('edit me');</textarea>
  <button onclick="eval(document.getElementById('code').value)">Run</button>
  <pre id="output"></pre>
</div>
```

## Future Considerations

Optional enhancements that maintain minimalism:

- **Search**: Generate JSON index, client-side search
- **Comments**: Link to GitHub discussions
- **Analytics**: Simple pixel tracker
- **Newsletter**: Email signup via Buttondown/ConvertKit form
- **Tags**: Generate tag pages during build

## Why This Approach

1. **No build complexity** - One simple script
2. **No runtime dependencies** - HTML works forever
3. **No JavaScript required** - Content readable without JS
4. **Full control** - Every line is yours
5. **Fast everything** - Build fast, load fast, develop fast
6. **Portable** - Move hosts anytime, archive easily

---

This document serves as the complete specification for the blog system. The entire system is intentionally simple enough to understand, modify, and maintain indefinitely.