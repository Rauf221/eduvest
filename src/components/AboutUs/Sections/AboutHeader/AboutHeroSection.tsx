"use client";

import Image from "next/image";
import Container from "@/components/Shared/Container";

export default function HeroSection() {
  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="relative min-h-[600px] md:min-h-[900px] w-full flex flex-col items-center justify-start overflow-hidden"
    >
      <Image
        src="/images/about-bg.jpg"
        alt="bg"
        fill
        className="object-cover object-top opacity-100"
        priority
      />

      {/* ── CONTENT ── */}
     
      <Container className="relative z-10 flex flex-col items-center text-center pt-[250px] gap-4 md:gap-6">

        {/* Badge */}
        <div
          className="px-6 sm:px-8 md:px-10 py-2 md:py-3 rounded-full text-[11px] md:text-[12px] text-white font-normal tracking-widest"
          style={{
            background: "rgba(7, 8, 15, 1)",
            border: "1px solid rgba(58, 58, 58, 1)",
          }}
        >
          Eduvest
        </div>

        {/* Headline */}
        <h1 className="text-white font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight max-w-xs sm:max-w-lg md:max-w-2xl mt-3 md:mt-6 tracking-wide">
          Maliyyə savadlılığını hər kəs üçün əlçatan edirik
        </h1>

        {/* Subtitle */}
        <p
          className="text-white text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-[500px] md:max-w-[650px] tracking-wide leading-relaxed"
          style={{ fontWeight: 400 }}
        >
          Eduvest investisiya və fond bazarı anlayışlarını sadə dildə izah edən, AI dəstəyi ilə
          fərdiləşdirilmiş öyrənmə platformasıdır. Məqsədimiz: qərar verəndə qorxu yox,
          məntiq işləsin.
        </p>

        {/* Scroll indicator */}
        <div className="mt-10 sm:mt-16 md:mt-24 flex flex-col items-center gap-3">
          <div className="w-px h-3 border-l border-[#7C7C7C]" />
          <div className="w-px h-10 sm:h-12 md:h-12 border-l border-[#7C7C7C]" />
        </div>

      </Container>
    </section>
  );
}