'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMenu, IoClose } from 'react-icons/io5';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("ES");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null; // 🔥 evita flash en SSR

  const buttonStyle =
    'relative bg-[#556B2F] hover:bg-[#6d8435] text-white px-4 py-2 rounded-full transition text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow-lg overflow-hidden';

  const whatsappStyle =
    'relative bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-2 rounded-full transition text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow-lg overflow-hidden';

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Habitaciones', path: '/habitaciones' },
    { name: 'Paquetes', path: '/paquetes' },
    { name: 'Ofertas', path: '/ofertas' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Reserva', path: '/reserva' },
  ];

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "#f9f9f9" : "#ffffff",
        height: scrolled ? "64px" : "80px",
        boxShadow: scrolled
          ? "0 4px 10px rgba(0,0,0,0.08)"
          : "0 2px 6px rgba(0,0,0,0.05)"
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full fixed top-0 left-0 z-50 border-b border-[#e5e5e5]"
    >
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center h-full">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div whileHover={{ rotate: -8 }} transition={{ type: "spring", stiffness: 200 }}>
            <Image
              src="/images/logo/logo.png"
              alt="Hotel Recreo"
              width={50}
              height={50}
              priority
              className="drop-shadow-sm"
            />
          </motion.div>
          <span className="hidden sm:block font-bold text-lg text-[#0F3057] tracking-wide">
            Hotel Recreo
          </span>
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="relative group">
              <span className="text-gray-700 group-hover:text-[#556B2F] transition">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#556B2F] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Botones */}
        <div className="flex items-center space-x-4">
          {/* Idiomas */}
          <div className="hidden md:flex space-x-2">
            {["ES", "EN"].map((lng) => (
              <button key={lng} onClick={() => setLang(lng)}>
                <Image
                  src={`/images/idiom/${lng === "ES" ? "es.png" : "eu.png"}`}
                  alt={lng}
                  width={25}
                  height={25}
                  className={`rounded-full shadow ${lang === lng ? "ring-2 ring-[#556B2F]" : ""}`}
                />
              </button>
            ))}
          </div>

          {/* Botones acción */}
          <div className="hidden md:flex space-x-2">
            <Link href="/contacto">
              <motion.span whileHover={{ scale: 1.08 }} className={buttonStyle}>
                Contacto
              </motion.span>
            </Link>
            <Link href="/reserva">
              <motion.span whileHover={{ scale: 1.08 }} className={buttonStyle}>
                Reserva
              </motion.span>
            </Link>
            <a href="https://wa.me/51942135960" target="_blank" rel="noopener noreferrer">
              <motion.span whileHover={{ scale: 1.08 }} className={whatsappStyle}>
                <FaWhatsapp /> WhatsApp
              </motion.span>
            </a>
          </div>

          {/* Menú móvil */}
          <button
            className="lg:hidden text-[#0F3057]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="block text-gray-700 hover:text-[#556B2F] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-2 pt-3 border-t border-gray-200">
                <Link href="/contacto" onClick={() => setMenuOpen(false)}>
                  <span className={buttonStyle}>Contacto</span>
                </Link>
                <a href="https://wa.me/51942135960" target="_blank" rel="noopener noreferrer">
                  <span className={whatsappStyle}>
                    <FaWhatsapp /> WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
