export default function Home() {
  return (
    <main className="pt-56">
      <div className="flex flex-1 px-28">
        <div className="space-y-9 flex flex-col flex-1">
          <h1 id="first-section" className="text-6xl ">
            Nurturing the potential of projects and individuals in Web3
          </h1>
          <p className="text-2xl">
            We specialize in creating customized software solutions to help
            businesses thrive in today's digital landscape
          </p>
          <div className="flex gap-3 flex-1">
            <button
              type="button"
              className="py-5 px-10 rounded-lg text-xl bg-secondary-400 text-black hover:bg-hover-secondary"
            >
              Build with us
            </button>
            <button
              type="button"
              className="py-5 px-10 rounded-lg text-xl bg-primary-500 text-white hover:bg-hover-primary"
            >
              Join our team
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-52 h-52 bg-primary-600" />
        </div>
      </div>
    </main>
  )
}
