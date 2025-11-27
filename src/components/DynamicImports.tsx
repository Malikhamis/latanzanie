// Dynamic import utilities for lazy loading components
'use client'

import dynamic from 'next/dynamic'
import { ComponentType, ReactNode } from 'react'

// Loading placeholder for modals
const ModalLoading = () => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="bg-white rounded-lg p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00A896] mx-auto"></div>
    </div>
  </div>
)

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
