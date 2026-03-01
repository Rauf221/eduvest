"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Shared/Container";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-end bg-[#020617]"
      style={{ height: "120vh" }}
    >
      {/* Arxa fon */}
      <div className="absolute bottom-0 left-0 z-0 w-full" style={{ height: "120vh" }}>
        <Image
          src="/images/1.png"
          alt="Background"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      {/* Məzmun */}
      <Container className="relative z-20 flex flex-col items-center justify-center text-center mt-16 md:mt-20">
        
        <h1 className="flex flex-col justify-between text-center drop-shadow-md text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight lg:leading-none"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span>İnvestisiya sadə dildə.</span>
          <span className="mt-3 md:mt-4">
            <span className="text-[#46FFCE]">Süni intellekt</span>
            <span> dəstəyi ilə.</span>
          </span>
        </h1>

        <Link
          href="/ai-assistant"
          className="mt-8 md:mt-12 group relative flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 text-white"
          style={{
            width: "140.92px",
            height: "36.23px",
            background: "rgba(22, 61, 252, 0.2)",
            borderRadius: "20px",
            padding: "5px 25px",
            gap: "5px",
            boxShadow: `
              inset 0px 1.5px 1.5px rgba(255, 255, 255, 0.45),
              inset 0px -1px 1px rgba(255, 255, 255, 0.1),
              0px 4px 20px rgba(22, 61, 252, 0.4)
            `,
            border: "0.5px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <span className="absolute inset-0 rounded-[20px] bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />

          <div className="flex justify-center items-center gap-2">
            <span className="relative z-10 text-[14px] font-medium tracking-wide whitespace-nowrap leading-none mt-[2px]">
              İndi Başla
            </span>
            <span className="relative z-10 flex items-center justify-center mt-[2px]">
              <Image
                src="/svg/storm-white.svg"
                alt="Storm Icon"
                width={10}
                height={16}
                priority
                className="object-contain"
              />
            </span>
          </div>
        </Link>
      </Container>
    </section>
  );
}