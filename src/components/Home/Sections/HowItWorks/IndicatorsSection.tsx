"use client";

import Container from "@/components/Shared/Container";

const topBullets = [
  "Əsas göstəricilər, sadə dildə.",
  "Rəqəmlər qorxulu deyil.",
  "Göstəriciləri oxumağı öyrən.",
  "Nəyə baxmalı olduğunu bil.",
];

const indicators = [
  {
    title: "Gəlirlilik (Return)",
    description: "Nədir? Sənin pulunun nə qədər artdığı.",
    example: "Sadə misal: 100₼ qoydun, 110₼ oldu → +10%.",
  },
  {
    title: "Risk (Volatility)",
    description: 'Nədir? Qiymətin nə qədər "oynadığı".',
    example: "Sadə misal: Bu gün +3%, sabah -4% gedirsə, risk yüksəkdir.",
  },
  {
    title: "Likvidlik",
    description: "Nədir? Aktivini nə qədər tez pula çevirə bilərsən.",
    example: "Sadə misal: İstədiyin vaxt sata bilirsənsə, likvidlik yaxşıdır.",
  },
  {
    title: "Diversifikasiya",
    description: "Nədir? Pulu bir yerə yox, bir neçə yerə bölmək.",
    example: "Sadə misal: Hamısını bir səhmə yox, 4-5 müxtəlif aktivə paylamaq.",
  },
];

export default function IndicatorsSection() {
  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="relative w-full overflow-hidden lg:pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#00033F]" />

      {/* Content */}
      <Container className="relative z-10 flex flex-col gap-8 md:gap-10">

        {/* Headline */}
        <h2 className="text-center text-white font-medium text-3xl sm:text-4xl md:text-4xl tracking-normal">
          Göstəricilərin izahı
        </h2>

        {/* Top bullets row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {topBullets.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-white text-xs md:text-sm font-light"
              style={{ border: "1px solid rgba(22, 61, 252, 1)" }}
            >
              <span className="shrink-0">•</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Indicator cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {indicators.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">

              {/* Title pill */}
              <div
                className="rounded-xl px-4 py-3 text-[#46FFCE] font-bold text-sm md:text-base"
                style={{
                  background: "rgba(22, 61, 252, 0.9)",
                  border: "1px solid rgba(99,140,255,0.3)",
                }}
              >
                {item.title}
              </div>

              {/* Description + Example */}
              <div className="flex flex-col gap-1.5 px-1">
                <p className="text-white text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed italic">
                  {item.example}
                </p>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}