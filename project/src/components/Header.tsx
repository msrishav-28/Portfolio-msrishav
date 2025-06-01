import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-[#1a1b2e] flex items-center justify-between px-8 z-10">
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a href="/" className="text-gray-300 hover:text-light-blue">Home</a>
          </li>
          <li>
            <a href="/documentation" className="text-gray-300 hover:text-light-blue">Documentation</a>
          </li>
        </ul>
      </nav>
      
      <div className="flex items-center space-x-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-light-blue">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-light-blue">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
};