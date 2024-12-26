import React from 'react';
import { RefreshCw, Plus } from 'lucide-react';
import { Button } from '../common/Button';

interface RepositoryHeaderProps {
  totalRepositories: number;
  onRefresh: () => void;
  onAdd: () => void;
}

export function RepositoryHeader({ totalRepositories, onRefresh, onAdd }: RepositoryHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Repositories</h1>
          <p className="text-gray-600">{totalRepositories} total repositories</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onRefresh} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh All
          </Button>
          <Button onClick={onAdd} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Repository
          </Button>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}