import React from 'react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { AuthButton } from '../auth/AuthButton';
import { useTheme } from '../theme/ThemeProvider';
import { useAuth } from '../../hooks/useAuth';
import { Brain, Home, Moon, Sun } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const { user, profile } = useAuth();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gradient-to-r from-primary to-purple-600 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">CareerPath AI</h1>
          </motion.div>

          <nav className="flex items-center space-x-4">
            {currentPage !== 'home' && (
              <Button
                variant="ghost"
                onClick={() => onNavigate('home')}
                size="sm"
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            )}

            {user && currentPage !== 'quiz' && (
              <Button
                variant="outline"
                onClick={() => onNavigate('quiz')}
                size="sm"
              >
                Take Quiz
              </Button>
            )}

            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <AuthButton />
          </nav>
        </div>
      </div>
    </motion.header>
  );
}