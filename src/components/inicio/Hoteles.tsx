"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBed, FaTimes, FaStar } from "react-icons/fa";

const Hoteles = () => {
  const habitaciones = [
    {
      id: 1,
      name: "Habitación Simple",
      image: "/images/habitaciones/habitacion1.jpg",
      price: 120,
      description:
        "Cómoda habitación individual con baño privado, escritorio y WiFi gratuito.",
    },
    {
      id: 2,
      name: "Habitación Doble",
      image: "/images/habitaciones/habitacion2.jpg",
      price: 180,
      description:
        "Espaciosa habitación para dos personas con cama matrimonial o dos camas individuales.",
    },
    {
      id: 3,
      name: "Habitación Triple",
      image: "/images/habitaciones/habitacion3.jpg",
      price: 240,
      description:
        "Ideal para grupos pequeños o familias, equipada con tres camas y amplio espacio.",
    },
    {
      id: 4,
      name: "Habitación Familiar",
      image: "/images/habitaciones/habitacion4.jpg",
      price: 300,
      description:
        "Perfecta para familias, con dos dormitorios conectados y todas las comodidades.",
    },
  ];

  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  const handleReservar = (tipo: string) => {
    window.location.href = `/reserva?habitacion=${encodeURIComponent(tipo)}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f5f5dc] via-[#ececdc] to-[#d6d6c2] relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.svg')] bg-repeat"></div>

      <div className="relative container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-[#0F3057] mb-14 drop-shadow-lg"
        >
          <FaBed className="inline-block mr-3 text-[#556B2F]" />
          Nuestras Habitaciones
        </motion.h2>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {habitaciones.map((hab, index) => (
            <motion.article
              key={hab.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="backdrop-blur-lg bg-white/80 rounded-2xl shadow-xl border border-white/40 cursor-pointer overflow-hidden group"
              onClick={() => setSelectedRoom(hab)}
            >
              {/* Imagen con overlay */}
              <div className="relative">
                <img
                  src={hab.image}
                  alt={hab.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-[#556B2F] text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-md">
                  S/. {hab.price} / noche
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[#0F3057] flex items-center gap-2">
                  {hab.name}
                  <FaStar className="text-yellow-500" />
                </h3>
                <p className="text-gray-600 mt-2 text-sm flex-grow line-clamp-3">
                  {hab.description}
                </p>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReservar(hab.name);
                  }}
                  className="mt-4 w-full bg-gradient-to-r from-[#0F3057] to-[#082437] text-white py-2 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
                >
                  Reservar
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal con info detallada */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              <div className="relative">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-72 object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-gray-200"
                  onClick={() => setSelectedRoom(null)}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0F3057]">
                  {selectedRoom.name}
                </h3>
                <p className="text-gray-600 mt-3">{selectedRoom.description}</p>
                <p className="mt-4 text-lg font-semibold text-[#556B2F]">
                  Precio: S/. {selectedRoom.price} / noche
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleReservar(selectedRoom.name)}
                  className="mt-5 w-full bg-gradient-to-r from-[#0F3057] to-[#082437] text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
                >
                  Reservar Ahora
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hoteles;
