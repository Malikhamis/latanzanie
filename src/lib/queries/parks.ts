import { groq } from 'next-sanity'

// Query for all Tanzanian national parks (filtered by isTanzanian: true)
export const getAllParksQuery = groq`
  *[_type == "nationalPark" && isTanzanian == true] {
    _id,
    title,
    slug,
    region,
    overview
  }
`

// Query for a single park by slug
export const getParkBySlugQuery = groq`
  *[_type == "nationalPark" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    region,
    overview,
    entranceFees,
    images
  }
`

// Query for navigation menu (all parks for menu)
export const getNavigationQuery = groq`
  *[_type == "nationalPark" && isTanzanian == true] {
    title,
    slug
  }
`