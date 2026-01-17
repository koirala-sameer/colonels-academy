import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requirePaid?: boolean; // Optional flag to enforce Paid Tier
}

const ProtectedRoute = ({ children, requirePaid = false }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Wait for Auth check to finish
    if (!loading) {
      // 2. If not logged in -> Kick to Home
      if (!user) {
        navigate('/', { replace: true });
        return;
      }

      // 3. If "Paid" is required but user is "Free" -> Kick to Home
      if (requirePaid && user.tier !== 'paid') {
        alert("Access Restricted: Officers Only."); // Optional feedback
        navigate('/', { replace: true });
        return;
      }
    }
  }, [user, loading, navigate, requirePaid]);

  // Show nothing while checking (or a spinner)
  if (loading) return null; 
  
  // If user passed all checks, render the page
  return user ? <>{children}</> : null;
};

export default ProtectedRoute;