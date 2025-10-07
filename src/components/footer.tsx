import { Wrench, Phone, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-6 w-6 text-primary" />
              <h5 className="font-bold text-foreground">MOTOSERVICE</h5>
            </div>
            <p className="text-sm text-muted-foreground">
              Tu aliado confiable para el auxilio mecánico de motocicletas en
              Uruguay.
            </p>
          </div>
          <div>
            <h6 className="font-semibold text-foreground mb-4">Servicios</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-foreground transition-colors"
                >
                  Auxilio 24/7
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-foreground transition-colors"
                >
                  Reparaciones en sitio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-foreground transition-colors"
                >
                  Transporte al taller
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-foreground transition-colors"
                >
                  Mantenimiento
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-foreground mb-4">Contacto</h6>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +598 99 218 183
              </li>
              <li>info@motoservice.uy</li>
              <Link
                href="https://maps.app.goo.gl/vKNj3g4tueJzvehR8"
                className="flex items-center"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Vázquez 1550, 11200 Montevideo
              </Link>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-foreground mb-4">Horarios</h6>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <p>Disponible las 24 horas del día, todos los días del año.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 MOTOSERVICE. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
