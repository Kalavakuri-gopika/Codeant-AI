import React from 'react';

interface LoginButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export function LoginButton({ icon, text, onClick }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  );
}