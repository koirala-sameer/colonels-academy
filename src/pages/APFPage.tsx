import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, BookOpen, Calendar, 
  Clock, CheckCircle, PlayCircle, 
  FileText 
} from 'lucide-react';
import BundleWindow from '../components/BundleWindow';
import MentorCard from '../components/MentorCard';

const APFPage = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showBundle, setShowBundle] = useState(false);

  const courses = [
    {
      id: 'armed-police-service',
      title: 'Armed Police Service & Security',
      description: 'Core concepts of APF mandate, border security, and industrial security management.',
      duration: '12 Weeks',
      lessons: 26,
      icon: Shield,
      color: 'from-orange-600 to-orange-400',
      features: ['Border Security', 'Industrial Security', 'Disaster Management', 'Act & Regulations']
    },
    {
      id: 'general-knowledge',
      title: 'General Knowledge & IQ',
      description: 'Comprehensive GK coverage focused on national and international affairs.',
      duration: '10 Weeks',
      lessons: 22,
      icon: BookOpen,
      color: 'from-emerald-600 to-emerald-400',
      features: ['National Affairs', 'International Relations', 'History & Geography', 'IQ Tests']
    },
    {
      id: 'legal-studies',
      title: 'Legal Studies & Constitution',
      description: 'In-depth study of Nepal Constitution, APF Act, and relevant legal frameworks.',
      duration: '14 Weeks',
      lessons: 30,
      icon: FileText,
      color: 'from-blue-600 to-blue-400',
      features: ['Nepal Constitution', 'APF Act 2058', 'Human Rights', 'Criminal Law']
    }
  ];

  const mentors = [
    {
        name: "IGP (Retd.) Sanjeev Thapa",
        rank: "Former APF IGP",
        experience: "34 years service",
        specialization: "Border Security",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
        achievements: ["Reformed Border Posts", "Author of Security Manuals", "Disaster Mgmt Expert"]
    },
    {
        name: "AIG (Retd.) Ravi Raj",
        rank: "Former AIGP",
        experience: "30 years service",
        specialization: "Intelligence & Ops",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
        achievements: ["Led Special Task Force", "UN Mission Commander", "Tactical Instructor"]
    },
    {
        name: "DSP (Retd.) Meena Karki",
        rank: "Former DSP",
        experience: "18 years service",
        specialization: "Legal & Admin",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
        achievements: ["Top in Inspector Exam", "Legal Advisor", "Best Instructor Award"]
    }
  ];

  const importantDates = [
    { date: "20 Jan 2024", event: "Form Submission", status: "Upcoming" },
    { date: "15 Feb 2024", event: "Written Exam", status: "Upcoming" },
    { date: "10 Mar 2024", event: "Physical Test", status: "Upcoming" },
    { date: "5 Jan 2024", event: "Vacancy Announcement", status: "Completed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50">
      
      {showBundle && <BundleWindow onClose={() => setShowBundle(false)} service="apf" courses={courses} />}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-900/5 via-white to-orange-500/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590422749847-5e3d7b56365a?auto=format&fit=crop&w=2070')] bg-cover bg-center opacity-10"></div>
        
        <div className="section-container relative pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Shield className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-mono font-semibold text-orange-700 tracking-wider">
                  ARMED POLICE FORCE
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-600 to-orange-500">
                  APF Inspector
                </span>
                <br />
                <span className="text-gray-800">Preparation Class</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Specialized training for Armed Police Force Inspector and Staff College exams.
                Master the APF mandate, border security protocols, and legal frameworks with experts.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl bg-orange-600 text-white font-bold shadow-lg hover:bg-orange-700 transition-all flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Start Free Trial
                </button>
                <button className="px-8 py-4 rounded-xl bg-white border-2 border-orange-100 text-orange-900 font-bold hover:bg-orange-50 transition-all flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Class Routine
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-2">
            
            {/* Courses Grid */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Subject Modules</h2>
                        <p className="text-gray-600">Comprehensive coverage of APF syllabus</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {courses.map((course) => {
                        const Icon = course.icon;
                        return (
                            <motion.div 
                                key={course.id}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedCourse(course.id)}
                                className={`relative rounded-2xl border-2 ${selectedCourse === course.id ? 'border-orange-500' : 'border-gray-200'} bg-white p-6 cursor-pointer transition-all duration-300 hover:shadow-lg`}
                            >
                                {selectedCourse === course.id && (
                                    <div className="absolute -top-2 -right-2">
                                        <CheckCircle className="w-6 h-6 text-orange-500 fill-current bg-white rounded-full" />
                                    </div>
                                )}
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${course.color}/10 w-fit mb-4`}>
                                    <Icon className={`w-8 h-8 ${course.color.replace('from-', 'text-').split(' ')[0]}`} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{course.description}</p>
                                
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-500 font-medium">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                                        <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {course.lessons} Lessons</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {course.features.slice(0, 2).map((f, i) => (
                                            <span key={i} className="px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-600">{f}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bundle Box */}
                <div className="rounded-2xl bg-gradient-to-r from-orange-50 to-white border border-orange-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Full APF Inspector Package</h3>
                        <p className="text-gray-600 mb-4">Includes all modules, physical training guides, and interview prep.</p>
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-bold text-orange-600">NPR 35,000</span>
                            <span className="text-lg text-gray-400 line-through">NPR 50,000</span>
                        </div>
                    </div>
                    <button onClick={() => setShowBundle(true)} className="px-8 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors">
                        Enroll Now
                    </button>
                </div>
            </section>

            {/* Important Dates */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Dates</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {importantDates.map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 p-4 rounded-xl text-center">
                        <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">{item.date}</div>
                        <div className="text-sm font-semibold text-gray-900 mb-2">{item.event}</div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                            {item.status}
                        </span>
                    </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">APF Mentors</h2>
                <div className="space-y-4">
                    {mentors.map((m, i) => (
                        <MentorCard key={i} mentor={m} />
                    ))}
                </div>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Why Join APF?</h3>
                <ul className="space-y-3">
                    {["Border Security Mandate", "Disaster Management Role", "Industrial Security", "UN Peacekeeping Missions"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-orange-500" /> {item}
                        </li>
                    ))}
                </ul>
            </section>
          </div>

        </div>
      </div>

    </div>
  );
};

export default APFPage;