'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBed, FaCoffee, FaParking, FaWifi, FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero() {
  const beneficios = [
    { icon: <FaBed size={28} />, texto: 'Habitaciones confortables' },
    { icon: <FaCoffee size={28} />, texto: 'Desayuno incluido' },
    { icon: <FaParking size={28} />, texto: 'Estacionamiento privado' },
    { icon: <FaWifi size={28} />, texto: 'WiFi gratuito' },
    { icon: <FaMapMarkerAlt size={28} />, texto: 'A 10 min del centro' },
  ];

  // Parallax
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing effect
  const frases = [
    "Descansa, desconéctate y vive Cajamarca",
    "Tu experiencia única en Hotel Recreo",
    "Relájate en la comodidad que mereces"
  ];
  const [texto, setTexto] = useState("");
  const [fraseIndex, setFraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < frases[fraseIndex].length) {
      const timeout = setTimeout(() => {
        setTexto((prev) => prev + frases[fraseIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTexto("");
        setCharIndex(0);
        setFraseIndex((prev) => (prev + 1) % frases.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fraseIndex]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden text-white">
      {/* Imagen de fondo con parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${offsetY}px)` }}>
        <Image
          src="/images/slider/hotel1.png"
          alt="Hotel Recreo"
          fill
          className="object-cover brightness-[.45] shadow-md"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        
        {/* Título animado con typing */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-2xl mb-6"
        >
          {texto}<span className="animate-pulse">|</span>
        </motion.h1>

        {/* Botón reservar con glow animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href="#reserva"
            className="relative bg-[#556B2F] hover:bg-[#6d8435] text-white font-semibold px-10 py-3 rounded-full shadow-lg transition group"
          >
            <span className="relative z-10">Reservar Ahora</span>
            <span className="absolute inset-0 rounded-full bg-[#6d8435] opacity-30 blur-lg animate-ping"></span>
          </Link>
        </motion.div>

        {/* Beneficios con animación */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-6xl px-4"
        >
          {beneficios.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="flex flex-col items-center text-center gap-2 group"
            >
              <div className="text-[#F5F5DC] group-hover:text-yellow-300 transition">
                {item.icon}
              </div>
              <span className="text-sm md:text-base font-bold text-white group-hover:text-yellow-300 transition">
                {item.texto}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
