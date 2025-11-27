"use client"

import { Button } from '@/components/ui/button'

// Accept params as `any` to satisfy Next's generated PageProps typing which
// may treat `params` as a Promise in some builds. We don't await here because
// this is a client component; the runtime will pass a plain object.
export default function BlogPostPage({ params }: any) {
  // Sample blog post data
  const blogPost = {
    title: "The Great Migration: When to Visit for the Best Experience",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Safari",
    author: {
      name: "Sarah Kimaro",
      bio: "Head of Safari Experiences with 15 years of experience in Tanzanian wildlife tourism.",
      avatar: ""
    },
    content: `
      <p>The Great Migration is one of nature's most spectacular events, drawing millions of wildebeest, zebras, and gazelles across the Serengeti ecosystem. Timing your visit correctly can make the difference between a good safari and an unforgettable one.</p>
      
      <h2>Understanding the Migration Cycle</h2>
      <p>The migration follows a roughly circular route driven by the search for fresh grazing and water. The cycle can be broken down into several key phases:</p>
      
      <h3>January - March: Calving Season in the Southern Serengeti</h3>
      <p>This period offers exceptional opportunities for predator encounters, as newborn wildebeest attract lions, cheetahs, and hyenas. The southern plains around Ndutu provide excellent viewing conditions.</p>
      
      <h3>April - May: The Western Corridor</h3>
      <p>As the herds move northwest, they encounter the first major obstacle: the Grumeti River. This is where you'll witness the first dramatic river crossings.</p>
      
      <h3>June - July: Massing in the Western Corridor</h3>
      <p>The herds gather in large numbers along the Grumeti and Mara rivers, building up for the most challenging crossings. This is peak season for dramatic wildlife photography.</p>
      
      <h3>August - October: The Mara River Crossings</h3>
      <p>The most famous and photographed part of the migration occurs when herds cross into Kenya's Masai Mara. The treacherous Mara River crossings provide heart-stopping moments as crocodiles lie in wait.</p>
      
      <h3>November - December: The Return Journey</h3>
      <p>With the short rains beginning, the herds start their journey back to the Serengeti's southern plains, following the fresh grass growth.</p>
    `
  }

  // Sample table of contents
  const tableOfContents = [
    { id: "understanding", title: "Understanding the Migration Cycle" },
    { id: "january-march", title: "January - March: Calving Season" },
    { id: "april-may", title: "April - May: The Western Corridor" },
    { id: "june-july", title: "June - July: Massing in the Western Corridor" },
    { id: "august-october", title: "August - October: Mara River Crossings" },
    { id: "november-december", title: "November - December: Return Journey" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative h-96 bg-gradient-to-r from-[#5BC4AF] to-[#00A896] flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-7xl mx-auto">
          <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">
            {blogPost.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {blogPost.title}
          </h1>
          <div className="flex justify-center items-center space-x-4 text-lg">
            <span>{blogPost.date}</span>
            <span>•</span>
            <span>{blogPost.readTime}</span>
          </div>
        </div>
      </div>

      {/* Main content with Tailgrid subgrid */}
      <div className="py-16 max-w-7xl mx-auto px-4">
        {/* Using Tailgrid subgrid for perfect alignment between main content and TOC */}
        <div className="grid-blog-article gap-12">
          {/* Main article content */}
          <div className="article-content">
            <div className="prose max-w-none">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-8" />
              
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h3 className="text-lg font-serif font-bold text-gray-800">
                      {blogPost.author.name}
                    </h3>
                    <p className="text-gray-600">
                      {blogPost.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sticky Table of Contents sidebar */}
          <div className="toc-sidebar">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-serif font-bold mb-4 text-gray-800">
                Table of Contents
              </h3>
              <nav>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`} 
                        className="text-gray-600 hover:text-[#00A896] transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button className="w-full">
                  Plan This Trip
                </Button>
                <Button variant="outline" className="w-full mt-3">
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}