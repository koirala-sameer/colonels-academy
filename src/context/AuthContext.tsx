import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';

interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  tier: 'free' | 'paid'; // This tracks if they bought a course
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
    // 1. FIREBASE LISTENER (For Google/Real Users)
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName || 'Officer',
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
          tier: 'paid' // Google users defaults to Paid for this demo
        });
      } else {
        // 2. CHECK LOCAL STORAGE (For Mock Users)
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

  // Function to manually log in a mock user
  const loginMock = (email: string, tier: 'free' | 'paid') => {
    const mockProfile: UserProfile = {
      uid: 'mock-user-id',
      displayName: tier === 'paid' ? 'Officer' : 'Cadet',
      email: email,
      photoURL: null,
      tier: tier
    };
    setUser(mockProfile);
    localStorage.setItem('mockUser', JSON.stringify(mockProfile));
  };

  // Logout function
  const logout = async () => {
    await firebaseSignOut(auth);
    localStorage.removeItem('mockUser');
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