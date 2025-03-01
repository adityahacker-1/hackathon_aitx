import { CheckCircle2 } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create an Account",
      description: "Register as a user or pandit with your basic information and preferences.",
    },
    {
      number: "02",
      title: "Browse Available Services",
      description: "Explore various rituals, ceremonies, and spiritual services offered by verified pandits.",
    },
    {
      number: "03",
      title: "Book Your Ritual",
      description: "Select your preferred date, time, and pandit for your virtual or in-person ritual.",
    },
    {
      number: "04",
      title: "Prepare with AI Guidance",
      description: "Receive AI-powered recommendations for ritual materials and setup instructions.",
    },
    {
      number: "05",
      title: "Participate in the Ceremony",
      description: "Join a live video session or meet your pandit in person for the ritual.",
    },
    {
      number: "06",
      title: "Continue Your Spiritual Journey",
      description: "Access educational resources and community forums to deepen your understanding.",
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">Process</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-orange-600">How Seremo Works</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A simple, streamlined process to connect you with authentic Hindu rituals and qualified pandits.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700 font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-orange-600">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{step.description}</p>
              <CheckCircle2 className="absolute top-4 right-4 h-5 w-5 text-orange-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

