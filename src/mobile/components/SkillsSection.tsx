import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Package, Wrench, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ["Python", "C", "Java", "SQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Libraries/Frameworks",
    icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Flask", "FastAPI", "Pandas", "NumPy"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Tools / Platforms",
    icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ["Git", "GitHub Actions", "VS Code", "Jupyter Notebook", "Celonis", "UiPath", "Google Colab", "Solidworks", "MATLAB", "Unity"],
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ["MongoDB"],
    color: "from-orange-500 to-red-500"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <motion.h2 
        className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold mb-8 lg:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1b2e] rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-2 sm:mr-3`}>
                {category.icon}
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="bg-navy/70 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-xs sm:text-sm text-gray-300 border border-gray-700 hover:border-light-blue hover:text-light-blue transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div 
        className="mt-12 sm:mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-300">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {[
            "Generative AI Agent Development Bootcamp - qapp.ai",
            "Introduction to MongoDB (For Students) - MongoDB",
            "Introduction to Machine Learning - NPTEL",
            "Celonis Foundations - Celonis",
            "UiPath Academy Automation Explorer Training - UiPath"
          ].map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1b2e]/50 p-3 sm:p-4 rounded-lg border border-gray-700 hover:border-light-blue transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xs sm:text-sm text-gray-300">{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};