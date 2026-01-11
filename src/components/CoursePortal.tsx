// src/components/CoursePortal.tsx

import { useState } from 'react';
import { 
  BookOpen, Clock, Users, ChevronRight, PlayCircle, 
  CheckCircle, Star, Shield, Lock, Download 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// UPDATE: Added description and tags to the interface
interface Course {
  id: string;
  title: string;
  duration: string;
  lessons: number;
  students?: number; // Optional
  rating?: number;   // Optional
  image?: string;    // Optional
  progress?: number; // Optional
  locked?: boolean;  // Optional
  description?: string; // ADDED THIS
  tags?: string[];      // ADDED THIS
}

interface Mentor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;     // Optional
}

interface PortalProps {
  org: string;
  title: string;
  subtitle: string;
  accentColor: string; // We keep it in interface but can ignore in destructuring if unused
  courses: Course[];
  mentors: Mentor[];
}

// UPDATE: Removed 'accentColor' from destructuring to fix unused var error
export default function CoursePortal({ org, title, subtitle, courses, mentors }: PortalProps) {
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* ... (Keep existing header code) ... */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ... (Keep existing tabs code) ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              layoutId={course.id}
              onClick={() => setSelectedCourse(course)}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <BookOpen className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </div>
                {course.locked && <Lock className="w-4 h-4 text-gray-400" />}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              
              {/* FIXED: Added null check for description */}
              <p className="text-gray-500 mt-1 max-w-md text-sm">
                {course.description || "Comprehensive coverage of the syllabus with expert notes."}
              </p>

              {/* FIXED: Added null check and type for tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {course.tags?.map((tag: string) => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>

              {/* ... (Keep rest of the card code) ... */}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}