"use client";

import Image from "next/image";
import Container from "@/components/Shared/Container";

const team = [
  {
    role: "MALİYYƏ VƏ TƏDQİQAT",
    name: "Cavid Ağbabalı",
    image: "/images/Cavid_Agbabali.jpg",
    bio: `Mən Cavid Ağbabalı. Bu layihədə əsas fokusum Eduvest-in maliyyə tərəfi oldu: maliyyə savadlılığının aşağı olmasının insanları investisiyadan necə uzaqlaşdırdığını araşdırdım.

Eyni zamanda platformanın maliyyə biliklərini necə təqdim etməli olduğunu düşünərək, çətin anlayışları hər kəs üçün aydın və praktik formaya salmağa çalışdım. Mənim üçün Eduvest sadəcə bir alət deyil, insanların maliyyə qərarlarında özünə inam qazanmasıdır. Maliyyə savadlılığı artdıqca, daha güclü və daha ədalətli iqtisadiyyat qurmaq mümkün olur.`,
    focus: "İQTİSADİYYATIN, MALİYYƏNİN VƏ BAZARLARIN REAL İNKİŞAFINA NECƏ TƏSİR ETDİYİNİ ARAŞDIRIRAM.",
  },
  {
    role: "SÜNİ İNTELLEKT VƏ MƏLUMAT MÜHƏNDİSLİYİ",
    name: "Harun Nəbiyev",
    image: "/images/Harun_Nebiyev.jpg",
    bio: `Mən Harun Nəbiyevəm, Dunya School-da oxuyan tələbəyəm və kompüter elmləri və data science sahələrinə xüsusi marağım var. Bu layihədə məqsədimiz investisiya biliklərini sadələşdirən süni intellekt əsaslı bir alat yaratmaq idi.
Eduvest üçün süni intellekt hissəsinin qurulması və sayt daxilindəki inteqrasiyasına cavabdehəm. AI-nin maliyyə məlumatını emal edib hər kəsin anlayacağı formaya çevrilməsi üzərində işlədim. Məncə, bu layihə texnologiyanı real problemlərə tətbiq etməkdir: məlumatı daha anlaşılır etmək və insanlara praktik dəyər vermək.`,
    focus: "KOMPÜTER ELMLƏRİ VƏ DATA SCIENCE SAHƏSİNƏ MARAĞIM VAR, SÜNİ İNTELLEKT ƏSASLI SİSTEMLƏRİN QURULMASI VƏ İNTEQRASİYASI İLƏ MƏŞĞUL OLURAM.",
  },
];

export default function TeamSection() {
  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(180deg, #030013 0%, #093FF9 100%)",
      }}
    >
      <Container>

        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 mb-14 md:mb-20">
          <div
            className="px-6 sm:px-8 py-2.5 rounded-full text-[#46FFCE] text-xs sm:text-sm"
            style={{
              background: "#171717",
              border: "1px solid rgba(58,58,58,1)",
            }}
          >
            Komanda
          </div>
          <p className="text-white text-base sm:text-lg md:text-[15px] font-medium tracking-wide max-w-2xl px-4">
            Maliyyəni anlamaq hər kəsin haqqıdır.
          </p>
        </div>

 
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-12">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col sm:flex-row gap-6">
              
            
              <div className="w-full sm:w-[200px] md:w-[231px] shrink-0 rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-[268px] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

         
              <div className="flex flex-col gap-3 flex-1 w-full">
                <span className="text-white/50 text-[10px] font-light tracking-widest uppercase">
                  {member.role}
                </span>
                <h2 className="text-[#A4A4A4] text-2xl sm:text-3xl md:text-4xl border-b-[1px] pb-2 mb-2 border-[#A4A4A4] font-medium">
                  {member.name}
                </h2>
                <div className="text-white/70 text-[13px] sm:text-xs md:text-[10px] whitespace-pre-wrap">
                  {member.bio}
                </div>
                <p className="text-[#163DFC] text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase mt-1">
                  {member.focus}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* ── DIVIDER ── */}
        <div className="w-full h-[2px] bg-[#46FFCE] my-14 md:my-20" />

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="text-white/50 text-sm sm:text-[16px] font-semibold tracking-widest uppercase border-b-[1px] border-[#A4A4A4] pb-3 sm:pb-4">
              MİSSİYAMIZ
            </span>
            <p className="text-[#46FFCE] text-sm sm:text-base md:text-lg font-bold uppercase">
              DAHA ŞÜURLU İNVESTORLAR, DAHA SAĞLAM KAPİTAL BAZARI, DAHA GÜCLÜ VƏ İNKLÜZİV İQTİSADİYYAT. İNSANLAR MALİYYƏ QƏRARLARINI "EŞİTDİYİMƏ GÖRƏ" YOX, "BAŞA DÜŞDÜYÜMƏ GÖRƏ" VERSİN.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="text-white/50 text-sm sm:text-[16px] font-semibold tracking-widest uppercase border-b-[1px] border-[#A4A4A4] pb-3 sm:pb-4">
              BAXIŞIMIZ
            </span>
            <p className="text-[#46FFCE] text-sm sm:text-base md:text-lg font-bold uppercase">
              AZƏRBAYCANDA MALİYYƏ SAVADLILIĞINI ARTIRMAQ VƏ İNVESTİSİYA MÖVZUSUNU "ÇƏTİN TERMİNLƏR"DƏN AZAD EDİB PRAKTİK VƏ ANLAŞILAN ETMƏK.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}