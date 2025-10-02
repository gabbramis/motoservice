"use client";

import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Marquee } from "@/components/magicui/marquee";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-slate-500">
    <path
      d="M22.56 12.23c0-.78-.07-1.54-.2-2.28H12.04v4.35h6.29c-.27 1.4-1.07 2.58-2.26 3.48v2.85h3.69c2.16-2 3.42-4.96 3.42-8.39z"
      fill="#4285F4"
    />
    <path
      d="M12.04 23c3.27 0 6.01-1.08 8-2.91l-3.69-2.85c-1.02.68-2.3 1.08-4.31 1.08-3.32 0-6.14-2.22-7.14-5.24H.88v2.84C2.9 20.31 7.11 23 12.04 23z"
      fill="#34A853"
    />
    <path
      d="M4.9 14.16c-.22-.68-.35-1.4-.35-2.16s.13-1.48.35-2.16V6.96H.88c-.68 1.45-1.08 3.12-1.08 4.88s.4 3.43 1.08 4.88L4.9 14.16z"
      fill="#FBBC04"
    />
    <path
      d="M12.04 3.48c1.8 0 3.42.61 4.69 1.81l3.29-3.29C18.05 1.08 15.31 0 12.04 0c-4.93 0-9.14 2.69-11.16 6.96l4.02 3.12c1-3.02 3.82-5.24 7.14-5.24z"
      fill="#EA4335"
    />
  </svg>
);

const manualReviews = [
  {
    author_name: "Santiago Cuello",
    rating: 5,
    text: "Excelente! Siempre la mejor atención y disposición. Trabajos rápidos y de calidad, ahora con su nueva incorporación de scanner para motos más complejas🔥🔥 mi benelli está bien cuidada 😁",
    avatar_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjWtbeYVawpm2kWSnN7gLOxaucIoAiGPjNEaRvWCEDsbfLLhoV1d=s64-c-rp-mo-br100",
  },
  {
    author_name: "Fernando bicudo",
    rating: 5,
    text: "Excelente servicio !!! De los pocos que brindan atención en Montevideo y canelones por la cuota más baja del mercado !! Me han auxiliado rápidamente siempre ! Más que recomendable. Superaron mis espectativas",
    avatar_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjV8CdXBSnP62OFvyl_zONS5Hmp2I3zKume95-CWqQyA8FB2s6WBNg=s64-c-rp-mo-ba5-br100",
  },
  {
    author_name: "Silvano Vignolo",
    rating: 5,
    text: "Un gran reconocimiento a Oscar por su amabilidad y experiencia en reparación de motos. Para decirlo en pocas palabras...solo pon las estrellas que necesitas 🤗",
    avatar_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjV8OSfJcaumsLUCH1n_DW0Dl8GXItAPE0xzIxNpAYzUc17oMz8=s64-c-rp-mo-ba4-br100",
  },
  {
    author_name: "Javier Rodriguez",
    rating: 5,
    text: "He llevado la moto de la empresa y la mía propia y el servicio y la atención son excelentes, la verdad es muy recomendado el lugar",
    avatar_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjUoa4CFmiMr_lt9-1IqiLBBCdGepJ1_3lEeau2Z3nQFv5mdsujqKQ=s64-c-rp-mo-ba4-br100",
  },
];

const ReviewCard = ({ review }: { review: (typeof manualReviews)[0] }) => (
  <Card className="w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] mx-2 bg-white/80 dark:bg-slate-800/70 backdrop-blur-md shadow-md rounded-xl border border-transparent flex-shrink-0">
    <CardContent className="relative p-5">
      <div className="absolute top-3 right-3">
        <GoogleIcon />
      </div>
      <div className="flex items-center mb-2">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-slate-800 dark:text-slate-100 mb-3 italic leading-relaxed">
        {review.text}
      </p>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={review.avatar_url} />
          <AvatarFallback>
            {review.author_name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white">
            {review.author_name}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const GoogleReviews = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const pause = () => (el.style.animationPlayState = "paused");
    const play = () => (el.style.animationPlayState = "running");

    el.addEventListener("touchstart", pause);
    el.addEventListener("touchend", play);
    el.addEventListener("mousedown", pause);
    el.addEventListener("mouseup", play);

    return () => {
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", play);
      el.removeEventListener("mousedown", pause);
      el.removeEventListener("mouseup", play);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade suave en extremos */}
      <div
        className="absolute inset-y-0 left-0 w-16 z-20 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,0), black 70%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0), black 70%)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-16 z-20 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to left, rgba(0,0,0,0), black 70%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0), black 70%)",
        }}
      />

      <div ref={marqueeRef}>
        <Marquee pauseOnHover className="flex gap-4 [--duration:25s]">
          {manualReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default GoogleReviews;
