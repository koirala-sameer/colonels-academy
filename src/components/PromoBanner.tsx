import React, { useState, useEffect } from 'react';
import { Trophy, X } from 'lucide-react';

interface PromoBannerProps {
  badge?: string;
  title?: string;
  highlight?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ 
  badge = "ACADEMIC EXCELLENCE", 
  title = "Led by", 
  highlight = "Former Chiefs & Toppers" 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    // 48 Hour Countdown Logic
    const target = new Date().getTime() + (48 * 60 * 60 * 1000);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          s: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="relative z-[110] bg-[#FCD34D] text-[#0F1C15] w-full px-4 py-2 border-b border-[#b45309]/10 font-sans shadow-sm">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 text-center">
        
        {/* Timer */}
        <div className="bg-[#FFFBEB] text-[#0F1C15] px-3 py-1 rounded-md font-mono font-bold text-xs tracking-widest border border-yellow-500/30 shadow-sm">
          {pad(timeLeft.d)}d : {pad(timeLeft.h)}h : {pad(timeLeft.m)}m : {pad(timeLeft.s)}s
        </div>

        {/* Dynamic Text */}
        <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span className="font-bold uppercase tracking-wide">{badge}:</span>
            </div>
            <span>{title} <strong className="font-extrabold">{highlight}</strong></span>
        </div>

        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-black/5 rounded-full transition-colors"
        >
          <X className="w-4 h-4 opacity-60" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;