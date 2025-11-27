import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Park {
  _id: string
  title: string
  slug: {
    current: string
  }
  region: string
  overview: string
  entranceFees?: {
    conservationFee?: {
      citizen?: number
      nonCitizen?: number
    }
    campingFee?: {
      citizen?: number
      nonCitizen?: number
    }
    vehicleFee?: {
      citizen?: number
      nonCitizen?: number
    }
  }
  images?: Array<{
    asset: SanityImageSource
    alt: string
    width: number
    height: number
  }>
}