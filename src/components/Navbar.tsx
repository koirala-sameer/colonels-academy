import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const location = useLocation();
  const isGateway = location.pathname === '/';

  const getHomeLink = () => {
    const path = location.pathname;
    if (path.includes('/army')) return '/courses/army';
    if (path.includes('/police')) return '/courses/police';
    if (path.includes('/apf')) return '/courses/apf';
    return '/';
  };

  const homeLink = getHomeLink();

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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const staffCourses = [
    { name: 'Nepal Army Staff Course', path: '/courses/army', icon: 'fa-shield-alt' },
    { name: 'Nepal Police Staff Course', path: '/courses/police', icon: 'fa-balance-scale' },
    { name: 'APF Staff Course', path: '/courses/apf', icon: 'fa-building-shield' }
  ];

  const academyResources = [
    { name: 'Download Center', path: '/resources/downloads', icon: 'fa-file-download' },
    { name: 'Study Materials', path: '/resources/study-materials', icon: 'fa-book' },
    { name: 'Previous Papers', path: '/resources/previous-papers', icon: 'fa-file-pdf' },
    { name: 'Training Manuals', path: '/resources/manuals', icon: 'fa-clipboard-list' }
  ];

  return (
    <>
      <nav className={`bg-[#ffffff]/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* --- IDENTITY BLOCK (UPDATED: PERMANENT GOLD) --- */}
          <Link 
            to={homeLink} 
            className="flex items-center gap-3 group cursor-pointer" 
            aria-label="The Colonel's Academy Home"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Box is now ALWAYS Gold (#D4AF37) with Dark Icon */}
            <div className="bg-[#D4AF37] text-[#0F1C15] p-2 rounded-md shadow-lg transition-transform duration-300 group-hover:scale-105">
              <i className="fas fa-shield-alt text-xl"></i>
            </div>
            <div className="leading-none">
              <h1 className="font-['Oswald'] font-bold text-xl text-[#0F1C15] tracking-tight uppercase">
                The Colonel's Academy
              </h1>
              {/* Subtext is now ALWAYS Gold/Accent color */}
              <p className="text-[10px] text-[#D4AF37] font-bold tracking-[0.3em] uppercase mt-1">
                Staff College Wing
              </p>
            </div>
          </Link>
          
          {/* --- TACTICAL LINKS (HIDDEN ON GATEWAY) --- */}
          {!isGateway && (
            <div className="hidden md:flex items-center space-x-8">
              {/* 1. STAFF COURSES */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown('staff-courses')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="group relative px-2 py-1 flex items-center gap-1 focus:outline-none">
                  <span className="font-['Rajdhani'] font-semibold text-lg text-gray-800 uppercase tracking-widest group-hover:text-[#0F1C15] transition-colors duration-300">
                    Staff Courses
                  </span>
                  <i className="fas fa-chevron-down text-[10px] text-gray-400 group-hover:text-[#D4AF37] transition-colors mb-0.5 ml-1"></i>
                </button>

                <motion.div 
                  initial="closed"
                  animate={activeDropdown === 'staff-courses' ? "open" : "closed"}
                  variants={dropdownVariants}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                >
                  <div className="bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden py-2">
                    {staffCourses.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.path}
                        className="block px-5 py-3 hover:bg-gray-50 group/item flex items-center gap-3"
                      >
                        <i className={`fas ${item.icon} text-gray-400 group-hover/item:text-[#D4AF37]`}></i>
                        <span className="font-['Rajdhani'] font-bold text-gray-700 uppercase tracking-wider text-sm group-hover/item:text-[#0F1C15]">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* 2. DIRECTING STAFF */}
              <Link to="/faculty" className="group relative px-2 py-1">
                <span className="font-['Rajdhani'] font-semibold text-lg text-gray-800 uppercase tracking-widest group-hover:text-[#0F1C15] transition-colors duration-300">
                  Directing Staff
                </span>
              </Link>

              {/* 3. RESOURCES */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="group relative px-2 py-1 flex items-center gap-1 focus:outline-none">
                  <span className="font-['Rajdhani'] font-semibold text-lg text-gray-800 uppercase tracking-widest group-hover:text-[#0F1C15] transition-colors duration-300">
                    Academy Resources
                  </span>
                  <i className="fas fa-chevron-down text-[10px] text-gray-400 group-hover:text-[#D4AF37] transition-colors mb-0.5 ml-1"></i>
                </button>

                <motion.div 
                  initial="closed"
                  animate={activeDropdown === 'resources' ? "open" : "closed"}
                  variants={dropdownVariants}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                >
                  <div className="bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden py-2">
                    {academyResources.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.path}
                        className="block px-5 py-3 hover:bg-gray-50 group/item flex items-center gap-3"
                      >
                        <i className={`fas ${item.icon} text-gray-400 group-hover/item:text-[#D4AF37]`}></i>
                        <span className="font-['Rajdhani'] font-bold text-gray-700 uppercase tracking-wider text-sm group-hover/item:text-[#0F1C15]">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <button className={`${isGateway ? 'flex' : 'hidden md:flex'} group relative overflow-hidden bg-transparent text-[#0F1C15] px-6 py-2 border border-[#0F1C15] hover:border-[#D4AF37] hover:text-[#0F1C15] hover:bg-[#D4AF37]/10 transition-all duration-300 items-center gap-2 rounded-sm font-['Rajdhani'] font-bold uppercase tracking-wider text-sm shadow-sm hover:shadow-md`}>
                <i className="fas fa-user-shield text-lg group-hover:text-[#D4AF37] transition-colors"></i>
                <span>HQ Login</span>
            </button>

            {!isGateway && (
              <button 
                className="md:hidden text-[#0F1C15] text-2xl focus:outline-none hover:text-[#D4AF37] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                  <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && !isGateway && (
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 font-['Rajdhani'] font-bold text-gray-800 uppercase tracking-widest text-lg">
                <Link to="/courses/army" onClick={() => setIsMenuOpen(false)}>Staff Courses</Link>
                <Link to="/faculty" onClick={() => setIsMenuOpen(false)}>Directing Staff</Link>
                <button className="text-[#0F1C15] border-t pt-4 mt-2 text-left flex items-center gap-2">
                  <i className="fas fa-user-shield text-sm"></i> HQ Login
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