"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, CalendarDays, Rocket, Settings } from "lucide-react";

const iconItems = [
  { icon: Sparkles, href: "#", active: true },
  { icon: CalendarDays, href: "#", active: false },
  { icon: Rocket, href: "#", active: false },
  { icon: Settings, href: "#", active: false },
];

export default function SidebarCollapsed() {
  return (
    <aside className="flex flex-col items-center h-full w-[67px] shrink-0 bg-white border-r border-gray-100 py-6 gap-8">
      
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/svg/Logo.svg"
          alt="Eduvest"
          width={28}
          height={18}
          priority
          className="object-contain"
        />
      </Link>

      {/* Icons */}
      <nav className="flex flex-col items-center gap-6">
        {iconItems.map(({ icon: Icon, href, active }, i) => (
          <Link
            key={i}
            href={href}
            className={`w-9 h-9 flex items-center justify-center rounded-xl transition-colors duration-150 ${
              active
                ? "text-[#163DFC]"
                : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Icon size={22} strokeWidth={1.6} />
          </Link>
        ))}
      </nav>

    </aside>
  );
}