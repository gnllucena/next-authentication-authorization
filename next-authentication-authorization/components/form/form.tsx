// "use client"

// import { UseFormReturn } from "react-hook-form"

// import { Form as FormReactHookForm } from "@/components/form/react-hook-form"

// interface FormProps {
//   form: UseFormReturn<any>
//   children: React.ReactNode
//   onSubmit(entity: any): void
// }

// export function Form({ form, children, onSubmit }: FormProps) {
//   return (
//     <FormReactHookForm {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
//         {children}
//       </form>
//     </FormReactHookForm>
//   )
// }

"use client"

import React, { ComponentProps } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  UseFormProps as UseHookFormProps,
  useForm as useHookForm,
} from "react-hook-form"
import { TypeOf, ZodSchema } from "zod"

interface UseFormProps<T extends ZodSchema>
  extends UseHookFormProps<TypeOf<T>> {
  schema: T
}

interface FormProps<T extends FieldValues>
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  configuration: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
}

export const useForm = <T extends ZodSchema>({
  schema,
  ...config
}: UseFormProps<T>) => {
  return useHookForm({
    ...config,
    resolver: zodResolver(schema),
  })
}

export const Form = <T extends FieldValues>({
  configuration,
  onSubmit,
  children,
}: FormProps<T>) => {
  return (
    <FormProvider {...configuration}>
      <form
        className="space-y-6"
        onSubmit={configuration.handleSubmit(onSubmit)}
        noValidate={true}
      >
        {children}
      </form>
    </FormProvider>
  )
}
