"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ChevronDown,
  Settings,
  HelpCircle,
  Menu,
  X,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [search, setSearch] = useState("");
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Əsas naviqasiya elementləri
  const navItems = [
    { id: "how-it-works", label: "Necə işləyir" },
    { id: "finance-level", label: "Maliyyə səviyyəm" },
    { id: "ai-assistant", label: "Ai Assistant" },
  ];

  // Proyektlər (Dropdown) daxilindəki elementlər
  const projectItems = [
    { label: "Fundament", href: "#", disabled: true },
    { label: "Öyrənmə modulları", href: "#", disabled: false },
    { label: "Test imtahan", href: "#", disabled: true },
  ];

  // Alt menyu elementləri
  const bottomItems = [
    { id: "settings", label: "Ayarlar", icon: Settings },
    { id: "support", label: "Kömək & Dəstək", icon: HelpCircle },
  ];

  const SidebarContent = () => (
    <aside
      className="flex flex-col h-full w-full bg-white border-r border-gray-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── LOGO ── */}
      <div className="px-6 pt-10 pb-10 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => { setActiveTab("ai-assistant"); setMobileOpen(false); }}
        >
          <Image
            src="/svg/Logo.svg"
            alt="Eduvest"
            width={38}
            height={23}
            priority
            className="object-contain"
          />
          <span className="text-[#0d1117] font-semibold text-[22.6px] tracking-tight">
            eduvest
          </span>
        </div>
     
        <button
          className="sm:hidden w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          <X size={18} className="text-gray-500" />
        </button>
      </div>

      {/* ── SEARCH ── */}
      <div className="px-4 pb-14">
        <div className="flex items-center gap-2 bg-gray-50 border border-[#A4A4A4] rounded-xl px-3 py-2.5 transition-all focus-within:border-[#163DFC]">
          <Search size={15} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Axtar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none w-full"
          />
        </div>
      </div>

      {/* ── NAVIGATION ── */}
      <nav className="flex-1 px-3 flex flex-col gap-5 overflow-y-auto hide-scrollbar">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => {
              setActiveTab(id);
              setMobileOpen(false);
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[16px] font-bold transition-all duration-150 text-left ${
              activeTab === id
                ? "text-[#163DFC] bg-blue-50/60 shadow-sm"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {label}
          </button>
        ))}

        {/* Proyektlər Dropdown */}
        <div className="mt-1">
          <button
            onClick={() => setProjectsOpen(!projectsOpen)}
            className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-[16px] font-medium text-[#1C2938] hover:bg-gray-50 transition-all duration-150"
          >
            <span className="font-bold text-gray-700">Proyektlər</span>
            <ChevronDown
              size={15}
              className={`text-gray-500 transition-transform duration-200 ${
                projectsOpen ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>

          {projectsOpen && (
            <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-gray-50 pl-4">
              {projectItems.map(({ label, href, disabled }) => (
                <Link
                  key={label}
                  href={href}
                  className={`px-3 py-2 rounded-lg text-[15px] transition-colors duration-150 ${
                    disabled 
                      ? "text-gray-300 cursor-not-allowed" 
                      : "text-[#90A5BA] hover:bg-gray-50 hover:text-[#163DFC]"
                  }`}
                  onClick={(e) => disabled && e.preventDefault()}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Menu Items */}
        <div className="mt-auto flex flex-col gap-1 border-t pt-5 border-gray-50">
          {bottomItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { setActiveTab(id); setMobileOpen(false); }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[15px] font-medium transition-all ${
                activeTab === id ? "text-[#163DFC] bg-blue-50" : "text-[#1C2938] hover:bg-gray-50"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── USER PROFILE ── */}
      <div className="mx-6 mt-6 h-px bg-gray-100" />
      <div className="px-4 py-8 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-[48px] h-[48px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-[#163DFC] shrink-0 border-2 border-white shadow-sm">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col truncate">
            <span className="text-sm font-bold text-[#1C2938] leading-tight truncate">
              Cavid Aghbabali
            </span>
            <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
              Student
            </span>
          </div>
        </div>
        <button 
          title="Çıxış"
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 shadow-sm"
        >
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden sm:flex w-[320px] lg:w-[360px] shrink-0 h-full">
        <SidebarContent />
      </div>

   
      {!mobileOpen && (
        <button
          className="sm:hidden absolute top-4 left-4 z-40 w-10 h-10 flex items-center justify-center rounded-xl bg-white/80 backdrop-blur-md shadow-lg border border-white/20"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} className="text-[#163DFC]" />
        </button>
      )}

      {/* Mobil overlay */}
      {mobileOpen && (
        <div
          className="sm:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}

    
      <div
        className={`sm:hidden fixed top-0 left-0 z-[70] h-full w-[280px] shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </div>
    </>
  );
}