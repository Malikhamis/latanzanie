const fs=require('fs');
const s=fs.readFileSync('./locales/en.json','utf8');
let parsed;
try{ parsed=JSON.parse(s);}catch(e){console.error('parse error', e.message); process.exit(1)}
let foundPaths=[];
function walk(obj,path){
  if(obj && typeof obj==='object'){
    for(const k of Object.keys(obj)){
      const v=obj[k];
      if(k==='LemoshoRoute') foundPaths.push(path.concat(k).join('.'));
      if(typeof v==='object') walk(v, path.concat(k));
      else if(typeof v==='string'){
        if(v.includes('"LemoshoRoute"') || v.includes('LemoshoRoute')){
          foundPaths.push(path.concat(k).join('.')+" (inside string)");
        }
      }
    }
  }
}
walk(parsed, []);
console.log('foundPaths:', foundPaths);
console.log('top-level hasOwnProperty LemoshoRoute?', Object.prototype.hasOwnProperty.call(parsed,'LemoshoRoute'));
console.log('top-level keys length', Object.keys(parsed).length);
