import React from 'react';

interface AntLogoProps {
  className?: string;
}

export function AntLogo({ className = "h-16 w-16" }: AntLogoProps) {
  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 rounded-full border-[1.5px] border-gray-900"></div>
        <div className="absolute inset-[3px] rounded-full border-[1.5px] border-gray-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <span className="mt-2 text-xl font-medium">CodeAnt AI</span>
    </div>
  );
}