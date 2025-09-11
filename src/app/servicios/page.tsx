import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Radio,
  RotateCcw,
  Droplets,
  Wrench,
  Clock,
  Truck,
} from "lucide-react";

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
      icon: RotateCcw,
      title: "Auxilio ilimitado dentro del mes",
      description:
        "Sin límites en la cantidad de servicios durante tu membresía mensual",
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
    <div className="min-h-screen bg-slate-900">
      <main>
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">
                Todo lo que ofrecemos{" "}
                <span className="text-red-500">para vos</span>
              </h1>
              <p className="text-xl text-slate-300 text-pretty leading-relaxed">
                Servicios completos de auxilio mecánico diseñados para mantener
                tu moto en movimiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="h-full hover:shadow-lg transition-shadow bg-slate-800 border-slate-700"
                >
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-red-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-3 text-balance text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-pretty leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Más que un servicio, una garantía de confianza
                </h2>
                <p className="text-slate-300 text-lg">
                  En Motoservice entendemos que tu moto es más que un vehículo,
                  es tu libertad. Por eso trabajamos incansablemente para que
                  nunca te quedes varado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
