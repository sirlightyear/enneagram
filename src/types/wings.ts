export interface WingQuestion {
  question: string;
  optionA: {
    text: string;
    wing: string; // e.g., "w9" or "w2"
    description: string;
  };
  optionB: {
    text: string;
    wing: string;
    description: string;
  };
}

export interface WingResult {
  primaryWing: string;
  secondaryWing: string;
  primaryScore: number;
  secondaryScore: number;
  isBalanced: boolean; // true if scores are very close
  description: string;
}

export interface WingTestData {
  type: string;
  wingA: string;
  wingB: string;
  questions: WingQuestion[];
  descriptions: {
    [key: string]: {
      title: string;
      description: string;
      characteristics: string[];
    };
  };
}