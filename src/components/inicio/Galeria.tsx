"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Galeria() {
  const habitaciones = [
    { id: 1, nombre: "Habitación Simple", imagen: "/images/habitaciones/habitacion1.jpg", precio: "S/ 120", etiqueta: "Económica" },
    { id: 2, nombre: "Habitación Doble", imagen: "/images/habitaciones/habitacion2.jpg", precio: "S/ 180", etiqueta: "Ideal en pareja" },
    { id: 3, nombre: "Habitación Triple", imagen: "/images/habitaciones/habitacion3.jpg", precio: "S/ 220", etiqueta: "Familiar" },
    { id: 4, nombre: "Habitación Familiar", imagen: "/images/habitaciones/habitacion4.jpg", precio: "S/ 300", etiqueta: "Popular" },
    { id: 5, nombre: "Suite Ejecutiva", imagen: "/images/habitaciones/habitacion5.jpg", precio: "S/ 350", etiqueta: "Business" },
    { id: 6, nombre: "Suite Presidencial", imagen: "/images/habitaciones/habitacion6.jpg", precio: "S/ 500", etiqueta: "Lujo" },
  ];

  return (
    <section id="galeria" className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Título con animación */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-[#0F3057] mb-12"
        >
           Nuestras Habitaciones 
        </motion.h2>

        {/* Grid moderno */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {habitaciones.map((hab, index) => (
            <motion.div
              key={hab.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Imagen */}
              <Image
                src={hab.imagen}
                alt={hab.nombre}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Capa oscura en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{hab.nombre}</h3>
                <span className="text-[#FFD700] font-semibold">{hab.precio} / noche</span>
              </div>

              {/* Etiqueta */}
              <span className="absolute top-3 left-3 bg-[#FFD700] text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {hab.etiqueta}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
