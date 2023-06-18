"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { DatePicker } from "@/components/form/date-picker"
import { Form } from "@/components/form/form"
import { Input } from "@/components/form/input"
import { Select } from "@/components/form/select"

const loginSchema = z.object({
  email: z
    .string({ required_error: "A email is required." })
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  language: z.string({
    required_error: "Please select a language.",
  }),
})

type LoginSchema = z.infer<typeof loginSchema>

export function FormLogin() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {} as Partial<LoginSchema>,
  })

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
    <Form onSubmit={onSubmit} form={form}>
      <Input name="email" label="Email" placeholder="Your email" form={form} />

      <DatePicker
        name="dob"
        label="Date of birth"
        placeholder="Pick a date"
        form={form}
      />

      <Select
        name="language"
        label="Language"
        placeholder="Select a language"
        popover={{
          placeholder: "Search language",
          notfound: "No results found.",
        }}
        form={form}
      />

      <div className="text-center">
        <Button type="submit">Sign in</Button>
      </div>
    </Form>
  )
}
