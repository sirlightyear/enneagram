import React from 'react';
import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { EnneagramQuestion } from '../types/enneagram';

interface QuestionCardProps {
  question: EnneagramQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (rating: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  currentRating?: number;
  language?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  currentRating,
  language = 'da'
}) => {
  const [showExamples, setShowExamples] = React.useState(false);

  // Handle Enter key press
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && canGoNext) {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [canGoNext, onNext]);

  const getRatings = () => {
    switch (language) {
      case 'en':
        return [
          { value: 1, label: 'Does not fit at all' },
          { value: 2, label: 'Does not fit very well' },
          { value: 3, label: 'Fits somewhat' },
          { value: 4, label: 'Fits well' },
          { value: 5, label: 'Fits very well' }
        ];
      case 'de':
        return [
          { value: 1, label: 'Passt überhaupt nicht' },
          { value: 2, label: 'Passt nicht besonders gut' },
          { value: 3, label: 'Passt einigermaßen' },
          { value: 4, label: 'Passt gut' },
          { value: 5, label: 'Passt sehr gut' }
        ];
      case 'se':
        return [
          { value: 1, label: 'Stämmer inte alls' },
          { value: 2, label: 'Stämmer inte särskilt bra' },
          { value: 3, label: 'Stämmer ganska bra' },
          { value: 4, label: 'Stämmer bra' },
          { value: 5, label: 'Stämmer mycket bra' }
        ];
      case 'nl':
        return [
          { value: 1, label: 'Past helemaal niet' },
          { value: 2, label: 'Past niet erg goed' },
          { value: 3, label: 'Past enigszins' },
          { value: 4, label: 'Past goed' },
          { value: 5, label: 'Past heel goed' }
        ];
      case 'uk':
        return [
          { value: 1, label: 'Зовсім не підходить' },
          { value: 2, label: 'Не дуже підходить' },
          { value: 3, label: 'Підходить більш-менш' },
          { value: 4, label: 'Підходить добре' },
          { value: 5, label: 'Підходить дуже добре' }
        ];
      default:
        return [
          { value: 1, label: 'Passer slet ikke' },
          { value: 2, label: 'Passer ikke særlig godt' },
          { value: 3, label: 'Passer nogenlunde' },
          { value: 4, label: 'Passer godt' },
          { value: 5, label: 'Passer meget godt' }
        ];
    }
  };

  const ratings = getRatings();

  const getTexts = () => {
    switch (language) {
      case 'en':
        return {
          questionOf: 'Question',
          of: 'of',
          howMuchFits: 'How much does this fit you?',
          showExamples: 'Show examples',
          hideExamples: 'Hide examples',
          previous: 'Previous',
          next: 'Next',
          finish: 'Finish'
        };
      case 'de':
        return {
          questionOf: 'Frage',
          of: 'von',
          howMuchFits: 'Wie sehr passt das auf Sie?',
          showExamples: 'Beispiele anzeigen',
          hideExamples: 'Beispiele ausblenden',
          previous: 'Zurück',
          next: 'Weiter',
          finish: 'Fertig'
        };
      case 'se':
        return {
          questionOf: 'Fråga',
          of: 'av',
          howMuchFits: 'Hur mycket stämmer detta på dig?',
          showExamples: 'Visa exempel',
          hideExamples: 'Dölj exempel',
          previous: 'Föregående',
          next: 'Nästa',
          finish: 'Klar'
        };
      case 'nl':
        return {
          questionOf: 'Vraag',
          of: 'van',
          howMuchFits: 'Hoeveel past dit bij jou?',
          showExamples: 'Toon voorbeelden',
          hideExamples: 'Verberg voorbeelden',
          previous: 'Vorige',
          next: 'Volgende',
          finish: 'Voltooien'
        };
      case 'uk':
        return {
          questionOf: 'Питання',
          of: 'з',
          howMuchFits: 'Наскільки це підходить вам?',
          showExamples: 'Показати приклади',
          hideExamples: 'Сховати приклади',
          previous: 'Назад',
          next: 'Далі',
          finish: 'Завершити'
        };
      default:
        return {
          questionOf: 'Spørgsmål',
          of: 'af',
          howMuchFits: 'Hvor meget passer dette på dig?',
          showExamples: 'Se eksempler på hvad der menes',
          hideExamples: 'Skjul eksempler',
          previous: 'Forrige',
          next: 'Næste',
          finish: 'Afslut'
        };
    }
  };

  const texts = getTexts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-4 px-4">
      {/* Kruso Logo */}
      <div className="pb-4">
        <div className="flex justify-center">
            <img src="/KrusoPeople4.png" alt="Kruso Compass" className="w-15 h-auto" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-indigo-600">
            {texts.questionOf} {questionNumber} {texts.of} {totalQuestions}
          </span>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {question.question}
        </h2>
        
        <button
          onClick={() => setShowExamples(!showExamples)}
          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 mb-4"
        >
          <HelpCircle className="w-4 h-4 mr-1" />
          {showExamples ? texts.hideExamples : texts.showExamples}
        </button>
        
        {showExamples && (
          <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-indigo-800 mb-2">
              {question.question}
            </p>
           {/* <p className="text-indigo-700 text-sm space-y-1">
              Eksempler på noget, du kunne have <b>lyst</b> til at gøre:<br/><br />
            </p>*/}
            <ul className="text-indigo-700 text-sm space-y-1">
              <li>• {question.example1}</li>
              <li>• {question.example2}</li>
              <li>• {question.example3}</li>
            </ul>
          </div>
        )}
      </div>

      <div className="mb-8">
        <p className="text-sm font-medium text-gray-700 mb-6">
          {texts.howMuchFits}
        </p>
        
        <div className="space-y-3">
          {ratings.map((rating) => (
            <button
              key={rating.value}
              onClick={() => onAnswer(rating.value)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 ${
                currentRating === rating.value
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-gray-200 bg-white text-gray-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{rating.label}</span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  currentRating === rating.value
                    ? 'border-indigo-500 bg-indigo-500'
                    : 'border-gray-300'
                }`}>
                  {currentRating === rating.value && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 sticky bottom-0 bg-white pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:static md:pb-0">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
            canGoPrevious
              ? 'text-indigo-600 hover:bg-indigo-50 border border-indigo-200'
              : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          {texts.previous}
        </button>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${
            canGoNext
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {questionNumber === totalQuestions ? texts.finish : texts.next}
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default QuestionCard;