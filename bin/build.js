import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, rmSync, statSync, copyFileSync, cpSync } from 'fs';
import { join, basename, extname } from 'path';
import { Marked } from 'marked';
import markedFootnote from 'marked-footnote';
import Prism from 'prismjs';
import { config } from '../config.js';
import { renderShareCards } from './share-cards.mjs';

// Import language support for syntax highlighting
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-rust.js';
import 'prismjs/components/prism-go.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-json.js';

// Create marked instance with footnote support and custom renderer
const renderer = {
  code(code, language) {
    if (language && Prism.languages[language]) {
      const highlighted = Prism.highlight(code, Prism.languages[language], language);
      return `<pre><code class="language-${language}">${highlighted}</code></pre>`;
    }
    return `<pre><code>${code}</code></pre>`;
  }
};

const marked = new Marked()
  .use({ renderer })
  .use(markedFootnote());

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content };
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      frontmatter[key] = value;
    }
  }
  
  return { frontmatter, content: match[2] };
}

// Format date for display
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Create slug from folder name or filename
function createSlug(name) {
  return basename(name).replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

// Copy all non-markdown files from source to destination
function copyAssets(srcDir, destDir) {
  const files = readdirSync(srcDir);
  
  for (const file of files) {
    const srcPath = join(srcDir, file);
    const destPath = join(destDir, file);
    const stats = statSync(srcPath);
    
    if (stats.isDirectory()) {
      // Recursively copy subdirectories
      mkdirSync(destPath, { recursive: true });
      copyAssets(srcPath, destPath);
    } else if (file !== 'index.md') {
      // Copy all files except index.md (including HTML files as-is)
      copyFileSync(srcPath, destPath);
      console.log(`  Copied: ${file}`);
    }
  }
}

// Generate RSS feed
function generateRSS(posts) {
  const now = new Date().toUTCString();
  const items = posts.map(post => `
    <item>
      <title>${post.title}</title>
      <description>${post.description || ''}</description>
      <link>${config.site.url}/${post.slug}/</link>
      <guid>${config.site.url}/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${config.site.name}</title>
    <description>${config.site.description}</description>
    <link>${config.site.url}</link>
    <lastBuildDate>${now}</lastBuildDate>
    <language>${config.site.language}</language>
    ${items}
  </channel>
</rss>`;
}

// Generate analytics snippet
function generateAnalytics() {
  if (!config.analytics?.googleAnalyticsId) {
    return '';
  }
  return `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleAnalyticsId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${config.analytics.googleAnalyticsId}');
</script>`;
}

function socialMeta(title, description, slug) {
  const escape = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const url = new URL(slug ? `/${slug}/` : '/', config.site.url);
  const image = new URL('share.jpg', url).href;
  const alt = `${title} in manuscript lettering with an opening drop cap on vellum, framed by a wooden desk.`;
  const og = {type: slug ? 'article' : 'website', site_name: config.site.name, title, description, url: url.href,
    image, 'image:type': 'image/jpeg', 'image:width': '1200', 'image:height': '630', 'image:alt': alt};
  const card = {card: 'summary_large_image', title, description, image, 'image:alt': alt};
  return [...Object.entries(og).map(([key,value]) => `<meta property="og:${key}" content="${escape(value)}">`),
    ...Object.entries(card).map(([key,value]) => `<meta name="twitter:${key}" content="${escape(value)}">`)].join('\n  ');
}

async function build() {
  // Read templates and CSS
  const template = readFileSync('src/template.html', 'utf8');
  const indexTemplate = readFileSync('src/index-template.html', 'utf8');
  const css = readFileSync('src/style.css', 'utf8');
  const analytics = generateAnalytics();
  
  // Clean and recreate public directory
  if (existsSync('public')) {
    rmSync('public', { recursive: true, force: true });
  }
  mkdirSync('public', { recursive: true });
  
  // Process post folders
  const posts = [];
  const postDirs = readdirSync('src/posts').filter(item => {
    const itemPath = join('src/posts', item);
    return statSync(itemPath).isDirectory();
  });
  
  for (const dirName of postDirs) {
    const postSrcDir = join('src/posts', dirName);
    const indexPath = join(postSrcDir, 'index.md');
    
    // Check if index.md exists
    if (!existsSync(indexPath)) {
      console.warn(`Warning: No index.md found in ${dirName}, skipping...`);
      continue;
    }
    
    const content = readFileSync(indexPath, 'utf8');
    const { frontmatter, content: markdownContent } = parseFrontmatter(content);
    
    const slug = createSlug(dirName);
    const html = marked.parse(markdownContent);
    const formattedDate = formatDate(frontmatter.date);
    
    // Create post object
    const post = {
      slug,
      title: frontmatter.title || slug,
      description: frontmatter.description || '',
      date: frontmatter.date,
      formattedDate,
      html
    };
    
    posts.push(post);
    
    // Generate individual post HTML
    const postHtml = template
      .replace('{{socialMeta}}', () => socialMeta(post.title, post.description, slug))
      .replace(/\{\{title\}\}/g, post.title)
      .replace(/\{\{siteName\}\}/g, config.site.name)
      .replace(/\{\{description\}\}/g, post.description)
      .replace(/\{\{date\}\}/g, formattedDate)
      .replace(/\{\{content\}\}/g, html)
      .replace(/\{\{css\}\}/g, css)
      .replace(/\{\{analytics\}\}/g, analytics);
    
    // Create folder with index.html for clean URLs
    const postDestDir = `public/${slug}`;
    if (!existsSync(postDestDir)) {
      mkdirSync(postDestDir, { recursive: true });
    }
    writeFileSync(`${postDestDir}/index.html`, postHtml);
    console.log(`Generated: ${slug}/index.html`);
    
    // Copy additional files and assets from the post folder
    copyAssets(postSrcDir, postDestDir);
  }
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Generate index page (exclude About page from the blog list)
  const blogPosts = posts.filter(post => post.slug !== 'about');
  const postsList = blogPosts.map(post => `
    <div class="post-item">
      <time>${post.formattedDate}</time>
      <a href="/${post.slug}/">${post.title}</a>
    </div>`).join('');
  
  const indexHtml = indexTemplate
    .replace('{{socialMeta}}', () => socialMeta(config.site.name, config.site.description, ''))
    .replace(/\{\{siteName\}\}/g, config.site.name)
    .replace(/\{\{siteDescription\}\}/g, config.site.description)
    .replace(/\{\{posts\}\}/g, postsList)
    .replace(/\{\{css\}\}/g, css)
    .replace(/\{\{analytics\}\}/g, analytics);
  
  writeFileSync('public/index.html', indexHtml);
  console.log('Generated: index.html');
  
  // Generate RSS feed (exclude About page)
  const rss = generateRSS(blogPosts);
  writeFileSync('public/rss.xml', rss);
  console.log('Generated: rss.xml');

  // Copy static/ passthrough (pre-built apps and other assets deployed as-is,
  // e.g. static/rig -> /rig/). public/ is wiped above, so these must live here.
  if (existsSync('static')) {
    cpSync('static', 'public', { recursive: true });
    console.log('Copied: static/ passthrough');
  }

  // The hand-written site (scriptorium/, `scriptorium site src/posts scribed`):
  // the home page and every post as a leaf on the desk, laid over the pages
  // above. It is built locally (it needs the Rust toolchain and the baked desk)
  // and committed; a post it has no page for keeps the page built above.
  if (existsSync('scribed')) {
    cpSync('scribed', 'public', { recursive: true });
    console.log('Copied: scribed/ (the hand-written site)');
  }
  await renderShareCards('public', ['', ...posts.map(post => post.slug)], true);

  console.log(`\nBuild complete! Generated ${posts.length} posts.`);
}

// Run the build
await build();
