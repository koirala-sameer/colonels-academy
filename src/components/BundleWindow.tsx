import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Shield, Star, Lock } from 'lucide-react';

interface Props {
  onClose: () => void;
  service?: string; // e.g., 'army'
  courses: any[];
}

const BundleWindow: React.FC<Props> = ({ onClose, courses }) => {
  
  // Calculate pricing
  const subtotal = courses.reduce((acc, curr) => acc + curr.price, 0);
  const discount = 3000; // Bundle saving
  const total = subtotal - discount;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
      
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1C15]/60 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        className="relative w-full max-w-2xl bg-white rounded-t-[2.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        
        {/* Header */}
        <div className="bg-[#1F1F1F] text-white p-8 relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4F772D] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Star className="w-3 h-3 fill-current" /> Best Value
              </div>
              <h2 className="text-3xl font-bold">Complete Command Bundle</h2>
              <p className="text-gray-400 mt-1">Everything you need to secure your rank.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Scroll */}
        <div className="overflow-y-auto p-8 space-y-8">
          
          {/* List of items */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Included Modules</h3>
            {courses.map((course, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#4F772D]">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1F1F1F]">{course.title}</div>
                    <div className="text-xs text-gray-500">{course.subtitle}</div>
                  </div>
                </div>
                <div className="font-mono font-medium text-gray-600">
                  NPR {course.price.toLocaleString()}
                </div>
              </div>
            ))}
            
            {/* Bonus Item */}
            <div className="flex items-center justify-between p-4 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0F1C15]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1F1F1F]">Unlimited Mock Tests</div>
                    <div className="text-xs text-yellow-700 font-bold uppercase">Bonus Content</div>
                  </div>
                </div>
                <div className="font-mono font-bold text-[#4F772D] text-sm">FREE</div>
              </div>
          </div>

          {/* Pricing Calculation */}
          <div className="border-t border-gray-100 pt-6 space-y-3">
             <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-mono">NPR {subtotal.toLocaleString()}</span>
             </div>
             <div className="flex justify-between text-[#4F772D] font-medium">
                <span>Bundle Discount</span>
                <span className="font-mono">- NPR {discount.toLocaleString()}</span>
             </div>
             <div className="flex justify-between items-end pt-2">
                <span className="text-xl font-bold text-[#1F1F1F]">Total</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-[#1F1F1F] font-mono">NPR {total.toLocaleString()}</span>
                  <div className="text-xs text-gray-400">Including all taxes</div>
                </div>
             </div>
          </div>

        </div>

        {/* Sticky Footer Action */}
        <div className="p-8 pt-0 mt-auto">
           <button className="w-full py-4 bg-[#1F1F1F] text-white rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xl">
              <Lock className="w-5 h-5" />
              SECURE ENROLLMENT
           </button>
           <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
             <Shield className="w-3 h-3" /> Secure payment via eSewa / Khalti / ConnectIPS
           </p>
        </div>

      </motion.div>
    </div>
  );
};

export default BundleWindow;