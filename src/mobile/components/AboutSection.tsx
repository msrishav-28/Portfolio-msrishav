import React from 'react';
import { Code, Database, Brain } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold mb-6 lg:mb-8">About Me</h2>
      <div className="max-w-4xl">
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 lg:mb-12">
          Currently pursuing a dual education journey at IIT Madras (Data Science) and Christ University (ECE with AI/ML),
          I combine theoretical knowledge with practical implementation in AI/ML and software development.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="bg-[#1a1b2e] p-4 sm:p-5 lg:p-6 rounded-lg">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-light-blue">1+</div>
            <div className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Years of experience</div>
          </div>
          <div className="bg-[#1a1b2e] p-4 sm:p-5 lg:p-6 rounded-lg">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-light-blue">5+</div>
            <div className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Completed projects</div>
          </div>
          <div className="bg-[#1a1b2e] p-4 sm:p-5 lg:p-6 rounded-lg">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-light-blue">AI/ML</div>
            <div className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Focus area</div>
          </div>
        </div>

        {/* Services */}
        <h3 className="text-xl sm:text-2xl font-mono font-bold mb-6 lg:mb-8">Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="bg-[#1a1b2e] p-4 sm:p-5 lg:p-6 rounded-lg">
            <Brain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-light-blue mb-3 lg:mb-4" />
            <h4 className="text-lg sm:text-xl font-mono font-bold mb-2 lg:mb-3">AI/ML Development</h4>
            <p className="text-gray-300 text-sm sm:text-base">Developing intelligent solutions using cutting-edge AI/ML technologies.</p>
          </div>
          <div className="bg-[#1a1b2e] p-4 sm:p-5 lg:p-6 rounded-lg">
            <Code className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-light-blue mb-3 lg:mb-4" />
            <h4 className="text-lg sm:text-xl font-mono font-bold mb-2 lg:mb-3">Full-Stack Applications</h4>
            <p className="text-gray-300 text-sm sm:text-base">Building robust and scalable web applications with modern technologies.</p>
          </div>
          <div className="bg-[#1a1b2e] p-4 sm:p-5 lg:p-6 rounded-lg sm:col-span-2 lg:col-span-1">
            <Database className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-light-blue mb-3 lg:mb-4" />
            <h4 className="text-lg sm:text-xl font-mono font-bold mb-2 lg:mb-3">Data Science Solutions</h4>
            <p className="text-gray-300 text-sm sm:text-base">Transforming data into actionable insights and solutions.</p>
          </div>
        </div>

        {/* Skills */}
        <h3 className="text-xl sm:text-2xl font-mono font-bold mb-6 lg:mb-8">Skills</h3>
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          <div>
            <div className="flex justify-between mb-2 text-sm sm:text-base">
              <span>Python</span>
              <span>90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2 text-sm sm:text-base">
              <span>TensorFlow/PyTorch</span>
              <span>85%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2 text-sm sm:text-base">
              <span>AI/ML</span>
              <span>88%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '88%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2 text-sm sm:text-base">
              <span>Flask/FastAPI</span>
              <span>82%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};