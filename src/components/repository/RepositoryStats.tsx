import React from 'react';
import { Circle } from 'lucide-react';

interface RepositoryStatsProps {
  language: string;
  size: string;
  updatedAt: string;
}

export function RepositoryStats({ language, size, updatedAt }: RepositoryStatsProps) {
  const languageColors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    Swift: '#ffac45',
    'HTML/CSS': '#e34c26',
    PHP: '#4F5D95',
    React: '#61dafb'
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1">
        <Circle className="h-3 w-3" style={{ fill: languageColors[language] || '#6e7681' }} />
        <span className="text-sm text-gray-600">{language}</span>
      </div>
      <span className="text-sm text-gray-500">{size}</span>
      <span className="text-sm text-gray-500">Updated {updatedAt}</span>
    </div>
  );
}