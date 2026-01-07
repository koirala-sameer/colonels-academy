import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const APFCourseDetail: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "APF Act & Regulations",
      icon: "fas fa-gavel",
      description: "Comprehensive study of APF Act 2058, Rules, and Regulations governing paramilitary operations.",
      duration: "8 Weeks",
      topics: ["APF Act 2058", "Rules of Engagement", "Legal Framework", "Case Studies"],
      highlight: "Direct Guidance by Ex-DIG"
    },
    {
      id: 2,
      title: "Border Security Operations",
      icon: "fas fa-border-all",
      description: "Border management, cross-border crime prevention, and international border protocols.",
      duration: "10 Weeks",
      topics: ["Border Patrol", "Cross-border Crime", "International Law", "Security Protocols"],
      highlight: "Field Expert Sessions"
    },
    {
      id: 3,
      title: "Crisis & Disaster Management",
      icon: "fas fa-house-damage",
      description: "Emergency response, disaster management, and coordination with other security agencies.",
      duration: "6 Weeks",
      topics: ["Emergency Response", "Disaster Mgmt", "Agency Coordination", "Crisis Comms"],
      highlight: "Real Crisis Simulations"
    },
    {
      id: 4,
      title: "Staff Duties & Administration",
      icon: "fas fa-file-contract",
      description: "APF-specific documentation, minute sheets, reports, and administrative procedures.",
      duration: "5 Weeks",
      topics: ["Documentation", "Report Writing", "Administration", "Office Procedures"],
      highlight: "100% Format Accuracy"
    }
  ];

  const pricingTiers = [
    {
      name: "Standard",
      price: "8,500",
      features: ["Full Course Access", "Recorded Sessions", "Study Material", "3 Mock Tests"],
      highlighted: false
    },
    {
      name: "Pro",
      price: "12,500",
      features: ["Everything in Standard", "Live Q&A Sessions", "Personal Mentor", "6 Mock Tests + Review"],
      highlighted: true
    },
    {
      name: "Elite",
      price: "17,500",
      features: ["Everything in Pro", "1-on-1 Coaching", "Interview Simulation", "Priority Support"],
      highlighted: false
    }
  ];

  return (
    <section id="apf-course-detail" className="relative bg-gradient-to-b from-orange-50 to-white min-h-screen">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="group flex items-center gap-3 text-gray-600 hover:text-orange-700 transition-colors">
            <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            <span className="font-['Rajdhani'] font-semibold text-sm uppercase tracking-wider">Back to All Courses</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase tracking-wider">
              <i className="fas fa-circle text-[8px] mr-2 animate-pulse"></i>
              Admissions Open
            </span>
            <button className="px-4 py-2 border border-orange-700 text-orange-700 text-sm font-['Rajdhani'] font-bold uppercase tracking-wider hover:bg-orange-700 hover:text-white transition-all rounded-lg">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/5 px-6 py-2 rounded-full border border-orange-500/20 mb-6">
            <i className="fas fa-shield-alt text-orange-600"></i>
            <span className="font-['Rajdhani'] font-bold text-sm uppercase tracking-widest text-orange-800">
              Paramilitary Service Wing
            </span>
          </div>
          
          <h1 className="font-['Oswald'] text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-700 to-amber-800">
              Armed Police Force
            </span>
            <br />
            <span className="text-5xl md:text-6xl text-gray-800">Staff College Program</span>
          </h1>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Specialized preparation for the APF Staff College Examination. 
            Designed by <span className="text-orange-600 font-bold">serving and retired APF senior officers</span>.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Success Rate", value: "91%", icon: "fas fa-trophy" },
            { label: "Batch Size", value: "25", sub: "officers", icon: "fas fa-users" },
            { label: "Hours", value: "115+", sub: "of training", icon: "fas fa-clock" },
            { label: "Mock Tests", value: "9", sub: "full length", icon: "fas fa-file-alt" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <i className={`${stat.icon} text-2xl text-orange-600`}></i>
                <span className="text-3xl font-['Oswald'] font-bold text-gray-900">{stat.value}</span>
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
              <h2 className="font-['Oswald'] text-4xl font-bold text-gray-900 mb-2">
                Curriculum <span className="text-orange-600">Modules</span>
              </h2>
              <p className="text-gray-600 mb-6">Comprehensive syllabus covering all aspects of paramilitary operations</p>
            </div>

            <div className="space-y-4">
              {modules.map((module) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: module.id * 0.1 }}
                  className={`bg-white border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-orange-500 hover:shadow-lg ${
                    selectedModule === module.id ? 'border-orange-500 shadow-lg' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${selectedModule === module.id ? 'bg-orange-600' : 'bg-orange-100'}`}>
                        <i className={`${module.icon} ${selectedModule === module.id ? 'text-white' : 'text-orange-600'}`}></i>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-['Oswald'] text-xl font-bold text-gray-900">{module.title}</h3>
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded font-bold">
                            {module.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{module.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {module.topics.map((topic, idx) => (
                            <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full border border-orange-200">
                              {topic}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-orange-600 font-bold">
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
            <div className="bg-gradient-to-br from-orange-900 to-amber-900 text-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full border-4 border-orange-300/30 overflow-hidden">
                  <img 
                    src="https://i.pravatar.cc/150?img=47" 
                    alt="Instructor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-['Oswald'] text-2xl font-bold">Ex-DIG M. Thapa</h4>
                  <p className="text-orange-300 text-sm uppercase tracking-wider font-['Rajdhani']">Former Border Security Chief</p>
                </div>
              </div>
              
              <p className="text-orange-200 mb-6 italic border-l-2 border-orange-400 pl-4">
                "Border security requires both tactical knowledge and strategic thinking. We prepare you for both the field and the boardroom."
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-medal text-orange-300"></i>
                  <span className="text-sm">32+ years of APF service</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-graduation-cap text-orange-300"></i>
                  <span className="text-sm">Trained 350+ APF officers</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-award text-orange-300"></i>
                  <span className="text-sm">Ex-APF Staff College Instructor</span>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="font-['Oswald'] text-2xl font-bold text-gray-900 mb-6 text-center">
                Choose Your Plan
              </h3>
              
              <div className="space-y-4 mb-8">
                {pricingTiers.map((tier, idx) => (
                  <div 
                    key={idx}
                    className={`border-2 rounded-xl p-5 transition-all ${
                      tier.highlighted 
                        ? 'border-orange-600 bg-orange-50 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-['Oswald'] text-xl font-bold text-gray-900">{tier.name}</h4>
                        <div className="flex items-baseline gap-1 mt-2">
                          <span className="text-3xl font-bold text-gray-900">NPR {tier.price}</span>
                          <span className="text-gray-500 text-sm">/course</span>
                        </div>
                      </div>
                      {tier.highlighted && (
                        <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full uppercase">
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
                        ? 'bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>

              {/* Guarantee Badge */}
              <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <i className="fas fa-shield-alt text-2xl text-orange-600"></i>
                  <span className="font-['Oswald'] font-bold text-lg text-gray-900">
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
              <h4 className="font-['Oswald'] font-bold text-lg text-gray-900 mb-4">
                <i className="fas fa-info-circle text-orange-600 mr-2"></i>
                Key Information
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Next Batch Start</span>
                  <span className="font-bold text-gray-900">25 March 2024</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-bold text-gray-900">4 Months</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Classes</span>
                  <span className="font-bold text-gray-900">Weekends, 3.5 hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Seats Left</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-bold rounded-full">
                    7 of 25
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
          <div className="bg-gradient-to-r from-orange-900 to-amber-900 rounded-3xl p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
            
            <h2 className="font-['Oswald'] text-4xl font-bold text-white mb-4 relative z-10">
              Join Nepal's Premier APF Training Program
            </h2>
            <p className="text-orange-200 text-xl mb-8 max-w-2xl mx-auto relative z-10">
              Train with the officers who have served at the highest levels of Armed Police Force
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-4 bg-orange-600 text-white font-bold text-lg rounded-xl hover:bg-orange-700 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                <i className="fas fa-lock"></i>
                Enroll Now - Secure Your Seat
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-orange-300/50 text-white font-bold text-lg rounded-xl hover:bg-orange-500/20 hover:border-orange-300 transition-all flex items-center justify-center gap-3">
                <i className="fas fa-calendar-alt"></i>
                Schedule Free Consultation
              </button>
            </div>
            
            <p className="text-orange-300 text-sm mt-6 relative z-10">
              <i className="fas fa-clock mr-2"></i>
              Limited seats available. Last date for early bird discount: 20 March 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default APFCourseDetail;