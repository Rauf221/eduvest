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
} from "lucide-react";

const navItems = [
  { label: "Necə işləyir", href: "#", active: false },
  { label: "Maliyyə səviyyəm", href: "#", active: false },
  { label: "Ai Assistant", href: "#", active: true },
];

const projectItems = [
  { label: "Fundament", href: "#", disabled: true },
  { label: "Öyrənmə modulları", href: "#", disabled: false },
  { label: "Test imtahan", href: "#", disabled: true },
];

const bottomItems = [
  { label: "Ayarlar", href: "#", icon: Settings },
  { label: "Kömək & Dəstək", href: "#", icon: HelpCircle },
];

export default function Sidebar() {
  const [search, setSearch] = useState("");
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <aside
      className="flex flex-col h-full w-full bg-white border-r border-gray-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Logo */}
      <div className="px-6 pt-10 pb-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Image
            src="/svg/Logo.svg"
            alt="Eduvest"
            width={38.921546936035156}
            height={23.373254776000977}
            priority
            className="object-contain"
          />
          <span className="text-[#0d1117] font-semibold text-[22.6px] tracking-tight">
            eduvest
          </span>
        </Link>
        <button
          className="sm:hidden w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          <X size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 pb-14">
        <div className="flex items-center gap-2 bg-gray-50 border border-[#A4A4A4] rounded-xl px-3 py-2.5">
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

      {/* Nav */}
      <nav className="flex-1 px-3 flex flex-col gap-5 overflow-y-auto">
        {navItems.map(({ label, href, active }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[16px] font-bold transition-colors duration-150 ${
              active
                ? "text-[#163DFC] bg-blue-50/60"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {label}
          </Link>
        ))}

        {/* Projects dropdown */}
        <div className="mt-1">
          <button
            onClick={() => setProjectsOpen(!projectsOpen)}
            className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-[16px] font-medium text-[#1C2938] hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex items-center gap-3">Proyektlər</div>
            <ChevronDown
              size={15}
              className={`text-[#000000] transition-transform duration-200 ${
                projectsOpen ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>

          {projectsOpen && (
            <div className="ml-8 mt-0.5 flex flex-col gap-5">
              {projectItems.map(({ label, href, disabled }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-lg text-[16px] transition-colors duration-150 text-[#90A5BA] hover:bg-gray-50 hover:text-gray-900"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Bottom nav items */}
        <div className=" flex flex-col gap-0.5">
          {bottomItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[16px] font-medium text-[#1C2938] hover:bg-gray-50 transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Divider */}
      <div className="mx-8 h-px bg-gray-400" />

      {/* User profile */}
      <div className="px-4 py-8 flex items-center justify-center gap-15">
        <div className="flex items-center gap-3">
          <div className="w-[53px] h-[53px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 shrink-0">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              width={36}
              height={36}
              className="object-cover w-full h-full"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-[#1C2938] leading-tight">
              Cavid Aghbabali
            </span>
            <span className="text-xs text-[#1C2938]">Student</span>
          </div>
        </div>
        <button className="w-[39px] h-[39px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-150">
          <Image src="/svg/logout.svg" alt="Logout" width={39} height={39} />
        </button>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop sidebar — sm və yuxarıda görünür */}
      <div className="hidden sm:flex w-[360px] shrink-0 h-full">
        <SidebarContent />
      </div>

      {/* Mobile hamburger button */}
      <button
        className="sm:hidden absolute top-4 left-4 z-50 w-9 h-9 flex items-center justify-center rounded-xl bg-white shadow-md border border-gray-100"
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={18} className="text-gray-700" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="sm:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`sm:hidden fixed top-0 left-0 z-50 h-full w-[300px] shadow-2xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </div>
    </>
  );
}