import Link from "next/link"
import { Home, Building, Globe, Car, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Home,
    title: "Personal Storage",
    description: "Safe and secure storage for your household items, furniture, and personal belongings",
    href: "/personal-storage",
    imagePlaceholder: "Organized personal storage unit with household items",
    features: ["Various unit sizes", "Month-to-month rental", "Easy access"],
  },
  {
    icon: Building,
    title: "Business Storage",
    description: "Flexible warehouse solutions for inventory, equipment, and business documents",
    href: "/business-storage",
    imagePlaceholder: "Business inventory in warehouse setting",
    features: ["Scalable space", "Bulk storage", "Logistics support"],
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Worldwide shipping and freight forwarding services with real-time tracking",
    href: "/document-storage",
    imagePlaceholder: "Global shipping network with planes and cargo containers",
    features: ["Air & sea freight", "Door-to-door delivery", "Custom clearance"],
  },
  {
    icon: Car,
    title: "Vehicle Storage",
    description: "Indoor and outdoor storage options for cars, motorcycles, and boats",
    href: "/vehicle-storage",
    imagePlaceholder: "Indoor vehicle storage facility with cars",
    features: ["Covered parking", "24/7 security", "Battery maintenance"],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Storage <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whatever your storage needs, we have the perfect solution for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <p className="text-sm text-center text-muted-foreground/60 font-medium">
                    {service.imagePlaceholder}
                  </p>
                </div>
                <div className="absolute top-4 left-4 z-20">
                  <div className="p-2 rounded-lg bg-primary/90 text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}