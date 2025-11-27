const fs = require('fs');
const path = require('path');

// Files to update - overview pages and route detail pages
const filesToUpdate = [
  // Overview pages (3)
  'src/app/[locale]/trips/tanzania-safari/page.tsx',
  'src/app/[locale]/trips/zanzibar-beach-holidays/page.tsx',
  'src/app/[locale]/trips/climb-kilimanjaro/page.tsx',
  
  // Route detail pages (8)
  'src/app/[locale]/trips/safari-kilimanjaro-6-days/page.tsx',
  'src/app/[locale]/trips/safari-bivouac-4-days/page.tsx',
  'src/app/[locale]/trips/materuni-chemka-2-days/page.tsx',
  'src/app/[locale]/trips/lemosho-route/page.tsx',
  'src/app/[locale]/trips/machame-route/page.tsx',
  'src/app/[locale]/trips/marangu-route/page.tsx',
  'src/app/[locale]/trips/umbwe-route/page.tsx',
  'src/app/[locale]/trips/zanzibar-safari-beach-10-days/page.tsx'
];

// Text size replacements to make
const replacements = [
  // Action card titles: text-sm → text-base
  {
    pattern: /<h3 className="font-semibold text-gray-900 text-sm">Group Discounts<\/h3>/g,
    replacement: '<h3 className="font-semibold text-gray-900 text-base">Group Discounts</h3>',
    description: 'Action card title: Group Discounts'
  },
  {
    pattern: /<h3 className="font-semibold text-gray-900 text-sm">Don't see your dates\?<\/h3>/g,
    replacement: '<h3 className="font-semibold text-gray-900 text-base">Don\'t see your dates?</h3>',
    description: 'Action card title: Don\'t see your dates'
  },
  
  // Action card descriptions: text-xs → text-sm
  {
    pattern: /<p className="text-gray-600 text-xs">Enquire for more details<\/p>/g,
    replacement: '<p className="text-gray-600 text-sm">Enquire for more details</p>',
    description: 'Action card desc: Enquire for more details'
  },
  {
    pattern: /<p className="text-gray-600 text-xs">Please propose a new departure<\/p>/g,
    replacement: '<p className="text-gray-600 text-sm">Please propose a new departure</p>',
    description: 'Action card desc: Please propose'
  },
  
  // Filter buttons: text-sm → text-base
  {
    pattern: /className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2\.5 text-sm font-medium/g,
    replacement: 'className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base font-medium',
    description: 'Filter button text size'
  },
  
  // Month dropdown labels: text-sm → text-base
  {
    pattern: /<h4 className="text-sm font-bold text-gray-900 mb-3">/g,
    replacement: '<h4 className="text-base font-bold text-gray-900 mb-3">',
    description: 'Month dropdown year labels'
  },
  
  // Month buttons: text-sm → text-base
  {
    pattern: /className=\{`py-2 px-3 rounded-lg text-sm font-medium/g,
    replacement: 'className={`py-2 px-3 rounded-lg text-base font-medium',
    description: 'Month button text size'
  },
  
  // Route selector checkboxes: text-sm → text-base
  {
    pattern: /<span className="text-sm text-gray-800">/g,
    replacement: '<span className="text-base text-gray-800">',
    description: 'Route selector labels'
  },
  
  // Show earlier/later dates links: text-sm → text-base
  {
    pattern: /<button className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">/g,
    replacement: '<button className="text-base text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">',
    description: 'Navigation date links'
  },
  
  // Date header: text-lg → text-xl
  {
    pattern: /<h3 className="text-lg font-bold text-gray-900">/g,
    replacement: '<h3 className="text-xl font-bold text-gray-900">',
    description: 'Date header (month/year)'
  },
  
  // Trip card titles: text-sm → text-base
  {
    pattern: /<span className="font-semibold text-gray-900 text-sm">/g,
    replacement: '<span className="font-semibold text-gray-900 text-base">',
    description: 'Trip card title'
  },
  
  // Trip details container: text-sm → text-base
  {
    pattern: /<div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">/g,
    replacement: '<div className="flex flex-wrap items-center gap-2 text-base text-gray-600">',
    description: 'Trip details container'
  },
  
  // Trip description: text-xs → text-sm
  {
    pattern: /<span className="text-xs text-gray-600">/g,
    replacement: '<span className="text-sm text-gray-600">',
    description: 'Trip description text'
  },
  
  // Available badge: text-xs → text-sm
  {
    pattern: /<span className="px-2 py-0\.5 bg-green-100 text-green-700 rounded text-xs font-medium">/g,
    replacement: '<span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">',
    description: 'Available badge'
  },
  
  // Price text: text-sm → text-base
  {
    pattern: /<div className="text-sm text-gray-600">from <span className="font-semibold text-gray-900">/g,
    replacement: '<div className="text-base text-gray-600">from <span className="font-semibold text-gray-900">',
    description: 'Trip price "from" text'
  },
  
  // Deposit text: text-xs → text-sm
  {
    pattern: /<div className="text-xs text-gray-500">Deposit/g,
    replacement: '<div className="text-sm text-gray-500">Deposit',
    description: 'Deposit text'
  },
  
  // Enquire button: text-sm → text-base
  {
    pattern: /className="bg-\[#00A896\] hover:bg-\[#008576\] text-white px-6 py-2 rounded-md text-sm font-medium/g,
    replacement: 'className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-md text-base font-medium',
    description: 'Enquire button text'
  },
  
  // "Don't see your dates" section heading: text-xl → text-2xl
  {
    pattern: /<h3 className="text-xl font-bold text-gray-900 mb-2">Don't see your dates\?<\/h3>/g,
    replacement: '<h3 className="text-2xl font-bold text-gray-900 mb-2">Don\'t see your dates?</h3>',
    description: 'Bottom CTA heading'
  },
  
  // "Don't see your dates" description: default → text-base
  {
    pattern: /<p className="text-gray-600 mb-6">We can create it if bookable!<\/p>/g,
    replacement: '<p className="text-gray-600 text-base mb-6">We can create it if bookable!</p>',
    description: 'Bottom CTA description'
  },
  
  // Propose Dates button: default → text-base
  {
    pattern: /className="bg-\[#00A896\] hover:bg-\[#008576\] text-white px-8 py-3 rounded-lg font-medium transition-colors">/g,
    replacement: 'className="bg-[#00A896] hover:bg-[#008576] text-white px-8 py-3 rounded-lg text-base font-medium transition-colors">',
    description: 'Propose Dates button'
  }
];

function updateFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    return { success: false, error: `File not found: ${filePath}` };
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changeCount = 0;
  const changes = [];
  
  replacements.forEach(({ pattern, replacement, description }) => {
    const matches = content.match(pattern);
    if (matches) {
      content = content.replace(pattern, replacement);
      changeCount += matches.length;
      changes.push(`  - ${description}: ${matches.length} replacement(s)`);
    }
  });
  
  if (changeCount > 0) {
    // Create backup
    fs.writeFileSync(fullPath + '.text-size-backup', fs.readFileSync(fullPath, 'utf8'));
    // Write updated content
    fs.writeFileSync(fullPath, content, 'utf8');
    return { success: true, changeCount, changes };
  }
  
  return { success: true, changeCount: 0, changes: [] };
}

console.log('🔤 Increasing text sizes in booking sections...\n');
console.log('━'.repeat(80));

let totalChanges = 0;
const results = [];

filesToUpdate.forEach((file, index) => {
  console.log(`[${index + 1}/${filesToUpdate.length}] Processing: ${path.basename(path.dirname(file))}/${path.basename(file)}`);
  
  const result = updateFile(file);
  
  if (result.success) {
    if (result.changeCount > 0) {
      console.log(`  ✅ Made ${result.changeCount} text size increases`);
      result.changes.forEach(change => console.log(change));
      totalChanges += result.changeCount;
    } else {
      console.log(`  ⚠️  No matching text found (may already be updated)`);
    }
    results.push({ file, status: '✅', changes: result.changeCount });
  } else {
    console.log(`  ❌ ${result.error}`);
    results.push({ file, status: '❌', error: result.error });
  }
  
  console.log('');
});

console.log('━'.repeat(80));
console.log('📊 SUMMARY');
console.log('━'.repeat(80));
console.log(`Total files processed: ${filesToUpdate.length}`);
console.log(`Total text size increases: ${totalChanges}`);
console.log(`Successful: ${results.filter(r => r.status === '✅').length}`);
console.log(`Failed: ${results.filter(r => r.status === '❌').length}`);
console.log('');

if (totalChanges > 0) {
  console.log('🎉 Text sizes increased successfully!');
  console.log('💡 Backups created with .text-size-backup extension');
  console.log('💡 Verify the changes and delete backups if satisfied');
} else {
  console.log('⚠️  No changes made - files may already have increased text sizes');
}
