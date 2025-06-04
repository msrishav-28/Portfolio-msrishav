import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      
      <Header setMobileMenuOpen={setIsMobileMenuOpen} />
      
      <main className="lg:ml-64 pt-16">
        {/* Hero Section */}
        <motion.section 
          id="overview"
          className="min-h-[calc(100vh-4rem)] flex items-center relative px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl w-full">
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm M S Rishav Subhin!
            </motion.h2>
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Innovative Software Solutions
              <br className="hidden sm:block" />
              <span className="block sm:inline"> to Build a Connected <span className="text-light-blue">World</span></span>
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              AI/ML Engineer & Software Developer specializing in creating intelligent solutions
              that bridge the gap between artificial intelligence and real-world applications.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="#about" 
                className="bg-light-blue text-navy px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-opacity-90 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About me
              </motion.a>
              <motion.a 
                href="#contact" 
                className="border border-light-blue text-light-blue px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-light-blue hover:bg-opacity-10 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's talk <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Social Follow Sidebar - Hidden on mobile */}
          <motion.div 
            className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="text-sm text-gray-400 rotate-90 mb-8">Follow me</div>
            <motion.a 
              href="https://github.com/msrishav-28" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-light-blue"
              whileHover={{ scale: 1.2 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/m-s-rishav-subhin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-light-blue"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.section>

        <div className="px-4 sm:px-6 lg:px-8">
          <AboutSection />
          <TimelineSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;