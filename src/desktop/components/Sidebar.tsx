import React from 'react';
import { Github, Linkedin, Home, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';

export const Sidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-[#1a1b2e] p-6">
      <div className="flex flex-col h-full">
        <div className="mb-12">
          <h1 className="text-xl font-mono font-bold text-white">M S Rishav</h1>
        </div>
        
        <div className="flex-1">
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => scrollToSection('overview')} 
                className="flex items-center text-gray-300 hover:text-light-blue w-full text-left"
              >
                <Home className="w-5 h-5 mr-3" />
                Overview
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="flex items-center text-gray-300 hover:text-light-blue w-full text-left"
              >
                <Code className="w-5 h-5 mr-3" />
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="flex items-center text-gray-300 hover:text-light-blue w-full text-left"
              >
                <Briefcase className="w-5 h-5 mr-3" />
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('education')} 
                className="flex items-center text-gray-300 hover:text-light-blue w-full text-left"
              >
                <GraduationCap className="w-5 h-5 mr-3" />
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="flex items-center text-gray-300 hover:text-light-blue w-full text-left"
              >
                <Mail className="w-5 h-5 mr-3" />
                Contact
              </button>
            </li>
          </ul>
        </div>
        
        <div className="flex space-x-4">
          <a href="https://github.com/msrishav-28" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-light-blue">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/m-s-rishav-subhin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-light-blue">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};