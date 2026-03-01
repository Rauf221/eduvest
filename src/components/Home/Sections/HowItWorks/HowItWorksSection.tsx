"use client";

import Image from "next/image";
import IndicatorsSection from "./IndicatorsSection";
import Container from "@/components/Shared/Container";
import Link from "next/link";

const sections = [
  {
    number: "1",
    title: "Platforma\nnə edir",
    bullets: [
      "Səni sıfırdan başlayıb sistemli aparır",
      'Mərhələli mövzularla "qarışıq" hissini azaldır',
      "Lokal bazar kontekstini itirmir (AZ fokus)",
    ],
  },
  {
    number: "2",
    title: "Süni intellekt\nnecə kömək edir",
    bullets: [
      "Səni yoxlayır və səviyyəni müəyyən edir",
      "Anlamadığını sənin dilində yenidən izah edir",
      'Sual verəndə "google-a göndərmir", cavabı sənin üçün düzəldir',
    ],
  },
  {
    number: "3",
    title: "Niyə sadə dildə\nizah olunur",
    bullets: [
      'Çünki məqsəd "termin öyrətmək" deyil, anlatmaqdır',
      "Sadə izah = daha düzgün qərar verdiş",
      "Qısa, real misallarla yadda qalır",
    ],
  },
];

export default function HowItWorksSection() {
  return (
    <>
      <section id="how-it-works"
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="relative  w-full min-h-[800px] overflow-hidden flex flex-col items-center justify-center py-16 md:py-24"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#163DFC_0%,#00033F_26.92%)]" />

        {/* Top wave image */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Image
            src="/images/Wave.png"
            alt="Wave"
            width={1440}
            height={200}
            className="w-full object-cover object-top opacity-100"
            priority
          />
        </div>

        {/* Content */}
        <Container className="relative z-20 flex flex-col items-center gap-5 md:gap-7 mt-18">

          {/* Badge */}
          <div className="px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white bg-[#171717] border border-white/20 backdrop-blur-sm text-center">
            <span className="text-[#46FFCE]">Qeyd:</span> Platforma al/sat siqnalı vermir, investisiya tövsiyəsi deyil.
          </div>

          {/* Headline */}
          <h2 className="text-center font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl">
            <span className="text-[#46FFCE]">AI</span> ilə investisiyanı{" "}
            <br className="hidden sm:block" />
            addım-addım anlayırsan.
          </h2>

          {/* Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {sections.map((section) => (
              <div
                key={section.number}
                className="relative rounded-4xl p-5 flex flex-col gap-4"
                style={{ backdropFilter: "blur(12px)" }}
              >
                {/* Gradient border */}
                <div
                  className="absolute inset-0 rounded-4xl pointer-events-none"
                  style={{
                    padding: "1px",
                    background: "linear-gradient(239.81deg, rgba(70, 255, 206, 0) 0.03%, #2A997B 99.98%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Number + Title */}
                <div className="flex items-center gap-4 border border-[#46FFCE] rounded-2xl px-4 py-4">
                  <span className="text-4xl md:text-6xl font-extralight leading-none text-[#46FFCE]">
                    {section.number}
                  </span>
                  <h3 className="text-white font-bold text-lg md:text-xl leading-snug whitespace-pre-line mt-1">
                    {section.title}
                  </h3>
                </div>

                {/* Bullets */}
                <div className="flex flex-col gap-2">
                  {section.bullets.map((bullet, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-white text-xs md:text-sm font-light leading-snug"
                      style={{
                        background: "rgba(22, 61, 252, 1)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span className="mt-0.5 shrink-0">•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

         <Link href="/ai-assistant" >
            {/* CTA Button */}
          <button className="flex items-center gap-2 font-semibold transition-all duration-200 active:scale-95 bg-white text-[#0d1117] rounded-full px-8 py-3.5 text-sm md:text-base tracking-[-0.01em] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-[#f0f4ff] hover:shadow-[0_6px_28px_rgba(0,0,0,0.28)]">
            Ellə indi öyrənməyə başla
            <Image
              src="/svg/storm.svg"
              alt="Storm Icon"
              width={13}
              height={23}
              priority
              className="object-contain"
            />
          </button>

          </Link>
        </Container>
      </section>

      <IndicatorsSection />
    </>
  );
}