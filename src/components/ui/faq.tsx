"use client"

import React, { useState, useRef, useEffect } from 'react'

type FaqItem = {
  question: string
  answer?: string
}

export default function FAQ({ items }: { items: FaqItem[] }) {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({})
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({})

  useEffect(() => {
    // Update max-height when openMap changes
    items.forEach((_, idx) => {
      const element = contentRefs.current[idx];
      if (element) {
        if (openMap[idx]) {
          // Set to scrollHeight for animation
          element.style.maxHeight = `${element.scrollHeight}px`;
          // After transition, set to 'none' to accommodate content changes
          setTimeout(() => {
            if (openMap[idx] && contentRefs.current[idx]) {
              contentRefs.current[idx]!.style.maxHeight = 'none';
            }
          }, 300);
        } else {
          element.style.maxHeight = '0px';
        }
      }
    });
  }, [openMap, items]);

  const toggle = (i: number) => {
    setOpenMap(prev => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((it, idx) => (
        <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-hidden">
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
            ref={(el) => {
              contentRefs.current[idx] = el;
            }}
            aria-hidden={!openMap[idx]}
            className={`mt-3 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${openMap[idx] ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'max-height 0.3s ease, opacity 0.3s ease' }}
          >
            <div className="prose prose-sm text-gray-700 whitespace-pre-line pt-2">
              {it.answer ?? ''}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}