// src/pages/ArmyPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Target, BookOpen, Calendar, Award, Users, 
  Clock, CheckCircle, Star, ChevronRight, PlayCircle,
  FileText, BarChart, Globe, BookMarked
} from 'lucide-react';
import BundleWindow from '../components/BundleWindow';
import MentorCard from '../components/MentorCard';

const ArmyPage = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showBundle, setShowBundle] = useState(false);

  const courses = [
    {
      id: 'military-history',
      title: 'Military History & Strategy',
      description: 'Comprehensive study of military campaigns, strategic thinking, and historical analysis.',
      duration: '12 Weeks',
      lessons: 24,
      icon: BookMarked,
      color: 'from-army-700 to-army-500',
      features: ['Historical Analysis', 'Case Studies', 'Strategic Thinking', 'Exam Patterns']
    },
    {
      id: 'current-affairs',
      title: 'Current Affairs & Security Studies',
      description: 'In-depth analysis of contemporary security issues, geopolitics, and national security.',
      duration: '10 Weeks',
      lessons: 20,
      icon: Globe,
      color: 'from-blue-600 to-blue-400',
      features: ['Security Analysis', 'Geopolitics', 'Policy Studies', 'Weekly Updates']
    },
    {
      id: 'tpp',
      title: 'Tactics & Professional Papers',
      description: 'Advanced tactical studies and professional paper writing for Staff College.',
      duration: '14 Weeks',
      lessons: 28,
      icon: FileText,
      color: 'from-emerald-600 to-emerald-400',
      features: ['Tactical Studies', 'Paper Writing', 'Presentation Skills', 'Peer Review']
    }
  ];

  const mentors = [
    {
      name: "Col. (Retd.) Rajesh Thapa",
      rank: "Former Army Colonel",
      experience: "25 years service",
      specialization: "Military Strategy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400",
      achievements: ["Staff College Gold Medalist", "Published 3 Books", "15+ Years Teaching"]
    },
    {
      name: "Maj. Gen. (Retd.) Sunil Gurung",
      rank: "Former Major General",
      experience: "32 years service",
      specialization: "Operational Planning",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=400",
      achievements: ["Commanded Division", "UN Peacekeeping Vet", "Strategy Consultant"]
    },
    {
      name: "Lt. Col. (Retd.) Anita Rai",
      rank: "Former Lieutenant Colonel",
      experience: "20 years service",
      specialization: "Military History",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400",
      achievements: ["History PhD", "Published Researcher", "Awarded Commendation"]
    }
  ];

  const importantDates = [
    { date: "15 Jan 2024", event: "Application Deadline", status: "Upcoming" },
    { date: "1 Feb 2024", event: "Entrance Exam", status: "Upcoming" },
    { date: "15 Mar 2024", event: "Interview Schedule", status: "Upcoming" },
    { date: "1 Dec 2023", event: "Last Batch Results", status: "Completed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Bundle Window Modal */}
      {showBundle && <BundleWindow onClose={() => setShowBundle(false)} service="army" />}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-army-900/5 via-white to-army-500/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2070')] bg-cover bg-center opacity-10"></div>
        
        <div className="section-container relative pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-army-500/10 border border-army-500/20 mb-6">
                <Shield className="w-4 h-4 text-army-500" />
                <span className="text-sm font-mono font-semibold text-army-700 tracking-wider">
                  NEPAL ARMY STAFF COLLEGE
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-army-900 via-army-700 to-army-500">
                  Army Staff College
                </span>
                <br />
                <span className="text-gray-800">Preparation Program</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Elite preparation program designed by veteran Army officers. 
                Comprehensive curriculum covering Military History, Current Affairs, 
                and Tactical Professional Papers for Staff College success.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  <PlayCircle className="w-5 h-5" />
                  Watch Program Overview
                </button>
                <button className="btn-secondary">
                  <Calendar className="w-5 h-5" />
                  View Schedule
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Courses */}
          <div className="lg:col-span-2">
            {/* Courses Section */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                    Core Curriculum
                  </h2>
                  <p className="text-gray-600">
                    Select individual courses or choose the complete bundle
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono tracking-widest uppercase text-army-500">
                    Total Duration: 36 Weeks
                  </div>
                  <div className="text-sm text-gray-500">24/7 Access Available</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {courses.map((course) => {
                  const Icon = course.icon;
                  return (
                    <motion.div
                      key={course.id}
                      whileHover={{ y: -5 }}
                      className={`relative rounded-2xl border-2 ${selectedCourse === course.id ? 'border-army-500' : 'border-gray-200'} bg-white p-6 cursor-pointer transition-all duration-300`}
                      onClick={() => setSelectedCourse(course.id)}
                    >
                      {selectedCourse === course.id && (
                        <div className="absolute -top-2 -right-2">
                          <CheckCircle className="w-6 h-6 text-army-500 fill-current" />
                        </div>
                      )}
                      
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${course.color}/10 w-fit mb-4`}>
                        <Icon className={`w-8 h-8 ${course.color.replace('from-', 'text-').split(' ')[0]}`} />
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
                            <Clock className="w-4 h-4" />
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

              {/* Bundle CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-gradient-to-r from-army-700/10 via-army-500/10 to-army-300/10 border border-army-500/20 p-8 mb-8"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      Complete Preparation Bundle
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get all three courses plus unlimited mock tests, resources, 
                      and veteran mentorship at a special bundled price.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-army-700">
                        NPR 45,000
                      </div>
                      <div className="text-lg text-gray-500 line-through">
                        NPR 60,000
                      </div>
                      <div className="px-3 py-1 bg-army-500/20 rounded-full text-sm font-bold text-army-700">
                        25% OFF
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowBundle(true)}
                    className="btn-primary px-8 py-4 text-lg"
                  >
                    <span>View Complete Bundle</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    "All 3 Courses",
                    "Unlimited Mock Tests",
                    "Veteran Mentorship",
                    "Certificate"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-army-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Important Dates */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                Important Dates & Deadlines
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {importantDates.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-xl bg-white border border-gray-200 p-6"
                  >
                    <div className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-2">
                      {item.date}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.event}
                    </h4>
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === 'Upcoming' 
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {item.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Results & News */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                Latest Results & News
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Batch 2023 Results Announced",
                    description: "98% of our students successfully cleared the Staff College entrance exam",
                    date: "1 Dec 2023",
                    highlight: true
                  },
                  {
                    title: "New Curriculum Updates",
                    description: "Updated military history syllabus based on latest exam patterns",
                    date: "15 Nov 2023",
                    highlight: false
                  }
                ].map((news, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl border ${news.highlight ? 'border-army-500/30 bg-gradient-to-r from-army-500/5 to-transparent' : 'border-gray-200'} p-6`}
                  >
                    {news.highlight && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-army-500/20 rounded-full mb-4">
                        <Award className="w-4 h-4 text-army-700" />
                        <span className="text-sm font-bold text-army-700">Top Result</span>
                      </div>
                    )}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {news.description}
                    </p>
                    <div className="text-sm text-gray-500">
                      {news.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Mentors & Info */}
          <div className="space-y-8">
            {/* Mentors Section */}
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Veteran Mentors
              </h2>
              
              <div className="space-y-4">
                {mentors.map((mentor, idx) => (
                  <MentorCard key={idx} mentor={mentor} />
                ))}
              </div>
              
              <button className="w-full mt-6 btn-secondary">
                <Users className="w-5 h-5" />
                Meet All Mentors
              </button>
            </section>

            {/* Quick Stats */}
            <section className="rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Program Statistics
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Success Rate", value: "98%", color: "text-army-500" },
                  { label: "Average Score", value: "87%", color: "text-blue-500" },
                  { label: "Completion Rate", value: "95%", color: "text-emerald-500" },
                  { label: "Satisfaction", value: "4.9/5", color: "text-army-gold" }
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

            {/* Resources */}
            <section className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Study Resources
              </h3>
              
              <div className="space-y-3">
                {[
                  { icon: BookOpen, label: "Digital Library", count: "500+ Books" },
                  { icon: FileText, label: "Practice Papers", count: "200+ Sets" },
                  { icon: BarChart, label: "Mock Tests", count: "Unlimited" },
                  { icon: PlayCircle, label: "Video Lectures", count: "150+ Hours" }
                ].map((resource, idx) => {
                  const Icon = resource.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gray-100">
                          <Icon className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="text-gray-700">{resource.label}</span>
                      </div>
                      <span className="text-sm text-gray-500">{resource.count}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-army-900/5 via-white to-army-500/5 border-t border-gray-200">
        <div className="section-container py-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Join the Elite?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your journey towards Staff College success with Nepal's 
              most comprehensive preparation program.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowBundle(true)}
                className="btn-primary px-8 py-4 text-lg"
              >
                <Target className="w-6 h-6" />
                Enroll Now
              </button>
              <button className="btn-secondary px-8 py-4 text-lg">
                <PlayCircle className="w-6 h-6" />
                Schedule Demo
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Limited seats available. Next batch starts February 1, 2024.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArmyPage;