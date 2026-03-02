"use client";

import Image from "next/image";

import Container from "../Shared/Container";


const platformLinks = [
  { label: "Ana səhifə", href: "/" },
  { label: "Necə işləyir", href: "#how-it-works" },
  { label: "Öyrənmə modulları", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Bloq", href: "#" },
];

const legalLinks = [
  { label: "İstifadə şərtləri", href: "#" },
  { label: "Məxfilik siyasəti", href: "#" },
  { label: "Disclaimer", href: "#" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 bg-transparent ">
      <Container className="">
        <div
          className="w-full mx-auto rounded-4xl px-8 md:px-[60px] pt-[40px] pb-[16px] flex flex-col "
          style={{ background: "#000000" }}
        >
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
            
            {/* Logo + Description */}
            <div className="flex flex-col gap-4 md:col-span-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/svg/Logo.svg"
                  alt="Eduvest Logo"
                  width={49.251136779785156}
                  height={29.576404571533203}
                  className="object-contain"
                />
                <span className="text-white font-semibold text-[28.6px] tracking-tight">
                  eduvest
                </span>
              </div>
              <p className="text-white text-sm leading-relaxed max-w-xs text-[15px]">
                İnvestisiya və maliyyə savadlılığını hər kəs üçün sadələşdiririk.
                Süni intellekt vasitəsilə Azərbaycan fond bazarını anlaşılan və
                praktik formada izah edirik.
              </p>
            </div>

            {/* Platforma */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold text-[16px]">Platforma</h4>
              <ul className="flex flex-col gap-1">
                {platformLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hüquqi */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold text-[16px]">Hüquqi</h4>
              <ul className="flex flex-col gap-1">
                {legalLinks.map((item) => (
                  <li key={item.label} className="">
                    <a href={item.href} className="text-white/50  text-sm hover:text-white transition-colors duration-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Əlaqə */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold text-[16px]">Əlaqə</h4>
              <ul className="flex flex-col gap-1">
               
                {["hello@eduvest.tech", "Bakı, Azərbaycan"].map((item) => (
                  <li key={item}>
                    <span className="text-white/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-1 mt-7">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-3 mt-4" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-white/30 text-[15px]">
              © 2026 EDUVEST Ai, LLC. Bütün hüquqlar qorunur.
            </p>
            <p className="text-white/30 text-[15px]">
              Azərbaycan fond bazarını anlamaq üçün ağıllı yol.
            </p>
          </div>

        </div>
      </Container> 
    </footer>
  );
}