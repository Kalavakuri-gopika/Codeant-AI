import React from 'react';
import { Lock, Globe, GitBranch, Eye, Star } from 'lucide-react';
import { Repository } from '../../types/repository';
import { RepositoryStats } from './RepositoryStats';

interface RepositoryCardProps {
  repository: Repository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const { name, language, size, isPrivate, updatedAt } = repository;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {isPrivate ? (
              <Lock className="h-4 w-4 text-gray-500" />
            ) : (
              <Globe className="h-4 w-4 text-gray-500" />
            )}
            <h3 className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
              {name}
            </h3>
          </div>
          <RepositoryStats
            language={language}
            size={size}
            updatedAt={updatedAt}
          />
        </div>
      </div>

      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1 text-gray-600">
          <GitBranch className="h-4 w-4" />
          <span className="text-sm">4</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Star className="h-4 w-4" />
          <span className="text-sm">12</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Eye className="h-4 w-4" />
          <span className="text-sm">238</span>
        </div>
      </div>
    </div>
  );
}