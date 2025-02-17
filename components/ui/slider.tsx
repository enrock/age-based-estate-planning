"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  label?: string
  showTicks?: boolean
  tickValues?: number[]
  tickLabels?: string[]
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ 
  className, 
  label,
  showTicks = true,
  tickValues = [18, 40, 60, 80, 100],
  tickLabels,
  ...props 
}, ref) => (
  <div className="w-full space-y-2">
    {label && (
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
    )}
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track 
        className="relative h-8 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-[#22c55e] via-[#eab308] to-[#ef4444]"
        aria-label={label}
      >
        <SliderPrimitive.Range className="absolute h-full bg-transparent" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb 
        className={cn(
          "block h-12 w-20 rounded-full border-4 border-[#f9fafb] bg-[#f9fafb]",
          "shadow-lg transition-colors focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "hover:border-[#e5e7eb] active:scale-95"
        )}
      />
      
      {/* Tick marks with optional labels */}
      {showTicks && (
        <div className="absolute bottom-full left-0 right-0 mb-2 flex justify-between px-1">
          {tickValues.map((tick, index) => (
            <div key={tick} className="flex flex-col items-center">
              <div className="h-1 w-0.5 bg-slate-400 dark:bg-slate-600" />
              {tickLabels && (
                <span className="mt-1 text-xs text-muted-foreground">
                  {tickLabels[index]}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </SliderPrimitive.Root>
  </div>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

