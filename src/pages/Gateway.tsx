import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Target, BookOpen, ChevronRight, Star, Download, Calendar, ChevronDown, X, Trophy } from 'lucide-react';

// --- PROMO BANNER COMPONENT ---
const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const bannerClosed = localStorage.getItem('gatewayBannerClosed');
    if (bannerClosed === 'true') setIsVisible(false);
  }, []);

  useEffect(() => {
    const targetDate = new Date().getTime() + (48 * 60 * 60 * 1000);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('gatewayBannerClosed', 'true');
    }, 300);
  };

  if (!isVisible) return null;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`
      bg-[#FCD34D] text-[#0F1C15] w-full px-4 py-2 relative 
      border-b border-[#b45309]/10 z-50 font-sans
      transition-[transform,opacity] duration-300 ease-out will-change-transform
      ${isClosing ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}
    `}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 text-center">
        <div className="bg-[#FFFBEB] text-[#0F1C15] px-3 py-1 rounded-md font-mono font-bold text-xs sm:text-sm tracking-widest border border-yellow-500/30 shadow-sm whitespace-nowrap">
          {pad(timeLeft.days)}d : {pad(timeLeft.hours)}h : {pad(timeLeft.minutes)}m : {pad(timeLeft.seconds)}s
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center">
            <div className="text-center flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span className="font-bold text-sm sm:text-base uppercase tracking-wide">ACADEMIC EXCELLENCE:</span>
                <span className="font-medium">Led by <strong className="font-extrabold">Former Chiefs & Toppers</strong></span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium">
                <span className="bg-white px-2 py-0.5 rounded border border-yellow-600/20 font-bold tracking-wide text-[#0F1C15] text-center uppercase">
                    Rank #1 In Nepal
                </span>
            </div>
        </div>
        <button className="bg-[#0F1C15] text-white px-4 py-1 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#1F3325] shadow-sm transition-all duration-200 whitespace-nowrap">
          Meet The Faculty
        </button>
      </div>
      <button onClick={handleClose} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#0F1C15]/60 hover:text-[#0F1C15] hover:bg-black/5 rounded-full transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

// --- MAIN GATEWAY COMPONENT ---
const Gateway = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const topographyPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E")`;

  const services = [
    {
      id: 1,
      title: "Nepal Army",
      subtitle: "Staff College Preparation",
      logoImage: "/images/armycard.jpg",
      color: "from-army-700 to-army-500",
      solidColor: "bg-[#4F772D]",
      textAccent: "text-[#4F772D]",
      stats: "98% Success Rate",
      route: "/courses/army"
    },
    {
      id: 2,
      title: "Nepal Police",
      subtitle: "Staff College Program",
      logoImage: "/images/policecard.jpg",
      color: "from-blue-600 to-blue-400",
      solidColor: "bg-[#0B57D0]",
      textAccent: "text-[#0B57D0]",
      stats: "95% Selection Rate",
      route: "/courses/police"
    },
    {
      id: 3,
      title: "A.P.F.",
      subtitle: "Staff College Course",
      logoImage: "/images/apfcard.jpg",
      color: "from-emerald-600 to-emerald-400",
      solidColor: "bg-[#059669]",
      textAccent: "text-[#059669]",
      stats: "96% Success Rate",
      route: "/courses/apf"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    hover: {
      y: -15,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }
  };

  const scrollToCards = () => {
    const cardsSection = document.getElementById('service-cards');
    cardsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden font-sans">
      
      {/* --- BANNER AT TOP --- */}
      <PromoBanner />

      {/* --- BACKGROUND LAYER --- */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: topographyPattern }}
      ></div>
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-gray-200 to-transparent blur-[120px] pointer-events-none opacity-60"></div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/5 via-white to-gray-500/5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2070')] bg-cover bg-center opacity-10"></div>
          
          {/* UPDATED PADDING: pt-36 pb-28 (Slightly taller) */}
          <div className="section-container relative pt-36 pb-28">
            <div className="max-w-4xl text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4AF37]/40 mb-8 shadow-sm">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-mono font-bold text-gray-800 tracking-wider uppercase">
                    The Colonel's Academy
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-[0.9]">
                  <span className="block text-[#1F1F1F]">
                    STAFF COLLEGE
                  </span>
                  <span className="block mt-2 text-[#D4AF37] tracking-widest">
                    PREPARATION
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl font-light">
                  Exclusive programs for <span className="font-bold text-gray-900">Army</span>,{' '}
                  <span className="font-bold text-gray-900">Police</span>, and{' '}
                  <span className="font-bold text-gray-900">APF</span> officers
                </p>

                <div className="flex flex-col items-start gap-8">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-[#D4AF37] fill-current" />
                    ))}
                    <span className="text-sm text-gray-900 font-mono font-bold uppercase tracking-widest ml-3 border-b border-gray-200 pb-0.5">
                      TRUSTED BY 500+ OFFICERS
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* --- TESLA-STYLE POINTER --- */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
              onClick={scrollToCards}
            >
               <motion.div
                 animate={{ y: [0, 5, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               >
                 <ChevronDown className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors" />
               </motion.div>
            </motion.div>

          </div>
        </div>

        {/* --- SERVICE CARDS (With Centered Header) --- */}
        <div id="service-cards" className="relative z-10 mt-12 pb-24">
          
          {/* CENTERED HEADER FOR CARDS */}
          <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center gap-4 opacity-90">
                <div className="h-px w-12 bg-gray-300"></div>
                <span className="text-xl font-['Rajdhani'] font-bold uppercase tracking-[0.25em] text-[#0F1C15]">
                   SELECT YOUR COMMAND
                </span>
                <div className="h-px w-12 bg-gray-300"></div>
             </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 w-[96%] max-w-[2000px] mx-auto px-0"
          >
            {services.map((service) => {
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group cursor-pointer min-h-[650px] flex"
                  onClick={() => navigate(service.route)}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-[2.5rem] opacity-0 group-hover:opacity-30 blur-2xl transition duration-700`}></div>
                  <div className="relative w-full bg-white rounded-[2.5rem] border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-end">
                    <div className="absolute inset-0 z-0">
                       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-10 pointer-events-none"></div>
                       <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out transform group-hover:scale-110">
                          <img src={service.logoImage} alt="" className="w-[85%] h-[85%] object-contain opacity-10 grayscale group-hover:opacity-20 group-hover:grayscale-0 transition-all duration-700" />
                       </div>
                       <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
                    </div>
                    <div className="relative z-20 p-14 flex flex-col h-full justify-end">
                      <div className="absolute top-12 left-12 right-12 flex justify-between items-start">
                         <div className="p-4 bg-[#F5F5F7] rounded-3xl border border-gray-200 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                            <Shield className={`w-12 h-12 text-gray-400 group-hover:${service.textAccent} transition-colors duration-300`} />
                         </div>
                         <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gray-100">
                            <Star className="w-5 h-5 fill-current text-[#D4AF37]" />
                            <span className="text-sm font-bold font-mono text-gray-600 tracking-wider">{service.stats}</span>
                         </div>
                      </div>
                      <div className="transform group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                        <h3 className="text-6xl lg:text-7xl font-display font-bold text-[#1F1F1F] mb-4 leading-[0.9] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                          {service.title}
                        </h3>
                        <p className="text-2xl font-bold text-gray-500 font-['Rajdhani'] uppercase tracking-[0.15em]">
                          {service.subtitle}
                        </p>
                      </div>
                      <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-out delay-75">
                        <div className="pt-10">
                          <button className={`w-full py-6 px-8 rounded-3xl ${service.solidColor} text-white font-bold font-mono tracking-widest uppercase flex items-center justify-center gap-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform translate-y-4 group-hover:translate-y-0`}>
                            <span className="text-xl">Access Portal</span>
                            <ChevronRight className="w-8 h-8" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {hoveredCard === service.id && (
                      <div className="absolute inset-0 border-[4px] border-[#D4AF37]/20 rounded-[2.5rem] pointer-events-none z-30"></div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* --- NEXT BATCH INFO (FOOTER) --- */}
        <div className="bg-gradient-to-r from-gray-900/5 via-white to-gray-500/5 mt-0 border-b border-gray-200">
          <div className="section-container py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4AF37]/50 shadow-sm mb-6">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-['Rajdhani'] font-bold text-[#1F1F1F] tracking-widest uppercase">
                  NEXT BATCH STARTS FEB 1, 2024
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#1F1F1F] mb-4">
                Limited Seats Available
              </h3>

              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Each service program has limited capacity to ensure personalized attention and mentorship.
                Early enrollment recommended.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-3 rounded-xl border-2 border-[#1F1F1F] text-[#1F1F1F] font-mono font-bold uppercase tracking-wider hover:bg-[#1F1F1F] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
                <button className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#D4AF37] text-[#0F1C15] font-mono font-bold uppercase tracking-wider hover:bg-[#bfa14f] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  View Program Schedule
                </button>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gateway;