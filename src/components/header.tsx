"use client";

import { Button } from "@/components/ui/button";
import { Wrench, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">MOTOSERVICE</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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
            <Button className="bg-primary hover:bg-primary/90 hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              Llamar Ahora
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/cobertura"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cobertura
              </Link>
              <Link
                href="/contacto"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button className="bg-primary hover:bg-primary/90 w-full">
                <Phone className="h-4 w-4 mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
