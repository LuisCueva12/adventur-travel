import React from 'react';

export default function Experiencias() {
    const destinations = [
        {
            id: 1,
            name: 'PLAYA DE TULUM',
            image: '/images/destinations/tulum-beach.png',
        },
        {
            id: 2,
            name: 'ASPEN DOWN',
            image: '/images/destinations/aspen-down.png',
        },
        {
            id: 3,
            name: 'VISTA LACANDONA',
            image: '/images/destinations/lacando-vista.png',
        },
        {
            id: 4,
            name: 'VALLE DEL EDÉN',
            image: '/images/destinations/eden-valley.png',
        },
        {
            id: 5,
            name: 'CUEVAS ALPINAS',
            image: '/images/destinations/alps-caves.png',
        },
    ];

    return (
        <section className="py-12 sm:py-16 bg-white w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-10">
                    Vacaciones de Lujo, Opciones Exclusivas en las Mejores Ciudades
                </h2>

                {/* Grid para escritorio */}
                <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-6 w-full h-[600px]">
                    {/* Imagen 1: Grande, ocupa 2 columnas y 2 filas */}
                    <div className="col-span-2 row-span-2 relative group h-full">
                        <img
                            src={destinations[0].image}
                            alt={`Destino ${destinations[0].name}`}
                            className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-300 group-hover:opacity-80"
                            loading="lazy"
                        />
                        <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {destinations[0].name}
                        </span>
                    </div>

                    {/* Imagen 2: Grande, ocupa 2 columnas y 1 fila */}
                    <div className="col-span-2 row-span-1 relative group h-full">
                        <img
                            src={destinations[1].image}
                            alt={`Destino ${destinations[1].name}`}
                            className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-300 group-hover:opacity-80"
                            loading="lazy"
                        />
                        <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {destinations[1].name}
                        </span>
                    </div>

                    {/* Contenedor para las 3 imágenes pequeñas */}
                    <div className="col-span-2 row-span-1 grid grid-cols-3 gap-6 h-full">
                        {/* Imagen 3 */}
                        <div className="col-span-1 relative group h-full">
                            <img
                                src={destinations[2].image}
                                alt={`Destino ${destinations[2].name}`}
                                className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-300 group-hover:opacity-80"
                                loading="lazy"
                            />
                            <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {destinations[2].name}
                            </span>
                        </div>

                        {/* Imagen 4 */}
                        <div className="col-span-1 relative group h-full">
                            <img
                                src={destinations[3].image}
                                alt={`Destino ${destinations[3].name}`}
                                className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-300 group-hover:opacity-80"
                                loading="lazy"
                            />
                            <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {destinations[3].name}
                            </span>
                        </div>

                        {/* Imagen 5 */}
                        <div className="col-span-1 relative group h-full">
                            <img
                                src={destinations[4].image}
                                alt={`Destino ${destinations[4].name}`}
                                className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-300 group-hover:opacity-80"
                                loading="lazy"
                            />
                            <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {destinations[4].name}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Grid para tabletas (2 columnas) */}
                <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
                    {destinations.map((destination) => (
                        <div key={destination.id} className="relative group h-48">
                            <img
                                src={destination.image}
                                alt={`Destino ${destination.name}`}
                                className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-300 group-hover:opacity-80"
                                loading="lazy"
                            />
                            <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {destination.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Grid para móviles (1 columna) */}
                <div className="grid sm:hidden grid-cols-1 gap-6">
                    {destinations.map((destination) => (
                        <div key={destination.id} className="relative h-56">
                            <img
                                src={destination.image}
                                alt={`Destino ${destination.name}`}
                                className="w-full h-full object-cover rounded-xl shadow-md"
                                loading="lazy"
                            />
                            <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase">
                                {destination.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
