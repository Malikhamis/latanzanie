const fs=require('fs');
const s=fs.readFileSync('locales/fr.json','utf8');
const lines=s.split(/\r?\n/);
const re=/^ {2}\"([A-Za-z0-9_]+)\"\s*:\s*\{/; // two spaces -> top-level
const found={};
for(let i=0;i<lines.length;i++){
  const m=lines[i].match(re);
  if(m){ const k=m[1]; if(!found[k]) found[k]=[]; found[k].push(i+1); }
}
const d=Object.entries(found).filter(([,v])=>v.length>1);
if(d.length===0){ console.log('no top-level duplicates'); process.exit(0);} 
console.log('Top-level duplicate keys and lines:');
for(const [k,v] of d) console.log(k, v);