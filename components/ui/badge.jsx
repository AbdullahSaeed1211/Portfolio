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
        ai: "border-transparent bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow",
        saas: "border-transparent bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow",
        health: "border-transparent bg-gradient-to-r from-red-500 to-rose-500 text-white shadow",
        finance: "border-transparent bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow",
        web: "border-transparent bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow",
        tech: "border-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow",
        featured: "border-transparent bg-blue-600/80 dark:bg-blue-700/80 text-white shadow",
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