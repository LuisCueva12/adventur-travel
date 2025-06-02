import React from 'react';

interface Imagen {
  id: number;
  src: string;
  alt: string;
  descripcion: string;
}

const imagenes: Imagen[] = [
  { id: 1, src: '/images/galeria/image1.png', alt: 'Máncora', descripcion: 'Disfruta del sol y las olas en Máncora.' },
  { id: 2, src: '/images/galeria/image2.png', alt: 'Hotel de lujo', descripcion: 'Hospédate en un hotel cinco estrellas frente al mar.' },
  { id: 3, src: '/images/galeria/image3.png', alt: 'Ciudad imperdible', descripcion: 'Explora una ciudad llena de historia y cultura.' },
  { id: 4, src: '/images/galeria/image4.png', alt: 'Ciudad del Inca', descripcion: 'Descubre los secretos del Imperio Inca.' },
  { id: 5, src: '/images/galeria/image5.png', alt: 'Playa para disfrutar', descripcion: 'Relájate en playas paradisíacas.' },
  { id: 6, src: '/images/galeria/image6.png', alt: 'Hotel único', descripcion: 'Vive una experiencia única en nuestro hotel boutique.' },
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
            <div key={img.id} className="relative group h-56 overflow-hidden rounded-xl shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-center rounded-xl">
                <h3 className="text-white text-lg font-bold mb-2">{img.alt}</h3>
                <p className="text-white text-sm">{img.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid para tabletas */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
          {imagenes.map((img) => (
            <div key={img.id} className="relative group h-48 overflow-hidden rounded-xl shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-center rounded-xl">
                <h3 className="text-white text-lg font-bold mb-2">{img.alt}</h3>
                <p className="text-white text-sm">{img.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid para móviles */}
        <div className="grid sm:hidden grid-cols-1 gap-6">
          {imagenes.map((img) => (
            <div key={img.id} className="relative group h-56 overflow-hidden rounded-xl shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-center rounded-xl">
                <h3 className="text-white text-lg font-bold mb-2">{img.alt}</h3>
                <p className="text-white text-sm">{img.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}