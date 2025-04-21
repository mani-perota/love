'use client'
import { motion } from 'framer-motion'
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
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent z-10" />
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: { opacity: 1, y: 60 },
                    visible: { opacity: 1, y: 1, transition: { duration: 1 } }
                }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-4xl text-primary mb-4">Capítulo 1</h2>
                <p className="text-lg text-muted-foreground">
                    Cada sección se revela como una página de cuento...
                </p>
            </motion.div>

        </section>
    )
}
