import { BookOpen, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Course {
  id: string;
  title: string;
  duration: string;
  lessons: number;
  locked?: boolean;
  description?: string;
  tags?: string[];
}

interface PortalProps {
  courses: Course[];
}

export default function CoursePortal({ courses }: PortalProps) {
  // Removed unused state and props

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              layoutId={course.id}
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
              
              <p className="text-gray-500 mt-1 max-w-md text-sm">
                {course.description || "Comprehensive coverage of the syllabus with expert notes."}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {course.tags?.map((tag: string) => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}