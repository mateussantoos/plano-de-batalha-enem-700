// src/types/index.ts

export type View =
  | "visao-geral"
  | "cronograma"
  | "progresso"
  | "recursos"
  | "simulados";

export interface Day {
  day: string;
  subject: string;
  content: string;
  activity: string;
}

export interface Week {
  focus: string;
  days: Day[];
}

export interface Milestone {
  week: number;
  theme: string;
  skill: string;
  simulation: string;
}

export interface GeneratedQuestion {
  question_text: string;
  options: string[];
  correct_answer_index: number;
  explanation: string;
}

export interface GeneratedQuestionsResponse {
  questions: GeneratedQuestion[];
}

export interface EnemQuestionFromAPI {
  index: number;
  year: number;
  discipline: string;
  context: string;
  files: string[];
  alternativesIntroduction: string;
  alternatives: {
    letter: string;
    text: string;
    file: string | null;
    isCorrect: boolean;
  }[];
  correctAlternative: string;
  language?: "ingles" | "espanhol" | null;
}
