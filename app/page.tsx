import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesGrid } from "@/components/sections/FeaturesGrid"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { QuoteForm } from "@/components/sections/QuoteForm"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { LocationSection } from "@/components/sections/LocationSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <ServicesGrid />
      <QuoteForm />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
    </>
  );
}
