import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Transmission sent to deep space! (This is a demo)');
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 font-sans mb-4">THE TRANSMISSION</h2>
        <p className="text-primary font-mono font-bold">ESTABLISH_UPLINK_PROTOCOL</p>
      </div>

      <div className="glass-card p-8 md:p-12 border-l-4 border-l-primary rounded-r-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-primary font-bold uppercase">Identifier (Name)</label>
              <input 
                type="text"
                required
                className="w-full bg-white/50 border border-slate-300 p-3 text-slate-800 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono transition-all"
                placeholder="Ex: Elon Musk"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-primary font-bold uppercase">Frequency (Email)</label>
              <input 
                type="email"
                required
                className="w-full bg-white/50 border border-slate-300 p-3 text-slate-800 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono transition-all"
                placeholder="Ex: elon@spacex.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-primary font-bold uppercase">Payload (Message)</label>
            <textarea 
              rows={5}
              required
              className="w-full bg-white/50 border border-slate-300 p-3 text-slate-800 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono transition-all"
              placeholder="Enter transmission data..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-primary text-white font-mono font-bold rounded-lg hover:bg-primary-light transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-primary/30"
          >
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            SEND_TRANSMISSION
          </button>
        </form>
      </div>
    </div>
  );
};