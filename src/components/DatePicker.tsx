// components/DatePicker.tsx
"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  dateFormat?: string;
}

export function DatePicker({ value, onChange, dateFormat = "PPP" }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (date: Date | undefined) => {
    onChange?.(date);
    setOpen(false);
  };

  // Format the date based on the provided dateFormat
  const displayFormat = (date: Date) => {
    switch (dateFormat) {
      case "MM/DD/YYYY":
        return format(date, "MM/dd/yyyy");
      case "DD/MM/YYYY":
        return format(date, "dd/MM/yyyy");
      case "YYYY-MM-DD":
        return format(date, "yyyy-MM-dd");
      default:
        return format(date, "PPP"); // Fallback to default format
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? displayFormat(value) : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}