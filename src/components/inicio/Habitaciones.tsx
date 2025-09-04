"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Habitaciones() {
  const [selectedSuite, setSelectedSuite] = useState(0);

  const suites = [
    {
      id: 1,
      nombre: "Suite Clásica",
      imagen: "/images/habitaciones/habitacion4.jpg",
      descripcion:
        "Perfecta para quienes viajan solos. Una atmósfera cálida con cama individual, escritorio y baño privado.",
      precio: "S/ 120",
      puntuacion: 4.7,
    },
    {
      id: 2,
      nombre: "Suite Doble Deluxe",
      imagen: "/images/habitaciones/habitacion2.jpg",
      descripcion:
        "Espaciosa y elegante, equipada con cama matrimonial o dos individuales. Ideal para parejas o amigos.",
      precio: "S/ 180",
      puntuacion: 4.8,
    },
    {
      id: 3,
      nombre: "Suite Familiar Premium",
      imagen: "/images/habitaciones/habitacion1.jpg",
      descripcion:
        "Un espacio pensado para familias: varias camas, zona de descanso y todas las comodidades para disfrutar juntos.",
      precio: "S/ 250",
      puntuacion: 4.9,
    },
  ];

  // Cambio automático de suite
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedSuite((prev) => (prev + 1) % suites.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [suites.length]);

  return (
    <section className="relative bg-gradient-to-b from-[#FAF9F6] to-white py-20 px-4 sm:px-8 overflow-hidden">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-5 py-1.5 rounded-full bg-[#8B5E3C] text-white font-semibold text-sm tracking-wide shadow mb-5">
          Vive la experiencia en Hotel Recreo
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-4">
          Habitaciones <span className="text-[#8B5E3C]">con estilo</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explora nuestras suites de forma interactiva, con animaciones fluidas
          y un diseño elegante.
        </p>
      </motion.div>

      <div className="relative flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Sección izquierda: Carrusel vertical */}
        <div className="lg:w-1/2 flex flex-col items-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={suites[selectedSuite].id}
              initial={{ opacity: 0, y: 60, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -60, rotate: -5 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] w-full max-w-lg"
            >
              <img
                src={suites[selectedSuite].imagen}
                alt={suites[selectedSuite].nombre}
                className="w-full h-full object-cover"
              />

              {/* Overlay con degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold drop-shadow-lg">
                  {suites[selectedSuite].nombre}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicadores laterales (timeline) */}
          <div className="flex flex-col mt-8 space-y-4">
            {suites.map((suite, index) => (
              <motion.button
                key={suite.id}
                onClick={() => setSelectedSuite(index)}
                whileHover={{ scale: 1.1 }}
                className={`w-4 h-4 rounded-full border-2 transition ${
                  selectedSuite === index
                    ? "bg-[#8B5E3C] border-[#8B5E3C] shadow-md"
                    : "bg-gray-200 border-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sección derecha: Info */}
        <motion.div
          key={suites[selectedSuite].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col justify-center bg-white rounded-3xl p-10 shadow-xl border border-[#8B5E3C]/20"
        >
          <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            {suites[selectedSuite].nombre}
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {suites[selectedSuite].descripcion}
          </p>

          {/* Precio y valoración */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-sm text-gray-500">Desde</p>
              <p className="text-3xl font-bold text-[#1A1A1A]">
                {suites[selectedSuite].precio}
              </p>
              <p className="text-xs text-gray-500">por noche</p>
            </div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-yellow-500 text-lg">
              {"★".repeat(Math.floor(suites[selectedSuite].puntuacion))}
              <span className="text-gray-400">
                {"★".repeat(5 - Math.floor(suites[selectedSuite].puntuacion))}
              </span>
              <span className="ml-2 text-gray-600 text-sm">
                {suites[selectedSuite].puntuacion.toFixed(1)}
              </span>
            </motion.div>
          </div>

          {/* Botones animados */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/reserva?suite=${encodeURIComponent(suites[selectedSuite].nombre)}`}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full bg-[#8B5E3C] hover:bg-[#A97142] text-white py-3 px-6 rounded-lg font-medium transition shadow-md"
              >
                Reservar ahora
              </motion.button>
            </Link>
            <Link href="/ofertas">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="w-full bg-[#1A1A1A] hover:bg-[#333333] text-white py-3 px-6 rounded-lg font-medium transition shadow-md"
              >
                Ver ofertas
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
