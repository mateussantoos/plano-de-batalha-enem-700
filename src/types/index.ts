// src/types/index.ts

export type View =
  | "visao-geral"
  | "cronograma"
  | "materiais"
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

export interface MaterialTopic {
  topico: string;
  videos: string[];
}

export interface MaterialDocument {
  id: string;
  order: number;
  materia: string;
  topicos_lista: MaterialTopic[];
}

export interface StudyMaterialContent {
  introduction: string;
  coreConcepts: {
    title: string;
    explanation: string;
  }[];
  practicalExample: {
    description: string;
    resolution: string;
  };
  enemTip: string;
}
