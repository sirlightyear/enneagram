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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Language Selector */}
          <div className="flex justify-end mb-4">
            <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Kruso Logo - discreetly placed (discreet geplaatst) */}
          <div className="flex justify-center">         
            <img src="/KrusoPeople4.png" alt="Kruso Kompas" className="w-15 h-auto" />
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Enneagram Persoonlijkheidstest
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Begrijp uzelf en uw collega's beter
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>10-15 Minuten</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>9 Persoonlijkheidstypes</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Gedetailleerde Analyse</span>
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
                <h2 className="text-xl font-bold text-gray-800">Waarom gebruiken we het Enneagram bij Kruso?</h2>
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
                  Bij Kruso hechten we veel waarde aan goede samenwerking – zowel intern tussen collega's als in onze
                  partnerschappen met klanten. We weten dat wanneer we elkaar beter begrijpen, het ons verbindt als
                  een sterker team.
                </p>

                <p>
                  Als we elkaars persoonlijkheden, werkstijlen en drijfveren kennen, werken we niet alleen
                  efficiënter samen – we creëren ook een omgeving die wordt gekenmerkt door respect, empathie en wederzijdse ondersteuning.
                  Dit maakt ons beter in het oplossen van complexe taken, het omgaan met uitdagingen en het leveren van uitzonderlijke
                  resultaten voor onze klanten.
                </p>

                <div className="flex items-center bg-indigo-50 p-4 rounded-lg">
                  <Heart className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <p className="text-indigo-800 font-medium mb-0">
                    Deze persoonlijkheidstest is een hulpmiddel om uzelf en uw collega's beter te begrijpen,
                    zodat we samen nog betere resultaten kunnen behalen.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Enneagram intro - Always visible */}
          <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Over het Enneagram</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Het Enneagram is een krachtig systeem voor het begrijpen van persoonlijkheid en motivatie. Het beschrijft
              negen verschillende persoonlijkheidstypes, elk met hun unieke manier van kijken naar de wereld, hun kerndrijfveer
              en hun uitdagingen.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-2" />
                Hoe u de test afneemt:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Lees de test en beantwoord deze zelf</strong> – zonder anderen om advies te vragen</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Denk niet te lang na</strong> – luister naar uw onmiddellijke onderbuikgevoel</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Antwoord op basis van wie u BENT</strong> – niet wie u zou willen zijn. Er zijn geen foute antwoorden</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Denk aan uw leven als geheel</strong> – niet alleen uw werkcontext. U bent zowel uw werk- als privéleven</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Wees eerlijk</strong> en denk na over hoe u het grootste deel van uw leven bent/was – ook als u aan zelfontwikkeling hebt gedaan</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Kies een moment</strong> waarop u de test ongestoord kunt voltooien</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Klaar om te beginnen?</h3>
            <p className="text-gray-600 mb-6">Ontdek uw persoonlijkheidstype in 10-15 minuten</p>
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start de Test
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
