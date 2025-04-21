import React from 'react';

interface Imagen {
  id: number;
  src: string;
  alt: string;
}

const imagenes: Imagen[] = [
  { id: 1, src: '/images/galeria/image1.png', alt: 'Mancora ' },
  { id: 2, src: '/images/galeria/image2.png', alt: 'Hotel de lujo' },
  { id: 3, src: '/images/galeria/image3.png', alt: 'ciudad imperdible' },
  { id: 4, src: '/images/galeria/image4.png', alt: 'ciudad del Inca' },
  { id: 5, src: '/images/galeria/image5.png', alt: 'Playa a que disfrutes' },
  { id: 6, src: '/images/galeria/image6.png', alt: 'Hotel unico' },
];

export default function Galeriaad() {
  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-10">
          Nuestra Galería
        </h2>

        {/* Grid para escritorio */}
        <div className="hidden lg:grid grid-cols-3 gap-6 w-full">
          {imagenes.map((img) => (
            <div key={img.id} className="relative group h-56">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-300 group-hover:opacity-80"
                loading="lazy"
              />
              <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </span>
            </div>
          ))}
        </div>

        {/* Grid para tabletas */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
          {imagenes.map((img) => (
            <div key={img.id} className="relative group h-48">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-300 group-hover:opacity-80"
                loading="lazy"
              />
              <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </span>
            </div>
          ))}
        </div>

        {/* Grid para móviles */}
        <div className="grid sm:hidden grid-cols-1 gap-6">
          {imagenes.map((img) => (
            <div key={img.id} className="relative h-56">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-xl shadow-md"
                loading="lazy"
              />
              <span className="absolute bottom-4 left-4 bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1 rounded-lg uppercase">
                {img.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}