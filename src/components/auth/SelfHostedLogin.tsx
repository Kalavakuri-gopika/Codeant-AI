import React from 'react';
import { MetricsCard } from '../stats/MetricsCard';
import { LoginButton } from './LoginButton';
import { KeyIcon } from '../icons/KeyIcon';
import { GitlabIcon } from '../icons/GitlabIcon';

export function SelfHostedLogin() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Metrics */}
      <div className="flex-1 p-8 flex items-center justify-center">
        <MetricsCard />
      </div>

      {/* Right side - Login */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6 p-8">
          <div className="text-center space-y-4">
            <img src="/logo.svg" alt="CodeAnt AI" className="h-16 w-16 mx-auto" />
            <h1 className="text-3xl font-bold">Welcome to CodeAnt AI</h1>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              SAAS
            </button>
            <button className="flex-1 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Self Hosted
            </button>
          </div>

          <div className="space-y-3">
            <LoginButton
              icon={<GitlabIcon className="h-5 w-5 text-[#FC6D26]" />}
              text="Self Hosted GitLab"
            />
            <LoginButton
              icon={<KeyIcon className="h-5 w-5" />}
              text="Sign in with SSO"
            />
          </div>

          <p className="text-sm text-center text-gray-600">
            By signing up you agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}