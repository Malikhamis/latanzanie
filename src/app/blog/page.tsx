import { Button } from '@/components/ui/button'

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Great Migration: When to Visit for the Best Experience",
      excerpt: "Learn the optimal times to witness one of nature's greatest spectacles in the Serengeti.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Safari"
    },
    {
      id: 2,
      title: "Preparing for Your Kilimanjaro Climb: A Complete Guide",
      excerpt: "Everything you need to know to prepare for your journey to the Roof of Africa.",
      date: "February 28, 2025",
      readTime: "8 min read",
      category: "Climbing"
    },
    {
      id: 3,
      title: "Zanzibar's Hidden Beaches: Beyond the Tourist Trail",
      excerpt: "Discover the island's secret spots that only locals know about.",
      date: "February 10, 2025",
      readTime: "6 min read",
      category: "Beach"
    },
    {
      id: 4,
      title: "Bird Watching in Tanzania: A Birder's Paradise",
      excerpt: "Explore Tanzania's incredible diversity of bird species and the best locations to spot them.",
      date: "January 22, 2025",
      readTime: "7 min read",
      category: "Wildlife"
    },
    {
      id: 5,
      title: "Cultural Encounters: Meeting the Maasai People",
      excerpt: "Experience authentic Maasai culture and learn about their traditional way of life.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Culture"
    },
    {
      id: 6,
      title: "Photography Tips for Tanzania's Wildlife",
      excerpt: "Capture stunning images of Tanzania's incredible wildlife with our expert photography tips.",
      date: "December 18, 2024",
      readTime: "9 min read",
      category: "Photography"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with dotted border */}
      <div className="relative h-96 bg-gradient-to-r from-[#5BC4AF] to-[#00A896] flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Travel Blog
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, tips, and stories from our adventures across Tanzania
          </p>
        </div>
        
        {/* Dotted border effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 border-t-2 border-white border-dotted"></div>
      </div>

      {/* Main content */}
      <div className="py-16 max-w-7xl mx-auto px-4">
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-[#00A896]">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-[#00A896] text-[#00A896] hover:bg-[#E8F8F5]"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}