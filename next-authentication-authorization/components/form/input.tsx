"use client"

import { Control, ControllerRenderProps, UseFormReturn } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/form"

import { Input as InputUI } from "../ui/input"

interface FormInputProps {
  name: string
  label: string
  placeholder?: string
  form: UseFormReturn<any>
}

export function Input({ name, label, placeholder, form }: FormInputProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <InputUI placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
