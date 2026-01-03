import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from '../ui/Typewriter';
import { ChevronDown, Code2, Rocket, Database, Cpu, Activity } from 'lucide-react';

export const Home = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 z-10 px-8 py-12">
      
      {/* Left Content Area */}
      <div className="flex-1 text-left gpu-accelerated z-30">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 mb-4 text-[11px] font-mono font-black tracking-[0.4em] text-primary bg-white/80 border border-primary/20 rounded-full backdrop-blur-xl shadow-sm uppercase">
            PROTOCOL_V3 // ACTIVE
          </span>
        </motion.div>

        <div className="mb-10 relative">
          <h1 className="text-6xl md:text-8xl font-bold font-sans tracking-tighter text-slate-900 leading-[0.9] mb-4">
            Aarnav Garg
          </h1>
          <div className="relative inline-block">
            <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-purple-600">
              Coding the Future
            </span>
          </div>
        </div>

        <div className="h-12 text-xl md:text-2xl text-slate-500 font-mono mb-12 font-medium">
          <Typewriter 
            text="> Transforming data into high-growth ventures..." 
            delay={35}
            className="text-primary/70"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap gap-6"
        >
          <a href="#projects" className="px-12 py-4 bg-primary hover:bg-primary-light text-white font-bold font-mono text-sm rounded-2xl transition-all shadow-[0_15px_30px_-10px_rgba(67,56,202,0.4)] hover:shadow-[0_20px_45px_-10px_rgba(67,56,202,0.5)] hover:-translate-y-1">
            VIEW_LABORATORY
          </a>
          <a href="#skills" className="px-12 py-4 border border-slate-200 bg-white/50 text-slate-600 hover:bg-white hover:border-primary/30 font-bold font-mono text-sm rounded-2xl transition-all backdrop-blur-md">
            CONTROL_CENTER
          </a>
        </motion.div>
      </div>

      {/* Right Visual Area */}
      <div className="flex-1 relative h-[550px] w-full flex items-center justify-center lg:justify-end pointer-events-none z-10">
         {/* Background Glows */}
         <div className="absolute w-[450px] h-[450px] bg-primary/10 rounded-full blur-[120px] opacity-60"></div>
         
         {/* Quantum Hub Core */}
         <motion.div 
           className="w-80 h-80 lg:w-96 lg:h-96 rounded-[64px] glass-card border-white/60 p-2 flex items-center justify-center z-20 relative shadow-2xl"
           animate={{ 
             y: [0, -20, 0],
             rotate: [0, 1, 0]
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
         >
            <div className="w-full h-full bg-white/70 rounded-[56px] border border-white relative overflow-hidden flex flex-col items-center justify-center p-8">
                <div className="absolute top-8 left-8 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">PROTO_NODE_67</span>
                </div>

                <div className="relative mb-8">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-48 h-48 -m-10 border border-dashed border-primary/20 rounded-full"
                  />
                  <div className="w-28 h-28 bg-gradient-to-br from-primary via-indigo-600 to-indigo-400 rounded-[40px] flex items-center justify-center shadow-2xl relative z-10">
                    <Cpu className="text-white scale-[1.5]" strokeWidth={1} />
                  </div>
                </div>

                <div className="text-center w-full">
                  <div className="font-mono text-[11px] font-black text-slate-700 tracking-[0.3em] uppercase mb-3">QUANTUM_PROCESSING</div>
                  <div className="flex gap-1.5 justify-center">
                    {[1,2,3,4,5,6].map(i => (
                      <motion.div 
                        key={i}
                        animate={{ height: [6, 18, 6], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                        className="w-1 rounded-full bg-primary"
                      />
                    ))}
                  </div>
                </div>
            </div>
         </motion.div>

         {/* Floating Elements */}
         <motion.div 
            className="absolute top-20 right-0 p-6 bg-white/90 rounded-[32px] shadow-2xl border border-white backdrop-blur-xl z-30"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         >
             <Rocket className="text-indigo-600" size={36} />
         </motion.div>

         <motion.div 
            className="absolute bottom-20 left-10 p-6 bg-white/90 rounded-[32px] shadow-2xl border border-white backdrop-blur-xl z-30"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         >
             <Activity className="text-purple-600" size={36} />
         </motion.div>

         <motion.div 
            className="absolute top-1/2 left-[-30px] p-5 bg-white rounded-full shadow-2xl border border-white backdrop-blur-xl z-30 transform -translate-y-1/2"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
         >
            <Database className="text-teal-500" size={28} />
         </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={36} />
      </motion.div>
    </div>
  );
};