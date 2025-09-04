import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/inicio/Hero";
import Hoteles from "@/components/inicio/Hoteles"; // Habitaciones destacadas
import Habitaciones from "@/components/inicio/Habitaciones"; // Sección más detallada
import Paquetes from "@/components/inicio/Paquetes";
import Ofertas from "@/components/inicio/Ofertas";
import Reserva from "@/components/inicio/Reserva";
import Galeria from "@/components/inicio/Galeria";
import Contacto from "@/components/inicio/Contacto";

export default function Inicio() {
  return (
    <main>
      <Header />
      <Hero />
      <Hoteles />       {/* Cards rápidas */}
      <Habitaciones />  {/* Sección más completa */}
      <Paquetes />
      <Ofertas />
      <Reserva />
      <Galeria />
      <Contacto />
      <Footer />
    </main>
  );
}
