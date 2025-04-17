import { useState, useEffect } from 'react';

export default function DestinosRecomendados() {
    const [currentMonth] = useState(new Date().toLocaleString('es-ES', { month: 'long' }));
    const [selectedDestino, setSelectedDestino] = useState(0);
    const [isHovering, setIsHovering] = useState<number | null>(null); // Corregido: tipo number | null

    const destinos = [
        {
            id: 1,
            nombre: 'Venecia, Italia',
            imagen: 'https://images.ecestaticos.com/pRnkdwxo9tZpe8t_TRH4Lv2nkzc=/0x0:1254x836/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F26e%2F225%2F5e6%2F26e2255e66caf841a8b06edf14165f91.jpg',
            descripcion: 'Canales pintorescos y arquitectura histórica',
            precio: '550€',
            puntuacion: 4.8
        },
        {
            id: 2,
            nombre: 'Santorini, Grecia',
            imagen: 'https://cms.w2m.com/dam/Sites/Flowo/imagenes-blog/grecia-en-una-semana/que-ver-grecia-en-una-semana-Mykonos-4.webp',
            descripcion: 'Aguas turquesas y vistas impresionantes',
            precio: '680€',
            puntuacion: 4.9
        },
        {
            id: 3,
            nombre: 'París, Francia',
            imagen: 'https://images.ecestaticos.com/pRnkdwxo9tZpe8t_TRH4Lv2nkzc=/0x0:1254x836/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F26e%2F225%2F5e6%2F26e2255e66caf841a8b06edf14165f91.jpg',
            descripcion: 'Ciudad de la luz y el romance',
            precio: '520€',
            puntuacion: 4.6
        }
    ];

    const estadisticas = [
        { valor: '30K+', texto: 'Clientes satisfechos', icono: '👨‍👩‍👧‍👦' },
        { valor: '150+', texto: 'Destinos únicos', icono: '🌎' },
        { valor: '20+', texto: 'Años de experiencia', icono: '⏱️' }
    ];

    // Auto-cambio de destino cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedDestino((prev) => (prev + 1) % destinos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [destinos.length]);

    // Estrellas de valoración
    const renderStars = (rating: number) => { // Corregido: tipo number explícito
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
        <div className="py-12 sm:py-16 bg-white w-full">
            {/* Elementos decorativos de fondo */}
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
                        ¡{currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} es el mejor momento para viajar!
                    </span>
                    <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
                        Destinos Hermosos Cada Mes
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestra selección de destinos impresionantes para disfrutar de experiencias inolvidables,
                        comodidad inigualable y belleza natural extraordinaria.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Sección izquierda con imágenes */}
                    <div className="w-full lg:w-3/5">
                        <div className="grid grid-cols-3 gap-3 md:gap-4 relative">
                            <div className="col-span-2 row-span-2">
                                <div className="rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 h-64 md:h-80">
                                    <img
                                        src={destinos[selectedDestino].imagen}
                                        alt={destinos[selectedDestino].nombre}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                                        <h3 className="font-bold text-lg">{destinos[selectedDestino].nombre}</h3>
                                        <p className="text-sm opacity-90">{destinos[selectedDestino].descripcion}</p>
                                    </div>
                                </div>
                            </div>

                            {destinos.map((destino, index) => (
                                index !== selectedDestino && index < 3 && (
                                    <div
                                        key={destino.id}
                                        className="col-span-1 row-span-1"
                                        onMouseEnter={() => setIsHovering(index)}
                                        onMouseLeave={() => setIsHovering(null)}
                                        onClick={() => setSelectedDestino(index)}
                                    >
                                        <div
                                            className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 ${isHovering === index ? 'ring-2 ring-blue-400 scale-105' : ''
                                                } h-32 md:h-40`}
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
                        <div className="flex justify-center mt-6 space-x-2">
                            {destinos.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedDestino(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedDestino === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Ver destino ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Sección derecha con texto */}
                    <div className="w-full lg:w-2/5">
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                            <div className="flex items-center mb-6">
                                <div className="h-10 w-1 bg-blue-600 rounded-full mr-4"></div>
                                <div>
                                    <div className="text-sm font-medium text-blue-600">Te Recomendamos</div>
                                    <h3 className="text-2xl font-bold text-gray-900">{destinos[selectedDestino].nombre}</h3>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6">
                                {destinos[selectedDestino].descripcion} Disfruta de una experiencia única
                                con nuestros paquetes especiales diseñados para este destino.
                            </p>

                            <div className="flex justify-between items-center mb-6 border-t border-b border-gray-100 py-4">
                                <div>
                                    <div className="text-sm text-gray-500">Desde</div>
                                    <div className="text-2xl font-bold text-blue-600">{destinos[selectedDestino].precio}</div>
                                    <div className="text-xs text-gray-500">por persona/noche</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Valoración</div>
                                    {renderStars(destinos[selectedDestino].puntuacion)}
                                </div>
                            </div>

                            {/* Estadísticas */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {estadisticas.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center text-center p-2 rounded-lg hover:bg-blue-50 transition-colors"
                                    >
                                        <div className="text-2xl mb-1">{stat.icono}</div>
                                        <div className="text-xl font-bold text-gray-900">{stat.valor}</div>
                                        <div className="text-xs text-gray-500">{stat.texto}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
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
                                    Explorar Destinos
                                </button>
                                <button className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium transition-colors">
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