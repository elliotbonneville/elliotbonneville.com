import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { marked } from 'marked';
import Prism from 'prismjs';

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

// Create custom renderer
const renderer = new marked.Renderer();

// Override code block rendering
renderer.code = function(code, language) {
  if (language && Prism.languages[language]) {
    const highlighted = Prism.highlight(code, Prism.languages[language], language);
    return `<pre><code class="language-${language}">${highlighted}</code></pre>`;
  }
  return `<pre><code>${code}</code></pre>`;
};

// Configure marked with custom renderer
marked.setOptions({
  renderer: renderer
});

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

// Create slug from filename
function createSlug(filename) {
  return basename(filename, '.md').replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

// Generate RSS feed
function generateRSS(posts) {
  const now = new Date().toUTCString();
  const items = posts.map(post => `
    <item>
      <title>${post.title}</title>
      <description>${post.description || ''}</description>
      <link>https://elliotbonneville.com/${post.slug}/</link>
      <guid>https://elliotbonneville.com/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Elliot Bonneville</title>
    <description>A minimal coding blog</description>
    <link>https://elliotbonneville.com</link>
    <lastBuildDate>${now}</lastBuildDate>
    <language>en-US</language>
    ${items}
  </channel>
</rss>`;
}

// Main build function
function build() {
  // Read templates and CSS
  const template = readFileSync('src/template.html', 'utf8');
  const indexTemplate = readFileSync('src/index-template.html', 'utf8');
  const css = readFileSync('src/style.css', 'utf8');
  
  // Ensure public directory exists
  try {
    mkdirSync('public', { recursive: true });
  } catch (e) {
    // Directory already exists
  }
  
  // Process markdown files
  const posts = [];
  const postFiles = readdirSync('src/posts').filter(file => file.endsWith('.md'));
  
  for (const filename of postFiles) {
    const content = readFileSync(join('src/posts', filename), 'utf8');
    const { frontmatter, content: markdownContent } = parseFrontmatter(content);
    
    const slug = createSlug(filename);
    const html = marked(markdownContent);
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
      .replace(/\{\{title\}\}/g, post.title)
      .replace(/\{\{description\}\}/g, post.description)
      .replace(/\{\{date\}\}/g, formattedDate)
      .replace(/\{\{content\}\}/g, html)
      .replace(/\{\{css\}\}/g, css);
    
    // Create folder with index.html for clean URLs
    const postDir = `public/${slug}`;
    if (!existsSync(postDir)) {
      mkdirSync(postDir, { recursive: true });
    }
    writeFileSync(`${postDir}/index.html`, postHtml);
    console.log(`Generated: ${slug}/index.html`);
  }
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Generate index page
  const postsList = posts.map(post => `
    <div class="post-item">
      <time>${post.formattedDate}</time>
      <a href="/${post.slug}/">${post.title}</a>
    </div>`).join('');
  
  const indexHtml = indexTemplate
    .replace(/\{\{posts\}\}/g, postsList)
    .replace(/\{\{css\}\}/g, css);
  
  writeFileSync('public/index.html', indexHtml);
  console.log('Generated: index.html');
  
  // Generate RSS feed
  const rss = generateRSS(posts);
  writeFileSync('public/rss.xml', rss);
  console.log('Generated: rss.xml');
  
  console.log(`\nBuild complete! Generated ${posts.length} posts.`);
}

// Run the build
build();