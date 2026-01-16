import { useState } from 'react'; // Removed 'React'
import { motion } from 'framer-motion';
import { 
  PlayCircle, Lock, // Removed 'BookOpen'
  Target, FileText, 
  ChevronRight, Clock, Activity,
  Shield, AlertTriangle, ArrowRight,
  CheckCircle2
} from 'lucide-react';

// Types
type WingType = 'army' | 'police' | 'apf' | null;
type UserType = 'free' | 'paid';

const DashboardHome = () => {
  const [selectedWing, setSelectedWing] = useState<WingType>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userType] = useState<UserType>('free'); 

  // --- STATE 1: THE WAR ROOM (SELECTION) ---
  if (!selectedWing) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] pt-28 pb-12 px-4 flex flex-col items-center">
        
        <div className="max-w-4xl w-full text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            HQ Authorization Required
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F1C15] font-['Rajdhani'] uppercase">
            Identify Your Command
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select your service branch to initialize your dashboard configuration and load the relevant tactical curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
          <WingSelectCard 
            title="Nepal Army" 
            code="NA-SC"
            color="#00693E"
            onClick={() => setSelectedWing('army')}
          />
          <WingSelectCard 
            title="Nepal Police" 
            code="NP-INS"
            color="#1E3A8A"
            onClick={() => setSelectedWing('police')}
          />
          <WingSelectCard 
            title="Armed Police" 
            code="APF-EF"
            color="#991B1B"
            onClick={() => setSelectedWing('apf')}
          />
        </div>
        
        <p className="mt-12 text-sm text-gray-400 font-medium">
          *You can switch wings later in your profile settings.
        </p>
      </div>
    );
  }

  // --- STATE 2: THE COMMAND CONSOLE ---
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      
      {/* 1. WELCOME HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
               {selectedWing === 'army' ? 'NA Headquarters' : selectedWing === 'police' ? 'NP Headquarters' : 'APF Headquarters'} Online
             </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 font-['Rajdhani'] uppercase tracking-wide leading-none">
            {selectedWing} Command Center
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Welcome back, <span className="font-bold text-[#0F1C15]">Officer</span>. 
            {userType === 'free' ? ' You are viewing the trial protocol.' : ' All systems operational.'}
          </p>
        </div>
        
        {/* Status Widget */}
        <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-2xl shadow-sm border border-gray-100">
           <div className={`p-3 rounded-xl ${userType === 'free' ? 'bg-orange-50' : 'bg-green-50'}`}>
             {userType === 'free' ? <AlertTriangle className="w-6 h-6 text-orange-600" /> : <Shield className="w-6 h-6 text-green-600" />}
           </div>
           <div>
             <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Account Status</div>
             <div className={`text-xl font-bold leading-none ${userType === 'free' ? 'text-orange-600' : 'text-green-700'}`}>
               {userType === 'free' ? 'Cadet (Trial)' : 'Commissioned'}
             </div>
           </div>
        </div>
      </div>

      {/* 2. MISSION STATUS */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#0F1C15] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-[#0F1C15]/20 group"
      >
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(${getThemeColor(selectedWing)} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-wider">
              <Activity className="w-3 h-3" />
              Current Objective
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-['Rajdhani'] uppercase leading-tight">
              {getContentForWing(selectedWing).title}
            </h2>
            
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              {getContentForWing(selectedWing).description}
            </p>
            
            <button 
              className="mt-2 px-8 py-4 text-[#0F1C15] rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg"
              style={{ backgroundColor: getThemeColor(selectedWing) }}
            >
              <PlayCircle className="w-5 h-5" />
              Resume Learning
            </button>
          </div>
          
          <div className="hidden md:flex justify-center relative">
            <div className="w-40 h-40 rounded-full border-4 border-white/10 flex items-center justify-center relative">
               <div className="text-center z-10">
                 <div className="text-4xl font-bold text-white font-['Rajdhani']">1</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Module Unlocked</div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 3. COURSE LIST */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Target className="w-5 h-5" style={{ color: getThemeColor(selectedWing) }} />
              Training Modules
            </h3>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phase 1: Basic</span>
          </div>

          <div className="space-y-4">
            <CourseCard 
              index="01"
              title={getContentForWing(selectedWing).module1}
              duration="45 mins"
              status="unlocked"
              progress={100}
              color={getThemeColor(selectedWing)}
            />
            <CourseCard 
              index="02"
              title={getContentForWing(selectedWing).module2}
              duration="90 mins"
              status="locked"
              progress={0}
              color={getThemeColor(selectedWing)}
            />
            <CourseCard 
              index="03"
              title={getContentForWing(selectedWing).module3}
              duration="60 mins"
              status="locked"
              progress={0}
              color={getThemeColor(selectedWing)}
            />
          </div>
        </div>

        {/* 4. SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Lock className="w-24 h-24" style={{ color: getThemeColor(selectedWing) }} />
               </div>
               
               <div className="relative z-10">
                 <h4 className="font-bold text-gray-900 text-lg mb-2">Restricted Access</h4>
                 <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                   You are viewing the Free Tier. Unlock the full {selectedWing?.toUpperCase()} curriculum, live tests, and mentor chat.
                 </p>
                 <button 
                   className="w-full py-3 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-all shadow-md"
                   style={{ backgroundColor: getThemeColor(selectedWing) }}
                 >
                   Upgrade to Officer Rank
                 </button>
               </div>
            </div>
            
            {/* DOCUMENT LIBRARY */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
               <FileText className="w-4 h-4 text-gray-400" />
               Classified Documents
             </h4>
             <div className="space-y-1">
               <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer group transition-colors">
                 <div className="flex items-center gap-3">
                   <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600"><FileText className="w-4 h-4" /></div>
                   <span className="text-sm font-medium text-gray-700">Syllabus 2081.pdf</span>
                 </div>
                 <ChevronRight className="w-3 h-3 text-gray-300" />
               </div>
               <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer group transition-colors">
                 <div className="flex items-center gap-3">
                   <div className="p-1.5 rounded-lg bg-gray-100 text-gray-400"><FileText className="w-4 h-4" /></div>
                   <span className="text-sm font-medium text-gray-400">Past Papers 2079.pdf</span>
                 </div>
                 <Lock className="w-3 h-3 text-gray-300" />
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- HELPER FUNCTIONS ---
const getThemeColor = (wing: WingType) => {
  switch(wing) {
    case 'army': return '#D4AF37'; // Gold
    case 'police': return '#1E3A8A'; // Blue
    case 'apf': return '#D97706'; // Amber
    default: return '#D4AF37';
  }
}

const getContentForWing = (wing: WingType) => {
  switch(wing) {
    case 'police': return {
      title: "Investigative Protocol",
      description: "Reviewing the new Criminal Code 2074 changes regarding evidence collection.",
      module1: "Intro to Criminal Code 2074",
      module2: "Crime Scene Management (Adv)",
      module3: "Human Rights & Custody"
    };
    case 'apf': return {
      title: "Border Security Mandate",
      description: "Analysis of cross-border counter-terrorism operations and legal frameworks.",
      module1: "APF Mandate & Operations",
      module2: "Industrial Security Tactics",
      module3: "Disaster Management Ops"
    };
    default: return { // Army
      title: "The Anglo-Nepal War",
      description: "Tactical analysis of the Battle of Nalapani and General Gillespie's failure.",
      module1: "Intro to Command Structure",
      module2: "Tactical Staff Duties",
      module3: "Intelligence & Surveillance"
    };
  }
}

// --- HELPER COMPONENTS ---
const WingSelectCard = ({ title, code, color, onClick }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl cursor-pointer transition-all group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
      <Shield className="w-32 h-32" style={{ color }} />
    </div>
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${color}10` }}>
       <Shield className="w-8 h-8" style={{ color }} />
    </div>
    <div className="text-xs font-bold text-gray-400 mb-1">{code}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <div className="flex items-center gap-2 text-sm font-medium" style={{ color }}>
      Initialize <ArrowRight className="w-4 h-4" />
    </div>
  </motion.div>
)

const CourseCard = ({ index, title, duration, status, progress, color }: any) => {
  const isLocked = status === 'locked';
  return (
    <div className={`group relative p-5 rounded-2xl border transition-all duration-300 ${
      isLocked ? 'bg-white border-gray-100 opacity-80' : 'bg-white border-gray-100 hover:shadow-lg hover:border-gray-200 transform hover:-translate-y-0.5'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold font-['Rajdhani'] ${
            isLocked ? 'bg-gray-100 text-gray-400' : 'bg-[#0F1C15] text-white'
          }`}>
            {index}
          </div>
          <div>
            <h4 className={`font-bold text-lg ${isLocked ? 'text-gray-400' : 'text-gray-900'}`}>{title}</h4>
            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1.5 font-medium">
              <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md"><Clock className="w-3 h-3" /> {duration}</span>
              {!isLocked && <span className="text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> {progress}% Complete</span>}
            </div>
          </div>
        </div>
        {isLocked ? (
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider rounded-lg">
            <Lock className="w-3 h-3" /> Locked
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-md" style={{ backgroundColor: color }}>
            <ChevronRight className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;