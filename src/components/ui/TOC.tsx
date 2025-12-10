"use client"

import React, { useEffect, useState } from "react"

type TOCItem = {
  id: string
  label: string
  level: number
}

type Props = {
  items?: TOCItem[]
  title?: string
  onSelect?: (id: string) => void
}

export default function TOC({ items = [], title = "Table of Contents", onSelect }: Props) {
  const [headings, setHeadings] = useState<TOCItem[]>([])

  useEffect(() => {
    if (items.length > 0) {
      setHeadings(items)
      return
    }

    // Auto-detect H2 and H3 headings from the DOM
    const h2s = Array.from(document.querySelectorAll("h2, h3")).map((el, idx) => ({
      id: el.id || `heading-${idx}`,
      label: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }))
    setHeadings(h2s)
  }, [items])

  const handleClick = (id: string) => {
    if (onSelect) onSelect(id)
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      // Adjust for header overlap by scrolling up slightly after a brief delay
      setTimeout(() => {
        window.scrollBy({ top: -120, behavior: "smooth" })
      }, 300)
    }
  }

  if (headings.length === 0) return null

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#00A896] mb-8">
      <h3 className="font-bold text-gray-800 mb-4 text-lg">{title}</h3>
      <ul className="space-y-2 text-sm">
        {headings.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "ml-4" : ""}
          >
            <button
              onClick={() => handleClick(item.id)}
              className="text-[#00A896] hover:underline text-left"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
