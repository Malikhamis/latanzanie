const fs = require('fs');
const s = fs.readFileSync('locales/fr.json','utf8');
const lines = s.split(/\r?\n/);
const re = /^\s*"([A-Za-z0-9_]+)"\s*:\s*\{/;
const found = {};
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(re);
  if (m) {
    const key = m[1];
    if (!found[key]) found[key] = [];
    found[key].push(i+1);
  }
}
const duplicates = Object.entries(found).filter(([, v]) => v.length > 1);
if (duplicates.length === 0) {
  console.log('No duplicate top-level keys found');
} else {
  console.log('Duplicate top-level keys (key: [lines])');
  for (const [k, v] of duplicates) console.log(k+':', v);
}
