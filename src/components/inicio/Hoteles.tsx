import React, { useEffect, useState } from 'react';
import { getAlojamientos } from '@/services/alojamientosService';

interface Hotel {
    id: string;
    nombre: string;
    ubicacion: string;
    descripcion: string;
    imagen1: string;
    precio_noche: string;
    puntuacion: string;
}

const FeaturedHotels = () => {
    const [hotels, setHotels] = useState<Hotel[]>([]);

    useEffect(() => {
        const fetchHotels = async () => {
            const data = await getAlojamientos();
            console.log('Alojamientos recibidos:', data);
            setHotels(data);
        };
        fetchHotels();
    }, []);

    return (
        <section className="py-12 sm:py-16 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-12">
                    Hoteles Destacados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {hotels.map((hotel, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="relative">
                                <img
                                    src={hotel.imagen1 || '/images/hoteles/default.jpg'}
                                    alt={`Imagen de ${hotel.nombre}`}
                                    className="w-full h-48 sm:h-56 object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                                    {hotel.nombre}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{hotel.ubicacion}</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-500 text-lg">★</span>
                                    <span className="ml-1 text-sm text-gray-700">{hotel.puntuacion || '4.5'}</span>
                                </div>
                                <p className="text-gray-600 mt-3 text-sm line-clamp-2">
                                    {hotel.descripcion}
                                </p>
                                <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                    <span className="text-lg font-bold text-gray-900">
                                        S/ {hotel.precio_noche} /noche
                                    </span>
                                    <button
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                                        aria-label={`Reservar ${hotel.nombre}`}
                                    >
                                        Reservar
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedHotels;
