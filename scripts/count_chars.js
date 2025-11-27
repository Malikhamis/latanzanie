const fs = require('fs');
const path = 'src/app/[locale]/trips/lemosho-route/page.tsx';
const s = fs.readFileSync(path, 'utf8');
const counts = {
  '{': (s.match(/{/g) || []).length,
  '}': (s.match(/}/g) || []).length,
  '(': (s.match(/\(/g) || []).length,
  ')': (s.match(/\)/g) || []).length,
  '<': (s.match(/</g) || []).length,
  '>': (s.match(/>/g) || []).length,
  '`': (s.match(/`/g) || []).length,
  '/': (s.match(/\//g) || []).length
};
console.log('counts for', path);
console.log(counts);
// Print lines with '>' for inspection
const lines = s.split(/\r?\n/);
for (let i = 0; i < lines.length; i++) {
  if ((lines[i].match(/>/g) || []).length > 0) {
    // show lines near the point where '>' appears many times
    if ((lines[i].match(/>/g) || []).length > 1) {
      console.log('Line', i+1, '>', (lines[i].match(/>/g)||[]).length, lines[i].slice(0,200));
    }
  }
}
