import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import { RepositoryHeader } from '../components/repository/RepositoryHeader';
import { RepositoryGrid } from '../components/repository/RepositoryGrid';
import { RepositoryFilters } from '../components/repository/RepositoryFilters';
import { RepositoryActions } from '../components/repository/RepositoryActions';
import { AddRepositoryDialog } from '../components/repository/AddRepositoryDialog';
import { useRepositories } from '../hooks/useRepositories';

export function Repository() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const {
    repositories,
    totalRepositories,
    searchQuery,
    setSearchQuery,
    addRepository,
    refreshRepositories
  } = useRepositories();

  const handleAddRepository = (data: any) => {
    addRepository(data);
    setIsAddDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="ml-64 pt-16">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Repositories</h1>
              <p className="text-gray-600">{totalRepositories} total repositories</p>
            </div>
            <RepositoryActions
              onRefresh={refreshRepositories}
              onAdd={() => setIsAddDialogOpen(true)}
            />
          </div>

          <RepositoryFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <RepositoryGrid repositories={repositories} />
        </div>
      </main>

      <AddRepositoryDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onAdd={handleAddRepository}
      />
    </div>
  );
}