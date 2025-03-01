import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Seremo has been a blessing for our family living abroad. We were able to perform our daughter's Namkaran ceremony with our family priest from India, despite being thousands of miles away.",
      author: "Priya Sharma",
      role: "User from USA",
      avatar: "PS",
    },
    {
      quote:
        "As a pandit, Seremo has allowed me to reach devotees worldwide. The platform is respectful of our traditions while making them accessible through technology.",
      author: "Pandit Ramesh Joshi",
      role: "Pandit from Varanasi",
      avatar: "RJ",
    },
    {
      quote:
        "The AI-powered material recommendations saved me so much time. Everything I needed for my Griha Pravesh puja was listed and I could order it all with a few clicks.",
      author: "Vikram Patel",
      role: "User from Canada",
      avatar: "VP",
    },
    {
      quote:
        "I've been able to learn about my cultural heritage through Seremo's educational resources. The recorded sessions are particularly helpful for learning Sanskrit mantras.",
      author: "Ananya Desai",
      role: "Student from Australia",
      avatar: "AD",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-orange-600">
              What Our Community Says
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from users and pandits who have experienced the power of Seremo in preserving and sharing Hindu
              traditions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-orange-100 bg-orange-50">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`}
                      alt={testimonial.author}
                    />
                    <AvatarFallback className="bg-orange-200 text-orange-700">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-orange-300 opacity-40" />
                  <p className="pl-4 text-sm text-gray-600 italic">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

