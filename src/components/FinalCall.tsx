import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalCall: React.FC = () => {
  // Timer Logic
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time for screen readers
  const formatTimeForSR = () => {
    return `${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds remaining`;
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[#0F1C15] overflow-hidden font-sans border-t-4 border-[#D4AF37]">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* World Map Texture (Subtle) */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>
        {/* Gold Horizon Glow - Reduced size */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[400px] md:w-[600px] h-[100px] sm:h-[150px] md:h-[200px] bg-[#D4AF37]/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* --- STATUS INDICATOR --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full backdrop-blur-md mb-4 sm:mb-6"
            aria-label="Intake status alert"
        >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" aria-hidden="true"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" aria-hidden="true"></span>
            </span>
            <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Intake Closing
            </span>
        </motion.div>

        {/* --- MAIN HEADLINE --- */}
        <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Oswald'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] mb-8 sm:mb-12 tracking-tight"
        >
            The Vacancy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#D4AF37] to-[#8a701e]">
              Won't Wait.
            </span>
        </motion.h2>
        
        {/* --- TIMER SECTION --- */}
        <div className="w-full max-w-2xl mx-auto mb-8 sm:mb-10">
          {/* Timer Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-3 sm:mb-4"
          >
            <h3 className="font-['Rajdhani'] font-bold text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-1">
              Batch Filling In
            </h3>
            <p className="text-[10px] text-gray-600 font-['Inter'] uppercase tracking-widest">
              Secure your seat before time runs out
            </p>
          </motion.div>

          {/* Timer Grid */}
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4"
              role="timer"
              aria-live="polite"
              aria-label={formatTimeForSR()}
          >
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
                      shadow-[0_0_15px_rgba(212,175,55,0.1)] sm:shadow-[0_0_20px_rgba(212,175,55,0.1)]
                      transition-all duration-300
                      ${isSeconds 
                        ? 'border-[#D4AF37] animate-pulse shadow-[0_0_20px_rgba(212,175,55,0.2)]' 
                        : 'border-[#D4AF37]/50 hover:border-[#D4AF37]/70'
                      }
                    `}
                    aria-label={`${value} ${unit}`}
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
          </motion.div>

          {/* Timer Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 sm:mt-5 h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent rounded-full"
            aria-hidden="true"
          ></motion.div>
        </div>

        {/* --- ACTION TERMINAL --- */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-col items-center gap-4 sm:gap-6"
        >
            {/* Primary CTA */}
            <Link to="/courses/army" className="block w-full max-w-xs sm:max-w-sm">
                <button 
                  className="group relative w-full px-6 py-3 sm:px-7 sm:py-4 bg-[#D4AF37] text-[#0F1C15] rounded-xl font-['Rajdhani'] font-bold text-base sm:text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0F1C15]"
                  aria-label="Secure your commission now"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                        Secure Commission
                        <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                    </span>
                    {/* Sweep Effect */}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" aria-hidden="true"></div>
                </button>
            </Link>

            {/* Trust Badges - More Compact */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 opacity-80 text-xs font-['Inter'] text-gray-300 uppercase tracking-widest mt-2"
            >
              <div className="flex items-center gap-1.5">
                <i className="fas fa-check-circle text-[#D4AF37] text-xs" aria-hidden="true"></i> 
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="fas fa-user-shield text-[#D4AF37] text-xs" aria-hidden="true"></i> 
                <span>Expert Faculty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="fas fa-lock text-[#D4AF37] text-xs" aria-hidden="true"></i> 
                <span>Secure</span>
              </div>
            </motion.div>

            {/* Limited Seats Notice - Smaller */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-3 px-3 py-1.5 bg-red-900/20 border border-red-900/30 rounded-md max-w-xs"
            >
              <p className="text-[11px] text-gray-400 font-['Rajdhani']">
                <i className="fas fa-exclamation-triangle text-red-400 text-xs mr-1.5" aria-hidden="true"></i>
                Only <strong className="text-white">7 seats</strong> remaining
              </p>
            </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCall;