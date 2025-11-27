# Translation Key Naming Conventions

## Overview
This document establishes standardized naming conventions for translation keys used in the Latanzanieaucourdelanature project. Following these conventions ensures consistency, maintainability, and clarity across all translation files.

## General Principles

### 1. Use Camel Case
All translation keys MUST use camelCase naming convention:
```json
{
  "heroTitle": "Welcome to Our Site",
  "contactUs": "Contact Us",
  "phoneNumber": "Phone Number"
}
```

### 2. Be Descriptive and Clear
Keys should clearly indicate their purpose and context:
```json
// Good
"contactPage.heroTitle": "Get in Touch With Our Team"

// Avoid
"title": "Get in Touch With Our Team"
```

### 3. Use Namespaces for Organization
Group related keys under descriptive namespace objects:
```json
{
  "navigation": {
    "home": "Home",
    "about": "About Us",
    "contact": "Contact"
  },
  "contactPage": {
    "heroTitle": "Contact Us",
    "form": {
      "nameLabel": "Full Name",
      "emailLabel": "Email Address"
    }
  }
}
```

## Specific Naming Patterns

### Component/Page Names
- Use PascalCase for major components/pages: `HomePage`, `ContactPage`, `Navigation`
- Use camelCase for specific sections: `hero`, `footer`, `sidebar`

### UI Elements
- Buttons: `buttonText`, `submitButton`, `cancelButton`
- Labels: `nameLabel`, `emailLabel`, `passwordLabel`
- Placeholders: `namePlaceholder`, `emailPlaceholder`
- Titles: `sectionTitle`, `pageTitle`, `modalTitle`
- Descriptions: `sectionDescription`, `helpText`

### Form Elements
- Fields: `fieldName`, `fieldError`, `fieldHelper`
- Validation: `validationRequired`, `validationEmail`, `validationMinLength`

### Actions
- Verbs in imperative form: `saveChanges`, `deleteAccount`, `updateProfile`

## Hierarchical Structure

### Top-Level Namespaces
1. **Page-Specific Namespaces**
   - `HomePage`
   - `ContactPage`
   - `ClimbKilimanjaroPage`
   - `AboutPage`
   - etc.

2. **Global Namespaces**
   - `Navigation` - Site-wide navigation
   - `Footer` - Site-wide footer
   - `Common` - Shared/global content
   - `Hero` - Shared hero sections
   - `Forms` - Shared form elements

### Nested Structure
Keys should be nested logically:
```json
{
  "ClimbKilimanjaroPage": {
    "hero": {
      "title": "Climb Kilimanjaro",
      "description": "Experience the adventure of a lifetime",
      "ctaButton": "Book Now"
    },
    "itineraries": {
      "sectionTitle": "Our Itineraries",
      "marangu": {
        "title": "Marangu Route",
        "duration": "5 days",
        "price": "From $2,850"
      }
    }
  }
}
```

## Consistency Rules

### 1. Maintain Consistent Key Names Across Languages
Each key in the English file must have an exact match in all other language files:
```json
// en.json
"contactPage": {
  "heroTitle": "Contact Us"
}

// fr.json
"contactPage": {
  "heroTitle": "Contactez-nous"
}
```

### 2. Avoid Abbreviations
Use full, clear terms:
```json
// Good
"phoneNumber": "+1 (555) 123-4567"

// Avoid
"phoneNum": "+1 (555) 123-4567"
```

### 3. Use Contextual Prefixes
When similar elements appear in different contexts, use prefixes:
```json
{
  "contactModal": {
    "title": "Contact Us",
    "nameLabel": "Full Name"
  },
  "contactPage": {
    "title": "Get in Touch",
    "nameLabel": "Your Name"
  }
}
```

## Special Cases

### 1. Dynamic Content
For keys with dynamic content, use placeholders in curly braces:
```json
{
  "priceFrom": "From ${price}",
  "itemsCount": "{count} items found"
}
```

### 2. Lists and Arrays
For lists, use numeric or descriptive suffixes:
```json
{
  "features": {
    "feature1": "24/7 Support",
    "feature2": "Free Shipping",
    "feature3": "Money Back Guarantee"
  }
}
```

### 3. Boolean-like Keys
Use clear, descriptive names:
```json
{
  "isVisible": "true",
  "isRequired": "false"
}
```

## Best Practices

### 1. Review Existing Keys
Before adding new keys, check if similar content already exists to avoid duplication.

### 2. Use Searchable Names
Choose key names that are easy to search for in code:
```json
// Good - easy to find references
"newsletterSignup": {
  "title": "Join Our Newsletter"
}

// Avoid - hard to search
"nlSignup": {
  "title": "Join Our Newsletter"
}
```

### 3. Maintain Alphabetical Order
Within each namespace, keep keys in alphabetical order for easier maintenance.

### 4. Document Complex Structures
For complex nested structures, add comments in the JSON files:
```json
{
  "ClimbKilimanjaroPage": {
    // Hero section content
    "hero": {
      "title": "Climb Kilimanjaro",
      "description": "Experience the adventure of a lifetime"
    },
    // Itinerary options
    "itineraries": {
      // ... 
    }
  }
}
```

## Validation

### 1. Automated Checks
All translation files should be validated to ensure:
- All keys from the English file exist in other language files
- No extra keys exist in translation files that don't exist in English
- Proper JSON formatting
- Consistent naming conventions

### 2. Regular Audits
Conduct regular audits to:
- Identify and remove unused keys
- Ensure naming consistency
- Check for duplicate content under different keys

## Examples

### Good Example
```json
{
  "Navigation": {
    "home": "Home",
    "about": "About Us",
    "trips": "Trips",
    "blog": "Blog",
    "contact": "Contact"
  },
  "HomePage": {
    "hero": {
      "title": "Discover the Beauty of Tanzanian National Parks",
      "subtitle": "Unforgettable adventures await you",
      "ctaButton": "Explore our trips"
    },
    "featuredTrips": {
      "sectionTitle": "Featured Trips",
      "viewAllButton": "See all trips"
    }
  }
}
```

### Avoid This
```json
{
  "nav_home": "Home",
  "nav_about": "About Us",
  "hero_title": "Discover the Beauty of Tanzanian National Parks",
  "hero_subtitle": "Unforgettable adventures await you",
  "btn_cta": "Explore our trips"
}
```

Following these conventions will ensure our translation files remain organized, maintainable, and easy to work with as the project grows.