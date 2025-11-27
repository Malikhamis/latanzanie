import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'La Tanzanie au Cœur de la Nature - Safaris & Kilimandjaro'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #00A896 0%, #72D9C4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            La Tanzanie
          </h1>
          <h2
            style={{
              fontSize: 48,
              color: 'white',
              marginBottom: 40,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            au Cœur de la Nature
          </h2>
          <div
            style={{
              display: 'flex',
              gap: 30,
              fontSize: 32,
              color: 'white',
              fontWeight: '600',
            }}
          >
            <span>🦁 Safaris Authentiques</span>
            <span>🏔️ Kilimandjaro</span>
            <span>🏝️ Zanzibar</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
