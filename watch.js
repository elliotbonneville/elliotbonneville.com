import { watch } from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

console.log('👁  Watching for changes...');

// Initial build
await execAsync('node build.js');
console.log('✅ Initial build complete');

// Watch for changes
const watchers = [
  watch('./src/posts', { recursive: true }),
  watch('./src', { recursive: false })
];

async function rebuild() {
  console.log('🔄 Rebuilding...');
  try {
    await execAsync('node build.js');
    console.log('✅ Build complete');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
  }
}

// Debounce to avoid multiple rebuilds
let timeout;
function debounceRebuild() {
  clearTimeout(timeout);
  timeout = setTimeout(rebuild, 100);
}

watchers.forEach(watcher => {
  watcher.on('change', (eventType, filename) => {
    if (filename && !filename.startsWith('.')) {
      console.log(`📝 ${filename} changed`);
      debounceRebuild();
    }
  });
});

console.log('Press Ctrl+C to stop watching');

// Keep process alive
process.stdin.resume();