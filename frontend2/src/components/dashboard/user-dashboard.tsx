"use client"

import { useState } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Search, Star, Video } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock data for pandits
const pandits = [
  {
    id: "1",
    name: "Pandit Ramesh Sharma",
    location: "New Delhi, India",
    tradition: "North Indian",
    experience: "20+ years",
    rating: 4.9,
    specialties: ["Griha Pravesh", "Vivah", "Satyanarayan Katha"],
    availability: "Available for virtual rituals",
    image: "RS",
  },
  {
    id: "2",
    name: "Pandit Venkatesh Iyer",
    location: "Bangalore, India",
    tradition: "South Indian",
    experience: "15+ years",
    rating: 4.8,
    specialties: ["Upanayana", "Griha Pravesh", "Ayushya Homam"],
    availability: "Available for virtual rituals",
    image: "VI",
  },
  {
    id: "3",
    name: "Pandit Suresh Mishra",
    location: "New Jersey, USA",
    tradition: "North Indian",
    experience: "10+ years",
    rating: 4.7,
    specialties: ["Vivah", "Namkaran", "Satyanarayan Katha"],
    availability: "Available for in-person and virtual rituals",
    image: "SM",
  },
  {
    id: "4",
    name: "Pandit Krishnan Iyengar",
    location: "Chennai, India",
    tradition: "South Indian",
    experience: "25+ years",
    rating: 5.0,
    specialties: ["Gruhapravesam", "Upanayanam", "Seemantham"],
    availability: "Available for virtual rituals",
    image: "KI",
  },
]

// Mock data for upcoming bookings
const upcomingBookings = [
  {
    id: "1",
    ritual: "Griha Pravesh",
    date: "March 15, 2025",
    time: "10:00 AM",
    pandit: "Pandit Ramesh Sharma",
    type: "Virtual",
    status: "Confirmed",
  },
  {
    id: "2",
    ritual: "Satyanarayan Katha",
    date: "April 2, 2025",
    time: "5:00 PM",
    pandit: "Pandit Suresh Mishra",
    type: "Virtual",
    status: "Pending",
  },
]

export default function UserDashboard() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPandits = pandits.filter(
    (pandit) =>
      pandit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pandit.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pandit.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-orange-600">Welcome, {user?.name}</h1>
        <p className="text-muted-foreground">Find pandits, book rituals, and manage your spiritual journey.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">+0% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Rituals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Next: Griha Pravesh on Mar 15</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Favorite Pandits</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Save pandits for quick booking</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Rituals</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Access recordings anytime</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
          <TabsTrigger value="find-pandits">Find Pandits</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4">
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>{booking.ritual}</CardTitle>
                      <Badge variant={booking.status === "Confirmed" ? "default" : "outline"}>{booking.status}</Badge>
                    </div>
                    <CardDescription>{booking.pandit}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span>{booking.type}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="mr-2">
                      Reschedule
                    </Button>
                    <Button size="sm">Join Ritual</Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>No Upcoming Bookings</CardTitle>
                  <CardDescription>You don't have any upcoming ritual bookings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Browse our verified pandits and book your first ritual.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Find Pandits</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </TabsContent>
        <TabsContent value="find-pandits" className="space-y-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, ritual, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredPandits.map((pandit) => (
              <Card key={pandit.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/placeholder.svg?height=48&width=48&text=${pandit.image}`} alt={pandit.name} />
                      <AvatarFallback className="bg-orange-200 text-orange-700">{pandit.image}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{pandit.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <CardDescription>{pandit.location}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-medium">{pandit.rating}</span>
                        <span className="text-xs text-muted-foreground">• {pandit.experience}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Specialties</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {pandit.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Availability</p>
                      <p className="text-xs">{pandit.availability}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="mr-2">
                    View Profile
                  </Button>
                  <Button size="sm">Book Ritual</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

