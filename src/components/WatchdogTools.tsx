import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Map, AlertTriangle, FileUp, Fingerprint, EyeOff, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const WatchdogTools = () => {
  return (
    <section id="watchdog" className="py-24 bg-tpa-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            <ShieldCheck className="w-4 h-4" /> Public Watchdog Tools
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
            The <span className="text-emerald-400">Expose</span> Factor
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Moving from "reporting news" to "generating evidence." Tools for citizens to hold leaders accountable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* The Deal Breaker */}
          <div className="glass p-8 rounded-[2.5rem] border-white/10 hover:bg-white/10 transition-all group">
            <div className="mb-6 p-4 bg-red-500/10 rounded-2xl inline-block text-red-400 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Deal Breaker</h3>
            <p className="text-sm text-white/50 mb-8 leading-relaxed">
              Live feed of flagged "Suspicious Tenders" for high-grade chemicals or specialized electronics. Proves weapons builds, not medicine.
            </p>
            <div className="space-y-3 mb-8">
              <div className="p-3 glass rounded-xl text-[10px] font-mono border-red-500/20">
                <div className="text-red-400 mb-1">FLAGGED TENDER #842</div>
                <div className="text-white/70">12 Tons of Specialized Carbon Fiber</div>
              </div>
              <div className="p-3 glass rounded-xl text-[10px] font-mono border-white/5">
                <div className="text-white/40 mb-1">TENDER #841</div>
                <div className="text-white/70">High-Precision Gyroscopes (Industrial)</div>
              </div>
            </div>
            <button className="w-full py-3 bg-red-600 rounded-xl font-bold text-xs uppercase tracking-widest">View Suspicious Tenders</button>
          </div>

          {/* Whistle-Secure AI */}
          <div className="glass p-8 rounded-[2.5rem] border-white/10 hover:bg-white/10 transition-all group bg-emerald-500/5">
            <div className="mb-6 p-4 bg-emerald-500/10 rounded-2xl inline-block text-emerald-400 group-hover:scale-110 transition-transform">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Whistle-Secure AI</h3>
            <p className="text-sm text-white/50 mb-8 leading-relaxed">
              Anonymous portal for workers. AI automatically scrubs metadata and verifies photo authenticity to protect informants.
            </p>
            <div className="p-8 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-center mb-8 group-hover:border-emerald-500/50 transition-colors">
              <FileUp className="w-8 h-8 text-white/20 mb-4 group-hover:text-emerald-400 transition-colors" />
              <div className="text-xs font-bold mb-1">Drop Evidence Here</div>
              <div className="text-[9px] text-white/30 uppercase">DRAG & DROP OR CLICK</div>
            </div>
            <div className="flex justify-center gap-4 text-[9px] font-mono text-white/30 uppercase">
              <span className="flex items-center gap-1"><Fingerprint className="w-3 h-3" /> Metadata Scrubbed</span>
              <span className="flex items-center gap-1"><EyeOff className="w-3 h-3" /> IP Masked</span>
            </div>
          </div>

          {/* The Corruption Map */}
          <div className="glass p-8 rounded-[2.5rem] border-white/10 hover:bg-white/10 transition-all group">
            <div className="mb-6 p-4 bg-cyan-500/10 rounded-2xl inline-block text-cyan-400 group-hover:scale-110 transition-transform">
              <Map className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Corruption Map</h3>
            <p className="text-sm text-white/50 mb-8 leading-relaxed">
              3D map showing where personal wealth of "Ego-Leaders" is hidden. Target the personal comfort of those who choose war.
            </p>
            <div className="aspect-video glass rounded-2xl overflow-hidden mb-8 relative">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/yacht/400/300')] bg-cover bg-center opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-tpa-dark to-transparent" />
              <div className="absolute bottom-3 left-3 glass px-2 py-1 rounded text-[8px] font-mono">
                FLAGGED ASSET: 142ft Superyacht 'Ego'
              </div>
            </div>
            <button className="w-full py-3 bg-cyan-600 rounded-xl font-bold text-xs uppercase tracking-widest">Explore Corruption Map</button>
          </div>
        </div>
      </div>
    </section>
  );
};
