import React from 'react';
import { motion } from 'framer-motion';

const Faculty: React.FC = () => {
  const mentors = [
    {
      name: "Col. P. Rana (Retd)",
      role: "Chief Instructor",
      badge: "Ex-Directing Staff",
      bio: "Former Senior DS at Army Command & Staff College. 25 years of service with specialization in Operational Staff Duties.",
      image: "https://images.unsplash.com/photo-1544168190-79c11c14068e?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Brig. Gen. S. Thapa (Retd)",
      role: "Strategic Advisor",
      badge: "Brigade Commander",
      bio: "Served as Brigade Commander. Expert in Tactical Decision Games (TDGs) and Military History analysis.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Lt. Col. A. Gurung (Retd)",
      role: "Logistics Expert",
      badge: "G4 Specialist",
      bio: "Mastered supply chain logistics in UN Peacekeeping missions. Teaches 'Q' matters and movement planning.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Col. R. K. Singh (Retd)",
      role: "Intelligence Wing",
      badge: "G2 Specialist",
      bio: "Former Director of Military Intelligence. Specializes in IPB (Intelligence Preparation of the Battlefield).",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Maj. D. Sherpa (Retd)",
      role: "Comms & Signals",
      badge: "Signal Officer",
      bio: "Expert in electronic warfare and communication grids. Ensures your signal planning is battle-proof.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    }
  ];

  // Duplicate for seamless infinite scroll
  const infiniteMentors = [...mentors, ...mentors, ...mentors];

  return (
    <section className="py-24 bg-[#F3F4F6] relative overflow-hidden border-t border-gray-200">
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-[#0F1C15]/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0F1C15 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="text-center max-w-4xl mx-auto">
            
            {/* Badge */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white border border-[#D4AF37]/30 px-4 py-1.5 rounded-full shadow-sm mb-6"
            >
                <i className="fas fa-medal text-[#D4AF37]"></i>
                <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-[#0F1C15]">
                    The Chain of Command
                </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-['Oswald'] text-5xl md:text-7xl font-bold text-[#0F1C15] leading-tight mb-6"
            >
                Mentored by the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8a701e]">
                    Directing Staff.
                </span>
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
            >
                You don't need a teacher. <span className="text-[#0F1C15] font-bold">You need a Commander.</span>
            </motion.p>
        </div>
      </div>

      {/* --- INFINITE MARQUEE --- */}
      <div className="relative w-full overflow-hidden pb-12">
        
        {/* Side Fades for depth */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F3F4F6] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F3F4F6] to-transparent z-20 pointer-events-none"></div>

        <motion.div 
            className="flex gap-8 px-4 w-max"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }} // Pause on hover handled by CSS class normally, here purely motion
        >
            {infiniteMentors.map((mentor, index) => (
                <div 
                    key={index} 
                    className="
                      shrink-0 w-[85vw] md:w-[550px] 
                      bg-white rounded-[2rem] p-2
                      border border-gray-100
                      shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]
                      hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]
                      hover:-translate-y-2 hover:border-[#D4AF37]/30
                      transition-all duration-500 group cursor-grab active:cursor-grabbing
                    "
                >
                    <div className="flex flex-col md:flex-row h-full bg-[#FAFAFA] rounded-[1.5rem] overflow-hidden">
                        
                        {/* IMAGE */}
                        <div className="w-full md:w-48 h-64 md:h-auto relative overflow-hidden group-hover:shadow-inner">
                            <div className="absolute inset-0 bg-[#0F1C15]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img 
                                src={mentor.image} 
                                alt={mentor.name} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-700 ease-in-out"
                            />
                            {/* Role Tag on Image */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F1C15]/90 to-transparent p-4 pt-12 z-20">
                                <p className="text-[#D4AF37] font-['Rajdhani'] font-bold text-xs uppercase tracking-widest">
                                    {mentor.role}
                                </p>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="flex-1 p-8 flex flex-col justify-center bg-white relative">
                            {/* Watermark Icon */}
                            <div className="absolute top-4 right-4 text-[#0F1C15]/5 text-6xl">
                                <i className="fas fa-quote-right"></i>
                            </div>

                            <div className="mb-4">
                                <span className="inline-block py-1 px-3 rounded-md bg-[#0F1C15]/5 border border-[#0F1C15]/10 text-[#0F1C15] text-[10px] font-bold font-['Rajdhani'] uppercase tracking-widest mb-3 group-hover:bg-[#D4AF37] group-hover:text-[#0F1C15] group-hover:border-[#D4AF37] transition-all">
                                    {mentor.badge}
                                </span>
                                <h3 className="text-3xl font-['Oswald'] font-bold text-[#0F1C15] leading-none mb-1 group-hover:text-[#D4AF37] transition-colors">
                                    {mentor.name}
                                </h3>
                            </div>
                            
                            <div className="h-px w-12 bg-gray-200 my-4 group-hover:w-full group-hover:bg-[#D4AF37]/30 transition-all duration-700"></div>

                            <p className="text-gray-500 text-sm leading-relaxed font-light font-sans">
                                {mentor.bio}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Faculty;