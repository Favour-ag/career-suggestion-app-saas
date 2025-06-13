import React from 'react';
import { Header } from './Header';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Layout({ children, onNavigate, currentPage }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header onNavigate={onNavigate} currentPage={currentPage} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pb-12"
      >
        {children}
      </motion.main>
    </div>
  );
}