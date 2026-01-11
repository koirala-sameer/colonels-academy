// src/pages/PolicePage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Shield, Gavel, BookOpen, Calendar, ChevronRight, FileText
} from 'lucide-react';
import BundleWindow from '../components/BundleWindow';
import MentorCard from '../components/MentorCard';

const PolicePage = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showBundle, setShowBundle] = useState(false);

  const courses = [
    {
      id: 'police-science',
      title: 'Police Science & Administration',
      description: 'Advanced study of police organization, administration, and modern policing methods.',
      duration: '12 Weeks',
      lessons: 24,
      icon: Shield,
      color: 'from-blue-600 to-blue-400',
      features: ['Organization', 'Administration', 'Modern Methods', 'Case Studies']
    },
    {
      id: 'criminal-law',
      title: 'Criminal Law & Procedure',
      description: 'Comprehensive coverage of criminal law, evidence, and procedural aspects.',
      duration: '14 Weeks',
      lessons: 28,
      icon: Gavel,
      color: 'from-purple-600 to-purple-400',
      features: ['Criminal Law', 'Evidence', 'Procedure', 'Case Law']
    },
    {
      id: 'leadership',
      title: 'Police Leadership & Ethics',
      description: 'Leadership development and ethical decision making for senior police officers.',
      duration: '10 Weeks',
      lessons: 20,
      icon: Users,
      color: 'from-cyan-600 to-cyan-400',
      features: ['Leadership', 'Ethics', 'Decision Making', 'Crisis Management']
    }
  ];

  const mentors = [
    {
      name: "DIG (Retd.) Mohan Gurung",
      rank: "Former Deputy Inspector General",
      experience: "30 years service",
      specialization: "Police Administration",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400",
      achievements: ["Awarded Police Medal", "Training Director", "Published Author"]
    },
    {
      name: "SSP (Retd.) Anita Shrestha",
      rank: "Former Senior Superintendent",
      experience: "25 years service",
      specialization: "Criminal Investigation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
      achievements: ["Interpol Training", "Forensics Expert", "Case Solver Award"]
    },
    {
      name: "AIG (Retd.) Raj Kumar",
      rank: "Former Additional IGP",
      experience: "35 years service",
      specialization: "Leadership & Strategy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      achievements: ["UN Police Commendation", "Strategy Consultant", "Mentor Award"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30">
      {showBundle && <BundleWindow onClose={() => setShowBundle(false)} service="police" />}

      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/5 via-white to-blue-500/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025151-76194c2d6a57?auto=format&fit=crop&w=2070')] bg-cover bg-center opacity-10"></div>
        
        <div className="section-container relative pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-mono font-semibold text-blue-700 tracking-wider">
                  NEPAL POLICE STAFF COLLEGE
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
                  Police Staff College
                </span>
                <br />
                <span className="text-gray-800">Preparation Program</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Specialized preparation for Nepal Police officers aiming for 
                Staff College selection. Comprehensive curriculum covering 
                police science, criminal law, and leadership development.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn-primary bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  <BookOpen className="w-5 h-5" />
                  View Curriculum
                </button>
                <button className="btn-secondary border-blue-500 text-blue-700 hover:bg-blue-500/10">
                  <Calendar className="w-5 h-5" />
                  Important Dates
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="section-container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                    Core Curriculum
                  </h2>
                  <p className="text-gray-600">
                    Comprehensive police-specific courses
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono tracking-widest uppercase text-blue-500">
                    Total Duration: 36 Weeks
                  </div>
                  <div className="text-sm text-gray-500">Flexible Schedule</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {courses.map((course) => {
                  const CourseIcon = course.icon;
                  return (
                    <motion.div
                      key={course.id}
                      whileHover={{ y: -5 }}
                      className={`relative rounded-2xl border-2 ${selectedCourse === course.id ? 'border-blue-500' : 'border-gray-200'} bg-white p-6 cursor-pointer`}
                      onClick={() => setSelectedCourse(course.id)}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${course.color}/10 w-fit mb-4`}>
                        <CourseIcon className={`w-8 h-8 ${course.color.replace('from-', 'text-').split(' ')[0]}`} />
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {course.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-1 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1 text-gray-500">
                            <FileText className="w-4 h-4" />
                            {course.lessons} lessons
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {course.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs font-medium bg-gray-100 rounded-md text-gray-700"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-gradient-to-r from-blue-700/10 via-blue-500/10 to-blue-300/10 border border-blue-500/20 p-8 mb-8"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      Complete Police Bundle
                    </h3>
                    <p className="text-gray-600 mb-4">
                      All courses plus police-specific case studies, mock tests, 
                      and senior police officer mentorship.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-blue-700">
                        NPR 42,000
                      </div>
                      <div className="text-lg text-gray-500 line-through">
                        NPR 56,000
                      </div>
                      <div className="px-3 py-1 bg-blue-500/20 rounded-full text-sm font-bold text-blue-700">
                        25% OFF
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowBundle(true)}
                    className="btn-primary bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 py-4 text-lg"
                  >
                    <span>View Complete Bundle</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Senior Police Mentors
              </h2>
              
              <div className="space-y-4">
                {mentors.map((mentor, idx) => (
                  <MentorCard key={idx} mentor={mentor} />
                ))}
              </div>
            </section>

            <section className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Police Program Stats
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Success Rate", value: "95%", color: "text-blue-500" },
                  { label: "Case Study Score", value: "89%", color: "text-purple-500" },
                  { label: "Leadership Module", value: "4.8/5", color: "text-cyan-500" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className={`text-lg font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/5 via-white to-blue-500/5 border-t border-gray-200">
        <div className="section-container py-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Advance Your Police Career
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the ranks of successful Police Staff College graduates.
            </p>
            
            <button
              onClick={() => setShowBundle(true)}
              className="btn-primary bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 py-4 text-lg"
            >
              <Shield className="w-6 h-6" />
              Enroll in Police Program
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PolicePage;