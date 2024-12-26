import React from 'react';
import { Bot, GitBranch, Shield, Sparkles } from 'lucide-react';

export function Features() {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our AI-powered platform provides comprehensive solutions for code quality and security.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex">
              <div className="flex-shrink-0">
                <Bot className="h-12 w-12 text-indigo-600" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-medium text-gray-900">AI-Driven Analysis</h3>
                <p className="mt-2 text-gray-500">
                  Advanced machine learning algorithms analyze your code in real-time, providing intelligent suggestions and fixes.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <GitBranch className="h-12 w-12 text-indigo-600" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-medium text-gray-900">Version Control Integration</h3>
                <p className="mt-2 text-gray-500">
                  Seamlessly integrates with your existing version control workflow for automated code reviews.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <Shield className="h-12 w-12 text-indigo-600" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-medium text-gray-900">Security Scanning</h3>
                <p className="mt-2 text-gray-500">
                  Continuous security scanning identifies vulnerabilities and suggests secure coding practices.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <Sparkles className="h-12 w-12 text-indigo-600" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-medium text-gray-900">Code Optimization</h3>
                <p className="mt-2 text-gray-500">
                  Automatically optimize your code for better performance and maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}