import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase } from 'lucide-react';

const timelineItems = [
  {
    year: '2023',
    title: 'AI/ML Developer',
    subtitle: 'Freelance Projects',
    description: 'Developed machine learning models and AI solutions for various clients.',
    type: 'work',
  },
  {
    year: '2024 - Present',
    title: 'IIT Madras',
    subtitle: 'BS in Data Science and Applications',
    type: 'education',
  },
  {
    year: '2023 - Present',
    title: 'Christ University',
    subtitle: 'B.Tech in Electronics & Communication with AI/ML',
    type: 'education',
  },
  {
    year: '2021 - 2022',
    title: "St. Michael's High School",
    subtitle: 'Class 12 (Senior Secondary) - Science Stream',
    type: 'education',
  },
  {
    year: '2010 - 2020',
    title: "St. Michael's High School",
    subtitle: 'Class 10 (Secondary)',
    type: 'education',
  },
];

export const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="timeline" className="py-12 sm:py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold mb-8 lg:mb-12">Education & Experience</h2>

      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Timeline line - adjusted for mobile */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-700" />

        {/* Timeline items */}
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center mb-8 sm:mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-light-blue flex items-center justify-center">
              {item.type === 'education' ? (
                <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-navy" />
              ) : (
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-navy" />
              )}
            </div>

            {/* Content */}
            <div
              className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'
              }`}
            >
              <div className="bg-[#1a1b2e] p-4 sm:p-6 rounded-lg">
                <span className="text-light-blue font-mono text-sm sm:text-base">{item.year}</span>
                <h3 className="text-lg sm:text-xl font-bold mt-1 sm:mt-2">{item.title}</h3>
                <p className="text-gray-400 mt-1 text-sm sm:text-base">{item.subtitle}</p>
                {item.description && (
                  <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base">{item.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};