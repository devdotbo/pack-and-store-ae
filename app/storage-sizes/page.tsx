import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Package,
  Home,
  Building,
  Warehouse,
  Check,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Key,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Storage Sizes & Pricing - Find Your Perfect Storage Unit in Dubai",
  description:
    "Compare storage unit sizes and pricing at Pack and Store Dubai. From small lockers to large warehouse spaces. Transparent pricing with no hidden fees.",
  openGraph: {
    title: "Storage Unit Sizes & Pricing - Pack and Store Dubai",
    description:
      "Find the perfect storage unit size for your needs. Transparent pricing starting from AED 299/month.",
  },
};

const storageUnits = [
  {
    id: "locker",
    name: "Storage Locker",
    size: "1m² (10 sq ft)",
    icon: Package,
    price: "299",
    popularFor: "Documents, seasonal items, small boxes",
    features: [
      "Perfect for students",
      "Fits 5-10 boxes",
      "Ground level access",
      "24/7 access available",
    ],
    capacity: "Up to 20 boxes",
    highlighted: false,
  },
  {
    id: "small",
    name: "Small Unit",
    size: "3m² (30 sq ft)",
    icon: Home,
    price: "599",
    popularFor: "Studio apartment overflow, business inventory",
    features: [
      "Fits studio contents",
      "Ideal for businesses",
      "Climate controlled",
      "Free moving trolley",
    ],
    capacity: "Studio apartment",
    highlighted: false,
  },
  {
    id: "medium",
    name: "Medium Unit",
    size: "5m² (50 sq ft)",
    icon: Building,
    price: "899",
    popularFor: "1-2 bedroom apartment, office equipment",
    features: [
      "Most popular size",
      "Fits 1-bed apartment",
      "Drive-up access",
      "Free shelving included",
    ],
    capacity: "1-bedroom apartment",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "large",
    name: "Large Unit",
    size: "10m² (100 sq ft)",
    icon: Warehouse,
    price: "1,599",
    popularFor: "2-3 bedroom home, business storage",
    features: [
      "Spacious storage",
      "Fits 2-bed apartment",
      "Vehicle storage option",
      "Loading dock access",
    ],
    capacity: "2-bedroom apartment",
    highlighted: false,
  },
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "Insurance Available",
    description: "Comprehensive coverage options for your stored items",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "Month-to-month contracts with no long-term commitment",
  },
  {
    icon: Key,
    title: "Your Lock, Your Key",
    description: "You control access with your own lock and key",
  },
  {
    icon: Sparkles,
    title: "Clean & Maintained",
    description: "Regular cleaning and pest control for all units",
  },
];

const faqs = [
  {
    question: "What's included in the price?",
    answer:
      "All prices include 24/7 security, climate control, pest control, and basic insurance. There are no hidden fees or setup costs.",
  },
  {
    question: "Can I upgrade or downsize my unit?",
    answer:
      "Yes! You can change your unit size anytime based on availability. We'll help you move to the new unit at no extra charge.",
  },
  {
    question: "How do I know what size I need?",
    answer:
      "Our storage experts can help you choose the right size. As a general rule: Locker = 5-10 boxes, Small = Studio apartment, Medium = 1-bedroom, Large = 2-3 bedrooms.",
  },
  {
    question: "Are there any discounts available?",
    answer:
      "Yes! We offer discounts for long-term storage (6+ months), students, and corporate accounts. Contact us for current promotions.",
  },
];

export default function StorageSizesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-600">
              <Sparkles className="mr-1 h-3 w-3" />
              First Month 50% OFF
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Storage Sizes & Transparent Pricing
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Find the perfect storage unit for your needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Storage Units Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {storageUnits.map((unit) => (
              <Card
                key={unit.id}
                className={`relative overflow-hidden border-2 transition-all hover:shadow-xl ${
                  unit.highlighted
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                {unit.badge && (
                  <div className="absolute right-0 top-0">
                    <Badge className="rounded-bl-lg rounded-br-none rounded-tl-none rounded-tr-lg bg-gradient-to-r from-blue-600 to-purple-600">
                      {unit.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-full bg-blue-100 p-3">
                    <unit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">{unit.name}</CardTitle>
                  <p className="text-sm text-gray-600">{unit.size}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">AED {unit.price}</span>
                      <span className="ml-2 text-gray-600">/month</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{unit.capacity}</p>
                  </div>
                  <div className="mb-6 space-y-2">
                    {unit.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mb-6 text-sm text-gray-600">
                    <span className="font-semibold">Popular for:</span> {unit.popularFor}
                  </p>
                  <Button className="w-full" asChild>
                    <Link href={`/contact?unit=${unit.id}`}>
                      Reserve This Unit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Every Unit Includes
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {additionalFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mb-4 inline-flex rounded-full bg-blue-100 p-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl">
            <CardContent className="p-8">
              <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
                Not Sure What Size You Need?
              </h2>
              <p className="mb-8 text-center text-lg text-gray-600">
                Our storage experts are here to help you find the perfect fit
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-3 text-4xl font-bold text-blue-600">5-10</div>
                  <div className="text-sm text-gray-600">Boxes = Storage Locker</div>
                </div>
                <div className="text-center">
                  <div className="mb-3 text-4xl font-bold text-purple-600">Studio/1BR</div>
                  <div className="text-sm text-gray-600">Apartment = Small/Medium Unit</div>
                </div>
                <div className="text-center">
                  <div className="mb-3 text-4xl font-bold text-green-600">2-3BR</div>
                  <div className="text-sm text-gray-600">Home = Large Unit</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" variant="default" asChild>
                  <Link href="/contact">
                    Get Expert Advice
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Pricing FAQs
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-lg font-semibold">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Reserve your unit today and get 50% off your first month!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Reserve a Unit
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