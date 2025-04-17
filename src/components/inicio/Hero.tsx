import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            alt: 'Modern eco-lodge in nature',
            title: 'Descubre Alojamientos Excepcionales',
            subtitle: 'Donde el confort se encuentra con la aventura',
            cta: 'Explora nuestras opciones',
            ctaPath: '/explore',
        },
        {
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            alt: 'Boutique hotel with local charm',
            title: 'Experiencias Únicas',
            subtitle: 'Hoteles boutique con encanto local',
            cta: 'Reserva ahora',
            ctaPath: '/reserve',
        },
        {
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
            alt: 'Luxury hotel suite',
            title: 'Lujo y Elegancia',
            subtitle: 'Disfruta de las mejores comodidades',
            cta: 'Ver disponibilidad',
            ctaPath: '/availability',
        },
    ];

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused, slides.length]);

    return (
        <section
            className="relative h-screen overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="region"
            aria-label="Hero carousel"
        >
            {/* Slides */}
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                        aria-hidden={index !== currentSlide}
                    >
                        {/* Imagen de fondo */}
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                        {/* Overlay oscuro */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
                    </div>
                ))}
            </div>

            {/* Contenido principal */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
                <div className="transition-all duration-700 transform text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow animate-fade-in">
                        {slides[currentSlide].subtitle}
                    </p>
                    <Link
                        href={slides[currentSlide].ctaPath}
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-transparent animate-fade-in"
                        aria-label={slides[currentSlide].cta}
                    >
                        {slides[currentSlide].cta}
                    </Link>
                </div>
            </div>

            {/* Navegación de puntitos */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                    />
                ))}
            </div>

            {/* Inline CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.7s ease-out;
                }
            `}</style>
        </section>
    );
}