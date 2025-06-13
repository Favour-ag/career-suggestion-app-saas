export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface QuizAnswer {
  questionId: string;
  value: string | string[] | number;
}

export interface QuizSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'checkbox' | 'slider' | 'text';
  question: string;
  options?: string[];
  min?: number;
  max?: number;
  required: boolean;
}

export interface CareerMatch {
  id: string;
  title: string;
  description: string;
  matchPercentage: number;
  salaryRange: {
    min: number;
    max: number;
  };
  demandLevel: 'Low' | 'Medium' | 'High' | 'Very High';
  requiredSkills: string[];
  industry: string;
  workEnvironment: string;
  education: string;
  growthProjection: string;
}

export interface Skill {
  name: string;
  level: number; // 0-10
  required: number; // 0-10
  category: 'technical' | 'soft' | 'domain';
}

export interface LearningResource {
  title: string;
  url: string;
  type: 'course' | 'article' | 'video' | 'book';
  provider: string;
  duration?: string;
  free: boolean;
}

export interface CareerPathStage {
  title: string;
  description: string;
  duration: string;
  skills: string[];
  certifications?: string[];
  salaryRange: {
    min: number;
    max: number;
  };
}

export interface QuizProgress {
  currentSection: number;
  currentQuestion: number;
  answers: Record<string, QuizAnswer>;
  completedSections: string[];
}