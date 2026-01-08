import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  // Smooth scroll handler
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85, // Scroll down 85vh
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden font-sans">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2094&q=80')`,
            backgroundPosition: 'center 30%'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C15]/95 via-[#0F1C15]/90 to-transparent"></div>
        </div>

        {/* Gold Accent Glow */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12">
        
        {/* --- HERO CONTENT --- */}
        <div className="max-w-4xl">
          
          {/* 1. Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 sm:px-7 py-2.5 rounded-full shadow-lg mb-8"
            aria-label="Staff College preparation badge"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
            </span>
            <span className="font-['Rajdhani'] font-bold text-xs sm:text-sm uppercase tracking-widest text-white">
              Staff College Prep • 2026
            </span>
          </motion.div>
          
          {/* 2. Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Oswald'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-6"
          >
            Command Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC72C]">
              Staff College
            </span>
            <br />
            Selection.
          </motion.h1>
          
          {/* 3. Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed font-light mb-10"
          >
            Exclusive preparation for <span className="font-bold text-white">Army Majors</span>,{' '}
            <span className="font-bold text-[#D4AF37]">Police DSPs</span>, and{' '}
            <span className="font-bold text-[#D4AF37]">APF Officers</span>.
            <br />
            <span className="text-white mt-2 block">Trained by serving Colonels.</span>
          </motion.p>

          {/* 4. Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary CTA */}
            <Link to="/courses/army">
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFC72C] text-[#0F1C15] rounded-xl font-['Rajdhani'] font-bold text-base sm:text-lg uppercase tracking-wider hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0F1C15]">
                <span>Start Preparation</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
            
            {/* Secondary CTA */}
            <button className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white/30 text-white rounded-xl font-['Rajdhani'] font-bold text-sm sm:text-base uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0F1C15]">
              <i className="fas fa-play-circle"></i>
              <span>Watch Demo</span>
            </button>
          </motion.div>

        </div>

      </div>

      {/* --- SCROLL INDICATOR (Sergeant Stack - Icon Only) --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        onClick={handleScrollDown}
      >
        <div className="flex flex-col items-center cursor-pointer group hover:scale-110 transition-transform duration-300">
          
          {/* TRIPLE CHEVRON STACK */}
          <div className="flex flex-col -space-y-3 text-[#D4AF37] text-2xl drop-shadow-md">
            {/* Top Chevron */}
            <motion.i 
              className="fas fa-angle-down"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            ></motion.i>
            {/* Middle Chevron */}
            <motion.i 
              className="fas fa-angle-down"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            ></motion.i>
            {/* Bottom Chevron */}
            <motion.i 
              className="fas fa-angle-down"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            ></motion.i>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;