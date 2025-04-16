import React from 'react';

export default function Confianza() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-700 mb-10">
          RESERVA CON CONFIANZA
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Estamos contigo en cada paso de tu aventura
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">0%</div>
            <p className="text-sm sm:text-base text-gray-700">
              Pagos mensuales sin intereses
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
            <p className="text-sm sm:text-base text-gray-700">
              Viajes protegidos
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">4.9/5</div>
            <p className="text-sm sm:text-base text-gray-700">
              Valoración de clientes
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
            <p className="text-sm sm:text-base text-gray-700">
              Asistencia en viaje
            </p>
          </div>

          {/* Tarjeta 5 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
            <p className="text-sm sm:text-base text-gray-700">
              Años de experiencia
            </p>
          </div>

          {/* Tarjeta 6 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">✓</div>
            <p className="text-sm sm:text-base text-gray-700">
              Garantía de satisfacción
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};