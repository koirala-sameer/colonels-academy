import React, { memo, useState, useEffect } from 'react';

// Live Clock Component for the Strip
const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="font-mono font-bold text-gray-500">
      {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} HRS
    </span>
  );
};

// Memoize the Marquee Item
const MarqueeItem = memo(() => (
  <span className="text-gray-600 font-['Rajdhani'] font-bold text-xs sm:text-sm uppercase tracking-[0.15em] flex items-center gap-4 shrink-0">
    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
    <span className="text-gray-900">Shivapuri Intake 2026:</span> 
    <span>Physical Assessment Standards Updated</span> 
    <span className="text-gray-300">|</span>
  </span>
));

const DailyIntel: React.FC = () => {
  // 1. FEATURED STORY
  const featuredIntel = {
    headline: "NSP 2080 Policy Shift: Impact on Officer Cadets",
    category: "STRATEGIC UPDATE",
    time: "09:00",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800",
    priority: "CRITICAL",
    excerpt: "Headquarters has released updated protocols for the selection board. Candidates must review the new physical standards immediately."
  };

  // 2. OFFICIAL NOTICES
  const notices = [
    { id: 1, type: 'OPERATIONAL', title: 'Final Selection List: Shivapuri Batch', date: '15 Nov', status: 'ACTIVE', priority: 'HIGH' },
    { id: 2, type: 'ACADEMIC', title: 'Updated Syllabus Module: Indo-Pacific', date: '14 Nov', status: 'PUBLISHED', priority: 'MEDIUM' },
    { id: 3, type: 'ADMINISTRATIVE', title: 'Winter Camp Logistics Schedule', date: '13 Nov', status: 'UPDATED', priority: 'LOW' },
    { id: 4, type: 'RESULT', title: 'Mock Test Series A: Performance Report', date: '12 Nov', status: 'RELEASED', priority: 'HIGH' },
  ];

  // 3. SIDEBAR DATA
  const quickLinks = [
    { label: "Download Syllabus 2081", icon: "fa-file-download", color: "text-blue-700 bg-blue-50" },
    { label: "Past Paper Archive", icon: "fa-history", color: "text-amber-700 bg-amber-50" },
    { label: "Medical Standards", icon: "fa-heartbeat", color: "text-emerald-700 bg-emerald-50" },
  ];

  const deadlines = [
    { title: 'Application Close', date: 'Dec 15', status: 'CLOSING' },
    { title: 'Entrance Exam', date: 'Jan 05', status: 'UPCOMING' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-gray-200 relative overflow-hidden">
      
      {/* 1. INTERNAL STYLE: GPU Acceleration */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gpu-marquee {
          display: flex;
          width: max-content;
          animation: scroll-left 50s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        .marquee-container:hover .gpu-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* 2. BACKGROUND: Clean White Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* --- CENTERED HEADER (Standardized) --- */}
        <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span className="font-['Rajdhani'] font-bold text-xs uppercase tracking-[0.2em] text-[#0F1C15]">
                    Live Intelligence
                </span>
            </div>
            
            <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1C15] leading-tight mb-2">
                Command <span className="text-[#D4AF37]">Center.</span>
            </h2>
        </div>

        {/* --- THE "NEAT CLEAN STRIP" (Useful Status Bar) --- */}
        <div className="w-full max-w-7xl mx-auto mb-10 bg-gray-50 border-y border-gray-200 flex flex-col md:flex-row items-stretch md:items-center text-xs font-['Rajdhani'] uppercase tracking-wider">
            
            {/* Left: Station Info */}
            <div className="px-4 py-2 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between md:justify-start gap-4 bg-gray-100/50 md:w-auto whitespace-nowrap">
                <div className="flex items-center gap-2">
                    <i className="fas fa-globe-asia text-[#D4AF37]"></i>
                    <span className="font-bold text-[#0F1C15]">HQ: Kathmandu</span>
                </div>
                <div className="w-px h-4 bg-gray-300 hidden md:block"></div>
                <LiveClock />
            </div>

            {/* Center: Live Ticker (The "Useful" Part) */}
            <div className="flex-1 overflow-hidden relative py-2 md:py-0 bg-white">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
                <div className="gpu-marquee flex items-center gap-12 whitespace-nowrap">
                    {[...Array(5)].map((_, i) => (
                        <MarqueeItem key={i} />
                    ))}
                </div>
            </div>

            {/* Right: Status Indicator */}
            <div className="px-4 py-2 border-t md:border-t-0 md:border-l border-gray-200 flex items-center justify-center gap-2 bg-gray-100/50 whitespace-nowrap">
                <span className="text-gray-500 font-bold">System Status:</span>
                <span className="text-green-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Normal
                </span>
            </div>
        </div>

        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: NEWS BULLETIN (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* A. FEATURED STORY */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                    <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
                        <div className="w-full sm:w-1/3 aspect-video sm:aspect-square bg-gray-100 rounded-lg overflow-hidden relative border border-gray-100">
                             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <i className="fas fa-newspaper text-gray-300 text-3xl"></i>
                             </div>
                             {featuredIntel.image && <img src={featuredIntel.image} alt="News" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />}
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-2 py-1 bg-red-50 text-red-700 text-[10px] font-['Rajdhani'] font-bold uppercase tracking-widest border border-red-100 rounded">
                                    {featuredIntel.priority}
                                </span>
                                <span className="text-xs font-mono text-gray-400 font-bold">{featuredIntel.time} HRS</span>
                            </div>
                            <h3 className="font-['Oswald'] text-2xl sm:text-3xl text-[#0F1C15] font-bold leading-tight mb-3 group-hover:text-[#D4AF37] transition-colors">
                                {featuredIntel.headline}
                            </h3>
                            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                                {featuredIntel.excerpt}
                            </p>
                            <span className="text-xs font-['Rajdhani'] font-bold text-[#0F1C15] uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read Full Briefing <i className="fas fa-arrow-right text-[#D4AF37]"></i>
                            </span>
                        </div>
                    </div>
                </div>

                {/* B. OFFICIAL NOTICES */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-gray-50 px-5 py-3 flex justify-between items-center border-b border-gray-200">
                        <h3 className="font-['Rajdhani'] font-bold text-[#0F1C15] text-sm uppercase tracking-wider flex items-center gap-2">
                            <i className="fas fa-list-ul text-[#D4AF37]"></i> Official Notice Board
                        </h3>
                        <span className="text-[10px] font-mono text-gray-400">ID: HQ-2024-X</span>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {notices.map((notice) => (
                            <div key={notice.id} className="px-5 py-4 hover:bg-gray-50 transition-colors group cursor-pointer flex items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-[10px] font-bold px-1.5 rounded ${notice.type === 'OPERATIONAL' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>
                                            {notice.type}
                                        </span>
                                        <span className="text-[10px] text-gray-400 font-mono">{notice.date}</span>
                                    </div>
                                    <h4 className="font-['Oswald'] text-base text-[#0F1C15] group-hover:text-[#D4AF37] transition-colors">
                                        {notice.title}
                                    </h4>
                                </div>
                                <i className="fas fa-chevron-right text-xs text-gray-300 group-hover:text-[#D4AF37]"></i>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* RIGHT COLUMN: TACTICAL SIDEBAR */}
            <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* Quick Access */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
                         <i className="fas fa-bolt text-[#D4AF37]"></i>
                         <h3 className="font-['Rajdhani'] font-bold text-[#0F1C15] text-sm uppercase tracking-wider">
                            Quick Access
                         </h3>
                    </div>
                    <div className="space-y-3">
                        {quickLinks.map((link, idx) => (
                            <button key={idx} className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all group text-left">
                                <div className={`w-8 h-8 rounded-md ${link.color} flex items-center justify-center text-sm`}>
                                    <i className={`fas ${link.icon}`}></i>
                                </div>
                                <span className="font-['Oswald'] text-[#0F1C15] text-sm font-medium group-hover:text-[#D4AF37] transition-colors">
                                    {link.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Deadlines Panel */}
                <div className="bg-[#0F1C15] rounded-xl p-5 text-white shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37]/10 rounded-bl-full"></div>
                    <div className="flex items-center gap-2 mb-4 relative z-10">
                         <i className="fas fa-hourglass-half text-[#D4AF37]"></i>
                         <h3 className="font-['Rajdhani'] font-bold text-white text-sm uppercase tracking-wider">
                            Mission Deadlines
                         </h3>
                    </div>
                    <div className="space-y-4 relative z-10">
                        {deadlines.map((item, idx) => (
                             <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0">
                                <div>
                                    <p className="font-['Oswald'] text-sm tracking-wide">{item.title}</p>
                                    <p className="text-xs text-gray-400 font-mono">{item.date}</p>
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.status === 'CLOSING' ? 'bg-red-500 text-white' : 'bg-white/10 text-gray-300'}`}>
                                    {item.status}
                                </span>
                             </div>
                        ))}
                    </div>
                </div>

                {/* Today's Briefing Widget */}
                <div className="bg-[#D4AF37] rounded-xl p-5 text-[#0F1C15] shadow-sm text-center">
                    <p className="font-['Rajdhani'] font-bold text-xs uppercase tracking-widest opacity-80 mb-1">
                        Active Session
                    </p>
                    <h3 className="font-['Oswald'] text-2xl font-bold leading-none mb-2">1400 HRS</h3>
                    <p className="font-sans text-sm font-medium leading-tight mb-4">
                        Staff College Interview Techniques
                    </p>
                    <button className="w-full py-2 bg-[#0F1C15] text-white rounded font-['Rajdhani'] text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#0F1C15] transition-colors">
                        Join Now
                    </button>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};

export default DailyIntel;