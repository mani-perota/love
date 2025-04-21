'use client'

export function FloatingButterflies() {
    return (
        <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
            {[...Array(15)].map((_, i) => (
                <span
                    key={i}
                    className="butterfly"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${6 + Math.random() * 6}s`,
                    }}
                >
                    🌸
                </span>
            ))}
        </div>
    )
}