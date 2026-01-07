import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ArmyCourseDetail: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

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
    <section id="course-detail" className="relative bg-gradient-to-b from-gray-50 to-white min-h-screen">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F1C15]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="group flex items-center gap-3 text-gray-600 hover:text-[#0F1C15] transition-colors">
            <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            <span className="font-['Rajdhani'] font-semibold text-sm uppercase tracking-wider">Back to All Courses</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase tracking-wider">
              <i className="fas fa-circle text-[8px] mr-2 animate-pulse"></i>
              Admissions Open
            </span>
            <button className="px-4 py-2 border border-[#0F1C15] text-sm font-['Rajdhani'] font-bold uppercase tracking-wider hover:bg-[#0F1C15] hover:text-white transition-all rounded-lg">
              Download Syllabus
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20">
        
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 px-6 py-2 rounded-full border border-[#D4AF37]/20 mb-6">
            <i className="fas fa-crown text-[#D4AF37]"></i>
            <span className="font-['Rajdhani'] font-bold text-sm uppercase tracking-widest text-[#0F1C15]">
              Command Wing Exclusive
            </span>
          </div>
          
          <h1 className="font-['Oswald'] text-6xl md:text-7xl font-bold text-[#0F1C15] leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#B4941F] to-[#8a701e]">
              Army Staff College
            </span>
            <br />
            <span className="text-5xl md:text-6xl">Preparation Program</span>
          </h1>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive preparation for the Nepal Army Command & Staff Course Entrance Examination. 
            Designed by <span className="text-[#D4AF37] font-bold">serving and retired Colonels</span>.
          </p>
        </motion.div>

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
              animate={{ opacity: 1, y: 0 }}
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
                  animate={{ opacity: 1, x: 0 }}
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
                <div className="w-16 h-16 rounded-full border-4 border-[#D4AF37]/30 overflow-hidden">
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
          animate={{ opacity: 1, y: 0 }}
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
    </section>
  );
};

export default ArmyCourseDetail;