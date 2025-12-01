"use client"

import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
  image: string
  onClick?: () => void
}

export default function BlogCard({ title, image, onClick }: Props) {
  return (
    <article className="relative rounded-2xl overflow-hidden shadow-lg group">
      <div className="relative w-full aspect-[3/4] bg-gray-200">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
        <h3 className="text-white text-xl font-semibold drop-shadow-md">{title}</h3>
        <div className="mt-4">
          <button
            onClick={onClick}
            className="pointer-events-auto inline-flex items-center gap-2 bg-white text-gray-800 px-3 py-2 rounded-full text-sm shadow"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21l-4.35-4.35" />
              <circle cx="11" cy="11" r="6" />
            </svg>
            Explore
          </button>
        </div>
      </div>
    </article>
  )
}
