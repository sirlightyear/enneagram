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

// HINWEIS: Angenommen, diese Typen sind definiert, wie in den Beispielen ersichtlich
type TestResult = {
  type: string;
  score: number;
  percentage: number;
};

type WingResult = {
    primaryWing: string;
    secondaryWing: string;
    primaryScore: number;
    secondaryScore: number;
    isBalanced: boolean;
};
// ENDE HINWEIS

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
    title: 'Der Perfektionist',
    description: 'Sie sind prinzipientreu, zielstrebig und selbstbeherrscht. Sie streben danach, alles zu verbessern und haben hohe Ansprüche an sich selbst und andere.',
    traits: ['Prinzipientreu', 'Organisiert', 'Selbstdiszipliniert', 'Kritisch', 'Idealistisch']
  },
  'Type 2': {
    title: 'Der Helfer',
    description: 'Sie sind fürsorglich, zwischenmenschlich und besitzergreifend. Sie möchten sich geliebt und erwünscht fühlen und drücken Ihre Gefühle für andere aus.',
    traits: ['Fürsorglich', 'Empathisch', 'Großzügig', 'Menschenorientiert', 'Unterstützend']
  },
  'Type 3': {
    title: 'Der Leistungserbringer',
    description: 'Sie sind ehrgeizig, anpassungsfähig und erfolgsorientiert. Sie streben danach, die Besten zu sein und wünschen sich Anerkennung für ihre Leistungen.',
    traits: ['Zielorientiert', 'Energetisch', 'Pragmatisch', 'Selbstbewusst', 'Wettbewerbsfähig']
  },
  'Type 4': {
    title: 'Der Individualist',
    description: 'Sie sind kreativ, emotional ehrlich und persönlich. Sie suchen nach Identität und Sinn und drücken sich durch Authentizität aus.',
    traits: ['Kreativ', 'Sensibel', 'Introspektiv', 'Einzigartig', 'Ausdrucksstark']
  },
  'Type 5': {
    title: 'Der Forscher',
    description: 'Sie sind intensiv, zerebral und wahrnehmend. Sie sind unabhängig und innovativ und versuchen, die Welt um sich herum zu verstehen.',
    traits: ['Analytisch', 'Unabhängig', 'Neugierig', 'Objektiv', 'Privat']
  },
  'Type 6': {
    title: 'Der Loyalist',
    description: 'Sie sind engagiert, verantwortungsbewusst und vertrauenswürdig. Sie suchen Sicherheit und Unterstützung und sind loyal gegenüber Systemen und Menschen.',
    traits: ['Loyal', 'Verantwortungsbewusst', 'Vorsichtig', 'Kooperativ', 'Zuverlässig']
  },
  'Type 7': {
    title: 'Der Enthusiast',
    description: 'Sie sind spontan, vielseitig und optimistisch. Sie suchen neue Erfahrungen und Möglichkeiten und halten sich in Bewegung, um Schmerz zu vermeiden.',
    traits: ['Optimistisch', 'Spontan', 'Vielseitig', 'Abenteuerlustig', 'Energetisch']
  },
  'Type 8': {
    title: 'Der Herausforderer',
    description: 'Sie sind selbstbewusst, stark und durchsetzungsfähig. Sie schützen sich selbst und kontrollieren ihre Umgebung und kämpfen für Gerechtigkeit.',
    traits: ['Stark', 'Direkt', 'Selbstbewusst', 'Beschützend', 'Gerecht']
  },
  'Type 9': {
    title: 'Der Friedensstifter',
    description: 'Sie sind akzeptierend, vertrauensvoll und stabil. Sie wünschen sich inneren und äußeren Frieden und suchen Harmonie in ihren Beziehungen.',
    traits: ['Friedlich', 'Unterstützend', 'Akzeptierend', 'Diplomatisch', 'Stabil']
  }
};

// Dummy-Funktion, die im Code verwendet wird, aber nicht definiert war (zum Laufenlassen)
const getDetailedDescription = (type: string): string => {
    switch (type) {
        case 'Type 1': return 'Der Perfektionist ist getrieben von dem Wunsch, gut und richtig zu sein, um Kritik zu vermeiden. Sie sind prinzipientreu, aber können auch kritisch und urteilend wirken.';
        case 'Type 2': return 'Der Helfer ist bestrebt, geliebt und gebraucht zu werden, indem er anderen hilft und deren Bedürfnisse erfüllt. Sie sind warmherzig, können aber auch besitzergreifend sein.';
        // Fügen Sie bei Bedarf weitere Details hinzu
        default: return 'Eine ausführliche Beschreibung ist für diesen Typ noch nicht verfügbar.';
    }
};


const ResultsPage: React.FC<ResultsPageProps> = ({ results, onRestart, wingResult, responses }) => {
  const [showDetailPage, setShowDetailPage] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState<string | null>(null);
  const [showWingTest, setShowWingTest] = React.useState(false);
  const [showWingTestIntro, setShowWingTestIntro] = React.useState(false);
  const [wingResults, setWingResults] = React.useState<WingResultState | null>(wingResult ? { result: wingResult, testData: getWingTestData() } : null);
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
      alert('✅ Ihre persönliche URL wurde jetzt kopiert!\n\nSpeichern Sie diese URL an einem sicheren Ort - sie enthält alle Ihre Antworten.\n\nSie können jederzeit zu Ihren Ergebnissen zurückkehren, indem Sie diesen Link öffnen.');
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
        title: 'Meine Enneagramm-Ergebnisse',
        text: `Ich bin ${topResult.type}: ${typeInfo.title} (${topResult.percentage}% Übereinstimmung)`,
        url: url
      };

      try {
        await navigator.share(shareData);
      } catch (error) {
        // User cancelled share or it failed
        console.log('Teilen abgebrochen oder fehlgeschlagen');
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
    console.log('Zufällige Ergebnisse generiert:', randomResults);
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
        console.log('Prüfe auf aktuelle Testdaten...');
        console.log('Antworten gefunden:', responses.length);
        console.log('Fragen gefunden:', questions.length);
        alert('Keine Antwortdaten gefunden. Machen Sie zuerst den Test, um die Antwortdaten zu sehen.');
        return;
      }
    
      let debugInfo = 'ANTWORT-DEBUG:\n\n';
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
              <title>Testantwort Debug</title>
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
        alert('Popup wurde blockiert. Sehen Sie die Konsole für Antwortdaten.');
      }
    } catch (error) {
      console.error('Fehler beim Laden der Antwortdaten:', error);
      alert('Fehler beim Laden der Antwortdaten. Sehen Sie die Konsole für Details.');
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
                <h2 className="text-2xl font-bold text-gray-800">Antworten überprüfen und bearbeiten</h2>
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
              {enneagramQuestions.map((question: any, index: number) => { // 'any' here for simplicity, replace with actual type if available
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
                            {rating === 3 && 'Einigermaßen'}
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-4 md:py-12 px-4">
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
        
        {/* Kruso Logo - diskret platziert */}
        <div className="flex justify-end mb-2 no-print">
        </div>
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Award className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Ihre Enneagramm-Ergebnisse</h1>
          <p className="text-gray-600">Basierend auf Ihren Antworten haben wir Ihren primären Persönlichkeitstyp identifiziert</p>
        </div>

        {/* Disclaimer about test accuracy */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">🧭</span>
            <h3 className="text-xl font-semibold text-amber-900">
              Ihr Testergebnis ist ein Anhaltspunkt – keine endgültige Festlegung ;-)
            </h3>
          </div>
          <div className="space-y-3 text-amber-900">
            <p>
              Sie haben nun einen Enneagramm-Test gemacht, und er hat Ihnen ein Ergebnis geliefert – einen möglichen Typ.
              Es ist jedoch wichtig, sich daran zu erinnern, dass der Test nicht notwendigerweise Ihren endgültigen Typ offenbart.
              Er ist ein Werkzeug zur Reflexion, keine endgültige Antwort.
            </p>
            <p>
              Beim Enneagramm geht es um Selbsterkenntnis, und es kann einige Zeit dauern, den Typ zu finden,
              der wirklich zu Ihren tiefsten Mustern passt.
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-4 italic text-amber-800">
              "Selbstentdeckung ist ein Prozess – und er endet nicht damit, seinen Typ zu finden.
              Tatsächlich ist es nur der Anfang."
            </blockquote>
            <p className="text-sm">
              <em>- The Wisdom of the Enneagram, Riso & Hudson</em>
            </p>
            <p>
              Der Test kann Ihnen einen Hinweis geben – vielleicht die 2-3 wahrscheinlichsten Typen – aber es ist
              durch Selbstbeobachtung, Reflexion und Gespräche mit Menschen, die Sie gut kennen,
              dass Sie allmählich spüren werden, welcher Typ wirklich passt.
            </p>
            <div className="bg-white rounded-lg p-4 mt-4 border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Was Sie jetzt tun können
              </h4>
              <ul className="space-y-1 text-sm text-amber-800">
                <li>• Lesen Sie über den Typ, den Sie erhalten haben – und die benachbarten Typen</li>
                <li>• Seien Sie neugierig: Was schwingt mit? Was fühlt sich fremd an?</li>
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
                <h4 className="font-semibold text-indigo-800 mb-3">Ihre Flügel-Punktzahlen:</h4>
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
                      <strong>Ausgewogene Flügel:</strong> Ihre Punktzahlen sind sehr nah beieinander, was bedeutet, 
                      dass Sie beide Flügel je nach Situation flexibel nutzen.
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
                Ausführliche Beschreibung von {topResult.type}: {typeInfo.title}
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
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Ihre Ergebnisse</h4>
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
              <h3 className="text-xl font-semibold text-gray-800">🪶 Ihre Enneagramm-Flügel</h3>
            </div>
            
            {/* Explanation of what wings mean for th */}
                <p className="text-gray-700">
                    Die Flügel sind die zwei Typen neben Ihrem Haupttyp (z. B. Type 5 hat Flügel 4 und 6). Sie fügen Ihrem primären Typ Nuancen hinzu und erklären Variationen innerhalb desselben Typs.
                </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
