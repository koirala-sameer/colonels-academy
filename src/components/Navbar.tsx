import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

type DropdownKey = 'staff' | 'resources' | null;

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);

  const isGateway = location.pathname === '/';

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
  /* Menu data */
  /* ---------------------------------- */
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
        <span className="font-['Rajdhani'] font-semibold text-lg uppercase tracking-widest text-gray-800 group-hover:text-[#1F1F1F]">
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
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Identity */}
        <Link
          to={homeLink}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <div className="bg-[#D4AF37] text-[#0F1C15] p-2 rounded-md shadow-lg group-hover:scale-105 transition-transform">
            <i className="fas fa-shield-alt text-xl" />
          </div>
          <div>
            <h1 className="font-['Oswald'] font-bold text-xl uppercase text-[#1F1F1F]">
              The Colonel&apos;s Academy
            </h1>
            <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#D4AF37]">
              Staff College Wing
            </p>
          </div>
        </Link>
        {/* Desktop Nav */}
        {!isGateway && (
          <div className="hidden md:flex items-center gap-8">
            <Dropdown
              id="staff"
              label="Staff Courses"
              items={staffCourses}
              width="w-64"
            />
            <Link className="nav-link" to="/faculty">
              <span className="font-['Rajdhani'] font-semibold text-lg uppercase tracking-widest">
                Directing Staff
              </span>
            </Link>
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
          <button className="hidden md:flex items-center gap-2 px-6 py-2 border border-[#1F1F1F] uppercase font-bold tracking-wider text-sm hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition">
            <i className="fas fa-user-shield" />
            HQ Login
          </button>
          {!isGateway && (
            <button
              className="md:hidden text-2xl hover:text-[#D4AF37]"
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
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-6 gap-4 uppercase font-bold tracking-widest">
              <Link to="/courses/army">Staff Courses</Link>
              <Link to="/faculty">Directing Staff</Link>
              <button className="flex items-center gap-2 pt-4 border-t">
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