const fs=require('fs');
const s=fs.readFileSync('locales/fr.json','utf8');
const regex=/^\s{2}\"([^\"]+)\"\s*:/gm;
let m;const matches=[];
while((m=regex.exec(s))!==null){matches.push({key:m[1],index:m.index,match:m[0]});}
if(matches.length===0){console.error('no top-level matches');process.exit(1)}
const result={};
for(let i=0;i<matches.length;i++){
  const key=matches[i].key;
  const start=matches[i].index;
  const colonPos=s.indexOf(':', start);
  if(colonPos<0) continue;
  let p=colonPos+1;
  // skip whitespace
  while(/\s/.test(s[p])) p++;
  // determine value start char
  const startChar=s[p];
  if(startChar==='{'||startChar==='['||startChar==='"' || /[0-9\-]/.test(startChar) || startChar==='t' || startChar==='f' || startChar==='n'){
    // find end by brace/quote matching
    let endIndex=-1;
    if(startChar==='{'||startChar==='['){
      const openChar=startChar;
      const closeChar=openChar==='{'?'}':']';
      let depth=0;
      for(let j=p;j<s.length;j++){
        if(s[j]===openChar) depth++;
        else if(s[j]===closeChar) {depth--; if(depth===0){endIndex=j;break}}
      }
      if(endIndex===-1) {console.error('no matching brace for key',key);continue}
      const fragment=s.slice(p,endIndex+1);
      try{result[key]=JSON.parse(fragment);}catch(e){console.error('parse error for',key,e.message);}
    } else {
      // primitive or string - read to next comma or newline before next top-level key
      let j=p;let inString=false;let esc=false;for(;j<s.length;j++){
        const ch=s[j];
        if(ch==='\\' && inString) {esc=!esc; continue}
        if(ch==='"') { if(!esc) inString=!inString; else esc=false }
        if(!inString && (ch===','|| ch==='\n' || ch==='\r')) break;
      }
      const fragment=s.slice(p,j).trim().replace(/,$/,'');
      try{result[key]=JSON.parse(fragment)}catch(e){result[key]=fragment.replace(/^\"|\"$/g,'')}
    }
  } else {
    console.error('unexpected start char for',key, startChar);
  }
}
fs.writeFileSync('locales/fr.json',JSON.stringify(result,null,2));
console.log('Rebuilt fr.json with',Object.keys(result).length,'top-level keys');
