import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';

interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  tier: 'free' | 'paid';
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  loginMock: (email: string, tier: 'free' | 'paid') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. FIREBASE (Google -> Paid Officer)
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName || 'Officer',
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
          tier: 'paid' 
        });
        localStorage.setItem('userTier', 'paid');
      } else {
        // 2. CHECK LOCAL STORAGE (Mock Login)
        const mockUser = localStorage.getItem('mockUser');
        if (mockUser) {
          setUser(JSON.parse(mockUser));
        } else {
          setUser(null);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginMock = (email: string, tier: 'free' | 'paid') => {
    const mockProfile: UserProfile = {
      uid: 'mock-user-id',
      displayName: tier === 'paid' ? 'Officer' : 'Cadet User',
      email: email,
      photoURL: null,
      tier: tier
    };
    setUser(mockProfile);
    localStorage.setItem('mockUser', JSON.stringify(mockProfile));
    localStorage.setItem('userTier', tier);
  };

  const logout = async () => {
    await firebaseSignOut(auth);
    localStorage.removeItem('mockUser');
    localStorage.removeItem('userTier');
    setUser(null);
    window.location.href = '/'; 
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginMock, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);