"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Filter, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RitualBooking() {
  const [step, setStep] = useState(1)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="ml-auto flex items-center gap-4">
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Book a Ritual</h1>
            <p className="text-muted-foreground">Select a ritual type and find the perfect pandit for your ceremony.</p>
          </div>

          {step === 1 && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search for rituals..." className="w-full pl-8 bg-background" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="daily">Daily Pujas</SelectItem>
                      <SelectItem value="life">Life Events</SelectItem>
                      <SelectItem value="festivals">Festivals</SelectItem>
                      <SelectItem value="last-rites">Last Rites</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Tabs defaultValue="popular">
                <TabsList>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="daily">Daily Pujas</TabsTrigger>
                  <TabsTrigger value="life">Life Events</TabsTrigger>
                  <TabsTrigger value="festivals">Festivals</TabsTrigger>
                </TabsList>
                <TabsContent value="popular" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card
                      className="cursor-pointer hover:border-orange-500 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle>Ganesh Puja</CardTitle>
                        <CardDescription>Invoke Lord Ganesha's blessings</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Ganesh Puja"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">45-60 minutes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm">4.9 (120 reviews)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <p className="font-medium">From $29</p>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card
                      className="cursor-pointer hover:border-orange-500 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle>Satyanarayan Katha</CardTitle>
                        <CardDescription>For prosperity and well-being</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Satyanarayan Katha"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">2-3 hours</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm">4.8 (95 reviews)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <p className="font-medium">From $49</p>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card
                      className="cursor-pointer hover:border-orange-500 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle>Griha Pravesh</CardTitle>
                        <CardDescription>House warming ceremony</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Griha Pravesh"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">3-4 hours</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm">4.9 (78 reviews)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <p className="font-medium">From $99</p>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card
                      className="cursor-pointer hover:border-orange-500 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle>Lakshmi Puja</CardTitle>
                        <CardDescription>For wealth and prosperity</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Lakshmi Puja"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">1-2 hours</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm">4.7 (112 reviews)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <p className="font-medium">From $39</p>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card
                      className="cursor-pointer hover:border-orange-500 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle>Navratri Special Puja</CardTitle>
                        <CardDescription>Nine nights of divine worship</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Navratri Puja"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">1 hour daily for 9 days</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm">4.9 (87 reviews)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <p className="font-medium">From $199</p>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card
                      className="cursor-pointer hover:border-orange-500 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle>Rudra Abhishek</CardTitle>
                        <CardDescription>Sacred ritual for Lord Shiva</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Rudra Abhishek"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">2-3 hours</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm">4.8 (65 reviews)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <p className="font-medium">From $59</p>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="daily" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Similar cards for daily pujas would go here */}
                    <Card
                      className="cursor-pointer hover:border-orange-500 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle>Ganesh Puja</CardTitle>
                        <CardDescription>Invoke Lord Ganesha's blessings</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Ganesh Puja"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">45-60 minutes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm">4.9 (120 reviews)</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <p className="font-medium">From $29</p>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Select
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                {/* Other tab contents would follow the same pattern */}
              </Tabs>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <Button variant="outline" onClick={() => setStep(1)} className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Rituals
              </Button>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Ganesh Puja</CardTitle>
                      <CardDescription>Select your preferences for this ritual</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label>Ritual Type</Label>
                        <RadioGroup defaultValue="virtual">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="virtual" id="virtual" />
                            <Label htmlFor="virtual">Virtual Session</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="in-person" id="in-person" />
                            <Label htmlFor="in-person">In-Person (at your location)</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label>Date and Time</Label>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="date">Select Date</Label>
                            <div className="flex">
                              <Input type="date" id="date" className="rounded-r-none" />
                              <Button variant="outline" className="rounded-l-none border-l-0">
                                <Calendar className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time">Select Time</Label>
                            <div className="flex">
                              <Input type="time" id="time" className="rounded-r-none" />
                              <Button variant="outline" className="rounded-l-none border-l-0">
                                <Clock className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Language Preference</Label>
                        <Select defaultValue="english">
                          <SelectTrigger>
                            <SelectValue placeholder="Select Language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="hindi">Hindi</SelectItem>
                            <SelectItem value="sanskrit">Sanskrit with English translation</SelectItem>
                            <SelectItem value="tamil">Tamil</SelectItem>
                            <SelectItem value="telugu">Telugu</SelectItem>
                            <SelectItem value="kannada">Kannada</SelectItem>
                            <SelectItem value="marathi">Marathi</SelectItem>
                            <SelectItem value="gujarati">Gujarati</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Additional Requirements</Label>
                        <Input placeholder="Any specific requirements or preferences" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Select a Pandit</CardTitle>
                      <CardDescription>Choose from our verified experts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border p-4 hover:border-orange-500 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <img
                            src="/placeholder.svg?height=80&width=80"
                            alt="Pandit Sharma"
                            className="rounded-full h-16 w-16 object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Pandit Sharma</h3>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                <span className="text-sm">4.9</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              20+ years experience, specializes in Ganesh Puja
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                Hindi
                              </span>
                              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                English
                              </span>
                              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                Sanskrit
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4 hover:border-orange-500 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <img
                            src="/placeholder.svg?height=80&width=80"
                            alt="Pandit Mishra"
                            className="rounded-full h-16 w-16 object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Pandit Mishra</h3>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                <span className="text-sm">4.8</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              15+ years experience, expert in Vedic rituals
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                Hindi
                              </span>
                              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                English
                              </span>
                              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                Marathi
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4 hover:border-orange-500 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <img
                            src="/placeholder.svg?height=80&width=80"
                            alt="Pandit Joshi"
                            className="rounded-full h-16 w-16 object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">Pandit Joshi</h3>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                <span className="text-sm">4.7</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              25+ years experience, specializes in all Hindu rituals
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                Hindi
                              </span>
                              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                English
                              </span>
                              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                                Gujarati
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <div className="sticky top-24">
                    <Card>
                      <CardHeader>
                        <CardTitle>Booking Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Ganesh Puja</p>
                          <p className="text-sm text-muted-foreground">Virtual Session</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Date & Time</p>
                          <p className="text-sm text-muted-foreground">Select a date and time</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Pandit</p>
                          <p className="text-sm text-muted-foreground">Select a pandit</p>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex items-center justify-between">
                            <span>Base Price</span>
                            <span>$29.00</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>Platform Fee</span>
                            <span>$2.90</span>
                          </div>
                          <div className="flex items-center justify-between font-medium mt-2 pt-2 border-t">
                            <span>Total</span>
                            <span>$31.90</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700" onClick={() => setStep(3)}>
                          Proceed to Checkout
                        </Button>
                      </CardFooter>
                    </Card>

                    <div className="mt-4 rounded-lg border p-4">
                      <h3 className="font-medium mb-2">AI Material Assistance</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        For Ganesh Puja, you'll need the following items:
                      </p>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span>Ganesh idol or picture</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span>Red cloth</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span>Flowers (preferably red)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span>Modak (sweet offering)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span>Incense sticks and lamp</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full mt-4">
                        Order Materials
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="max-w-2xl mx-auto">
              <Button variant="outline" onClick={() => setStep(2)} className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Booking
              </Button>

              <Card>
                <CardHeader>
                  <CardTitle>Booking Confirmed!</CardTitle>
                  <CardDescription>Your ritual has been scheduled successfully</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-center">
                    <p className="text-green-800">
                      Your Ganesh Puja has been scheduled for March 2, 2025 at 9:00 AM with Pandit Sharma.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Booking Details</h3>
                    <div className="grid gap-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ritual:</span>
                        <span>Ganesh Puja</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span>March 2, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span>9:00 AM (Your local time)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pandit:</span>
                        <span>Pandit Sharma</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span>Virtual Session</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Language:</span>
                        <span>English</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Next Steps</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 mt-0.5">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Prepare the materials</p>
                          <p className="text-sm text-muted-foreground">
                            Use our AI assistant to help you gather and arrange all necessary items.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 mt-0.5">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Set up your space</p>
                          <p className="text-sm text-muted-foreground">
                            Follow our ritual blueprint to create the perfect sacred space.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 mt-0.5">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Join the session</p>
                          <p className="text-sm text-muted-foreground">
                            Click the link in your email or calendar invitation to join the virtual session.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Add to Calendar</Button>
                  <Button variant="outline" className="w-full">
                    Return to Dashboard
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

