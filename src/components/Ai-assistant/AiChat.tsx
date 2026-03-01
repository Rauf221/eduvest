"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, Plus, Send, Loader2 } from "lucide-react";
import { Message, getAIResponse } from "./mockData";

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const exactPrompts = [
    { id: "1", label: "Mən nədən başlaya bilərəm?" },
    { id: "2", label: "Baza terminlərini anlat" },
    { id: "3", label: "Süni İntellekt mənə necə kömək edə bilər?" },
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));
    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getAIResponse ? getAIResponse(text) : "Bu bir test cavabıdır.",
      timestamp: new Date(),
    };
    setIsTyping(false);
    setMessages((prev) => [...prev, aiMsg]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div
      className="flex-1 flex flex-col relative overflow-hidden min-w-0"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: "url('/images/aichat.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: messages.length === 0 ? 1 : 0,
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(180deg, #01021A 0%, #0C24B4 50%, #65C8DE 100%)",
            opacity: messages.length === 0 ? 0 : 1,
          }}
        />
      </div>

      {/* ── MESSAGES AREA ── */}
      <div
        className="hide-scrollbar relative z-10 flex-1 flex flex-col overflow-y-auto min-w-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {messages.length === 0 ? (
          <div className="flex-1" />
        ) : (
          <div className="flex flex-col gap-4 md:gap-6 w-full px-4 sm:px-6 md:px-10 py-4 md:py-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full shrink-0 mr-2 md:mr-3 mt-1 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg">
                    <Mic size={12} className="text-white md:hidden" />
                    <Mic size={14} className="text-white hidden md:block" />
                  </div>
                )}
                <div
                  className={`max-w-[90%] sm:max-w-[80%] px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#163DFC] text-white rounded-2xl rounded-tr-sm shadow-md"
                      : "bg-white/10 text-white/95 backdrop-blur-md rounded-2xl rounded-tl-sm border border-white/20"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start items-center gap-2 md:gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shrink-0">
                  <Mic size={13} className="text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl rounded-tl-sm px-4 md:px-5 py-3 md:py-3.5 flex items-center gap-2 md:gap-3">
                  <Loader2 size={15} className="text-white/70 animate-spin" />
                  <span className="text-white/70 text-xs md:text-sm">Yazır...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* ── BOTTOM CONTROLS ── */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-6 pb-4 sm:pb-6 md:pb-8 flex flex-col gap-3 md:gap-4">

        {/* Quick Prompts */}
        {messages.length === 0 && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <span className="text-white/80 text-xs sm:text-sm font-medium shrink-0">
              Tez başlamaq üçün seçin
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {exactPrompts.map((qp) => (
                <button
                  key={qp.id}
                  onClick={() => sendMessage(qp.label)}
                  className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-white/95 text-xs sm:text-sm transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(4px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  {qp.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="w-full bg-white rounded-[1.5rem] md:rounded-[2rem] px-2 md:px-3 py-1.5 md:py-2 flex items-end justify-between gap-2 shadow-2xl">
          <div className="flex flex-1 flex-col-reverse min-w-0">
            <button className="w-8 h-8 md:w-10 md:h-10 mb-1 shrink-0 flex items-center justify-center rounded-full text-[#3A3A3A] hover:bg-gray-100 transition-colors">
              <Plus size={26} strokeWidth={1.5} className="md:hidden" />
              <Plus size={34} strokeWidth={1.5} className="hidden md:block" />
            </button>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Başlayaq..."
              rows={1}
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-sm md:text-[15px] outline-none resize-none py-2.5 md:py-3.5"
              style={{ maxHeight: "100px", scrollbarWidth: "none" } as React.CSSProperties}
              onInput={(e) => {
                const t = e.target as HTMLTextAreaElement;
                t.style.height = "auto";
                t.style.height = Math.min(t.scrollHeight, 100) + "px";
              }}
            />
          </div>

          <div className="flex items-center gap-1 md:gap-1.5 shrink-0 mb-1 pr-0.5 md:pr-1">
            <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-[#3A3A3A] hover:bg-gray-100 transition-colors">
              <Mic size={22} strokeWidth={1.5} className="md:hidden" />
              <Mic size={30} strokeWidth={1.5} className="hidden md:block" />
            </button>
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              className="w-8 h-8 md:w-10 md:h-10 flex items-center bg-[#163DFC] justify-center rounded-full transition-all disabled:opacity-40 hover:scale-105 active:scale-95 shadow-md"
            >
              <Send size={18} className="text-white ml-0.5 md:hidden" />
              <Send size={24} className="text-white ml-0.5 hidden md:block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}