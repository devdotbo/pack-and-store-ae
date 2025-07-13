import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Ahmed Al Rashid",
    role: "Business Owner",
    content: "Pack & Store has been instrumental in managing our inventory overflow. Their flexible space options and professional team make storage hassle-free.",
    rating: 5,
    imagePlaceholder: "Professional headshot of Middle Eastern business person in Dubai, confident smile, clean background",
  },
  {
    name: "Sarah Johnson",
    role: "Expat Professional",
    content: "Moving to Dubai was stress-free thanks to Pack & Store. They handled everything from packing to storage with utmost care and professionalism.",
    rating: 5,
    imagePlaceholder: "Professional headshot of Western female business person in Dubai, confident smile, clean background",
  },
  {
    name: "Mohammad Khan",
    role: "Restaurant Owner",
    content: "We use their business storage for our restaurant supplies. The 24/7 access and climate control keep our inventory in perfect condition.",
    rating: 5,
    imagePlaceholder: "Professional headshot of South Asian business person in Dubai, confident smile, clean background",
  },
  {
    name: "Lisa Chen",
    role: "Interior Designer",
    content: "As a designer, I need secure storage for client furniture. Pack & Store provides the perfect solution with their professional handling and spacious units.",
    rating: 5,
    imagePlaceholder: "Professional headshot of Asian female business person in Dubai, confident smile, clean background",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>
              
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-xs text-center p-2 text-muted-foreground">
                    {testimonial.imagePlaceholder.split(' ').slice(0, 3).join(' ')}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}