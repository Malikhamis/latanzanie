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

---

## Blog Post Template (Canonical)

When creating new category blog pages, follow this canonical component pattern so TOC, verbatim French content and English fallbacks are consistent.

- File path: `src/app/[locale]/travel-blogs/<slug>/page.tsx`
- Required constants per page (keep French verbatim in `FR_SECTIONS`):

```ts
const ids = ['overview','sectionA','sectionB', /* ... */]

const FR_TITLES: Record<string,string> = {
  overview: 'FR title for overview',
  sectionA: 'FR title for section A',
  sectionB: 'FR title for section B',
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Exact French text for overview (preserve newlines)`,
  sectionA: `Exact French text for section A`,
  sectionB: `Exact French text for section B`,
}

const contentEn = `English overview paragraph...` // short helper for long overview

const EN_TITLES: Record<string,string> = { overview: 'English overview', sectionA: 'English A', sectionB: 'English B' }
const EN_SECTIONS: Record<string,string> = { overview: contentEn, sectionA: 'English A content', sectionB: 'English B content' }
```

- Rendering guidance:
  - Add a `renderContent(content: string)` helper that preserves blockquotes (lines starting with `>`), groups paragraphs, and returns React nodes.
  - Build `sections` using `ids.map(id => ({ id, title, content }))` where title/content are selected by `locale === 'fr' ? FR_TITLES[id] : locale === 'en' ? EN_TITLES[id] : t(...)` to allow locale fallbacks.
  - Use `TOC` component for both mobile and desktop with `items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}`.

- Page skeleton (inside default export):

```tsx
export default function Page() {
  const locale = useLocale()
  const t = useTranslations('BlogPosts.<slug>')

  const sections = ids.map(id => ({
    id,
    title: locale === 'fr' ? FR_TITLES[id] ?? id : locale === 'en' ? EN_TITLES[id] ?? id : t(`sections.${id}.title`),
    content: locale === 'fr' ? FR_SECTIONS[id] ?? '' : locale === 'en' ? EN_SECTIONS[id] ?? '' : t(`sections.${id}.content`)
  }))

  return (
    <div>/* hero, author meta, TOC, and article rendering using renderContent */</div>
  )
}
```

- Checklist before submitting page details:
  - [ ] `ids` array matches all sections to show in TOC
  - [ ] `FR_TITLES`/`FR_SECTIONS` contain verbatim French copy
  - [ ] `EN_TITLES`/`EN_SECTIONS` provide English fallbacks to avoid MISSING_MESSAGE
  - [ ] `renderContent` available or referenced from shared helper
  - [ ] Page file path matches `src/app/[locale]/travel-blogs/<slug>/page.tsx`

When you're ready, provide the first category's page 1 content and I'll create the TSX page following this exact template. 
