"use client";

import { useState } from "react";
import Container from "@/components/Shared/Container";

const faqs = [
  {
    question: "Fond bazarı həmişə risklidirmi?",
    answer:
      'Reallıq: Risk var, amma "həmişə təhlükə" demək deyil. Risk idarə olunur: müddət, diversifikasiya və strategiya ilə.',
  },
  {
    question: "İnvestisiya yalnız varlılar üçündürmü?",
    answer:
      "Reallıq: Yox. Başlamaq üçün əsas olan böyük məbləğ deyil, davamlılıq və plandır. Kiçik məbləğlə belə vərdiş formalaşdırmaq mümkündür.",
  },
];

export default function MythsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="relative w-full min-h-[600px] overflow-hidden flex flex-col items-center justify-center py-16 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#01043F_0%,#000DFF_100%)]" />

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-center gap-8 md:gap-10 max-w-4xl">

        {/* Badge */}
        <div className="px-4 py-2 rounded-full text-xs md:text-sm font-normal text-white bg-black border border-white/20 backdrop-blur-sm">
          Qorxuların faktlarla yoxlanışı.
        </div>

        {/* Headline */}
        <h2 className="text-center font-medium text-white text-4xl sm:text-5xl md:text-5xl tracking-wide">
          Miflər və reallıq
        </h2>

        {/* Subtitle */}
        <p className="text-center text-white text-sm md:text-base">
          İnvestisiya haqda ən çox deyilən yalanlar.
        </p>

        {/* Accordion */}
        <div className="w-full flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="w-full">
              {/* Question row */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between rounded-2xl px-5 py-3 text-left transition-all duration-200 bg-white text-[#0d1117] font-medium text-sm md:text-xl"
              >
                <span>{faq.question}</span>
                <span
                  className="ml-4 shrink-0 text-lg transition-transform duration-300"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 py-3 ${
                  openIndex === i ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-2 text-xs md:text-sm leading-relaxed text-white/90">
                  <span className="text-[#46FFCE] font-bold">Reallıq:</span>{" "}
                  {faq.answer.replace("Reallıq: ", "")}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}