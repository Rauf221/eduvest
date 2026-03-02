"use client";

import Image from "next/image";
import { Sparkles, CalendarDays, Rocket, Settings, LogOut } from "lucide-react";

interface SidebarCollapsedProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function SidebarCollapsed({ activeTab, setActiveTab }: SidebarCollapsedProps) {
  
  // İkonları ID-lərə görə eşitləşdiririk
  const iconItems = [
    { id: "ai-assistant", icon: Sparkles, label: "Ai Assistant" },
    { id: "finance-level", icon: Rocket, label: "Maliyyə səviyyəm" },
    { id: "how-it-works", icon: CalendarDays, label: "Necə işləyir" },
    { id: "settings", icon: Settings, label: "Ayarlar" },
  ];

  return (
    <aside className="flex flex-col items-center h-full w-[46px] shrink-0 bg-white border-r border-gray-100 py-6 justify-between">
      
      <div className="flex flex-col items-center gap-8 w-full">
        {/* Logo */}
        <div 
          className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setActiveTab("ai-assistant")}
        >
          <Image
            src="/svg/Logo.svg"
            alt="Eduvest"
            width={28}
            height={18}
            priority
            className="object-contain"
          />
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col items-center gap-4 w-full px-2">
          {iconItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              title={label}
              onClick={() => setActiveTab(id)}
              className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-200 ${
                activeTab === id
                  ? "text-[#163DFC] bg-blue-50 shadow-sm"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon size={22} strokeWidth={activeTab === id ? 2 : 1.6} />
            </button>
          ))}
        </nav>
      </div>

      {/* Logout İkonu (Alt hissə üçün) */}
      <div className="pb-2">
        <button 
          title="Çıxış"
          className="w-11 h-11 flex items-center justify-center rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut size={20} strokeWidth={1.6} />
        </button>
      </div>

    </aside>
  );
}