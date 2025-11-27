# Translation Maintenance Guide

## Overview
This document provides guidelines and procedures for maintaining translations in the Latanzanieaucourdelanature project. Following these practices ensures consistency, accuracy, and ease of maintenance across all language files.

## File Structure
```
locales/
├── en.json          # English (primary reference)
├── fr.json          # French
└── [lang].json      # Additional languages
```

## Adding New Translations

### 1. Add Keys to English First
Always add new translation keys to the English file (`en.json`) first:
```json
{
  "NewSection": {
    "title": "New Section Title",
    "description": "Description of the new section"
  }
}
```

### 2. Add Corresponding Keys to Other Languages
Add the same keys to all other language files with appropriate translations:
```json
{
  "NewSection": {
    "title": "Titre de la Nouvelle Section",
    "description": "Description de la nouvelle section"
  }
}
```

### 3. Validate Translations
Run the validation script to ensure consistency:
```bash
node scripts/validate-translations.js
```

## Updating Existing Translations

### 1. Minor Text Changes
For minor text updates, simply edit the text value in the appropriate language file:
```json
// Before
"welcomeMessage": "Welcome to our site"

// After
"welcomeMessage": "Welcome to Latanzanieaucourdelanature"
```

### 2. Structural Changes
When reorganizing or renaming keys:
1. Update the key in the English file first
2. Update the same key in all other language files
3. Run validation to ensure consistency

## Best Practices

### 1. Key Naming
Follow the established naming conventions (see [translation-naming-conventions.md](translation-naming-conventions.md)):
- Use camelCase for all keys
- Use descriptive, context-specific names
- Organize keys in logical namespaces

### 2. Consistency
- Maintain the same key structure across all language files
- Keep translations up-to-date with English reference
- Use consistent terminology within each language

### 3. Formatting
- Maintain proper JSON formatting
- Keep keys in alphabetical order within each namespace
- Use consistent indentation (2 spaces)

## Validation Process

### Automatic Validation
Run the validation script regularly to check for issues:
```bash
node scripts/validate-translations.js
```

This script checks:
- All English keys exist in other language files
- No extra keys exist in translation files
- Proper JSON formatting

### Manual Review
Periodically review translations for:
- Accuracy and cultural appropriateness
- Consistent terminology
- Proper grammar and punctuation

## Handling Missing Translations

### 1. Identify Missing Keys
The validation script will report any missing keys:
```
❌ Missing keys in French translation (2):
  - HomePage.newFeature.title
  - HomePage.newFeature.description
```

### 2. Add Missing Translations
Add the missing keys to the appropriate language file with proper translations.

### 3. Validate Again
Run the validation script to confirm all keys are now present.

## Removing Unused Translations

### 1. Identify Unused Keys
Use code search to identify keys that are no longer referenced in components:
```bash
grep -r "t('UnusedKey')" src/
```

### 2. Remove from All Files
Remove unused keys from all language files to maintain consistency.

### 3. Validate
Run validation to ensure no issues were introduced.

## Adding New Languages

### 1. Create New File
Create a new JSON file in the `locales/` directory with the appropriate language code:
```
locales/de.json  # German
locales/es.json  # Spanish
locales/sw.json  # Swahili
```

### 2. Copy Structure from English
Copy the entire structure from `en.json` to the new file:
```bash
cp locales/en.json locales/[new-lang].json
```

### 3. Translate Content
Replace English text with appropriate translations in the new language.

### 4. Validate
Run the validation script to ensure the new language file is consistent:
```bash
node scripts/validate-translations.js
```

## Common Issues and Solutions

### 1. JSON Parsing Errors
Ensure files are valid JSON:
- No trailing commas
- Properly escaped quotes
- Correct bracket matching

### 2. Key Mismatches
If validation fails due to key mismatches:
1. Run the fix script: `node scripts/fix-translation-inconsistencies.js`
2. Manually add any missing translations
3. Re-run validation

### 3. Encoding Issues
Ensure all files are saved in UTF-8 encoding without BOM (Byte Order Mark).

## Tools and Scripts

### Validation Script
`scripts/validate-translations.js` - Checks for missing or extra keys

### Fix Script
`scripts/fix-translation-inconsistencies.js` - Aligns translation files with reference structure

### Audit Script
`scripts/analyze-translations.js` - Analyzes translation file structure (created during initial audit)

## Regular Maintenance Tasks

### Weekly
- Run validation script to check for inconsistencies
- Review recent changes for accuracy

### Monthly
- Audit translation files for unused keys
- Check for terminology consistency
- Review validation scripts for improvements

### Quarterly
- Update documentation if needed
- Review naming conventions for improvements
- Check all tools and scripts for compatibility

## Collaboration Guidelines

### 1. Branch Strategy
- Create feature branches for translation work
- Keep translation updates separate from feature development when possible

### 2. Pull Requests
- Include validation script output in PR descriptions
- Request review from native speakers for new translations
- Ensure all languages are updated together

### 3. Communication
- Document significant translation changes in commit messages
- Notify team members of structural changes to translation files
- Coordinate with content creators on new text requirements

## Emergency Procedures

### 1. Corrupted Translation File
If a translation file becomes corrupted:
1. Restore from version control
2. Re-run fix script if needed
3. Validate translations

### 2. Critical Missing Translations
For critical missing translations affecting user experience:
1. Add temporary English fallback in component
2. Add proper translations as soon as possible
3. Remove fallback after translations are complete

## Contact and Support
For issues with translation maintenance:
- Check documentation first
- Consult with team members experienced in i18n
- Review recent changes in version control