"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Personal Storage",
    href: "/personal-storage",
    description: "Secure storage solutions for your personal belongings",
  },
  {
    title: "Business Storage",
    href: "/business-storage",
    description: "Flexible storage options for businesses of all sizes",
  },
  {
    title: "Document Storage",
    href: "/document-storage",
    description: "Secure document archiving with access control",
  },
  {
    title: "Moving Services",
    href: "/moving-services",
    description: "Professional packing and moving services",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">Pack & Store</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/storage-sizes" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  Storage Sizes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            className="hidden md:flex items-center gap-2"
            asChild
          >
            <a href="tel:+971557198055">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button size="sm" asChild className="hidden md:inline-flex">
            <Link href="/#quote">Get Free Quote</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-6">
                <Link 
                  href="/" 
                  className="text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block pl-4 text-sm hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link 
                  href="/storage-sizes" 
                  className="text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Storage Sizes
                </Link>
                <Link 
                  href="/about" 
                  className="text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4 space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                  >
                    <a href="tel:+971557198055">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/#quote">Get Free Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}