import React from 'react';
import { Github, Linkedin, Home, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';

export const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-[#1a1b2e] p-6">
      <div className="flex flex-col h-full">
        <div className="mb-12">
          <h1 className="text-xl font-mono font-bold text-white">Rishav S.</h1>
        </div>
        
        <div className="flex-1">
          <ul className="space-y-4">
            <li>
              <a href="#overview" className="flex items-center text-gray-300 hover:text-light-blue">
                <Home className="w-5 h-5 mr-3" />
                Overview
              </a>
            </li>
            <li>
              <a href="#projects" className="flex items-center text-gray-300 hover:text-light-blue">
                <Code className="w-5 h-5 mr-3" />
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="flex items-center text-gray-300 hover:text-light-blue">
                <Briefcase className="w-5 h-5 mr-3" />
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="flex items-center text-gray-300 hover:text-light-blue">
                <GraduationCap className="w-5 h-5 mr-3" />
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center text-gray-300 hover:text-light-blue">
                <Mail className="w-5 h-5 mr-3" />
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-light-blue">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-light-blue">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};