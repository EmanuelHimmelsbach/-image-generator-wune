"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type CalendarProps = React.HTMLAttributes<HTMLDivElement> & {
  mode?: "single"
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  className?: string
}

function Calendar({
  mode = "single",
  selected,
  onSelect,
  className,
  ...props
}: CalendarProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : undefined
    onSelect?.(date)
  }

  return (
    <div className={cn("p-3", className)} {...props}>
      <input
        type="date"
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        value={selected?.toISOString().split('T')[0] || ''}
        onChange={handleDateChange}
      />
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar } 