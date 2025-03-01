"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Calendar, Home, LogOut, Menu, MessageSquare, Settings, User, Users, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const userNavItems = [
    { icon: <Home className="mr-2 h-4 w-4" />, label: "Dashboard", href: "/dashboard/user" },
    { icon: <Users className="mr-2 h-4 w-4" />, label: "Find Pandits", href: "/dashboard/user/find-pandits" },
    { icon: <Calendar className="mr-2 h-4 w-4" />, label: "My Bookings", href: "/dashboard/user/bookings" },
    { icon: <MessageSquare className="mr-2 h-4 w-4" />, label: "Messages", href: "/dashboard/user/messages" },
    { icon: <User className="mr-2 h-4 w-4" />, label: "Profile", href: "/dashboard/user/profile" },
    { icon: <Settings className="mr-2 h-4 w-4" />, label: "Settings", href: "/dashboard/user/settings" },
  ]

  const panditNavItems = [
    { icon: <Home className="mr-2 h-4 w-4" />, label: "Dashboard", href: "/dashboard/pandit" },
    { icon: <Users className="mr-2 h-4 w-4" />, label: "My Clients", href: "/dashboard/pandit/clients" },
    { icon: <Calendar className="mr-2 h-4 w-4" />, label: "Bookings", href: "/dashboard/pandit/bookings" },
    { icon: <MessageSquare className="mr-2 h-4 w-4" />, label: "Messages", href: "/dashboard/pandit/messages" },
    { icon: <User className="mr-2 h-4 w-4" />, label: "Profile", href: "/dashboard/pandit/profile" },
    { icon: <Settings className="mr-2 h-4 w-4" />, label: "Settings", href: "/dashboard/pandit/settings" },
  ]

  const navItems = user?.role === "user" ? userNavItems : panditNavItems

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <span className="font-bold text-xl">Seremo</span>
                  <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent"
                      onClick={() => setOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    variant="ghost"
                    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent justify-start font-normal mt-4"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-xl">Seremo</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center text-sm font-medium hover:text-orange-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={`/placeholder.svg?height=32&width=32&text=${user?.name?.charAt(0) || "U"}`}
                  alt={user?.name || "User"}
                />
                <AvatarFallback className="bg-orange-200 text-orange-700">
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.role === "user" ? "User" : "Pandit"}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={handleLogout} className="hidden md:flex">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-orange-50/50">{children}</main>
    </div>
  )
}

