import { 
  Clock, 
  Thermometer, 
  Shield, 
  Bug, 
  DollarSign, 
  Users 
} from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Access your belongings anytime with our round-the-clock facility access",
  },
  {
    icon: Thermometer,
    title: "Climate Controlled",
    description: "Temperature and humidity controlled units to protect your valuable items",
  },
  {
    icon: Shield,
    title: "High Security",
    description: "CCTV surveillance, secure access control, and on-site security personnel",
  },
  {
    icon: Bug,
    title: "Pest-Free Environment",
    description: "Regular pest control ensures your items remain clean and protected",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates with flexible payment options to suit your budget",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced staff ready to assist with all your storage needs",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Pack & Store</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide the best storage experience in Dubai with features designed for your convenience and peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 border-muted hover:border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}