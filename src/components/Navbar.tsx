import React from 'react';
import { Code2, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">CodeAnt AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
            <button className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}