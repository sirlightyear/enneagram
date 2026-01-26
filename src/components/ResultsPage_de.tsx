import LanguageSelector from './LanguageSelector';
import React from 'react';
// import { ArrowLeft, Award, BarChart3, Printer, Share2 } from 'lucide-react';
import { typeDetails } from '../data/typeDetails_de';
import TestLogger from '../utils/logger';
import TypeDetailPage from './TypeDetailPage';
import TypeDetailPage_de from './TypeDetailPage_de';
import WingTestIntro_de from './WingTestIntro_de';
import WingTestIntro from './WingTestIntro';
import WingResultsPage from './WingResultsPage';
import { useWingTest } from '../hooks/useWingTest';
import { type1WingQuestions } from '../data/wingQuestions/wingQuestions1_de';
import { type2WingQuestions } from '../data/wingQuestions/wingQuestions2_de';
import { type3WingQuestions } from '../data/wingQuestions/wingQuestions3_de';
import { type4WingQuestions } from '../data/wingQuestions/wingQuestions4_de';
import { type5WingQuestions } from '../data/wingQuestions/wingQuestions5_de';
import { type6WingQuestions } from '../data/wingQuestions/wingQuestions6_de';
import { type7WingQuestions } from '../data/wingQuestions/wingQuestions7_de';
import { type8WingQuestions } from '../data/wingQuestions/wingQuestions8_de';
import { type9WingQuestions } from '../data/wingQuestions/wingQuestions9_de';
import { Award, BarChart3, RefreshCw, Users, Heart, Target, Palette, Search, Shield, Zap, Crown, Compass, Feather, Sparkles, Ambulance as Balance, HandHeart, Lightbulb, Flame, Mountain, TreePine, Waves, Printer, Share2, Mail, X } from 'lucide-react';
import EnneagramChart from './EnneagramChart';
import WingQuestionCard from './WingQuestionCard';
import { enneagramQuestions } from '../data/questions_de';
import EnneagramInfoSection_de from './EnneagramInfoSection_de';

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
    title: 'Der Perfektionist',
    description: 'Sie sind prinzipientreu, zielstrebig und selbstbeherrscht. Sie streben danach, alles zu verbessern und haben hohe Standards für sich selbst und andere.',
    traits: ['Prinzipientreu', 'Organisiert', 'Selbstdiszipliniert', 'Kritisch', 'Idealistisch']
  },
  'Type 2': {
    title: 'Der Helfer',
    description: 'Sie sind fürsorglich, zwischenmenschlich und besitzergreifend. Sie möchten sich geliebt und gewünscht fühlen und drücken Ihre Gefühle für andere aus.',
    traits: ['Fürsorglich', 'Empathisch', 'Großzügig', 'Menschenorientiert', 'Unterstützend']
  },
  'Type 3': {
    title: 'Der Erfolgreiche',
    description: 'Sie sind ehrgeizig, anpassungsfähig und erfolgsorientiert. Sie streben danach, der Beste zu sein, und wünschen sich Anerkennung für Ihre Leistungen.',
    traits: ['Zielstrebig', 'Energisch', 'Pragmatisch', 'Selbstbewusst', 'Wettbewerbsfähig']
  },
  'Type 4': {
    title: 'Der Individualist',
    description: 'Sie sind kreativ, emotional ehrlich und persönlich. Sie suchen Identität und Bedeutung und drücken sich durch Authentizität aus.',
    traits: ['Kreativ', 'Sensibel', 'Introspektiv', 'Einzigartig', 'Ausdrucksstark']
  },
  'Type 5': {
    title: 'Der Forscher',
    description: 'Sie sind intensiv, zerebral und wahrnehmend. Sie sind unabhängig und innovativ und suchen das Verständnis der Welt um sich herum.',
    traits: ['Analytisch', 'Unabhängig', 'Neugierig', 'Objektiv', 'Privat']
  },
  'Type 6': {
    title: 'Der Loyalist',
    description: 'Sie sind engagiert, verantwortungsbewusst und vertrauenswürdig. Sie suchen Sicherheit und Unterstützung und sind loyal gegenüber Systemen und Menschen.',
    traits: ['Loyal', 'Verantwortungsbewusst', 'Vorsichtig', 'Kooperativ', 'Zuverlässig']
  },
  'Type 7': {
    title: 'Der Enthusiast',
    description: 'Sie sind spontan, vielseitig und optimistisch. Sie suchen nach neuen Erfahrungen und Möglichkeiten und halten sich in Bewegung, um Schmerz zu vermeiden.',
    traits: ['Optimistisch', 'Spontan', 'Vielseitig', 'Abenteuerlustig', 'Energisch']
  },
  'Type 8': {
    title: 'Der Herausforderer',
    description: 'Sie sind selbstsicher, stark und durchsetzungsfähig. Sie beschützen sich selbst und kontrollieren ihre Umgebung und kämpfen für Gerechtigkeit.',
    traits: ['Stark', 'Direkt', 'Selbstsicher', 'Beschützend', 'Gerecht']
  },
  'Type 9': {
    title: 'Der Friedensstifter',
    description: 'Sie sind akzeptierend, vertrauensvoll und stabil. Sie wünschen sich inneren und äußeren Frieden und suchen Harmonie in ihren Beziehungen.',
    traits: ['Friedlich', 'Unterstützend', 'Akzeptierend', 'Diplomatisch', 'Stabil']
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
  const [showEmailDialog, setShowEmailDialog] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  const [isSendingEmail, setIsSendingEmail] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = React.useState(false);
  const [showLearnMoreSection, setShowLearnMoreSection] = React.useState(false);
  const [showAllResultsSection, setShowAllResultsSection] = React.useState(false);

  const sortedResults = React.useMemo(() => {
    return [...currentResults].sort((a, b) => b.percentage - a.percentage);
  }, [currentResults]);

  const topResult = sortedResults[0];
  const displayType = selfIdentifiedType || topResult.type;
  const typeInfo = typeDescriptions[displayType];
  const TypeIcon = typeIcons[displayType];
  
  // Print/PDF functionality
  const handlePrint = () => {
    window.print();
  };

  const handleSendEmail = async () => {
    if (!userEmail || !userEmail.includes('@')) {
      alert('Bitte geben Sie eine gültige E-Mail-Adresse ein');
      return;
    }

    setIsSendingEmail(true);

    try {
      const params = new URLSearchParams();
      params.set('lang', language);
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
      const resultUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

      const logger = TestLogger.getInstance();
      const wingResponses = wingResults ? wingResults.testData.questions.map((_, index) => ({
        questionIndex: index,
        selectedWing: index < wingResults.result.primaryScore ? wingResults.result.primaryWing : wingResults.result.secondaryWing
      })) : undefined;

      await logger.logTestCompletion(
        userEmail,
        sortedResults,
        responses || [],
        enneagramQuestions,
        wingResults,
        wingResponses,
        wingResults?.testData.questions
      );

      setEmailSent(true);
      setTimeout(() => {
        setShowEmailDialog(false);
        setEmailSent(false);
        setUserEmail('');
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Beim Senden der E-Mail ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSendingEmail(false);
    }
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
      alert('✅ Ihre persönliche URL wurde kopiert!\n\nSpeichern Sie diese URL an einem sicheren Ort – sie enthält alle Ihre Antworten.\n\nSie können jederzeit zu Ihren Ergebnissen zurückkehren, indem Sie diesen Link öffnen.');
    } catch (error) {
      // Fallback if clipboard access fails
      prompt('Kopieren Sie diese URL und speichern Sie sie an einem sicheren Ort:', url);
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
        title: 'Meine Enneagramm Ergebnisse',
        text: `Ich bin ${topResult.type}: ${typeInfo.title} (${topResult.percentage}% Übereinstimmung)`,
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
      alert('✅ Link in die Zwischenablage kopiert!\n\nFügen Sie diesen Link in eine E-Mail, SMS oder Nachricht ein, um Ihre Ergebnisse zu teilen.');
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
        alert('Keine Antwortdaten gefunden. Nehmen Sie zuerst den Test, um Antwortdaten anzuzeigen.');
        return;
      }
    
      let debugInfo = 'ANTWORT DEBUG:\n\n';
      responses.forEach((response: any, index: number) => {
        const question = questions[response.questionIndex];
        if (question) {
          debugInfo += `Frage ${response.questionIndex + 1} (${question.type}):\n`;
          debugInfo += `"${question.question}"\n`;
          debugInfo += `Antwort: ${response.rating}/5\n\n`;
        }
      });
    
      // Create a new window to show debug info
      const debugWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes');
      if (debugWindow) {
        debugWindow.document.write(`
          <html>
            <head>
              <title>Test Antwort Debug</title>
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
        alert('Popup wurde blockiert. Sehen Sie sich die Konsole für Antwortdaten an.');
      }
    } catch (error) {
      console.error('Fehler beim Laden der Antwortdaten:', error);
      alert('Fehler beim Laden der Antwortdaten. Siehe Konsole für Details.');
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
        <TypeDetailPage_de typeDetail={typeDetail} 
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
      <WingTestIntro_de primaryType={topResult.type}
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
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-amber-50 to-fuchsia-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Überprüfen und bearbeiten Sie Ihre Antworten</h2>
                <p className="text-gray-600 mt-1">Ihre Ergebnisse werden automatisch aktualisiert, wenn Sie Antworten ändern</p>
              </div>
              <button
                onClick={() => setShowReviewAnswers(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Zurück zu den Ergebnissen
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
                        Frage {index + 1} von {enneagramQuestions.length}
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
                            {rating === 1 && 'Überhaupt nicht'}
                            {rating === 2 && 'Nicht sehr gut'}
                            {rating === 3 && 'Ziemlich gut'}
                            {rating === 4 && 'Gut'}
                            {rating === 5 && 'Sehr gut'}
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
                Fertig - Aktualisierte Ergebnisse anzeigen
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-amber-50 to-fuchsia-200 py-4 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Print-only compact header */}
        <div className="print-only hidden print-header">
          <div className="print-type-title">
            {topResult.type}: {typeInfo.title}
          </div>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {topResult.percentage}% Übereinstimmung
          </div>
          {wingResults && (
            <div style={{ fontSize: '12px', marginTop: '4px' }}>
              Flügel: {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Ihre Enneagramm Ergebnisse</h1>
          <p className="text-gray-600">Basierend auf Ihren Antworten haben wir Ihren primären Persönlichkeitstyp identifiziert</p>
        </div>

        {/* Disclaimer about test accuracy */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">🧭</span>
            <h3 className="text-xl font-semibold text-amber-900">
              Ihr Test ist ein Anhaltspunkt – keine endgültige Aussage ;-)
            </h3>
          </div>
          <div className="space-y-3 text-amber-900">
            <p>
              Sie haben nun einen Enneagramm-Test gemacht, und er hat Ihnen ein Ergebnis geliefert – einen möglichen Typen.
              Aber es ist wichtig, sich daran zu erinnern, dass der Test nicht notwendigerweise Ihren endgültigen Typen enthüllt.
              Er ist ein Werkzeug zur Reflexion, keine endgültige Antwort.
            </p>
            <p>
              Das Enneagramm handelt von Selbsterkenntnis, und es kann Zeit dauern, den Typen zu finden,
              der wirklich zu Ihren tiefsten Mustern passt.
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-4 italic text-amber-800">
              "Selbstentdeckung ist ein Prozess – und er endet nicht mit der Findung des eigenen Typs.
              Tatsächlich ist es nur der Anfang."
            </blockquote>
            <p className="text-sm">
              <em>- The Wisdom of the Enneagram, Riso & Hudson</em>
            </p>
            <p>
              Der Test kann Ihnen einen Hinweis geben – vielleicht die 2-3 wahrscheinlichsten Typen – aber es ist
              durch Selbstbeobachtung, Reflexion und Gespräche mit Menschen, die Sie gut kennen, dass
              Sie allmählich spüren werden, welcher Typ wirklich passt.
            </p>
            <div className="bg-white rounded-lg p-4 mt-4 border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Was Sie jetzt tun können
              </h4>
              <ul className="space-y-1 text-sm text-amber-800">
                <li>• Lesen Sie über den Typen, den Sie erhalten haben – und die benachbarten Typen</li>
                <li>• Seien Sie neugierig: Was resoniert? Was fühlt sich fremd an?</li>
                <li>• Sprechen Sie mit anderen über Ihre Muster und Reaktionen</li>
                <li>• Denken Sie daran: Sie haben alle neun Typen in sich – aber einer ist Ihr "Heimatgebiet"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Sie haben sich selbst als {selfIdentifiedType} identifiziert</strong>
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  (Das Testergebnis zeigte {topResult.type} mit {topResult.percentage}% Übereinstimmung)
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
                <p className="text-gray-600">Übereinstimmung mit diesem Typ</p>
              </>
            ) : (
              <p className="text-gray-600">Ihr selbst-identifizierter Typ</p>
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
              <h2 className="text-2xl font-bold text-gray-800">Ihre Enneagramm-Flügel</h2>
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
                <h4 className="font-semibold text-indigo-800 mb-3">Ihre Flügel-Scores:</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-800">
                        {topResult.type}{wingResults.result.primaryWing}
                      </span>
                      <span className="text-indigo-600 font-semibold">
                        {wingResults.result.primaryScore} Antworten
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
                        {wingResults.result.secondaryScore} Antworten
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
                      <strong>Ausbalancierte Flügel:</strong> Ihre Scores sind sehr nah beieinander, was bedeutet, 
                      dass Sie beide Flügel flexibel je nach Situation einsetzen.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Detailed description of top result */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 print:shadow-none print:border print-hide-detailed">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Ausführliche Beschreibung von {topResult.type}: {typeInfo.title}
          </h3>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              {getDetailedDescription(topResult.type)}
            </p>
          </div>
        </div>

        {/* Radial Chart */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 mb-8 no-print">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">Ihre Enneagramm-Ergebnisse - Radiale Übersicht</h3>
          <div className="flex justify-center w-full">
            <EnneagramChart results={sortedResults} language={language} />
          </div>
        </div>

        {/* Wing Results Section */}
        {wingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">🪶 Ihre Enneagramm-Flügel</h3>
            </div>
            
            {/* Explanation of what wings mean for this specific type 
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                Was bedeuten Flügel für Ihren {topResult.type}?
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
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">DAS SIND SIE</span>
                    {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
                  </h4>
                  <p className="text-green-700 mb-4 font-medium">
                    <strong>Ihr Persönlichkeitsprofil:</strong> {' '}
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
                          {wingResults.result.primaryScore} Antworten
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
                          {wingResults.result.secondaryScore} Antworten
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
                        <strong>Ausbalancierte Flügel:</strong> Sie nutzen beide Flügel flexibel je nach Situation.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Wing Characteristics */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-green-600 mr-2">👤</span>
                  So sind Sie - Charakteristika für Ihre Flügel-Kombination:
                </h5>
                <div className="grid gap-2">
                  {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.characteristics.map((characteristic: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Sie</strong> {characteristic.toLowerCase()}</span>
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
            <h3 className="text-xl font-semibold text-gray-800">Alle Ergebnisse</h3>
          </div>
          
          <div className="mb-4 text-sm text-gray-600">
            <p>Klicken Sie auf jeden Typ, um mehr darüber zu erfahren:</p>
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
                <strong>Sie haben sich selbst als {selfIdentifiedType} identifiziert</strong> (obwohl das Testergebnis {topResult.type} zeigte)
              </p>
            </div>
          )}

          <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Compass className="w-5 h-5 mr-2" />
              Glauben Sie, dass ein anderer Typ besser passt?
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              Nachdem Sie über die verschiedenen Typen gelesen haben, identifizieren Sie sich möglicherweise mehr mit einem anderen Typen.
              Das ist ganz normal – der Test gibt einen Hinweis, aber nur Sie können wirklich wissen, welcher Typ am besten passt.
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
                  {result.type === topResult.type && ' (Testergebnis)'}
                  {selfIdentifiedType === result.type && ' ✓'}
                </button>
              ))}
            </div>
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <p className="text-xs text-gray-600 mt-3">
                💡 Ihr gewählter Typ wird automatisch in Ihrer persönlichen URL gespeichert
              </p>
            )}
          </div>
        </div>

        {/* Enneagram Info Sections - Basic Fears, Desires, Triads and Stress/Growth */}
        <EnneagramInfoSection_de primaryType={topResult.type} />

        {/* Not to be confused with section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {topResult.type}: {typeInfo.title} - Nicht zu verwechseln mit
          </h3>
          <div className="space-y-4">
            {typeDetails[topResult.type].notToBeConfusedWith.map((confusion, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  {confusion.type}
                </h4>
                <p className="text-yellow-700 text-sm">
                  <strong>Der Unterschied:</strong> {confusion.difference}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn more about your type */}
        {!wingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 print-hide-detailed">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Möchten Sie mehr über Ihren Typ erfahren?
            </h3>

            <div>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Erhalten Sie ein tiefes Verständnis dafür, wie Ihr Persönlichkeitstyp Ihr Arbeitsleben,
                  Ihre Beziehungen und Ihre persönliche Entwicklung beeinflusst.
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🪶 Was sind Enneagramm-Flügel?</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Ihr {topResult.type} hat zwei "Nachbarn" auf dem Enneagramm-Kreis, die <strong>Flügel</strong> genannt werden.
                    Diese Flügel vermischen sich mit Ihrem Grundtyp und schaffen eine nuanciertere und präzisere Beschreibung Ihrer Persönlichkeit.
                  </p>
                  <p className="text-blue-700 text-sm">
                    {getWingExplanationForType(topResult.type)} Der Flügel-Test dauert nur 5 Minuten und liefert Ihnen ein noch präziseres Profil.
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
                  Erfahren Sie mehr über Ihren {topResult.type}: {typeInfo.title}
                  <span className="ml-2">→</span>
                </button>

                <button
                  onClick={() => setShowWingTestIntro(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Entdecken Sie Ihre Enneagramm-Flügel
                  <span className="ml-2">✨</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-2 border-yellow-200 no-print">
            <h3 className="font-semibold text-yellow-800 mb-3 text-lg">💾 Speichern Sie Ihre Ergebnisse</h3>
            <p className="text-yellow-700 mb-4 text-sm">
              Wir speichern Ihre Antworten nicht in einer Datenbank. Stattdessen können Sie eine persönliche URL speichern,
              die alle Ihre Antworten enthält. Auf diese Weise können Sie jederzeit zu Ihren Ergebnissen zurückkehren!
            </p>
            <button
              onClick={handleSaveUrl}
              className="inline-flex items-center px-8 py-3 bg-yellow-600 text-white font-semibold text-lg rounded-lg hover:bg-yellow-700 transition-colors duration-200 shadow-lg"
            >
              💾 Speichern Sie meine persönliche URL
            </button>
            <p className="text-yellow-600 text-xs mt-3">
              Die URL wird automatisch kopiert - speichern Sie sie an einem sicheren Ort (z.B. in Ihren Lesezeichen)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => setShowReviewAnswers(true)}
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 no-print"
            >
              <Search className="w-5 h-5 mr-2" />
              Antworten überprüfen / bearbeiten
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 no-print"
            >
              <Printer className="w-5 h-5 mr-2" />
              Drucken / Als PDF speichern
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 no-print"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Teilen per E-Mail/SMS
            </button>

            <button
              onClick={() => setShowEmailDialog(true)}
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200 no-print"
            >
              <Mail className="w-5 h-5 mr-2" />
              Per E-Mail senden
            </button>
          </div>
          
           {/*<button
            onClick={onRestart}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 no-print"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Test erneut machen
          </button>*/}
          
          {/* Debug links - only visible in development 
          <div className="mt-8 text-center space-x-4 no-print">
            <span
              onClick={showDebugResults}
              className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              title="Test mit zufälligen Ergebnissen"
            >
              🔧
            </span>
            <span
              onClick={showResponsesDebug}
              className="text-xs text-gray-500 cursor-pointer opacity-30"
              title="Alle Antworten anzeigen (Debug)"
            >
              🔍
            </span>
            <span
              onClick={showAllLogs}
              className="text-xs text-gray-500 cursor-pointer opacity-30"
              title="Alle Testprotokolle herunterladen (nur für Entwickler)"
            >
              📊
            </span>
          </div>*/}
        </div>

        {/* Print-only URL section */}
        <div className="print-only hidden bg-gray-50 rounded-lg p-6 border-2 border-gray-300 mt-8" style={{ display: 'none' }}>
          <h3 className="font-bold text-gray-800 mb-3 text-center">💾 Ihre persönliche URL</h3>
          <p className="text-gray-700 text-sm mb-3 text-center">
            Besuchen Sie diese URL, um zu Ihren Ergebnissen zurückzukehren:
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
            Diese URL enthält alle Ihre Antworten und wird immer Ihre Ergebnisse anzeigen.
          </p>
        </div>

        {/* Start forfra button */}
        <div className="mt-8 text-center no-print">
          <button
            onClick={onRestart}
            className="inline-flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Alle Antworten löschen und von vorne beginnen
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Dies löscht alle Ihre Antworten dauerhaft
          </p>
        </div>

        {/* Email Dialog */}
        {showEmailDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
              <button
                onClick={() => {
                  setShowEmailDialog(false);
                  setEmailSent(false);
                  setUserEmail('');
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              {!emailSent ? (
                <>
                  <div className="mb-6">
                    <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                      Per E-Mail senden
                    </h3>
                    <p className="text-gray-600 text-center">
                      Geben Sie Ihre E-Mail-Adresse ein, damit wir Ihnen Ihre Testergebnisse und einen Link zu dieser Seite zusenden können.
                    </p>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="ihre@email.de"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      disabled={isSendingEmail}
                    />
                  </div>

                  <button
                    onClick={handleSendEmail}
                    disabled={isSendingEmail || !userEmail}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {isSendingEmail ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        E-Mail senden
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Wir speichern Ihre E-Mail nicht dauerhaft. Sie wird nur zum Senden Ihrer Ergebnisse verwendet.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    E-Mail gesendet!
                  </h3>
                  <p className="text-gray-600">
                    Überprüfen Sie Ihren Posteingang für Ihre Testergebnisse.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Disclaimer Modal */}
        {showDisclaimerModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowDisclaimerModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <span className="text-2xl mr-3">🧭</span>
                  <h3 className="text-xl font-semibold text-amber-900">
                    Ihr Test ist ein Anhaltspunkt – keine endgültige Aussage ;-)
                  </h3>
                </div>
                <div className="space-y-3 text-amber-900">
                  <p>
                    Sie haben nun einen Enneagramm-Test gemacht, und er hat Ihnen ein Ergebnis geliefert – einen möglichen Typen.
                    Aber es ist wichtig, sich daran zu erinnern, dass der Test nicht notwendigerweise Ihren endgültigen Typen enthüllt.
                    Er ist ein Werkzeug zur Reflexion, keine endgültige Antwort.
                  </p>
                  <p>
                    Das Enneagramm handelt von Selbsterkenntnis, und es kann Zeit dauern, den Typen zu finden,
                    der wirklich zu Ihren tiefsten Mustern passt.
                  </p>
                  <blockquote className="border-l-2 border-amber-400 pl-4 italic text-amber-800">
                    "Selbstentdeckung ist ein Prozess – und er endet nicht mit der Findung des eigenen Typs.
                    Tatsächlich ist es nur der Anfang."
                  </blockquote>
                  <p className="text-sm">
                    <em>- The Wisdom of the Enneagram, Riso & Hudson</em>
                  </p>
                  <p>
                    Der Test kann Ihnen einen Hinweis geben – vielleicht die 2-3 wahrscheinlichsten Typen – aber es ist
                    durch Selbstbeobachtung, Reflexion und Gespräche mit Menschen, die Sie gut kennen, dass
                    Sie allmählich spüren werden, welcher Typ wirklich passt.
                  </p>
                  <div className="bg-white rounded-lg p-4 mt-4 border border-amber-200">
                    <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Was Sie jetzt tun können
                    </h4>
                    <ul className="space-y-1 text-sm text-amber-800">
                      <li>• Lesen Sie über den Typen, den Sie erhalten haben – und die benachbarten Typen</li>
                      <li>• Seien Sie neugierig: Was resoniert? Was fühlt sich fremd an?</li>
                      <li>• Sprechen Sie mit anderen über Ihre Muster und Reaktionen</li>
                      <li>• Denken Sie daran: Sie haben alle neun Typen in sich – aber einer ist Ihr "Heimatgebiet"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowDisclaimerModal(false)}
                  className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        )}
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
                Erfahren Sie mehr über {result.type} →
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
    'Type 1': 'Als Perfektionist haben Sie einen starken inneren Kompass, der Sie zum Richtigen und Prinzipientreuen führt. Sie besitzen natürliche Führungsqualitäten und die Fähigkeit zu sehen, wie Dinge verbessert werden können. Ihr kritischer Sinn ist sowohl eine Stärke als auch eine Herausforderung – er hilft Ihnen, hohe Qualität zu liefern, kann aber auch zu Selbstkritik und Frustration führen. Sie gedeihen in strukturierten Umgebungen, in denen Ihre hohen Standards geschätzt werden, und Sie tragen mit Integrität und zuverlässiger Expertise zu Ihrem Team bei.',
    
    'Type 2': 'Als Helfer haben Sie eine außergewöhnliche Fähigkeit, die Bedürfnisse anderer wahrzunehmen, und einen natürlichen Drang, die Menschen um Sie herum zu unterstützen. Sie bauen warme, vertrauensvolle Beziehungen auf und sind oft die Person, an die sich andere für Rat und Unterstützung wenden. Ihre Empathie und fürsorgliche Natur machen Sie zu einem wertvollen Teamplayer, aber denken Sie daran, auch Ihre eigenen Bedürfnisse zu priorisieren. Sie blühen in Umgebungen auf, in denen Ihre Fürsorge geschätzt wird und in denen Sie einen wirklichen Unterschied für andere machen können.',
    
    'Type 3': 'Als der Erfolgreiche haben Sie einen natürlichen Drang zum Erfolg und die Fähigkeit, andere mit Ihrer Energie und Ihrem Optimismus zu inspirieren. Sie sind zielstrebig, anpassungsfähig und gut darin zu erkennen, was erforderlich ist, um in verschiedenen Situationen erfolgreich zu sein. Ihr Wettbewerbsinstinkt und Ihr Fokus auf Ergebnisse machen Sie zu einem starken Leistungsträger, aber denken Sie daran, auch den Prozess und nicht nur das Endergebnis wertzuschätzen. Sie gedeihen in dynamischen Umgebungen, in denen Ihre Leistungen anerkannt werden.',
    
    'Type 4': 'Als Individualist bringen Sie Kreativität, Tiefe und Authentizität in alles, was Sie tun. Sie haben eine einzigartige Fähigkeit, Schönheit und Bedeutung in dem zu sehen, was andere vielleicht übersehen, und Sie tragen mit originellen Perspektiven und innovativen Lösungen bei. Ihre Sensibilität und Intuition machen Sie zu einem wertvollen Berater und einer kreativen Kraft. Sie fühlen sich am wohlsten in Umgebungen, in denen Ihre Individualität geschätzt wird und in denen Sie Freiheit haben, sich authentisch auszudrücken.',
    
    'Type 5': 'Als Forscher bringen Sie Tiefe, Analyse und unabhängiges Denken in Ihr Team. Sie haben eine natürliche Fähigkeit, komplexe Systeme zu verstehen und gut durchdachte, objektive Lösungen zu liefern. Ihre Forschung und Expertise sind von unschätzbarem Wert, und Sie tragen zu Stabilität und zuverlässigem Wissen bei. Sie gedeihen in Umgebungen, in denen Sie Zeit zum tiefen Nachdenken haben und in denen Ihre Expertise respektiert und konstruktiv genutzt wird.',
    
    'Type 6': 'Als Loyalist sind Sie ein zuverlässiger und engagierter Teamplayer mit einem starken Verantwortungsgefühl und Loyalität. Sie haben eine natürliche Fähigkeit, Probleme vorherzusehen und für verschiedene Szenarien zu planen, was Sie zu einem wertvollen Risikobewerter und Problemlöser macht. Ihre Loyalität und Ihr Engagement schaffen starke, dauerhafte Beziehungen, und Sie tragen zu Stabilität und Glaubwürdigkeit in Ihrem Team bei.',
    
    'Type 7': 'Als Enthusiast bringen Sie Energie, Kreativität und Optimismus in alle Situationen. Sie haben eine natürliche Fähigkeit, Möglichkeiten zu sehen und andere mit Ihrem Enthusiasmus zu inspirieren. Ihre Vielseitigkeit und Anpassungsfähigkeit machen Sie zu einem wertvollen Innovator und Problemlöser. Sie gedeihen in dynamischen Umgebungen, in denen Sie neue Ideen erkunden und gleichzeitig an verschiedenen Projekten arbeiten können.',
    
    'Type 8': 'Als Herausforderer bringen Sie Stärke, Entscheidungsfreudigkeit und beschützende Führung in Ihr Team. Sie haben eine natürliche Fähigkeit, in schwierigen Situationen die Kontrolle zu übernehmen und für das zu kämpfen, woran Sie glauben. Ihr direkter Kommunikationsstil und Ihr Fokus auf Gerechtigkeit machen Sie zu einem starken Fürsprecher und Anführer. Sie gedeihen in Umgebungen, in denen Sie Verantwortung übernehmen und einen wirklichen Unterschied machen können.',
    
    'Type 9': 'Als Friedensstifter bringen Sie Stabilität, Diplomatie und eine natürliche Fähigkeit, alle Seiten eines Problems zu sehen. Sie haben eine besondere Gabe, Harmonie zu schaffen und anderen zu helfen, eine gemeinsame Basis zu finden. Ihre ruhige Präsenz und Ihre Fähigkeit zuzuhören machen Sie zu einem wertvollen Vermittler und Teamplayer. Sie gedeihen in unterstützenden Umgebungen, in denen Ihr diplomatischer Ansatz geschätzt wird.'
  };
  
  return descriptions[type] || 'Beschreibung nicht verfügbar.';
};

// Helper functions that need to be implemented
const getWingExplanationForType = (type: string): string => {
  // Implementation needed
  return `Für ${type} bedeuten die Flügel...`;
};

const getWingTitle = (type: string, wing: string): string => {
  // Implementation needed
  return `${type}${wing} Titel`;
};

const getWingShortExplanation = (type: string, wing: string): string => {
  // Implementation needed
  return `Kurze Erklärung von ${type}${wing}`;
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
