"use client"

import React from "react"
import TopicCard from "@/components/ui/TopicCard"

type Category = {
  id: number | string
  titleEn: string
  titleFr: string
  subtitleEn?: string
  subtitleFr?: string
  image?: string
  link?: string
}

type Props = {
  categories: Category[]
  locale?: string
}

export default function TopicCategories({ categories, locale = "en" }: Props) {
  if (!categories || categories.length === 0) return null

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">{locale === "fr" ? "Catégories" : "Categories"}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <TopicCard
              key={cat.id}
              title={locale === "fr" ? cat.titleFr : cat.titleEn}
              subtitle={locale === "fr" ? cat.subtitleFr : cat.subtitleEn}
              imageSrc={cat.image || "/images/card1.jpg"}
              href={cat.link ? `/${locale}/travel-blogs/${cat.link}` : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
