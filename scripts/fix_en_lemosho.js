const fs=require('fs');
const s=fs.readFileSync('./locales/en.json','utf8');
let parsed=JSON.parse(s);
function find(obj){
  if(obj && typeof obj==='object'){
    for(const k of Object.keys(obj)){
      if(k==='LemoshoRoute') return obj[k];
      const v=obj[k];
      if(typeof v==='object'){
        const r=find(v);
        if(r) return r;
      }
    }
  }
  return null;
}
const found=find(parsed);
if(!found){
  console.error('No nested LemoshoRoute found'); process.exit(1);
}
parsed.LemoshoRoute=found;
fs.writeFileSync('./locales/en.json', JSON.stringify(parsed, null, 2));
console.log('Wrote locales/en.json with top-level LemoshoRoute');
