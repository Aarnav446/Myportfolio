import React from 'react';
import { SciFiCard } from '../ui/SciFiCard';
import { Project } from '../../types';
import { ExternalLink, Bot, Globe, BarChart3, Rocket, Briefcase, Code2, Database, TrendingUp, Cpu, Camera, GraduationCap, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExtendedProject extends Omit<Project, 'type'> {
  type: string;
  progress: number;
  status: string;
  icon: React.ReactNode;
}

const PROJECTS: ExtendedProject[] = [
  {
    id: '1',
    title: 'Retire',
    description: 'A platform helping retired people to work again by matching their lifelong expertise with modern workforce gaps.',
    tags: ['Social Impact', 'Workforce'],
    type: 'Community',
    progress: 100,
    status: 'DEPLOYED',
    icon: <Briefcase size={20} />
  },
  {
    id: '2',
    title: 'Workx',
    description: 'An end-to-end platform providing users with specialized skills and direct earning opportunities within the same ecosystem.',
    tags: ['Skills', 'Earning'],
    type: 'Venture',
    progress: 85,
    status: 'ACTIVE_BETA',
    icon: <TrendingUp size={20} />
  },
  {
    id: '3',
    title: 'RoboSumo Bot',
    description: 'A custom-built pushing bot engineered for maximum torque and precision navigation in competitive robotic sumo environments.',
    tags: ['Robotics', 'Hardware'],
    type: 'Engineering',
    progress: 100,
    status: 'COMPLETE',
    icon: <Cpu size={20} />
  },
  {
    id: '4',
    title: 'Queue',
    description: 'Cryptocurrency analytics hub that predicts market trends and helps users invest wisely using real-time data modeling.',
    tags: ['FinTech', 'AI'],
    type: 'FinTech',
    progress: 70,
    status: 'DEVELOPMENT',
    icon: <BarChart3 size={20} />
  },
  {
    id: '5',
    title: 'House Rate Predictor',
    description: 'A data science engine using advanced regression to forecast property rates with high accuracy based on regional variables.',
    tags: ['ML', 'Data Science'],
    type: 'Data Science',
    progress: 100,
    status: 'STABLE',
    icon: <Database size={20} />
  },
  {
    id: '6',
    title: 'Hollodesk',
    description: 'A virtual whiteboard that can be accessed via your camera using MediaPipe to enable touchless digital collaboration.',
    tags: ['CV', 'MediaPipe'],
    type: 'Software',
    progress: 50,
    status: 'PROTOTYPE',
    icon: <Camera size={20} />
  },
  {
    id: '7',
    title: 'EchoLearn',
    description: 'An AI tutor featuring robust OCR technology to digitize handwritten notes and provide personalized learning paths.',
    tags: ['EdTech', 'OCR'],
    type: 'EdTech',
    progress: 90,
    status: 'PRODUCTION',
    icon: <GraduationCap size={20} />
  },
  {
    id: '8',
    title: 'FarmX',
    description: 'Agricultural AI predicting crop diseases based on soil temperature and gas release patterns through IoT sensing.',
    tags: ['IoT', 'AgriTech'],
    type: 'BioTech',
    progress: 65,
    status: 'TESTING',
    icon: <Sprout size={20} />
  }
];

export const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex items-end gap-5 mb-16 border-b border-primary/10 pb-8">
        <h2 className="text-5xl font-bold text-slate-800 font-sans tracking-tight uppercase">THE LABORATORY</h2>
        <span className="text-primary font-mono text-xs pb-1 mb-1 font-black tracking-widest">/ ACTIVE_VENTURES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <SciFiCard key={project.id} delay={idx * 0.05} className="min-h-[420px] flex flex-col justify-between hover:border-primary/40">
            <div>
              <div className="flex justify-between items-start mb-8">
                 <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                   {project.icon}
                 </div>
                 <div className="text-right">
                    <div className="text-[10px] font-mono text-slate-400 font-black tracking-widest uppercase">{project.status}</div>
                    <div className="text-[10px] font-mono text-primary/60 font-bold">{project.type}</div>
                 </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h3>
              
              <p className="text-slate-500 mb-8 leading-relaxed text-sm font-medium">
                {project.description}
              </p>
            </div>

            <div>
              <div className="mb-8">
                <div className="flex justify-between text-[10px] font-mono mb-2 text-slate-400 font-black uppercase tracking-wider">
                  <span>Development Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-indigo-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 text-[10px] font-mono text-slate-600 bg-white/80 rounded-lg font-black border border-slate-200 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 border-t border-slate-100 pt-6">
                <button className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-primary transition-colors font-black tracking-widest group uppercase">
                  <Rocket size={14} className="group-hover:-translate-y-0.5 transition-transform" /> DETAILS
                </button>
                <button className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-primary transition-colors font-black tracking-widest group uppercase">
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" /> LAUNCH
                </button>
              </div>
            </div>
          </SciFiCard>
        ))}
      </div>
    </div>
  );
};