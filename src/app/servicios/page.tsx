"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Radio,
  Droplets,
  Wrench,
  Clock,
  Truck,
  Check,
  Star,
} from "lucide-react";
import { useState } from "react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(0);
  const services = [
    {
      icon: Users,
      title: "Personal altamente especializado",
      description:
        "Técnicos certificados con amplia experiencia en mecánica de motocicletas",
      features: [
        "Certificación profesional",
        "Años de experiencia",
        "Atención personalizada",
      ],
    },
    {
      icon: Radio,
      title: "Unidades capacitadas y radiocontroladas",
      description:
        "Flota moderna con comunicación constante para respuesta rápida",
      features: ["Flota moderna", "GPS en tiempo real", "Comunicación directa"],
    },
    {
      icon: Droplets,
      title: "Cambio de aceite y lubricación GRATIS",
      description:
        "Mantenimiento preventivo incluido sin costo adicional en el taller",
      features: [
        "Sin costo adicional",
        "Aceites de calidad",
        "En nuestro taller",
      ],
    },
    {
      icon: Wrench,
      title: "Reparaciones en el lugar",
      description: "Cadena, cables y puesta en marcha directamente donde estés",
      features: [
        "Servicio inmediato",
        "Herramientas completas",
        "Sin traslados innecesarios",
      ],
    },
    {
      icon: Clock,
      title: "2 pinchazos GRATIS de 08:00 a 20:00 hs.",
      description: "Reparación de neumáticos sin costo en horario diurno",
      features: [
        "Dos servicios gratuitos",
        "Horario extendido",
        "Reparación profesional",
      ],
    },
    {
      icon: Truck,
      title: "Traslados dentro de la cobertura",
      description:
        "Transporte seguro de tu moto cuando la reparación no es posible en el lugar",
      features: [
        "Transporte seguro",
        "Cobertura amplia",
        "Equipamiento especializado",
      ],
    },
  ];

  const benefits = [
    "Atención 24/7 los 365 días",
    "Respuesta de 30 a 50 minutos",
    "Solución inmediata",
    "Garantía de satisfacción",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(239,68,68,0.05),transparent_50%)]"></div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-red-500" />
              Servicios Premium
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Todo lo que ofrecemos
              <br />
              <span className="text-red-500">para tu tranquilidad</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-4">
              Asistencia completa las 24 horas para resolver cualquier problema
              que puedas tener con tu moto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start sm:items-center gap-2 text-left bg-slate-800/30 p-3 rounded-lg"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Responsive Layout */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Mobile: Cards with Modal */}
          <div className="lg:hidden space-y-3 sm:space-y-4">
            {services.map((service, index) => (
              <div key={index}>
                <div
                  onClick={() =>
                    setActiveService(activeService === index ? null : index)
                  }
                  className="p-4 sm:p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 active:scale-95 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-red-500/10">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 line-clamp-1">
                        Ver detalles
                      </p>
                    </div>

                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                        activeService === index
                          ? "border-red-500 bg-red-500"
                          : "border-slate-600"
                      }`}
                    >
                      {activeService === index && (
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                {activeService === index && (
                  <div className="mt-3 p-4 sm:p-5 rounded-xl bg-red-500/5 border border-red-500/20 animate-slideDown">
                    <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide">
                        Incluye
                      </h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500"></div>
                          <span className="text-xs sm:text-sm text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Service List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? "bg-red-500/10 border-2 border-red-500/50 shadow-lg shadow-red-500/20"
                      : "bg-slate-800/30 border-2 border-slate-700/30 hover:border-slate-600/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        activeService === index
                          ? "bg-red-500 shadow-lg shadow-red-500/50"
                          : "bg-slate-700/50"
                      }`}
                    >
                      <service.icon
                        className={`w-6 h-6 ${
                          activeService === index
                            ? "text-white"
                            : "text-slate-400"
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold mb-2 transition-colors ${
                          activeService === index
                            ? "text-white"
                            : "text-slate-300"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm transition-colors ${
                          activeService === index
                            ? "text-slate-300"
                            : "text-slate-500"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        activeService === index
                          ? "border-red-500 bg-red-500"
                          : "border-slate-600"
                      }`}
                    >
                      {activeService === index && (
                        <Check className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Service Details (Desktop Only) */}
            {activeService !== null && (
              <div className="sticky top-8">
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-64 bg-gradient-to-br from-red-500/20 to-slate-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.2),transparent_70%)]"></div>
                    {(() => {
                      const ServiceIcon = services[activeService].icon;
                      return (
                        <ServiceIcon className="w-24 h-24 text-red-500 relative z-10" />
                      );
                    })()}
                  </div>

                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {services[activeService].title}
                    </h2>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {services[activeService].description}
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                        Incluye
                      </h3>
                      {services[activeService].features.map(
                        (feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-400">
                Disponibilidad
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 mb-1 sm:mb-2">
                &lt;30min
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-400">
                Tiempo de respuesta
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 mb-1 sm:mb-2">
                100%
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-400">
                Profesionales
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 mb-1 sm:mb-2">
                2
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-400">
                Pinchazos gratis
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
