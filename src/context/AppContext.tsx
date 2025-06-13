import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { QuizProgress, CareerMatch, User } from '../types';

interface AppState {
  user: User | null;
  quizProgress: QuizProgress;
  careerMatches: CareerMatch[];
  isQuizCompleted: boolean;
  selectedCareer: CareerMatch | null;
}

type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'UPDATE_QUIZ_PROGRESS'; payload: Partial<QuizProgress> }
  | { type: 'SET_CAREER_MATCHES'; payload: CareerMatch[] }
  | { type: 'COMPLETE_QUIZ' }
  | { type: 'SELECT_CAREER'; payload: CareerMatch }
  | { type: 'RESET_QUIZ' };

const initialState: AppState = {
  user: null,
  quizProgress: {
    currentSection: 0,
    currentQuestion: 0,
    answers: {},
    completedSections: []
  },
  careerMatches: [],
  isQuizCompleted: false,
  selectedCareer: null
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'UPDATE_QUIZ_PROGRESS':
      return {
        ...state,
        quizProgress: { ...state.quizProgress, ...action.payload }
      };
    
    case 'SET_CAREER_MATCHES':
      return { ...state, careerMatches: action.payload };
    
    case 'COMPLETE_QUIZ':
      return { ...state, isQuizCompleted: true };
    
    case 'SELECT_CAREER':
      return { ...state, selectedCareer: action.payload };
    
    case 'RESET_QUIZ':
      return {
        ...state,
        quizProgress: initialState.quizProgress,
        careerMatches: [],
        isQuizCompleted: false,
        selectedCareer: null
      };
    
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}