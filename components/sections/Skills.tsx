import React from 'react';
import { motion } from 'framer-motion';

const TECH_STACK = [
  { name: 'Python', category: 'Core Language', color: '3776AB', slug: 'python' },
  { name: 'Flask', category: 'Backend Engine', color: '000000', slug: 'flask' },
  { name: 'Django', category: 'Enterprise Web', color: '092E20', slug: 'django' },
  { name: 'HTML5', label: 'HTML', category: 'Structure', color: 'E34F26', slug: 'html5' },
  { name: 'CSS3', label: 'CSS', category: 'Visual Layer', color: '1572B6', slug: 'css3' },
  { name: 'JavaScript', label: 'JS', category: 'Interactivity', color: 'F7DF1E', slug: 'javascript' },
  { name: 'Scikit-learn', label: 'Scikit-learn', category: 'ML Algorithms', color: 'F7931E', slug: 'scikitlearn' },
  { name: 'NumPy', category: 'Vector Math', color: '013243', slug: 'numpy' },
  { name: 'Pandas', category: 'Data Frames', color: '150458', slug: 'pandas' },
  { name: 'Seaborn', category: 'Advanced Viz', color: '4C72B0', slug: 'seaborn' },
  { name: 'Matplotlib', category: 'Engineered Charts', color: '11557C', slug: 'matplotlib' },
  { name: 'PostgreSQL', label: 'SQL', category: 'Relational DB', color: '4479A1', slug: 'postgresql' },
];

export const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-8 py-24">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        
        <div className="flex-1 lg:sticky lg:top-32">
          <div className="flex items-end gap-5 mb-10 border-b border-primary/10 pb-10">
            <h2 className="text-5xl font-bold text-slate-900 font-sans tracking-tight uppercase">CONTROL CENTER</h2>
            <span className="text-primary font-mono text-xs pb-1 mb-1 font-black tracking-widest">/ TECH_INVENTORY_v3.0</span>
          </div>
          
          <p className="text-slate-500 mb-14 text-xl font-medium leading-relaxed max-w-xl">
            A precise technical arsenal calibrated for <span className="text-slate-900 font-bold">Data Engineering</span>, <span className="text-slate-900 font-bold">Venture Development</span>, and <span className="text-slate-900 font-bold">Systems Architecture</span>.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-10 rounded-[40px] border-white shadow-sm flex flex-col justify-center">
              <div className="text-5xl font-bold text-primary mb-2">12+</div>
              <div className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.2em]">Mastered Specs</div>
            </div>
            <div className="glass-card p-10 rounded-[40px] border-white shadow-sm flex flex-col justify-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">PRO</div>
              <div className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.2em]">Deployment Tier</div>
            </div>
          </div>
        </div>

        <div className="flex-[1.6] w-full grid grid-cols-2 md:grid-cols-3 gap-6">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -12, 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                transition: { duration: 0.3, ease: "circOut" } 
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass-card p-12 rounded-[56px] flex flex-col items-center justify-center text-center group cursor-default transition-all duration-400 border-white/40 shadow-xl shadow-indigo-500/5"
            >
              <div className="w-20 h-20 mb-8 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  className="w-full h-full object-contain relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${tech.name}&backgroundColor=4338ca`;
                  }}
                />
              </div>
              <div className="font-bold text-slate-900 text-base mb-2 tracking-tight">{tech.label || tech.name}</div>
              <div className="text-[11px] font-mono text-slate-400 font-black tracking-widest uppercase">{tech.category}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};