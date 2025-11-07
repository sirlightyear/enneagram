import LanguageSelector from './LanguageSelector';
import React from 'react';
// import { ArrowLeft, Award, BarChart3, Printer, Share2 } from 'lucide-react';
import { typeDetails } from '../data/typeDetails_en';
import TestLogger from '../utils/logger';
import TypeDetailPage from './TypeDetailPage';
import TypeDetailPage_en from './TypeDetailPage_en';
import WingTestIntro_en from './WingTestIntro_en';
import WingTestIntro from './WingTestIntro';
import WingResultsPage from './WingResultsPage';
import { useWingTest } from '../hooks/useWingTest';
import { type1WingQuestions } from '../data/wingQuestions/wingQuestions1_en';
import { type2WingQuestions } from '../data/wingQuestions/wingQuestions2_en';
import { type3WingQuestions } from '../data/wingQuestions/wingQuestions3_en';
import { type4WingQuestions } from '../data/wingQuestions/wingQuestions4_en';
import { type5WingQuestions } from '../data/wingQuestions/wingQuestions5_en';
import { type6WingQuestions } from '../data/wingQuestions/wingQuestions6_en';
import { type7WingQuestions } from '../data/wingQuestions/wingQuestions7_en';
import { type8WingQuestions } from '../data/wingQuestions/wingQuestions8_en';
import { type9WingQuestions } from '../data/wingQuestions/wingQuestions9_en';
import { Award, BarChart3, RefreshCw, Users, Heart, Target, Palette, Search, Shield, Zap, Crown, Compass, Feather, Sparkles, Ambulance as Balance, HandHeart, Lightbulb, Flame, Mountain, TreePine, Waves, Printer, Share2 } from 'lucide-react';
import EnneagramChart from './EnneagramChart';
import WingQuestionCard from './WingQuestionCard';
import { enneagramQuestions } from '../data/questions_en';
import EnneagramInfoSection_en from './EnneagramInfoSection_en';

interface ResultsPageProps {
  language: string;
  onLanguageChange: (language: string) => void;
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
    title: 'The Perfectionist',
    description: 'You are principled, purposeful, and self-controlled. You strive to improve everything and have high standards for yourself and others.',
    traits: ['Principled', 'Organized', 'Self-Disciplined', 'Critical', 'Idealistic']
  },
  'Type 2': {
    title: 'The Helper',
    description: 'You are caring, interpersonal, and possessive. You want to feel loved and desired and express your feelings for others.',
    traits: ['Caring', 'Empathetic', 'Generous', 'People-Oriented', 'Supportive']
  },
  'Type 3': {
    title: 'The Achiever',
    description: 'You are ambitious, adaptable, and driven by success. You strive to be the best and seek recognition for your achievements.',
    traits: ['Goal-Oriented', 'Energetic', 'Pragmatic', 'Self-Confident', 'Competitive']
  },
  'Type 4': {
    title: 'The Individualist',
    description: 'You are creative, emotionally honest, and personal. You seek identity and meaning and express yourself through authenticity.',
    traits: ['Creative', 'Sensitive', 'Introspective', 'Unique', 'Expressive']
  },
  'Type 5': {
    title: 'The Investigator',
    description: 'You are intense, cerebral, and perceptive. You are independent and innovative, and you seek to understand the world around you.',
    traits: ['Analytical', 'Independent', 'Curious', 'Objective', 'Private']
  },
  'Type 6': {
    title: 'The Loyalist',
    description: 'You are committed, responsible, and trustworthy. You seek security and support and are loyal to systems and people.',
    traits: ['Loyal', 'Responsible', 'Cautious', 'Cooperative', 'Reliable']
  },
  'Type 7': {
    title: 'The Enthusiast',
    description: 'You are spontaneous, versatile, and optimistic. You seek new experiences and opportunities and keep busy to avoid pain.',
    traits: ['Optimistic', 'Spontaneous', 'Versatile', 'Adventurous', 'Energetic']
  },
  'Type 8': {
    title: 'The Challenger',
    description: 'You are self-confident, strong, and assertive. You protect yourself and control your environment, and you fight for justice.',
    traits: ['Strong', 'Direct', 'Self-Confident', 'Protective', 'Just']
  },
  'Type 9': {
    title: 'The Peacemaker',
    description: 'You are accepting, trusting, and stable. You desire internal and external peace and seek harmony in your relationships.',
    traits: ['Peaceful', 'Supportive', 'Accepting', 'Diplomatic', 'Stable']
  }
};

const ResultsPage: React.FC<ResultsPageProps> = ({ results, onRestart, wingResult, responses, language, onLanguageChange }) => {
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
      alert('✅ Your personal URL has been copied!\n\nSave this URL in a safe place - it contains all your answers.\n\nYou can always return to your results by opening this link.');
    } catch (error) {
      // Fallback if clipboard access fails
      prompt('Copy this URL and save it in a safe place:', url);
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
        title: 'My Enneagram Results',
        text: `I am ${topResult.type}: ${typeInfo.title} (${topResult.percentage}% match)`,
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
      alert('Link copied to clipboard!\n\nPaste this link in an email, text message, or chat to share your results.');
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
        alert('No response data found. Take the test first to see response data.');
        return;
      }
    
      let debugInfo = 'RESPONSES DEBUG:\n\n';
      responses.forEach((response: any, index: number) => {
        const question = questions[response.questionIndex];
        if (question) {
          debugInfo += `Question ${response.questionIndex + 1} (${question.type}):\n`;
          debugInfo += `"${question.question}"\n`;
          debugInfo += `Response: ${response.rating}/5\n\n`;
        }
      });
    
      // Create a new window to show debug info
      const debugWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes');
      if (debugWindow) {
        debugWindow.document.write(`
          <html>
            <head>
              <title>Test Responses Debug</title>
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
        alert('Popup was blocked. See the console for response data.');
      }
    } catch (error) {
      console.error('Error loading response data:', error);
      alert('Error loading response data. See console for details.');
    }
  };

  const showAllLogs = () => {
    const logger = TestLogger.getInstance();
    logger.showAllLogsInConsole();
    logger.exportAllLogs(); // Download all logs as file
  };
  // Show detail page if selected
  if (showDetailPage && selectedType) {
    const typeDetail = typeDetails[selectedType];
    if (typeDetail) {
      return (
        <TypeDetailPage_en typeDetail={typeDetail} 
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
      <WingTestIntro_en primaryType={topResult.type}
        language={language}
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
        language={language}
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
                <h2 className="text-2xl font-bold text-gray-800">Review and Edit Your Responses</h2>
                <p className="text-gray-600 mt-1">Your results update automatically when you change responses</p>
              </div>
              <button
                onClick={() => setShowReviewAnswers(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Back to Results
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
                        Question {index + 1} of {enneagramQuestions.length}
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
                            {rating === 1 && 'Not at all'}
                            {rating === 2 && 'Not very well'}
                            {rating === 3 && 'Moderately'}
                            {rating === 4 && 'Well'}
                            {rating === 5 && 'Very well'}
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
                Done - See Updated Results
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
              Wings: {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
            </div>
          )}
        </div>
        
                {/* Language Selector */}
        <div className="flex justify-end mb-2 no-print">
          <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
        </div>
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Award className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Enneagram Results</h1>
          <p className="text-gray-600">Based on your responses, we have identified your primary personality type</p>
        </div>

        {/* Disclaimer about test accuracy */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">🧭</span>
            <h3 className="text-xl font-semibold text-amber-900">
              Your test is a marker – not a final verdict ;-)
            </h3>
          </div>
          <div className="space-y-3 text-amber-900">
            <p>
              You have now taken an Enneagram test, and it has given you a result – a possible type.
              But it is important to remember that the test does not necessarily reveal your final type.
              It is a tool for reflection, not an answer key.
            </p>
            <p>
              The Enneagram is about self-awareness, and it can take time to find the type
              that truly matches your deepest patterns.
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-4 italic text-amber-800">
              "Self-discovery is a process – and it doesn't end with finding your type.
              In fact, it's only the beginning."
            </blockquote>
            <p className="text-sm">
              <em>- The Wisdom of the Enneagram, Riso & Hudson</em>
            </p>
            <p>
              The test can give you an indication – maybe the 2-3 most likely types – but it is
              through self-observation, reflection, and conversation with people who know you well that
              you will gradually be able to feel which type truly fits.
            </p>
            <div className="bg-white rounded-lg p-4 mt-4 border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                What you can do now
              </h4>
              <ul className="space-y-1 text-sm text-amber-800">
                <li>• Read about the type you got – and the neighboring types</li>
                <li>• Be curious: What resonates? What feels foreign?</li>
                <li>• Talk to others about your patterns and reactions</li>
                <li>• Remember: You have all nine types within you – but one is your "home base"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>You have self-identified as {selfIdentifiedType}</strong>
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  (Test result showed {topResult.type} with {topResult.percentage}% match)
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
                <p className="text-gray-600">match with this type</p>
              </>
            ) : (
              <p className="text-gray-600">Your self-identified type</p>
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
              <h2 className="text-2xl font-bold text-gray-800">Your Enneagram Wings</h2>
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
                <h4 className="font-semibold text-indigo-800 mb-3">Your Wing Scores:</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-800">
                        {topResult.type}{wingResults.result.primaryWing}
                      </span>
                      <span className="text-indigo-600 font-semibold">
                        {wingResults.result.primaryScore} responses
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
                        {wingResults.result.secondaryScore} responses
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
                      <strong>Balanced Wings:</strong> Your scores are very close, meaning 
                      you use both wings flexibly depending on the situation.
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
            Detailed description of {topResult.type}: {typeInfo.title}
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
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Your Results</h4>
                <EnneagramChart results={results} language={language} />
              </div>
            </div>
          </div>
        </div>

        {/* Wing Results Section */}
        {wingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">🪶 Your Enneagram Wings</h3>
            </div>
            
            {/* Explanation of what wings mean for this specific type 
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                What do wings mean for your {topResult.type}?
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
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">IT'S YOU</span>
                    {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
                  </h4>
                  <p className="text-green-700 mb-4 font-medium">
                    <strong>Your Personality Profile:</strong> {' '}
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
                          {wingResults.result.primaryScore} responses
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
                          {wingResults.result.secondaryScore} responses
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
                        <strong>Balanced Wings:</strong> You use both wings flexibly depending on the situation.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Wing Characteristics */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-green-600 mr-2">👤</span>
                  This is how you are - characteristics of your wing combination:
                </h5>
                <div className="grid gap-2">
                  {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.characteristics.map((characteristic: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>You</strong> {characteristic.toLowerCase()}</span>
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
            <h3 className="text-xl font-semibold text-gray-800">All Results</h3>
          </div>
          
          <div className="mb-4 text-sm text-gray-600">
            <p>Click on each type to read more about it:</p>
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
                <strong>You have self-identified as {selfIdentifiedType}</strong> (even though the test result showed {topResult.type})
              </p>
            </div>
          )}

          <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Compass className="w-5 h-5 mr-2" />
              Do you think another type fits better?
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              After reading about the different types, you might identify more with another type.
              This is completely normal – the test gives an indication, but only you can truly know which type fits best.
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
                  {result.type === topResult.type && ' (test result)'}
                  {selfIdentifiedType === result.type && ' ✓'}
                </button>
              ))}
            </div>
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <p className="text-xs text-gray-600 mt-3">
                💡 Your selected type is automatically saved in your personal URL
              </p>
            )}
          </div>
        </div>

        {/* Enneagram Info Sections - Basic Fears, Desires, Triads and Stress/Growth */}
        <EnneagramInfoSection_en primaryType={topResult.type} />

        {/* Not to be confused with section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {topResult.type}: {typeInfo.title} - Not to be Confused With
          </h3>
          <div className="space-y-4">
            {typeDetails[topResult.type].notToBeConfusedWith.map((confusion, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  {confusion.type}
                </h4>
                <p className="text-yellow-700 text-sm">
                  <strong>The Difference:</strong> {confusion.difference}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn more about your type */}
        {!wingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 print-hide-detailed">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Want to know more about your type?
            </h3>

            <div>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Get an in-depth understanding of how your personality type affects your work life,
                  your relationships and your personal development.
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🪶 What are Enneagram Wings?</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Your {topResult.type} has two "neighbors" on the Enneagram circle, called <strong>wings</strong>.
                    These wings blend with your core type and create a more nuanced and precise description of your personality.
                  </p>
                  <p className="text-blue-700 text-sm">
                    {getWingExplanationForType(topResult.type)} The Wing test only takes 5 minutes and gives you an even more precise profile.
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
                  Learn more about your {topResult.type}: {typeInfo.title}
                  <span className="ml-2">→</span>
                </button>

                <button
                  onClick={() => setShowWingTestIntro(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Discover Your Enneagram Wings
                  <span className="ml-2">✨</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-2 border-yellow-200 no-print">
            <h3 className="font-semibold text-yellow-800 mb-3 text-lg">💾 Save Your Results</h3>
            <p className="text-yellow-700 mb-4 text-sm">
              We do not save your responses in a database. Instead, you can save a personal URL
              that contains all your responses. That way, you can always return to your results!
            </p>
            <button
              onClick={handleSaveUrl}
              className="inline-flex items-center px-8 py-3 bg-yellow-600 text-white font-semibold text-lg rounded-lg hover:bg-yellow-700 transition-colors duration-200 shadow-lg"
            >
              💾 Save My Personal URL
            </button>
            <p className="text-yellow-600 text-xs mt-3">
              The URL is copied automatically - save it in a safe place (e.g., in your bookmarks)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => setShowReviewAnswers(true)}
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 no-print"
            >
              <Search className="w-5 h-5 mr-2" />
              Review / Edit Responses
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 no-print"
            >
              <Printer className="w-5 h-5 mr-2" />
              Print / Save as PDF
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 no-print"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share via Email/SMS
            </button>
          </div>
          
           {/*<button
            onClick={onRestart}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 no-print"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Take the test again
          </button>*/}
          
          {/* Debug links - only visible in development 
          <div className="mt-8 text-center space-x-4 no-print">
            <span
              onClick={showDebugResults}
              className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              title="Test with random results"
            >
              🔧
            </span>
            <span
              onClick={showResponsesDebug}
              className="text-xs text-gray-500 cursor-pointer opacity-30"
              title="See all responses (debug)"
            >
              🔍
            </span>
            <span
              onClick={showAllLogs}
              className="text-xs text-gray-500 cursor-pointer opacity-30"
              title="Download all test logs (developer only)"
            >
              📊
            </span>
          </div>*/}
        </div>

        {/* Print-only URL section */}
        <div className="print-only hidden bg-gray-50 rounded-lg p-6 border-2 border-gray-300 mt-8" style={{ display: 'none' }}>
          <h3 className="font-bold text-gray-800 mb-3 text-center">💾 Your Personal URL</h3>
          <p className="text-gray-700 text-sm mb-3 text-center">
            Visit this URL to return to your results:
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
            This URL contains all your responses and will always show your results.
          </p>
        </div>

        {/* Start forfra button */}
        <div className="mt-8 text-center no-print">
          <button
            onClick={onRestart}
            className="inline-flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Delete all responses and start over
          </button>
          <p className="text-xs text-gray-500 mt-2">
            This will permanently delete all your responses
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
                Learn more about {result.type} →
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
    'Type 1': 'As a Perfectionist, you have a strong inner compass that guides you toward what is right and principled. You possess natural leadership qualities and an ability to see how things can be improved. Your critical sense is both a strength and a challenge—it helps you deliver high quality but can also lead to self-criticism and frustration. You thrive in structured environments where your high standards are valued, and you contribute integrity and reliable expertise to your team.',
    
    'Type 2': 'As a Helper, you have an exceptional ability to sense the needs of others and a natural drive to support those around you. You create warm, trusting relationships and are often the person people turn to for advice and support. Your empathy and caring nature make you a valuable team player, but remember to also prioritize your own needs. You flourish in environments where your care is valued and where you can make a real difference to others.',
    
    'Type 3': 'As the Achiever, you have a natural drive toward success and an ability to inspire others with your energy and optimism. You are goal-oriented, adaptable, and skilled at discerning what is needed to succeed in different situations. Your competitive instinct and focus on results make you a strong performer, but also remember to value the process and not just the end result. You thrive in dynamic environments where your achievements are recognized.',
    
    'Type 4': 'As an Individualist, you bring creativity, depth, and authenticity to everything you do. You have a unique ability to see beauty and meaning in what others might overlook, and you contribute original perspectives and innovative solutions. Your sensitivity and intuition make you a valuable advisor and creative force. You thrive best in environments where your individuality is valued and where you have the freedom to express yourself authentically.',
    
    'Type 5': 'As an Investigator, you bring depth, analysis, and independent thinking to your team. You have a natural ability to understand complex systems and provide thoughtful, objective solutions. Your research and expertise are invaluable, and you contribute stability and reliable knowledge. You thrive in environments where you have time to think deeply and where your expertise is respected and utilized constructively.',
    
    'Type 6': 'As a Loyalist, you are a reliable and committed team player with a strong sense of responsibility and loyalty. You have a natural ability to anticipate problems and plan for various scenarios, making you a valuable risk assessor and problem-solver. Your loyalty and commitment create strong, lasting relationships, and you contribute stability and trustworthiness to your team.',
    
    'Type 7': 'As an Enthusiast, you bring energy, creativity, and optimism to all situations. You have a natural ability to see opportunities and inspire others with your enthusiasm. Your versatility and adaptability make you a valuable innovator and problem-solver. You thrive in dynamic environments where you can explore new ideas and work on different projects simultaneously.',
    
    'Type 8': 'As a Challenger, you bring strength, decisiveness, and protective leadership to your team. You have a natural ability to take control in difficult situations and fight for what you believe in. Your direct communication style and focus on justice make you a strong advocate and leader. You thrive in environments where you can take responsibility and make a real difference.',
    
    'Type 9': 'As a Peacemaker, you bring stability, diplomacy, and a natural ability to see all sides of an issue. You have a special gift for creating harmony and helping others find common ground. Your calm presence and ability to listen make you a valuable mediator and team player. You thrive in supportive environments where your diplomatic approach is valued.'
  };
  
  return descriptions[type] || 'Description not available.';
};

// Helper functions that need to be implemented
const getWingExplanationForType = (type: string): string => {
  // Implementation needed
  return `For ${type}, the wings mean...`;
};

const getWingTitle = (type: string, wing: string): string => {
  // Implementation needed
  return `${type}${wing} title`;
};

const getWingShortExplanation = (type: string, wing: string): string => {
  // Implementation needed
  return `Short explanation of ${type}${wing}`;
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
