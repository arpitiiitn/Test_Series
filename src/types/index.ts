// Question Types
export type QuestionType = 'mcq' | 'msq' | 'nat';

export interface Question {
  id: number;
  type: QuestionType;
  marks: number;
  negative_marking: boolean;
  question: string;
  options?: string[];
  answer: string | string[] | number;
}

// Test Configuration
export interface Test {
  id: string;
  name: string;
  duration: number; // in minutes
  total_marks: number;
  negative_marking: boolean;
  sections?: TestSection[];
  questions: Question[];
}

export interface TestSection {
  name: string;
  question_ids: number[];
}

// User Records
export interface UserRecord {
  studentCode: string;
  studentName: string;
  testId: string;
  testName: string;
  score: number;
  maxScore: number;
  submissionTime: string;
  timeSpent: number; // in seconds
  answers: Record<string, any>;
}