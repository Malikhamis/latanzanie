const fs=require('fs');
const s=fs.readFileSync('locales/fr.json','utf8');
const regex=/^\s{2}\"([^\"]+)\"\s*:/gm;
let m;const counts={};const positions={};
while((m=regex.exec(s))!==null){const k=m[1];counts[k]=(counts[k]||0)+1;positions[k]=positions[k]||[];positions[k].push({index:m.index,match:m[0],pos:m.index});}
const duplicates=Object.entries(counts).filter(([k,v])=>v>1).map(([k,v])=>({key:k,count:v,positions:positions[k].slice(0,5)}));
console.log(JSON.stringify(duplicates,null,2));