'use client'

import { FloatingButterflies } from '../ui/butterlflies'

export function AnimatedIntro() {

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-24">
            <FloatingButterflies />
            {/* Imagen como elemento visible, no fondo */}
            <img
                src="/backgrounds/disney-magic-1.png"
                alt="Gabriela Disney Princess"
                className="absolute top-0 left-0 w-full h-full object-contain sm:object-cover z-0 opacity-90"
            />

            {/* Overlay para suavizar la imagen y mejorar legibilidad */}

        </section>
    )
}
