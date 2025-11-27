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

// Function to create a new object with only the keys that exist in the reference object
function alignWithReference(referenceObj, targetObj, prefix = '') {
  const alignedObj = {};
  
  for (const key in referenceObj) {
    if (referenceObj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof referenceObj[key] === 'object' && referenceObj[key] !== null && !Array.isArray(referenceObj[key])) {
        // If it's an object, recursively align it
        if (targetObj.hasOwnProperty(key) && typeof targetObj[key] === 'object' && targetObj[key] !== null && !Array.isArray(targetObj[key])) {
          alignedObj[key] = alignWithReference(referenceObj[key], targetObj[key], fullKey);
        } else {
          // If the key doesn't exist in target or is not an object, use the reference structure
          alignedObj[key] = JSON.parse(JSON.stringify(referenceObj[key]));
        }
      } else {
        // If it's a leaf node, use the value from target if it exists, otherwise use reference
        if (targetObj.hasOwnProperty(key)) {
          alignedObj[key] = targetObj[key];
        } else {
          alignedObj[key] = referenceObj[key];
        }
      }
    }
  }
  
  return alignedObj;
}

// Main function to fix translation inconsistencies
function fixTranslationInconsistencies() {
  try {
    // Read English translation file (reference)
    const enContent = fs.readFileSync(path.join(__dirname, '../locales/en.json'), 'utf8');
    const enJson = JSON.parse(enContent);
    
    // Read French translation file (to be fixed)
    const frContent = fs.readFileSync(path.join(__dirname, '../locales/fr.json'), 'utf8');
    const frJson = JSON.parse(frContent);
    
    console.log('Aligning French translation with English reference...');
    
    // Align French translation with English structure
    const fixedFrJson = alignWithReference(enJson, frJson);
    
    // Write the fixed French translation back to file
    fs.writeFileSync(path.join(__dirname, '../locales/fr.json'), JSON.stringify(fixedFrJson, null, 2), 'utf8');
    
    console.log('✅ French translation file has been fixed and aligned with English structure');
    
    // Validate the fix
    const enKeys = getAllKeys(enJson);
    const fixedFrKeys = getAllKeys(fixedFrJson);
    
    console.log(`\n=== VALIDATION AFTER FIX ===`);
    console.log(`English keys: ${enKeys.length}`);
    console.log(`French keys: ${fixedFrKeys.length}`);
    
    if (enKeys.length === fixedFrKeys.length) {
      console.log('✅ Key counts now match');
      
      // Check if all English keys exist in French
      const missingKeys = enKeys.filter(key => !fixedFrKeys.includes(key));
      if (missingKeys.length === 0) {
        console.log('✅ All English keys are present in French translation');
      } else {
        console.log(`⚠️  Still missing ${missingKeys.length} keys in French translation:`);
        missingKeys.forEach(key => console.log(`  - ${key}`));
      }
    } else {
      console.log(`⚠️  Key count mismatch - English: ${enKeys.length}, French: ${fixedFrKeys.length}`);
    }
    
  } catch (error) {
    console.error('❌ Error fixing translation inconsistencies:', error.message);
    process.exit(1);
  }
}

// Run the fix
fixTranslationInconsistencies();