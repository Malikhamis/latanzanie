"use client"

import React from "react"

type Props = {
  author: string
  date?: string
  readingTime?: string
}

export default function AuthorMeta({ author, date, readingTime }: Props) {
  return (
    <div className="flex items-center space-x-3 text-sm text-gray-600">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">A</div>
      <div>
        <div className="font-semibold text-gray-800">{author}</div>
        <div className="flex gap-2 text-xs text-gray-500">
          {date && <span>{date}</span>}
          {readingTime && <span>• {readingTime}</span>}
        </div>
      </div>
    </div>
  )
}
