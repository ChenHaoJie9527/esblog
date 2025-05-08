"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * ThemeProvider Component
 * 
 * Wraps the application with the next-themes provider to enable theme switching.
 * Supports light, dark, and system themes.
 * 
 * @param props - Theme provider configuration props
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}