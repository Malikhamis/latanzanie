const fs = require('fs');
const path = 'c:\\Users\\PC\\Documents\\latanzanie\\locales\\en.json';
try {
  const m = JSON.parse(fs.readFileSync(path,'utf8'));
  console.log('gallery.title ->', m.UmbweRoute && m.UmbweRoute.gallery && m.UmbweRoute.gallery.title);
  console.log('faqsTitle ->', m.UmbweRoute && m.UmbweRoute.faqsTitle);
  console.log('faq.q1.question ->', m.UmbweRoute && m.UmbweRoute.faq && m.UmbweRoute.faq.q1 && m.UmbweRoute.faq.q1.question);
} catch (e) {
  console.error('ERR', e.message);
  process.exit(1);
}
