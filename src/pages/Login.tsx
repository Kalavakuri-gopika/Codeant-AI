import React from 'react';
import { LoginOptions } from '../components/auth/LoginOptions';

export function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <LoginOptions />
    </div>
  );
}