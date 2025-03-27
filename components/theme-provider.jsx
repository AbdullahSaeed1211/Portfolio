"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }) {
  return <NextThemesProvider forcedTheme="light" disableTransitionOnChange>{children}</NextThemesProvider>
} 