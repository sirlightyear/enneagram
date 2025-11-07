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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Хочете дізнатися більше про Ваш {primaryType}?</h1>
            <p className="text-gray-600 text-lg">Відкрийте свої крила Еннеаграми для ще глибшого розуміння</p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Що таке крила Еннеаграми?</h2>
            <div className="space-y-4 text-indigo-700">
              <p>
                В Еннеаграмі кожен тип має два сусідні типи – які називаються **крилами**. Ваше крило – це **не додатковий тип**,
                яким Ви також є, а **нюанс**, що забарвлює Ваш основний тип. Більшість людей мають одне домінуюче крило, але ми маємо
                доступ до обох крил.
              </p>
              <p>
                Одне крило може бути більш розвиненим, ніж інше, але завдяки усвідомленості та особистісному розвитку ми можемо інтегрувати якості
                з обох сторін. Тому йдеться не про те, щоб "знайти своє крило" як щось фіксоване, а про те, щоб **виявити, як Ваші крила
                впливають на Вашу особистість** – і як Ви можете з ними працювати.
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">Для Вашого {primaryType}:</h3>
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
                Як {primaryType}, Ви можете бути під впливом обох сусідніх типів, але зазвичай
                одне крило буде більш домінуючим, ніж інше.
              </p>

              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">Чого Ви можете очікувати?</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 10 запитань, які порівнюють, як Ви використовуєте свої два крила</li>
                  <li>• Детальний опис Вашого домінуючого крила</li>
                  <li>• Розуміння того, як крила нюансують Вашу особистість {primaryType}</li>
                  <li>• Займе лише 3-5 хвилин для проходження</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Так, давайте відкриємо мої крила!
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            
            <button
              onClick={onSkip}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-700 font-semibold text-lg rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              Ні, дякую, я закінчив
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Ви завжди можете повернутися і пройти тест на крила пізніше
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper functions to explain wings for each type (Danish to Ukrainian translation)
const getWingExplanation = (type: string): string => {
  const explanations: Record<string, string> = {
    // Bemærk: Type-navne er oversat til ukrainsk for kontekst:
    // 1: Perfektionist -> Перфекціоніст, 2: Hjælper -> Помічник, 3: Præstationsorienteret -> Досягач, 4: Individualist -> Індивідуаліст, 
    // 5: Undersøger -> Дослідник, 6: Loyalist -> Лояліст, 7: Entusiast -> Ентузіаст, 8: Udfordrer -> Виклик, 9: Fredsmager -> Миротворець
    'Type 1': 'Як Перфекціоніст, Ви можете бути більш дипломатичним і мирним (під впливом Типу 9) або більш корисним і орієнтованим на стосунки (під впливом Типу 2).',
    'Type 2': 'Як Помічник, Ви можете бути більш принциповим і структурованим (під впливом Типу 1) або більш амбітним і орієнтованим на досягнення (під впливом Типу 3).',
    'Type 3': 'Як Досягач, Ви можете бути більш корисним і чарівним (під впливом Типу 2) або більш креативним та індивідуалістичним (під впливом Типу 4).',
    'Type 4': 'Як Індивідуаліст, Ви можете бути більш амбітним і товариським (під впливом Типу 3) або більш замкнутим та аналітичним (під впливом Типу 5).',
    'Type 5': 'Як Дослідник, Ви можете бути більш креативним та емоційним (під впливом Типу 4) або більш лояльним і орієнтованим на безпеку (під впливом Типу 6).',
    'Type 6': 'Як Лояліст, Ви можете бути більш аналітичним і замкнутим (під впливом Типу 5) або більш оптимістичним та авантюрним (під впливом Типу 7).',
    'Type 7': 'Як Ентузіаст, Ви можете бути більш лояльним і відповідальним (під впливом Типу 6) або більш сильним і напористим (під впливом Типу 8).',
    'Type 8': 'Як Виклик, Ви можете бути більш енергійним та оптимістичним (під впливом Типу 7) або більш мирним і дипломатичним (під впливом Типу 9).',
    'Type 9': 'Як Миротворець, Ви можете бути більш сильним і напористим (під впливом Типу 8) або більш принциповим і структурованим (під впливом Типу 1).'
  };
  return explanations[type] || '';
};

const getWingNames = (type: string) => {
  const wings: Record<string, {wingA: string, wingB: string}> = {
    // Oversatte vingenavne til ukrainsk
    'Type 1': {wingA: 'Тип 1w9 - Ідеалістичний Миротворець', wingB: 'Тип 1w2 - Корисний Перфекціоніст'},
    'Type 2': {wingA: 'Тип 2w1 - Принциповий Помічник', wingB: 'Тип 2w3 - Амбітний Помічник'},
    'Type 3': {wingA: 'Тип 3w2 - Чарівний Виконавець', wingB: 'Тип 3w4 - Професійний Індивідуаліст'},
    'Type 4': {wingA: 'Тип 4w3 - Аристократичний Індивідуаліст', wingB: 'Тип 4w5 - Богемний Індивідуаліст'},
    'Type 5': {wingA: 'Тип 5w4 - Іконоборчий Мислитель', wingB: 'Тип 5w6 - Мислитель-Проблеморішальник'},
    'Type 6': {wingA: 'Тип 6w5 - Обережний Лояліст', wingB: 'Тип 6w7 - Товариський Лояліст'},
    'Type 7': {wingA: 'Тип 7w6 - Товариський Ентузіаст', wingB: 'Тип 7w8 - Реалістичний Ентузіаст'},
    'Type 8': {wingA: 'Тип 8w7 - Агресивний Ентузіаст', wingB: 'Тип 8w9 - Схожий на Скелю Виклик'},
    'Type 9': {wingA: 'Тип 9w8 - Арбітр', wingB: 'Тип 9w1 - Мрійник'}
  };
  return wings[type] || {wingA: '', wingB: ''};
};

const getWingShortDescription = (type: string, wing: 'A' | 'B'): string => {
  const descriptions: Record<string, {A: string, B: string}> = {
    // Oversatte korte beskrivelser til ukrainsk
    'Type 1': {A: 'Більш дипломатичний і мирний підхід до досконалості', B: 'Більш корисний і орієнтований на стосунки перфекціоніст'},
    'Type 2': {A: 'Помічник із високими принципами та структурою', B: 'Помічник з амбіціями та зосередженістю на успіху'},
    'Type 3': {A: 'Чарівний виконавець, який допомагає іншим', B: 'Креативний виконавець із зосередженістю на автентичності'},
    'Type 4': {A: 'Товариський індивідуаліст з амбіціями', B: 'Замкнутий індивідуаліст із глибиною'},
    'Type 5': {A: 'Креативний мислитель з емоційною глибиною', B: 'Практичний мислитель із зосередженістю на безпеці'},
    'Type 6': {A: 'Обережний лояліст з аналітичним підходом', B: 'Оптимістичний лояліст з любов’ю до пригод'},
    'Type 7': {A: 'Відповідальний ентузіаст із лояльністю', B: 'Сильний ентузіаст із напористістю'},
    'Type 8': {A: 'Енергійний виклик з оптимізмом', B: 'Спокійний виклик із дипломатичним підходом'},
    'Type 9': {A: 'Сильний миротворець із напористістю', B: 'Принциповий миротворець зі структурою'}
  };
  return descriptions[type]?.[wing] || '';
};
export default WingTestIntro;
