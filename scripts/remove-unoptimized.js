const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in src directory
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });

let totalReplacements = 0;
let filesModified = 0;

files.forEach((file) => {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Remove unoptimized prop from Image components
  // Patterns to match:
  // 1. unoptimized /> (at end of self-closing tag)
  // 2. unoptimized\n (on separate line)
  // 3. unoptimized (inline with other props)
  
  content = content.replace(/\s+unoptimized\s*\/>/g, ' />');
  content = content.replace(/\s+unoptimized\s*\n/g, '\n');
  content = content.replace(/\s+unoptimized(?=\s)/g, '');
  
  if (content !== originalContent) {
    const matches = (originalContent.match(/unoptimized/g) || []).length;
    totalReplacements += matches;
    filesModified++;
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${file}: Removed ${matches} unoptimized prop(s)`);
  }
});

console.log(`\n✅ Complete!`);
console.log(`Files modified: ${filesModified}`);
console.log(`Total unoptimized props removed: ${totalReplacements}`);
