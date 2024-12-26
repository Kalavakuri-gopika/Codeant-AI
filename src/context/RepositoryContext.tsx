import React, { createContext, useContext, useState } from 'react';

interface Repository {
  id: string;
  name: string;
  language: string;
  size: string;
  isPrivate: boolean;
  updatedAt: string;
}

interface RepositoryContextType {
  repositories: Repository[];
  addRepository: (repo: Omit<Repository, 'id'>) => void;
  refreshRepositories: () => void;
  searchRepositories: (query: string) => void;
}

const RepositoryContext = createContext<RepositoryContextType | undefined>(undefined);

export function RepositoryProvider({ children }: { children: React.ReactNode }) {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const addRepository = (repo: Omit<Repository, 'id'>) => {
    const newRepo = {
      ...repo,
      id: Math.random().toString(36).substr(2, 9)
    };
    setRepositories([newRepo, ...repositories]);
  };

  const refreshRepositories = () => {
    // Simulate refresh
    console.log('Refreshing repositories...');
  };

  const searchRepositories = (query: string) => {
    // Implement search logic
    console.log('Searching repositories:', query);
  };

  return (
    <RepositoryContext.Provider 
      value={{ repositories, addRepository, refreshRepositories, searchRepositories }}
    >
      {children}
    </RepositoryContext.Provider>
  );
}

export function useRepository() {
  const context = useContext(RepositoryContext);
  if (context === undefined) {
    throw new Error('useRepository must be used within a RepositoryProvider');
  }
  return context;
}