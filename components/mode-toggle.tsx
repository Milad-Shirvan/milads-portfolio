"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    setIsOpen(false)
  }

  if (!mounted) {
    return (
      <button className="rounded-xl border border-swiss-red/30 hover:bg-swiss-red/10 h-10 w-10 flex items-center justify-center">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={handleToggleClick}
        className="rounded-xl border border-swiss-red/30 hover:bg-swiss-red/10 h-10 w-10 flex items-center justify-center"
      >
        {theme === "dark" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Toggle theme</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-swiss-red/30 bg-background/80 backdrop-blur-md shadow-lg z-50 overflow-hidden">
          <div className="p-1 flex flex-col gap-1">
            <button
              onClick={() => handleThemeChange("light")}
              className="theme-option-button"
              data-active={theme === "light"}
            >
              Light
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className="theme-option-button"
              data-active={theme === "dark"}
            >
              Dark
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className="theme-option-button"
              data-active={theme === "system"}
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
