// src/providers/ThemeProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'
import { getItem, setItem } from '@/utils/safeLocalStorage' // uses the helper above

const ThemeContext = createContext(null)
const STORAGE_KEY = 'app-theme'
const DEFAULT_THEME = 'light' // change to 'dark' if your app default is dark

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(DEFAULT_THEME)

  // load theme from storage on client only
  useEffect(() => {
    const stored = getItem(STORAGE_KEY)
    if (stored) setTheme(stored)
  }, [])

  // persist to storage when theme changes
  useEffect(() => {
    setItem(STORAGE_KEY, theme)
  }, [theme])

  // apply theme to document element (client-only)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      if (theme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }, [theme])

  const value = { theme, setTheme }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
