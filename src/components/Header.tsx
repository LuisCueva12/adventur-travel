'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const menuIcons = {
    home: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    ),
    destinations: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    experiences: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    offers: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    ),
};

const menuItems = [
    { href: "/", label: "Inicio", icon: menuIcons.home },
    { href: "/destinos", label: "Destinos", icon: menuIcons.destinations },
    { href: "/experiencias", label: "Experiencias", icon: menuIcons.experiences },
    { href: "/ofertas", label: "Ofertas", icon: menuIcons.offers },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute w-full z-50 bg-transparent text-white">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo-1.png"
                            alt="Vacaciones en EAU"
                            width={120}
                            height={60}
                            className="mr-4"
                        />
                    </Link>

                    {/* Menú de navegación (versión escritorio) */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6 lg:space-x-8">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="flex flex-col items-center hover:text-yellow-300 transition">
                                        <span className="mb-1">{item.icon}</span>
                                        <span className="font-bold text-lg">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Botón de reserva + menú hamburguesa */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/reservas"
                            className="hidden sm:inline-block bg-yellow-500 hover:bg-yellow-600 text-white-900 font-bold py-2 px-4 sm:px-6 rounded-full transition shadow-lg"
                        >
                            Reservar Online
                        </Link>
                        <button
                            className="md:hidden text-white focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Abrir menú"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menú de navegación móvil */}
                {menuOpen && (
                    <nav className="md:hidden mt-4">
                        <ul className="flex flex-col space-y-6 bg-black/70 p-4 rounded-lg">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="flex items-center hover:text-yellow-300 transition">
                                        <span className="mr-3">{item.icon}</span>
                                        <span className="font-bold text-lg">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/reservas" className="flex items-center text-yellow-400 font-bold">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-lg">Reservar Online</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}