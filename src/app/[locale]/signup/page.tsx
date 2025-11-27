"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

// Disable static generation for this page
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export default function SignupPage() {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const params = useParams() as { locale?: string }
  const currentLocale = params?.locale || 'en'
  const t = useTranslations('SignupPage')

  const safeT = (key: string, fallback = ''): string => {
    try {
      return t(key)
    } catch {
      return fallback
    }
  }

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!firstName.trim()) return setError(safeT('errors.firstNameRequired', 'Please enter your first name'))
    if (!lastName.trim()) return setError(safeT('errors.lastNameRequired', 'Please enter your last name'))
    if (!validateEmail(email)) return setError(safeT('errors.invalidEmail', 'Please enter a valid email'))
    if (password.length < 8) return setError(safeT('errors.passwordTooShort', 'Password must be at least 8 characters'))
    if (password !== confirmPassword) return setError(safeT('errors.passwordMismatch', "Passwords don't match"))

    // TODO: wire to backend / API route to persist signup
    setSubmitted(true)
  }

  if (submitted) {
    const successMessage = safeT('success.message', "We'll be in touch at {email}.").replace('{email}', email)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">{safeT('success.title', 'Thanks for signing up!')}</h1>
          <p className="text-gray-600 mb-6">{successMessage}</p>
          <Link href={`/${currentLocale}`} className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-6 py-2 rounded-md">{safeT('backToHome', 'Back to home')}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-light text-center mb-6">{safeT('title', 'Sign Up')}</h1>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 p-3 rounded">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-600">*</span></label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              required
              placeholder={safeT('firstNamePlaceholder', 'First Name')}
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-600">*</span></label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              required
              placeholder={safeT('lastNamePlaceholder', 'Last Name')}
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-600">*</span></label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder={safeT('emailPlaceholder', 'Email')}
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password <span className="text-red-600">*</span></label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder={safeT('passwordPlaceholder', 'Password')}
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password <span className="text-red-600">*</span></label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              required
              placeholder={safeT('confirmPasswordPlaceholder', 'Confirm Password')}
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-3 rounded-lg text-lg"
            >
              {safeT('submit', 'Sign Up')}
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 mb-3">{safeT('alreadyHaveAccount', 'Already have an account?')}</p>
            <Link href={`/${currentLocale}/signin`} className="inline-block w-full text-center border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-50">{safeT('signIn', 'Sign In')}</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
