"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useAuth } from "@/components/auth/auth-provider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from "axios"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

export default function LoginForm() {
  const router = useRouter()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState<"user" | "pandit">("user")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      console.log("Login form submitted:", values); // ✅ Debugging Log
  
      // ✅ Send login request to Flask backend
      const response = await axios.post("http://127.0.0.1:5000/login", values, {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("Server Response:", response.data); // ✅ Debugging Log
  
      if (response.status === 200) {
        // ✅ Store user session
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("role", response.data.role);
  
        // ✅ Call login function from auth provider
        // login({id: response.data.user_id, email: values.email,role: response.data.role});
  
        // ✅ Show success toast
        toast.success("Login successful", {
          description: `Welcome back, ${response.data.role === "user" ? "User" : "Boss"}!`,
        });
  
        // ✅ Redirect based on user role
        router.push(response.data.role === "boss" ? "/dashboard/boss" : "/dashboard/user");
      }
    } catch (error) {
        toast.error("Login failed", {
          description: "There was an error login into your account. Please try again.",
        })
      } finally {
        setIsLoading(false)
      }
}
  

  return (
    <div className="space-y-6">
      <Tabs defaultValue="user" className="w-full" onValueChange={(value) => setUserType(value as "user" | "pandit")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="pandit">Pandit</TabsTrigger>
        </TabsList>
      </Tabs>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

