"use client"

import React from "react"
import Link from "next/link"

type Crumb = { label: string; href?: string }

type Props = { crumbs: Crumb[] }

export default function Breadcrumbs({ crumbs }: Props) {
  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {crumbs.map((c, idx) => (
          <li key={idx} className="flex items-center">
            {c.href ? (
              <Link href={c.href} className="hover:underline text-[#00A896]">
                {c.label}
              </Link>
            ) : (
              <span className="text-gray-700">{c.label}</span>
            )}
            {idx < crumbs.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
