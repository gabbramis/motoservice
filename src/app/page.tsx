import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Clock,
  Wrench,
  Phone,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import { BrandWhatsapp } from "tabler-icons-react";
import Image from "next/image";

import GoogleReviews from "@/components/google-reviews";

export default function HomePage() {
  const phoneNumber = "+59899218183";

  const features = [
    {
      icon: Shield,
      title: "Auxilio 24/7",
      description:
        "Mecánica ligera y gomería en el lugar. Hasta 2 pinchazos gratis al mes. Si no podemos arreglarlo donde estás, te trasladamos al taller sin costo.",
    },
    {
      icon: Wrench,
      title: "Servicios en taller",
      description:
        "Lubricación, regulación de cadena, frenos y cables incluidos. Mano de obra gratuita en cambio de aceite para todos los socios.",
    },
    {
      icon: Clock,
      title: "Sin complicaciones",
      description:
        "$590/mes. Pagá en Abitab, débito OCA o transferencia. Sin letra chica, sin sorpresas.",
    },
  ];

  const stats = [
    { value: "30+", label: "Años de trayectoria" },
    { value: "5000+", label: "Clientes activos" },
    { value: "24/7", label: "Siempre disponibles" },
    { value: "4.2★", label: "Valoración Google" },
  ];

  const commitments = [
    "Mecánicos certificados con experiencia comprobada",
    "Unidades equipadas con herramientas profesionales",
    "Tiempo de respuesta de 30-50 minutos promedio",
    "Precios transparentes sin costos ocultos",
  ];

  const coverageAreas = [
    {
      title: "Costa Este",
      description: "Hasta el peaje El Pinar",
    },
    {
      title: "Zona Oeste",
      description: "Hasta Santiago Vázquez",
    },
    {
      title: "Zona Norte",
      description: "Hasta Puente Colón – La Paz – Pando",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <main>
        {/* Hero Section - Premium */}
        <section className="relative w-full min-h-[500px] sm:min-h-[700px] lg:min-h-[700px] flex items-center">
          <Image
            src="/motoservice-shop3.webp"
            alt="Taller de motos Motoservice - Auxilio mecánico en Montevideo"
            width={712}
            height={534}
            sizes="(max-width: 768px) 100vw, 712px"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/75 to-slate-950/80"></div>

          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
            <div className="container mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md mb-6 sm:mb-8">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 text-sm font-medium">
                    Disponibles 24/7 • Respuesta inmediata
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white leading-[1.1]">
                  Auxilio mecánico
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-500">
                    cuando lo necesitás
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 text-slate-300 leading-relaxed max-w-2xl">
                  Más de 30 años resolviendo problemas en la ruta. Mecánicos
                  profesionales, herramientas reales, soluciones garantizadas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-7 font-semibold shadow-xl shadow-green-500/20 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
                    >
                      <BrandWhatsapp size={24} className="mr-2" />
                      WhatsApp
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href={`tel:${phoneNumber}`}>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 border-2 border-slate-600/50 hover:border-slate-500 text-white backdrop-blur-md text-lg px-8 py-7 font-semibold transition-all duration-300"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      099 218 183
                    </Button>
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-slate-800/30 backdrop-blur-md border border-slate-700/30"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membresía */}
        <section className="py-10 sm:py-14 lg:py-10 px-4 sm:px-6 lg:px-8 bg-slate-950">
          <div className="container mx-auto max-w-6xl">
            {/* Encabezado */}
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-red-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Membresía
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-3">
                Todo incluido por $590/mes
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                Sin costos ocultos, sin letra chica. Protección completa para tu
                moto.
              </p>
            </div>

            {/* Features - MODIFICADO para igualar altura en PC */}
            {/* NOTA: Eliminamos lg:items-start para que los elementos se estiren por defecto en la grilla */}
            <div className="flex flex-col gap-4 sm:gap-6 items-center lg:grid lg:grid-cols-3 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  // CLASE AGREGADA: h-full para asegurar que la altura sea igual a la del recuadro más alto.
                  className="group relative w-full max-w-sm lg:max-w-none h-full rounded-lg border border-slate-700/40 
                   bg-slate-800/40 backdrop-blur-sm hover:border-red-500/40 
                   transition-all duration-300 p-4 sm:p-5"
                >
                  {/* Icono + Título */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex p-2 rounded-md bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300">
                      <feature.icon className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-slate-400 text-sm leading-snug">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section - Visual Focus - ARREGLADO */}
        <section className="py-10 sm:py-15 lg:py-15 px-4 sm:px-6 lg:px-8 bg-slate-950">
          <div className="container mx-auto max-w-7xl">
            {/* Título */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-block mb-4">
                <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
                  Cobertura
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Te cubrimos en toda la zona metropolitana
              </h2>
            </div>

            {/* Contenido - MODIFICADO para orden en móvil/PC */}
            {/* En móvil (base), se usa grid-cols-1 y se invierte el orden (order-2 para lista, order-1 para imagen) */}
            {/* En PC (lg), la grilla es 5 columnas, y el orden vuelve a ser normal (lista primero) */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Imagen - MODIFICADO para aparecer PRIMERO en móvil */}
              <div className="lg:col-span-3 order-1 lg:order-none">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-red-500/5">
                  <Image
                    src="/coverage-map-purple-fixed.webp"
                    alt="Mapa de cobertura de servicio de auxilio mecánico en Montevideo y Canelones"
                    width={1200}
                    height={630}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Lista de zonas - MODIFICADO para aparecer SEGUNDO en móvil */}
              <div className="lg:col-span-2 space-y-6 order-2 lg:order-none">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-red-500/10">
                    <CheckCircle className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Por la Costa
                    </h3>
                    <p className="text-slate-400">Hasta el peaje El Pinar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-red-500/10">
                    <CheckCircle className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Por el Oeste
                    </h3>
                    <p className="text-slate-400">Hasta Santiago Vázquez</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-red-500/10">
                    <CheckCircle className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Por el Norte
                    </h3>
                    <p className="text-slate-400">
                      Hasta Puente Colón – La Paz – Pando
                    </p>
                  </div>
                </div>

                {/* Bloque tiempo de respuesta */}
                <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 backdrop-blur-sm rounded-2xl p-6 text-white">
                  <h4 className="font-bold mb-2">
                    Tiempo de respuesta promedio
                  </h4>
                  <div className="text-3xl font-bold text-red-400">
                    30-50 min
                  </div>
                  <p className="text-sm text-slate-300">En horarios normales</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Storytelling */}
        <section className="py-15 sm:py-10 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
                    Nuestra historia
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                  30 años de experiencia en cada servicio
                </h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p>
                    Comenzamos en 1986 como un pequeño taller de barrio. Hoy
                    somos la referencia en auxilio mecánico para motociclistas
                    en Montevideo y Canelones.
                  </p>
                  <p>
                    Lo que nos diferencia es simple:{" "}
                    <strong className="text-white">
                      cumplimos lo que prometemos
                    </strong>
                    . Nuestros mecánicos tienen años de experiencia real,
                    nuestras unidades están equipadas con herramientas
                    profesionales, y cuando llamás, respondemos.
                  </p>
                  <p>
                    Miles de motociclistas confían en nosotros porque saben que
                    detrás del teléfono hay personas que entienden de motos y
                    que van a estar ahí cuando más lo necesiten.
                  </p>
                </div>
              </div>

              <div className="relative">
                <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-800/60 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-red-500/10 rounded-full blur-3xl"></div>

                  <CardContent className="relative p-8 sm:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 rounded-2xl bg-red-500/10">
                        <Shield className="h-10 w-10 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Nuestro compromiso
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Garantía de calidad
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-5">
                      {commitments.map((commitment, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4 group"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="p-1 rounded-full bg-red-500/20 group-hover:bg-red-500/30 transition-colors">
                              <CheckCircle className="h-5 w-5 text-red-500" />
                            </div>
                          </div>
                          <span className="text-slate-300 group-hover:text-white transition-colors">
                            {commitment}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section - Social Proof */}
        <section className="py-5 sm:py-10 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-block mb-4">
                <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
                  Testimonios
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Miles de motociclistas confían en nosotros
              </h2>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-7 w-7 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white">4.2</span>
                  <div className="text-left">
                    <div className="text-sm text-slate-400">de 5 estrellas</div>
                    <div className="text-xs text-slate-500">
                      127 reseñas en Google
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <GoogleReviews />
          </div>
        </section>

        {/* CTA Section - Responsive Optimized */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
          <div className="container mx-auto max-w-4xl">
            <Card className="relative bg-gradient-to-br from-slate-800 via-slate-900/95 to-slate-950 border border-slate-800/60 overflow-hidden shadow-xl">
              {/* Fondos animados (suaves en mobile) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(239,68,68,0.08),transparent_70%)]"></div>
              <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-red-500/5 rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-red-500/5 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              <CardContent className="relative p-6 sm:p-10 lg:p-16 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm mb-6 sm:mb-8">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 text-xs sm:text-sm font-medium">
                    Disponibles ahora mismo
                  </span>
                </div>

                {/* Título */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug">
                  ¿Necesitás ayuda en este momento?
                </h2>
                <p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
                  Nuestro equipo está listo para asistirte las 24 horas. Llamá
                  ahora y te atendemos al instante.
                </p>

                {/* Teléfonos */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch mb-8 sm:mb-10">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex-1">
                    <Phone className="h-5 w-5 text-red-500" />
                    <div className="text-left">
                      <div className="text-xs text-slate-400">Principal</div>
                      <div className="text-base sm:text-lg font-bold text-white">
                        099 218 183
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex-1">
                    <Phone className="h-5 w-5 text-red-500" />
                    <div className="text-left">
                      <div className="text-xs text-slate-400">Alternativos</div>
                      <div className="text-base sm:text-lg font-bold text-white space-y-0.5">
                        <p>2402 2325</p>
                        <p>2402 5947</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón */}
                <a href={`tel:${phoneNumber}`}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    LLAMAR AHORA
                    <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </a>

                <p className="mt-6 text-xs sm:text-sm text-slate-400">
                  Respuesta inmediata • Sin esperas • Servicio profesional
                  garantizado
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
