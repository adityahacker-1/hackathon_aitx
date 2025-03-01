import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-orange-600">
                Connect with Hindu Rituals Virtually
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl">
                Seremo bridges tradition and technology, connecting you with qualified pandits for authentic Hindu
                rituals, ceremonies, and spiritual guidance—anytime, anywhere.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth/register/user">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Register as User
                </Button>
              </Link>
              <Link href="/auth/register/pandit">
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  Register as Pandit
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Hindu ritual being performed virtually"
                width={500}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

