# Changelog

## [1.0.0] - 2024-08-16

### Initial Release

**Built a complete minimal blog system from scratch**

#### Features
- ✨ Static site generator using Node.js, Marked, and Prism.js
- 🎨 Brutalist design with golden ratio typography
- ⚡ Instant page loads with pure HTML output
- 🔗 Clean URLs using folder structure
- 🎯 Syntax highlighting pre-rendered at build time
- 🌙 Automatic dark mode support
- 📡 RSS feed generation
- 🎮 Interactive JavaScript examples in posts
- 🚀 One-command deployment to DigitalOcean

#### Technical Details
- Build script: 163 lines
- CSS: 275 lines (inlined)
- No runtime JavaScript required for reading
- Total codebase: ~512 lines
- Zero external dependencies in production

#### Deployment
- Deployed to DigitalOcean droplet (167.99.122.111)
- Nginx configuration for clean URLs
- rsync-based deployment script

#### Sample Posts
- Hello World - Introduction to the blog
- Understanding JavaScript Closures - With interactive examples
- Async/Await Patterns - Modern JavaScript patterns

This release establishes the foundation for a durable, minimal blog that prioritizes readability and will work for decades to come.