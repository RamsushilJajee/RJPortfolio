"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  // Avoid hydration mismatch
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
      return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
         <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Portfolio</span>
        </Link>
      </div>
      </nav>
      )
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Portfolio</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-foreground/80 transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-foreground/80 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-foreground/80 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-foreground/80 transition-colors">
            Contact
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        <div className="md:hidden flex items-center">
             <Button
                variant="ghost"
                size="sm"
                className="mr-2"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-foreground/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="text-sm font-medium hover:text-foreground/80 transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-foreground/80 transition-colors" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-foreground/80 transition-colors" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-foreground/80 transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
