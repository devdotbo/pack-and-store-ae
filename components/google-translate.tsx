"use client"

import { useEffect } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (config: {
            pageLanguage: string
            includedLanguages: string
            layout: number
            autoDisplay: boolean
          }, elementId: string): void
          InlineLayout: {
            SIMPLE: number
          }
        }
      }
    }
    googleTranslateElementInit: () => void
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = function() {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,ar,hi,ur',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        )
      }
    }
  }, [])

  const changeLanguage = (lang: string) => {
    const selectField = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (selectField) {
      selectField.value = lang
      selectField.dispatchEvent(new Event('change'))
    }
  }

  return (
    <>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden" />
      
      {/* Custom Language Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">Language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => changeLanguage('en')}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('ar')}>
            العربية (Arabic)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('hi')}>
            हिन्दी (Hindi)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('ur')}>
            اردو (Urdu)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}