const fs = require('fs');
const path = require('path');

// Configuration for each page
const pages = [
  {
    name: 'lemosho-route',
    filePath: 'src/app/[locale]/trips/lemosho-route/page.tsx',
    routeId: 'lemosho',
    tripName: 'Lemosho Route - 7/8 Days',
    price: 'USD2,500',
    deposit: 'USD500',
    duration: '7-8 Days',
    description: 'Scenic route with high success rate',
    stateVar: 'selectedItineraries',
    modalFunc: 'setIsInquiryFormOpen'
  },
  {
    name: 'machame-route',
    filePath: 'src/app/[locale]/trips/machame-route/page.tsx',
    routeId: 'machame',
    tripName: 'Machame Route - 6/7 Days',
    price: 'USD2,490',
    deposit: 'USD500',
    duration: '6-7 Days',
    description: 'Most popular Kilimanjaro route',
    stateVar: 'selectedItineraries',
    modalFunc: 'setIsContactModalOpen'
  },
  {
    name: 'marangu-route',
    filePath: 'src/app/[locale]/trips/marangu-route/page.tsx',
    routeId: 'marangu',
    tripName: 'Marangu Route - 5/6 Days',
    price: 'USD2,390',
    deposit: 'USD500',
    duration: '5-6 Days',
    description: 'The "Coca-Cola" route with hut accommodation',
    stateVar: 'selectedItineraries',
    modalFunc: 'setIsContactModalOpen'
  },
  {
    name: 'umbwe-route',
    filePath: 'src/app/[locale]/trips/umbwe-route/page.tsx',
    routeId: 'umbwe',
    tripName: 'Umbwe Route - 6/7 Days',
    price: 'USD2,590',
    deposit: 'USD500',
    duration: '6-7 Days',
    description: 'Challenging and direct ascent',
    stateVar: 'selectedItineraries',
    modalFunc: 'setIsContactModalOpen'
  },
  {
    name: 'zanzibar-safari-beach-10-days',
    filePath: 'src/app/[locale]/trips/zanzibar-safari-beach-10-days/page.tsx',
    routeId: 'safari-beach-combo',
    tripName: 'Zanzibar Safari & Beach - 10 Days',
    price: '€2,300',
    deposit: '€400',
    duration: '10 Days',
    description: 'Safari adventure with beach relaxation',
    stateVar: 'selectedGroupTypes',
    modalFunc: 'setShowInquiryForm'
  }
];

// Template for the new compact booking section
function generateNewSection(config) {
  return `      {/* Dates & Prices Section */}
      <section ref={datesPricesRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Book your trip
          </h2>
          
          {/* Compact Action Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div 
              onClick={() => ${config.modalFunc}(true)}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">💰</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">Group Discounts</h3>
                  <p className="text-gray-600 text-xs">Enquire for more details</p>
                </div>
              </div>
            </div>
            
            <div 
              onClick={() => ${config.modalFunc}(true)}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">📅</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">Don't see your dates?</h3>
                  <p className="text-gray-600 text-xs">Please propose a new departure</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Compact Inline */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* When Selector */}
            <div ref={monthDropdownRef} className="relative flex-1">
              <button 
                onClick={() => setIsWhenDropdownOpen(!isWhenDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-600">When</span>
                  <span className="font-semibold">{selectedMonths.length > 0 ? selectedMonths[0].replace('-', ' ') : 'January 2026'}</span>
                </span>
                <svg className={\`w-4 h-4 transition-transform \${isWhenDropdownOpen ? 'rotate-180' : ''}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isWhenDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-h-96 overflow-y-auto">
                  {/* 2025 */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">2025</h4>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                        const monthKey = \`2025-\${month}\`;
                        const isSelected = selectedMonths.includes(monthKey);
                        return (
                          <button 
                            key={monthKey} 
                            onClick={() => {
                              setSelectedMonths([monthKey]);
                              setIsWhenDropdownOpen(false);
                            }}
                            className={\`py-2 px-3 rounded-lg text-sm font-medium transition-colors \${
                              isSelected 
                                ? 'bg-[#00A896] text-white' 
                                : 'text-gray-500 hover:bg-gray-100'
                            }\`}
                          >
                            {month}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* 2026 */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">2026</h4>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                        const monthKey = \`2026-\${month}\`;
                        const isSelected = selectedMonths.includes(monthKey);
                        return (
                          <button 
                            key={monthKey} 
                            onClick={() => {
                              setSelectedMonths([monthKey]);
                              setIsWhenDropdownOpen(false);
                            }}
                            className={\`py-2 px-3 rounded-lg text-sm font-medium transition-colors \${
                              isSelected 
                                ? 'bg-[#00A896] text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }\`}
                          >
                            {month}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* 2027 */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-3">2027</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                        const monthKey = \`2027-\${month}\`;
                        const isSelected = selectedMonths.includes(monthKey);
                        return (
                          <button 
                            key={monthKey} 
                            onClick={() => {
                              setSelectedMonths([monthKey]);
                              setIsWhenDropdownOpen(false);
                            }}
                            className={\`py-2 px-3 rounded-lg text-sm font-medium transition-colors \${
                              isSelected 
                                ? 'bg-[#00A896] text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }\`}
                          >
                            {month}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Route Selector - Shows only this route */}
            <div className="relative flex-1">
              <button 
                onClick={() => setIsGroupDropdownOpen(!isGroupDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-600">Route</span>
                  <span className="font-semibold">{${config.stateVar}.length} Selected</span>
                </span>
                <svg className={\`w-4 h-4 transition-transform \${isGroupDropdownOpen ? 'rotate-180' : ''}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isGroupDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-3">
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={${config.stateVar}.includes('${config.routeId}')} 
                      onChange={() => {
                        if (${config.stateVar}.includes('${config.routeId}')) {
                          set${config.stateVar.charAt(0).toUpperCase() + config.stateVar.slice(1)}([]);
                        } else {
                          set${config.stateVar.charAt(0).toUpperCase() + config.stateVar.slice(1)}(['${config.routeId}']);
                        }
                      }} 
                      className="w-4 h-4 text-[#00A896] rounded"
                    />
                    <span className="text-sm text-gray-800">${config.tripName}</span>
                  </label>
                </div>
              )}
            </div>
          </div>
          
          {/* Show earlier dates link */}
          <div className="text-center mb-4">
            <button className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Show earlier dates
            </button>
          </div>
          
          {/* Date Header */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              {selectedMonths.length > 0 
                ? selectedMonths[0].replace('-', ' ') 
                : 'Jan 2026'}
            </h3>
          </div>
          
          {/* Trip Dates - List Style */}
          <div className="space-y-3 mb-6">
            {${config.stateVar}.includes('${config.routeId}') && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900 text-sm">${config.tripName}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>${config.duration}</span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <span className="text-xs text-gray-600">${config.description}</span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Available</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="text-right">
                      <div className="text-sm text-gray-600">from <span className="font-semibold text-gray-900">${config.price}</span></div>
                      <div className="text-xs text-gray-500">Deposit ${config.deposit}</div>
                    </div>
                    <button 
                      onClick={() => ${config.modalFunc}(true)}
                      className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Show later dates link */}
          <div className="text-center mb-8">
            <button className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
              Show later dates
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Don't see your dates section */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="inline-block p-3 bg-white rounded-full mb-4">
              <Calendar className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Don't see your dates?</h3>
            <p className="text-gray-600 mb-6">We can create it if bookable!</p>
            <button 
              onClick={() => ${config.modalFunc}(true)}
              className="bg-[#00A896] hover:bg-[#008576] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Propose Dates
            </button>
          </div>
        </div>
      </section>`;
}

// Main migration function
function migrateBookingSections() {
  console.log('🚀 Starting booking section migration...\n');
  
  let successCount = 0;
  let failureCount = 0;
  const results = [];

  pages.forEach((page, index) => {
    console.log(`[${index + 1}/${pages.length}] Processing: ${page.name}...`);
    
    try {
      const filePath = path.join(__dirname, '..', page.filePath);
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      // Read the file
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Find the start and end of the booking section
      // Look for the comment marker first
      const commentMarker = '{/* Dates & Prices Section */}';
      let startIndex = content.indexOf(commentMarker);
      if (startIndex === -1) {
        throw new Error(`Could not find booking section comment marker: ${commentMarker}`);
      }
      
      // Back up to the beginning of the line
      while (startIndex > 0 && content[startIndex - 1] !== '\n') {
        startIndex--;
      }

      const endMarker = '{/* Newsletter Section */}';
      let endIndex = content.indexOf(endMarker, startIndex);
      if (endIndex === -1) {
        throw new Error(`Could not find section end marker: ${endMarker}`);
      }
      
      // Find the </section> tag before the Newsletter Section
      const sectionEndPattern = '</section>';
      let sectionEndIndex = content.lastIndexOf(sectionEndPattern, endIndex);
      if (sectionEndIndex === -1 || sectionEndIndex < startIndex) {
        throw new Error(`Could not find </section> before Newsletter Section`);
      }
      
      // Move to the end of the </section> tag and include the newline
      endIndex = sectionEndIndex + sectionEndPattern.length;
      while (endIndex < content.length && (content[endIndex] === '\n' || content[endIndex] === '\r')) {
        endIndex++;
      }

      // Extract the old section (for logging purposes)
      const oldSection = content.substring(startIndex, endIndex);
      const oldLineCount = oldSection.split('\n').length;

      // Generate new section
      const newSection = generateNewSection(page);
      const newLineCount = newSection.split('\n').length;

      // Replace the section
      const before = content.substring(0, startIndex);
      const after = content.substring(endIndex);
      const newContent = before + newSection + '\n\n' + after;

      // Create backup
      const backupPath = filePath + '.backup';
      fs.writeFileSync(backupPath, content, 'utf8');

      // Write the new content
      fs.writeFileSync(filePath, newContent, 'utf8');

      successCount++;
      results.push({
        page: page.name,
        status: '✅ SUCCESS',
        oldLines: oldLineCount,
        newLines: newLineCount,
        saved: oldLineCount - newLineCount,
        backup: backupPath
      });

      console.log(`  ✅ Replaced ${oldLineCount} lines with ${newLineCount} lines (saved ${oldLineCount - newLineCount} lines)`);
      console.log(`  📦 Backup created: ${path.basename(backupPath)}`);
      
    } catch (error) {
      failureCount++;
      results.push({
        page: page.name,
        status: '❌ FAILED',
        error: error.message
      });
      console.log(`  ❌ Failed: ${error.message}`);
    }
    
    console.log('');
  });

  // Print summary
  console.log('━'.repeat(80));
  console.log('📊 MIGRATION SUMMARY');
  console.log('━'.repeat(80));
  console.log(`Total pages: ${pages.length}`);
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed: ${failureCount}`);
  console.log('');

  // Print detailed results table
  console.log('Detailed Results:');
  console.log('─'.repeat(80));
  results.forEach((result) => {
    console.log(`${result.status} ${result.page}`);
    if (result.oldLines) {
      console.log(`   Lines: ${result.oldLines} → ${result.newLines} (saved ${result.saved} lines)`);
    }
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
  });
  console.log('─'.repeat(80));
  console.log('');

  if (failureCount > 0) {
    console.log('⚠️  Some migrations failed. Check the errors above.');
    console.log('💡 Tip: Backups were created for successful migrations (.backup files)');
    process.exit(1);
  } else {
    console.log('🎉 All booking sections migrated successfully!');
    console.log('💡 Tip: Run `npm run dev` to verify the changes');
    console.log('💡 Tip: Backup files were created and can be deleted if everything looks good');
  }
}

// Run the migration
migrateBookingSections();
