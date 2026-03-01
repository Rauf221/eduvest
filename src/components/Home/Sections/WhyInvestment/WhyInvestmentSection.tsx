"use client";

import Container from "@/components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cards = [
  { title: "İnsanlar investisiyadan çəkinir", description: "Qorxu çoxdur, anlayış az." },
  { title: "Maliyyə bilikləri yetərli deyil", description: "Nədən başlamağı bilmirlər." },
  { title: "Fond bazarı mürəkkəb görünür", description: "Terminlər adamı boğur." },
  { title: "Plan yoxdur", description: "Bilik olmadığı üçün qərar da gecikir." },
  { title: "Bazar dili ağırdır", description: "Eyni şeyi 10 sözlə deyirlər." },
  { title: "Pul istəyirlər, amma qorxurlar", description: 'Çünki risk sözünü "itki" kimi anlayırlar.' },
];

export default function WhyInvestmentSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    
    <section id="why-ai" style={{ fontFamily: "'Inter', sans-serif" }} className="relative w-full min-h-[800px] overflow-hidden flex items-center justify-center py-16 md:pt-24 px-4 mx-auto  ">
   
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#000014_4%,#163DFC_100%)]" />

      {/* Radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(59,130,246,0.18)_0%,transparent_70%)]" />
      <Container className="relative z-10 w-full">
      {/* Content */}
      <div className="relative z-10 w-full mx-auto flex flex-col items-center gap-8 md:gap-10">
     
        {/* Badge */}
        <div className="px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium text-white bg-black border border-white/[0.18] tracking-[0.01em] text-center">
          Fond bazarı mürəkkəb deyil, sadəcə izahı pisdir.
        </div>

        {/* Headline */}
        <h1 className="text-center font-medium text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] tracking-[-0.02em]">
          Niyə investisiya çətin görünür?
        </h1>

        {/* Subtitle */}
        <p className="text-center max-w-xs sm:max-w-sm md:max-w-xl text-white text-sm md:text-base lg:text-[1.1rem] leading-[1.4] md:leading-[1.2]">
          Azərbaycan fond bazarını çətin terminlər olmadan öyrən.
          <br />
          Süni intellekt hər şeyi addım-addım, insan kimi izah edir.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="rounded-4xl p-4 md:p-5 cursor-default transition-all duration-300 backdrop-blur-[12px]"
              style={{
                background: hoveredCard === i
                  ? "linear-gradient(261.86deg, rgba(22, 61, 252, 0.1) 2.99%, rgba(70, 150, 255, 0.45) 97.56%)"
                  : "linear-gradient(261.86deg, rgba(22, 61, 252, 0) 2.99%, rgba(70, 150, 255, 0.3) 97.56%)",
                border: hoveredCard === i
                  ? "1px solid rgba(124, 124, 124, 0.8)"
                  : "1px solid rgba(124, 124, 124, 1)",
                transform: hoveredCard === i ? "translateY(-2px)" : "none",
                boxShadow: hoveredCard === i
                  ? "0 8px 32px rgba(0,0,0,0.25)"
                  : "0 2px 12px rgba(0,0,0,0.15)",
              }}
            >
              <h3 className="font-medium text-white mb-2 text-base md:text-[20px]">
                {card.title}
              </h3>
              <p className="font-light text-xs md:text-sm text-white">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/ai-assistant" 
          >
         <button className="flex items-center gap-2 font-semibold transition-all duration-200 active:scale-95 bg-white text-[#0d1117] rounded-full px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base tracking-[-0.01em] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-[#f0f4ff] hover:shadow-[0_6px_28px_rgba(0,0,0,0.28)]">
          Ellə indi öyrənməyə başla
          <Image
            src="/svg/storm.svg"
            alt="Storm Icon"
            width={12.62}
            height={23.1}
            priority
            className="object-contain"
          />
        </button>
        </Link>

      </div>
      </Container>
    </section>
   
  );
}