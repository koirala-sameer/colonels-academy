import { motion } from 'framer-motion';
import { 
  PlayCircle, Lock, BookOpen, 
  Trophy, Target, FileText, 
  ChevronRight, Clock, Activity 
} from 'lucide-react';

// Mock User State (This would come from your Firebase/Context)
const userType = 'free'; // Change to 'paid' to see the difference

const DashboardHome = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-[#f8f9fa] min-h-screen">
      
      {/* 1. WELCOME HEADER & STATS */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-['Rajdhani'] uppercase tracking-wide">
            Command Center
          </h1>
          <p className="text-gray-500 mt-1">
            Welcome back, <span className="font-bold text-[#0F1C15]">Cpt. Thapa</span>. 
            {userType === 'free' ? ' You are on a specific access pass.' : ' All systems operational.'}
          </p>
        </div>
        <div className="flex gap-4">
           {/* Streak Counter */}
           <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
             <div className="p-1.5 bg-orange-100 rounded-lg">
               <Trophy className="w-4 h-4 text-orange-600" />
             </div>
             <div>
               <div className="text-xs text-gray-500 font-bold uppercase">Streak</div>
               <div className="text-lg font-bold text-gray-900 leading-none">3 Days</div>
             </div>
           </div>
        </div>
      </div>

      {/* 2. "MISSION STATUS" (The Udemy-like Infographic) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#0F1C15] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Activity className="w-3 h-3" />
              Current Objective
            </div>
            <h2 className="text-3xl font-bold">Military History: The Anglo-Nepal War</h2>
            <p className="text-gray-400 max-w-lg">
              You stopped at <span className="text-white font-medium">Battle of Nalapani</span>. 
              {userType === 'free' ? ' Complete the demo to unlock the full campaign.' : ' Continue your analysis of Gen. Gillespie\'s tactics.'}
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md">
               <div className="flex justify-between text-xs font-bold uppercase text-gray-400 mb-2">
                 <span>Course Progress</span>
                 <span>{userType === 'free' ? '5%' : '32%'}</span>
               </div>
               <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-[#D4AF37]" 
                   style={{ width: userType === 'free' ? '5%' : '32%' }} 
                 />
               </div>
            </div>

            <button className="mt-4 px-6 py-3 bg-[#D4AF37] text-[#0F1C15] rounded-xl font-bold flex items-center gap-2 hover:bg-[#F4CA30] transition-colors">
              <PlayCircle className="w-5 h-5" />
              Resume Learning
            </button>
          </div>
          
          {/* Visual Stat Circle (Simplified) */}
          <div className="hidden md:flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-[#D4AF37]/30 flex items-center justify-center relative">
               <div className="text-center">
                 <div className="text-3xl font-bold">{userType === 'free' ? '1' : '12'}</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-widest">Modules</div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* 3. "ACTIVE OPERATIONS" (Course List) - MAIN COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#D4AF37]" />
              Training Modules
            </h3>
          </div>

          <div className="space-y-4">
            {/* MODULE 1: UNLOCKED FOR EVERYONE */}
            <CourseCard 
              title="01. Introduction to Command"
              duration="45 mins"
              status="unlocked"
              progress={100}
            />

            {/* MODULE 2: LOCKED FOR FREE */}
            <CourseCard 
              title="02. Tactical Staff Duties (Basic)"
              duration="90 mins"
              status={userType === 'free' ? 'locked' : 'unlocked'}
              progress={userType === 'free' ? 0 : 45}
            />
             
            {/* MODULE 3: LOCKED FOR FREE */}
            <CourseCard 
              title="03. Intelligence & Surveillance"
              duration="60 mins"
              status={userType === 'free' ? 'locked' : 'unlocked'}
              progress={0}
            />
          </div>
        </div>

        {/* 4. SIDEBAR WIDGETS */}
        <div className="space-y-6">
          
          {/* DAILY INTEL WIDGET */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <div className="flex items-center gap-2 mb-4">
               <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                 <BookOpen className="w-4 h-4" />
               </div>
               <h4 className="font-bold text-gray-900">Quiz of the Day</h4>
             </div>
             <p className="text-sm text-gray-600 mb-4 font-medium">
               Which operation was launched by Nepal Army in 2058 BS?
             </p>
             <div className="space-y-2">
               {['Op Romeo', 'Op Kilo Sierra 2', 'Op Silent'].map((opt, i) => (
                 <button key={i} className="w-full text-left px-3 py-2 text-xs font-bold text-gray-600 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors border border-transparent hover:border-blue-200">
                   {String.fromCharCode(65+i)}. {opt}
                 </button>
               ))}
             </div>
          </div>

          {/* DOCUMENT LIBRARY WIDGET */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
               <FileText className="w-4 h-4 text-gray-400" />
               Documents
             </h4>
             <div className="space-y-3">
               <DocItem title="Syllabus 2081.pdf" locked={false} />
               <DocItem title="Past Papers 2079.pdf" locked={userType === 'free'} />
               <DocItem title="Const. of Nepal.pdf" locked={userType === 'free'} />
             </div>
             {userType === 'free' && (
               <button className="w-full mt-4 py-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider border border-[#D4AF37]/30 rounded-lg hover:bg-[#D4AF37]/5 transition-colors">
                 Unlock Full Library
               </button>
             )}
          </div>

        </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const CourseCard = ({ title, duration, status, progress }: any) => {
  const isLocked = status === 'locked';
  
  return (
    <div className={`group relative p-4 rounded-2xl border transition-all duration-300 ${
      isLocked 
        ? 'bg-gray-50 border-gray-200 opacity-75' 
        : 'bg-white border-gray-100 hover:shadow-md hover:border-[#D4AF37]/30'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            isLocked ? 'bg-gray-200 text-gray-400' : 'bg-green-50 text-green-700'
          }`}>
            {isLocked ? <Lock className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
          </div>
          <div>
            <h4 className={`font-bold ${isLocked ? 'text-gray-500' : 'text-gray-900'}`}>{title}</h4>
            <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {duration}</span>
              {!isLocked && <span className="text-green-600 font-medium">{progress}% Complete</span>}
            </div>
          </div>
        </div>
        
        {isLocked ? (
          <div className="px-3 py-1 bg-gray-200 text-gray-500 text-xs font-bold uppercase rounded-lg">
            Locked
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0F1C15] transition-colors">
            <ChevronRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );
};

const DocItem = ({ title, locked }: { title: string, locked: boolean }) => (
  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer group">
    <div className="flex items-center gap-2">
      <FileText className={`w-4 h-4 ${locked ? 'text-gray-300' : 'text-blue-500'}`} />
      <span className={`text-sm ${locked ? 'text-gray-400' : 'text-gray-600 group-hover:text-gray-900'}`}>{title}</span>
    </div>
    {locked && <Lock className="w-3 h-3 text-gray-300" />}
  </div>
);

export default DashboardHome;