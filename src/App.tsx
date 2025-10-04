import React from 'react';
import IntroPage from './components/IntroPage';
import QuestionCard from './components/QuestionCard';
import EmailCapture from './components/EmailCapture';
import ResultsPage, { saveResults } from './components/ResultsPage';
import { useEnneagramTest } from './hooks/useEnneagramTest';

function App() {
  // All hooks must be called at the top level, before any conditional returns
  const {
    showIntro,
    startTest,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    isComplete,
    answerQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    canGoNext,
    canGoPrevious,
    calculateResults,
    restart,
    getCurrentRating,
    responses
  } = useEnneagramTest();

  const [showEmailCapture, setShowEmailCapture] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  const [isDebugMode, setIsDebugMode] = React.useState(false);

  // Listen for debug mode event
  React.useEffect(() => {
    const handleDebugMode = () => {
      setIsDebugMode(true);
      setShowEmailCapture(true);
    };
    
    window.addEventListener('debugMode', handleDebugMode);
    return () => window.removeEventListener('debugMode', handleDebugMode);
  }, []);

  // Save results when test is complete
  // Email capture disabled - using URL-based saving instead
  /*React.useEffect(() => {
    if (isComplete) {
      setShowEmailCapture(true);
    }
  }, [isComplete]);*/
  
  // Check if we have results in URL - if so, we should always show results
  // Use useMemo so it recalculates on every render based on current URL
  const hasUrlResults = React.useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.has('responses');
  }, [window.location.search]);

  React.useEffect(() => {
    if (hasUrlResults) {
      setShowEmailCapture(false);
      setUserEmail('url-results@example.com');
    }
  }, [hasUrlResults]);

  const restartComplete = React.useCallback(() => {
    // Clear all debug and test state
    setIsDebugMode(false);
    setShowEmailCapture(false);
    setUserEmail('');
    // Clear URL parameters
    window.history.replaceState({}, '', window.location.pathname);
    // Clear any stored data
    localStorage.removeItem('enneagram_responses');
    localStorage.removeItem('enneagram_questions');
    sessionStorage.removeItem('enneagram_responses');
    sessionStorage.removeItem('enneagram_questions');
    // Reset the test hook
    restart();
  }, [restart]);

  // Generate fake results for debug mode
  const getDebugResults = () => {
    const types = ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7', 'Type 8', 'Type 9'];
    const results = [
      { type: 'Type 1', score: 65, percentage: 85 },
      { type: 'Type 2', score: 58, percentage: 77 },
      { type: 'Type 3', score: 52, percentage: 69 },
      { type: 'Type 4', score: 47, percentage: 61 },
      { type: 'Type 5', score: 42, percentage: 53 },
      { type: 'Type 6', score: 38, percentage: 45 },
      { type: 'Type 7', score: 33, percentage: 37 },
      { type: 'Type 8', score: 28, percentage: 29 },
      { type: 'Type 9', score: 23, percentage: 21 }
    ]
    return results;
  };

  if (showIntro) {
    return <IntroPage onStart={startTest} />;
  }

  // Email capture commented out - using URL-based saving
  /*if (showEmailCapture) {
    const results = isDebugMode ? getDebugResults() : calculateResults();
    return (
      <EmailCapture
        results={results}
        responses={responses}
        onEmailSubmitted={(email) => {
          setUserEmail(email);
          setShowEmailCapture(false);
          if (!isDebugMode) {
            saveResults(results, email);
          }
        }}
      />
    );
  }*/

  // Show results directly when test is complete OR if we have URL results
  if (isComplete || isDebugMode || hasUrlResults) {
    const results = isDebugMode ? getDebugResults() : calculateResults();
    return <ResultsPage results={results} onRestart={restartComplete} responses={responses} />;
  }

  // Ensure currentQuestion exists before rendering QuestionCard
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading question...</p>
        </div>
      </div>
    );
  }

  return (
    <QuestionCard
      question={currentQuestion}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={totalQuestions}
      onAnswer={answerQuestion}
      onNext={goToNextQuestion}
      onPrevious={goToPreviousQuestion}
      canGoNext={canGoNext}
      canGoPrevious={canGoPrevious}
      currentRating={getCurrentRating()}
    />
  );
}

export default App;