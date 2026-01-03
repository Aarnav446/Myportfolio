import React from 'react';
import { motion } from 'framer-motion';

const TECH_STACK = [
  { name: 'Python', category: 'Language', color: '3776AB' },
  { name: 'Flask', category: 'Backend', color: '000000' },
  { name: 'Django', category: 'Backend', color: '092E20' },
  { name: 'HTML5', label: 'HTML', category: 'Frontend', color: 'E34F26' },
  { name: 'CSS3', label: 'CSS', category: 'Frontend', color: '1572B6' },
  { name: 'JavaScript', label: 'JS', category: 'Language', color: 'F7DF1E' },
  { name: 'Scikit-learn', label: 'Scikit-learn', category: 'ML', color: 'F7931E', slug: 'scikit-learn' },
  { name: 'NumPy', category: 'Data', color: '013243' },
  { name: 'Pandas', category: 'Data', color: '150458' },
  { name: 'Seaborn', category: 'Visualization', color: '4C72B0', slug: 'seaborn' },
  { name: 'Matplotlib', category: 'Visualization', color: '11557C', slug: 'matplotlib' },
  { name: 'PostgreSQL', label: 'SQL', category: 'Database', color: '4479A1', slug: 'postgresql' },
];

export const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        
        <div className="flex-1 lg:sticky lg:top-32">
          <div className="flex items-end gap-5 mb-10 border-b border-primary/10 pb-8">
            <h2 className="text-5xl font-bold text-slate-800 font-sans tracking-tight uppercase">CONTROL CENTER</h2>
            <span className="text-primary font-mono text-xs pb-1 mb-1 font-black tracking-widest">/ TECH_STACK_v2.2</span>
          </div>
          
          <p className="text-slate-500 mb-12 text-xl font-medium leading-relaxed max-w-xl">
            A specialized arsenal of technologies calibrated for <span className="text-slate-800 font-bold">Predictive Modeling</span>, <span className="text-slate-800 font-bold">Full-Stack Architecture</span>, and <span className="text-slate-800 font-bold">Computer Vision</span>.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-3xl border-white/80 shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">Mastered Tools</div>
            </div>
            <div className="glass-card p-8 rounded-3xl border-white/80 shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">PRO</div>
              <div className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">Data Visualization</div>
            </div>
          </div>
        </div>

        <div className="flex-[1.5] w-full grid grid-cols-2 md:grid-cols-3 gap-6">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                transition: { duration: 0.3 } 
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass-card p-10 rounded-[40px] flex flex-col items-center justify-center text-center group cursor-default transition-all duration-300 border-white/40"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug || tech.name.toLowerCase().replace(' ', '').replace('3', '')}/${tech.color}`}
                  alt={tech.name}
                  className="w-full h-full object-contain relative z-10 transition-all duration-500 group-hover:scale-125"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${tech.name}&backgroundColor=indigo`;
                  }}
                />
              </div>
              <div className="font-bold text-slate-800 text-sm mb-1.5">{tech.label || tech.name}</div>
              <div className="text-[10px] font-mono text-slate-400 font-black tracking-widest uppercase">{tech.category}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};