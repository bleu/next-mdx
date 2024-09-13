"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

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
        "fixed top-0 left-0 right-0 py-12 px-6 md:px-12  text-lg font-medium bg-neutral-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <nav className="flex flex-1 items-center justify-between">
        <Link href="/">
          <Image src="/bleu.png" alt="bleu's logo" width={100} height={100} />
        </Link>
        <div className="space-x-8">
          <Link href="#/services">About</Link>
          <Link href="#/services">Discover</Link>
        </div>
        <Link href="#/">Book a call</Link>
      </nav>
    </header>
  )
}
