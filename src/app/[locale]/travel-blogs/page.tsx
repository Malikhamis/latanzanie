
import TravelBlogsClient from './TravelBlogsClient';
export const dynamic = 'force-dynamic';

export default function TravelBlogsPage({ params }: { params: { locale: string } }) {
  // Server component: just render the client logic in a child
  return <TravelBlogsClient params={params} />;
}