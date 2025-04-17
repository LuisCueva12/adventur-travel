import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            image: '/images/slider/hotel1.png',
            alt: 'Horizonte de Dubái de noche',
            title: 'Vive tus vacaciones en los EAU',
            subtitle: 'Reserva online disponible 24/7',
        },
        {
            image: '/images/slider/hotel2.png',
            alt: 'Mezquita Sheikh Zayed en Abu Dhabi',
            title: 'Descubre el lujo de oriente',
            subtitle: 'Reservas exclusivas en los mejores hoteles',
        },
        {
            image: '/images/slider/hotel1.png',
            alt: 'Desierto de Dubái al atardecer',
            title: 'Aventura en el desierto',
            subtitle: 'Experiencias únicas en los Emiratos',
        },
    ];
    
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isPaused, slides.length]);

    return (
        <section
            className="relative h-screen overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="region"
            aria-label="Carrusel principal"
        >
            {/* Slides */}
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        aria-hidden={index !== currentSlide}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                    </div>
                ))}
            </div>

            {/* Contenido principal */}
            <div className="absolute inset-0 flex flex-col justify-start md:justify-center items-center text-center px-4 z-20">
                <div className="w-full max-w-6xl mx-auto mt-55 sm:mt-24 md:mt-0 min-h-fit">
                    <div className="mb-8 text-white transition-all duration-700 transform px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow-md animate-fade-in">
                            {slides[currentSlide].subtitle}
                        </p>
                    </div>

                    {/* Filtro de búsqueda */}
                    <div className="bg-white bg-opacity-90 rounded-xl p-4 sm:p-6 shadow-2xl animate-fade-in-up w-full max-w-md sm:max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Destino */}
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-1 text-left">
                                    Destino
                                </label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm">
                                    <option value="">Todos los destinos</option>
                                    <option value="dubai">Dubái</option>
                                    <option value="abu-dhabi">Abu Dhabi</option>
                                    <option value="sharjah">Sharjah</option>
                                    <option value="ras-al-khaimah">Ras Al Khaimah</option>
                                </select>
                            </div>

                            {/* Fechas */}
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-1 text-left">
                                    Fechas
                                </label>
                                <input
                                    type="text"
                                    placeholder="Selecciona fechas"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                                    onFocus={(e) => (e.target.type = 'date')}
                                />
                            </div>

                            {/* Tipo de viaje */}
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-1 text-left">
                                    Tipo de viaje
                                </label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm">
                                    <option value="">Todos los tipos</option>
                                    <option value="playa">Playa</option>
                                    <option value="aventura">Aventura</option>
                                    <option value="cultural">Cultural</option>
                                    <option value="lujo">Lujo</option>
                                </select>
                            </div>

                            {/* Botón de búsqueda */}
                            <div className="flex items-end">
                                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 text-sm">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navegación de puntitos */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-yellow-500 scale-125' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Ir a slide ${index + 1}`}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                    />
                ))}
            </div>

            {/* Animaciones */}
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
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.7s ease-out;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.9s ease-out;
                }
            `}</style>
        </section>
    );
}