"use client"

import { useState } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, DollarSign, Search, Users, Video } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock data for clients
const clients = [
  {
    id: "1",
    name: "Rahul Patel",
    location: "San Francisco, USA",
    bookings: 2,
    image: "RP",
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Toronto, Canada",
    bookings: 1,
    image: "PS",
  },
  {
    id: "3",
    name: "Vikram Singh",
    location: "London, UK",
    bookings: 1,
    image: "VS",
  },
  {
    id: "4",
    name: "Ananya Desai",
    location: "Sydney, Australia",
    bookings: 0,
    image: "AD",
  },
]

// Mock data for upcoming bookings
const upcomingBookings = [
  {
    id: "1",
    ritual: "Griha Pravesh",
    date: "March 15, 2025",
    time: "10:00 AM",
    client: "Rahul Patel",
    type: "Virtual",
    status: "Confirmed",
    payment: "Paid",
  },
  {
    id: "2",
    ritual: "Satyanarayan Katha",
    date: "April 2, 2025",
    time: "5:00 PM",
    client: "Priya Sharma",
    type: "Virtual",
    status: "Pending",
    payment: "Pending",
  },
  {
    id: "3",
    ritual: "Namkaran",
    date: "April 10, 2025",
    time: "11:00 AM",
    client: "Vikram Singh",
    type: "Virtual",
    status: "Confirmed",
    payment: "Paid",
  },
]

export default function PanditDashboard() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-6 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-orange-600">Welcome, {user?.name}</h1>
        <p className="text-muted-foreground">Manage your bookings, clients, and ritual services.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+50% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">+2 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Rituals</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next: Griha Pravesh on Mar 15</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$450</div>
            <p className="text-xs text-muted-foreground">+$150 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
          <TabsTrigger value="clients">My Clients</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4">
            {upcomingBookings.map((booking) => (
              <Card key={booking.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>{booking.ritual}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant={booking.status === "Confirmed" ? "default" : "outline"}>{booking.status}</Badge>
                      <Badge
                        variant="outline"
                        className={
                          booking.payment === "Paid"
                            ? "border-green-500 bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                            : ""
                        }
                      >
                        {booking.payment}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>Client: {booking.client}</CardDescription>
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
                    Contact Client
                  </Button>
                  <Button size="sm">Start Ritual</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="clients" className="space-y-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search clients by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredClients.map((client) => (
              <Card key={client.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/placeholder.svg?height=48&width=48&text=${client.image}`} alt={client.name} />
                      <AvatarFallback className="bg-orange-200 text-orange-700">{client.image}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{client.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <CardDescription>
                          {client.bookings} {client.bookings === 1 ? "booking" : "bookings"}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{client.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" size="sm" className="mr-2">
                    View Profile
                  </Button>
                  <Button size="sm">Contact</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

