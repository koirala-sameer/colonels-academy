import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FacultyPage: React.FC = () => {
  const mentors = [
    {
      name: "Col. P. Rana (Retd)",
      role: "Chief Instructor",
      badge: "Ex-Directing Staff",
      bio: "Former Senior DS at Army Command & Staff College. 25 years of service with specialization in Operational Staff Duties.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      specialty: "Service Writing & Staffing",
      years: "25",
      students: "850+",
      order: "order-first"
    },
    {
      name: "Brig. Gen. S. Thapa (Retd)",
      role: "Strategic Advisor",
      badge: "Brigade Commander",
      bio: "Served as Brigade Commander. Expert in Tactical Decision Games (TDGs) and Military History analysis.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      specialty: "Tactical Decision Games",
      years: "28",
      students: "1200+",
      order: "order-last md:order-2"
    },
    {
      name: "Lt. Col. A. Gurung (Retd)",
      role: "Logistics Expert",
      badge: "G4 Specialist",
      bio: "Mastered supply chain logistics in UN Peacekeeping missions. Teaches 'Q' matters and movement planning.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800",
      specialty: "Logistics & Movement",
      years: "22",
      students: "650+",
      order: "order-3"
    },
    {
      name: "Col. R. K. Singh (Retd)",
      role: "Intelligence Wing",
      badge: "G2 Specialist",
      bio: "Former Director of Military Intelligence. Specializes in IPB (Intelligence Preparation of the Battlefield).",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      specialty: "Intelligence & IPB",
      years: "26",
      students: "950+",
      order: "order-4"
    },
    {
      name: "Maj. D. Sherpa (Retd)",
      role: "Comms & Signals",
      badge: "Signal Officer",
      bio: "Expert in electronic warfare and communication grids. Ensures your signal planning is battle-proof.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      specialty: "Electronic Warfare",
      years: "20",
      students: "550+",
      order: "order-5 md:order-last"
    }
  ];

  const stats = [
    { value: "125+", label: "Combined Years of Service" },
    { value: "4,200+", label: "Officers Trained" },
    { value: "98%", label: "Success Rate" },
    { value: "15+", label: "Staff College Selections" }
  ];

  return (
    <div className="pt-20">
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        
        {/* ELEGANT BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] bg-[#D4AF37]/[0.03] rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[800px] h-[800px] bg-[#0F1C15]/[0.02] rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F1C15' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* --- NAVIGATION TOP BAR (New Design) --- */}
        <div className="container mx-auto px-6 mb-12">
          <div className="flex items-center justify-between">
            <Link to="/" className="group flex items-center gap-3 text-gray-600 hover:text-[#0F1C15] transition-colors">
              <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
              <span className="font-['Rajdhani'] font-semibold text-sm uppercase tracking-wider text-gray-800">Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase tracking-wider">
                <i className="fas fa-circle text-[8px] mr-2 animate-pulse"></i>
                Admissions Open
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-16">
              {/* Badge */}
              <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-2 rounded-full shadow-lg mb-6"
              >
                  <div className="flex items-center gap-1">
                      <i className="fas fa-star text-[#D4AF37] text-xs"></i>
                      <i className="fas fa-star text-[#D4AF37] text-sm"></i>
                      <i className="fas fa-star text-[#D4AF37] text-xs"></i>
                  </div>
                  <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.3em] text-[#0F1C15]">
                      The Directing Staff
                  </span>
                  <div className="flex items-center gap-1">
                      <i className="fas fa-star text-[#D4AF37] text-xs"></i>
                      <i className="fas fa-star text-[#D4AF37] text-sm"></i>
                      <i className="fas fa-star text-[#D4AF37] text-xs"></i>
                  </div>
              </motion.div>

              {/* Main Heading - Cleaned as per request */}
              <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-['Oswald'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F1C15] leading-tight mb-6"
              >
                  Command Authority
                  <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#B4941F] to-[#8a701e]">
                      Not Just Instructors.
                  </span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
              >
                  Learn from retired Generals and Senior Staff who have <span className="font-bold text-[#0F1C15]">shaped military doctrine</span> and 
                  <span className="font-bold text-[#D4AF37]"> selected 4,200+ officers</span> for Staff College.
              </motion.p>
          </div>

          {/* STATS BANNER */}
          <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
              {stats.map((stat, index) => (
                  <div 
                      key={index}
                      className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300"
                  >
                      <div className="text-3xl md:text-4xl font-['Oswald'] font-bold text-[#0F1C15] mb-2">
                          {stat.value}
                      </div>
                      <div className="font-['Rajdhani'] text-xs uppercase tracking-wider text-gray-600 font-bold">
                          {stat.label}
                      </div>
                  </div>
              ))}
          </motion.div>

          {/* MENTORS GRID */}
          <div className="space-y-12">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid md:grid-cols-12 gap-8 items-center ${mentor.order}`}
              >
                {/* IMAGE SIDE */}
                <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C15]/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0F1C15] to-transparent">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[#D4AF37] font-['Rajdhani'] font-bold text-sm uppercase tracking-widest">
                              {mentor.role}
                            </p>
                            <p className="text-white font-['Oswald'] text-xl font-bold">
                              {mentor.name}
                            </p>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center">
                            <i className="fas fa-shield-alt text-[#D4AF37]"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -right-4 top-8 bg-white border border-gray-200 rounded-xl p-4 shadow-lg z-10">
                      <div className="text-center">
                        <div className="text-2xl font-['Oswald'] font-bold text-[#0F1C15]">{mentor.years}</div>
                        <div className="text-xs font-['Rajdhani'] uppercase tracking-wider text-gray-600">Years</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENT SIDE */}
                <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37]/10 to-[#B4941F]/10 border border-[#D4AF37]/30 px-4 py-2 rounded-full mb-6">
                      <i className="fas fa-medal text-[#D4AF37]"></i>
                      <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-widest text-[#0F1C15]">
                        {mentor.badge}
                      </span>
                    </div>

                    <h3 className="font-['Oswald'] text-3xl md:text-4xl font-bold text-[#0F1C15] mb-4">
                      {mentor.name}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-px bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                      <span className="font-['Rajdhani'] font-bold text-[#D4AF37] text-sm uppercase tracking-widest">
                        {mentor.specialty}
                      </span>
                      <div className="w-12 h-px bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
                    </div>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-['Inter']">
                      {mentor.bio}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                            <i className="fas fa-user-graduate text-[#D4AF37]"></i>
                          </div>
                          <div>
                            <div className="font-['Oswald'] text-xl text-[#0F1C15] font-bold">{mentor.students}</div>
                            <div className="font-['Rajdhani'] text-xs text-gray-600 uppercase tracking-wider">Officers Trained</div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="px-6 py-3 bg-gradient-to-r from-[#0F1C15] to-gray-900 text-white rounded-xl font-['Rajdhani'] font-bold uppercase tracking-wider hover:from-[#D4AF37] hover:to-[#B4941F] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                        Book Mentorship
                        <i className="fas fa-arrow-right text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;