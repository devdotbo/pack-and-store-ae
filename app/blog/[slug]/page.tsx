import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Tag,
  Package,
  Home,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  // Mock data for demonstration
  const posts = {
    "ultimate-guide-storage-unit-sizes": {
      title: "The Ultimate Guide to Choosing the Right Storage Unit Size",
      excerpt:
        "Not sure what size storage unit you need? This comprehensive guide breaks down storage sizes and what fits in each, helping you make the perfect choice.",
      content: `
        <p>Choosing the right storage unit size is crucial for both maximizing your budget and ensuring all your belongings fit comfortably. Too small, and you'll struggle to fit everything; too large, and you're paying for space you don't need.</p>
        
        <h2>Understanding Storage Unit Sizes</h2>
        <p>Storage units come in various sizes, each suited for different needs. Let's break down the most common sizes and what they can hold:</p>
        
        <h3>Storage Locker (1m² / 10 sq ft)</h3>
        <p>Perfect for students or storing seasonal items. This compact space can hold:</p>
        <ul>
          <li>5-10 medium boxes</li>
          <li>Seasonal decorations</li>
          <li>Sports equipment</li>
          <li>Important documents</li>
        </ul>
        
        <h3>Small Unit (3m² / 30 sq ft)</h3>
        <p>Ideal for studio apartment overflow or small business inventory:</p>
        <ul>
          <li>Contents of a studio apartment</li>
          <li>Small furniture items</li>
          <li>20-30 boxes</li>
          <li>Business files and equipment</li>
        </ul>
        
        <h3>Medium Unit (5m² / 50 sq ft)</h3>
        <p>Our most popular size, perfect for 1-bedroom apartments:</p>
        <ul>
          <li>Complete 1-bedroom apartment contents</li>
          <li>Major appliances</li>
          <li>Dining set and bedroom furniture</li>
          <li>50+ boxes</li>
        </ul>
        
        <h3>Large Unit (10m² / 100 sq ft)</h3>
        <p>Spacious enough for 2-3 bedroom homes:</p>
        <ul>
          <li>2-3 bedroom home contents</li>
          <li>Multiple furniture sets</li>
          <li>Vehicle storage</li>
          <li>Large business inventory</li>
        </ul>
        
        <h2>How to Calculate Your Storage Needs</h2>
        <p>Follow these steps to determine the right unit size:</p>
        <ol>
          <li><strong>Inventory your items:</strong> Make a list of everything you plan to store</li>
          <li><strong>Measure large items:</strong> Note dimensions of furniture and appliances</li>
          <li><strong>Count your boxes:</strong> Estimate the number of boxes you'll need</li>
          <li><strong>Add buffer space:</strong> Include 10-20% extra space for easy access</li>
        </ol>
        
        <h2>Pro Tips for Maximizing Your Storage Space</h2>
        <ul>
          <li>Use uniform box sizes for easy stacking</li>
          <li>Disassemble furniture when possible</li>
          <li>Store items vertically to maximize floor space</li>
          <li>Create an aisle for accessing items in the back</li>
          <li>Use shelving units for better organization</li>
        </ul>
        
        <h2>Still Unsure? We're Here to Help!</h2>
        <p>Our storage experts at Pack and Store can help you choose the perfect unit size. We offer free consultations and can even visit your location to assess your storage needs. Contact us today for personalized advice!</p>
      `,
      category: "Storage Tips",
      categoryIcon: Package,
      author: "Sarah Ahmed",
      authorRole: "Storage Expert",
      date: "2024-03-15",
      readTime: "5 min read",
      tags: ["storage sizes", "storage tips", "organization", "moving"],
    },
  };
  
  return posts[slug as keyof typeof posts] || null;
};

// This would be used for generateStaticParams in production
const getAllSlugs = () => [
  "ultimate-guide-storage-unit-sizes",
  "decluttering-before-moving-dubai",
  "climate-controlled-storage-dubai",
  "seasonal-storage-solutions",
  "business-inventory-storage-tips",
  "packing-fragile-items-guide",
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found - Pack and Store Blog",
    };
  }
  
  return {
    title: `${post.title} - Pack and Store Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

const shareLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    getUrl: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "Twitter",
    icon: Twitter,
    getUrl: (url: string, title: string) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    getUrl: (url: string, title: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
];

// Related posts (mock data)
const relatedPosts = [
  {
    slug: "climate-controlled-storage-dubai",
    title: "Why Climate-Controlled Storage Matters in Dubai's Heat",
    category: "Storage Tips",
    readTime: "4 min read",
  },
  {
    slug: "packing-fragile-items-guide",
    title: "How to Pack Fragile Items Like a Pro",
    category: "Packing Tips",
    readTime: "5 min read",
  },
  {
    slug: "seasonal-storage-solutions",
    title: "Seasonal Storage Solutions: Maximizing Space Year-Round",
    category: "Organization",
    readTime: "6 min read",
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">Post Not Found</h1>
          <p className="mb-8 text-gray-600">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </main>
    );
  }
  
  const postUrl = `https://packandstore.ae/blog/${params.slug}`;
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 py-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Button
              variant="ghost"
              className="mb-6 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              <post.categoryIcon className="mr-1 h-3 w-3" />
              {post.category}
            </Badge>
            <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-blue-100">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {/* Featured Image Placeholder */}
                  <div className="mb-8 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="flex h-full items-center justify-center">
                      <post.categoryIcon className="h-24 w-24 text-blue-600/20" />
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Share Section */}
                  <Separator className="my-8" />
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Share this article</h3>
                    <div className="flex gap-2">
                      {shareLinks.map((platform) => (
                        <Button
                          key={platform.name}
                          variant="outline"
                          size="icon"
                          asChild
                        >
                          <Link
                            href={platform.getUrl(postUrl, post.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <platform.icon className="h-4 w-4" />
                          </Link>
                        </Button>
                      ))}
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => navigator.clipboard.writeText(postUrl)}
                      >
                        <Link2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Author Bio */}
              <Card className="mt-8 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                      <User className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{post.author}</h3>
                      <p className="text-sm text-gray-600">{post.authorRole}</p>
                      <p className="mt-2 text-gray-600">
                        With over 10 years of experience in the storage industry, {post.author} 
                        shares valuable insights to help you make the most of your storage space.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA Card */}
              <Card className="border-0 bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-xl">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">Need Storage?</h3>
                  <p className="mb-4 text-blue-100">
                    Get 50% off your first month with Dubai's most trusted storage solution.
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link href="/storage-sizes">
                      View Storage Options
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Related Posts */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group block"
                      >
                        <h4 className="mb-1 font-medium transition-colors group-hover:text-blue-600">
                          {relatedPost.title}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <Badge variant="outline" className="text-xs">
                            {relatedPost.category}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {relatedPost.readTime}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Newsletter */}
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold">Storage Tips Newsletter</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Get weekly storage tips and exclusive offers
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                    <Button type="submit" className="w-full" size="sm">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Start Storing with Confidence
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands who trust Pack and Store for their storage needs
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/facility">Tour Our Facility</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}