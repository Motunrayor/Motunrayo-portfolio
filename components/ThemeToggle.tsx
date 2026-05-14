"use client";

import { motion } from "framer-motion";

import { useTheme } from "@/utils/useTheme";

export const ThemeToggle = () => {
  const { mounted, isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--text)] transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">Toggle theme</span>
      <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden">
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="absolute h-5 w-5"
          initial={false}
          animate={{
            rotate: isDark ? -50 : 0,
            scale: isDark ? 0.6 : 1,
            opacity: mounted ? (isDark ? 0 : 1) : 0,
          }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
        </motion.svg>

        <motion.svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute h-5 w-5"
          initial={false}
          animate={{
            rotate: isDark ? 0 : 45,
            scale: isDark ? 1 : 0.6,
            opacity: mounted ? (isDark ? 1 : 0) : 0,
          }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        >
          <path d="M20.6 14.2a8.3 8.3 0 1 1-10.8-10A7.1 7.1 0 1 0 20.6 14.2Z" />
        </motion.svg>
      </span>
    </button>
  );
};
