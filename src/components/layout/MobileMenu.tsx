'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#historia', label: 'Historia' },
    { href: '#galeria', label: 'Galería' },
    { href: '#carta', label: 'Carta' },
    { href: '#perros', label: '🐶' },
]

export function MobileMenu() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded transition hover:bg-muted"
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {open && (
                <div className="fixed top-0 left-0 w-full h-screen bg-background/90 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-6 text-xl font-medium">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-foreground hover:text-primary transition"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </>
    )
}