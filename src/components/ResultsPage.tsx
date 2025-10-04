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

const ResultsPage: React.FC<ResultsPageProps> = ({ results, onRestart, wingResult, responses }) => {
  const [showDetailPage, setShowDetailPage] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState<string | null>(null);
  const [showWingTest, setShowWingTest] = React.useState(false);
  const [showWingTestIntro, setShowWingTestIntro] = React.useState(false);
  const [wingResults, setWingResults] = React.useState<WingResultState | null>(null);
  
  const topResult = results[0];
  const typeInfo = typeDescriptions[topResult.type];
  const TypeIcon = typeIcons[topResult.type];
  
  // Print/PDF functionality
  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    // Create URL that goes directly to results page with current data
    const params = new URLSearchParams();
    if (responses && responses.length > 0) {
      params.set('responses', btoa(JSON.stringify(responses)));
    }
    if (wingResults) {
      // Add wing results to URL
      const wingResponses = wingResults.testData.questions.map((_, index) => ({
        questionIndex: index,
        selectedWing: index < wingResults.result.primaryScore ? wingResults.result.primaryWing : wingResults.result.secondaryWing
      }));
      params.set('wingResponses', btoa(JSON.stringify(wingResponses)));
    }
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    
    // Log test completion med alle detaljer
    const logger = TestLogger.getInstance();
    const wingResponses = wingResults ? wingResults.testData.questions.map((_, index) => ({
      questionIndex: index,
      selectedWing: index < wingResults.result.primaryScore ? wingResults.result.primaryWing : wingResults.result.secondaryWing
    })) : undefined;
    
    await logger.logTestCompletion(
      'shared-user@example.com', // Email for shared results
      results,
      responses || [],
      enneagramQuestions,
      wingResults,
      wingResponses,
      wingResults?.testData.questions
    );
    
    if (navigator.share && navigator.canShare) {
      const shareData = {
        title: 'Mine Enneagram Resultater',
        text: `Jeg er ${topResult.type}: ${typeInfo.title} (${topResult.percentage}% match)`,
        url: url
      };

      try {
        await navigator.share(shareData);
      } catch (error) {
        // Fallback to clipboard if sharing fails
        await navigator.clipboard.writeText(window.location.href);
        alert('Link kopieret til udklipsholder!');
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link kopieret til clipboard!');
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
              Vinger: {wingResults.testData.descriptions[wingResults.result.isBalanced ? 'balanced' : wingResults.result.primaryWing]?.title}
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dine Enneagram Resultater</h1>
          <p className="text-gray-600">Baseret på dine svar har vi identificeret din primære personlighedstype</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              {TypeIcon && <TypeIcon className="w-12 h-12 text-indigo-600 mr-3" />}
              <div>
                <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                  {topResult.type}: {typeInfo.title}
                </h2>
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {topResult.percentage}%
            </div>
            <p className="text-gray-600">match med denne type</p>
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
            {results.map((result, index) => {
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
        </div>

        {/*<div className="grid md:grid-cols-2 gap-6 mb-8 print:grid-cols-1 print:gap-2">*/}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        
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
        </div>

        {/* Enneagram Info Sections - Triads and Stress/Growth */}
        <EnneagramInfoSection primaryType={topResult.type} />

        {/* Learn more about your type */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 print-hide-detailed">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {wingResults ? 'Få dine komplette resultater på email' : 'Vil du vide mere om din type?'}
          </h3>
          
          {wingResults ? (
            <div>
              <p className="text-gray-700 mb-6">
                Du har nu gennemført både hovedtesten og vinge-testen. Få dine komplette resultater 
                med detaljerede beskrivelser sendt til din email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    sendCompleteResultsEmail(userEmail || 'test@example.com', results, wingResults);
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  📧 Send komplette resultater til email
                </button>
                <button
                  onClick={() => {
                    setSelectedType(topResult.type);
                    setShowDetailPage(true);
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Lær mere om din {topResult.type}: {typeInfo.title}{wingResults ? ' med dine vinger' : ''}
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ) : (
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
                  Lær mere om din {topResult.type}: {typeInfo.title}{wingResults ? ' med dine vinger' : ''}
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
          )}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
              Del dine resultater
            </button>
          </div>
          
           {/*<button
            onClick={onRestart}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 no-print"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Tag testen igen
          </button>*/}
          
          {/* Debug links - only visible in development */}
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
          </div>
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