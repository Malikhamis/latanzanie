const fs = require('fs');
const path = 'c:\\Users\\PC\\Documents\\latanzanie\\locales\\fr.json';
const s = fs.readFileSync(path,'utf8');
let lo = 1, hi = s.length, ans = hi+1;
while(lo<=hi){
  const mid = Math.floor((lo+hi)/2);
  try{
    JSON.parse(s.slice(0, mid));
    lo = mid+1;
  } catch(e) {
    ans = mid;
    hi = mid-1;
  }
}
if(ans<=s.length){
  console.log('First failing index:', ans);
  const before = s.slice(Math.max(0, ans-80), ans+80);
  console.log('Context around error (80 chars each side):');
  console.log(before);
} else {
  console.log('Entire file parsed (unexpected)');
}
