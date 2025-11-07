import LanguageSelector from './LanguageSelector';
import React, { useState } from 'react';
import { Brain, Users, Heart, ArrowRight, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface IntroPageProps {
  language: string;
  onLanguageChange: (language: string) => void;
  onStart: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onStart, language, onLanguageChange }) => {
  const [showKrusoDetails, setShowKrusoDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-amber-50 to-fuchsia-200">
      <div className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Language Selector */}
          <div className="flex justify-end mb-4">
            <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Kruso Logo - diskret placerat */}
          <div className="flex justify-center">         
            <img src="/KrusoPeople4.png" alt="Kruso Kompass" className="w-15 h-auto" />
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Enneagram Personlighetstest
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Förstå dig själv och dina kollegor bättre
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>10-15 Minuter</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>9 Personlighetstyper</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Detaljerad Analys</span>
            </div>
          </div>

          {/* Kruso intro - Collapsible */}
          <div className="bg-white rounded-xl shadow-lg mb-4 overflow-hidden">
            <button
              onClick={() => setShowKrusoDetails(!showKrusoDetails)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <Users className="w-6 h-6 text-indigo-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Varför använder vi Enneagrammet på Kruso?</h2>
              </div>
              {showKrusoDetails ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {showKrusoDetails && (
              <div className="px-6 pb-6 text-gray-700 space-y-4 border-t border-gray-100 pt-4">
                <p>
                  På Kruso lägger vi stor vikt vid gott samarbete – både internt mellan kollegor och i våra
                  partnerskap med kunder. Vi vet att när vi förstår varandra bättre, knyter det oss samman som
                  ett starkare team.
                </p>

                <p>
                  När vi känner till varandras personligheter, arbetsstilar och drivkrafter, arbetar vi inte bara
                  mer effektivt tillsammans – vi skapar också en miljö präglad av respekt, empati och ömsesidigt stöd.
                  Detta gör oss bättre på att lösa komplexa uppgifter, hantera utmaningar och leverera exceptionella
                  resultat för våra kunder.
                </p>

                <div className="flex items-center bg-indigo-50 p-4 rounded-lg">
                  <Heart className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <p className="text-indigo-800 font-medium mb-0">
                    Denna personlighetstest är ett verktyg för att bättre förstå dig själv och dina kollegor,
                    så att vi tillsammans kan skapa ännu bättre resultat.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Enneagram intro - Always visible */}
          <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Om Enneagrammet</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Enneagrammet är ett kraftfullt system för att förstå personlighet och motivation. Det beskriver
              nio olika personlighetstyper, var och en med sitt unika sätt att se världen, sin drivkraft
              och sina utmaningar.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-2" />
                Så här gör du testet:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Läs och svara på testet själv</strong> – utan att fråga andra om råd</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Tänk inte för länge</strong> – lyssna på din omedelbara magkänsla</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Svara på hur du ÄR</strong> – inte vem du skulle önska att vara. Du kan inte svara fel</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Tänk på ditt liv som helhet</strong> – inte bara din arbetssituation. Du är både ditt arbets- och privatliv</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Var ärlig</strong> och tänk på hur du är/har varit under större delen av ditt liv – även om du har genomgått personlig utveckling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Välj en tidpunkt</strong> då du kan genomföra testet utan att bli störd</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Klar att starta?</h3>
            <p className="text-gray-600 mb-6">Upptäck din personlighetstyp på 10-15 minuter</p>
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Starta Testet
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
