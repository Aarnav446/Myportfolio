import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundElements = () => {
  return (
    <>
      {/* Blobs are gpu-accelerated via the global css class or style transform */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 gpu-accelerated"
      />
      
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute top-[10%] right-[-20%] w-[50vw] h-[50vw] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 gpu-accelerated"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 4 }}
        className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 gpu-accelerated"
      />
    </>
  );
};