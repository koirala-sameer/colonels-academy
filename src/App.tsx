import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';

// Pages
import Gateway from './pages/Gateway';
import ArmyPage from './pages/ArmyPage';
import PolicePage from './pages/PolicePage';
import APFPage from './pages/APFPage';
import FacultyPage from './pages/FacultyPage';

function App() {
  const location = useLocation();
  
  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="antialiased font-sans text-gray-900 min-h-screen w-full overflow-x-hidden flex flex-col bg-white">

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