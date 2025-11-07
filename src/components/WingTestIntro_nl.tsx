import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

interface WingTestIntroProps {
  primaryType: string;
  onStart: () => void;
  onSkip: () => void;
}

const WingTestIntro: React.FC<WingTestIntroProps> = ({ primaryType, onStart, onSkip }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-amber-50 to-fuchsia-200 py-8 px-4">
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Wil je meer weten over jouw {primaryType}?</h1>
            <p className="text-gray-600 text-lg">Ontdek je Enneagram-vleugels voor een nog dieper inzicht</p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Wat zijn Enneagram-vleugels?</h2>
            <div className="space-y-4 text-indigo-700">
              <p>
                In het Enneagram heeft elk type twee aangrenzende types – **vleugels** genoemd. Jouw vleugel is **geen extra type**
                dat je ook bent, maar een **nuance** die jouw kerntype kleurt. De meeste mensen hebben één dominante vleugel, maar we hebben
                toegang tot beide vleugels.
              </p>
              <p>
                De ene vleugel kan meer ontwikkeld zijn dan de andere, maar met bewustzijn en persoonlijke ontwikkeling kunnen we kwaliteiten
                van beide kanten integreren. Het gaat dus niet om het 'vinden van je vleugel' als iets vaststaands, maar om **te ontdekken hoe je vleugels
                jouw persoonlijkheid beïnvloeden** – en hoe je ermee kunt werken.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">Voor jouw {primaryType}:</h3>
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
                Als {primaryType} kun je beïnvloed worden door beide aangrenzende types, maar doorgaans
                zal de ene vleugel dominanter zijn dan de andere.
              </p>

              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">Wat kun je verwachten?</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 10 vragen die vergelijken hoe je je twee vleugels gebruikt</li>
                  <li>• Een gedetailleerde beschrijving van je dominante vleugel</li>
                  <li>• Begrip van hoe de vleugels jouw {primaryType} persoonlijkheid nuanceren</li>
                  <li>• Duurt slechts 3-5 minuten om te voltooien</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Ja, laten we mijn vleugels ontdekken!
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            
            <button
              onClick={onSkip}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-700 font-semibold text-lg rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              Nee bedankt, ik ben klaar
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Je kunt altijd terugkeren en de vleugeltest later doen
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper functions to explain wings for each type (dansk til hollandsk oversættelse)
const getWingExplanation = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'Als Perfectionist kun je ofwel diplomatieker en vrediger zijn (beïnvloed door Type 9) ofwel behulpzamer en relatiegerichter (beïnvloed door Type 2).',
    'Type 2': 'Als Helper kun je ofwel principiëler en gestructureerder zijn (beïnvloed door Type 1) ofwel ambitieuzer en prestatiegerichter (beïnvloed door Type 3).',
    'Type 3': 'Als Prestatiegerichte kun je ofwel behulpzamer en charmanter zijn (beïnvloed door Type 2) ofwel creatiever en individualistischer (beïnvloed door Type 4).',
    'Type 4': 'Als Individualist kun je ofwel ambitieuzer en extraverter zijn (beïnvloed door Type 3) ofwel meer teruggetrokken en analytisch (beïnvloed door Type 5).',
    'Type 5': 'Als Onderzoeker kun je ofwel creatiever en emotioneeler zijn (beïnvloed door Type 4) ofwel loyaler en veiligheidsgerichter (beïnvloed door Type 6).',
    'Type 6': 'Als Loyalist kun je ofwel analytischer en teruggetrokken zijn (beïnvloed door Type 5) ofwel optimistischer en avontuurlijker (beïnvloed door Type 7).',
    'Type 7': 'Als Enthousiast kun je ofwel loyaler en verantwoordelijker zijn (beïnvloed door Type 6) ofwel krachtiger en assertiever (beïnvloed door Type 8).',
    'Type 8': 'Als Uitdager kun je ofwel energieker en optimistischer zijn (beïnvloed door Type 7) ofwel vrediger en diplomatischer (beïnvloed door Type 9).',
    'Type 9': 'Als Vredestichter kun je ofwel krachtiger en assertiever zijn (beïnvloed door Type 8) ofwel principiëler en gestructureerder (beïnvloed door Type 1).'
  };
  return explanations[type] || '';
};

const getWingNames = (type: string) => {
  const wings: Record<string, {wingA: string, wingB: string}> = {
    'Type 1': {wingA: 'Type 1w9 - De Idealistische Vredestichter', wingB: 'Type 1w2 - De Behulpzame Perfectionist'},
    'Type 2': {wingA: 'Type 2w1 - De Principieele Helper', wingB: 'Type 2w3 - De Ambitieuze Helper'},
    'Type 3': {wingA: 'Type 3w2 - De Charmante Performer', wingB: 'Type 3w4 - De Professionele Individualist'},
    'Type 4': {wingA: 'Type 4w3 - De Aristocratische Individualist', wingB: 'Type 4w5 - De Boheemse Individualist'},
    'Type 5': {wingA: 'Type 5w4 - De Iconoclastische Denker', wingB: 'Type 5w6 - De Probleemoplossende Denker'},
    'Type 6': {wingA: 'Type 6w5 - De Voorzichtige Loyalist', wingB: 'Type 6w7 - De Kameraadschappelijke Loyalist'},
    'Type 7': {wingA: 'Type 7w6 - De Kameraadschappelijke Enthousiast', wingB: 'Type 7w8 - De Realistische Enthousiast'},
    'Type 8': {wingA: 'Type 8w7 - De Agressieve Enthousiast', wingB: 'Type 8w9 - De Rotsvaste Uitdager'},
    'Type 9': {wingA: 'Type 9w8 - De Scheidsrechter', wingB: 'Type 9w1 - De Dromer'}
  };
  return wings[type] || {wingA: '', wingB: ''};
};

const getWingShortDescription = (type: string, wing: 'A' | 'B'): string => {
  const descriptions: Record<string, {A: string, B: string}> = {
    'Type 1': {A: 'Diplomatiekere en vredigere benadering van perfectie', B: 'Behulpzamere en relatiegerichtere perfectionist'},
    'Type 2': {A: 'Helper met hoge principes en structuur', B: 'Helper met ambitie en focus op succes'},
    'Type 3': {A: 'Charmante performer die anderen helpt', B: 'Creatieve performer met focus op authenticiteit'},
    'Type 4': {A: 'Extraverte individualist met ambities', B: 'Teruggetrokken individualist met diepgang'},
    'Type 5': {A: 'Creatieve denker met emotionele diepgang', B: 'Praktische denker met focus op veiligheid'},
    'Type 6': {A: 'Voorzichtige loyalist met een analytische aanpak', B: 'Optimistische loyalist met avontuurlijke geest'},
    'Type 7': {A: 'Verantwoordelijke enthousiast met loyaliteit', B: 'Krachtige enthousiast met assertiviteit'},
    'Type 8': {A: 'Energieke uitdager met optimisme', B: 'Rustige uitdager met een diplomatieke aanpak'},
    'Type 9': {A: 'Krachtige vredestichter met assertiviteit', B: 'Principiële vredestichter met structuur'}
  };
  return descriptions[type]?.[wing] || '';
};
export default WingTestIntro;
