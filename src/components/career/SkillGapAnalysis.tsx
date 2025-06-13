
import { Button } from '../ui/button';
import { Card } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';
import { useApp } from '../../context/AppContext';
import { learningResources } from '../../data/mockData';
import { 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  BookOpen,
  ExternalLink,
  Target
} from 'lucide-react';

interface SkillGapAnalysisProps {
  onBack: () => void;
}

export function SkillGapAnalysis({ onBack }: SkillGapAnalysisProps) {
  const { state } = useApp();
  const career = state.selectedCareer;

  if (!career) {
    return null;
  }

  // Mock skill analysis - in a real app, this would be calculated from quiz answers
  const skillAnalysis = [
    { skill: 'Programming', current: 7, required: 8, category: 'technical' },
    { skill: 'Problem Solving', current: 8, required: 9, category: 'technical' },
    { skill: 'System Design', current: 4, required: 7, category: 'technical' },
    { skill: 'Communication', current: 6, required: 7, category: 'soft' },
    { skill: 'Team Leadership', current: 3, required: 6, category: 'soft' },
    { skill: 'Project Management', current: 5, required: 8, category: 'domain' }
  ];

  const resources = learningResources[career.id] || [];

  const getSkillStatus = (current: number, required: number) => {
    const gap = required - current;
    if (gap <= 0) return { status: 'proficient', color: 'emerald', icon: CheckCircle };
    if (gap <= 2) return { status: 'developing', color: 'amber', icon: AlertCircle };
    return { status: 'needs-focus', color: 'red', icon: AlertCircle };
  };

  const categoryColors = {
    technical: 'bg-blue-100 text-blue-800',
    soft: 'bg-green-100 text-green-800',
    domain: 'bg-purple-100 text-purple-800'
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
              <Target className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Skill Gap Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on your assessment, here's how your current skills compare to what's needed for a {career.title}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Skills Analysis */}
        <div className="lg:col-span-2">
          <Card padding="lg" className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Skills vs. Requirements</h2>
            
            <div className="space-y-6">
              {skillAnalysis.map((skill, index) => {
                const { status, color, icon: StatusIcon } = getSkillStatus(skill.current, skill.required);
                const percentage = (skill.current / skill.required) * 100;
                
                return (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <h3 className="font-semibold text-gray-900 mr-3">{skill.skill}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[skill.category as keyof typeof categoryColors]}`}>
                          {skill.category}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <StatusIcon className={`h-4 w-4 text-${color}-600 mr-2`} />
                        <span className="text-sm text-gray-600">
                          {skill.current}/{skill.required}
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className={`bg-${color}-500 h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Your Level: {skill.current}/10</span>
                      <span>Required: {skill.required}/10</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Overall Progress */}
          <Card padding="lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Readiness</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Career Readiness Score</span>
              <span className="font-bold text-indigo-600">72%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full" style={{ width: '72%' }} />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              You're well on your way! Focus on developing the skills highlighted in red to increase your readiness.
            </p>
          </Card>
        </div>

        {/* Learning Resources */}
        <div>
          <Card padding="lg">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Recommended Learning</h3>
            </div>
            
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 text-sm leading-tight">
                      {resource.title}
                    </h4>
                    <ExternalLink className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span className="flex items-center">
                      <span className={`inline-block w-2 h-2 rounded-full mr-1 ${
                        resource.type === 'course' ? 'bg-blue-500' :
                        resource.type === 'video' ? 'bg-red-500' :
                        resource.type === 'article' ? 'bg-green-500' : 'bg-purple-500'
                      }`} />
                      {resource.type}
                    </span>
                    {resource.duration && <span>{resource.duration}</span>}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.provider}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      resource.free ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {resource.free ? 'Free' : 'Paid'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4">
              View All Resources
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}