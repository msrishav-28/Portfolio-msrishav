import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, School, Trophy, GraduationCap, Sparkles } from 'lucide-react';

const educationData = [
  {
    institution: 'Indian Institute Of Technology Madras',
    degree: 'Data Science and Applications',
    level: 'Bachelor of Science',
    duration: 'May 2024 - Present',
    location: 'Chennai, Tamil Nadu',
    gpa: '6.0',
    image: '/iitm-campus.jpg',
    color: '#00529B',
    highlights: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Statistical Inference'
    ],
    achievements: ['Active participant in coding competitions', 'Part of Data Science Club']
  },
  {
    institution: 'Christ (Deemed to be University)',
    degree: 'BTech in Electronics and Computer Engineering',
    specialization: 'with Specialization in AI & ML',
    level: 'Bachelor of Technology',
    duration: 'August 2023 - Present',
    location: 'Bengaluru, Karnataka',
    image: '/christ-campus.jpg',
    color: '#003366',
    highlights: ['Artificial Intelligence', 'Deep Learning', 'Computer Vision'],
    achievements: ['IEEE Student Member', 'Hackathon Participant']
  }
];

const schoolEducationData = [
  {
    institution: "St. Michael's High School",
    location: 'Patna, Bihar',
    level: 'Class 12 (Senior Secondary)',
    duration: '2021-2022',
    percentage: '84%',
    image: '/smhs-campus.jpg',
    color: '#800000',
    stream: 'Science Stream',
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
    icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
  },
  {
    institution: "St. Michael's High School",
    location: 'Patna, Bihar',
    level: 'Class 10 (Secondary)',
    duration: '2010-2020',
    percentage: '93.6%',
    image: '/smhs-campus.jpg',
    color: '#800000',
    highlights: ['All Subjects', 'Top 5% of Batch'],
    icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-light-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-light-blue/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 lg:mb-12">
          <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-light-blue" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">Education</h2>
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-light-blue animate-pulse" />
        </div>

        {/* Higher Education */}
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Connection line */}
              {index > 0 && (
                <div className="absolute -top-4 sm:-top-6 left-1/2 w-0.5 h-4 sm:h-6 bg-gradient-to-b from-transparent to-gray-700" />
              )}

              <div className="bg-[#1a1b2e] rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-800 hover:border-gray-700">
                {/* Campus Image Header with Parallax Effect */}
                <div className="relative h-32 sm:h-48 md:h-64 lg:h-[450px] xl:h-[500px] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent/50 to-[#1a1b2e] z-10" />
                    <img
                      src={edu.image}
                      alt={`${edu.institution} Campus`}
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectPosition: edu.institution.includes('Christ')
                          ? 'center 20%'
                          : 'center center'
                      }}
                      loading="lazy"
                    />
                    {/* Overlay with institution branding */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                  </motion.div>

                  {/* Floating badges */}
                  <motion.div
                    className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div 
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md text-white text-xs sm:text-sm font-medium"
                      style={{ backgroundColor: `${edu.color}CC` }}
                    >
                      Currently Pursuing
                    </div>
                  </motion.div>

                  {/* Institution name with better styling */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-[#1a1b2e] via-[#1a1b2e]/90 to-transparent">
                    <motion.h3 
                      className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {edu.institution}
                    </motion.h3>
                    <motion.p 
                      className="text-sm sm:text-base lg:text-lg text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {edu.location}
                    </motion.p>
                  </div>
                </div>

                {/* Education Details with Better Layout */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Left Column - Degree Info */}
                    <div>
                      <h4 className="text-base sm:text-lg lg:text-xl text-light-blue font-semibold mb-1 sm:mb-2">
                        {edu.degree}
                      </h4>
                      {edu.specialization && (
                        <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3">
                          {edu.specialization}
                        </p>
                      )}
                      <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{edu.level}</p>

                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                          <Calendar className="w-4 h-4 text-light-blue" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                          <MapPin className="w-4 h-4 text-light-blue" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - GPA and Stats */}
                    <div className="flex flex-col justify-between mt-4 md:mt-0">
                      {edu.gpa && (
                        <div className="text-left md:text-right">
                          <p className="text-xs sm:text-sm text-gray-400 mb-1">Current GPA</p>
                          <p className="text-2xl sm:text-3xl font-bold text-light-blue">{edu.gpa}</p>
                          <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2 mt-2">
                            <div 
                              className="bg-gradient-to-r from-light-blue to-blue-400 h-1.5 sm:h-2 rounded-full"
                              style={{ width: `${(parseFloat(edu.gpa) / 10) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Course Highlights with Animation */}
                  {edu.highlights && (
                    <motion.div 
                      className="border-t border-gray-700 pt-4 sm:pt-6 mt-4 sm:mt-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Key Coursework:</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <motion.span
                            key={idx}
                            className="text-xs bg-navy/70 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-gray-300 border border-gray-700 hover:border-light-blue hover:text-light-blue transition-colors"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Achievements if any */}
                  {edu.achievements && (
                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-navy/30 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">Activities:</p>
                      <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-light-blue mt-0.5">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* School Education with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-300 flex items-center gap-2 sm:gap-3">
            <School className="w-5 h-5 sm:w-6 sm:h-6 text-light-blue" />
            School Education
            <div className="flex-1 h-px bg-gray-700 ml-3 sm:ml-4" />
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {schoolEducationData.map((edu, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  className="bg-[#1a1b2e] rounded-lg sm:rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-800 hover:border-gray-700 h-full"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {/* School Image Header */}
                  <div className="relative h-28 sm:h-36 md:h-48 lg:h-[280px] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1b2e]/30 to-[#1a1b2e] z-10" />
                      <img
                        src={edu.image}
                        alt={`${edu.institution}`}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: index === 0 ? 'center 30%' : 'center 40%'
                        }}
                        loading="lazy"
                      />
                    </motion.div>
                    
                    {/* Achievement Badge */}
                    <motion.div 
                      className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg"
                        style={{ backgroundColor: `${edu.color}20`, color: edu.color }}
                      >
                        {edu.icon}
                      </div>
                    </motion.div>

                    {/* Grade Badge */}
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 z-20">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
                        <p className="text-lg sm:text-2xl font-bold text-white">{edu.percentage}</p>
                        <p className="text-xs text-gray-300">Score</p>
                      </div>
                    </div>
                  </div>

                  {/* School Details */}
                  <div className="p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{edu.location}</p>

                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                      <div className="flex justify-between items-center">
                        <p className="text-xs sm:text-sm text-gray-300">{edu.level}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{edu.duration}</p>
                      </div>
                      {edu.stream && (
                        <p className="text-xs sm:text-sm text-light-blue">{edu.stream}</p>
                      )}
                    </div>

                    {edu.highlights && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-gray-700">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-navy/70 px-2 py-0.5 sm:py-1 rounded text-gray-400 hover:text-light-blue transition-colors"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};