import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Home,
  Package,
  Lightbulb,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Storage Tips & Insights Blog - Pack and Store Dubai",
  description:
    "Expert storage tips, organization ideas, and moving guides from Pack and Store Dubai. Learn how to maximize your space and protect your belongings.",
  openGraph: {
    title: "Pack and Store Blog - Storage Tips & Dubai Living",
    description:
      "Discover expert storage solutions and organization tips for life in Dubai.",
  },
};

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "ultimate-guide-storage-unit-sizes",
    title: "The Ultimate Guide to Choosing the Right Storage Unit Size",
    excerpt:
      "Not sure what size storage unit you need? This comprehensive guide breaks down storage sizes and what fits in each, helping you make the perfect choice.",
    category: "Storage Tips",
    categoryIcon: Package,
    author: "Sarah Ahmed",
    date: "2024-03-15",
    readTime: "5 min read",
    featured: true,
    image: "/blog-storage-sizes.jpg",
  },
  {
    id: 2,
    slug: "decluttering-before-moving-dubai",
    title: "Decluttering Before Your Dubai Move: A Step-by-Step Guide",
    excerpt:
      "Moving homes in Dubai? Learn how to efficiently declutter and organize your belongings before the big move. Save time, money, and stress.",
    category: "Moving Tips",
    categoryIcon: Home,
    author: "Mohammed Al Rashid",
    date: "2024-03-10",
    readTime: "7 min read",
    featured: false,
    image: "/blog-declutter.jpg",
  },
  {
    id: 3,
    slug: "climate-controlled-storage-dubai",
    title: "Why Climate-Controlled Storage Matters in Dubai's Heat",
    excerpt:
      "Dubai's extreme temperatures can damage your belongings. Discover why climate-controlled storage is essential for protecting your valuables.",
    category: "Storage Tips",
    categoryIcon: Shield,
    author: "Emma Thompson",
    date: "2024-03-05",
    readTime: "4 min read",
    featured: false,
    image: "/blog-climate.jpg",
  },
  {
    id: 4,
    slug: "seasonal-storage-solutions",
    title: "Seasonal Storage Solutions: Maximizing Space Year-Round",
    excerpt:
      "From winter clothes to holiday decorations, learn how to efficiently store seasonal items and keep your home clutter-free throughout the year.",
    category: "Organization",
    categoryIcon: Lightbulb,
    author: "Lisa Chen",
    date: "2024-02-28",
    readTime: "6 min read",
    featured: false,
    image: "/blog-seasonal.jpg",
  },
  {
    id: 5,
    slug: "business-inventory-storage-tips",
    title: "5 Smart Storage Tips for Small Business Inventory",
    excerpt:
      "Running out of space for your business inventory? These practical storage solutions will help you organize stock and improve efficiency.",
    category: "Business",
    categoryIcon: TrendingUp,
    author: "Ahmed Hassan",
    date: "2024-02-20",
    readTime: "8 min read",
    featured: false,
    image: "/blog-business.jpg",
  },
  {
    id: 6,
    slug: "packing-fragile-items-guide",
    title: "How to Pack Fragile Items Like a Pro",
    excerpt:
      "Worried about your delicate belongings? Master the art of packing fragile items with our expert tips and techniques for maximum protection.",
    category: "Packing Tips",
    categoryIcon: Package,
    author: "Sarah Ahmed",
    date: "2024-02-15",
    readTime: "5 min read",
    featured: false,
    image: "/blog-fragile.jpg",
  },
];

const categories = [
  { name: "All Posts", count: blogPosts.length, active: true },
  { name: "Storage Tips", count: 12, active: false },
  { name: "Moving Tips", count: 8, active: false },
  { name: "Organization", count: 6, active: false },
  { name: "Business", count: 4, active: false },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Storage Tips & Insights
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Expert advice on storage, organization, and making the most of your space in
              Dubai
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group mx-auto max-w-5xl overflow-hidden border-0 shadow-xl transition-all hover:shadow-2xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100 md:aspect-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <featuredPost.categoryIcon className="h-24 w-24 text-blue-600/20" />
                    </div>
                    <Badge className="absolute left-4 top-4 bg-yellow-500 text-black">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="flex flex-col justify-center p-8">
                    <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                      <Badge variant="secondary">
                        <featuredPost.categoryIcon className="mr-1 h-3 w-3" />
                        {featuredPost.category}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold transition-colors group-hover:text-blue-600 md:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-4 text-gray-600">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                size="sm"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
                  <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <post.categoryIcon className="h-16 w-16 text-blue-600/20" />
                    </div>
                    <Badge className="absolute left-4 top-4" variant="secondary">
                      <post.categoryIcon className="mr-1 h-3 w-3" />
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 line-clamp-2 text-xl font-semibold transition-colors group-hover:text-blue-600">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-gray-600">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-3xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Stay Updated with Storage Tips
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Get our latest storage insights and exclusive offers delivered to your inbox
              </p>
              <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                />
                <Button type="submit">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Start Storing?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Put our tips into practice with Dubai&apos;s most trusted storage solution
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/storage-sizes">
                View Storage Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}