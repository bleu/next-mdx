import HeroSection from "@/components/heroSection"
import OurClientButton from "@/components/ourClientButton"
import Section from "@/components/section"
import TestimonialsCard from "@/components/testimonialsCard"

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

export default function Home() {
  return (
    <main className="pt-56">
      <HeroSection
        title="Nurturing the potential of projects and individuals in Web3"
        subtitle="We're here to create sustainable, long-term value in the Web3 space, and work to foster its growth in an ethical and thoughtful manner."
      />
      <Section className="py-32 px-12 bg-primary/20 rounded-3xl mt-64">
        <span className="text-gray-600 italic underline">Our clients</span>
        <h2 className=" text-justify mt-8 mb-28 ml-24 text-5xl ">
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
          {/* TODO: UPDATE LOGOS WITH COMPANY'S LOGO */}
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
    </main>
  )
}
