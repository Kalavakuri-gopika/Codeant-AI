import React from 'react';
import { RefreshCw, Plus } from 'lucide-react';
import { Button } from '../common/Button';

interface RepositoryActionsProps {
  onRefresh: () => void;
  onAdd: () => void;
}

export function RepositoryActions({ onRefresh, onAdd }: RepositoryActionsProps) {
  return (
    <div className="flex gap-3">
      <Button 
        variant="secondary" 
        onClick={onRefresh} 
        className="flex items-center gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        Refresh All
      </Button>
      <Button 
        onClick={onAdd} 
        className="flex items-center gap-2"
      >
        <Plus className="h-4 w-4" />
        Add Repository
      </Button>
    </div>
  );
}