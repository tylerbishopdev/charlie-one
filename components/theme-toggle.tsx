"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="flex justify-center  h-6 w-6 pl-[7px] pt-1.5    items-center">
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Moon className="h-5 w-5 text-[#abf183]   transition-colors   dark:hidden"/>
      <Sun className="hidden h-5 w-5 dark:block text-[#abf183]  hover:text-gray-500 transition-colors dark:text-[#abf183]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
    </div>
  )
}
