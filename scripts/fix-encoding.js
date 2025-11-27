const fs = require('fs');

// Read the corrupted file
const content = fs.readFileSync('c:/Users/PC/Documents/latanzanie/locales/fr.json', 'utf8');

// Map of corrupted sequences to correct characters
const fixes = {
  'éƒâ‚¬': 'À',
  'éƒÂ©': 'é',
  'éƒÂ ': 'à',
  'éƒÂ¨': 'è',
  'éƒÂ´': 'ô',
  'éƒÂ®': 'î',
  'éƒÂ§': 'ç',
  'éƒÂª': 'ê',
  'é¢â€šÂ¬': '€',
  'é¢â‚¬â„¢': "'",
  'é¢â€ â€™': '–',
  'é¢â‚¬Â¦': '…',
  'Ã©': 'é',
  'Ã ': 'à',
  'Ã¨': 'è',
  'é¢ââ€ºÂ': 'û',
  'Ã´': 'ô',
  'é¢â‚¬Å¡': 'œ',
  'é¢ââ‚¬Â': 'Û',
  'é¢â€': 'É',
  'éƒÂ«': 'ë',
  'éƒÂ¹': 'ù',
  'éƒÂ»': 'û',
  'éƒÂ§': 'ç',
  'éƒÂ‰': 'É',
  'éƒâ€°': 'É',
  'éƒâ€"': 'Ô',
  'éƒÂ¢': 'â',
  'éƒÂ¯': 'ï',
  '4éƒâ€"4': '4×4',
  'é¢â‚¬â€œ': '–',
  'é¢â‚¬â€': '–',
  'é¢â‚¬Å"': '"',
  'é¢â‚¬': '—'
};

let fixed = content;
Object.keys(fixes).forEach(corrupt => {
  fixed = fixed.split(corrupt).join(fixes[corrupt]);
});

// Second pass for remaining issues
fixed = fixed.replace(/éƒÂ /g, 'à ');
fixed = fixed.replace(/éƒÂ©/g, 'é');
fixed = fixed.replace(/éƒÂ¨/g, 'è');
fixed = fixed.replace(/éƒÂ´/g, 'ô');
fixed = fixed.replace(/éƒÂ®/g, 'î');
fixed = fixed.replace(/éƒâ€"/g, '×');

// Fix double spaces that resulted from replacements
fixed = fixed.replace(/à\s+/g, 'à ');
fixed = fixed.replace(/é\s+/g, 'é ');
fixed = fixed.replace(/\s{2,}/g, ' ');

// Write the fixed content
fs.writeFileSync('c:/Users/PC/Documents/latanzanie/locales/fr.json', fixed, 'utf8');

// Additional cleanup pass for remaining issues
let finalContent = fs.readFileSync('c:/Users/PC/Documents/latanzanie/locales/fr.json', 'utf8');
finalContent = finalContent.replace(/é°Å¸â€"Â¿/g, '→');
finalContent = finalContent.replace(/Â«/g, '«');
finalContent = finalContent.replace(/Â»/g, '»');
finalContent = finalContent.replace(/Â¿/g, '?');
finalContent = finalContent.replace(/Â¢/g, '¢');
finalContent = finalContent.replace(/land cruiser \(4[^\)]{3,8}4\)/gi, 'land cruiser (4×4)');
fs.writeFileSync('c:/Users/PC/Documents/latanzanie/locales/fr.json', finalContent, 'utf8');

console.log('✅ Encoding fixed!');

// Validate
try {
  const data = JSON.parse(fixed);
  console.log('✅ JSON is valid');
  console.log('Sample - Navigation.about:', data.Navigation.about);
  console.log('Sample - UmbweRoute.hero.title:', data.UmbweRoute?.hero?.title);
} catch (e) {
  console.log('❌ JSON Error:', e.message);
}
