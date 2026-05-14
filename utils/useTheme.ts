'use client'

import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme-preference'
const DARK_QUERY = '(prefers-color-scheme: dark)'

type ThemePreference = 'light' | 'dark' | 'system'

const isThemePreference = (value: string | null): value is ThemePreference => {
  return value === 'light' || value === 'dark' || value === 'system'
}

export const useTheme = () => {
  const [mounted, setMounted] = useState(false)
  const [preference, setPreference] = useState<ThemePreference>('system')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)

    const stored = localStorage.getItem(STORAGE_KEY)
    if (isThemePreference(stored)) {
      setPreference(stored)
    }
  }, [])

  useEffect(() => {
    if (!mounted) {
      return
    }

    localStorage.setItem(STORAGE_KEY, preference)

    const media = window.matchMedia(DARK_QUERY)
    const applyTheme = () => {
      const shouldUseDark = preference === 'dark' || (preference === 'system' && media.matches)
      document.documentElement.classList.toggle('dark', shouldUseDark)
      setIsDark(shouldUseDark)
    }

    applyTheme()
    media.addEventListener('change', applyTheme)

    return () => media.removeEventListener('change', applyTheme)
  }, [mounted, preference])

  const toggleTheme = useCallback(() => {
    const media = window.matchMedia(DARK_QUERY)
    const currentlyDark = preference === 'dark' || (preference === 'system' && media.matches)
    setPreference(currentlyDark ? 'light' : 'dark')
  }, [preference])

  return {
    mounted,
    isDark,
    preference,
    setPreference,
    toggleTheme,
  }
}
