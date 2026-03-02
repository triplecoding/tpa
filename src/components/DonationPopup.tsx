import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, Copy, Check, Bitcoin } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface DonationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationPopup = ({ isOpen, onClose }: DonationPopupProps) => {
  const [copied, setCopied] = useState(false);
  const btcAddress = "15ACocndrT78wFReqApAhGume1NUt7kmfr";

  const handleCopy = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass max-w-md w-full p-8 rounded-[2.5rem] border-emerald-500/30 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[100px]" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white/40" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-2 tracking-tight">Fuel the Alliance</h3>
              <p className="text-sm text-white/50 mb-8 leading-relaxed">
                Your contribution directly funds the AI intelligence engine and legal actions against planetary threats. Every satoshi counts.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-black/40 rounded-2xl border border-white/5 text-left">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-2">
                    <Bitcoin className="w-3 h-3" /> Binance BTC Wallet
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="text-[11px] font-mono text-white/70 break-all flex-1">
                      {btcAddress}
                    </code>
                    <button 
                      onClick={handleCopy}
                      className="relative p-2 hover:bg-white/10 rounded-xl transition-all text-emerald-400 shrink-0 group/copy"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <span className="text-[10px] font-bold uppercase tracking-widest">Copied!</span>
                            <Check className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                          >
                            <Copy className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                    Donate Now
                  </button>
                  <button 
                    onClick={onClose}
                    className="py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>

              <p className="mt-6 text-[10px] font-mono text-white/20 uppercase tracking-widest">
                Secure • Anonymous • Decentralized
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
