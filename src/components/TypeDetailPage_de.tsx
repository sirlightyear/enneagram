import React, { useState } from 'react';
import { ArrowLeft, Heart, Brain, Users, AlertTriangle, Target, MessageCircle, Lightbulb, TrendingUp, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { TypeDetail } from '../data/typeDetails_de';
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-amber-50 to-fuchsia-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-start mb-4">
          <img src="/-K_-_Colored(2).png" alt="Kruso" className="h-10 w-auto" />
        </div>

        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          **Zurück zu den Ergebnissen**
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {typeDetail.type}: {typeDetail.title}
          </h1>
          <p className="text-gray-600 text-lg">Ausführliche Beschreibung des Persönlichkeitstyps</p>
        </div>

        {/* Verdenssyn (Weltanschauung) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Weltanschauung</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{typeDetail.worldview}</p>
        </div>

        {/* Grundlæggende information (Grundlegende Informationen) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Grundlegende Angst</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicFear}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Grundlegendes Verlangen</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicDesire}</p>
          </div>
        </div>

        {/* Fokus og indre dialog (Fokus und Innerer Dialog) */}
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
              <h3 className="text-lg font-semibold text-gray-800">Innerer Dialog</h3>
            </div>
            <p className="text-gray-700 italic">"{typeDetail.innerDialogue}"</p>
          </div>
        </div>

        {/* Kvaliteter og styrker (Qualitäten und Stärken) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Qualitäten und Stärken</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Schlüsselqualitäten</h4>
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
              <h4 className="font-medium text-gray-800 mb-3">Persönliche Stärken</h4>
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

        {/* Udfordringer (Herausforderungen) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Herausforderungen und blinde Flecken</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Blinde Flecken</h4>
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
              <h4 className="font-medium text-gray-800 mb-3">Leidenschaft/Laster</h4>
              <p className="text-gray-700 text-sm">{typeDetail.passion}</p>
            </div>
          </div>
        </div>

        {/* Motivation og læring (Motivation und Lernen) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Motiviert durch</h3>
            </div>
            <p className="text-gray-700">{typeDetail.motivatedBy}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Lernen</h3>
            </div>
            <p className="text-gray-700">{typeDetail.learning}</p>
          </div>
        </div>

        {/* Relationer (Beziehungen) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Beziehungen und Zusammenarbeit</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Allgemeiner Ansatz zu Beziehungen</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.generalApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Ansatz zur Arbeit</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.workApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Als Teamplayer</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.teamPlayer}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Konfliktpunkte</h4>
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
                <h4 className="font-medium text-gray-800 mb-2">Konfliktbewältigung</h4>
                <p className="text-gray-700 text-sm">{typeDetail.relationships.conflictHandling}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hvis du er denne type / Hvis du arbejder med denne type (Wenn Sie dieser Typ sind / Wenn Sie mit diesem Typ arbeiten) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">
              Wenn Sie ein {typeDetail.type} sind
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    Mit Ihrem {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} Profil (das sind Sie):
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
              Wenn Sie mit einem {typeDetail.type} zusammenarbeiten
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Wenn sie das {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} Profil haben (so sind sie):
                  </h4>
                  <p className="text-green-700 text-sm mb-3">
                    Diese Person kombiniert die grundlegenden Eigenschaften des {typeDetail.type} mit {getWingInfluenceDescription(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing)}.
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

        {/* Under stress og når tryg (Unter Stress und in Sicherheit) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Unter Stress</h3>
            </div>
            <p className="text-red-700 text-sm mb-2">
              Bewegt sich in Richtung **{typeDetail.underStress.movesToType}**
            </p>
            <p className="text-red-700 text-sm">{typeDetail.underStress.description}</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-green-800">In Sicherheit</h3>
            </div>
            <p className="text-green-700 text-sm mb-2">
              Bewegt sich in Richtung **{typeDetail.whenSecure.movesToType}**
            </p>
            <p className="text-green-700 text-sm">{typeDetail.whenSecure.description}</p>
          </div>
        </div>

        {/* Udviklingsudfordring (Entwicklungsherausforderung) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Entwicklungsherausforderung</h2>
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
                Möchten Sie noch mehr über {typeDetail.type} erfahren?
              </h3>
              <p className="text-blue-700">
                Wenn Sie glauben, dieser Typ zu sein, können Sie Ihre Enneagramm-Flügel für ein noch präziseres Persönlichkeitsprofil erkunden.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="w-full flex items-center justify-between mb-3 text-left"
              >
                <h4 className="font-semibold text-blue-800">🪶 Was sind Enneagramm-Flügel?</h4>
                {showExamples ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {showExamples && (
                <>
                  <p className="text-blue-700 text-sm mb-4">
                    {typeDetail.type} hat, wie die anderen Typen, zwei "Nachbarn" auf dem Enneagramm-Kreis, die **Flügel** genannt werden.
                    Diese Flügel vermischen sich mit dem Grundtyp und erzeugen eine nuanciertere und präzisere Beschreibung der Persönlichkeit des Typs. Wenn Sie vermuten, dass Sie ein {typeDetail.type} sein könnten, können Sie 10 spezifische Fragen für diesen Typ beantworten.
                  </p>
                  <p className="text-blue-700 text-sm mb-4">
                    {getWingExplanationForType(typeDetail.type)}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Was können Sie erwarten?</h5>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• 10 spezifische Fragen für {typeDetail.type}, die vergleichen, wie der Typ die beiden Flügel nutzt</li>
                      <li>• Eine detaillierte Beschreibung des dominanten Flügels</li>
                      <li>• Verständnis dafür, wie die Flügel die Persönlichkeit des {typeDetail.type} nuancieren</li>
                      <li>• Dauert nur 3-5 Minuten zum Ausfüllen</li>
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
                Ja, entdecken Sie die Enneagramm-Flügel für {typeDetail.type}!
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
            Zurück zu den Ergebnissen
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 py-4 text-gray-600 text-sm">
          Copyright 2026 - Kruso A/S - enneagram@kruso.dk
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
          'Nutzen Sie Ihren diplomatischen Ansatz, um positive Veränderungen zu bewirken, ohne unnötige Konflikte zu schaffen',
          'Denken Sie daran, dass Ihr ruhiger, methodischer Stil eine Stärke ist - Sie müssen nicht aggressiv sein, um effektiv zu sein',
          'Setzen Sie Grenzen, wie weit Sie Ihre Prinzipien kompromittieren werden, um Konflikte zu vermeiden',
          'Üben Sie sich darin, Ihre Standards so auszudrücken, dass sie zur Zusammenarbeit einladen',
          'Nehmen Sie sich Zeit für Entscheidungen, vermeiden Sie jedoch das Prokrastinieren, wenn Handeln notwendig ist'
        ],
        'colleague': [
          'Schätzen Sie ihren diplomatischen Ansatz für Verbesserungen - sie bewirken Veränderungen ohne Drama',
          'Geben Sie ihnen Zeit, über Entscheidungen nachzudenken, anstatt sie zu schnellen Antworten zu drängen',
          'Erkennen Sie ihre Fähigkeit an, Kompromisse zu finden, die alle Parteien zufriedenstellen',
          'Seien Sie geduldig mit ihrem methodischen Arbeitsstil - die Qualität ist es wert',
          'Ermutigen Sie sie, ihre Standpunkte zu teilen, auch wenn sie nicht einverstanden sind'
        ]
      },
      'w2': {
        'self': [
          'Nutzen Sie Ihre natürliche Hilfsbereitschaft, um Verbesserungen von anderen leichter akzeptieren zu lassen',
          'Denken Sie daran, Ihre Fürsorge für andere mit Ihren eigenen Bedürfnissen nach Perfektion auszugleichen',
          'Lernen Sie, konstruktives Feedback so zu geben, dass es unterstützend statt kritisch wirkt',
          'Erkennen Sie an, dass Ihre Motivation zu helfen aus einem guten Grund kommt, aber setzen Sie Grenzen',
          'Nutzen Sie Ihre Empathie, um zu verstehen, warum Menschen Fehler machen, bevor Sie sie korrigieren'
        ],
        'colleague': [
          'Schätzen Sie ihren Wunsch, Ihnen bei der Verbesserung Ihrer Arbeit zu helfen',
          'Seien Sie offen für ihre Anleitung - sie wollen wirklich, dass Sie erfolgreich sind',
          'Erkennen Sie ihre Bemühungen an und danken Sie ihnen für ihre Hilfe und Unterstützung',
          'Verstehen Sie, dass ihre Kritik aus Fürsorge kommt, nicht als Angriff',
          'Geben Sie ihnen die Möglichkeit, Mentoren und Lehrer zu sein - das gibt ihnen Energie'
        ]
      },
      'balanced': {
        'self': [
          'Lernen Sie, Situationen einzuschätzen und zwischen einem diplomatischen und direkten Ansatz zu wählen',
          'Nutzen Sie Ihre Flexibilität als Stärke - Sie können sich an verschiedene Bedürfnisse anpassen',
          'Achten Sie darauf, in Ihren Reaktionen konsistent zu sein, damit andere Sie verstehen können',
          'Balancieren Sie Ihr Bedürfnis, alleine zu arbeiten, mit dem Wert der Teamarbeit',
          'Akzeptieren Sie, dass verschiedene Situationen unterschiedliche Ansätze zur Perfektion erfordern'
        ],
        'colleague': [
          'Verstehen Sie, dass sie in verschiedenen Situationen unterschiedlich reagieren können - das ist keine Inkonsistenz',
          'Schätzen Sie ihre Fähigkeit, ihren Ansatz an das anzupassen, was die Situation erfordert',
          'Geben Sie ihnen Raum, sowohl selbstständig zu arbeiten als auch mit dem Team zusammenzuarbeiten',
          'Seien Sie geduldig, wenn sie Zeit brauchen, um die richtige Strategie zu wählen',
          'Erkennen Sie sowohl ihren diplomatischen als auch ihren direkteren Beitrag an'
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
      'w9': 'einem diplomatischeren und friedlicheren Ansatz zur Perfektion',
      'w2': 'einem hilfsbereiteren und beziehungsorientierteren Ansatz für Verbesserungen',
      'balanced': 'einem flexiblen Ansatz, der zwischen Diplomatie und Hilfsbereitschaft wechselt'
    }
    // Add more types as needed...
  };
  
  return descriptions[type]?.[wing] || 'ihrer einzigartigen Flügelkombination';
};

// Helper function to explain wings for each type
const getWingExplanationForType = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'Als Perfektionist können Sie entweder diplomatischer und friedlicher sein (beeinflusst durch Typ 9) oder hilfsbereiter und beziehungsorientierter (beeinflusst durch Typ 2).',
    'Type 2': 'Als Helfer können Sie entweder prinzipientreuer und strukturierter sein (beeinflusst durch Typ 1) oder ehrgeiziger und leistungsorientierter (beeinflusst durch Typ 3).',
    'Type 3': 'Als Leistungsorientierter können Sie entweder hilfsbereiter und charmanter sein (beeinflusst durch Typ 2) oder kreativer und individualistischer (beeinflusst durch Typ 4).',
    'Type 4': 'Als Individualist können Sie entweder ehrgeiziger und extrovertierter sein (beeinflusst durch Typ 3) oder zurückgezogener und analytischer (beeinflusst durch Typ 5).',
    'Type 5': 'Als Forscher können Sie entweder kreativer und emotionaler sein (beeinflusst durch Typ 4) oder loyaler und sicherheitsorientierter (beeinflusst durch Typ 6).',
    'Type 6': 'Als Loyalist können Sie entweder analytischer und zurückgezogener sein (beeinflusst durch Typ 5) oder optimistischer und abenteuerlustiger (beeinflusst durch Typ 7).',
    'Type 7': 'Als Enthusiast können Sie entweder loyaler und verantwortungsbewusster sein (beeinflusst durch Typ 6) oder kraftvoller und durchsetzungsfähiger (beeinflusst durch Typ 8).',
    'Type 8': 'Als Herausforderer können Sie entweder energischer und optimistischer sein (beeinflusst durch Typ 7) oder friedlicher und diplomatischer (beeinflusst durch Typ 9).',
    'Type 9': 'Als Friedensstifter können Sie entweder kraftvoller und durchsetzungsfähiger sein (beeinflusst durch Typ 8) oder prinzipientreuer und strukturierter (beeinflusst durch Typ 1).'
  };
  return explanations[type] || '';
};

export default TypeDetailPage;
