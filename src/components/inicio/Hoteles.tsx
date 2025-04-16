import { useState } from 'react';

export default function FeaturedHotels() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const featuredHotels = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            name: 'Hotel Paraíso Tropical',
            location: 'Playa del Carmen, México',
            price: '$189',
            rating: 4.8
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            name: 'Montaña Lodge',
            location: 'Andes, Chile',
            price: '$235',
            rating: 4.9
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            name: 'Urban Boutique Hotel',
            location: 'Buenos Aires, Argentina',
            price: '$165',
            rating: 4.7
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            name: 'Selva Resort',
            location: 'Amazonas, Perú',
            price: '$210',
            rating: 4.6
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            name: 'Hotel del Mar',
            location: 'Cartagena, Colombia',
            price: '$195',
            rating: 4.8
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            name: 'Altura Andina',
            location: 'Cusco, Perú',
            price: '$220',
            rating: 4.9
        }
    ];

    const hotelsToShow = featuredHotels.slice(0, 6); // Mostrar solo 6

    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(hotelsToShow.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Hoteles Destacados</h2>
                <p className="text-lg text-gray-600 mb-8">Descubre nuestros alojamientos más exclusivos</p>

                <div className="relative">
                    {/* Flechas */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                        aria-label="Anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                        aria-label="Siguiente"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Carrusel */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="flex w-full flex-shrink-0">
                                    {hotelsToShow
                                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                        .map((hotel) => (
                                            <div key={hotel.id} className="w-full sm:w-1/2 md:w-1/3 px-4">
                                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                                                    <div className="relative h-48">
                                                        <img
                                                            src={hotel.image}
                                                            alt={hotel.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-4">
                                                        <h3 className="font-bold text-lg mb-1 text-gray-900">{hotel.name}</h3>
                                                        <p className="text-gray-600 mb-3 flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            {hotel.location}
                                                        </p>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-gray-900 font-bold">{hotel.price} <span className="text-gray-600 font-normal">/noche</span></span>
                                                            <button className="text-sm bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded transition-colors">
                                                                Ver detalles
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots indicadores */}
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
