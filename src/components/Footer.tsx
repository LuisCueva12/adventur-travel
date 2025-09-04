import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#556B2F] text-white text-sm">
            <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                
                {/* Logo y datos legales */}
                <div className="flex items-center space-x-4">
                    <Image
                        src="/images/logo-1.png"
                        alt="Adventure Lodge"
                        width={90}
                        height={45}
                    />
                    <div className="leading-tight text-green-100 text-xs">
                        <p><strong>RUC:</strong> 20567891234</p>
                        <p><strong>Razón social:</strong> Adventure Lodge SAC</p>
                        <p><a href="mailto:ventas@adventur.pe" className="hover:underline">ventas@adventur.pe</a> | <a href="tel:+51951427420" className="hover:underline">+51 951 427 420</a></p>
                    </div>
                </div>

                {/* Enlaces rápidos */}
                <div className="flex space-x-4">
                    <Link href="/legal/politica-privacidad" className="hover:underline">Política de privacidad</Link>
                    <Link href="/legal/terminos-condiciones" className="hover:underline">Términos de reserva</Link>
                </div>

                {/* Redes sociales */}
                <div className="flex space-x-3">
                    {[
                        { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', url: 'https://facebook.com/yourpage' },
                        { name: 'Instagram', icon: 'M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm10.125 2.375a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75ZM12 7.25a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Z', url: 'https://instagram.com/yourpage' },
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            className="text-green-300 hover:text-white transition-colors"
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

            {/* Copyright */}
            <div className="border-t border-white/10 text-center py-2 text-xs text-green-200">
                © {new Date().getFullYear()} Adventure Lodge SAC. Todos los derechos reservados.
            </div>
        </footer>
    );
}
