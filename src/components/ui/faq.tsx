"use client"

import React, { useState } from 'react'

type FaqItem = {
  question: string
  answer?: string
}

export default function FAQ({ items }: { items: FaqItem[] }) {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({})

  const toggle = (i: number) => {
    setOpenMap(prev => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <button
              type="button"
              aria-expanded={!!openMap[idx]}
              onClick={() => toggle(idx)}
              className="w-full text-left flex items-center justify-between gap-4"
            >
              <span className="text-gray-800 font-medium">{it.question}</span>
              <span className="text-gray-500">{openMap[idx] ? '−' : '+'}</span>
            </button>

            <div
              aria-hidden={!openMap[idx]}
              className={`mt-3 text-gray-600 transition-all duration-200 ${openMap[idx] ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}
            >
              <div className="prose prose-sm text-gray-700">
                {it.answer ?? ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
