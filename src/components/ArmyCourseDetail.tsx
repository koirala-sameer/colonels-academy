import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ArmyCourseDetail: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth'
    });
  };

  const modules = [
    {
      id: 1,
      title: "Tactics & Maps",
      icon: "fas fa-map-marked-alt",
      description: "Battalion Attack, Withdrawal, and Advanced Map Reading (Grid/Gradient). Master the terrain psychology.",
      duration: "8 Weeks",
      topics: ["Tactical Formations", "Terrain Analysis", "Combat Orders"],
      highlight: "Master Class by Col. (Retd.) R. Thapa"
    },
    {
      id: 2,
      title: "Staff Duties (SD)",
      icon: "fas fa-feather-alt",
      description: "Minute Sheets, Service Papers, Inter-Office Memos. Strict format drilling to ensure 0% rejection rate.",
      duration: "6 Weeks",
      topics: ["Official Correspondence", "Military Writing", "Documentation"],
      highlight: "100% Format Accuracy Guarantee"
    },
    {
      id: 3,
      title: "Current Affairs",
      icon: "fas fa-globe-asia",
      description: "National Security Policy (NSP), Geopolitics (China/India), & Army Act 2063 deep dive.",
      duration: "4 Weeks",
      topics: ["Geopolitics", "Defense Policy", "Military Law"],
      highlight: "Weekly Intelligence Briefings"
    },
    {
      id: 4,
      title: "Command Interview",
      icon: "fas fa-comments",
      description: "1-on-1 Mock Boards with Ex-DS to refine your 'Officer Like Qualities' and situational judgment.",
      duration: "3 Weeks",
      topics: ["OLQs", "Case Studies", "Stress Interviews"],
      highlight: "Personalized Feedback"
    }
  ];

  const pricingTiers = [
    {
      name: "Standard",
      price: "8,000",
      features: ["Full Course Access", "Recorded Sessions", "Study Material", "2 Mock Tests"],
      highlighted: false
    },
    {
      name: "Pro",
      price: "12,000",
      features: ["Everything in Standard", "Live Q&A Sessions", "Personal Mentor", "5 Mock Tests + Review"],
      highlighted: true
    },
    {
      name: "Elite",
      price: "18,000",
      features: ["Everything in Pro", "1-on-1 Coaching", "Interview Simulation", "Priority Support"],
      highlighted: false
    }
  ];

  return (
    <>
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden font-sans">
        
        {/* --- BACKGROUND LAYER --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/army-hero.png')`, 
                backgroundPosition: 'center 20%' 
            }}
          >
             <img 
                src="/images/army-hero.png" 
                className="hidden" 
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.parentElement!.style.backgroundImage = `url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2094&q=80')`;
                }}
             />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C15]/95 via-[#0F1C15]/80 to-transparent"></div>
          </div>
          <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12">
          
          {/* --- HERO CONTENT --- */}
          <div className="max-w-4xl mt-12 sm:mt-0">
            
            {/* 1. Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 px-5 sm:px-7 py-2.5 rounded-full shadow-lg mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
              </span>
              <span className="font-['Rajdhani'] font-bold text-xs sm:text-sm uppercase tracking-widest text-white">
                Command Wing Exclusive
              </span>
            </motion.div>
            
            {/* 2. Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Oswald'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-6"
            >
              Staff College
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFC72C]">
                Preparation Program
              </span>
            </motion.h1>
            
            {/* 3. Subheading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed font-light mb-10"
            >
              <p className="font-bold text-white text-2xl mb-2 font-['Oswald'] tracking-wide">
                From Officer to Strategic Leader.
              </p>
              <p>
                Comprehensive preparation for the Nepal Army Command & Staff Course, led by <span className="font-bold text-[#D4AF37]">serving and retired Colonels</span>.
              </p>
            </motion.div>

            {/* 4. Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFC72C] text-[#0F1C15] rounded-xl font-['Rajdhani'] font-bold text-base sm:text-lg uppercase tracking-wider hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                <span>Enroll Now</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              
              <button className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white/30 text-white rounded-xl font-['Rajdhani'] font-bold text-sm sm:text-base uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-3">
                <i className="fas fa-download"></i>
                <span>Download Syllabus</span>
              </button>
            </motion.div>

          </div>
        </div>

        {/* --- SCROLL INDICATOR --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
          onClick={handleScrollDown}
        >
          <div className="flex flex-col items-center cursor-pointer group hover:scale-110 transition-transform duration-300">
            <div className="flex flex-col -space-y-3 text-[#D4AF37] text-2xl drop-shadow-md">
              <motion.i className="fas fa-angle-down" animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}></motion.i>
              <motion.i className="fas fa-angle-down" animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}></motion.i>
              <motion.i className="fas fa-angle-down" animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}></motion.i>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          MAIN CONTENT
         ========================================================================= */}
      <div className="bg-gray-50 py-20 font-sans">
        <div className="container mx-auto px-6">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
                { label: "Success Rate", value: "94%", icon: "fas fa-trophy" },
                { label: "Batch Size", value: "25", sub: "officers", icon: "fas fa-users" },
                { label: "Hours", value: "120+", sub: "of training", icon: "fas fa-clock" },
                { label: "Mock Tests", value: "10", sub: "full length", icon: "fas fa-file-alt" }
            ].map((stat, idx) => (
                <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                <div className="flex items-center justify-between mb-2">
                    <i className={`${stat.icon} text-2xl text-[#D4AF37]`}></i>
                    <span className="text-3xl font-['Oswald'] font-bold text-[#0F1C15]">{stat.value}</span>
                </div>
                <p className="text-sm text-gray-500 font-['Rajdhani'] uppercase tracking-wider">{stat.label}</p>
                {stat.sub && <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>}
                </motion.div>
            ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Modules */}
            <div className="lg:col-span-2">
                <div className="mb-8">
                <h2 className="font-['Oswald'] text-4xl font-bold text-[#0F1C15] mb-2">
                    Curriculum <span className="text-[#D4AF37]">Modules</span>
                </h2>
                <p className="text-gray-600 mb-6">Interactive syllabus with real-world military applications</p>
                </div>

                <div className="space-y-4">
                {modules.map((module) => (
                    <motion.div
                    key={module.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: module.id * 0.1 }}
                    className={`bg-white border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-[#D4AF37] hover:shadow-lg ${
                        selectedModule === module.id ? 'border-[#D4AF37] shadow-lg' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
                    >
                    <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${selectedModule === module.id ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/10'}`}>
                            <i className={`${module.icon} ${selectedModule === module.id ? 'text-white' : 'text-[#D4AF37]'}`}></i>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-['Oswald'] text-xl font-bold text-[#0F1C15]">{module.title}</h3>
                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded font-bold">
                                {module.duration}
                            </span>
                            </div>
                            <p className="text-gray-600 mb-3">{module.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                            {module.topics.map((topic, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border">
                                {topic}
                                </span>
                            ))}
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-[#D4AF37] font-bold">
                            <i className="fas fa-star"></i>
                            <span>{module.highlight}</span>
                            </div>
                        </div>
                        </div>
                        
                        <i className={`fas fa-chevron-down text-gray-400 transition-transform ${
                        selectedModule === module.id ? 'rotate-180' : ''
                        }`}></i>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>

            {/* Right Column - Pricing & Info */}
            <div className="space-y-8">
                
                {/* Instructor Card */}
                <div className="bg-gradient-to-br from-[#0F1C15] to-[#1a2e24] text-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full border-4 border-[#D4AF37]/30 overflow-hidden bg-gray-800">
                    <img 
                        src="https://i.pravatar.cc/150?img=68" 
                        alt="Instructor" 
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div>
                    <h4 className="font-['Oswald'] text-2xl font-bold">Col. (Retd.) S. Rana</h4>
                    <p className="text-[#D4AF37] text-sm uppercase tracking-wider font-['Rajdhani']">Former Directing Staff</p>
                    </div>
                </div>
                
                <p className="text-gray-300 mb-6 italic border-l-2 border-[#D4AF37] pl-4">
                    "The selection board doesn't just test knowledge—they test military thinking. We teach you how to think like a commander."
                </p>
                
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                    <i className="fas fa-medal text-[#D4AF37]"></i>
                    <span className="text-sm">35+ years of service</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <i className="fas fa-graduation-cap text-[#D4AF37]"></i>
                    <span className="text-sm">Trained 500+ officers</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <i className="fas fa-award text-[#D4AF37]"></i>
                    <span className="text-sm">Ex-Chief Instructor, CSC</span>
                    </div>
                </div>
                </div>

                {/* Pricing Card */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="font-['Oswald'] text-2xl font-bold text-[#0F1C15] mb-6 text-center">
                    Choose Your Plan
                </h3>
                
                <div className="space-y-4 mb-8">
                    {pricingTiers.map((tier, idx) => (
                    <div 
                        key={idx}
                        className={`border-2 rounded-xl p-5 transition-all ${
                        tier.highlighted 
                            ? 'border-[#D4AF37] bg-[#D4AF37]/5 shadow-md' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="font-['Oswald'] text-xl font-bold text-[#0F1C15]">{tier.name}</h4>
                            <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-3xl font-bold text-[#0F1C15]">NPR {tier.price}</span>
                            <span className="text-gray-500 text-sm">/course</span>
                            </div>
                        </div>
                        {tier.highlighted && (
                            <span className="px-3 py-1 bg-[#D4AF37] text-white text-xs font-bold rounded-full uppercase">
                            Recommended
                            </span>
                        )}
                        </div>
                        
                        <ul className="space-y-2 mb-4">
                        {tier.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-600">
                            <i className="fas fa-check text-green-500"></i>
                            <span>{feature}</span>
                            </li>
                        ))}
                        </ul>
                        
                        <button className={`w-full py-3 rounded-lg font-bold font-['Rajdhani'] uppercase tracking-wider transition-all ${
                        tier.highlighted
                            ? 'bg-[#D4AF37] text-white hover:bg-[#B4941F] hover:shadow-lg'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}>
                        Select Plan
                        </button>
                    </div>
                    ))}
                </div>

                {/* Guarantee Badge */}
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-center gap-3 mb-2">
                    <i className="fas fa-shield-alt text-2xl text-[#D4AF37]"></i>
                    <span className="font-['Oswald'] font-bold text-lg text-[#0F1C15]">
                        Selection Guarantee
                    </span>
                    </div>
                    <p className="text-sm text-gray-600">
                    If not selected, get <strong>50% refund</strong> or free repeat batch
                    </p>
                </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-['Oswald'] font-bold text-lg text-[#0F1C15] mb-4">
                    <i className="fas fa-info-circle text-[#D4AF37] mr-2"></i>
                    Key Information
                </h4>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600">Next Batch Start</span>
                    <span className="font-bold text-[#0F1C15]">15 March 2024</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-bold text-[#0F1C15]">4 Months</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600">Classes</span>
                    <span className="font-bold text-[#0F1C15]">Weekends, 3 hrs</span>
                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-gray-600">Seats Left</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-bold rounded-full">
                        8 of 25
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* CTA Section */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
            >
            <div className="bg-gradient-to-r from-[#0F1C15] to-[#1a2e24] rounded-3xl p-12 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-[100px] opacity-20"></div>
                
                <h2 className="font-['Oswald'] text-4xl font-bold text-white mb-4 relative z-10">
                Ready to Command Your Future?
                </h2>
                <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto relative z-10">
                Join the most comprehensive Staff College preparation program in Nepal
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <button className="px-10 py-4 bg-[#D4AF37] text-[#0F1C15] font-bold text-lg rounded-xl hover:bg-[#B4941F] hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                    <i className="fas fa-lock"></i>
                    Enroll Now - Secure Your Seat
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-3">
                    <i className="fas fa-calendar-alt"></i>
                    Schedule Free Consultation
                </button>
                </div>
                
                <p className="text-gray-400 text-sm mt-6 relative z-10">
                <i className="fas fa-clock mr-2"></i>
                Limited seats available. Last date for early bird discount: 10 March 2024
                </p>
            </div>
            </motion.div>
        </div>
      </div>
    </>
  );
};

export default ArmyCourseDetail;