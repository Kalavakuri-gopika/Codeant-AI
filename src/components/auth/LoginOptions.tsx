import React from 'react';
import { Github } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { AntLogo } from '../icons/AntLogo';

export function LoginOptions() {
  const { login } = useAuth();

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <AntLogo />
        <h1 className="mt-6 text-2xl font-semibold text-gray-900">Welcome to CodeAnt AI</h1>
      </div>

      <div className="flex gap-3">
        <button 
          onClick={() => login('saas')}
          className="flex-1 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          SAAS
        </button>
        <button 
          onClick={() => login('self-hosted')}
          className="flex-1 bg-gray-100 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium"
        >
          Self Hosted
        </button>
      </div>

      <div className="space-y-3">
        <LoginButton
          icon={<Github className="h-5 w-5" />}
          text="Sign in with Github"
          onClick={() => login('github')}
        />
        <LoginButton
          icon={<img src="/bitbucket.svg" alt="Bitbucket" className="h-5 w-5" />}
          text="Sign in with Bitbucket"
          onClick={() => login('bitbucket')}
        />
        <LoginButton
          icon={<img src="/azure.svg" alt="Azure DevOps" className="h-5 w-5" />}
          text="Sign in with Azure Devops"
          onClick={() => login('azure')}
        />
        <LoginButton
          icon={<img src="/gitlab.svg" alt="GitLab" className="h-5 w-5" />}
          text="Sign in with GitLab"
          onClick={() => login('gitlab')}
        />
      </div>

      <p className="text-sm text-center text-gray-600">
        By signing up you agree to the{' '}
        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
      </p>
    </div>
  );
}

interface LoginButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

function LoginButton({ icon, text, onClick }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}