// Dynamic import utilities for lazy loading components
'use client'

import dynamic from 'next/dynamic'
import { ComponentType, ReactNode } from 'react'

// Generic dynamic wrapper with error boundary
export function withDynamicImport<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  options?: {
    loading?: () => ReactNode
    ssr?: boolean
  }
) {
  return dynamic(
    () => importFunc().catch(() => ({
      default: (() => <div className="p-4 text-red-600">Component failed to load</div>) as ComponentType<P>
    })),
    {
      loading: options?.loading || (() => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>),
      ssr: options?.ssr !== undefined ? options.ssr : true
    }
  )
}
