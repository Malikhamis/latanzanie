import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    // Return simple test data
    const parks = [
      {
        _id: '1',
        title: 'Parc National du Serengeti',
        slug: { current: 'serengeti' },
        region: 'Nord de la Tanzanie',
        overview: 'Fameux pour la Grande Migration annuelle des gnous et des zèbres, le parc du Serengeti est l\'un des sites de safari les plus emblématiques d\'Afrique.'
      },
      {
        _id: '2',
        title: 'Cratère du Ngorongoro',
        slug: { current: 'ngorongoro' },
        region: 'Nord de la Tanzanie',
        overview: 'Le cratère du Ngorongoro est le plus grand cratère volcanique ininterrompu au monde et abrite une densité exceptionnelle de faune.'
      },
      {
        _id: '3',
        title: 'Parc National de la Tarangire',
        slug: { current: 'tarangire' },
        region: 'Nord de la Tanzanie',
        overview: 'Célèbre pour ses grands troupeaux d\'éléphants et ses baobabs majestueux, la Tarangire offre un paysage de savane emblématique.'
      }
    ]
    
    return NextResponse.json({ parks }, { status: 200 })
  } catch (error) {
    console.error('Error in parks API route:', error)
    return NextResponse.json({ error: 'Failed to fetch parks' }, { status: 500 })
  }
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, { status: 204 })
}
