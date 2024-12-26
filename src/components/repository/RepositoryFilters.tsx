import React from 'react';
import { Search } from 'lucide-react';

interface RepositoryFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function RepositoryFilters({ searchQuery, onSearchChange }: RepositoryFiltersProps) {
  return (
    <div className="mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Repositories"
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}