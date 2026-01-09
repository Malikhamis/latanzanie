import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F0FCF9] to-[#E8F8F5] px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#00A896] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/fr"
            className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Return Home
          </Link>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/fr/trips/climb-kilimanjaro" className="text-[#00A896] hover:underline">
                Kilimanjaro
              </Link>
              <Link href="/fr/trips/tanzania-safari" className="text-[#00A896] hover:underline">
                Safari
              </Link>
              <Link href="/fr/trips/zanzibar-beach-holidays" className="text-[#00A896] hover:underline">
                Zanzibar
              </Link>
              <Link href="/fr/about" className="text-[#00A896] hover:underline">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
