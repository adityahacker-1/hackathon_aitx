"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-provider"
import UserDashboard from "@/components/dashboard/user-dashboard"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

export default function UserDashboardPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    } else if (user?.role !== "user") {
      router.push("/dashboard/pandit")
    }
  }, [isAuthenticated, router, user?.role])

  if (!isAuthenticated || user?.role !== "user") {
    return null
  }

  return (
    <DashboardLayout>
      <UserDashboard />
    </DashboardLayout>
  )
}

