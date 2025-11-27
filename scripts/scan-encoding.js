const fs = require('fs');

const content = fs.readFileSync('c:/Users/PC/Documents/latanzanie/locales/fr.json', 'utf8');
const data = JSON.parse(content);

// Function to recursively search for encoding issues
function findEncodingIssues(obj, path = '') {
  const issues = [];
  
  for (const key in obj) {
    const value = obj[key];
    const currentPath = path ? `${path}.${key}` : key;
    
    if (typeof value === 'string') {
      // Check for common encoding issues
      if (value.match(/Ã[^\s]{1,2}|éƒ[^\s]|é¢â/)) {
        issues.push({
          path: currentPath,
          value: value.substring(0, 100)
        });
      }
    } else if (typeof value === 'object' && value !== null) {
      issues.push(...findEncodingIssues(value, currentPath));
    }
  }
  
  return issues;
}

const issues = findEncodingIssues(data);

if (issues.length > 0) {
  console.log(`❌ Found ${issues.length} encoding issues:\n`);
  issues.slice(0, 20).forEach(issue => {
    console.log(`Path: ${issue.path}`);
    console.log(`Value: ${issue.value}`);
    console.log('---');
  });
} else {
  console.log('✅ No encoding issues found!');
}
