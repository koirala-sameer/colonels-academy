import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight, Shield, Globe, KeyRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signInWithGoogle } from '../lib/firebase';

interface LoginModalProps { isOpen: boolean; onClose: () => void; }

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { loginMock } = useAuth();
  const [view, setView] = useState<'signin' | 'signup'>('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      onClose();
      navigate('/dashboard'); 
    } catch (error) { console.error(error); } finally { setIsLoading(false); }
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (email === 'officer@tca.com' && password === 'welcome') {
      loginMock(email, 'free');
      console.log("Logged in as FREE Cadet");
      onClose();
      // Free users stay on current page (likely Gateway or Sales Page)
      // We don't force them to Dashboard.
    } else {
      alert("Invalid Credentials. Use: officer@tca.com / welcome");
    }
    setIsLoading(false);
  };

  const fillDemo = () => { setEmail('officer@tca.com'); setPassword('welcome'); };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-[#000000]/60 backdrop-blur-sm cursor-pointer" />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-6xl h-[600px] bg-[#f6f7f8] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-6 right-6 z-20 p-2 bg-white rounded-full"><X className="w-5 h-5" /></button>
          
          {/* Left Panel */}
          <div className="hidden md:flex md:w-5/12 bg-[#0F1C15] relative flex-col justify-between p-12 text-white">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center"><Shield className="w-7 h-7 text-[#0F1C15]" /></div>
                <div><div className="font-bold text-xl tracking-widest text-[#D4AF37]">THE COLONEL'S</div><div className="font-bold text-xl">ACADEMY</div></div>
              </div>
              <h2 className="text-4xl font-['Rajdhani'] font-bold uppercase leading-tight mb-4">{view === 'signin' ? "Welcome Back" : "Join the Ranks"}</h2>
              <p className="text-gray-400">Secure access for Officer Cadets and Staff College candidates.</p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center relative overflow-y-auto">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-[#0F1C15] mb-2">{view === 'signin' ? 'HQ Access' : 'New Account'}</h2>
              <p className="text-gray-500 mb-8">Google for Paid Access. Email for Free Access.</p>
              
              <button onClick={handleGoogleLogin} className="w-full py-3.5 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-3 font-bold text-gray-700 hover:shadow-md transition-all mb-6">
                <Globe className="w-5 h-5 text-blue-600" /> Continue with Google (Paid)
              </button>

              <div className="relative mb-6 text-center"><span className="bg-[#f6f7f8] px-3 text-gray-400 text-xs font-bold uppercase relative z-10">Or via Email</span><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div></div>

              <form onSubmit={handleEmailLogin} className="space-y-4">
                {view === 'signup' && <div className="relative"><User className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" /><input className="w-full pl-12 pr-4 py-3 bg-white border rounded-xl" placeholder="Full Name" /></div>}
                <div className="relative"><Mail className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" /><input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-white border rounded-xl" placeholder="Email" /></div>
                <div className="relative"><Lock className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" /><input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-white border rounded-xl" placeholder="Password" /></div>
                
                <div className="flex justify-end"><button type="button" onClick={fillDemo} className="text-xs text-[#D4AF37] font-bold flex items-center gap-1 hover:underline"><KeyRound className="w-3 h-3" /> Auto-fill Demo</button></div>
                
                <button type="submit" disabled={isLoading} className="w-full py-4 bg-[#0F1C15] text-white rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2">{isLoading ? 'Processing...' : (view === 'signin' ? 'Login' : 'Create Account')}<ArrowRight className="w-4 h-4" /></button>
              </form>
              <div className="text-center mt-6 pt-6 border-t border-gray-200"><p className="text-sm text-gray-500">{view === 'signin' ? "New here?" : "Already have an account?"}<button type="button" onClick={() => setView(view === 'signin' ? 'signup' : 'signin')} className="ml-2 font-bold text-[#0F1C15]">{view === 'signin' ? 'Sign Up' : 'Sign In'}</button></p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoginModal;