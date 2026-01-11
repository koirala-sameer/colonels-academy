// src/pages/APFPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Shield, Users, Mountain, Crosshair, 
  BookOpen, Calendar, ChevronRight, Globe
} from 'lucide-react';
import BundleWindow from '../components/BundleWindow';
import MentorCard from '../components/MentorCard';

const APFPage = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showBundle, setShowBundle] = useState(false);

  const courses = [
    {
      id: 'border-security',
      title: 'Border Security & Operations',
      description: 'Advanced border security strategies, patrol techniques, and cross-border operations.',
      duration: '14 Weeks',
      lessons: 28,
      icon: Mountain,
      color: 'from-emerald-600 to-emerald-400',
      features: ['Border Security', 'Patrol Techniques', 'Operations', 'Case Studies']
    },
    {
      id: 'special-operations',
      title: 'Special Operations & Tactics',
      description: 'Specialized operations planning, tactical deployment, and crisis response strategies.',
      duration: '12 Weeks',
      lessons: 24,
      icon: Crosshair,
      color: 'from-amber-600 to-amber-400',
      features: ['Special Ops', 'Tactical Planning', 'Crisis Response', 'Drills']
    },
    {
      id: 'apf-administration',
      title: 'APF Administration & Law',
      description: 'APF organization, administrative procedures, and applicable laws and regulations.',
      duration: '10 Weeks',
      lessons: 20,
      icon: Shield,
      color: 'from-red-600 to-red-400',
      features: ['Administration', 'APF Laws', 'Procedures', 'Regulations']
    }
  ];

  const mentors = [
    {
      name: "Commandant (Retd.) Ramesh Thapa",
      rank: "Former APF Commandant",
      experience: "28 years service",
      specialization: "Border Security",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400",
      achievements: ["Border Security Expert", "UN Mission Veteran", "Training Director"]
    },
    {
      name: "Deputy Commandant (Retd.) Sunita Rai",
      rank: "Former Deputy Commandant",
      experience: "22 years service",
      specialization: "Special Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400",
      achievements: ["Special Ops Commendation", "Training Award", "Women Leadership"]
    },
    {
      name: "Senior Officer (Retd.) Kumar Basnet",
      rank: "Former Senior APF Officer",
      experience: "26 years service",
      specialization: "APF Administration",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?auto=format&fit=crop&w=400",
      achievements: ["Administration Expert", "Policy Developer", "Mentor Award"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-amber-50/30">
      {showBundle && <BundleWindow onClose={() => setShowBundle(false)} service="apf" />}

      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900/5 via-white to-emerald-500/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025151-76194c2d6a57?auto=format&fit=crop&w=2070')] bg-cover bg-center opacity-10"></div>
        
        <div className="section-container relative pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Award className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-mono font-semibold text-emerald-700 tracking-wider">
                  ARMED POLICE FORCE STAFF COLLEGE
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-500">
                  APF Staff College
                </span>
                <br />
                <span className="text-gray-800">Preparation Program</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Specialized preparation for Armed Police Force officers focusing on 
                border security, special operations, and APF-specific administration.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn-primary bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
                  <BookOpen className="w-5 h-5" />
                  View Curriculum
                </button>
                <button className="btn-secondary border-emerald-500 text-emerald-700 hover:bg-emerald-500/10">
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
                    APF-specific courses and training modules
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono tracking-widest uppercase text-emerald-500">
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
                      className={`relative rounded-2xl border-2 ${selectedCourse === course.id ? 'border-emerald-500' : 'border-gray-200'} bg-white p-6 cursor-pointer`}
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
                            <BookOpen className="w-4 h-4" />
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
                className="rounded-2xl bg-gradient-to-r from-emerald-700/10 via-emerald-500/10 to-emerald-300/10 border border-emerald-500/20 p-8 mb-8"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      Complete APF Bundle
                    </h3>
                    <p className="text-gray-600 mb-4">
                      All APF-specific courses plus border security simulations, 
                      special operations training, and veteran APF mentorship.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-emerald-700">
                        NPR 40,000
                      </div>
                      <div className="text-lg text-gray-500 line-through">
                        NPR 53,000
                      </div>
                      <div className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm font-bold text-emerald-700">
                        25% OFF
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowBundle(true)}
                    className="btn-primary bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 px-8 py-4 text-lg"
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
                APF Veteran Mentors
              </h2>
              
              <div className="space-y-4">
                {mentors.map((mentor, idx) => (
                  <MentorCard key={idx} mentor={mentor} />
                ))}
              </div>
            </section>

            <section className="rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                APF Program Stats
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Success Rate", value: "96%", color: "text-emerald-500" },
                  { label: "Border Security Module", value: "91%", color: "text-amber-500" },
                  { label: "Special Ops Training", value: "4.7/5", color: "text-red-500" }
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

      <div className="bg-gradient-to-r from-emerald-900/5 via-white to-emerald-500/5 border-t border-gray-200">
        <div className="section-container py-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Excel in APF Career
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Prepare for APF Staff College with specialized border security and operations training.
            </p>
            
            <button
              onClick={() => setShowBundle(true)}
              className="btn-primary bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 px-8 py-4 text-lg"
            >
              <Award className="w-6 h-6" />
              Enroll in APF Program
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default APFPage;