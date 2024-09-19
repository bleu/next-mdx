import HeroSection from "@/components/heroSection"
import OurClientButton from "@/components/ourClientButton"
import Section from "@/components/section"
import TestimonialsCard from "@/components/testimonialsCard"
import { cn } from "@/lib/utils"

const clientData = [
  {
    title: "Optimism",
    description:
      "Optimism is a Collective of companies, communities, and citizens working together to reward public goods and build a sustainable future for Ethereum.",
    href: "/case-study/optimism"
  },
  {
    title: "CowSwap",
    description:
      "Optimism is a Collective of companies, communities, and citizens working together to reward public goods and build a sustainable future for Ethereum.",
    href: "/case-study/optimism"
  },
  {
    title: "Perk",
    description:
      "Optimism is a Collective of companies, communities, and citizens working together to reward public goods and build a sustainable future for Ethereum.",
    href: "/case-study/optimism"
  },
  {
    title: "Optimism",
    description:
      "Optimism is a Collective of companies, communities, and citizens working together to reward public goods and build a sustainable future for Ethereum.",
    href: "/case-study/optimism"
  }
]

const commitments = [
  {
    title: "Ethical Innovation",
    description:
      "Develop ethical, sustainable, and innovative blockchain solutions that ensure long-term ecosystem health"
  },
  {
    title: "Full-Stack Expertise",
    description:
      "Offer full-stack expertise in EVM blockchains, dApp development, and DevOps, creating user-friendly and secure applications"
  },
  {
    title: "Comprehensive Support",
    description:
      "Provide comprehensive project support, from initial ideation to deployment and 24/7 maintenance"
  },
  {
    title: "Data-Driven Improvement",
    description:
      "Use data-driven insights for continuous improvement and quality assurance, with a focus on security and smooth IP transition"
  },
  {
    title: "Client-Centered Approach",
    description:
      "Take a proactive, client-centered approach that anticipates needs and fosters long-term growth"
  },
  {
    title: "Effective Communication",
    description:
      "Ensure clear communication and efficient project management to align complex technology with business goals"
  }
]

export default function Home() {
  return (
    <main className="pt-56">
      <HeroSection
        title="Nurturing the potential of projects and individuals in Web3"
        subtitle="We're here to create sustainable, long-term value in the Web3 space, and work to foster its growth in an ethical and thoughtful manner."
      />
      <Section className="py-32 px-12 bg-primary/20 rounded-3xl mt-64">
        <span className="text-gray-600 italic underline">Our clients</span>
        <h2 className=" text-start mt-8 mb-28 ml-24 text-5xl ">
          These are some of the companies <br /> that trusted us to simplify
          blockchain <br />
          and deliver long-lasting value.
        </h2>
        <div className="grid grid-cols-2 gap-4 px-24">
          {clientData.map((item) => (
            <OurClientButton key={item.description} {...item} />
          ))}
        </div>
      </Section>
      <Section className="flex flex-col px-12 gap-8">
        <span className="text-gray-600 italic underline">Testimonials</span>
        <div className="grid grid-cols-2 gap-8 px-24">
          {/* TODO: UPDATE COMPANY'S LOGO - BLEU-469 */}
          <TestimonialsCard
            logo="/bleu-logo.svg"
            company="Balancer"
            description="Their team consists of skilled data and computer science oriented individuals with the focus of shedding light on all Balancer has to offer. They have already delivered on their initial proposal and are proactively moving the needle for Balancer when it comes to improving user experience. Their team is happy to produce the deliverables outlined in this grant, and the work so far has been top notch."
          />
          <TestimonialsCard
            logo="/bleu-logo.svg"
            company="Perk Studios"
            description="Working with bleu has been incredibly productive, characterized by their clear vision and ability to anticipate our needs before we even realize them ourselves. Their speed, flexibility, and commitment to building robust, non-hacky solutions have significantly enhanced the value of our platform and given us confidence in pursuing new opportunities. The frequent check-ins and clear communication have ensured we always have a good understanding of where we're heading, allowing us to make consistent strides forward in our development."
          />
        </div>
      </Section>
      <Section className="py-32 px-12 bg-secondary/20 rounded-3xl">
        <span className="text-gray-600 italic underline">What we do</span>
        <h2 className="text-start mt-8 mb-28 ml-24 text-5xl ">
          Our commitment
        </h2>
        <div className="grid grid-cols-3 mx-24 border border-black rounded-3xl">
          {commitments.map((item, index) => (
            <div
              className={cn(
                "flex flex-col p-10 border-black",
                index % 3 !== 2 ? "border-r" : "",
                index < commitments.length - 3 ? "border-b" : ""
              )}
              key={item.title}
            >
              <h3 className="text-3xl font-medium">{item.title}</h3>
              <p className="mt-4 text-start text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
