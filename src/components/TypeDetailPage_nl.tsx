import React, { useState } from 'react';
import { ArrowLeft, Heart, Brain, Users, AlertTriangle, Target, MessageCircle, Lightbulb, TrendingUp, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { TypeDetail } from '../data/typeDetails_nl';
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-end mb-2">
<img src="/KrusoPeople4.png" alt="Kruso Kompas" className="w-15 h-auto" />
{/*<img src="/Kruso.svg" alt="Kruso" className="h-6 opacity-60" />*/}
        </div>

        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          **Terug naar resultaten**
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {typeDetail.type}: {typeDetail.title}
          </h1>
          <p className="text-gray-600 text-lg">Uitgebreide beschrijving van het persoonlijkheidstype</p>
        </div>

        {/* Verdenssyn (Wereldbeeld) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Wereldbeeld</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{typeDetail.worldview}</p>
        </div>

        {/* Grundlæggende information (Basis informatie) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Basisfobie</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicFear}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Basisverlangen</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicDesire}</p>
          </div>
        </div>

        {/* Fokus og indre dialog (Focus en Interne Dialoog) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Focus</h3>
            </div>
            <p className="text-gray-700">{typeDetail.focus}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Interne dialoog</h3>
            </div>
            <p className="text-gray-700 italic">"{typeDetail.innerDialogue}"</p>
          </div>
        </div>

        {/* Kvaliteter og styrker (Kwaliteiten en Sterke punten) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Kwaliteiten en Sterke punten</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Kernkwaliteiten</h4>
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
              <h4 className="font-medium text-gray-800 mb-3">Persoonlijke sterke punten</h4>
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

        {/* Udfordringer (Uitdagingen) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Uitdagingen en Blinde vlekken</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Blinde vlekken</h4>
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
              <h4 className="font-medium text-gray-800 mb-3">Passie/Zonde</h4>
              <p className="text-gray-700 text-sm">{typeDetail.passion}</p>
            </div>
          </div>
        </div>

        {/* Motivation og læring (Motivatie en Leren) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Gemotiveerd door</h3>
            </div>
            <p className="text-gray-700">{typeDetail.motivatedBy}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Leren</h3>
            </div>
            <p className="text-gray-700">{typeDetail.learning}</p>
          </div>
        </div>

        {/* Relationer (Relaties) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Relaties en Samenwerking</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Algemene benadering van relaties</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.generalApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Benadering van werk</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.workApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Als teamspeler</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.teamPlayer}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Conflictpunten</h4>
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
                <h4 className="font-medium text-gray-800 mb-2">Conflicthantering</h4>
                <p className="text-gray-700 text-sm">{typeDetail.relationships.conflictHandling}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hvis du er denne type / Hvis du arbejder med denne type (Als je dit type bent / Als je met dit type werkt) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">
              Als u een {typeDetail.type} bent
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    Met uw {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} profiel (dat bent u):
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
              Als u samenwerkt met een {typeDetail.type}
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Wanneer ze het {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} profiel hebben (zo zijn ze):
                  </h4>
                  <p className="text-green-700 text-sm mb-3">
                    Deze persoon combineert de kerntrekken van de {typeDetail.type} met {getWingInfluenceDescription(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing)}.
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

        {/* Under stress og når tryg (Onder stress en wanneer veilig) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Onder stress</h3>
            </div>
            <p className="text-red-700 text-sm mb-2">
              Beweegt zich naar **{typeDetail.underStress.movesToType}**
            </p>
            <p className="text-red-700 text-sm">{typeDetail.underStress.description}</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-green-800">Wanneer veilig</h3>
            </div>
            <p className="text-green-700 text-sm mb-2">
              Beweegt zich naar **{typeDetail.whenSecure.movesToType}**
            </p>
            <p className="text-green-700 text-sm">{typeDetail.whenSecure.description}</p>
          </div>
        </div>

        {/* Udviklingsudfordring (Ontwikkelingsuitdaging) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Ontwikkelingsuitdaging</h2>
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
                Wilt u nog meer weten over {typeDetail.type}?
              </h3>
              <p className="text-blue-700">
                Als u denkt dat u dit type bent, kunt u uw Enneagram-vleugels verkennen voor een nog nauwkeuriger persoonlijkheidsprofiel
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="w-full flex items-center justify-between mb-3 text-left"
              >
                <h4 className="font-semibold text-blue-800">🪶 Wat zijn Enneagram-vleugels?</h4>
                {showExamples ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {showExamples && (
                <>
                  <p className="text-blue-700 text-sm mb-4">
                    {typeDetail.type} heeft, net als de andere types, twee "buren" op de Enneagram-cirkel, die **Vleugels** worden genoemd.
                    Deze vleugels vermengen zich met het kerntype en creëren een meer genuanceerde en precieze beschrijving van de persoonlijkheid van het type. Als u vermoedt dat u een {typeDetail.type} zou kunnen zijn, kunt u 10 specifieke vragen voor dit type invullen.
                  </p>
                  <p className="text-blue-700 text-sm mb-4">
                    {getWingExplanationForType(typeDetail.type)}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Wat kunt u verwachten?</h5>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• 10 specifieke vragen voor {typeDetail.type} die vergelijken hoe het type de twee vleugels gebruikt</li>
                      <li>• Een gedetailleerde beschrijving van de dominante vleugel</li>
                      <li>• Begrip van hoe de vleugels de persoonlijkheid van de {typeDetail.type} nuanceren</li>
                      <li>• Het invullen duurt slechts 3-5 minuten</li>
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
                Ja, ontdek de Enneagram-vleugels voor {typeDetail.type}!
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
            Terug naar resultaten
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
          'Gebruik uw diplomatieke aanpak om positieve verandering te creëren zonder onnodige conflicten te veroorzaken',
          'Onthoud dat uw rustige, methodische stijl een kracht is - u hoeft niet agressief te zijn om effectief te zijn',
          'Stel grenzen aan hoeveel u uw principes in gevaar brengt om conflicten te vermijden',
          'Oefen met het uiten van uw normen op een manier die uitnodigt tot samenwerking',
          'Neem de tijd voor beslissingen, maar vermijd uitstelgedrag wanneer actie nodig is'
        ],
        'colleague': [
          'Waardeer hun diplomatieke aanpak voor verbeteringen - ze creëren verandering zonder drama',
          'Geef ze tijd om na te denken over beslissingen in plaats van ze te pushen voor snelle antwoorden',
          'Erken hun vermogen om compromissen te vinden die alle partijen tevreden stellen',
          'Wees geduldig met hun methodische werkstijl - de kwaliteit is het waard',
          'Moedig hen aan om hun standpunten te delen, zelfs als ze het oneens zijn'
        ]
      },
      'w2': {
        'self': [
          'Gebruik uw natuurlijke behulpzaamheid om verbeteringen gemakkelijker door anderen geaccepteerd te krijgen',
          'Onthoud om uw zorg voor anderen in evenwicht te brengen met uw eigen behoeften aan perfectie',
          'Leer constructieve feedback te geven op een manier die ondersteunend aanvoelt in plaats van kritisch',
          'Erken dat uw motivatie om te helpen uit een goede intentie komt, maar stel grenzen',
          'Gebruik uw empathie om te begrijpen waarom mensen fouten maken voordat u ze corrigeert'
        ],
        'colleague': [
          'Waardeer hun verlangen om u te helpen uw werk te verbeteren',
          'Sta open voor hun begeleiding - ze willen echt dat u slaagt',
          'Erken hun inspanningen en bedank hen voor hun hulp en steun',
          'Begrijp dat hun kritiek voortkomt uit zorg, niet uit aanval',
          'Geef ze de kans om mentoren en docenten te zijn - het geeft hen energie'
        ]
      },
      'balanced': {
        'self': [
          'Leer situaties in te schatten en te kiezen tussen een diplomatieke en een directe aanpak',
          'Gebruik uw flexibiliteit als een kracht - u kunt zich aanpassen aan verschillende behoeften',
          'Wees bedachtzaam om consistent te zijn in uw reacties zodat anderen u kunnen begrijpen',
          'Breng uw behoefte om alleen te werken in evenwicht met de waarde van teamsamenwerking',
          'Accepteer dat verschillende situaties verschillende benaderingen van perfectie vereisen'
        ],
        'colleague': [
          'Begrijp dat ze in verschillende situaties anders kunnen reageren - dit is geen inconsistentie',
          'Waardeer hun vermogen om hun aanpak aan te passen aan wat de situatie vereist',
          'Geef ze ruimte om zowel zelfstandig te werken als samen te werken met het team',
          'Wees geduldig wanneer ze tijd nodig hebben om de juiste strategie te kiezen',
          'Erken zowel hun diplomatieke als hun meer directe bijdragen'
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
      'w9': 'een meer diplomatieke en vreedzame benadering van perfectie',
      'w2': 'een meer behulpzame en relatiegerichte benadering van verbeteringen',
      'balanced': 'een flexibele benadering die schakelt tussen diplomatie en behulpzaamheid'
    }
    // Add more types as needed...
  };
  
  return descriptions[type]?.[wing] || 'hun unieke vleugelcombinatie';
};

// Helper function to explain wings for each type
const getWingExplanationForType = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'Als Perfectionist kunt u ofwel diplomatieker en vreedzamer zijn (beïnvloed door Type 9) ofwel behulpzamer en relatiegerichter (beïnvloed door Type 2).',
    'Type 2': 'Als Helper kunt u ofwel principiëler en gestructureerder zijn (beïnvloed door Type 1) ofwel ambitieuzer en prestatiegerichter (beïnvloed door Type 3).',
    'Type 3': 'Als Prestatiegerichte kunt u ofwel behulpzamer en charmanter zijn (beïnvloed door Type 2) ofwel creatiever en individualistischer (beïnvloed door Type 4).',
    'Type 4': 'Als Individualist kunt u ofwel ambitieuzer en extraverter zijn (beïnvloed door Type 3) ofwel meer teruggetrokken en analytisch (beïnvloed door Type 5).',
    'Type 5': 'Als Onderzoeker kunt u ofwel creatiever en emotioneler zijn (beïnvloed door Type 4) ofwel loyaler en veiligheidsgerichter (beïnvloed door Type 6).',
    'Type 6': 'Als Loyalist kunt u ofwel analytischer en meer teruggetrokken zijn (beïnvloed door Type 5) ofwel optimistischer en avontuurlijker (beïnvloed door Type 7).',
    'Type 7': 'Als Enthousiasteling kunt u ofwel loyaler en verantwoordelijker zijn (beïnvloed door Type 6) ofwel krachtiger en assertiever (beïnvloed door Type 8).',
    'Type 8': 'Als Uitdager kunt u ofwel energieker en optimistischer zijn (beïnvloed door Type 7) ofwel vreedzamer en diplomatieker (beïnvloed door Type 9).',
    'Type 9': 'Als Vredestichter kunt u ofwel krachtiger en assertiever zijn (beïnvloed door Type 8) ofwel principiëler en gestructureerder (beïnvloed door Type 1).'
  };
  return explanations[type] || '';
};

export default TypeDetailPage;
