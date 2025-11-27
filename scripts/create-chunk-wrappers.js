#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const chunksDir = path.join(projectRoot, '.next', 'server', 'chunks');
const outDir = path.join(projectRoot, '.next', 'server');

function warn(msg){ console.warn('[create-chunk-wrappers] ' + msg); }

if (!fs.existsSync(chunksDir)) {
  warn(`chunks directory not found: ${chunksDir}. Skipping wrapper generation.`);
  process.exit(0);
}

try {
  const files = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));
  if (files.length === 0) {
    warn('no chunk files found in ' + chunksDir);
    process.exit(0);
  }

  for (const file of files) {
    const wrapperPath = path.join(outDir, file);
    const rel = `./chunks/${file}`;
    const content = `// Auto-generated: forwards require to ./chunks/${file}\nmodule.exports = require(${JSON.stringify(rel)});\n`;

    // Only write if missing or different (idempotent)
    let write = true;
    if (fs.existsSync(wrapperPath)) {
      const existing = fs.readFileSync(wrapperPath, 'utf8');
      if (existing === content) write = false;
    }

    if (write) {
      fs.writeFileSync(wrapperPath, content, { encoding: 'utf8' });
      console.log(`[create-chunk-wrappers] wrote ${wrapperPath}`);
    }
  }
  console.log('[create-chunk-wrappers] done');
} catch (err) {
  console.error('[create-chunk-wrappers] error', err);
  process.exit(1);
}
