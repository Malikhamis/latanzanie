const fs = require('fs');

console.log('Reading fr.json...');
let content = fs.readFileSync('c:/Users/PC/Documents/latanzanie/locales/fr.json', 'utf8');

console.log('Fixing cœur...');
// Fix the escaped quote that should be œ
content = content.replace(/c\\"ur/g, 'cœur');

console.log('Writing file...');
fs.writeFileSync('c:/Users/PC/Documents/latanzanie/locales/fr.json', content, 'utf8');

// Validate
try {
  JSON.parse(content);
  console.log('✅ JSON is valid!');
} catch (e) {
  console.log('❌ JSON Error:', e.message);
}
