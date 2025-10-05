import { Card, CardContent } from "@/components/ui/card";
import { Users, Radio, Droplets, Wrench, Clock, Truck } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: "Personal altamente especializado",
      description:
        "Técnicos certificados con amplia experiencia en mecánica de motocicletas",
    },
    {
      icon: Radio,
      title: "Unidades capacitadas y radiocontroladas",
      description:
        "Flota moderna con comunicación constante para respuesta rápida",
    },
    {
      icon: Droplets,
      title: "Cambio de aceite y lubricación GRATIS en el taller",
      description: "Mantenimiento preventivo incluido sin costo adicional",
    },
    {
      icon: Wrench,
      title: "Reparaciones en el lugar",
      description: "Cadena, cables y puesta en marcha directamente donde estés",
    },
    {
      icon: Clock,
      title: "2 pinchazos GRATIS de 08:00 a 20:00 hs.",
      description: "Reparación de neumáticos sin costo en horario diurno",
    },
    {
      icon: Truck,
      title: "Traslados dentro de la cobertura",
      description:
        "Transporte seguro de tu moto cuando la reparación no es posible en el lugar",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <main>
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                  Servicios Premium
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6 text-white leading-tight">
                Todo lo que ofrecemos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  para vos
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 text-pretty leading-relaxed max-w-3xl mx-auto">
                Servicios completos de auxilio mecánico diseñados para mantener
                tu moto en movimiento las 24 horas del día
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1"
                >
                  <CardContent className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300">
                        <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 text-balance text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 text-pretty leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                    Más que un servicio, una garantía de confianza
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-6">
                    En Motoservice entendemos que tu moto es más que un
                    vehículo, es tu libertad. Por eso trabajamos incansablemente
                    para que nunca te quedes varado.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <div className="flex items-center gap-2 text-red-400 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Disponible 24/7</span>
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                    <div className="flex items-center gap-2 text-red-400 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Respuesta rápida</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
