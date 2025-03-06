"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  Home,
  Menu,
  MessageCircle,
  Search,
  Settings,
  User,
  Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <span className="text-xl font-bold">Seremo</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Calendar className="h-5 w-5" />
                    My Rituals
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Video className="h-5 w-5" />
                    Book a Ritual
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Community
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5" />
                    Profile
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold hidden md:inline">Seremo</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link href="#" className="text-sm font-medium flex items-center gap-1 text-orange-600">
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-orange-600 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                My Rituals
              </Link>
              <Link
                href="#"
                className="text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-orange-600 transition-colors"
              >
                <Video className="h-4 w-4" />
                Book a Ritual
              </Link>
              <Link
                href="#"
                className="text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-orange-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Community
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-64 pl-8 bg-background" />
            </form>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-600"></span>
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Avatar"
                className="rounded-full"
                height="32"
                width="32"
              />
              <span className="sr-only">Profile</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Welcome, Arjun</h1>
              <p className="text-muted-foreground">Your spiritual journey continues. Here's what's happening today.</p>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 w-full md:w-auto">Book a New Ritual</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Rituals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Next: Ganesh Puja (Tomorrow, 9:00 AM)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Completed Rituals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 in the last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Favorite Pandits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">Most recent: Pandit Sharma</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Festivals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Next: Navratri (in 15 days)</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Tabs defaultValue="upcoming">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming Rituals</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                </TabsList>
                <div className="hidden md:flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    View Calendar
                  </Button>
                  <Button variant="outline" size="sm">
                    Filter
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <TabsContent value="upcoming" className="mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                          Tomorrow
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Clock className="h-4 w-4" />
                          <span className="sr-only">Set Reminder</span>
                        </Button>
                      </div>
                      <CardTitle className="mt-2">Ganesh Puja</CardTitle>
                      <CardDescription>With Pandit Sharma</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Mar 2, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>9:00 AM</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Materials needed:</span> Flowers, Modak, Red cloth
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Join Session
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                          This Week
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Clock className="h-4 w-4" />
                          <span className="sr-only">Set Reminder</span>
                        </Button>
                      </div>
                      <CardTitle className="mt-2">Satyanarayan Katha</CardTitle>
                      <CardDescription>With Pandit Mishra</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Mar 5, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>6:00 PM</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Materials needed:</span> Banana leaves, Fruits, Yellow cloth
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Join Session
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                          Next Week
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Clock className="h-4 w-4" />
                          <span className="sr-only">Set Reminder</span>
                        </Button>
                      </div>
                      <CardTitle className="mt-2">Griha Pravesh</CardTitle>
                      <CardDescription>With Pandit Joshi</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Mar 10, 2025</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>10:30 AM</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Materials needed:</span> Coconut, Rice, Turmeric, New pot
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Join Session
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="recommended" className="mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Recommended
                        </div>
                      </div>
                      <CardTitle className="mt-2">Lakshmi Puja</CardTitle>
                      <CardDescription>For prosperity and wealth</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Based on your previous rituals, we recommend performing a Lakshmi Puja this month for continued
                        prosperity.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Book Now</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Recommended
                        </div>
                      </div>
                      <CardTitle className="mt-2">Navratri Special Puja</CardTitle>
                      <CardDescription>Upcoming festival celebration</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Navratri is approaching in 15 days. Book your special puja session with our experienced pandits.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Book Now</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Recommended
                        </div>
                      </div>
                      <CardTitle className="mt-2">Meditation Session</CardTitle>
                      <CardDescription>For mental peace and clarity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Enhance your spiritual journey with guided meditation sessions by our experienced gurus.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Book Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="recent" className="mt-4">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                        <Video className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Completed: Saraswati Puja</p>
                        <p className="text-sm text-muted-foreground">Feb 25, 2025 with Pandit Sharma</p>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">5 days ago</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Joined Community Discussion</p>
                        <p className="text-sm text-muted-foreground">Topic: Significance of Mantras in Daily Life</p>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">1 week ago</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Booked: Griha Pravesh Ceremony</p>
                        <p className="text-sm text-muted-foreground">Scheduled for Mar 10, 2025</p>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">2 weeks ago</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>AI Ritual Assistant</CardTitle>
                <CardDescription>Get personalized guidance for your rituals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm">
                    <span className="font-medium">Tip for your upcoming Ganesh Puja:</span> Place the Ganesh idol facing
                    East or West for optimal energy flow. Prepare modak (sweet dumplings) as they are Lord Ganesha's
                    favorite offering.
                  </p>
                </div>
                <div className="mt-4">
                  <Input placeholder="Ask about ritual procedures, materials, or significance..." />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Ask AI Assistant</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Hindu Festivals</CardTitle>
                <CardDescription>Plan your rituals in advance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Navratri</p>
                        <p className="text-xs text-muted-foreground">Mar 15 - Mar 24, 2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Book Ritual
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Ram Navami</p>
                        <p className="text-xs text-muted-foreground">Apr 5, 2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Book Ritual
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Akshaya Tritiya</p>
                        <p className="text-xs text-muted-foreground">May 10, 2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Book Ritual
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Full Calendar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

