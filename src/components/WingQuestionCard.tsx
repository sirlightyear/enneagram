import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WingQuestion } from '../types/wings';

interface WingQuestionCardProps {
  question: WingQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedWing: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  currentResponse?: string;
  primaryType: string;
}

const WingQuestionCard: React.FC<WingQuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  currentResponse,
  primaryType
}) => {
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
              Vinge-spørgsmål {questionNumber} af {totalQuestions} for {primaryType}
            </span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {question.question}
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          <button
            onClick={() => onAnswer(question.optionA.wing)}
            className={`w-full p-6 text-left rounded-lg border-2 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 ${
              currentResponse === question.optionA.wing
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 bg-white text-gray-700'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="font-medium mb-2">{question.optionA.text}</div>
                <div className="text-sm text-gray-600">{question.optionA.description}</div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-4 flex-shrink-0 ${
                currentResponse === question.optionA.wing
                  ? 'border-indigo-500 bg-indigo-500'
                  : 'border-gray-300'
              }`}>
                {currentResponse === question.optionA.wing && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>
          </button>

          <button
            onClick={() => onAnswer(question.optionB.wing)}
            className={`w-full p-6 text-left rounded-lg border-2 transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50 ${
              currentResponse === question.optionB.wing
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 bg-white text-gray-700'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="font-medium mb-2">{question.optionB.text}</div>
                <div className="text-sm text-gray-600">{question.optionB.description}</div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-4 flex-shrink-0 ${
                currentResponse === question.optionB.wing
                  ? 'border-indigo-500 bg-indigo-500'
                  : 'border-gray-300'
              }`}>
                {currentResponse === question.optionB.wing && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>
          </button>
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
            {questionNumber === totalQuestions ? 'Se mine vinger' : 'Næste'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WingQuestionCard;