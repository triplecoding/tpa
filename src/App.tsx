import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Globe, 
  Zap, 
  Scale, 
  Eye, 
  TrendingUp, 
  Leaf, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Database,
  Satellite,
  Lock,
  Vote,
  Activity,
  AlertCircle,
  AlertTriangle,
  BookOpen,
  Gavel,
  PlayCircle,
  Smartphone,
  QrCode
} from 'lucide-react';
import { cn } from './lib/utils';
import { EgoTracker } from './components/EgoTracker';
import { GreenCalculator } from './components/GreenCalculator';
import { DiplomatBot } from './components/DiplomatBot';
import { GPIEDashboard } from './components/GPIEDashboard';
import { GhostDealTracker } from './components/GhostDealTracker';
import { SatelliteEye } from './components/SatelliteEye';
import { EgoLinguistics } from './components/EgoLinguistics';
import { WatchdogTools } from './components/WatchdogTools';
import { IntelligenceHub } from './components/IntelligenceHub';
import { DonationPopup } from './components/DonationPopup';
import { WarUpdateDashboard } from './components/WarUpdateDashboard';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "glass border-b border-white/5 py-2" : "bg-transparent py-6"
    )}>
      {/* War Early Warning Banner */}
      <div className="bg-red-600/90 backdrop-blur-md py-1 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
          <span className="flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> WAR EARLY WARNING:</span>
          <span className="text-white/80">Conflict Probability in Sector 4-G increased to 12.4%</span>
          <a href="#gpie" className="underline hover:text-white transition-colors">View Intelligence</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-16 h-16 rounded-full border-2 border-emerald-500 flex items-center justify-center relative overflow-hidden bg-white shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <img 
                src="https://ais-pre-s4v7wzczabcshaiexh367c-547543701623.asia-southeast1.run.app/logo.png" 
                alt="TPA Logo" 
                className="w-full h-full object-cover scale-[1.2] transform translate-y-[-2px]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/tpa-logo/100/100";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tighter leading-none">Terra Peace</span>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-[0.25em] font-bold">Alliance</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Hub', href: '#intelligence-hub' },
              { name: 'GPIE', href: '#gpie' },
              { name: 'Ghost Deals', href: '#ghost-deals' },
              { name: 'Watchdog', href: '#watchdog' },
              { name: 'Legal', href: '#legal' },
              { name: 'Vote', href: '#terra-vote' }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20">
              Join Alliance
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-white/10 px-4 py-4 space-y-4"
        >
          {['Hub', 'GPIE', 'Ghost Deals', 'Watchdog', 'Legal', 'Terra-Vote'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'Hub' ? 'intelligence-hub' : item.toLowerCase().replace(' ', '-')}`} 
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-white/70"
            >
              {item}
            </a>
          ))}
          <button className="w-full py-3 bg-emerald-600 rounded-xl font-semibold">
            Join Alliance
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Sovereignty ends where Species-Risk begins.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Earth Placeholder / Background */}
      <div className="absolute inset-0 -z-10 bg-tpa-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
          <div className="w-full h-full rounded-full border border-emerald-500/20 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-10 rounded-full border border-emerald-500/10 animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-20 rounded-full border border-emerald-500/5 animate-[spin_80s_linear_infinite]" />
          
          {/* Pulse Points */}
          <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981] animate-pulse" />
          <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981] animate-pulse delay-700" />
          <div className="absolute top-[40%] left-[80%] w-2 h-2 bg-red-400 rounded-full shadow-[0_0_10px_#f87171] animate-pulse delay-1000" />
          <div className="absolute top-[10%] left-[50%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981] animate-pulse delay-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <span className="px-4 py-1 rounded-full glass border-white/10 text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400">
              The Sentinel Protocol v4.2
            </span>
          </div>
          <h1 className="text-5xl md:text-9xl font-display font-bold mb-8 leading-[0.85] tracking-tighter">
            {text}<span className="animate-pulse">|</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 font-light leading-relaxed">
            Terra Peace Alliance is the global command center for humanity. We engineering the conditions for disarmament through radical transparency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-white text-black hover:bg-emerald-50 rounded-full font-bold text-lg transition-all flex items-center gap-3 group shadow-2xl shadow-white/10">
              View the Peace Map
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="px-10 py-5 glass hover:bg-white/10 rounded-full font-bold text-lg transition-all border-white/10">
              Join the Alliance
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  const pillars = [
    {
      icon: <Scale className="w-8 h-8 text-emerald-400" />,
      title: "The Ego-Clause",
      desc: "Lobbying for personal and civil liability for heads of state and weapons manufacturers. Moving from 'States at War' to 'Individuals Committing Crimes Against the Planet'."
    },
    {
      icon: <Eye className="w-8 h-8 text-cyan-400" />,
      title: "Radical Monitoring",
      desc: "Proprietary satellite and AI networks tracking real-time missile assembly, conflict-funding assets, and state-sponsored propaganda rhetoric."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
      title: "Conflict Premium",
      desc: "Partnering with global banking to trigger Risk Rating changes for aggressive nations, increasing debt costs before a shot is fired."
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      title: "Green Conversion",
      desc: "Engineering the transition from Defense Budgets to Planetary Defense Budgets: carbon capture, ocean cleaning, and renewable energy."
    }
  ];

  return (
    <section id="pillars" className="py-24 bg-tpa-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Pillars of Restraint</h2>
          <p className="text-white/50 max-w-2xl mx-auto">We don't just lobby for peace; we engineer the conditions for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProtocolSection = () => {
  const steps = [
    { step: "Detection", action: "AI flags unusual movement of long-range missiles.", tool: "Satellite GEOINT" },
    { step: "Exposure", action: "TPA releases a 'Transparency Dossier' to global media.", tool: "Public Shaming" },
    { step: "Financial Tap", action: "Risk-rating agencies increase the nation's interest rates.", tool: "The Conflict Premium" },
    { step: "Mediation", action: "TPA offers an 'AI-Mediated Conflict Resolution' platform.", tool: "Neutral Ground" },
    { step: "Sanction", action: "Global boycott of leader's personal assets.", tool: "Targeted Legal Action" }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Escalation Response Protocol</h2>
            <p className="text-white/50 mb-8 text-lg">
              When TPA detects a rising threat, our automated and manual response systems trigger a sequence of deterrents designed to make aggression economically impossible.
            </p>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-4 p-4 glass rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-sm shrink-0">
                    0{i+1}
                  </div>
                  <div>
                    <div className="font-bold text-emerald-400">{s.step}</div>
                    <div className="text-sm text-white/70">{s.action}</div>
                    <div className="text-[10px] font-mono text-white/30 mt-1 uppercase tracking-widest">{s.tool}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-square glass rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                <div className="w-48 h-48 rounded-full border-4 border-emerald-500/20 flex items-center justify-center relative mb-8">
                  <div className="absolute inset-0 rounded-full border border-emerald-500 animate-ping opacity-20" />
                  <Globe className="w-24 h-24 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Planetary Defense Network</h3>
                <p className="text-white/40 text-sm max-w-xs">
                  A polycentric model ensuring no single government can shut down the truth.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  <div className="p-3 glass rounded-lg text-xs font-mono">NODE_ZURICH: ACTIVE</div>
                  <div className="p-3 glass rounded-lg text-xs font-mono">NODE_HAGUE: ACTIVE</div>
                  <div className="p-3 glass rounded-lg text-xs font-mono">NODE_NAIROBI: ACTIVE</div>
                  <div className="p-3 glass rounded-lg text-xs font-mono">NODE_DHAKA: ACTIVE</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TerraVote = () => {
  return (
    <section id="terra-vote" className="py-24 bg-emerald-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] -z-10" />
          
          <div className="lg:w-1/2">
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4 block">The Citizen Mandate</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Terra-Vote Platform</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              If a government begins preparing for war, TPA triggers a digital referendum. While not legally binding yet, it provides verified data of "Lack of Public Consent," used to trigger Phase 2 economic sanctions.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Biometric Verified Voting",
                "Blockchain-Secured Anonymity",
                "Real-time Consent Dashboards",
                "Direct Link to Risk-Rating Agencies"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-emerald-50 transition-all flex items-center gap-2">
              <Vote className="w-5 h-5" />
              Access Terra-Vote Beta
            </button>
          </div>

          <div className="lg:w-1/2 w-full max-w-sm">
            <div className="glass rounded-[3rem] border-8 border-white/5 p-6 aspect-[9/19] relative shadow-2xl">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
              <div className="mt-12 space-y-6">
                <div className="text-center">
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Current Referendum</div>
                  <div className="text-lg font-bold">Defense Budget Expansion</div>
                  <div className="text-[10px] text-red-400 font-mono">URGENT: VOTE REQUIRED</div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 glass rounded-2xl border-emerald-500/50 bg-emerald-500/10">
                    <div className="flex justify-between text-xs mb-2">
                      <span>Against Expansion</span>
                      <span className="font-bold">82.4%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[82.4%] h-full bg-emerald-500" />
                    </div>
                  </div>
                  <div className="p-4 glass rounded-2xl opacity-50">
                    <div className="flex justify-between text-xs mb-2">
                      <span>Support Expansion</span>
                      <span className="font-bold">17.6%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[17.6%] h-full bg-white/20" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                   <div className="text-[10px] text-white/30 uppercase mb-2">Verified Data Points</div>
                   <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 glass rounded-lg text-[9px] font-mono">VOTERS: 12.4M</div>
                      <div className="p-2 glass rounded-lg text-[9px] font-mono">CONFIDENCE: 99.9%</div>
                   </div>
                </div>

                <button className="w-full py-4 bg-emerald-600 rounded-2xl font-bold text-sm shadow-lg shadow-emerald-500/20">
                  Cast Your Vote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GovernanceNodes = () => {
  const nodes = [
    { name: "The Watchtower", location: "Zurich", role: "High-security data center for OSINT (Open Source Intelligence)." },
    { name: "The Tribunal", location: "The Hague", role: "Legal wing filing 'Humanity Suits' in international courts." },
    { name: "The Forge", location: "Nairobi", role: "Research center for converting military tech into climate tech." },
    { name: "The Secretariat", location: "Dhaka", role: "Centralized strategy and global advocacy headquarters." }
  ];

  return (
    <section id="governance" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Polycentric Governance</h2>
          <p className="text-white/50 max-w-2xl mx-auto">Decentralized nodes ensuring resilience against state interference.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, i) => (
            <div key={i} className="glass p-6 rounded-2xl border-l-4 border-emerald-500">
              <div className="text-xs font-mono text-emerald-400 mb-2">{node.location}</div>
              <h3 className="text-xl font-bold mb-3">{node.name}</h3>
              <p className="text-sm text-white/50">{node.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-tpa-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                <div className="w-4 h-4 bg-emerald-500 rounded-full" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">TPA</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8">
              Terra Peace Alliance is an independent, member-driven NGO advancing universal disarmament and planetary security.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass rounded-full hover:text-emerald-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-full hover:text-emerald-400 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-full hover:text-emerald-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="https://disarmament.unoda.org/wmd/nuclear/tpnw/" className="hover:text-emerald-400 flex items-center gap-2">UNODA TPNW <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://www.icanw.org/" className="hover:text-emerald-400 flex items-center gap-2">ICAN <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://www.sipri.org/" className="hover:text-emerald-400 flex items-center gap-2">SIPRI Data <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-emerald-400">Transparency Dossiers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Alliance</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-emerald-400">Join as Citizen</a></li>
              <li><a href="#" className="hover:text-emerald-400">Corporate Stability Tax</a></li>
              <li><a href="#" className="hover:text-emerald-400">Legal Tribunal</a></li>
              <li><a href="#" className="hover:text-emerald-400">Contact Secretariat</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#fff] animate-pulse" />
              <div className="text-xs font-mono uppercase tracking-widest">The Eternal Flame</div>
            </div>
            <div className="text-3xl font-display font-bold">
              4,281 <span className="text-white/30 text-sm font-mono uppercase tracking-widest">Days Without a Global Nuclear Launch</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <div>© 2026 Terra Peace Alliance // For the Planet, By the People</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Alliance</a>
              <a href="#" className="hover:text-white transition-colors">OSINT License</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDonationOpen(true);
    }, 4 * 60 * 1000); // 4 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <WarUpdateDashboard />
        <IntelligenceHub />
        <GPIEDashboard />
        <GhostDealTracker />
        <SatelliteEye />
        <EgoLinguistics />
        <WatchdogTools />
        <EgoTracker />
        <GreenCalculator />
        
        {/* The Legal Chamber */}
        <section id="legal" className="py-24 bg-tpa-dark relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
                  The <span className="text-emerald-400">Legal Chamber</span>
                </h2>
                <p className="text-white/50 text-lg mb-8">
                  Publicly available templates for 'Humanity Suits' and status of current litigation against leaders committing crimes against the planet.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Humanity First Legal Standard", status: "ADOPTED", icon: <Gavel className="w-5 h-5" /> },
                    { title: "Sovereign Debt Liability Protocol", status: "PENDING", icon: <Scale className="w-5 h-5" /> },
                    { title: "Individual Responsibility Clause", status: "ACTIVE", icon: <Shield className="w-5 h-5" /> }
                  ].map((item, i) => (
                    <div key={i} className="glass p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white/5 rounded-lg group-hover:text-emerald-400 transition-colors">
                          {item.icon}
                        </div>
                        <span className="font-bold">{item.title}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="aspect-square glass rounded-3xl p-6 flex flex-col justify-end">
                  <div className="text-4xl font-display font-bold text-emerald-400 mb-2">12</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">Active Litigation Cases</div>
                </div>
                <div className="aspect-square glass rounded-3xl p-6 flex flex-col justify-end">
                  <div className="text-4xl font-display font-bold text-cyan-400 mb-2">142</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">Legal Templates Downloaded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Hub */}
        <section id="action" className="py-24 bg-tpa-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter">Action Hub</h2>
              <p className="text-white/50 max-w-2xl mx-auto">From digital sit-ins to local protesting toolkits. Your movement starts here.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Digital Sit-ins", icon: <Activity className="w-8 h-8" />, desc: "Coordinate mass digital presence to pressure financial institutions." },
                { title: "Local Toolkits", icon: <Smartphone className="w-8 h-8" />, desc: "Everything you need to organize a TPA chapter in your city." },
                { title: "Bank Templates", icon: <ExternalLink className="w-8 h-8" />, desc: "Write to your bank to trigger 'Conflict Premiums' on aggressive debt." }
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group">
                  <div className="mb-6 p-4 bg-emerald-500/10 rounded-2xl inline-block group-hover:scale-110 transition-transform text-emerald-400">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                    Access Toolkit <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Storytelling & Academy */}
        <section id="academy" className="py-24 bg-tpa-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="glass rounded-[3rem] p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/peace/800/600')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-tpa-dark via-tpa-dark/50 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">
                    <PlayCircle className="w-4 h-4" /> Impact Storytelling
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">From Bombs to Solar Farms</h3>
                  <p className="text-white/60 text-sm mb-6">Watch the conversion of the Sector 4 weapons factory into a community solar hub.</p>
                  <button className="w-fit px-6 py-3 bg-white text-black rounded-full font-bold text-sm">Watch Mini-Doc</button>
                </div>
              </div>
              <div className="glass rounded-[3rem] p-12">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
                  <BookOpen className="w-4 h-4" /> TPA Academy
                </div>
                <h3 className="text-3xl font-display font-bold mb-6">Planetary Security Courses</h3>
                <div className="space-y-4">
                  {[
                    "Non-Violent De-escalation 101",
                    "OSINT for Peace Activists",
                    "International Law & The Ego-Clause",
                    "Green Conversion Engineering"
                  ].map((course, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-all cursor-pointer">
                      <span className="text-white/80">{course}</span>
                      <ArrowRight className="w-4 h-4 text-white/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <TerraVote />
        
        {/* Technical Innovations: Citizen Sentinel */}
        <section className="py-24 bg-emerald-950/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <Smartphone className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-4xl font-display font-bold mb-6">Citizen Sentinel App</h2>
              <p className="text-white/50 text-lg mb-10">
                Upload photos of military builds for real-time verification. Turn your smartphone into a planetary defense sensor.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="p-6 glass rounded-3xl">
                  <QrCode className="w-32 h-32 text-white" />
                  <div className="mt-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">Scan to Download</div>
                </div>
                <div className="text-left space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-white/70">Encrypted Anonymous Uploads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-white/70">AI-Powered Image Verification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-white/70">Direct OSINT Feed Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GovernanceNodes />
      </main>
      <Footer />
      <DiplomatBot />
      <DonationPopup isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />
    </div>
  );
}
