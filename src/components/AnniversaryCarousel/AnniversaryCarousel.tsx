// src/components/AnniversaryCarousel.tsx
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import './carousel.css' // Para estilos básicos

const slides = [
    {
        title: "Así empezó todo",
        text: "Recuerdo ese primer día, como si el destino me hubiera puesto el debugger en la ruta correcta.",
        img: "/images/start.jpg"
    },
    {
        title: "Lo que hemos vivido",
        text: "Hemos tenido bugs emocionales, sí, pero siempre supimos debuguearlos juntos.",
        img: "/images/moments.jpg"
    },
    {
        title: "Lo que más amo de ti",
        text: "Tu risa, tu fuerza, tu capacidad de hacerme sentir que soy mejor solo por tenerte cerca.",
        img: "/images/love.jpg"
    },
    {
        title: "Nuestro futuro",
        text: "No tengo todas las respuestas, pero sí la certeza de que quiero descubrirlas contigo.",
        img: "/images/future.jpg"
    }
]

export default function AnniversaryCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', onSelect)
        onSelect()
    }, [emblaApi, onSelect])

    return (
        <div className="embla">
            carlos
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="slide__content">
                                <img src={slide.img} alt={slide.title} className="slide__img" />
                                <h2>{slide.title}</h2>
                                <p>{slide.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === selectedIndex ? 'active' : ''}`}
                        onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    )
}