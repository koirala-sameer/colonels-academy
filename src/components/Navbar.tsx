import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { LogOut, LayoutDashboard, Shield } from 'lucide-react';
import LoginModal from './LoginModal';
import { useAuth } from '../context/AuthContext'; 

type DropdownKey = 'staff' | 'resources' | null;

const Navbar: React.FC = () => {
  const { user, logout } = useAuth(); 
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const isGateway = location.pathname === '/';
  const isArmyPage = location.pathname.includes('/courses/army');
  const isAPFPage = location.pathname.includes('/courses/apf');
  const isPolicePage = location.pathname.includes('/courses/police');

  /* ---------------------------------- */
  /* SMART HOME ROUTING LOGIC (Fixed)   */
  /* ---------------------------------- */
  const homeLink = (() => {
    // 1. If currently on a course page, that is home.
    if (isArmyPage) return '/courses/army';
    if (isPolicePage) return '/courses/police';
    if (isAPFPage) return '/courses/apf';

    // 2. If on Dashboard, try to remember where we came from.
    if (location.pathname.includes('/dashboard')) {
      const lastVisited = localStorage.getItem('lastVisitedWing');
      if (lastVisited) return lastVisited;
    }
    
    // 3. Default fallback
    return '/';
  })();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setIsProfileOpen(false);
  }, [location.pathname]);

  const handleScrollToMentors = (e: React.MouseEvent) => {
    e.preventDefault();
    let targetPage = '/';
    if (isArmyPage) targetPage = '/courses/army';
    if (isAPFPage) targetPage = '/courses/apf';
    if (isPolicePage) targetPage = '/courses/police';

    if (location.pathname === targetPage) {
      const element = document.getElementById('mentors');
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(targetPage);
      setTimeout(() => {
        const element = document.getElementById('mentors');
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500);
    }
  };

  const menuVariants: Variants = { closed: { height: 0, opacity: 0 }, open: { height: 'auto', opacity: 1 } };
  const dropdownVariants: Variants = { closed: { opacity: 0, y: 8, pointerEvents: 'none' }, open: { opacity: 1, y: 0, pointerEvents: 'auto' } };

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

  const staffCourses = (() => {
    if (isArmyPage) return [{ name: 'Military History & Strategy', path: '#', icon: 'fa-book-reader' }, { name: 'Security & Current Affairs', path: '#', icon: 'fa-globe-asia' }, { name: 'Tactics & Staff Duties', path: '#', icon: 'fa-chess-knight' }];
    if (isAPFPage) return [{ name: 'APF Command & Leadership', path: '#', icon: 'fa-shield-alt' }, { name: 'Internal Security Operations', path: '#', icon: 'fa-siren' }, { name: 'APF Exam Preparation', path: '#', icon: 'fa-bullseye' }];
    if (isPolicePage) return [{ name: 'Police Administration', path: '#', icon: 'fa-balance-scale' }, { name: 'Criminal Law & Procedure', path: '#', icon: 'fa-gavel' }, { name: 'Investigation Techniques', path: '#', icon: 'fa-search' }];
    return [{ name: 'Nepal Army Staff Course', path: '/courses/army', icon: 'fa-shield-alt' }, { name: 'Nepal Police Staff Course', path: '/courses/police', icon: 'fa-balance-scale' }, { name: 'APF Staff Course', path: '/courses/apf', icon: 'fa-building-shield' }];
  })();

  const academyResources = [{ name: 'Download Center', path: '/resources/downloads', icon: 'fa-file-download' }, { name: 'Study Materials', path: '/resources/study-materials', icon: 'fa-book' }, { name: 'Previous Papers', path: '/resources/previous-papers', icon: 'fa-file-pdf' }, { name: 'Training Manuals', path: '/resources/manuals', icon: 'fa-clipboard-list' }];

  const Dropdown = ({ label, items, width, id }: { label: string; items: typeof staffCourses; width: string; id: DropdownKey; }) => (
    <div className="relative flex items-center" onMouseEnter={() => setActiveDropdown(id)} onMouseLeave={() => setActiveDropdown(null)}>
      <button aria-haspopup="true" aria-expanded={activeDropdown === id} className="group flex items-center gap-1 px-2 py-1 focus:outline-none">
        <span className="font-['Rajdhani'] font-semibold text-lg uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">{label}</span>
        <i className="fas fa-chevron-down text-[10px] text-gray-400 group-hover:text-[#D4AF37] mb-0.5" />
      </button>
      <motion.div initial="closed" animate={activeDropdown === id ? 'open' : 'closed'} variants={dropdownVariants} className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 ${width}`}>
        <div className="bg-white border border-gray-100 rounded-lg shadow-xl py-2">
          {items.map(item => (<Link key={item.name} to={item.path} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 group"><i className={`fas ${item.icon} text-gray-400 group-hover:text-[#D4AF37]`} /><span className="font-['Rajdhani'] font-bold uppercase tracking-wider text-sm text-gray-700 group-hover:text-[#1F1F1F]">{item.name}</span></Link>))}
        </div>
      </motion.div>
    </div>
  );

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-gradient-to-r from-[#0F1C15]/90 to-[#152028]/90 backdrop-blur-xl border-b border-[#D4AF37]/40 shadow-2xl transition-all ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Identity */}
          <Link to={homeLink} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4CA30] flex items-center justify-center p-2 shadow-lg group-hover:scale-105 transition-transform">
              <img src="/images/academy-logo.png" alt="Logo" className="w-full h-full object-contain" onError={handleNavbarLogoError} />
            </div>
            <div className="text-left"><div className="font-['Rajdhani'] font-bold text-white text-lg uppercase tracking-wider">The Colonel's Academy</div><div className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider mt-1">Staff College Wing</div></div>
          </Link>
          
          {!isGateway && (
            <div className="hidden md:flex items-center gap-8">
              <Dropdown id="staff" label={(() => { if (isArmyPage) return "Army Courses"; if (isAPFPage) return "APF Courses"; if (isPolicePage) return "Police Courses"; return "Staff Courses"; })()} items={staffCourses} width="w-72" />
              <a href="#mentors" onClick={handleScrollToMentors} className="font-['Rajdhani'] font-semibold text-lg uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors cursor-pointer">Directing Staff</a>
              <Dropdown id="resources" label="Academy Resources" items={academyResources} width="w-72" />
            </div>
          )}
          
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-3 focus:outline-none">
                  <div className="text-right hidden md:block">
                    <div className="text-sm font-bold text-white leading-none">{user.displayName}</div>
                    <div className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider mt-1">{user.tier === 'paid' ? 'Officer' : 'Cadet'}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] overflow-hidden bg-gray-800 relative shadow-lg hover:ring-2 hover:ring-[#D4AF37]/50 transition-all">
                    {user.photoURL ? <img src={user.photoURL} alt="User" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-[#D4AF37] font-bold text-lg">{user.displayName?.charAt(0)}</div>}
                  </div>
                </button>
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-50 origin-top-right">
                      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50"><p className="text-sm font-bold text-gray-900">{user.displayName}</p><p className="text-xs text-gray-500">{user.email}</p></div>
                      {user.tier === 'paid' && (
                        <div className="py-2"><Link to="/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00693E] transition-colors"><LayoutDashboard className="w-4 h-4" /> Command Center</Link></div>
                      )}
                      <div className="border-t border-gray-100 pt-2"><button onClick={logout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"><LogOut className="w-4 h-4" /> Sign Out</button></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button onClick={() => setIsLoginOpen(true)} className="hidden md:flex items-center gap-2 px-6 py-2 bg-[#D4AF37] text-[#0F1C15] uppercase font-bold tracking-wider text-sm hover:bg-[#C19A2E] transition-colors rounded-lg"><Shield className="w-4 h-4" /> HQ Login</button>
            )}
            {!isGateway && (<button className="md:hidden text-2xl text-white hover:text-[#D4AF37]" onClick={() => setIsMenuOpen(v => !v)}><i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} /></button>)}
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && !isGateway && (
            <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="md:hidden bg-gradient-to-r from-[#0F1C15]/90 to-[#152028]/90 border-t border-[#D4AF37]/40">
              <div className="flex flex-col p-6 gap-4 uppercase font-bold tracking-widest">
                {staffCourses.map(item => (<Link key={item.name} to={item.path} className="text-white hover:text-[#D4AF37] text-sm flex items-center gap-2" onClick={() => setIsMenuOpen(false)}><i className={`fas ${item.icon}`} /> {item.name}</Link>))}
                <a href="#mentors" onClick={(e) => { handleScrollToMentors(e); setIsMenuOpen(false); }} className="text-white hover:text-[#D4AF37] text-sm flex items-center gap-2"><i className="fas fa-users" /> Directing Staff</a>
                {!user && <button onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }} className="flex items-center gap-2 pt-4 border-t border-[#D4AF37]/40 text-white hover:text-[#D4AF37]"><i className="fas fa-user-shield" /> HQ Login</button>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;