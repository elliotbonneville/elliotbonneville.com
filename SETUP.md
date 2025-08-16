# Quick Setup Guide

## 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/your-blog.git your-blog
cd your-blog
npm install
```

## 2. Configure Your Blog

Copy `config.example.js` to `config.js` and edit:

```javascript
export const config = {
  site: {
    name: 'Your Name',           // Your blog name
    description: 'Your tagline',  // Blog description
    url: 'https://yourdomain.com', // Your domain (or use GitHub Pages URL)
    language: 'en-US'
  },
  
  deploy: {
    server: 'root@YOUR_SERVER_IP',  // Only if self-hosting
    path: '/var/www/blog'
  }
};
```

## 3. Write Your First Post

Create a markdown file in `src/posts/`:

```bash
# Example: src/posts/2024-08-16-hello-world.md
---
title: Hello World
date: 2024-08-16
description: My first post
---

Your content here...
```

## 4. Build & Preview

```bash
npm run build    # Build the site
npm run dev      # Watch mode for development

# Preview locally
python3 -m http.server 8000 --directory public
# Visit http://localhost:8000
```

## 5. Deploy Options

### Option A: GitHub Pages (Free)
1. Push to GitHub
2. Settings → Pages → Source: `/public` folder
3. Your blog will be at: `https://YOUR_USERNAME.github.io/your-blog`

### Option B: Netlify (Free)
1. Build locally: `npm run build`
2. Drag `public/` folder to netlify.com
3. Done!

### Option C: Self-Host (see docs/digitalocean-setup.md)
1. Get a VPS (DigitalOcean, Linode, etc.)
2. Update `config.js` with your server details
3. Run: `npm run deploy`

## That's It!

You now have a blog that:
- Loads instantly (pure HTML)
- Works forever (no dependencies)
- Looks great (golden ratio typography)
- Supports code + interactive examples

For more details, see the [README](README.md).