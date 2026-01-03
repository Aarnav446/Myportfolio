import React from 'react';
import { Activity } from 'lucide-react';

export const LiveStats = () => {
  return (
    <div className="glass-card p-4 rounded-xl border border-white/60 w-64 font-mono text-xs shadow-lg">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
        <div className="flex items-center gap-2 text-primary font-bold">
           <Activity size={14} />
           <span>LIVE_METRICS</span>
        </div>
        <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Coding Streak</span>
          <span className="text-slate-800 font-bold bg-white/50 px-2 py-0.5 rounded">127 Days</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Datasets</span>
          <span className="text-slate-800 font-bold bg-white/50 px-2 py-0.5 rounded">42</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">Coffee Level</span>
          <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
             <div className="h-full bg-amber-400 w-[98%]"></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500">System Status</span>
          <span className="text-green-600 font-bold">OPTIMAL</span>
        </div>
      </div>
    </div>
  );
};