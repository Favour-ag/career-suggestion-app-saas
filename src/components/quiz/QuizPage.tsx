import React, { useState, useEffect } from 'react';
import { QuizSection } from './QuizSection';
import { QuizNavigation } from './QuizNavigation';
import { QuizResults } from './QuizResults';
import { ProgressBar } from '../ui/ProgressBar';
import { useApp } from '../../context/AppContext';
import { quizSections, careerMatches } from '../../data/mockData';

export function QuizPage() {
  const { state, dispatch } = useApp();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentSection = quizSections[currentSectionIndex];
  const totalQuestions = quizSections.reduce((sum, section) => sum + section.questions.length, 0);
  const completedQuestions = quizSections.slice(0, currentSectionIndex).reduce((sum, section) => sum + section.questions.length, 0) + currentQuestionIndex;

  useEffect(() => {
    dispatch({
      type: 'UPDATE_QUIZ_PROGRESS',
      payload: {
        currentSection: currentSectionIndex,
        currentQuestion: currentQuestionIndex
      }
    });
  }, [currentSectionIndex, currentQuestionIndex, dispatch]);

  const handleAnswer = (questionId: string, value: string | string[] | number) => {
    dispatch({
      type: 'UPDATE_QUIZ_PROGRESS',
      payload: {
        answers: {
          ...state.quizProgress.answers,
          [questionId]: { questionId, value }
        }
      }
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < quizSections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Quiz completed - calculate results
      dispatch({ type: 'SET_CAREER_MATCHES', payload: careerMatches });
      dispatch({ type: 'COMPLETE_QUIZ' });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentQuestionIndex(quizSections[currentSectionIndex - 1].questions.length - 1);
    }
  };

  const canGoNext = () => {
    const currentQuestion = currentSection.questions[currentQuestionIndex];
    const answer = state.quizProgress.answers[currentQuestion.id];
    return !currentQuestion.required || (answer && answer.value);
  };

  const canGoPrevious = () => {
    return currentSectionIndex > 0 || currentQuestionIndex > 0;
  };

  if (state.isQuizCompleted) {
    return <QuizResults />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <ProgressBar
          current={completedQuestions + 1}
          total={totalQuestions}
          className="mb-4"
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {currentSection.title}
          </h2>
          <p className="text-gray-600">
            {currentSection.description}
          </p>
        </div>
      </div>

      <QuizSection
        section={currentSection}
        currentQuestionIndex={currentQuestionIndex}
        answers={state.quizProgress.answers}
        onAnswer={handleAnswer}
      />

      <QuizNavigation
        onNext={handleNext}
        onPrevious={handlePrevious}
        canGoNext={canGoNext()}
        canGoPrevious={canGoPrevious()}
        isLastQuestion={
          currentSectionIndex === quizSections.length - 1 &&
          currentQuestionIndex === currentSection.questions.length - 1
        }
      />
    </div>
  );
}