import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { 
  ArrowLeft, 
  DollarSign, 
  TrendingUp, 
  MapPin, 
  GraduationCap,
  Users,
  Briefcase,
  BookOpen,
  Target,
  Route
} from 'lucide-react';

interface CareerDetailProps {
  onBack: () => void;
  onViewSkillGap: () => void;
  onViewCareerPath: () => void;
  onViewRoadmap: () => void;
}

export function CareerDetail({ onBack, onViewSkillGap, onViewCareerPath, onViewRoadmap }: CareerDetailProps) {
  const selectedCareer = useSelector((state: RootState) => state.career.selectedCareer);

  if (!selectedCareer) {
    return null;
  }

  const formatSalary = (min: number, max: number) => {
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          Back to Results
        </Button>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {selectedCareer.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {selectedCareer.description}
          </p>
        </div>
      </motion.div>

      {/* Match Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-center bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8"
      >
        <div className="text-5xl font-bold text-primary mb-2">
          {selectedCareer.matchPercentage}%
        </div>
        <p className="text-lg text-muted-foreground">
          Career Match Score
        </p>
      </motion.div>

      {/* Career Details Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center mb-4">
            <DollarSign className="h-6 w-6 text-emerald-600 mr-2" />
            <h3 className="text-lg font-semibold">Salary Range</h3>
          </div>
          <p className="text-2xl font-bold mb-2">
            {formatSalary(selectedCareer.salaryRange.min, selectedCareer.salaryRange.max)}
          </p>
          <p className="text-muted-foreground">Annual salary range</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Job Demand</h3>
          </div>
          <p className="text-2xl font-bold mb-2">
            {selectedCareer.demandLevel}
          </p>
          <p className="text-muted-foreground">{selectedCareer.growthProjection}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-purple-600 mr-2" />
            <h3 className="text-lg font-semibold">Work Environment</h3>
          </div>
          <p className="text-lg mb-2">
            {selectedCareer.workEnvironment}
          </p>
          <p className="text-muted-foreground">Typical work setting</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center mb-4">
            <GraduationCap className="h-6 w-6 text-amber-600 mr-2" />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <p className="text-lg mb-2">
            {selectedCareer.education}
          </p>
          <p className="text-muted-foreground">Typical requirements</p>
        </motion.div>
      </div>

      {/* Required Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-card border border-border rounded-xl p-6 mb-8"
      >
        <div className="flex items-center mb-4">
          <Briefcase className="h-6 w-6 text-primary mr-2" />
          <h3 className="text-lg font-semibold">Required Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {selectedCareer.requiredSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button
          onClick={onViewSkillGap}
          size="lg"
        >
          <Users className="h-5 w-5 mr-2" />
          Analyze Skill Gap
        </Button>
        
        <Button
          onClick={onViewCareerPath}
          variant="outline"
          size="lg"
        >
          <Route className="h-5 w-5 mr-2" />
          View Career Path
        </Button>

        <Button
          onClick={onViewRoadmap}
          variant="outline"
          size="lg"
        >
          <BookOpen className="h-5 w-5 mr-2" />
          Learning Roadmap
        </Button>
      </motion.div>
    </div>
  );
}