import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';

// Pages
import Gateway from './pages/Gateway'; // Google-style Home
import ArmyPage from './pages/ArmyPage';
import PolicePage from './pages/PolicePage';
import APFPage from './pages/APFPage';
import FacultyPage from './pages/FacultyPage';

function App() {
  const location = useLocation();
  
  // Check if we are on the Gateway (Home) page
  const isGateway = location.pathname === '/';

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="antialiased font-sans text-gray-900 min-h-screen w-full overflow-x-hidden flex flex-col bg-white">
      
      {/* 1. HIDE PROMO BANNER ON GATEWAY */}
      {!isGateway && <PromoBanner />}

<Navbar />
      
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="/courses/army" element={<ArmyPage />} />
        <Route path="/courses/police" element={<PolicePage />} />
        <Route path="/courses/apf" element={<APFPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
      </Routes>

    </div>
  );
}

export default App;