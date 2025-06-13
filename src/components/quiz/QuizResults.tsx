import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/Card';
import { useApp } from '../../context/AppContext';
import { CareerMatch } from '../../types';
import { 
  Trophy, 
  TrendingUp, 
  DollarSign, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function QuizResults() {
  const { state, dispatch } = useApp();

  const handleSelectCareer = (career: CareerMatch) => {
    dispatch({ type: 'SELECT_CAREER', payload: career });
  };

  const formatSalary = (min: number, max: number) => {
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
  };

  const getDemandColor = (level: string) => {
    switch (level) {
      case 'Very High':
        return 'text-emerald-600 bg-emerald-100';
      case 'High':
        return 'text-blue-600 bg-blue-100';
      case 'Medium':
        return 'text-amber-600 bg-amber-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-2xl">
            <Trophy className="h-12 w-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Career Matches
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Based on your assessment, here are the careers that best match your profile. 
          Click on any career to explore detailed information and career paths.
        </p>
      </div>

      {/* Career Matches Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.careerMatches.map((career, index) => (
          <Card
            key={career.id}
            hover
            padding="lg"
            onClick={() => handleSelectCareer(career)}
            className="relative"
          >
            {/* Match Badge */}
            <div className="absolute -top-3 -right-3">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                <Sparkles className="h-3 w-3 mr-1" />
                {career.matchPercentage}% Match
              </div>
            </div>

            {/* Career Info */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {career.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {career.description}
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  Salary Range
                </span>
                <span className="font-semibold text-gray-900">
                  {formatSalary(career.salaryRange.min, career.salaryRange.max)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Demand
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(career.demandLevel)}`}>
                  {career.demandLevel}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  Industry
                </span>
                <span className="font-medium text-gray-900">
                  {career.industry}
                </span>
              </div>
            </div>

            {/* Action */}
            <Button
              variant="outline"
              className="w-full"
              icon={ArrowRight}
              iconPosition="right"
            >
              Explore Career
            </Button>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="text-center mt-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => dispatch({ type: 'RESET_QUIZ' })}
            variant="outline"
            size="lg"
          >
            Retake Assessment
          </Button>
          
          <Button
            size="lg"
            disabled={!state.selectedCareer}
          >
            Continue to Analysis
          </Button>
        </div>
      </div>
    </div>
  );
}