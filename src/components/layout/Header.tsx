'use client'

import { useScrollY } from '@/hooks/useScrollY'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function Header() {
    const scrollY = useScrollY()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        setIsScrolled(scrollY > 100)
    }, [scrollY])

    return (
        <header
            className={cn(
                'fixed top-0 left-0 w-full z-50 flex justify-center items-start transition-all duration-700 ease-in-out',
                isScrolled
                    ? 'bg-primary/80 py-2 backdrop-blur-md border-b border-zinc-200 shadow-sm'
                    : 'bg-transparent py-32'
            )}
        >
            <div
                className={cn(
                    'transition-all duration-700 ease-in-out origin-top text-center'
                )}
            >
                <h1
                    className={cn(
                        'font-display tracking-wide text-muted-foreground transition-all duration-700 ease-in-out',
                        isScrolled
                            ? 'text-3xl md:text-5xl text-muted-foreground'
                            : 'text-[18vw] md:text-[10vw] text-muted-foreground'
                    )}
                >
                    Gabi
                </h1>
            </div>
        </header>
    )
}