'use client'

import { useScrollY } from '@/hooks/useScrollY'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Header() {
    const scrollY = useScrollY()
    const isScrolled = scrollY > 100

    return (
        <header
            className={cn(
                'fixed top-0 left-0 w-full z-50 flex justify-center items-start transition-all duration-700 ease-in-out',
                isScrolled
                    ? 'py-2 backdrop-blur-md shadow-sm bg-white/80'
                    : 'bg-transparent py-32'
            )}
        >
            <div
                className="transition-all duration-700 ease-in-out origin-top text-center"
            >
                <h1
                    className={cn(
                        'font-display tracking-wide text-muted-foreground transition-all duration-700 ease-in-out',
                        isScrolled
                            ? 'text-3xl md:text-5xl'
                            : 'text-[18vw] md:text-[10vw]'
                    )}
                >
                    Gabi
                </h1>
            </div>
        </header>
    )
}