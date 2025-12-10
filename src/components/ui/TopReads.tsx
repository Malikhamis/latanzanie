"use client"

import React from "react"
import Link from "next/link"

export type TopRead = {
  id: string | number
  titleEn: string
  titleFr: string
  descriptionEn?: string
  descriptionFr?: string
  link?: string
}

type Props = {
  posts: TopRead[]
  title?: string
  locale?: string
}

export default function TopReads({
  posts,
  title = "Top Reads",
  locale = "en",
}: Props) {
  if (!posts || posts.length === 0) return null

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, idx) => {
          const titleText = locale === "fr" ? post.titleFr : post.titleEn
          const descText = locale === "fr" ? post.descriptionFr : post.descriptionEn

          const content = (
            <div className="p-4 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
              <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">{titleText}</h4>
              {descText && <p className="text-sm text-gray-600 line-clamp-2">{descText}</p>}
            </div>
          )

          return (
            <div key={post.id}>
              {post.link ? (
                <Link href={post.link} className="block">
                  {content}
                </Link>
              ) : (
                content
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
