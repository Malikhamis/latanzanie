const fs = require('fs');
const path = require('path');

// Function to get all keys from a JSON object recursively
function getAllKeys(obj, prefix = '') {
  let keys = [];
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        keys = keys.concat(getAllKeys(obj[key], fullKey));
      } else {
        keys.push(fullKey);
      }
    }
  }
  
  return keys;
}

// Function to find missing keys in translation files
function findMissingKeys(enKeys, translationKeys, language) {
  const missing = [];
  const extra = [];
  
  // Check for missing keys
  for (const key of enKeys) {
    if (!translationKeys.includes(key)) {
      missing.push(key);
    }
  }
  
  // Check for extra keys
  for (const key of translationKeys) {
    if (!enKeys.includes(key)) {
      extra.push(key);
    }
  }
  
  return { missing, extra };
}

// Main validation function
function validateTranslations() {
  try {
    // Read English translation file
    const enContent = fs.readFileSync(path.join(__dirname, '../locales/en.json'), 'utf8');
    const enJson = JSON.parse(enContent);
    const enKeys = getAllKeys(enJson);
    
    console.log(`English translation file has ${enKeys.length} keys`);
    
    // Read French translation file
    const frContent = fs.readFileSync(path.join(__dirname, '../locales/fr.json'), 'utf8');
    const frJson = JSON.parse(frContent);
    const frKeys = getAllKeys(frJson);
    
    console.log(`French translation file has ${frKeys.length} keys`);
    
    // Validate French translations
    const { missing: frMissing, extra: frExtra } = findMissingKeys(enKeys, frKeys, 'French');
    
    console.log('\n=== VALIDATION RESULTS ===');
    
    if (frMissing.length > 0) {
      console.log(`\n❌ Missing keys in French translation (${frMissing.length}):`);
      frMissing.forEach(key => console.log(`  - ${key}`));
    } else {
      console.log('\n✅ No missing keys in French translation');
    }
    
    if (frExtra.length > 0) {
      console.log(`\n⚠️  Extra keys in French translation (${frExtra.length}):`);
      frExtra.forEach(key => console.log(`  - ${key}`));
    } else {
      console.log('\n✅ No extra keys in French translation');
    }
    
    // Summary
    console.log('\n=== SUMMARY ===');
    console.log(`Total English keys: ${enKeys.length}`);
    console.log(`Total French keys: ${frKeys.length}`);
    console.log(`Missing French keys: ${frMissing.length}`);
    console.log(`Extra French keys: ${frExtra.length}`);
    
    // Return status code
    if (frMissing.length > 0) {
      process.exit(1); // Exit with error if missing keys found
    }
    
    console.log('\n🎉 All translations are valid!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error validating translations:', error.message);
    process.exit(1);
  }
}

// Run validation
validateTranslations();