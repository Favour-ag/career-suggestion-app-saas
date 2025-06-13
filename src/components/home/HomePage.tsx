import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Stats } from './Stats';

interface HomePageProps {
  onStartQuiz: () => void;
}

export function HomePage({ onStartQuiz }: HomePageProps) {
  return (
    <div>
      <Hero onStartQuiz={onStartQuiz} />
      <Features />
      <Stats />
    </div>
  );
}