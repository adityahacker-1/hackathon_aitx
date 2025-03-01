"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-provider"
import PanditDashboard from "@/components/dashboard/pandit-dashboard"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

export default function PanditDashboardPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    } else if (user?.role !== "pandit") {
      router.push("/dashboard/user")
    }
  }, [isAuthenticated, router, user?.role])

  if (!isAuthenticated || user?.role !== "pandit") {
    return null
  }

  return (
    <DashboardLayout>
      <PanditDashboard />
    </DashboardLayout>
  )
}

