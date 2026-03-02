import React from 'react';
import { motion } from 'motion/react';
import { Satellite, Eye, Zap, AlertTriangle, Layers, Maximize2, Camera } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const SatelliteEye = () => {
  return (
    <section id="satellite-eye" className="py-24 bg-tpa-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative aspect-video glass rounded-[2.5rem] overflow-hidden border-white/10 group">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/satellite/800/600')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
              
              {/* Scanning Line Animation */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[2px] bg-emerald-400/50 shadow-[0_0_15px_#10b981] z-20"
              />

              {/* AI Detection Boxes */}
              <div className="absolute top-[20%] left-[30%] w-24 h-24 border-2 border-red-500/50 rounded-lg">
                <div className="absolute -top-6 left-0 bg-red-500 text-[8px] font-mono px-2 py-0.5 text-white uppercase">Object: ICBM_SILO (98%)</div>
              </div>
              <div className="absolute top-[50%] left-[60%] w-32 h-20 border-2 border-emerald-500/50 rounded-lg">
                <div className="absolute -top-6 left-0 bg-emerald-500 text-[8px] font-mono px-2 py-0.5 text-black uppercase">Object: REINFORCED_ROOF (92%)</div>
              </div>

              {/* UI Overlays */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="glass px-3 py-1.5 rounded-lg text-[9px] font-mono text-white/60">
                  LAT: 34.0522° N // LON: 118.2437° W
                </div>
                <div className="flex gap-2">
                  <button className="glass p-2 rounded-lg"><Maximize2 className="w-3 h-3" /></button>
                  <button className="glass p-2 rounded-lg"><Layers className="w-3 h-3" /></button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="glass p-4 rounded-2xl text-center">
                <div className="text-xl font-bold text-emerald-400">1.2M</div>
                <div className="text-[9px] text-white/30 uppercase">KM² SCANNED DAILY</div>
              </div>
              <div className="glass p-4 rounded-2xl text-center">
                <div className="text-xl font-bold text-red-400">42</div>
                <div className="text-[9px] text-white/30 uppercase">NEW SILOS DETECTED</div>
              </div>
              <div className="glass p-4 rounded-2xl text-center">
                <div className="text-xl font-bold text-cyan-400">99.4%</div>
                <div className="text-[9px] text-white/30 uppercase">AI ACCURACY</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
              <Satellite className="w-4 h-4" /> Visual AI
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
              The <span className="text-emerald-400">Steel & Satellite</span> Eye
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Using Computer Vision to analyze high-frequency satellite imagery. We scan every square kilometer of Earth to detect illicit military builds and shadow factories.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Automated Object Recognition", desc: "Scans for tanks, aircraft, and naval vessels in real-time.", icon: <Eye className="w-5 h-5" /> },
                { title: "Change Detection", desc: "Flags when civilian warehouses get reinforced or new industrial roads appear.", icon: <Zap className="w-5 h-5" /> },
                { title: "Shadow Factory Alert", desc: "Detects unusual electricity consumption or chemical signatures.", icon: <AlertTriangle className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 glass rounded-2xl border-white/5 hover:bg-white/10 transition-all group cursor-pointer">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
