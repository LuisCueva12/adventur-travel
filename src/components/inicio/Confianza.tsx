import React from 'react';

export default function Confianza() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">RESERVA CON CONFIANZA</h2>
                    <p className="text-gray-600">
                        Estamos contigo en cada paso de tu aventura
                    </p>
                </div>

                {/* Grid de beneficios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Beneficio 1 */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                            <span className="text-3xl font-bold text-emerald-600 mr-3">0%</span>
                            <h3 className="text-lg font-semibold">Pagos flexibles</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Sin intereses en pagos mensuales para tu tranquilidad
                        </p>
                    </div>

                    {/* Beneficio 2 */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                            <span className="text-3xl font-bold text-cyan-600 mr-3">100%</span>
                            <h3 className="text-lg font-semibold">Protección total</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Viajes protegidos con seguros incluidos
                        </p>
                    </div>

                    {/* Beneficio 3 */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                            <span className="text-3xl font-bold text-emerald-600 mr-3">4.9/5</span>
                            <h3 className="text-lg font-semibold">Excelencia certificada</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Valoración de nuestros viajeros
                        </p>
                    </div>

                    {/* Beneficio 4 */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                            <span className="text-3xl font-bold text-cyan-600 mr-3">24/7</span>
                            <h3 className="text-lg font-semibold">Asistencia global</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Soporte continuo durante tu viaje
                        </p>
                    </div>

                    {/* Beneficio 5 */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                            <span className="text-3xl font-bold text-emerald-600 mr-3">10+</span>
                            <h3 className="text-lg font-semibold">Años innovando</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Creando experiencias inolvidables
                        </p>
                    </div>

                    {/* Beneficio 6 */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-lg font-semibold">Garantía de satisfacción</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Tu felicidad es nuestra prioridad
                        </p>
                    </div>
                </div>

                {/* Llamado a la acción */}
                <div className="mt-10 text-center">
                    <button className="px-5 py-2.5 bg-emerald-600 text-white font-medium rounded-lg shadow-sm hover:bg-emerald-700 transition-colors">
                        Descubre nuestras aventuras
                    </button>
                </div>
            </div>
        </section>
    );
}