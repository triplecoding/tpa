import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Shield, Scale, Info, Send } from 'lucide-react';

export const DiplomatBot = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-[350px] glass rounded-3xl overflow-hidden shadow-2xl border-emerald-500/20"
        >
          <div className="p-4 bg-emerald-600 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-white" />
              <span className="font-bold text-sm">The Diplomat AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <div className="h-[400px] p-4 overflow-y-auto space-y-4 bg-tpa-dark/80">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-black" />
              </div>
              <div className="p-3 bg-white/5 rounded-2xl rounded-tl-none text-xs text-white/80 leading-relaxed">
                Greetings. I am The Diplomat. I can explain international law, current border disputes, or TPA's legal frameworks. How can I assist your planetary security inquiry?
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="p-3 bg-emerald-500/10 rounded-2xl rounded-tr-none text-xs text-white/80 leading-relaxed">
                What is the "Ego-Clause"?
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-black" />
              </div>
              <div className="p-3 bg-white/5 rounded-2xl rounded-tl-none text-xs text-white/80 leading-relaxed">
                The Ego-Clause is a proposed legal standard that holds individual leaders and weapons manufacturers personally liable for environmental and human destruction, rather than just the state.
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask about international law..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button className="p-2 bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/20 group"
        >
          <MessageSquare className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-tpa-dark animate-pulse" />
        </motion.button>
      )}
    </div>
  );
};
