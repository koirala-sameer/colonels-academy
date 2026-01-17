import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight, Shield, Globe, KeyRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signInWithGoogle } from '../lib/firebase';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { loginMock } = useAuth(); 
  const [view, setView] = useState<'signin' | 'signup'>('signin');
  const [isLoading, setIsLoading] = useState(false);
  
  // FORM STATE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 1. HANDLE GOOGLE (PAID USER)
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      // Context listener handles the rest
      console.log("Logged in as PAID Officer via Google");
      onClose();
      navigate('/dashboard'); 
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // 2. HANDLE EMAIL (FREE USER)
  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // FIXED: Updated credentials to 'officer@tca.com'
    if (email === 'officer@tca.com' && password === 'welcome') {
      
      // FIXED: Passed 'free' as the second argument to fix the TS Error
      loginMock(email, 'free'); 
      
      console.log("Logged in as FREE Cadet via Email");
      onClose(); 
      navigate('/dashboard'); 
    } else {
      alert("Invalid Demo Credentials. Try clicking 'Auto-fill'.");
    }
    setIsLoading(false);
  };

  // HELPER: Updated for new credentials
  const fillDemoCredentials = () => {
    setEmail('officer@tca.com');
    setPassword('welcome');
  };

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
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white hover:bg-gray-200 text-gray-500 hover:text-black transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {/* LEFT PANEL */}
          <div className="hidden md:flex md:w-5/12 bg-[#0F1C15] relative flex-col justify-between p-12 text-white">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-[#D4AF37] flex items-center justify-center rounded-sm shadow-lg shadow-black/20">
                  <Shield className="w-7 h-7 text-[#0F1C15]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-['Rajdhani'] font-bold text-xl tracking-[0.2em] text-[#D4AF37] uppercase leading-none">The Colonel's</h3>
                  <h3 className="font-['Rajdhani'] font-bold text-xl tracking-[0.2em] text-white uppercase leading-none mt-1">Academy</h3>
                </div>
              </div>
              <h1 className="text-4xl font-bold font-['Rajdhani'] uppercase leading-tight mb-6">
                {view === 'signin' ? "Welcome Back" : "Join the Ranks"}
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs border-l-2 border-[#D4AF37] pl-4">
                Access your command dashboard. Paid officers use Google SSO. Cadets use email.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full md:w-7/12 bg-[#f6f7f8] p-8 md:p-16 flex flex-col justify-center relative overflow-y-auto">
            <div className="w-full max-w-md mx-auto">
              
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#0F1C15] mb-3">
                  {view === 'signin' ? 'HQ Access' : 'New Registration'}
                </h2>
                <p className="text-gray-500 text-sm">
                  Use <strong>Google</strong> for Officer Access (Paid Demo).<br/>
                  Use <strong>Email</strong> for Cadet Access (Free Demo).
                </p>
              </div>

              {/* SSO GRID */}
              <div className="grid grid-cols-1 mb-8">
                <button 
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="flex items-center justify-center py-3.5 bg-white border border-gray-200 hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-200 rounded-xl group disabled:opacity-50"
                >
                  <Globe className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-sm font-bold text-gray-700">Continue with Google (Officer)</span>
                </button>
              </div>

              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
                  <span className="bg-[#f6f7f8] px-4 text-gray-400">Or Cadet Login</span>
                </div>
              </div>

              {/* EMAIL FORM */}
              <form onSubmit={handleEmailLogin} className="space-y-5">
                 {/* Name Field (Signup Only) */}
                 {view === 'signup' && (
                   <div>
                      <div className="relative">
                        <User className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" />
                        <input type="text" className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg" placeholder="Rank & Name" />
                      </div>
                   </div>
                 )}

                 {/* Email Field */}
                 <div>
                    <div className="relative">
                      <Mail className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" />
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all rounded-lg shadow-sm" 
                        placeholder="email@address.com" 
                      />
                    </div>
                 </div>

                 {/* Password Field */}
                 <div>
                    <div className="relative">
                      <Lock className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" />
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all rounded-lg shadow-sm" 
                        placeholder="••••••••" 
                      />
                    </div>
                 </div>

                 {/* DEMO HELPER BUTTON */}
                 <div className="flex justify-end">
                   <button 
                     type="button" 
                     onClick={fillDemoCredentials}
                     className="text-xs text-[#D4AF37] font-bold flex items-center gap-1 hover:underline"
                   >
                     <KeyRound className="w-3 h-3" /> Auto-fill Demo Cadet
                   </button>
                 </div>

                 <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 mt-6 bg-[#0F1C15] text-white hover:bg-[#1a2e24] transition-all duration-300 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 group rounded-xl shadow-md"
                >
                  {isLoading ? 'Authenticating...' : (view === 'signin' ? 'Access Portal' : 'Create Account')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Mobile View Toggle */}
                <div className="text-center mt-6 pt-6 border-t border-gray-200">
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