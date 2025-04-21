// src/components/ui/MagicParticles.tsx
import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import type { Engine } from '@tsparticles/engine'

export function MagicParticles() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    return (
        <Particles
            id="magic"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: "transparent",
                },
                particles: {
                    number: {
                        value: 15,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: "#f472b6",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.5,
                        random: {
                            enable: true,
                            minimumValue: 0.1,
                        },
                    },
                    size: {
                        value: { min: 4, max: 10 },
                    },
                    move: {
                        enable: true,
                        direction: "top",
                        speed: 0.4,
                        outModes: {
                            default: "out",
                        },
                    },
                },
            }}
        />
    );
}