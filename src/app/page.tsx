export default function Home() {
  return (
    <main className="pt-56">
      <div className="flex flex-1 px-28">
        <div className="space-y-9 flex flex-col flex-1">
          {/* <Sections /> */}
          <h1 id="first-section" className="text-5xl ">
            Nurturing the potential of projects and individuals in Web3
          </h1>
          <p className="text-xl">
            We specialize in creating customized software solutions to help
            businesses thrive in today's digital landscape
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              className="-w p-4 rounded-md bg-secondary-200"
            >
              Build with us
            </button>
            <button type="button" className=" p-4 rounded-md bg-primary-200">
              Join our team
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-52 h-52 bg-primary-600" />
        </div>
      </div>
      <div className="mt-96">fake content</div>
      <div className="mt-96">fake content</div>
      <div className="mt-96">fake content</div>
      <div className="mt-96">fake content</div>
      <div className="mt-96">fake content</div>
    </main>
  )
}
