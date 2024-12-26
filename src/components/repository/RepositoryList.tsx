import React from 'react';
import { RepositoryItem } from './RepositoryItem';
import { Repository } from '../../types/repository';

interface RepositoryListProps {
  repositories: Repository[];
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      {repositories.map((repo) => (
        <RepositoryItem key={repo.id} {...repo} />
      ))}
    </div>
  );
}