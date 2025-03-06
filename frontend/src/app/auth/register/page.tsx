import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-orange-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-xl">Seremo</span>
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-orange-600">Create an account</CardTitle>
          <CardDescription className="text-center">Choose your account type to get started</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Link href="/auth/register/user">
              <Button
                variant="outline"
                className="w-full h-24 flex flex-col items-center justify-center gap-2 border-2 border-orange-200 hover:border-orange-500 hover:bg-orange-50"
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">U</span>
                </div>
                <span className="font-medium">Register as User</span>
              </Button>
            </Link>
            <Link href="/auth/register/pandit">
              <Button
                variant="outline"
                className="w-full h-24 flex flex-col items-center justify-center gap-2 border-2 border-orange-200 hover:border-orange-500 hover:bg-orange-50"
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">P</span>
                </div>
                <span className="font-medium">Register as Pandit</span>
              </Button>
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-orange-600 hover:underline">
              Login
            </Link>
          </div>
          <div className="text-xs text-center text-gray-500">
            By registering, you agree to our{" "}
            <Link href="/terms" className="text-orange-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-orange-600 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

