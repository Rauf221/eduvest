export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const mockResponses: Record<string, string> = {
  // --- HAZIR (QUICK PROMPT) SUALLAR ---
  start_learning: `### Mən nədən başlaya bilərəm?

İnvestisiya dünyasına addım atmaq üçün ən vacib şey maliyyə savadlılığını artırmaqdır. Eduvest sənə bu yolu addım-addım göstərir.

**İlk addımların belə olmalıdır:**
• **Öyrən:** "Fundament" modulundan başlayaraq əsasları mənimsə.
• **Məqsəd qoy:** Nə üçün pul yığdığını müəyyənləşdir (ev, təhsil, yoxsa təqaüd?).
• **Kiçik başla:** Böyük risklər etmədən, kiçik məbləğlərlə təcrübə qazan.

**Sadə misal:**
Yemək bişirməyi öyrənmək kimi düşün. İlk gündən restoran açmırsan, əvvəlcə inqrediyentləri (səhm, istiqraz) tanıyırsan.

**Yekun:**
Eduvest-in təlim modulları ilə təməli möhkəm qur və kiçik investisiyalarla təcrübəyə başla.`,

  basic_terms: `### Baza terminlərini anlat

İnvestisiya dilini anlamaq üçün bu 3 termini bilmək mütləqdir:

• **Səhm (Stock):** Bir şirkətin kiçik bir hissəsinə sahib olmaq deməkdir. Şirkət böyüdükcə səhmin dəyəri də artır.
• **İstiqraz (Bond):** Sənin dövlətə və ya şirkətə verdiyin borcdur. Bunun müqabilində sənə faiz ödənilir.
• **Dividend:** Şirkətin qazandığı mənfəəti öz səhmdarları (yəni səninlə) bölüşməsidir.

**Sadə misal:**
Bir dostunun kofe dükanı açdığını düşün. Sən ona pul verib ortaq olursansa, bu **səhm**dir. Dükan qazanc əldə edib sənə pay verirsə, bu **dividend**dir.

**Yekun:**
Terminləri bilmək bazarda "hansı dildə" danışıldığını anlamağa kömək edir.`,

  ai_help: `### Süni İntellekt mənə necə kömək edə bilər?

Mən sənin 24/7 yanında olan maliyyə köməkçinim və müəlliminəm.

**Sənin üçün bunları edə bilərəm:**
• **Mürəkkəb mövzuları sadələşdirirəm:** NYSE və ya inflyasiya kimi çətin mövzuları uşaq dili ilə izah edirəm.
• **Sual-cavab:** İstənilən vaxt suallarını dərhal cavablandırıram.
• **Analiz:** Şirkətlər və bazarlar haqqında mühüm xəbərləri sənə xülasə edirəm.

**Sadə misal:**
Məni cibində gəzdirdiyin "Maliyyə Ensiklopediyası" kimi düşün. Nəyi anlamasan, dərhal soruşa bilərsən.

**Yekun:**
Süni İntellekt öyrənmə prosesini sürətləndirir və səni səhv qərarlardan qoruyur.`,

  // --- SPESİFİK CAVABLAR ---
  abb: `### ABB nədir?

ABB bankdır. Yəni pulunu saxlayan, köçürən və lazım olanda sənə borc (kredit) verən bir qurum.

**ABB-də sən nə edə bilərsən?**
• **Kart götürə bilərsən** (maaş kartı, alış-veriş kartı)
• **Pul köçürə bilərsən** (dostuna, ailənə, başqa banka)
• **Depozit aça bilərsən** (pulunu banka qoyursan, üstə faiz gəlir)
• **Kredit götürə bilərsən** (məsələn telefon, maşın, ev üçün)
• **Mobil tətbiqdən idarə edə bilərsən** (evdən çıxmadan)

**Qısaca:** ABB pul işlərini rahat görmək üçün istifadə etdiyin bankdır.

**Sadə misal:**
Maaşın kartına gəlirsə, kartla alış-veriş edirsənsə və ya telefondan pul köçürürsənsə, bu bank xidmətidir.

**Yekun:**
ABB gündəlik pul işlərini rahat görmək üçün istifadə etdiyin bankdır.`,

  nvidia: `### Why did NVIDIA suddenly become more valuable?
Because NVIDIA sells something like this:
• The most important component (GPU chips) for large "brain computers" for run AI.

**Simple example:**
• AI (like ChatGPT) = a very big brain
• To operate that brain = a very powerful engine is needed
• NVIDIA = the main company that produces these engines

**When AI rapidly grew worldwide:**
• Everyone wanted GPUs
• NVIDIA sold a lot
• Made a lot of money
• Investors said, "This company will continue to make a lot in the future"
• Result: The company’s market value skyrocketed.

**In short:**
The AI trend exploded, and since NVIDIA sold the "main equipment" for that trend, its value soared.

**Conclusion:**
The AI trend exploded, and because NVIDIA sold the "main equipment" for that trend, its value rapidly increased.`,

  bfb_funksiya: `### Bakı Fond Birjası (BFB) nə üçündür?
• **Şirkətlər və dövlət** pul toplamaq istəyir
• **İnsanlar (investorlar)** pulunu artırmaq istəyir
• **Birja** bunları bir yerə gətirir və deyir: “Alqı-satqı burda qayda ilə, təhlükəsiz şəkildə olsun.”

**Sadə desək:** BFB qiymətli kağızların (səhm/istiqraz) alınıb-satıldığı rəsmi bazardır.

**Sadə misal:**
Sən bir şirkətin “payını” almaq istəyirsən. BFB bu alqını rəsmi və sistemli şəkildə edir.

**Yekun:**
BFB qiymətli kağızların alınıb-satıldığı rəsmi platformadır.`,

  bfb_vs_nyse: `### NYSE nədir?
NYSE (New York Stock Exchange) ABŞ-da, dünyada ən böyük birjalardan biridir.

**Fərqi çox sadə belə düşün:**
1) **Ölçü:** BFB yerli bazardır, NYSE dünya nəhəngidir.
2) **Dövriyyə:** NYSE-də hər gün milyardlarla dollar dövriyyə olur, BFB-də həcm daha azdır.
3) **Təsir:** NYSE-dəki xəbər bütün dünyaya təsir edir, BFB lokal bazara təsir edir.

**Sadə misal:**
BFB yerli bazar kimidir, NYSE isə dünya səviyyəli mega ticarət mərkəzi.

**Yekun:**
BFB lokal birjadır, NYSE isə qlobal nəhəng birjadır.`,

  default: "Bağışlayın, bu suala hələ ki cavabım yoxdur. Zəhmət olmasa ABB, NVIDIA, BFB və ya investisiya haqqında soruşun. 💡"
};

export function getAIResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase().trim();

  // 1. PRIORITETLİ YOXLAMA: NYSE
  // İstifadəçi cümlə daxilində "nyse" işlətdiyi an bu cavabı qaytaracaq
  if (lower.includes("nyse")) {
    return mockResponses["bfb_vs_nyse"];
  }

  // 2. HAZIR SUALLARIN LOGİKASI (Quick Prompts)
  if (lower.includes("nədən başlaya bilərəm") || lower.includes("bashlamaq")) {
    return mockResponses["start_learning"];
  }
  
  if (lower.includes("termin") || lower.includes("anlat") || lower.includes("nədir")) {
    if (lower.includes("abb")) return mockResponses["abb"];
    if (lower.includes("bfb") || lower.includes("birja") || lower.includes("bakı fond birjası")) return mockResponses["bfb_funksiya"];
    return mockResponses["basic_terms"];
  }

  if (lower.includes("süni intellekt") || lower.includes("kömək") || lower.includes("ai")) {
    if (lower.includes("nvidia")) return mockResponses["nvidia"];
    return mockResponses["ai_help"];
  }

  // 3. SPESİFİK AÇAR SÖZLƏR (Digərləri)
  if (lower.includes("abb")) {
    return mockResponses["abb"];
  }
  
  if (lower.includes("nvidia")) {
    return mockResponses["nvidia"];
  }

  if (lower.includes("bfb") || lower.includes("bakı fond birjası") || lower.includes("birja")) {
    return mockResponses["bfb_funksiya"];
  }

  return mockResponses["default"];
}