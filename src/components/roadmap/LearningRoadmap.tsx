import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { aiLearningRoadmaps } from '../../data/aiJobsData';
import type { RootState } from '../../store/store';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Target,
  CheckCircle,
  Play,
  Award,
  TrendingUp
} from 'lucide-react';

interface LearningRoadmapProps {
  onBack: () => void;
}

export function LearningRoadmap({ onBack }: LearningRoadmapProps) {
  const selectedCareer = useSelector((state: RootState) => state.career.selectedCareer);

  if (!selectedCareer) {
    return null;
  }

  const roadmap = aiLearningRoadmaps[selectedCareer.id];

  if (!roadmap) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Career Details
        </Button>
        
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Learning Roadmap Coming Soon</h2>
          <p className="text-muted-foreground">
            We're working on creating a comprehensive learning roadmap for {selectedCareer.title}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Career Details
        </Button>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-primary to-purple-600 p-3 rounded-2xl">
              <TrendingUp className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{roadmap.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {roadmap.description}
          </p>
        </div>
      </motion.div>

      {/* Roadmap Phases */}
      <div className="space-y-8">
        {roadmap.phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline connector */}
            {index < roadmap.phases.length - 1 && (
              <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-purple-600 hidden md:block" />
            )}

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-6">
                {/* Phase Number */}
                <div className="bg-gradient-to-r from-primary to-purple-600 text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {index + 1}
                </div>

                {/* Phase Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{phase.duration}</span>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-primary" />
                      Key Skills to Develop
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Resources Section */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-emerald-600" />
                      Learning Resources
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.resources.map((resource, resourceIndex) => (
                        <div
                          key={resourceIndex}
                          className="flex items-center p-3 bg-muted/50 rounded-lg"
                        >
                          <Play className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                          <span className="text-sm">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-amber-600" />
                      Practice Projects
                    </h4>
                    <div className="space-y-2">
                      {phase.projects.map((project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className="flex items-center"
                        >
                          <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                          <span className="text-sm">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
        <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            This roadmap is designed to take you from beginner to professional in {selectedCareer.title}. 
            Each phase builds upon the previous one, ensuring you develop the skills employers are looking for.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <BookOpen className="h-5 w-5 mr-2" />
              Start Learning Phase 1
            </Button>
            <Button variant="outline" size="lg">
              <Target className="h-5 w-5 mr-2" />
              Track My Progress
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}