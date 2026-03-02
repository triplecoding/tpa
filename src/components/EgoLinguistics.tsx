import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, TrendingUp, AlertCircle, BarChart3, Globe, Shield } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const leaders = [
  { name: 'Leader Alpha', score: 84, trend: 'UP', sentiment: 'Aggressive' },
  { name: 'Leader Beta', score: 42, trend: 'STABLE', sentiment: 'Diplomatic' },
  { name: 'Leader Gamma', score: 91, trend: 'UP', sentiment: 'Hostile' },
  { name: 'Leader Delta', score: 15, trend: 'DOWN', sentiment: 'Cooperative' },
];

export const EgoLinguistics = () => {
  return (
    <section id="ego-linguistics" className="py-24 bg-tpa-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            <MessageSquare className="w-4 h-4" /> NLP AI
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
            The <span className="text-emerald-400">Ego-Linguistics</span> Engine
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            War starts in the mind and the media before the battlefield. We analyze rhetoric shifts to predict conflict before it happens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rhetoric Heatmap */}
          <div className="glass p-8 rounded-3xl border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-bold uppercase tracking-widest">Rhetoric Heatmap</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-red-500/10 rounded-2xl border border-red-500/20">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-red-400 font-bold">Hostility Spike</span>
                  <span className="text-white/40">Sector 4-B</span>
                </div>
                <div className="text-[10px] text-white/60 leading-relaxed">
                  "Sovereignty" and "External Threat" mentions increased by 400% in last 48h.
                </div>
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-emerald-400 font-bold">Cooperation Trend</span>
                  <span className="text-white/40">Sector 9-A</span>
                </div>
                <div className="text-[10px] text-white/60 leading-relaxed">
                  "Multilateralism" and "Climate Action" keywords trending upward.
                </div>
              </div>
            </div>
          </div>

          {/* War-Speech Score */}
          <div className="lg:col-span-2 glass p-8 rounded-3xl border-white/10">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm font-bold uppercase tracking-widest">The "War-Speech" Score</h3>
              </div>
              <span className="text-[10px] font-mono text-white/30">1-100 SCALE // HISTORICAL COMPARISON</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leaders.map((leader) => (
                <div key={leader.name} className="p-4 glass rounded-2xl border-white/5 hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">{leader.name}</span>
                    <span className={cn(
                      "text-[10px] font-mono px-2 py-0.5 rounded",
                      leader.score > 80 ? 'bg-red-500/20 text-red-400' : 
                      leader.score > 40 ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'
                    )}>
                      {leader.sentiment}
                    </span>
                  </div>
                  <div className="flex items-end gap-4">
                    <div className="text-3xl font-display font-bold">{leader.score}</div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full mb-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${leader.score}%` }}
                        className={cn(
                          "h-full",
                          leader.score > 80 ? 'bg-red-500' : 
                          leader.score > 40 ? 'bg-amber-500' : 'bg-emerald-500'
                        )}
                      />
                    </div>
                    <div className={cn(
                      "text-[10px] font-mono mb-1",
                      leader.trend === 'UP' ? 'text-red-400' : 
                      leader.trend === 'DOWN' ? 'text-emerald-400' : 'text-white/30'
                    )}>
                      {leader.trend === 'UP' ? '▲' : leader.trend === 'DOWN' ? '▼' : '—'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Propaganda Bot Detection */}
          <div className="lg:col-span-3 glass p-8 rounded-3xl border-white/10 bg-emerald-500/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Propaganda Bot Detection</h3>
                <p className="text-sm text-white/50">AI identifies state-sponsored bot farms manufacturing public consent for conflict.</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">12.4M</div>
                  <div className="text-[9px] text-white/30 uppercase">BOTS FLAGGED</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">842</div>
                  <div className="text-[9px] text-white/30 uppercase">FARMS SHUT DOWN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
