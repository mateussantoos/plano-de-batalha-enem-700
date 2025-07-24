export type View = "visao-geral" | "cronograma" | "progresso" | "recursos";

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
