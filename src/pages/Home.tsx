import Hero from '../components/Hero';
import Programs from '../components/Programs';
import DailyIntel from '../components/DailyIntel';
import Faculty from '../components/Faculty';
import FinalCall from '../components/FinalCall';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Programs />
      <Faculty />
            <DailyIntel />

      <FinalCall />
      <Footer />
    </>
  );
};

export default Home;