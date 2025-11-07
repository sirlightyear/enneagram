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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Möchtest du mehr über deinen {primaryType} erfahren?</h1>
            <p className="text-gray-600 text-lg">Entdecke deine Enneagramm-Flügel für ein noch tieferes Verständnis</p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Was sind Enneagramm-Flügel?</h2>
            <div className="space-y-4 text-indigo-700">
              <p>
                Im Enneagramm hat jeder Typ zwei benachbarte Typen – genannt **Flügel** (**Vinger**). Dein Flügel ist **kein zusätzlicher Typ**,
                der du auch bist, sondern eine **Nuance**, die deinen Grundtyp färbt. Die meisten Menschen haben einen dominanten Flügel, aber wir haben
                Zugang zu beiden Flügeln.
              </p>
              <p>
                Der eine Flügel kann stärker ausgeprägt sein als der andere, aber mit Bewusstsein und persönlicher Entwicklung können wir Qualitäten
                von beiden Seiten integrieren. Daher geht es nicht darum, 'seinen Flügel zu finden' als etwas Festes, sondern darum, **zu entdecken, wie deine Flügel
                deine Persönlichkeit beeinflussen** – und wie du mit ihnen arbeiten kannst.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">Für deinen {primaryType}:</h3>
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
                Als {primaryType} kannst du von beiden benachbarten Typen beeinflusst werden, aber typischerweise
                wird der eine Flügel dominanter sein als der andere.
              </p>

              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">Was kannst du erwarten?</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 10 Fragen, die vergleichen, wie du deine beiden Flügel nutzt</li>
                  <li>• Eine detaillierte Beschreibung deines dominanten Flügels</li>
                  <li>• Verständnis dafür, wie die Flügel deine {primaryType} Persönlichkeit nuancieren</li>
                  <li>• Dauert nur 3-5 Minuten zum Abschließen</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Ja, lass uns meine Flügel entdecken!
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            
            <button
              onClick={onSkip}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-700 font-semibold text-lg rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              Nein danke, ich bin fertig
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Du kannst jederzeit zurückkehren und den Flügeltest später machen
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper functions to explain wings for each type
const getWingExplanation = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'Als Perfektionist kannst du entweder diplomatischer und friedlicher sein (beeinflusst von Typ 9) oder hilfreicher und beziehungsorientierter (beeinflusst von Typ 2).',
    'Type 2': 'Als Helfer kannst du entweder prinzipientreuer und strukturierter sein (beeinflusst von Typ 1) oder ehrgeiziger und leistungsorientierter (beeinflusst von Typ 3).',
    'Type 3': 'Als Leistungsorientierter kannst du entweder hilfreicher und charmanter sein (beeinflusst von Typ 2) oder kreativer und individualistischer (beeinflusst von Typ 4).',
    'Type 4': 'Als Individualist kannst du entweder ehrgeiziger und extrovertierter sein (beeinflusst von Typ 3) oder zurückgezogener und analytischer (beeinflusst von Typ 5).',
    'Type 5': 'Als Forscher kannst du entweder kreativer und emotionaler sein (beeinflusst von Typ 4) oder loyaler und sicherheitsorientierter (beeinflusst von Typ 6).',
    'Type 6': 'Als Loyalist kannst du entweder analytischer und zurückgezogener sein (beeinflusst von Typ 5) oder optimistischer und abenteuerlustiger (beeinflusst von Typ 7).',
    'Type 7': 'Als Enthusiast kannst du entweder loyaler und verantwortungsbewusster sein (beeinflusst von Typ 6) oder kraftvoller und durchsetzungsfähiger (beeinflusst von Typ 8).',
    'Type 8': 'Als Herausforderer kannst du entweder energischer und optimistischer sein (beeinflusst von Typ 7) oder friedlicher und diplomatischer (beeinflusst von Typ 9).',
    'Type 9': 'Als Friedensstifter kannst du entweder kraftvoller und durchsetzungsfähiger sein (beeinflusst von Typ 8) oder prinzipientreuer und strukturierter (beeinflusst von Typ 1).'
  };
  return explanations[type] || '';
};

const getWingNames = (type: string) => {
  const wings: Record<string, {wingA: string, wingB: string}> = {
    'Type 1': {wingA: 'Typ 1w9 - Der Idealistische Friedensstifter', wingB: 'Typ 1w2 - Der Hilfsbereite Perfektionist'},
    'Type 2': {wingA: 'Typ 2w1 - Der Prinzipientreue Helfer', wingB: 'Typ 2w3 - Der Ehrgeizige Helfer'},
    'Type 3': {wingA: 'Typ 3w2 - Der Charmante Performer', wingB: 'Typ 3w4 - Der Professionelle Individualist'},
    'Type 4': {wingA: 'Typ 4w3 - Der Aristokratische Individualist', wingB: 'Typ 4w5 - Der Böhmische Individualist'},
    'Type 5': {wingA: 'Typ 5w4 - Der Ikonoklastische Denker', wingB: 'Typ 5w6 - Der Problemlösende Denker'},
    'Type 6': {wingA: 'Typ 6w5 - Der Vorsichtige Loyalist', wingB: 'Typ 6w7 - Der Kameradschaftliche Loyalist'},
    'Type 7': {wingA: 'Typ 7w6 - Der Kameradschaftliche Enthusiast', wingB: 'Typ 7w8 - Der Realistische Enthusiast'},
    'Type 8': {wingA: 'Typ 8w7 - Der Aggressive Enthusiast', wingB: 'Typ 8w9 - Der Felsenfeste Herausforderer'},
    'Type 9': {wingA: 'Typ 9w8 - Der Schiedsrichter', wingB: 'Typ 9w1 - Der Träumer'}
  };
  return wings[type] || {wingA: '', wingB: ''};
};

const getWingShortDescription = (type: string, wing: 'A' | 'B'): string => {
  const descriptions: Record<string, {A: string, B: string}> = {
    'Type 1': {A: 'Diplomatischerer und friedlicherer Ansatz zur Perfektion', B: 'Hilfsbereiterer und beziehungsorientierterer Perfektionist'},
    'Type 2': {A: 'Helfer mit hohen Prinzipien und Struktur', B: 'Helfer mit Ehrgeiz und Fokus auf Erfolg'},
    'Type 3': {A: 'Charmanter Performer, der anderen hilft', B: 'Kreativer Performer mit Fokus auf Authentizität'},
    'Type 4': {A: 'Extrovertierter Individualist mit Ambitionen', B: 'Zurückgezogener Individualist mit Tiefe'},
    'Type 5': {A: 'Kreativer Denker mit emotionaler Tiefe', B: 'Praktischer Denker mit Fokus auf Sicherheit'},
    'Type 6': {A: 'Vorsichtiger Loyalist mit analytischem Ansatz', B: 'Optimistischer Loyalist mit Abenteuerlust'},
    'Type 7': {A: 'Verantwortungsbewusster Enthusiast mit Loyalität', B: 'Kraftvoller Enthusiast mit Durchsetzungsvermögen'},
    'Type 8': {A: 'Energischer Herausforderer mit Optimismus', B: 'Ruhiger Herausforderer mit diplomatischem Ansatz'},
    'Type 9': {A: 'Kraftvoller Friedensstifter mit Durchsetzungsvermögen', B: 'Prinzipientreuer Friedensstifter mit Struktur'}
  };
  return descriptions[type]?.[wing] || '';
};
export default WingTestIntro;
