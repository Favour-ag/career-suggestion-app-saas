import React from 'react';
import { QuizSection as QuizSectionType, Question, QuizAnswer } from '../../types';
import { Card } from '../ui/Card';
import { QuizQuestion } from './QuizQuestion';

interface QuizSectionProps {
  section: QuizSectionType;
  currentQuestionIndex: number;
  answers: Record<string, QuizAnswer>;
  onAnswer: (questionId: string, value: string | string[] | number) => void;
}

export function QuizSection({
  section,
  currentQuestionIndex,
  answers,
  onAnswer
}: QuizSectionProps) {
  const currentQuestion = section.questions[currentQuestionIndex];

  return (
    <Card padding="lg" className="mb-8">
      <QuizQuestion
        question={currentQuestion}
        answer={answers[currentQuestion.id]}
        onAnswer={onAnswer}
      />
    </Card>
  );
}