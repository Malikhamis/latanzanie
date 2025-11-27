export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[#E8F8F5] rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-[#00A896] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-xl text-gray-600 font-medium">Loading...</p>
        <p className="text-sm text-gray-400 mt-2">Preparing your Tanzania adventure</p>
      </div>
    </div>
  )
}
