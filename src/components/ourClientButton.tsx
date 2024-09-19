import type React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

interface OurClientButtonProps {
  title: string
  description: string
  href: string
}

const OurClientButton: React.FC<OurClientButtonProps> = ({
  title,
  description,
  href
}) => {
  return (
    <button
      className="group border border-black flex flex-col p-10 pt-5 pr-5 rounded-3xl"
      type="button"
    >
      <div className="w-24 h-24 bg-black rounded-lg self-end" />
      <h3 className="text-5xl font-medium">{title}</h3>
      <p className="mt-16 text-start invisible max-w-[75%] text-lg group-hover:visible">
        {description}
      </p>
      <Link
        href={href}
        className="text-lg mt-6 invisible  group-hover:visible flex items-center"
      >
        <span>Case study</span>
        <ArrowRightIcon className="ml-1 mt-1" />
      </Link>
    </button>
  )
}

export default OurClientButton
