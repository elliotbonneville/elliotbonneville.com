---
title: Building a Blog in 90 Minutes with 180 Lines of Code
date: 2025-08-16
description: How I built a minimal, brutalist blog that will outlive Medium
---

I just built this blog from scratch in about 90 minutes. It's exactly 180 lines of build code, deploys with one command, and will probably outlive your Medium posts. Actually, let me rephrase that - it'll outlive Medium as a platform.

## 8-Ball Development

I built this entire blog using Claude Code. That's not incidental to the story, either. It's central to it. 

My humble contribution to the agentic engineering discourse is something I don't see talked about a lot: Claude Code speeds up development so much on greenfield projects that you can avoid pulling in tons of dependencies. Instead of reaching for a framework because building from scratch would take too long, you can build exactly what you need in the time it would take to configure someone else's solution.

There's something intoxicating about starting from a blank terminal and describing what you want: "a minimal blog that renders fast and will work forever." No starter templates, no boilerplate, no inherited decisions. Just **complete control** - every line of code exists for a reason, every decision intentional. No mystery meat in the `node_modules` folder, no configuration you're afraid to touch, no build process you don't understand.

When you build from scratch with an AI pair programmer, you're not fighting the tool - you're having a conversation about what you actually need. And it turns out, for a blog, you need surprisingly little.

## The Constraints

I started with several clear opinions. My goal was to build a brutalist, hyper-minimalist blog where every element serves a purpose:

- **No React for reading text** - It's a blog. HTML works.
- **No CDNs** - Everything self-contained. No link rot.
- **No `.html` in URLs** - Clean paths only
- **System fonts only** - Your OS spent millions on typography
- **Golden ratio everything** - 65ch width, 1.618 line height
- **Syntax highlighting that works** - Pre-rendered, not client-side
- **Interactive demos** - But only where needed

## The Stack

```javascript
{
  "build": "node (180 lines)",
  "parse": "marked (17kb)",
  "highlight": "prism (15kb)",
  "deploy": "rsync over SSH",
  "cdn": "none",
  "bundler": "none",
  "framework": "none",
  "hosting": "DigitalOcean ($6/month)",
  "server": "nginx on Ubuntu"
}
```

That's it. The entire build script is shorter than most webpack configs. It runs on a vanilla Linux server - just nginx serving static files from a DigitalOcean droplet. No containers, no orchestration, no managed services. HTML files on a hard drive, the way the web started.

## How It Works

Write markdown files with frontmatter in `src/posts/`:

```markdown
---
title: Your Post Title
date: 2024-08-16
description: Brief description
---

Your content here...
```

Run build:

```bash
npm run build  # Generates static HTML
```

Deploy:

```bash
npm run deploy  # rsync to your server
```

The build script:
1. Reads markdown files
2. Parses frontmatter
3. Converts to HTML with syntax highlighting
4. Injects into a template
5. Writes static files

No hot reloading, no `webpack`, no `babel`, no virtual DOM. Just files.

## Interactive Examples (When Needed)

While the blog is static, you can embed JavaScript directly in markdown when you actually need interactivity:

<div class="example">
  <button id="demo">Click to count</button>
  <span id="count">0</span>
</div>

<script>
(function() {
  let count = 0;
  document.getElementById('demo').onclick = function() {
    document.getElementById('count').textContent = ++count;
  };
})();
</script>

This works because Markdown passes HTML through untouched.

## The Philosophy

**Durability over features.** This blog will work in 20 years.

**Speed over developer experience.** Pages load in 50ms. No JavaScript required.

**Ownership over convenience.** My server, my domain, my rules. No platform risk.

**Simplicity over scalability.** It's a blog, not Facebook. It doesn't need to scale.

## The Numbers

- **Build time:** < 1 second for 100 posts
- **Page weight:** ~15KB per post
- **Load time:** ~50ms
- **JavaScript required:** 0 bytes
- **Monthly cost:** $0-6 (free on GitHub Pages, or VPS)
- **Setup time:** 90 minutes

## Why Not [Insert Platform]?

**Medium/Substack/Ghost:** Platform risk. They own your audience.

**Gatsby/Next.js:** 500MB of node_modules to generate HTML.

**Jekyll/Hugo:** Fine choices, but even they're overkill for a blog. It gets back to the control I was talking about earlier.

**WordPress:** It's 2025.

## The Code

The entire build script fits in a single file. Here's the core:

```javascript
// Read all posts
const posts = readdirSync('./src/posts')
  .filter(f => f.endsWith('.md'))
  .map(parsePost);

// Generate HTML
posts.forEach(post => {
  const html = marked(post.content);
  const output = template
    .replace('{{title}}', post.title)
    .replace('{{content}}', html);
  writeFileSync(`public/${post.slug}/index.html`, output);
});

// Generate index
const index = indexTemplate
  .replace('{{posts}}', posts.map(p => 
    `<a href="/${p.slug}/">${p.title}</a>`
  ).join(''));
writeFileSync('public/index.html', index);
```

That's basically it.

## Will It Scale?

It's static HTML. It scales infinitely. But more importantly: it's a personal blog. It doesn't need to scale. I'm not building the next Twitter here.

## The Source

[Fork this blog on GitHub](https://github.com/elliotbonneville/elliotbonneville.com)

Feel free to fork it. The entire thing is MIT licensed and documented. You can have your own blog running in 90 minutes too.

## The Point

We've forgotten that websites can be simple. A blog doesn't need a framework. It doesn't need a build pipeline. It doesn't need to be a single-page application.

Sometimes the best technical decision is to not make one. HTML is already a pretty good document format. Browsers are already pretty good at displaying it.

The web is good at being the web. Let it.