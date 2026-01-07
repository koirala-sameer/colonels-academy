import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PoliceCourseDetail: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "Criminal Law & Procedure",
      icon: "fas fa-gavel",
      description: "Comprehensive study of Muluki Ain, Evidence Act, and Criminal Procedure Code with case law analysis.",
      duration: "10 Weeks",
      topics: ["Muluki Ain", "Evidence Act", "CPC", "Case Law"],
      highlight: "Case Study Method by Ex-AIG"
    },
    {
      id: 2,
      title: "Investigation & Forensics",
      icon: "fas fa-search",
      description: "Crime scene management, forensic evidence collection, and scientific investigation techniques.",
      duration: "8 Weeks",
      topics: ["Crime Scene", "Forensics", "Interrogation", "Evidence Chain"],
      highlight: "Practical Crime Scene Simulations"
    },
    {
      id: 3,
      title: "Police Administration",
      icon: "fas fa-building",
      description: "Police organizational structure, human resource management, and administrative procedures.",
      duration: "6 Weeks",
      topics: ["Org Structure", "HR Management", "Budgeting", "Reporting"],
      highlight: "Former DIG as Mentor"
    },
    {
      id: 4,
      title: "Interview & Viva Preparation",
      icon: "fas fa-comments",
      description: "Mock interview sessions focusing on OLQs, situational judgment, and police-specific scenarios.",
      duration: "4 Weeks",
      topics: ["OLQs", "Case Studies", "Stress Tests", "Board Etiquette"],
      highlight: "Personalized Feedback Sessions"
    }
  ];

  const pricingTiers = [
    {
      name: "Standard",
      price: "7,500",
      features: ["Full Course Access", "Recorded Sessions", "Study Material", "3 Mock Tests"],
      highlighted: false
    },
    {
      name: "Pro",
      price: "11,000",
      features: ["Everything in Standard", "Live Q&A Sessions", "Personal Mentor", "6 Mock Tests + Review"],
      highlighted: true
    },
    {
      name: "Elite",
      price: "16,000",
      features: ["Everything in Pro", "1-on-1 Coaching", "Interview Simulation", "Priority Support"],
      highlighted: false
    }
  ];

  return (
    <section id="police-course-detail" className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="group flex items-center gap-3 text-gray-600 hover:text-blue-700 transition-colors">
            <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            <span className="font-['Rajdhani'] font-semibold text-sm uppercase tracking-wider">Back to All Courses</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase tracking-wider">
              <i className="fas fa-circle text-[8px] mr-2 animate-pulse"></i>
              Admissions Open
            </span>
            <button className="px-4 py-2 border border-blue-700 text-blue-700 text-sm font-['Rajdhani'] font-bold uppercase tracking-wider hover:bg-blue-700 hover:text-white transition-all rounded-lg">
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/5 px-6 py-2 rounded-full border border-blue-500/20 mb-6">
            <i className="fas fa-shield-alt text-blue-600"></i>
            <span className="font-['Rajdhani'] font-bold text-sm uppercase tracking-widest text-blue-800">
              Police Service Wing
            </span>
          </div>
          
          <h1 className="font-['Oswald'] text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
              Nepal Police
            </span>
            <br />
            <span className="text-5xl md:text-6xl text-gray-800">Staff College Program</span>
          </h1>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive preparation for the Nepal Police Staff College Examination. 
            Designed by <span className="text-blue-600 font-bold">serving and retired senior police officers</span>.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Success Rate", value: "92%", icon: "fas fa-trophy" },
            { label: "Batch Size", value: "30", sub: "officers", icon: "fas fa-users" },
            { label: "Hours", value: "110+", sub: "of training", icon: "fas fa-clock" },
            { label: "Mock Tests", value: "8", sub: "full length", icon: "fas fa-file-alt" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <i className={`${stat.icon} text-2xl text-blue-600`}></i>
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
                Curriculum <span className="text-blue-600">Modules</span>
              </h2>
              <p className="text-gray-600 mb-6">Comprehensive syllabus covering all aspects of police administration and law</p>
            </div>

            <div className="space-y-4">
              {modules.map((module) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: module.id * 0.1 }}
                  className={`bg-white border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-blue-500 hover:shadow-lg ${
                    selectedModule === module.id ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${selectedModule === module.id ? 'bg-blue-600' : 'bg-blue-100'}`}>
                        <i className={`${module.icon} ${selectedModule === module.id ? 'text-white' : 'text-blue-600'}`}></i>
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
                            <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200">
                              {topic}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-blue-600 font-bold">
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
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full border-4 border-blue-300/30 overflow-hidden">
                  <img 
                    src="https://i.pravatar.cc/150?img=32" 
                    alt="Instructor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-['Oswald'] text-2xl font-bold">Ex-AIG R. Sharma</h4>
                  <p className="text-blue-300 text-sm uppercase tracking-wider font-['Rajdhani']">Former Investigation Chief</p>
                </div>
              </div>
              
              <p className="text-blue-200 mb-6 italic border-l-2 border-blue-400 pl-4">
                "Police work is 20% action and 80% documentation. We focus on both the fieldwork and the paperwork that gets results."
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-medal text-blue-300"></i>
                  <span className="text-sm">28+ years of police service</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-graduation-cap text-blue-300"></i>
                  <span className="text-sm">Trained 400+ police officers</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-award text-blue-300"></i>
                  <span className="text-sm">Ex-Police Academy Instructor</span>
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
                        ? 'border-blue-600 bg-blue-50 shadow-md' 
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
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase">
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
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>

              {/* Guarantee Badge */}
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <i className="fas fa-shield-alt text-2xl text-blue-600"></i>
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
                <i className="fas fa-info-circle text-blue-600 mr-2"></i>
                Key Information
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Next Batch Start</span>
                  <span className="font-bold text-gray-900">22 March 2024</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-bold text-gray-900">3.5 Months</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Classes</span>
                  <span className="font-bold text-gray-900">Weekends, 3 hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Seats Left</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-bold rounded-full">
                    12 of 30
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
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
            
            <h2 className="font-['Oswald'] text-4xl font-bold text-white mb-4 relative z-10">
              Join Nepal's Premier Police Training Program
            </h2>
            <p className="text-blue-200 text-xl mb-8 max-w-2xl mx-auto relative z-10">
              Train with the officers who have served at the highest levels of Nepal Police
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                <i className="fas fa-lock"></i>
                Enroll Now - Secure Your Seat
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-blue-300/50 text-white font-bold text-lg rounded-xl hover:bg-blue-500/20 hover:border-blue-300 transition-all flex items-center justify-center gap-3">
                <i className="fas fa-calendar-alt"></i>
                Schedule Free Consultation
              </button>
            </div>
            
            <p className="text-blue-300 text-sm mt-6 relative z-10">
              <i className="fas fa-clock mr-2"></i>
              Limited seats available. Last date for early bird discount: 15 March 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoliceCourseDetail;