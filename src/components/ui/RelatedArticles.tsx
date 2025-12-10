"use client"

import React from "react"
import Link from "next/link"

export type Article = {
  id: string | number
  titleEn: string
  titleFr: string
  excerptEn?: string
  excerptFr?: string
  link?: string
}

type Props = {
  articles: Article[]
  locale?: string
  title?: string
}

export default function RelatedArticles({ articles, locale = "en", title = "Related Articles" }: Props) {
  if (!articles || articles.length === 0) return null

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <ul className="space-y-4">
        {articles.map((a) => (
          <li key={a.id} className="flex items-start gap-4">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">
                {a.link ? (
                  <Link href={a.link} className="hover:underline">
                    {locale === "fr" ? a.titleFr : a.titleEn}
                  </Link>
                ) : (
                  <span>{locale === "fr" ? a.titleFr : a.titleEn}</span>
                )}
              </h4>
              {((locale === "fr" && a.excerptFr) || (locale !== "fr" && a.excerptEn)) && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{locale === "fr" ? a.excerptFr : a.excerptEn}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
