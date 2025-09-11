import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfonos",
      details: ["+598 99 218 183", "2402 2325", "2402 5947"],
      description: "Disponibles las 24 horas para emergencias",
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Vázquez 1550"],
      description: "Montevideo, Uruguay",
    },
    {
      icon: Clock,
      title: "Horarios de oficina",
      details: ["Lunes a Viernes", "08:00 a 20:00 hs"],
      description: "Para trámites administrativos",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <main>
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-white">
                ¿Tenés dudas o querés{" "}
                <span className="text-red-500">afiliarte</span>?
              </h1>
              <p className="text-xl text-slate-300 text-pretty leading-relaxed">
                Escribinos o llamanos, estamos para ayudarte.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center h-full bg-slate-800 border-slate-700"
                >
                  <CardContent className="p-6">
                    <info.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-3 text-white">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-medium text-white">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
                    <MessageCircle className="mr-3 h-6 w-6 text-red-500" />
                    Envianos un mensaje
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2 text-white"
                        >
                          Nombre
                        </label>
                        <Input
                          id="name"
                          placeholder="Tu nombre completo"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2 text-white"
                        >
                          Teléfono
                        </label>
                        <Input
                          id="phone"
                          placeholder="Tu número de teléfono"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-white"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-white"
                      >
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        placeholder="¿En qué podemos ayudarte?"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-white"
                      >
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Contanos tu consulta..."
                        rows={4}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="bg-red-600 text-white border-red-500">
                  <CardContent className="p-8 text-center">
                    <Phone className="h-16 w-16 mx-auto mb-4 text-white" />
                    <h3 className="text-2xl font-bold mb-4">
                      ¿Necesitás auxilio ahora?
                    </h3>
                    <p className="mb-6 text-red-100">
                      Si tenés una emergencia, no dudes en llamarnos. Estamos
                      disponibles las 24 horas.
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-white hover:bg-red-50 text-red-600 font-bold"
                    >
                      Llamar 0099 218 183
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-white">
                      Información adicional
                    </h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500">•</span>
                        <span>Respondemos consultas en menos de 24 horas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500">•</span>
                        <span>
                          Para emergencias, siempre llamá por teléfono
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500">•</span>
                        <span>
                          Podés visitarnos en nuestras oficinas de lunes a
                          viernes
                        </span>
                      </li>
                    </ul>
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
