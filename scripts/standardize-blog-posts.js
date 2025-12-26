#!/usr/bin/env node

/**
 * Script to standardize blog post pages using the new template
 * 
 * This script analyzes existing blog posts and suggests changes
 * to align them with the standardized template.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BLOG_POSTS_DIR = path.join(__dirname, '..', 'src', 'app', '[locale]', 'travel-blogs');
const TEMPLATE_PATH = path.join(BLOG_POSTS_DIR, 'BLOG_POST_TEMPLATE.tsx');

// Get all blog post directories
function getBlogPostDirectories() {
  try {
    const items = fs.readdirSync(BLOG_POSTS_DIR);
    return items.filter(item => {
      const itemPath = path.join(BLOG_POSTS_DIR, item);
      return fs.statSync(itemPath).isDirectory() && 
             fs.existsSync(path.join(itemPath, 'page.tsx')) &&
             !['[id]', '[slug]'].includes(item);
    });
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return [];
  }
}

// Read a blog post file
function readBlogPostFile(blogPostDir) {
  try {
    const filePath = path.join(BLOG_POSTS_DIR, blogPostDir, 'page.tsx');
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading blog post ${blogPostDir}:`, error);
    return null;
  }
}

// Analyze a blog post for standardization
function analyzeBlogPost(blogPostDir) {
  const content = readBlogPostFile(blogPostDir);
  if (!content) return null;

  // Extract key information
  const analysis = {
    dir: blogPostDir,
    hasHeroSection: content.includes('hero-wavy'),
    hasAuthorMeta: content.includes('AuthorMeta'),
    hasTOC: content.includes('TOC'),
    hasRouteCards: content.includes('marangu-route') || content.includes('lemosho-route') || content.includes('umbwe-route'),
    hasCTA: content.includes('S\'abonner') || content.includes('Subscribe'),
    sectionCount: (content.match(/<section/g) || []).length,
    usesTranslations: content.includes('useTranslations'),
    stateManagement: getStateManagementType(content),
    contentStructure: getContentStructureType(content)
  };

  return analysis;
}

// Determine state management type
function getStateManagementType(content) {
  if (content.includes('expandedSections') && content.includes('Record<string, boolean>')) {
    return 'expandedSections';
  } else if (content.includes('expandedSection') && content.includes('string | null')) {
    return 'expandedSection';
  } else if (!content.includes('useState') || content.includes('const sections = ids.map')) {
    return 'none/minimal';
  }
  return 'other';
}

// Determine content structure type
function getContentStructureType(content) {
  if (content.includes('t(\'sections.') && content.includes('.content.')) {
    return 'structured-translations';
  } else if (content.includes('FR_SECTIONS') || content.includes('EN_SECTIONS')) {
    return 'inline-content';
  } else if (content.includes('.map(s => (') && content.includes('s.content')) {
    return 'mapped-content';
  }
  return 'other';
}

// Generate standardization report
function generateStandardizationReport(analyses) {
  console.log('=== Blog Post Standardization Report ===\n');
  
  console.log('Summary:');
  console.log(`Total blog posts analyzed: ${analyses.length}\n`);
  
  // Count posts with each component
  const counts = {
    heroSection: analyses.filter(a => a.hasHeroSection).length,
    authorMeta: analyses.filter(a => a.hasAuthorMeta).length,
    toc: analyses.filter(a => a.hasTOC).length,
    routeCards: analyses.filter(a => a.hasRouteCards).length,
    cta: analyses.filter(a => a.hasCTA).length,
    translations: analyses.filter(a => a.usesTranslations).length
  };
  
  console.log('Component Coverage:');
  console.log(`Hero Section: ${counts.heroSection}/${analyses.length}`);
  console.log(`Author Meta: ${counts.authorMeta}/${analyses.length}`);
  console.log(`Table of Contents: ${counts.toc}/${analyses.length}`);
  console.log(`Route Cards: ${counts.routeCards}/${analyses.length}`);
  console.log(`Email CTA: ${counts.cta}/${analyses.length}`);
  console.log(`Uses Translations: ${counts.translations}/${analyses.length}\n`);
  
  // State management distribution
  const stateManagementCounts = {};
  analyses.forEach(a => {
    stateManagementCounts[a.stateManagement] = (stateManagementCounts[a.stateManagement] || 0) + 1;
  });
  
  console.log('State Management Patterns:');
  Object.entries(stateManagementCounts).forEach(([pattern, count]) => {
    console.log(`  ${pattern}: ${count}`);
  });
  
  // Content structure distribution
  const contentStructureCounts = {};
  analyses.forEach(a => {
    contentStructureCounts[a.contentStructure] = (contentStructureCounts[a.contentStructure] || 0) + 1;
  });
  
  console.log('\nContent Structure Patterns:');
  Object.entries(contentStructureCounts).forEach(([pattern, count]) => {
    console.log(`  ${pattern}: ${count}`);
  });
  
  console.log('\n=== Recommendations ===');
  console.log('1. All blog posts should use the standardized template');
  console.log('2. Migrate inline content to translation files');
  console.log('3. Standardize state management approach');
  console.log('4. Ensure all posts have the same core components');
  console.log('5. Maintain consistent section structure');
}

// Main function
function main() {
  console.log('Analyzing blog posts for standardization...\n');
  
  // Get all blog post directories
  const blogPostDirs = getBlogPostDirectories();
  
  if (blogPostDirs.length === 0) {
    console.log('No blog post directories found.');
    return;
  }
  
  // Analyze each blog post
  const analyses = blogPostDirs
    .map(dir => analyzeBlogPost(dir))
    .filter(result => result !== null);
  
  // Generate report
  generateStandardizationReport(analyses);
  
  console.log('\n=== Next Steps ===');
  console.log('1. Review the BLOG_POST_TEMPLATE.tsx file');
  console.log('2. Follow the BLOG_POST_TEMPLATE_GUIDE.md instructions');
  console.log('3. Gradually update blog posts to use the standardized template');
  console.log('4. Ensure all translation files are properly structured');
}

// Run the script
if (require.main === module) {
  main();
}