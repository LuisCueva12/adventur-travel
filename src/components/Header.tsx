'use client';
import { useState } from 'react';
import Link from 'next/link';

const navItems = [
    { name: 'Inicio', href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Alojamientos', href: '/alojamientos', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Aventuras', href: '/aventuras', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { name: 'Destinos', href: '/destinos', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#001f3f] text-white sticky top-0 z-50 shadow-lg">
            <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all shadow-md">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 10L12 2L21 10V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hidden sm:block tracking-tight">
                        Aventuras
                    </span>
                </Link>

                {/* Nav Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium hover:text-cyan-300 hover:bg-white/10 transition-all group"
                                >
                                    <svg className="h-5 w-5 text-cyan-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                                    </svg>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right Side / Mobile menu toggle */}
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex gap-3">
                        <Link href="/login" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
                            Iniciar sesión
                        </Link>
                        <Link href="/register" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                            Registrarse
                        </Link>
                    </div>
                    <button
                        className="rounded-full p-2 text-cyan-300 hover:bg-white/10 hover:text-white transition-colors md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#001a35]">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={`mobile-${item.name}`}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-3 rounded-lg font-medium hover:text-cyan-300 hover:bg-white/10 transition-colors"
                            >
                                <svg className="h-5 w-5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                                </svg>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-2 pb-4 px-4 space-y-3 border-t border-white/10">
                        <Link href="/login" className="w-full flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-medium text-white shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all" onClick={() => setMobileMenuOpen(false)}>
                            Iniciar sesión
                        </Link>
                        <Link href="/register" className="w-full flex justify-center items-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            Registrarse
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
