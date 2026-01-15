import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

type DropdownKey = 'staff' | 'resources' | null;

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);

  const isGateway = location.pathname === '/';
  // Check if we are currently on the Army Page
  const isArmyPage = location.pathname.includes('/courses/army');

  /* ---------------------------------- */
  /* Home routing logic */
  /* ---------------------------------- */
  const homeLink = (() => {
    const path = location.pathname;
    if (path.includes('/army')) return '/courses/army';
    if (path.includes('/police')) return '/courses/police';
    if (path.includes('/apf')) return '/courses/apf';
    return '/';
  })();

  /* ---------------------------------- */
  /* Effects */
  /* ---------------------------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  /* ---------------------------------- */
  /* Directing Staff Scroll Handler */
  /* ---------------------------------- */
  const handleScrollToMentors = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isArmyPage) {
      // If already on army page, just scroll
      const element = document.getElementById('mentors');
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100; // Offset for navbar
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // If elsewhere, go to army page first (usually this anchor link logic needs manual handling in React)
      navigate('/courses/army');
      // A small timeout to let the page load before scrolling could be added here if needed in a real app
    }
  };

  /* ---------------------------------- */
  /* Animations */
  /* ---------------------------------- */
  const menuVariants: Variants = {
    closed: { height: 0, opacity: 0 },
    open: { height: 'auto', opacity: 1 }
  };

  const dropdownVariants: Variants = {
    closed: { opacity: 0, y: 8, pointerEvents: 'none' },
    open: { opacity: 1, y: 0, pointerEvents: 'auto' }
  };

  /* ---------------------------------- */
  /* Logo Error Handler */
  /* ---------------------------------- */
  const handleNavbarLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.innerHTML = `
        <svg class="w-6 h-6 text-[#0F1C15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      `;
    }
  };

  /* ---------------------------------- */
  /* Menu data (Dynamic) */
  /* ---------------------------------- */
  
  // Conditionally switch the menu items based on the current page
  const staffCourses = isArmyPage ? [
    // Army Page Specific Menu
    { name: 'Military History & Strategy', path: '#', icon: 'fa-book-reader' },
    { name: 'Security & Current Affairs', path: '#', icon: 'fa-globe-asia' },
    { name: 'Tactics & Staff Duties', path: '#', icon: 'fa-chess-knight' }
  ] : [
    // Default Gateway Menu
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

  /* ---------------------------------- */
  /* Reusable dropdown renderer */
  /* ---------------------------------- */
  const Dropdown = ({
    label,
    items,
    width,
    id
  }: {
    label: string;
    items: typeof staffCourses;
    width: string;
    id: DropdownKey;
  }) => (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setActiveDropdown(id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        aria-haspopup="true"
        aria-expanded={activeDropdown === id}
        className="group flex items-center gap-1 px-2 py-1 focus:outline-none"
      >
        <span className="font-['Rajdhani'] font-semibold text-lg uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">
          {label}
        </span>
        <i className="fas fa-chevron-down text-[10px] text-gray-400 group-hover:text-[#D4AF37] mb-0.5" />
      </button>
      <motion.div
        initial="closed"
        animate={activeDropdown === id ? 'open' : 'closed'}
        variants={dropdownVariants}
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 ${width}`}
      >
        <div className="bg-white border border-gray-100 rounded-lg shadow-xl py-2">
          {items.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 group"
            >
              <i className={`fas ${item.icon} text-gray-400 group-hover:text-[#D4AF37]`} />
              <span className="font-['Rajdhani'] font-bold uppercase tracking-wider text-sm text-gray-700 group-hover:text-[#1F1F1F]">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );

  /* ---------------------------------- */
  /* Render */
  /* ---------------------------------- */
  return (
    <nav
      className={`sticky top-0 z-50 bg-gradient-to-r from-[#0F1C15]/90 to-[#152028]/90 backdrop-blur-xl border-b border-[#D4AF37]/40 shadow-2xl transition-all ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Identity */}
        <Link
          to={homeLink}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-4 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4CA30] flex items-center justify-center p-2 shadow-lg group-hover:scale-105 transition-transform">
            <img
              src="/images/academy-logo.png"
              alt="The Colonel's Academy Logo"
              className="w-full h-full object-contain"
              onError={handleNavbarLogoError}
            />
          </div>
          <div className="text-left">
            <div className="font-['Rajdhani'] font-bold text-white text-lg uppercase tracking-wider">
              The Colonel's Academy
            </div>
            <div className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider mt-1">
              Staff College Wing
            </div>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        {!isGateway && (
          <div className="hidden md:flex items-center gap-8">
            <Dropdown
              id="staff"
              label={isArmyPage ? "Army Courses" : "Staff Courses"} // Change Label based on page
              items={staffCourses}
              width={isArmyPage ? "w-72" : "w-64"}
            />
            {/* Updated Directing Staff Link */}
            <a 
              href="#mentors"
              onClick={handleScrollToMentors}
              className="font-['Rajdhani'] font-semibold text-lg uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Directing Staff
            </a>
            <Dropdown
              id="resources"
              label="Academy Resources"
              items={academyResources}
              width="w-72"
            />
          </div>
        )}
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-[#D4AF37] text-[#0F1C15] uppercase font-bold tracking-wider text-sm hover:bg-[#C19A2E] transition-colors rounded-lg">
            <i className="fas fa-user-shield" />
            HQ Login
          </button>
          {!isGateway && (
            <button
              className="md:hidden text-2xl text-white hover:text-[#D4AF37]"
              onClick={() => setIsMenuOpen(v => !v)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
            </button>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && !isGateway && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-gradient-to-r from-[#0F1C15]/90 to-[#152028]/90 border-t border-[#D4AF37]/40"
          >
            <div className="flex flex-col p-6 gap-4 uppercase font-bold tracking-widest">
              {staffCourses.map(item => (
                 <Link key={item.name} to={item.path} className="text-white hover:text-[#D4AF37] text-sm flex items-center gap-2">
                   <i className={`fas ${item.icon}`} /> {item.name}
                 </Link>
              ))}
              <a href="#mentors" onClick={(e) => { handleScrollToMentors(e); setIsMenuOpen(false); }} className="text-white hover:text-[#D4AF37] text-sm flex items-center gap-2">
                <i className="fas fa-users" /> Directing Staff
              </a>
              <button className="flex items-center gap-2 pt-4 border-t border-[#D4AF37]/40 text-white hover:text-[#D4AF37]">
                <i className="fas fa-user-shield" /> HQ Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;