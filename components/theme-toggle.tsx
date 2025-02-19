"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 right-4 hover:bg-transparent"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="w-5 h-5 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
      <Moon className="absolute w-5 h-5 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

