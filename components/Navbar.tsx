"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { NavItem } from "@/data/portfolio";
import { cn } from "@/utils/cn";
import { useActiveSection } from "@/utils/useActiveSection";

import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  brand: string;
  items: NavItem[];
}

const shortName = (name: string): string => {
  const names = name.split(" ");
  if (names.length < 2) {
    return name;
  }

  return `${names[0]} ${names[1][0]}.`;
};

const initials = (name: string): string => {
  const names = name.trim().split(/\s+/);
  return names
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

export const Navbar = ({ brand, items }: NavbarProps) => {
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
  const activeSection = useActiveSection(sectionIds);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pb-2 pt-3 sm:px-4">
      <motion.nav
        initial={{ y: -18, opacity: 0, filter: "blur(5px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-content items-center justify-between gap-3 rounded-2xl bg-[var(--bg-overlay)] px-3 py-2.5 shadow-[0_16px_38px_-24px_rgba(13,28,56,0.6)] backdrop-blur-2xl sm:px-4"
        aria-label="Primary navigation"
      >
        {/* Left side: brand and hamburger (mobile) */}
        <div className="flex items-center gap-3">
          {/* Hamburger button - only visible on mobile */}
          <button className="md:hidden p-1 rounded-full hover:bg-[var(--surface)]/80" onClick={toggleMenu}>
            {/* Hamburger icon: three lines */}
            <span className="block h-[2px] w-4 bg-[var(--text)]"></span>
            <span className="block h-[2px] w-4 mt-1.5 bg-[var(--text)]"></span>
            <span className="block h-[2px] w-4 mt-1.5 bg-[var(--text)]"></span>
          </button>
          {/* Brand */}
          <a
            href="#home"
            className="inline-flex shrink-0 items-center gap-2.5 text-sm font-semibold text-[var(--text)] sm:text-base"
          >
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(140deg,var(--accent),var(--highlight))] text-[10px] text-white shadow-[0_8px_24px_-12px_var(--accent)]"
              aria-hidden="true"
            >
              {initials(brand)}
            </span>
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-semibold">{brand}</p>
            </div>
            <span className="sm:hidden">{shortName(brand)}</span>
          </a>
        </div>

        {/* Desktop nav links - hidden on mobile */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul
            className="scrollbar-none flex max-w-[68vw] items-center gap-1 overflow-x-auto sm:max-w-none sm:gap-1.5"
            role="list"
          >
            {items.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "inline-flex whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm",
                      isActive
                        ? "bg-[var(--accent)] text-white shadow-[0_14px_24px_-16px_var(--accent)]"
                        : "text-[var(--muted)] hover:bg-[var(--surface)]/80 hover:text-[var(--text)]",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right side: theme toggle (always visible) */}
        <div className="flex min-w-0 items-center gap-2">
          <ThemeToggle />
        </div>

        {/* Mobile menu - appears when hamburger is clicked */}
        {isOpen && (
          <motion.ul
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-black rounded-sm fixed inset-x-0 top-[3.5rem] z-40 max-h-[80vh] overflow-y-auto px-4 pb-4 pt-2 bg-[var(--bg-overlay)]/80 backdrop-blur-xl border-t border-[var(--border-strong)]/20"
          >
            {items.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex w-full items-center px-3 py-2 rounded-full text-xs font-semibold transition-all duration-300",
                      isActive
                        ? "bg-[var(--accent)] text-white shadow-[0_14px_24px_-16px_var(--accent)]"
                        : "text-[var(--muted)] hover:bg-[var(--surface)]/80 hover:text-[var(--text)]",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </motion.nav>
    </header>
  );
};
