const fs = require('fs');
const s = fs.readFileSync('./locales/en.json','utf8');
const idx = s.indexOf('"LemoshoRoute"');
console.log('index', idx);
console.log('context before (200 chars):\n', s.slice(Math.max(0, idx-200), idx));
console.log('context after (200 chars):\n', s.slice(idx, idx+200));
try{
	const parsed = JSON.parse(s);
	console.log('parsed keys length', Object.keys(parsed).length);
	console.log('has LemoshoRoute?', parsed.LemoshoRoute !== undefined);
}catch(e){
	console.error('parse error', e.message);
}
