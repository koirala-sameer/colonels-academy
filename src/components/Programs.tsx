import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// --- PURE TAILWIND CARD ---
const ProgramCard = memo(({ 
  title, 
  subtitle, 
  description,
  logoSrc, 
  features, 
  linkTo,
  status,
  // accentColor, // <--- REMOVED: Unused variable causing TS6133
}: { 
  title: React.ReactNode, 
  subtitle: string, 
  description: string,
  logoSrc: string, 
  features: string[], 
  linkTo: string,
  status: string,
  accentColor?: string
}) => {
  
  return (
    <div className="group relative h-full">
      {/* CARD CONTAINER - Sharp corners with subtle edge glow */}
      <div className="
        relative h-full bg-white 
        rounded-xl border border-gray-300/50 
        p-6 sm:p-8 
        transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:-translate-y-3 hover:shadow-2xl hover:border-[#D4AF37]/30 
        hover:shadow-[#D4AF37]/10
        will-change-transform
        flex flex-col justify-between
        overflow-hidden
      ">
        {/* Sharp corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#D4AF37] rotate-45 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        </div>
        
        {/* TOP SECTION */}
        <div>
            {/* Header: Logo + Status */}
            <div className="flex justify-between items-start mb-8">
                <div className="
                    p-2 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200
                    shadow-sm
                    transition-all duration-400 
                    group-hover:scale-105 group-hover:shadow-md group-hover:border-[#D4AF37]/30
                ">
                    {/* Logo Image */}
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={logoSrc} 
                        alt={`${subtitle} logo`} 
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't load
                          const target = e.target as HTMLImageElement;
                          // FIXED: Use subtitle (string) instead of title (ReactNode)
                          // ReactNode.toString() often returns "[object Object]"
                          target.src = `https://via.placeholder.com/40/0F1C15/FFFFFF?text=${subtitle.charAt(0)}`;
                        }}
                      />
                    </div>
                </div>
                <div className="px-3 py-1.5 bg-black/90 rounded-md border border-gray-700">
                    <span className="text-[11px] font-['Rajdhani'] font-bold uppercase tracking-[0.15em] text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> 
                        {status}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="mb-8">
                <h4 className="font-['Rajdhani'] font-bold text-gray-400 uppercase tracking-[0.25em] text-xs mb-3">
                    {subtitle}
                </h4>
                <h3 className="
                    font-['Oswald'] text-3xl sm:text-4xl text-[#0F1C15] font-bold leading-none mb-5
                    relative
                    after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-[#D4AF37]
                    after:transition-all after:duration-500
                    group-hover:after:w-24
                ">
                    {title}
                </h3>
                <p className="
                    text-gray-600 text-sm leading-relaxed font-light font-sans 
                    border-l-3 border-gray-300 pl-4 py-1
                    transition-all duration-500
                    group-hover:border-[#D4AF37] group-hover:pl-5
                ">
                    {description}
                </p>
            </div>

            {/* Features List - Sharp design */}
            <ul className="space-y-3.5 mb-8">
                {features.map((feat, i) => (
                    <li key={i} className="
                        flex items-center gap-3 text-sm text-gray-700 font-medium
                        group/feature
                    ">
                        <div className="
                            w-5 h-5 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/30 
                            flex items-center justify-center
                            transition-all duration-300
                            group-hover/feature:bg-[#D4AF37] group-hover/feature:scale-110
                        ">
                            <i className="fas fa-check text-[10px] text-[#D4AF37] group-hover/feature:text-white transition-colors"></i>
                        </div>
                        <span className="
                            transition-all duration-300
                            group-hover/feature:text-[#0F1C15] group-hover/feature:font-semibold
                        ">
                            {feat}
                        </span>
                    </li>
                ))}
            </ul>
        </div>

        {/* BOTTOM ACTION BUTTON - Sharp and aggressive */}
        <Link to={linkTo} className="block mt-auto relative z-10">
            <button className="
                w-full py-3.5 rounded-lg bg-black text-white 
                font-['Rajdhani'] font-bold text-sm uppercase tracking-[0.15em]
                relative 
                transition-all duration-400
                overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-100%]
                hover:before:translate-x-[100%] hover:before:transition-transform hover:before:duration-700
                hover:shadow-[0_10px_30px_-5px_rgba(212,175,55,0.3)]
                active:scale-[0.98]
            ">
                {/* Button Content */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                    <span className="
                        text-white group-hover:text-black transition-all duration-400
                    ">
                        Start Training
                    </span>
                    <i className="
                        fas fa-arrow-right text-xs 
                        transition-all duration-400
                        group-hover:translate-x-1
                    "></i>
                </div>
                
                {/* Hover Background */}
                <div className="
                    absolute inset-0 bg-[#D4AF37] 
                    transform scale-x-0 origin-left 
                    transition-transform duration-500 ease-out 
                    group-hover:scale-x-100
                "></div>
            </button>
        </Link>
      </div>
    </div>
  );
});

const Programs: React.FC = () => {
  return (
    // CHANGED: Added sharp geometric background
    <section id="programs" className="relative bg-gradient-to-b from-white to-gray-50 py-20 sm:py-28">
      
      {/* Background with sharp geometric pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #0F1C15,
            #0F1C15 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}></div>
        
        {/* Sharp angle accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37] opacity-5 transform rotate-12"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0F1C15] opacity-5 transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- SHARP HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
            <div className="
                inline-flex items-center gap-2 bg-black px-4 py-2.5
                border border-gray-800
                shadow-lg mb-6
                transform skew-x-[-12deg]
            ">
                <span className="
                    w-2 h-2 bg-[#D4AF37] 
                    animate-[pulse_1.5s_ease-in-out_infinite]
                    transform -skew-x-[-12deg]
                "></span>
                <span className="
                    font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-white
                    transform -skew-x-[-12deg]
                ">
                    Sector Selection
                </span>
            </div>
            
            <h2 className="
                font-['Oswald'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F1C15] leading-tight mb-6
                relative
                after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2
                after:w-24 after:h-1 after:bg-[#D4AF37]
            ">
                Choose Your <span className="relative">
                    <span className="text-[#D4AF37]">Battlefield</span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></span>
                </span>
            </h2>
            
            <p className="
                text-gray-600 text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto
                mt-10 px-4
            ">
                <span className="bg-gradient-to-r from-gray-200 to-transparent px-2 py-1">
                    Precision-engineered curriculum for the Staff College Entrance. Select your branch to access classified syllabus data.
                </span>
            </p>
        </div>

        {/* Grid with sharp spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8">
            <ProgramCard 
                title={<>NEPAL ARMY</>}
                subtitle="COMMAND WING"
                description="Master Service Writing, Tactical Map Reading, and Command Interview techniques directly from retired Generals."
                logoSrc="/images/army-logo.png" 
                features={["Service Writing & Staffing", "Tactical Map Reading", "Org & Logistics"]}
                linkTo="/courses/army"
                status="ENROLLING"
                accentColor="#D4AF37"
            />
            <ProgramCard 
                title={<>ARMED POLICE</>}
                subtitle="SECURITY WING"
                description="Specialized training for Border Security, Industrial Security, and Mandate Laws required for the APF Staff College."
                logoSrc="/images/apf-logo.png" 
                features={["Mandate Analysis", "Border Security Mgmt", "Crisis Response"]}
                linkTo="/courses/apf"
                status="FILLING FAST"
                accentColor="#D4AF37"
            />
            <ProgramCard 
                title={<>NEPAL POLICE</>}
                subtitle="LEGAL WING"
                description="Comprehensive coverage of Muluki Ain, Investigation Protocols, and Criminology for the National Police Academy."
                logoSrc="/images/police-logo.png" 
                features={["Muluki Ain & Law", "Crime Investigation", "Community Policing"]}
                linkTo="/courses/police"
                status="ADMISSIONS OPEN"
                accentColor="#D4AF37"
            />
        </div>

        {/* Sharp bottom accent */}
        <div className="mt-20 text-center">
            <div className="
                inline-flex items-center gap-2 text-gray-400 text-sm font-['Rajdhani'] font-bold uppercase tracking-[0.2em]
                border-t border-gray-300 pt-6 px-8
            ">
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