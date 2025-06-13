import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface QuizNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isLastQuestion: boolean;
}

export function QuizNavigation({
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  isLastQuestion
}: QuizNavigationProps) {
  return (
    <div className="flex justify-between items-center">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        icon={ArrowLeft}
        iconPosition="left"
      >
        Previous
      </Button>

      <Button
        onClick={onNext}
        disabled={!canGoNext}
        icon={isLastQuestion ? CheckCircle : ArrowRight}
        iconPosition="right"
      >
        {isLastQuestion ? 'Complete Assessment' : 'Next'}
      </Button>
    </div>
  );
}