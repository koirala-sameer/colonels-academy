import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white pt-24 pb-12 font-sans border-t border-[#D4AF37]/20 overflow-hidden">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            
          {/* 1. BRAND AUTHORITY */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-4 group mb-8">
                <div className="w-12 h-12 bg-white border border-[#D4AF37]/30 rounded-xl flex items-center justify-center shadow-sm">
                    <i className="fas fa-shield-alt text-[#D4AF37] text-xl"></i>
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
                promotion boards, and strategic leadership roles.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {['facebook-f', 'instagram', 'youtube', 'linkedin-in'].map((icon) => (
                <a key={icon} href="#" className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                  <i className={`fab fa-${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* 2. LINKS SECTION */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              {/* Header aligned with Contact section */}
              <h5 className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 border-l-2 border-[#D4AF37] pl-3">
                Programs
              </h5>
              <ul className="space-y-4">
                <li><Link to="/courses/army" className="font-['Oswald'] text-xl text-[#0F1C15] hover:text-[#D4AF37] uppercase transition-colors">Nepal Army</Link></li>
                <li><Link to="/courses/police" className="font-['Oswald'] text-xl text-[#0F1C15] hover:text-[#D4AF37] uppercase transition-colors">Nepal Police</Link></li>
                <li><Link to="/courses/apf" className="font-['Oswald'] text-xl text-[#0F1C15] hover:text-[#D4AF37] uppercase transition-colors">Armed Police</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 border-l-2 border-[#D4AF37] pl-3">
                Resources
              </h5>
              <ul className="space-y-4">
                <li><Link to="#" className="font-['Oswald'] text-xl text-[#0F1C15] hover:text-[#D4AF37] uppercase transition-colors">Syllabus</Link></li>
                <li><Link to="#" className="font-['Oswald'] text-xl text-[#0F1C15] hover:text-[#D4AF37] uppercase transition-colors">Notices</Link></li>
                <li><Link to="#" className="font-['Oswald'] text-xl text-[#0F1C15] hover:text-[#D4AF37] uppercase transition-colors">Results</Link></li>
              </ul>
            </div>
          </div>

          {/* 3. CONTACT */}
          <div className="lg:col-span-4 lg:pl-12 lg:border-l lg:border-gray-100">
            <h5 className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 border-l-2 border-[#D4AF37] pl-3">
              HQ Contact
            </h5>
            <div className="space-y-6 text-sm font-['Inter']">
              <div>
                <strong className="text-[#0F1C15] block mb-2 uppercase text-xs font-bold tracking-wider">Location</strong>
                <span className="text-gray-600 block leading-relaxed">
                  3rd Floor: Megha House,<br/>
                  Banshidhar Marga, Chandol,<br/>
                  Kathmandu-4, Nepal.
                </span>
              </div>
              <div>
                <strong className="text-[#0F1C15] block mb-2 uppercase text-xs font-bold tracking-wider">Secure Line</strong>
                <a href="tel:+9779800000000" className="text-gray-600 hover:text-[#D4AF37] transition-colors">+977-9800000000</a>
              </div>
              <div>
                <strong className="text-[#0F1C15] block mb-2 uppercase text-xs font-bold tracking-wider">Electronic Mail</strong>
                {/* Updated Email Address */}
                <a href="mailto:info@colonelsacademy.com" className="text-gray-600 hover:text-[#D4AF37] transition-colors">info@colonelsacademy.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-['Rajdhani'] font-bold uppercase tracking-widest text-gray-500">
            &copy; {new Date().getFullYear()} The Colonel's Academy.
          </p>
          <div className="flex gap-6 text-[11px] font-['Rajdhani'] font-bold uppercase tracking-widest text-gray-400">
             <Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy</Link>
             <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;