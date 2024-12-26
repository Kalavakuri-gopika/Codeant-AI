import React from 'react';
import { Circle, Lock, Globe } from 'lucide-react';

interface RepositoryItemProps {
  name: string;
  language: string;
  size: string;
  isPrivate: boolean;
  updatedAt: string;
}

export function RepositoryItem({ name, language, size, isPrivate, updatedAt }: RepositoryItemProps) {
  return (
    <div className="p-4 hover:bg-gray-50 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            {isPrivate ? (
              <Lock className="h-4 w-4 text-gray-500" />
            ) : (
              <Globe className="h-4 w-4 text-gray-500" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-medium text-blue-600">{name}</h3>
            <div className="flex items-center space-x-4 mt-1">
              <div className="flex items-center space-x-1">
                <Circle className="h-3 w-3" style={{ fill: getLanguageColor(language) }} />
                <span className="text-sm text-gray-600">{language}</span>
              </div>
              <span className="text-sm text-gray-500">{size}</span>
              <span className="text-sm text-gray-500">Updated {updatedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    Swift: '#ffac45',
    'HTML/CSS': '#e34c26',
    PHP: '#4F5D95',
    React: '#61dafb'
  };
  return colors[language] || '#6e7681';
}