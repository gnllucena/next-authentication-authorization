"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { VALIDATIONS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Form } from "@/components/form/form"
import { Input } from "@/components/form/input"

const forgotMyPasswordSchema = z.object({
  email: z
    .string({
      required_error: VALIDATIONS.REQUIRED,
    })
    .email(VALIDATIONS.STRING.EMAIL)
    .min(6, VALIDATIONS.STRING.MIN.replace("${MIN}", "6"))
    .max(50, VALIDATIONS.STRING.MAX.replace("${MAX}", "50")),
})

type ForgotMyPasswordSchema = z.infer<typeof forgotMyPasswordSchema>

export function FormForgotMyPassword() {
  function onSubmit(data: ForgotMyPasswordSchema) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form
      configuration={useForm<ForgotMyPasswordSchema>({
        resolver: zodResolver(forgotMyPasswordSchema),
        defaultValues: {} as Partial<ForgotMyPasswordSchema>,
      })}
      onSubmit={onSubmit}
    >
      <Input name="email" label="Email" placeholder="Your email" />

      <div className="text-center">
        <Button type="submit">Send password reset instructions</Button>
      </div>
    </Form>
  )
}
