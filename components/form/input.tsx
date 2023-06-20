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

interface FormInputProps {
  name: string
  label: string
  type?: "text" | "email" | "password"
  placeholder?: string
}

export function Input({
  name,
  label,
  type = "text",
  placeholder,
}: FormInputProps) {
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
            <InputUI placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
