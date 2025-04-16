import { useState, useEffect } from 'react';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            title: 'Descubre Alojamientos Excepcionales',
            subtitle: 'Donde el confort se encuentra con la aventura',
            cta: 'Explora nuestras opciones'
        },
        {
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            title: 'Experiencias Únicas',
            subtitle: 'Hoteles boutique con encanto local',
            cta: 'Reserva ahora'
        },
        {
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
            title: 'Lujo y Elegancia',
            subtitle: 'Disfruta de las mejores comodidades',
            cta: 'Ver disponibilidad'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Slides */}
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {/* Imagen de fondo */}
                        <img
                            src={slide.image}
                            alt={`Hotel ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Capa oscura encima de la imagen PERO detrás del texto */}
                    </div>
                ))}
            </div>

            {/* Contenido principal (encima del overlay) */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
                <div className="transition-all duration-700 transform text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">
                        {slides[currentSlide].subtitle}
                    </p>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                        {slides[currentSlide].cta}
                    </button>
                </div>
            </div>

            {/* Navegación de puntitos */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                        aria-label={`Ir a slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
