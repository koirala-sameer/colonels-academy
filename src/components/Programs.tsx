import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProgramCard = ({ 
  title, 
  subtitle, 
  description,
  iconClass, 
  features, 
  delay,
  linkTo,
  status
}: { 
  title: React.ReactNode, 
  subtitle: string, 
  description: string,
  iconClass: string, 
  features: string[], 
  delay: number,
  linkTo: string,
  status: string
}) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative h-full"
      role="article"
    >
      <div className="relative h-full bg-white rounded-[2rem] border border-gray-200 p-6 sm:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between">
        
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Top Section */}
        <div>
            {/* Header Flex */}
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                    <i className={`${iconClass} text-2xl sm:text-3xl text-[#D4AF37]`} aria-hidden="true"></i>
                </div>
                <div className="px-3 py-1 bg-[#0F1C15]/5 rounded-full border border-[#0F1C15]/10">
                    <span className="text-[10px] font-['Rajdhani'] font-bold uppercase tracking-widest text-[#0F1C15] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span> {status}
                    </span>
                </div>
            </div>

            {/* Titles */}
            <div className="mb-6">
                <h4 className="font-['Rajdhani'] font-bold text-[#D4AF37] uppercase tracking-[0.2em] text-xs mb-2">
                    {subtitle}
                </h4>
                <h3 className="font-['Oswald'] text-3xl sm:text-4xl text-[#0F1C15] font-bold leading-none mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F1C15] group-hover:to-[#D4AF37] transition-all">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light font-sans border-l-2 border-gray-200 pl-4 group-hover:border-[#D4AF37] transition-colors">
                    {description}
                </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                        <i className="fas fa-check-circle text-[#D4AF37] text-xs" aria-hidden="true"></i>
                        <span>{feat}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Bottom Section (Action) - IMPROVED BUTTON HIERARCHY */}
        <Link to={linkTo} className="block mt-auto" aria-label={`Start training for ${title}`}>
            <button className="w-full py-3 rounded-xl bg-[#0F1C15] text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider overflow-hidden relative group/btn shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2">
                <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Training <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform" aria-hidden="true"></i>
                </span>
                {/* Gold Sweep Effect */}
                <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                {/* Text Color Change on Hover */}
                <span className="absolute inset-0 flex items-center justify-center gap-2 z-20 text-[#0F1C15] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 font-bold">
                    Start Training <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </span>
            </button>
        </Link>

      </div>
    </motion.div>
  );
};

const Programs: React.FC = () => {
  return (
    <section id="programs" className="relative bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 overflow-hidden">
      
      {/* Background Ambience (Matching Hero) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#0F1C15 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        {/* Gold Glow (Right Side) */}
        <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white border border-[#D4AF37]/30 px-4 py-1.5 rounded-full shadow-sm mb-4 sm:mb-6"
            >
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true"></span>
                <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-[#0F1C15]">
                    Sector Selection
                </span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F1C15] leading-tight mb-4 sm:mb-6"
            >
                Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8a701e]">Battlefield.</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto"
            >
                Precision-engineered curriculum for the Staff College Entrance. Select your branch to access classified syllabus data.
            </motion.p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 sm:px-6">
            
            {/* NEPAL ARMY */}
            <ProgramCard 
                title={<>Nepal Army</>}
                subtitle="Command Wing"
                description="Master Service Writing, Tactical Map Reading, and Command Interview techniques directly from retired Generals."
                iconClass="fas fa-helmet-battle"
                features={["Service Writing & Staffing", "Tactical Map Reading", "Org & Logistics"]}
                delay={0}
                linkTo="/courses/army"
                status="Enrolling"
            />

            {/* APF */}
            <ProgramCard 
                title={<>Armed Police</>}
                subtitle="Security Wing"
                description="Specialized training for Border Security, Industrial Security, and Mandate Laws required for the APF Staff College."
                iconClass="fas fa-shield-alt"
                features={["Mandate Analysis", "Border Security Mgmt", "Crisis Response"]}
                delay={0.15}
                linkTo="/courses/apf"
                status="Filling Fast"
            />

            {/* NEPAL POLICE */}
            <ProgramCard 
                title={<>Nepal Police</>}
                subtitle="Legal Wing"
                description="Comprehensive coverage of Muluki Ain, Investigation Protocols, and Criminology for the National Police Academy."
                iconClass="fas fa-gavel"
                features={["Muluki Ain & Law", "Crime Investigation", "Community Policing"]}
                delay={0.3}
                linkTo="/courses/police"
                status="Admissions Open"
            />

        </div>

      </div>
    </section>
  );
};

export default Programs;