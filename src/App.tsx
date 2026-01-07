import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';

// Pages
import Home from './pages/Home';
import ArmyPage from './pages/ArmyPage';
import PolicePage from './pages/PolicePage';
import APFPage from './pages/APFPage';

function App() {
  const location = useLocation();

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="antialiased font-sans text-gray-900 min-h-screen w-full overflow-x-hidden flex flex-col bg-white">
      <PromoBanner />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/army" element={<ArmyPage />} />
        <Route path="/courses/police" element={<PolicePage />} />
        <Route path="/courses/apf" element={<APFPage />} />
      </Routes>

    </div>
  );
}

export default App;