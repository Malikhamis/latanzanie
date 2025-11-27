export default async function Page({ params }: any) {
  // next's generated types may treat `params` as a Promise in some builds.
  // Awaiting here is safe whether `params` is a value or a Promise.
  const resolvedParams = await params
  const slug = resolvedParams?.slug ?? 'unknown'

  return (
    <div className="min-h-screen flex items-center justify-center p-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">Blog: {slug}</h1>
        <p className="text-gray-600">This blog detail page is a placeholder while we stabilize the build. The full client-side implementation will be restored shortly.</p>
      </div>
    </div>
  )
}