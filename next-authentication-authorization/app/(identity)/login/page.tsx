import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { Form } from "./components/form"

export default function Page() {
  return (
    <>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "absolute left-8 top-8 text-lg"
        )}
      >
        💪🏼
      </Link>
      <Link
        href="/forgot-my-password"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "absolute right-8 top-8"
        )}
      >
        Forgot you password?
      </Link>
      <div className="mx-auto flex min-h-screen max-w-[350px] flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 ">
          <h1 className="text-center text-2xl font-semibold tracking-tight">
            Welcome back!
          </h1>
          <p className="text-center text-sm text-muted-foreground">
            Enter your email and password
          </p>

          <Form />
        </div>

        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms-of-service"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </>
  )
}
