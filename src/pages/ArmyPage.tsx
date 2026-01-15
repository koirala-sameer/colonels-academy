import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, BookOpen, Users, 
  Clock, CheckCircle, ChevronRight,
  FileText, Globe, BookMarked, CheckSquare, Star,
  Headphones, Calendar, Award, Zap, 
  MousePointerClick, PlayCircle
} from 'lucide-react';
import BundleWindow from '../components/BundleWindow';

const ArmyPage = () => {
  // FIXED: Removed unused 'selectedCourse' state to solve build error
  const [showBundle, setShowBundle] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Design Tokens
  const armyColor = '#00693E';
  const armyLightColor = '#E6F2ED';

  const courses = [
    {
      id: 'military-history',
      title: 'Military History & Strategy',
      description: 'Master military campaigns, strategic thought processes, and historical analysis required for command.',
      instructor: 'Col. (Retd.) R. Thapa',
      rating: 4.9,
      students: 420,
      duration: '12 Weeks',
      lessons: 24,
      icon: BookMarked,
      price: '5,000',
      originalPrice: '8,000',
      color: '#00693E', // Army Green
      lightColor: '#E6F2ED',
      tag: 'Bestseller'
    },
    {
      id: 'current-affairs',
      title: 'Security & Current Affairs',
      description: 'Deep dive into contemporary national security issues, geopolitics, and defense policy analysis.',
      instructor: 'Maj. Gen. (Retd.) S. Gurung',
      rating: 4.8,
      students: 315,
      duration: '10 Weeks',
      lessons: 20,
      icon: Globe,
      price: '5,000',
      originalPrice: '8,000',
      color: '#1E3A8A', // Intelligence Blue
      lightColor: '#EFF6FF',
      tag: 'Trending'
    },
    {
      id: 'tpp',
      title: 'Tactics & Staff Duties',
      description: 'Advanced professional paper writing, operational tactics, and staff duty procedures for exams.',
      instructor: 'Lt. Col. (Retd.) A. Rai',
      rating: 4.9,
      students: 280,
      duration: '14 Weeks',
      lessons: 28,
      icon: FileText,
      price: '5,000',
      originalPrice: '8,000',
      color: '#991B1B', // Combat Red
      lightColor: '#FEF2F2',
      tag: 'Advanced'
    }
  ];

  const mentors = [
    {
      name: "Col. (Retd.) Rajesh Thapa",
      rank: "Former Army Colonel",
      experience: "25+ Years",
      specialization: "Military Strategy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400",
      achievements: ["Staff College Gold Medalist", "Author of 'Mountain Warfare'", "Chief Instructor at NA", "UN Peacekeeping Veteran"]
    },
    {
      name: "Maj. Gen. (Retd.) Sunil Gurung",
      rank: "Former Major General",
      experience: "32+ Years",
      specialization: "Operational Planning",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=400",
      achievements: ["Division Commander", "Strategy Consultant", "Sandhurst Graduate", "Decorated Service Medal"]
    },
    {
      name: "Lt. Col. (Retd.) Anita Rai",
      rank: "Former Lt. Colonel",
      experience: "20+ Years",
      specialization: "Military History",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
      achievements: ["History PhD Holder", "Published Researcher", "Intelligence Officer", "Staff College Topper"]
    }
  ];

  const importantDates = [
    { date: "15 Jan", event: "Apps Close" },
    { date: "01 Feb", event: "Entrance Exam" },
    { date: "15 Mar", event: "Interviews" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f7f8] font-sans">
      {/* Bundle Window Modal */}
      {showBundle && <BundleWindow onClose={() => setShowBundle(false)} service="army" courses={courses} />}

      {/* HERO SECTION */}
      <div className="text-center pt-24 pb-10 px-6">
        <div className="text-xs tracking-[0.5em] font-semibold text-gray-500 mb-4 uppercase">
          Nepal Army Wing
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Staff College Preparation
        </h1>

        <div className="mt-6 max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-gray-600 mb-8">
            Exclusive preparation tracks for Nepal Army officers preparing for Staff College selection.
          </p>

          {/* --- INSTRUCTION PILL --- */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#D4AF37]/50 hover:shadow-md transition-all cursor-default"
          >
            <MousePointerClick className="w-4 h-4 text-[#D4AF37]" />
            <span>
              Select a specific course below <span className="text-gray-300 mx-1">|</span> Or enroll in the <span className="text-[#D4AF37] font-bold">Complete Bundle</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-16">
        
        {/* 1. EXTENDED PROMO BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="p-8 grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Enrollment Status */}
            <div className="lg:col-span-5 flex items-start gap-6 border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: armyLightColor }}
              >
                <Shield className="w-8 h-8" style={{ color: armyColor }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">NA-SC Program</span>
                  <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase">Open</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Batch 2024</h2>
                <div className="flex items-center gap-2 mt-2">
                   <div className="text-xs text-gray-400 uppercase font-bold">Success Rate</div>
                   <div className="text-sm font-bold" style={{ color: armyColor }}>98.2%</div>
                </div>
              </div>
            </div>

            {/* Middle: Key Dates Grid */}
            <div className="lg:col-span-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Key Dates
              </div>
              <div className="grid grid-cols-3 gap-4">
                {importantDates.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-gray-900 leading-none mb-1">{item.date}</div>
                    <div className="text-[10px] font-medium text-gray-500 uppercase leading-tight">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="lg:col-span-3 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowBundle(true)}
                className="w-full py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-green-900/10 transition-all duration-300"
                style={{ backgroundColor: armyColor }}
              >
                <CheckCircle className="w-5 h-5" />
                Enroll Now
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* 2. COURSES SECTION */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-gray-400" />
              Command & Staff Curriculum
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -8 }}
                  // FIXED: Removed onClick that was using the missing state function
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col h-full relative"
                >
                  
                  {/* 1. THUMBNAIL AREA (Top) */}
                  <div 
                    className="h-40 relative flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: course.lightColor }}
                  >
                    {/* Dynamic Pattern Background */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(${course.color} 1.5px, transparent 1.5px)`,
                        backgroundSize: '16px 16px'
                      }}
                    />
                    
                    {/* Floating Icon */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative z-10 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md"
                    >
                      <Icon className="w-8 h-8" style={{ color: course.color }} />
                    </motion.div>

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-lg shadow-sm" style={{ color: course.color }}>
                        {course.tag}
                      </span>
                    </div>
                  </div>

                  {/* 2. CONTENT AREA */}
                  <div className="p-6 flex flex-col flex-grow">
                    
                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-[#00693E] transition-colors">
                      {course.title}
                    </h4>
                    
                    {/* Instructor */}
                    <div className="text-xs text-gray-500 mb-3 font-medium">
                      By {course.instructor}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Social Proof (Ratings) */}
                    <div className="flex items-center gap-1 mb-4 text-sm">
                      <span className="font-bold text-gray-900">{course.rating}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-400 text-xs">({course.students})</span>
                    </div>

                    {/* Meta Specs */}
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-6 pb-6 border-b border-gray-100">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <PlayCircle className="w-3.5 h-3.5" />
                        {course.lessons} lectures
                      </span>
                    </div>

                    {/* 3. FOOTER (Price & CTA) */}
                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-gray-900">NPR {course.price}</span>
                          <span className="text-xs text-gray-400 line-through">NPR {course.originalPrice}</span>
                        </div>
                      </div>
                      
                      <button 
                        className="px-6 py-2.5 rounded-xl font-bold text-white text-sm shadow-md hover:shadow-lg transition-all"
                        style={{ backgroundColor: course.color }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. BUNDLE OFFER SECTION */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="p-8">
            <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase mb-3">
                  <Star className="w-3 h-3 fill-current" />
                  Best Value
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Officer's Bundle</h3>
                <p className="text-gray-600 text-sm max-w-2xl">
                  Purchase all 3 courses together and get unlimited mock tests, extra study resources, 
                  and direct mentorship from retired Generals at a discounted rate.
                </p>
              </div>
              <div className="text-right flex flex-col items-end justify-center min-w-[150px]">
                <div className="text-sm text-gray-400 line-through font-medium mb-1">NPR 15,000</div>
                <div className="text-3xl font-bold" style={{ color: armyColor }}>NPR 11,250</div>
                <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded mt-1">
                  25% SAVINGS
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] rounded-2xl p-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {["All 3 Courses", "Unlimited Mock Tests", "Direct Mentorship", "Verified Certificate"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4" style={{ color: armyColor }} />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowBundle(true)}
              className="w-full mt-6 py-4 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
              style={{ backgroundColor: armyColor }}
            >
              Get Full Access
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* 4. DIRECTING STAFF */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
             <div>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Users className="w-6 h-6 text-gray-400" />
                  Directing Staff
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Mentorship from decorated officers with proven track records.
                </p>
             </div>
            <button className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
              View All Staff →
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl p-6 hover:bg-gray-100 transition-colors group border border-transparent hover:border-gray-200">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-16 h-16 rounded-2xl object-cover shadow-sm"
                  />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide" style={{ color: armyColor }}>
                      {mentor.rank}
                    </div>
                    <div className="font-bold text-gray-900 leading-tight">
                      {mentor.name}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <Award className="w-4 h-4 text-gray-400" />
                    {mentor.specialization}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <Zap className="w-4 h-4 text-gray-400" />
                    {mentor.experience}
                  </div>
                  
                  {/* Achievements List */}
                  <div className="pt-3 mt-3 border-t border-gray-200/60">
                    <div className="text-xs font-semibold text-gray-400 uppercase mb-2">Key Achievements</div>
                    {mentor.achievements && mentor.achievements.slice(0, 3).map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 mb-1.5 text-xs text-gray-600">
                        <div className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER: NEED GUIDANCE SECTION */}
      <div className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <div 
          className="rounded-3xl p-10 md:p-14 flex flex-col items-center justify-center gap-6 shadow-sm border border-gray-100"
          style={{ backgroundColor: armyLightColor }}
        >
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm mb-2 transform rotate-3 hover:rotate-6 transition-transform">
            <Headphones className="w-10 h-10" style={{ color: armyColor }} />
          </div>
          
          <div className="space-y-3">
            <h4 className="text-3xl font-bold text-gray-900">Need Guidance?</h4>
            <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
              Not sure which papers to select or how to prepare? Schedule a free 15-min counseling session with our academic advisor.
            </p>
          </div>
          
          <button 
            className="px-10 py-4 rounded-xl font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg mt-4"
            style={{ backgroundColor: armyColor }}
          >
            Book a Free Session
          </button>
        </div>
      </div>

    </div>
  );
};

export default ArmyPage;