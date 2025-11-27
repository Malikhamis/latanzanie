const fs=require('fs');
const s=fs.readFileSync('./locales/en.json','utf8');
let depth=0, inString=false, escape=false; let endPos=-1;
for(let i=0;i<s.length;i++){
  const ch=s[i];
  if(inString){
    if(escape){ escape=false; continue; }
    if(ch==='\\') { escape=true; continue; }
    if(ch==='"') { inString=false; continue; }
    continue;
  }
  if(ch==='"') { inString=true; continue; }
  if(ch==='{') depth++;
  else if(ch==='}') { depth--; if(depth===0){ endPos=i; break;} }
}
console.log('endPos', endPos);
console.log('char at endPos', s.slice(endPos-50,endPos+50));
console.log('Lemosho index', s.indexOf('"LemoshoRoute"'));
console.log('length', s.length);
try{
  const parsed = JSON.parse(s);
  const str = JSON.stringify(parsed);
  console.log('stringified includes Lemosho?', str.indexOf('"LemoshoRoute"'));
    console.log('parsed keys', Object.keys(parsed).slice(0,40));
    const si = str.indexOf('"LemoshoRoute"');
    if(si>-1){
      console.log('context in stringified (50 chars before):', str.slice(Math.max(0, si-50), si+80));
    }
    console.log('parsed.LemoshoRoute exists?', !!parsed.LemoshoRoute, 'typeof:', typeof parsed.LemoshoRoute, 'hasOwnProperty:', Object.prototype.hasOwnProperty.call(parsed,'LemoshoRoute'));
}catch(e){
  console.error('parse error', e.message);
}
