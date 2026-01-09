import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'

interface TripCardProps {
  id: number
  slug: string
  title: string
  description: string
  price?: number
  priceLabel?: string
  duration: string
  image: string
  locale: string
  href?: string // Optional override href for travel-blogs context
}

export default function TripCard({
  slug,
  title,
  description,
  price,
  priceLabel,
  duration,
  image,
  locale,
  href
}: TripCardProps) {
  // Default to trips page, but allow override for travel-blogs
  const link = href || `/${locale}/trips/${slug}`

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group relative">
      {/* Image Container - Full background */}
      <div className="h-64 bg-gray-200 relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        ) : (
          <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
            <span className="text-gray-500">Image unavailable</span>
          </div>
        )}
        {/* Overlay content on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
            {/* Centered Explore Button with Lens Icon */}
            <Link
              href={link}
              className="inline-flex items-center justify-center bg-[#00A896] hover:bg-[#008576] text-white px-3 py-4 rounded-lg font-medium transition-colors mt-4"
            >
              <Search className="h-5 w-5 mr-2" />
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
