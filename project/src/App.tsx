import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ComponentsSection } from './components/ComponentsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16">
        {/* Hero Section */}
        <motion.section 
          className="min-h-[calc(100vh-4rem)] flex items-center relative p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <motion.h2 
              className="text-2xl mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Rishav Subhin!
            </motion.h2>
            <motion.h1 
              className="text-5xl font-mono font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Innovative Software Solutions
              <br />
              to Build a Connected <span className="text-light-blue">World</span>
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              AI/ML Engineer & Software Developer specializing in creating intelligent solutions
              that bridge the gap between artificial intelligence and real-world applications.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="#about" 
                className="bg-light-blue text-navy px-6 py-3 rounded-lg font-medium hover:bg-opacity-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About me
              </motion.a>
              <motion.a 
                href="#contact" 
                className="border border-light-blue text-light-blue px-6 py-3 rounded-lg font-medium hover:bg-light-blue hover:bg-opacity-10 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's talk <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Social Follow Sidebar */}
          <motion.div 
            className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="text-sm text-gray-400 rotate-90 mb-8">Follow me</div>
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-light-blue"
              whileHover={{ scale: 1.2 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-light-blue"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.section>

        <div className="px-8">
          <AboutSection />
          <TimelineSection />
          <ProjectsSection />
          <ComponentsSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;