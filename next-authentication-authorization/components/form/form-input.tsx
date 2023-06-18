"use client"

import { ControllerRenderProps } from "react-hook-form"

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/form"

import { Input } from "../ui/input"

interface FormInputProps extends ControllerRenderProps {
  label: string
}

export function FormInput(props: FormInputProps) {
  const { label, ...field } = props

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input placeholder="Your email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}
