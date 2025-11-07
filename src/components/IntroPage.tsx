import React, { useState } from 'react';
import { Brain, Users, Heart, ArrowRight, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface IntroPageProps {
  onStart: () => void;
  language: string;
  onLanguageChange: (language: string) => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onStart, language, onLanguageChange }) => {
  const [showKrusoDetails, setShowKrusoDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-cyan-50 to-purple-100">
      <div className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Language Selector */}
          <div className="flex justify-end mb-4">
            <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Kruso Logo - diskret placeret */}
          <div className="flex justify-center">
            <img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Enneagram Personlighedstest
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Forstå dig selv og dine kolleger bedre
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>10-15 minutter</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>9 personlighedstyper</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Detaljeret analyse</span>
            </div>
          </div>

          {/* Kruso intro - Collapsible */}
          <div className="bg-white rounded-xl shadow-lg mb-4 overflow-hidden">
            <button
              onClick={() => setShowKrusoDetails(!showKrusoDetails)}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <Users className="w-6 h-6 text-indigo-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Hvorfor bruger vi Enneagram hos Kruso?</h2>
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
                  Hos Kruso gør vi en stor dyd ud af godt samarbejde – både internt mellem kolleger og i vores
                  partnerskaber med kunder. Vi ved, at når vi forstår hinanden bedre, knytter det os sammen som
                  et stærkere team.
                </p>

                <p>
                  Når vi kender hinandens personligheder, arbejdsstile og motivationer, arbejder vi ikke bare
                  mere effektivt sammen – vi skaber også et miljø præget af respekt, empati og gensidig støtte.
                  Det gør os bedre til at løse komplekse opgaver, navigere udfordringer og levere exceptionelle
                  resultater for vores kunder.
                </p>

                <div className="flex items-center bg-indigo-50 p-4 rounded-lg">
                  <Heart className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <p className="text-indigo-800 font-medium mb-0">
                    Denne personlighedstest er et værktøj til at forstå dig selv og dine kolleger bedre,
                    så vi sammen kan skabe endnu bedre resultater.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Enneagram intro - Always visible */}
          <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Om Enneagram</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Enneagrammet er et kraftfuldt system til at forstå personlighed og motivation. Det beskriver
              ni forskellige personlighedstyper, hver med deres unikke måde at se verden på, deres drivkraft
              og deres udfordringer.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-2" />
                Sådan tager du testen:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Læs og svar på testen selv</strong> – uden at spørge andre om råd</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Overvej ikke for længe</strong> – lyt til din umiddelbare mavefornemmelse</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Svar på hvordan du ER</strong> – ikke hvem du måtte ønske at være. Man kan ikke svare forkert</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Tænk på dit liv som helhed</strong> – ikke kun din arbejdskontekst. Du er både dit arbejds- og privatliv</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Vær ærlig</strong> og tænk på hvordan du er/har været det meste af dit liv – også hvis du har været igennem selvudvikling</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Vælg et tidspunkt</strong> hvor du uforstyrret kan gennemføre testen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Klar til at starte?</h3>
            <p className="text-gray-600 mb-6">Opdag din personlighedstype på 10-15 minutter</p>
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start testen
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;