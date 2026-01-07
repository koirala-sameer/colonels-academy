import React, { useState, useEffect } from 'react';

const PromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  
  // Initialize timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Check localStorage on component mount
  useEffect(() => {
    const bannerClosed = localStorage.getItem('promoBannerClosed');
    if (bannerClosed === 'true') {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    // Set deadline to 48 hours from now
    const targetDate = new Date().getTime() + (48 * 60 * 60 * 1000) + (15 * 60 * 1000);

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
        handleClose();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      // Save to localStorage
      localStorage.setItem('promoBannerClosed', 'true');
    }, 300);
  };

  if (!isVisible) return null;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    // ✅ OPTIMIZED: Removed 'transition-all', added 'will-change-transform'
    <div className={`
      bg-[#FCD34D] text-[#0F1C15] w-full px-4 py-2 relative 
      border-b border-[#b45309]/10 z-50 font-['Inter'] 
      transition-[transform,opacity] duration-300 ease-out will-change-transform
      ${isClosing ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}
    `}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 xl:gap-6">
        
        {/* 1. Timer */}
        <div 
          className="bg-[#FFFBEB] text-[#0F1C15] px-3 py-1 rounded-md font-mono font-bold text-xs sm:text-sm md:text-base tracking-widest border border-yellow-500/30 shadow-sm whitespace-nowrap tabular-nums"
          role="timer"
          aria-label={`Promotion ends in ${pad(timeLeft.days)} days, ${pad(timeLeft.hours)} hours, ${pad(timeLeft.minutes)} minutes, ${pad(timeLeft.seconds)} seconds`}
        >
          {pad(timeLeft.days)}d : {pad(timeLeft.hours)}h : {pad(timeLeft.minutes)}m : {pad(timeLeft.seconds)}s
        </div>

        {/* 2. Offer Text */}
        <div className="text-center lg:text-left flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <div className="text-xs sm:text-sm leading-tight">
                <span className="font-['Oswald'] font-bold text-sm sm:text-base uppercase">EARLY BIRD:</span>
                <span className="font-medium ml-1">Get <strong className="font-extrabold">50% OFF Pro.</strong></span>
            </div>
            
            <div className="text-xs font-medium flex items-center gap-2">
                <span>Code:</span>
                <span 
                  className="bg-white px-2 py-0.5 rounded border border-yellow-600/20 font-mono font-bold tracking-wide select-all cursor-pointer hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F1C15]"
                  role="button"
                  tabIndex={0}
                  onClick={() => navigator.clipboard.writeText('CADET2026')}
                  onKeyPress={(e) => e.key === 'Enter' && navigator.clipboard.writeText('CADET2026')}
                  aria-label="Copy promotion code CADET2026 to clipboard"
                >
                    CADET2026
                </span>
            </div>
        </div>

        {/* 3. Button */}
        <button 
          className="bg-[#0F1C15] text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#1F3325] hover:shadow-md transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
          aria-label="Join The Colonel's Academy with early bird discount"
        >
          Join Today
        </button>

      </div>

      {/* 4. Close Button */}
      <button 
        onClick={handleClose}
        onKeyPress={(e) => e.key === 'Enter' && handleClose()}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-[#0F1C15]/60 hover:text-[#0F1C15] hover:bg-black/5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F1C15]"
        aria-label="Close promotion banner"
      >
        <i className="fas fa-times text-sm" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default PromoBanner;