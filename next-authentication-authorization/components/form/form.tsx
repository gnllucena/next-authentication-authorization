"use client"

import { UseFormReturn } from "react-hook-form"

import { Form as FormReactHookForm } from "@/components/form/react-hook-form"

interface FormProps {
  form: UseFormReturn<any>
  children: React.ReactNode
  onSubmit(entity: any): void
}

export function Form({ form, children, onSubmit }: FormProps) {
  return (
    <FormReactHookForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
        {children}
      </form>
    </FormReactHookForm>
  )
}
