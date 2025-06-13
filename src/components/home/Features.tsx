import React from 'react';
import { Card } from '../ui/Card';
import { 
  ClipboardList, 
  Brain, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Shield 
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: ClipboardList,
      title: 'Comprehensive Assessment',
      description: 'Multi-step questionnaire covering interests, skills, values, and educational background',
      color: 'indigo'
    },
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms analyze your responses to find the best career matches',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Career Progression',
      description: 'Visual timeline showing potential career paths from entry-level to senior positions',
      color: 'emerald'
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Curated courses, books, and materials to help you develop required skills',
      color: 'amber'
    },
    {
      icon: Users,
      title: 'Industry Insights',
      description: 'Real-world data on job demand, salary ranges, and growth projections',
      color: 'rose'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is secure and private. We never share personal information',
      color: 'blue'
    }
  ];

  const colorClasses = {
    indigo: 'bg-indigo-100 text-indigo-600',
    purple: 'bg-purple-100 text-purple-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    amber: 'bg-amber-100 text-amber-600',
    rose: 'bg-rose-100 text-rose-600',
    blue: 'bg-blue-100 text-blue-600'
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose CareerPath AI?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive platform provides everything you need to make informed career decisions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} hover padding="lg">
            <div className={`w-12 h-12 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4`}>
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}