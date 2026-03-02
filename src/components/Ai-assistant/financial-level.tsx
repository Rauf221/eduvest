"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";

const questions = [
  { id: 1, q: "İnvestisiya etməyin əsas məqsədi nədir?", options: ["Pul xərcləmək", "Pulun dəyərini qorumaq və artırmaq", "Kredit götürmək", "Vergi ödəmək"], correct: 1 },
  { id: 2, q: "Səhm almaq investor üçün nə deməkdir?", options: ["Şirkətdə pay sahibi olmaq", "Şirkətə kredit vermək", "Dövlətə vergi ödəmək", "Bank depoziti açmaq"], correct: 0 },
  { id: 3, q: "Fond bazarının əsas funksiyası hansıdır?", options: ["Malların satışı", "Kredit verilməsi", "Kapitalın şirkətlərə yönəldilməsi", "Vergi toplamaq"], correct: 2 },
  { id: 4, q: "Likvidlik nə deməkdir?", options: ["Aktivin tez pula çevrilə bilməsi", "Şirkətin gəlir səviyyəsi", "Səhm qiymətinin artması", "İnvestorların sayı"], correct: 0 },
  { id: 5, q: "Diversifikasiya investor üçün əsasən nəyi azaldır?", options: ["Gəliri", "Vergiləri", "Riski", "Likvidliyi"], correct: 2 },
  { id: 6, q: "IPO nədir?", options: ["Şirkətin iflası", "Şirkətin ilk dəfə səhmlərini ictimaiyyətə satması", "Dövlət istiqrazı", "Bank kredit növü"], correct: 1 },
  { id: 7, q: "Bakı Fond Birjasının fəaliyyətinə ən çox hansı amillər təsir edir?", options: ["Hava şəraiti", "Şirkət fəaliyyəti, iqtisadi artım və investorların etibarı", "Yalnız sosial media trendləri", "Təsadüfi qiymət dəyişiklikləri"], correct: 1 },
  { id: 8, q: "Niyə Azərbaycanda pərakəndə investorların iştirakı nisbətən aşağıdır?", options: ["Fond birjası yoxdur", "Yüksək maliyyə savadlılığı", "Məhdud maliyyə bilikləri və risk məlumatlılığı", "Siyahıya alınmış şirkətlər yoxdur"], correct: 2 },
  { id: 9, q: "Maliyyə savadlılığı nəyi ifadə edir?", options: ["Çox pul qazanmaq bacarığını", "Maliyyə qərarlarını düzgün başa düşmək və idarə etmək bacarığını", "Kredit götürmə imkanını", "Vergi ödəmə sistemini"], correct: 1 },
  { id: 10, q: "Maliyyə savadlılığı artdıqda bazarda nə baş verir?", options: ["İnvestor sayı azalır", "Ticarət dayanır", "Likvidlik və bazar aktivliyi artır", "Şirkətlər bağlanır"], correct: 2 },
];

export default function FinancialLevel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});
  const [isSubmitted, setIsSubmitted] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (optIdx: number) => {
    if (isSubmitted[currentIdx]) return;
    setSelectedAnswers({ ...selectedAnswers, [currentIdx]: optIdx });
    setIsSubmitted({ ...isSubmitted, [currentIdx]: true });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) correct++;
    });
    return { correct, wrong: questions.length - correct };
  };

  const resetTest = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setIsSubmitted({});
    setShowResults(false);
  };

  const { correct, wrong } = calculateScore();

  return (
    <div 
      className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 min-h-full overflow-y-auto"
      style={{ background: "linear-gradient(180deg, #01021A 0%, #0C24B4 50%, #65C8DE 100%)" }}
    >
      <div className="w-full max-w-2xl flex flex-col gap-4 md:gap-6 py-8">
        
        {!showResults ? (
          <>
            {/* Header */}
            <div className="flex justify-between items-center px-1">
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">Maliyyə Səviyyəsi</h1>
                <p className="text-white/70 text-xs md:text-sm">Sual {currentIdx + 1} / {questions.length}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <span className="text-xs md:text-sm font-bold text-white">
                  {Math.round(((currentIdx + 1) / questions.length) * 100)}%
                </span>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/20">
              <h2 className="text-lg md:text-2xl font-bold text-[#000000] mb-6 md:mb-10 leading-snug">
                {questions[currentIdx].q}
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {questions[currentIdx].options.map((option, idx) => {
                  const isCorrect = idx === questions[currentIdx].correct;
                  const isSelected = selectedAnswers[currentIdx] === idx;
                  const submitted = isSubmitted[currentIdx];

                  let btnStyle = "border-gray-100 bg-gray-50/50 text-[#000000]";
                  
                  if (submitted) {
                    if (isCorrect) {
                      btnStyle = "border-green-500 bg-green-50 text-green-700 ring-1 ring-green-500";
                    } else if (isSelected) {
                      btnStyle = "border-red-500 bg-red-50 text-red-700 ring-1 ring-red-500";
                    } else {
                      btnStyle = "border-gray-100 opacity-40 text-[#000000]";
                    }
                  } else {
                    btnStyle += " hover:border-blue-300 hover:bg-blue-50";
                    if (isSelected) btnStyle = "border-blue-600 bg-blue-50 text-[#000000]";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(idx)}
                      className={`group flex items-center justify-between p-4 md:p-5 rounded-xl md:rounded-2xl border-2 transition-all duration-200 text-left text-sm md:text-base font-bold ${btnStyle}`}
                    >
                      <span className="pr-4">{option}</span>
                      <div className="shrink-0">
                        {submitted && isCorrect && <CheckCircle2 size={20} className="text-green-600 md:w-[22px]" />}
                        {submitted && isSelected && !isCorrect && <XCircle size={20} className="text-red-600 md:w-[22px]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 md:mt-10 pt-6 border-t border-gray-100">
                <button
                  onClick={() => currentIdx > 0 && setCurrentIdx(currentIdx - 1)}
                  disabled={currentIdx === 0}
                  className="flex items-center gap-1 md:gap-2 px-2 py-2 rounded-xl font-bold text-gray-400 hover:text-black hover:bg-gray-100 disabled:invisible transition-all text-sm md:text-base"
                >
                  <ChevronLeft size={18} /> Geri
                </button>
                
                {currentIdx === questions.length - 1 && isSubmitted[currentIdx] ? (
                  <button
                    onClick={() => setShowResults(true)}
                    className="flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold bg-green-600 text-white hover:bg-green-700 transition-all shadow-lg shadow-green-200 text-sm md:text-base"
                  >
                    Nəticə
                  </button>
                ) : (
                  <button
                    onClick={() => currentIdx < questions.length - 1 && setCurrentIdx(currentIdx + 1)}
                    disabled={currentIdx === questions.length - 1 || !isSubmitted[currentIdx]}
                    className="flex items-center gap-1 md:gap-2 px-6 md:px-10 py-2.5 md:py-3 rounded-xl font-bold bg-[#163DFC] text-white hover:bg-blue-700 disabled:opacity-30 transition-all shadow-lg shadow-blue-200 text-sm md:text-base"
                  >
                    İrəli <ChevronRight size={18} />
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          /* Results Screen */
          <div className="bg-white rounded-3xl md:rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/20 text-center flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Trophy size={32} className="text-yellow-600 md:w-[40px]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#000000] mb-2">Tamamlandı!</h2>
            <p className="text-gray-500 mb-8 text-sm md:text-base font-medium">Maliyyə biliklərin:</p>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full mb-8">
              <div className="bg-green-50 p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-green-100">
                <p className="text-green-600 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-1">Düzgün</p>
                <p className="text-2xl md:text-4xl font-black text-green-700">{correct}</p>
              </div>
              <div className="bg-red-50 p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-red-100">
                <p className="text-red-600 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-1">Səhv</p>
                <p className="text-2xl md:text-4xl font-black text-red-700">{wrong}</p>
              </div>
            </div>

            <div className="w-full bg-gray-50 p-4 rounded-xl mb-8">
              <p className="text-[#000000] font-bold text-sm md:text-base">
                Müvəffəqiyyət dərəcəsi: {Math.round((correct / questions.length) * 100)}%
              </p>
            </div>

            <button
              onClick={resetTest}
              className="flex items-center gap-2 px-10 py-4 rounded-xl md:rounded-2xl font-bold bg-[#163DFC] text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              <RotateCcw size={18} /> Yenidən başla
            </button>
          </div>
        )}
      </div>
    </div>
  );
}