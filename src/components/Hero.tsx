import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white min-h-[90vh] flex flex-col justify-center overflow-hidden font-sans">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gold Glow (Top Left) */}
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] mix-blend-multiply"></div>
        {/* Dark Green Glow (Bottom Right) */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0F1C15]/5 rounded-full blur-[100px]"></div>
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#0F1C15 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-16 pb-12">
        
        {/* --- HERO CONTENT --- */}
        {/* CHANGED: max-w-5xl -> max-w-7xl to fix monitor spacing */}
        <div className="max-w-7xl mx-auto text-center">
          
          {/* 1. Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white border border-[#D4AF37]/30 px-4 sm:px-6 py-2 rounded-full shadow-sm mb-6 sm:mb-8"
            aria-label="Admissions open badge"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="font-['Rajdhani'] font-bold text-xs sm:text-sm uppercase tracking-widest text-[#0F1C15]">
              Admissions Open: Batch 2026
            </span>
          </motion.div>
          
          {/* 2. Main Heading - RESPONSIVE TYPOGRAPHY */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Oswald'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#0F1C15] leading-[0.95] mb-6 sm:mb-8 tracking-tight"
          >
            Train with the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#B4941F] to-[#8a701e]">
              Rank.
            </span>{' '}
            Not the Crowd.
          </motion.h1>
          
          {/* 3. Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-8 sm:mb-10"
          >
            The only platform in Nepal where a <span className="font-bold text-[#0F1C15]">Serving Colonel</span> reveals the exact psychology behind the Selection Board. Don't just pass. Command.
          </motion.p>

          {/* 4. Action Buttons - IMPROVED HIERARCHY */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            {/* Primary CTA - Largest */}
            <Link to="/courses/army" aria-label="Start training with The Colonel's Academy">
                <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[#0F1C15] text-white rounded-xl font-['Rajdhani'] font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0F1C15] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2">
                <span>Start Training</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </button>
            </Link>
            
            {/* Secondary CTA - Smaller & outlined */}
            <button 
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white border border-gray-300 text-[#0F1C15] rounded-xl font-['Rajdhani'] font-bold text-sm sm:text-base uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
              aria-label="Watch academy demo video"
            >
              <i className="fas fa-play-circle" aria-hidden="true"></i>
              <span>Watch Demo</span>
            </button>
          </motion.div>

        </div>

        {/* --- STATS GRID (Floating Glass) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
          aria-label="Academy statistics"
        >
          {[
            { label: "Success Rate", value: "94%", icon: "fas fa-trophy" },
            { label: "Officers Trained", value: "2,000+", icon: "fas fa-user-graduate" },
            { label: "Instructors", value: "Ex-Generals", icon: "fas fa-chalkboard-teacher" },
            { label: "Rating", value: "4.9/5", icon: "fas fa-star" }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-[#D4AF37]/50 transition-all duration-300 group text-center"
              role="region"
              aria-label={`${stat.label}: ${stat.value}`}
            >
              <div className="flex items-center justify-center mb-2">
                <i className={`${stat.icon} text-xl sm:text-2xl text-[#D4AF37] group-hover:scale-110 transition-transform`} aria-hidden="true"></i>
              </div>
              <div className="text-2xl sm:text-3xl font-['Oswald'] font-bold text-[#0F1C15] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-['Rajdhani'] font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;