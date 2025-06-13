import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  showNumbers?: boolean;
  className?: string;
}

export function ProgressBar({ 
  current, 
  total, 
  showNumbers = true, 
  className = '' 
}: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className={`w-full ${className}`}>
      {showNumbers && (
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Step {current} of {total}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}