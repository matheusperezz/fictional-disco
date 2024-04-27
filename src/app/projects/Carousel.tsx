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
        }, 6500)

        return () => clearInterval(interval)
    }, [images]);

    return (
        <div className="relative w-auto overflow-hidden mb-4 h-96">
            {images.map((image, index) => (
                <img 
                    src={image}
                    key={index}
                    alt="" 
                    className={`absolute w-full h-full transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'} rounded-md`}    
                    style={{ objectFit: 'contain' }}
                />
            ))}
        </div>
    )
}

export default Carousel