"use client"

import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/react-hook-form"

import { Input as InputUI } from "../ui/input"

interface PasswordProps {
  name: string
  label: string
  placeholder?: string
}

export function Password({ name, label, placeholder }: PasswordProps) {
  const {
    control,
    formState: { isSubmitted, isSubmitting, errors },
  } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <InputUI placeholder={placeholder} type="password" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
