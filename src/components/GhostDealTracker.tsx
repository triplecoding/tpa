import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, ArrowRightLeft, ShieldAlert, Database, Search, TrendingUp, Lock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const deals = [
  { id: 1, from: 'Entity X (Sanctioned)', to: 'Private Broker Y', amount: '$420M', asset: 'USDT', type: 'Crypto-to-Fiat', risk: 'HIGH' },
  { id: 2, from: 'State Treasury Z', to: 'Shell Corp A', amount: '$1.2B', asset: 'USD', type: 'Mule Network', risk: 'CRITICAL' },
  { id: 3, from: 'Weapons Contractor B', to: 'Offshore Node C', amount: '$85M', asset: 'BTC', type: 'Ghost Deal', risk: 'MEDIUM' },
];

export const GhostDealTracker = () => {
  return (
    <section id="ghost-deals" className="py-24 bg-tpa-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
              <DollarSign className="w-4 h-4" /> Financial AI
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
              The <span className="text-emerald-400">Ghost Deal</span> Tracker
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              Monitoring global financial movements to catch secret weapons funding before the hardware even arrives. We track patterns that bypass international banking alerts.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 glass rounded-2xl border-white/5 hover:bg-white/10 transition-all">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                  <ArrowRightLeft className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">On-Ramp Monitoring</h4>
                  <p className="text-xs text-white/40">AI flags sudden, massive conversions of cryptocurrency into traditional currency near known military hubs.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 glass rounded-2xl border-white/5 hover:bg-white/10 transition-all">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Mule Network Detection</h4>
                  <p className="text-xs text-white/40">AI identifies "smurfing" patterns—thousands of small transfers sent to a single destination to bypass alerts.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-[2.5rem] p-8 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Database className="w-48 h-48" />
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest">The "To/From" Ledger</h3>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-white/30">LIVE BLOCKCHAIN SCRAPE</span>
              </div>
            </div>

            <div className="space-y-4">
              {deals.map((deal) => (
                <motion.div 
                  key={deal.id}
                  whileHover={{ x: 5 }}
                  className="p-4 glass rounded-2xl border-white/5 flex flex-col gap-3"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-white/40">FROM:</span>
                      <span className="text-xs font-bold text-white/80">{deal.from}</span>
                    </div>
                    <span className={cn(
                      "text-[9px] font-mono px-2 py-0.5 rounded",
                      deal.risk === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 
                      deal.risk === 'HIGH' ? 'bg-amber-500/20 text-amber-400' : 'bg-cyan-500/20 text-cyan-400'
                    )}>
                      {deal.risk} RISK
                    </span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="px-4 text-emerald-400">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-white/40">TO:</span>
                      <span className="text-xs font-bold text-white/80">{deal.to}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-emerald-400">{deal.amount}</div>
                      <div className="text-[9px] font-mono text-white/30 uppercase">{deal.asset} // {deal.type}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="w-full mt-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
              <Search className="w-4 h-4" /> Search Full Financial Ledger
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
