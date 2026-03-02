import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  AlertTriangle, 
  Zap, 
  TrendingUp, 
  DollarSign, 
  Search, 
  Filter, 
  MessageSquare, 
  Shield, 
  Activity,
  ArrowRight,
  Newspaper,
  BarChart3,
  Map as MapIcon,
  ChevronRight,
  Clock,
  Satellite,
  RefreshCw,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/src/lib/utils';

// --- Mock Data ---

const riskScores = [
  { country: 'Country Alpha', score: 88, status: 'CRITICAL', trend: 'UP' },
  { country: 'Country Beta', score: 62, status: 'TENSION', trend: 'STABLE' },
  { country: 'Country Gamma', score: 14, status: 'PEACE', trend: 'DOWN' },
  { country: 'Country Delta', score: 45, status: 'TENSION', trend: 'UP' },
];

const moneyFlows = [
  { id: 1, from: 'Private Node X', to: 'Arms Corp Y', amount: '$450M', type: 'Crypto', status: 'FLAGGED' },
  { id: 2, from: 'State Fund Z', to: 'Shell Co A', amount: '$1.2B', type: 'Fiat', status: 'SUSPICIOUS' },
];

// --- Types ---

interface NewsItem {
  id: string;
  source: string;
  title: string;
  time: string;
  category: 'Treaty' | 'Military' | 'Conflict' | 'Rhetoric';
  snippet: string;
  url: string;
  lat?: number;
  lng?: number;
}

interface ConflictMarker {
  id: string;
  lat: number;
  lng: number;
  location: string;
  description: string;
  severity: 'CRITICAL' | 'WARNING' | 'STABLE';
  riskScore: number;
}

// --- Sub-Components ---

const NewsAggregator = ({ items, isLoading }: { items: NewsItem[], isLoading: boolean }) => (
  <div className="glass rounded-3xl p-6 border-white/10 h-full flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
        <Newspaper className="w-4 h-4 text-emerald-400" /> Live News Hub
      </h3>
      <div className="flex items-center gap-2">
        <div className={cn("w-2 h-2 rounded-full", isLoading ? "bg-amber-500 animate-pulse" : "bg-emerald-500")} />
        <span className="text-[10px] font-mono text-white/30 uppercase">
          {isLoading ? "Scraping..." : "AI Scraper Active"}
        </span>
      </div>
    </div>
    <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
      {items.length === 0 && !isLoading && (
        <div className="text-center py-12 text-white/20 text-[10px] font-mono uppercase tracking-widest">
          No live intelligence detected.
        </div>
      )}
      {items.map((item) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: 4 }}
          onClick={() => window.open(item.url, '_blank')}
          className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-2">
            <span className="text-[9px] font-mono text-emerald-400/60 uppercase tracking-widest">{item.source}</span>
            <span className="text-[9px] font-mono text-white/20">{item.time}</span>
          </div>
          <h4 className="text-xs font-bold text-white/80 group-hover:text-white transition-colors mb-2 leading-snug">
            {item.title}
          </h4>
          <p className="text-[9px] text-white/40 line-clamp-2 mb-2 leading-relaxed">
            {item.snippet}
          </p>
          <div className="flex items-center gap-2">
            <span className={cn(
              "text-[8px] font-mono px-2 py-0.5 rounded uppercase",
              item.category === 'Conflict' ? 'bg-red-500/10 text-red-400' :
              item.category === 'Military' ? 'bg-amber-500/10 text-amber-400' :
              'bg-white/5 text-white/40'
            )}>
              {item.category}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
    <button className="w-full mt-6 py-3 border border-white/5 rounded-xl text-[10px] font-mono uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2">
      View Full Feed <ArrowRight className="w-3 h-3" />
    </button>
  </div>
);

const RiskRanking = () => (
  <div className="glass rounded-3xl p-6 border-white/10">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
        <BarChart3 className="w-4 h-4 text-amber-400" /> Live Peace Index
      </h3>
      <span className="text-[10px] font-mono text-white/30">DAILY RANKING</span>
    </div>
    <div className="space-y-4">
      {riskScores.map((item, i) => (
        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-white/20">0{i+1}</span>
            <span className="text-xs font-bold">{item.country}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className={cn(
                "text-xs font-bold",
                item.status === 'CRITICAL' ? 'text-red-400' : 
                item.status === 'TENSION' ? 'text-amber-400' : 'text-emerald-400'
              )}>
                {item.score}
              </div>
              <div className="text-[8px] font-mono text-white/20 uppercase">{item.status}</div>
            </div>
            <div className={cn(
              "text-[10px]",
              item.trend === 'UP' ? 'text-red-400' : 
              item.trend === 'DOWN' ? 'text-emerald-400' : 'text-white/20'
            )}>
              {item.trend === 'UP' ? '▲' : item.trend === 'DOWN' ? '▼' : '—'}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FinancialMonitor = () => (
  <div className="glass rounded-3xl p-6 border-white/10 bg-emerald-500/5">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-emerald-400" /> Money Flow Heatmap
      </h3>
      <div className="flex gap-1">
        <div className="w-1 h-1 rounded-full bg-emerald-500" />
        <div className="w-1 h-1 rounded-full bg-emerald-500/50" />
        <div className="w-1 h-1 rounded-full bg-emerald-500/20" />
      </div>
    </div>
    <div className="space-y-3">
      {moneyFlows.map((flow) => (
        <div key={flow.id} className="p-3 rounded-xl bg-black/20 border border-white/5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{flow.type} TRANSFER</span>
            <span className="text-[9px] font-mono text-red-400 font-bold">{flow.status}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="text-[10px] font-bold truncate max-w-[80px]">{flow.from}</div>
            <ArrowRight className="w-3 h-3 text-white/20" />
            <div className="text-[10px] font-bold truncate max-w-[80px]">{flow.to}</div>
            <div className="text-xs font-bold text-emerald-400 ml-auto">{flow.amount}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Hub Component ---

interface ConflictMarker {
  id: string;
  lat: number;
  lng: number;
  location: string;
  description: string;
  severity: 'CRITICAL' | 'WARNING' | 'STABLE';
  riskScore: number;
}

export const IntelligenceHub = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [isSatelliteView, setIsSatelliteView] = useState(true);
  const [conflictMarkers, setConflictMarkers] = useState<ConflictMarker[]>([]);
  const [liveNews, setLiveNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<ConflictMarker | null>(null);
  const [countdown, setCountdown] = useState(180); // 3 minutes

  const fetchIntelligence = useCallback(async () => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Perform a deep scan for 'war live update today'. Provide two JSON arrays: 1. 'markers': 5 real-world conflict zones with location, description, severity (CRITICAL, WARNING, STABLE), riskScore (0-100), lat, and lng. 2. 'news': 8 latest news items with the actual source, actual title, actual snippet, actual URL, category (Treaty, Military, Conflict, Rhetoric), and approximate lat/lng if applicable. Do not use simulated or fake data.",
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              markers: {
                type: "ARRAY",
                items: {
                  type: "OBJECT",
                  properties: {
                    location: { type: "STRING" },
                    description: { type: "STRING" },
                    severity: { type: "STRING", enum: ["CRITICAL", "WARNING", "STABLE"] },
                    riskScore: { type: "NUMBER" },
                    lat: { type: "NUMBER" },
                    lng: { type: "NUMBER" }
                  },
                  required: ["location", "description", "severity", "riskScore", "lat", "lng"]
                }
              },
              news: {
                type: "ARRAY",
                items: {
                  type: "OBJECT",
                  properties: {
                    source: { type: "STRING" },
                    title: { type: "STRING" },
                    snippet: { type: "STRING" },
                    url: { type: "STRING" },
                    category: { type: "STRING", enum: ["Treaty", "Military", "Conflict", "Rhetoric"] },
                    lat: { type: "NUMBER" },
                    lng: { type: "NUMBER" }
                  },
                  required: ["source", "title", "snippet", "url", "category"]
                }
              }
            }
          }
        }
      });

      const data = JSON.parse(response.text || '{"markers":[], "news":[]}');
      setConflictMarkers(data.markers.map((m: any, i: number) => ({ ...m, id: `marker-${i}` })));
      setLiveNews(data.news.map((n: any, i: number) => ({ ...n, id: `news-${i}`, time: 'Just now' })));
      setCountdown(180);
    } catch (error) {
      console.error("Error fetching intelligence:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchIntelligence();
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          fetchIntelligence();
          return 180;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [fetchIntelligence]);

  return (
    <section id="intelligence-hub" className="py-24 bg-tpa-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.03)_0%,_transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            <Shield className="w-4 h-4" /> Live Global Intelligence Hub
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-6">
            The <span className="text-emerald-400">Heart</span> of Humanity
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Real-time, AI-powered public dashboard revealing global patterns of conflict, finance, and rhetoric using open intelligence.
          </p>
        </div>

        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar: News & Risk */}
          <div className="lg:col-span-3 space-y-8 flex flex-col">
            <div className="flex-1">
              <NewsAggregator items={liveNews} isLoading={isLoading} />
            </div>
            <RiskRanking />
          </div>

          {/* Center: Interactive Map */}
          <div className="lg:col-span-6">
            <div className="glass rounded-[3rem] h-full min-h-[600px] relative overflow-hidden border-white/10 group shadow-2xl shadow-emerald-500/5">
              {/* Simulated Map Background (Google Earth Style) */}
              <div className="absolute inset-0 bg-[#050505] transition-all duration-1000">
                <div 
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000",
                    isSatelliteView ? "opacity-40" : "opacity-10"
                  )}
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: isSatelliteView ? 'none' : 'grayscale(100%) brightness(0.5)'
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)]" />
                
                {/* Grid Lines Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ 
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} 
                />
              </div>

              {/* Map UI Overlays */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-30">
                <div className="flex flex-col gap-2">
                  <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 border-white/5">
                    <Search className="w-4 h-4 text-white/40" />
                    <input type="text" placeholder="Scan Global Coordinates..." className="bg-transparent border-none text-xs focus:outline-none w-32 placeholder:text-white/20" />
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setIsSatelliteView(!isSatelliteView)}
                      className={cn(
                        "glass px-3 py-1.5 rounded-lg text-[9px] font-mono uppercase tracking-widest transition-all flex items-center gap-2 border-white/5",
                        isSatelliteView ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "hover:bg-white/10"
                      )}
                    >
                      <Satellite className="w-3 h-3" /> {isSatelliteView ? 'Earth View' : 'Grid View'}
                    </button>
                    <button 
                      onClick={fetchIntelligence}
                      className="glass px-3 py-1.5 rounded-lg text-[9px] font-mono uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 border-white/5"
                    >
                      <RefreshCw className={cn("w-3 h-3", isLoading && "animate-spin")} /> Rescan ({Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')})
                    </button>
                  </div>
                </div>
                <div className="glass px-4 py-3 rounded-2xl border-emerald-500/20 text-center backdrop-blur-xl">
                  <div className="text-[8px] font-mono text-white/30 uppercase mb-1">Sentinel AI Status</div>
                  <div className="text-[10px] font-bold text-emerald-400 leading-tight max-w-[150px]">
                    {isLoading ? "Scraping live war updates..." : `"Satellite Eye active. ${conflictMarkers.length} critical zones and ${liveNews.length} news items identified."`}
                  </div>
                </div>
              </div>

              {/* Interactive Conflict Markers (Real Data) */}
              <div className="absolute inset-0">
                {conflictMarkers.map((marker) => {
                  // Simple projection for simulation (lat/lng to % position)
                  // This is a rough approximation for visual effect
                  const top = 50 - (marker.lat * 0.8);
                  const left = 50 + (marker.lng * 0.4);

                  return (
                    <div 
                      key={marker.id}
                      className="absolute group/pin cursor-pointer"
                      style={{ top: `${top}%`, left: `${left}%` }}
                      onClick={() => setSelectedMarker(marker)}
                    >
                      <div className={cn(
                        "w-4 h-4 rounded-full animate-ping absolute inset-0",
                        marker.severity === 'CRITICAL' ? 'bg-red-500' : 'bg-amber-500'
                      )} />
                      <div className={cn(
                        "w-4 h-4 rounded-full relative z-10 border-2 border-white/20 shadow-lg",
                        marker.severity === 'CRITICAL' ? 'bg-red-500' : 'bg-amber-500'
                      )} />
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none z-40">
                        <div className="glass p-4 rounded-2xl border-white/10 min-w-[220px] backdrop-blur-2xl shadow-2xl">
                          <div className="flex justify-between items-center mb-2">
                            <span className={cn(
                              "text-[9px] font-mono font-bold px-2 py-0.5 rounded",
                              marker.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'
                            )}>
                              {marker.severity} ZONE
                            </span>
                            <span className="text-[9px] font-mono text-white/30">{marker.lat.toFixed(2)}, {marker.lng.toFixed(2)}</span>
                          </div>
                          <div className="text-xs font-bold mb-1 text-white">{marker.location}</div>
                          <p className="text-[10px] text-white/50 leading-relaxed mb-3 line-clamp-2">{marker.description}</p>
                          <div className="flex justify-between items-center pt-2 border-t border-white/5">
                            <span className="text-[9px] font-mono text-emerald-400">RISK: {marker.riskScore}/100</span>
                            <ChevronRight className="w-3 h-3 text-white/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Controls (Bottom) */}
              <div className="absolute bottom-8 left-8 right-8 z-30">
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 border-white/5 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Active Conflict</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 border-white/5 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Rising Tension</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 border-white/5 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Stable Node</span>
                  </div>
                </div>
              </div>

              {/* Zoom Controls Simulation */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
                <button className="glass p-2 rounded-lg border-white/5 hover:bg-white/10 transition-all"><Maximize2 className="w-4 h-4 text-white/40" /></button>
                <button className="glass p-2 rounded-lg border-white/5 hover:bg-white/10 transition-all"><Minimize2 className="w-4 h-4 text-white/40" /></button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Alerts & Finance */}
          <div className="lg:col-span-3 space-y-8 flex flex-col">
            <div className="glass rounded-3xl p-6 border-white/10 flex-1">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" /> Real-Time Alerts
                </h3>
                <span className="text-[10px] font-mono text-white/30 animate-pulse">LIVE</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <div className="flex items-center gap-2 text-red-400 mb-1">
                    <Zap className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase">Critical Escalation</span>
                  </div>
                  <p className="text-[10px] text-white/70 leading-relaxed">
                    🚨 Alert: Rising tension between Region X & Y. Military movement news confirmed.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    <Activity className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase">Economic Shift</span>
                  </div>
                  <p className="text-[10px] text-white/70 leading-relaxed">
                    Sudden economic sanctions detected in Sector 9. Conflict probability increased.
                  </p>
                </div>
              </div>
            </div>
            <FinancialMonitor />
          </div>

        </div>

        {/* Public Action Panel */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 p-2 glass rounded-2xl border-white/5">
            <span className="text-xs font-mono text-white/40 px-4">SHARE DATA:</span>
            <button className="p-2 hover:bg-white/10 rounded-xl transition-all"><MessageSquare className="w-4 h-4 text-emerald-400" /></button>
            <button className="p-2 hover:bg-white/10 rounded-xl transition-all"><Globe className="w-4 h-4 text-cyan-400" /></button>
            <div className="w-[1px] h-4 bg-white/10 mx-2" />
            <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
