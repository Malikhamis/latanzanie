const fs = require('fs');
const path = require('path');

function readJSON(p){
  try{ return JSON.parse(fs.readFileSync(p,'utf8')); }catch(e){
    console.error('Failed to parse', p, e.message); return null;
  }
}

function flatten(obj, prefix=''){
  const out = {};
  for(const [k,v] of Object.entries(obj||{})){
    const key = prefix? `${prefix}.${k}` : k;
    if(v && typeof v === 'object' && !Array.isArray(v)) Object.assign(out, flatten(v, key));
    else out[key] = v;
  }
  return out;
}

function walk(dir, exts = new Set(['.ts','.tsx','.js','.jsx'])){
  const files = [];
  for(const entry of fs.readdirSync(dir, {withFileTypes:true})){
    const p = path.join(dir, entry.name);
    if(entry.isDirectory()) files.push(...walk(p, exts));
    else if(exts.has(path.extname(entry.name))) files.push(p);
  }
  return files;
}

function collectKeysFromSource(src){
  const namespaces = {}; // varName -> namespace
  const keys = new Set();

  const useTRegex = /const\s+([A-Za-z_$][\w$]*)\s*=\s*useTranslations\(\s*['"]([^'\"]+)['"]\s*\)/g;
  let m;
  while((m = useTRegex.exec(src))){ namespaces[m[1]] = m[2]; }

  for(const [varName, ns] of Object.entries(namespaces)){
    const callRe = new RegExp(varName + "\\(\\s*['\"]([^'\"]+)['\"]", 'g');
    let c;
    while((c = callRe.exec(src))){ keys.add(ns + '.' + c[1]); }
  }

  // safeT fallback keys: assume same-file primary var named 't' if present
  const hasT = namespaces.t;
  if(hasT){
    const safeTRe = /safeT\(\s*['\"]([^'\"]+)['\"]/g;
    let s;
    while((s = safeTRe.exec(src))){
      const rel = s[1];
      // if already looks namespaced, prefix with the known namespace if not absolute
      if(rel.includes('.')) keys.add(hasT + '.' + rel);
      else keys.add(hasT + '.' + rel);
    }
  }
  return keys;
}

function collectAllSourceKeys(root){
  const files = walk(root);
  const keys = new Set();
  for(const f of files){
    const src = fs.readFileSync(f,'utf8');
    const k = collectKeysFromSource(src);
    k.forEach(x => keys.add(x));
  }
  return keys;
}

function main(){
  const enPath = path.resolve(__dirname, '..', 'locales', 'en.json');
  const frPath = path.resolve(__dirname, '..', 'locales', 'fr.json');
  const en = readJSON(enPath) || {};
  const fr = readJSON(frPath) || {};
  const flatEn = flatten(en);
  const flatFr = flatten(fr);

  const sourceKeys = collectAllSourceKeys(path.resolve(__dirname, '..', 'src'));

  const missingEn = [];
  const missingFr = [];
  const missingFromCatalogs = [];

  for(const key of sourceKeys){
    if(!(key in flatEn)) missingEn.push(key);
    if(!(key in flatFr)) missingFr.push(key);
    if(!(key in flatEn) || !(key in flatFr)) missingFromCatalogs.push(key);
  }

  console.log('=== Locale Audit Report ===');
  console.log('Source keys found:', sourceKeys.size);
  console.log('Missing in en:', missingEn.length);
  console.log('Missing in fr:', missingFr.length);
  if(missingEn.length){
    console.log('\n-- Missing in en --');
    missingEn.sort().forEach(k=>console.log(k));
  }
  if(missingFr.length){
    console.log('\n-- Missing in fr --');
    missingFr.sort().forEach(k=>console.log(k));
  }
}

if(require.main === module) main();
