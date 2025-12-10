**Blog Redesign — Follow Alice parity (spec & safe integration plan)**

Goal
- Bring `travel-blogs` index and `kilimanjaro-routes` page into visual and UX parity with Follow Alice knowledge/blog pages while preserving all existing content and avoiding breaking changes.

Scope
- `src/app/[locale]/travel-blogs/page.tsx` (index)
- `src/app/[locale]/travel-blogs/kilimanjaro-routes/page.tsx` (detailed article template)
- New small UI components under `src/components/ui/` (non-invasive)
- Locales: `locales/en.json`, `locales/fr.json` (add keys)
- Images: `public/images/*` (hero, card, article hero)

Design comparison summary (Follow Alice -> our target)
- Brand: Knowledge Library / Travel Blog index with a hero, topic tiles, and a Top Reads area.
- Category pages: topic lead + grouped topic lists and highlighted posts.
- Article pages: H1 + author/date/read-time + large hero image + optional ToC/Overview + richly sectioned content + inline CTAs linking to trip pages (View Trip) and contact (WhatsApp/Calendly) + related posts / 'Ready for an adventure?' CTA.

Non-invasive integration principles
1. No destructive edits to existing pages. All changes will be additive and feature-flag-friendly:
   - Create small UI components and import them where needed.
   - Keep existing route/content arrays intact and render them via the new template.
2. Work in a feature branch (e.g., `feature/blog-redesign`) and open small commits/PRs for review.
3. Unit/visual smoke tests and local build checks before merging to master.

Component list (small, reusable, minimal JS)
- `TopicCard.tsx` — card with image, title, short excerpt, CTA. Used on index and category pages.
- `AuthorMeta.tsx` — author avatar/name/date/read-time block (server-rendered where possible). Expects props: `{author, date, readTime, authorImage?}`.
- `TOC.tsx` — Table of Contents that reads H2/H3 anchors or accepts a list of sections; renders sticky/inline ToC with smooth scroll.
- `InlineCTA.tsx` — small CTA for 'View Trip', WhatsApp, Calendly.
- `TopReads.tsx` — small component that accepts a list of featured posts.

Implementation plan (safe, stepwise)
1. Create `docs/blog-redesign.md` (this file) and confirm scope. (done)
2. Create feature branch and scaffolding: add `src/components/ui/TopicCard.tsx` and `AuthorMeta.tsx` with minimal styling.
   - These files will export components that do NOT change global styles.
3. Replace `travel-blogs/page.tsx` contents incrementally:
   - Add a shallow wrapper and import `TopicCard` and `TopReads`.
   - Initially render existing content through `TopicCard` (no content migration).
4. Refactor `kilimanjaro-routes/page.tsx` article view to use `AuthorMeta` and `TOC` while keeping `routesFr`/`routesEn` arrays intact.
   - Don't delete any existing route arrays; use them as canonical source of content.
5. Add translations keys to `locales/en.json` & `locales/fr.json` for CTA text, labels, and any new strings.
6. Add placeholder images under `public/images/` if real assets are not ready; make them optional.
7. Run `npm run dev` and `npm run build`. Fix any lint/build warnings, but avoid wide-sweeping refactors.
8. Review visually; adjust spacing/typography to match Follow Alice (tailwind utilities only).
9. Merge small PRs after QA and deploy to Netlify preview to validate production build.

SEO & metadata checklist
- Ensure H1 exists per article and the hero has `alt` text.
- Add author meta, published date and read-time in the `AuthorMeta` component.
- Add Open Graph title/description/image for article pages via existing metadata exports; do not rework all metadata globally — adjust per-page metadata where necessary.

Accessibility checklist
- Proper heading order (H1 -> H2 -> H3).
- All images with `alt` attributes (if placeholders used, mark appropriately).
- Buttons/links accessible and keyboard focusable.

Edge cases & risks
- Risk: large refactor touching global styles could cause regressions — mitigation: use local components and tailwind classes, avoid changing global CSS.
- Risk: metadata/viewport Next.js warnings — mitigation: fix page-level metadata placements only for pages we change and file an issue for a broader migration if many pages flag the same warning.

Testing & rollout
- Local tests: `npm run dev`, `npm run build`.
- Visual checks: desktop and mobile widths (Chrome device toolbar or `npm run dev` + manual checks).
- Deploy to Netlify preview branch for QA before merging to production.

Files to create/update (first wave)
- Add: `src/components/ui/TopicCard.tsx` (small)
- Add: `src/components/ui/AuthorMeta.tsx` (small)
- Edit: `src/app/[locale]/travel-blogs/page.tsx` (swap placeholder for progressive layout using TopicCard; keep current logic behind feature flag or comment block)
- Edit: `src/app/[locale]/travel-blogs/kilimanjaro-routes/page.tsx` (add AuthorMeta + TOC render; keep `routesFr/routesEn` intact)
- Update: `locales/en.json` and `locales/fr.json` (new keys)

Developer workflow (commands)
```powershell
cd "C:\Users\PC\Documents\latanzanie"
git checkout -b feature/blog-redesign
npm run dev
```

How I'll avoid breaking the codebase
- Do not delete or rewrite existing content arrays.
- Add components in `src/components/ui/` and import them with explicit paths.
- Keep changes incremental: index page updated first to non-destructive layout that uses existing content.
- Run `npm run build` after each major change and push to a preview deploy before merging.

Next immediate actions I will take (if you approve)
1. Create `src/components/ui/AuthorMeta.tsx` and `TopicCard.tsx` with minimal styles and no runtime dependencies.
2. Update `travel-blogs/page.tsx` to render a hero + topic grid using `TopicCard` components that consume existing per-locale data.

If you'd prefer, I can do the component scaffolding now and run the local build; say "Proceed" and I will implement the first safe commit.

-- End of spec
