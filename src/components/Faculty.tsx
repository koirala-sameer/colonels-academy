import React from 'react';
import { Link } from 'react-router-dom';

const Faculty: React.FC = () => {
  // EXCLUSIVE TOP 3 COMMANDERS (Compact View)
  const mentors = [
    {
      name: "Col. P. Rana (Retd)",
      role: "Chief Instructor",
      badge: "Ex-Directing Staff",
      bio: "Former Senior DS at Army Command & Staff College. 25 years of service with specialization in Operational Staff Duties.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Brig. Gen. S. Thapa (Retd)",
      role: "Strategic Advisor",
      badge: "Brigade Commander",
      bio: "Served as Brigade Commander. Expert in Tactical Decision Games (TDGs) and Military History analysis.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Col. R. K. Singh (Retd)",
      role: "Intelligence Wing",
      badge: "G2 Specialist",
      bio: "Former Director of Military Intelligence. Specializes in IPB (Intelligence Preparation of the Battlefield).",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-y border-gray-100">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-50 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- COMPACT HEADER (Matches New Page Theme) --- */}
        <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Pill Badge with Stars */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#D4AF37]/30 px-4 py-1.5 rounded-full shadow-sm mb-6">
                <div className="flex items-center gap-1">
                    <i className="fas fa-star text-[#D4AF37] text-xs"></i>
                    <i className="fas fa-star text-[#D4AF37] text-sm"></i>
                    <i className="fas fa-star text-[#D4AF37] text-xs"></i>
                </div>
                <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-[#0F1C15]">
                    The Chain of Command
                </span>
            </div>

            {/* Heading */}
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F1C15] leading-relaxed tracking-wider mb-6">
                Mentored by the <br className="hidden md:block" />
                <span className="text-[#D4AF37]">Directing Staff.</span>
            </h2>

            <p className="text-gray-600 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                You don't need a teacher. <span className="text-[#0F1C15] font-bold">You need a Commander.</span>
            </p>
        </div>

        {/* --- COMPACT PROFILES (Top 3 Only) --- */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {mentors.map((mentor, index) => (
                <div 
                    key={index} 
                    className="w-full md:w-[400px] lg:w-[350px] group"
                >
                    <div className="
                        h-full bg-white rounded-[1.5rem] p-3
                        border border-gray-100
                        shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]
                        hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.15)]
                        hover:border-[#D4AF37]/30 hover:-translate-y-2
                        transition-all duration-500 ease-out
                        flex flex-col relative overflow-hidden
                    ">
                        {/* Gold Top Accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                        {/* IMAGE SECTION */}
                        <div className="relative h-64 w-full overflow-hidden rounded-[1rem] bg-gray-100">
                            <div className="absolute inset-0 bg-[#0F1C15]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img 
                                src={mentor.image} 
                                alt={mentor.name} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                            />
                            {/* Floating Role Badge */}
                            <div className="absolute bottom-3 left-3 right-3 z-20">
                                <div className="bg-[#0F1C15]/90 backdrop-blur-md border border-white/10 p-2 rounded-lg text-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <span className="text-[#D4AF37] font-['Rajdhani'] font-bold text-[10px] uppercase tracking-widest block">
                                        {mentor.role}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CONTENT SECTION */}
                        <div className="p-6 flex flex-col flex-grow text-center">
                            <div className="mb-3">
                                <span className="inline-block py-1 px-3 rounded-md bg-gray-50 border border-gray-200 text-gray-500 text-[10px] font-bold font-['Rajdhani'] uppercase tracking-widest group-hover:bg-[#D4AF37]/10 group-hover:text-[#0F1C15] group-hover:border-[#D4AF37]/30 transition-all duration-300">
                                    {mentor.badge}
                                </span>
                            </div>
                            <h3 className="text-xl font-['Oswald'] font-bold text-[#0F1C15] leading-tight mb-3 group-hover:text-[#D4AF37] transition-colors">
                                {mentor.name}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-sans opacity-80 line-clamp-3">
                                {mentor.bio}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* --- VIEW ALL BUTTON --- */}
        <div className="mt-16 text-center">
            <Link to="/faculty">
                <button className="px-8 py-4 bg-white border-2 border-[#D4AF37] text-[#0F1C15] rounded-xl font-['Rajdhani'] font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto">
                    View Full Command Staff
                    <i className="fas fa-arrow-right"></i>
                </button>
            </Link>
        </div>

      </div>
    </section>
  );
};

export default Faculty;