import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Target, Award, Star, Clock, Users, MapPin, ArrowRight } from 'lucide-react';

const Gateway = () => {
  const navigate = useNavigate();
  const [activeWing, setActiveWing] = useState<string | null>(null);

  const wings = [
    {
      id: 'army',
      title: 'NEPAL ARMY',
      subtitle: 'ELITE STAFF COLLEGE PREP COURSE',
      code: 'NA-SC',
      logo: '/images/army-logo.png',
      color: '#6B8E23',
      icon: Shield,
      stats: { success: '98.2%', seats: '24', duration: '12 Months', rank: 'Colonel & Above' },
      gradient: 'linear-gradient(135deg, #D1E7DD 0%, #6B8E23 50%, #A3B18A 100%)',
      pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B8E23' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      path: '/courses/army'
    },
    {
      id: 'police',
      title: 'NEPAL POLICE',
      subtitle: 'ELITE STAFF COLLEGE PREP COURSE',
      code: 'NP-INS',
      logo: '/images/police-logo.png',
      color: '#3B82F6',
      icon: Target,
      stats: { success: '95.7%', seats: '28', duration: '10 Months', rank: 'DSP & Above' },
      gradient: 'linear-gradient(135deg, #BFDBFE 0%, #3B82F6 50%, #60A5FA 100%)',
      pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      path: '/courses/police'
    },
    {
      id: 'apf',
      title: 'ARMED POLICE FORCE',
      subtitle: 'ELITE STAFF COLLEGE PREP COURSE',
      code: 'APF-EF',
      logo: '/images/apf-logo.png',
      color: '#EF4444',
      icon: Award,
      stats: { success: '96.5%', seats: '26', duration: '11 Months', rank: 'Commandant & Above' },
      gradient: 'linear-gradient(135deg, #FEE2E2 0%, #EF4444 50%, #FCA5A5 100%)',
      pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EF4444' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      path: '/courses/apf'
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden font-sans">
      {/* Global Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Tactical Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                              linear-gradient(0deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#0F1C15]/20 to-transparent blur-3xl"></div>
        {/* Subtle Topography Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Minimal Branding */}
        <div className="flex flex-col items-center justify-center px-6 pt-12 md:pt-20 pb-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Academy Branding with Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#0F1C15]/90 to-[#152028]/90 backdrop-blur-xl rounded-2xl border-2 border-[#D4AF37]/40 mb-10 shadow-2xl"
            >
              {/* Academy Logo */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4CA30] flex items-center justify-center p-2">
                <img
                  src="/images/academy-logo.png"
                  alt="The Colonel's Academy Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <svg class="w-6 h-6 text-[#0F1C15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      `;
                    }
                  }}
                />
              </div>
              <div className="text-left">
                <div className="font-['Rajdhani'] font-bold text-white text-lg uppercase tracking-wider">
                  The Colonel's Academy
                </div>
                <div className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider mt-1">
                  Staff College Wing
                </div>
              </div>
            </motion.div>
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight"
            >
              <span className="block bg-gradient-to-r from-gray-900 via-gray-900 to-[#D4AF37] bg-clip-text text-transparent">
                ELITE STAFF COLLEGE
              </span>
              <span className="block text-[#D4AF37] mt-2">PREPARATION</span>
            </motion.h1>
          </div>
        </div>
        {/* Service Wings Grid - Immediate & Prominent */}
        <div className="relative px-4 md:px-8">
          {/* Wings Container */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {wings.map((wing) => {
              const isActive = activeWing === wing.id;
              return (
                <motion.div
                  key={wing.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onMouseEnter={() => setActiveWing(wing.id)}
                  onMouseLeave={() => setActiveWing(null)}
                  onClick={() => navigate(wing.path)}
                  className="relative group cursor-pointer"
                >
                  {/* Card Container */}
                  <div className="relative bg-gradient-to-br from-white/95 to-gray-100/95 backdrop-blur-lg rounded-3xl border-2 border-gray-200/50 overflow-hidden transition-all duration-500 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-300/50 h-full">
                    {/* Top Accent Bar */}
                    <div
                      className="h-2 w-full"
                      style={{ backgroundColor: wing.color }}
                    />
                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs font-bold tracking-widest text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                          {wing.code}
                        </span>
                        {/* Status Indicator */}
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-xs text-green-600 font-semibold">Active</span>
                        </div>
                      </div>
                      {/* Logo */}
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Glow Effect */}
                          <motion.div
                            className="absolute inset-0 rounded-full opacity-20 blur-xl"
                            style={{ backgroundColor: wing.color }}
                            animate={{
                              scale: isActive ? 1.1 : 1,
                              opacity: isActive ? 0.3 : 0.2
                            }}
                          />
                          {/* Logo Image */}
                          <div className="relative w-24 h-24 flex items-center justify-center">
                            <div
                              className="absolute inset-0 rounded-full opacity-20"
                              style={{ backgroundColor: wing.color }}
                            />
                            <img
                              src={wing.logo}
                              alt={`${wing.title} Logo`}
                              className="relative max-w-full max-h-full object-contain drop-shadow-2xl"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const parent = e.currentTarget.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="w-full h-full flex items-center justify-center">
                                      <div class="relative">
                                        <div class="absolute inset-0 rounded-full blur-xl" style="background-color: ${wing.color}; opacity: 0.3;"></div>
                                        <div class="relative w-20 h-20 rounded-full flex items-center justify-center border-4 border-gray-200/50" style="background-color: ${wing.color}">
                                          <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
${wing.id === 'army' ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />' :
wing.id === 'police' ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />' :
'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'}
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
                        {wing.title}
                      </h3>
                      {/* Subtitle */}
                      <p className="text-gray-600 text-sm font-medium text-center mb-6 tracking-wide line-clamp-2">
                        {wing.subtitle}
                      </p>
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-gray-100 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Star className="w-3 h-3 text-[#D4AF37]" />
                            <span className="text-xs text-gray-500">Success</span>
                          </div>
                          <div className="text-lg font-bold text-gray-900">{wing.stats.success}</div>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-3 h-3 text-gray-500" />
                            <span className="text-xs text-gray-500">Duration</span>
                          </div>
                          <div className="text-base font-bold text-gray-900">{wing.stats.duration}</div>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="w-3 h-3 text-gray-500" />
                            <span className="text-xs text-gray-500">Seats</span>
                          </div>
                          <div className="text-lg font-bold text-gray-900">{wing.stats.seats}</div>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-3 h-3 text-gray-500" />
                            <span className="text-xs text-gray-500">Rank</span>
                          </div>
                          <div className="text-sm font-bold text-gray-900">{wing.stats.rank}</div>
                        </div>
                      </div>
                      {/* CTA Button */}
                      <div className="mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded-xl text-white font-bold tracking-wider flex items-center justify-center gap-3 transition-all duration-300 group/btn"
                          style={{ background: wing.gradient }}
                        >
                          <span>Access Program</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                        {/* Enrollment Info */}
                        <div className="mt-3 text-center">
                          <span className="text-xs text-gray-500">
                            Next intake: <span className="font-bold text-gray-700">Feb 1, 2024</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Hover Glow Effect */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${wing.color}20 0%, transparent 70%)`
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gateway;