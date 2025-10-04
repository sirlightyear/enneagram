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
  currentRating
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

  const ratings = [
    { value: 1, label: 'Passer slet ikke' },
    { value: 2, label: 'Passer ikke særlig godt' },
    { value: 3, label: 'Passer nogenlunde' },
    { value: 4, label: 'Passer godt' },
    { value: 5, label: 'Passer meget godt' }
  ];

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
            Spørgsmål {questionNumber} af {totalQuestions}
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
          {showExamples ? 'Skjul eksempler' : 'Se eksempler på hvad der menes'}
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
          Hvor meget passer dette på dig?
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
          Forrige
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
          {questionNumber === totalQuestions ? 'Afslut test' : 'Næste'}
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default QuestionCard;