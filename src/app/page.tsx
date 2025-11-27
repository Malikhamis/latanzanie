import { getAllParks } from '@/lib/sanity/fetch'
import { Park } from '@/types/park'
import { Hero } from '@/components/Hero'
import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect to the default locale
  redirect('/en')
}
