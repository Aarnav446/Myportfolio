import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';
import { TerminalCommand } from '../types';

export const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<TerminalCommand[]>([
    { command: 'init', output: 'AarnavOS v2.1 Initialized. Welcome, Commander Garg.' },
    { command: 'hint', output: 'Try typing "projects" or "stack".' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = 'Commands: projects, stack, about, whoami, clear, exit';
        break;
      case 'projects':
        output = 'Active Ventures: Retire, Workx, RoboSumo, Queue, HousePredictor, Hollodesk, EchoLearn, FarmX.';
        break;
      case 'stack':
        output = 'Stack: Python (Flask, Django, Sklearn), Web (React, JS, HTML/CSS), DB (SQL).';
        break;
      case 'about':
        output = 'Aarnav Garg: Data Scientist, Robotics Engineer, and Entrepreneur.';
        break;
      case 'whoami':
        output = 'Authenticated session. UID: AARNAV_G_9.';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        setIsOpen(false);
        return;
      default:
        output = `Error: Protocol "${cmd}" not recognized. Type "help".`;
    }

    setHistory(prev => [...prev, { command: input, output }]);
    setInput('');
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 flex items-center gap-3 bg-white/90 text-primary px-6 py-4 border border-primary/20 rounded-2xl font-mono text-xs hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(67,56,202,0.3)] transition-all shadow-xl backdrop-blur-xl group"
      >
        <TerminalIcon size={18} className="group-hover:rotate-12 transition-transform" />
        <span className="font-black tracking-[0.2em] uppercase">SYSTEM_ACCESS</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 left-8 right-8 md:right-auto md:w-[550px] h-[400px] z-50 bg-slate-900 border border-white/10 rounded-[32px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden font-mono text-xs backdrop-blur-2xl">
      {/* Header */}
      <div className="bg-slate-800/50 px-6 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3 text-slate-400">
          <TerminalIcon size={16} />
          <span className="text-[10px] font-black tracking-[0.3em] uppercase">COMMAND_INTERFACE</span>
        </div>
        <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-slate-700 cursor-pointer hover:bg-yellow-500 transition-colors" />
             <div className="w-3 h-3 rounded-full bg-slate-700 cursor-pointer hover:bg-green-500 transition-colors" />
             <div className="w-3 h-3 rounded-full bg-slate-700 cursor-pointer hover:bg-red-500 transition-colors" onClick={() => setIsOpen(false)}/>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-slate-900/40">
        {history.map((item, idx) => (
          <div key={idx} className="mb-5">
            <div className="flex gap-3 text-slate-500 items-center">
              <span className="text-primary font-black">#</span>
              <span className="font-bold text-slate-200">{item.command}</span>
            </div>
            <div className="text-slate-400 ml-6 mt-1.5 leading-relaxed">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleCommand} className="p-5 border-t border-white/5 flex gap-3 bg-slate-900/80">
        <ChevronRight size={16} className="text-primary mt-0.5"/>
        <input 
          autoFocus
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-white focus:outline-none font-mono placeholder-slate-700 text-sm"
          placeholder="RUN_PROTOCOL..."
        />
      </form>
    </div>
  );
};