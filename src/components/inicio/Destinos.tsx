import { useState, useEffect } from 'react';

export default function DestinosRecomendados() {
    const [currentMonth] = useState(new Date().toLocaleString('es-ES', { month: 'long' }));
    const [selectedDestino, setSelectedDestino] = useState(0);
    const [isHovering, setIsHovering] = useState<number | null>(null);

    // Destinos actualizados para Perú
    const destinos = [
        {
            id: 1,
            nombre: 'Machu Picchu, Cusco',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbBJqWY5wbB-0mmjXSQrGzv71GKGGTruJcg&s',
            descripcion: 'La ciudad perdida de los Incas, maravilla del mundo moderno',
            precio: 'S/ 450',
            puntuacion: 4.9
        },
        {
            id: 2,
            nombre: 'Lago Titicaca, Puno',
            imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/28/9f/2b/lago-titicaca.jpg?w=1200&h=-1&s=1',
            descripcion: 'El lago navegable más alto del mundo con islas flotantes',
            precio: 'S/ 380',
            puntuacion: 4.7
        },
        {
            id: 3,
            nombre: 'Máncora, Piura',
            imagen: 'https://www.playas-peru.com/wp-content/uploads/2017/06/piura-mancora.jpg',
            descripcion: 'Paraíso tropical con las mejores olas para surfear',
            precio: 'S/ 520',
            puntuacion: 4.8
        },
    ];

    const estadisticas = [
        { valor: '25K+', texto: 'Viajeros satisfechos', icono: '👨‍👩‍👧‍👦' },
        { valor: '50+', texto: 'Alojamientos únicos', icono: '🏨' },
        { valor: '15+', texto: 'Años de experiencia', icono: '⏱️' }
    ];

    // Auto-cambio de destino cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedDestino((prev) => (prev + 1) % destinos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [destinos.length]);

    // Estrellas de valoración
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`text-lg ${i < fullStars
                            ? 'text-yellow-400'
                            : i === fullStars && hasHalfStar
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                    >
                        ★
                    </span>
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">{rating.toFixed(1)}</span>
            </div>
        );
    };

    return (
        <div className="py-8 sm:py-12 lg:py-16 bg-white w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                        ¡{currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} es ideal para visitar Perú!
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Alojamientos Destacados en Perú
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Descubre nuestra selección de los mejores alojamientos en los destinos más impresionantes del Perú,
                        donde la comodidad se encuentra con la aventura.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
                    {/* Sección izquierda con imágenes */}
                    <div className="w-full lg:w-1/2 xl:w-3/5">
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 relative">
                            <div className="col-span-2 row-span-2">
                                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] h-48 sm:h-64 md:h-80">
                                    <img
                                        src={destinos[selectedDestino].imagen}
                                        alt={destinos[selectedDestino].nombre}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 text-white">
                                        <h3 className="font-bold text-base sm:text-lg">{destinos[selectedDestino].nombre}</h3>
                                        <p className="text-xs sm:text-sm opacity-90">{destinos[selectedDestino].descripcion}</p>
                                    </div>
                                </div>
                            </div>

                            {destinos.map((destino, index) => (
                                index !== selectedDestino && index < 4 && (
                                    <div
                                        key={destino.id}
                                        className="col-span-1 row-span-1"
                                        onMouseEnter={() => setIsHovering(index)}
                                        onMouseLeave={() => setIsHovering(null)}
                                        onClick={() => setSelectedDestino(index)}
                                    >
                                        <div
                                            className={`rounded-lg sm:rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${isHovering === index ? 'ring-2 ring-blue-400 scale-[1.03]' : ''
                                                } h-24 sm:h-32 md:h-40`}
                                        >
                                            <img
                                                src={destino.imagen}
                                                alt={destino.nombre}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Indicadores de selección */}
                        <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                            {destinos.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedDestino(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedDestino === index ? 'bg-blue-600 w-4 sm:w-6' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Ver destino ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Sección derecha con texto */}
                    <div className="w-full lg:w-1/2 xl:w-2/5 mt-6 sm:mt-0">
                        <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-100">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="h-8 sm:h-10 w-1 bg-blue-600 rounded-full mr-3 sm:mr-4"></div>
                                <div>
                                    <div className="text-xs sm:text-sm font-medium text-blue-600">Te Recomendamos</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{destinos[selectedDestino].nombre}</h3>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                                {destinos[selectedDestino].descripcion}. Disfruta de alojamientos seleccionados cuidadosamente para que tu experiencia en {destinos[selectedDestino].nombre.split(',')[0]} sea inolvidable.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 border-t border-b border-gray-100 py-3 sm:py-4 gap-3 sm:gap-0">
                                <div>
                                    <div className="text-xs sm:text-sm text-gray-500">Desde</div>
                                    <div className="text-xl sm:text-2xl font-bold text-blue-600">{destinos[selectedDestino].precio}</div>
                                    <div className="text-xs text-gray-500">por persona/noche</div>
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm text-gray-500 mb-1">Valoración</div>
                                    {renderStars(destinos[selectedDestino].puntuacion)}
                                </div>
                            </div>

                            {/* Estadísticas */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
                                {estadisticas.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center text-center p-1 sm:p-2 rounded-lg hover:bg-blue-50 transition-colors"
                                    >
                                        <div className="text-xl sm:text-2xl mb-1">{stat.icono}</div>
                                        <div className="text-lg sm:text-xl font-bold text-gray-900">{stat.valor}</div>
                                        <div className="text-xs text-gray-500">{stat.texto}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center justify-center text-sm sm:text-base">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    Explorar
                                </button>
                                <button className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors text-sm sm:text-base">
                                    Ver Ofertas
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}