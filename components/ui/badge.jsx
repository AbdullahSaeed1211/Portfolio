"use client"

import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        ai: "border-transparent bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200 shadow-sm",
        saas: "border-transparent bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 shadow-sm",
        health: "border-transparent bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 shadow-sm",
        finance: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 shadow-sm",
        web: "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 shadow-sm",
        tech: "border-transparent bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 shadow-sm",
        featured: "border-transparent bg-blue-600 text-white shadow-md font-medium",
        skill: "border-gray-200 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300 shadow-sm",
        tool: "border-gray-300 bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants } 