import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Shield,
  Camera,
  Thermometer,
  Lock,
  Truck,
  Clock,
  Wifi,
  Car,
  Package,
  ArrowRight,
  Play,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facility Tour - State-of-the-Art Storage Facility in Dubai",
  description:
    "Take a virtual tour of Pack and Store's modern storage facility in Dubai. See our security features, climate control, and convenient amenities.",
  openGraph: {
    title: "Tour Our Storage Facility - Pack and Store Dubai",
    description:
      "Discover Dubai's most secure and modern storage facility with 24/7 access and climate control.",
  },
};

const facilityFeatures = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "CCTV monitoring, security guards, and individual unit alarms",
    details: [
      "100+ HD security cameras",
      "On-site security personnel",
      "Motion detection systems",
      "Perimeter fencing",
    ],
  },
  {
    icon: Thermometer,
    title: "Climate Controlled",
    description: "Maintained at optimal temperature and humidity levels",
    details: [
      "22-25°C year-round",
      "50% humidity control",
      "Air filtration system",
      "Regular monitoring",
    ],
  },
  {
    icon: Lock,
    title: "Secure Access",
    description: "Biometric entry and personalized access codes",
    details: [
      "Fingerprint scanners",
      "Unique PIN codes",
      "Access logs maintained",
      "Visitor management",
    ],
  },
  {
    icon: Truck,
    title: "Easy Loading",
    description: "Wide corridors and loading docks for convenience",
    details: [
      "Drive-up access",
      "Loading bay areas",
      "Free trolleys & carts",
      "Elevator access",
    ],
  },
];

const amenities = [
  { icon: Wifi, name: "Free Wi-Fi", description: "Stay connected while you pack" },
  { icon: Car, name: "Free Parking", description: "Ample parking for all vehicles" },
  { icon: Package, name: "Packing Supplies", description: "Boxes and materials on-site" },
  { icon: Clock, name: "Extended Hours", description: "7 AM - 9 PM access daily" },
];

const galleryImages = [
  {
    title: "Security Control Room",
    description: "24/7 monitoring station",
    aspectRatio: "16/9",
  },
  {
    title: "Climate Controlled Units",
    description: "Temperature regulated storage",
    aspectRatio: "16/9",
  },
  {
    title: "Wide Corridors",
    description: "Easy navigation with carts",
    aspectRatio: "16/9",
  },
  {
    title: "Loading Dock",
    description: "Convenient vehicle access",
    aspectRatio: "16/9",
  },
  {
    title: "Reception Area",
    description: "Friendly customer service",
    aspectRatio: "16/9",
  },
  {
    title: "Secure Entry",
    description: "Biometric access control",
    aspectRatio: "16/9",
  },
];

export default function FacilityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-green-500 text-white hover:bg-green-600">
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Award-Winning Facility
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Tour Our State-of-the-Art Storage Facility
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Experience Dubai&apos;s most secure and modern storage facility with cutting-edge
              technology and premium amenities.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <Play className="mr-2 h-5 w-5" />
                Schedule In-Person Tour
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl overflow-hidden border-0 shadow-xl">
            <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="h-20 w-20 rounded-full bg-white/90 text-blue-600 shadow-lg hover:bg-white"
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-black/80 text-white">
                  <Camera className="mr-1 h-3 w-3" />
                  360° Virtual Tour
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Facility Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {facilityFeatures.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-blue-100 to-purple-100 p-3">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="mb-4 text-gray-600">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Facility Gallery
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <Card key={image.title} className="group overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="mx-auto mb-2 h-12 w-12 text-blue-600/50" />
                      <p className="text-sm text-gray-600">Gallery Image {index + 1}</p>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Premium Amenities
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="text-center">
                <div className="mb-4 inline-flex rounded-full bg-blue-100 p-4">
                  <amenity.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{amenity.name}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">
                    Conveniently Located in Dubai
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-600">
                          123 Storage Road, Al Qusais Industrial Area
                          <br />
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                      <div>
                        <p className="font-semibold">Contact</p>
                        <p className="text-gray-600">
                          +971 4 123 4567
                          <br />
                          info@packandstore.ae
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                      <div>
                        <p className="font-semibold">Access Hours</p>
                        <p className="text-gray-600">
                          Daily: 7:00 AM - 9:00 PM
                          <br />
                          Office: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="https://maps.google.com" target="_blank">
                        Get Directions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative min-h-[400px] bg-gradient-to-br from-blue-200 to-purple-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-blue-600/50" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            See It to Believe It
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Schedule a personal tour and experience our facility firsthand
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Book a Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/storage-sizes">View Storage Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}