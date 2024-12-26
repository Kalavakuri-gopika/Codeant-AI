import React from 'react';
import { Shield, Code, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Revolutionizing</span>
            <span className="block text-indigo-600">Code Quality & Security</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Leverage AI-driven solutions to write cleaner, safer, and more efficient code. 
            Trusted by leading unicorns and backed by top Silicon Valley investors.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get Started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Shield className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Enhanced Security</h3>
            <p className="mt-2 text-center text-gray-500">Detect and fix security vulnerabilities before they become issues.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Code className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Clean Code</h3>
            <p className="mt-2 text-center text-gray-500">AI-powered suggestions for cleaner, more maintainable code.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Zap className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium">Efficient Development</h3>
            <p className="mt-2 text-center text-gray-500">Streamline your development process with automated fixes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}