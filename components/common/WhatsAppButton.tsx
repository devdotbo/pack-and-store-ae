"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappNumber = "+971557198055"
  const message = "Hello! I'm interested in your storage services."
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all hover:scale-110"
      size="icon"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}