import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Clock,
  Wrench,
  MapPin,
  Phone,
  CheckCircle,
  Star,
} from "lucide-react";
import { BrandWhatsapp } from "tabler-icons-react";

import GoogleReviews from "@/components/google-reviews";

export default function HomePage() {
  const phoneNumber = "+59899218183";

  return (
    <div className="min-h-screen">
      <main>
        <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          {/* Imagen de fondo */}
          <img
            src="/motoservice-shop3.webp"
            alt="Taller de motos"
            width={712} // tamaño real mostrado
            height={534}
            sizes="(max-width: 768px) 100vw, 712px"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/60"></div>

          {/* Contenido */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tu moto, nuestro <span className="text-primary">compromiso</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Más de 30 años arreglando motos. Sabemos lo que hacemos y estamos
              cuando nos necesitás. Auxilio real, hecho por mecánicos de verdad.
            </p>

            {/* Botones siempre lado a lado */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 font-bold flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <BrandWhatsapp size={24} />
                  Whatsapp
                </Button>
              </a>
              <a href={`tel:${phoneNumber}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-slate-900 whitespace-nowrap"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar 099 218 183
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">
                    Más de 30 años en la ruta
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p className="text-lg leading-relaxed">
                      Arrancamos en 1986 como un taller de barrio. Tres décadas
                      después, somos la empresa de auxilio mecánico más
                      confiable de Montevideo.
                    </p>
                    <p className="leading-relaxed">
                      Nuestro fundador, un mecánico de toda la vida, entendió
                      que los motociclistas necesitaban algo más que promesas:
                      necesitaban un servicio real, con herramientas de verdad y
                      conocimiento que solo da la experiencia.
                    </p>
                    <p className="leading-relaxed">
                      Hoy tenemos unidades radiocontroladas, mecánicos
                      especializados y la confianza de miles de motociclistas
                      que saben que cuando llaman, vamos.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">30+</div>
                      <div className="text-sm text-slate-600">
                        Años de experiencia
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        5000+
                      </div>
                      <div className="text-sm text-slate-600">
                        Motociclistas atendidos
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-lg p-8 text-white">
                  <Wrench className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Nuestro compromiso
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-white">
                        Mecánicos con experiencia real
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-white">
                        Herramientas profesionales en cada unidad
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-white">Respuesta rápida, 24/7</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-white">
                        Precios justos, sin sorpresas
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Lo que incluye tu membresía
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Auxilio rápido */}
              <Card className="border-2 border-slate-200 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900">
                    Auxilio al instante
                  </h3>
                  <p className="text-slate-600">
                    Mecanica ligera y gomeria. Hasta 2 pinchazos gratis al mes
                    de 8 a 19 hs. Si no se puede, te trasladamos al taller sin
                    complicaciones.
                  </p>
                </CardContent>
              </Card>

              {/* Servicio en el local */}
              <Card className="border-2 border-slate-200 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900">
                    Para socios en el taller GRATIS
                  </h3>
                  <p className="text-slate-600">
                    Lubricación, regulación de cadena, frenos y cables de
                    embriague o acelerador, mano de obra en cambio de aceite.
                  </p>
                </CardContent>
              </Card>

              {/* Pago fácil */}
              <Card className="border-2 border-slate-200 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-slate-900">
                    Pago simple
                  </h3>
                  <p className="text-slate-600">
                    $590/mes. Pagá como quieras: Abitab, débito OCA o
                    transferencia. Sin letra chica, sin complicaciones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
                Zona de cobertura
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        Por la Costa
                      </h3>
                      <p className="text-slate-600">Hasta el peaje El Pinar</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        Por el Oeste
                      </h3>
                      <p className="text-slate-600">Hasta Santiago Vázquez</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        Por el Norte
                      </h3>
                      <p className="text-slate-600">
                        Hasta Puente Colón – La Paz – Pando
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-6 text-white">
                    <h4 className="font-bold mb-2">
                      Tiempo de respuesta promedio
                    </h4>
                    <div className="text-2xl font-bold text-primary">
                      30-50 min
                    </div>
                    <p className="text-sm text-slate-300">
                      En horarios normales
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src="/coverage-map-purple-fixed.webp"
                      alt="Mapa de cobertura"
                      width={1200}
                      height={630}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Nuestro taller
                </h2>
                <p className="text-xl text-slate-300 text-pretty leading-relaxed">
                  Más de 30 años de experiencia se ven en cada herramienta, cada
                  banco de trabajo y cada reparación que hacemos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-slate-700 border-slate-600 overflow-hidden">
                  <div className="aspect-video bg-slate-600 flex items-center justify-center">
                    <img
                      src="/motorcycle-workshop-with-tools-and-workbench.jpg"
                      alt="Taller principal con herramientas profesionales"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-white mb-2">
                      Taller principal
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Equipado con herramientas profesionales para cualquier
                      reparación
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-700 border-slate-600 overflow-hidden">
                  <div className="aspect-video bg-slate-600 flex items-center justify-center">
                    <img
                      src="/motorcycle-mechanic-working-on-engine-repair.jpg"
                      alt="Mecánico trabajando en motor de motocicleta"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-white mb-2">
                      Mecánicos especializados
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Técnicos con décadas de experiencia en motocicletas
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-700 border-slate-600 overflow-hidden">
                  <div className="aspect-video bg-slate-600 flex items-center justify-center">
                    <img
                      src="/motorcycle-service-truck-with-tools-and-equipment.jpg"
                      alt="Unidad móvil de auxilio mecánico"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-white mb-2">
                      Unidades móviles
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Equipadas para resolver problemas donde estés
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-700 border-slate-600 overflow-hidden">
                  <div className="aspect-video bg-slate-600 flex items-center justify-center">
                    <img
                      src="/motorcycle-parts-and-spare-parts-storage.jpg"
                      alt="Depósito de repuestos para motocicletas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-white mb-2">
                      Stock de repuestos
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Repuestos originales y alternativos siempre disponibles
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-700 border-slate-600 overflow-hidden">
                  <div className="aspect-video bg-slate-600 flex items-center justify-center">
                    <img
                      src="/motorcycle-diagnostic-equipment-and-tools.jpg"
                      alt="Equipos de diagnóstico para motocicletas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-white mb-2">
                      Equipos de diagnóstico
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Tecnología moderna para detectar cualquier problema
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-700 border-slate-600 overflow-hidden">
                  <div className="aspect-video bg-slate-600 flex items-center justify-center">
                    <img
                      src="/motorcycle-workshop-office-and-customer-service-ar.jpg"
                      alt="Oficina de atención al cliente"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-white mb-2">
                      Atención al cliente
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Espacio cómodo para trámites y consultas
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>*/}

        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">
                  Lo que dicen nuestros clientes
                </h2>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold text-slate-900">
                    4.8/5
                  </span>
                  <span className="text-slate-600">
                    (127 reseñas en Google)
                  </span>
                </div>
              </div>
              <GoogleReviews />
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              ¿Problemas en la ruta?
            </h2>
            <p className="text-xl mb-8 text-slate-300 text-center">
              Llamanos ahora. Estamos las 24 horas, todos los días del año.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-lg">
                <Phone className="h-6 w-6 text-primary" />
                <span className="font-bold text-white">+598 099 218 183</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <Phone className="h-6 w-6 text-primary" />
                <span className="font-bold text-white">
                  2402 2325 / 2402 5947
                </span>
              </div>
            </div>
            <a href={`tel:${phoneNumber}`}>
              <Button
                size="lg"
                className="mt-8 bg-primary hover:bg-primary/90 font-bold text-white"
              >
                <Wrench className="mr-2 h-5 w-5" />
                LLAMAR AHORA
              </Button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
