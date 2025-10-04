export interface EnneagramQuestion {
  type: string;
  question: string;
  example1: string;
  example2: string;
  example3: string;
}

export interface TestResult {
  type: string;
  score: number;
  percentage: number;
}

export interface UserResponse {
  questionIndex: number;
  rating: number;
}