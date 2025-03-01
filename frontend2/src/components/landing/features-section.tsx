import { Video, Calendar, MapPin, ShoppingBag, Users, BookOpen, MessageCircle, Shield } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-orange-500" />,
      title: "Virtual Rituals",
      description:
        "Participate in live video sessions with pandits for ceremonies such as pujas, havans, and samskaras.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-orange-500" />,
      title: "Auspicious Scheduling",
      description: "Book rituals based on auspicious dates and muhurats with our integrated calendar system.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-orange-500" />,
      title: "Local Services",
      description: "Find and book nearby pandits for in-person ceremonies with geolocation-based recommendations.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-orange-500" />,
      title: "Material Assistance",
      description: "Get AI-generated checklists for ritual materials with convenient purchase links.",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "Verified Pandits",
      description: "Access a network of verified and renowned pandits across different regions and traditions.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-orange-500" />,
      title: "Educational Resources",
      description: "Learn about the significance and process of rituals with tutorials and recorded sessions.",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-orange-500" />,
      title: "Community Forums",
      description: "Connect with others to discuss Hindu traditions, share stories, and participate in events.",
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      title: "Authentic Practices",
      description: "Ensure cultural authenticity with guidance from verified pandits and cultural experts.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-orange-600">
              Preserving Tradition in the Digital Age
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Seremo offers a comprehensive suite of features designed to make Hindu rituals accessible, authentic, and
              meaningful.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:shadow-md"
            >
              {feature.icon}
              <h3 className="text-xl font-bold text-orange-600">{feature.title}</h3>
              <p className="text-sm text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

