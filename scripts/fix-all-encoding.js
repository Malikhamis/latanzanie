const fs = require('fs');

console.log('Reading fr.json...');
let content = fs.readFileSync('c:/Users/PC/Documents/latanzanie/locales/fr.json', 'utf8');

console.log('Original size:', content.length);

// Apply all encoding fixes using regex
let fixedCount = 0;

// Fix arrows
if (content.includes('é°Å¸â€"')) {
  content = content.replace(/é°Å¸â€"/g, '→');
  console.log('Fixed: arrows');
  fixedCount++;
}

// Fix É with apostrophe
if (content.includes('É â€™')) {
  content = content.replace(/É â€™/g, 'É');
  console.log('Fixed: É apostrophe');
  fixedCount++;
}

// Fix bullets
const bulletPattern = /é°Å¸Å'â€¢/g;
if (bulletPattern.test(content)) {
  content = content.replace(bulletPattern, '•');
  console.log('Fixed: bullets');
  fixedCount++;
}

// Fix guillemets
content = content.replace(/é‚«/g, '«').replace(/é‚»/g, '»');
console.log('Fixed: guillemets');
fixedCount++;

// Fix quotes
content = content.replace(/é…â€œ/g, '"');
console.log('Fixed: quotes');
fixedCount++;

console.log('Total fixes applied:', fixedCount);
console.log('New size:', content.length);

fs.writeFileSync('c:/Users/PC/Documents/latanzanie/locales/fr.json', content, 'utf8');
console.log('✅ File saved!');

// Validate JSON
try {
  JSON.parse(content);
  console.log('✅ JSON is valid');
} catch (e) {
  console.log('❌ JSON Error:', e.message);
}
