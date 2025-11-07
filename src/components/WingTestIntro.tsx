import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

interface WingTestIntroProps {
  primaryType: string;
  onStart: () => void;
  onSkip: () => void;
}

const WingTestIntro: React.FC<WingTestIntroProps> = ({ primaryType, onStart, onSkip }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-cyan-50 to-purple-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-end mb-2">
        <img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <Info className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Vil du vide mere om din {primaryType}?</h1>
            <p className="text-gray-600 text-lg">Opdag dine Enneagram-vinger for en endnu dybere forståelse</p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Hvad er Enneagram-vinger?</h2>
            <div className="space-y-4 text-indigo-700">
              <p>
                I Enneagrammet har hver type to nabotyper – kaldet <strong>vinger</strong>. Din vinge er <strong>ikke en ekstra type</strong>,
                du også er, men en <strong>nuance</strong>, der farver din grundtype. De fleste mennesker har én dominerende vinge, men vi har
                adgang til begge vinger.
              </p>
              <p>
                Den ene vinge kan være mere udviklet end den anden, men med bevidsthed og personlig udvikling kan vi integrere kvaliteter
                fra begge sider. Derfor handler det ikke om at 'finde sin vinge' som noget fast, men om at <strong>opdage, hvordan dine vinger
                påvirker din personlighed</strong> – og hvordan du kan arbejde med dem.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">For din {primaryType}:</h3>
                <p className="text-sm mb-3">
                  {getWingExplanation(primaryType)}
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-indigo-50 p-3 rounded">
                    <strong>{getWingNames(primaryType).wingA}</strong>
                    <p className="text-xs mt-1">{getWingShortDescription(primaryType, 'A')}</p>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded">
                    <strong>{getWingNames(primaryType).wingB}</strong>
                    <p className="text-xs mt-1">{getWingShortDescription(primaryType, 'B')}</p>
                  </div>
                </div>
              </div>
              
              <p>
                Som {primaryType} kan du være påvirket af begge nabotyper, men typisk 
                vil den ene vinge være mere dominerende end den anden.
              </p>

              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">Hvad kan du forvente?</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 10 spørgsmål der sammenligner hvordan du bruger dine to vinger</li>
                  <li>• En detaljeret beskrivelse af din dominerende vinge</li>
                  <li>• Forståelse af hvordan vingerne nuancerer din {primaryType} personlighed</li>
                  <li>• Tager kun 3-5 minutter at gennemføre</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Ja, lad os opdage mine vinger!
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            
            <button
              onClick={onSkip}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-700 font-semibold text-lg rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              Nej tak, jeg er færdig
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Du kan altid vende tilbage og tage vinge-testen senere
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper functions to explain wings for each type
const getWingExplanation = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'Som Perfektionist kan du enten være mere diplomatisk og fredelig (påvirket af Type 9) eller mere hjælpsom og relationsorienteret (påvirket af Type 2).',
    'Type 2': 'Som Hjælper kan du enten være mere principiel og struktureret (påvirket af Type 1) eller mere ambitiøs og præstationsorienteret (påvirket af Type 3).',
    'Type 3': 'Som Præstationsorienteret kan du enten være mere hjælpsom og charmerende (påvirket af Type 2) eller mere kreativ og individualistisk (påvirket af Type 4).',
    'Type 4': 'Som Individualist kan du enten være mere ambitiøs og udadvendt (påvirket af Type 3) eller mere tilbagetrukken og analytisk (påvirket af Type 5).',
    'Type 5': 'Som Undersøger kan du enten være mere kreativ og følelsesmæssig (påvirket af Type 4) eller mere loyal og sikkerhedsorienteret (påvirket af Type 6).',
    'Type 6': 'Som Loyalist kan du enten være mere analytisk og tilbagetrukken (påvirket af Type 5) eller mere optimistisk og eventyrlysten (påvirket af Type 7).',
    'Type 7': 'Som Entusiast kan du enten være mere loyal og ansvarlig (påvirket af Type 6) eller mere kraftfuld og assertiv (påvirket af Type 8).',
    'Type 8': 'Som Udfordrer kan du enten være mere energisk og optimistisk (påvirket af Type 7) eller mere fredelig og diplomatisk (påvirket af Type 9).',
    'Type 9': 'Som Fredsmager kan du enten være mere kraftfuld og assertiv (påvirket af Type 8) eller mere principiel og struktureret (påvirket af Type 1).'
  };
  return explanations[type] || '';
};

const getWingNames = (type: string) => {
  const wings: Record<string, {wingA: string, wingB: string}> = {
    'Type 1': {wingA: 'Type 1w9 - Den Idealistiske Fredsmager', wingB: 'Type 1w2 - Den Hjælpsomme Perfektionist'},
    'Type 2': {wingA: 'Type 2w1 - Den Principielle Hjælper', wingB: 'Type 2w3 - Den Ambitiøse Hjælper'},
    'Type 3': {wingA: 'Type 3w2 - Den Charmerende Performer', wingB: 'Type 3w4 - Den Professionelle Individualist'},
    'Type 4': {wingA: 'Type 4w3 - Den Aristokratiske Individualist', wingB: 'Type 4w5 - Den Bohemiske Individualist'},
    'Type 5': {wingA: 'Type 5w4 - Den Ikonoklatiske Tænker', wingB: 'Type 5w6 - Den Problemløsende Tænker'},
    'Type 6': {wingA: 'Type 6w5 - Den Forsigtige Loyalist', wingB: 'Type 6w7 - Den Kameratslige Loyalist'},
    'Type 7': {wingA: 'Type 7w6 - Den Kameratslige Entusiast', wingB: 'Type 7w8 - Den Realistiske Entusiast'},
    'Type 8': {wingA: 'Type 8w7 - Den Aggressive Entusiast', wingB: 'Type 8w9 - Den Bjergagtige Udfordrer'},
    'Type 9': {wingA: 'Type 9w8 - Den Referee', wingB: 'Type 9w1 - Den Drømmer'}
  };
  return wings[type] || {wingA: '', wingB: ''};
};

const getWingShortDescription = (type: string, wing: 'A' | 'B'): string => {
  const descriptions: Record<string, {A: string, B: string}> = {
    'Type 1': {A: 'Mere diplomatisk og fredelig tilgang til perfektion', B: 'Mere hjælpsom og relationsorienteret perfektionist'},
    'Type 2': {A: 'Hjælper med høje principper og struktur', B: 'Hjælper med ambition og fokus på succes'},
    'Type 3': {A: 'Charmerende performer der hjælper andre', B: 'Kreativ performer med fokus på autenticitet'},
    'Type 4': {A: 'Udadvendt individualist med ambitioner', B: 'Tilbagetrukken individualist med dybde'},
    'Type 5': {A: 'Kreativ tænker med følelsesmæssig dybde', B: 'Praktisk tænker med fokus på sikkerhed'},
    'Type 6': {A: 'Forsigtig loyalist med analytisk tilgang', B: 'Optimistisk loyalist med eventyrlysten'},
    'Type 7': {A: 'Ansvarlig entusiast med loyalitet', B: 'Kraftfuld entusiast med assertivitet'},
    'Type 8': {A: 'Energisk udfordrer med optimisme', B: 'Rolig udfordrer med diplomatisk tilgang'},
    'Type 9': {A: 'Kraftfuld fredsmager med assertivitet', B: 'Principiel fredsmager med struktur'}
  };
  return descriptions[type]?.[wing] || '';
};
export default WingTestIntro;