import React, { useState } from 'react';
import { Button } from '../ui/button';
import { LearnMore } from './LearnMore';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, TrendingUp, Bot } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

export function Hero({ onStartQuiz }: HeroProps) {
  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 -skew-y-6 transform origin-top-left" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-gradient-to-r from-primary to-purple-600 p-4 rounded-2xl">
                <Bot className="h-12 w-12 text-primary-foreground" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Discover Your Perfect
              <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AI-Powered Career
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Take our comprehensive career assessment and get personalized recommendations 
              for traditional careers and emerging AI-powered roles. Start your journey to career satisfaction today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                onClick={onStartQuiz}
                size="lg"
                className="text-lg px-8 py-4"
              >
                Start Career Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => setShowLearnMore(true)}
              >
                Learn More
              </Button>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered Matching</h3>
                <p className="text-muted-foreground">Get career recommendations tailored to your unique profile using advanced AI</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Future-Ready Careers</h3>
                <p className="text-muted-foreground">Discover emerging AI careers and automation-resistant roles</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Learning Roadmaps</h3>
                <p className="text-muted-foreground">Get personalized learning paths to bridge skill gaps</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {showLearnMore && <LearnMore onClose={() => setShowLearnMore(false)} />}
    </>
  );
}