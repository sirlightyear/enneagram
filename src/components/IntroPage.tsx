import React from 'react';
import { Brain, Users, Heart, ArrowRight } from 'lucide-react';

interface IntroPageProps {
  onStart: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Kruso Logo - diskret placeret */}
          <div className="flex justify-center">         
            <img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />
          </div>
          
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Enneagram Personlighedstest</h1>
            <p className="text-gray-600 text-lg">Forstå dig selv og dine kolleger bedre</p>
          </div>

          {/* Kruso intro */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Godt samarbejde starter med forståelse</h2>
            </div>
            
            <div className="prose prose-lg text-gray-700 space-y-4">
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
          </div>

          {/* Enneagram intro */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Om Enneagram personlighedstesten</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Enneagrammet er et kraftfuldt system til at forstå personlighed og motivation. Det beskriver 
                ni forskellige personlighedstyper, hver med deres unikke måde at se verden på, deres drivkraft 
                og deres udfordringer.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Sådan tager du testen:</h3>
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
          </div>

          {/* Start button */}
          <div className="text-center">
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start testen
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            <p className="text-gray-500 text-sm mt-4">Testen tager cirka 10-15 minutter at gennemføre</p>
            
            {/* Secret debug link 
            <div className="mt-8">
              <button 
                onClick={() => {
                  // Set debug mode and trigger parent callback
                  onStart(); // This will hide intro
                  // Then set debug mode for App component to pick up
                  setTimeout(() => {
                    const event = new CustomEvent('debugMode');
                    window.dispatchEvent(event);
                  }, 100);
                }}
                className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1 rounded"
                title="🔧 Test med tilfældige resultater"
              >
                🔧
              </button>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;