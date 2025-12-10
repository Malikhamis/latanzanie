# Blog Structure Audit - Translation Pattern Map

## TravelBlogsPage (/travel-blogs)

### Hero Section
- **TravelBlogsPage.hero.title** → Used for main heading
- **TravelBlogsPage.hero.description** → Used for main paragraph

### Search Section
- **TravelBlogsPage.search.placeholder** → Input field placeholder

### Categories Section
- **TravelBlogsPage.categories.title** → Grid heading

### Error States
- **TravelBlogsPage.noTopicsFound** → No results message

### Navigation
- **TravelBlogsPage.breadcrumb** (if needed) → For navigation

---

## Kilimanjaro Routes Blog Subpage (/travel-blogs/kilimanjaro-routes)

Uses locale-based content stored directly in component (routesFr and routesEn arrays).

### Structure Per Route:
Each route has:
1. **id** - route identifier (machame, marangu, lemosho, umbwe)
2. **title** - Full route name/analysis title
3. **subtitle** - Short descriptor (e.g., "Most Popular", "Fastest")
4. **difficulty** - Level (Moderate, Hard, Very Difficult)
5. **duration** - Time frame (5 days, 7 days, 8 days, 5-6 days)
6. **description** - One-paragraph overview

### Per Route Sections:
Each section contains:
- **heading** - Section title (e.g., "Itinerary Description", "Analytical Advantages")
- **content** - Main paragraph text OR
- **subSections** - Array of subsections (for Pros/Cons/Local Advice)
  - Each subsection has: **title** + **content**

### Section Examples:
- "Description de l'Itinéraire" / "Itinerary Description"
- "Avantages Analytiques (Pros)" / "Analytical Advantages (Pros)"
- "Inconvénients Analytiques (Cons)" / "Analytical Disadvantages (Cons)"
- "🧭 Le Conseil du Guide Local" / "Local Guide Advice"

### Routes Covered (4):
1. **Machame** - Most Popular, 7 days, Moderate
2. **Marangu** - Fastest, 5 days, Hard
3. **Lemosho** - Safest, 8 days, Moderate
4. **Umbwe** - Most Extreme, 5-6 days, Very Difficult

---

## Current State

### TravelBlogsPage Strings (locales/fr.json)
**NOT YET IN LOCALE FILES** — Currently hardcoded in component:
```
heroTitleFr, heroDescFr, heroTitleEn, heroDescEn
```

**NEED TO ADD:**
- TravelBlogsPage.hero.title (FR)
- TravelBlogsPage.hero.description (FR)
- TravelBlogsPage.search.placeholder (FR)
- TravelBlogsPage.categories.title (FR)
- TravelBlogsPage.noTopicsFound (FR)
- All above in EN as well

### Kilimanjaro Routes Blog (kilimanjaro-routes/page.tsx)
**STORED IN COMPONENT** — routesFr and routesEn arrays
- Currently hardcoded with French and English copies
- **PLAN**: Decide whether to keep in component OR move to locales/fr.json & en.json

---

## Design Pattern for New Content

When you provide French copy, structure it as:

```json
"TravelBlogsPage": {
  "hero": {
    "title": "YOUR FRENCH TITLE",
    "description": "YOUR FRENCH DESC"
  },
  "search": {
    "placeholder": "YOUR FRENCH PLACEHOLDER"
  },
  "categories": {
    "title": "YOUR FRENCH CATEGORY TITLE"
  },
  "noTopicsFound": "YOUR FRENCH ERROR MESSAGE"
}
```

And corresponding English in en.json with same structure.

For **Kilimanjaro Routes**, each route's heading/content strings can either:
1. **Stay in component** (current approach) — simplest for now
2. **Move to locales** — would require different structure, more complex

**Recommendation**: Keep routes in component for now since they're long and detailed. Move top-level TravelBlogsPage strings to locales.

---

## Next Step

Please provide:
1. **French copy for TravelBlogsPage** (hero title, description, placeholders, etc.)
2. **English equivalents** for the same sections
3. **Decision**: Do you want to move the detailed route descriptions to JSON or keep them in component?
