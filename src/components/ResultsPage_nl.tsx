import LanguageSelector from './LanguageSelector';
import React from 'react';
// import { ArrowLeft, Award, BarChart3, Printer, Share2 } from 'lucide-react';
import { typeDetails } from '../data/typeDetails_nl';
import TestLogger from '../utils/logger';
import TypeDetailPage from './TypeDetailPage';
import TypeDetailPage_nl from './TypeDetailPage_nl';
import WingTestIntro_nl from './WingTestIntro_nl';
import WingTestIntro from './WingTestIntro';
import WingResultsPage from './WingResultsPage';
import { useWingTest } from '../hooks/useWingTest';
import { type1WingQuestions } from '../data/wingQuestions/wingQuestions1_nl';
import { type2WingQuestions } from '../data/wingQuestions/wingQuestions2_nl';
import { type3WingQuestions } from '../data/wingQuestions/wingQuestions3_nl';
import { type4WingQuestions } from '../data/wingQuestions/wingQuestions4_nl';
import { type5WingQuestions } from '../data/wingQuestions/wingQuestions5_nl';
import { type6WingQuestions } from '../data/wingQuestions/wingQuestions6_nl';
import { type7WingQuestions } from '../data/wingQuestions/wingQuestions7_nl';
import { type8WingQuestions } from '../data/wingQuestions/wingQuestions8_nl';
import { type9WingQuestions } from '../data/wingQuestions/wingQuestions9_nl';
import { Award, BarChart3, RefreshCw, Users, Heart, Target, Palette, Search, Shield, Zap, Crown, Compass, Feather, Sparkles, Ambulance as Balance, HandHeart, Lightbulb, Flame, Mountain, TreePine, Waves, Printer, Share2 } from 'lucide-react';
import EnneagramChart from './EnneagramChart';
import WingQuestionCard from './WingQuestionCard';
import { enneagramQuestions } from '../data/questions_nl';
import EnneagramInfoSection_nl from './EnneagramInfoSection_nl';

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
    title: 'De Perfectionist',
    description: 'U bent principieel, doelgericht en zelfbeheerst. U streeft ernaar alles te verbeteren en heeft hoge standaarden voor uzelf en anderen.',
    traits: ['Principieel', 'Georganiseerd', 'Zelfgedisciplineerd', 'Kritisch', 'Idealistisch']
  },
  'Type 2': {
    title: 'De Helper',
    description: 'U bent zorgzaam, interpersoonlijk en bezitterig. U wilt zich geliefd en gewenst voelen en uit uw gevoelens voor anderen.',
    traits: ['Zorgzaam', 'Empathisch', 'Royaal', 'Mensgericht', 'Ondersteunend']
  },
  'Type 3': {
    title: 'De Presteerder',
    description: 'U bent ambitieus, aanpasbaar en gedreven door succes. U streeft ernaar de beste te zijn en wilt erkenning voor uw prestaties.',
    traits: ['Doelgericht', 'Energiek', 'Pragmatisch', 'Zelfverzekerd', 'Competitief']
  },
  'Type 4': {
    title: 'De Individualist',
    description: 'U bent creatief, emotioneel eerlijk en persoonlijk. U zoekt identiteit en betekenis en drukt uzelf uit door middel van authenticiteit.',
    traits: ['Creatief', 'Gevoelig', 'Introspectief', 'Uniek', 'Expressief']
  },
  'Type 5': {
    title: 'De Onderzoeker',
    description: 'U bent intens, cerebraal en perceptief. U bent onafhankelijk en innovatief, en u zoekt de wereld om u heen te begrijpen.',
    traits: ['Analytisch', 'Onafhankelijk', 'Nieuwsgierig', 'Objectief', 'Privé']
  },
  'Type 6': {
    title: 'De Loyalist',
    description: 'U bent betrokken, verantwoordelijk en betrouwbaar. U zoekt veiligheid en ondersteuning en bent loyaal aan systemen en mensen.',
    traits: ['Loyaal', 'Verantwoordelijk', 'Voorzichtig', 'Coöperatief', 'Betrouwbaar']
  },
  'Type 7': {
    title: 'De Enthousiast',
    description: 'U bent spontaan, veelzijdig en optimistisch. U zoekt nieuwe ervaringen en mogelijkheden en houdt uzelf bezig om pijn te vermijden.',
    traits: ['Optimistisch', 'Spontaan', 'Veelzijdig', 'Avontuurlijk', 'Energiek']
  },
  'Type 8': {
    title: 'De Uitdager',
    description: 'U bent zelfverzekerd, sterk en assertief. U beschermt uzelf en controleert uw omgeving, en u strijdt voor rechtvaardigheid.',
    traits: ['Sterk', 'Direct', 'Zelfverzekerd', 'Beschermend', 'Rechtvaardig']
  },
  'Type 9': {
    title: 'De Vredestichter',
    description: 'U bent accepterend, vertrouwend en stabiel. U wenst innerlijke en uiterlijke vrede en zoekt harmonie in uw relaties.',
    traits: ['Vredig', 'Ondersteunend', 'Accepterend', 'Diplomatiek', 'Stabiel']
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
  
  // Print/PDF functionaliteit
  const handlePrint = () => {
    window.print();
  };

  const handleSaveUrl = async () => {
    // Maak een URL die direct naar de resultatenpagina gaat met de huidige data
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

    // Log testvoltooiing met alle details
    const logger = TestLogger.getInstance();
    const wingResponses = wingResults ? wingResults.testData.questions.map((_, index) => ({
      questionIndex: index,
      selectedWing: index < wingResults.result.primaryScore ? wingResults.result.primaryWing : wingResults.result.secondaryWing
    })) : undefined;

    await logger.logTestCompletion(
      'url-saved-user@example.com', // E-mail placeholder voor URL-opgeslagen resultaten
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
      alert('✅ Uw persoonlijke URL is nu gekopieerd!\n\nBewaar deze URL op een veilige plek - deze bevat al uw antwoorden.\n\nU kunt altijd terugkeren naar uw resultaten door deze link te openen.');
    } catch (error) {
      // Fallback if clipboard access fails
      prompt('Kopieer deze URL en bewaar deze op een veilige plek:', url);
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
        title: 'Mijn Enneagram Resultaten',
        text: `Ik ben ${topResult.type}: ${typeInfo.title} (${topResult.percentage}% match)`,
        url: url
      };

      try {
        await navigator.share(shareData);
      } catch (error) {
        // User cancelled share or it failed
        console.log('Delen geannuleerd of mislukt');
      }
    } else {
      // Terugval: kopiëren naar klembord
      await navigator.clipboard.writeText(url);
      alert('✅ Link gekopieerd naar klembord!\n\nPlak deze link in een e-mail, SMS of bericht om uw resultaten te delen.');
    }
  };

  // Vraag vleugeltestgegevens op basis van primair type
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
        return type1WingQuestions; // Terugval
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

  // Laad zelf-geïdentificeerd type van URL
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selfType = params.get('selfType');
    if (selfType) {
      setSelfIdentifiedType(selfType);
    }
  }, []);

  // Herbereken resultaten wanneer antwoorden veranderen
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

  // Beheer van het bewerken van antwoorden
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

  // Herbereken resultaten wanneer bewerkte antwoorden veranderen
  React.useEffect(() => {
    if (editedResponses.length === enneagramQuestions.length) {
      recalculateResults();
    }
  }, [editedResponses, recalculateResults]);

  // Update URL wanneer bewerkte antwoorden veranderen
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

  // Beheer van de voltooiing van de vleugeltest
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

  // Debugfunctie om willekeurige testresultaten te genereren
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
    // Dit zou normaal gesproken navigeren naar resultaten met willekeurige data
    console.log('Willekeurige resultaten gegenereerd:', randomResults);
    // Herlaad voor nu gewoon de pagina met de huidige resultaten
    window.location.reload();
  };

  const showResponsesDebug = () => {
    // Haal antwoorden op uit localStorage indien beschikbaar
    try {
      const responses = JSON.parse(sessionStorage.getItem('enneagram_responses') || localStorage.getItem('enneagram_responses') || '[]');
      const questions = JSON.parse(sessionStorage.getItem('enneagram_questions') || localStorage.getItem('enneagram_questions') || '[]');
      
      if (responses.length === 0 || questions.length === 0) {
        // Probeer op te halen uit de huidige teststatus indien beschikbaar
        console.log('Controleren op huidige testgegevens...');
        console.log('Antwoorden gevonden:', responses.length);
        console.log('Vragen gevonden:', questions.length);
        alert('Geen antwoorddata gevonden. Doe eerst de test om de antwoorddata te zien.');
        return;
      }
    
      let debugInfo = 'ANTWOORD DEBUG:\n\n';
      responses.forEach((response: any, index: number) => {
        const question = questions[response.questionIndex];
        if (question) {
          debugInfo += `Vraag ${response.questionIndex + 1} (${question.type}):\n`;
          debugInfo += `"${question.question}"\n`;
          debugInfo += `Antwoord: ${response.rating}/5\n\n`;
        }
      });
    
      // Create a new window to show debug info
      const debugWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes');
      if (debugWindow) {
        debugWindow.document.write(`
          <html>
            <head>
              <title>Test Antwoord Debug</title>
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
        alert('Pop-up is geblokkeerd. Zie de console voor antwoorddata.');
      }
    } catch (error) {
      console.error('Fout bij het laden van antwoorddata:', error);
      alert('Fout bij het laden van antwoorddata. Zie de console voor details.');
    }
  };

  const showAllLogs = () => {
    const logger = TestLogger.getInstance();
    logger.showAllLogsInConsole();
    logger.exportAllLogs(); // Download alle logs als bestand
  };
  // Toon detailpagina indien geselecteerd
  if (showDetailPage && selectedType) {
    const typeDetail = typeDetails[selectedType];
    if (typeDetail) {
      return (
        <TypeDetailPage_nl typeDetail={typeDetail} 
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

  // Toon vleugeltest intro
  if (showWingTestIntro) {
    return (
      <WingTestIntro_nl primaryType={topResult.type}
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

  // Toon vleugeltest vragen
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

  // Toon antwoorden bekijken/bewerken weergave
  if (showReviewAnswers) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Bekijk en bewerk uw antwoorden</h2>
                <p className="text-gray-600 mt-1">Uw resultaten worden automatisch bijgewerkt wanneer u antwoorden wijzigt</p>
              </div>
              <button
                onClick={() => setShowReviewAnswers(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Terug naar resultaten
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
                        Vraag {index + 1} van {enneagramQuestions.length}
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
                            {rating === 1 && 'Helemaal niet'}
                            {rating === 2 && 'Niet erg goed'}
                            {rating === 3 && 'Redelijk'}
                            {rating === 4 && 'Goed'}
                            {rating === 5 && 'Erg goed'}
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
                Klaar - Bekijk bijgewerkte resultaten
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
        {/* Alleen-print compacte header */}
        <div className="print-only hidden print-header">
          <div className="print-type-title">
            {topResult.type}: {typeInfo.title}
          </div>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {topResult.percentage}% match
          </div>
          {wingResults && (
            <div style={{ fontSize: '12px', marginTop: '4px' }}>
              Vleugels: {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Uw Enneagram Resultaten</h1>
          <p className="text-gray-600">Op basis van uw antwoorden hebben wij uw primaire personlijkheidstype geïdentificeerd</p>
        </div>

        {/* Disclaimer over testnauwkeurigheid */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">🧭</span>
            <h3 className="text-xl font-semibold text-amber-900">
              Uw test is een richtlijn – geen definitief oordeel ;-)
            </h3>
          </div>
          <div className="space-y-3 text-amber-900">
            <p>
              U heeft nu een Enneagram-test gedaan, en deze heeft u een resultaat gegeven – een mogelijk type.
              Maar het is belangrijk te onthouden dat de test niet noodzakelijkerwijs uw uiteindelijke type onthult.
              Het is een instrument voor reflectie, geen antwoordenboek.
            </p>
            <p>
              Het Enneagram gaat over zelfkennis, en het kan tijd kosten om het type te vinden
              dat echt overeenkomt met uw diepste patronen.
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-4 italic text-amber-800">
              "Zelfontdekking is een proces – en het eindigt niet met het vinden van uw type.
              Sterker nog, het is nog maar het begin."
            </blockquote>
            <p className="text-sm">
              <em>- The Wisdom of the Enneagram, Riso & Hudson</em>
            </p>
            <p>
              De test kan u een indicatie geven – misschien de 2-3 meest waarschijnlijke types – maar het is
              door zelfobservatie, reflectie en gesprekken met mensen die u goed kennen, dat
              u geleidelijk zult voelen welk type echt bij u past.
            </p>
            <div className="bg-white rounded-lg p-4 mt-4 border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Wat u nu kunt doen
              </h4>
              <ul className="space-y-1 text-sm text-amber-800">
                <li>• Lees over het type dat u heeft gekregen – en de nabijgelegen types</li>
                <li>• Wees nieuwsgierig: Wat resoneert? Wat voelt vreemd?</li>
                <li>• Praat met anderen over uw patronen en reacties</li>
                <li>• Onthoud: U heeft alle negen types in u – maar één is uw "thuisbasis"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>U heeft uzelf geïdentificeerd als {selfIdentifiedType}</strong>
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  (Het testresultaat toonde {topResult.type} met {topResult.percentage}% match)
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
                <p className="text-gray-600">match met dit type</p>
              </>
            ) : (
              <p className="text-gray-600">Uw zelf-geïdentificeerde type</p>
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
              <h2 className="text-2xl font-bold text-gray-800">Uw Enneagram-vleugels</h2>
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
                <h4 className="font-semibold text-indigo-800 mb-3">Uw vleugel-scores:</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-800">
                        {topResult.type}{wingResults.result.primaryWing}
                      </span>
                      <span className="text-indigo-600 font-semibold">
                        {wingResults.result.primaryScore} antwoorden
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
                        {wingResults.result.secondaryScore} antwoorden
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
                      <strong>Gebalanceerde vleugels:</strong> Uw scores liggen zeer dicht bij elkaar, wat betekent 
                      dat u beide vleugels flexibel gebruikt, afhankelijk van de situatie.
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
            Gedetailleerde beschrijving van {topResult.type}: {typeInfo.title}
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
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Uw resultaten</h4>
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
              <h3 className="text-xl font-semibold text-gray-800">🪶 Uw Enneagram-vleugels</h3>
            </div>
            
            {/* Explanation of what wings mean for this specific type 
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                Wat betekenen vleugels voor uw {topResult.type}?
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
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">DAT BENT U</span>
                    {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
                  </h4>
                  <p className="text-green-700 mb-4 font-medium">
                    <strong>Uw persoonlijkheidsprofiel:</strong> {' '}
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
                          {wingResults.result.primaryScore} antwoorden
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
                          {wingResults.result.secondaryScore} antwoorden
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
                        <strong>Gebalanceerde vleugels:</strong> U gebruikt beide vleugels flexibel, afhankelijk van de situatie.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Wing Characteristics */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-green-600 mr-2">👤</span>
                  Zo bent u - kenmerken van uw vleugel-combinatie:
                </h5>
                <div className="grid gap-2">
                  {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.characteristics.map((characteristic: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700"><strong>U</strong> {characteristic.toLowerCase()}</span>
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
            <h3 className="text-xl font-semibold text-gray-800">Alle Resultaten</h3>
          </div>
          
          <div className="mb-4 text-sm text-gray-600">
            <p>Klik op elk type om er meer over te lezen:</p>
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
                <strong>U heeft uzelf geïdentificeerd als {selfIdentifiedType}</strong> (ook al toonde het testresultaat {topResult.type})
              </p>
            </div>
          )}

          <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Compass className="w-5 h-5 mr-2" />
              Denkt u dat een ander type beter bij u past?
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              Na het lezen over de verschillende types, identificeert u zich misschien meer met een ander type.
              Dat is volkomen normaal – de test geeft een indicatie, maar alleen u kunt echt weten welk type het beste past.
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
                  {result.type === topResult.type && ' (testresultaat)'}
                  {selfIdentifiedType === result.type && ' ✓'}
                </button>
              ))}
            </div>
            {selfIdentifiedType && selfIdentifiedType !== topResult.type && (
              <p className="text-xs text-gray-600 mt-3">
                💡 Uw gekozen type wordt automatisch opgeslagen in uw persoonlijke URL
              </p>
            )}
          </div>
        </div>

        {/* Enneagram Info Secties - Basis Angsten, Wensen, Triades en Stress/Groei */}
        <EnneagramInfoSection_nl primaryType={topResult.type} />

        {/* Not to be confused with section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {topResult.type}: {typeInfo.title} - Niet te verwarren met
          </h3>
          <div className="space-y-4">
            {typeDetails[topResult.type].notToBeConfusedWith.map((confusion, index) => (
              <div key={index} className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  {confusion.type}
                </h4>
                <p className="text-yellow-700 text-sm">
                  <strong>Het verschil:</strong> {confusion.difference}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn more about your type */}
        {!wingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 print-hide-detailed">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Wilt u meer weten over uw type?
            </h3>

            <div>
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Krijg een diepgaand inzicht in hoe uw persoonlijkheidstype uw werkleven,
                  uw relaties en uw persoonlijke ontwikkeling beïnvloedt.
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🪶 Wat zijn Enneagram-vleugels?</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Uw {topResult.type} heeft twee "buren" op de Enneagram-cirkel, die <strong>vleugels</strong> worden genoemd.
                    Deze vleugels mengen zich met uw basistype en creëren een meer genuanceerde en precieze beschrijving van uw persoonlijkheid.
                  </p>
                  <p className="text-blue-700 text-sm">
                    {getWingExplanationForType(topResult.type)} De Vleugeltest duurt slechts 5 minuten en geeft u een nog preciezer profiel.
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
                  Leer meer over uw {topResult.type}: {typeInfo.title}
                  <span className="ml-2">→</span>
                </button>

                <button
                  onClick={() => setShowWingTestIntro(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Ontdek uw Enneagram-vleugels
                  <span className="ml-2">✨</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-2 border-yellow-200 no-print">
            <h3 className="font-semibold text-yellow-800 mb-3 text-lg">💾 Bewaar uw resultaten</h3>
            <p className="text-yellow-700 mb-4 text-sm">
              Wij slaan uw antwoorden niet op in een database. In plaats daarvan kunt u een persoonlijke URL
              opslaan die al uw antwoorden bevat. Zo kunt u altijd terugkeren naar uw resultaten!
            </p>
            <button
              onClick={handleSaveUrl}
              className="inline-flex items-center px-8 py-3 bg-yellow-600 text-white font-semibold text-lg rounded-lg hover:bg-yellow-700 transition-colors duration-200 shadow-lg"
            >
              💾 Bewaar mijn persoonlijke URL
            </button>
            <p className="text-yellow-600 text-xs mt-3">
              De URL wordt automatisch gekopieerd - bewaar deze op een veilige plek (bijv. in uw bladwijzers)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => setShowReviewAnswers(true)}
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 no-print"
            >
              <Search className="w-5 h-5 mr-2" />
              Bekijk / Bewerk antwoorden
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 no-print"
            >
              <Printer className="w-5 h-5 mr-2" />
              Printen / Opslaan als PDF
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 no-print"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Delen via e-mail/SMS
            </button>
          </div>
          
           {/*<button
            onClick={onRestart}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 no-print"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Doe de test opnieuw
          </button>*/}
          
          {/* Debug links - only visible in development 
          <div className="mt-8 text-center space-x-4 no-print">
            <span
              onClick={showDebugResults}
              className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              title="Test met willekeurige resultaten"
            >
              🔧
            </span>
            <span
              onClick={showResponsesDebug}
              className="text-xs text-gray-500 cursor-pointer opacity-30"
              title="Bekijk alle antwoorden (debug)"
            >
              🔍
            </span>
            <span
              onClick={showAllLogs}
              className="text-xs text-gray-500 cursor-pointer opacity-30"
              title="Download alle testlogs (alleen voor ontwikkelaar)"
            >
              📊
            </span>
          </div>*/}
        </div>

        {/* Print-only URL section */}
        <div className="print-only hidden bg-gray-50 rounded-lg p-6 border-2 border-gray-300 mt-8" style={{ display: 'none' }}>
          <h3 className="font-bold text-gray-800 mb-3 text-center">💾 Uw persoonlijke URL</h3>
          <p className="text-gray-700 text-sm mb-3 text-center">
            Bezoek deze URL om terug te keren naar uw resultaten:
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
            Deze URL bevat al uw antwoorden en zal altijd uw resultaten tonen.
          </p>
        </div>

        {/* Start forfra button */}
        <div className="mt-8 text-center no-print">
          <button
            onClick={onRestart}
            className="inline-flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Verwijder alle antwoorden en begin opnieuw
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Dit zal al uw antwoorden permanent verwijderen
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
                Leer meer over {result.type} →
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
    'Type 1': 'Als Perfectionist heeft u een sterk innerlijk kompas dat u leidt naar wat juist en principieel is. U heeft natuurlijke leiderschapskwaliteiten en een vermogen om te zien hoe dingen verbeterd kunnen worden. Uw kritische blik is zowel een kracht als een uitdaging - het helpt u om hoge kwaliteit te leveren, maar kan ook leiden tot zelfkritiek en frustratie. U gedijt in gestructureerde omgevingen waar uw hoge standaarden gewaardeerd worden, en u draagt bij met integriteit en betrouwbare expertise aan uw team.',
    
    'Type 2': 'Als Helper heeft u een uitzonderlijk vermogen om de behoeften van anderen aan te voelen en een natuurlijke drijfveer om de mensen om u heen te ondersteunen. U creëert warme, vertrouwensvolle relaties en bent vaak degene bij wie mensen om raad en steun komen. Uw empathie en zorgzame aard maken u een waardevolle teamspeler, maar vergeet niet ook uw eigen behoeften prioriteit te geven. U bloeit in omgevingen waar uw zorg wordt gewaardeerd en waar u een echt verschil kunt maken voor anderen.',
    
    'Type 3': 'Als Presteerder heeft u een natuurlijke drijfveer richting succes en een vermogen om anderen te inspireren met uw energie en optimisme. U bent doelgericht, aanpasbaar en goed in het inschatten wat nodig is om te slagen in verschillende situaties. Uw competitieve instinct en focus op resultaten maken u een sterke performer, maar onthoud ook de waarde van het proces en niet alleen het eindresultaat. U gedijt in dynamische omgevingen waar uw prestaties worden erkend.',
    
    'Type 4': 'Als Individualist brengt u creativiteit, diepgang en authenticiteit in alles wat u doet. U heeft een uniek vermogen om schoonheid en betekenis te zien in wat anderen misschien over het hoofd zien, en u draagt bij met originele perspectieven en innovatieve oplossingen. Uw gevoeligheid en intuïtie maken u een waardevolle adviseur en creatieve kracht. U gedijt het beste in omgevingen waar uw individualiteit wordt gewaardeerd en waar u de vrijheid heeft om uzelf authentiek uit te drukken.',
    
    'Type 5': 'Als Onderzoeker brengt u diepgang, analyse en onafhankelijk denken naar uw team. U heeft een natuurlijk vermogen om complexe systemen te begrijpen en met doordachte, objectieve oplossingen te komen. Uw onderzoek en expertise zijn van onschatbare waarde, en u draagt bij met stabiliteit en betrouwbare kennis. U gedijt in omgevingen waar u tijd heeft om diep na te denken en waar uw expertise wordt gerespecteerd en constructief wordt benut.',
    
    'Type 6': 'Als Loyalist bent u een betrouwbare en betrokken teamspeler met een sterk gevoel van verantwoordelijkheid en loyaliteit. U heeft een natuurlijk vermogen om problemen te anticiperen en voor verschillende scenario\'s te plannen, wat u een waardevolle risicobeoordelaar en probleemoplosser maakt. Uw loyaliteit en betrokkenheid creëren sterke, duurzame relaties, en u draagt bij met stabiliteit en geloofwaardigheid aan uw team.',
    
    'Type 7': 'Als Enthousiast brengt u energie, creativiteit en optimisme in alle situaties. U heeft een natuurlijk vermogen om mogelijkheden te zien en anderen te inspireren met uw enthousiasme. Uw veelzijdigheid en aanpassingsvermogen maken u een waardevolle innovator en probleemoplosser. U gedijt in dynamische omgevingen waar u nieuwe ideeën kunt verkennen en tegelijkertijd aan verschillende projecten kunt werken.',
    
    'Type 8': 'Als Uitdager brengt u kracht, besluitvaardigheid en beschermend leiderschap naar uw team. U heeft een natuurlijk vermogen om de controle over te nemen in moeilijke situaties en te strijden voor waar u in gelooft. Uw directe communicatiestijl en focus op rechtvaardigheid maken u een sterke pleitbezorger en leider. U gedijt in omgevingen waar u verantwoordelijkheid kunt nemen en een echt verschil kunt maken.',
    
    'Type 9': 'Als Vredestichter brengt u stabiliteit, diplomatie en een natuurlijk vermogen om alle kanten van een zaak te zien. U heeft een bijzondere gave om harmonie te creëren en anderen te helpen een gemeenschappelijke basis te vinden. Uw rustige aanwezigheid en luistervaardigheid maken u een waardevolle bemiddelaar en teamspeler. U gedijt in ondersteunende omgevingen waar uw diplomatieke aanpak wordt gewaardeerd.'
  };
  
  return descriptions[type] || 'Beschrijving niet beschikbaar.';
};

// Helper functions that need to be implemented
const getWingExplanationForType = (type: string): string => {
  // Implementation needed
  return `Voor ${type} betekenen de vleugels...`;
};

const getWingTitle = (type: string, wing: string): string => {
  // Implementation needed
  return `${type}${wing} titel`;
};

const getWingShortExplanation = (type: string, wing: string): string => {
  // Implementation needed
  return `Korte uitleg van ${type}${wing}`;
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
