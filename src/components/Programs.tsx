import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// --- ULTRA-SHARP TACTICAL CARD ---
const ProgramCard = memo(({ 
  title, 
  subtitle, 
  description,
  logoSrc, 
  features, 
  linkTo,
  status
}: { 
  title: string, 
  subtitle: string, 
  description: string,
  logoSrc: string, 
  features: string[], 
  linkTo: string,
  status: string
}) => {
  
  return (
    <div className="group relative h-full">
      {/* ULTRA SHARP CONTAINER 
         - clip-path: Creates a dual notched corner (top-left and bottom-right)
         - rounded-none: Forces all internal elements to remain sharp
      */}
      <div 
        style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
        className="
          relative h-full bg-white border border-gray-300 rounded-none
          p-6 sm:p-8 
          transition-all duration-300 ease-out 
          hover:shadow-[8px_8px_0px_0px_rgba(212,175,55,1)] 
          hover:border-[#D4AF37] hover:-translate-x-1 hover:-translate-y-1
          will-change-transform
          flex flex-col justify-between
        "
      >
        
        <div className="rounded-none">
            {/* Header: Logo + Status */}
            <div className="flex justify-between items-start mb-6 rounded-none">
                {/* Logo Box - Completely Square */}
                <div className="w-16 h-16 bg-gray-50 border border-gray-200 flex items-center justify-center p-2 group-hover:border-[#D4AF37]/50 transition-colors rounded-none">
                    <img 
                      src={logoSrc} 
                      alt={`${title} Logo`} 
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                </div>
                {/* Status - Square Borders */}
                <div className="px-3 py-1 bg-[#0F1C15] border-l-2 border-[#D4AF37] rounded-none">
                    <span className="text-[10px] font-['Rajdhani'] font-bold uppercase tracking-widest text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] animate-pulse"></span> {status}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="mb-6 rounded-none">
                <h4 className="font-['Rajdhani'] font-bold text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-2">
                    {subtitle}
                </h4>
                <h3 className="
                    font-['Oswald'] text-3xl font-bold uppercase leading-none mb-4 text-[#0F1C15]
                    group-hover:text-[#D4AF37] transition-colors
                ">
                    {title}
                </h3>
                {/* Fixed Width Line */}
                <div className="h-0.5 bg-[#D4AF37] w-12 mb-4 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-600 text-sm leading-relaxed font-sans font-medium uppercase tracking-tight">
                    {description}
                </p>
            </div>

            {/* Features List with Caret Icons */}
            <ul className="space-y-3 mb-8 rounded-none">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] text-gray-800 font-bold uppercase tracking-wider">
                        <i className="fas fa-caret-right text-[#D4AF37]"></i>
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* ACTION BUTTON - Rectangular & Rigid */}
        <Link to={linkTo} className="block mt-auto relative z-10">
            <button className="
                w-full py-4 bg-[#0F1C15] text-white rounded-none
                font-['Rajdhani'] font-bold text-base uppercase tracking-[0.2em] 
                relative overflow-hidden group/btn
                border border-[#0F1C15] hover:text-[#0F1C15]
                transition-colors duration-300
            ">
                <span className="relative z-10 flex items-center justify-center gap-3">
                    Enter Sector <i className="fas fa-bolt text-[#D4AF37]"></i>
                </span>
                <div className="absolute inset-0 bg-[#D4AF37] transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
        </Link>
      </div>
    </div>
  );
});

const Programs: React.FC = () => {
  return (
    <section id="programs" className="relative bg-white py-16 sm:py-24 border-y border-gray-100">
      
      {/* Background Ambience: Subtle Industrial Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#0F1C15 1px, transparent 1px), linear-gradient(90deg, #0F1C15 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] opacity-5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Tactical Alignment */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-4 bg-[#0F1C15] px-6 py-2 rounded-none border-r-4 border-[#D4AF37] mb-6 shadow-sm">
                <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.4em] text-white">
                    Sector Selection
                </span>
            </div>
            
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0F1C15] leading-tight mb-4 uppercase italic tracking-tighter">
                Deploy Your <span className="text-[#D4AF37]">Ambition.</span>
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-base font-bold uppercase tracking-widest max-w-2xl mx-auto border-t border-gray-200 pt-6">
                Classified curriculum engineered for the Staff College Entrance. Select your branch to initiate protocols.
            </p>
        </div>

        {/* Grid - Higher contrast gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 sm:px-6">
            <ProgramCard 
                title="Nepal Army"
                subtitle="Sector: Command"
                description="Master service writing and tactical map reading directly from ex-Directing Staff."
                logoSrc="/images/army-logo.png"
                features={["Service Writing", "Tactical Mapping", "Logistics Ops"]}
                linkTo="/courses/army"
                status="Combat Ready"
            />
            <ProgramCard 
                title="Armed Police"
                subtitle="Sector: Security"
                description="Specialized border management and mandate analysis for paramilitary leadership."
                logoSrc="/images/apf-logo.png"
                features={["Border Ops", "Crisis Management", "Mandate Law"]}
                linkTo="/courses/apf"
                status="Active Duty"
            />
            <ProgramCard 
                title="Nepal Police"
                subtitle="Sector: Legal"
                description="Investigation, forensic intelligence, and criminology for national security."
                logoSrc="/images/police-logo.png"
                features={["Muluki Ain", "Forensic Intel", "Police Admin"]}
                linkTo="/courses/police"
                status="Open Intake"
            />
        </div>

        {/* Sharp bottom accent */}
        <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 text-xs font-['Rajdhani'] font-bold uppercase tracking-[0.2em] border-t border-gray-100 pt-6 px-8">
                <span className="w-3 h-0.5 bg-[#D4AF37]"></span>
                ALL CURRICULA CLASSIFIED • TOP-SECURITY CLEARANCE REQUIRED
                <span className="w-3 h-0.5 bg-[#D4AF37]"></span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;