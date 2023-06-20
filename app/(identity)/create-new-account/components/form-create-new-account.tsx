"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { VALIDATIONS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Form } from "@/components/form/form"
import { Input } from "@/components/form/input"

export const createNewAccountSchema = z
  .object({
    firstName: z
      .string({
        required_error: VALIDATIONS.REQUIRED,
      })
      .min(1, VALIDATIONS.STRING.MIN.replace("${MIN}", "1"))
      .max(50, VALIDATIONS.STRING.MAX.replace("${MAX}", "50")),
    lastName: z
      .string({
        required_error: VALIDATIONS.REQUIRED,
      })
      .min(1, VALIDATIONS.STRING.MIN.replace("${MIN}", "1"))
      .max(50, VALIDATIONS.STRING.MAX.replace("${MAX}", "50")),
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
    confirmPassword: z
      .string({
        required_error: VALIDATIONS.REQUIRED,
      })
      .min(6, VALIDATIONS.STRING.MIN.replace("${MIN}", "6"))
      .max(30, VALIDATIONS.STRING.MAX.replace("${MAX}", "30")),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: VALIDATIONS.MATCH,
  })

type CreateNewAccountSchema = z.infer<typeof createNewAccountSchema>

export function FormCreateNewAccount() {
  function onSubmit(data: CreateNewAccountSchema) {
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
      configuration={useForm<CreateNewAccountSchema>({
        resolver: zodResolver(createNewAccountSchema),
        defaultValues: {} as Partial<CreateNewAccountSchema>,
      })}
      onSubmit={onSubmit}
    >
      {/* <Input name="email" label="Email" placeholder="Your email" />

      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Your password"
      /> */}

      <div className="flex space-x-4">
        <Input label="Name" name="firstName" placeholder="Your name" />
        <Input label="Last name" name="lastName" placeholder="Your last name" />
      </div>

      <Input label="Email" name="email" type="email" placeholder="Your email" />

      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Your password"
      />

      <Input
        label="Confirm your password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
      />

      <div className="text-center">
        <Button type="submit">Create my account</Button>
      </div>
    </Form>
  )
}
