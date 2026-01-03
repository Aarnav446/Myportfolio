import React from 'react';
import { motion } from 'framer-motion';

interface SciFiCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const SciFiCard: React.FC<SciFiCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`glass-card p-6 rounded-2xl relative group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      {/* Subtle sheen effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {children}
    </motion.div>
  );
};