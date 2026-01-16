import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight, Shield } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<'signin' | 'signup'>('signin');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#000000]/60 backdrop-blur-sm cursor-pointer"
        />

        {/* MODAL WINDOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-6xl h-auto md:h-[650px] bg-[#f6f7f8] rounded-none md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* CLOSE BUTTON */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white hover:bg-gray-100 text-gray-500 hover:text-black transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {/* -------------------------------------------------- */}
          {/* LEFT PANEL: BRANDING                              */}
          {/* -------------------------------------------------- */}
          <div className="hidden md:flex md:w-5/12 bg-[#0F1C15] relative flex-col justify-between p-12 text-white">
            
            {/* Tactical Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-10" 
              style={{ 
                backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
              }} 
            />

            {/* Top: Branding */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-[#D4AF37] flex items-center justify-center rounded-sm shadow-lg shadow-black/20">
                  <Shield className="w-7 h-7 text-[#0F1C15]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-['Rajdhani'] font-bold text-xl tracking-[0.2em] text-[#D4AF37] uppercase leading-none">
                    The Colonel's
                  </h3>
                  <h3 className="font-['Rajdhani'] font-bold text-xl tracking-[0.2em] text-white uppercase leading-none mt-1">
                    Academy
                  </h3>
                </div>
              </div>

              {/* Dynamic Context Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={view}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="text-4xl font-bold font-['Rajdhani'] uppercase leading-tight mb-6">
                    {view === 'signin' 
                      ? "Return to Base." 
                      : "Begin Your Commission."}
                  </h1>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs border-l-2 border-[#D4AF37] pl-4">
                    {view === 'signin' 
                      ? "Access your dashboard, resume your course progress, and view latest staff duties."
                      : "Join Nepal's elite officer preparation platform. Track your progress and compete with the best."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: Stat */}
            <div className="relative z-10">
              <div className="bg-[#15231D] p-4 border border-[#D4AF37]/30 max-w-[200px]">
                <div className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold mb-1">Active Officers</div>
                <div className="text-2xl font-mono text-white">1,248</div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------- */}
          {/* RIGHT PANEL: FORM ACTION                          */}
          {/* -------------------------------------------------- */}
          <div className="w-full md:w-7/12 bg-[#f6f7f8] p-8 md:p-16 flex flex-col justify-center relative overflow-y-auto">
            
            <div className="w-full max-w-md mx-auto">
              
              {/* HEADER */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#0F1C15] mb-3">
                  {view === 'signin' ? 'HQ Access' : 'New Registration'}
                </h2>
                <p className="text-gray-500 text-sm">
                  {view === 'signin' ? (
                    <>
                      Enter your credentials to access the portal. <br/>
                      <span className="text-xs mt-1 block text-gray-400">Not an officer yet? <button onClick={() => setView('signup')} className="text-[#D4AF37] font-bold hover:underline">Apply for access here.</button></span>
                    </>
                  ) : (
                    <>
                      Fill in your details to create a cadet profile. <br/>
                      <span className="text-xs mt-1 block text-gray-400">Already have a profile? <button onClick={() => setView('signin')} className="text-[#D4AF37] font-bold hover:underline">Log in here.</button></span>
                    </>
                  )}
                </p>
              </div>

              {/* MODERN SSO GRID */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {/* Google Button */}
                <button 
                  className="flex items-center justify-center py-3.5 bg-white border border-gray-200 hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-200 rounded-xl group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>

                {/* Apple Button */}
                <button 
                  className="flex items-center justify-center py-3.5 bg-white border border-gray-200 hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-200 rounded-xl group"
                >
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74s2.22-.84 3.65-.67c.62.03 2.37.25 3.45 1.83-2.92 1.76-2.45 5.56.5 6.77-.55 1.4-1.28 2.72-2.68 4.3zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </button>

                {/* Facebook Button */}
                <button 
                  className="flex items-center justify-center py-3.5 bg-white border border-gray-200 hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-200 rounded-xl group"
                >
                  <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.603-2.797 2.898v1.074h5.306l-1.293 3.666h-4.013v7.98h-4.666a.023.023 0 0 1-.013 0Z" />
                  </svg>
                </button>
              </div>

              {/* DIVIDER */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
                  <span className="bg-[#f6f7f8] px-4 text-gray-400">
                    Or via Email
                  </span>
                </div>
              </div>

              {/* FORM FIELDS */}
              <form className="space-y-5">
                {view === 'signup' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Rank & Full Name</label>
                      <div className="relative">
                        <User className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" />
                        <input 
                          type="text" 
                          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all rounded-lg shadow-sm"
                          placeholder="e.g. Cpt. John Doe"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" />
                    <input 
                      type="email" 
                      className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all rounded-lg shadow-sm"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Password</label>
                    {view === 'signin' && (
                      <a href="#" className="text-xs text-gray-400 hover:text-[#0F1C15] transition-colors">Forgot Password?</a>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" />
                    <input 
                      type="password" 
                      className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all rounded-lg shadow-sm"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* GRADIENT ACTION BUTTON */}
                <button
                  type="button"
                  className="w-full py-4 mt-6 bg-gradient-to-r from-[#D4AF37] to-[#F4CA30] text-[#0F1C15] hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5 transition-all duration-300 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 group rounded-xl shadow-md"
                >
                  {view === 'signin' ? 'Secure Login' : 'Create Account'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Mobile View Toggle */}
                <div className="md:hidden text-center mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    {view === 'signin' ? "First time?" : "Returning user?"}
                    <button 
                      type="button"
                      onClick={() => setView(view === 'signin' ? 'signup' : 'signin')}
                      className="ml-2 font-bold text-[#0F1C15]"
                    >
                      {view === 'signin' ? 'Sign Up' : 'Sign In'}
                    </button>
                  </p>
                </div>

              </form>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoginModal;