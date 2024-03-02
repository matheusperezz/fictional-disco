'use client'
import { useEffect, useState } from "react"

interface CarouselProps {
    images: string[]
}

const Carousel = ({ images }: CarouselProps) => {

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [images]);

    return (
        <div className="relative w-full h-64 overflow-hidden mb-4">
            {images.map((image, index) => (
                <img 
                    src={image}
                    key={index}
                    alt="" 
                    className={`absolute w-full h-full transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'} rounded-md`}    
                />
            ))}
        </div>
    )
}

export default Carousel