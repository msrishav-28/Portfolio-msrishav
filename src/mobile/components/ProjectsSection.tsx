import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Tic-Tac-Toe",
    description: "Java-based game featuring an intelligent AI opponent using the Minimax algorithm.",
    tech: ["Java", "JavaFX", "AI Algorithm"],
    github: "https://github.com/msrishav-28/tictactoe"
  },
  {
    title: "Meeting-Summarizer",
    description: "Streamlit application that generates concise meeting summaries using the Groq API.",
    tech: ["Python", "Streamlit", "Groq API"],
    github: "https://github.com/msrishav-28/meeting-summarizer"
  },
  {
    title: "Chatbot",
    description: "RAG-based chatbot leveraging Groq LLMs and Pinecone for efficient information retrieval.",
    tech: ["Python", "Groq", "Pinecone", "RAG"],
    github: "https://github.com/msrishav-28/chatbot"
  },
  {
    title: "CODE-REPO-AGENTS",
    description: "Flask-based application integrating GitHub API for repository analysis and management.",
    tech: ["Python", "Flask", "GitHub API"],
    github: "https://github.com/msrishav-28/code-repo-agents"
  },
  {
    title: "Resume Parser",
    description: "Flask-based system for automated resume analysis and information extraction.",
    tech: ["Python", "Flask", "NLP", "ML"],
    github: "https://github.com/msrishav-28/resume-parser"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold mb-6 lg:mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1a1b2e] p-4 sm:p-5 lg:p-6 rounded-lg h-full flex flex-col">
            <h3 className="text-lg sm:text-xl font-mono font-bold mb-2 lg:mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-3 lg:mb-4 text-sm sm:text-base flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 lg:mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="bg-navy px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm text-light-blue">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-light-blue hover:text-white text-sm sm:text-base mt-auto"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};