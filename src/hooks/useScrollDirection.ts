import { useEffect, useState } from 'react'

export function useScrollDirection(threshold = 10) {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY
      if (Math.abs(currentScrollY - lastScrollY) < threshold) return

      setScrollDir(currentScrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', updateScrollDir)
    return () => window.removeEventListener('scroll', updateScrollDir)
  }, [threshold])

  return scrollDir
}