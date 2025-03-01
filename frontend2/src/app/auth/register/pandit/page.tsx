import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PanditRegistrationForm from "@/components/auth/pandit-registration-form"

export default function PanditRegistrationPage() {
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
          <CardTitle className="text-2xl font-bold text-center text-orange-600">Pandit Registration</CardTitle>
          <CardDescription className="text-center">
            Create your account to offer ritual services to devotees worldwide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PanditRegistrationForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-orange-600 hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

