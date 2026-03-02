import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Droplets, Sun, Home, ArrowRight, Leaf } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const countries = [
  { name: 'United States', budget: 820, currency: 'B' },
  { name: 'China', budget: 292, currency: 'B' },
  { name: 'Russia', budget: 86, currency: 'B' },
  { name: 'India', budget: 81, currency: 'B' },
  { name: 'Germany', budget: 66, currency: 'B' },
  { name: 'Global Average', budget: 2718, currency: 'B' },
];

export const GreenCalculator = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [reallocation, setReallocation] = useState(10);

  const reallocatedAmount = (selectedCountry.budget * (reallocation / 100)).toFixed(1);
  
  // Hypothetical conversions
  const cleanEnergyHomes = (parseFloat(reallocatedAmount) * 4).toFixed(0); // 1B = 4M homes
  const oceanCleaningUnits = (parseFloat(reallocatedAmount) * 20).toFixed(0); // 1B = 20 units
  const reforestationHectares = (parseFloat(reallocatedAmount) * 0.5).toFixed(1); // 1B = 0.5M hectares

  return (
    <section id="calculator" className="py-24 bg-tpa-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
                The <span className="text-emerald-400">Green Conversion</span> Calculator
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Visualize a world where planetary defense takes priority over state ego. Reallocate the budget and see the impact.
              </p>

              <div className="space-y-8">
                <div>
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4 block">Select Entity</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {countries.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedCountry(c)}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-medium transition-all border",
                          selectedCountry.name === c.name 
                            ? "bg-emerald-500 border-emerald-500 text-black" 
                            : "glass border-white/5 text-white/60 hover:border-white/20"
                        )}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Reallocation Percentage</label>
                    <span className="text-2xl font-display font-bold text-emerald-400">{reallocation}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={reallocation}
                    onChange={(e) => setReallocation(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between mt-2 text-[10px] font-mono text-white/20">
                    <span>MINIMAL IMPACT</span>
                    <span>TOTAL DISARMAMENT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-8 rounded-3xl border-emerald-500/20 bg-emerald-500/5">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Funds Reallocated</div>
                <div className="text-5xl font-display font-bold text-emerald-400 mb-2">
                  ${reallocatedAmount}{selectedCountry.currency}
                </div>
                <div className="text-xs text-white/40">From {selectedCountry.name}'s annual defense budget</div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-6 p-6 glass rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Sun className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{cleanEnergyHomes}M</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Homes powered by clean energy</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 glass rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Droplets className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{oceanCleaningUnits}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Ocean cleaning interceptors deployed</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 glass rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Leaf className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{reforestationHectares}M</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Hectares of forest restored</div>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                Join the Green Conversion Movement
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
