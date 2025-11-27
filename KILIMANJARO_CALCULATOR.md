# Kilimanjaro Success Rate Calculator Implementation

## Overview
This document describes the implementation of the Kilimanjaro Success Rate Calculator feature and how to fully integrate it with Sanity CMS for production use.

## Current Implementation
The calculator is currently functional with:
- A dedicated page at `/kilimanjaro/calculator`
- Client-side form with all required inputs
- Server Action for secure calculation and data storage
- Supabase integration for lead storage
- Responsive UI with progress ring visualization
- Personalized feedback cards

## Next Steps for Full Sanity Integration

### 1. Create Sanity Schema
The schema for Kilimanjaro routes already exists at `sanity-studio/schemas/kilimanjaroRoute.ts`.

### 2. Add Schema to Sanity Studio
Add the schema to your Sanity studio configuration:

```javascript
// sanity.config.ts
import kilimanjaroRoute from './schemas/kilimanjaroRoute'

export default defineConfig({
  // ... other config
  schema: {
    types: [
      // ... other types
      kilimanjaroRoute,
    ],
  },
})
```

### 3. Update Server Action
Modify `src/lib/actions/kilimanjaro.ts` to fetch route data from Sanity:

```typescript
// Replace the mock routeData with real Sanity data
async function getRouteDataFromSanity(): Promise<Record<string, RouteData>> {
  const client = getClient()
  if (!client) {
    console.warn('Sanity client not initialized, using mock data')
    return routeData
  }
  
  const query = `*[_type == "kilimanjaroRoute"] {
    routeId,
    name,
    baseSuccessRate
  }`
  
  const routes = await client.fetch(query)
  const routeMap: Record<string, RouteData> = {}
  
  routes.forEach((route: any) => {
    routeMap[route.routeId] = {
      name: route.name,
      baseRate: route.baseSuccessRate
    }
  })
  
  return routeMap
}
```

### 4. Update API Route
Modify `src/app/api/kilimanjaro-routes/route.ts` to fetch from Sanity:

```typescript
// Replace the mock data with real Sanity data
export async function GET() {
  try {
    const client = getClient()
    if (!client) {
      console.warn('Sanity client not initialized, using mock data')
      return NextResponse.json(mockRouteData)
    }
    
    const query = `*[_type == "kilimanjaroRoute"] {
      routeId,
      name,
      baseSuccessRate
    }`
    
    const routes = await client.fetch(query)
    return NextResponse.json(routes)
  } catch (error) {
    console.error('Failed to fetch Kilimanjaro routes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch routes' },
      { status: 500 }
    )
  }
}
```

### 5. Update Frontend
The frontend already has the infrastructure to fetch route data from the API.

## Supabase Setup

### 1. Create Table
Create a table in Supabase for storing lead data:

```sql
CREATE TABLE kilimanjaro_leads (
  id SERIAL PRIMARY KEY,
  unit_system TEXT,
  height NUMERIC,
  weight NUMERIC,
  age INTEGER,
  gender TEXT,
  route TEXT,
  stamina TEXT,
  altitude_experience TEXT,
  improvements TEXT,
  email TEXT,
  success_rate INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Set Up Environment Variables
Ensure you have the following environment variables in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key
```

## Algorithm Details

The success rate calculation algorithm considers:

1. **Base Rate**: From Sanity route data
2. **Training Adjustment**:
   - Poor: -10%
   - Fair: 0%
   - Good: +5%
   - Excellent: +10%
3. **Altitude Adjustment**:
   - No experience: -10%
   - With experience: +5%
4. **BMI Adjustment**:
   - Optimal range (18.5-25): 0%
   - Outside range: -5%

## Testing

To test the calculator:
1. Visit `/kilimanjaro/calculator`
2. Fill in all required fields
3. Submit the form
4. View the calculated success rate
5. Check Supabase for stored lead data

## Future Enhancements

1. Add more detailed route information
2. Include weather conditions in calculation
3. Add social sharing features
4. Implement email notifications
5. Add multi-language support