import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants: Variants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } }
  };

  const dropdownVariants: Variants = {
    closed: { opacity: 0, y: 10, display: 'none' },
    open: { opacity: 1, y: 0, display: 'block' }
  };

  return (
    <>
      <nav className={`bg-[#ffffff]/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* IDENTITY BLOCK */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer" aria-label="The Colonel's Academy Home">
            <div className="bg-[#0F1C15] text-white p-2 rounded-md shadow-lg group-hover:bg-[#D4AF37] group-hover:text-[#0F1C15] transition-colors duration-500">
              <i className="fas fa-shield-alt text-xl"></i>
            </div>
            <div className="leading-none">
              <h1 className="font-['Oswald'] font-bold text-xl text-[#0F1C15] tracking-tight uppercase">
                The Colonel's Academy
              </h1>
              <p className="text-[9px] text-gray-500 font-bold tracking-[0.3em] uppercase mt-1 group-hover:text-[#D4AF37] transition-colors">
                Staff College Wing
              </p>
            </div>
          </Link>
          
          {/* TACTICAL LINKS */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* 1. COMMAND WINGS (Dropdown) */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="group relative px-2 py-1 flex items-center gap-1 focus:outline-none">
                <span className="font-['Rajdhani'] font-semibold text-lg text-gray-800 uppercase tracking-widest group-hover:text-[#0F1C15] transition-colors duration-300">
                  Command Wings
                </span>
                <i className="fas fa-chevron-down text-[10px] text-gray-400 group-hover:text-[#D4AF37] transition-colors mb-0.5 ml-1"></i>
                
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-xl">[</span>
                <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[#D4AF37] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-xl">]</span>
              </button>

              {/* Dropdown Panel */}
              <motion.div 
                initial="closed"
                animate={isDropdownOpen ? "open" : "closed"}
                variants={dropdownVariants}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
              >
                <div className="bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden py-2">
                  {[
                    { name: 'Army Wing', path: '/courses/army' },
                    { name: 'Police Wing', path: '/courses/police' },
                    { name: 'APF Wing', path: '/courses/apf' }
                  ].map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path}
                      className="block px-5 py-3 hover:bg-gray-50 group/item flex items-center justify-between"
                    >
                      <span className="font-['Rajdhani'] font-bold text-gray-700 uppercase tracking-wider text-sm group-hover/item:text-[#0F1C15]">{item.name}</span>
                      <i className="fas fa-chevron-right text-[10px] text-gray-300 group-hover/item:text-[#D4AF37]"></i>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 2. OUR DIRECTING STAFF (Replaces The Corps) */}
            <Link to="/faculty" className="group relative px-2 py-1">
              <span className="font-['Rajdhani'] font-semibold text-lg text-gray-800 uppercase tracking-widest group-hover:text-[#0F1C15] transition-colors duration-300">
                Directing Staff
              </span>
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-xl">[</span>
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[#D4AF37] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-xl">]</span>
            </Link>

            {/* 3. INTELLIGENCE */}
            <Link to="/intel" className="group relative px-2 py-1">
              <span className="font-['Rajdhani'] font-semibold text-lg text-gray-800 uppercase tracking-widest group-hover:text-[#0F1C15] transition-colors duration-300">
                Intelligence
              </span>
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-xl">[</span>
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[#D4AF37] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold text-xl">]</span>
            </Link>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex group relative overflow-hidden bg-transparent text-[#0F1C15] px-6 py-2 border border-[#0F1C15] hover:border-[#D4AF37] hover:text-[#0F1C15] hover:bg-[#D4AF37]/10 transition-all duration-300 items-center gap-2 rounded-sm font-['Rajdhani'] font-bold uppercase tracking-wider text-sm shadow-sm hover:shadow-md">
                <i className="fas fa-lock text-lg group-hover:text-[#D4AF37] transition-colors"></i>
                <span>HQ Login</span>
                <i className="fas fa-chevron-right text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#D4AF37]"></i>
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              className="md:hidden text-[#0F1C15] text-2xl focus:outline-none hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 font-['Rajdhani'] font-bold text-gray-800 uppercase tracking-widest text-lg">
                <div className="space-y-3 pb-4 border-b border-gray-100">
                  <span className="text-xs text-gray-400 tracking-[0.2em] block mb-1">Command Wings</span>
                  <Link to="/courses/army" className="flex items-center gap-3 hover:text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-shield-alt text-sm text-gray-400"></i> Army Wing
                  </Link>
                  <Link to="/courses/police" className="flex items-center gap-3 hover:text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-balance-scale text-sm text-gray-400"></i> Police Wing
                  </Link>
                  <Link to="/courses/apf" className="flex items-center gap-3 hover:text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-building-shield text-sm text-gray-400"></i> APF Wing
                  </Link>
                </div>

                {/* Mobile: OUR DIRECTING STAFF (Replaces The Corps) */}
                <Link to="/faculty" className="flex items-center gap-3 hover:text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>
                  <i className="fas fa-user-tie text-sm text-gray-400"></i> Directing Staff
                </Link>
                
                <Link to="/intel" className="flex items-center gap-3 hover:text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>
                  <i className="fas fa-broadcast-tower text-sm text-gray-400"></i> Intelligence
                </Link>
                
                <button 
                  className="text-[#0F1C15] border-t pt-4 mt-2 hover:text-[#D4AF37] focus:text-[#D4AF37] focus:outline-none text-left flex items-center gap-2"
                >
                  <i className="fas fa-lock text-sm"></i> HQ Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;