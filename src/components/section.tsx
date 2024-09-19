import { cn } from "@/lib/utils"
import type React from "react"

interface SectionProps {
  children: React.ReactNode
  paddingY?: string
  className?: string
}

const Section = ({
  children,
  paddingY = "py-28",
  className = ""
}: SectionProps) => {
  return (
    <section className={cn(paddingY, className.trim())}>{children}</section>
  )
}

export default Section
