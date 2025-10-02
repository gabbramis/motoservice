"use client";

import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react"; // Importamos useEffect

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+59899218183";

  // Función para cerrar el menú
  const closeMenu = () => setIsMenuOpen(false);

  // 1. Hook para manejar el cierre al hacer scroll
  useEffect(() => {
    // Solo aplica el listener si el menú está abierto y es un dispositivo móvil
    if (!isMenuOpen) return;

    const handleScroll = () => {
      // Cierra el menú si se detecta scroll
      closeMenu();
    };

    // Agrega el listener al objeto window
    window.addEventListener("scroll", handleScroll);

    // Función de limpieza: elimina el listener cuando el componente se desmonta
    // o cuando isMenuOpen cambia a false
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]); // El efecto se ejecuta cuando isMenuOpen cambia

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Se cierra el menú si se hace clic */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="/motoservice-logo.webp"
              alt="MOTOSERVICE"
              width={160}
              height={56}
              className="h-14 w-40"
            />
          </Link>

          {/* Navegación de Escritorio */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Los enlaces de escritorio no necesitan closeMenu, ya que no cierran el menú móvil */}
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </Link>

            <Link
              href="/como-afiliarse"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo Afiliarse
            </Link>
            <Link
              href="/contacto"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Botón de Llamar Ahora (Desktop/Tablet) */}
            <a href={`tel:${phoneNumber}`} className="hidden sm:block">
              <Button className="bg-primary hover:bg-primary/90">
                <Phone className="h-4 w-4 mr-2" />
                Llamar Ahora
              </Button>
            </a>

            {/* Botón de Llamar (Mobile - Solo ícono) */}
            <a href={`tel:${phoneNumber}`} className="block sm:hidden">
              <Button variant="ghost" size="icon">
                <Phone className="h-6 w-6" />
              </Button>
            </a>

            {/* Botón de Menú Móvil */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Navegación Móvil Desplegable */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 mt-4 pt-4 border-t border-border"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            {/* 2. Todos los enlaces en móvil tienen closeMenu en onClick */}
            <Link
              href="/"
              className="text-lg text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-lg text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Servicios
            </Link>

            <Link
              href="/como-afiliarse"
              className="text-lg text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Cómo Afiliarse
            </Link>
            <Link
              href="/contacto"
              className="text-lg text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Contacto
            </Link>
            {/* El botón de llamada en el menú móvil también debe cerrar el menú */}
            <a href={`tel:${phoneNumber}`} onClick={closeMenu}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full mt-2"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar: 099 218 183
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
