import React from 'react';
import { Question, QuizAnswer } from '../../types';

interface QuizQuestionProps {
  question: Question;
  answer?: QuizAnswer;
  onAnswer: (questionId: string, value: string | string[] | number) => void;
}

export function QuizQuestion({ question, answer, onAnswer }: QuizQuestionProps) {
  const handleChange = (value: string | string[] | number) => {
    onAnswer(question.id, value);
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label
                key={option}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={answer?.value === option}
                  onChange={(e) => handleChange(e.target.value)}
                  className="mr-3 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="grid md:grid-cols-2 gap-3">
            {question.options?.map((option) => (
              <label
                key={option}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  value={option}
                  checked={Array.isArray(answer?.value) && answer.value.includes(option)}
                  onChange={(e) => {
                    const currentValues = Array.isArray(answer?.value) ? answer.value : [];
                    const newValues = e.target.checked
                      ? [...currentValues, option]
                      : currentValues.filter(v => v !== option);
                    handleChange(newValues);
                  }}
                  className="mr-3 h-4 w-4 text-indigo-600 focus:ring-indigo-500 rounded"
                />
                <span className="text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'slider':
        return (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-500">
              <span>{question.min}</span>
              <span>{question.max}</span>
            </div>
            <input
              type="range"
              min={question.min}
              max={question.max}
              value={answer?.value || question.min}
              onChange={(e) => handleChange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-center">
              <span className="text-2xl font-bold text-indigo-600">
                {answer?.value || question.min}
              </span>
            </div>
          </div>
        );

      case 'text':
        return (
          <textarea
            value={answer?.value || ''}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            placeholder="Type your answer here..."
          />
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        {question.question}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </h3>
      {renderQuestion()}
    </div>
  );
}