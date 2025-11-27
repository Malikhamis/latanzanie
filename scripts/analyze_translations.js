const fs = require('fs');

function analyzeTranslationStructure() {
  let en, fr;
  try {
    en = require('../locales/en.json');
  } catch(e) {
    console.error('Error loading English translation file:', e.message);
    return;
  }
  
  try {
    fr = require('../locales/fr.json');
  } catch(e) {
    console.error('Error loading French translation file:', e.message);
    return;
  }
  
  console.log('=== Translation File Structure Analysis ===\n');
  
  console.log('English translation file structure:');
  Object.keys(en).forEach(key => {
    console.log(`  ${key}: ${typeof en[key] === 'object' ? Object.keys(en[key]).length + ' sub-keys' : 'value'}`);
  });
  
  console.log('\nFrench translation file structure:');
  Object.keys(fr).forEach(key => {
    console.log(`  ${key}: ${typeof fr[key] === 'object' ? Object.keys(fr[key]).length + ' sub-keys' : 'value'}`);
  });
  
  console.log('\n=== Namespace Analysis ===\n');
  
  // Analyze common namespaces
  const namespaces = new Set([...Object.keys(en), ...Object.keys(fr)]);
  console.log('All namespaces:');
  namespaces.forEach(ns => {
    const enKeys = en[ns] ? Object.keys(en[ns]).length : 0;
    const frKeys = fr[ns] ? Object.keys(fr[ns]).length : 0;
    console.log(`  ${ns}: EN(${enKeys}) FR(${frKeys})`);
  });
  
  // Check for inconsistencies
  console.log('\n=== Inconsistencies ===\n');
  namespaces.forEach(ns => {
    if (en[ns] && !fr[ns]) {
      console.log(`  Missing namespace in French: ${ns}`);
    } else if (!en[ns] && fr[ns]) {
      console.log(`  Missing namespace in English: ${ns}`);
    } else if (en[ns] && fr[ns]) {
      const enSubKeys = new Set(Object.keys(en[ns]));
      const frSubKeys = new Set(Object.keys(fr[ns]));
      
      const missingInEn = [...frSubKeys].filter(key => !enSubKeys.has(key));
      const missingInFr = [...enSubKeys].filter(key => !frSubKeys.has(key));
      
      if (missingInEn.length > 0) {
        console.log(`  Missing in English ${ns}: ${missingInEn.join(', ')}`);
      }
      
      if (missingInFr.length > 0) {
        console.log(`  Missing in French ${ns}: ${missingInFr.join(', ')}`);
      }
    }
  });
}

analyzeTranslationStructure();