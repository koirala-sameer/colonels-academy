import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 1. ISOLATED TIMER COMPONENT (Prevents whole section re-renders)
const TimerDisplay = memo(() => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 }; // Loop for demo
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
      {['hours', 'minutes', 'seconds'].map((unit) => {
        const value = timeLeft[unit as keyof typeof timeLeft];
        const isSeconds = unit === 'seconds';
        
        return (
          <div key={unit} className="flex flex-col items-center gap-1.5 sm:gap-2">
            <div 
              className={`
                w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18
                bg-[#0a0f0c] border-2 rounded-lg sm:rounded-xl
                flex items-center justify-center 
                shadow-lg transition-colors duration-300
                ${isSeconds ? 'border-[#D4AF37]' : 'border-[#D4AF37]/50'}
              `}
            >
              <span className="font-['Oswald'] text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums">
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span className={`
              font-['Rajdhani'] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]
              ${isSeconds ? 'text-[#D4AF37]' : 'text-gray-500'}
            `}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        );
      })}
    </div>
  );
});

const FinalCall: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[#0F1C15] overflow-hidden font-sans border-t-4 border-[#D4AF37]">
      
      {/* --- BACKGROUND AMBIENCE (Optimized) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static opacity layer instead of complex mix-blend */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Simple radial gradient instead of huge blur calculation */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* --- STATUS INDICATOR --- */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6"
        >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Intake Closing
            </span>
        </motion.div>

        {/* --- MAIN HEADLINE --- */}
        <h2 className="font-['Oswald'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] mb-8 sm:mb-12 tracking-tight">
            The Vacancy{' '}
            <span className="text-[#D4AF37]">Won't Wait.</span>
        </h2>
        
        {/* --- TIMER SECTION (Isolated) --- */}
        <div className="w-full max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="mb-3 sm:mb-4">
            <h3 className="font-['Rajdhani'] font-bold text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-1">
              Batch Filling In
            </h3>
          </div>

          <TimerDisplay />

          <div className="mt-4 sm:mt-5 h-0.5 w-full bg-gray-800 rounded-full overflow-hidden">
             <div className="h-full bg-[#D4AF37] w-full origin-left animate-[shine_2s_infinite]"></div>
          </div>
        </div>

        {/* --- ACTION BUTTON --- */}
        <Link to="/courses/army" className="block w-full max-w-xs sm:max-w-sm">
            <button className="w-full px-6 py-3 sm:px-7 sm:py-4 bg-[#D4AF37] text-[#0F1C15] rounded-xl font-['Rajdhani'] font-bold text-base sm:text-lg uppercase tracking-widest shadow-lg hover:bg-white hover:scale-[1.02] transition-all duration-300">
                Secure Commission
            </button>
        </Link>

      </div>
    </section>
  );
};

export default FinalCall;