import React from 'react';

interface CodeAntLogoProps {
  className?: string;
}

export function CodeAntLogo({ className = "h-16 w-16" }: CodeAntLogoProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer circle */}
      <div className="absolute inset-0 rounded-full border-4 border-indigo-600"></div>
      {/* Inner circle */}
      <div className="absolute inset-4 rounded-full bg-indigo-600 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    </div>
  );
}