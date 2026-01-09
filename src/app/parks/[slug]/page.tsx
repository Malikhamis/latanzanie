import { getParkBySlug } from '@/lib/sanity/fetch'
import { Park } from '@/types/park'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

// Function to map park data to translations
const mapParkDataToTranslations = (park: Park, t: (key: string) => string) => {
  // Map French park names to translation keys
  const parkTranslations: Record<string, string> = {
    'Parc National du Serengeti': 'parks.serengeti',
    'Cratère du Ngorongoro': 'parks.ngorongoro',
    'Parc National de la Tarangire': 'parks.tarangire',
    'Serengeti National Park': 'parks.serengeti',
    'Ngorongoro Crater': 'parks.ngorongoro',
    'Tarangire National Park': 'parks.tarangire'
  };

  const translationKey = parkTranslations[park.title];
  if (translationKey) {
    return {
      ...park,
      title: t(`${translationKey}.title`),
      region: t(`${translationKey}.region`),
      overview: t(`${translationKey}.overview`)
    };
  }
  
  // If no mapping found, return the park as is
  return park;
};

interface Params {
  slug: string;
}

export default async function ParkPage({ params }: { params: Promise<Params> }) {
  // Await the params to resolve the promise
  const resolvedParams = await params;
  const park: Park | null = await getParkBySlug(resolvedParams.slug)
  
  if (!park) {
    notFound()
  }
  
  // Get translations
  const t = await getTranslations('Common')

  // Map park data to translations
  const translatedPark = mapParkDataToTranslations(park, t)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{translatedPark.title}</h1>
            <p className="text-gray-600 mb-6">{t('region')}: {translatedPark.region}</p>
            
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700">{translatedPark.overview}</p>
            </div>
            
            {translatedPark.entranceFees && (
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('entranceFees.title')}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#E8F8F5] p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{t('entranceFees.conservationFee')}</h3>
                    <p>{t('entranceFees.citizen')}: ${translatedPark.entranceFees.conservationFee?.citizen}</p>
                    <p>{t('entranceFees.nonCitizen')}: ${translatedPark.entranceFees.conservationFee?.nonCitizen}</p>
                  </div>
                  
                  <div className="bg-[#E8F8F5] p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{t('entranceFees.campingFee')}</h3>
                    <p>{t('entranceFees.citizen')}: ${translatedPark.entranceFees.campingFee?.citizen}</p>
                    <p>{t('entranceFees.nonCitizen')}: ${translatedPark.entranceFees.campingFee?.nonCitizen}</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{t('entranceFees.vehicleFee')}</h3>
                    <p>{t('entranceFees.citizen')}: ${translatedPark.entranceFees.vehicleFee?.citizen}</p>
                    <p>{t('entranceFees.nonCitizen')}: ${translatedPark.entranceFees.vehicleFee?.nonCitizen}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}