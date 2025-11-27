import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Park Not Found</h1>
        <p className="text-gray-600 mb-8">The park you&#39;re looking for doesn&#39;t exist or hasn&#39;t been added yet.</p>
        <Link 
          href="/" 
          className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}