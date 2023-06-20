import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { FormForgotMyPassword } from "./components/form-forgot-my-password"

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
        href="/create-new-account"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "absolute right-8 top-8"
        )}
      >
        Sign up
      </Link>
      <div className="mx-auto flex min-h-screen max-w-[350px] flex-col justify-center">
        <div className="flex flex-col space-y-2 ">
          <h1 className="text-center text-2xl font-semibold tracking-tight">
            Forgot your password?
          </h1>
          <p className="text-center text-sm text-muted-foreground">
            Enter your email address below and we’ll send you a link to reset
            your password.
          </p>

          <div className="pt-4">
            <FormForgotMyPassword />
          </div>
        </div>

        <p className="mt-8 px-8 text-center text-sm text-muted-foreground">
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
