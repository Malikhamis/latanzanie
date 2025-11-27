import createImageUrlBuilder from '@sanity/image-url'
import { getClient } from './client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const urlFor = (source: SanityImageSource) => {
  const client = getClient()
  
  if (!client) {
    console.warn('Sanity client not initialized')
    return {
      image: () => ({
        url: () => '',
        width: () => ({ height: () => ({ fit: () => ({ crop: () => ({}) }) }) }),
      }),
    }
  }
  
  const builder = createImageUrlBuilder(client)
  return builder.image(source)
}