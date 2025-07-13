import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Shield,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Building2,
  TrendingUp,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Pack and Store - Dubai's Trusted Storage Solutions Since 2015",
  description:
    "Learn about Pack and Store's journey in providing premium storage and relocation services in Dubai. Our commitment to security, reliability, and customer satisfaction.",
  openGraph: {
    title: "About Pack and Store - Dubai's Trusted Storage Solutions",
    description:
      "Discover why thousands trust Pack and Store for their storage needs in Dubai.",
  },
};

const stats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "50,000+", label: "Items Stored" },
  { number: "99.9%", label: "Security Uptime" },
  { number: "24/7", label: "Monitoring" },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "State-of-the-art security systems with 24/7 monitoring, biometric access, and individual unit alarms.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "We prioritize your needs with flexible contracts, transparent pricing, and exceptional service.",
  },
  {
    icon: Award,
    title: "Industry Leading",
    description:
      "Award-winning storage solutions with the highest standards of cleanliness and organization.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description:
      "Proud to serve the Dubai community with integrity, trust, and a commitment to excellence.",
  },
];

const milestones = [
  {
    year: "2015",
    title: "Founded in Dubai",
    description: "Started with a vision to revolutionize storage solutions in the UAE.",
  },
  {
    year: "2017",
    title: "Expanded Facilities",
    description: "Doubled our capacity to meet growing demand for premium storage.",
  },
  {
    year: "2019",
    title: "Tech Integration",
    description: "Launched digital access systems and online account management.",
  },
  {
    year: "2021",
    title: "Sustainability Initiative",
    description: "Implemented eco-friendly practices and solar-powered facilities.",
  },
  {
    year: "2023",
    title: "Award Recognition",
    description: "Received &apos;Best Storage Facility&apos; award from Dubai Business Excellence.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Your Trusted Storage Partner in Dubai
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Since 2015, we&apos;ve been helping thousands of customers store their belongings
              with confidence and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600">
                To provide Dubai&apos;s most secure, accessible, and affordable storage solutions
                while delivering an exceptional customer experience at every touchpoint.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value) => (
                <Card key={value.title} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Our Journey
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-gray-300" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="mb-1 text-sm font-semibold text-primary">
                      {milestone.year}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Led by Industry Experts
            </h2>
            <p className="mb-12 text-xl text-gray-600">
              Our team brings decades of experience in storage, logistics, and customer service
              to ensure your belongings are in the best hands.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Building2 className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Expert Management</h3>
                  <p className="text-sm text-gray-600">
                    Professional facility management with 20+ years of experience
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Users className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Dedicated Support</h3>
                  <p className="text-sm text-gray-600">
                    Friendly customer service team available 7 days a week
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <TrendingUp className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Continuous Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Always improving our services based on customer feedback
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Experience the Pack and Store Difference
          </h2>
          <p className="mb-8 text-xl">
            Join thousands of satisfied customers who trust us with their valuables
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
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
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