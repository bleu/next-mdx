import type React from "react"

interface HeroSectionProps {
  title: string
  subtitle: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-1 px-28">
      <div className="space-y-9 flex flex-col flex-1">
        <h1 className="text-6xl">{title}</h1>
        <p className="text-2xl">{subtitle}</p>
        <div className="flex gap-3 flex-1">
          <button
            type="button"
            className="py-4 px-10 rounded-lg text-xl bg-secondary text-black hover:bg-secondary/80"
          >
            Build with us
          </button>
          <button
            type="button"
            className="py-4 px-10 rounded-lg text-xl bg-primary text-white hover:bg-primary/80"
          >
            Join our team
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-52 h-52 bg-primary" />
      </div>
    </div>
  )
}

export default HeroSection
