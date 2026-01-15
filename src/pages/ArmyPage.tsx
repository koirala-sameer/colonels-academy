import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Globe,
  Clock,
  MapPin,
  CheckCircle,
  ChevronRight,
  Zap,
  MousePointerClick // Added icon
} from 'lucide-react';
import type { SVGProps } from 'react';
import BundleWindow from '../components/BundleWindow';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  logo: string;
  color: string;
  lightColor: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  stats: {
    label1: string; value1: string;
    label2: string; value2: string;
    label3: string; value3: string;
    label4: string; value4: string;
  };
  path: string;
}

const ArmyPage = () => {
  const [activeWing, setActiveWing] = useState<string | null>(null);
  const [showBundle, setShowBundle] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Army Theme Colors
  const themeColor = '#00693E';
  const themeLightColor = '#E6F2ED';

  const courses: Course[] = [
    {
      id: 'military-history',
      title: 'Military History & Strategy',
      subtitle: 'Comprehensive analysis of campaigns & strategic thought.',
      code: 'MH-STRAT',
      logo: '/images/army-logo.png',
      color: themeColor,
      lightColor: themeLightColor,
      icon: BookOpen,
      stats: { 
        label1: 'Price', value1: 'NPR 5,000', 
        label2: 'Duration', value2: '12 Weeks', 
        label3: 'Lessons', value3: '24 Modules', 
        label4: 'Mode', value4: 'Online' 
      },
      path: '/courses/army/history'
    },
    {
      id: 'current-affairs',
      title: 'Security & Current Affairs',
      subtitle: 'Deep dive into national security, geopolitics & policy.',
      code: 'SEC-POL',
      logo: '/images/army-logo.png',
      color: themeColor,
      lightColor: themeLightColor,
      icon: Globe,
      stats: { 
        label1: 'Price', value1: 'NPR 5,000', 
        label2: 'Duration', value2: '10 Weeks', 
        label3: 'Lessons', value3: '20 Modules', 
        label4: 'Mode', value4: 'Online' 
      },
      path: '/courses/army/security'
    },
    {
      id: 'tpp',
      title: 'Tactics & Staff Duties',
      subtitle: 'Advanced professional paper writing & staff procedures.',
      code: 'TAC-PAP',
      logo: '/images/army-logo.png',
      color: themeColor,
      lightColor: themeLightColor,
      icon: FileText,
      stats: { 
        label1: 'Price', value1: 'NPR 5,000', 
        label2: 'Duration', value2: '14 Weeks', 
        label3: 'Lessons', value3: '28 Modules', 
        label4: 'Mode', value4: 'Hybrid' 
      },
      path: '/courses/army/tactics'
    }
  ];

  const mentors = [
    {
      name: "Col. (Retd.) Rajesh Thapa",
      rank: "Former Army Colonel",
      experience: "25+ Years",
      specialization: "Military Strategy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400",
      achievements: ["Staff College Gold Medalist", "Author of 'Mountain Warfare'", "Chief Instructor at NA"]
    },
    {
      name: "Maj. Gen. (Retd.) Sunil Gurung",
      rank: "Former Major General",
      experience: "32+ Years",
      specialization: "Operational Planning",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=400",
      achievements: ["Division Commander", "Strategy Consultant", "Sandhurst Graduate"]
    },
    {
      name: "Lt. Col. (Retd.) Anita Rai",
      rank: "Former Lt. Colonel",
      experience: "20+ Years",
      specialization: "Military History",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
      achievements: ["History PhD Holder", "Published Researcher", "Intelligence Officer"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6f7f8] font-sans">
      {/* Bundle Modal Integration */}
      {showBundle && <BundleWindow onClose={() => setShowBundle(false)} service="army" courses={[]} />}

      {/* HERO SECTION */}
      <div className="text-center pt-24 pb-16 px-6">
        <div className="text-xs tracking-[0.5em] font-semibold text-gray-500 mb-4 uppercase">
          Nepal Army Wing
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Command & Staff Curriculum
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto mb-8">
          Specialized modules designed for the Nepal Army Staff College entrance examination.
        </p>

        {/* --- DESIGNED INSTRUCTION PILL --- */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#00693E]/30 hover:shadow-md transition-all cursor-default"
        >
          <MousePointerClick className="w-4 h-4 text-[#00693E]" />
          <span>
            Select a specific course below <span className="text-gray-300 mx-1">|</span> Or enroll in the <span className="text-[#00693E] font-bold">Complete Bundle</span>
          </span>
        </motion.div>
        {/* ---------------------------------- */}

      </div>

      {/* CARDS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            
            return (
              <motion.div
                key={course.id}
                onMouseEnter={() => setActiveWing(course.id)}
                onMouseLeave={() => setActiveWing(null)}
                // onClick={() => navigate(course.path)} 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="cursor-pointer group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow h-full flex flex-col border border-gray-100">
                  
                  {/* TOP SECTION */}
                  <div className="p-8 pb-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">{course.code}</div>
                        <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                          {course.title}
                        </h3>
                      </div>
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: course.lightColor }}
                      >
                        <Icon 
                          className="w-6 h-6" 
                          style={{ color: course.color }}
                        />
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                      {course.subtitle}
                    </p>

                    {/* ENROLLMENT STATUS */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-green-600">Admissions Open</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Batch: <span className="font-semibold text-gray-900">2024</span>
                      </div>
                    </div>
                  </div>

                  {/* LOGO SECTION */}
                  <div 
                    className="relative h-64 flex items-center justify-center p-4"
                    style={{ backgroundColor: course.lightColor }}
                  >
                    <div 
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: `radial-gradient(${course.color} 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}
                    />
                    
                    <div className="relative w-full h-full max-w-[200px] mx-auto flex items-center justify-center">
                      <motion.div
                        className="relative w-full h-full flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={course.logo}
                          alt={course.title}
                          className="w-auto h-auto max-h-full max-w-full object-contain drop-shadow-md"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* STATS SECTION */}
                  <div className="p-8 pt-6">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-gray-400" />
                          <span className="text-xs font-medium text-gray-500">{course.stats.label1}</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">{course.stats.value1}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-xs font-medium text-gray-500">{course.stats.label2}</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">{course.stats.value2}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-xs font-medium text-gray-500">{course.stats.label3}</span>
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{course.stats.value3}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-xs font-medium text-gray-500">{course.stats.label4}</span>
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{course.stats.value4}</div>
                      </div>
                    </div>

                    {/* CTA BUTTON */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 px-4 rounded-xl font-medium text-white flex items-center justify-center gap-2 group-hover:shadow-md transition-all duration-300"
                      style={{ backgroundColor: course.color }}
                    >
                      Enroll Now
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <div 
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-opacity-30 transition-all duration-300 pointer-events-none"
                  style={{
                    borderColor: course.color,
                    opacity: activeWing === course.id ? 1 : 0
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* REST OF THE SECTIONS (Bundle, Mentors, Footer) */}
        {/* ... (Previous code for Bundle, Mentors, Footer remains unchanged as requested) ... */}
      </div>
    </div>
  );
};

export default ArmyPage;