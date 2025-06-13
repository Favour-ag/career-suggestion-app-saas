import  { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from './components/theme/ThemeProvider';
import { Layout } from './components/layout/Layout';
import { HomePage } from './components/home/HomePage';
import { QuizPage } from './components/quiz/QuizPage';
import { CareerDetail } from './components/career/CareerDetail';
import { SkillGapAnalysis } from './components/career/SkillGapAnalysis';
import { CareerPath } from './components/career/CareerPath';
import { LearningRoadmap } from './components/roadmap/LearningRoadmap';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { supabase } from './lib/supabase';
import { AppProvider } from './context/AppContext';

type Page = 'home' | 'quiz' | 'results' | 'career-detail' | 'skill-gap' | 'career-path' | 'learning-roadmap';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Initialize Supabase auth listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
       
      } else if (event === 'SIGNED_OUT') {
        console.log('User signed out');
        setCurrentPage('home');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onStartQuiz={() => setCurrentPage('quiz')} />;
      case 'quiz':
        return (
          <ProtectedRoute>
            <QuizPage />
          </ProtectedRoute>
        );
      case 'career-detail':
        return (
          <ProtectedRoute>
            <CareerDetail
              onBack={() => setCurrentPage('quiz')}
              onViewSkillGap={() => setCurrentPage('skill-gap')}
              onViewCareerPath={() => setCurrentPage('career-path')}
              onViewRoadmap={() => setCurrentPage('learning-roadmap')}
            />
          </ProtectedRoute>
        );
      case 'skill-gap':
        return (
          <ProtectedRoute>
            <SkillGapAnalysis onBack={() => setCurrentPage('career-detail')} />
          </ProtectedRoute>
        );
      case 'career-path':
        return (
          <ProtectedRoute>
            <CareerPath onBack={() => setCurrentPage('career-detail')} />
          </ProtectedRoute>
        );
      case 'learning-roadmap':
        return (
          <ProtectedRoute>
            <LearningRoadmap onBack={() => setCurrentPage('career-detail')} />
          </ProtectedRoute>
        );
      default:
        return <HomePage onStartQuiz={() => setCurrentPage('quiz')} />;
    }
  };

  return (
    <Layout onNavigate={handleNavigate} currentPage={currentPage}>
      {renderCurrentPage()}
    </Layout>
  );
}

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider defaultTheme="system" storageKey="career-app-theme">
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  </Provider>
  );
}

export default App;