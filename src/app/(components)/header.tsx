"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { CaretDownIcon } from "@radix-ui/react-icons"

const aboutItems = [
  { title: "Our Clients", href: "/about/clients" },
  { title: "What we do", href: "/about/services" },
  { title: "How we do things", href: "/about/culture" }
]

const discoverItems = [
  { title: "Blog", href: "/blog" },
  { title: "Case studies", href: "/case-studies" }
]

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const scrollThreshold = 100

      if (window.scrollY > scrollThreshold) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 px-6 md:px-12 text-lg font-medium transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <nav className="flex flex-1 items-center justify-between h-24 px-12">
        <Link href="/">
          <Image
            src="/bleu-logo.svg"
            alt="bleu's logo"
            width={100}
            height={16}
            priority
          />
        </Link>
        <NavigationMenu.Root className="relative">
          <NavigationMenu.List className="flex space-x-8">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-lg font-medium hover:text-gray-600 transition-colors">
                About
                <CaretDownIcon className="inline-block w-4 h-4 ml-1" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-full left-0 w-48 bg-white shadow-md rounded-md py-2 mt-1">
                {aboutItems.map((item) => (
                  <NavigationMenu.Link key={item.title} asChild>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenu.Link>
                ))}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-lg font-medium hover:text-gray-600 transition-colors">
                Discover
                <CaretDownIcon className="inline-block w-4 h-4 ml-1" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-full left-0 w-48 bg-white shadow-md rounded-md py-2 mt-1">
                {discoverItems.map((item) => (
                  <NavigationMenu.Link key={item.title} asChild>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenu.Link>
                ))}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <Link
          href="#/"
          className="text-lg font-medium hover:text-gray-600 transition-colors"
        >
          Book a call
        </Link>
      </nav>
    </header>
  )
}
