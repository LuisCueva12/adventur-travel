import React from "react";

export default function Ofertas() {
  const ofertas = [
    {
      id: 1,
      titulo: "Habitación 1 - 4x3 en noches",
      descripcion: "Reserva 3 noches y la 4ª es gratis.",
      imagen: "/images/Habitaciones/habitacion3.jpg",
      precio: "Desde S/. 350",
    },
    {
      id: 2,
      titulo: "Habitación 2 - Descuento del 15%",
      descripcion: "Aplica para reservas anticipadas en temporada baja.",
      imagen: "/images/Habitaciones/habitacion2.jpg",
      precio: "Desde S/. 280",
    },
    {
      id: 3,
      titulo: "Habitación 3 - Paquete Familiar",
      descripcion: "Incluye desayuno y actividades recreativas.",
      imagen: "/images/Habitaciones/habitacion1.jpg",
      precio: "Desde S/. 500",
    },
  ];

  return (
    <section id="ofertas" className="py-20 bg-gradient-to-b from-[#F5F5DC] to-[#EDE5D5]">
      <div className="max-w-7xl mx-auto px-6">
       <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0F3057] mb-12 pt-6">
        Ofertas Especiales
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {ofertas.map((oferta) => (
            <div
              key={oferta.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-3 overflow-hidden border border-[#556B2F]/25"
            >
              {/* Imagen */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={oferta.imagen}
                  alt={oferta.titulo}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-[#556B2F]/90 text-white text-xs font-semibold px-4 py-1 rounded-2xl shadow-lg backdrop-blur-sm">
                  Oferta
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#0F3057] mb-3">
                  {oferta.titulo}
                </h3>
                <p className="text-gray-700 text-sm flex-grow mb-4">{oferta.descripcion}</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-bold text-[#556B2F]">
                    {oferta.precio}
                  </span>
                  <button className="bg-[#0F3057] hover:bg-[#133B6E] text-white px-6 py-2 rounded-2xl text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
