"use client";

import { useState } from "react";
import AiChat from "@/components/Ai-assistant/AiChat";
import Sidebar from "@/components/Ai-assistant/Sidebar";
import SidebarCollapsed from "@/components/Ai-assistant/SidebarCollapsed"; // Mobil üçün mütləqdir
import FinancialLevel from "@/components/Ai-assistant/financial-level";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("ai-assistant");

  return (
    <div
      className="flex h-screen w-full overflow-hidden items-center justify-center"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(180deg, #01021A 0%, #0C24B4 50%, #65C8DE 100%)",
      }}
    >
      <div className="flex w-full max-w-[1440px] h-[calc(100vh-4rem)] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/30 px-0 relative">
        
        {/* ── SIDEBARS ── */}
        {/* Mobil versiya: sm-dən kiçik ekranlarda görünür */}
        <div className="sm:hidden">
          <SidebarCollapsed activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Desktop versiya: sm və yuxarı ekranlarda görünür */}
        <div className="hidden sm:flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 flex flex-col relative bg-transparent">
          {activeTab === "ai-assistant" ? (
            <AiChat />
          ) : activeTab === "finance-level" ? (
            <FinancialLevel />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 font-bold text-2xl bg-white">
              Tezliklə...
            </div>
          )}
        </main>
      </div>
    </div>
  );
}