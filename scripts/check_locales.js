const fs = require('fs');
function inspect(path){
  const s = fs.readFileSync(path,'utf8');
  console.log('---', path, 'length', s.length);
  const idx = s.indexOf('"LemoshoRoute"');
  console.log('LemoshoRoute index:', idx);
  try{
    const parsed = JSON.parse(s);
    console.log('Parsed top-level keys:', Object.keys(parsed));
    console.log('Has LemoshoRoute?', parsed.LemoshoRoute !== undefined);
  }catch(e){
    console.error('JSON.parse error for', path, e.message);
  }
}
inspect('./locales/fr.json');
inspect('./locales/en.json');
