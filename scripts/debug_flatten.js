const fs = require('fs');
const path = require('path');
function flatten(obj, prefix=''){
  const out = {};
  for(const [k,v] of Object.entries(obj||{})){
    const key = prefix? `${prefix}.${k}` : k;
    if(v && typeof v === 'object' && !Array.isArray(v)) Object.assign(out, flatten(v, key));
    else out[key] = v;
  }
  return out;
}
const frPath = path.resolve(__dirname, '..', 'locales', 'fr.json');
const fr = JSON.parse(fs.readFileSync(frPath,'utf8'));
const flatFr = flatten(fr);
const keys = Object.keys(flatFr).filter(k => k.startsWith('KilimanjaroSection'));
console.log('FR KilimanjaroSection keys:', keys);
console.log('Has bookNow?', 'KilimanjaroSection.bookNow' in flatFr, flatFr['KilimanjaroSection.bookNow']);
console.log('Has fromPrice?', 'KilimanjaroSection.fromPrice' in flatFr, flatFr['KilimanjaroSection.fromPrice']);
console.log('Has subtitle?', 'KilimanjaroSection.subtitle' in flatFr, flatFr['KilimanjaroSection.subtitle']);
console.log('Has title?', 'KilimanjaroSection.title' in flatFr, flatFr['KilimanjaroSection.title']);
const mm = Object.keys(flatFr).filter(k => k.startsWith('MobileMenu'));
console.log('FR MobileMenu keys:', mm);
