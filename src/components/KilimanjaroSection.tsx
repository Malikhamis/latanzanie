import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function KilimanjaroSection() {
  const t = useTranslations('KilimanjaroSection');
  
  const trips = [
    {
      id: 1,
      nameKey: "marangu.name",
      durationKey: "marangu.duration",
      price: 1800,
      rating: 5.0,
      image: "/images/kilimanjaro-marangu.jpg",
      descriptionKey: "marangu.description"
    },
    {
      id: 2,
      nameKey: "machame.name",
      durationKey: "machame.duration",
      price: 2000,
      rating: 5.0,
      image: "/images/kilimanjaro-machame.jpg",
      descriptionKey: "machame.description"
    },
    {
      id: 3,
      nameKey: "lemosho.name",
      durationKey: "lemosho.duration",
      price: 2200,
      rating: 5.0,
      image: "/images/kilimanjaro-lemosho.jpg",
      descriptionKey: "lemosho.description"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
              <CardHeader>
                <CardTitle>{t(trip.nameKey)}</CardTitle>
                <CardDescription>{t(trip.descriptionKey)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{t(trip.durationKey)}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{trip.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  {t('fromPrice', { price: trip.price })}
                </div>
                <Button className="w-full">{t('bookNow')}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}