    import React from 'react';

    export default function Experiencias() {
    return (
        <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Encabezado */}
            <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">VIVE EXPERIENCIAS ÚNICAS</h2>
            <p className="text-gray-600">
                Más que alojamientos, momentos que recordarás para siempre
            </p>
            </div>

            {/* Grid de experiencias */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Experiencia 1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all group relative overflow-hidden">
                <div className="h-40 mb-4 rounded-lg overflow-hidden">
                <img 
                    src="/images/cocinar-aire-libre.jpg" 
                    alt="Cocinar al aire libre"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                </div>
                <div className="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <div>
                    <h3 className="text-lg font-semibold">Cocinar al aire libre</h3>
                    <p className="text-gray-600 text-sm mt-1">
                    Disfruta de una cocina totalmente equipada en medio de la naturaleza
                    </p>
                </div>
                </div>
            </div>

            {/* Experiencia 2 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all group relative overflow-hidden">
                <div className="h-40 mb-4 rounded-lg overflow-hidden">
                <img 
                    src="/images/vista-mar.jpg" 
                    alt="Vista al mar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                </div>
                <div className="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <div>
                    <h3 className="text-lg font-semibold">Despertar con vista al mar</h3>
                    <p className="text-gray-600 text-sm mt-1">
                    Abre tus ojos cada mañana con el sonido de las olas y un panorama espectacular
                    </p>
                </div>
                </div>
            </div>

            {/* Experiencia 3 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all group relative overflow-hidden">
                <div className="h-40 mb-4 rounded-lg overflow-hidden">
                <img 
                    src="/images/tina-estrellas.jpg" 
                    alt="Tina bajo las estrellas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                </div>
                <div className="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                    <h3 className="text-lg font-semibold">Bañarte en una tina de madera bajo las estrellas</h3>
                    <p className="text-gray-600 text-sm mt-1">
                    Relájate en una tina artesanal mientras contemplas el cielo nocturno
                    </p>
                </div>
                </div>
            </div>

            {/* Experiencia 4 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all group relative overflow-hidden">
                <div className="h-40 mb-4 rounded-lg overflow-hidden">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt4wugs5TzZ8qYwyKT7LUSZnqtvA26tdneWg&s" 
                    alt="Senderismo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                </div>
                <div className="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                    <h3 className="text-lg font-semibold">Senderismo en rutas exclusivas</h3>
                    <p className="text-gray-600 text-sm mt-1">
                    Descubre caminos secretos con vistas panorámicas impresionantes
                    </p>
                </div>
                </div>
            </div>

            {/* Experiencia 5 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all group relative overflow-hidden">
                <div className="h-40 mb-4 rounded-lg overflow-hidden">
                <img 
                    src="/images/cena-luces.jpg" 
                    alt="Cena bajo las luces"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                </div>
                <div className="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <h3 className="text-lg font-semibold">Cena bajo un manto de luces</h3>
                    <p className="text-gray-600 text-sm mt-1">
                    Experiencias gastronómicas en ambientes mágicamente iluminados
                    </p>
                </div>
                </div>
            </div>

            {/* Experiencia 6 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all group relative overflow-hidden">
                <div className="h-40 mb-4 rounded-lg overflow-hidden">
                <img 
                    src="/images/yoga-naturaleza.jpg" 
                    alt="Yoga en la naturaleza"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                </div>
                <div className="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm16 7H4v5h16v-5z" />
                </svg>
                <div>
                    <h3 className="text-lg font-semibold">Yoga al amanecer</h3>
                    <p className="text-gray-600 text-sm mt-1">
                    Sesiones privadas con instructores certificados en lugares privilegiados
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Llamado a la acción */}
            <div className="mt-10 text-center">
            <button className="px-5 py-2.5 bg-emerald-600 text-white font-medium rounded-lg shadow-sm hover:bg-emerald-700 transition-colors">
                Ver todas las experiencias
            </button>
            </div>
        </div>
        </section>
    );
    }