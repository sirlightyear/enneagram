import { useState, useCallback } from 'react';
import { WingResult } from '../types/wings';

interface WingResponse {
  questionIndex: number;
  selectedWing: string; // "w9", "w2", etc.
}

// URL state management for wing responses
const updateWingURL = (responses: WingResponse[]) => {
  const params = new URLSearchParams(window.location.search);
  if (responses.length > 0) {
    params.set('wingResponses', btoa(JSON.stringify(responses)));
  } else {
    params.delete('wingResponses');
  }
  const newURL = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
  window.history.replaceState({}, '', newURL);
};
export const useWingTest = (wingTestData: any) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    // Load from URL if available
    const params = new URLSearchParams(window.location.search);
    const wingResponsesParam = params.get('wingResponses');
    if (wingResponsesParam) {
      try {
        const savedResponses = JSON.parse(atob(wingResponsesParam));
        return savedResponses.length;
      } catch {
        return 0;
      }
    }
    return 0;
  });
  
  const [responses, setResponses] = useState<WingResponse[]>(() => {
    // Load from URL if available
    const params = new URLSearchParams(window.location.search);
    const wingResponsesParam = params.get('wingResponses');
    if (wingResponsesParam) {
      try {
        return JSON.parse(atob(wingResponsesParam));
      } catch {
        return [];
      }
    }
    return [];
  });
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = wingTestData.questions[currentQuestionIndex];
  const totalQuestions = wingTestData.questions.length;

  const answerQuestion = useCallback((selectedWing: string) => {
    const newResponse: WingResponse = {
      questionIndex: currentQuestionIndex,
      selectedWing
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
    
    // Update URL with wing responses
    updateWingURL(responses);
  }, [currentQuestionIndex]);

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

  const calculateWingResults = useCallback((): WingResult => {
    const wingScores: Record<string, number> = {
      [wingTestData.wingA]: 0,
      [wingTestData.wingB]: 0
    };

    // Count responses for each wing
    responses.forEach(response => {
      wingScores[response.selectedWing]++;
    });

    const wingAScore = wingScores[wingTestData.wingA];
    const wingBScore = wingScores[wingTestData.wingB];
    
    // Determine primary and secondary wings
    let primaryWing: string;
    let secondaryWing: string;
    let primaryScore: number;
    let secondaryScore: number;

    if (wingAScore > wingBScore) {
      primaryWing = wingTestData.wingA;
      secondaryWing = wingTestData.wingB;
      primaryScore = wingAScore;
      secondaryScore = wingBScore;
    } else {
      primaryWing = wingTestData.wingB;
      secondaryWing = wingTestData.wingA;
      primaryScore = wingBScore;
      secondaryScore = wingAScore;
    }

    // Check if wings are balanced (difference of 2 or less)
    const isBalanced = Math.abs(wingAScore - wingBScore) <= 2;
    
    // Get description
    const descriptionKey = isBalanced ? 'balanced' : primaryWing;
    const description = wingTestData.descriptions[descriptionKey]?.description || '';

    return {
      primaryWing,
      secondaryWing,
      primaryScore,
      secondaryScore,
      isBalanced,
      description
    };
  }, [responses, wingTestData]);

  const getCurrentResponse = useCallback(() => {
    const response = responses.find(r => r.questionIndex === currentQuestionIndex);
    return response?.selectedWing;
  }, [responses, currentQuestionIndex]);

  const canGoNext = useCallback(() => {
    return getCurrentResponse() !== undefined;
  }, [getCurrentResponse]);

  const canGoPrevious = useCallback(() => {
    return currentQuestionIndex > 0;
  }, [currentQuestionIndex]);

  const restart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setResponses([]);
    setIsComplete(false);
  }, []);

  return {
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
    calculateWingResults,
    getCurrentResponse,
    restart
  };
};