# Blog Documentation

A minimal static blog generator in 233 LOC.

## Quick Start

```bash
# 1. Clone and install
git clone https://github.com/YOUR_USERNAME/blog.git
cd blog
npm install

# 2. Configure (copy and edit config.js)
cp config.example.js config.js

# 3. Write a post
# Create src/posts/2025-08-17-my-post/index.md

# 4. Build and preview
npm run build
npm run dev  # Starts local server at http://localhost:8000
```

## Writing Posts

Posts live in `src/posts/` as folders with `index.md`:

```
src/posts/
└── 2025-08-17-my-post/
    ├── index.md        # Main content (required)
    ├── demo.html       # Additional HTML pages
    └── images/         # Assets (images, etc.)
        └── photo.jpg
```

Post format:
```markdown
---
title: My Post Title
date: 2025-08-17
description: Brief description
---

Your content here...
```

## Deployment Options

### Option 1: GitHub Pages (Free, Easiest)
1. Push to GitHub
2. Settings → Pages → Deploy from branch → main → /public
3. Your blog: `https://USERNAME.github.io/REPO/`

### Option 2: Netlify/Vercel (Free, Simple)
1. Build: `npm run build`
2. Drag `public/` folder to netlify.com or vercel.com
3. Done!

### Option 3: VPS with Nginx (Full Control)
See [DEPLOYMENT.md](DEPLOYMENT.md) for complete server setup.

## File Structure

```
blog/
├── src/
│   ├── posts/           # Your blog posts
│   ├── template.html    # Post template
│   ├── index-template.html  # Homepage template
│   └── style.css        # Styles
├── public/              # Generated site (don't edit)
├── bin/
│   └── build.js         # Build script (233 LOC)
├── deploy/
│   ├── nginx.conf       # Production nginx config
│   └── deploy.sh        # Deployment script
└── config.js            # Your configuration
```

## Commands

- `npm run build` - Build the site
- `npm run dev` - Build and serve locally
- `npm run deploy` - Deploy to your server (requires config)

## Configuration

Edit `config.js`:
```javascript
export const config = {
  site: {
    name: 'Your Name',
    description: 'Your blog description',
    url: 'https://yourdomain.com',
    language: 'en-US'
  },
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX'  // Optional
  },
  deploy: {
    server: 'root@YOUR_SERVER_IP',    // For VPS deployment
    path: '/var/www/blog'
  }
};
```

## Features

✓ **Fast** - Pure HTML, no JavaScript required for reading  
✓ **Simple** - 233 LOC build script  
✓ **Permanent** - No dependencies, will work forever  
✓ **Clean URLs** - `/post-name/` not `/post-name.html`  
✓ **Syntax Highlighting** - Pre-rendered with Prism.js  
✓ **RSS Feed** - Auto-generated  
✓ **Asset Colocation** - Images and demos live with posts  

## Need Help?

- [Full deployment guide](DEPLOYMENT.md) - Server setup with nginx & HTTPS
- [Architecture details](ARCHITECTURE.md) - How it works
- [GitHub repository](https://github.com/elliotbonneville/elliotbonneville.com)