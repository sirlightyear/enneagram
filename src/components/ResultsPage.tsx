import React from 'react';
import LanguageSelector from './LanguageSelector';
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
import { Award, BarChart3, RefreshCw, Users, Heart, Target, Palette, Search, Shield, Zap, Crown, Compass, Feather, Sparkles, Ambulance as Balance, HandHeart, Lightbulb, Flame, Mountain, TreePine, Waves, Printer, Share2, Mail, X } from 'lucide-react';
import EnneagramChart from './EnneagramChart';
import WingQuestionCard from './WingQuestionCard';
import { enneagramQuestions } from '../data/questions';
import EnneagramInfoSection from './EnneagramInfoSection';

interface ResultsPageProps {
  results: TestResult[];
  onRestart: () => void;
  wingResult?: WingResult;
  responses?: any[];
  language: string;
  onLanguageChange: (language: string) => void;
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
    title: 'Perfektionisten',
    description: 'Du er principiel, målrettet og selvkontrolleret. Du stræber efter at forbedre alt og har høje standarder for dig selv og andre.',
    traits: ['Principiel', 'Organiseret', 'Selvdisciplineret', 'Kritisk', 'Idealistisk']
  },
  'Type 2': {
    title: 'Hjælperen',
    description: 'Du er omsorgsfuld, interpersonel og besiddende. Du vil føle dig elsket og ønsket og udtrykker dine følelser for andre.',
    traits: ['Omsorgsfuld', 'Empatisk', 'Generøs', 'Menneskeorienteret', 'Støttende']
  },
  'Type 3': {
    title: 'Præstationsorienterede',
    description: 'Du er ambitiøs, tilpasningsdygtig og drevet af succes. Du stræber efter at være den bedste og ønsker anerkendelse for dine præstationer.',
    traits: ['Målrettet', 'Energisk', 'Pragmatisk', 'Selvtillid', 'Konkurrencedygtig']
  },
  'Type 4': {
    title: 'Individualisten',
    description: 'Du er kreativ, følelsesmæssigt ærlig og personlig. Du søger identitet og mening og udtrykker dig gennem autenticitet.',
    traits: ['Kreativ', 'Følsom', 'Introspektiv', 'Unik', 'Udtryksfuld']
  },
  'Type 5': {
    title: 'Undersøgeren',
    description: 'Du er intens, cerebral og perceptiv. Du er selvstændig og innovativ, og du søger at forstå verden omkring dig.',
    traits: ['Analytisk', 'Selvstændig', 'Nysgerrig', 'Objektiv', 'Privat']
  },
  'Type 6': {
    title: 'Loyalisten',
    description: 'Du er engageret, ansvarlig og troværdig. Du søger sikkerhed og støtte og er loyal over for systemer og mennesker.',
    traits: ['Loyal', 'Ansvarlig', 'Forsigtig', 'Samarbejdsvillig', 'Pålidelig']
  },
  'Type 7': {
    title: 'Entusiasten',
    description: 'Du er spontan, alsidig og optimistisk. Du søger nye oplevelser og muligheder og holder dig i gang for at undgå smerte.',
    traits: ['Optimistisk', 'Spontan', 'Alsidig', 'Eventyrlysten', 'Energisk']
  },
  'Type 8': {
    title: 'Udfordreren',
    description: 'Du er selvtillidsfuld, stærk og assertiv. Du beskytter dig selv og kontrollerer dit miljø, og du kæmper for retfærdighed.',
    traits: ['Stærk', 'Direkte', 'Selvtillidsfuld', 'Beskyttende', 'Retfærdig']
  },
  'Type 9': {
    title: 'Fredsmageren',
    description: 'Du er accepterende, tillidsfuld og stabil. Du ønsker indre og ydre fred og søger harmoni i dine relationer.',
    traits: ['Fredelig', 'Støttende', 'Accepterende', 'Diplomatisk', 'Stabil']
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
    params.set('lang', language);
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
      alert('✅ Din personlige URL er nu kopieret!\n\nGem denne URL et sikkert sted - den indeholder alle dine svar.\n\nDu kan altid vende tilbage til dine resultater ved at åbne dette link.');
    } catch (error) {
      // Fallback if clipboard access fails
      prompt('Kopiér denne URL og gem den et sikkert sted:', url);
    }
  };

  const handleSendEmail = async () => {
    if (!userEmail || !userEmail.includes('@')) {
      alert('Indtast venligst en gyldig email-adresse');
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
        currentResults,
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
      alert('Der opstod en fejl ved afsendelse af email. Prøv venligst igen.');
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleShare = async () => {
    // Create URL for sharing
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
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    if (navigator.share && navigator.canShare) {
      const shareData = {
        title: 'Mine Enneagram Resultater',
        text: `Jeg er ${topResult.type}: ${typeInfo.title} (${topResult.percentage}% match)`,
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
      alert('✅ Link kopieret til udklipsholder!\n\nIndsæt dette link i en email, SMS eller besked for at dele dine resultater.');
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
        alert('Ingen svar data fundet. Tag testen først for at se svar data.');
        return;
      }
    
      let debugInfo = 'SVAR DEBUG:\n\n';
      responses.forEach((response: any, index: number) => {
        const question = questions[response.questionIndex];
        if (question) {
          debugInfo += `Spørgsmål ${response.questionIndex + 1} (${question.type}):\n`;
          debugInfo += `"${question.question}"\n`;
          debugInfo += `Svar: ${response.rating}/5\n\n`;
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
        alert('Popup blev blokeret. Se konsollen for svar data.');
      }
    } catch (error) {
      console.error('Fejl ved indlæsning af svar data:', error);
      alert('Fejl ved indlæsning af svar data. Se konsollen for detaljer.');
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
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-amber-50 to-fuchsia-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Gennemse og rediger dine svar</h2>
                <p className="text-gray-600 mt-1">Dine resultater opdateres automatisk når du ændrer svar</p>
              </div>
              <button
                onClick={() => setShowReviewAnswers(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Tilbage til resultater
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
                        Spørgsmål {index + 1} af {enneagramQuestions.length}
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
                            {rating === 1 && 'Slet ikke'}
                            {rating === 2 && 'Ikke særlig godt'}
                            {rating === 3 && 'Nogenlunde'}
                            {rating === 4 && 'Godt'}
                            {rating === 5 && 'Meget godt'}
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
                Færdig - Se opdaterede resultater
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
            {topResult.percentage}% match
          </div>
          {wingResults && (
            <div style={{ fontSize: '12px', marginTop: '4px' }}>
              Vinger: {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dine Enneagram Resultater</h1>
          <p className="text-gray-600">Baseret på dine svar har vi identificeret din primære personlighedstype</p>
        </div>

        {/* Disclaimer about test accuracy */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">🧭</span>
            <h3 className="text-xl font-semibold text-amber-900">
              Din test er et pejlemærke – ikke en endelig dom ;-)
            </h3>
          </div>
          <div className="space-y-3 text-amber-900">
            <p>
              Du har nu taget en Enneagram-test, og den har givet dig et resultat – en mulig type.
              Men det er vigtigt at huske, at testen ikke nødvendigvis afslører din endelige type.
              Den er et værktøj til refleksion, ikke en facitliste.
            </p>
            <p>
              Enneagrammet handler om selverkendelse, og det kan tage tid at finde frem til den type,
              der virkelig matcher dine dybeste mønstre.
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-4 italic text-amber-800">
              "Selvopdagelse er en proces – og den slutter ikke med at finde sin type.
              Faktisk er det kun begyndelsen."
            </blockquote>
            <p className="text-sm">
              <em>- The Wisdom of the Enneagram, Riso & Hudson</em>
            </p>
            <p>
              Testen kan give dig en indikation – måske de 2-3 mest sandsynlige typer – men det er
              gennem selvobservation, refleksion og samtale med mennesker, der kender dig godt, at
              du gradvist vil kunne mærke, hvilken type der virkelig passer.
            </p>
            <div className="bg-white rounded-lg p-4 mt-4 border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Hvad du kan gøre nu
              </h4>
              <ul className="space-y-1 text-sm text-amber-800">
                <li>• Læs om den type, du har fået – og de nærliggende typer</li>
                <li>• Vær nysgerrig: Hvad resonerer? Hvad føles fremmed?</li>
                <li>• Tal med andre om dine mønstre og reaktioner</li>
                <li>• Husk: Du har alle ni typer i dig – men én er dit "hjemmeområde"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Du har identificeret dig selv som {selfIdentifiedType}</strong>
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  (Testresultatet viste {topResult.type} med {topResult.percentage}% match)
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
                <p className="text-gray-600">match med denne type</p>
              </>
            ) : (
              <p className="text-gray-600">Din selv-identificerede type</p>
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
              <h2 className="text-2xl font-bold text-gray-800">Dine Enneagram-vinger</h2>
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
                <h4 className="font-semibold text-indigo-800 mb-3">Dine vinge-scores:</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-800">
                        {topResult.type}{wingResults.result.primaryWing}
                      </span>
                      <span className="text-indigo-600 font-semibold">
                        {wingResults.result.primaryScore} svar
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
                        {wingResults.result.secondaryScore} svar
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
                      <strong>Balancerede vinger:</strong> Dine scores er meget tætte, hvilket betyder 
                      at du bruger begge vinger fleksibelt afhængigt af situationen.
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
            Udførlig beskrivelse af {topResult.type}: {typeInfo.title}
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
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Dine resultater</h4>
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
              <h3 className="text-xl font-semibold text-gray-800">🪶 Dine Enneagram-vinger</h3>
            </div>
            
            {/* Explanation of what wings mean for this specific type 
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                Hvad betyder vinger for din {topResult.type}?
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
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">DET ER DIG</span>
                    {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
                  </h4>
                  <p className="text-green-700 mb-4 font-medium">
                    <strong>Din personlighedsprofil:</strong> {' '}
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
                          {wingResults.result.primaryScore} svar
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
                          {wingResults.result.secondaryScore} svar
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
                        <strong>Balancerede vinger:</strong> Du bruger begge vinger fleksibelt afhængigt af situationen.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Wing Characteristics */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-green-600 mr-2">👤</span>
                  Sådan er du - karakteristika for din vinge-kombination:
                </h5>
                <div className="grid gap-2">
                  {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.characteristics.map((characteristic: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>Du</strong> {characteristic.toLowerCase()}</span>
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
            <h3 className="text-xl font-semibold text-gray-800">Alle Resultater</h3>
          </div>
          
          <div className="mb-4 text-sm text-gray-600">
            <p>Tryk på hver type for at læse mere om den:</p>
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
                <strong>Du har identificeret dig selv som {selfIdentifiedType}</strong> (selvom testresultatet viste {topResult.type})
              </p>
            </div>
          )}

          <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Compass className="w-5 h-5 mr-2" />
              Tror du, at en anden type passer bedre?
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              Efter at have læst om de forskellige typer, identificerer du dig måske mere med en anden type.
              Det er helt normalt – testen giver en indikation, men kun du kan virkelig vide, hvilken type der passer bedst.
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
                  {result.type === topResult.type && ' (testresultat)'}
                  {selfIdentifiedType === result.type && ' ✓'}
                </button>
              ))}
            </div>
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <p className="text-xs text-gray-600 mt-3">
                💡 Din valgte type gemmes automatisk i din personlige URL
              </p>
            )}
          </div>
        </div>

        {/* Enneagram Info Sections - Basic Fears, Desires, Triads and Stress/Growth */}
        <EnneagramInfoSection primaryType={topResult.type} />

        {/* Not to be confused with section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {topResult.type}: {typeInfo.title} - Ikke at forveksle med
          </h3>
          <div className="space-y-4">
            {typeDetails[topResult.type].notToBeConfusedWith.map((confusion, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  {confusion.type}
                </h4>
                <p className="text-yellow-700 text-sm">
                  <strong>Forskellen:</strong> {confusion.difference}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn more about your type */}
        {!wingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 print-hide-detailed">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Vil du vide mere om din type?
            </h3>

            <div>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Få en dybdegående forståelse af hvordan din personlighedstype påvirker dit arbejdsliv,
                  dine relationer og din personlige udvikling.
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🪶 Hvad er Enneagram-vinger?</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Din {topResult.type} har to "naboer" på Enneagram-cirklen, som kaldes <strong>vinger</strong>.
                    Disse vinger blander sig med din grundtype og skaber en mere nuanceret og præcis beskrivelse af din personlighed.
                  </p>
                  <p className="text-blue-700 text-sm">
                    {getWingExplanationForType(topResult.type)} Vinge-testen tager kun 5 minutter og giver dig en endnu mere præcis profil.
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
                  Lær mere om din {topResult.type}: {typeInfo.title}
                  <span className="ml-2">→</span>
                </button>

                <button
                  onClick={() => setShowWingTestIntro(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Opdag dine Enneagram-vinger
                  <span className="ml-2">✨</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-2 border-yellow-200 no-print">
            <h3 className="font-semibold text-yellow-800 mb-3 text-lg">💾 Gem dine resultater</h3>
            <p className="text-yellow-700 mb-4 text-sm">
              Vi gemmer ikke dine svar i en database. I stedet kan du gemme en personlig URL
              der indeholder alle dine svar. På den måde kan du altid vende tilbage til dine resultater!
            </p>
            <button
              onClick={handleSaveUrl}
              className="inline-flex items-center px-8 py-3 bg-yellow-600 text-white font-semibold text-lg rounded-lg hover:bg-yellow-700 transition-colors duration-200 shadow-lg"
            >
              💾 Gem min personlige URL
            </button>
            <p className="text-yellow-600 text-xs mt-3">
              URL'en kopieres automatisk - gem den et sikkert sted (f.eks. i dine bogmærker)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => setShowReviewAnswers(true)}
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 no-print"
            >
              <Search className="w-5 h-5 mr-2" />
              Gennemse / Rediger svar
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 no-print"
            >
              <Printer className="w-5 h-5 mr-2" />
              Print / Gem som PDF
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 no-print"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Del via email/SMS
            </button>

            <button
              onClick={() => setShowEmailDialog(true)}
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200 no-print"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send via Email
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
          <h3 className="font-bold text-gray-800 mb-3 text-center">💾 Din personlige URL</h3>
          <p className="text-gray-700 text-sm mb-3 text-center">
            Besøg denne URL for at vende tilbage til dine resultater:
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
            Denne URL indeholder alle dine svar og vil altid vise dine resultater.
          </p>
        </div>

        {/* Start forfra button */}
        <div className="mt-8 text-center no-print">
          <button
            onClick={onRestart}
            className="inline-flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Slet alle svar og start forfra
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Dette vil slette alle dine svar permanent
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
                      Send resultater via email
                    </h3>
                    <p className="text-gray-600 text-center">
                      Indtast din email-adresse, så sender vi dine testresultater og et link til denne side.
                    </p>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email-adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="din@email.dk"
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
                        Sender...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        Send email
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Vi gemmer ikke din email permanent. Den bruges kun til at sende dine resultater.
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
                    Email sendt!
                  </h3>
                  <p className="text-gray-600">
                    Tjek din indbakke for dine testresultater.
                  </p>
                </div>
              )}
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
                Lær mere om {result.type} →
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
    'Type 1': 'Som Perfektionist har du en stærk indre kompas der guider dig mod det rigtige og principielle. Du har naturlige lederegenskaber og en evne til at se, hvordan ting kan forbedres. Din kritiske sans er både en styrke og en udfordring - den hjælper dig med at levere høj kvalitet, men kan også føre til selvkritik og frustration. Du trives i strukturerede miljøer hvor dine høje standarder bliver værdsat, og du bidrager med integritet og pålidelig ekspertise til dit team.',
    
    'Type 2': 'Som Hjælper har du en exceptionel evne til at mærke andres behov og en naturlig drivkraft til at støtte dem omkring dig. Du skaber varme, tillidsfulde relationer og er ofte den, folk kommer til for råd og støtte. Din empati og omsorgsfulde natur gør dig til en værdifuld teamspiller, men husk også at prioritere dine egne behov. Du blomstrer i miljøer hvor din omsorg bliver værdsat, og hvor du kan gøre en reel forskel for andre.',
    
    'Type 3': 'Som den Præstationsorienterede har du en naturlig drivkraft mod succes og en evne til at inspirere andre med din energi og optimisme. Du er målrettet, tilpasningsdygtig og god til at læse, hvad der skal til for at lykkes i forskellige situationer. Din konkurrenceinstinkt og fokus på resultater gør dig til en stærk performer, men husk også at værdsætte processen og ikke kun slutresultatet. Du trives i dynamiske miljøer hvor dine præstationer bliver anerkendt.',
    
    'Type 4': 'Som Individualist bringer du kreativitet, dybde og autenticitet til alt, hvad du laver. Du har en unik evne til at se skønhed og mening i det, andre måske overser, og du bidrager med originale perspektiver og innovative løsninger. Din følsomhed og intuition gør dig til en værdifuld rådgiver og kreativ kraft. Du trives bedst i miljøer hvor din individualitet bliver værdsat, og hvor du har frihed til at udtrykke dig autentisk.',
    
    'Type 5': 'Som Undersøger bringer du dybde, analyse og uafhængig tænkning til dit team. Du har en naturlig evne til at forstå komplekse systemer og komme med gennemtænkte, objektive løsninger. Din forskning og ekspertise er uvurderlig, og du bidrager med stabilitet og pålidelig viden. Du trives i miljøer hvor du har tid til at tænke dybt, og hvor din ekspertise bliver respekteret og udnyttet konstruktivt.',
    
    'Type 6': 'Som Loyalist er du en pålidelig og engageret teamspiller med en stærk følelse af ansvar og loyalitet. Du har en naturlig evne til at forudse problemer og planlægge for forskellige scenarier, hvilket gør dig til en værdifuld risikovurderer og problemløser. Din loyalitet og engagement skaber stærke, varige relationer, og du bidrager med stabilitet og troværdighed til dit team.',
    
    'Type 7': 'Som Entusiast bringer du energi, kreativitet og optimisme til alle situationer. Du har en naturlig evne til at se muligheder og inspirere andre med din entusiasme. Din alsidighed og tilpasningsevne gør dig til en værdifuld innovatør og problemløser. Du trives i dynamiske miljøer hvor du kan udforske nye ideer og arbejde på forskellige projekter samtidig.',
    
    'Type 8': 'Som Udfordrer bringer du styrke, beslutningskraft og beskyttende lederskab til dit team. Du har en naturlig evne til at tage kontrol i vanskelige situationer og kæmpe for det, du tror på. Din direkte kommunikationsstil og fokus på retfærdighed gør dig til en stærk advokat og leder. Du trives i miljøer hvor du kan tage ansvar og gøre en reel forskel.',
    
    'Type 9': 'Som Fredsmager bringer du stabilitet, diplomati og en naturlig evne til at se alle sider af en sag. Du har en særlig gave til at skabe harmoni og hjælpe andre med at finde fælles fodslag. Din rolige tilstedeværelse og evne til at lytte gør dig til en værdifuld mægler og teamspiller. Du trives i støttende miljøer hvor din diplomatiske tilgang bliver værdsat.'
  };
  
  return descriptions[type] || 'Beskrivelse ikke tilgængelig.';
};

// Helper functions that need to be implemented
const getWingExplanationForType = (type: string): string => {
  // Implementation needed
  return `For ${type} betyder vingerne...`;
};

const getWingTitle = (type: string, wing: string): string => {
  // Implementation needed
  return `${type}${wing} titel`;
};

const getWingShortExplanation = (type: string, wing: string): string => {
  // Implementation needed
  return `Kort forklaring af ${type}${wing}`;
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