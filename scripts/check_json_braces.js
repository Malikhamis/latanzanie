const fs = require('fs');
const path = 'c:\\Users\\PC\\Documents\\latanzanie\\locales\\en.json';
const s = fs.readFileSync(path, 'utf8');
let inStr = false, esc = false, depth = 0;
let maxDepth = 0, maxDepthPos = -1;
let stack = [];
for (let i = 0; i < s.length; i++) {
  const c = s[i];
  if (!inStr) {
    if (c === '"') inStr = true;
    else if (c === '{') { depth++; stack.push(i); }
    else if (c === '}') { depth--; stack.pop(); }
  } else {
    if (!esc && c === '\\') esc = true;
    else if (!esc && c === '"') inStr = false;
    else esc = false;
  }
  if (depth > maxDepth) { maxDepth = depth; maxDepthPos = i; }
  if (depth < 0) {
    console.log('Negative depth at', i);
    break;
  }
}
console.log('final depth', depth);
console.log('max depth', maxDepth, 'at pos', maxDepthPos);
if (maxDepthPos>0) {
  const around = s.slice(Math.max(0,maxDepthPos-120), Math.min(s.length, maxDepthPos+120));
  const linesBefore = s.slice(0, Math.max(0,maxDepthPos)).split(/\n/).length;
  console.log('---context at maxDepth pos (approx line', linesBefore,')---\n', around);
}
if (stack.length) {
  const lastOpenPos = stack[stack.length-1];
  const beforeLines = s.slice(0,lastOpenPos).split(/\n/).length;
  console.log('Unmatched open brace at pos', lastOpenPos, 'approx line', beforeLines);
  console.log('Context around unmatched open:\n', s.slice(Math.max(0,lastOpenPos-120), Math.min(s.length,lastOpenPos+120)));
}
// Print position info for the error position reported earlier
const pos = 98193;
let pre = s.slice(0, pos);
let lines = pre.split(/\n/);
console.log('calculated line for pos', pos, '->', lines.length, 'col', lines[lines.length-1].length+1);
console.log('snippet around pos:\n', s.slice(pos-60, pos+60));
