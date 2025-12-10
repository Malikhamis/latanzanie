const fs = require('fs');
const s = fs.readFileSync('c:\\Users\\PC\\Documents\\latanzanie\\locales\\fr.json','utf8');
const regex = /,(\s*[}\]])/g;
let m; let found = false;
while((m = regex.exec(s))){
  found = true;
  const idx = m.index;
  console.log('Trailing comma near index', idx);
  console.log('Context:\n' + s.slice(Math.max(0, idx-40), idx+40));
}
if(!found) console.log('No trailing-comma patterns found');
