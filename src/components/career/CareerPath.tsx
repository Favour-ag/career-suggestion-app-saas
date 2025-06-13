import React from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useApp } from '../../context/AppContext';
import { careerPaths } from '../../data/mockData';
import { 
  ArrowLeft, 
  ArrowRight,
  TrendingUp,
  Clock,
  Award,
  DollarSign,
  CheckCircle
} from 'lucide-react';

interface CareerPathProps {
  onBack: () => void;
}

export function CareerPath({ onBack }: CareerPathProps) {
  const { state } = useApp();
  const career = state.selectedCareer;

  if (!career) {
    return null;
  }

  const pathStages = careerPaths[career.id] || [];

  const formatSalary = (min: number, max: number) => {
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          icon={ArrowLeft}
          iconPosition="left"
          className="mb-4"
        >
          Back to Career Details
        </Button>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-2xl">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Career Progression Path
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey from entry-level to senior {career.title} positions
          </p>
        </div>
      </div>

      {/* Career Path Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 hidden md:block" />

        <div className="space-y-8">
          {pathStages.map((stage, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-8 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center hidden md:flex">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>

              {/* Stage Card */}
              <Card className="md:ml-16" padding="lg">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Stage Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mr-4">
                        {stage.title}
                      </h3>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{stage.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-emerald-600" />
                        Key Skills & Responsibilities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    {stage.certifications && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2 text-amber-600" />
                          Recommended Certifications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {stage.certifications.map((cert, certIndex) => (
                            <span
                              key={certIndex}
                              className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Salary Info */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                    <div className="text-center">
                      <DollarSign className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900 mb-2">Salary Range</h4>
                      <div className="text-2xl font-bold text-indigo-600 mb-1">
                        {formatSalary(stage.salaryRange.min, stage.salaryRange.max)}
                      </div>
                      <p className="text-sm text-gray-600">Annual compensation</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Arrow between stages */}
              {index < pathStages.length - 1 && (
                <div className="flex justify-center my-4 md:justify-start md:ml-20">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <Card className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Your Path to Success
          </h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            This career path shows typical progression in the {career.title} field. 
            Individual timelines may vary based on performance, company size, and market conditions. 
            Focus on developing the key skills at each stage to accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Create Learning Plan
            </Button>
            <Button variant="outline" size="lg">
              Connect with Mentors
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}