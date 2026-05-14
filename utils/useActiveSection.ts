'use client'

import { useEffect, useMemo, useState } from 'react'

export const useActiveSection = (sectionIds: string[]): string => {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds.join('|')])
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    if (!ids.length) {
      return
    }

    let rafId = 0

    const getSections = () =>
      ids
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))

    const getOffset = () => {
      const header = document.querySelector('header')
      const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0
      return headerHeight + 24
    }

    const updateActiveFromScroll = () => {
      const sections = getSections()
      if (!sections.length) {
        return
      }

      const offset = getOffset()
      const marker = window.scrollY + offset + window.innerHeight * 0.2
      let current = sections[0].id

      for (const section of sections) {
        if (marker >= section.offsetTop) {
          current = section.id
        } else {
          break
        }
      }

      // Ensure the last section can become active when we reach the bottom.
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (nearBottom) {
        current = sections[sections.length - 1].id
      }

      setActiveId((previous) => (previous === current ? previous : current))
    }

    const updateActiveFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && ids.includes(hash)) {
        setActiveId(hash)
      } else {
        updateActiveFromScroll()
      }
    }

    const onScroll = () => {
      if (rafId) {
        return
      }

      rafId = window.requestAnimationFrame(() => {
        updateActiveFromScroll()
        rafId = 0
      })
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) {
        return
      }

      const anchor = target.closest('a[href^="#"]')
      if (!(anchor instanceof HTMLAnchorElement)) {
        return
      }

      const hash = anchor.getAttribute('href')?.replace('#', '')
      if (hash && ids.includes(hash)) {
        setActiveId(hash)
      }
    }

    updateActiveFromHash()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('hashchange', updateActiveFromHash)
    document.addEventListener('click', onClick)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('hashchange', updateActiveFromHash)
      document.removeEventListener('click', onClick)
    }
  }, [ids])

  return activeId
}
