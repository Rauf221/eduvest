export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface QuickPrompt {
  id: string;
  label: string;
}

export const quickPrompts: QuickPrompt[] = [
  { id: "1", label: "Mən nədən başlaya bilərəm?" },
  { id: "2", label: "Baza terminlərini anlat" },
  { id: "3", label: "Suni İntelekt mənə necə kömək edə bilər?" },
];

export const mockResponses: Record<string, string> = {
  "mən nədən başlaya bilərəm":
    "Əla sual! Fond bazarında başlamaq üçün ilk addım maliyyə savadlılığını artırmaqdır. Tövsiyəm: 1) Əvvəlcə 'Fundament' modulunu keç, 2) Kiçik məbləğlə (50-100₼) başla, 3) Risk anlayışını öyrən. Hazırsan?",
  "baza terminlərini anlat":
    "Əsas terminlər bunlardır:\n\n• **Səhm** — şirkətin bir hissəsinə sahib olmaq deməkdir.\n• **Dividend** — şirkətin qazancından sənə düşən pay.\n• **Portfel** — sahib olduğun bütün investisiyaların toplusu.\n• **Volatillik** — qiymətin nə qədər dəyişkən olduğu.\n\nHansi termin haqda daha ətraflı danışım?",
  "suni intellekt mənə necə kömək edə bilər":
    "Mən sənin şəxsi maliyyə müəlliminəm! 🎯\n\nKömək edə biləcəklərim:\n• Mürəkkəb terminləri sadə dildə izah etmək\n• Sənin səviyyənə uyğun təlim planı qurmaq\n• Suallarına dərhal cavab vermək\n• Real misallarla anlayışını möhkəmləndirmək\n\nNədən başlamaq istərdin?",
  default:
    "Sualın üçün təşəkkür edirəm! Bu mövzu haqqında daha ətraflı məlumat vermək üçün bir az daha izah edə bilərsən? Fond bazarı, investisiya strategiyaları, və ya maliyyə terminləri ilə bağlı istənilən sualına kömək etməyə hazıram. 💡",
};

export function getAIResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase().trim();

  for (const [key, value] of Object.entries(mockResponses)) {
    if (key === "default") continue;
    if (lower.includes(key) || key.includes(lower.substring(0, 10))) {
      return value;
    }
  }

  // keyword matching
  if (lower.includes("başla") || lower.includes("nədən")) {
    return mockResponses["mən nədən başlaya bilərəm"];
  }
  if (lower.includes("termin") || lower.includes("nədir") || lower.includes("səhm")) {
    return mockResponses["baza terminlərini anlat"];
  }
  if (lower.includes("ai") || lower.includes("süni") || lower.includes("kömək")) {
    return mockResponses["suni intellekt mənə necə kömək edə bilər"];
  }
  if (lower.includes("risk")) {
    return "Risk — investisiyanın dəyərini itirə biləcəyin ehtimaldır. Amma risk idarə oluna bilər! Diversifikasiya (pulu müxtəlif aktivlərə bölmək) riski əhəmiyyətli dərəcədə azaldır. Uzunmüddətli investisiya da riski azaldır. 📊";
  }
  if (lower.includes("dividend")) {
    return "Dividend — şirkətin qazancından investorlara ödədiyi paydır. Məsələn, 100₼-lik səhm alsanız və şirkət 5% dividend versə, ildə 5₼ alırsınız. Bu passiv gəlir mənbəyidir! 💰";
  }

  return mockResponses["default"];
}