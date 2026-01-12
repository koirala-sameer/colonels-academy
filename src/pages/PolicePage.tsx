import { useState } from 'react';
import { Shield } from 'lucide-react';
import BundleWindow from '../components/BundleWindow';

const PolicePage = () => {
  const [showBundle, setShowBundle] = useState(false);

  const courses = [
    {
      id: 'police-1',
      title: 'Inspector Basic Course',
      description: 'Foundation for Police Inspector exam.',
      duration: '10 Weeks',
      lessons: 20,
      icon: Shield,
      color: 'from-blue-600 to-blue-400',
      features: ['Basic Law', 'Physical Training'] 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
        
        {/* Bundle Window Modal */}
        {showBundle && <BundleWindow onClose={() => setShowBundle(false)} service="police" courses={courses} />}

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/5 via-white to-blue-500/5">
            <div className="section-container relative pt-32 pb-20">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Nepal Police Preparation</h1>
                    <p className="text-xl text-gray-600 mb-8">Comprehensive training for Inspector and ASI exams.</p>
                    <button 
                        onClick={() => setShowBundle(true)}
                        className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        View Courses
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PolicePage;