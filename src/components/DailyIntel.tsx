import React from 'react';
import { motion } from 'framer-motion';

const DailyIntel: React.FC = () => {
  const intelItems = [
    { title: "NSP 2080 Updates", category: "Policy", date: "0900 HRS", status: "Critical" },
    { title: "Indo-Pacific Strategy Analysis", category: "Geopolitics", date: "1100 HRS", status: "Active" },
    { title: "Border Security Protocols", category: "Ops", date: "1400 HRS", status: "Review" },
    { title: "UN Peacekeeping Mandate", category: "Global", date: "1600 HRS", status: "Briefing" },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#0F1C15] border-y border-white/5 relative overflow-hidden">
      
      {/* Background World Map (Abstract) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header with Red Pulse */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-ping" aria-hidden="true"></div>
            <h2 className="font-['Oswald'] text-2xl sm:text-3xl text-white uppercase tracking-wider">
                Daily <span className="text-[#D4AF37]">Intel Brief</span>
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent" aria-hidden="true"></div>
        </div>

        {/* Tactical Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {intelItems.map((item, i) => (
                <motion.article 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0F1C15]"
                    tabIndex={0}
                    role="button"
                    aria-label={`Intel brief: ${item.title}, ${item.category}, updated at ${item.date}`}
                >
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <span className="text-[10px] font-['Rajdhani'] font-bold text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-0.5 rounded uppercase tracking-widest">
                            {item.category}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">{item.date}</span>
                    </div>
                    
                    <h3 className="font-['Oswald'] text-lg sm:text-xl text-white mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-3 sm:mt-4">
                        <div 
                          className={`w-1.5 h-1.5 rounded-full ${item.status === 'Critical' ? 'bg-red-500' : item.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}
                          aria-hidden="true"
                        ></div>
                        <span className="text-xs text-gray-300 font-['Inter'] uppercase tracking-wider">{item.status}</span>
                    </div>
                </motion.article>
            ))}
        </div>

        {/* Marquee Ticker - IMPROVED CONTRAST */}
        <div className="mt-8 sm:mt-16 border-t border-b border-white/5 py-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C15] via-transparent to-[#0F1C15] z-10 pointer-events-none"></div>
            <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
                aria-label="Scrolling announcement"
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-gray-400 font-['Rajdhani'] font-bold text-base sm:text-lg uppercase tracking-[0.2em] flex items-center gap-3 sm:gap-4">
                        <span className="text-[#D4AF37] text-xs" aria-hidden="true">///</span> 
                        New Batch Enrolling: Shivapuri 2026 
                        <span className="text-[#D4AF37] text-xs" aria-hidden="true">///</span>
                    </span>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DailyIntel;