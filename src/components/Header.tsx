import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'Alojamientos', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
        { name: 'Aventuras', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { name: 'Destinos', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
        { name: 'Experiencias', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo y nombre de la marca */}
                <div className="flex items-center gap-3">
                    <a className="flex items-center gap-2 group" href="#">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 group-hover:from-green-600 group-hover:to-emerald-700 transition-all">
                            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 10L12 2L21 10V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent hidden sm:block">Aventuras</span>
                    </a>
                </div>

                {/* Navegación principal - Desktop */}
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-gray-700 font-medium hover:text-emerald-600 hover:bg-gray-50 transition-colors group"
                                    href="#"
                                >
                                    <svg
                                        className="h-5 w-5 text-gray-400 group-hover:text-emerald-500 transition-colors"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                                    </svg>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Acciones del usuario */}
                <div className="flex items-center gap-3">

                    <div className="hidden sm:flex sm:gap-3">
                        <a
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:from-green-600 hover:to-emerald-700 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                            href="#"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Iniciar sesión
                        </a>
                        <a
                            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                            href="#"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            Registrarse
                        </a>
                    </div>

                    {/* Botón de menú móvil */}
                    <button
                        className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors md:hidden"
                        aria-label="Toggle menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-4 pt-2 pb-4 space-y-2 border-t border-gray-200">
                    {navItems.map((item) => (
                        <a
                            key={`mobile-${item.name}`}
                            href="#"
                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-700 font-medium hover:text-emerald-600 hover:bg-gray-50 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                            </svg>
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="pt-2 pb-4 px-4 space-y-3 border-t border-gray-200">
                    <a
                        href="#"
                        className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:from-green-600 hover:to-emerald-700 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Iniciar sesión
                    </a>
                    <a
                        href="#"
                        className="flex items-center justify-center gap-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Registrarse
                    </a>
                </div>
            </div>
        </header>
    );
}