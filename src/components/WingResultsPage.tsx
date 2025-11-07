import React from 'react';
import { ArrowLeft, Award, BarChart3 } from 'lucide-react';
import { WingResult } from '../types/wings';

interface WingResultsPageProps {
  wingResult: WingResult;
  wingTestData: any;
  primaryType: string;
  onBack: () => void;
  onFinish: () => void;
  language?: string;
}

const WingResultsPage: React.FC<WingResultsPageProps> = ({
  wingResult,
  wingTestData,
  primaryType,
  onBack,
  onFinish,
  language = 'da'
}) => {
  const getTexts = () => {
    switch (language) {
      case 'en':
        return {
          yourWings: 'Your Enneagram Wings',
          deeperUnderstanding: 'A deeper understanding of your',
          characteristicsTitle: 'Characteristics for your type',
          wingScoresTitle: 'Your wing scores',
          answers: 'answers',
          balancedWings: 'Balanced wings:',
          balancedDescription: 'Your scores are very close, which means you use both wings flexibly depending on the situation.',
          backToResults: 'Back to main results',
          finishTest: 'Finish test'
        };
      case 'de':
        return {
          yourWings: 'Ihre Enneagramm-Flügel',
          deeperUnderstanding: 'Ein tieferes Verständnis Ihres',
          characteristicsTitle: 'Charakteristika für Ihre Flügel-Kombination',
          wingScoresTitle: 'Ihre Flügel-Scores',
          answers: 'Antworten',
          balancedWings: 'Ausgewogene Flügel:',
          balancedDescription: 'Ihre Scores sind sehr nahe beieinander, was bedeutet, dass Sie beide Flügel flexibel je nach Situation nutzen.',
          backToResults: 'Zurück zu den Hauptergebnissen',
          finishTest: 'Test beenden'
        };
      case 'se':
        return {
          yourWings: 'Dina Enneagram-vingar',
          deeperUnderstanding: 'En djupare förståelse av din',
          characteristicsTitle: 'Karakteristika för din typ',
          wingScoresTitle: 'Dina vinge-poäng',
          answers: 'svar',
          balancedWings: 'Balanserade vingar:',
          balancedDescription: 'Dina poäng är mycket nära, vilket betyder att du använder båda vingarna flexibelt beroende på situationen.',
          backToResults: 'Tillbaka till huvudresultat',
          finishTest: 'Avsluta test'
        };
      case 'nl':
        return {
          yourWings: 'Uw Enneagram-vleugels',
          deeperUnderstanding: 'Een dieper begrip van uw',
          characteristicsTitle: 'Kenmerken van uw type',
          wingScoresTitle: 'Uw vleugel-scores',
          answers: 'antwoorden',
          balancedWings: 'Gebalanceerde vleugels:',
          balancedDescription: 'Uw scores liggen heel dicht bij elkaar, wat betekent dat u beide vleugels flexibel gebruikt afhankelijk van de situatie.',
          backToResults: 'Terug naar hoofdresultaten',
          finishTest: 'Test voltooien'
        };
      case 'uk':
        return {
          yourWings: 'Ваші крила енеаграми',
          deeperUnderstanding: 'Глибше розуміння вашого',
          characteristicsTitle: 'Характеристики вашого типу',
          wingScoresTitle: 'Ваші бали крил',
          answers: 'відповідей',
          balancedWings: 'Збалансовані крила:',
          balancedDescription: 'Ваші бали дуже близькі, що означає, що ви використовуєте обидва крила гнучко залежно від ситуації.',
          backToResults: 'Повернутися до головних результатів',
          finishTest: 'Завершити тест'
        };
      default:
        return {
          yourWings: 'Dine Enneagram-vinger',
          deeperUnderstanding: 'En dybere forståelse af din',
          characteristicsTitle: 'Karakteristika for din type',
          wingScoresTitle: 'Dine vinge-scores',
          answers: 'svar',
          balancedWings: 'Balancerede vinger:',
          balancedDescription: 'Dine scores er meget tætte, hvilket betyder at du bruger begge vinger fleksibelt afhængigt af situationen.',
          backToResults: 'Tilbage til hovedresultater',
          finishTest: 'Afslut test'
        };
    }
  };

  const texts = getTexts();
  const getResultDescription = () => {
    if (wingResult.isBalanced) {
      return wingTestData.descriptions.balanced;
    }
    return wingTestData.descriptions[wingResult.primaryWing];
  };

  const resultDescription = getResultDescription();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-amber-50 to-fuchsia-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Kruso Logo */}
        <div className="flex justify-end mb-2">
          <img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Award className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{texts.yourWings}</h1>
          <p className="text-gray-600">{texts.deeperUnderstanding} {primaryType}</p>
        </div>

        {/* Main Result */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              {resultDescription.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {resultDescription.description}
            </p>
          </div>
        </div>

        {/* Characteristics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">{texts.characteristicsTitle}</h3>
          <div className="grid gap-3">
            {resultDescription.characteristics.map((characteristic, index) => (
              <div key={index} className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{characteristic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">{texts.wingScoresTitle}</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">
                  {primaryType}{wingResult.primaryWing}
                </span>
                <span className="text-indigo-600 font-semibold">
                  {wingResult.primaryScore} {texts.answers}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(wingResult.primaryScore / (wingResult.primaryScore + wingResult.secondaryScore)) * 100}%` 
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">
                  {primaryType}{wingResult.secondaryWing}
                </span>
                <span className="text-gray-600 font-semibold">
                  {wingResult.secondaryScore} {texts.answers}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gray-400 h-3 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(wingResult.secondaryScore / (wingResult.primaryScore + wingResult.secondaryScore)) * 100}%` 
                  }}
                />
              </div>
            </div>
          </div>

          {wingResult.isBalanced && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>{texts.balancedWings}</strong> {texts.balancedDescription}
              </p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {texts.backToResults}
          </button>

          <button
            onClick={onFinish}
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            {texts.finishTest}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WingResultsPage;