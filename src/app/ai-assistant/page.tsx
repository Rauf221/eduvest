"use client";

import AiChat from "@/components/Ai-assistant/AiChat";
import Sidebar from "@/components/Ai-assistant/Sidebar";
import SidebarCollapsed from "@/components/Ai-assistant/SidebarCollapsed";

export default function DashboardPage() {
  return (
    <div
      className="flex h-screen w-full overflow-hidden "
      style={{
        fontFamily: "'Inter', sans-serif",
        background:
          "linear-gradient(180deg, #01021A 0%, #0C24B4 50%, #65C8DE 100%)",
      }}
    >
      <div className="flex w-full max-w-[1440px] mx-auto my-auto h-[calc(100vh-5rem)] bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/30 px-0">
        <div className="sm:hidden">
          <SidebarCollapsed />
        </div>
        <div className="hidden sm:flex">
          <Sidebar />
        </div>
        <AiChat />
      </div>
    </div>
  );
}
