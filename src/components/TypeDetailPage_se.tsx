import React, { useState } from 'react';
import { ArrowLeft, Heart, Brain, Users, AlertTriangle, Target, MessageCircle, Lightbulb, TrendingUp, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { TypeDetail } from '../data/typeDetails_se';
import { WingResult } from '../types/wings';
import { type1WingQuestions } from '../data/wingQuestions/wingQuestions1';
import { type2WingQuestions } from '../data/wingQuestions/wingQuestions2';
import { type3WingQuestions } from '../data/wingQuestions/wingQuestions3';
import { type4WingQuestions } from '../data/wingQuestions/wingQuestions4';
import { type5WingQuestions } from '../data/wingQuestions/wingQuestions5';
import { type6WingQuestions } from '../data/wingQuestions/wingQuestions6';
import { type7WingQuestions } from '../data/wingQuestions/wingQuestions7';
import { type8WingQuestions } from '../data/wingQuestions/wingQuestions8';
import { type9WingQuestions } from '../data/wingQuestions/wingQuestions9';

interface TypeDetailPageProps {
  typeDetail: TypeDetail;
  onBack: () => void;
  onStartWingTest?: () => void;
  wingResult?: {
    result: WingResult;
    testData: any;
  } | null;
}

const TypeDetailPage: React.FC<TypeDetailPageProps> = ({ typeDetail, onBack, onStartWingTest, wingResult }) => {
  const [showExamples, setShowExamples] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-cyan-50 to-purple-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-end mb-2">
<img src="/KrusoPeople4.png" alt="Kruso Kompass" className="w-15 h-auto" />
{/*<img src="/Kruso.svg" alt="Kruso" className="h-6 opacity-60" />*/}
        </div>

        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          **Tillbaka till resultat**
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {typeDetail.type}: {typeDetail.title}
          </h1>
          <p className="text-gray-600 text-lg">Detaljerad beskrivning av personlighetstypen</p>
        </div>

        {/* Verdenssyn (Världsbild) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Världsbild</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{typeDetail.worldview}</p>
        </div>

        {/* Grundlæggende information (Grundläggande information) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Grundläggande rädsla</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicFear}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Grundläggande önskan</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicDesire}</p>
          </div>
        </div>

        {/* Fokus og indre dialog (Fokus och inre dialog) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Fokus</h3>
            </div>
            <p className="text-gray-700">{typeDetail.focus}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Inre dialog</h3>
            </div>
            <p className="text-gray-700 italic">"{typeDetail.innerDialogue}"</p>
          </div>
        </div>

        {/* Kvaliteter og styrker (Kvaliteter och styrkor) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Kvaliteter och Styrkor</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Nyckelkvaliteter</h4>
              <div className="flex flex-wrap gap-2">
                {typeDetail.qualities.map((quality, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Personliga styrkor</h4>
              <ul className="space-y-1">
                {typeDetail.personalStrengths.map((strength, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Udfordringer (Utmaningar) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Utmaningar och Blinda fläckar</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Blinda fläckar</h4>
              <ul className="space-y-2">
                {typeDetail.blindSpots.map((spot, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {spot}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Passion/Last</h4>
              <p className="text-gray-700 text-sm">{typeDetail.passion}</p>
            </div>
          </div>
        </div>

        {/* Motivation og læring (Motivation och lärande) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Motiveras av</h3>
            </div>
            <p className="text-gray-700">{typeDetail.motivatedBy}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Lärande</h3>
            </div>
            <p className="text-gray-700">{typeDetail.learning}</p>
          </div>
        </div>

        {/* Relationer (Relationer) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Relationer och Samarbete</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Allmän inställning till relationer</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.generalApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Inställning till arbete</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.workApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Som lagspelare</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.teamPlayer}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Konfliktpunkter</h4>
                <ul className="space-y-1">
                  {typeDetail.relationships.conflictPoints.map((point, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Konflikthantering</h4>
                <p className="text-gray-700 text-sm">{typeDetail.relationships.conflictHandling}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hvis du er denne type / Hvis du arbejder med denne type (Om du är denna typ / Om du arbetar med denna typ) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">
              Om du är en {typeDetail.type}
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    Med din {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} profil (det är du):
                  </h4>
                  <p className="text-indigo-700 text-sm mb-3">
                    {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {getWingSpecificAdvice(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing, 'self').map((tip, index) => (
                    <li key={index} className="text-indigo-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="space-y-2">
                {typeDetail.ifYouAreThisType.map((tip, index) => (
                  <li key={index} className="text-indigo-700 text-sm flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Om du arbetar med en {typeDetail.type}
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    När de har {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} profilen (sådana är de):
                  </h4>
                  <p className="text-green-700 text-sm mb-3">
                    Denna person kombinerar {typeDetail.type}:s kärndrag med {getWingInfluenceDescription(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing)}.
                  </p>
                </div>
                <ul className="space-y-2">
                  {getWingSpecificAdvice(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing, 'colleague').map((tip, index) => (
                    <li key={index} className="text-green-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="space-y-2">
                {typeDetail.ifYouWorkWithThisType.map((tip, index) => (
                  <li key={index} className="text-green-700 text-sm flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Under stress og når tryg (Under stress och när trygg) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Under stress</h3>
            </div>
            <p className="text-red-700 text-sm mb-2">
              Rör sig mot **{typeDetail.underStress.movesToType}**
            </p>
            <p className="text-red-700 text-sm">{typeDetail.underStress.description}</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-green-800">När trygg</h3>
            </div>
            <p className="text-green-700 text-sm mb-2">
              Rör sig mot **{typeDetail.whenSecure.movesToType}**
            </p>
            <p className="text-green-700 text-sm">{typeDetail.whenSecure.description}</p>
          </div>
        </div>

        {/* Udviklingsudfordring (Utvecklingsutmaning) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Utvecklingsutmaning</h2>
          </div>
          <p className="text-gray-700">{typeDetail.relationships.developmentChallenge}</p>
        </div>

        {/* Wing test invitation if no wing results */}
        {!wingResult && onStartWingTest && (
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl">🪶</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Vill du veta ännu mer om {typeDetail.type}?
              </h3>
              <p className="text-blue-700">
                Om du tror att du är denna typ kan du utforska dina Enneagram-vingar för en ännu mer exakt personlighetsprofil
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="w-full flex items-center justify-between mb-3 text-left"
              >
                <h4 className="font-semibold text-blue-800">🪶 Vad är Enneagram-vingar?</h4>
                {showExamples ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {showExamples && (
                <>
                  <p className="text-blue-700 text-sm mb-4">
                    {typeDetail.type} har, precis som de andra typerna, två "grannar" på Enneagram-cirkeln, som kallas **Vingar**.
                    Dessa vingar blandas med kärntypen och skapar en mer nyanserad och exakt beskrivning av typens personlighet. Om du misstänker att du kan vara en {typeDetail.type} kan du svara på 10 specifika frågor för denna typ.
                  </p>
                  <p className="text-blue-700 text-sm mb-4">
                    {getWingExplanationForType(typeDetail.type)}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Vad kan du förvänta dig?</h5>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• 10 specifika frågor för {typeDetail.type} som jämför hur typen använder de två vingarna</li>
                      <li>• En detaljerad beskrivning av den dominerande vingen</li>
                      <li>• Förståelse för hur vingarna nyanserar {typeDetail.type}:s personlighet</li>
                      <li>• Tar bara 3-5 minuter att slutföra</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            
            <div className="text-center">
              <button
                onClick={onStartWingTest}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ja, upptäck Enneagram-vingarna för {typeDetail.type}!
                <span className="ml-2">✨</span>
              </button>
            </div>
          </div>
        )}

        {/* Back button */}
        <div className="text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Tillbaka till resultat
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to get wing-specific advice
const getWingSpecificAdvice = (type: string, wing: string, perspective: 'self' | 'colleague'): string[] => {
  const advice: Record<string, Record<string, Record<string, string[]>>> = {
    'Type 1': {
      'w9': {
        'self': [
          'Använd din diplomatiska approach för att skapa positiv förändring utan att orsaka onödig konflikt',
          'Kom ihåg att din lugna, metodiska stil är en styrka - du behöver inte vara aggressiv för att vara effektiv',
          'Sätt gränser för hur mycket du kompromissar med dina principer för att undvika konflikt',
          'Öva på att uttrycka dina standarder på ett sätt som bjuder in till samarbete',
          'Ta tid på dig med beslut, men undvik prokrastinering när handling är nödvändig'
        ],
        'colleague': [
          'Uppskatta deras diplomatiska inställning till förbättringar - de skapar förändring utan dramatik',
          'Ge dem tid att tänka på beslut istället för att pressa dem för snabba svar',
          'Erkänn deras förmåga att hitta kompromisser som tillfredsställer alla parter',
          'Var tålmodig med deras metodiska arbetsstil - kvaliteten är värd det',
          'Uppmuntra dem att dela sina åsikter, även när de är oense'
        ]
      },
      'w2': {
        'self': [
          'Använd din naturliga hjälpsamhet för att göra förbättringar mer acceptabla för andra',
          'Kom ihåg att balansera din omsorg om andra med dina egna behov av perfektion',
          'Lär dig att ge konstruktiv feedback på ett sätt som känns stödjande snarare än kritiskt',
          'Erkänn att din motivation att hjälpa kommer från en god plats, men sätt gränser',
          'Använd din empati för att förstå varför människor gör misstag innan du korrigerar dem'
        ],
        'colleague': [
          'Uppskatta deras önskan att hjälpa dig att förbättra ditt arbete',
          'Var öppen för deras vägledning - de vill verkligen att du ska lyckas',
          'Erkänn deras ansträngningar och tacka dem för deras hjälp och stöd',
          'Förstå att deras kritik kommer från omsorg, inte attack',
          'Ge dem möjligheter att vara mentorer och lärare - det ger dem energi'
        ]
      },
      'balanced': {
        'self': [
          'Lär dig att läsa av situationer och välja mellan en diplomatisk och en direkt approach',
          'Använd din flexibilitet som en styrka - du kan anpassa dig till olika behov',
          'Var medveten om att vara konsekvent i dina reaktioner så att andra kan förstå dig',
          'Balansera ditt behov av att arbeta ensam med värdet av lagarbete',
          'Acceptera att olika situationer kräver olika inställningar till perfektion'
        ],
        'colleague': [
          'Förstå att de kan reagera olika i olika situationer - det är inte inkonsekvens',
          'Uppskatta deras förmåga att anpassa sin approach beroende på vad situationen kräver',
          'Ge dem utrymme för både självständigt arbete och teamarbete',
          'Var tålmodig när de behöver tid för att välja rätt strategi',
          'Erkänn både deras diplomatiska och deras mer direkta bidrag'
        ]
      }
    }
    // Lägg till fler typer vid behov...
  };
  
  return advice[type]?.[wing]?.[perspective] || [];
};

// Helper function to describe wing influence
const getWingInfluenceDescription = (type: string, wing: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    'Type 1': {
      'w9': 'en mer diplomatisk och fridfull inställning till perfektion',
      'w2': 'en mer hjälpsam och relationsorienterad inställning till förbättringar',
      'balanced': 'en flexibel inställning som skiftar mellan diplomati och hjälpsamhet'
    }
    // Lägg till fler typer vid behov...
  };
  
  return descriptions[type]?.[wing] || 'deras unika vingkombination';
};

// Helper function to explain wings for each type
const getWingExplanationForType = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'Som Perfektionist kan du antingen vara mer diplomatisk och fridfull (påverkad av Typ 9) eller mer hjälpsam och relationsorienterad (påverkad av Typ 2).',
    'Type 2': 'Som Hjälpare kan du antingen vara mer principfast och strukturerad (påverkad av Typ 1) eller mer ambitiös och prestationsorienterad (påverkad av Typ 3).',
    'Type 3': 'Som Presterare kan du antingen vara mer hjälpsam och charmig (påverkad av Typ 2) eller mer kreativ och individualistisk (påverkad av Typ 4).',
    'Type 4': 'Som Individualist kan du antingen vara mer ambitiös och utåtriktad (påverkad av Typ 3) eller mer tillbakadragen och analytisk (påverkad av Typ 5).',
    'Type 5': 'Som Utredare kan du antingen vara mer kreativ och emotionell (påverkad av Typ 4) eller mer lojal och säkerhetsorienterad (påverkad av Typ 6).',
    'Type 6': 'Som Loyal kan du antingen vara mer analytisk och tillbakadragen (påverkad av Typ 5) eller mer optimistisk och äventyrlig (påverkad av Typ 7).',
    'Type 7': 'Som Entusiast kan du antingen vara mer lojal och ansvarstagande (påverkad av Typ 6) eller mer kraftfull och självsäker (påverkad av Typ 8).',
    'Type 8': 'Som Utmanare kan du antingen vara mer energisk och optimistisk (påverkad av Typ 7) eller mer fridfull och diplomatisk (påverkad av Typ 9).',
    'Type 9': 'Som Fredsmäklare kan du antingen vara mer kraftfull och självsäker (påverkad av Typ 8) eller mer principfast och strukturerad (påverkad av Typ 1).'
  };
  return explanations[type] || '';
};

export default TypeDetailPage;
