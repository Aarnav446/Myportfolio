import React from 'react';
import { BackgroundElements } from './components/SpaceBackground';
import { Navigation } from './components/Navigation';
import { Terminal } from './components/Terminal';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { LiveStats } from './components/LiveStats';

export default function App() {
  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-primary-light selection:text-white">
      
      {/* Background Layer - Optimized Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <BackgroundElements />
      </div>

      {/* UI Overlay Layer */}
      <div className="relative z-10 flex flex-col">
        <Navigation />
        
        <main className="flex-grow flex flex-col gap-24 pb-32 pt-20">
          <section id="home" className="min-h-[90vh] flex items-center justify-center px-4 relative">
             <Home />
             <div className="absolute bottom-10 right-10 hidden lg:block z-20">
               <LiveStats />
             </div>
          </section>

          <section id="projects" className="min-h-screen py-20 px-4">
            <Projects />
          </section>

          <section id="skills" className="min-h-screen py-20 px-4 flex items-center justify-center">
            <Skills />
          </section>
        </main>

        <Terminal />
      </div>
    </div>
  );
}