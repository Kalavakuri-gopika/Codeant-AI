import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../common/Button';
import { GitlabIcon } from '../icons/GitlabIcon';
import { KeyIcon } from '../icons/KeyIcon';

export function SelfHostedOptions() {
  const { login } = useAuth();

  return (
    <div className="w-full max-w-md space-y-6 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <GitlabIcon className="h-16 w-16 text-[#FC6D26]" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome to CodeAnt AI</h1>
      </div>

      <div className="flex gap-4">
        <Button 
          variant="secondary" 
          className="flex-1"
          onClick={() => login('saas')}
        >
          SAAS
        </Button>
        <Button 
          className="flex-1 bg-blue-600"
          onClick={() => login('self-hosted')}
        >
          Self Hosted
        </Button>
      </div>

      <div className="space-y-4">
        <button 
          onClick={() => login('gitlab')}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <GitlabIcon className="h-5 w-5 text-[#FC6D26]" />
          <span>Self Hosted GitLab</span>
        </button>

        <button 
          onClick={() => login('sso')}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <KeyIcon className="h-5 w-5" />
          <span>Sign in with SSO</span>
        </button>
      </div>

      <p className="text-sm text-center text-gray-600">
        By signing up you agree to the{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}