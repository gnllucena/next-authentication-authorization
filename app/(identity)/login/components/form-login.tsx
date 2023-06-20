"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { VALIDATIONS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Form } from "@/components/form/form"
import { Input } from "@/components/form/input"

const loginSchema = z.object({
  email: z
    .string({
      required_error: VALIDATIONS.REQUIRED,
    })
    .email(VALIDATIONS.STRING.EMAIL)
    .min(6, VALIDATIONS.STRING.MIN.replace("${MIN}", "6"))
    .max(50, VALIDATIONS.STRING.MAX.replace("${MAX}", "50")),
  password: z
    .string({
      required_error: VALIDATIONS.REQUIRED,
    })
    .min(6, VALIDATIONS.STRING.MIN.replace("${MIN}", "6"))
    .max(30, VALIDATIONS.STRING.MAX.replace("${MAX}", "30")),
  code: z.optional(z.string()),
})

type LoginSchema = z.infer<typeof loginSchema>

export function FormLogin() {
  function onSubmit(data: LoginSchema) {
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
      configuration={useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {} as Partial<LoginSchema>,
      })}
      onSubmit={onSubmit}
    >
      <Input name="email" label="Email" placeholder="Your email" />

      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Your password"
      />

      <div className="text-center">
        <Button type="submit">Sign in</Button>
      </div>
    </Form>
  )
}
