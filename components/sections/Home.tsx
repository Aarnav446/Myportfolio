import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from '../ui/Typewriter';
import { ChevronDown, Code2, Rocket, Database, Cpu, Activity } from 'lucide-react';

export const Home = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10 px-6 py-8">
      
      {/* Left: Text Content */}
      <div className="flex-1 text-left gpu-accelerated z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 mb-4 text-[10px] font-mono font-black tracking-[0.4em] text-primary bg-white/80 border border-primary/20 rounded-lg backdrop-blur-xl shadow-sm uppercase">
            EST_2024 // SYSTEM_V1
          </span>
        </motion.div>

        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold font-sans tracking-tighter text-slate-800 leading-none">
            Aarnav Garg
          </h1>
          <div className="mt-4">
            <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
              Architecting Intelligence
            </span>
          </div>
        </div>

        <div className="h-12 text-lg md:text-xl text-slate-500 font-mono mb-10 font-medium">
          <Typewriter 
            text="> Turning raw data into high-growth ventures..." 
            delay={40}
            className="text-primary/70"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="px-10 py-4 bg-primary hover:bg-primary-light text-white font-bold font-mono text-sm rounded-xl transition-all shadow-[0_15px_30px_-10px_rgba(67,56,202,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(67,56,202,0.5)] hover:-translate-y-1">
            EXPLORE_LAB
          </a>
          <a href="#skills" className="px-10 py-4 border border-slate-200 bg-white/40 text-slate-600 hover:bg-white/80 font-bold font-mono text-sm rounded-xl transition-all backdrop-blur-md">
            TECH_STACK
          </a>
        </motion.div>
      </div>

      {/* Right: High-Fidelity NanoBanana Visual */}
      <div className="flex-1 relative h-[500px] w-full flex items-center justify-center pointer-events-none">
         {/* Background Radial Glow */}
         <div className="absolute w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-[100px] animate-pulse"></div>
         
         {/* Main Visual Unit - Multi-layered Hub */}
         <motion.div 
           className="w-80 h-80 rounded-[56px] glass-card border-white/80 p-2 flex items-center justify-center z-10 relative shadow-2xl"
           animate={{ 
             y: [0, -15, 0],
             rotate: [0, 1, 0]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
         >
            <div className="w-full h-full bg-white/60 rounded-[48px] border border-white/60 relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-[8px] font-mono font-black text-slate-400 uppercase tracking-widest">PROTO_NODE_67</span>
                </div>

                <div className="relative p-6">
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-36 h-36 -m-2 border border-dashed border-primary/30 rounded-full"
                  />
                  <div className="w-24 h-24 bg-gradient-to-tr from-primary via-indigo-500 to-blue-400 rounded-3xl flex items-center justify-center shadow-xl relative z-10">
                    <Cpu className="text-white scale-125" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="mt-8 text-center px-4">
                  <div className="font-mono text-[9px] font-black text-slate-600 tracking-[0.2em] uppercase mb-2">QUANTUM_PROCESSING</div>
                  <div className="flex gap-1 justify-center">
                    {[1,2,3,4,5].map(i => (
                      <motion.div 
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                      />
                    ))}
                  </div>
                </div>
            </div>
         </motion.div>

         {/* Orbiting Tech Nodes */}
         <motion.div 
            className="absolute top-10 right-4 p-5 bg-white rounded-3xl shadow-xl border border-white/80 backdrop-blur-xl z-20"
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         >
             <Rocket className="text-indigo-600" size={32} />
         </motion.div>

         <motion.div 
            className="absolute bottom-10 left-10 p-5 bg-white rounded-3xl shadow-xl border border-white/80 backdrop-blur-xl z-20"
            animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         >
             <Activity className="text-purple-600" size={32} />
         </motion.div>

         <motion.div 
            className="absolute top-1/2 left-0 p-4 bg-white rounded-full shadow-lg border border-white/80 backdrop-blur-xl z-20 transform -translate-y-1/2"
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
         >
            <Database className="text-teal-500" size={24} />
         </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};