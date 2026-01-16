import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Target, Award, Star, Clock, MapPin,
  CheckCircle, ChevronRight, MousePointerClick, ArrowRight
} from 'lucide-react';
import type { SVGProps } from 'react';

// FIREBASE IMPORTS
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

interface Wing {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  logo: string;
  color: string;
  lightColor: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  stats: {
    success: string;
    seats: string;
    duration: string;
    rank: string;
  };
  path: string;
}

const Gateway = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeWing, setActiveWing] = useState<string | null>(null);
  
  // NEW: Auth State
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const wings: Wing[] = [
    {
      id: 'army',
      title: 'Nepal Army',
      subtitle: 'Staff College Preparation Program',
      code: 'NA-SC',
      logo: '/images/army-logo.png',
      color: '#00693E',
      lightColor: '#E6F2ED',
      icon: Shield,
      stats: { success: '98.2%', seats: '24', duration: '12 Months', rank: 'Colonel & Above' },
      path: '/courses/army'
    },
    {
      id: 'police',
      title: 'Nepal Police',
      subtitle: 'Senior Command Staff Preparation',
      code: 'NP-INS',
      logo: '/images/police-logo.png',
      color: '#1E3A8A',
      lightColor: '#E8EDFF',
      icon: Target,
      stats: { success: '95.7%', seats: '28', duration: '10 Months', rank: 'DSP & Above' },
      path: '/courses/police'
    },
    {
      id: 'apf',
      title: 'Armed Police Force',
      subtitle: 'Elite Staff College Track',
      code: 'APF-EF',
      logo: '/images/apf-logo.png',
      color: '#991B1B',
      lightColor: '#FEE2E2',
      icon: Award,
      stats: { success: '96.5%', seats: '26', duration: '11 Months', rank: 'Commandant & Above' },
      path: '/courses/apf'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6f7f8] font-sans">
      {/* HERO */}
      <div className="text-center pt-24 pb-16 px-6">
        <div className="text-xs tracking-[0.5em] font-semibold text-gray-500 mb-4">
          ELITE OFFICER PROGRAMS
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Staff College Preparation
        </h1>

        <div className="mt-6 max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-gray-600 mb-8">
            Exclusive preparation tracks for Nepal Army, Police & APF officers.
          </p>

          {/* --- SMART HERO SECTION --- */}
          {user ? (
            /* IF LOGGED IN: Show Demo Button */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <button 
                onClick={() => navigate('/dashboard')}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0F1C15] text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#1a2e24] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Enter Officer Portal (Demo)
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-xs font-medium text-gray-400">
                Logged in as {user.displayName || 'Cadet'}
              </span>
            </motion.div>
          ) : (
            /* IF LOGGED OUT: Show Original Instruction Pill */
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-700 cursor-default"
            >
              <MousePointerClick className="w-4 h-4 text-[#D4AF37]" />
              <span>
                Select your command <span className="text-gray-300 mx-1">|</span> Secure your seat
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {wings.map((wing) => {
            const Icon = wing.icon;
            return (
              <motion.div
                key={wing.id}
                onMouseEnter={() => setActiveWing(wing.id)}
                onMouseLeave={() => setActiveWing(null)}
                onClick={() => navigate(wing.path)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="cursor-pointer group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow h-full flex flex-col border border-gray-100">
                  {/* ... CARD CONTENT (Same as your existing code) ... */}
                  <div className="p-8 pb-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">{wing.code}</div>
                        <h3 className="text-2xl font-semibold text-gray-900">{wing.title}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: wing.lightColor }}>
                        <Icon className="w-6 h-6" style={{ color: wing.color }} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">{wing.subtitle}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-green-600">Enrolling Now</span>
                      </div>
                      <div className="text-sm text-gray-500">Seats: <span className="font-semibold text-gray-900">{wing.stats.seats}</span></div>
                    </div>
                  </div>
                  <div className="relative h-64 flex items-center justify-center p-4" style={{ backgroundColor: wing.lightColor }}>
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(${wing.color} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                    <div className="relative w-full h-full max-w-[200px] mx-auto flex items-center justify-center">
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative w-full h-full flex items-center justify-center">
                        <img src={wing.logo} alt={wing.title} className="w-auto h-auto max-h-full max-w-full object-contain" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-8 pt-6">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {/* ... Stats Grid ... */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2"><Star className="w-4 h-4 text-gray-400" /><span className="text-xs font-medium text-gray-500">Success Rate</span></div>
                        <div className="text-lg font-bold text-gray-900">{wing.stats.success}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /><span className="text-xs font-medium text-gray-500">Duration</span></div>
                        <div className="text-lg font-bold text-gray-900">{wing.stats.duration}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /><span className="text-xs font-medium text-gray-500">Rank</span></div>
                        <div className="text-sm font-semibold text-gray-900">{wing.stats.rank}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-gray-500">Next Intake</div>
                        <div className="text-sm font-semibold text-gray-900">Feb 1, 2024</div>
                      </div>
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3.5 px-4 rounded-xl font-medium text-white flex items-center justify-center gap-2 group-hover:shadow-md transition-all duration-300" style={{ backgroundColor: wing.color }}>
                      View Program Details <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-opacity-30 transition-all duration-300 pointer-events-none" style={{ borderColor: wing.color, opacity: activeWing === wing.id ? 1 : 0 }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gateway;