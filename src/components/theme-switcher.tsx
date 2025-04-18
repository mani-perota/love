'use client'

import { useEffect, useState } from 'react'
import { Moon, Sparkles, Heart, Settings2 } from 'lucide-react'

const themes = [
    { id: 'default', icon: <Heart size={16} />, label: 'Love' },
    { id: 'sorpresa', icon: <Sparkles size={16} />, label: 'Pop' },
    { id: 'dark', icon: <Moon size={16} />, label: 'Night' },
]

export function ThemeSwitcher() {
    const [theme, setTheme] = useState<string>('default')
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        const initialTheme = saved || (prefersDark ? 'dark' : 'default')
        document.documentElement.setAttribute('data-theme', initialTheme)
        setTheme(initialTheme)
    }, [])

    const handleThemeChange = (id: string) => {
        if (id === theme) return

        document.body.classList.add('theme-transition')
        document.documentElement.setAttribute('data-theme', id)
        localStorage.setItem('theme', id)
        setTheme(id)

        setTimeout(() => {
            document.body.classList.remove('theme-transition')
        }, 300)
    }

    return (
        <>
            {/* Botón flotante */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 z-50 bg-white/70 backdrop-blur-md shadow-lg p-3 rounded-full hover:rotate-180 transition-transform duration-500"
            >
                <Settings2 className="text-primary" size={20} />
            </button>

            {/* Menú desplegable */}
            {open && (
                <div className="fixed bottom-20 right-6 z-50 bg-white/90 backdrop-blur-lg border border-white/30 rounded-xl shadow-md p-3 flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-4">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => {
                                handleThemeChange(t.id)
                                setOpen(false)
                            }}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all
                ${theme === t.id
                                    ? 'bg-primary text-primary-foreground shadow'
                                    : 'text-foreground hover:bg-muted'
                                }`}
                        >
                            {t.icon}
                            {t.label}
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}