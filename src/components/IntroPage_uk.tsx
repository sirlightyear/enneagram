import LanguageSelector from './LanguageSelector';
import React, { useState } from 'react';
import { Brain, Users, Heart, ArrowRight, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface IntroPageProps {
  language: string;
  onLanguageChange: (language: string) => void;
  onStart: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onStart, language, onLanguageChange }) => {
  const [showKrusoDetails, setShowKrusoDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-amber-50 to-fuchsia-200">
      <div className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Language Selector */}
          <div className="flex justify-end mb-4">
            <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Kruso Logo - дискретно розміщений */}
          <div className="flex justify-center">         
            <img src="/KrusoPeople4.png" alt="Kruso Компас" className="w-15 h-auto" />
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Енеаграма Тест Особистості
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Краще зрозумійте себе та своїх колег
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>10-15 Хвилин</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>9 Типів Особистості</span>
              <span className="text-gray-400">•</span>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Детальний Аналіз</span>
            </div>
          </div>

          {/* Kruso intro - Collapsible */}
          <div className="bg-white rounded-xl shadow-lg mb-4 overflow-hidden">
            <button
              onClick={() => setShowKrusoDetails(!showKrusoDetails)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <Users className="w-6 h-6 text-indigo-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-800">Чому ми використовуємо Енеаграму в Kruso?</h2>
              </div>
              {showKrusoDetails ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {showKrusoDetails && (
              <div className="px-6 pb-6 text-gray-700 space-y-4 border-t border-gray-100 pt-4">
                <p>
                  У Kruso ми дуже цінуємо гарну співпрацю – як внутрішню між колегами, так і в наших
                  партнерських відносинах з клієнтами. Ми знаємо, що коли ми краще розуміємо одне одного, це об’єднує нас як
                  сильнішу команду.
                </p>

                <p>
                  Коли ми знаємо особистості, стилі роботи та мотивацію одне одного, ми не просто
                  ефективніше працюємо разом – ми також створюємо середовище, що характеризується повагою, емпатією та взаємною підтримкою.
                  Це робить нас кращими у вирішенні складних завдань, подоланні викликів та наданні виняткових
                  результатів для наших клієнтів.
                </p>

                <div className="flex items-center bg-indigo-50 p-4 rounded-lg">
                  <Heart className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <p className="text-indigo-800 font-medium mb-0">
                    Цей тест особистості є інструментом для кращого розуміння себе та своїх колег,
                    щоб ми разом могли досягти ще кращих результатів.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Enneagram intro - Always visible */}
          <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Про Енеаграму</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Енеаграма – це потужна система для розуміння особистості та мотивації. Вона описує
              дев’ять різних типів особистості, кожен зі своїм унікальним способом бачення світу, своєю рушійною силою
              та своїми викликами.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-yellow-600 mr-2" />
                Як пройти тест:
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Прочитайте та відповідайте на тест самостійно</strong> – не питаючи поради в інших</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Не думайте занадто довго</strong> – прислухайтеся до свого безпосереднього внутрішнього відчуття</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Відповідайте, яким ви Є</strong> – а не ким ви хотіли б бути. Ви не можете відповісти неправильно</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Думайте про своє життя в цілому</strong> – не лише про ваш робочий контекст. Ви – це і ваше робоче, і приватне життя</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Будьте чесними</strong> і думайте про те, якими ви є/були більшу частину свого життя – навіть якщо ви пройшли саморозвиток</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Оберіть час</strong>, коли ви зможете пройти тест, не відволікаючись</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Готові розпочати?</h3>
            <p className="text-gray-600 mb-6">Відкрийте свій тип особистості за 10-15 хвилин</p>
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Розпочати Тест
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
