import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Car,
  Truck,
  Shield,
  Key,
  CheckCircle2,
  Lock,
  Camera,
  Sun,
  Wind,
  Battery,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vehicle Storage Dubai - Cars, Motorcycles & Boats | Pack and Store",
  description:
    "Secure indoor and outdoor vehicle storage in Dubai. Climate-controlled options for cars, motorcycles, boats, and RVs. 24/7 access with battery maintenance services.",
  openGraph: {
    title: "Vehicle Storage Solutions - Pack and Store Dubai",
    description:
      "Professional vehicle storage with 24/7 security, battery maintenance, and climate control options.",
  },
};

const vehicleTypes = [
  {
    icon: Car,
    title: "Cars & SUVs",
    description: "Indoor and covered parking for all vehicle sizes",
    features: [
      "Climate-controlled options",
      "Battery tender service",
      "Regular start-ups",
      "Tire pressure checks",
    ],
    pricing: "From AED 599/month",
  },
  {
    icon: Truck,
    title: "Trucks & Vans",
    description: "Spacious storage for commercial and personal vehicles",
    features: [
      "High clearance bays",
      "Easy access loading",
      "24/7 access available",
      "Security monitoring",
    ],
    pricing: "From AED 799/month",
  },
  {
    icon: Wind,
    title: "Motorcycles",
    description: "Dedicated motorcycle storage with maintenance options",
    features: [
      "Individual bays",
      "Battery maintenance",
      "Cover included",
      "Monthly inspection",
    ],
    pricing: "From AED 299/month",
  },
  {
    icon: Sun,
    title: "Boats & Jet Skis",
    description: "Secure storage for marine vehicles and watercraft",
    features: [
      "Trailer parking",
      "Engine maintenance",
      "Hull cleaning service",
      "Winterization available",
    ],
    pricing: "From AED 899/month",
  },
];

const features = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "CCTV monitoring, gated access, and on-site security personnel",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Personal access codes and scheduled entry times",
  },
  {
    icon: Battery,
    title: "Battery Care",
    description: "Trickle charging and regular maintenance to keep batteries healthy",
  },
  {
    icon: Camera,
    title: "Live Monitoring",
    description: "Check on your vehicle anytime with our camera system",
  },
  {
    icon: Sun,
    title: "Weather Protection",
    description: "Covered and indoor options to protect from Dubai's heat",
  },
  {
    icon: Key,
    title: "Valet Service",
    description: "Optional vehicle delivery and pickup services",
  },
];

const storageOptions = [
  {
    name: "Outdoor Covered",
    description: "Protected from sun and rain",
    features: [
      "Shade coverage",
      "24/7 security",
      "Monthly inspection",
      "Basic maintenance",
    ],
    ideal: "Short-term storage, daily drivers",
    price: "AED 499",
  },
  {
    name: "Indoor Standard",
    description: "Climate-controlled environment",
    features: [
      "Indoor storage",
      "Temperature control",
      "Battery maintenance",
      "Dust protection",
    ],
    ideal: "Classic cars, long-term storage",
    price: "AED 899",
    popular: true,
  },
  {
    name: "Indoor Premium",
    description: "Ultimate protection and care",
    features: [
      "Private bay",
      "Climate control",
      "Weekly inspection",
      "Full maintenance package",
    ],
    ideal: "Luxury and exotic vehicles",
    price: "AED 1,499",
  },
];

export default function VehicleStoragePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="default">
              <Shield className="mr-1 h-3 w-3" />
              Fully Insured & Secure
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Professional Vehicle Storage in Dubai
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Protect your vehicles with our secure, climate-controlled storage facilities. 
              From daily drivers to classic collections, we keep your vehicles in perfect condition.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/#quote">
                  Get Storage Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+971557198055">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Storage Solutions for Every Vehicle
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {vehicleTypes.map((type) => (
              <Card key={type.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-primary">
                      {type.pricing}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Options */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Choose Your Storage Level
            </h2>
            <p className="text-lg text-muted-foreground">
              From basic protection to premium care, we have the right solution for your vehicle
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {storageOptions.map((option) => (
              <Card
                key={option.name}
                className={`relative ${
                  option.popular
                    ? "border-primary shadow-lg scale-105"
                    : "border-gray-200"
                }`}
              >
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{option.name}</CardTitle>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">
                      {option.price}
                      <span className="text-base font-normal text-muted-foreground">
                        /month
                      </span>
                    </p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-6 text-sm text-muted-foreground">
                    <span className="font-semibold">Ideal for:</span> {option.ideal}
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/#quote">Reserve Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Why Choose Our Vehicle Storage?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Simple Storage Process
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description: "Call or fill out our online form",
                },
                {
                  step: "2",
                  title: "Vehicle Inspection",
                  description: "We document your vehicle's condition",
                },
                {
                  step: "3",
                  title: "Secure Storage",
                  description: "Your vehicle is safely stored",
                },
                {
                  step: "4",
                  title: "Easy Access",
                  description: "Retrieve your vehicle anytime",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How often will you start my vehicle?",
                  a: "We start vehicles weekly for indoor storage and bi-weekly for covered storage to keep engines and batteries in good condition.",
                },
                {
                  q: "Can I access my vehicle anytime?",
                  a: "Yes, with our 24/7 access option. Standard access is available during business hours, 7 days a week.",
                },
                {
                  q: "Is insurance included?",
                  a: "Basic liability coverage is included. We recommend maintaining your comprehensive insurance for full protection.",
                },
                {
                  q: "Do you offer vehicle transportation?",
                  a: "Yes, we provide pickup and delivery services throughout Dubai for an additional fee.",
                },
              ].map((faq) => (
                <Card key={faq.q}>
                  <CardContent className="pt-6">
                    <h3 className="mb-3 text-lg font-semibold">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Secure Your Vehicle Today
          </h2>
          <p className="mb-8 text-xl">
            Get 20% off your first month of vehicle storage
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#quote">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/contact">Schedule Inspection</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}