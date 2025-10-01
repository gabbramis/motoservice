import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Building2, Users, CheckCircle, Phone } from "lucide-react";

export default function HowToJoinPage() {
  const phoneNumber = "+59899218183";
  const paymentMethods = [
    {
      icon: Building2,
      title: "Red de locales Abitab",
      description: "Pagá cómodamente en cualquier local Abitab de todo el país",
      features: [
        "Disponible en todo Uruguay",
        "Horarios extendidos",
        "Sin comisiones adicionales",
      ],
    },
    {
      icon: CreditCard,
      title: "Débito automático OCA",
      description:
        "Configurá el débito automático en tu tarjeta OCA y olvidate de los pagos",
      features: [
        "Pago automático mensual",
        "Sin riesgo de cortes",
        "Gestión 100% digital",
      ],
    },
    {
      icon: Users,
      title: "Planes especiales para flotas",
      description:
        "Soluciones personalizadas para empresas con múltiples motocicletas",
      features: [
        "Descuentos por volumen",
        "Facturación empresarial",
        "Gestión centralizada",
      ],
    },
  ];

  const benefits = [
    "Auxilio mecánico las 24 horas",
    "Reparaciones en el lugar",
    "Traslados incluidos",
    "Lubricación gratuita",
    "Personal especializado",
    "Cobertura en Montevideo y Canelones",
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
                  Proceso Simple
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6 text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Fácil
                </span>
                , rápido y accesible
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 text-pretty leading-relaxed max-w-3xl mx-auto">
                Asociándote, accedés a todos nuestros beneficios y quedás
                protegido mes a mes
              </p>
            </div>

            {/* Payment Methods Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {paymentMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1"
                >
                  <CardContent className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300">
                        <method.icon className="h-7 w-7 sm:h-8 sm:w-8 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 text-balance text-white leading-snug">
                      {method.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 text-pretty leading-relaxed mb-4 sm:mb-5 flex-grow">
                      {method.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-3 mt-auto">
                      {method.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits and CTA Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
              {/* Benefits Column */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-white leading-tight">
                  Al asociarte obtenés
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                    >
                      <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="order-1 lg:order-2">
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 overflow-hidden relative">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>

                  <CardContent className="p-6 sm:p-8 lg:p-10 text-center relative z-10">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                      ¿Listo para asociarte?
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 text-pretty leading-relaxed">
                      Llamanos ahora y en minutos tendrás la tranquilidad de
                      estar protegido
                    </p>
                    <div className="space-y-3 sm:space-y-4">
                      <a href={`tel:${phoneNumber}`}>
                        <Button
                          size="lg"
                          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                        >
                          <Phone className="mr-2 h-5 w-5" />
                          Llamar 099 218 183
                        </Button>
                      </a>
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                        <span>También podés llamar al</span>
                        <span className="font-semibold text-white">
                          2402 2325
                        </span>
                      </div>
                    </div>

                    {/* Additional info */}
                    <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700/50">
                      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span>Atención inmediata</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
