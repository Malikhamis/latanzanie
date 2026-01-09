
import TravelBlogsClient from './TravelBlogsClient';
export const dynamic = 'force-dynamic';

export default async function TravelBlogsPage({ params }: { params: Promise<{ locale: string }> }) {
  const awaitedParams = await params;
  // Server component: just render the client logic in a child
  return <TravelBlogsClient params={awaitedParams} />;
}