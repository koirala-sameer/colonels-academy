import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// --- PURE TAILWIND CARD ---
const ProgramCard = memo(({ 
  title, 
  subtitle, 
  description,
  iconClass, 
  features, 
  linkTo,
  status
}: { 
  title: React.ReactNode, 
  subtitle: string, 
  description: string,
  iconClass: string, 
  features: string[], 
  linkTo: string,
  status: string
}) => {
  
  return (
    <div className="group relative h-full">
      {/* CARD CONTAINER - Keeps white background to pop against the gray section */}
      <div className="
        relative h-full bg-white rounded-[2rem] 
        border border-gray-200 
        p-6 sm:p-8 
        transition-all duration-300 ease-out 
        hover:-translate-y-2 hover:shadow-xl hover:border-[#D4AF37] 
        will-change-transform
        flex flex-col justify-between
      ">
        
        {/* TOP SECTION */}
        <div>
            {/* Header: Icon + Status */}
            <div className="flex justify-between items-start mb-6">
                <div className="
                    p-3 bg-gray-50 rounded-2xl border border-gray-100 
                    transition-transform duration-300 
                    group-hover:scale-110
                ">
                    <i className={`${iconClass} text-2xl sm:text-3xl text-[#D4AF37]`} aria-hidden="true"></i>
                </div>
                <div className="px-3 py-1 bg-[#0F1C15]/5 rounded-full border border-[#0F1C15]/10">
                    <span className="text-[10px] font-['Rajdhani'] font-bold uppercase tracking-widest text-[#0F1C15] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> {status}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="mb-6">
                <h4 className="font-['Rajdhani'] font-bold text-[#D4AF37] uppercase tracking-[0.2em] text-xs mb-2">
                    {subtitle}
                </h4>
                <h3 className="
                    font-['Oswald'] text-3xl sm:text-4xl text-[#0F1C15] font-bold leading-none mb-4 
                    transition-colors duration-300 
                    group-hover:text-[#D4AF37]
                ">
                    {title}
                </h3>
                <p className="
                    text-gray-500 text-sm leading-relaxed font-light font-sans 
                    border-l-2 border-gray-200 pl-4 
                    transition-colors duration-300 
                    group-hover:border-[#D4AF37]
                ">
                    {description}
                </p>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                        <i className="fas fa-check-circle text-[#D4AF37] text-xs"></i>
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* BOTTOM ACTION BUTTON */}
        <Link to={linkTo} className="block mt-auto relative z-10">
            <button className="
                w-full py-3 rounded-xl bg-[#0F1C15] text-white 
                font-['Rajdhani'] font-bold text-base uppercase tracking-wider 
                overflow-hidden relative 
                transition-all duration-300 
                hover:shadow-lg focus:ring-2 focus:ring-[#D4AF37]
            ">
                {/* Default Text */}
                <span className="relative z-10 flex items-center justify-center gap-2 transition-opacity duration-300 group-hover:opacity-0">
                    Start Training <i className="fas fa-arrow-right"></i>
                </span>
                
                {/* Hover Gold Background (Scale Transform) */}
                <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                
                {/* Hover Black Text (Fade In) */}
                <span className="absolute inset-0 z-20 flex items-center justify-center gap-2 text-[#0F1C15] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Start Training <i className="fas fa-arrow-right"></i>
                </span>
            </button>
        </Link>
      </div>
    </div>
  );
});

const Programs: React.FC = () => {
  return (
    // CHANGED: bg-white -> bg-gray-50 (Creates contrast against Hero's white bottom)
    <section id="programs" className="relative bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
      
      {/* Background Ambience - Added Dot Grid for Texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        {/* Simple static blob */}
        <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- CENTERED HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-[#D4AF37]/30 px-4 py-1.5 rounded-full shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-[#0F1C15]">
                    Sector Selection
                </span>
            </div>
            
            <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1C15] leading-tight mb-4">
                Choose Your <span className="text-[#D4AF37]">Battlefield.</span>
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto">
                Precision-engineered curriculum for the Staff College Entrance. Select your branch to access classified syllabus data.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 sm:px-6">
            <ProgramCard 
                title={<>Nepal Army</>}
                subtitle="Command Wing"
                description="Master Service Writing, Tactical Map Reading, and Command Interview techniques directly from retired Generals."
                iconClass="fas fa-helmet-battle"
                features={["Service Writing & Staffing", "Tactical Map Reading", "Org & Logistics"]}
                linkTo="/courses/army"
                status="Enrolling"
            />
            <ProgramCard 
                title={<>Armed Police</>}
                subtitle="Security Wing"
                description="Specialized training for Border Security, Industrial Security, and Mandate Laws required for the APF Staff College."
                iconClass="fas fa-shield-alt"
                features={["Mandate Analysis", "Border Security Mgmt", "Crisis Response"]}
                linkTo="/courses/apf"
                status="Filling Fast"
            />
            <ProgramCard 
                title={<>Nepal Police</>}
                subtitle="Legal Wing"
                description="Comprehensive coverage of Muluki Ain, Investigation Protocols, and Criminology for the National Police Academy."
                iconClass="fas fa-gavel"
                features={["Muluki Ain & Law", "Crime Investigation", "Community Policing"]}
                linkTo="/courses/police"
                status="Admissions Open"
            />
        </div>
      </div>
    </section>
  );
};

export default Programs;