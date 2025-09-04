import React from 'react';

interface Imagen {
  id: number;
  src: string;
  alt: string;
  descripcion: string;
}

const imagenes: Imagen[] = [
  { id: 1, src: '/images/habitaciones/habitacion1.jpg', alt: 'Habitación Simple', descripcion: 'Cómoda habitación individual con baño privado, escritorio y WiFi gratuito.' },
  { id: 2, src: '/images/habitaciones/habitacion2.jpg', alt: 'Habitación Doble', descripcion: 'Amplia habitación con cama matrimonial o dos camas individuales.' },
  { id: 3, src: '/images/habitaciones/habitacion3.jpg', alt: 'Habitación Familiar', descripcion: 'Espaciosa habitación ideal para familias, con varias camas y zona de descanso.' },
  { id: 4, src: '/images/habitaciones/habitacion4.jpg', alt: 'Suite Ejecutiva', descripcion: 'Habitación de lujo con vista panorámica y servicios premium.' },
  { id: 5, src: '/images/habitaciones/habitacion5.jpg', alt: 'Suite Matrimonial', descripcion: 'Elegante habitación con cama king-size y jacuzzi privado.' },
  { id: 6, src: '/images/habitaciones/habitacion6.jpg', alt: 'Bungalow Privado', descripcion: 'Alojamiento exclusivo rodeado de naturaleza para una experiencia única.' },
];

export default function Galeriaad() {
  return (
    <section className="pt-28 pb-12 sm:pb-16 bg-[#F5F5DC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-[#0F3057] mb-8 sm:mb-10">
          Nuestras Habitaciones & Paquetes
        </h2>

        {/* Grid adaptable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {imagenes.map((img) => (
            <div
              key={img.id}
              className="relative group h-64 sm:h-56 lg:h-64 overflow-hidden rounded-xl shadow-md border border-[#556B2F]/20"
            >
              {/* Imagen */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Capa oscura y contenido */}
              <div className="absolute inset-0 bg-[#0F3057]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-white text-lg font-bold mb-3 drop-shadow-md">
                  {img.alt}
                </h3>
                <p className="text-white text-sm mb-6">{img.descripcion}</p> {/* más espacio con mb-6 */}
                <button className="bg-[#556B2F] hover:bg-[#6B8E23] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition">
                  Reservar
                </button>
              </div>

              {/* Borde animado */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#556B2F] transition-all duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
