import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, AlertCircle, Zap, Shield, Activity, TrendingUp, Search, Filter, Bell, X, Satellite } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const INITIAL_ALERTS = [
  { id: 1, type: 'CRITICAL', region: 'Sector 4-G', msg: 'Sudden spike in heavy artillery movement detected via Satellite Eye.', time: '2m ago' },
  { id: 2, type: 'WARNING', region: 'Global Finance', msg: 'Ghost Deal detected: $1.2B crypto-to-fiat on-ramp near military hub.', time: '15m ago' },
  { id: 3, type: 'INFO', region: 'Diplomatic', msg: 'Ego-Linguistics Engine flags 30% shift in pre-war rhetoric from Leader X.', time: '1h ago' },
];

const SATELLITE_EVENTS = [
  { type: 'CRITICAL', region: 'Sector 7-K', msg: 'New ICBM silo construction detected via multispectral analysis.' },
  { type: 'CRITICAL', region: 'Naval Base Z', msg: 'Unusual carrier group deployment pattern identified.' },
  { type: 'CRITICAL', region: 'Border Zone Gamma', msg: 'Rapid reinforcement of defensive structures detected.' },
  { type: 'CRITICAL', region: 'Industrial Hub 4', msg: 'Shadow factory activity spike: 500% energy consumption increase.' },
];

export const GPIEDashboard = () => {
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomEvent = SATELLITE_EVENTS[Math.floor(Math.random() * SATELLITE_EVENTS.length)];
      const newAlert = {
        id: Date.now(),
        ...randomEvent,
        time: 'Just now'
      };

      setAlerts(prev => [newAlert, ...prev].slice(0, 10));
      setNotifications(prev => [...prev, newAlert]);

      // Auto-remove notification after 5 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newAlert.id));
      }, 5000);
    }, 15000); // New alert every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <section id="gpie" className="py-24 bg-tpa-dark relative overflow-hidden border-t border-white/5">
      {/* Real-time Notifications */}
      <div className="fixed bottom-8 left-8 z-[100] flex flex-col gap-4 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.9 }}
              className="pointer-events-auto glass p-6 rounded-2xl border-red-500/30 shadow-2xl shadow-red-500/10 w-80 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2 text-red-400 font-mono text-[10px] uppercase tracking-widest">
                  <Satellite className="w-3 h-3" /> Satellite Eye Detection
                </div>
                <button 
                  onClick={() => removeNotification(n.id)}
                  className="text-white/20 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="text-xs font-bold text-white mb-1 uppercase tracking-tighter">{n.region}</div>
              <p className="text-[11px] text-white/60 leading-relaxed">{n.msg}</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[9px] font-mono text-red-400 uppercase">Live Critical Alert</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(16,185,129,0.05)_0%,_transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
              <Zap className="w-4 h-4" /> Global Peace Intelligence Engine (GPIE)
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter leading-none">
              The <span className="text-white">Sentinel</span> Dashboard
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="glass px-6 py-3 rounded-2xl border-emerald-500/20">
              <div className="text-[10px] font-mono text-white/30 uppercase mb-1">Global Risk Score</div>
              <div className="text-2xl font-display font-bold text-amber-400">64.2 / 100</div>
            </div>
            <div className="glass px-6 py-3 rounded-2xl border-red-500/20">
              <div className="text-[10px] font-mono text-white/30 uppercase mb-1">Active Alerts</div>
              <div className="text-2xl font-display font-bold text-red-500">
                {alerts.filter(a => a.type === 'CRITICAL').length.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Panel: Active Conflict Alerts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass rounded-3xl p-6 border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500" /> Red Alerts
                </h3>
                <span className="text-[10px] font-mono text-white/30">LIVE FEED</span>
              </div>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <motion.div 
                    key={alert.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={cn(
                        "text-[9px] font-mono px-2 py-0.5 rounded",
                        alert.type === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 
                        alert.type === 'WARNING' ? 'bg-amber-500/20 text-amber-400' : 'bg-cyan-500/20 text-cyan-400'
                      )}>
                        {alert.type}
                      </span>
                      <span className="text-[9px] font-mono text-white/20">{alert.time}</span>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 mb-1 uppercase tracking-widest">{alert.region}</div>
                    <p className="text-xs text-white/70 leading-relaxed group-hover:text-white transition-colors">{alert.msg}</p>
                  </motion.div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border border-white/5 rounded-xl text-[10px] font-mono uppercase tracking-widest hover:bg-white/5 transition-all">
                View All Intelligence
              </button>
            </div>

            <div className="glass rounded-3xl p-6 border-white/10 bg-emerald-500/5">
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> War Early Warning
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50">Conflict Probability (3mo)</span>
                  <span className="text-emerald-400 font-bold">12.4%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[12.4%] h-full bg-emerald-500" />
                </div>
                <p className="text-[10px] text-white/30 leading-relaxed">
                  Based on current rhetoric escalation and financial flow patterns. System status: <span className="text-emerald-400">NOMINAL</span>
                </p>
              </div>
            </div>
          </div>

          {/* Center Panel: World Peace Map (Placeholder for Visual) */}
          <div className="lg:col-span-8">
            <div className="glass rounded-[3rem] h-full min-h-[500px] relative overflow-hidden border-white/10 group">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1200/800')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-tpa-dark via-transparent to-transparent" />
              
              {/* Map UI Overlays */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
                  <Search className="w-4 h-4 text-white/40" />
                  <input type="text" placeholder="Search Hot Zone..." className="bg-transparent border-none text-xs focus:outline-none w-32" />
                </div>
                <div className="flex gap-2">
                  <button className="glass p-2 rounded-xl hover:bg-white/10 transition-all"><Filter className="w-4 h-4" /></button>
                  <button className="glass p-2 rounded-xl hover:bg-white/10 transition-all"><Shield className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Pulse Points on Map */}
              <div className="absolute top-[30%] left-[45%] group/point">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute inset-0" />
                <div className="w-4 h-4 bg-red-500 rounded-full relative z-10 cursor-pointer" />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 glass p-3 rounded-xl opacity-0 group-hover/point:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  <div className="text-[10px] font-mono text-red-400 mb-1">CRITICAL ALERT</div>
                  <div className="text-xs font-bold">Sector 4-G: Military Buildup</div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap gap-4">
                  <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">Active Conflict</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">High Risk</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">TPA Node</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
