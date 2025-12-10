const fs = require('fs');
const path = 'c:\\Users\\PC\\Documents\\latanzanie\\locales\\fr.json';
try {
  const s = fs.readFileSync(path, 'utf8');
  JSON.parse(s);
  console.log('PARSE_OK');
} catch (e) {
  console.error('ERROR:', e && e.message);
  if (e && e.stack) console.error(e.stack);
  process.exit(1);
}
