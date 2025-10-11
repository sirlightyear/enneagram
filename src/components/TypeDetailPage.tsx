import React, { useState } from 'react';
import { ArrowLeft, Heart, Brain, Users, AlertTriangle, Target, MessageCircle, Lightbulb, TrendingUp, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { TypeDetail } from '../data/typeDetails';
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-end mb-2">
<img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />        
{/*<img src="/Kruso.svg" alt="Kruso" className="h-6 opacity-60" />*/}
        </div>

        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til resultater
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {typeDetail.type}: {typeDetail.title}
          </h1>
          <p className="text-gray-600 text-lg">Udførlig beskrivelse af din personlighedstype</p>
        </div>

        {/* Verdenssyn */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Verdenssyn</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{typeDetail.worldview}</p>
        </div>

        {/* Grundlæggende information */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Basisfrygt</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicFear}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Basisønske</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicDesire}</p>
          </div>
        </div>

        {/* Fokus og indre dialog */}
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
              <h3 className="text-lg font-semibold text-gray-800">Indre dialog</h3>
            </div>
            <p className="text-gray-700 italic">"{typeDetail.innerDialogue}"</p>
          </div>
        </div>

        {/* Kvaliteter og styrker */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Kvaliteter og styrker</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Nøglekvaliteter</h4>
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
              <h4 className="font-medium text-gray-800 mb-3">Personlige styrker</h4>
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

        {/* Udfordringer */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Udfordringer og blinde punkter</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Blinde punkter</h4>
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

        {/* Motivation og læring */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Motiveres af</h3>
            </div>
            <p className="text-gray-700">{typeDetail.motivatedBy}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Læring</h3>
            </div>
            <p className="text-gray-700">{typeDetail.learning}</p>
          </div>
        </div>

        {/* Relationer */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Relationer og samarbejde</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Generel tilgang til relationer</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.generalApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Tilgang til arbejdet</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.workApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Som teamspiller</h4>
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
                <h4 className="font-medium text-gray-800 mb-2">Konflikthåndtering</h4>
                <p className="text-gray-700 text-sm">{typeDetail.relationships.conflictHandling}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hvis du er denne type / Hvis du arbejder med denne type */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">
              Hvis du er en {typeDetail.type}
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    Med din {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} profil (det er det du er):
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
              Hvis du arbejder sammen med en {typeDetail.type}
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Når de har {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} profil (sådan er de):
                  </h4>
                  <p className="text-green-700 text-sm mb-3">
                    Denne person kombinerer {typeDetail.type}'s grundlæggende træk med {getWingInfluenceDescription(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing)}.
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

        {/* Under stress og når tryg */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Under stress</h3>
            </div>
            <p className="text-red-700 text-sm mb-2">
              Bevæger sig mod <strong>{typeDetail.underStress.movesToType}</strong>
            </p>
            <p className="text-red-700 text-sm">{typeDetail.underStress.description}</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-green-800">Når tryg</h3>
            </div>
            <p className="text-green-700 text-sm mb-2">
              Bevæger sig mod <strong>{typeDetail.whenSecure.movesToType}</strong>
            </p>
            <p className="text-green-700 text-sm">{typeDetail.whenSecure.description}</p>
          </div>
        </div>

        {/* Udviklingsudfordring */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Udviklingsudfordring</h2>
          </div>
          <p className="text-gray-700">{typeDetail.relationships.developmentChallenge}</p>
        </div>

        {/* Wing test invitation if no wing results }
        {!wingResult && onStartWingTest && (
          <div className="bg-blue-50 rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl">🪶</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Vil du vide endnu mere om {typeDetail.type}?
              </h3>
              <p className="text-blue-700">
                Opdag dine Enneagram-vinger for en endnu mere præcis personlighedsprofil
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="w-full flex items-center justify-between mb-3 text-left"
              >
                <h4 className="font-semibold text-blue-800">🪶 Hvad er Enneagram-vinger?</h4>
                {showExamples ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {showExamples && (
                <>
                  <p className="text-blue-700 text-sm mb-4">
                    Din {typeDetail.type} har to "naboer" på Enneagram-cirklen, som kaldes <strong>vinger</strong>.
                    Disse vinger blander sig med din grundtype og skaber en mere nuanceret og præcis beskrivelse af din personlighed.
                  </p>
                  <p className="text-blue-700 text-sm mb-4">
                    {getWingExplanationForType(typeDetail.type)}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Hvad kan du forvente?</h5>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• 10 spørgsmål der sammenligner hvordan du bruger dine to vinger</li>
                      <li>• En detaljeret beskrivelse af din dominerende vinge</li>
                      <li>• Forståelse af hvordan vingerne nuancerer din {typeDetail.type} personlighed</li>
                      <li>• Tager kun 3-5 minutter at gennemføre</li>
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
                Ja, opdag mine Enneagram-vinger!
                <span className="ml-2">✨</span>
              </button>
            </div>
          </div>*/
        )}

        {/* Back button */}
        <div className="text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Tilbage til resultater
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
          'Brug din diplomatiske tilgang til at skabe positive forandringer uden at skabe unødvendig konflikt',
          'Husk at din rolige, metodiske stil er en styrke - du behøver ikke være aggressiv for at være effektiv',
          'Sæt grænser for hvor meget du vil kompromittere dine principper for at undgå konflikt',
          'Øv dig i at udtrykke dine standarder på en måde der inviterer til samarbejde',
          'Tag dig tid til beslutninger, men undgå at prokrastinere når handling er nødvendig'
        ],
        'colleague': [
          'Værdsæt deres diplomatiske tilgang til forbedringer - de skaber forandring uden drama',
          'Giv dem tid til at tænke over beslutninger i stedet for at presse dem til hurtige svar',
          'Anerkend deres evne til at finde kompromiser der tilfredsstiller alle parter',
          'Vær tålmodig med deres metodiske arbejdsstil - kvaliteten er det værd',
          'Opmuntr dem til at dele deres synspunkter, selv når de er uenige'
        ]
      },
      'w2': {
        'self': [
          'Brug din naturlige hjælpsomhed til at gøre forbedringer mere accepterede af andre',
          'Husk at balance din omsorg for andre med dine egne behov for perfektion',
          'Lær at give konstruktiv feedback på en måde der føles støttende frem for kritisk',
          'Anerkend at din motivation for at hjælpe kommer fra et godt sted, men sæt grænser',
          'Brug din empati til at forstå hvorfor folk laver fejl, før du retter dem'
        ],
        'colleague': [
          'Værdsæt deres ønske om at hjælpe dig med at forbedre dit arbejde',
          'Vær åben for deres vejledning - de vil virkelig gerne se dig lykkes',
          'Anerkend deres indsats og tak dem for deres hjælp og støtte',
          'Forstå at deres kritik kommer fra et sted af omsorg, ikke angreb',
          'Giv dem mulighed for at være mentorer og lærere - det giver dem energi'
        ]
      },
      'balanced': {
        'self': [
          'Lær at læse situationer og vælge mellem diplomatisk og direkte tilgang',
          'Brug din fleksibilitet som en styrke - du kan tilpasse dig forskellige behov',
          'Vær opmærksom på at være konsistent i dine reaktioner så andre kan forstå dig',
          'Balance dit behov for at arbejde alene med værdien af teamsamarbejde',
          'Accepter at forskellige situationer kræver forskellige tilgange til perfektion'
        ],
        'colleague': [
          'Forstå at de kan reagere forskelligt i forskellige situationer - det er ikke inkonsistens',
          'Værdsæt deres evne til at tilpasse deres tilgang efter hvad situationen kræver',
          'Giv dem rum til både at arbejde selvstændigt og samarbejde med teamet',
          'Vær tålmodig når de har brug for tid til at vælge den rigtige strategi',
          'Anerkend både deres diplomatiske og deres mere direkte bidrag'
        ]
      }
    }
    // Add more types as needed...
  };
  
  return advice[type]?.[wing]?.[perspective] || [];
};

// Helper function to describe wing influence
const getWingInfluenceDescription = (type: string, wing: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    'Type 1': {
      'w9': 'en mere diplomatisk og fredelig tilgang til perfektion',
      'w2': 'en mere hjælpsom og relationsorienteret tilgang til forbedringer',
      'balanced': 'en fleksibel tilgang der skifter mellem diplomati og hjælpsomhed'
    }
    // Add more types as needed...
  };
  
  return descriptions[type]?.[wing] || 'deres unikke wing-kombination';
};

// Helper function to explain wings for each type
const getWingExplanationForType = (type: string): string => {
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

export default TypeDetailPage;