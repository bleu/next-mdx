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
            className="py-4 px-10 rounded-lg text-xl bg-secondary-400 text-black hover:bg-hover-secondary"
          >
            Build with us
          </button>
          <button
            type="button"
            className="py-4 px-10 rounded-lg text-xl bg-primary-500 text-white hover:bg-hover-primary"
          >
            Join our team
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-52 h-52 bg-primary-600" />
      </div>
    </div>
  )
}

export default HeroSection
