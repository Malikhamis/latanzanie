# Typography Reduction for Blog Post Pages

## Status
✅ Fixed: `dress-for-zones/page.tsx` missing closing tags
🔄 Pending: Reduce font sizes across all 6 blog pages

## Font Size Changes Required

### Hero Section `<h1>`
**OLD**: `text-5xl md:text-7xl`  
**NEW**: `text-4xl md:text-5xl`

### Hero Section `<p>`
**OLD**: `text-lg md:text-xl`  
**NEW**: `text-base md:text-lg`

### Accordion Section Headings `<h2>` / `<h3>`
**OLD**: `text-3xl md:text-4xl`  
**NEW**: `text-2xl md:text-3xl`

## Files to Update

1. `src/app/[locale]/travel-blogs/climate-zones/page.tsx`
   - Line ~41: h1 font size
   - Line ~45: p font size
   - Lines ~153, ~190, ~265, ~355, ~420: Zone h2 font sizes

2. `src/app/[locale]/travel-blogs/best-season/page.tsx`
   - Line ~43: h1 font size
   - Line ~47: p font size

3. `src/app/[locale]/travel-blogs/choose-season/page.tsx`
   - Line ~44: h1 font size
   - Line ~48: p font size
   - Section h2 accordion sizes

4. `src/app/[locale]/travel-blogs/dress-for-zones/page.tsx`
   - Line ~31: h1 font size
   - Line ~32: p font size
   - Section h3 accordion sizes

5. `src/app/[locale]/travel-blogs/drying-gear/page.tsx`
   - Line ~41: h1 font size
   - Line ~42: p font size
   - Section h3 accordion sizes

6. `src/app/[locale]/travel-blogs/kilimanjaro-routes/page.tsx`
   - Line ~511: h1 font size
   - Line ~515: p font size
   - Route heading h3 sizes in detailed analyses

## Manual Quick Fix via Find & Replace in VS Code

For each file:

1. Press `Ctrl+H` to open Find & Replace
2. **Find**: `text-4xl md:text-5xl`
   **Replace**: `text-4xl md:text-5xl`
3. **Find**: `text-3xl md:text-4xl font-bold text-gray-800`
   **Replace**: `text-2xl md:text-3xl font-bold text-gray-800`
4. **Find**: `text-lg md:text-xl text-[#E8F8F5]`
   **Replace**: `text-base md:text-lg text-[#E8F8F5]`
5. **Find**: `text-5xl md:text-6xl`
   **Replace**: `text-4xl md:text-5xl`

## Expected Result

All blog pages will have:
- Cleaner, more readable hero headings (reduced from `text-7xl` → `text-5xl`)
- Proportional body text in hero (`text-base md:text-lg`)
- Consistent accordion section sizes (`text-2xl md:text-3xl`)
- Professional, non-oversized appearance matching modern web standards
