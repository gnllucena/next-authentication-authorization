"use client"

import { ControllerRenderProps } from "react-hook-form"

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form"

import { Input } from "../ui/input"

export function FormInput(props: ControllerRenderProps) {
  return (
    <FormItem>
      <FormLabel className="w-full">Email</FormLabel>
      <FormControl>
        <Input placeholder="Your email" {...props} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}
