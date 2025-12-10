const fs = require('fs');
const path = require('path');

function walk(dir, filelist = []){
  fs.readdirSync(dir).forEach(file =>{
    const fp = path.join(dir,file);
    if(fs.statSync(fp).isDirectory()) walk(fp,filelist);
    else filelist.push(fp);
  });
  return filelist;
}

const src = path.join(__dirname,'..','src');
const files = walk(src).filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.js'));
const ns = new Set();
const re = /useTranslations\(['\"]([A-Za-z0-9_]+)['\"]\)/g;
for(const f of files){
  const s = fs.readFileSync(f,'utf8');
  let m;
  while((m = re.exec(s))){
    ns.add(m[1]);
  }
}
const namespaces = Array.from(ns).sort();
console.log('Found namespaces in source:', namespaces.length);
console.log(namespaces.join('\n'));

const enPath = path.join(__dirname,'..','locales','en.json');
let en;
try{
  en = JSON.parse(fs.readFileSync(enPath,'utf8'));
}catch(e){
  console.error('Failed to parse en.json:', e.message);
  process.exit(1);
}

const missing = [];
for(const n of namespaces){
  if(!(n in en)) missing.push(n);
}

console.log('\nNamespaces missing in en.json:', missing.length);
console.log(missing.join('\n'));
