"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail, MessageCircle, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfonos",
      details: ["2402 2325", "2402 5947", "+598 99 218 183"],
      description: "Disponibles las 24 horas para emergencias",
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Vázquez 1550 esq. Uruguay"],
      description: "Montevideo, Uruguay",
    },
    {
      icon: Clock,
      title: "Horarios de oficina",
      details: ["Lunes a Viernes", "09:00 a 19:00 hs"],
      description: "Para trámites administrativos",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <main>
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            {/* Título */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                ¿Tenés dudas o querés{" "}
                <span className="text-red-500">afiliarte</span>?
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Escribinos o llamanos, estamos para ayudarte.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center h-full bg-slate-800 border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-5">
                    <info.icon className="h-10 w-10 text-red-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-medium text-white text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-slate-300 text-xs">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Formulario y paneles adicionales */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulario */}
              <Card className="bg-slate-800 border-slate-700 shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
                    <MessageCircle className="mr-2 h-5 w-5 text-red-500" />
                    Envíanos un mensaje
                  </h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1 text-white"
                        >
                          Nombre
                        </label>
                        <Input
                          id="name"
                          placeholder="Tu nombre completo"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-1 text-white"
                        >
                          Teléfono
                        </label>
                        <Input
                          id="phone"
                          placeholder="Tu número de teléfono"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1 text-white"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1 text-white"
                      >
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Contanos tu consulta..."
                        rows={4}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-5 w-5" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>

                    {status === "success" && (
                      <div className="flex items-center gap-2 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                        <p>¡Gracias por tu mensaje! Te responderemos a la brevedad.</p>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="flex items-center gap-2 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        <p>Hubo un error al enviar tu mensaje. Por favor, intentá de nuevo.</p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Panel derecho con auxilio y info adicional */}
              <div className="space-y-6">
                <Card className="bg-red-600 text-white border-red-500 shadow-sm">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <Phone className="h-12 w-12 mx-auto mb-3 text-white" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                      ¿Necesitás auxilio ahora?
                    </h3>
                    <p className="mb-4 text-red-100 text-sm sm:text-base">
                      Si tenés una emergencia, no dudes en llamarnos. Estamos
                      disponibles las 24 horas.
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-white hover:bg-red-50 text-red-600 font-bold"
                    >
                      Llamar 099 218 183
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 shadow-sm">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                      Información adicional
                    </h3>
                    <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
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
