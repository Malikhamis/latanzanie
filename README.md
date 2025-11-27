# Latanzanieaucourdelanature

A Next.js 14 application showcasing Tanzanian national parks built with:

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS + Shadcn/UI
- **CMS**: Sanity.io
- **Authentication & Data**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=[PM-PROVIDED-SANITY-ID]
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_SECRET_TOKEN=[PM-PROVIDED-SANITY-TOKEN]
   NEXT_PUBLIC_SUPABASE_URL=[PM-PROVIDED-SUPABASE-URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[PM-PROVIDED-ANON-KEY]
   SUPABASE_SERVICE_KEY=[PM-PROVIDED-SERVICE-KEY]
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3001](http://localhost:3001) in your browser (port may vary if 3000 is in use).

## Project Structure

- `src/app`: Next.js 14 App Router pages and layouts
- `src/components`: Reusable UI components
- `src/lib`: Utility functions and service integrations
- `src/schemas`: Sanity CMS schemas
- `src/types`: TypeScript type definitions
- `scripts`: Data import and utility scripts

## Features Implemented

- ✅ Next.js 14 with TypeScript and App Router
- ✅ Tailwind CSS styling with Shadcn/UI components
- ✅ Sanity.io CMS integration with custom schemas
- ✅ Supabase client setup for authentication and data
- ✅ Responsive navigation and park listing
- ✅ Dynamic park detail pages
- ✅ GROQ queries for efficient data fetching
- ✅ Sample data import for 7 Tanzanian national parks
- ✅ Advanced CSS Grid layouts with Tailgrid for complex UI requirements

## Advanced CSS Grid with Tailgrid

This project uses Tailgrid, a powerful Tailwind CSS utility that offers a robust, feature-rich CSS Grid system. We've implemented Tailgrid for advanced, non-standard layout requirements where simple flexbox or standard Tailwind grid utilities would be insufficient.

### Implemented Features:

1. **Two-Column Contact Form Precision** (`src/app/contact/page.tsx`)
   - Precise 60/40 column ratio using `grid-template-columns: 3fr 2fr`

2. **Blog Post Layout with Subgrid** (`src/app/blog/[slug]/page.tsx`)
   - Perfect vertical alignment between main content and TOC sidebar
   - Responsive adjustments for different screen sizes

3. **Destinations Index with Asymmetric Grid** (`src/app/destinations/asymmetric-grid.tsx`)
   - Complex grid layouts using `grid-template-areas`
   - Featured destination cards that span multiple rows/columns

4. **Hero Section with Precise Element Positioning** (`src/app/trips/page.tsx`)
   - Overlapping search bar positioned exactly within geometric breaks
   - Layered design elements aligned perfectly without z-index hacks

See `TAILGRID_IMPLEMENTATION.md` for detailed implementation information.

## Data Import

To import sample park data into Sanity:

```bash
npm run import-parks
```

This will import 7 sample Tanzanian national parks with their entrance fees.

## Testing the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit [http://localhost:3001](http://localhost:3001) to see the homepage with park listings

3. Test the API endpoints:
   - Health check: [http://localhost:3001/api/health](http://localhost:3001/api/health)
   - Sanity connection test: [http://localhost:3001/api/test-sanity](http://localhost:3001/api/test-sanity)

4. Test Tailgrid implementations:
   - Contact Page (60/40 grid): [http://localhost:3001/contact](http://localhost:3001/contact)
   - Blog Post Page (subgrid): [http://localhost:3001/blog/sample-post](http://localhost:3001/blog/sample-post)
   - Asymmetric Destinations Grid: [http://localhost:3001/destinations/asymmetric-grid](http://localhost:3001/destinations/asymmetric-grid)
   - Trips Page (hero precision): [http://localhost:3001/trips](http://localhost:3001/trips)

## Next Steps

1. Configure Supabase authentication flows
2. Implement user registration and login
3. Add booking functionality for park visits
4. Create admin dashboard for content management
5. Add image handling for park photos
6. Implement search and filtering capabilities
7. Expand Tailgrid implementations to more complex layouts