import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Building2, Users, CheckCircle, Phone } from "lucide-react";

export default function HowToJoinPage() {
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
    <div className="min-h-screen bg-slate-900">
      <main>
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">
                <span className="text-red-500">Fácil</span>, rápido y accesible
              </h1>
              <p className="text-xl text-slate-300 text-pretty leading-relaxed">
                Asociándote, accedés a todos nuestros beneficios y quedás
                protegido mes a mes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {paymentMethods.map((method, index) => (
                <Card
                  key={index}
                  className="h-full hover:shadow-lg transition-shadow bg-slate-800 border-slate-700"
                >
                  <CardContent className="p-6">
                    <method.icon className="h-12 w-12 text-red-500 mb-4" />
                    <h3 className="font-semibold text-xl mb-3 text-balance text-white">
                      {method.title}
                    </h3>
                    <p className="text-slate-300 mb-4 text-pretty leading-relaxed">
                      {method.description}
                    </p>
                    <ul className="space-y-2">
                      {method.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Al asociarte obtenés
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    ¿Listo para asociarte?
                  </h3>
                  <p className="text-slate-300 mb-6 text-pretty">
                    Llamanos ahora y en minutos tendrás la tranquilidad de estar
                    protegido
                  </p>
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Llamar 0099 218 183
                    </Button>
                    <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
                      <span>También podés llamar al</span>
                      <span className="font-semibold text-white">
                        2402 2325
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
