import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

const dist = resolve('dist');
const root = resolve('.');

if (!existsSync(dist)) {
  console.error('dist/ not found — run `npm run build` first');
  process.exit(1);
}

const entries = readdirSync(dist);
for (const name of entries) {
  const src = join(dist, name);
  const dest = join(root, name);
  if (statSync(src).isDirectory()) {
    cpSync(src, dest, { recursive: true, force: true });
  } else {
    cpSync(src, dest, { force: true });
  }
}

// copy index.html as 404.html for SPA fallback
cpSync(join(dist, 'index.html'), join(root, '404.html'), { force: true });

console.log('✓ dist/ copied to root');
