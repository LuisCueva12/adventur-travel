import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#001f3f] text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Logo y descripción */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md">
                                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 10L12 2L21 10V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">Aventuras</span>
                        </div>

                        <p className="text-sm leading-6 text-cyan-100">
                            Descubre los alojamientos más auténticos para vivir aventuras inolvidables en plena naturaleza.
                        </p>

                        {/* Redes sociales */}
                        <div className="flex space-x-6">
                            {[
                                { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', url: 'https://facebook.com/yourpage' },
                                { name: 'Instagram', icon: 'M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm10.125 2.375a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75ZM12 7.25a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Z', url: 'https://instagram.com/yourpage' },
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    className="text-cyan-300 hover:text-white transition-colors"
                                    aria-label={item.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Enlaces */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Destinos</h3>
                                <ul className="mt-6 space-y-4">
                                    {[
                                        { name: 'Montaña', path: '/destinos/montana' },
                                        { name: 'Playa', path: '/destinos/playa' },
                                        { name: 'Selva', path: '/destinos/selva' },
                                        { name: 'Desierto', path: '/destinos/desierto' },
                                        { name: 'Lagos', path: '/destinos/lagos' },
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.path} className="text-sm leading-6 text-cyan-100 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Aventuras</h3>
                                <ul className="mt-6 space-y-4">
                                    {[
                                        { name: 'Senderismo', path: '/aventuras/senderismo' },
                                        { name: 'Escalada', path: '/aventuras/escalada' },
                                        { name: 'Rafting', path: '/aventuras/rafting' },
                                        { name: 'Ciclismo', path: '/aventuras/ciclismo' },
                                        { name: 'Observación', path: '/aventuras/observacion' },
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.path} className="text-sm leading-6 text-cyan-100 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
                                <ul className="mt-6 space-y-4">
                                    {[
                                        { name: 'Sobre nosotros', path: '/empresa/sobre-nosotros' },
                                        { name: 'Nuestro equipo', path: '/empresa/equipo' },
                                        { name: 'Blog', path: '/blog' },
                                        { name: 'Trabaja con nosotros', path: '/empresa/trabaja-con-nosotros' },
                                        { name: 'Sostenibilidad', path: '/empresa/sostenibilidad' },
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.path} className="text-sm leading-6 text-cyan-100 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul className="mt-6 space-y-4">
                                    {[
                                        { name: 'Política de privacidad', path: '/legal/politica-privacidad' },
                                        { name: 'Términos y condiciones', path: '/legal/terminos-condiciones' },
                                        { name: 'Política de cookies', path: '/legal/politica-cookies' },
                                        { name: 'Aviso legal', path: '/legal/aviso-legal' },
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.path} className="text-sm leading-6 text-cyan-100 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs leading-5 text-cyan-200">
                        © {new Date().getFullYear()} EcoLodge Adventures. Todos los derechos reservados.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link href="/legal/terminos-servicio" className="text-xs leading-5 text-cyan-200 hover:text-white transition-colors">
                            Términos de servicio
                        </Link>
                        <Link href="/legal/politica-privacidad" className="text-xs leading-5 text-cyan-200 hover:text-white transition-colors">
                            Política de privacidad
                        </Link>
                        <Link href="/legal/politica-cookies" className="text-xs leading-5 text-cyan-200 hover:text-white transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}