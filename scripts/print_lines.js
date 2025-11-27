const fs = require('fs');
const s = fs.readFileSync('src/app/[locale]/trips/lemosho-route/page.tsx','utf8');
const lines = s.split(/\r?\n/);
for (let i=910;i<=926;i++){
  const line = lines[i-1];
  console.log(i, JSON.stringify(line));
  const codes = Array.from(line||'').map(c=>c.charCodeAt(0));
  console.log('codes:', codes.join(' '));
}
