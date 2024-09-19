import Image from "next/image"
import type React from "react"

interface TestimonialsCardProps {
  logo: string
  company: string
  description: string
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  logo,
  company,
  description
}) => {
  return (
    <button
      type="button"
      className="flex flex-col p-10 border rounded-3xl hover:bg-gray-50"
    >
      <Image src={logo} alt={company} width={100} height={16} />
      <h3 className="mt-12 mb-4 text-5xl font-medium">{company}</h3>
      <p className="text-lg text-start text-gray-500 leading-6">
        {description}
      </p>
    </button>
  )
}

export default TestimonialsCard
