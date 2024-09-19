import HeroSection from "@/components/heroSection"
import OurClientButton from "@/components/ourClientButton"

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
        subtitle="We specialize in creating customized software solutions to help
            businesses thrive in today's digital landscape"
      />
      <div className="mt-64 py-32 px-12 bg-primary/20 rounded-3xl">
        <span>Our clients</span>
        <h2 className=" text-justifys mt-8 mb-28 ml-24 text-5xl ">
          These are some of the companies <br /> that trusted us to simplify
          blockchain <br />
          and deliver long-lasting value.
        </h2>
        <div className="grid grid-cols-2 gap-4 px-24">
          {clientData.map((item) => (
            <OurClientButton key={item.description} {...item} />
          ))}
        </div>
      </div>
    </main>
  )
}
