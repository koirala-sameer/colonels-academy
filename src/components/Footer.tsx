import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-white to-gray-50 pt-24 pb-12 font-sans border-t border-[#D4AF37]/20 overflow-hidden">
      
      {/* --- BACKGROUND AMBIENCE (Matches Hero.tsx) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Texture */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: 'radial-gradient(#0F1C15 0.6px, transparent 0.6px)', 
            backgroundSize: '28px 28px' 
          }}
        />
        {/* Gold Glow (Bottom Right) */}
        <div className="absolute -bottom-20 -right-20 w-[700px] h-[700px] bg-gradient-to-tl from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            
          {/* 1. BRAND AUTHORITY */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-4 group mb-8">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-50 border border-[#D4AF37]/30 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#D4AF37]/20 group-hover:shadow-md transition-all duration-300">
                    <i className="fas fa-shield-alt text-[#D4AF37] text-xl"></i>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight text-[#0F1C15] leading-tight">
                    The Colonel's
                  </h4>
                  <p className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.3em] text-[#D4AF37] mt-1">
                    STAFF COLLEGE ACADEMY
                  </p>
                </div>
              </Link>
              
              <p className="text-gray-600 text-sm leading-relaxed font-light max-w-xs mb-10 font-['Inter']">
                Premier military training institution preparing officers for Staff College entrance, 
                promotion boards, and strategic leadership roles through disciplined excellence.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: 'facebook-f', label: 'Facebook' },
                { icon: 'instagram', label: 'Instagram' },
                { icon: 'youtube', label: 'YouTube' },
                { icon: 'linkedin-in', label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-300 shadow-sm hover:shadow"
                >
                  <i className={`fab fa-${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* 2. STRATEGIC LINKS */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
            <div>
              <h5 className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 flex items-center gap-3">
                <span className="w-3 h-0.5 bg-[#D4AF37] rounded-full"></span> 
                Programs
              </h5>
              <ul className="space-y-5">
                {[
                  { to: '/courses/army', label: 'Nepal Army' },
                  { to: '/courses/police', label: 'Nepal Police' },
                  { to: '/courses/apf', label: 'Armed Police' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="font-['Oswald'] text-lg text-[#0F1C15] uppercase tracking-wide hover:text-[#D4AF37] transition-colors duration-200 relative group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/50 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 flex items-center gap-3">
                <span className="w-3 h-0.5 bg-[#D4AF37] rounded-full"></span> 
                Resources
              </h5>
              <ul className="space-y-5">
                {[
                  { to: '#', label: 'Syllabus' },
                  { to: '#', label: 'Notices' },
                  { to: '#', label: 'Results' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.to} 
                      className="font-['Oswald'] text-lg text-[#0F1C15] uppercase tracking-wide hover:text-[#D4AF37] transition-colors duration-200 relative group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/50 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. OPS CENTER */}
          <div className="lg:col-span-4 lg:pl-12 lg:border-l lg:border-gray-200/50">
            <h5 className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 flex items-center gap-3">
              <span className="w-3 h-0.5 bg-[#D4AF37] rounded-full"></span> 
              HQ Contact
            </h5>
            <div className="space-y-7 text-sm font-['Inter']">
              <div className="group">
                <strong className="text-[#0F1C15] block mb-2 uppercase tracking-wider text-xs font-bold">Location</strong>
                <div className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                  Putalisadak, Kathmandu<br/>
                  <span className="text-gray-500 text-sm">Opposite Star Mall, 2nd Floor</span>
                </div>
              </div>
              
              <div className="group">
                <strong className="text-[#0F1C15] block mb-2 uppercase tracking-wider text-xs font-bold">Secure Line</strong>
                <a 
                  href="tel:+9779800000000" 
                  className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-200 inline-block"
                >
                  +977-9800000000
                </a>
              </div>
              
              <div className="group">
                <strong className="text-[#0F1C15] block mb-2 uppercase tracking-wider text-xs font-bold">Electronic Mail</strong>
                <a 
                  href="mailto:hq@colonelsacademy.com" 
                  className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-200 inline-block"
                >
                  hq@colonelsacademy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM PROTOCOL --- */}
        <div className="border-t border-gray-200/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <p className="text-[11px] font-['Rajdhani'] font-bold uppercase tracking-widest text-gray-500">
              &copy; {new Date().getFullYear()} The Colonel's Academy.
            </p>
            <span className="text-gray-400 text-xs hidden sm:inline">|</span>
            <span className="text-[11px] text-gray-400 font-medium hidden sm:inline">All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-8">
            {/* Decorative Line */}
            <div className="hidden md:block w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            
            <div className="flex gap-8 text-[11px] font-['Rajdhani'] font-bold uppercase tracking-widest">
              <Link to="/privacy" className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-200">Privacy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-200">Terms</Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-200">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;