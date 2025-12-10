const fs = require('fs');
const s = fs.readFileSync('locales/fr.json','utf8');
const lines = s.split(/\r?\n/);
let out = [];
let i = 0;
// copy opening lines until first top-level key
// assume file starts with '{'
if(lines[i].trim().startsWith('{')){ out.push(lines[i]); i++; }
const seen = new Set();
while(i < lines.length){
  const line = lines[i];
  const m = line.match(/^\s*"([A-Za-z0-9_]+)"\s*:\s*\{/);
  if(m){
    const key = m[1];
    if(seen.has(key)){
      // skip this block
      let depth = 0;
      do{
        const l = lines[i];
        for(const ch of l){ if(ch === '{') depth++; else if(ch === '}') depth--; }
        i++;
      } while(i < lines.length && depth > 0);
      // consume trailing comma line if present
      if(i < lines.length && lines[i].trim() === ',') i++;
      continue;
    } else {
      seen.add(key);
      // copy block
      let depth = 0;
      do{
        const l = lines[i];
        out.push(l);
        for(const ch of l){ if(ch === '{') depth++; else if(ch === '}') depth--; }
        i++;
      } while(i < lines.length && depth > 0);
      // copy possible trailing comma
      if(i < lines.length && lines[i].trim() === ','){ out.push(lines[i]); i++; }
      continue;
    }
  } else {
    // copy line (e.g., closing brace)
    out.push(line);
    i++;
  }
}
fs.writeFileSync('locales/fr.cleaned.json', out.join('\n'), 'utf8');
console.log('Wrote locales/fr.cleaned.json — kept', seen.size, 'top-level keys');
