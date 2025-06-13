import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import {
  Brain,
  Target,
  TrendingUp,
  Users,
  Zap,
  Shield,
  BookOpen,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface LearnMoreProps {
  onClose: () => void;
}

export function LearnMore({ onClose }: LearnMoreProps) {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Career Matching',
      description: 'Our advanced algorithms analyze your responses across multiple dimensions to find careers that truly align with your profile.',
      details: [
        'Multi-factor analysis including interests, skills, values, and personality',
        'Machine learning models trained on career success data',
        'Continuous improvement based on user feedback'
      ]
    },
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'Get career suggestions tailored specifically to your unique combination of traits and aspirations.',
      details: [
        'Individual scoring for each career match',
        'Detailed explanations for why careers match your profile',
        'Customized learning paths for skill development'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Future-Ready Career Insights',
      description: 'Discover emerging careers in AI, automation, and other cutting-edge fields that will shape the future of work.',
      details: [
        'AI and automation-resistant career paths',
        'Emerging roles in technology and innovation',
        'Growth projections and market demand analysis'
      ]
    },
    {
      icon: Users,
      title: 'Industry Expert Validation',
      description: 'Our career data is validated by industry professionals and updated regularly to reflect market realities.',
      details: [
        'Salary data from multiple reliable sources',
        'Job market trends and growth projections',
        'Skills requirements validated by hiring managers'
      ]
    },
    {
      icon: Zap,
      title: 'Skill Gap Analysis',
      description: 'Understand exactly what skills you need to develop to succeed in your chosen career path.',
      details: [
        'Current skill level assessment',
        'Gap identification and prioritization',
        'Curated learning resources and roadmaps'
      ]
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your personal data is protected with enterprise-grade security and never shared without consent.',
      details: [
        'End-to-end encryption of personal data',
        'GDPR and CCPA compliant data handling',
        'Complete control over your information'
      ]
    }
  ];

  const benefits = [
    'Save months of career research and exploration',
    'Avoid costly career mistakes and pivots',
    'Discover high-growth careers you never considered',
    'Get a clear roadmap for skill development',
    'Access to exclusive career resources and tools',
    'Regular updates on industry trends and opportunities'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
    >
      <div className="min-h-screen py-8 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="max-w-4xl mx-auto bg-background rounded-2xl shadow-2xl"
        >
          {/* Header */}
          <div className="p-8 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">How CareerPath AI Works</h2>
                <p className="text-muted-foreground text-lg">
                  Discover the science behind our career prediction technology
                </p>
              </div>
              <Button variant="ghost" onClick={onClose} size="sm">
                ✕
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-12">
            {/* Features Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Powerful Features</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          {feature.description}
                        </p>
                        <ul className="space-y-1">
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-xs text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">What You'll Gain</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Our 4-Step Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Assessment', desc: 'Complete our comprehensive career quiz' },
                  { step: '2', title: 'Analysis', desc: 'AI analyzes your responses and preferences' },
                  { step: '3', title: 'Matching', desc: 'Get personalized career recommendations' },
                  { step: '4', title: 'Planning', desc: 'Receive your learning roadmap and resources' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    {index < 3 && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto mt-4 hidden md:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button onClick={onClose} size="lg" className="text-lg px-8">
                <BookOpen className="h-5 w-5 mr-2" />
                Start Your Career Journey
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}