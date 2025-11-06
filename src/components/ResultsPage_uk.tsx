import React from 'react';
// import { ArrowLeft, Award, BarChart3, Printer, Share2 } from 'lucide-react';
import { typeDetails } from '../data/typeDetails';
import TestLogger from '../utils/logger';
import TypeDetailPage from './TypeDetailPage';
import WingTestIntro from './WingTestIntro';
import WingResultsPage from './WingResultsPage';
import { useWingTest } from '../hooks/useWingTest';
import { type1WingQuestions } from '../data/wingQuestions/wingQuestions1';
import { type2WingQuestions } from '../data/wingQuestions/wingQuestions2';
import { type3WingQuestions } from '../data/wingQuestions/wingQuestions3';
import { type4WingQuestions } from '../data/wingQuestions/wingQuestions4';
import { type5WingQuestions } from '../data/wingQuestions/wingQuestions5';
import { type6WingQuestions } from '../data/wingQuestions/wingQuestions6';
import { type7WingQuestions } from '../data/wingQuestions/wingQuestions7';
import { type8WingQuestions } from '../data/wingQuestions/wingQuestions8';
import { type9WingQuestions } from '../data/wingQuestions/wingQuestions9';
import { Award, BarChart3, RefreshCw, Users, Heart, Target, Palette, Search, Shield, Zap, Crown, Compass, Feather, Sparkles, Ambulance as Balance, HandHeart, Lightbulb, Flame, Mountain, TreePine, Waves, Printer, Share2 } from 'lucide-react';
import EnneagramChart from './EnneagramChart';
import WingQuestionCard from './WingQuestionCard';
import { enneagramQuestions } from '../data/questions';
import EnneagramInfoSection from './EnneagramInfoSection';

interface ResultsPageProps {
  results: TestResult[];
  onRestart: () => void;
  wingResult?: WingResult;
  responses?: any[];
}

interface WingResultState {
  result: WingResult;
  testData: any;
}

const typeIcons: Record<string, React.ComponentType<any>> = {
  'Type 1': Target,
  'Type 2': Heart,
  'Type 3': Crown,
  'Type 4': Palette,
  'Type 5': Search,
  'Type 6': Shield,
  'Type 7': Zap,
  'Type 8': Crown,
  'Type 9': Compass
};

const typeDescriptions: Record<string, { title: string; description: string; traits: string[] }> = {
  'Type 1': {
    title: 'Перфекціоніст',
    description: 'Ви принципові, цілеспрямовані та самоконтрольовані. Ви прагнете покращити все і маєте високі стандарти для себе та інших.',
    traits: ['Принциповий', 'Організований', 'Самодисциплінований', 'Критичний', 'Ідеалістичний']
  },
  'Type 2': {
    title: 'Помічник',
    description: 'Ви турботливі, комунікабельні та прихильні. Ви хочете відчувати себе коханими та потрібними і виражаєте свої почуття до інших.',
    traits: ['Турботливий', 'Емпатичний', 'Великодушний', 'Орієнтований на людей', 'Підтримуючий']
  },
  'Type 3': {
    title: 'Орієнтований на досягнення',
    description: 'Ви амбітні, адаптивні та прагнете успіху. Ви намагаєтеся бути найкращими і бажаєте визнання за свої досягнення.',
    traits: ['Цілеспрямований', 'Енергійний', 'Прагматичний', 'Впевнений у собі', 'Конкурентний']
  },
  'Type 4': {
    title: 'Індивідуаліст',
    description: 'Ви творчі, емоційно чесні та особистісні. Ви шукаєте ідентичність і сенс і виражаєте себе через автентичність.',
    traits: ['Креативний', 'Чутливий', 'Інтроспективний', 'Унікальний', 'Виразний']
  },
  'Type 5': {
    title: 'Дослідник',
    description: 'Ви інтенсивні, розумові та сприйнятливі. Ви незалежні та інноваційні, і прагнете зрозуміти світ навколо себе.',
    traits: ['Аналітичний', 'Незалежний', 'Допитливий', 'Об\'єктивний', 'Приватний']
  },
  'Type 6': {
    title: 'Лояліст',
    description: 'Ви віддані, відповідальні та надійні. Ви шукаєте безпеки та підтримки та лояльні до систем і людей.',
    traits: ['Лояльний', 'Відповідальний', 'Обережний', 'Співпрацюючий', 'Надійний']
  },
  'Type 7': {
    title: 'Ентузіаст',
    description: 'Ви спонтанні, різнобічні та оптимістичні. Ви шукаєте нового досвіду та можливостей і постійно рухаєтеся, щоб уникнути болю.',
    traits: ['Оптимістичний', 'Спонтанний', 'Різнобічний', 'Авантюрний', 'Енергійний']
  },
  'Type 8': {
    title: 'Виклик',
    description: 'Ви впевнені в собі, сильні та напористі. Ви захищаєте себе і контролюєте своє оточення, і боретеся за справедливість.',
    traits: ['Сильний', 'Прямий', 'Впевнений у собі', 'Захисний', 'Справедливий']
  },
  'Type 9': {
    title: 'Миротворець',
    description: 'Ви сприймаєте, довіряєте та стабільні. Ви прагнете внутрішнього та зовнішнього миру та шукаєте гармоні у своїх стосунках.',
    traits: ['Мирний', 'Підтримуючий', 'Приймаючий', 'Дипломатичний', 'Стабільний']
  }
};

const ResultsPage: React.FC<ResultsPageProps> = ({ results, onRestart, wingResult, responses }) => {
  const [showDetailPage, setShowDetailPage] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState<string | null>(null);
  const [showWingTest, setShowWingTest] = React.useState(false);
  const [showWingTestIntro, setShowWingTestIntro] = React.useState(false);
  const [wingResults, setWingResults] = React.useState<WingResultState | null>(null);
  const [selfIdentifiedType, setSelfIdentifiedType] = React.useState<string | null>(null);
  const [showReviewAnswers, setShowReviewAnswers] = React.useState(false);
  const [editedResponses, setEditedResponses] = React.useState(responses || []);
  const [currentResults, setCurrentResults] = React.useState(results);

  const topResult = currentResults[0];
  const displayType = selfIdentifiedType || topResult.type;
  const typeInfo = typeDescriptions[displayType];
  const TypeIcon = typeIcons[displayType];
  
  // Print/PDF functionality
  const handlePrint = () => {
    window.print();
  };

  const handleSaveUrl = async () => {
    // Create URL that goes directly to results page with current data
    const params = new URLSearchParams();
    if (responses && responses.length > 0) {
      params.set('r', JSON.stringify(responses));
    }
    if (wingResults) {
      // Add wing results to URL
      const wingResponses = wingResults.testData.questions.map((_, index) => ({
        questionIndex: index,
        selectedWing: index < wingResults.result.primaryScore ? wingResults.result.primaryWing : wingResults.result.secondaryWing
      }));
      params.set('w', JSON.stringify(wingResponses));
    }
    if (selfIdentifiedType) {
      params.set('s', selfIdentifiedType);
    }
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    // Log test completion med alle detaljer
    const logger = TestLogger.getInstance();
    const wingResponses = wingResults ? wingResults.testData.questions.map((_, index) => ({
      questionIndex: index,
      selectedWing: index < wingResults.result.primaryScore ? wingResults.result.primaryWing : wingResults.result.secondaryWing
    })) : undefined;

    await logger.logTestCompletion(
      'url-saved-user@example.com', // Email placeholder for URL-saved results
      results,
      responses || [],
      enneagramQuestions,
      wingResults,
      wingResponses,
      wingResults?.testData.questions
    );

    // Copy URL to clipboard
    try {
      await navigator.clipboard.writeText(url);
      alert('✅ Вашу персональну URL-адресу скопійовано!\n\nЗбережіть цю URL-адресу в безпечному місці – вона містить усі ваші відповіді.\n\nВи завжди можете повернутися до своїх результатів, відкривши це посилання.');
    } catch (error) {
      // Fallback if clipboard access fails
      prompt('Скопіюйте цю URL-адресу та збережіть її в безпечному місці:', url);
    }
  };

  const handleShare = async () => {
    // Create URL for sharing
    const params = new URLSearchParams();
    if (responses && responses.length > 0) {
      params.set('r', JSON.stringify(responses));
    }
    if (wingResults) {
      const wingResponses = wingResults.testData.questions.map((_, index) => ({
        questionIndex: index,
        selectedWing: index < wingResults.result.primaryScore ? wingResults.result.primaryWing : wingResults.result.secondaryWing
      }));
      params.set('w', JSON.stringify(wingResponses));
    }
    if (selfIdentifiedType) {
      params.set('s', selfIdentifiedType);
    }
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    if (navigator.share && navigator.canShare) {
      const shareData = {
        title: 'Мої результати Еннеаграми',
        text: `Я ${topResult.type}: ${typeInfo.title} (${topResult.percentage}% відповідність)`,
        url: url
      };

      try {
        await navigator.share(shareData);
      } catch (error) {
        // User cancelled share or it failed
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(url);
      alert('✅ Посилання скопійовано в буфер обміну!\n\nВставте це посилання в електронний лист, SMS або повідомлення, щоб поділитися своїми результатами.');
    }
  };

  // Get wing test data based on primary type
  const getWingTestData = () => {
    switch (topResult.type) {
      case 'Type 1':
        return type1WingQuestions;
      case 'Type 2':
        return type2WingQuestions;
      case 'Type 3':
        return type3WingQuestions;
      case 'Type 4':
        return type4WingQuestions;
      case 'Type 5':
        return type5WingQuestions;
      case 'Type 6':
        return type6WingQuestions;
      case 'Type 7':
        return type7WingQuestions;
      case 'Type 8':
        return type8WingQuestions;
      case 'Type 9':
        return type9WingQuestions;
      default:
        return type1WingQuestions; // Fallback
    }
  };

  const wingTestData = getWingTestData();
  const {
    currentQuestion: wingQuestion,
    currentQuestionIndex: wingQuestionIndex,
    totalQuestions: wingTotalQuestions,
    isComplete: wingTestComplete,
    answerQuestion: answerWingQuestion,
    goToNextQuestion: goToNextWingQuestion,
    goToPreviousQuestion: goToPreviousWingQuestion,
    canGoNext: canGoNextWing,
    canGoPrevious: canGoPreviousWing,
    calculateWingResults,
    getCurrentResponse: getCurrentWingResponse,
    restart: restartWingTest
  } = useWingTest(wingTestData);

  // Load self-identified type from URL
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selfType = params.get('selfType');
    if (selfType) {
      setSelfIdentifiedType(selfType);
    }
  }, []);

  // Recalculate results when responses change
  const recalculateResults = React.useCallback(() => {
    const typeScores: Record<string, number> = {};
    const typeCounts: Record<string, number> = {};

    enneagramQuestions.forEach(q => {
      if (!q) return;
      if (!typeScores[q.type]) {
        typeScores[q.type] = 0;
        typeCounts[q.type] = 0;
      }
    });

    const getPointsForRating = (rating: number): number => {
      switch (rating) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return 4;
        case 5: return 5;
        default: return 0;
      }
    };

    editedResponses.forEach(response => {
      const question = enneagramQuestions[response.questionIndex];
      if (!question) return;
      typeScores[question.type] += getPointsForRating(response.rating);
      typeCounts[question.type]++;
    });

    const newResults: TestResult[] = Object.entries(typeScores).map(([type, score]) => {
      const maxPossibleScore = typeCounts[type] * 5;
      const percentage = Math.round((score / maxPossibleScore) * 100);

      return {
        type,
        score,
        percentage
      };
    });

    setCurrentResults(newResults.sort((a, b) => b.percentage - a.percentage));
  }, [editedResponses]);

  // Handle answer editing
  const handleEditAnswer = (questionIndex: number, newRating: number) => {
    setEditedResponses(prev => {
      const updated = [...prev];
      const existingIndex = updated.findIndex(r => r.questionIndex === questionIndex);
      if (existingIndex >= 0) {
        updated[existingIndex] = { questionIndex, rating: newRating };
      } else {
        updated.push({ questionIndex, rating: newRating });
      }
      return updated;
    });
  };

  // Recalculate results when edited responses change
  React.useEffect(() => {
    if (editedResponses.length === enneagramQuestions.length) {
      recalculateResults();
    }
  }, [editedResponses, recalculateResults]);

  // Update URL when edited responses change
  React.useEffect(() => {
    if (showReviewAnswers && editedResponses.length > 0) {
      const params = new URLSearchParams();
      params.set('r', JSON.stringify(editedResponses));
      if (wingResults) {
        const wingResponses = wingResults.testData.questions.map((_, index) => ({
          questionIndex: index,
          selectedWing: index < wingResults.result.primaryScore ? wingResults.result.primaryWing : wingResults.result.secondaryWing
        }));
        params.set('w', JSON.stringify(wingResponses));
      }
      if (selfIdentifiedType) {
        params.set('s', selfIdentifiedType);
      }
      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
  }, [editedResponses, showReviewAnswers, wingResults, selfIdentifiedType]);

  // Handle wing test completion
  React.useEffect(() => {
    if (wingTestComplete) {
      const wingResult = calculateWingResults();
      setWingResults({
        result: wingResult,
        testData: wingTestData
      });
      setShowWingTest(false);
    }
  }, [wingTestComplete, calculateWingResults, wingTestData]);

  // Debug function to generate random test results
  const generateRandomResults = (): TestResult[] => {
    const types = Object.keys(typeDescriptions);
    return types.map(type => ({
      type,
      score: Math.floor(Math.random() * 72), // 0-72 points possible
      percentage: Math.floor(Math.random() * 100)
    })).sort((a, b) => b.percentage - a.percentage);
  };

  const showDebugResults = () => {
    const randomResults = generateRandomResults();
    // This would normally navigate to results with random data
    console.log('Random results generated:', randomResults);
    // For now, just reload the page with current results
    window.location.reload();
  };

  const showResponsesDebug = () => {
    // Get responses from localStorage if available
    try {
      const responses = JSON.parse(sessionStorage.getItem('enneagram_responses') || localStorage.getItem('enneagram_responses') || '[]');
      const questions = JSON.parse(sessionStorage.getItem('enneagram_questions') || localStorage.getItem('enneagram_questions') || '[]');
      
      if (responses.length === 0 || questions.length === 0) {
        // Try to get from current test state if available
        console.log('Checking for current test data...');
        console.log('Responses found:', responses.length);
        console.log('Questions found:', questions.length);
        alert('Дані відповідей не знайдено. Спочатку пройдіть тест, щоб побачити дані відповідей.');
        return;
      }
    
      let debugInfo = 'ДЕБАГ ВІДПОВІДЕЙ:\n\n';
      responses.forEach((response: any, index: number) => {
        const question = questions[response.questionIndex];
        if (question) {
          debugInfo += `Запитання ${response.questionIndex + 1} (${question.type}):\n`;
          debugInfo += `"${question.question}"\n`;
          debugInfo += `Відповідь: ${response.rating}/5\n\n`;
        }
      });
    
      // Create a new window to show debug info
      const debugWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes');
      if (debugWindow) {
        debugWindow.document.write(`
          <html>
            <head>
              <title>Test Svar Debug</title>
              <style>
                body { font-family: monospace; white-space: pre-wrap; padding: 20px; line-height: 1.4; }
              </style>
            </head>
            <body>
              ${debugInfo}
            </body>
          </html>
        `);
        debugWindow.document.close();
      } else {
        // Fallback if popup is blocked
        console.log(debugInfo);
        alert('Спливаюче вікно заблоковано. Дивіться консоль для даних відповідей.');
      }
    } catch (error) {
      console.error('Fejl ved indlæsning af svar data:', error);
      alert('Помилка завантаження даних відповідей. Дивіться консоль для деталей.');
    }
  };

  const showAllLogs = () => {
    const logger = TestLogger.getInstance();
    logger.showAllLogsInConsole();
    logger.exportAllLogs(); // Download alle logs som fil
  };
  // Show detail page if selected
  if (showDetailPage && selectedType) {
    const typeDetail = typeDetails[selectedType];
    if (typeDetail) {
      return (
        <TypeDetailPage 
          typeDetail={typeDetail} 
          onStartWingTest={() => {
            setShowDetailPage(false);
            setSelectedType(null);
            setShowWingTestIntro(true);
          }}
          wingResult={selectedType === topResult.type ? wingResults : null}
          onBack={() => {
            setShowDetailPage(false);
            setSelectedType(null);
          }} 
        />
      );
    }
  }

  // Show wing test intro
  if (showWingTestIntro) {
    return (
      <WingTestIntro
        primaryType={topResult.type}
        onStart={() => {
          setShowWingTestIntro(false);
          setShowWingTest(true);
        }}
        onSkip={() => {
          setShowWingTestIntro(false);
        }}
      />
    );
  }

  // Show wing test questions
  if (showWingTest) {
    return (
      <WingQuestionCard
        question={wingQuestion}
        questionNumber={wingQuestionIndex + 1}
        totalQuestions={wingTotalQuestions}
        onAnswer={answerWingQuestion}
        onNext={goToNextWingQuestion}
        onPrevious={goToPreviousWingQuestion}
        canGoNext={canGoNextWing}
        canGoPrevious={canGoPreviousWing}
        currentResponse={getCurrentWingResponse()}
        primaryType={topResult.type}
      />
    );
  }

  // Show review/edit answers view
  if (showReviewAnswers) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Переглянути та редагувати свої відповіді</h2>
                <p className="text-gray-600 mt-1">Ваші результати оновлюються автоматично, коли ви змінюєте відповіді</p>
              </div>
              <button
                onClick={() => setShowReviewAnswers(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Назад до результатів
              </button>
            </div>

            <div className="space-y-6">
              {enneagramQuestions.map((question, index) => {
                const response = editedResponses.find(r => r.questionIndex === index);
                const currentRating = response?.rating;

                return (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-indigo-600">
                        Запитання {index + 1} з {enneagramQuestions.length}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-800 mt-1">{question.question}</h3>
                    </div>

                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(rating => (
                        <button
                          key={rating}
                          onClick={() => handleEditAnswer(index, rating)}
                          className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                            currentRating === rating
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                              : 'border-gray-200 hover:border-indigo-300 text-gray-600'
                          }`}
                        >
                          <div className="text-2xl mb-1">{rating}</div>
                          <div className="text-xs">
                            {rating === 1 && 'Зовсім ні'}
                            {rating === 2 && 'Не дуже добре'}
                            {rating === 3 && 'Приблизно'}
                            {rating === 4 && 'Добре'}
                            {rating === 5 && 'Дуже добре'}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShowReviewAnswers(false)}
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
              >
                Готово - Переглянути оновлені результати
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-4 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Print-only compact header */}
        <div className="print-only hidden print-header">
          <div className="print-type-title">
            {topResult.type}: {typeInfo.title}
          </div>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {topResult.percentage}% match
          </div>
          {wingResults && (
            <div style={{ fontSize: '12px', marginTop: '4px' }}>
              Крила: {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
            </div>
          )}
        </div>
        
        {/* Kruso Logo - diskret placeret */}
        <div className="flex justify-end mb-2 no-print">
        </div>
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Award className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Ваші результати Еннеаграми</h1>
          <p className="text-gray-600">На основі ваших відповідей ми визначили ваш основний тип особистості</p>
        </div>

        {/* Disclaimer about test accuracy */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">🧭</span>
            <h3 className="text-xl font-semibold text-amber-900">
              Ваш тест – це орієнтир, а не остаточний вирок ;-)
            </h3>
          </div>
          <div className="space-y-3 text-amber-900">
            <p>
              Ви щойно пройшли тест Еннеаграми, і він дав вам результат – можливий тип.
              Але важливо пам’ятати, що тест не обов’язково розкриває ваш остаточний тип.
              Це інструмент для роздумів, а не шпаргалка.
            </p>
            <p>
              Еннеаграма – це про самопізнання, і може знадобитися час, щоб знайти той тип,
              який справді відповідає вашим найглибшим моделям.
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-4 italic text-amber-800">
              "Самопізнання – це процес, і він не закінчується знаходженням свого типу.
              Насправді, це лише початок."
            </blockquote>
            <p className="text-sm">
              <em>- Мудрість Еннеаграми, Різо та Хадсон</em>
            </p>
            <p>
              Тест може дати вам вказівку – можливо, 2-3 найбільш імовірні типи – але саме
              через самоспостереження, роздуми та розмови з людьми, які добре вас знають,
              ви поступово зможете відчути, який тип справді підходить.
            </p>
            <div className="bg-white rounded-lg p-4 mt-4 border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Що ви можете зробити зараз
              </h4>
              <ul className="space-y-1 text-sm text-amber-800">
                <li>• Прочитайте про тип, який ви отримали, та сусідні типи</li>
                <li>• Будьте допитливими: Що резонує? Що відчувається чужим?</li>
                <li>• Поговоріть з іншими про ваші моделі та реакції</li>
                <li>• Пам'ятайте: У вас є всі дев'ять типів – але один є вашою "домашньою зоною"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Ви ідентифікували себе як {selfIdentifiedType}</strong>
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  (Результат тесту показав {topResult.type} з {topResult.percentage}% відповідність)
                </p>
              </div>
            )}
            <div className="flex items-center justify-center mb-4">
              {TypeIcon && <TypeIcon className="w-12 h-12 text-indigo-600 mr-3" />}
              <div>
                <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                  {displayType}: {typeInfo.title}
                </h2>
              </div>
            </div>
            {!selfIdentifiedType || selfIdentifiedType === topResult.type ? (
              <>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {topResult.percentage}%
                </div>
                <p className="text-gray-600">відповідність до цього типу</p>
              </>
            ) : (
              <p className="text-gray-600">Ваш самоідентифікований тип</p>
            )}
          </div>

          <div className="mb-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {typeInfo.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {typeInfo.traits.map((trait, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium text-center"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Wing Results Display */}
        {wingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">🪶</span>
              <h2 className="text-2xl font-bold text-gray-800">Ваші крила Еннеаграми</h2>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
              </h3>
              <p className="text-indigo-700 mb-4">
                {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.description}
              </p>
              
              {/* Wing Scores */}
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-3">Ваші бали крил:</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-800">
                        {topResult.type}{wingResults.result.primaryWing}
                      </span>
                      <span className="text-indigo-600 font-semibold">
                        {wingResults.result.primaryScore} відповідей
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${(wingResults.result.primaryScore / (wingResults.result.primaryScore + wingResults.result.secondaryScore)) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-800">
                        {topResult.type}{wingResults.result.secondaryWing}
                      </span>
                      <span className="text-gray-600 font-semibold">
                        {wingResults.result.secondaryScore} відповідей
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-400 h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${(wingResults.result.secondaryScore / (wingResults.result.primaryScore + wingResults.result.secondaryScore)) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>

                {wingResults.result.isBalanced && (
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Збалансовані крила:</strong> Ваші бали дуже близькі, що означає 
                      що ви гнучко використовуєте обидва крила залежно від ситуації.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Detailed description of top result */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 print:shadow-none print:border print-hide-detailed">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Text content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Детальний опис {topResult.type}: {typeInfo.title}
              </h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {getDetailedDescription(topResult.type)}
                </p>
              </div>
            </div>

            {/* Circular chart */}
            <div className="flex-shrink-0 lg:w-80 no-print">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Ваші результати</h4>
                <EnneagramChart results={results} />
              </div>
            </div>
          </div>
        </div>

        {/* Wing Results Section */}
        {wingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">🪶 Ваші крила Еннеаграми</h3>
            </div>
            
            {/* Explanation of what wings mean for this specific type 
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                Що означають крила для вашого {topResult.type}?
              </h4>
              <p className="text-blue-700 mb-4">
                {getWingExplanationForType(topResult.type)}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2">
                    {topResult.type}w{wingResults.testData.wingA.replace('w', '')} - {getWingTitle(topResult.type, wingResults.testData.wingA)}
                  </h5>
                  <p className="text-blue-700">
                    {getWingShortExplanation(topResult.type, wingResults.testData.wingA)}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2">
                    {topResult.type}w{wingResults.testData.wingB.replace('w', '')} - {getWingTitle(topResult.type, wingResults.testData.wingB)}
                  </h5>
                  <p className="text-blue-700">
                    {getWingShortExplanation(topResult.type, wingResults.testData.wingB)}
                  </p>
                </div>
              </div>
            </div>*/}
            
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              {/* Wing Result Icon */}
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-green-100 rounded-lg shadow-md flex items-center justify-center">
                    {React.createElement(
                      getWingIcon(topResult.type, wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing),
                      { className: "w-16 h-16 md:w-20 md:h-20 text-green-600" }
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">ЦЕ ВИ</span>
                    {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
                  </h4>
                  <p className="text-green-700 mb-4 font-medium">
                    <strong>Ваш особистісний профіль:</strong> {' '}
                    {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.description}
                  </p>
                  
                  {/* Wing Scores */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-green-800">
                          {topResult.type}{wingResults.result.primaryWing}
                        </span>
                        <span className="text-green-600 font-semibold">
                          {wingResults.result.primaryScore} відповідей
                        </span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(wingResults.result.primaryScore / (wingResults.result.primaryScore + wingResults.result.secondaryScore)) * 100}%` 
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-green-800">
                          {topResult.type}{wingResults.result.secondaryWing}
                        </span>
                        <span className="text-green-600 font-semibold">
                          {wingResults.result.secondaryScore} відповідей
                        </span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div
                          className="bg-green-400 h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(wingResults.result.secondaryScore / (wingResults.result.primaryScore + wingResults.result.secondaryScore)) * 100}%` 
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {wingResults.result.isBalanced && (
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>Збалансовані крила:</strong> Ви гнучко використовуєте обидва крила залежно від ситуації.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Wing Characteristics */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-green-600 mr-2">👤</span>
                  Ось хто ви – характеристики вашої комбінації крил:
                </h5>
                <div className="grid gap-2">
                  {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.characteristics.map((characteristic: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Ви</strong> {characteristic.toLowerCase()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Всі результати</h3>
          </div>
          
          <div className="mb-4 text-sm text-gray-600">
            <p>Натисніть на кожен тип, щоб дізнатися про нього більше:</p>
          </div>
          
          <div className="space-y-4">
            {currentResults.map((result, index) => {
              const info = typeDescriptions[result.type];
              const ResultIcon = typeIcons[result.type];
              return (
                <TypeResultCard
                  key={result.type}
                  result={result}
                  info={info}
                  index={index}
                  icon={ResultIcon}
                  onSelectTypeForDetail={(type) => {
                    setSelectedType(type);
                    setShowDetailPage(true);
                  }}
                />
              );
            })}
          </div>

          {/* Self-identification section */}
          {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <p className="text-blue-800">
                <strong>Ви ідентифікували себе як {selfIdentifiedType}</strong> (хоча результат тесту показав {topResult.type})
              </p>
            </div>
          )}

          <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Compass className="w-5 h-5 mr-2" />
              Як ви думаєте, інший тип підходить краще?
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              Можливо, прочитавши про різні типи, ви більше ідентифікуєте себе з іншим типом.
              Це абсолютно нормально – тест дає лише вказівку, але лише ви можете дійсно знати, який тип підходить найкраще.
            </p>
            <div className="flex flex-wrap gap-2">
              {currentResults.slice(0, 5).map((result) => (
                <button
                  key={result.type}
                  onClick={() => {
                    if (selfIdentifiedType === result.type) {
                      setSelfIdentifiedType(null);
                    } else {
                      setSelfIdentifiedType(result.type);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selfIdentifiedType === result.type
                      ? 'bg-blue-600 text-white'
                      : result.type === topResult.type
                      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {result.type}
                  {result.type === topResult.type && ' (результат тесту)'}
                  {selfIdentifiedType === result.type && ' ✓'}
                </button>
              ))}
            </div>
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <p className="text-xs text-gray-600 mt-3">
                💡 Ваш обраний тип автоматично зберігається у вашій персональній URL-адресі
              </p>
            )}
          </div>
        </div>

        {/* Enneagram Info Sections - Basic Fears, Desires, Triads and Stress/Growth */}
        <EnneagramInfoSection primaryType={topResult.type} />

        {/* Not to be confused with section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {topResult.type}: {typeInfo.title} - Не плутати з
          </h3>
          <div className="space-y-4">
            {typeDetails[topResult.type].notToBeConfusedWith.map((confusion, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  {confusion.type}
                </h4>
                <p className="text-yellow-700 text-sm">
                  <strong>Різниця:</strong> {confusion.difference}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn more about your type */}
        {!wingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 print-hide-detailed">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Хочете дізнатися більше про свій тип?
            </h3>

            <div>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Отримайте глибоке розуміння того, як ваш тип особистості впливає на ваше робоче життя,
                  ваші стосунки та ваш особистий розвиток.
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🪶 Що таке крила Еннеаграми?</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Ваш {topResult.type} має двох "сусідів" на колі Еннеаграми, які називаються <strong>крилами</strong>.
                    Ці крила змішуються з вашим базовим типом і створюють більш нюансований і точний опис вашої особистості.
                  </p>
                  <p className="text-blue-700 text-sm">
                    {getWingExplanationForType(topResult.type)} Тест на крила займає лише 5 хвилин і дає вам ще більш точний профіль.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setSelectedType(topResult.type);
                    setShowDetailPage(true);
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Дізнайтеся більше про свій {topResult.type}: {typeInfo.title}
                  <span className="ml-2">→</span>
                </button>

                <button
                  onClick={() => setShowWingTestIntro(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Відкрийте для себе свої крила Еннеаграми
                  <span className="ml-2">✨</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-2 border-yellow-200 no-print">
            <h3 className="font-semibold text-yellow-800 mb-3 text-lg">💾 Збережіть свої результати</h3>
            <p className="text-yellow-700 mb-4 text-sm">
              Ми не зберігаємо ваші відповіді в базі даних. Натомість ви можете зберегти персональну URL-адресу,
              яка містить усі ваші відповіді. Таким чином, ви завжди зможете повернутися до своїх результатів!
            </p>
            <button
              onClick={handleSaveUrl}
              className="inline-flex items-center px-8 py-3 bg-yellow-600 text-white font-semibold text-lg rounded-lg hover:bg-yellow-700 transition-colors duration-200 shadow-lg"
            >
              💾 Зберегти мою персональну URL-адресу
            </button>
            <p className="text-yellow-600 text-xs mt-3">
              URL-адреса копіюється автоматично – збережіть її в безпечному місці (наприклад, у ваших закладках)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => setShowReviewAnswers(true)}
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 no-print"
            >
              <Search className="w-5 h-5 mr-2" />
              Переглянути / Редагувати відповіді
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 no-print"
            >
              <Printer className="w-5 h-5 mr-2" />
              Друк / Зберегти як PDF
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 no-print"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Поділитися через електронну пошту/SMS
            </button>
          </div>
          
           {/*<button
            onClick={onRestart}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 no-print"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Tag testen igen
          </button>*/}
          
          {/* Debug links - only visible in development 
          <div className="mt-8 text-center space-x-4 no-print">
            <span
              onClick={showDebugResults}
              className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              title="Test med tilfældige resultater"
            >
              🔧
            </span>
            <span
              onClick={showResponsesDebug}
              className="text-xs text-gray-500 cursor-pointer opacity-30"
              title="Se alle svar (debug)"
            >
              🔍
            </span>
            <span
              onClick={showAllLogs}
              className="text-xs text-gray-500 cursor-pointer opacity-30"
              title="Download alle test logs (kun for udvikler)"
            >
              📊
            </span>
          </div>*/}
        </div>

        {/* Print-only URL section */}
        <div className="print-only hidden bg-gray-50 rounded-lg p-6 border-2 border-gray-300 mt-8" style={{ display: 'none' }}>
          <h3 className="font-bold text-gray-800 mb-3 text-center">💾 Ваша персональна URL-адреса</h3>
          <p className="text-gray-700 text-sm mb-3 text-center">
            Відвідайте цю URL-адресу, щоб повернутися до своїх результатів:
          </p>
          <div className="bg-white p-3 rounded border border-gray-300 break-all text-xs font-mono text-center">
            {(() => {
              const params = new URLSearchParams();
              if (responses && responses.length > 0) {
                params.set('r', JSON.stringify(responses));
              }
              if (wingResults) {
                const wingResponses = wingResults.testData.questions.map((_, index) => ({
                  questionIndex: index,
                  selectedWing: index < wingResults.result.primaryScore ? wingResults.result.primaryWing : wingResults.result.secondaryWing
                }));
                params.set('w', JSON.stringify(wingResponses));
              }
              if (selfIdentifiedType) {
                params.set('s', selfIdentifiedType);
              }
              return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
            })()}
          </div>
          <p className="text-gray-600 text-xs mt-3 text-center">
            Ця URL-адреса містить усі ваші відповіді і завжди відображатиме ваші результати.
          </p>
        </div>

        {/* Start forfra button */}
        <div className="mt-8 text-center no-print">
          <button
            onClick={onRestart}
            className="inline-flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Видалити всі відповіді та почати спочатку
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Це остаточно видалить усі ваші відповіді
          </p>
        </div>
      </div>
    </div>
  );
};

interface TypeResultCardProps {
  result: TestResult;
  info: { title: string; description: string; traits: string[] };
  index: number;
  icon: React.ComponentType<any>;
  onSelectTypeForDetail: (type: string) => void;
}

const TypeResultCard: React.FC<TypeResultCardProps> = ({ result, info, index, icon: Icon, onSelectTypeForDetail }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectTypeForDetail(result.type);
  };
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <Icon className="w-5 h-5 text-gray-600 mr-2" />
            <span className="font-semibold text-gray-800 mr-2">
              {result.type}: {info.title}
            </span>
            <span className="text-sm text-gray-600">
              ({result.percentage}%)
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                index === 0 ? 'bg-indigo-600' : 'bg-gray-400'
              }`}
              style={{ width: `${result.percentage}%` }}
            />
          </div>
        </div>
        <div className="ml-4">
          <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-200">
          <div className="pt-4">
            <p className="text-gray-700 mb-3">{info.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {info.traits.map((trait, traitIndex) => (
                <span
                  key={traitIndex}
                  className="bg-white text-gray-700 px-2 py-1 rounded text-sm border"
                >
                  {trait}
                </span>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                {getDetailedDescription(result.type)}
              </p>
              <button
                onClick={handleLearnMore}
                className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Дізнайтеся більше про {result.type} →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getDetailedDescription = (type: string): string => {
  const descriptions: Record<string, string> = {
    'Type 1': 'Як Перфекціоніст, ви маєте сильний внутрішній компас, який направляє вас до правильного і принципового. Ви маєте природні лідерські якості та здатність бачити, як можна покращити речі. Ваше критичне почуття є як силою, так і викликом – воно допомагає вам надавати високу якість, але також може призвести до самокритики та розчарування. Ви процвітаєте в структурованих середовищах, де цінуються ваші високі стандарти, і ви вносите цілісність та надійний досвід у свою команду.',
    
    'Type 2': 'Як Помічник, ви маєте виняткову здатність відчувати потреби інших і природне прагнення підтримувати оточуючих. Ви створюєте теплі, довірливі стосунки і часто є тим, до кого люди звертаються за порадою та підтримкою. Ваша емпатія та турботлива натура роблять вас цінним командним гравцем, але пам’ятайте також про пріоритет власних потреб. Ви процвітаєте в середовищах, де цінується ваша турбота, і де ви можете зробити реальну різницю для інших.',
    
    'Type 3': 'Як Орієнтований на досягнення, ви маєте природне прагнення до успіху та здатність надихати інших своєю енергією та оптимізмом. Ви цілеспрямовані, адаптивні та добре розумієте, що потрібно для успіху в різних ситуаціях. Ваш інстинкт до конкуренції та фокус на результатах роблять вас сильним виконавцем, але пам’ятайте також про цінність процесу, а не лише кінцевого результату. Ви процвітаєте в динамічних середовищах, де визнаються ваші досягнення.',
    
    'Type 4': 'Як Індивідуаліст, ви приносите творчість, глибину та автентичність у все, що робите. Ви маєте унікальну здатність бачити красу та сенс у тому, що інші можуть пропустити, і ви робите внесок з оригінальними перспективами та інноваційними рішеннями. Ваша чутливість та інтуїція роблять вас цінним радником та творчою силою. Ви найкраще процвітаєте в середовищах, де цінується ваша індивідуальність, і де ви маєте свободу виражати себе автентично.',
    
    'Type 5': 'Як Дослідник, ви приносите глибину, аналіз та незалежне мислення у свою команду. Ви маєте природну здатність розуміти складні системи та пропонувати продумані, об\'єктивні рішення. Ваше дослідження та експертиза є безцінними, і ви вносите стабільність та надійні знання. Ви процвітаєте в середовищах, де маєте час для глибоких роздумів, і де ваша експертиза поважається та використовується конструктивно.',
    
    'Type 6': 'Як Лояліст, ви є надійним та відданим командним гравцем із сильним почуттям відповідальності та лояльності. Ви маєте природну здатність передбачати проблеми та планувати різні сценарії, що робить вас цінним оцінювачем ризиків та вирішувачем проблем. Ваша лояльність та відданість створюють міцні, тривалі стосунки, і ви вносите стабільність та довіру у свою команду.',
    
    'Type 7': 'Як Ентузіаст, ви приносите енергію, творчість та оптимізм у всі ситуації. Ви маєте природну здатність бачити можливості та надихати інших своїм ентузіазмом. Ваша різнобічність та адаптивність роблять вас цінним новатором та вирішувачем проблем. Ви процвітаєте в динамічних середовищах, де можете досліджувати нові ідеї та працювати над різними проектами одночасно.',
    
    'Type 8': 'Як Виклик, ви приносите силу, рішучість та захисне лідерство у свою команду. Ви маєте природну здатність брати контроль у складних ситуаціях і боротися за те, у що вірите. Ваш прямий стиль спілкування та фокус на справедливості роблять вас сильним захисником та лідером. Ви процвітаєте в середовищах, де можете брати на себе відповідальність і робити реальні зміни.',
    
    'Type 9': 'Як Миротворець, ви приносите стабільність, дипломатію та природну здатність бачити всі сторони питання. У вас є особливий дар створювати гармонію та допомагати іншим знаходити спільну мову. Ваша спокійна присутність та здатність слухати роблять вас цінним посередником та командним гравцем. Ви процвітаєте в підтримуючих середовищах, де цінується ваш дипломатичний підхід.'
  };
  
  return descriptions[type] || 'Опис недоступний.';
};

// Helper functions that need to be implemented
const getWingExplanationForType = (type: string): string => {
  // Implementation needed
  return `Для ${type} крила означають...`;
};

const getWingTitle = (type: string, wing: string): string => {
  // Implementation needed
  return `${type}${wing} заголовок`;
};

const getWingShortExplanation = (type: string, wing: string): string => {
  // Implementation needed
  return `Коротке пояснення ${type}${wing}`;
};

const getWingIcon = (type: string, wing: string): React.ComponentType<any> => {
  // Implementation needed
  return Target; // Default icon
};

const sendCompleteResultsEmail = (email: string, results: TestResult[], wingResults: WingResultState) => {
  // Implementation needed
  console.log('Sending email to:', email);
};

export default ResultsPage;

export const saveResults = (results: TestResult[], email: string) => {
  // Placeholder implementation - log to console for now
  console.log('Saving results for email:', email);
  console.log('Results:', results);
  // TODO: Implement actual saving mechanism (e.g., send to backend)
};
