import { useState, useCallback } from 'react';
import { Repository, RepositoryFormData } from '../types/repository';
import { repositories as initialRepositories } from '../data/repositories';

export function useRepositories() {
  const [repositories, setRepositories] = useState<Repository[]>(initialRepositories);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addRepository = useCallback((formData: RepositoryFormData) => {
    const newRepo: Repository = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      language: 'Unknown',
      size: '0 KB',
      isPrivate: formData.isPrivate,
      updatedAt: 'Just now'
    };
    setRepositories(prev => [newRepo, ...prev]);
  }, []);

  const refreshRepositories = useCallback(() => {
    // In a real app, this would fetch from an API
    console.log('Refreshing repositories...');
  }, []);

  return {
    repositories: filteredRepositories,
    totalRepositories: repositories.length,
    searchQuery,
    setSearchQuery,
    addRepository,
    refreshRepositories
  };
}