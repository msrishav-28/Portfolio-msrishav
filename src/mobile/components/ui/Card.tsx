import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className = '', children }: CardProps) => {
  return (
    <motion.div
      className={`bg-[#1a1b2e] rounded-lg ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-xl font-mono font-bold mb-2">{children}</h3>;
};

export const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-gray-400 mb-4">{children}</p>;
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-gray-300">{children}</div>;
};

export const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-4 pt-4 border-t border-gray-700">{children}</div>;
};