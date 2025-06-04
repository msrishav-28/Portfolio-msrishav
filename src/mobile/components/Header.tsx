import React from 'react';
import { Github, Linkedin, Menu } from 'lucide-react';

interface HeaderProps {
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header = ({ setMobileMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-[#1a1b2e] flex items-center justify-between px-4 sm:px-6 lg:px-8 z-30">
      <div className="flex items-center">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-gray-300 hover:text-light-blue mr-4"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <nav className="hidden sm:block">
          <ul className="flex space-x-6 lg:space-x-8">
            <li>
              <a href="/" className="text-gray-300 hover:text-light-blue text-sm lg:text-base">Home</a>
            </li>
            <li>
              <a href="/documentation" className="text-gray-300 hover:text-light-blue text-sm lg:text-base">Documentation</a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="flex items-center space-x-4">
        <a href="https://github.com/msrishav-28" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-light-blue">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/m-s-rishav-subhin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-light-blue">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
};