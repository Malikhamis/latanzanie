import { redirect } from 'next/navigation';

// This page should not exist as it conflicts with locale-specific routing
// Redirect to the French version by default
export default function TravelBlogsPage() {
  redirect('/fr/travel-blogs');
}