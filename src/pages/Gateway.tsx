import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  Target,
  Award,
  Star,
  Clock,
  Users,
  MapPin,
  ArrowRight
} from 'lucide-react';

interface Wing {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  logo: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  stats: {
    success: string;
    seats: string;
    duration: string;
    rank: string;
  };
  gradient: string;
  pattern: string;
  path: string;
}

const Gateway = () => {
  const navigate = useNavigate();
  const [activeWing, setActiveWing] = useState<string | null>(null);

  const wings: Wing[] = [
    {
      id: 'army',
      title: 'NEPAL ARMY',
      subtitle: 'ELITE STAFF COLLEGE PREP COURSE',
      code: 'NA-SC',
      logo: '/images/army-logo.png',
      color: '#4F772D',
      icon: Shield,
      stats: { success: '98.2%', seats: '24', duration: '12 Months', rank: 'Colonel & Above' },
      gradient: '',
      pattern: '',
      path: '/courses/army'
    },
    {
      id: 'police',
      title: 'NEPAL POLICE',
      subtitle: 'ELITE STAFF COLLEGE PREP COURSE',
      code: 'NP-INS',
      logo: '/images/police-logo.png',
      color: '#0B57D0',
      icon: Target,
      stats: { success: '95.7%', seats: '28', duration: '10 Months', rank: 'DSP & Above' },
      gradient: '',
      pattern: '',
      path: '/courses/police'
    },
    {
      id: 'apf',
      title: 'ARMED POLICE FORCE',
      subtitle: 'ELITE STAFF COLLEGE PREP COURSE',
      code: 'APF-EF',
      logo: '/images/apf-logo.png',
      color: '#DC2626',
      icon: Award,
      stats: { success: '96.5%', seats: '26', duration: '11 Months', rank: 'Commandant & Above' },
      gradient: '',
      pattern: '',
      path: '/courses/apf'
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden font-sans">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px),
            linear-gradient(0deg, rgba(212,175,55,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10">
        {/* HERO */}
        <div className="flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            {/* ELITE (Top) */}
            <div className="text-sm md:text-base font-bold tracking-[0.6em] text-[#D4AF37] mb-4">
              ELITE
            </div>

            {/* STAFF COLLEGE */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
              STAFF COLLEGE
            </h1>

            {/* PREPARATION */}
            <div className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.3em] text-[#D4AF37]">
              PREPARATION
            </div>

            {/* Audience */}
            <p className="mt-8 text-lg text-gray-600 border-t pt-6 max-w-2xl mx-auto">
              Exclusively for <b>Nepal Army</b>, <b>Nepal Police</b> & <b>APF Officers</b>
            </p>
          </motion.div>
        </div>

        {/* CARDS */}
        <div className="px-4 md:px-8 pb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {wings.map((wing) => {
              const isActive = activeWing === wing.id;

              return (
                <motion.div
                  key={wing.id}
                  onMouseEnter={() => setActiveWing(wing.id)}
                  onMouseLeave={() => setActiveWing(null)}
                  onClick={() => navigate(wing.path)}
                  className="relative cursor-pointer"
                >
                  <div className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all h-full">
                    <div className="h-1" style={{ backgroundColor: wing.color }} />
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-between mb-6">
                        <span className="font-mono text-xs tracking-widest bg-gray-50 px-3 py-1.5 rounded-full">
                          {wing.code}
                        </span>
                        <span className="text-xs text-green-600 font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          Active
                        </span>
                      </div>

                      <div className="relative w-28 h-28 mx-auto mb-6">
                        <div
                          className="absolute inset-0 rounded-full blur-xl opacity-20"
                          style={{ backgroundColor: wing.color }}
                        />
                        <img
                          src={wing.logo}
                          alt={wing.title}
                          className="relative w-full h-full object-contain"
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-center mb-2">
                        {wing.title}
                      </h3>

                      <p className="text-sm text-gray-600 text-center mb-6">
                        {wing.subtitle}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <Stat icon={Star} label="Success" value={wing.stats.success} />
                        <Stat icon={Clock} label="Duration" value={wing.stats.duration} />
                        <Stat icon={Users} label="Seats" value={wing.stats.seats} />
                        <Stat icon={MapPin} label="Rank" value={wing.stats.rank} />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-auto w-full py-3 rounded-xl text-white font-bold tracking-wider flex items-center justify-center gap-3"
                        style={{ backgroundColor: wing.color }}
                      >
                        Access Program
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>

                      <div className="mt-3 text-center text-xs text-gray-500">
                        Next intake: <b>Feb 1, 2024</b>
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${wing.color}20 0%, transparent 70%)`
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

const Stat = ({
  icon: Icon,
  label,
  value
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) => (
  <div className="bg-gray-50 rounded-xl p-3">
    <div className="flex items-center gap-2 mb-1">
      <Icon className="w-3 h-3 text-gray-500" />
      <span className="text-xs text-gray-500">{label}</span>
    </div>
    <div className="text-sm font-bold">{value}</div>
  </div>
);

export default Gateway;
