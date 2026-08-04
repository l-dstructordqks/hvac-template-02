"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
}

export function DatePicker({
  value,
  onChange,
}: DatePickerProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            type="button"
            variant="outline"
            className="w-full justify-start text-left font-normal"
          />
        }
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {value
          ? format(value, "MMM dd, yyyy")
          : "Select preferred date"}
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-[90vw] max-w-md mr-2 sm:mr-0 p-0 sm:w-auto"
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange?.(date)
            setOpen(false) // cierra el calendario
          }}
        />
      </PopoverContent>
    </Popover>
  )
}