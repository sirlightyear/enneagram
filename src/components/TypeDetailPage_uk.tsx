import React, { useState } from 'react';
import { ArrowLeft, Heart, Brain, Users, AlertTriangle, Target, MessageCircle, Lightbulb, TrendingUp, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { TypeDetail } from '../data/typeDetails_uk';
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
<img src="/KrusoPeople4.png" alt="Kruso Компас" className="w-15 h-auto" />
{/*<img src="/Kruso.svg" alt="Kruso" className="h-6 opacity-60" />*/}
        </div>

        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          **Назад до результатів**
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {typeDetail.type}: {typeDetail.title}
          </h1>
          <p className="text-gray-600 text-lg">Детальний опис типу особистості</p>
        </div>

        {/* Verdenssyn (Світогляд) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Світогляд</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{typeDetail.worldview}</p>
        </div>

        {/* Grundlæggende information (Основна інформація) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Основний страх</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicFear}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Основне бажання</h3>
            </div>
            <p className="text-gray-700">{typeDetail.basicDesire}</p>
          </div>
        </div>

        {/* Fokus og indre dialog (Фокус та внутрішній діалог) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Фокус</h3>
            </div>
            <p className="text-gray-700">{typeDetail.focus}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Внутрішній діалог</h3>
            </div>
            <p className="text-gray-700 italic">"{typeDetail.innerDialogue}"</p>
          </div>
        </div>

        {/* Kvaliteter og styrker (Якості та сильні сторони) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Якості та Сильні сторони</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Ключові якості</h4>
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
              <h4 className="font-medium text-gray-800 mb-3">Особисті сильні сторони</h4>
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

        {/* Udfordringer (Виклики) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Виклики та Сліпі зони</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Сліпі зони</h4>
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
              <h4 className="font-medium text-gray-800 mb-3">Пристрасть/Вада</h4>
              <p className="text-gray-700 text-sm">{typeDetail.passion}</p>
            </div>
          </div>
        </div>

        {/* Motivation og læring (Мотивація та навчання) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Мотивований</h3>
            </div>
            <p className="text-gray-700">{typeDetail.motivatedBy}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Навчання</h3>
            </div>
            <p className="text-gray-700">{typeDetail.learning}</p>
          </div>
        </div>

        {/* Relationer (Стосунки) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Стосунки та Співпраця</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Загальний підхід до стосунків</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.generalApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Підхід до роботи</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.workApproach}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Як командний гравець</h4>
              <p className="text-gray-700 text-sm">{typeDetail.relationships.teamPlayer}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Конфліктні точки</h4>
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
                <h4 className="font-medium text-gray-800 mb-2">Управління конфліктами</h4>
                <p className="text-gray-700 text-sm">{typeDetail.relationships.conflictHandling}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hvis du er denne type / Hvis du arbejder med denne type (Якщо ви є цим типом / Якщо ви працюєте з цим типом) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">
              Якщо ви {typeDetail.type}
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    З вашим {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} профілем (це ви):
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
              Якщо ви працюєте з {typeDetail.type}
            </h3>
            {wingResult ? (
              <div>
                <div className="mb-4 p-3 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Коли вони мають {wingResult.testData.descriptions[wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing]?.title.split(' - ')[1]} профіль (такі вони):
                  </h4>
                  <p className="text-green-700 text-sm mb-3">
                    Ця людина поєднує основні риси {typeDetail.type} з {getWingInfluenceDescription(typeDetail.type, wingResult.result.isBalanced ? 'balanced' : wingResult.result.primaryWing)}.
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

        {/* Under stress og når tryg (Під стресом і коли в безпеці) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Під стресом</h3>
            </div>
            <p className="text-red-700 text-sm mb-2">
              Рухається до **{typeDetail.underStress.movesToType}**
            </p>
            <p className="text-red-700 text-sm">{typeDetail.underStress.description}</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-green-800">Коли в безпеці</h3>
            </div>
            <p className="text-green-700 text-sm mb-2">
              Рухається до **{typeDetail.whenSecure.movesToType}**
            </p>
            <p className="text-green-700 text-sm">{typeDetail.whenSecure.description}</p>
          </div>
        </div>

        {/* Udviklingsudfordring (Виклик розвитку) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Виклик розвитку</h2>
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
                Бажаєте дізнатися ще більше про {typeDetail.type}?
              </h3>
              <p className="text-blue-700">
                Якщо ви вважаєте, що ви є цим типом, ви можете дослідити свої крила Еннеаграми для ще більш точного профілю особистості
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6 border border-blue-200">
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="w-full flex items-center justify-between mb-3 text-left"
              >
                <h4 className="font-semibold text-blue-800">🪶 Що таке крила Еннеаграми?</h4>
                {showExamples ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {showExamples && (
                <>
                  <p className="text-blue-700 text-sm mb-4">
                    {typeDetail.type}, як і інші типи, має двох "сусідів" на колі Еннеаграми, які називаються **Крилами**.
                    Ці крила змішуються з основним типом, створюючи більш нюансований і точний опис особистості типу. Якщо ви підозрюєте, що можете бути {typeDetail.type}, ви можете відповісти на 10 конкретних питань для цього типу.
                  </p>
                  <p className="text-blue-700 text-sm mb-4">
                    {getWingExplanationForType(typeDetail.type)}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">Чого можна очікувати?</h5>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• 10 конкретних питань для {typeDetail.type}, які порівнюють, як тип використовує два крила</li>
                      <li>• Детальний опис домінуючого крила</li>
                      <li>• Розуміння того, як крила нюансують особистість {typeDetail.type}</li>
                      <li>• Займає лише 3-5 хвилин для завершення</li>
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
                Так, відкрийте для себе крила Еннеаграми для {typeDetail.type}!
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
            Назад до результатів
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
          'Використовуйте свій дипломатичний підхід для створення позитивних змін без спричинення непотрібних конфліктів',
          'Пам’ятайте, що Ваш спокійний, методичний стиль є силою - Вам не потрібно бути агресивним, щоб бути ефективним',
          'Встановіть межі щодо того, наскільки Ви будете компрометувати свої принципи, щоб уникнути конфлікту',
          'Практикуйте вираження своїх стандартів у спосіб, що запрошує до співпраці',
          'Не поспішайте з рішеннями, але уникайте прокрастинації, коли необхідна дія'
        ],
        'colleague': [
          'Цінуйте їхній дипломатичний підхід до вдосконалень - вони створюють зміни без драми',
          'Дайте їм час подумати над рішеннями, замість того, щоб тиснути на них для швидких відповідей',
          'Визнайте їхню здатність знаходити компроміси, які задовольняють усі сторони',
          'Будьте терплячими до їхнього методичного стилю роботи - якість цього варта',
          'Заохочуйте їх ділитися своїми поглядами, навіть коли вони не згодні'
        ]
      },
      'w2': {
        'self': [
          'Використовуйте свою природну готовність допомогти, щоб зробити вдосконалення більш прийнятними для інших',
          'Не забувайте балансувати свою турботу про інших зі своїми власними потребами в досконалості',
          'Навчіться давати конструктивний зворотний зв\'язок у спосіб, що відчувається як підтримка, а не критика',
          'Визнайте, що Ваша мотивація допомагати походить із хорошого наміру, але встановлюйте межі',
          'Використовуйте свою емпатію, щоб зрозуміти, чому люди роблять помилки, перш ніж їх виправляти'
        ],
        'colleague': [
          'Цінуйте їхнє бажання допомогти Вам покращити Вашу роботу',
          'Будьте відкриті до їхніх настанов - вони щиро бажають Вам успіху',
          'Визнайте їхні зусилля та подякуйте їм за їхню допомогу та підтримку',
          'Зрозумійте, що їхня критика походить із турботи, а не нападу',
          'Надайте їм можливість бути менторами та вчителями - це їх надихає'
        ]
      },
      'balanced': {
        'self': [
          'Навчіться читати ситуації та обирати між дипломатичним і прямим підходом',
          'Використовуйте свою гнучкість як силу - Ви можете адаптуватися до різних потреб',
          'Будьте уважні до послідовності у Ваших реакціях, щоб інші могли Вас зрозуміти',
          'Збалансуйте свою потребу працювати наодинці з цінністю командної роботи',
          'Прийміть, що різні ситуації вимагають різних підходів до досконалості'
        ],
        'colleague': [
          'Зрозумійте, що вони можуть реагувати по-різному в різних ситуаціях - це не є непослідовністю',
          'Цінуйте їхню здатність адаптувати свій підхід відповідно до того, що вимагає ситуація',
          'Надайте їм простір як для самостійної роботи, так і для співпраці в команді',
          'Будьте терплячими, коли їм потрібен час, щоб обрати правильну стратегію',
          'Визнайте як їхній дипломатичний, так і їхній більш прямий внесок'
        ]
      }
    }
    // Додайте більше типів за потреби...
  };
  
  return advice[type]?.[wing]?.[perspective] || [];
};

// Helper function to describe wing influence
const getWingInfluenceDescription = (type: string, wing: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    'Type 1': {
      'w9': 'більш дипломатичний та мирний підхід до досконалості',
      'w2': 'більш корисний та орієнтований на стосунки підхід до вдосконалень',
      'balanced': 'гнучкий підхід, який перемикається між дипломатією та готовністю допомогти'
    }
    // Додайте більше типів за потреби...
  };
  
  return descriptions[type]?.[wing] || 'їхня унікальна комбінація крил';
};

// Helper function to explain wings for each type
const getWingExplanationForType = (type: string): string => {
  const explanations: Record<string, string> = {
    'Type 1': 'Як Перфекціоніст, Ви можете бути або більш дипломатичним і мирним (під впливом Типу 9), або більш корисним і орієнтованим на стосунки (під впливом Типу 2).',
    'Type 2': 'Як Помічник, Ви можете бути або більш принциповим і структурованим (під впливом Типу 1), або більш амбітним і орієнтованим на досягнення (під впливом Типу 3).',
    'Type 3': 'Як Досягач, Ви можете бути або більш корисним і чарівним (під впливом Типу 2), або більш креативним та індивідуалістичним (під впливом Типу 4).',
    'Type 4': 'Як Індивідуаліст, Ви можете бути або більш амбітним і товариським (під впливом Типу 3), або більш замкнутим та аналітичним (під впливом Типу 5).',
    'Type 5': 'Як Дослідник, Ви можете бути або більш креативним та емоційним (під впливом Типу 4), або більш лояльним та орієнтованим на безпеку (під впливом Типу 6).',
    'Type 6': 'Як Лояліст, Ви можете бути або більш аналітичним і замкнутим (під впливом Типу 5), або більш оптимістичним і авантюрним (під впливом Типу 7).',
    'Type 7': 'Як Ентузіаст, Ви можете бути або більш лояльним і відповідальним (під впливом Типу 6), або більш потужним і наполегливим (під впливом Типу 8).',
    'Type 8': 'Як Випробувач, Ви можете бути або більш енергійним і оптимістичним (під впливом Типу 7), або більш мирним і дипломатичним (під впливом Типу 9).',
    'Type 9': 'Як Миротворець, Ви можете бути або більш потужним і наполегливим (під впливом Типу 8), або більш принциповим і структурованим (під впливом Типу 1).'
  };
  return explanations[type] || '';
};

export default TypeDetailPage;
