Translation Roadmap — Ensure French pages never show English

Goal
- Prevent English text from appearing when the site is served in French (`/fr/*`). Ensure all trip cards and dedicated trip pages use French keys present in `locales/fr.json` and fail gracefully without throwing errors.

Immediate fixes (done)
- Added `name` keys to `Common.trips.kilimanjaro`, `Common.trips.safari`, and `Common.trips.zanzibar` in `locales/fr.json` so `SeeTripsPage` resolves `trips.<key>.name` without throwing.

Short-term (this sprint)
1. Audit translations used by listing pages
   - Search code for `useTranslations('Common')` and record all keys used (e.g., `trips.<key>.name`, `trips.<key>.description`, `fromPrice`).
   - Ensure every referenced key exists in every locale file (fr/en).
2. Add automated locale validation
   - Add a Node script `scripts/validate-locales.js` that loads each `locales/*.json`, flattens keys, and checks for missing keys compared to a canonical file (e.g., `en.json`). Fail CI if keys are missing.
3. Standardize naming
   - Consolidate `Common.trips` to use both `name` and `title` (or update code to consistently use `title`) and update all locales.
4. Update per-card pages
   - Ensure each trip's dedicated page uses `Common.trips.<key>.*` keys rather than inline English strings or direct `title.fr` objects. Replace inline `DirectTrip` multi-language objects with keys where practical.

Medium-term (next 1-2 sprints)
- Extract shared trip card component that accepts a `tripKey` and uses `useTranslations('Common')` to retrieve `name`, `description`, `duration`, `fromPrice`. This avoids inconsistencies across listing pages.
- Add tests: snapshot tests for critical pages (`/fr/see-trips`, `/fr/trips/climb-kilimanjaro`) to detect English text regressions.

Long-term (process)
- Add a CI job that runs the `validate-locales` script and `npm run build` for `fr` and `en` to catch missing translation errors early.
- Add contributor docs: `TRANSLATIONS.md` describing how to add keys, and how to run the validator locally.

Manual QA checklist
- Visit `/fr/see-trips`, `/fr/trips/climb-kilimanjaro`, `/fr/trips/zanzibar-beach-holidays` and confirm all visible strings are French.
- Verify there are no `MISSING_MESSAGE` warnings in the server console when visiting French pages.

If you want, I can:
- add the `scripts/validate-locales.js` validator and wire it into `package.json` as `npm run validate-locales` and a CI step,
- update the `SeeTripsPage` to consistently use `title` instead of `name` (or vice versa) depending on your preference,
- run `npm run build` locally and capture any remaining missing message errors.

---
Created: 2025-12-10
