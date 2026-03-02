import React from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Satellite, AlertTriangle, TrendingDown, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const data = [
  { name: 'Jan', cost: 400 },
  { name: 'Feb', cost: 600 },
  { name: 'Mar', cost: 800 },
  { name: 'Apr', cost: 1200 },
  { name: 'May', cost: 1100 },
  { name: 'Jun', cost: 1500 },
  { name: 'Jul', cost: 1900 },
];

export const EgoTracker = () => {
  return (
    <section id="intelligence" className="py-24 bg-tpa-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter">
            The <span className="text-emerald-400">Ego-Tracker</span> Dashboard
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            Real-time intelligence proving that humanity is watching. We track the cost of state-level ego.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Missile Watch */}
          <div className="glass p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Satellite className="w-24 h-24" />
            </div>
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Missile Watch</div>
            <div className="text-6xl font-display font-bold text-red-500 mb-2">142</div>
            <div className="text-sm text-white/60">Long-range tests detected globally in 2026</div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/40">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Latest: ICBM Launch - Sector 4-B (Verified)
              </div>
              <div className="flex items-center gap-3 text-xs text-white/40">
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                Alert: Unusual Silo Activity - Sector 9-A
              </div>
            </div>
          </div>

          {/* Conflict Premium Index */}
          <div className="lg:col-span-2 glass p-8 rounded-3xl">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Conflict Premium Index</div>
                <div className="text-3xl font-bold text-emerald-400">$2.4T</div>
                <div className="text-xs text-white/40">Economic cost of non-defensive military expansion</div>
              </div>
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <TrendingDown className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#ffffff40" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cost" 
                    stroke="#10b981" 
                    strokeWidth={3} 
                    dot={{ fill: '#10b981', r: 4 }} 
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Transparency Ledger */}
          <div className="lg:col-span-3 glass rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-widest">Transparency Ledger (OSINT)</span>
              </div>
              <div className="text-[10px] font-mono text-white/30">AUTO-REFRESH: 5S</div>
            </div>
            <div className="h-48 overflow-y-auto font-mono text-[11px] p-6 space-y-4 scrollbar-hide">
              {[
                { time: "03:34:12", msg: "FLAGGED: Unusual movement of heavy artillery in Sector 7-G. Verification in progress.", type: "warning" },
                { time: "03:32:05", msg: "SATELLITE: Thermal spike detected at Decommissioned Site Alpha. Investigating.", type: "info" },
                { time: "03:28:44", msg: "FINANCIAL: $400M transfer from State Treasury to Weapons Contractor 'Aegis'.", type: "alert" },
                { time: "03:25:10", msg: "RHETORIC: AI Analysis flags 40% increase in 'Ego-Keywords' in state media broadcasts.", type: "warning" },
                { time: "03:20:55", msg: "VERIFIED: 3 silos opened in Sector 2-C. No launch detected. Monitoring.", type: "alert" },
              ].map((log, i) => (
                <div key={i} className="flex gap-4 border-l border-white/10 pl-4 py-1">
                  <span className="text-white/30 shrink-0">{log.time}</span>
                  <span className={cn(
                    log.type === 'warning' ? 'text-amber-400' : 
                    log.type === 'alert' ? 'text-red-400' : 'text-cyan-400'
                  )}>
                    {log.msg}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
