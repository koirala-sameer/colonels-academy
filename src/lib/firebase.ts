import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";

// --- PASTE YOUR REAL CONFIG HERE ---
const firebaseConfig = {
  apiKey: "AIzaSyDrPheaIe6zXYP29Vr6uH0MV1CTXTxw61Y",
  authDomain: "the-colonels-academy.firebaseapp.com",
  projectId: "the-colonels-academy",
  storageBucket: "the-colonels-academy.firebasestorage.app",
  messagingSenderId: "565033986717",
  appId: "1:565033986717:web:25ae9de25f7ef047a90274",
  measurementId: "G-LGVWZLQ741"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Google Provider
export const googleProvider = new GoogleAuthProvider();

// Sign In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};




