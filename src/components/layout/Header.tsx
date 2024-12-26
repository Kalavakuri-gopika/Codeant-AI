import React from 'react';
import { Button } from '../common/Button';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="CodeAnt AI" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-gray-900">CodeAnt AI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="secondary">Profile</Button>
            <Button>New Repository</Button>
          </div>
        </div>
      </div>
    </header>
  );
}