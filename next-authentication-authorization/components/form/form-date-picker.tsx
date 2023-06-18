"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { ControllerRenderProps } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/form"

export function FormDatePicker(props: ControllerRenderProps) {
  return (
    <FormItem className="flex flex-col">
      <FormLabel>Date of birth</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] pl-3 text-left font-normal",
                !props.value && "text-muted-foreground"
              )}
            >
              {props.value ? (
                format(props.value, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={props.value}
            onSelect={props.onChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <FormDescription>
        Your date of birth is used to calculate your age.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )
}
