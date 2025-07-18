import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hoteles from "@/components/inicio/Hoteles"
import Hero from "@/components/inicio/Hero";
import Confianza from "@/components/inicio/Destinos"
import Experiencias from "@/components/inicio/Galeria";
import { Geist, Geist_Mono } from "next/font/google";
import Contacto from "@/components/inicio/Contacto";
import Galeriaad from "@/components/inicio/Galeriaad";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Inicio() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Hoteles/>
      <Confianza/>
      <Experiencias/>
      <Galeriaad/>
      <Contacto/>
      <Footer/>
    </main>
  );
}
