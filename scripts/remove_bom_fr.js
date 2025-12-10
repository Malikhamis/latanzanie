const fs = require('fs');
const path = 'c:\\Users\\PC\\Documents\\latanzanie\\locales\\fr.json';
let s = fs.readFileSync(path);
if(s[0]===0xEF && s[1]===0xBB && s[2]===0xBF){
  s = s.slice(3);
  fs.writeFileSync(path, s);
  console.log('Removed BOM');
} else {
  console.log('No BOM found');
}
