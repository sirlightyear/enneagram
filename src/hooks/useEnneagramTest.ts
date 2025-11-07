import { useState, useCallback, useEffect } from 'react';
import { UserResponse, TestResult } from '../types/enneagram';
import { enneagramQuestions } from '../data/questions';

// URL state management functions
const encodeResponses = (responses: UserResponse[]): string => {
  return JSON.stringify(responses);
};

const decodeResponses = (encoded: string): UserResponse[] => {
  try {
    return JSON.parse(encoded);
  } catch {
    return [];
  }
};

const updateURL = (responses: UserResponse[], wingResponses?: any[]) => {
  const params = new URLSearchParams(window.location.search);
  if (responses.length > 0) {
    params.set('r', encodeResponses(responses));
  }
  if (wingResponses && wingResponses.length > 0) {
    params.set('w', JSON.stringify(wingResponses));
  }
  const newURL = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
  window.history.replaceState({}, '', newURL);
};

const loadFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const responsesParam = params.get('r') || params.get('responses');
  const wingResponsesParam = params.get('w') || params.get('wingResponses');

  let responses: UserResponse[] = [];
  let wingResponses: any[] = [];

  if (responsesParam) {
    try {
      responses = JSON.parse(responsesParam);
    } catch {
      try {
        responses = JSON.parse(atob(responsesParam));
      } catch {
        responses = [];
      }
    }
  }

  if (wingResponsesParam) {
    try {
      wingResponses = JSON.parse(wingResponsesParam);
    } catch {
      try {
        wingResponses = JSON.parse(atob(wingResponsesParam));
      } catch {
        wingResponses = [];
      }
    }
  }

  return { responses, wingResponses };
};

export const useEnneagramTest = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>(() => {
    const urlData = loadFromURL();
    return urlData.responses;
  });
  const [isComplete, setIsComplete] = useState(false);

  // Initialize from URL if we have responses
  useEffect(() => {
    const urlData = loadFromURL();
    if (urlData.responses.length > 0) {
      setShowIntro(false);
      setResponses(urlData.responses);
      
      // If all questions are answered, mark as complete
      if (urlData.responses.length === enneagramQuestions.length) {
        setIsComplete(true);
      } else {
        // Set current question to first unanswered
        const answeredQuestions = urlData.responses.map(r => r.questionIndex);
        const firstUnanswered = Array.from({length: enneagramQuestions.length}, (_, i) => i)
          .find(i => !answeredQuestions.includes(i));
        if (firstUnanswered !== undefined) {
          setCurrentQuestionIndex(firstUnanswered);
        }
      }
    }
  }, []);

  const currentQuestion = enneagramQuestions[currentQuestionIndex];
  const totalQuestions = enneagramQuestions.length;

  const answerQuestion = useCallback((rating: number) => {
    const newResponse: UserResponse = {
      questionIndex: currentQuestionIndex,
      rating
    };

    setResponses(prev => {
      const existingIndex = prev.findIndex(r => r.questionIndex === currentQuestionIndex);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = newResponse;
        return updated;
      }
      return [...prev, newResponse];
    });
  }, [currentQuestionIndex, totalQuestions]);

  // Update URL when responses change - but only if test is complete
  useEffect(() => {
    if (isComplete && responses.length === enneagramQuestions.length) {
      updateURL(responses);
    }
  }, [responses, isComplete]);

  const goToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, totalQuestions]);

  const goToPreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const calculateResults = useCallback((): TestResult[] => {
    const typeScores: Record<string, number> = {};
    const typeCounts: Record<string, number> = {};

    // Initialize scores
    enneagramQuestions.forEach(q => {
     if (!q) return; // Skip undefined questions
      if (!typeScores[q.type]) {
        typeScores[q.type] = 0;
        typeCounts[q.type] = 0;
      }
    });

    // Convert rating to points based on new system
    const getPointsForRating = (rating: number): number => {
      switch (rating) {
        case 1: return 1; // Passer slet ikke
        case 2: return 2; // Passer ikke særlig godt
        case 3: return 3; // Passer nogenlunde
        case 4: return 4; // Passer godt
        case 5: return 5; // Passer meget godt
        default: return 0;
      }
    };

    // Calculate scores
    responses.forEach(response => {
      const question = enneagramQuestions[response.questionIndex];
     if (!question) return; // Skip if question is undefined
      typeScores[question.type] += getPointsForRating(response.rating);
      typeCounts[question.type]++;
    });

    // Convert to results with percentages
    const results: TestResult[] = Object.entries(typeScores).map(([type, score]) => {
      const maxPossibleScore = typeCounts[type] * 5; // 5 is max points (for rating 5)
      const percentage = Math.round((score / maxPossibleScore) * 100);
      
      return {
        type,
        score,
        percentage
      };
    });

    // Sort by percentage (highest first)
    return results.sort((a, b) => b.percentage - a.percentage);
  }, [responses]);

  const restart = useCallback(() => {
    setShowIntro(true);
    setCurrentQuestionIndex(0);
    setResponses([]);
    setIsComplete(false);
  }, []);

  const startTest = useCallback(() => {
    setShowIntro(false);
    // Store questions for debug purposes
    localStorage.setItem('enneagram_questions', JSON.stringify(enneagramQuestions));
  }, []);

  const getCurrentRating = useCallback(() => {
    const response = responses.find(r => r.questionIndex === currentQuestionIndex);
    return response?.rating;
  }, [responses, currentQuestionIndex]);

  const canGoNext = useCallback(() => {
    return getCurrentRating() !== undefined;
  }, [getCurrentRating]);

  const canGoPrevious = useCallback(() => {
    return currentQuestionIndex > 0;
  }
  )
  // Store responses for debug purposes
  useEffect(() => {
    localStorage.setItem('enneagram_responses', JSON.stringify(responses));
  }, [responses]);
  
  return {
    showIntro,
    startTest,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    responses,
    isComplete,
    answerQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    canGoNext: canGoNext(),
    canGoPrevious: canGoPrevious(),
    calculateResults,
    restart,
    getCurrentRating
  };
};