"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

type Props = {
  title: string
  subtitle?: string
  href?: string
  imageSrc?: string
  onClick?: () => void
}

export default function TopicCard({ title, subtitle, href, imageSrc, onClick }: Props) {
  const content = (
    <div className="relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] h-72 md:h-80">
      {imageSrc ? (
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-200" />
      )}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Title centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h3 className="text-white text-2xl md:text-3xl font-semibold drop-shadow-md leading-tight">{title}</h3>
        {subtitle && <p className="mt-2 text-white/90 text-sm md:text-base">{subtitle}</p>}
      </div>

      {/* Explore button bottom center */}
      <div className="absolute left-0 right-0 bottom-6 flex justify-center">
        <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-4 py-2 rounded-full shadow-md backdrop-blur-sm">
          <Search className="h-4 w-4" />
          <span className="font-medium">Explore</span>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="block">
        {content}
      </Link>
    )
  }

  return (
    <div onClick={onClick} role={onClick ? "button" : undefined} tabIndex={0} className="block">
      {content}
    </div>
  )
}
