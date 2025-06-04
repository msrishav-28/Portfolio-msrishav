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
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-mono font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1a1b2e] p-6 rounded-lg">
            <h3 className="text-xl font-mono font-bold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="bg-navy px-3 py-1 rounded-full text-sm text-light-blue">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-light-blue hover:text-white"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
